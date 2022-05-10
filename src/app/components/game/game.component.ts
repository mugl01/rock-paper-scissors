import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  playerName: string = localStorage.getItem('playerName');
  score: number = 0;
  playerSelection: string = '';
  computerSelection: string = '';
  result: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToHome(){
    this.router.navigate(['home']);
  }

  setPlayerSelection(item){
    this.playerSelection = item;
  }

}
