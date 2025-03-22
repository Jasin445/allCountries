
export default function Filter({setSearchParam, setSearchTerms, data}: any){

    if(!data){
        const regions = ["Antartica", "America", "Africa", "Asia", "Europe" ]
        return <>
        <div className="flex flex-col items-start ">
    
    
    
            <button className="w-full text-left" onClick={() => handleClick('')}><li className='px-5 py-1 hover:bg-[#f6f5f3] dark:hover:bg-[#222d38]'>All</li></button>
    
            {
                regions.map((region: any) => {
                    return (
                    <button 
                    key={region} 
                    className="w-full text-left" 
                    onClick={() => handleClick(`${region}`)}>
                    <li className='px-5 py-1 dark:hover:bg-[#222d38] hover:bg-[#f6f5f3]'>
                        {region}
                    </li>
                    </button>
                    )
                })
            }
       
        </div>
        </>

    }
    const regions = Array.from(new Set(data.map((country: { region: string }) => country?.region)))
   
    
    function handleClick(path: string){
        if(path){
            setSearchParam({region: path})

        }
        else{
            setSearchParam({})
        }
            setSearchTerms("")
    }


    return <>
    <div className="flex flex-col items-start ">



        <button className="w-full text-left" onClick={() => handleClick('')}><li className='px-5 py-1 hover:bg-[#f6f5f3] dark:hover:bg-[#222d38]'>All</li></button>

        {
            regions.map((region: any) => {
                return (
                <button 
                key={region} 
                className="w-full text-left" 
                onClick={() => handleClick(`${region}`)}>
                <li className='px-5 py-1 dark:hover:bg-[#222d38] hover:bg-[#f6f5f3]'>
                    {region}
                </li>
                </button>
                )
            })
        }
   
    </div>
    </>
}