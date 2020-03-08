import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedNumComponent } from './related-num.component';

describe('RelatedNumComponent', () => {
  let component: RelatedNumComponent;
  let fixture: ComponentFixture<RelatedNumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedNumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
