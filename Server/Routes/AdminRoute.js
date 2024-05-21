import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import multer from "multer";
import path from "path";
import { log } from "console";

const router = express.Router();

router.post("/adminlogin", (req, res) => {
    const sql = "SELECT * from admin Where email = ? and password = ?";
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ loginStatus: false, Error: "Query error" });
        if (result.length > 0) {
            const email = result[0].email;
            const token = jwt.sign(
                { role: "admin", email: email, id: result[0].id },
                "jwt_secret_key",
                { expiresIn: "1d" }
            );
            res.cookie('token', token)
            return res.json({ loginStatus: true });
        } else {
            return res.json({ loginStatus: false, Error: "wrong email or password" });
        }
    });
});

router.get('/category', (req, res) => {
    const sql = "SELECT * FROM category";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })
    })
})

router.post('/add_category', (req, res) => {
    const sql = "INSERT INTO category (`name`) VALUES (?)"
    con.query(sql, [req.body.category], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true })
    })
})

// image upload 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})
// end image eupload 

router.post('/add_employee', upload.single('image'), (req, res) => {
    const sql = `INSERT INTO employee 
    (name,email,password, address, salary,image, category_id) 
    VALUES (?)`;
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        const values = [
            req.body.name,
            req.body.email,
            hash,
            req.body.address,
            req.body.salary,
            req.file.filename,
            req.body.category_id
        ]
        con.query(sql, [values], (err, result) => {
            if (err) return res.json({ Status: false, Error: err })
            return res.json({ Status: true })
        })
    })
})

// Image and file upload
// Image upload

const storage1 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload1 = multer({
    storage: storage1
})

// ends of Image upload
// matric certificate upload

const storage2 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Files')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload2 = multer({
    storage: storage2
})

// end matric certificate upload
// Inter certificate upload

const storage3 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Files')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload3 = multer({
    storage: storage3
})

// end of Inter certificate upload
// graduation certificate upload

const storage4 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Files')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload4 = multer({
    storage: storage4
})

// end of graduaion certificate upload
// PG certificate upload

const storage5 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Files')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload5 = multer({
    storage: storage5
})

// end of PG certificate upload
// other certificate upload
const storage6 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Files')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload6 = multer({
    storage: storage6
})
// end of Other certificate upload

// ends of Image and file upload

// for add Epmloyee details big

