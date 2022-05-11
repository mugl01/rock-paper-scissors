import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms'

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Call navigate to when click on button', async(() => {
    spyOn(component,'navigateToGame');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.navigateToGame).toHaveBeenCalled();
    });
  }));

  it('Return when form is invalid', () => {
    const player = <NgForm>{
      value: {
          name: "Hello",
          category: "World",
      },
      invalid: true
  };
    const resp = component.navigateToGame(player);
    expect(resp).toBeFalsy();
  });
  
});
