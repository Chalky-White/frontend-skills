<template>
  <div class="hello">
    <Header></Header>
    <h1>{{ msg }}</h1>
    <p>
      Algorithmie, HTML, CSS, Javascript et Vue.js
    </p>
    <br />
    <img alt="Transmetropolitan" src="../../assets/transmetropolitan.png" />

    <div class="row ">
      <div class="col-xs-2 col-sm-2">
        <router-link :to="{ name: 'Algo' }">
          <h3>Algorithmie</h3>
        </router-link>

        <a
          href="https://openclassrooms.com/fr/courses/1467201-algorithmique-pour-lapprenti-programmeur"
          target="_blank"
          rel="noopener"
          ><button type="button" class="btn btn-info">
            OC - Algorithmique pour l'apprenti programmeur
          </button></a
        >
        <a
          href="https://www.grafikart.fr/formations/apprendre-algorithmique"
          target="_blank"
          rel="noopener"
          ><button type="button" class="btn btn-secondary">
            Grafikart - Formation à l'algorithmique
          </button></a
        >
        <a href="http://pise.info/algo/" target="_blank" rel="noopener"
          ><button type="button" class="btn btn-info">
            Algorithmique et programmation pour non-matheux
          </button></a
        >
      </div>

      <div class="col-xs-2 col-sm-2">
        <router-link :to="{ name: 'Html' }"><h3>HTML</h3></router-link>

        <a
          href="https://developer.mozilla.org/fr/docs/Web/HTML"
          target="_blank"
          rel="noopener"
          ><button type="button" class="btn btn-secondary">
            MDN - Documentation
          </button></a
        >
        <a
          href="https://jaetheme.com/balises-html5/#address"
          target="_blank"
          rel="noopener"
          ><button type="button" class="btn btn-info">
            Liste complète des balises HTML
          </button></a
        >
        <a
          href="https://learn.freecodecamp.org/responsive-web-design/basic-html-and-html5"
          target="_blank"
          rel="noopener"
          ><button type="button" class="btn btn-secondary">
            Exercices FreeCodeCamp
          </button></a
        >
      </div>

      <div class="col-xs-2 col-sm-2">
        <h3>CSS</h3>
        <a
          href="https://jaetheme.com/blog/flexbox/"
          target="_blank"
          rel="noopener"
          ><button type="button" class="btn btn-secondary">
            Flexbox - Mémo
          </button></a
        >
        <a
          href="https://getbootstrap.com/docs/4.3/getting-started/introduction/"
          target="_blank"
          rel="noopener"
          ><button type="button" class="btn btn-info">Bootstrap</button></a
        >

        <a
          href="https://www.grafikart.fr/tutoriels/differences-sass-scss-329"
          target="_blank"
          rel="noopener"
          ><button type="button" class="btn btn-secondary">
            Différence entre SCSS et SASS
          </button></a
        >
      </div>

      <div class="col-xs-2 col-sm-2">
        <h3>JavaScript</h3>

        <a
          href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
          target="_blank"
          rel="noopener"
          ><button type="button" class="btn btn-secondary">
            Parcours d'apprentissage MDN
          </button></a
        >
        <a
          href="https://ericelliottjs.com/premium-content/lesson-pure-functions"
          target="_blank"
          rel="noopener"
          ><button type="button" class="btn btn-info">
            Les fonctions pures
          </button></a
        >

        <a
          href="https://www.ma-no.org/en/programming/javascript/10-javascript-tips-and-tricks-you-should-know"
          target="_blank"
          rel="noopener"
          ><button type="button" class="btn btn-secondary">
            10 Javascript Tips and Tricks You Should Know
          </button></a
        >
        <a
          href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Index_des_m%C3%A9thodes"
          target="_blank"
          rel="noopener"
          ><button type="button" class="btn btn-info">
            Liste exhaustive des méthodes
          </button></a
        >
        <a
          href="https://edabit.com/challenges/javascript"
          target="_blank"
          rel="noopener"
          ><button type="button" class="btn btn-secondary">
            Exercices Edabit
          </button></a
        >
      </div>

      <div class="col-xs-2 col-sm-2">
        <h3>Vue.js</h3>

        <a
          href="https://blog.ippon.fr/2017/04/24/vue-js-2-0-petit-tutoriel-volume-1/"
          target="_blank"
          rel="noopener"
          ><button type="button" class="btn btn-info">Tutoriel</button></a
        >
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          ><button type="button" class="btn btn-secondary">
            vue-devtools
          </button></a
        >
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          ><button type="button" class="btn btn-info">vue-loader</button></a
        >
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          ><button type="button" class="btn btn-secondary">
            awesome-vue
          </button></a
        >
      </div>
      <div class="col-xs-2 col-sm-2">
        <h3>Conception</h3>

        <a
          href="https://medium.com/@owayalex/programmation-fonctionnelle-1-les-3-grands-principes-2e1d948fd205"
          target="_blank"
          rel="noopener"
        >
          <button type="button" class="btn btn-info">
            La programmation fonctionnelle
          </button></a
        >
        <a
          href="https://dev.to/pluralsight/my-5-favorite-software-design-principles-4ech"
          target="_blank"
          rel="noopener"
          ><button type="button" class="btn btn-secondary">
            Cinq principes de conception
          </button></a
        >
      </div>
      <div class="col-xs-2 col-sm-2">
        <h3>UI</h3>

        <a
          href="https://medium.com/@owayalex/programmation-fonctionnelle-1-les-3-grands-principes-2e1d948fd205"
          target="_blank"
          rel="noopener"
        >
          <button type="button" class="btn btn-info">
            La programmation fonctionnelle
          </button></a
        >
        <a
          href="https://dev.to/pluralsight/my-5-favorite-software-design-principles-4ech"
          target="_blank"
          rel="noopener"
          ><button type="button" class="btn btn-secondary">
            Cinq principes de conception
          </button></a
        >
      </div>
    </div>
  </div>
</template>

<script src="./home.js"></script>

<style scoped lang="scss" src="./home.scss"></style>
