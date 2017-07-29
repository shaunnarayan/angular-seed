import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { APP_BASE_HREF } from "@angular/common";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { Angulartics2Module, Angulartics2GoogleAnalytics } from "angulartics2";

import { AboutModule } from "./about/about.module";
import { HomeModule } from "./home/home.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
        AboutModule,
        HomeModule,
        SharedModule.forRoot()
    ],
    declarations: [AppComponent],
    providers: [
        {
            provide: APP_BASE_HREF,
            useValue: "<%= APP_BASE %>"
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
