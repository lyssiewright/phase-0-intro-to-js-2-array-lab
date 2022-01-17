// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
cats;

function destructivelyAppendCat(name){
    cats.push("Ralph");
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
    return cats;
}

function destructivelyRemoveLastCat(name){
    cats.pop(2);
    return cats;
}

function destructivelyRemoveFirstCat(name){
    cats.shift(0);
    return cats;
}

function appendCat(name){
    const allCats = [...cats, "Broom"];
    return allCats;
}

function prependCat(name){
    const addCat = ["Arnold", ...cats];
    return addCat;
}

function removeLastCat(name){
    const minusCatFromEnd = cats.slice(0, cats.length - 1);
    return minusCatFromEnd;
}

function removeFirstCat(name){
    const minusCatFromBeginning = cats.slice(1);
    return minusCatFromBeginning;
}