import { useState } from "react";
import { useSearchParams } from "react-router-dom";


export function usePaginate(itemsPerPage: number, data: any[]){
    const [searchParam, setSearchParam] = useSearchParams();
    
    const currentPage = Number(searchParam.get('page')) || 1 
    const countriesPerPage = itemsPerPage;
  
    const setCurrentPage = (page: any) => {
        setSearchParam({page: page.toString()})
    }

    let indexOfLastCountryOnTheCurrentPage = currentPage * countriesPerPage
    let indexOfFirstCountryOnTheCurrentPage = indexOfLastCountryOnTheCurrentPage - countriesPerPage;
    let totalPages = Math.ceil(data.length / countriesPerPage);
    let countryData = data.slice(indexOfFirstCountryOnTheCurrentPage, indexOfLastCountryOnTheCurrentPage)

    return {currentPage, totalPages, setCurrentPage, countriesPerPage, countryData}
}


export function usePaginateChange(itemsPerPage: number, data: any[]){
    const [currentPagination, setCurrentPagination] = useState(1);
    
    const countriesPerPage = itemsPerPage;
    

    let indexOfLastCountryOnTheCurrentPage = currentPagination * countriesPerPage
    let indexOfFirstCountryOnTheCurrentPage = indexOfLastCountryOnTheCurrentPage - countriesPerPage;
    let totalPages = Math.ceil(data.length / countriesPerPage);
    let arr = data.slice(indexOfFirstCountryOnTheCurrentPage, indexOfLastCountryOnTheCurrentPage)

    return {currentPagination, setCurrentPagination, totalPages, countriesPerPage, arr, indexOfLastCountryOnTheCurrentPage, indexOfFirstCountryOnTheCurrentPage}
}