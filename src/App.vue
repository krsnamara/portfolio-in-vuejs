<template>
  <router-view/>
</template>

<style>
body{
  background-color: #A88308;
}
#app {
  font-family: Georgia, 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a:hover {
  font-weight: bold;
  color: #06e4f8;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
