 var val=document.getElementById("inp");

 function display(event)
 {
    var temp=event.target.textContent;
    val.value+=temp;
 }
function ac()
{
    val.value="";
}
function del()
{
    var s=val.value;
    var es=s.substring(0,s.length-1);
    val.value=es;
}
 function result()
 {
    var s=val.value;
    if(s.includes("*"))
    {
        var first=s.split("*")[0];
         var second=s.split("*")[1];
         if(second=="")
            alert("Invalid Operation! Enter Exacly 2 values");
         console.log(first+" "+second);
            var ans=Number(first)*Number(second);
       val.value=ans;
    }
    else if(s.includes("/"))
    {
        var first=s.split("/")[0];
         var second=s.split("/")[1];

         if(second=="")
            alert("Invalid Operation! Enter Exacly 2 values");

         console.log(first+" "+second);
            var ans=Number(first)/Number(second);
       val.value=ans;
    }
    else if(s.includes("%"))
    {
        var first=s.split("%")[0];
         var second=s.split("%")[1];

         if(second=="")
            alert("Invalid Operation! Enter Exacly 2 values");

         console.log(first+" "+second);
            var ans=(Number(first)*Number(second))/100;
       val.value=ans;
    }
    else if(s.includes("+"))
    {
        var first=s.split("+")[0];
         var second=s.split("+")[1];

         if(second=="")
            alert("Invalid Operation! Enter Exacly 2 values");

         console.log(first+" "+second);
            var ans=Number(first)+Number(second);
       val.value=ans;
    }
    else if(s.includes("-"))
    {
        var first=s.split("-")[0];
         var second=s.split("-")[1];

         if(second=="")
            alert("Invalid Operation! Enter Exacly 2 values");

         console.log(first+" "+second);
            var ans=Number(first)-Number(second);
       val.value=ans;
    }
 }