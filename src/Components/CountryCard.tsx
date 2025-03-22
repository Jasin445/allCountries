import { Key, ReactNode, useMemo} from "react"
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { usePaginate } from "./usePaginate";
import Pagination from "./Pagination";
import ErrorComponent from "./ErrorComponent";

export default function CountryCard({ data }: any) {
    const [searchParam] = useSearchParams();
    let region = searchParam.get('region');
    let searchCountryName = searchParam.get('country')
    const location = useLocation();
  
    
    const filteredRegion = useMemo(() => {
        return region ? data.filter((info: { region: string }) => info.region.toLowerCase() === region.toLowerCase()) : data;
    }, [data, region])
    
    
    const searchedCountry = useMemo(() => {
        return searchCountryName ? filteredRegion.filter((country: any) => country?.name?.official.toLowerCase().includes(searchCountryName?.toLowerCase())) : filteredRegion}, [filteredRegion, searchCountryName]);
       
        const {totalPages, countryData: countries, setCurrentPage} = usePaginate(8, searchedCountry)
       
        
        return <>
        {searchedCountry.length > 0 ? 
        <div className=" px-4 mt-14 shift mb-16">
            <div className="l w-[90%] grid mx-auto grid-cols-4 gap-y-16 gap-[3.8%] justify-between">
                {
                    (countries).map((country: {
                        cca3: Key | null | undefined;
                        capital: ReactNode;
                        region: ReactNode;
                        population: ReactNode;
                        name: any; cca2: Key | null | undefined;
                        flags: { png: string | undefined }
                    }) => (
                        <Link to={`${country.cca3}`} state={{prev: location.pathname}} key={country.name.official}> <div className="w-[100%] bg-white shadow-second rounded-[5px] h-[356px] hi dark:bg-[#2B3844]">

                            <div>
                                <img className="w-[100%] h-[160px] rounded-t-[5px] h" src={country.flags.png} alt={`image of ${country.name?.common}`} />
                            </div>
                            <div className="p-6 h-auto">
                                <h1 className="text-[18px] font-extrabold max-sm:text-[16px]">{country.name?.official}</h1>
                                <p className="text-[14px] font-light mt-2">Population: <span>{country?.population || "N/A"}</span></p>
                                <p className="text-[14px] font-light ">Region: <span>{country?.region || "N/A"}</span></p>
                                <p className="text-[14px] font-light ">Sub-Region: <span>{country?.capital || 'N/A'}</span></p>

                            </div>
                        </div></Link>
                    ))
                }

            </div>

        </div> 
        :
        <ErrorComponent err='No Countries Found!' noHead/>
        }

        <Pagination searchQuery={searchCountryName} totalPages={totalPages} setCurrentPage={setCurrentPage}/>
    </>
}