<template>
    <div class="wrapper">
        <div class="main-container">
            <div class="container-one">
                <div class="profile">
                    <img src="../assets/profile-pic.jpeg" alt="">
                    <h3>Martin Fitzpatrick</h3>
                    <p>Software Developover</p>
                </div>
                <div class="social-links">
                    <div class="link">
                        <a href="https://github.com/krsnamara">
                            <img src="https://www.svgrepo.com/show/68072/github-logo-face.svg" alt="">
                            <h2>Github</h2>
                        </a>
                        </div>
                    <div class="link">
                        <a href="https://www.linkedin.com/in/martinj-fitzpatrick/">
                            <img src="https://www.svgrepo.com/show/390272/linkedin-linked-in.svg" alt="">
                            <h2>LinkedIn</h2>
                        </a>
                        </div>
                </div>
            </div>
            <div class="container-two">
                <div class="about-me">
                    <h1>About Me</h1>
                    <p>I'm baby flexitarian DIY schlitz four dollar toast you probably haven't heard of them, flannel cred listicle organic. Roof party mumblecore viral 3 wolf moon. Aesthetic chillwave cronut hoodie mustache semiotics tbh. Bodega boys leggings 8-bit raw denim flannel, affogato chicharrones pug scenester sustainable kitsch health goth master cleanse.</p>
                </div>
                <div class="technology-section">
                    <h1>Technologies Studied</h1>
                    <div class="logos">
                        <img src="https://www.svgrepo.com/show/473654/html5.svg" alt="">
                        <img src="https://www.svgrepo.com/show/473577/css3.svg" alt="">
                        <img src="https://www.svgrepo.com/show/310932/javascript.svg" alt="">
                        <img src="https://www.svgrepo.com/show/439173/git.svg" alt="">
                        <img src="https://www.svgrepo.com/show/426053/git.svg" alt="">
                        <img src="https://www.svgrepo.com/show/349404/heroku.svg" alt="">
                        <img src="https://www.svgrepo.com/show/306463/netlify.svg" alt="">
                        <img src="https://www.svgrepo.com/show/330398/express.svg" alt="">
                        <img src="https://www.svgrepo.com/show/473729/mongodb.svg" alt="">
                        <img src="https://www.svgrepo.com/show/424896/react-logo-programming-2.svg" alt="">
                        <img src="https://www.svgrepo.com/show/377688/text-x-python.svg" alt="">
                        <img src="https://www.svgrepo.com/show/353657/django-icon.svg" alt="">
                        <img src="https://www.svgrepo.com/show/331300/aws.svg" alt="">
                        <img src="https://www.svgrepo.com/show/369644/vue.svg" alt="">
                    </div>
                   <div class="button-container">
                        <div class="projects-button">
                            <a href="/projects">My Projects</a>
                        </div>
                        <div class="projects-button">
                            <a href="">My Resume</a>
                        </div>
                   </div> 
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    export default {
    
    }
    </script>
    
    <style scoped>
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
        .main-container{
            display: flex;
            flex-direction: row;
            /* justify-content: center;
            align-items: center; */
            /* background-color: #28690F; */ /* green pallate */
            background-color: #A9001B;
            border-radius: 25px;
            width: 60%;
            box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
        }
        .container-one{
            /* background-color: #6ABF46; */ /* green pallate */
            background-color: #E09990;
            padding: 2.5%;
            width: 30%;
            border-radius: 25px;
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
        .about-me{
            text-align: left;
            border-radius: 25px;
        }
        .logos img{
            height: 3rem;
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
        @media only screen and (max-width: 950px){
            .main-container{
                width: 95%;
            }
        }
    </style>