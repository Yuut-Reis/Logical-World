import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _EnergyType: EnergyType = 'stamina';
  static instances = 0;
  constructor(name: string) {
    super(name);
    Warrior.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  get energyType(): EnergyType {
    return this._EnergyType;
  }
}