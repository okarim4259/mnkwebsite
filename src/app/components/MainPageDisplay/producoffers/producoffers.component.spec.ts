import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducoffersComponent } from './producoffers.component';

describe('ProducoffersComponent', () => {
  let component: ProducoffersComponent;
  let fixture: ComponentFixture<ProducoffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducoffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
