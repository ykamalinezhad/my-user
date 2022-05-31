import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuUserComponent } from './mu-user.component';

describe('MuUserComponent', () => {
  let component: MuUserComponent;
  let fixture: ComponentFixture<MuUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
