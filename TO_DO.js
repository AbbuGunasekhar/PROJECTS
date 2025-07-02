var text=document.getElementById("text");
var tasks=document.getElementsByClassName("tasks");
 var table=document.getElementById("table");
//  var dall=document.getElementById("delall");
var task_num=1;

function delet()
{
    text.value="";
}

function fun()
{
    // if(dall.style.display=="none")
    // {
    //     dall.style.display="block";
    //     dall.style.margin="auto";
    // }
    table.style.display="block";

   if(text.value!=""){


    var row=document.createElement("tr");

    var c1=document.createElement("td");
    var c2=document.createElement("td");
    var c3=document.createElement("td");
    var c4=document.createElement("td");
   

    c1.textContent=task_num++;
    c2.textContent=text.value;

    var check1=document.createElement("input");
    check1.type="checkbox";

    check1.style.width="30px";
 check1.style.cursor="pointer";

    check1.onclick=completed;


    c3.append(check1);
    let span=document.createElement("span");
    span.textContent="Completed"
    c3.append(span);

    row.appendChild(c1);
     row.appendChild(c2);
      row.appendChild(c3);

      var deleteButton=document.createElement("input");
      deleteButton.type="button";
      deleteButton.value="DELETE";
      deleteButton.style.backgroundColor="red";
      deleteButton.style.borderRadius="6px";
       deleteButton.style.padding="6px";
deleteButton.style.cursor="pointer";
      c4.append(deleteButton);

      row.append(c4);

       [c1,c2,c3,c4].forEach(cell=>{
        cell.style.border="1px solid orange";
        cell.style.padding="8px";
        cell.style.color="white";
    }
    );
     

      deleteButton.onclick=deleteRow;


    table.appendChild(row);

    tasks[0].appendChild(table);

    }
}
function expand()
{
   text.style.width="40%";
  
}

function completed(event)
{
    if(event.target.checked)
    {
var row=event.target.parentElement.parentElement;
row.children[0].style.textDecoration="line-through";
row.children[1].style.textDecoration="line-through";
    }
    else
    {
        var row=event.target.parentElement.parentElement;
row.children[0].style.textDecoration="none";
row.children[1].style.textDecoration="none";
    }
}

function deleteRow(event)
{
   
    var row = event.target.parentElement.parentElement;
row.remove();

var allrows=document.querySelectorAll("tr");

for(var i=1;i<allrows.length;i++)
{
    allrows[i].children[0].textContent=i;
}
   task_num=allrows.length;

}


// function delall()
// {
//     dall.style.display="none";
//     table.innerHTML="";
// }
