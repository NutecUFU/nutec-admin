import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminCommonModule } from 'src/app/common/admin-common.module';

import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UserDropdownComponent } from './components/user-dropdown/user-dropdown.component';
import { MainComponent } from './main.component';

const mockUser = {
  profile: {
    photo: ''
  }
};

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeAll(() => {
    localStorage.setItem('nc-us', JSON.stringify(mockUser));
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        SideBarComponent,
        HeaderComponent,
        UserDropdownComponent
      ],
      imports: [RouterTestingModule, AdminCommonModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
