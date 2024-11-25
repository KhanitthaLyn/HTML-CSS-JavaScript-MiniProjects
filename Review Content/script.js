const userdata = [
    {
        name:"Lily",
        job:"Offical",
        text:"Your guide to the best services. The product quality is consistently outstanding, exceeding my expectations every time.",
        image:"https://randomuser.me/api/portraits/women/60.jpg"
    },
    {
        name:"James",
        job:"Programmer",
        text:"Efficiency and punctuality are hallmarks of their service.",
        image:"https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
        name:"Lukus",
        job:"Gamer",
        text:"Although the wait time at this dentist’s office was longer than anticipated, the exceptional quality of care more than compensated for it. The staff exhibited friendliness, expertise, and ensured my comfort throughout the entire visit.",
        image:"https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
        name:"Mark",
        job:"Youtuber",
        text:"I have been a customer of [Auto Repair Shop Name] for X years, and I can confidently say that their service is top-notch. From routine maintenance to complex repairs, they have consistently provided reliable and efficient service. The team is knowledgeable, friendly, and always goes the extra mile to ensure customer satisfaction. I trust [Auto Repair Shop Name] with all my automotive needs.",
        image:"https://randomuser.me/api/portraits/men/14.jpg"
    },
    {
        name:"Momo",
        job:"Freelancer",
        text:"My whole family is going to [hairdresser's name or salon name] for years because she's really nice and does a great job! Her adult haircuts are great and we really like how she does our kids' hair. All our cuts last a long time, too. We especially appreciate how nice she is to our kids who feel very comfortable in her really nice private space. Highly recommend this place if you really live your hairs!",
        image:"https://randomuser.me/api/portraits/women/33.jpg"
    }
];

const review = document.querySelector('.review');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.user-name');
const userJob=document.querySelector('.user-job');

let activeIndex = 1;

function showReview(){
    const {name,job,text,image} = userdata[activeIndex];
    review.innerHTML=text;
    userImage.src=image;
    userName.innerHTML=name;
    userJob.innerHTML=job;
    activeIndex++;

    if(activeIndex>userdata.length-1){
        activeIndex=0;
    }
}

setInterval(showReview,10000);