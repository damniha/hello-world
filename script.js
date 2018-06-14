var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var list=document.querySelector("ul");

toggleDoneClass();
button.addEventListener("click", addingElement);

function checking(){
	var pureList=list.children;
	var check=false;
	for(var i=0;i<pureList.length;i++)
		if(pureList[i].innerHTML===userinput.value)
			return true;
	return false;
}
function adding(){
	var createElement=document.createElement("li");
	var createContent=document.createTextNode(userinput.value);
	createElement.appendChild(createContent);
	var createButton=document.createElement("button");
	var createContentButton=document.createTextNode("Delete");
	createButton.appendChild(createContentButton);
	createButton.style="margin-left:15px;";
	createElement.appendChild(createButton);
	list.appendChild(createElement);
	input.value="";
}

function addingElement(){
	if(!checking() && userinput.value!=""){
		adding();
	}
}

input.addEventListener("keypress",function(event){
	if(event.which==13){
		if(!checking() && userinput.value!=""){
			adding();
		}
	}
})

function toggleDoneClass(){
var lis = document.querySelectorAll("li");

    for (var i=0; i<lis.length; i++) {
        lis[i].addEventListener('click', addClassDone, false);
    }
}

function addClassDone() { 
    this.classList.toggle('done');   
} 