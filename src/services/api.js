import axiosLib from "axios"

export const axios = axiosLib.create({
  baseURL: "http://api.themoviedb.org/3/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

const apiKey = "4aa883f95999ec813b8bfaf319f3972b"
axios.interceptors.request.use(request => ({
  ...request,
  url: `${request.url}?api_key=${apiKey}`,
}))

export const getMovies = () => axios.get("/movie/top_rated")
