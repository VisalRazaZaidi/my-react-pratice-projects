import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // one way to fetch api using classic JS 101 
    
    // const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/VisalRazaZaidi')
    //     .then(response => response.json())
    //     .then(data => { 
    //         setData(data)
    //     })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github UserName: {data.followers}
    <img  src={data.avatar_url} alt="Github_pic" width={300} />
    </div>      
)}

export default Github

// second way to fetch api in react 

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/VisalRazaZaidi')
//     return response.json()
// }