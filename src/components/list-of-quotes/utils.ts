import { getCountryByCode } from "../../api/countriesApi";
import { getNationalitiesByName } from "../../api/nationalitiesApi";
import { getQuotes } from "../../api/quotesApi";
import { QuoteWithNationality } from "../../types/types";

export const getQuotesWithNationalities = async (): Promise<
  QuoteWithNationality[]
> => {
  const data = await getQuotes(10);
  let quotesWithNationalities: QuoteWithNationality[] = [];
  for (let i = 0; i < data.length; i++) {
    const name = data[i].character?.name.split(" ")[0];
    const nationality = await getNationalitiesByName(name);
    const country = await getCountryByCode(nationality.country[0]?.country_id);
    const countryImage = country[0]?.flags.svg;
    quotesWithNationalities.push({
      ...data[i],
      countryImage,
      countryId: nationality.country[0]?.country_id,
    });
  }
  return quotesWithNationalities;
};
