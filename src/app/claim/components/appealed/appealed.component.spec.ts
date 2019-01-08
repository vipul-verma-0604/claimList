import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppealedComponent } from './appealed.component';

describe('AppealedComponent', () => {
  let component: AppealedComponent;
  let fixture: ComponentFixture<AppealedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppealedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppealedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
