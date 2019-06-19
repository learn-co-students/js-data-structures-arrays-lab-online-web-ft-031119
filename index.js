// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const copy_of_drivers = drivers.slice();
  copy_of_drivers.push(name);
  return copy_of_drivers;
}

function prependDriver(name) {
  const copy_of_drivers = drivers.slice();
  copy_of_drivers.unshift(name);
  return copy_of_drivers;
}

function removeLastDriver() {
  const copy_of_drivers = drivers.slice();
  copy_of_drivers.pop();
  return copy_of_drivers;
}

function removeFirstDriver() {
  const copy_of_drivers = drivers.slice();
  copy_of_drivers.shift();
  return copy_of_drivers;
}
