# Quasar

## Installation

### Install CLI Tools

```bash
$ yarn global add @quasar/cli
# or
$ npm install -g @quasar/cli
```

## Cli Commands

- **Create Project** : sudo quasar create \<folder_name\> sudo chown -R \$USER ~/www
- **Run Server** : quasar dev
- **Build Project** : quasar build
- **Create Page** : quasar new [p\|page] <page_file_name>
- **Create Layout** : quasar new [l\|layout] <layout_file_name>
- **Create Component** : quasar new [c\|component] <component_file_name>
- **Create Boot File** : quasar new [b\|boot] <boot_name>
- **Create Store** : quasar new [s\|store] <store_module_name>
- **Display configuration** : quasar info
- **Check Update Available** : quasar upgrade
- **Update Quasar** : quasar upgrade --install
- **Change Mode** : quasar dev -m electron
- **Remove Mode** : quasar mode remove electron
- **List all extensions** : quasar ext
- **Add Extension** : quasar ext add \<plugin\>
- **Remove Extension** : quasar ext remove \<plugin\>

## Extension

- **@quasar/dotenv** : Environment Note : create .env.production file into **parent folder and not inside the src**
- **@quasar/qmarkdow** : Markdown support .md and .vmd files

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

### Kick Start

```bash
npm install --save vuex-persistedstate
npm install vue2-filters
$ npm install vue-i18n
quasar ext add @quasar/dotenv
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
import enUS from "./en";
import mr from "./mr";
import numberFormats from "./number-formats";

const messages = {
  en: enUS,
  mr,
};

export { messages, numberFormats };
```

File : src/boot/i18n.js

```js
import Vue from "vue";
import VueI18n from "vue-i18n";
import { messages, numberFormats } from "src/i18n";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
  numberFormats,
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

## Icongenie

You should be above src folder

```
sudo npm install -g @quasar/icongenie
icongenie generate -i src/statics/logo.png
icongenie verify
```

- icongenie verify : verify mode along with images type and size
- icongenie generate -i : to generate Icons

## FAQ

### Whats the difference between static and assets folder ?

**statis folder** : Root-relative URLs (e.g. /logo.png – where ‘/’ is your publicPath) or logo.png are not processed at all. This should be placed in public/. These won’t be processed by Webpack at all. The statics folder is simply copied over to the distributable folder as-is.

**assets** : In \*.vue components, all your templates and CSS are parsed by vue-html-loader and css-loader to look for asset URLs. For example, in

```
<img src="./logo.png"> and background: url(./logo.png), "./logo.png"
```

is a relative asset path and will be resolved by Webpack as a module dependency.

Because logo.png is not JavaScript, when treated as a module dependency, we need to use url-loader and file-loader to process it. Quasar CLI has already configured these webpack loaders for you, so you basically get features such as filename fingerprinting and conditional base64 inlining for free, while being able to use relative/module paths without worrying about deployment.
