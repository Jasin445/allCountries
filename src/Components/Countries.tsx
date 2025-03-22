import SearchAndFilter from "./SearchAndFilter";
import CountryCard from "./CountryCard";
import { useOutletContext } from "react-router-dom";


export default function Countries() {
    const {theme, resolvedData: loaderData } = useOutletContext<any>()
  
        return (
            <div>
                <SearchAndFilter theme={theme} data={loaderData}/>
                <CountryCard data={loaderData} />
            </div>
        );
    }

// }
