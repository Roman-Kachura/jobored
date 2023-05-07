import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {VacancyResponseType} from '../../api/apiTypes';
import {showVacanciesCountOnPage} from './vacanciesReducer';
import {getPagesCount} from '../../utils/utils';

const initialState: FavoritesInitialState = {
    vacancies: [],
    showVacancies: [],
    page: 1,
    pagesCount: 1
}

export const getFavoritesVacanciesThunk = createAsyncThunk('get-favorites-thunk', (arg: { page: number }, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const startSlice = (arg.page - 1) * showVacanciesCountOnPage;
    const endSlice = arg.page * showVacanciesCountOnPage;
    if (state.favorites) {
        const pagesCount = getPagesCount(state.favorites.vacancies.length, showVacanciesCountOnPage);
        thunkAPI.dispatch(setFavoritesPageCount({pagesCount}));
        thunkAPI.dispatch(setFavoritesCurrentPage({page: arg.page}));
        const items = state.favorites.vacancies.slice(startSlice, endSlice);
        thunkAPI.dispatch(setFavoritesShowVacancies({items}));
    }
});
const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavoriteAction(state, action: AddToFavoriteAction) {
            const find = state.vacancies.find(v => v.id === action.payload.item.id);
            if (!find) {
                state.vacancies.push(action.payload.item);
            }
        },
        removeFavoriteAction(state, action: AddToFavoriteAction) {
            const find = state.vacancies.find(v => v.id === action.payload.item.id);
            if (find) {
                const index = state.vacancies.indexOf(find);
                state.vacancies.splice(index, 1);
            }
        },
        setFavoritesPageCount(state, action: PayloadAction<{ pagesCount: number }>) {
            state.pagesCount = action.payload.pagesCount;
        },
        setFavoritesCurrentPage(state, action: PayloadAction<{ page: number }>) {
            state.page = action.payload.page;
        },
        setFavoritesShowVacancies(state, action: SetFavoritesShowVacanciesAction) {
            state.showVacancies = action.payload.items;
        }
    }
});

export const {
    addToFavoriteAction,
    removeFavoriteAction,
    setFavoritesPageCount,
    setFavoritesCurrentPage,
    setFavoritesShowVacancies
} = favoritesSlice.actions;
export default favoritesSlice.reducer;

type AddToFavoriteAction = PayloadAction<{ item: VacancyResponseType }>;
type SetFavoritesShowVacanciesAction = PayloadAction<{ items: VacancyResponseType[] }>;

interface FavoritesInitialState {
    vacancies: VacancyResponseType[]
    showVacancies: VacancyResponseType[]
    page: number
    pagesCount: number
}