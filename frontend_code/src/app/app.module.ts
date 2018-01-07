import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './modules/core/core.module';
import { ExceptionHandler } from './modules/core/services';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { CallbackComponent } from './shared/components/callback';

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CoreModule,
    SharedModule
  ],
  providers: [{ provide: ErrorHandler, useClass: ExceptionHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
