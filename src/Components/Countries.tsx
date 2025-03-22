import SearchAndFilter from "./SearchAndFilter";
import CountryCard from "./CountryCard";
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { countryReducerAction } from "./store";

export default function Countries() {
    const {theme, resolvedData: loaderData } = useOutletContext<any>()
   const dispatch = useDispatch()
    const reduxCountry = useSelector<any>((state: { countryData: { data: any; } }) => state.countryData.data)
    
const hasDispatched = useRef(false);

useEffect(() => {
    if (!hasDispatched.current && !reduxCountry) {
        dispatch(countryReducerAction.getData(loaderData));
        hasDispatched.current = true; // Prevents multiple dispatches
    }
}, [reduxCountry, dispatch, loaderData]);

        return (
            <div>
                <SearchAndFilter theme={theme} data={loaderData}/>
                <CountryCard data={loaderData} />
            </div>
        );
    }

// }
