import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {api} from '../../api/api';

const initialState: AppInitialState = {
    isAuth: false,
    load: false
}

export const authThunk = createAsyncThunk('auth-thunk', async (arg, thunkAPI) => {
    thunkAPI.dispatch(setStatusAction({load: true}));
    try {
        const response = await api.auth();
        thunkAPI.dispatch(authAction({isAuth: true}));
    } catch (e) {
        thunkAPI.dispatch(authAction({isAuth: false}));
    } finally {
        thunkAPI.dispatch(setStatusAction({load: false}));
    }
});

const appSlice = createSlice({
    initialState,
    name: 'app',
    reducers: {
        authAction(state, action: AuthActionType) {
            state.isAuth = action.payload.isAuth;
        },
        setStatusAction(state, action: StatusActionType) {
            state.load = action.payload.load;
        }
    }
});

interface AppInitialState {
    isAuth: boolean
    load: boolean
}

type AuthActionType = PayloadAction<{ isAuth: boolean }>;
type StatusActionType = PayloadAction<{ load: boolean }>;

export const {authAction, setStatusAction} = appSlice.actions;
export default appSlice.reducer;