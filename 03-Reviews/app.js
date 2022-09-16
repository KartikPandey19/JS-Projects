const reviews = [
    {
  id: 1,
  name: "susan smith",
  job: "web devloper",
  img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  text: "helooo my name is zzz i am a web devloper i live in mars i mostly work remotely i am a fitdev love to work for my passion i live every day of my life i wants to visit earth ones i heard that earth has many fantastic d4evloper",
},
{
id:2,
name:"henry kals",
job:"UX DESIGNER",
img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
text:"helooo my name is zzz i am a web devloper i live in mars i mostly work remotely i am a fitdev love to work for my passion i live every day of my life i wants to visit earth ones i heard that earth has many fantastic d4evloper",
},

{
    id:3,
    name:"jammie cooker",
    job:"ANDROID devloper",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:"helooo my name is zzz i am a web devloper i live in mars i mostly work remotely i am a fitdev love to work for my passion i live every day of my life i wants to visit earth ones i heard that earth has many fantastic d4evloper",
    },

    {
        id:4,
        name:"joly nathan",
        job:"IOS devloper",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:"helooo my name is zzz i am a web devloper i live in mars i mostly work remotely i am a fitdev love to work for my passion i live every day of my life i wants to visit earth ones i heard that earth has many fantastic d4evloper",
        }
];
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const  job= document.getElementById("job");
const  info= document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem  = 0;

//load initial item
window.addEventListener("DOMContentLoaded",function(){
showPerson(currentItem);
});

// show person based on item

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem =0;
    }
    showPerson(currentItem);
})

prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem < 0){
        currentItem =reviews.length-1;
    }
    showPerson(currentItem);
})

randomBtn.addEventListener('click',function(){
    currentItem = Math.floor(Math.random()*reviews.length);
    showPerson(currentItem);
})