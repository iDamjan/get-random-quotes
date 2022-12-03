import { QuoteType } from "../types/types";

export const getQuotes = (quantity: number): Promise<QuoteType[]> =>
  fetch(`https://api.gameofthronesquotes.xyz/v1/random/${quantity}`).then(
    (data) => data.json()
  );

  export const getRandomQuote = (): Promise<QuoteType> =>
  fetch(`https://api.gameofthronesquotes.xyz/v1/random/1`).then(
    (data) => data.json()
  );

