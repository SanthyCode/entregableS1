import React from 'react';
import QuoteBox from './QuoteBox';


const Cards = ({ randomQuote, randomColor, getRandomAll }) => {

    return (
        <div>
            <QuoteBox randomQuote={randomQuote} 
            randomColor={randomColor} 
            getRandomAll={getRandomAll} />
        </div>
    );
};

export default Cards;