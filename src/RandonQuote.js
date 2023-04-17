import { useState, useEffect } from "react";
import quotes from "./quotes.json";

const RandomQuote = () => {
  const [quote, setQuote] = useState("");

  const pickFromArray = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const generateRandomQuote = () => {
    const randomQuote = pickFromArray(quotes);
    setQuote(randomQuote);
  };

  useEffect(() => {
    generateRandomQuote();
  }, []);

 return (
   <div>
     <h2>Random Quote</h2>
     <p>{quote.quote}</p>
     <p>- {quote.author}</p>
     <button onClick={generateRandomQuote}>Generate Random Quote</button>
   </div>
 );
};

export default RandomQuote;
