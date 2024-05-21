import React, { useEffect,useState } from "react";
import { API_URL } from "../../constants/api";
import Products from "../../components/Products";
import SearchBar from "../../components/Search";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/Error";

export default function Home() {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [searchInput, setSearchInput]= useState("");
    const [filteredProducts, setFilteredProducts]= useState([]);

    useEffect(() => {
        async function getProducts(url) {
            try {
                setIsLoading(true);
                setIsError(false);

                const response = await fetch(url);
                const json = await response.json();

                setProducts(json.data);
            } catch(error) {
                console.log(error);
                setIsError(true);
            } finally {
                setIsLoading(false)
            }
        }

        document.title = "EasyBuy-Hub | Home";

        getProducts(API_URL);
    }, []);

    if(isLoading) {
        return <Loader />
    }

    if(isError) {
        return <ErrorMessage />
    }

    function onSearchInputChange(value) {
        setSearchInput(value);
        const result = products.filter((product) => {
            return value && product.title.toLowerCase().includes(value.toLowerCase());
        });
        setFilteredProducts(result);
    }

    return (
        <div>
            <SearchBar filteredProducts={filteredProducts} searchInput={searchInput} onSearchInputChange={onSearchInputChange}/>
            <h1>Products</h1>
            <Products products={products} />
        </div>
    )
}