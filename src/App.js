import { useEffect, useState } from 'react'
import Bulb from './components/Bulb'

const appStyle = {
  display: 'flex',
  position: 'absolute',
  top: '0', right: '0', bottom: '0', left: '0',
  border: '0px',
}

const bulbData = [
  { name: "1", isSelected: false, color: '#f47068' },
  { name: "2", isSelected: false, color: '#ffb3ae' },
  { name: "3", isSelected: false, color: '#fff4f1' },
  { name: "4", isSelected: false, color: '#1697a6' },
  { name: "5", isSelected: false, color: '#0e606b' },
  { name: "6", isSelected: false, color: '#ffc24b' }
];



function App() {

  const [bulbs, setBulbs] = useState(bulbData)

  const setSelectedBulb = selectedItem => {
    const newBulbs = [...bulbs]
    newBulbs.forEach(bulb => {
      console.log(selectedItem.name)
      bulb.isSelected = bulb.name === selectedItem.name
    })
    setBulbs(newBulbs)
  }


  return (
    <div style={appStyle}>
      {bulbs.map(bulb =>
        <Bulb
          key={bulb.name}
          bgColor={bulb.color}
          isSelected={bulb.isSelected}
          select={() => setSelectedBulb(bulb)}
        />
      )}


    </div>
  );
}

export default App;
