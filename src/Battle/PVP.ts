import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private onePlayer: Fighter, private duoPlayer: Fighter) {
    super(onePlayer);
  }

  private win = this.player.lifePoints <= 0 || this.duoPlayer.lifePoints <= 0;

  fight(): number {
    while (!this.win) {
      this.player.attack(this.duoPlayer);
      if (this.duoPlayer.lifePoints <= 0) return 1;
      this.duoPlayer.attack(this.player);
      if (this.player.lifePoints <= 0) return -1;
    }
    return 0;
  }
}