import "./Product.css";

function Product({title, price, features1 = [], features2 = [], features3 = []}){

    const list1 = features1.map((feature1)=> <li>{feature1}</li>);
    const list2 = features2.map((feature2)=> <li>{feature2}</li>);
    const list3 = features3.map((feature3 => <li>{feature3}</li>));

    let havingDiscount = price > 82000;

    let styles = {backgroundColor: price>40000 || havingDiscount? "darkred" : "darkgreen"};
    

    
    return (
        <div className="Product" style={styles}>
            <h4>{title}</h4>
            <h5>Price : {price}</h5>
            {price > 40000 ? <p>25% Discount</p> : <p>10% Discount</p>}
            <ul>{list1}</ul>
            <ul>{list2}</ul>
            <ul>{list3}</ul>
        </div>
    )
}


export default Product;