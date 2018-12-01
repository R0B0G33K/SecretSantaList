
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
	 document.write(Array);
	 }
}
