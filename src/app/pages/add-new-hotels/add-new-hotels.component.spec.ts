import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewHotelsComponent } from './add-new-hotels.component';

describe('AddNewHotelsComponent', () => {
  let component: AddNewHotelsComponent;
  let fixture: ComponentFixture<AddNewHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewHotelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
