var bob = new Object();
bob.age =15;

bob.setAge = function(newAge){
	bob.age = newAge
};
bob.setAge(10);


var mary = new Object();
mary.age=10
mary.setAge(12);

/////////////////////////////This///////////////////////////////
var setAge	= function(newAge){
	this.age =newAge
}
var bob = new Object();
bob.age =20
bob.setAge(10);

var venket = new Object()
venket.age=24
venket.setAge(25);

////////////////////Class concept//////////////////////////////

function Person(name, age){
	this.name =name;
	this.age = age;
	this.color="white";
}

var bob = new Person("bob smith",20);
var susan = new Person("susan a" ,30);

///////////////Method in class////////////////////////
function verb(name){
	this.name= name
	this.naming = function(){
		console.log("i am "+this.name)
	}
}

function adding(one, two){
	this.one= one;
	this.two = two
	this.add = function(){
		return this.one+this.two
	}
}


var math = new adding(5, 6);
bob.add();