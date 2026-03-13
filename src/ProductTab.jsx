import Product from "./Product";
import "./ProductTab.css";


function ProductTab(){
    let options1 = ["200MP Camera","Sony Seansor","8500mah Battery"];
    return (
        <div className="ProductTab">
        <Product title = "Smart Phones" price = "25000" features1 = {options1} />
        <Product title = "Laptops" price = {65000} features2={["AMD Ryzen 7 8000 Series", "32 Cores, 64 Threads", "NVIDIA RTX 3060 16 GB"]} />
        <Product title = "Desktop Monitors" price = "25000" features3={["4K Resolution", "IPS Display", "99% sRGB"]} />
        </div>
    )
}

export default ProductTab;