import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {StickerComponent} from "./component/sticker/sticker.component";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },{
  path: 'sticker',
    component: StickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
