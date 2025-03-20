import {  useSearchParams } from "react-router-dom"
import { usePaginateChange } from "./usePaginate";
import { useEffect, useState } from "react";

export default function Pagination({totalPages, searchQuery}: any){
    const [searchParam, setSearchParam] = useSearchParams()
    const currentPage = Number(searchParam.get("page")) || 1; // Get page from URL
    const [width, setWidth ] = useState<number>(window.innerWidth)
    
    useEffect(() => {
        const newParam = new URLSearchParams(searchParam)
        newParam.delete('page');
        setSearchParam(newParam)
    }, [searchQuery]); 

    const handlePageChange = (page: number) => {
        const newParam = new URLSearchParams(searchParam)
        newParam.set("page", page.toString())
        setSearchParam(newParam)
    }

    
    const handleCurrentPagination = (n: number) => {
        const newPagination = currentPagination + n;
        setCurrentPagination(newPagination);
        handlePageChange((newPagination - 1) * 7 + 1);
    };

    
    let arr = Array.from({ length: totalPages }, (_, index) => index + 1);

    const {currentPagination, setCurrentPagination, arr: newArr} = usePaginateChange(7, arr)

    
    

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
        return () => window.removeEventListener("resize", () => {
            setWidth(window.innerWidth)
        }); // Cleanup on unmount

    }, [])


    return <>
         {(totalPages > 1 && width > 680) &&
        (
        <div className="flex gap-4 justify-center items-center mb-9">
       {currentPagination > 1 && <button className={`px-4 py-1 bg-white shadow-custom rounded dark:text-white dark:bg-[#2B3844] disabled:bg-slate-300`}  onClick={() => handleCurrentPagination(-1)}>Prev</button>}

        {newArr.map((number: number, index: any) => {
          
                    return <button key={index} onClick={() => handlePageChange(number)} className={`px-4 py-1 bg-white shadow-custom rounded dark:text-white dark:bg-[#2B3844] ${currentPage === number ? `bg-stone-500 text-[#1c7dd7f4] disabled dark:bg-blue-500` : ""}`}>{number}</button>
          
        })}



       {currentPagination * 7 < totalPages && <button className={`px-4 py-1 bg-white shadow-custom rounded dark:text-white dark:bg-[#2B3844]`}  onClick={() => handleCurrentPagination(1)}>Next</button>}
        </div>)

         }

        {(totalPages > 1 && width < 680) && 
            <div className="flex justify-center gap-3 mb-7">
            <button disabled={currentPage <= 1} onClick={() => handlePageChange(currentPage - 1)} className="text-black bg-white shadow-second dark:text-white   disabled:bg-gray-100 disabled:text-gray-500 dark:disabled:text-gray-500  dark:disabled:bg-gray-800 dark:bg-[#2B3844] px-3 py-1 rounded">Prev</button>
            <button disabled={currentPage >= totalPages} onClick={() => handlePageChange( currentPage + 1 )} className="bg-white shadow-second disabled:bg-gray-100  text-black dark:disabled:text-gray-500 dark:disabled:bg-gray-800 disabled:text-gray-500 dark:text-white  dark:bg-[#2B3844] px-3 py-1 rounded">Next</button>
            </div>
       
     
        } 
    
        </>
}