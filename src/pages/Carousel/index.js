//Carousel

import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Product from "./../../components/Product"
import "./style.css"


function Carousel(){
    const {site} = useParams();
    const [results, setResults] = useState() 
    const [loading, setLoading] = useState(true)

    useEffect(()=>   {     
        fetchData() 
              
     } ,[]); 

    async function fetchData(){
        const data = await fetch(`https://api.mercadolibre.com/sites/${site}/search?q=BUSQUEDA`)
        const dataToJson = await data.json();
        setResults(dataToJson.results); 
        setLoading(false)        
    }

    return (
        
        <div className="main">
            <h2>Basado en tu ultima visita</h2>
            <a href="">Ver historial</a>{/* agregar href */}
            {
                !loading && 
                    <ul className="productList">  
                        {results.map((product, index)=>(
                        <Product 
                            key     ={index}
                            title   ={product.title} 
                            img     ={product.thumbnail} 
                            price   ={product.price}
                            />
                        ))}                
                    </ul>
            }                
        </div>  
    )
}

export default Carousel;