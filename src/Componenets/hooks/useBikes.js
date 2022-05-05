import { useEffect, useState } from "react";

const useBikes = () =>{
    const [bikes,setBikes] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/bikes")
        .then(res => res.json())
        .then(data => setBikes(data));
    },[])

    return{bikes,setBikes};
}
export default useBikes;