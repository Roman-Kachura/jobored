import React, {useCallback, useEffect} from 'react';
import {AppRoutes} from './AppRoutes';
import {RootState, useAppDispatch} from '../../store/store';
import {authAction, authThunk} from '../../store/reducers/appReducer';
import {useSelector} from 'react-redux';


export const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const isAuth = useSelector<RootState, boolean>(state => state.app.isAuth);
    const auth = useCallback(() => !isAuth && dispatch(authThunk()), [dispatch, isAuth]);
    const logout = useCallback(() => isAuth && dispatch(authAction({isAuth: false})), [dispatch, isAuth]);

    useEffect(() => {
        auth();
        return () => {
            logout();
        }
    }, [auth]);

    return (
        <AppRoutes/>
    );

}

