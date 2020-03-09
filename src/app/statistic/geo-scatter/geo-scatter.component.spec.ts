import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoScatterComponent } from './geo-scatter.component';

describe('GeoScatterComponent', () => {
  let component: GeoScatterComponent;
  let fixture: ComponentFixture<GeoScatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoScatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoScatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
