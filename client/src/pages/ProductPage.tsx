{/* this is the staring code for the product page will have to update the code to pull the data for the products from the backend
import { useEffect, useState } from "react"
import dummyProducts from "../dummydata/products"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductPage() {

    const {addToCart} = useContext(CartContext)

    const [activeCategory, setActiveCategory] = useState("rainy")

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const filteredData = dummyProducts.filter(product => {
            return product.category == activeCategory
        })
        setFilteredProducts(filteredData)
    }, [activeCategory])

    return(
        <>
            <h1>this is the product page</h1>

            <button onClick={() => {
                setActiveCategory("sunny")
            }}>Sunny</button>
            <button onClick={() => {
                setActiveCategory("rainy")
            }}>Rainy</button>


            <ul>
                {
                    filteredProducts.map(product => {
                        return (
                            <li>
                                <h2>Name: {product.name}</h2>
                                <button onClick={() => {
                                    addToCart(product)
                                }}>Add to Cart</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default ProductPage
*/}