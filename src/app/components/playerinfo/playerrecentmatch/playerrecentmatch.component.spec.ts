import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerrecentmatchComponent } from './playerrecentmatch.component';

describe('PlayerrecentmatchComponent', () => {
  let component: PlayerrecentmatchComponent;
  let fixture: ComponentFixture<PlayerrecentmatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerrecentmatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerrecentmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
