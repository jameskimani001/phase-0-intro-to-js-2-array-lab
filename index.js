let cats = ["Milo", "Otis", "Garfield"];

// Destructive Methods

function destructivelyAppendCat(name) {
  cats.push(name); // Appends a cat to the end of the cats array
  return cats;
}

function destructivelyPrependCat(name) {
  cats.unshift(name); // Prepends a cat to the beginning of the cats array
  return cats;
}

function destructivelyRemoveLastCat() {
  cats.pop(); // Removes the last cat from the cats array
  return cats;
}

function destructivelyRemoveFirstCat() {
  cats.shift(); // Removes the first cat from the cats array
  return cats;
}

// Non-Destructive Methods

function appendCat(name) {
  return [...cats, name]; // Appends a cat and returns a new array
}

function prependCat(name) {
  return [name, ...cats]; // Prepends a cat and returns a new array
}

function removeLastCat() {
  return cats.slice(0, -1); // Removes the last cat and returns a new array
}

function removeFirstCat() {
  return cats.slice(1); // Removes the first cat and returns a new array
}



