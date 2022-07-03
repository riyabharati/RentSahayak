import axios from "axios";
const getRootUrl=()=>{
    const port=8000
    return `https://rentsahayak-backend.herokuapp.com/api/`
}
const sendRequest=async(
    method="GET",
    path,
    secured=true,
    body
)=>{
    console.log("bbody",body)
    const getApi=axios.create({
        baseURL:getRootUrl(),
        headers:secured?
        {
            post:{ 'Content-Type': 'application/json' },
            'Authorization': localStorage.getItem("userInfo"),
        }:{
            post:{'Content-Type':'application/json'},
        }
    })
    return  getApi.request({
        method:method,
        url:path,
        ...((method==="POST"||method==="PUT")&&{data:body}),
        timeout:5000
    })
}
export default sendRequest