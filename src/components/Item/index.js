//Item
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Item (props){
    const {name, code} = props;    
    const [flagImg, setFlagImg]   = useState(false);
    const [loading, setLoading] = useState(true)
    const linkTo = `/carousel/${code}` 
    const alt = `bandera de ${name}`  
    //const [data, setData] = useState(false);
    
    async function fetchData(){
        const codes        = await fetch("https://flagcdn.com/en/codes.json");
        const codesToJson  = await codes.json();

        return codesToJson; 
        //setData(codesToJson) 
    } 

    useEffect(() => {
        //fetchData()
        getImg()
        
      }, []); 
          
    async function getImg(){
        const data = await fetchData();
        for (let i in data){
            if (data[i] === name){
                setFlagImg(`https://flagcdn.com/w20/${i}.png`)
            }
        }
        setLoading(false)
    }

    return (      
        <>
            {loading === false && 
                <Link to={linkTo}>
                    <li className="item" >
                        <img 
                            className="itemImg" 
                            src={flagImg} 
                            alt={alt}/>
                        {name}
                    </li>
                </Link>         
            } 
        </>          
    )    
}
export default Item;


