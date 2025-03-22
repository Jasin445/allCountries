

export async function getData(){

        const response = await fetch('https://restcountries.com/v3.1/all');

        if(!response.ok){
            throw new Error ("An Error Occured While Fetching the Data!!")
        }
        const data = await response.json()
        return data;
   
}