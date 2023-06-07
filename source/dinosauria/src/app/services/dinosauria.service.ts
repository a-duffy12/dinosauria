import { Genus } from '../types/genus';
import { Country } from '../types/country';
import { Clade } from '../types/clade';
import { GenusStatus } from '../types/genusStatus';
import { Stage } from '../types/stage';

export class DinosauriaService {

  sampleClade: Clade = new Clade(0, 'Tyrannosaurinae', undefined);

  sampleGenus: Genus = new Genus(0, 'Tyrannosaurus', 'tyrant lizard', 1905, 'Osborn', ['rex'], [], [Country.UnitedStates, Country.Canada], this.sampleClade, GenusStatus.Valid, false, 12.0, 13.0, 8.0,10.5, 66.0, 68.0, Stage.Maastrichtian, 100);

  constructor() {}

  // will take in params eventually
  public getGenera(): Genus[] {
    return [this.sampleGenus]
  }

  public getAllGenera(): Genus[] {
    return [this.sampleGenus]
  }

  public getGeneraById(id: number): Genus {
    return this.sampleGenus;
  }

  public getClades(): Clade[] {
    return [this.sampleClade];
  }
}
