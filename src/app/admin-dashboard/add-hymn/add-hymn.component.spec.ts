import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHymnComponent } from './add-hymn.component';

describe('AddHymnComponent', () => {
  let component: AddHymnComponent;
  let fixture: ComponentFixture<AddHymnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddHymnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddHymnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
