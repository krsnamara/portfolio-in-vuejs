<template>
    <div class="wrapper">
        <div class="main-container">
            <div class="container-one">
                <div class="profile">
                    <img src="../assets/aiportrait.png" alt="">
                    <h3>Hip Von Burg</h3>
                    <p>Blogger</p>
                </div>
                <div class="social-links">
                    <div class="link">
                        <a href="https://github.com/krsnamara" target="_blank" >
                            <img src="../assets/github.png" alt="">
                            <h2>Github</h2>
                        </a>
                    </div>
                    <div class="link">
                        <a href="https://www.linkedin.com/in/martinj-fitzpatrick/" target="_blank" >
                            <img src="../assets/linkedin.png" alt="">
                            <h2>LinkedIn</h2>
                        </a>
                    </div>
                </div>
            </div>
            <div class="container-two">
                <div class="input-wrapper">
                    <div>
                        <h1>Lets Enter Our Latest Project</h1>
                    </div>
                    <div class="container">
                        <div class="input-container">
                            <label for="id">Id</label>
                            <input type="text" name="id" v-model="postData.id" placeholder="write a number !">
                        </div>
                        <div class="input-container">
                            <label for="id">What should we</label>
                            <input type="text" name="title" v-model="postData.title" placeholder="call it?">
                        </div>
                        <div class="input-container">
                            <label for="id">Tell them some</label>
                            <input type="text" name="detail" v-model="postData.detail" placeholder="details...">
                        </div>
                        <div class="input-container">
                            <label for="id">What does it</label>
                            <input type="text" name="image" v-model="postData.image" placeholder="look like?">
                        </div>
                        <div class="input-container">
                            <label for="id">Github</label>
                            <input type="text" name="repo" v-model="postData.repo" placeholder="Repo">
                        </div>
                        <div class="input-container">
                            <label for="id">What is the</label>
                            <input type="text" name="link" v-model="postData.link" placeholder="URL">
                        </div>
                        <button class="btn" type="submit" @click="PostProject()">Submit</button>
                    </div>
                </div>
                <div class="button-container">
                    <div class="projects-button">
                        <a href="/">home</a>
                    </div>
                    <div class="projects-button">
                        <a href="/projects">projects</a>
                    </div>
                </div> 
            </div>
            </div>
        </div>
    </template>
    
    <script>
    import axios from 'axios'
    export default {
        data(){
            return{
                postData:{
                    id: '',
                    title: '',
                    detail: '',
                    image: '',
                    repo: '',
                    link: '',
                }
            }
        },
        methods:{
            PostProject(){
                axios.put('https://9349h8hp52.execute-api.us-east-1.amazonaws.com/items', this.postData).then(response => {
                    console.log(response);
                    // self.message = 'Data is Entered';
                    this.$router.push('/projects');
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
    </script>
    
    <style scoped>
    .outer-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .input-wrapper {
        background-color: #F3EED9;
        border-radius: 20px;
        stroke: black 2px solid;
        margin: 2.5%;
        width: 70%;
        padding: 15px;
        min-width: 400px;
        max-width: 450px;
        /* padding-bottom: 25px; */
        display: flex;
        flex-direction: column;
    }
    .input-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 50px 0px 50px;
    
    }
    .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
        /* width: 60%; */
    }
    img{
        height:20px;
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
    .main-container{
        display: flex;
        flex-direction: row;
        margin-top: 50px;
        background-color: #01f6c5;
        border: #7218F5 solid 5px;
        border-radius: 25px;
        width: 60%;
        box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
    }
    .container-one{
        background-color: #97199e;
        padding: 2.5%;
        width: 30%;
        border-radius: 20px;
    }
    .profile img{
        height: 10rem;
        border-radius: 50%;
    }
    .link a{
        text-decoration: none;
        color: #2c3e50;
        font-size: 10px;
    }
    .link img{
        height: 3rem;
    }
    .link img:hover{
        height: 3rem;
        /* // filter:grayscale(100%); */
        filter: invert(100%);
    }
    .container-two{
        /* background-color:#6ABF46; */ /* green pallate */
        background-color:#F3EED9;
        margin: 2.5%;
        width: 70%;
        padding: 15px;
        border-radius: 25px;
        
    }
    .btn{
        margin-top: 25px;
        padding: 15px;
        margin-left: 150px;
    }
    @media only screen and (max-width: 950px){
        .main-container{
            width: 95%;
        }
    }
    @media only screen and (max-width: 450px){
            *{
                box-sizing: border-box;
            }
        .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
        /* width: 60%; */
        }
        .input-wrapper {
        background-color: #F3EED9;
        border-radius: 20px;
        stroke: black 2px solid;
        margin: 2.5%;
        width: 70%;
        padding: 15px;
        min-width: auto;
        max-width: auto;
        /* padding-bottom: 25px; */
        display: flex;
        flex-direction: column;
        }
    .input-container{
        display: flex;
        justify-content:space-evenly;
        gap: 10%;
        align-items: center;
        padding: 0px 50px 0px 50px;
    
    }

        img{
            height:20px;
        }
        .main-container{
            display: flex;
            flex-direction: column;
            /* justify-content: center;
            align-items: center; */
            /* background-color: #28690F; */ /* green pallate */
            background-color:transparent;
            border-radius: 0px;
            width: 100%;
            box-shadow:none;
        }
        .container-one{
            /* background-color: #6ABF46; */ /* green pallate */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color: #E09990;
            padding: 5%;
            width: 100%;
            border-radius: 0;
            margin: 0;
        }
        .profile{
            padding-left: 0%;
            display: flex;
            align-items: center;
        }
        .profile img{
            height: 6rem;
            border-radius: 50%;
        }
        .link a{
            text-decoration: none;
            color: #2c3e50;
            font-size: 10px;
        }
        .link h2{
            display: none;
        }
        .link img{
            height: 2rem;
        }
        .link img:hover{
            height: 3rem;
            /* // filter:grayscale(100%); */
            filter: invert(100%);
        }
        .social-links{
            display: flex;
            justify-content:flex-end;
            padding-right: 4%;
            gap: 10px;
        }
        .container-two{
            /* background-color:#6ABF46; */ /* green pallate */
            background-color:#F3EED9;
            margin: 0%;
            width: 100%;
            padding: 0%;
            /* padding: 2.5%; */
            border-radius: 0;
            /* margin: 0; */
            
        }
        .about-me{
            text-align: left;
            border-radius: 25px;
        }
        .logos img{
            height: 2rem;
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
        }
    </style>