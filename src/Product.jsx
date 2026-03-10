import "./Product.css";

function Product({title, price, features1 = [], features2 = [], features3 = []}){

    const list1 = features1.map((feature1)=> <li>{feature1}</li>);
    const list2 = features2.map((feature2)=> <li>{feature2}</li>);
    const list3 = features3.map((feature3 => <li>{feature3}</li>))
    
    return (
        <div className="Product">
            <h4>{title}</h4>
            <h5>Price : {price}</h5>
            <ul>{list1}</ul>
            <ul>{list2}</ul>
            <ul>{list3}</ul>
        </div>
    )
}


export default Product;