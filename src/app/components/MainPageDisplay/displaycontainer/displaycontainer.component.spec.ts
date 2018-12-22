import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycontainerComponent } from './displaycontainer.component';

describe('DisplaycontainerComponent', () => {
  let component: DisplaycontainerComponent;
  let fixture: ComponentFixture<DisplaycontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaycontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaycontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
