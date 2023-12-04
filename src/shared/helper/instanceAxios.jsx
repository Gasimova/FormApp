import axios from "axios"

export const instanceAxios = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    timeout: 15000,
})

// instanceAxios.interceptos.request.use((confiq) => {
//     console.log(confiq, 'confiq');
//     return confiq
// }, (err) => {
//     console.log(err, 'err');
//     return err
// })