# Updates to Ionic 4.0.0-rc.0

- Check out `package.json`, most of the packages where updated.
- The Ionic Team removed `href` for buttons or links, you should change it for `routerLink` instead.

For example, the home page's navigation bar looked like this:

```html
<ion-header>
  <ion-toolbar>
    <ion-title></ion-title>
    <ion-buttons slot="end">
      <ion-button href="/profile">
        <ion-icon slot="icon-only" name="person"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
```

You should change it to look like this:

```html
<ion-header>
  <ion-toolbar>
    <ion-title></ion-title>
    <ion-buttons slot="end">
      <ion-button routerLink="/profile">
        <ion-icon slot="icon-only" name="person"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
```
