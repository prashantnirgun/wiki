# Quasar

## Installation

### Install CLI Tools

```bash
$ yarn global add @quasar/cli
# or
$ npm install -g @quasar/cli
```

## Cli Commands

| Action                 | Syntax                                          |
| ---------------------- | ----------------------------------------------- |
| Create Project         | sudo quasar create \<folder_name\>              |
|                        | sudo chown -R \$USER ~/www                      |
| Run Server             | quasar dev                                      |
| Build Project          | quasar build                                    |
| Create Page            | quasar new [p\|page] <page_file_name>           |
| Create Layout          | quasar new [l\|layout] <layout_file_name>       |
| Create Component       | quasar new [c\|component] <component_file_name> |
| Create Boot File       | quasar new [b\|boot] <boot_name>                |
| Create Store           | quasar new [s\|store] <store_module_name>       |
| Display configuration  | quasar info                                     |
| Check Update Available | quasar upgrade                                  |
| Update Quasar          | quasar upgrade --install                        |
| Change Mode            | quasar dev -m electron                          |
| Remove Mode            | quasar mode remove electron                     |
| List all extensions    | quasar ext                                      |
| Add Extension          | quasar ext add \<plugin\>                       |
| Remove Extension       | quasar ext remove \<plugin\>                    |

## Extension

| Name             | Description                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------- |
| @quasar/dotenv   | Environment Note : create .env.production file into **parent folder and not inside the src** |
| @quasar/qmarkdow | Markdown support .md and .vmd files                                                          |

## Best Practises

### Page Scroller

File : src/layout/MainLayout.vue

```html
<q-page-container>
  <router-view />
  <!-- place QPageScroller at end of page -->
  <q-page-scroller
    position="bottom-left"
    :scroll-offset="150"
    :offset="[18, 18]"
  >
    <q-btn fab icon="keyboard_arrow_up" color="accent" />
  </q-page-scroller>
</q-page-container>
```

### i18n Support

#### Installation

```bash
$ yarn add vue-i18n
# or:
$ npm install vue-i18n
```

File : src/i18n/index.js

```js
import enUS from './en';
import mr from './mr';
import numberFormats from './number-formats';

const messages = {
  en: enUS,
  mr
};

export { messages, numberFormats };
```

File : src/boot/i18n.js

```js
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { messages, numberFormats } from 'src/i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
  numberFormats
});

export default async ({ app, Vue }) => {
  app.i18n = i18n;
};

export { i18n };
```

File : src/router/index.js

```js
export default function(/* { store, ssrContext } */) {
  const Router = new VueRouter(...);

  // use beforeEach route guard to set the language
  Router.beforeEach((to, from, next) => {
    // use the language from the routing param or default language
    let language = to.params.lang;
    if (!language) {
      language = "en-us";
    }

    // set the current language for i18n.
    i18n.locale = language;
    next();
  });

  return Router;
}
```

#### How to use

```html
<span class="q-ml-sm text-capitalize">{{ $t("site_name") }}</span>
```

## .htaccess

```bash
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
