import { useEffect, useState } from "react";

export function useFilter({str1,str}) {
    console.log(str1)
    const [countriesData, setCountriesData] = useState([]) 
    return [str1, str1.filter((item) => str(item))]
}