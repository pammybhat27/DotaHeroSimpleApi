import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerwinComponent } from './playerwin.component';

describe('PlayerwinComponent', () => {
  let component: PlayerwinComponent;
  let fixture: ComponentFixture<PlayerwinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerwinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
