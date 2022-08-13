import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(private onePlayer: Fighter, private monsters: SimpleFighter[]) {
    super(onePlayer);
  }

  siege(): SimpleFighter[] {
    const filterDeath = this.monsters.filter(
      (monsterTurn) => monsterTurn.lifePoints > 0,
    );
    return filterDeath;
  }

  private win = this.player.lifePoints <= 0 || !this.siege().length;

  fight(): number {
    while (!this.win) {
      this.player.attack(this.siege()[0]);
      if (!this.siege().length) return 1;
      this.siege().forEach(
        (monster) => monster.attack(this.player),
      );
      if (this.player.lifePoints <= 0) return -1;
    }
    return 0;
  }
}