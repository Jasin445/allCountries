

export async function getData(){

        const response = await fetch('https://restcountries.com/v3.1/all');

        if(!response.ok){
            throw new Error ("An Error Occured While Fetching the Data!!")
        }
        const data = await response.json()
        return data;
   
}

export function dataSetup(filteredDetails: any){

    let key = filteredDetails?.currencies ? Object.keys(filteredDetails?.currencies)[0] : null
    let key1 = filteredDetails?.name.nativeName ? Object.keys(filteredDetails?.name.nativeName)[0] : null
    let key2 = filteredDetails?.languages ? Object.keys(filteredDetails?.languages).map((language, index) => {
        let languages = filteredDetails?.languages[language]
        if (index < language.length - 1) {
            languages += ", ";
        }
        return languages;
    }) : null

    return {key, key1, key2}
}