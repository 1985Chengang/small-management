import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefaultComponent } from './layout/default/default.component';
import { FullscreenComponent } from './layout/fullscreen/fullscreen.component';
import { ContentComponent } from './layout/default/content/content.component';
import { FooterComponent } from './layout/default/footer/footer.component';
import { HeaderComponent } from './layout/default/header/header.component';
import { SidebarComponent } from './layout/default/sidebar/sidebar.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './layout/fullscreen/login/login.component';
import { RigisterComponent } from './layout/fullscreen/rigister/rigister.component';
import { MenuComponent } from './layout/default/menu/menu.component';
import { ProfileComponent } from './layout/default/entities/profile/profile.component';
import { FormComponent } from './layout/default/entities/order/form/form.component';
import { ManageComponent } from './layout/default/entities/order/manage/manage.component';

const router: Routes = [
  {
    path: '',
    component: FullscreenComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RigisterComponent
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'content',
    component: DefaultComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'order',
        component: ManageComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    FullscreenComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    RigisterComponent,
    MenuComponent,
    ProfileComponent,
    FormComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
