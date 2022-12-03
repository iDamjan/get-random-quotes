import { Country } from "../types/types";

export const getCountryByCode = (code: string): Promise<Country[]> =>
  fetch(`https://restcountries.com/v3.1/alpha/${code}`).then(
    (data) => data.json()
  );
