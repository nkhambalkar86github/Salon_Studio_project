import axios from "axios";

export async function login(credential)
{
    const res=await axios.post("http://127.0.0.1:2310/admin/login",credential);
    return res.data;
}