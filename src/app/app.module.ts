import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BodyComponent} from './body/body.component';
import {
  MatButtonModule,
  MatCardModule, MatDividerModule,
  MatIconModule,
  MatListModule, MatMenuModule,
  MatTabsModule,
  MatToolbarModule,
  MatTreeModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './body/list/list.component';
import { ContentComponent } from './body/list/content/content.component';
import { DefaultViewComponent } from './body/default-view/default-view.component';
import { ShadowComponent } from './body/shadow/shadow.component';
import { ILookAroundComponent } from './body/i-look-around/i-look-around.component';
import { ShouldIComponent } from './body/should-i/should-i.component';
import { ClockComponent } from './body/clock/clock.component';
import { OhBraveSoldierComponent } from './body/oh-brave-soldier/oh-brave-soldier.component';
import { WhoAmIComponent } from './body/who-am-i/who-am-i.component';
import { LittleBoyComponent } from './body/little-boy/little-boy.component';
import { TheRagingConchComponent } from './body/the-raging-conch/the-raging-conch.component';
import { LifeWillGoOnComponent } from './body/life-will-go-on/life-will-go-on.component';
import { StayAwakeWithMeComponent } from './body/stay-awake-with-me/stay-awake-with-me.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ShareComponent } from './body/share/share.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ListComponent,
    ContentComponent,
    DefaultViewComponent,
    ShadowComponent,
    ILookAroundComponent,
    ShouldIComponent,
    ClockComponent,
    OhBraveSoldierComponent,
    WhoAmIComponent,
    LittleBoyComponent,
    TheRagingConchComponent,
    LifeWillGoOnComponent,
    StayAwakeWithMeComponent,
    ShareComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatTreeModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
