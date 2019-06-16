// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function appendDriver(name) {
  let newDrivers = [...drivers, name];
  return newDrivers
}

function prependDriver(name) {
  let newDrivers = [name, ...drivers];
  return newDrivers;
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length-1);
}

function removeFirstDriver() {
  return drivers.slice(1);
}
