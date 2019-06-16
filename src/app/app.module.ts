import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminCommonModule } from './common/admin-common.module';
import { translations } from './common/i18n/pt-BR';

registerLocaleData(localePt);

export const defaultLocale = {
  provide: LOCALE_ID,
  useValue: 'pt-BR'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminCommonModule,
    TranslateModule.forRoot()
  ],
  providers: [defaultLocale],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private readonly translateService: TranslateService) {
    this.translateService.setDefaultLang('pt_BR');
    this.translateService.use('pt_BR');
    this.translateService.setTranslation(this.translateService.currentLang, translations, true);
  }
}
