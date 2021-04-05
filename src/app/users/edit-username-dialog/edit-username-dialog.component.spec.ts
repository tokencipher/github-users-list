import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsernameDialogComponent } from './edit-username-dialog.component';

describe('EditUsernameDialogComponent', () => {
  let component: EditUsernameDialogComponent;
  let fixture: ComponentFixture<EditUsernameDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUsernameDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUsernameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
