import { Entity } from './entity';
import { GenusStatus } from './genusStatus';
import { Stage } from './stage';
import { Country } from './country';
import { Clade } from './clade';

export class Genus extends Entity {
  public nameMeaning: string;
  public dateNamed: number;
  public authors: string;
  public species: string[];
  public possibleSpecies: string[];
  public countries: Country[];
  public clade: Clade;
  public status: GenusStatus;
  public colorationKnown: boolean;
  public minLength: number | null;
  public maxLength: number | null;
  public minWeight: number | null;
  public maxWeight: number | null;
  public minTime: number | null;
  public maxTime: number | null;
  public stage: Stage | null;
  public skeletalCompletion: number | null;

  constructor(id: number, name: string, nameMeaning: string, dateNamed: number, authors: string, species: string[], possibleSpecies: string[], countries: Country[], clade: Clade, status: GenusStatus, colorationKnown: boolean, minLength: number | null, maxLength: number | null, minWeight: number | null, maxWeight: number | null, minTime: number | null, maxTime: number | null, stage: Stage | null, skeletalCompletion: number | null) {
      super(id, name);
      this.nameMeaning = nameMeaning;
      this.dateNamed = dateNamed;
      this.authors = authors;
      this.species = species;
      this.possibleSpecies = possibleSpecies;
      this.minLength = minLength;
      this.maxLength = maxLength;
      this.minWeight = minWeight;
      this.maxWeight = maxWeight;
      this.minTime = minTime;
      this.maxTime = maxTime;
      this.stage = stage;
      this.countries = countries;
      this.clade = clade;
      this.status = status;
      this.skeletalCompletion = skeletalCompletion;
      this.colorationKnown = colorationKnown;
    }
}
