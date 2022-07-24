
import { useState } from 'react'
import React from 'react';
import './App.css'
import Cards from './components/Cards'
import quote from './json/users.json'
import colors from './utils/colors'





function App() {

  const getElemet = arr => {
    const random = Math.floor(Math.random() * arr.length)
    return arr[random]

  }

  const quoteRandom = getElemet(quote)
  const colorRandom = getElemet(colors)

  const [randomQuote, setrandomQuote] = useState(quoteRandom)
  const [randomColor, setrandomColor] = useState(colorRandom)
  
  const getRandomAll = () => {
    let quoteRandom = getElemet(quote)
    let colorRandom = getElemet(colors)

    setrandomQuote(quoteRandom)
    setrandomColor(colorRandom)
  }

  const styleBg = {
    backgroundColor: randomColor
}

  return (
    <div className="App" style={styleBg}>
      <Cards randomQuote={randomQuote} 
            randomColor={randomColor} 
            getRandomAll={getRandomAll}  />
    </div>
  )
}
export default App
