import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProplayerautocompleteComponent } from './proplayerautocomplete.component';

describe('ProplayerautocompleteComponent', () => {
  let component: ProplayerautocompleteComponent;
  let fixture: ComponentFixture<ProplayerautocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProplayerautocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProplayerautocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
