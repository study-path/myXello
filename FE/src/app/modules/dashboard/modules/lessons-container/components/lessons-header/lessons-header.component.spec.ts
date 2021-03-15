import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsHeaderComponent } from './lessons-header.component';

describe('LessonsHeaderComponent', () => {
  let component: LessonsHeaderComponent;
  let fixture: ComponentFixture<LessonsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
