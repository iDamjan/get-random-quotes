import { Nationalities } from "../types/types";

export const getNationalitiesByName = (name: string): Promise<Nationalities> =>
  fetch(`https://api.nationalize.io?name=${name}`).then((data) => data.json());
