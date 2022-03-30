import axios from "axios";

const GetApi = axios.create({
    baseURL: "https://www.anapioficeandfire.com/api"
})

export default GetApi