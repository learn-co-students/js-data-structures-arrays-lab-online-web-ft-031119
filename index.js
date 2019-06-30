const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver() {
  drivers.push('Ralph');
}

function destructivelyPrependDriver() {
  drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  let array = [...drivers.slice(), name]
  return array;
}

function prependDriver(name) {
  let array = [name, ...drivers];
  return array;
}

function removeLastDriver() {
  let array = drivers.slice(0, drivers.length - 1)
  return array;
}

function removeFirstDriver() {
  let array = drivers.slice(1)
  return array;
}