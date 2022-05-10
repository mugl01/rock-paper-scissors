import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RockPaperScissorsService {

  computerSelection: string = '';
  playerSelection: string = '';

  constructor() { }

  getComputerSelection() {
    const numberChoise = Math.floor(Math.random() * 3);
    switch(numberChoise){
      case 0:
        this.computerSelection = 'rock';
        return this.computerSelection;
      case 1:
        this.computerSelection = 'paper';
        return this.computerSelection;
      case 2:
        this.computerSelection = 'scissors';
        return this.computerSelection;
    }
  }

  playGame(playerSelection: string){
    if(playerSelection === this.computerSelection) {
      return 'Tie'
    }
    if(playerSelection === 'rock'){
      if(this.computerSelection === 'paper') {
        return 'Computer won';
      }else {
        return 'User won'
      }
    }
    if(playerSelection === 'paper') {
      if(this.computerSelection === 'scissors') {
        return 'Computer won';
      } else {
        return 'User won';
      }
    }
    if(playerSelection === 'scissors') {
      if(this.computerSelection === 'rock') {
        return 'Computer won'
      } else {
        return 'User won'
      }
    }
  }

}
