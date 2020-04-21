import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsidebareComponent } from './accountsidebare.component';

describe('AccountsidebareComponent', () => {
  let component: AccountsidebareComponent;
  let fixture: ComponentFixture<AccountsidebareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsidebareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsidebareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
