import React, {useCallback, useState} from 'react';
import {FiltersComponent} from './FiltersComponent';
import {VacancyRequestType} from '../../api/apiTypes';


const FilterContainer: React.FC<FilterComponent> = ({filtersParams, applyFiltersCallBack, clearFiltersCallback}) => {
    const [catalog, setCatalog] = useState(filtersParams.catalogues);
    const [salaryFrom, setSalaryFrom] = useState(filtersParams.payment_from);
    const [salaryTo, setSalaryTo] = useState(filtersParams.payment_to);

    const changeCatalog = (value: number) => {
        setCatalog(value)
    };
    const changeSalaryFrom = useCallback((value: number) => value >= 0 && setSalaryFrom(value), [salaryFrom]);
    const changeSalaryTo = useCallback((value: number) => value >= 0 && setSalaryTo(value), [salaryTo]);
    const applyFilters = () => applyFiltersCallBack({catalog, salaryFrom, salaryTo});
    const clearFilters = () => {
        setCatalog(0);
        setSalaryFrom(0);
        setSalaryTo(0);
        clearFiltersCallback();
    }

    return (
        <FiltersComponent
            catalog={catalog}
            salaryFrom={salaryFrom}
            salaryTo={salaryTo}
            changeCatalog={changeCatalog}
            changeSalaryFrom={changeSalaryFrom}
            changeSalaryTo={changeSalaryTo}
            applyFilters={applyFilters}
            clearFilters={clearFilters}
        />
    )
};

export const Filters = React.memo(FilterContainer);

interface FilterComponent {
    filtersParams: VacancyRequestType
    applyFiltersCallBack: (data: { catalog: number, salaryFrom: number, salaryTo: number }) => void
    clearFiltersCallback: () => void
}