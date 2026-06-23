var mydiv;

function loadobject()
{
    mydiv = document.querySelectorAll('div');
    console.log(mydiv);
}

loadobject();


mydiv[0].addEventListener("click",()=>{
    mydiv[0].style.backgroundColor="red";
});


mydiv[1].addEventListener("click",()=>{
    mydiv[1].className="first";
});


mydiv[2].addEventListener("click",()=>{
    mydiv[2].classList.add("first","second","third","fourth");
});

mydiv[2].addEventListener("dblclick",()=>{
    mydiv[2].classList.remove("fourth");
});

mydiv[3].addEventListener("click",()=>{
    var a = document.querySelector('body');

    a.classList.toggle("first");

});





