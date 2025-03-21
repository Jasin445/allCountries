import { Link, useOutletContext, useLoaderData, useLocation} from "react-router-dom"
import backButton from '../assets/call-made.png'
import { dataSetup } from "./functions"
import darkBackButton from '../assets/call-made2.png'


export default function CountryDetails() {
    const filteredDetails: any = useLoaderData()
    const { theme, resolvedData: data } = useOutletContext<any>()
    const location = useLocation();


    const keys = dataSetup(filteredDetails)
    const {key, key1, key2} = keys;

    let borders = filteredDetails?.borders ? (filteredDetails?.borders.map((border: any) => {

        return <Link to={`/countries/${border}`} key={border}>
            <button className="shadow-btn px-3 py-1 ml-2 mb-4 dark:bg-[#2B3844] dark:shadow-dark dark:rounded">
                {data.map((datae: any) => {
                    if (datae.cca3 === border) {
                        return datae.name.official;
                    }
                    return null
                })}


            </button>
        </Link>


    })) : null

    const prevState = location?.state?.prev || '..';
    

    return (
        <div className="mt-[100px] p-4">
            <div className="l w-[90%] mx-auto">
                <Link to={prevState}>
                    <button className="flex w-[136px] rounded-[6px] max-sm:mb-11 h-[40px] gap-[10px] items-center shadow-btn justify-center mb-[60px] dark:bg-[#2B3844] dark:shadow-dark">
                        <img width="20px" height="20px" src={theme === "dark" ? darkBackButton : backButton} alt="" />
                        <p>Back</p>
                    </button>
                </Link>
                <div className="flex flexWrap justify-between gap-[4%] items-center">
                    <div className="increase basis-[45%]">
                        <img className="rounded-[8px] change min-w-[560px] h-[444px]" src={filteredDetails?.flags?.png} alt="" />
                    </div>
                    <div className="basis-[50%] widther">
                        <div className="w-full flex gap-1 justify-between items-center collapsed">
                            <div className="down basis-[70%] width">
                                <h1 className="text-[32px] mm h font-semibold mb-[23px]">{filteredDetails?.name?.official || "N/A"}</h1>
                                <p className="text-[16px] font-normal mb-2">Native Name: <span className="text-[#111517] font-extralight dark:text-[#fff]">{key1 && filteredDetails?.name?.nativeName[key1]?.official || "N/A"}</span></p>
                                <p className="text-[16px] font-normal mb-2">Population: <span className="text-[#111517] font-extralight dark:text-[#fff]">{filteredDetails?.population || "N/A"}</span></p>
                                <p className="text-[16px] font-normal mb-2">Region: <span className="text-[#111517] font-extralight dark:text-[#fff]">{filteredDetails?.region || "N/A"}</span></p>
                                <p className="text-[16px] font-normal mb-2">Sub Region: <span className="text-[#111517] font-extralight dark:text-[#fff]">{filteredDetails?.subregion || "N/A"}</span></p>
                                <p className="text-[16px] font-normal mb-2">Capital: <span className="text-[#111517] font-extralight dark:text-[#fff]">{filteredDetails?.capital || "N/A"}</span></p>
                            </div>
                            <div className="width">
                                <p className="mt-16 margin text-[16px] font-normal mb-2">Top Level Domain: <span className="text-[#111517] font-extralight dark:text-[#fff]">{filteredDetails?.tld || "N/A"}</span></p>
                                <p className="text-[16px] font-normal mb-2">Currencies: <span className="text-[#111517] font-extralight dark:text-[#fff]">{key && filteredDetails?.currencies[key]?.name || "N/A"}</span></p>
                                <p className="text-[16px] font-normal mb-2">Languages <span className="text-[#111517] font-extralight dark:text-[#fff]">{key2 && key2 || "N/A"}</span></p>
                            </div>
                        </div>
                        <h1 className="mt-[60px]">Border-countries: {borders ? borders : <span className="text-[#111517] font-extralight dark:text-[#fff] ml-[10px]">No border</span>}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
