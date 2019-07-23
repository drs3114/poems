import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DefaultViewComponent} from './body/default-view/default-view.component';
import {ShadowComponent} from './body/shadow/shadow.component';
import {ILookAroundComponent} from './body/i-look-around/i-look-around.component';
import {ShouldIComponent} from './body/should-i/should-i.component';
import {ClockComponent} from './body/clock/clock.component';
import {OhBraveSoldierComponent} from './body/oh-brave-soldier/oh-brave-soldier.component';
import {WhoAmIComponent} from './body/who-am-i/who-am-i.component';
import {LittleBoyComponent} from './body/little-boy/little-boy.component';
import {TheRagingConchComponent} from './body/the-raging-conch/the-raging-conch.component';
import {LifeWillGoOnComponent} from './body/life-will-go-on/life-will-go-on.component';
import {StayAwakeWithMeComponent} from './body/stay-awake-with-me/stay-awake-with-me.component';
import {SilenceComponent} from './body/silence/silence.component';
import {IAmComingHomeComponent} from './body/i-am-coming-home/i-am-coming-home.component';
import {UnknownAndUntoldComponent} from './body/unknown-and-untold/unknown-and-untold.component';
import {NewHopeComponent} from './body/new-hope/new-hope.component';
import {WhereAreYouComponent} from './body/where-are-you/where-are-you.component';
import {IVeLostMyVoiceComponent} from './body/i-ve-lost-my-voice/i-ve-lost-my-voice.component';

const paths: Routes = [
  {path: '', redirectTo: '/view', pathMatch: 'full'},
  {path: 'view', component: DefaultViewComponent},
  {path: 'shadow', component: ShadowComponent},
  {path: 'i-look-around', component: ILookAroundComponent},
  {path: 'should-i', component: ShouldIComponent},
  {path: 'clock', component: ClockComponent},
  {path: 'oh-brave-soldier', component: OhBraveSoldierComponent},
  {path: 'who-am-i', component: WhoAmIComponent},
  {path: 'little-boy', component: LittleBoyComponent},
  {path: 'the-raging-conch', component: TheRagingConchComponent},
  {path: 'life-will-go-on', component: LifeWillGoOnComponent},
  {path: 'stay-awake-with-me', component: StayAwakeWithMeComponent},
  {path: 'silence', component: SilenceComponent},
  {path: 'i-am-coming-home', component: IAmComingHomeComponent},
  {path: 'unknown-and-untold', component: UnknownAndUntoldComponent},
  {path: 'new-hope', component: NewHopeComponent},
  {path: 'where-are-you', component: WhereAreYouComponent},
  {path: 'i-ve-lost-my-voice', component: IVeLostMyVoiceComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(paths),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
