import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsecComponent } from './bsec.component';

describe('BsecComponent', () => {
  let component: BsecComponent;
  let fixture: ComponentFixture<BsecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsecComponent]
    });
    fixture = TestBed.createComponent(BsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
