import axios, {AxiosResponse} from 'axios';
import env from 'react-dotenv';
import {CatalogResponseType, VacanciesDataResponseType, VacancyRequestType, VacancyResponseType} from './apiTypes';

const $api = axios.create({
    baseURL: 'https://startup-summer-2023-proxy.onrender.com/2.0/',
    headers: {
        'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
        'x-api-app-id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948'
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


