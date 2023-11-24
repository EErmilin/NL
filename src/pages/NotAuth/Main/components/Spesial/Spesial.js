import React, { useMemo } from 'react'
import classes from "./Spesial.module.scss";
import useWindowSize from '../../../../../hooks/useWindowSize';
import ProductItem from '../../../../../components/ProductItem/ProductItem';
import { useQuery } from '@tanstack/react-query';
import axiosCustom from '../../../../../axios/axiosCustom';
const backUrl = "https://testapi.eu-nl.com"

function Spesial({
}) {

    const { data, isInitialLoading, isError } = useQuery(["spesial"], () =>
        axiosCustom(`${backUrl}/api/v1/products?sort=id&category_id=${20}`)
    );


    const templateProducts = useMemo(() => {
        if (!data) return
        return data.data?.data?.map((product, key) => <ProductItem product={product} key={key}/>)
    }, [data])

    return (
        <div className={classes.items}>
                {templateProducts}
        </div>
    );
}

export default Spesial