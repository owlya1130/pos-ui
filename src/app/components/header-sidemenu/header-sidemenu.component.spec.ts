import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSidemenuComponent } from './header-sidemenu.component';

describe('HeaderSidemenuComponent', () => {
  let component: HeaderSidemenuComponent;
  let fixture: ComponentFixture<HeaderSidemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSidemenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
