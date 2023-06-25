import { FC, useEffect } from 'react';
import { ProductContext } from './ProductContext';
import ecommerceDb from '../../api/ecommerceDb';

interface PropsProvider{
    children : JSX.Element | JSX.Element[]
}


export const ProductProvider:FC<PropsProvider> = ({ children }) => {

    const getAllProducts = async (): Promise<void> => {
        const { data } = await ecommerceDb.get('/product');
        console.log(data);
    }

    useEffect(() => {
        getAllProducts()
    }, [])
    

    return (
        <ProductContext.Provider value={{

        }}>
            { children }
        </ProductContext.Provider>
    )
}