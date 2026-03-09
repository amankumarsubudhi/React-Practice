import Product from "./Product";


function ProductTab(){
    return (
        <>
        <Product title = "Smart Phones" price = "25000" />
        <Product title = "Laptops" price = {65000} />
        <Product title = "Desktop Monitors" price = "25000" />
        </>
    )
}

export default ProductTab;