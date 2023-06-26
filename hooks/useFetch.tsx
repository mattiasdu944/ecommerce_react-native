import { ToastAndroid } from "react-native/Libraries/Components/ToastAndroid/ToastAndroid";
import { useState, useEffect } from 'react';
import ecommerceDb from '../api/ecommerceDb';
import axios from "axios";

export const useFetch = ( url: string ) => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const showToast = (message: string) => {
        ToastAndroid.show(message, ToastAndroid.CENTER);
    };

    const getData = async (): Promise<void> => {
        try {
            setIsLoading(true);
            const { data: { data } } = await ecommerceDb.get(`${ url }`)
            setData( data );
        } catch (error) {
            if ( axios.isAxiosError(error) ) {
                showToast(error.response?.data.message);
            }
        } finally {
            setIsLoading( false );
        }
    }

    useEffect(() => {
        getData();
    }, [])
    

    return {
        data,
        isLoading,
    }
}
