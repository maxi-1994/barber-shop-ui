import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbersTableComponent } from './barbers-table.component';

describe('BarbersTableComponent', () => {
  let component: BarbersTableComponent;
  let fixture: ComponentFixture<BarbersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarbersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarbersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
