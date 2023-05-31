import axios from "axios";

class getUser {
     static userList(userId) {
        let serverURL = `http://localhost:5500/api/users/${userId}`
        return axios.get(serverURL)
     }
}


export default getUser