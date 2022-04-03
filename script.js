var x;

function show()
{
if (submit.value!= "Submit")
{
  submit.value = "Submit";
}
x = document.getElementById("fname").value;
var ul = document.getElementById("ish");
var li = document.createElement("li");
var editbtn = document.createElement("button");
var delbtn = document.createElement("button");
li.className = "styling_li";
editbtn.className = "edit";
delbtn.className = "del";
  
document.getElementById("fname").value = "";
editbtn.appendChild(document.createTextNode("Edit"));
delbtn.appendChild(document.createTextNode("Delete"));
li.appendChild(document.createTextNode(x));
li.appendChild(editbtn);
li.appendChild(delbtn);
ul.appendChild(li);


delbtn.addEventListener("click",remove_item);
editbtn.addEventListener("click",edit_item);
}


function remove_item(e)
{
var text = "Are you SURE you want to delete the "+ x + "Task ?"


  if(confirm(text)==true)
  {
    alert("Good Bye Task...")
    ish.removeChild(e.target.parentNode);
  }

  else
  {
    alert("Pheww... That was close");
  }

  
}

function edit_item(e)
{
var content = e.target.parentNode.childNodes[0].data;
document.getElementById("submit").value = "Edit";
document.getElementById("fname").value = content;  
ish.removeChild(e.target.parentNode);


}

