export interface QuoteType {
  character: characterType;
  sentence: string;
}

export interface RandomQuoteType {
  randomQuote: QuoteType;
  setRandomQuote: (value: QuoteType) => void;
  setError: (value: boolean) => void;
}

export interface Nationalities {
  country: Nationality[];
}

export interface QuoteWithNationality extends QuoteType {
  countryImage: string;
  countryId :string;
}

export interface Country {
  flags: {
    svg: string;
  };
}

export interface RandomQuoteProps {
  setRandomQuote: (value:QuoteType) => void;
  setIsLoading: (value:boolean) => void;
  setError: (value:boolean) => void;
}

interface Nationality {
  country_id: string;
  probability: number;
}

interface characterType {
  house: {
    name: string;
    slug: string;
  };
  name: string;
  slug: string;
}
