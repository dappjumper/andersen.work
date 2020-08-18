import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: `https://service-bin.hostman.site`,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}