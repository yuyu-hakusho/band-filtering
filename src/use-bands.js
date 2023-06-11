import { useEffect, useState } from 'react';

function getData() {
  const bands = [{
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

  return Promise.resolve(bands) //promise lets the code happen ascynchronously, this will return later 
}

export default function useBands() {
  const [bands, setBands] = useState([])
  useEffect(() => { //historically, useEffect was used to keep an eye on a change on a component and then use a function to fetch the data and save it to the state
    getData().then(bands => {
      setBands(bands)
    })
  }, [])

  return bands
}
