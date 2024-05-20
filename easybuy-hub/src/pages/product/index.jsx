import React, { useState, useEffect} from "react";
import { API_URL } from "../../constants/api";
import { useParams } from "react-router-dom";
import ViewProduct from "../../components/ViewProduct";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/Error";

export default function Product() {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        async function getProduct(url) {
            try {
                setIsLoading(true);
                setIsError(false);

                const response = await fetch(url);
                const json = await response.json();

                setProduct(json);
            } catch(error) {
                console.log(error);
                setIsError(true);
            } finally {
                setIsLoading(false)
            }
        }

        getProduct(API_URL + `/${id}`);
    }, [id]);

    if(isLoading) {
        return <Loader />
    }

    if(isError) {
        return <ErrorMessage />
    }

    return (
        <div>
            <ViewProduct product={product}/>
        </div>
    )
}