import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {api} from '../../api/api';

const initialState: AppInitialState = {
    isAuth: false,
    status: 'stop'
}

export const authThunk = createAsyncThunk('auth-thunk', async (arg, thunkAPI) => {
    // console.log('auth')
    // thunkAPI.dispatch(setStatusAction({status: 'load'}));
    try {
        const response = await api.auth();
        thunkAPI.dispatch(authAction({isAuth: true}));
        // thunkAPI.dispatch(setStatusAction({status: 'stop'}));
    } catch (e) {
        thunkAPI.dispatch(authAction({isAuth: false}));
        // thunkAPI.dispatch(setStatusAction({status: 'stop'}));
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
            state.status = action.payload.status;
        }
    }
});

interface AppInitialState {
    isAuth: boolean
    status: AppStatusType
}

type AuthActionType = PayloadAction<{ isAuth: boolean }>;
type StatusActionType = PayloadAction<{ status: AppStatusType }>;
export type AppStatusType = 'load' | 'stop';

export const {authAction, setStatusAction} = appSlice.actions;
export default appSlice.reducer;