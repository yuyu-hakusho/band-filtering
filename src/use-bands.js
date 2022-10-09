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

  return Promise.resolve(bands)
}

export default function useBands() {
  const [bands, setBands] = useState([])
  useEffect(() => {
    getData().then(bands => {
      setBands(bands)
    })
  }, [])

  return bands
}
