import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterStudySharedModule } from 'app/shared/shared.module';
import { JhipsterStudyCoreModule } from 'app/core/core.module';
import { JhipsterStudyAppRoutingModule } from './app-routing.module';
import { JhipsterStudyHomeModule } from './home/home.module';
import { JhipsterStudyEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterStudySharedModule,
    JhipsterStudyCoreModule,
    JhipsterStudyHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterStudyEntityModule,
    JhipsterStudyAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipsterStudyAppModule {}
