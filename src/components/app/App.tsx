import React, {useCallback, useEffect} from 'react';
import {AppRoutes} from './AppRoutes';
import {RootState, useAppDispatch} from '../../store/store';
import {AppStatusType, authAction, authThunk} from '../../store/reducers/appReducer';
import {useSelector} from 'react-redux';
import {Loader} from '../features/loader/Loader';
import {NotAuthorized} from '../empty/NotAuthorized';

export const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const isAuth = useSelector<RootState, boolean>(state => state.app.isAuth);
    const auth = useCallback(() => !isAuth && dispatch(authThunk()), [dispatch, isAuth]);
    const logout = useCallback(() => isAuth && dispatch(authAction({isAuth: false})), [dispatch, isAuth]);
    const appStatus = useSelector<RootState, AppStatusType>(state => state.app.status);

    useEffect(() => {
        auth();
        return () => {
            logout();
        }
    }, [auth]);
    if (appStatus === 'load') return <Loader/>
    if (!isAuth) return <NotAuthorized/>
    return (
        <AppRoutes/>
    );
}
