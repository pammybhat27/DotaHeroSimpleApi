import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProplayersortingComponent } from './proplayersorting.component';

describe('ProplayersortingComponent', () => {
  let component: ProplayersortingComponent;
  let fixture: ComponentFixture<ProplayersortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProplayersortingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProplayersortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
