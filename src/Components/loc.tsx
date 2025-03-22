import { getData } from './functions'
import { defer } from 'react-router-dom'

export async function countriesData(){
        
     return defer({data: getData()})

  }