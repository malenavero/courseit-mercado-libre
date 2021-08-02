
function Product(props){
    const {title, price, img} = props;

    return <>        
        <div className="card">
            <img className="productImg" src={img} alt={title}/>
            <div className="line"></div>
            <p className="productPrice">${price}</p>            
        </div>
    </>
}

export default Product;