import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RockPaperScissorsService } from 'src/app/services/rock-paper-scissors.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  playerName: string = '';
  score: number = 0;
  playerSelection: string = '';
  computerSelection: string = '';
  result: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private rockPaperScissorsService: RockPaperScissorsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.playerName = params['name'];
    });
    const getPlayers = JSON.parse(localStorage.getItem('players'));
    for(let player in getPlayers) {
      if(player === this.playerName) {
        this.score = getPlayers[player];
      }
    }
  }

  navigateToHome(){
    this.saveCurrentGame();
    this.router.navigate(['home']);
  }

  setPlayerSelection(item: string){
    this.resetSelections();
    this.playerSelection = item;
    setTimeout(() => {
      this.computerSelection = this.rockPaperScissorsService.getComputerSelection();
      this.result = this.rockPaperScissorsService.playGame(this.playerSelection);
      this.setScore(this.result);
    }, 1000);
    this.saveCurrentGame();
  }

  setScore(result: string) {
    if(result === 'User wins') {
      this.score++;
    }
  }

  resetScore() {
    this.score = 0;
    this.resetSelections();
  }

  resetSelections() {
    this.playerSelection = '';
    this.computerSelection = '';
    this.result = '';
  }

  saveCurrentGame() {
    const getPlayers = JSON.parse(localStorage.getItem('players')) || {};
    getPlayers[this.playerName]= this.score;
    localStorage.setItem('players', JSON.stringify(getPlayers));
  }

}
