import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonlibComponent } from './commonlib.component';

describe('CommonlibComponent', () => {
  let component: CommonlibComponent;
  let fixture: ComponentFixture<CommonlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
