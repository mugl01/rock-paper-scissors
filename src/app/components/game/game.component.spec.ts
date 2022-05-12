import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ GameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router= TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('reset variables when calling resetScore', ()=> {
    component.score = 10;
    component.resetScore();
    expect(component.score).toEqual(0);
  });

  it('should increment player score when player win', () => {
    component.score = 1;
    const userWon = 'User won';
    component.setScore(userWon);
    expect(component.score).toEqual(2);
  });

  it('set player selection', () => {
    component.computerSelection = 'rock';
    component.setPlayerSelection('paper');
    expect(typeof component.result).toEqual('string');
  });

  it('Call reset score when click on button', async(() => {
    spyOn(component,'resetScore');
    const button = fixture.debugElement.nativeElement.querySelector('article>button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.resetScore).toHaveBeenCalled();
    });
  }));

  it('should navigate to home', () => {
    const component = fixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');
    component.navigateToHome();
    expect(navigateSpy).toHaveBeenCalledWith(['home']);
  });
});
