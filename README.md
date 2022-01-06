# Al Be Ga

## Install

```bash
npm install --save-dev @me5on/albega
```

## Import as CSS

You can import it in your HTML file<sup>*</sup> as:

```html

<link href="./node_modules/@me5on/albega/css/index.css" rel="stylesheet">

```

<sup>*</sub> **NB**: You may have to check whichever path resolution is necessary for your project

## Import as SCSS

The simplest way to use it in your main SCSS file:

```scss
@use '~@me5on/albega' with (
    $main--al: #61dafb,
);
```

For more control, you can import it partially:

```scss
@use '~@me5on/albega/scss/theme' with (
    $main--al: #61dafb,
);
@use '~@me5on/albega/scss/root';
@use '~@me5on/albega/scss/mod';

```
