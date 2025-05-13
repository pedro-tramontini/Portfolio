import axios from "axios";


export async function getFunction() {
    const response = await axios.get("https://api.github.com/users/pedro-tramontini/repos");
    return response.data;
}