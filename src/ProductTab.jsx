import Product from "./Product";


function ProductTab(){
    let options = ["200MP Camera","Sony Seansor","8500mah Battery"];
    return (
        <>
        <Product title = "Smart Phones" price = "25000" features = {options} />
        <Product title = "Laptops" price = {65000} />
        <Product title = "Desktop Monitors" price = "25000" />
        </>
    )
}

export default ProductTab;