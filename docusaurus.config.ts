/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


import replaceDocVars from './config/remark/replace-doc-vars';

import geodeVars from './config/doc-vars/geode';
import cppVars from './config/doc-vars/cpp';
import dotnetVars from './config/doc-vars/dotnet';


const projectName = "geode";
const mainRepoName = "geode";
const siteRepoName = "geode-site";

const config: Config = {
  title: `Providing low latency, high concurrency data management solutions since 2002.`,
  tagline: `Providing low latency, high concurrency data management solutions since 2002.`,
  favicon: 'img/favicon.ico',

  url: `https://${projectName.toLowerCase()}.apache.org/`,
  baseUrl: '/',

  //   TODO @harmoncoffee fix after all broken doc links are fixed.
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
          docs: {
              path: 'docs/geode',
              routeBasePath: 'docs',
              sidebarPath: require.resolve('./sidebars.geode.ts'),
              editUrl: `https://github.com/apache/${siteRepoName}/tree/main/`,
              beforeDefaultRemarkPlugins: [
                  [replaceDocVars, {pluginId: 'default', valuesByVersion: geodeVars}],
              ]
          },
        blog: {
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
          showReadingTime: true,
          editUrl: `https://github.com/apache/${siteRepoName}/tree/main/`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'community',
                path: 'community',
                routeBasePath: 'community',
                sidebarPath: './community/sidebars.ts',
                editUrl: `https://github.com/apache/${siteRepoName}/tree/main/`,
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'geode_native_cpp',
                path: 'docs/geode_native_cpp',
                routeBasePath: 'docs/geode_native_cpp',
                sidebarPath: require.resolve('./sidebars.geode_native_cpp.ts'),
                editUrl: `https://github.com/apache/${siteRepoName}/tree/main/`,
                showLastUpdateTime: true,
                showLastUpdateAuthor: true,
                beforeDefaultRemarkPlugins: [
                    [replaceDocVars, {pluginId: 'default', valuesByVersion: geodeVars}],
                ]
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'geode_native_dotnet',
                path: 'docs/geode_native_dotnet',
                routeBasePath: 'docs/geode_native_dotnet',
                sidebarPath: require.resolve('./sidebars.geode_native_dotnet.ts'),
                editUrl: `https://github.com/apache/${siteRepoName}/tree/main/`,
                showLastUpdateTime: true,
                showLastUpdateAuthor: true,
                beforeDefaultRemarkPlugins: [
                    [replaceDocVars, {pluginId: 'default', valuesByVersion: geodeVars}],
                ]
            },
        ],
    ],

  themeConfig: {
    image: 'img/logo.png',
    navbar: {
      logo: {
        alt: 'Apache Geode™',
        src: 'img/logo.png',
        srcDark: 'img/logo-dark.png',
      },
      items: [
          {
              type: 'docSidebar',
              sidebarId: 'community',
              position: 'left',
              label: 'Community',
              docsPluginId: 'community',
          },
          {
              href: `https://issues.apache.org/jira/browse/GEODE/`,
              label: 'Issue Tracker',
              position: 'left',
          },
          {
              href: `https://cwiki.apache.org/confluence/display/geode/`,
              label: 'Wiki',
              position: 'left',
          },
          {
              type: 'dropdown',
              label: 'Docs',
              position: 'right',
              items: [
                  { type: 'doc', docsPluginId: 'default', docId: 'about_geode', label: 'Geode' },
                  { type: 'doc', docsPluginId: 'geode_native_cpp', docId: 'about_geode', label: 'Geode Native (C++)' },
                  { type: 'doc', docsPluginId: 'geode_native_dotnet', docId: 'about_geode', label: 'Geode Native (.NET)' },
              ],
          },
        {to: '/blog', label: 'Blog', position: 'right'},
        {
          type: 'dropdown',
          label: 'ASF',
          position: 'right',
          items: [
            {
              label: 'Foundation',
              to: 'https://www.apache.org/'
            },
            {
              label: 'License',
              to: 'https://www.apache.org/licenses/'
            },
            {
              label: 'Events',
              to: 'https://www.apache.org/events/current-event.html'
            },
            {
              label: 'Privacy',
              to: 'https://privacy.apache.org/policies/privacy-policy-public.html'
            },
            {
              label: 'Security',
              to: 'https://www.apache.org/security/'
            },
            {
              label: 'Sponsorship',
              to: 'https://www.apache.org/foundation/sponsorship.html'
            },
            {
              label: 'Thanks',
              to: 'https://www.apache.org/foundation/thanks.html'
            },
            {
              label: 'Code of Conduct',
              to: 'https://www.apache.org/foundation/policies/conduct.html'
            }
          ]
        },
        {
          href: `https://github.com/apache/${mainRepoName}`,
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [],
      logo: {
        width: 200,
        src: "/img/asf_logo.svg",
        href: "https://www.apache.org/",
        alt: "ASF logo"
      },
      copyright: `<div>
      <a href="https://www.apache.org" target="_blank"></a>
                <p>Copyright © 2026 The Apache Software Foundation, Licensed under the Apache License, Version 2.0.</p>
                <p> Apache Geode, Apache, Geode, the Apache logo, and the Apache Geode project logo are either registered trademarks or trademarks of The Apache Software Foundation in the United States and other countries.</p>
                <p>Modified and modernized for the Apache Geode 💎 project by <a href="https://github.com/harmoncoffee">@harmoncoffee</a> and <a href="https://github.com/semioticrobotic">@semioticrobotic</a>.</p>
      </div>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
