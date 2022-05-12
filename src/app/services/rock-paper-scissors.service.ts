import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RockPaperScissorsService {

  computerSelection: string = '';
  options:string[] = ['rock', 'paper', 'scissors'];

  constructor() { }

  getComputerSelection() {
    const numberChoice = Math.floor(Math.random() * this.options.length);
    this.computerSelection = this.options[numberChoice];
    return this.computerSelection;
  }

  playGame(playerSelection: string){
    const tie = 'Tie';
    const computerWins = 'Computer wins';
    const userWins = 'User wins';

    const choice1 = this.options.indexOf(playerSelection);
    const choice2 = this.options.indexOf(this.computerSelection);

    if (choice1 === choice2) {
      return tie;
    }
    if (choice1 === this.options.length - 1 && choice2 === 0) {
        return computerWins;
    }
    if (choice2 === this.options.length - 1 && choice1 === 0) {
        return userWins;
    }
    if (choice1 > choice2) {
        return userWins;
    } else {
        return computerWins;
    }
  }

}
