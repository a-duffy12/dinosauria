import { Component, OnInit } from '@angular/core';
import { DinosauriaService } from 'src/app/services/dinosauria.service';
import { MatTableModule } from '@angular/material/table';

export interface GenusData {
  id: number,
  name: string,
  meaning: string,
  described: string,
  species: string,
  clade: string,
  synonyms: string,
  countries: string,
  stage: string,
  time: string,
  length: string,
  weight: string,
  coloration: boolean,
  completion: string
}

@Component({
  selector: 'app-dinosauria-table',
  templateUrl: './dinosauria-table.component.html',
  styleUrls: ['./dinosauria-table.component.scss'],
  standalone: true,
  imports: [DinosauriaService, MatTableModule]
})

export class DinosauriaTableComponent implements OnInit {

  columnNames: string[] = ['Genus Name', 'Described', 'Status', 'Species', 'Clade', 'Synonyms', 'Countries', 'Stage', 'Time', 'Length', 'Weight', 'Coloration Known', 'Completion'];
  columnData: GenusData[] = [];

  constructor(private service: DinosauriaService) {}

  ngOnInit(): void {
    this.loadGenera();
  }

  loadGenera(): void {
    const genera = this.service.getAllGenera();

    this.columnData = genera.map(g => ({
      id: g.id,
      name: g.name,
      meaning: g.nameMeaning,
      described: `${g.authors}, ${g.dateNamed}`,
      species: g.species.join(', '),
      clade: g.clade.name,
      synonyms: g.possibleSpecies.join(', '),
      countries: g.countries.map(c => c.toString()).join(', '),
      stage: g.stage?.toString() ?? 'Unknown',
      time: this.nullableRangeToString(g.maxTime, g.minTime, 'mya'),
      length: this.nullableRangeToString(g.minLength, g.maxLength, 'm'),
      weight: this.nullableRangeToString(g.minWeight, g.maxWeight, 'kg'),
      coloration: g.colorationKnown,
      completion: g.skeletalCompletion !== null ? `${g.skeletalCompletion} %` : `Unavailable`
    }));
  }

  private nullableRangeToString(first: number | null, second: number | null, units: string): string {
    if (first === null && second === null) {
      return `Unknown`;
    } else if (first === null && second !== null) {
      return `${second} ${units}`;
    } else if (first !== null && second === null) {
      return `${first} ${units}`;
    } else {
      return `${first} - ${second} ${units}`;
    }
  }
}
