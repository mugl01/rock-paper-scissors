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
  totalGames: number = 0;
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
    })
  }

  navigateToHome(){
    this.router.navigate(['home']);
  }

  setPlayerSelection(item: string){
    this.computerSelection = this.rockPaperScissors.getComputerSelection()
    this.playerSelection = item;
    this.result = this.rockPaperScissors.playGame(this.playerSelection);
    this.setScore(this.result);
  }

  setScore(result) {
    this.totalGames++;
    if(result === 'User won') {
      this.score++;
    }
  }

  resetScore() {
    this.score = 0;
    this.totalGames = 0;
    this.playerSelection = '';
    this.computerSelection = '';
    this.result = '';
  }

}
