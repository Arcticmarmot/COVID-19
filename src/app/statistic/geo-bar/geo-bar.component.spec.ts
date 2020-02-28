import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoBarComponent } from './geo-bar.component';

describe('GeoBarComponent', () => {
  let component: GeoBarComponent;
  let fixture: ComponentFixture<GeoBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