router.post('/add_employee_details', upload1.single('image'), upload2.single('certifiMatric'), upload3.single('certifiInter'), upload4.single('certifiGraduation'), upload5.single('certifiPg'), upload6.single('certifiother'), (req, res) => {
    const sql = `INSERT INTO employee_details 
    (image, blod_group, father_name, password, first_name, middle_name, last_name, email, official_email,mother_name, status, gender, employee_code, mobile, official_mobile, joning_date, date_of_birth, marrital_status, uan_number, esic_number, pan_number, aadharNumber, InsuranceNumber, driving_licence_number, ip_number, pf_number, ctc_probation, probation_period, ctc_after_probation, client, delevery_sub_type, client_id, delevery_type, present_address_field, present_country, present_city, present_state, present_pin_code, permanent_address_field, permanent_country, permanent_city, permanent_state, permanent_pin_code, acHolderName_1, ifsc_1, acNumber_1, bank_name_1, bank_address_1, acHolderName_2, ifsc_2, acNumber_2, bank_name_2, bank_address_2, matric_board, matric_institute, matric_passing_year, matric_total_marks, matric_obtent_marks, matric_percentage, inter_board, inter_institute, inter_passing_year, inter_total_marks, inter_obtent_marks, inter_percentage, graduation_board, graduation_institute, graduation_passing_year, graduation_total_marks, graduation_obtent_marks, graduation_percentage, pg_board, pg_institute, pg_passing_year, pg_total_marks, pg_obtent_marks, pg_percentage, other_board, other_institute, other_passing_year, other_total_marks, other_obtent_marks, other_percentage, employee_type, department, select_role, select_skill, card_id, employment_type, sub_department, grade, shift, offer_id, desig, site, highest_qulif, shift_start_time, flexi_hour, adminRole, allowedod, office_attend_alowed, AutoAttendAlowed, is_multi_shift, work_from_home, geo_auto_check_in, rotationalweek_off, geo_auto_check_out, other_language, hindi_read, hindi_write, hindi_speak, english_read, english_write, english_speak, other_lang_read, other_lang_write, other_lang_speak, certifi_matric, certifi_inter, certifi_graduation, certifi_pg, certifiother) 
    VALUES (?)`
    const values = [
        req.file[0].filename,
        req.body.blodGroup,
        req.body.fatherName,
        req.body.password,
        req.body.firstName,
        req.body.middleName,
        req.body.lastName,
        req.body.email,
        req.body.officialEmail,
        req.body.motherName,
        req.body.status,
        req.body.gender,
        req.body.employeeCode,
        req.body.mobile,
        req.body.officialMobile,
        req.body.joningDate,
        req.body.dateOfBirth,
        req.body.marritalStatus,
        req.body.uanNumber,
        req.body.esicNumber,
        req.body.panNumber,
        req.body.aadharNumber,
        req.body.InsuranceNumber,
        req.body.drivingLicenceNumber,
        req.body.ipNumber,
        req.body.pfNumber,
        req.body.ctcProbation,
        req.body.probationPeriod,
        req.body.ctcAfterProbation,
        req.body.client,
        req.body.deleverySubType,
        req.body.clientId,
        req.body.deleveryType,
        req.body.presentAddressField,
        req.body.presentCountry,
        req.body.presentCity,
        req.body.presentState,
        req.body.presentPinCode,
        req.body.permanentAddressField,
        req.body.permanentCountry,
        req.body.permanentCity,
        req.body.permanentState,
        req.body.permanentPinCode,
        req.body.acHolderName_1,
        req.body.ifsc_1,
        req.body.acNumber_1,
        req.body.bankName_1,
        req.body.bankAddress_1,
        req.body.acHolderName_2,
        req.body.ifsc_2,
        req.body.acNumber_2,
        req.body.bankName_2,
        req.body.bankAddress_2,
        req.body.matricBoard,
        req.body.matricInstitute,
        req.body.matricPassingYear,
        req.body.matricTotalMarks,
        req.body.matricObtentMarks,
        req.body.matricPercentage,
        req.body.interBoard,
        req.body.interInstitute,
        req.body.interPassingYear,
        req.body.interTotalMarks,
        req.body.interObtentMarks,
        req.body.interPercentage,
        req.body.graduationBoard,
        req.body.graduationInstitute,
        req.body.graduationPassingYear,
        req.body.graduationTotalMarks,
        req.body.graduationObtentMarks,
        req.body.graduationPercentage,
        req.body.pgBoard,
        req.body.pgInstitute,
        req.body.pgPassingYear,
        req.body.pgTotalMarks,
        req.body.pgObtentMarks,
        req.body.pgPercentage,
        req.body.otherBoard,
        req.body.otherInstitute,
        req.body.otherPassingYear,
        req.body.otherTotalMarks,
        req.body.otherObtentMarks,
        req.body.otherPercentage,
        req.body.employeeType,
        req.body.department,
        req.body.selectRole,
        req.body.selectSkill,
        req.body.cardId,
        req.body.employmentType,
        req.body.subDepartment,
        req.body.grade,
        req.body.shift,
        req.body.offerId,
        req.body.desig,
        req.body.site,
        req.body.highestQulif,
        req.body.shiftStartTime,
        req.body.flexiHour,
        req.body.adminRole,
        req.body.allowedOD,
        req.body.officeAttendAlowed,
        req.body.AutoAttendAlowed,
        req.body.isMultiShift,
        req.body.workFromHome,
        req.body.geoAutoCheckIn,
        req.body.rotationalweekOff,
        req.body.geoAutoCheckOut,
        req.body.otherLanguage,
        req.body.hindiRead,
        req.body.hindiWrite,
        req.body.hindiSpeak,
        req.body.englishRead,
        req.body.englishWrite,
        req.body.englishSpeak,
        req.body.otherLangRead,
        req.body.otherLangWrite,
        req.body.otherLangSpeak,
        req.file[0].filename,
        req.file[0].filename,
        req.file[0].filename,
        req.file[0].filename,
        req.file[0].filename
    ]
    console.log("Normal inputs",values);
    con.query(sql, [values], (err, result) => {
        if (err) return res.json({ Status: false, Error: err })
        return res.json({ Status: true })
    })
    const sql1 = `INSERT INTO experience 
    (companyName, designation, fromDate, toDate, duration, emp_id) 
    VALUES (?)`
    const values1 = [
        req.body.companyName,
        req.body.designation,
        req.body.fromDate,
        req.body.toDate,
        req.file.duration,
        req.body.emp_id
    ]
    con.query(sql1, [values1], (err, result) => {
        if (err) return res.json({ Status: false, Error: err })
        return res.json({ Status: true })
    })
    const sql2 = `INSERT INTO relation_details 
    (emp_id, realtion_type, relationdob, relation_name, relation_phone) 
    VALUES (?)`
    const values2 = [
        req.body.emp_id,
        req.body.relationName,
        req.body.realtionType,
        req.body.assetSerial,
        req.file.relationDOB
    ]
    con.query(sql2, [values2], (err, result) => {
        if (err) return res.json({ Status: false, Error: err })
        return res.json({ Status: true })
    })
    const sql3 = `INSERT INTO asset_details 
    (assetdoa, asset_model, asset_name, asset_serial, emp_id) 
    VALUES (?)`
    const values3 = [
        req.body.assetName,
        req.body.assetModel,
        req.body.assetSerial,
        req.body.assetDOA,
        req.file.emp_id
    ]
    con.query(sql3, [values3], (err, result) => {
        if (err) return res.json({ Status: false, Error: err })
        return res.json({ Status: true })
    })
})

// for add Epmloyee details big



router.get('/employee', (req, res) => {
    const sql = "SELECT * FROM employee";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })
    })
})

router.get('/employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM employee WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })
    })
})

router.put('/edit_employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE employee 
        set name = ?, email = ?, salary = ?, address = ?, category_id = ? 
        Where id = ?`
    const values = [
        req.body.name,
        req.body.email,
        req.body.salary,
        req.body.address,
        req.body.category_id
    ]
    con.query(sql, [...values, id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" + err })
        return res.json({ Status: true, Result: result })
    })
})

router.delete('/delete_employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = "delete from employee where id = ?"
    con.query(sql, [id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" + err })
        return res.json({ Status: true, Result: result })
    })
})

router.get('/admin_count', (req, res) => {
    const sql = "select count(id) as admin from admin";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" + err })
        return res.json({ Status: true, Result: result })
    })
})

router.get('/employee_count', (req, res) => {
    const sql = "select count(id) as employee from employee";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" + err })
        return res.json({ Status: true, Result: result })
    })
})

router.get('/salary_count', (req, res) => {
    const sql = "select sum(salary) as salaryOFEmp from employee";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" + err })
        return res.json({ Status: true, Result: result })
    })
})

router.get('/admin_records', (req, res) => {
    const sql = "select * from admin"
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" + err })
        return res.json({ Status: true, Result: result })
    })
})

router.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({ Status: true })
})

export { router as adminRouter };