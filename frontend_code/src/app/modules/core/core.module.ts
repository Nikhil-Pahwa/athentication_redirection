import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClient, SessionService } from './services';
import { AuthTokenService } from './utils';

@NgModule({
    declarations: [],
    exports: [],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [HttpClient, SessionService, AuthTokenService]
})

export class CoreModule { }
