import SearchAndFilter from "./SearchAndFilter";
import CountryCard from "./CountryCard";
import { useOutletContext } from "react-router-dom";


export default function Countries() {
    const { resolvedData: loaderData } = useOutletContext<any>()

    return (
        <div>
            {(location.pathname === '/countries' || location.pathname === '/') && <SearchAndFilter />}
            <CountryCard data={loaderData} />
        </div>
    );
}

// }
