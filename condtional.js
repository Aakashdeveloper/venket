function add(a,b){
	return a+b;
}

var add = function(a,b){
	return a+b;
}

function validate(a){
	if(a=="venket"||a=="aakash"||a=="rahul"){
		console.log("allow")
	}else{
		console.log("allow")
	}
}

function vvalidate(a, b){
	if(a=="venket" && b="aakash"){
		console.log("allow")
	}else{
		console.log("allow")
	}

}

function vvalidate(a, b){
	if(a!="venket" && b="aakash"){
		console.log("allow")
	}else{
		console.log("allow")
	}

}

function vvalidate(a, b){
	if(a!="venket" || b="aakash"){
		console.log("allow")
	}else{
		console.log("allow")
	}

}