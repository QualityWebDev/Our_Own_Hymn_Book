import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyHymnComponent } from './modify-hymn.component';

describe('ModifyHymnComponent', () => {
  let component: ModifyHymnComponent;
  let fixture: ComponentFixture<ModifyHymnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyHymnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyHymnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
