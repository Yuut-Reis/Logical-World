import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _EnergyType: EnergyType = 'mana';
  static instances = 0;
  constructor(name: string) {
    super(name);
    Mage.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  get energyType(): EnergyType {
    return this._EnergyType;
  }
}