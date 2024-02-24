import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashIndexComponent } from './wash-index.component';

describe('WashIndexComponent', () => {
  let component: WashIndexComponent;
  let fixture: ComponentFixture<WashIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WashIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WashIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
