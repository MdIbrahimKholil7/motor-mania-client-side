import axios from "axios";

const fetcher=axios.create({
    baseURL:'https://secret-bayou-77535.herokuapp.com'
})
export default fetcher