import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms'
import { Router } from '@angular/router';

import { RockPaperScissorsService } from '../../services/rock-paper-scissors.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Call navigate to when click on button', async(() => {
    spyOn(component,'navigateToGame');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.navigateToGame).toHaveBeenCalled();
    });
  }));

  it('Return when form is invalid', () => {
    const player = <NgForm>{
      value: {
          playerName: "Hello",
          category: "World",
      },
      invalid: true
    };
    const resp = component.navigateToGame(player);
    expect(resp).toBeFalsy();
  });

  it('should navigate to game', () => {
    const player = <NgForm>{
      value: {
          playerName: "Hello",
          category: "World",
      },
      invalid: false
    };

    const component = fixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');
    const service = fixture.debugElement.injector.get(RockPaperScissorsService);
    spyOn(service, 'getComputerSelection');
    component.navigateToGame(player);

    expect(navigateSpy).toHaveBeenCalledWith(['game', player.value.playerName]);
  });
  
});
