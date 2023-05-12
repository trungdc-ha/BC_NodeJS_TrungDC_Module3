import axios from "axios";

let fetchData = async ()=> {
    try {
        let req = await axios.get("https://jsonplaceholder.typicode.com/users")
        req.data.map(value => {
            console.group('ID: ', value.id)
            console.log("name: ", value.name)
            console.log("username: ", value.username)
            console.log("email: ", value.email)
            console.log("city: ", value.address.city)
            console.groupEnd()
        })
    } catch (e) {
        console.log(e)
    }
}

fetchData();
