import { useState, useEffect } from "react";
import quotes from "./quotes.json";

const RandomQuote = () => {
  const [quote, setQuote] = useState("");

  const pickFromArray = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomQuote = pickFromArray(quotes);
      setQuote(randomQuote);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const styles ={
        borderRadius: '50%',
        width:"200px",
        height:"200px"
  }

  return (
    <div>
      <h2>Apple's Quotes</h2>
      <p>{quote.quote}</p>
      <p>{quote.author}</p>
      <img src={quote.image} style={styles}/>
    </div>
  );
};

export default RandomQuote;
