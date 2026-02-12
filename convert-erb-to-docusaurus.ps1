param(
  # Folder to scan
  [Parameter(Mandatory=$true)]
  [string]$InputDir,

  # Folder to write converted files
  [Parameter(Mandatory=$true)]
  [string]$OutputDir,

  # Keep original directory structure under OutputDir
  [switch]$PreserveStructure,

  # Output extension: md or mdx
  [ValidateSet("md","mdx")]
  [string]$OutExt = "md"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Convert-LinkTo([string]$text) {
  # Converts: <%= link_to "Text", "url" %>  --> [Text](url)
  $pattern = '<%=\s*link_to\s+("([^"\\]*(\\.[^"\\]*)*)"|''([^''\\]*(\\.[^''\\]*)*)'')\s*,\s*("([^"\\]*(\\.[^"\\]*)*)"|''([^''\\]*(\\.[^''\\]*)*)'')\s*%>'
  return ($text -replace $pattern, {
    param($m)
    # Capture groups:
    # 2 = double-quoted text OR 4 = single-quoted text
    # 7 = double-quoted url  OR 9 = single-quoted url
    $label = if ($m.Groups[2].Value) { $m.Groups[2].Value } else { $m.Groups[4].Value }
    $url   = if ($m.Groups[7].Value) { $m.Groups[7].Value } else { $m.Groups[9].Value }
    "[$label]($url)"
  })
}

function Convert-ImageTag([string]$text) {
  # Converts: <%= image_tag "path.png", alt: "Alt" %>  --> ![Alt](path.png)
  # If alt missing, uses empty alt: ![](path.png)
  $pattern = '<%=\s*image_tag\s+("([^"]+)"|''([^'']+)'')(?<opts>[^%]*)%>'
  return ($text -replace $pattern, {
    param($m)
    $path = if ($m.Groups[2].Value) { $m.Groups[2].Value } else { $m.Groups[3].Value }

    $opts = $m.Groups["opts"].Value
    $alt = ""
    if ($opts -match 'alt:\s*("([^"]+)"|''([^'']+)'')') {
      $alt = if ($Matches[2]) { $Matches[2] } else { $Matches[3] }
    }
    "![${alt}]($path)"
  })
}

function Convert-Partial([string]$text) {
  # Converts: <%= partial "some/file" %> -> HTML comment marker
  $pattern = '<%=\s*partial\s+("([^"]+)"|''([^'']+)'')\s*%>'
  return ($text -replace $pattern, {
    param($m)
    $p = if ($m.Groups[2].Value) { $m.Groups[2].Value } else { $m.Groups[3].Value }
    "<!-- TODO(docusaurus): replace partial '$p' (convert to MDX import or inline content) -->"
  })
}

function Strip-Erb([string]$text) {
  # Remove ERB comments first: <%# ... %>
  $text = $text -replace '<%#([\s\S]*?)%>', ''

  # Remove ERB blocks: <% ... %> (non-output)
  $text = $text -replace '<%(?!\=)([\s\S]*?)%>', ''

  # For any remaining output tags <%= ... %> we don't explicitly handle,
  # replace with a TODO marker so you can find them later.
  $text = $text -replace '<%=\s*([\s\S]*?)\s*%>', {
    param($m)
    $expr = ($m.Groups[1].Value).Trim()
    "<!-- TODO(docusaurus): ERB expression removed: $expr -->"
  }

  return $text
}

function Convert-OneFile([string]$inFile, [string]$outFile) {
  $raw = Get-Content -LiteralPath $inFile -Raw -Encoding UTF8

  # 1) Convert the common helpers we can safely map
  $raw = Convert-LinkTo $raw
  $raw = Convert-ImageTag $raw
  $raw = Convert-Partial $raw

  # 2) Strip/neutralize remaining ERB
  $raw = Strip-Erb $raw

  # 3) Normalize line endings for Windows (optional; Docusaurus doesn't care)
  $raw = $raw -replace "`r?`n", "`r`n"

  $outDir = Split-Path -Parent $outFile
  if (!(Test-Path -LiteralPath $outDir)) {
    New-Item -ItemType Directory -Path $outDir | Out-Null
  }

  Set-Content -LiteralPath $outFile -Value $raw -Encoding UTF8
}

if (!(Test-Path -LiteralPath $InputDir)) {
  throw "InputDir not found: $InputDir"
}

if (!(Test-Path -LiteralPath $OutputDir)) {
  New-Item -ItemType Directory -Path $OutputDir | Out-Null
}

$files = Get-ChildItem -LiteralPath $InputDir -Recurse -File -Filter "*.html.md.erb"

foreach ($f in $files) {
  $relative = Resolve-Path -LiteralPath $f.FullName | ForEach-Object {
    $_.Path.Substring((Resolve-Path -LiteralPath $InputDir).Path.Length).TrimStart('\')
  }

  $targetRel = if ($PreserveStructure) { $relative } else { $f.Name }

  # Change extension: foo.html.md.erb -> foo.md (or foo.mdx)
  $targetRel = $targetRel -replace '\.html\.md\.erb$', ".$OutExt"

  $outPath = Join-Path $OutputDir $targetRel

  Convert-OneFile -inFile $f.FullName -outFile $outPath
  Write-Host "Converted: $($f.FullName) -> $outPath"
}

Write-Host "Done. Converted $($files.Count) files."
