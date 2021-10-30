import { useEffect, useState } from "react";

const useFetchItems = () => {

    const [tours, setTours] = useState([]);
    useEffect(()=> {
        fetch('./featuredplans.json')
        .then(res => res.json())
        .then(data => setTours(data))
    },[])

    return {
        tours
    }


}

export default useFetchItems;