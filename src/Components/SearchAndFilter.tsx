import searchImg from '../assets/search.png'
import expandImg from '../assets/expand-more (1).png'
import darkExpandImd from '../assets/Group 2.png'
import BoxShadow from './BoxShadow'
import { useEffect, useState, useRef, useContext } from 'react'
import Filter from './Filter'
import { useSearchParams } from 'react-router-dom'
import { LayoutContext } from './Context'


export default function SearchAndFilter({data}: any){
    const [toggle, setToggle] = useState(false)
    const context = useContext(LayoutContext)
    const filterRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const [searchParam, setSearchParam] = useSearchParams();
    // const countries = searchParam.get('region')

    if(!context){
        return null
    }

    const {theme} = context;
    const allQueryParams = Object.fromEntries(searchParam.entries());
    const [searchTerms, setSearchTerms] = useState(searchParam.get('country') || "")

    function handleOnChange(event: { target: { value: any } }){
     
        setSearchTerms(event.target.value)
         const searchTerm = event.target.value;

        if(searchTerm){
            setSearchParam({...allQueryParams, country: searchTerm })
        }else{
            const { country, ...rest} = allQueryParams
            setSearchParam(rest)
        }
        
    }

    useEffect(() => {
        const handleClickOutside = (event: { target: any }) => {
            if (toggle && filterRef.current && !filterRef.current?.contains(event.target) && !buttonRef.current?.contains(event.target)) {
                setToggle(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggle]);
    function handleToggle(){
        setToggle(prev => !prev)
      
    }

    function capitalize(word: any){
      let theWord = word.charAt(0).toUpperCase() + word.slice(1)
      return theWord;
    }


    return <div className="mt-[141px] max-sm:mt-[120px] h-[56px] px-4 ">
        <div className="l w-[90%] mx-auto flex justify-between items-center some  h-[100%]">
       <BoxShadow
       className={`drop w-[539px] relative z-[200] h-[56px] bg-white flex items-center px-[32px] shadow-second justify-between rounded-[5px] dark:bg-[#2B3844] min-w-[0px] gap-[25px]`}
       padding="32"
       width="69"
       minWidth="60">
       <img className='w-[18px] h-[18px]' 
       src={searchImg} alt="" />
       <input className="w-full outline-none border-none dark:bg-[#2B3844]" 
       value={searchTerms}
       type="text"
       onChange={handleOnChange}
       placeholder="Search for a country.."/>
       </BoxShadow>


      <div className='self-start min-w-0 w-[25%] gr'>

       <BoxShadow onClick={handleToggle}
       className={`w-[100%] relative z-[200]  h-[57px] bg-white flex items-center px-[20px] shadow-second rounded-[5px] dark:bg-[#2B3844] mb-[4px] !min-w-[0px] gap-[25px] gr`}
      
       ref={buttonRef}
       >

        <div className='flex !min-w-0 justify-between items-center w-full'>
        <h1 className='text-[14px] !min-w-0 text-[#111517] dark:text-[#fff]'>{searchParam.get('region') ? capitalize(searchParam?.get('region')) : "Filter by region"}</h1>
       
        {theme === "dark" && <img className={`w-[12px] h-[9.85px] ${toggle ? 'rotate-180' : ""}`} src={ darkExpandImd } alt="" />}
        {theme === "light" && <img className={`w-[9px] h-[5.25px] ${toggle ? 'rotate-180' : ""}`} src={expandImg} alt="" />}

        </div>
       </BoxShadow>
     {toggle &&  <BoxShadow
     className={`w-[100%] relative z-[200] h-auto bg-white block px-[20px] py-3 shadow-second rounded-[5px] dark:bg-[#2B3844]  min-w-0 text-left gap-[25px] gr`}
       ref={filterRef}
       >
       <ul>
       <Filter data={data} setSearchTerms={setSearchTerms} setSearchParam={setSearchParam} />
       </ul>

       </BoxShadow>}
      </div>
            
        </div>
    </div>
}