var addbutton=document.getElementById("add-btn");
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box");
var booktitleinput=document.getElementById("book-title-input");
var bookauthorinput=document.getElementById("book-author-input");
var desc=document.getElementById("desc");
var container=document.querySelector(".container");
var cancelpopup=document.getElementById("cancel-popup");
addbutton.addEventListener("click",function(event)
{
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})

cancelpopup.addEventListener("click",function(event)
{
    event.preventDefault();
     popupoverlay.style.display="none";
    popupbox.style.display="none";
})
function add(event)
{
    event.preventDefault();
    if(desc.value=="" ||
    booktitleinput.value==""|| 
    bookauthorinput.value=="" )
    {
    alert("please enter all the details");
    return;
    }
    var div=document.createElement("div");
    div.innerHTML=` <h2>${booktitleinput.value}</h2>
            <h4>${bookauthorinput.value}</h4>
            <p>${desc.value}</p>
            <button onclick="del(event)">Delete</button>`;
    div.classList.add("book-container");
    container.append(div);
     popupoverlay.style.display="none";
    popupbox.style.display="none";

    desc.value="";
    booktitleinput.value="";
    bookauthorinput.value="";
}
function del(event)
{
    if(confirm("You want to delete.Are u sure ? "))
event.target.parentElement.remove();
}