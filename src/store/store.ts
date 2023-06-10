import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers/appReducer';
import vacanciesReducer from './reducers/vacanciesReducer';
import favoritesReducer from './reducers/favoritesReducer';

const rootReducer = combineReducers({
    app: appReducer,
    vacancies: vacanciesReducer,
    favorites: favoritesReducer
});

const loadedState = () => {
    const state = localStorage.getItem('app');
    if (state) {
        return JSON.parse(state.toString())
    } else {
        return {};
    }
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
    preloadedState: loadedState()
});


store.subscribe(() => {
    const state = JSON.stringify(store.getState());
    localStorage.setItem('app', state);
});
export type RootState = ReturnType<typeof rootReducer>;
export type StateType = typeof store.getState;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;