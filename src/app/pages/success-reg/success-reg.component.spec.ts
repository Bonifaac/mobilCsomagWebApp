import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessRegComponent } from './success-reg.component';

describe('SuccessRegComponent', () => {
  let component: SuccessRegComponent;
  let fixture: ComponentFixture<SuccessRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
