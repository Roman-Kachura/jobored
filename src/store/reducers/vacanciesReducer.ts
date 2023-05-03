import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CatalogResponseType, VacancyRequestType, VacancyResponseType} from '../../api/apiTypes';
import {api} from '../../api/api';
import {setStatusAction} from './appReducer';

export const getPagesCount = (totalItemsCount: number, showCount: number) => Math.ceil(totalItemsCount / showCount);
export const showVacanciesCountOnPage = 4;
const initialState: VacanciesStateType = {
    vacancies: [],
    params: {
        page: 1,
        count: showVacanciesCountOnPage,
        catalogues: 0,
        keyword: '',
        payment_from: 0,
        payment_to: 0,
        published: 1
    },
    catalogues: [],
    pagesCount: 1
}

export const getVacanciesThunk = createAsyncThunk('get-vacancies-thunk', async (arg: VacancyRequestType, thunkAPI) => {

    try {
        // thunkAPI.dispatch(setStatusAction({status: 'load'}));
        const response = await api.getVacancies(arg);
        console.log('response', arg);
        const pagesCount = getPagesCount(response.data.total, showVacanciesCountOnPage);
        thunkAPI.dispatch(setParamsAction({params: arg}));
        thunkAPI.dispatch(setPagesCount({pagesCount}));
        thunkAPI.dispatch(setVacanciesAction({vacancies: response.data.objects}));
    } catch (e) {
        console.log(e);
    }finally {
        thunkAPI.dispatch(setStatusAction({status: 'stop'}));
    }
});

export const getCataloguesThunk = createAsyncThunk('get-catalogues-thunk', async (arg, thunkAPI) => {
    try {
        const response = await api.getCatalogues();
        thunkAPI.dispatch(setCataloguesAction({catalogues: response.data}))
    } catch (e) {
        console.error(e);
    }
});
export const clearParamsThunk = createAsyncThunk('clear-params-thunk', async (arg, thunkAPI) => {
    const params: VacancyRequestType = {
        page: 1,
        count: showVacanciesCountOnPage,
        catalogues: 0,
        keyword: '',
        payment_from: 0,
        payment_to: 0,
        published: 1
    }
    try {
        thunkAPI.dispatch(setParamsAction({params}));
        thunkAPI.dispatch(setPagesCount({pagesCount:1}));
        thunkAPI.dispatch(setVacanciesAction({vacancies: []}));
    } catch (e) {
        console.error(e);
    }
});


const vacanciesSlice = createSlice({
    name: 'vacancies',
    initialState,
    reducers: {
        setVacanciesAction(state, action: SetVacanciesActionType) {
            state.vacancies = action.payload.vacancies;
        },
        setParamsAction(state, action: SetVacanciesParamsActionType) {
            state.params = action.payload.params;
        },
        setCataloguesAction(state, action: SetCataloguesActionType) {
            state.catalogues = action.payload.catalogues;
        },
        setPagesCount(state, action: PayloadAction<{ pagesCount: number }>) {
            state.pagesCount = action.payload.pagesCount;
        }
    }
});

interface VacanciesStateType {
    vacancies: VacancyResponseType[]
    params: VacancyRequestType
    catalogues: CatalogResponseType[]
    pagesCount: number
}

type SetCataloguesActionType = PayloadAction<{ catalogues: CatalogResponseType[] }>;
type SetVacanciesParamsActionType = PayloadAction<{ params: VacancyRequestType }>;
type SetVacanciesActionType = PayloadAction<{vacancies: VacancyResponseType[]}>;
export const {setVacanciesAction, setParamsAction, setCataloguesAction, setPagesCount} = vacanciesSlice.actions;
export default vacanciesSlice.reducer;