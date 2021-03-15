import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedLessonComponent } from './featured-lesson.component';

describe('FeaturedLessonComponent', () => {
  let component: FeaturedLessonComponent;
  let fixture: ComponentFixture<FeaturedLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
