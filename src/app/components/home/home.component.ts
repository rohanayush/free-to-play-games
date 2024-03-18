import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { HomeState } from '../../state/appstate';
import { Observable } from 'rxjs';
import { loadHomeData, loadHomeDataSuccess } from '../../store/actions/game-actions';
import {
  selectHomeData,
  selectHomeError,
  selectHomeLoading,
} from '../../store/selectors/games-selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  data$!: Observable<any>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  constructor(private store: Store<HomeState>) {}

  ngOnInit() {
    this.store.dispatch(loadHomeData());
    this.store.dispatch(loadHomeDataSuccess({} as any));

    this.data$ = this.store.pipe(select(selectHomeData));

    this.loading$ = this.store.pipe(select(selectHomeLoading));

    this.error$ = this.store.pipe(select(selectHomeError));

    this.data$.subscribe((data: any) => {
      console.log('data', data);
    });

    this.store.subscribe((storeData: any) => {
      console.log('store data:', storeData);
    });
  }
}
