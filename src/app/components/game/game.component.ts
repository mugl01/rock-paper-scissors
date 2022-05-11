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
    private rockPaperScissors: RockPaperScissorsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.playerName = params['name'];
    });
    let getPlayers = JSON.parse(localStorage.getItem('players'));
    for(let player in getPlayers) {
      if(player === this.playerName) {
        this.score = getPlayers[player];
      }
    } 
  }

  navigateToHome(){
    let getPlayers = JSON.parse(localStorage.getItem('players')) || {};
    getPlayers[this.playerName]= this.score;
    localStorage.setItem('players', JSON.stringify(getPlayers));
    this.router.navigate(['home']);
  }

  setPlayerSelection(item: string){
    this.computerSelection = this.rockPaperScissors.getComputerSelection()
    this.playerSelection = item;
    this.result = this.rockPaperScissors.playGame(this.playerSelection);
    this.setScore(this.result);
  }

  setScore(result: string) {
    if(result === 'User won') {
      this.score++;
    }
  }

  resetScore() {
    this.score = 0;
    this.playerSelection = '';
    this.computerSelection = '';
    this.result = '';
  }

}
