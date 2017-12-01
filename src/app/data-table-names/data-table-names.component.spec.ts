import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableNamesComponent } from './data-table-names.component';

describe('DataTableNamesComponent', () => {
  let component: DataTableNamesComponent;
  let fixture: ComponentFixture<DataTableNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
