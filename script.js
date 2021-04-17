const uniqueList = [1, 2, 3, 4, 5];
const newNumber = 11;

function uniquelist(arr, num) {
  if (!arr.includes(num)) {
    arr.push(num);
  }

  return arr;
}

function makeList(unique) {
  let html = `<ul>`;
  unique.forEach(item => {
    html += `<li>${item}</li>`;
  });
  html += `</ul>`;

  return html;
}

function display(html, id) {
  const list = document.getElementById(id);
  list.innerHTML = html;
}

const original = makeList(uniqueList);
display(original, "original-list");

const newList = makeList(uniquelist(uniqueList, newNumber));
display(newList, "new-list");

// USE OF Set
//Creating a set
const itemSet = new Set();
// or const itemSet = new Set([1,2,3,4])

function createSet(num) {
  if (itemSet.has(num)) {
    console.log(`The set has ${num} already`);
    return;
  } else {
    //Adding items to the set
    itemSet.add(num);
    // itemSet.add(2);
    // itemSet.add(3).add(4); //Chaining
    console.log(`A new item ${num} is added to the Set.`);
    return itemSet;
  }
}

createSet(1);
createSet(2);
createSet(3);
createSet(1);
console.log(createSet(4));

//Checking for values in a Set
function hasSet(num) {
  if (itemSet.has(num)) {
    console.log(`Set has ${num}`);
  } else {
    console.log(`Set doesn't have ${num}`);
  }
}

//Removing values in a set
function removeItemSet(setGroup, item) {
  if (setGroup.has(item)) {
    setGroup.delete(item);
    console.log(`${item} has been removed from the set!`);
  } else {
    console.log(`The item ${item} doesn't exist in the set!`);
  }

  return setGroup;
}

hasSet(1);
hasSet(5);

removeItemSet(itemSet, 2);

//REMOVING DUPLICATES FROM AN ARRAY
function removeDuplicates(arr) {
  const itemSet = new Set(arr);
  const array = [...itemSet]; //Convert Set to ARRAY

  const isUnique = itemSet.size === arr.length;
  if (!isUnique) {
    console.log(`${arr} is not unique!`);
  } else {
    console.log(`${arr} is UNIQUE!`);
  }
  return array;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 3]));

console.log(removeDuplicates([11, 12, 21, 13, 14]));
