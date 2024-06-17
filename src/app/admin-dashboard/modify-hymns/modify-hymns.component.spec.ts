import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyHymnsComponent } from './modify-hymns.component';

describe('ModifyHymnsComponent', () => {
  let component: ModifyHymnsComponent;
  let fixture: ComponentFixture<ModifyHymnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyHymnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyHymnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
