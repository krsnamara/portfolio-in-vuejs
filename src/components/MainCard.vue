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
                    <div class="link">
                        <a href="/post">
                            <img src="../assets/post.svg" alt="">
                            <h2>Post Projects</h2>
                        </a>
                    </div>
                </div>
            </div>
            <div class="container-two">
                <div class="about-me">
                    <h1>Read The Words Not the Meaning</h1>
                    <p>I'm baby offal mukbang gochujang ethical stumptown, letterpress cloud bread thundercats polaroid bruh. Migas franzen yr chambray same listicle. Ascot roof party iPhone, gastropub hexagon four loko listicle. Fanny pack fashion axe quinoa, man bun swag everyday carry air plant hella food truck. Vice shaman tonx keytar kale chips glossier messenger bag chillwave.</p>
                    <p>Mustache vexillologist neutra, grailed pop-up food truck biodiesel irony praxis poutine tousled. Activated charcoal meditation church-key grailed coloring book, bodega boys hella four loko microdosing pour-over. Lyft coloring book jianbing you probably haven't heard of them. Butcher cornhole gluten-free adaptogen venmo godard wolf fixie hot chicken cliche trust fund grailed. Humblebrag ethical affogato, small batch umami four dollar toast listicle ugh praxis taiyaki green juice copper mug. Poutine kombucha tacos, adaptogen pabst bodega boys swag edison bulb chia pug. Occupy kombucha yes plz, 90's meh chartreuse tbh hashtag shoreditch locavore.</p>
                    <p>Dummy text? More like dummy thicc text, amirite?</p>
                </div>
                <div class="technology-section">
                    <div class="button-container">
                        <div class="projects-button">
                            <a href="/projects">My Projects</a>
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
        background-color:#11A88A;
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
            background-color: #01f6c5;
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
            padding: 8%;
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