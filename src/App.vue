<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/post">Post Project</router-link>         |
    <router-link to="/projects">My Projects</router-link>
  </nav> -->
  <router-view/>
</template>

<style>
body{
  background-color: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
