import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavestateComponent } from './savestate.component';

describe('SavestateComponent', () => {
  let component: SavestateComponent;
  let fixture: ComponentFixture<SavestateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavestateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
