import axios from "axios";

const result = await axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
console.log(result.data)

