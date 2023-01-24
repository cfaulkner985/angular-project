import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
=======
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
>>>>>>> 32635ad (Added Username)
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ServerComponent,
    ServersComponent,
=======
    UsersComponent,
>>>>>>> 32635ad (Added Username)
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule
=======
    BrowserModule,
    FormsModule
>>>>>>> 32635ad (Added Username)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
