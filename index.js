// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

// prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// removes the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
}

// removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
    return [...cats, name];
}

// prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
    return [name, ...cats];
}

// removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
    //return [...cats].pop();  pop returns the removed element, not the cut array
    return cats.slice(0,-1);
}

// removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
    //return [...cats].shift();  shift returns the removed element, not the cut array
    return cats.slice(1);
}
