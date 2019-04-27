import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackExchangeAccomplishmentComponent } from './stack-exchange-accomplishment.component';

describe('StackExchangeAccomplishmentComponent', () => {
  let component: StackExchangeAccomplishmentComponent;
  let fixture: ComponentFixture<StackExchangeAccomplishmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackExchangeAccomplishmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackExchangeAccomplishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
