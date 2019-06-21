import { TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';

import { FakeLoader } from '../utils/unit-tests/FakeLoader';
import { ToastrService } from './toastr.service';

describe('ToastrService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      TranslateModule.forRoot({
        loader: { provide: TranslateLoader, useClass: FakeLoader }
      }),
      ToastrModule.forRoot()
    ]
  }));

  it('should be created', () => {
    const service: ToastrService = TestBed.get(ToastrService);
    expect(service).toBeTruthy();
  });
});
