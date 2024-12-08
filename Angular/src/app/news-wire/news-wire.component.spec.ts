import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsWireComponent } from './news-wire.component';

describe('NewsWireComponent', () => {
  let component: NewsWireComponent;
  let fixture: ComponentFixture<NewsWireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsWireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsWireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
