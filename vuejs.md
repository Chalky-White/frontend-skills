# VUE.JS


## Utiliser vue.js  

2 méthodes : création manuelle ou avec le Vue-CLI

### Création manuelle

Ajouter vue.js dans le ___html___ : ``` <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>``` 
```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> <!--ajout de vue -->

<div id="app">

<h1> Titre</h1>
<p>

Ici je peux utiliser Vue.js !</p>
</div>
```


Initialiser vue.js grâce à la variable ___vue___ dans le ___fichier  js___ : 

``` javascript
 new Vue({
    el: '#elementHtml' //l'id utilisé est celui de la div html ciblée pour utiliser du vue

 })
 ```

 ### Avec le Vue-CLI

 Se positionner dans le dossier voulu et lancer la commande 
``npm install -g @vue/cli``
Il peut être utile de nettoyer le cache si d'autres projets s'y trouvent
``sudo npm cache clean --force``

Pour lancer l'interface dans le navigateur
``vue ui``


## Afficher des variables 


Les variables sont utilisées à l'intérieur de l'objet ___data___ qui va contenir toutes les propriétés. 

``` javascript
js
 new Vue({
    el: '#elementHtml' ,
    data: {
        title: 'Titre de ma page'
}
 })
```

 On utilise {{ ... }} pour afficher les propriétés dans le ___html___: 

 ```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> <!--ajout de vue -->

<div id="app">

<h1> {{ title }}</h1>
<p>

Ici je peux utiliser Vue.js !</p>
</div>
```

## Gérer des méthodes

Les méthodes sont déclarées dans une nouvelle propriété du composant ___Vue___ , appelée ___methods___ .
Ici on ajoute un bouton qui appelera au clic la méthode reversTitle. 
L'instruction ``v-on`` sert à écouter les évènements du DOM afin d'éxécuter du JavaScript.

```html
<div id="app">
<h1>{{ title }}</h1>
<button v-on:click="reverseTitle">Inverser</button>
</div>
```


```js
new Vue({
el: '#app',
data: {
title: 'Vue is easy'
},
methods: {
reverseTitle: function() {
this.title = this.title.split('').reverse().join('');
}
}
})
```

## Créer de nouvelles pages avec le router


Le routeur est la partie qui synchronise la vue actuellement affichée avec le contenu de la barre d'adresse du navigateur.

Il est conseillé de créer un dossier ``views`` dans le dossier ``src`` , lui même composé d'un dossier par page. Pour chaque page on aura un fichier `.vue`, un fichier ``.js`` et un fichier ``.css``.

Afin de lier ces pages au projet, il faut utiliser le `vue-router` , qui permettra égalemement de définir l'architecture.

Pour l'installer, lancer la commande `npm install vue-router` 

__OU__ 

inclure Vue Router en utilisant une balise script
```
 <script src="https://unpkg.com/vue-router"></script> 

 ```

### Dans le fichier router.js

```js
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
          // redirect: { name: "children" }, --- SI ENFANT ! ---
      // children: [
      //   {
      //     path: "children",
      //     name: "home",
      //     component: Home
      //   }
      // ]
    },
    {
      ...
    }
  ]
})
```

### Dans le fichier main.js

