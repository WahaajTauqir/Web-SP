import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlayScreenComponent } from './game-play-screen.component';

describe('GamePlayScreenComponent', () => {
  let component: GamePlayScreenComponent;
  let fixture: ComponentFixture<GamePlayScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamePlayScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamePlayScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
