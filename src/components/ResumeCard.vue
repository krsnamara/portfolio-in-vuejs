
<template>
    <nav class="nav-wrapper">
        <router-link to="/">home</router-link> |
        <router-link to="/projects">projects</router-link>
    </nav>
                <div class="resume-wrapper">
                    <img class="resume" src="../assets/resume.jpg" alt="">
                </div>
    </template>
    
    <script>
    export default {
    
    }
    </script>
    
    <style scoped>
    .nav-wrapper{
        display: flex;
        justify-content: space-around;
        background-color: darkslateblue;
        border-radius: 25px;
    }
    .resume-wrapper{
        width: 100%;
    }
    .resume {
        width: 100%;
    }
    </style>