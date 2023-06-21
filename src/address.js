import { db } from "./connectDb.js"
export function getAddress(req, res) {
db.query('select * FROM address',(err, address) =>{
if(err){
    res.status(500).send({success: false, message: err})
    return
}
res.send(address)
})
}