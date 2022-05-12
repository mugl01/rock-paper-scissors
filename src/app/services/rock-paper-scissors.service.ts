import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RockPaperScissorsService {

  computerSelection: string = '';
  playerSelection: string = '';


  constructor() { }

  getComputerSelection() {
    const options = ['rock', 'paper', 'scissors'];
    const numberChoice = Math.floor(Math.random() * options.length);
    this.computerSelection = options[numberChoice];
    return this.computerSelection;
  }

  playGame(playerSelection: string){
    if(playerSelection === this.computerSelection) {
      return 'Tie';
    }
    if(playerSelection === 'rock'){
      if(this.computerSelection === 'paper') {
        return 'Computer won';
      }else {
        return 'User won';
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
        return 'Computer won';
      } else {
        return 'User won';
      }
    }
  }

}
