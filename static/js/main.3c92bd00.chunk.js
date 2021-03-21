(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{33:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i),c=a(13),n=a.n(c),o=(a(33),a(14)),l=a(9),r=a(2),d=a(0),h=function(){var e=Object(i.useState)({position:"absolute"}),t=Object(o.a)(e,2),a=t[0],s=t[1],c=function(){window.scrollY>window.innerHeight&&a!={position:"fixed",top:"0"}?s({position:"fixed",top:"0"}):window.scrollY<window.innerHeight&&a!={position:"absolute"}&&s({position:"absolute"})};Object(i.useEffect)((function(){window.addEventListener("scroll",c)}),[]);var n=Object(r.e)();return Object(d.jsx)("div",{className:"navBar",style:a,children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(l.Link,{to:"home",spy:!0,smooth:!0,duration:500,children:"HOME"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.Link,{to:"projectPlacement",spy:!0,smooth:!0,duration:500,onClick:function(){n.push("/")},children:"PROJECTS"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.Link,{to:"about",spy:!0,smooth:!0,duration:500,children:"ABOUT"})})]})})},m=(a(46),a(10)),j=function(){return Object(d.jsxs)("div",{id:"home",children:[Object(d.jsx)("h1",{children:"Hi, I'm Bj\xf8rne Oma"}),Object(d.jsx)("h2",{children:"Programmer, Interaction Designer and Game Developer"}),Object(d.jsx)(l.Link,{className:"myWorkButton",to:"projectPlacement",spy:!0,smooth:!0,duration:500,offset:1,children:"View My Work"})]})},b=function(e){var t=e.image,a=e.title,i=e.description,s=e.url;return Object(d.jsx)(m.b,{to:s,children:Object(d.jsx)("span",{style:{display:"block"},children:Object(d.jsxs)("div",{className:"projectPreview",children:[Object(d.jsx)("img",{className:"projectPreviewImage",src:t}),Object(d.jsx)("h2",{className:"projectPreviewTitle",children:a}),Object(d.jsx)("p",{className:"projectPreviewText",children:i}),Object(d.jsx)("p",{className:"clickToSeeMore",children:"Click To Read More"})]})})})},p=a.p+"static/media/CrankTheCoal.0f2beb27.PNG",g=a.p+"static/media/Jolaspelet.e9b2db5b.PNG",u=a.p+"static/media/Klimakalkulator.ed21dff9.PNG",x=a.p+"static/media/TurnBased.bc104423.PNG",f=function(){var e=Object(i.useState)([{title:"CRANK THE COAL, BOB",description:"2-player local coop-game",image:p,url:"/crankthecoal",id:1},{title:"JOLASPELET 2020",description:"Christmas' newest tradition",image:g,url:"/jolaspelet",id:2},{title:"CLIMATE CALCULATOR",description:"Climate Calculator prototype made for NRK",image:u,url:"/climateCalculator",id:3},{title:"THE TOWER",description:"Turn based puzzle game",image:x,url:"/theTower",id:4}]),t=Object(o.a)(e,2),a=t[0];t[1];return Object(d.jsxs)("div",{id:"projects",children:[Object(d.jsx)("h1",{className:"sectionHeader",children:"Projects"}),Object(d.jsx)("div",{children:a.map((function(e){return Object(d.jsx)(b,{image:e.image,title:e.title,description:e.description,url:e.url},e.id)}))})]})},O=a.p+"static/media/Crank03.ceebe8f6.PNG",w=a.p+"static/media/CrankTrello.828d6fa2.PNG",y=a.p+"static/media/CrankCatapult.e65b1174.png",v=a.p+"static/media/CamperSitting.bb5f2b9d.mp4",k=(a.p,a.p+"static/media/Run.805b57c2.mp4"),T=function(){return Object(d.jsxs)("div",{className:"project",children:[Object(d.jsx)("h1",{className:"sectionHeader",children:"Crank The Coal, Bob"}),Object(d.jsxs)("p",{children:["Crank the Coal, Bob is a two player game about driving a coal-fueled motorized castle. The players need to communicate and cooperate to keep the engine running, while also steering away from obstacles. The game can be downloaded and played"," ",Object(d.jsx)("a",{href:"https://bjorne-oma.itch.io/crank-the-coal-bob",target:"_blank",children:"here"}),"."]}),Object(d.jsx)("img",{src:O,alt:""}),Object(d.jsx)("h2",{children:"The Idea"}),Object(d.jsx)("p",{children:"I solo developed this project in a week in the beginning of January 2021, using mainly Unity with C# and Blender. The project had two main purposes: Practicing low poly 3d-art(as I had just started learning Blender), and completing a project in a limited amount of time."}),Object(d.jsx)("p",{children:"I gave myself one week to complete the game, and started right away by brainstorming ideas. After splatting enough ink on my virtual whiteboard, the idea came to me. I wanted to replicate the game-feel of one of my favorite games, Overcooked. Overcooked is a multiplayer local-coop game about running a restaurant with all kinds of impractical kitchens. It is heavily reliant on cooperation, and it is also chaotic and a ton of fun."}),Object(d.jsx)("p",{children:"I don't know how the idea of creating a coal-fueled castle came to me, but when it did I went with it, as the clock was ticking. I quickly sketched the game, and spent some time figuring most of the tasks that needed to be done."}),Object(d.jsx)("h2",{children:"Getting Organized"}),Object(d.jsx)("p",{children:"To organize all these tasks, and to make sure I was always on track to finish the game in time, I used Trello. I divided all the tasks by type, i.e. coding, modeling, animation, and set a date for each of the categories to be finished. This ended up working great, and in the end the (very close to) empty trello board was a beatiful sight."}),Object(d.jsx)("img",{src:w,alt:""}),Object(d.jsx)("h2",{children:"Art"}),Object(d.jsxs)("div",{className:"dirRow",children:[Object(d.jsx)("p",{children:"The style I went for is a simplistic low-poly 3d-look. This style has two big advantages over a lot of other styles. It's low poly count makes it very performant, which means I don't need to spend a lot of time optimizing. It is also very quick and easy to make, which is cruicial for a project with a time budget of a week."}),Object(d.jsx)("img",{src:y,alt:""})]}),Object(d.jsx)("p",{children:"I modeled all the meshes in Blender, a powerful and free 3d software. I reused as much as possible, for example by only making one human and using it for both the players and all the NPCs(non-player characters) in the game. Some of the models were static, for example the trees and rocks, while others needed to be animated. To do this, I rigged them, which is to create a bone structure that deforms the mesh automatically. This made it so I could just rotate a few bones instead of moving hundreds of vertices when animating."}),Object(d.jsxs)("div",{className:"dirRow",children:[Object(d.jsx)("video",{src:v,controls:!0}),Object(d.jsx)("video",{src:k,controls:!0})]}),Object(d.jsx)("h2",{children:"Logic"}),Object(d.jsx)("p",{children:"The code for this game was quite simple to make, as there were no complex systems like enemy AI or loading and unloading objects dynamically. The main challenge was coding as quickly as possible while still making the code solid enough to not cause lots of bugs and issues."}),Object(d.jsx)("h2",{children:"SFX and VFX"}),Object(d.jsx)("p",{children:"For the sound I used the free sound library Zapsplat.com. It had all the sounds I needed from engine noise to people shouting. I processed the audio in Audacity, a free audio editing sofware."}),Object(d.jsx)("p",{children:"The VFX were also quite simple. All the particles in the game are made up of cubes. For the smoke, I made black transparent cubes that grow over time. The fire particles have an emissive material(they give off light) and shrink over time. The results were more than acceptable. I especially like the look on the forests that catch fire. Look at that bloom!"})]})},N=a.p+"static/media/Jolaspelet2019.b2a8619f.mp4",I=a.p+"static/media/Jolaspelet2020Gameplay.facee11b.mp4",C=a.p+"static/media/JolaspeletAction.ecbf81f4.png",L=a.p+"static/media/JolaspeletHighScore.ef5ddd40.png",P=function(){return Object(d.jsxs)("div",{className:"project",children:[Object(d.jsx)("h1",{className:"sectionHeader",children:"Jolaspelet 2020"}),Object(d.jsx)("p",{children:'Jolaspelet 2020 (translates to "The Christmas Game") is a game I made for me and my wife\'s families to compete in during the christmas holiday. I made a very rudimentary game for christmas 2019 that became a hit, so I wanted to make this battle of the clans into a christmas tradition.'}),Object(d.jsx)("img",{src:C,alt:""}),Object(d.jsx)("h2",{children:"Design Philosophy"}),Object(d.jsx)("p",{children:"I had two clear goals in mind when designing this game. Firstly I wanted the game to be accessible to everyone in the family. This meant that control schemes like moving with WASD, while also doing something with the right hand were out of the question. The game also needed to be intuitive and easily approachable. Secondly I wanted the game to be competetive. I wanted the players to be able to measure their success and compare it to others."}),Object(d.jsx)("p",{children:"Last years game set the standard for these philosophies by accident. Even though it was strikingly simple, it was a hit!"}),Object(d.jsx)("video",{src:N,controls:!0}),Object(d.jsx)("h2",{children:"The Game"}),Object(d.jsx)("p",{children:"The game I ended up creating was a typing game. You play as santa claus who is riding in his sleigh, when suddenly rockets start flying towards you! Luckily you have your canon ready, and the rockets have a weak spot, a certain letter. Click the letter, shoot down the rocket, and repeat until... Well until your sleigh falls down."}),Object(d.jsx)("video",{src:I,controls:!0}),Object(d.jsx)("p",{children:"Typing is something everyone in the family is familiar with, and also something that is useful to practice, so I thought it was the perfect fit for the input of the game."}),Object(d.jsx)("h2",{children:"High Score"}),Object(d.jsxs)("div",{className:"dirRow",children:[Object(d.jsxs)("p",{children:["In 2019 the high score system was made up of rumors going around the block, and while that had it's own charm I wanted to go bigger in 2020. I ended up creating a high score board that could be accessed in the game and at"," ",Object(d.jsx)("a",{href:"https://jolaspelet.no",target:"_blank",children:"jolaspelet.no"}),". This ended up working great, and checking the website for any new records became an exciting part of the holiday. It was also a great opportunity for me to try out web requests in Unity."]}),Object(d.jsx)("img",{src:L,alt:""})]}),Object(d.jsx)("h2",{children:"The Verdict"}),Object(d.jsx)("p",{children:"The reception of the game was great! People really liked it and it ignited the competetive side of several of me and my wife's siblings. I plan to keep this tradition going, and I'm already brewing up ideas for 2021!"})]})},A=a.p+"static/media/TurnBasedLevelLayout.47e02d48.PNG",E=a.p+"static/media/tower_LevelEditor.533acaa3.mp4",S=a.p+"static/media/tower_Level1.e95f308a.mp4",B=function(){return Object(d.jsxs)("div",{className:"project",children:[Object(d.jsx)("h1",{className:"sectionHeader",children:"The Tower"}),Object(d.jsx)("p",{children:"The Tower is a turn-based puzzle game about getting colored boxes to their colors side of a tower. I made the prototype in about a week, and I learned a lot from it. Let me show you how it works!"}),Object(d.jsx)("img",{src:x,alt:""}),Object(d.jsx)("h2",{children:"The Game"}),Object(d.jsx)("p",{children:'The game is turn based, and each turn the player can move one of it\'s green "hero" boxes up to three tiles. After the player has moved, the blue and red "enemy" boxes move one tile in the direction that their arrow indicates. If there is a green box in the way of an enemy moving, it will instead turn to face the other colors side. If two enemies move into the same square on the same turn, they both dissapear. The players goal is to get all of the enemies to their colors side.'}),Object(d.jsx)("video",{src:S,controls:!0}),Object(d.jsx)("h2",{children:"The Data Structure"}),Object(d.jsx)("p",{children:"The heart of the data structure is the Tile Manager, which holds the two dimensional array of tiles that represent the board. It also has methods for changing the colors of the tiles based on who's turn it is, and also which hero the player has chosen(if any)."}),Object(d.jsx)("p",{children:"Another key piece of the puzzle is the Unit Manager. It holds a List of all the Units in the current level. Each unit holds an (int, int)-tuple which represents it's position on the board, and is a member of one of the subclasses Enemy or Hero. The Enemy class holds a color(blue or red) and the direction they are going in. Each turn, the Unit Manager tells the Tile Manager which state the game is in, and feeds it which Hero has been chosen. The Tile Manager then updates the colors of the tiles to show the player which tiles can be clicked."}),Object(d.jsxs)("div",{className:"dirRow",children:[Object(d.jsx)("p",{children:"The layout of each level is stored in a scriptable object class named LevelLayout. Scriptable objects in Unity are scripts that can be instantiated on files in the project instead of on objects in the scene. Each Level Layout holds an array of all the hero starting positions and all the enemy starting positions in the level. The enemy starting positions also contain which color the enemy is, and which direction it starts in. With this system I can create new Level Layout files and set the position of all the units, as shown in the picture. While this solution technically works, it is incredibly tedious, since you have to count out where each piece is on the x- and y-axes. Luckily I had an idea on how to simplify this process."}),Object(d.jsx)("img",{src:A,alt:""})]}),Object(d.jsx)("h2",{children:"The Level Editor"}),Object(d.jsx)("p",{children:"The level editor lets me click tiles and use keys on the keyboard to change it. The operations include creating a hero, creating an enemy, deleting a unit, changing the color of an enemy, and changing an enemies starting rotation. This tool makes creating and levels a lot faster, and infinitely more intuitive."}),Object(d.jsx)("video",{src:E,controls:!0})]})},H=a.p+"static/media/Climate01.2258a5da.png",G=a.p+"static/media/Climate02.133f204a.png",M=a.p+"static/media/Climate03.caa934f7.png",J=function(){return Object(d.jsxs)("div",{className:"project",children:[Object(d.jsx)("h1",{className:"sectionHeader",children:"Climate Calculator"}),Object(d.jsx)("p",{children:"This is a prototype made for NRK in a school project. I worked in a group of four students to make a climate calculator that would be more intuitive, fun and impactful than their current solution."}),Object(d.jsxs)("p",{children:["To get in depth information about our methods and design decisions, read our published thesis on the project:"," ",Object(d.jsx)("a",{href:"https://static1.squarespace.com/static/599605d5f9a61e19fde4acc0/t/5f1b3136ba6fd7275100641b/1595617676519/Klimakalkulator.pdf",target:"_blank",children:"Norwegian"}),", ",Object(d.jsx)("a",{href:"https://static1.squarespace.com/static/599605d5f9a61e19fde4acc0/t/5f1b308aa3a9b84512f37ad6/1595617561182/Climate+calculator.pdf",target:"_blank",children:"English"}),"."]}),Object(d.jsxs)("p",{children:["You can also test our Figma-prototype"," ",Object(d.jsx)("a",{href:"https://www.figma.com/proto/PHd50AAjeMKN6mPw4NkVtx/Klimakalkulator---Prototype?XyJmvn=&scaling=scale-down&node-id=1%3A4",target:"_blank",children:"here"})," ","to see how the end result feels."]}),Object(d.jsxs)("div",{className:"tripleImage",children:[Object(d.jsx)("img",{src:H,alt:""}),Object(d.jsx)("img",{src:G,alt:""}),Object(d.jsx)("img",{src:M,alt:""})]})]})},D=a.p+"static/media/avatarImage.4317f6b6.jpg",R=function(){return Object(d.jsxs)("div",{id:"about",children:[Object(d.jsx)("h1",{className:"sectionHeader",children:"About"}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"aboutText",children:[Object(d.jsx)("img",{alt:"Bilde",src:D,className:"avatar"}),Object(d.jsx)("p",{children:"My name is Bj\xf8rne Oma. I am 22 years old, and currently live in Bergen, where I am taking a bachelors degree in Media- and Interaction Design. I love making games, and I also love making software that makes people's lives easier."}),Object(d.jsxs)("p",{children:["bjorneoma@gmail.com ",Object(d.jsx)("br",{}),"957 84 182 ",Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/bj\xf8rne-oma/",target:"_blank",children:"LinkedIn"})]})]}),Object(d.jsxs)("div",{className:"aboutSkills",children:[Object(d.jsxs)("div",{className:"skill programming",children:[Object(d.jsx)("div",{className:"circle huge",children:"Programming"}),Object(d.jsxs)("div",{className:"tools",children:[Object(d.jsxs)("div",{className:"bigTools",children:[Object(d.jsx)("div",{className:"circle big",children:"C#"}),Object(d.jsx)("div",{className:"circle big",children:"Python"})]}),Object(d.jsxs)("div",{className:"smallTools",children:[Object(d.jsx)("div",{className:"circle small",children:"Git"}),Object(d.jsx)("div",{className:"circle small",children:"Javascript"}),Object(d.jsx)("div",{className:"circle small",children:"CSS"}),Object(d.jsx)("div",{className:"circle small",children:"React"}),Object(d.jsx)("div",{className:"circle small",children:"HTML"})]})]})]}),Object(d.jsxs)("div",{className:"skill ux",children:[Object(d.jsx)("div",{className:"circle huge",children:"Interaction Design"}),Object(d.jsxs)("div",{className:"tools",children:[Object(d.jsxs)("div",{className:"bigTools",children:[Object(d.jsxs)("div",{className:"circle big",children:["Google",Object(d.jsx)("br",{})," Design",Object(d.jsx)("br",{})," Sprint"]}),Object(d.jsx)("div",{className:"circle big",children:"Figma"}),Object(d.jsxs)("div",{className:"circle big",children:["User",Object(d.jsx)("br",{})," Testing"]})]}),Object(d.jsxs)("div",{className:"smallTools",children:[Object(d.jsx)("div",{className:"circle small",children:"Adobe XD"}),Object(d.jsxs)("div",{className:"circle small",children:["Design",Object(d.jsx)("br",{})," Thinking"]})]})]})]}),Object(d.jsxs)("div",{className:"skill gameDev",children:[Object(d.jsxs)("div",{className:"circle huge",children:["Game",Object(d.jsx)("br",{}),"Development"]}),Object(d.jsxs)("div",{className:"tools",children:[Object(d.jsxs)("div",{className:"bigTools",children:[Object(d.jsx)("div",{className:"circle big",children:"Unity"}),Object(d.jsx)("div",{className:"circle big",children:"C#"})]}),Object(d.jsxs)("div",{className:"smallTools",children:[Object(d.jsx)("div",{className:"circle small",children:"Blender"}),Object(d.jsx)("div",{className:"circle small",children:"Krita"})]})]})]})]})]})]})};var F=function(){return Object(d.jsx)(m.a,{basename:"/",children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(j,{}),Object(d.jsx)(h,{}),Object(d.jsx)("div",{id:"projectPlacement"}),Object(d.jsx)(r.a,{exact:!0,path:"/",component:f}),Object(d.jsx)(r.a,{exact:!0,path:"/crankTheCoal",component:T}),Object(d.jsx)(r.a,{exact:!0,path:"/jolaspelet",component:P}),Object(d.jsx)(r.a,{exact:!0,path:"/theTower",component:B}),Object(d.jsx)(r.a,{exact:!0,path:"/climateCalculator",component:J}),Object(d.jsx)(R,{})]})})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),i(e),s(e),c(e),n(e)}))};n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root")),q()}},[[47,1,2]]]);
//# sourceMappingURL=main.3c92bd00.chunk.js.map