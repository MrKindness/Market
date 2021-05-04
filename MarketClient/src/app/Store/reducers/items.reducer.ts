import {
  createReducer,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import { Item } from '../models/Item';

export interface ItemsState {
  items: Item[];
}

export const initialState: ItemsState = {
  items: [
    // {
    //   discount: 20,
    //   img: 'hfhehfwuoef',
    //   price: 1500,
    //   priceDiscount: 120,
    // },
  ],
};

export const ItemsReducer = createReducer(initialState);

export const featureSelector = createFeatureSelector<ItemsState>('items');

export const ItemsSelector = createSelector(
  featureSelector,
  (state) => state.items
);
