import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SelectItemComponent } from './select-item.component';

describe('SelectItemComponent', () => {
  let component: SelectItemComponent;
  let fixture: ComponentFixture<SelectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Call send item when click on button', async(() => {
    spyOn(component,'sendItem');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.sendItem).toHaveBeenCalled();
    });
  }));

  it('Emit event when click on button', async(() => {
    spyOn(component,'sendItem');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    let newString = 'paper';
    component.itemEventEmitter.subscribe( item => newString = item);
    button.click();
    fixture.whenStable().then(() => {
      expect(newString).toBe('paper');
    });
  }));
});
