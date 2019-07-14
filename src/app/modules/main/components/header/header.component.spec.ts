import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCommonModule } from 'src/app/common/admin-common.module';

import { UserDropdownComponent } from '../user-dropdown/user-dropdown.component';
import { HeaderComponent } from './header.component';

const mockUser = {
  profile: {
    photo: ''
  }
};

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeAll(() => {
    localStorage.setItem('nc-us', JSON.stringify(mockUser));
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, UserDropdownComponent ],
      imports: [AdminCommonModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
