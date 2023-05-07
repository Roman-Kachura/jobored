import axios, {AxiosResponse} from 'axios';
import env from 'react-dotenv';
import {CatalogResponseType, VacanciesDataResponseType, VacancyRequestType, VacancyResponseType} from './apiTypes';

const serverUrl = env.SERVER_URL || 'https://startup-summer-2023-proxy.onrender.com/2.0/';

const $api = axios.create({
    baseURL: serverUrl,
    headers: {
        'x-secret-key': env.X_SECRET_KEY,
        'x-api-app-id': env.CLIENT_SECRET
    }
});

export const api = {
    auth() {
        return $api.get(`oauth2/password/?login=${env.LOGIN}&password=${env.PASSWORD}&client_id=${env.CLIENT_ID}&client_secret=${env.CLIENT_SECRET}&hr=${env.HR}`)
    },
    getVacancies(data: VacancyRequestType) {
        const {published, keyword, payment_from, payment_to, catalogues, page, count} = data;
        return $api.get<AxiosResponse, AxiosResponse<VacanciesDataResponseType>>(`vacancies/?published=${published}&keyword=${keyword}&payment_from=${payment_from}&payment_to=${payment_to}&catalogues=${catalogues}&page=${page}&count=${count}/`)
    },
    getCatalogues() {
        return $api.get<AxiosResponse, AxiosResponse<CatalogResponseType[]>>('catalogues/');
    },
    getVacancyById(id:string){
        return $api.get<AxiosResponse,AxiosResponse<VacancyResponseType>>(`vacancies/${id}`);
    }
}


