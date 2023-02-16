<template>
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/post">Post Project</router-link>         |
    <router-link to="/projects">My Projects</router-link>
  </nav>
    <div class="main-container">
        <div class="project-card" v-for="(items, index) in lambdaReturnData.Items" v-bind:key="items">
            <h2>{{lambdaReturnData.Items[index].title}}</h2>
            <img :src="lambdaReturnData.Items[index].image" alt=""> 
            <p class="detail-container">{{ lambdaReturnData.Items[index].detail}}</p>
            <div class="links">
                <a :href="lambdaReturnData.Items[index].repo" target="_blank">
                    <img src="https://www.svgrepo.com/show/68072/github-logo-face.svg" alt="">
                </a>
                <a :href="lambdaReturnData.Items[index].link" target="_blank">
                    <img src="https://www.svgrepo.com/show/273836/links-link.svg" alt="">
                </a>
            </div>
            <div class="button-container">
                <div class="projects-button">
                    <a href="/">Home</a>
                </div>
                <div class="projects-button">
                    <a href="/projects">Back to Top</a>
                </div>
                <!-- <div class="projects-button">
                    <a href="/post">Post</a>
                </div> -->
            </div> 
        </div>
    </div>
    </template>
    
    <script>
    import axios from 'axios'
    export default {
        data(){
            return{ 
                lambdaReturnData: {},
            }
        },
        methods:{
            GetProjects(){
                axios.get('https://9349h8hp52.execute-api.us-east-1.amazonaws.com/items').then(response => {
                    console.log(response)
                    this.lambdaReturnData.Items = response.data;
                }).catch(err =>{
                    console.log(err);
                })
            }
        },
        mounted(){
            this.GetProjects();
        }
    }
    </script>
    
    <style scoped>
        .main-container{
            /* margin-top: 5%; */
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        }
        .project-card{
            display: flex;
            flex-direction: column;
            margin: 10px;
            padding: 10px;
            width: 520px;
            height: 700px;
            flex-wrap: 0 0 40%;
            justify-content:start;
            align-items: center;
            background-color: #F3EED9;
            border-radius: 25px;
            box-shadow: rgb(0, 0, 0, .24) 0px 3px 8px;
        }
        .project-card img{
          height: 20rem;
          max-width: 520px;

        }
        .detail-container {
            max-width:60%;
            text-align: center;
        }
    
        .links{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
        }
        .links img{
            max-height: 2rem;
            margin: 5px;
        }
        .links img:hover{
            background-color: rgb(9, 9, 236, .5);
            border-radius: 20px;
        }
        .button-container{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        .projects-button{
            background-color: #005ca4;
            border-radius: 15px;
            padding: 5px;
            margin: 5px;
        }
        .projects-button a{
            text-decoration: none;
            color: #ffffff;
        }
        @media only screen and (max-width: 450px){
            *{
                box-sizing: border-box;
            }
            .project-card img{
                height: auto;
                max-width: 300px;
            }
            .project-card{
            display: flex;
            flex-direction: column;
            margin: 10px;
            padding: 10px;
            width: 520px;
            height: fit-content;
            flex-wrap: 0 0 40%;
            justify-content:start;
            align-items: center;
            background-color: #F3EED9;
            border-radius: 25px;
            box-shadow: rgb(0, 0, 0, .24) 0px 3px 8px;
        }

        }
    </style>