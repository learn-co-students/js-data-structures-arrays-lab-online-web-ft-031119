// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
	// body...
	drivers.push(name);
}

function destructivelyPrependDriver(name){
	// body...
	drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
	// body...
	drivers.pop();
}

function destructivelyRemoveFirstDriver() {
	drivers.shift();
}

function appendDriver(name) {
	// body...
	let newdrivers = [...drivers,name];
	return newdrivers;
}

function prependDriver(name) {
	let newdrivers = [name,...drivers];
	return newdrivers;
}

function removeLastDriver() {
	let copyofdrivers = drivers;

	return copyofdrivers.slice(0,drivers.length - 1);
}

function removeFirstDriver() {
	// body...
	let newdrivers = drivers;

	return newdrivers.slice(1);
}