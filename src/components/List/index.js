
//List
import Item from "./../../components/Item"

function List(props){

    const {countries, code} = props;
    return (        
        <ul className="list">
                  {countries.map((country, index) => (                        
                        <Item key={index} name={country} code={code[index]}/>))}
        </ul>
    )
}

export default List;
