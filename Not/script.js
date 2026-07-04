// ===================================
// โหลดข้อมูลจาก CONFIG
// ===================================

document.getElementById("coupleName").innerHTML =
`${CONFIG.person1} ❤️ ${CONFIG.person2}`;

document.getElementById("quote").innerHTML =
CONFIG.quote;

document.getElementById("loveLetter").innerHTML =
CONFIG.letter.replace(/\n/g,"<br>");



// ===========================
// เปลี่ยนเพลง
// ===========================

document.querySelector("audio source").src =
CONFIG.music;

document.querySelector("audio").load();



// ===========================
// เปลี่ยนรูป Gallery
// ===========================

const images=document.querySelectorAll(".grid img");

images.forEach((img,index)=>{

    img.src=CONFIG.gallery[index];

});



// ===========================
// นับวัน
// ===========================

function updateDays(){

    const start=new Date(CONFIG.anniversary);

    const today=new Date();

    const diff=today-start;

    const days=Math.floor(diff/(1000*60*60*24));

    document.getElementById("days").innerHTML=days;

}

updateDays();



// ===========================
// หัวใจลอย
// ===========================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.animationDuration=
    (5+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,350);



// ===========================
// Fade In
// ===========================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

});

});

sections.forEach(section=>{

section.style.opacity=0;

section.style.transform="translateY(70px)";

section.style.transition=".8s";

observer.observe(section);

});



// ===========================
// เปิดรูปใหญ่
// ===========================

const popup=document.createElement("div");

popup.style.position="fixed";

popup.style.left=0;

popup.style.top=0;

popup.style.width="100%";

popup.style.height="100%";

popup.style.display="none";

popup.style.justifyContent="center";

popup.style.alignItems="center";

popup.style.background="rgba(0,0,0,.85)";

popup.style.zIndex=99999;

const big=document.createElement("img");

big.style.maxWidth="90%";

big.style.maxHeight="90%";

big.style.borderRadius="20px";

popup.appendChild(big);

document.body.appendChild(popup);

images.forEach(img=>{

img.onclick=()=>{

popup.style.display="flex";

big.src=img.src;

}

});

popup.onclick=()=>{

popup.style.display="none";

};