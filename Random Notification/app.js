const btn = document.querySelector(".btn")
const container = document.querySelector(".container")
const messages=[
    "Guten Tage",
    "Hallo welt",
    "Guten Morgen",
    "Guten Nach",
    "Schalfen",
    "ins Bett gehen",
    "bestimmst"
]
btn.addEventListener("click",()=>createNotification())

function createNotification(){
    const notificationEl = document.createElement("div")
    notificationEl.classList.add("notification")
    notificationEl.innerText=randomMessage()
    container.appendChild(notificationEl)
    setTimeout(()=>{
        notificationEl.remove()
    },3000)
}

function randomMessage(){
    return messages[Math.floor(Math.random()*messages.length)]
}