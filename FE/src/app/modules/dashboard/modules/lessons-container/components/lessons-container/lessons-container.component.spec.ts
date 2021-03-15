import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsContainerComponent } from './lessons-container.component';

describe('LessonsContainerComponent', () => {
  let component: LessonsContainerComponent;
  let fixture: ComponentFixture<LessonsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
