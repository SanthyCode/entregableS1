import React from 'react'

const QuoteBox = ({ randomQuote, randomColor, getRandomAll }) => {

    let {quote, author} = randomQuote

const style = {
    color: randomColor
}
const styleBg = {
    backgroundColor: randomColor
}
console.log(styleBg)


    return (
        <div className='card' style={style}> 
        <p className='card__quote'><span>"</span>  {quote}</p>
        <p className='card__author'>{author}</p>
        <button onClick={getRandomAll} className='card__btn' style={styleBg}> &#62; </button>
        </div>
    )

}

export default QuoteBox