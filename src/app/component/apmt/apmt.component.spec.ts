import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApmtComponent } from './apmt.component';

describe('ApmtComponent', () => {
  let component: ApmtComponent;
  let fixture: ComponentFixture<ApmtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApmtComponent]
    });
    fixture = TestBed.createComponent(ApmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
