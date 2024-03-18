import { Injectable } from '@angular/core'; // Import Injectable decorator from Angular core
import { Actions, ofType, createEffect } from '@ngrx/effects'; // Import required functions and decorators from '@ngrx/effects'
import { of } from 'rxjs'; // Import 'of' function from 'rxjs' for creating observable
import { catchError, exhaustMap, map, mergeMap, switchMap, tap } from 'rxjs/operators'; // Import operators for RxJS observables
import { GameService } from '../../services/game.service';
import {
  loadHomeData,
  loadHomeDataFailure,
  loadHomeDataSuccess,
} from '../actions/game-actions';

@Injectable()
export class HomeEffects {
  loadHomeData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadHomeData),
      exhaustMap(() =>
        this.gameService.getHomeContent().pipe(
          tap((data: any) => console.log('data in tap :', data)),
          map((data) => {
            console.log("data in map",data);
            
            return loadHomeDataSuccess({ data });
          }),
          catchError((error) => of(loadHomeDataFailure({ error })))
        )
      )
    )
  );
  constructor(private actions$: Actions, private gameService: GameService) {}
}
