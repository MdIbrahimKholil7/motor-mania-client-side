import axios from "axios";

const fetcher=axios.create({
    baseURL:'https://motor-mania-server.onrender.com'
})
export default fetcher