import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService as NgxToastrService } from 'ngx-toastr';

import { ToastrError, ToastrInfo, ToastrSuccess } from '../constants/toastr.constants';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  INFO_TRANSLATE_KEY = 'TOASTR.INFO';
  SUCCESS_TRANSLATE_KEY = 'TOASTR.SUCCESS';
  ERROR_TRANSLATE_KEY = 'TOASTR.ERROR';

  constructor(
    private toastr: NgxToastrService,
    private translate: TranslateService
  ) { }

  info(translateMessage: string, messageParams?: object, translateTitle: string = this.INFO_TRANSLATE_KEY) {
    this.translate.get(translateMessage, messageParams).subscribe(
      (message: string) => {
        this.translate.get(translateTitle).subscribe(
          (title: string) => {
            this.toastr.info(message, title, ToastrInfo);
          });
      }
    );
  }

  success(translateMessage: string, messageParams?: object, translateTitle: string = this.SUCCESS_TRANSLATE_KEY) {
    this.translate.get(translateMessage, messageParams).subscribe(
      (message: string) => {
        this.translate.get(translateTitle).subscribe(
          (title: string) => {
            this.toastr.success(message, title, ToastrSuccess);
          });
      }
    );
  }

  error(translateMessage: string, messageParams?: object, translateTitle: string = this.ERROR_TRANSLATE_KEY) {
    this.translate.get(translateMessage, messageParams).subscribe(
      (message: string) => {
        this.translate.get(translateTitle).subscribe(
          (title: string) => {
            this.toastr.error(message, title, ToastrError);
          });
      }
    );
  }
}
