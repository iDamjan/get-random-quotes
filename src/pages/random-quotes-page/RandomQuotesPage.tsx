import { useState, useEffect } from "react";
import { getRandomQuote } from "../../api/quotesApi";
import { RandomQuote } from "../../components/random-quote/RandomQuote";
import { RandomQuotesButtons } from "../../components/random-quote/RandomQuotesButtons/RandomQuotesButtons";
import { QuoteType } from "../../types/types";
import classes from "./random-quotes-page.module.scss";

export const RandomQuotesPage = () => {
  const [error, setError] = useState(false);
  const [randomQuote, setRandomQuote] = useState<QuoteType>();

  useEffect(() => {
    const init = async () => {
      try {
        const data = await getRandomQuote();

        setRandomQuote(data);
      } catch (e) {
        setError(true);
      }
    };

    void init();
  }, []);

  if (!randomQuote) return <></>;

  return (
    <>
      {error ? (
        <h1 style={{ color: "white" }}>
          Connection problem, please try again later
        </h1>
      ) : (
        <div className={classes.container}>
          <RandomQuote
            sentence={randomQuote.sentence}
            name={randomQuote.character.name}
          />
          <RandomQuotesButtons
            setError={setError}
            setRandomQuote={setRandomQuote}
          />
        </div>
      )}
    </>
  );
};
