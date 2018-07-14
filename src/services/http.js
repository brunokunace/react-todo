import axios from 'axios'

const http = axios.create({
  baseURL:'https://app-acruxx.wedeploy.io'
})

export default http