

function backTop() {
    console.log("hello");
    window.scrollTo({ top: 0, behavior: "smooth" });
  
}

let btn = document.getElementById("top");
window.onscroll = function show() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};


const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("Navbar");

if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active")
        close.style.display="block"
    })

    if(close){
        close.addEventListener("click",()=>{
            nav.classList.remove("active")
            close.style.display="none"
        })
}
}


const typed=new Typed('.multiple-text',{
  strings:['That You Expect From Consulting Partner.'],
  typeSpeed:70,
  backSpeed:70,
  backDelay:1000,
  loop:true,
})
