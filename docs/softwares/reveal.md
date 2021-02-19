# Reveal

Reveal-md uses revel.js under the hood but it allows your slide as mark-down and automatically converts them into html which is revel.js supports.

## Installation

```
npm i reveal-md
```

## Run

```
"scripts": {
    "start": "reveal-md --theme night --highlightTheme hybrid --port 1337 --css styles.css README.md"
  }
```

## style.css

```
.vue-logo {
  height: 120px !important;
  width: auto !important;
  margin-bottom: -5px !important;
}

.vue-logo-small {
  height: 40px !important;
  width: auto !important;
  margin-bottom: -5px !important;
}

img {
  background: none !important;
  border: none !important;
  box-shadow: none !important;
  width: auto !important;
}

/* code {
  font-size: 2em !important;
  line-height: 2em !important;
} */

.emoji {
  font-size: 1.5em;
}

.dark-bg {
  background: rgba(0, 0, 0, 0.6);
}

small {
  font-size: 0.5em !important;
}

.mt {
  margin-top: 1em !important;
}

.van-video {
  width: 30%;
}
```

### Example

- --- : New Slides

## Links

[documentation](https://revealjs.com/)
