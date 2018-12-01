
	var nameC = 0;
	var Array = [];
function addName() {
	nameC++;
    var nform = document.getElementById("NameForm");
	var btn = document.getElementById("button");
	var t = document.createElement("Input");
	t.setAttribute("type","text");
    t.setAttribute("id","Mame" + nameC);
	
	var b = document.createElement("Br");
	nform.insertBefore(t, btn);
	nform.insertBefore(b, btn);
}

function subName() {
	if(nameC > 0){
	var nform = document.getElementById("NameForm");
	nform.removeChild(nform.childNodes[(nameC+1)*2]);    
	nform.removeChild(nform.childNodes[(nameC+1)*2]);
	nameC--;
	}
}

function next(){
	var jeff = 0;
	for (i = 0; i <= nameC; i++){
	 var name = document.getElementById("Mame"+i).value;
	 if (name == ""){
		jeff = 1;
		Array=[]; 
		alert("Uh Oh! Someone has been naughty! Did you type everyones name in?");
		break
	 }
	 else{
	 Array.push(name);
	 }
	 }
	 if (jeff == 0){
	 window.localStorage.setItem("Array", Array);
	 document.location.href = "Relations.html";
	 }
}

/* Relations */

function relationLoad(){
	var kevin = localStorage.getItem("Array");
    var list = document.getElementById("List");
	var dot;
	var elm;
	var check;
	var par;
	for (i = 0; i <= kevin.length; i= i+2){
		dot = document.createElement("li");
		elm = document.createTextNode(kevin[i]+": ");
		dot.appendChild(elm);
		par = document.createElement("p");
		dot.appendChild(par);
		var	chunkAf = kevin.slice(i+2,(kevin.length)+1);
		var	chunkBf = kevin.slice(0,i-1);
		if(i == 0){
			for  (p = 0; p <= chunkAf.length; p= p+2){
			check = document.createElement("INPUT");
			check.setAttribute("type", "checkbox");
			check.setAttribute("id", i+chunkAf[p]);
			checkname = document.createTextNode(chunkAf[p]);
			par.appendChild(checkname);
			par.appendChild(check);
		}
		}
		else if (i == (kevin.length)-1){
			for  (p = 0; p <= chunkBf.length; p= p+2){
			check = document.createElement("INPUT");
			check.setAttribute("type", "checkbox");
			check.setAttribute("id", i+chunkBf[p]);
			checkname = document.createTextNode(chunkBf[p]);
			par.appendChild(checkname);
			par.appendChild(check);
		}
		}
		else{	
		for  (p = 0; p <= chunkAf.length; p= p+2){
			check = document.createElement("INPUT");
			check.setAttribute("type", "checkbox");
			check.setAttribute("id", i+chunkAf[p]);
			checkname = document.createTextNode(chunkAf[p]);
			par.appendChild(checkname);
			par.appendChild(check);
		}
		for  (p = 0; p <= chunkBf.length; p= p+2){
			check = document.createElement("INPUT");
			check.setAttribute("type", "checkbox");
			check.setAttribute("id", i+chunkBf[p]);
			checkname = document.createTextNode(chunkBf[p]);
			par.appendChild(checkname);
			par.appendChild(check);
		}
		}
		list.appendChild(dot);
	}
}
