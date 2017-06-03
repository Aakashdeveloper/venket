function Dog(breed){
	this.breed	= breed;
};

Dog.prototype.bark =function(){
	console.log("bpoooooo")
};

var buddy = new Dog("gold retriever");

/*buddy.bark=function(){
	console.log("bpoooooo")
}*/
buddy.bark();




var snoopy = new Dog("beagle");

snoopy.bark();

var abc = new Dog("dfbd");
abc.bark();

