import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '1b24aeea0aff4ba3930b4a033d57fa3c'
    }
})