[<img src="https://geode.apache.org/img/Apache_Geode_logo.png" align="center"/>](http://geode.apache.org)

# Apache Geode Website and Project Documentation

<!--
Licensed to the Apache Software Foundation (ASF) under one or more
contributor license agreements.  See the NOTICE file distributed with
this work for additional information regarding copyright ownership.
The ASF licenses this file to You under the Apache License, Version 2.0
(the "License"); you may not use this file except in compliance with
the License.  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

This repository contains the source files for the [Apache Geode website](https://geode.apache.org). The project website also contains the documentation for the Apache Geode project.

The project website is built with [Docusaurus](https://docusaurus.io/).

## Update procedures


### Updating the website
Source code for the Apache Geode project website is stored in the `src` folder.



### Updating the project documentation
Apache Geode project document is stored as Markdown files in the `docs` folder.



### Adding a blog post
Posts on the Apache Geode project blog are stored as Markdown files in the `blog` folder.

To add a new blog post:

1. Create a new Markdown file in the `blog` folder. The filename should follow the convention `YYYY-MM-DD-title-slug.md`.
2. Add the appropriate header to the top of the Markdown file. Use an [existing blog post](blog/2026-02-12-modernize-geode-site.md) as a guide.
3. If you're a new author, add your bio details to `authors.yml`.
4. Compose your blog post, open a pull request, and as a project maintainer to review it.

## License
This project is licensed under the [Apache License 2.0](LICENSE). See [NOTICE](NOTICE) for additional details.
