
var jinpu;
var jouptpu;
    // debugger;
function loadallhtmlelement()
{
    jinpu = document.querySelectorAll("textarea,input");
    jouptpu = document.querySelector("#output");
    console.log(jinpu);
}
loadallhtmlelement();

jinpu[0].addEventListener("input",()=>{
    var a = jinpu[0].value;
    jouptpu.innerHTML = a;
});

jinpu[1].addEventListener("click",()=>{
    jouptpu.style.fontSize=`${jinpu[1].value}px`;
});

jinpu[2].addEventListener("input",()=>{
    jouptpu.style.backgroundColor=`${jinpu[2].value}`;
});

jinpu[3].addEventListener("input",()=>{
    jouptpu.style.transform=`rotate(${jinpu[3].value}deg)`;
})