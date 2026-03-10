import "./Product.css";

function Product({title, price, features}){
    console.log(features);
    return (
        <div className="Product">
            <h4>{title}</h4>
            <h5>Price : {price}</h5>
            <h6>{features}</h6>
        </div>
    )
}


export default Product;