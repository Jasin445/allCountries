import SearchAndFilter from "./SearchAndFilter";
import CountryCard from "./CountryCard";
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { countryReducerAction } from "./store";

export default function Countries() {
    const {theme, resolvedData: loaderData } = useOutletContext<any>()
   const dispatch = useDispatch()
    const reduxCountry = useSelector<any>((state: { countryData: { data: any; }; }) => state.countryData.data)
    useEffect(() => {
        if(!reduxCountry){
            dispatch(countryReducerAction.getData(loaderData))
        }
    }, [reduxCountry, dispatch, loaderData])
    // if (!loaderData) {
    //     return <h1 className="h-[100vh] flex justify-center items-center text-green-500 text-3xl text-center"> Loading...</h1>;
    // }else{

        return (
            <div>
                <SearchAndFilter theme={theme} data={loaderData}/>
                <CountryCard data={loaderData} />
            </div>
        );
    }

// }
