import axios from "axios";

class getPosts {
     static postlist() {
        let serverURL = "http://localhost:5500/api/posts/timeline/6429a0049a3debe88e9bf842"
        return axios.get(serverURL)
     }
}


export default getPosts