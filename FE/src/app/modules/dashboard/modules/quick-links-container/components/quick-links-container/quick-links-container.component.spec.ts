import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickLinksContainerComponent } from './quick-links-container.component';

describe('QuickLinksContainerComponent', () => {
  let component: QuickLinksContainerComponent;
  let fixture: ComponentFixture<QuickLinksContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickLinksContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickLinksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
