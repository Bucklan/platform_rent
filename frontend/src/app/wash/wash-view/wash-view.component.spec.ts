import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashViewComponent } from './wash-view.component';

describe('WashViewComponent', () => {
  let component: WashViewComponent;
  let fixture: ComponentFixture<WashViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WashViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WashViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
