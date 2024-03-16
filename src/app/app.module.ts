import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterOutlet,
    SharedModule,
  ],
  providers: [
    provideRouter(routes), // Provide the router
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
