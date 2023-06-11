import './App.css';
import List from './List';
import useBands from './use-bands';

function App() {
  const bands = useBands();

  const unique = array => [...new Set(array)] //creates the function that takes an array and makes the contents within the array have unique values

  const capitalize = string => `${string.charAt(0).toUpperCase()
}${string.slice(1)}`//string.slice - take the string and take the character from index 1 and move to the end - aka the rest stays the same - copy the rest of the string 

//we want to create an array that just contains the name of the bands
//Original code: const bandNames = []
 //Option 1: const bandNames = [...new Set(bands.map((item)=>item.name))];
 //pretty sure this isn't how you do it

 //Option 2: 
 const bandNames = bands.map(({name})=>name).sort();

 //kyles: const bandNames = unique(bands.map(band => band.name)).sort() 
 //create a new array called bandNames, which looks at the band.name from each bands array element and makes the contents in the new array unique, and then sort it alphabetically  
 console.log(bandNames) 
 //We then want to show that list, in a sorted view
  //bandNames.sort(); //unecessary since you can add the sort function to the constant

//Original code: const uniqueInstruments = []; -- this is just to hint at what the value should be aka an array

//now we want to create a unique list of instruments, and then capitalize the list
//1. create a list of all instruments -- merge the arrays into 1? 

const instruments = bands.map(({instruments})=>instruments); //creates an array of arrays
console.log(instruments);

const instruments2 = 
//1. Not iterable error: [...instruments[0],...instruments[1],...instruments[2],...instruments[3],...instruments[4]];

//2. pretty sure this is not good, not iterable. this just contains undefined values for the items in the new array. flatMap combines the array of arrays dynamically - not carded
[].concat(instruments[0], instruments[1],instruments[2],instruments[3],instruments[4]); //combines the contents of one array into 1

console.log(instruments2);


//2. Create unique list of instruments, and sort it
  
  const uniqueInstruments = unique(instruments2).sort(); 
  console.log(uniqueInstruments);

//3. Capitalize each thing in the unique instrument array - got stuck
/*
a. for loop does not work
 for (let i = 0; i < uniqueInstruments.length; i++) {
     capitalize(uniqueInstruments[i]);
 }

b. using map to apply a function not work

*/
   const uniqueInstruments2 = uniqueInstruments.map(capitalize);
  console.log(uniqueInstruments2);


//Kyle's const uniqueInstruments = unique(bands.flatMap(band => band.instruments.map(capitalize))).sort()
//flatMap

  return (
    <div className="App">
      <p>These bands:</p>
      <List items={bandNames} />

      <p>Have the following instruments:</p>
      <List items={uniqueInstruments2} />
    </div>
  );
}

export default App;
