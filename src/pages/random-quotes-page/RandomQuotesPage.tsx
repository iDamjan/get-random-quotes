import { useState, useEffect } from "react";
import { getRandomQuote } from "../../api/quotesApi";
import { RandomQuote } from "../../components/random-quote/RandomQuote";
import { RandomQuotesButtons } from "../../components/random-quote/random-quotes-buttons/RandomQuotesButtons";
import { QuoteType } from "../../types/types";
import classes from "./random-quotes-page.module.scss";

export const RandomQuotesPage = () => {
  const [error, setError] = useState(false);
  const [randomQuote, setRandomQuote] = useState<QuoteType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const init = async () => {
      try {
        setIsLoading(true)
        const data = await getRandomQuote();
        setRandomQuote(data);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false)
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
            isLoading = {isLoading}
          />
          <RandomQuotesButtons
            setRandomQuote={setRandomQuote}
            setIsLoading = {setIsLoading}
            setError = {setError}
          />
        </div>
      )}
    </>
  );
};
