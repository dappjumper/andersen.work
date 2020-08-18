import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: `https://service-bin-73a8.hostman.site`,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}