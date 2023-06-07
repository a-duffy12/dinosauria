import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosauriaTableComponent } from './dinosauria-table.component';

describe('DinosauriaTableComponent', () => {
  let component: DinosauriaTableComponent;
  let fixture: ComponentFixture<DinosauriaTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DinosauriaTableComponent]
    });
    fixture = TestBed.createComponent(DinosauriaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
