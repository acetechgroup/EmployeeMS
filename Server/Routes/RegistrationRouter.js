import express from "express";
import con from "../utils/db.js";


const router = express.Router()

router.post('/admin_registration', (req, res) => {
    const sql = `INSERT INTO admin 
    (name,mobile,email, password) 
    VALUES (?)`;
    
        if(err) return res.json({Status: false, Error: "Query Error"})
        const values = [
            req.body.name,
            req.body.mobile,
            req.body.email,
            req.body.password
        ]
        con.query(sql, [values], (err, result) => {
            if(err) return res.json({Status: false, Error: err})
            console.log(result);
            return res.json({Status: true})
        })
    
})

// router.post('/add_category', (req, res) => {
//     const sql = "INSERT INTO category (`name`) VALUES (?)"
//     con.query(sql, [req.body.category], (err, result) => {
//         if(err) return res.json({Status: false, Error: "Query Error"})
//         return res.json({Status: true})
//     })
// })


export {router as RegistrationRouter}