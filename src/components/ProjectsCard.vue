<template>
    <!-- <div class="main-container">
        <div class="project-card" v-for="(items, index) in projectData.ProjectsArray" v-bind:key="items">
            <h2>{{projectData.ProjectsArray[index].Title}}</h2>
            <img :src="projectData.ProjectsArray[index].Image" alt=""> 
            <p>{{ projectData.ProjectsArray[index].About}}</p>
            <div class="links">
                <a :href="projectData.ProjectsArray[index].Link1" target="_blank">
                    <img src="https://www.svgrepo.com/show/68072/github-logo-face.svg" alt="">
                </a>
                <a :href="projectData.ProjectsArray[index].Link2" target="_blank">
                    <img src="https://www.svgrepo.com/show/273836/links-link.svg" alt="">
                </a>
            </div>
        </div>
    </div> -->
    <div class="main-container">
        <div class="project-card" v-for="(items, index) in lambdaReturnData.Items" v-bind:key="items">
            <h2>{{lambdaReturnData.Items[index].title}}</h2>
            <img :src="lambdaReturnData.Items[index].image" alt=""> 
            <p>{{ lambdaReturnData.Items[index].detail}}</p>
            <div class="links">
                <a :href="lambdaReturnData.Items[index].repo" target="_blank">
                    <img src="https://www.svgrepo.com/show/68072/github-logo-face.svg" alt="">
                </a>
                <a :href="lambdaReturnData.Items[index].link" target="_blank">
                    <img src="https://www.svgrepo.com/show/273836/links-link.svg" alt="">
                </a>
            </div>
        </div>
    </div>
        <!-- This was a test before building out the lambdaReturnData cards
    <div>
        <button @click="GetProjects">Click</button>
    </div>
    
    {{lambdaReturnData}} -->
    </template>
    
    <script>
    import axios from 'axios'
    // import jsonData from "/projects.json"
    // axios.defaults.withCredentials = false
    export default {
        data(){
            return{ 
                // projectData: jsonData,
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
            margin-top: 5%;
            display: flex;
            /* flex-direction: column; */
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        }
        .project-card{
            margin: 10px;
            padding: 10px;
            width: 60%;
            flex-wrap: 0 0 40%;
            background-color: #F3EED9;
            /* background-color: white; */
            border-radius: 25px;
            box-shadow: rgb(0, 0, 0, .24) 0px 3px 8px;
        }
        .project-card img{
          height: 20rem;  
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
            /* filter: invert(100%); */
        }
    </style>