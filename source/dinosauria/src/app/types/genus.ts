interface Genus {
  id: number;
  name: string;
  species: string[];
  possibleSpecies: string[];
  length?: number;
  maxLength?: number;
  weight?: number;
  maxWeight?: number;
  minTime?: number;
  maxTime?: number;
  stage?: Stage;
  holotypeCountry: Country;
  countries: Country[];
  clade: Clade;
  status: GenusStatus;
  skeletalCompletion?: number;
  colorationKnown: boolean;
}
