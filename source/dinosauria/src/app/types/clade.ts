import { Entity } from './entity';

export class Clade extends Entity {
  public parent?: Clade;

  constructor(id: number, name: string, parent?: Clade) {
    super(id, name);
    this.parent = parent;
  }
}
