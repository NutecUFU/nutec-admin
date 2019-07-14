import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCommonModule } from 'src/app/common/admin-common.module';

import { UserDropdownComponent } from './user-dropdown.component';

const mockUser = {
  profile: {
    photo: ''
  }
};

describe('UserDropdownComponent', () => {
  let component: UserDropdownComponent;
  let fixture: ComponentFixture<UserDropdownComponent>;

  beforeAll(() => {
    localStorage.setItem('nc-us', JSON.stringify(mockUser));
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDropdownComponent ],
      imports: [ AdminCommonModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
