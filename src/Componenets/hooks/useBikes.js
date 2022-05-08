import { useEffect, useState } from "react";

const useBikes = () =>{
    const [bikes,setBikes] = useState([]);
    useEffect(()=>{
        fetch("https://tranquil-forest-45892.herokuapp.com/bikes")
        .then(res => res.json())
        .then(data => setBikes(data));
    },[])

    return{bikes,setBikes};
}
export default useBikes;