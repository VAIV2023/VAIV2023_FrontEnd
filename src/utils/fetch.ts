import axios from "axios";


export const testAPI = () =>{
    axios
        .get('http://localhost:8000/')
        .then((res) => console.log(res.data));
}