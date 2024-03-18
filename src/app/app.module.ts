import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { GameService } from './services/game.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { homeReducer } from './store/reducers/games-reducer';
import { HomeEffects } from './store/effects/games-effects';

@NgModule({

  declarations: [AppComponent, HomeComponent],

  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterOutlet,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({home:homeReducer}),
    EffectsModule.forRoot([HomeEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([])
  ],

  providers: [
    provideRouter(routes), // Provide the router
    GameService
  ],

  bootstrap: [AppComponent],

})
export class AppModule {}
