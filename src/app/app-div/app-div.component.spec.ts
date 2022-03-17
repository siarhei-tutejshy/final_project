import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDivComponent } from './app-div.component';

describe('AppDivComponent', () => {
  let component: AppDivComponent;
  let fixture: ComponentFixture<AppDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
