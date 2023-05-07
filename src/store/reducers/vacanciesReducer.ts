import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CatalogResponseType, VacancyRequestType, VacancyResponseType} from '../../api/apiTypes';
import {api} from '../../api/api';
import {setStatusAction} from './appReducer';
import {getPagesCount} from '../../utils/utils';


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
    pagesCount: 1,
    card: {} as VacancyResponseType
}

export const getVacancyByIdThunk = createAsyncThunk('get-vacancy-by-id-thunk', async (arg: { id: string }, thunkAPI) => {
    thunkAPI.dispatch(setStatusAction({load: true}));
    try {
        const response = await api.getVacancyById(arg.id);
        thunkAPI.dispatch(setCard({card: response.data}));
    } catch (e) {
        console.log(e);
    } finally {
        thunkAPI.dispatch(setStatusAction({load: false}));
    }
});
export const getVacanciesThunk = createAsyncThunk('get-vacancies-thunk', async (arg: VacancyRequestType, thunkAPI) => {
    thunkAPI.dispatch(setStatusAction({load: true}));
    try {
        const response = await api.getVacancies(arg);
        const pagesCount = getPagesCount(response.data.total, showVacanciesCountOnPage);
        thunkAPI.dispatch(setParamsAction({params: arg}));
        thunkAPI.dispatch(setPagesCount({pagesCount}));
        thunkAPI.dispatch(setVacanciesAction({vacancies: response.data.objects}));
    } catch (e) {
        console.log(e);
    } finally {
        thunkAPI.dispatch(setStatusAction({load: false}));
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
        thunkAPI.dispatch(setPagesCount({pagesCount: 1}));
        thunkAPI.dispatch(getVacanciesThunk(params));
    } catch (e) {
        console.error(e);
    }
});
export const clearVacancies = createAsyncThunk('clear-vacancies-thunk', async (arg, thunkAPI) => {
    thunkAPI.dispatch(setVacanciesAction({vacancies: []}));
});
export const clearVacancyCard = createAsyncThunk('clear-card-thunk', async (arg, thunkAPI) => {
    thunkAPI.dispatch(setCard({card: {} as VacancyResponseType}));
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
        setPagesCount(state, action: SetPageActionType) {
            state.pagesCount = action.payload.pagesCount;
        },
        setCard(state, action: SetCardActionType) {
            state.card = action.payload.card;
        }
    }
});

export const {
    setVacanciesAction,
    setParamsAction,
    setCataloguesAction,
    setPagesCount,
    setCard
} = vacanciesSlice.actions;
export default vacanciesSlice.reducer;

interface VacanciesStateType {
    vacancies: VacancyResponseType[]
    params: VacancyRequestType
    catalogues: CatalogResponseType[]
    pagesCount: number
    card: VacancyResponseType
}

type SetCataloguesActionType = PayloadAction<{ catalogues: CatalogResponseType[] }>;
type SetVacanciesParamsActionType = PayloadAction<{ params: VacancyRequestType }>;
type SetVacanciesActionType = PayloadAction<{ vacancies: VacancyResponseType[] }>;
type SetCardActionType = PayloadAction<{ card: VacancyResponseType }>;
type SetPageActionType = PayloadAction<{ pagesCount: number }>;
