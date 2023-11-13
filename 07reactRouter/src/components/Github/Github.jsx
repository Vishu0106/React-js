import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export function Github() {

    const data = useLoaderData()

    // const [data , setData] = useState([])

//    useEffect(()=>{
//     fetch()
//     .then(response => response.json())
//     .then(data => {
//         setData(data)
//     })
//    },[])

    return(
        <div className="text-center m-4 bg-gray-600 text-white text-3xl">Github followers : {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export const githubInfo = async ()=>{
 const response =   await  fetch('https://api.github.com/users/hiteshchoudhary')

 return response.json();
    
}