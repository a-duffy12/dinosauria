import { Entity } from './entity';
import { GenusStatus } from './genusStatus';
import { Stage } from './stage';
import { Country } from './Country';
import { Clade } from './clade';

export class Genus extends Entity {
  public dateNamed: number;
  public authors: string;
  public species: string[];
  public possibleSpecies: string[];
  public holotypeCountry: Country;
  public countries: Country[];
  public clade: Clade;
  public status: GenusStatus;
  public colorationKnown: boolean;
  public length?: number;
  public maxLength?: number;
  public weight?: number;
  public maxWeight?: number;
  public minTime?: number;
  public maxTime?: number;
  public stage?: Stage;
  public skeletalCompletion?: number;

  constructor(id: number, name: string, dateNamed: number, authors: string, species: string[], possibleSpecies: string[], holotypeCountry: Country, countries: Country[], clade: Clade, status: GenusStatus, colorationKnown: boolean, length?: number, maxLength?: number, weight?: number, maxWeight?: number, minTime?: number, maxTime?: number, stage?: Stage, skeletalCompletion?: number) {
      super(id, name);
      this.dateNamed = dateNamed;
      this.authors = authors;
      this.species = species;
      this.possibleSpecies = possibleSpecies;
      this.length = length;
      this.maxLength = maxLength;
      this.weight = weight;
      this.maxWeight = maxWeight;
      this.minTime = minTime;
      this.maxTime = maxTime;
      this.stage = stage;
      this.holotypeCountry = holotypeCountry;
      this.countries = countries;
      this.clade = clade;
      this.status = status;
      this.skeletalCompletion = skeletalCompletion;
      this.colorationKnown = colorationKnown;
    }
}
