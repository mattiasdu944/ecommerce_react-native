import axios from "axios";

const ecommerceDb = axios.create({
    baseURL:'https://store.innovacode.online/api'
})

export default ecommerceDb;