import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  savePlayerName(player: NgForm) {
    console.log('Submit desiparado', player.value.playerName);
    if(player.invalid) {
      return;
    }
    this.navigateToGame();
  }

  navigateToGame() {
    this.router.navigate(['game']);
  }

}
