import axios from "axios";

const CoinsApi = axios.create({
    baseURL: "https://www.cryptingup.com/api/markets"
})

export default CoinsApi
