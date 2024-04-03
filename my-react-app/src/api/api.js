import axios from "axios";
const propertyApi = axios.create({baseURL:"https://ctmapp.adaptable.app"})

export default propertyApi