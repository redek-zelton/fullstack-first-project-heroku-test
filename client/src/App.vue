<template>
  <html>
    <div class="main-header">
      <header>
        <div id="main-title">
            <div id="logo">
                <img src="@/assets/images/logo-quickscience-white.png" width="100" height="100" alt="Logo QuickScience" />
                <div id="logo-text">
                    <h1>QuickScience</h1>
                    <h2 style="font-size: 1em;">Le résumé des news scientifiques à connaitre !</h2>
                </div>
            </div>
        </div>
        <nav>
            <ul>
                <li><router-link :to="{ name: 'Home' }"><i class="fas fa-home"></i></router-link></li>
                <li><a href="#">Informatique <i class="fas fa-sort-down"></i></a>
                    <ul class="drop">
                        <li><router-link :to="{ name: 'BrainstormInfo' }">Brainstorming</router-link></li>
                        <li><router-link :to="{ name: 'Csharp' }">C#</router-link></li>
                        </ul>
                </li>
                <li><a href="#">Finance <i class="fas fa-sort-down"></i></a>
                    <ul class="drop">
                        <li><router-link :to="{ name: 'MarcheFinancier' }">Marché Financier</router-link></li>
                        <li><router-link :to="{ name: 'Crypto' }">Cryptomonnaie</router-link></li>
                        </ul>
                </li>
                <li><a href="#">Physique <i class="fas fa-sort-down"></i></a>
                    <ul class="drop">
                        <li><router-link :to="{ name: 'PhysiqueMemo' }">Memo Physique</router-link></li>
                        <li><router-link :to="{ name: 'SecretPhysique' }">Secret Physique</router-link></li>
                        </ul>
                </li>
            </ul>
        </nav>
        <div id="sign-in-out" v-if="!isLoggedIn">
            <router-link :to="{ name: 'Sign' }">Sign In &nbsp;<i class="fas fa-sign-in-alt"></i></router-link>
        </div>
        <div id="sign-in-out"
          v-if="isLoggedIn"
          @click="removeToken()"
        >
            <router-link :to="{ name: 'Home' }">Sign Out &nbsp;<i class="fas fa-sign-out-alt"></i></router-link>
        </div>
        </header>
    </div>
  <router-view/>
  </html>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'App',

  computed: {
    ...mapState({
      user: state => state.user.data
    }),
    ...mapGetters(['isLoggedIn'])
  },

  methods: {
    removeToken () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
html {
    font-family : 'Baloo Tammudu 2', cursive, Calibri, Arial, Verdana, Geneva, Tahoma, sans-serif;
}

body {
    background-color: #ffd59e;
}

/* HEADER */

header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.main-header {
    background-color: #202020;
    color: #ffffff;
    padding-bottom: 1px;
    box-shadow: 0px 1px 15px black;
}

#main-title {
    display: flex;
    flex-direction: column;
}

#logo {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#logo-text {
    font-family: 'Bad Script', cursive;
}

/* SIGN-IN and NAV */

#sign-in-out a {
    margin-right: 60px;
    color: #6fffdb;
    text-decoration: none;
}

#sign-in-out a:hover {
    color: #ffd59e;
}

ul {
  list-style-type: none;
}

nav ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
}

nav li {
    margin-right: 20px;
}

nav a {
    color: #6fffdb;
    text-decoration: none;
}

nav a:hover {
    color: #ffd59e;
}

/* DROP */

.drop {
    list-style-type: none;
    margin: 0em;
    padding: 0em;
    position: absolute;
    display: none;
}

.drop >li >a {
    text-align: center;
    color:white;
    text-decoration: none;
    display: block;
    padding: 15px;
    font-size: medium;
    background-color: #686868;
}

.drop >li > a:hover {
    background-color: lavender;
    color: #686868;
}

nav >ul >li:hover .drop {
    display: block;
}

/* MAIN and ARTICLE */

#theme {
    font-size: 3em;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    font-family: 'Bad Script', cursive;
}

main {
    width: 90%;
    margin: auto;
    margin-bottom: 40px;
}

.main {
    display: flex;
}

article, aside {
    text-align: justify;
}

article {
    margin-right: 40px;
    flex: 3;
}

article h1 {
    font-size: 2.5em;
}

/* ASIDE */

aside {
    border-left: 1px solid black;
    margin-top: 90px;
    padding-left: 40px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

aside h1 {
    margin-bottom: 50px;
    font-size: 1.75em;
}

aside a {
    line-height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

aside a {
    color: #00008b;
    text-decoration: none;
}

aside a p:hover {
    font-weight: bold;
}

/* NAVIGATION ASIDE */

#Ibox {
    margin-bottom: 25px;
}

#Ibox h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}

#Ibox > ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-decoration: none;
}

#Ibox >ul >li {
    line-height: 30px;
}

#Ibox >ul >li >a:link {
    color: #00008b;
    font-weight: bold;
}

#Ibox >ul >li >a:hover {
    color: #3679d1;
}

/* OPERATION */

.tableau {
    width:"60%";
}

.op {
    text-align: center;
    font-weight: bold;
}
</style>
