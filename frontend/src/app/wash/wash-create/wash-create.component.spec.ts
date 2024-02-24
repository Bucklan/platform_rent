import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashCreateComponent } from './wash-create.component';

describe('WashCreateComponent', () => {
  let component: WashCreateComponent;
  let fixture: ComponentFixture<WashCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WashCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WashCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
