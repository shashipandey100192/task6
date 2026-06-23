

function xyz()
{
    alert("welcome to dyn event");
}

var a;
function abc()
{
    // var a = document.getElementById('one');
    //  var a = document.getElementsByClassName("two");
    // var a = document.getElementsByTagName("p");
    // var a = document.querySelector("p",".two","#one");
     a = document.querySelectorAll("p",".two","#one");
    // console.log(a);
    console.log(typeof(a));



}

abc();


console.log(a);
a[0].addEventListener("click",xyz);

a[1].addEventListener("click",function(){
    alert("this is ano function");
});

a[2].addEventListener("click",()=>{
    alert("this is arrow function");
});



// var b;

// function one()
// {
//      b = document.querySelector("#one");
//     console.log(b);
//     b.addEventListener("click",xyz);

// }

// one();


