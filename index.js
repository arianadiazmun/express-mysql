import express from "express"
import cors from "cors"
import { getAddress } from "./src/address.js"
const PORT =3005

const app = express()
app.use(cors())
app.use(express.json())

app.get("/address",getAddress)

app.listen(PORT, ()=> {
    console.log(`Listing on http://localhost:${PORT}...`)
})