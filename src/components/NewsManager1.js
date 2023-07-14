import React, { useEffect } from 'react'
import { useState } from 'react';
import Header1 from './Header/Header1';
import axios from 'axios';
import Card1 from './card/Card1';

export const NewsManager1 = () => {
    const [news,setNews]=useState([]);
    const [result,setResult]=useState({id:1,
                                        res:''})
    let heading='Top Headings'                              
    let isReadList=false
    let url=''
    if(result.id===1){
      heading="Top Headings"
     } 
     else if(result.id===2){
      heading=result.res
     } 
     else if(result.id===3){
      heading=result.res
     }    
     else if(result.id===4){
      heading="Read-List"
     }  
    useEffect(()=>{
      if(result.id===1){
        url=`https://newsapi.org/v2/top-headlines?country=in&apikey=3b941681d5414da3b737b9b477509c9f&page=1`;
      }
      else if(result.id===2){
       
        url=`https://newsapi.org/v2/everything?q=${result.res}&apiKey=3b941681d5414da3b737b9b477509c9f&language=en&page=1`;
      }
      else if(result.id===3){
        console.log(`url check search-${result.res}`)
        url=  `https://newsapi.org/v2/top-headlines?country=in&category=${result.res}&apikey=3b941681d5414da3b737b9b477509c9f`;
       
      }
      else if(result.id===4){
        url=`http://localhost:3001/news`;
     
      }
      axios.get(url)
      .then((response)=>{
        console.log(response.data)
       result.id===4?setNews(response.data): setNews(response.data.articles)
       
      }

         
      )
      .catch((error)=>console.log(error))
  
    },[result])
   const setTopHeadings=()=>{
      setResult({
        id:1,
        res:''
      })
    }
    const setSearchCategory = (val) => {
      setResult((prevResult) => ({
        ...prevResult,
        id:2,
        res: val
      }));
    };
    
    const setCategory = (val) => {
      setResult((prevResult) => ({
        ...prevResult,
        id:3,
        res: val
      }));
    };
    
    const setReadLines=()=>{
      setResult({
        id:4,
        res:''
      })
    }
    return (
        <div>
           <Header1 topHandler={setTopHeadings} searchHandler={setSearchCategory} categoreyHandler={setCategory} readLinesHandler={setReadLines}/>
           <h1>{heading}</h1>
           <div>
   {news.map((newItem,index) => {
          console.log(newItem)
          return  <Card1  key={index}  Id={result.id} Imgurl={newItem.urlToImage} Title={newItem.title} Author={newItem.author} />; 
         })} 

   </div>
        </div>
    )
}
