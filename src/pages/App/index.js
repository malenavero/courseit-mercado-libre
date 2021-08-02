
import './style.css';
import List from "./../../components/List"
import { useEffect, useState } from 'react';


function App() {
    const arrayCountries = ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Costa Rica", "Ecuador", "Guatemala", "Honduras", "Mexico", "Nicaragua", "Panama", "Paraguay", "Peru", "El Salvador", "Uruguay", "Venezuela"]
    
    const arrayCodes = ["MLA", "MBO", "MLB", "MLC", "MCO", "MCR", "MEC", "MGT", "MHN", "MLM", "MNI", "MPA", "MPY", "MPE", "MSV", "MLU", "MLV"]

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      setLoading(false)
    }, [])
    
    return (
      <div className="container">
        {
          !loading && 
          <>
            <img className="img" src="https://static.mlstatic.com/org-img/homesnw/img/ml-logo@2x.png?v=4.0" alt="logo mercado libre"/>         
            <List countries = {arrayCountries} code= {arrayCodes} />
          </>
        }       
                
      </div>
  );
}

export default App;
