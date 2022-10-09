# Band Filtering

Given the following data:

```js
[{
  name: "Reel Big Fish",
  instruments: ["guitar", "drums", "bass", "voice", "trumpet", "sax", "trombone"],
},{
  name: "The Weakerthans",
  instruments: ["guitar", "drums", "bass", "voice"],
},{
  name: "Giveton Gelin Quintet",
  instruments: ["piano", "drums", "bass", "trumpet", "sax"],
},{
  name: "Deadmau5",
  instruments: ["computer"],
},{
  name: "311",
  instruments: ["drums", "guitar", "bass", "voice", "turntable"],
}]
```

Create derivative state for all band names and unique instruments and display the list in the `src/App.js` file. You should not modify the data directly or call `useState` or `useEffect` again.

The result should look like this:

```
These bands:

* 311
* Deadmau5
* Giveton Gelin Quintet
* Reel Big Fish
* The Weakerthans

Have the following instruments:

* Bass
* Computer
* Drums
* Guitar
* Piano
* Sax
* Trombone
* Trumpet
* Turntable
* Voice
```
