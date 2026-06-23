function abc()
{
    var myobj = document.createElement("div");
    var myinput = document.createElement("input");
    var btn = document.createElement("input");
    var mytext = document.createTextNode("this is my text for node");
        myobj.appendChild(mytext);
    document.body.appendChild(myobj);

    myobj.addEventListener("click",()=>{
        // alert("welcome");
        myobj.style.padding="10px";
        myobj.style.color="red";
        myobj.style.backgroundColor="blue";
    })

        myinput.setAttribute("type","text");
        myinput.addEventListener("input",()=>{
            var a = myinput.value;
            console.log(a);
            if(a.length>5)
            {
                myobj.style.color="green";
            }
            else
            {
                myobj.removeAttribute("style");
            }
            if(a=="password")
            {
                myinput.setAttribute("type","password");
            }
            else
            {
                myinput.setAttribute("type","text");
            }
        })
    document.body.appendChild(myinput);


     btn.setAttribute("type","button");
     btn.setAttribute("value","hide");   
     btn.addEventListener("click",()=>{
        myinput.setAttribute("type","password");
        setTimeout(()=>{
            myinput.setAttribute("type","text");
        },2000);
     })



    document.body.appendChild(btn);


}

abc();