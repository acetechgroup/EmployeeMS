import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditEmployeeIndivisual = () => {

    const [toggle, setToggle] = useState(1)
    function updateToggle(id) {
        setToggle(id)
    }

    const { id } = useParams()
    const [employee, setEmployee] = useState({
        image: "",
        blodGroup: "",
        fatherName: "",
        password: "",
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        officialEmail: "",
        motherName: "",
        status: "",
        gender: "",
        employeeCode: "",
        mobile: "",
        officialMobile: "",
        joningDate: "",
        dateOfBirth: "",
        marritalStatus: "",
        uanNumber: "",
        esicNumber: "",
        panNumber: "",
        aadharNumber: "",
        InsuranceNumber: "",
        drivingLicenceNumber: "",
        ipNumber: "",
        pfNumber: "",
        ctcProbation: "",
        probationPeriod: "",
        ctcAfterProbation: "",
        client: "",
        deleverySubType: "",
        clientId: "",
        deleveryType: "",
        presentAddressField: "",
        presentCountry: "",
        presentCity: "",
        presentState: "",
        presentPinCode: "",
        permanentAddressField: "",
        permanentCountry: "",
        permanentCity: "",
        permanentState: "",
        permanentPinCode: "",
        acHolderName_1: "",
        ifsc_1: "",
        acNumber_1: "",
        bankName_1: "",
        bankAddress_1: "",
        acHolderName_2: "",
        ifsc_2: "",
        acNumber_2: "",
        bankName_2: "",
        bankAddress_2: "",
        matricBoard: "",
        matricInstitute: "",
        matricPassingYear: "",
        matricTotalMarks: "",
        matricObtentMarks: "",
        matricPercentage: "",
        interBoard: "",
        interInstitute: "",
        interPassingYear: "",
        interTotalMarks: "",
        interObtentMarks: "",
        interPercentage: "",
        graduationBoard: "",
        graduationInstitute: "",
        graduationPassingYear: "",
        graduationTotalMarks: "",
        graduationObtentMarks: "",
        graduationPercentage: "",
        pgBoard: "",
        pgInstitute: "",
        pgPassingYear: "",
        pgTotalMarks: "",
        pgObtentMarks: "",
        pgPercentage: "",
        otherBoard: "",
        otherInstitute: "",
        otherPassingYear: "",
        otherTotalMarks: "",
        otherObtentMarks: "",
        otherPercentage: "",
        companyName: '',
        designation: '',
        from: '',
        to: '',
        duration: '',
        employeeType: '',
        department: '',
        selectRole: '',
        selectSkill: '',
        cardId: '',
        employmentType: '',
        subDepartment: '',
        grade: '',
        shift: '',
        offerId: '',
        desig: '',
        site: '',
        highestQulif: '',
        shiftStartTime: '',
        flexiHour: '',
        adminRole: '',
        allowedOD: '',
        officeAttendAlowed: '',
        AutoAttendAlowed: '',
        isMultiShift: '',
        workFromHome: '',
        geoAutoCheckIn: '',
        rotationalweekOff: '',
        geoAutoCheckOut: '',
        otherLanguage: '',
        hindiRead: '',
        hindiWrite: '',
        hindiSpeak: '',
        englishRead: '',
        englishWrite: '',
        englishSpeak: '',
        otherLangRead: '',
        otherLangWrite: '',
        otherLangSpeak: '',
        relationName: '',
        realtionType: '',
        relationPhone: '',
        relationDOB: '',
        assetName: '',
        assetModel: '',
        assetSerial: '',
        assetDOA: '',
        certifiMatric: '',
        certifiInter: '',
        certifiGraduation: '',
        certifiPg: '',
        certifiother: '',
    })

    useEffect(() => {
        axios.get('http://localhost:3000/auth/employee/' + id)
            .then(result => {
                setEmployee({
                    ...employee,
                image: result.data.Result[0].image,
                blodGroup: result.data.Result[0].blodGroup,
                fatherName: result.data.Result[0].fatherName,
                password: result.data.Result[0].password,
                firstName: result.data.Result[0].firstName,
                middleName: result.data.Result[0].middleName,
                lastName: result.data.Result[0].lastName,
                email: result.data.Result[0].email,
                officialEmail: result.data.Result[0].officialEmail,
                motherName: result.data.Result[0].motherName,
                status: result.data.Result[0].status,
                gender: result.data.Result[0].gender,
                employeeCode: result.data.Result[0].employeeCode,
                mobile: result.data.Result[0].mobile,
                officialMobile: result.data.Result[0].officialMobile,
                joningDate: result.data.Result[0].joningDate,
                dateOfBirth: result.data.Result[0].dateOfBirth,
                marritalStatus: result.data.Result[0].marritalStatus,
                uanNumber: result.data.Result[0].uanNumber,
                esicNumber: result.data.Result[0].esicNumber,
                panNumber: result.data.Result[0].panNumber,
                aadharNumber: result.data.Result[0].aadharNumber,
                InsuranceNumber: result.data.Result[0].InsuranceNumber,
                drivingLicenceNumber: result.data.Result[0].drivingLicenceNumber,
                ipNumber: result.data.Result[0].ipNumber,
                pfNumber: result.data.Result[0].pfNumber,
                ctcProbation: result.data.Result[0].ctcProbation,
                probationPeriod: result.data.Result[0].probationPeriod,
                ctcAfterProbation: result.data.Result[0].ctcAfterProbation,
                client: result.data.Result[0].client,
                deleverySubType: result.data.Result[0].deleverySubType,
                clientId: result.data.Result[0].clientId,
                deleveryType: result.data.Result[0].deleveryType,
                presentAddressField: result.data.Result[0].presentAddressField,
                presentCountry: result.data.Result[0].presentCountry,
                presentCity: result.data.Result[0].presentCity,
                presentState: result.data.Result[0].presentState,
                presentPinCode: result.data.Result[0].presentPinCode,
                permanentAddressField: result.data.Result[0].permanentAddressField,
                permanentCountry: result.data.Result[0].permanentCountry,
                permanentCity: result.data.Result[0].permanentCity,
                permanentState: result.data.Result[0].permanentState,
                permanentPinCode: result.data.Result[0].permanentPinCode,
                acHolderName_1: result.data.Result[0].acHolderName_1,
                ifsc_1: result.data.Result[0].ifsc_1,
                acNumber_1: result.data.Result[0].acNumber_1,
                bankName_1: result.data.Result[0].bankName_1,
                bankAddress_1: result.data.Result[0].bankAddress_1,
                acHolderName_2: result.data.Result[0].acHolderName_2,
                ifsc_2: result.data.Result[0].ifsc_2,
                acNumber_2: result.data.Result[0].acNumber_2,
                bankName_2: result.data.Result[0].bankName_2,
                bankAddress_2: result.data.Result[0].bankAddress_2,
                matricBoard: result.data.Result[0].matricBoard,
                matricInstitute: result.data.Result[0].matricInstitute,
                matricPassingYear: result.data.Result[0].matricPassingYear,
                matricTotalMarks: result.data.Result[0].matricTotalMarks,
                matricObtentMarks: result.data.Result[0].matricObtentMarks,
                matricPercentage: result.data.Result[0].matricPercentage,
                interBoard: result.data.Result[0].interBoard,
                interInstitute: result.data.Result[0].interInstitute,
                interPassingYear: result.data.Result[0].interPassingYear,
                interTotalMarks: result.data.Result[0].interTotalMarks,
                interObtentMarks: result.data.Result[0].interObtentMarks,
                interPercentage: result.data.Result[0].interPercentage,
                graduationBoard: result.data.Result[0].graduationBoard,
                graduationInstitute: result.data.Result[0].graduationInstitute,
                graduationPassingYear: result.data.Result[0].graduationPassingYear,
                graduationTotalMarks: result.data.Result[0].graduationTotalMarks,
                graduationObtentMarks: result.data.Result[0].graduationObtentMarks,
                graduationPercentage: result.data.Result[0].graduationPercentage,
                pgBoard: result.data.Result[0].pgBoard,
                pgInstitute: result.data.Result[0].pgInstitute,
                pgPassingYear: result.data.Result[0].pgPassingYear,
                pgTotalMarks: result.data.Result[0].pgTotalMarks,
                pgObtentMarks: result.data.Result[0].pgObtentMarks,
                pgPercentage: result.data.Result[0].pgPercentage,
                otherBoard: result.data.Result[0].otherBoard,
                otherInstitute: result.data.Result[0].otherInstitute,
                otherPassingYear: result.data.Result[0].otherPassingYear,
                otherTotalMarks: result.data.Result[0].otherTotalMarks,
                otherObtentMarks: result.data.Result[0].otherObtentMarks,
                otherPercentage: result.data.Result[0].otherPercentage,
                employeeType: result.data.Result[0].employeeType,
                department: result.data.Result[0].department,
                selectRole: result.data.Result[0].selectRole,
                selectSkill: result.data.Result[0].selectSkill,
                cardId: result.data.Result[0].cardId,
                employmentType: result.data.Result[0].employmentType,
                subDepartment: result.data.Result[0].subDepartment,
                grade: result.data.Result[0].grade,
                shift: result.data.Result[0].shift,
                offerId: result.data.Result[0].offerId,
                desig: result.data.Result[0].desig,
                site: result.data.Result[0].site,
                highestQulif: result.data.Result[0].highestQulif,
                shiftStartTime: result.data.Result[0].shiftStartTime,
                flexiHour: result.data.Result[0].flexiHour,
                adminRole: result.data.Result[0].adminRole,
                allowedOD: result.data.Result[0].allowedOD,
                officeAttendAlowed: result.data.Result[0].officeAttendAlowed,
                AutoAttendAlowed: result.data.Result[0].AutoAttendAlowed,
                isMultiShift: result.data.Result[0].isMultiShift,
                workFromHome: result.data.Result[0].workFromHome,
                geoAutoCheckIn: result.data.Result[0].geoAutoCheckIn,
                rotationalweekOff: result.data.Result[0].rotationalweekOff,
                geoAutoCheckOut: result.data.Result[0].geoAutoCheckOut,
                otherLanguage: result.data.Result[0].otherLanguage,
                hindiRead: result.data.Result[0].hindiRead,
                hindiWrite: result.data.Result[0].hindiWrite,
                hindiSpeak: result.data.Result[0].hindiSpeak,
                englishRead: result.data.Result[0].englishRead,
                englishWrite: result.data.Result[0].englishWrite,
                englishSpeak: result.data.Result[0].englishSpeak,
                otherLangRead: result.data.Result[0].otherLangRead,
                otherLangWrite: result.data.Result[0].otherLangWrite,
                otherLangSpeak: result.data.Result[0].otherLangSpeak,
                certifiMatric: result.data.Result[0].certifiMatric,
                certifiInter: result.data.Result[0].certifiInter,
                certifiGraduation: result.data.Result[0].certifiGraduation,
                certifiPg: result.data.Result[0].certifiPg,
                certifiother: result.data.Result[0].certifiother,

                })
            }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_employee/' + id, employee)
            .then(result => {
                if (result.data.Status) {
                    navigate('/dashboard/currentEmployee')
                } else {
                    alert(result.data.Error)
                }
            }).catch(err => console.log(err))
    }

    console.log('Employee data', employee);

    const [profileImage, setProfileImage] = useState('')
    const handleImageChange = (e) => {
        // const profile_img = e.target.files[0]
        setProfileImage(e.target.files[0]);
        setEmployee({ ...employee, image: e.target.files[0] })
    };

    const blodgroups = [
        {
            blodName: 'A+'
        },
        {
            blodName: 'A-'
        },
        {
            blodName: 'B+'
        },
        {
            blodName: 'B-'
        },
        {
            blodName: 'O+'
        },
        {
            blodName: 'O-'
        },
        {
            blodName: 'AB+'
        },
        {
            blodName: 'AB-'
        },
    ]
    const [blodGroup, setBlodGroup] = useState([])
    const changeBlodGroup = (e) => {
        setBlodGroup(e.target.value)
        setEmployee({ ...employee, blodGroup: e.target.value })
    }

    const statuses = [
        { statusName: 'New Employee' },
        { statusName: 'Transfer' },
        { statusName: 'Current' },
        { statusName: 'Resigned' },
        { statusName: 'Ex-Employee' },
        { statusName: 'Terminated' },
    ]
    const [status, setStatus] = useState([])
    const changeStatus = (e) => {
        setStatus(e.target.value)
        setEmployee({ ...employee, status: e.target.value })
    }

    const marritalStatuses = [
        { statusName: 'Married' },
        { statusName: 'Unmarried' },
        { statusName: 'Divorced' }
    ]
    const [marritalStatus, setMarritalStatus] = useState([])
    const changeMarritalStatus = (e) => {
        setMarritalStatus(e.target.value)
        setEmployee({ ...employee, marritalStatus: e.target.value })
    }

    const clients = [
        { clientName: 'Acetech Group' },
        { clientName: 'Client 1' },
        { clientName: 'Client 2' }
    ]
    const [client, setClient] = useState([])
    const changeClient = (e) => {
        setClient(e.target.value)
        setEmployee({ ...employee, client: e.target.value })
    }

    const employeeTypes = [
        { empTypeName: 'Trainy (Monthly)' },
        { empTypeName: 'Part Time (Monthly)' },
        { empTypeName: 'Full Time (Monthly)' },
        { empTypeName: 'Permanent (Monthly)' }
    ]
    const [employeeType, setEmployeeType] = useState([])
    const changeEmployeeType = (e) => {
        setEmployeeType(e.target.value)
        setEmployee({ ...employee, employeeType: e.target.value })
    }

    const departments = [
        { departmentName: 'Tele Caller' },
        { departmentName: 'Sales' },
        { departmentName: 'Marketing' },
        { departmentName: 'Account' },
        { departmentName: 'HR' },
        { departmentName: 'IT' },
        { departmentName: 'Purchase' },
        { departmentName: 'Operation' },
        { departmentName: 'Admin' },
        { departmentName: 'Data Entry' },
        { departmentName: 'Top Management(CEO,MD,Director)' },
    ]
    const [department, setDepartment] = useState([])
    const changeDepartment = (e) => {
        setDepartment(e.target.value)
        setEmployee({ ...employee, department: e.target.value })
    }

    const selectRoles = [
        { roleName: 'Admin' },
        { roleName: 'Accountant' },
        { roleName: 'Manager' },
        { roleName: 'HR' },
        { roleName: 'Attendance Superviser' },
        { roleName: 'Development F/B' },
        { roleName: 'Business Development' },
        { roleName: 'Recruter' },
        { roleName: 'Senior Superviser' },
        { roleName: 'Data Entry' },
        { roleName: 'Field Sales & Marketing' },
    ]
    const [selectRole, setSelectRole] = useState([])
    const changeSelectRole = (e) => {
        setSelectRole(e.target.value)
        setEmployee({ ...employee, selectRole: e.target.value })
    }

    const selectSkills = [
        { skillName: 'Administartion' },
        { skillName: 'Inside / Field Sales' },
        { skillName: 'Inside / Field Marketing' },
        { skillName: 'Programming Language' },
        { skillName: 'Data Entry' },
        { skillName: 'QA' },
        { skillName: 'Software Developer' },
        { skillName: 'Recruter' },
        { skillName: 'Senior Superviser' },
    ]
    const [selectSkill, setSelectSkill] = useState([])
    const changeSelectSkill = (e) => {
        setSelectSkill(e.target.value)
        setEmployee({ ...employee, selectSkill: e.target.value })
    }

    const employmentTypes = [
        { employmentTypeName: 'Trainee' },
        { employmentTypeName: 'Contract' },
        { employmentTypeName: 'New Joinees' },
        { employmentTypeName: 'Permanent' },
    ]
    const [employmentType, setEmploymentType] = useState([])
    const changeEmploymentType = (e) => {
        setEmploymentType(e.target.value)
        setEmployee({ ...employee, employmentType: e.target.value })
    }

    const subDepartments = [
        { subDepName: 'Executive' },
        { subDepName: 'Manager' },
        { subDepName: 'Sr. Manager' },
        { subDepName: 'GM' },
        { subDepName: 'VP' },
        { subDepName: 'Director' },
    ]
    const [subDepartment, setSubDepartment] = useState([])
    const changeSubDepartment = (e) => {
        setSubDepartment(e.target.value)
        setEmployee({ ...employee, subDepartment: e.target.value })
    }
    const grades = [
        { gradeName: 'Executive' },
        { gradeName: 'Manager' },
        { gradeName: 'Sr. Manager' },
        { gradeName: 'GM' },
        { gradeName: 'VP' },
        { gradeName: 'Director' },
    ]
    const [grade, setGrade] = useState([])
    const changeGrade = (e) => {
        setGrade(e.target.value)
        setEmployee({ ...employee, grade: e.target.value })
    }

    const shifts = [
        { shiftName: '10 AM to 6 PM' },
        { shiftName: '6 PM to 2 AM' },
        { shiftName: '2 AM to 10 AM' },
        { shiftName: 'Day Shift' },
        { shiftName: 'Night Shift' },
    ]
    const [shift, setShift] = useState([])
    const changeShift = (e) => {
        setShift(e.target.value)
        setEmployee({ ...employee, shift: e.target.value })
    }

    const designations = [
        { desigName: 'A/C Executive' },
        { desigName: 'HR Recruter' },
        { desigName: 'Admin' },
        { desigName: 'Software Development' },
        { desigName: 'Office Boy' },
        { desigName: 'Security Guard' },
        { desigName: 'Chief Operating Officer' },
        { desigName: 'Team Lead' },
        { desigName: 'CTO' },
        { desigName: 'Front Desk' },
        { desigName: 'Business Development' },
        { desigName: 'Sr. BDM' },
        { desigName: 'Business Analist' },
        { desigName: 'Data Entry Operator' },
        { desigName: 'CEO' },
        { desigName: 'Director' },
        { desigName: 'Sales' },
        { desigName: 'Marketing' },
    ]
    const [designation, setDesignation] = useState([])
    const changeDesignation = (e) => {
        setDesignation(e.target.value)
        setEmployee({ ...employee, desig: e.target.value })
    }

    const sites = [
        { siteName: 'Head Office' },
        { siteName: 'Other Branch' },
    ]
    const [site, setSite] = useState([])
    const changeSite = (e) => {
        setSite(e.target.value)
        setEmployee({ ...employee, site: e.target.value })
    }

    const qualificatios = [
        { qulifName: '10th' },
        { qulifName: '12th' },
        { qulifName: 'BA' },
        { qulifName: 'B Sc' },
        { qulifName: 'B Com' },
        { qulifName: 'BCA / Bsc IT' },
        { qulifName: 'MA' },
        { qulifName: 'M Sc' },
        { qulifName: 'M Com' },
        { qulifName: 'MCA / Msc IT' },
        { qulifName: 'PGDM' },
        { qulifName: 'MBA' },
    ]
    const [qualification, setQualification] = useState([])
    const changeQualification = (e) => {
        setQualification(e.target.value)
        setEmployee({ ...employee, highestQulif: e.target.value })
    }

    const [totalMarksM, setTotalMarksM] = useState()
    const [obtentMarksM, setObtentMarksM] = useState()
    const [percentageM, setPercentageM] = useState()

    const handleTotalMarksM = (e) => {
        setTotalMarksM(e.target.value)
        setEmployee({ ...employee, matricTotalMarks: e.target.value })
    }
    const handleObtentMarksM = (e) => {
        setObtentMarksM(e.target.value)
        setEmployee({ ...employee, matricObtentMarks: e.target.value })
    }
    const totalPercentageM = (Number(obtentMarksM) / Number(totalMarksM)) * 100
    const handlePercentageM = () => {
        setPercentageM(totalPercentageM.toFixed(2))
    }
    const [totalMarksI, setTotalMarksI] = useState()
    const [obtentMarksI, setObtentMarksI] = useState()
    const [percentageI, setPercentageI] = useState()

    const handleTotalMarksI = (e) => {
        setTotalMarksI(e.target.value)
        setEmployee({ ...employee, interTotalMarks: e.target.value })
    }
    const handleObtentMarksI = (e) => {
        setObtentMarksI(e.target.value)
        setEmployee({ ...employee, interObtentMarks: e.target.value })
    }
    const totalPercentageI = (Number(obtentMarksI) / Number(totalMarksI)) * 100
    const handlePercentageI = () => {
        setPercentageI(totalPercentageI.toFixed(2))
    }
    const [totalMarksG, setTotalMarksG] = useState()
    const [obtentMarksG, setObtentMarksG] = useState()
    const [percentageG, setPercentageG] = useState()

    const handleTotalMarksG = (e) => {
        setTotalMarksG(e.target.value)
        setEmployee({ ...employee, graduationTotalMarks: e.target.value })
    }
    const handleObtentMarksG = (e) => {
        setObtentMarksG(e.target.value)
        setEmployee({ ...employee, graduationObtentMarks: e.target.value })
    }
    const totalPercentageG = (Number(obtentMarksG) / Number(totalMarksG)) * 100
    const handlePercentageG = () => {
        setPercentageG(totalPercentageG.toFixed(2))
    }
    const [totalMarksP, setTotalMarksP] = useState()
    const [obtentMarksP, setObtentMarksP] = useState()
    const [percentageP, setPercentageP] = useState()

    const handleTotalMarksP = (e) => {
        setTotalMarksP(e.target.value)
        setEmployee({ ...employee, pgTotalMarks: e.target.value })
    }
    const handleObtentMarksP = (e) => {
        setObtentMarksP(e.target.value)
        setEmployee({ ...employee, pgObtentMarks: e.target.value })
    }
    const totalPercentageP = (Number(obtentMarksP) / Number(totalMarksP)) * 100
    const handlePercentageP = () => {
        setPercentageP(totalPercentageP.toFixed(2))
    }
    const [totalMarksO, setTotalMarksO] = useState()
    const [obtentMarksO, setObtentMarksO] = useState()
    const [percentageO, setPercentageO] = useState()

    const handleTotalMarksO = (e) => {
        setTotalMarksO(e.target.value)
        setEmployee({ ...employee, otherTotalMarks: e.target.value })
    }
    const handleObtentMarksO = (e) => {
        setObtentMarksO(e.target.value)
        setEmployee({ ...employee, otherObtentMarks: e.target.value })
    }
    const totalPercentageO = (Number(obtentMarksO) / Number(totalMarksO)) * 100
    const handlePercentageO = () => {
        setPercentageO(totalPercentageO.toFixed(2))
    }

    const [expList, setExpList] = useState([
        {
            companyName: '',
            designation: '',
            from: '',
            to: '',
            duration: ''
        }
    ])

    const handleServiceAdd = () => {
        setExpList([...expList,
        {
            companyName: '',
            designation: '',
            from: '',
            to: '',
            duration: ''
        }])
    }

    const handleServiceRemove = (i) => {
        const list = [...expList]
        list.splice(i, 1)
        setExpList(list)
    }

    const handleServiceChange = (e, i) => {
        const { name, value } = e.target
        const list = [...expList]
        list[i][name] = value
        setExpList(list)
        setEmployee({ ...employee, expList_1: expList })
        // setEmployee({ ...employee, list: e.target.value })
    }

    // console.log(expList);

    const [familyList, setFamilyList] = useState([
        {
            relationName: '',
            realtionType: '',
            relationPhone: '',
            relationDOB: ''
        }
    ])

    const handleFamilyServiceAdd = () => {
        setFamilyList([...familyList,
        {
            relationName: '',
            realtionType: '',
            relationPhone: '',
            relationDOB: ''
        }])
    }

    const handleFamilyServiceRemove = (j) => {
        const fList = [...familyList]
        fList.splice(j, 1)
        setFamilyList(fList)
    }

    const handleFamilyServiceChange = (e, j) => {
        const { name, value } = e.target
        const fList = [...familyList]
        fList[j][name] = value
        setFamilyList(fList)
        setEmployee({ ...employee, familyList_1: familyList })
        // setEmployee({ ...employee, fList: e.target.value })
    }
    const [assetList, setAssetList] = useState([
        {
            assetName: '',
            assetModel: '',
            assetSerial: '',
            assetDOA: ''
        }
    ])

    const handleAssetServiceAdd = () => {
        setAssetList([...assetList,
        {
            assetName: '',
            assetModel: '',
            assetSerial: '',
            assetDOA: ''
        }])
    }

    const handleAssetServiceRemove = (k) => {
        const aList = [...assetList]
        aList.splice(k, 1)
        setAssetList(aList)
    }

    const handleAssetServiceChange = (e, k) => {
        const { name, value } = e.target
        const aList = [...assetList]
        aList[k][name] = value
        setAssetList(aList)
        setEmployee({ ...employee, assetList_1: assetList })
        // setEmployee({ ...employee, aList: e.target.value })
    }

    // console.log(familyList);

    const contries = [
        {
            name: 'India',
            states: [
                {
                    name: 'Andhra Pradesh',
                    cities: ['Adoni', 'Amaravati', 'Anantapur', 'Chandragiri', 'Chittoor', 'Dowlaiswaram', 'Eluru', 'Guntur', 'Kadapa', 'Kakinada', 'Kurnool', 'Machilipatnam', 'Nagarjunakoṇḍa', 'Rajahmundry', 'Srikakulam', 'Tirupati', 'Vijayawada', 'Visakhapatnam', 'Vizianagaram', 'Yemmiganur']
                },
                {
                    name: 'Arunachal Pradesh',
                    cities: ['Itanagar']
                },
                {
                    name: 'Assam',
                    cities: ['Dhuburi', 'Dibrugarh', 'Dispur', 'Guwahati', 'Jorhat', 'Nagaon', 'Sivasagar', 'Silchar', 'Tezpur', 'Tinsukia']
                },
                {
                    name: 'Bihar',
                    cities: ['Ara', 'Barauni', 'Begusarai', 'Bettiah', 'Bhagalpur', 'Bihar Sharif', 'Bodh Gaya', 'Buxar', 'Chapra', 'Darbhanga', 'Dehri', 'Dinapur Nizamat', 'Gaya', 'Hajipur', 'Jamalpur', 'Katihar', 'Madhubani', 'Motihari', 'Munger', 'Muzaffarpur', 'Patna', 'Purnia', 'Pusa', 'Saharsa', 'SamastipurSasaram', 'Sitamarhi', 'Siwan', 'Sivhar']
                },
                {
                    name: 'Chandigarh (UT)',
                    cities: ['Chandigarh']
                },
                {
                    name: 'Dadra and Nagar Haveli and Daman and Diu (UT)',
                    cities: ['Daman', 'Diu', 'Silvassa']
                },
                {
                    name: 'Delhi (National Capital Territory)',
                    cities: ['Delhi', 'New Delhi']
                },
                {
                    name: 'Goa',
                    cities: ['Madgaon', 'Panaji']
                },
                {
                    name: 'Gujarat',
                    cities: ['Ahmadabad', 'Amreli', 'Bharuch', 'Bhavnagar', 'Bhuj', 'Dwarka', 'Gandhinagar', 'Godhra', 'Jamnagar', 'Junagadh', 'Kandla', 'Khambhat', 'Kheda', 'Mahesana', 'Morbi', 'Nadiad', 'Navsari', 'Okha', 'Palanpur', 'Patan', 'Porbandar', 'Rajkot', 'Surat', 'Surendranagar', 'Valsad', 'Veraval']
                },
                {
                    name: 'Haryana',
                    cities: ['Ambala', 'Bhiwani', 'Chandigarh', 'Faridabad', 'Firozpur Jhirka', 'Gurugram', 'Hansi', 'Hisar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'PanipatPehowa', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat']
                },
                {
                    name: 'Himachal Pradesh',
                    cities: ['Bilaspur', 'Chamba', 'Dalhousie', 'Dharmshala', 'Hamirpur', 'Kangra', 'Kullu', 'Mandi', 'Nahan', 'Shimla', 'Una']
                },
                {
                    name: 'Jammu and Kashmir (UT)',
                    cities: ['Anantnag', 'Baramula', 'Doda', 'Gulmarg', 'Jammu', 'Kathua', 'PunchRajouri', 'Srinagar', 'Udhampur']
                },
                {
                    name: 'Jharkhand',
                    cities: ['Bokaro', 'Chaibasa', 'Deoghar', 'Dhanbad', 'Dumka', 'Giridih', 'Hazaribag', 'Jamshedpur', 'Jharia', 'Rajmahal', 'Ranchi', 'Saraikela']
                },
                {
                    name: 'Karnataka',
                    cities: ['Badami', 'Ballari', 'Bengaluru', 'Belagavi', 'Bhadravati', 'Bidar', 'Chikkamagaluru', 'Chitradurga', 'Davangere', 'Halebid', 'Hassan', 'Hubballi-Dharwad', 'Kalaburagi', 'Kolar', 'Madikeri', 'Mandya', 'Mangaluru', 'Mysuru', 'Raichur', 'Shivamogga', 'Shravanabelagola', 'Shrirangapattana', 'Tumakuru', 'Vijayapura']
                },
                {
                    name: 'Kerala',
                    cities: ['Alappuzha', 'Vatakara', 'Idukki', 'Kannur', 'Kochi', 'Kollam', 'Kottayam', 'Kozhikode', 'Mattancheri', 'Palakkad', 'Thalassery', 'Thiruvananthapuram', 'Thrissur']
                },
                {
                    name: 'Ladakh(UT)',
                    cities: ['Kargil', 'Leh']
                },
                {
                    name: 'Madhya Pradesh',
                    cities: ['Balaghat', 'Barwani', 'Betul', 'Bharhut', 'Bhind', 'Bhojpur', 'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dr. Ambedkar Nagar (Mhow)', 'Guna', 'Gwalior', 'Hoshangabad', 'Indore', 'Itarsi', 'Jabalpur', 'Jhabua', 'Khajuraho', 'Khandwa', 'Khargone', 'Maheshwar', 'Mandla', 'Mandsaur', 'Morena', 'Murwara', 'Narsimhapur', 'Narsinghgarh', 'Narwar', 'Neemuch', 'Nowgong', 'Orchha', 'Panna', 'Raisen', 'Rajgarh', 'Ratlam', 'Rewa', 'Sagar', 'Sarangpur', 'Satna', 'Sehore', 'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri', 'Ujjain', 'Vidisha']
                },
                {
                    name: 'Maharashtra',
                    cities: ['Ahmadnagar', 'Akola', 'Amravati', 'Aurangabad', 'Bhandara', 'Bhusawal', 'Bid', 'Buldhana', 'Chandrapur', 'Daulatabad', 'Dhule', 'Jalgaon', 'Kalyan', 'Karli', 'Kolhapur', 'Mahabaleshwar', 'Malegaon', 'Matheran', 'Mumbai', 'Nagpur', 'Nanded', 'Nashik', 'Osmanabad', 'Pandharpur', 'Parbhani', 'Pune', 'Ratnagiri', 'Sangli', 'Satara', 'Sevagram', 'Solapur', 'Thane', 'Ulhasnagar', 'Vasai-Virar', 'Wardha', 'Yavatmal']
                },
                {
                    name: 'Manipur',
                    cities: ['Imphal']
                },
                {
                    name: 'Meghalaya',
                    cities: ['Cherrapunji', 'Shillong']
                },
                {
                    name: 'Mizoram',
                    cities: ['Aizawl', 'Lunglei']
                },
                {
                    name: 'Nagaland',
                    cities: ['Kohima', 'Mon', 'Phek', 'Wokha', 'Zunheboto']
                },
                {
                    name: 'Odisha',
                    cities: ['Balangir', 'Baleshwar', 'Baripada', 'Bhubaneshwar', 'Brahmapur', 'Cuttack', 'Dhenkanal', 'Kendujhar', 'Konark', 'Koraput', 'Paradip', 'Phulabani', 'Puri', 'Sambalpur', 'Udayagiri']
                },
                {
                    name: 'Puducherry(UT)',
                    cities: ['Karaikal', 'Mahe', 'Puducherry', 'Yanam']
                },
                {
                    name: 'Punjab',
                    cities: ['Amritsar', 'Batala', 'Chandigarh', 'Faridkot', 'Firozpur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Nabha', 'Patiala', 'Rupnagar', 'Sangrur']
                },
                {
                    name: 'Rajasthan',
                    cities: ['Abu', 'Ajmer', 'Alwar', 'Amer', 'Barmer', 'Beawar', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Bundi', 'Chittaurgarh', 'Churu', 'Dhaulpur', 'Dungarpur', 'Ganganagar', 'Hanumangarh', 'Jaipur', 'Jaisalmer', 'Jalor', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Kishangarh', 'Kota', 'Merta', 'Nagaur', 'Nathdwara', 'Pali', 'Phalodi', 'Pushkar', 'Sawai Madhopur', 'Shahpura', 'Sikar', 'Sirohi', 'Tonk', 'Udaipur']
                },
                {
                    name: 'Sikkim',
                    cities: ['Gangtok', 'Gyalshing', 'Lachung', 'Mangan']
                },
                {
                    name: 'Tamil Nadu',
                    cities: ['Arcot', 'Chengalpattu', 'AChennaiwar', 'Chidambaram', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kanchipuram', 'Kanniyakumari', 'Kodaikanal', 'Kumbakonam', 'Madurai', 'Mamallapuram', 'Nagappattinam', 'Nagercoil', 'Palayamkottai', 'Pudukkottai', 'Rajapalayam', 'Ramanathapuram', 'Salem', 'Thanjavur', 'Tiruchchirappalli', 'Tirunelveli', 'Tiruppur', 'Thoothukudi', 'Udhagamandalam', 'Vellore']
                },
                {
                    name: 'Telangana',
                    cities: ['Hyderabad', 'Karimnagar', 'Khammam', 'MangMahbubnagaran', 'Nizamabad', 'Sangareddi', 'Warangal']
                },
                {
                    name: 'Tripura',
                    cities: ['Agartala']
                },
                {
                    name: 'Uttar Pradesh',
                    cities: ['Agra', 'Aligarh', 'Amroha', 'Ayodhya', 'Azamgarh', 'Bahraich', 'Ballia', 'Banda', 'Bara Banki', 'Bareilly', 'Basti', 'Bijnor', 'Bithur', 'Budaun', 'Bulandshahr', 'Deoria', 'Etah', 'Etawah', 'Faizabad', 'Farrukhabad-cum-Fatehgarh', 'Fatehpur', 'Fatehpur Sikri', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj', 'Kanpur', 'Lakhimpur', 'Lalitpur', 'Lucknow', 'Mainpuri', 'Mathura', 'Meerut', 'Mirzapur-Vindhyachal', 'Moradabad', 'Muzaffarnagar', 'Partapgarh', 'Pilibhit', 'Prayagraj', 'Rae Bareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Shahjahanpur', 'Sitapur', 'Sultanpur', 'Tehri', 'Varanasi']
                },
                {
                    name: 'Uttarakhand',
                    cities: ['Almora', 'Dehra Dun', 'Haridwar', 'Mussoorie', 'Nainital', 'Pithoragarh']
                },
                {
                    name: 'West Bengal',
                    cities: ['Alipore', 'Alipur Duar', 'Asansol', 'Baharampur', 'Bally', 'Balurghat', 'Bankura', 'Baranagar', 'Barasat', 'Barrackpore', 'Basirhat', 'Bhatpara', 'Bishnupur', 'Budge Budge', 'Burdwan', 'Chandernagore', 'Darjeeling', 'Diamond Harbour', 'Dum Dum', 'Durgapur', 'Halisahar', 'Haora', 'Hugli', 'Ingraj Bazar', 'Jalpaiguri', 'Kalimpong', 'Kamarhati', 'Kanchrapara', 'Kharagpur', 'Cooch Behar', 'Kolkata', 'Krishnanagar', 'Malda', 'Midnapore', 'Murshidabad', 'Nabadwip', 'Palashi', 'Panihati', 'Purulia', 'Raiganj', 'Santipur', 'Shantiniketan', 'Shrirampur', 'Siliguri', 'Siuri', 'Tamluk', 'Titagarh']
                }
            ]
        },
        {
            name: 'USA',
            states: [
                {
                    name: 'Las Angel',
                    cities: ['LACity 1', 'LACity 2', 'LACity 3']
                },
                {
                    name: 'New Yark',
                    cities: ['NYCity 1', 'NYCity 2', 'NYCity 3']
                },
                {
                    name: 'Sen Francisco',
                    cities: ['SFCity 1', 'SFCity 2', 'SFCity 3']
                },
            ]
        },
    ]
    const contriesP = [
        {
            name: 'India',
            statesP: [
                {
                    name: 'Andhra Pradesh',
                    citiesP: ['Adoni', 'Amaravati', 'Anantapur', 'Chandragiri', 'Chittoor', 'Dowlaiswaram', 'Eluru', 'Guntur', 'Kadapa', 'Kakinada', 'Kurnool', 'Machilipatnam', 'Nagarjunakoṇḍa', 'Rajahmundry', 'Srikakulam', 'Tirupati', 'Vijayawada', 'Visakhapatnam', 'Vizianagaram', 'Yemmiganur']
                },
                {
                    name: 'Arunachal Pradesh',
                    citiesP: ['Itanagar']
                },
                {
                    name: 'Assam',
                    citiesP: ['Dhuburi', 'Dibrugarh', 'Dispur', 'Guwahati', 'Jorhat', 'Nagaon', 'Sivasagar', 'Silchar', 'Tezpur', 'Tinsukia']
                },
                {
                    name: 'Bihar',
                    citiesP: ['Ara', 'Barauni', 'Begusarai', 'Bettiah', 'Bhagalpur', 'Bihar Sharif', 'Bodh Gaya', 'Buxar', 'Chapra', 'Darbhanga', 'Dehri', 'Dinapur Nizamat', 'Gaya', 'Hajipur', 'Jamalpur', 'Katihar', 'Madhubani', 'Motihari', 'Munger', 'Muzaffarpur', 'Patna', 'Purnia', 'Pusa', 'Saharsa', 'SamastipurSasaram', 'Sitamarhi', 'Siwan', 'Sivhar']
                },
                {
                    name: 'Chandigarh (UT)',
                    citiesP: ['Chandigarh']
                },
                {
                    name: 'Dadra and Nagar Haveli and Daman and Diu (UT)',
                    citiesP: ['Daman', 'Diu', 'Silvassa']
                },
                {
                    name: 'Delhi (National Capital Territory)',
                    citiesP: ['Delhi', 'New Delhi']
                },
                {
                    name: 'Goa',
                    citiesP: ['Madgaon', 'Panaji']
                },
                {
                    name: 'Gujarat',
                    citiesP: ['Ahmadabad', 'Amreli', 'Bharuch', 'Bhavnagar', 'Bhuj', 'Dwarka', 'Gandhinagar', 'Godhra', 'Jamnagar', 'Junagadh', 'Kandla', 'Khambhat', 'Kheda', 'Mahesana', 'Morbi', 'Nadiad', 'Navsari', 'Okha', 'Palanpur', 'Patan', 'Porbandar', 'Rajkot', 'Surat', 'Surendranagar', 'Valsad', 'Veraval']
                },
                {
                    name: 'Haryana',
                    citiesP: ['Ambala', 'Bhiwani', 'Chandigarh', 'Faridabad', 'Firozpur Jhirka', 'Gurugram', 'Hansi', 'Hisar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'PanipatPehowa', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat']
                },
                {
                    name: 'Himachal Pradesh',
                    citiesP: ['Bilaspur', 'Chamba', 'Dalhousie', 'Dharmshala', 'Hamirpur', 'Kangra', 'Kullu', 'Mandi', 'Nahan', 'Shimla', 'Una']
                },
                {
                    name: 'Jammu and Kashmir (UT)',
                    citiesP: ['Anantnag', 'Baramula', 'Doda', 'Gulmarg', 'Jammu', 'Kathua', 'PunchRajouri', 'Srinagar', 'Udhampur']
                },
                {
                    name: 'Jharkhand',
                    citiesP: ['Bokaro', 'Chaibasa', 'Deoghar', 'Dhanbad', 'Dumka', 'Giridih', 'Hazaribag', 'Jamshedpur', 'Jharia', 'Rajmahal', 'Ranchi', 'Saraikela']
                },
                {
                    name: 'Karnataka',
                    citiesP: ['Badami', 'Ballari', 'Bengaluru', 'Belagavi', 'Bhadravati', 'Bidar', 'Chikkamagaluru', 'Chitradurga', 'Davangere', 'Halebid', 'Hassan', 'Hubballi-Dharwad', 'Kalaburagi', 'Kolar', 'Madikeri', 'Mandya', 'Mangaluru', 'Mysuru', 'Raichur', 'Shivamogga', 'Shravanabelagola', 'Shrirangapattana', 'Tumakuru', 'Vijayapura']
                },
                {
                    name: 'Kerala',
                    citiesP: ['Alappuzha', 'Vatakara', 'Idukki', 'Kannur', 'Kochi', 'Kollam', 'Kottayam', 'Kozhikode', 'Mattancheri', 'Palakkad', 'Thalassery', 'Thiruvananthapuram', 'Thrissur']
                },
                {
                    name: 'Ladakh(UT)',
                    citiesP: ['Kargil', 'Leh']
                },
                {
                    name: 'Madhya Pradesh',
                    citiesP: ['Balaghat', 'Barwani', 'Betul', 'Bharhut', 'Bhind', 'Bhojpur', 'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dr. Ambedkar Nagar (Mhow)', 'Guna', 'Gwalior', 'Hoshangabad', 'Indore', 'Itarsi', 'Jabalpur', 'Jhabua', 'Khajuraho', 'Khandwa', 'Khargone', 'Maheshwar', 'Mandla', 'Mandsaur', 'Morena', 'Murwara', 'Narsimhapur', 'Narsinghgarh', 'Narwar', 'Neemuch', 'Nowgong', 'Orchha', 'Panna', 'Raisen', 'Rajgarh', 'Ratlam', 'Rewa', 'Sagar', 'Sarangpur', 'Satna', 'Sehore', 'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri', 'Ujjain', 'Vidisha']
                },
                {
                    name: 'Maharashtra',
                    citiesP: ['Ahmadnagar', 'Akola', 'Amravati', 'Aurangabad', 'Bhandara', 'Bhusawal', 'Bid', 'Buldhana', 'Chandrapur', 'Daulatabad', 'Dhule', 'Jalgaon', 'Kalyan', 'Karli', 'Kolhapur', 'Mahabaleshwar', 'Malegaon', 'Matheran', 'Mumbai', 'Nagpur', 'Nanded', 'Nashik', 'Osmanabad', 'Pandharpur', 'Parbhani', 'Pune', 'Ratnagiri', 'Sangli', 'Satara', 'Sevagram', 'Solapur', 'Thane', 'Ulhasnagar', 'Vasai-Virar', 'Wardha', 'Yavatmal']
                },
                {
                    name: 'Manipur',
                    citiesP: ['Imphal']
                },
                {
                    name: 'Meghalaya',
                    citiesP: ['Cherrapunji', 'Shillong']
                },
                {
                    name: 'Mizoram',
                    citiesP: ['Aizawl', 'Lunglei']
                },
                {
                    name: 'Nagaland',
                    citiesP: ['Kohima', 'Mon', 'Phek', 'Wokha', 'Zunheboto']
                },
                {
                    name: 'Odisha',
                    citiesP: ['Balangir', 'Baleshwar', 'Baripada', 'Bhubaneshwar', 'Brahmapur', 'Cuttack', 'Dhenkanal', 'Kendujhar', 'Konark', 'Koraput', 'Paradip', 'Phulabani', 'Puri', 'Sambalpur', 'Udayagiri']
                },
                {
                    name: 'Puducherry(UT)',
                    citiesP: ['Karaikal', 'Mahe', 'Puducherry', 'Yanam']
                },
                {
                    name: 'Punjab',
                    citiesP: ['Amritsar', 'Batala', 'Chandigarh', 'Faridkot', 'Firozpur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Nabha', 'Patiala', 'Rupnagar', 'Sangrur']
                },
                {
                    name: 'Rajasthan',
                    citiesP: ['Abu', 'Ajmer', 'Alwar', 'Amer', 'Barmer', 'Beawar', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Bundi', 'Chittaurgarh', 'Churu', 'Dhaulpur', 'Dungarpur', 'Ganganagar', 'Hanumangarh', 'Jaipur', 'Jaisalmer', 'Jalor', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Kishangarh', 'Kota', 'Merta', 'Nagaur', 'Nathdwara', 'Pali', 'Phalodi', 'Pushkar', 'Sawai Madhopur', 'Shahpura', 'Sikar', 'Sirohi', 'Tonk', 'Udaipur']
                },
                {
                    name: 'Sikkim',
                    citiesP: ['Gangtok', 'Gyalshing', 'Lachung', 'Mangan']
                },
                {
                    name: 'Tamil Nadu',
                    citiesP: ['Arcot', 'Chengalpattu', 'AChennaiwar', 'Chidambaram', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kanchipuram', 'Kanniyakumari', 'Kodaikanal', 'Kumbakonam', 'Madurai', 'Mamallapuram', 'Nagappattinam', 'Nagercoil', 'Palayamkottai', 'Pudukkottai', 'Rajapalayam', 'Ramanathapuram', 'Salem', 'Thanjavur', 'Tiruchchirappalli', 'Tirunelveli', 'Tiruppur', 'Thoothukudi', 'Udhagamandalam', 'Vellore']
                },
                {
                    name: 'Telangana',
                    citiesP: ['Hyderabad', 'Karimnagar', 'Khammam', 'MangMahbubnagaran', 'Nizamabad', 'Sangareddi', 'Warangal']
                },
                {
                    name: 'Tripura',
                    citiesP: ['Agartala']
                },
                {
                    name: 'Uttar Pradesh',
                    citiesP: ['Agra', 'Aligarh', 'Amroha', 'Ayodhya', 'Azamgarh', 'Bahraich', 'Ballia', 'Banda', 'Bara Banki', 'Bareilly', 'Basti', 'Bijnor', 'Bithur', 'Budaun', 'Bulandshahr', 'Deoria', 'Etah', 'Etawah', 'Faizabad', 'Farrukhabad-cum-Fatehgarh', 'Fatehpur', 'Fatehpur Sikri', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj', 'Kanpur', 'Lakhimpur', 'Lalitpur', 'Lucknow', 'Mainpuri', 'Mathura', 'Meerut', 'Mirzapur-Vindhyachal', 'Moradabad', 'Muzaffarnagar', 'Partapgarh', 'Pilibhit', 'Prayagraj', 'Rae Bareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Shahjahanpur', 'Sitapur', 'Sultanpur', 'Tehri', 'Varanasi']
                },
                {
                    name: 'Uttarakhand',
                    citiesP: ['Almora', 'Dehra Dun', 'Haridwar', 'Mussoorie', 'Nainital', 'Pithoragarh']
                },
                {
                    name: 'West Bengal',
                    citiesP: ['Alipore', 'Alipur Duar', 'Asansol', 'Baharampur', 'Bally', 'Balurghat', 'Bankura', 'Baranagar', 'Barasat', 'Barrackpore', 'Basirhat', 'Bhatpara', 'Bishnupur', 'Budge Budge', 'Burdwan', 'Chandernagore', 'Darjeeling', 'Diamond Harbour', 'Dum Dum', 'Durgapur', 'Halisahar', 'Haora', 'Hugli', 'Ingraj Bazar', 'Jalpaiguri', 'Kalimpong', 'Kamarhati', 'Kanchrapara', 'Kharagpur', 'Cooch Behar', 'Kolkata', 'Krishnanagar', 'Malda', 'Midnapore', 'Murshidabad', 'Nabadwip', 'Palashi', 'Panihati', 'Purulia', 'Raiganj', 'Santipur', 'Shantiniketan', 'Shrirampur', 'Siliguri', 'Siuri', 'Tamluk', 'Titagarh']
                }
            ]
        },
        {
            name: 'USA',
            statesP: [
                {
                    name: 'Las Angel',
                    citiesP: ['LACity 1', 'LACity 2', 'LACity 3']
                },
                {
                    name: 'New Yark',
                    citiesP: ['NYCity 1', 'NYCity 2', 'NYCity 3']
                },
                {
                    name: 'Sen Francisco',
                    citiesP: ['SFCity 1', 'SFCity 2', 'SFCity 3']
                },
            ]
        },
    ]

    const [country, setCountry] = useState('--Country--')
    const [state, setState] = useState('--State--')
    const [city, setCity] = useState('--City--')
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])

    const changeCountry = (e) => {
        setCountry(e.target.value)
        setStates(contries.find((ctr) => ctr.name === e.target.value).states)
        setEmployee({ ...employee, presentCountry: e.target.value })
    }

    const changeState = (e) => {
        setState(e.target.value)
        setCities(states.find((sta) => sta.name === e.target.value).cities);
        setEmployee({ ...employee, presentState: e.target.value })
    }
    const changeCity = (e) => {
        setCity(e.target.value)
        setEmployee({ ...employee, presentCity: e.target.value })
    }
    // function changeCity(e){
    //     setCity(e.target.value)
    // }

    const [countryP, setCountryP] = useState('--CountryP--')
    const [stateP, setStateP] = useState('--StateP--')
    const [cityP, setCityP] = useState('--CityP--')
    const [statesP, setStatesP] = useState([])
    const [citiesP, setCitiesP] = useState([])

    const changeCountryPermanentAddress = (e) => {
        setCountryP(e.target.value)
        setStatesP(contriesP.find((ctr) => ctr.name === e.target.value).statesP)
        setEmployee({ ...employee, permanentCountry: e.target.value })
    }

    const changeStatePermanentAddress = (e) => {
        setStateP(e.target.value)
        setCitiesP(statesP.find((sta) => sta.name === e.target.value).citiesP);
        setEmployee({ ...employee, permanentState: e.target.value })
    }
    const changeCityPermanentAddress = (e) => {
        setCityP(e.target.value)
        setEmployee({ ...employee, permanentCity: e.target.value })
    }
    return (
        <div className='employeeDetails-bg'>
            <div className='employeeDetails-bg-1'>
                <div className='employeeDetails-bg-2'>
                    <Link
                        to='/dashboard/currentEmployee'
                        className='nav-link'>
                        <div role='button'>
                            <i className="bi bi-arrow-left" />
                        </div>
                    </Link>
                    <div className='ms-4'>
                        Add Employee
                    </div>
                </div>
                <div className=''>
                    <div>
                        <div className='employeeDetails-btn-1' role='button'>
                            Add Ex-Employee
                        </div>
                    </div>
                </div>
            </div>
            <div className='employeeDetails-bg-3'>
                <div className='employeeDetails-bg-4'>
                    <div className='employeeDetails-bg-5'>
                        <ul className='employeeDetails-bg-6'>
                            <li className='' onClick={() => updateToggle(1)}>
                                <div className={toggle === 1 ? "color-li-y" : "color-n"} role='button'>
                                    Basic Details
                                </div>
                            </li>
                            <li className='' onClick={() => updateToggle(2)}>
                                <div className={toggle === 2 ? "color-li-y" : "color-n"} role='button'>
                                    Advance Details
                                </div>
                            </li>
                            <li className='' onClick={() => updateToggle(3)}>
                                <div className={toggle === 3 ? "color-li-y" : "color-n"} role='button'>
                                    Address
                                </div>
                            </li>
                            <li className='' onClick={() => updateToggle(4)}>
                                <div className={toggle === 4 ? "color-li-y" : "color-n"} role='button'>
                                    Bank Details
                                </div>
                            </li>
                            <li className='' onClick={() => updateToggle(5)}>
                                <div className={toggle === 5 ? "color-li-y" : "color-n"} role='button'>
                                    Qualification
                                </div>
                            </li>
                            <li className='' onClick={() => updateToggle(6)}>
                                <div className={toggle === 6 ? "color-li-y" : "color-n"} role='button'>
                                    Previous Work
                                </div>
                            </li>
                            <li className='' onClick={() => updateToggle(7)}>
                                <div className={toggle === 7 ? "color-li-y" : "color-n"} role='button'>
                                    Permissions
                                </div>
                            </li>
                            <li className='' onClick={() => updateToggle(8)}>
                                <div className={toggle === 8 ? "color-li-y" : "color-n"} role='button'>
                                    Family Details
                                </div>
                            </li>
                            <li className='' onClick={() => updateToggle(9)}>
                                <div className={toggle === 9 ? "color-li-y" : "color-n"} role='button'>
                                    Asset Allocation
                                </div>
                            </li>
                            <li className='' onClick={() => updateToggle(10)}>
                                <div className={toggle === 10 ? "color-li-y" : "color-n"} role='button'>
                                    Documents
                                </div>
                            </li>
                        </ul>
                    </div>
                    <form onSubmit={handleSubmit} >
                        <div className={toggle === 1 ? "show-tab-container" : "tab-container"}>
                            <div className='row row-cols-1 row-cols-md-3'>
                                <div className='col'>
                                    <div className='basic-details-form'>
                                        <div className='basic-details-form-1'>
                                            <div className='basic-details-form-2'>
                                                <div className='ms-1 mt-2 mb-2 me-2'>
                                                    {profileImage ?
                                                        <label htmlFor="img-upload"><img
                                                            src={URL.createObjectURL(profileImage)}
                                                            alt=""
                                                            className="uploade-img" /></label>
                                                        :
                                                        <label htmlFor="img-upload"><img
                                                            src="/Images/people-icon.png"
                                                            alt="Show uploded Image"
                                                            className="uploade-img" /></label>
                                                    }
                                                </div>
                                                <div className='me-5'>
                                                    <label htmlFor="img-upload">
                                                        <img
                                                            src="/Images/upload-icon.png"
                                                            alt="Upload Image Icon"
                                                            className="uploade-img-1" role="button" />
                                                    </label>
                                                    <input type="file" id='img-upload' name='img-upload' className='img-upload-new'
                                                    value={employee.image}
                                                        onChange={handleImageChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className='basic-details-form-3'>
                                                <div className=''>
                                                    Drag & Drop Photo or
                                                </div>
                                                <div>
                                                    <span className='basic-details-form-4' role='button'>
                                                        <label htmlFor="img-upload">
                                                            Choose from your system.
                                                        </label>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-4'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-1" placeholder=''
                                                        className='emp-text-fldset-1'
                                                        value={blodGroup}
                                                        onChange={changeBlodGroup}>
                                                        <option value="">Blood Group</option>
                                                        {blodgroups.map((e) => {
                                                            return <option value={e.blodName}>{e.blodName}</option>;
                                                        })}
                                                    </select>
                                                    <label htmlFor="emp-1" className='emp-label-fldset-1'>
                                                        Blood Group
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-5'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' 
                                                    value={employee.fatherName}
                                                    className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, fatherName: e.target.value })
                                                        }
                                                        id='emp-2' />

                                                    <label htmlFor="emp-2" className='emp-label-fldset-1'>
                                                        Father's Name
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-5'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="password" placeholder='' 
                                                    value={employee.password}
                                                    className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, password: e.target.value })
                                                        }
                                                        id='emp-3' />

                                                    <label htmlFor="emp-3" className='emp-label-fldset-1'>
                                                        Password
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='basic-details-form'>
                                        <div className='basic-details-form-6'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' 
                                                    value={employee.firstName}
                                                    className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, firstName: e.target.value })
                                                        }
                                                        id='emp-4' />

                                                    <label htmlFor="emp-4" className='emp-label-fldset-1'>
                                                        First Name
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-7'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder=''
                                                    value={employee.middleName}
                                                    className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, middleName: e.target.value })
                                                        }
                                                        id='emp-5' />

                                                    <label htmlFor="emp-5" className='emp-label-fldset-1'>
                                                        Middle Name
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-7'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder=''
                                                    value={employee.lastName}
                                                    className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, lastName: e.target.value })
                                                        }
                                                        id='emp-6' />

                                                    <label htmlFor="emp-6" className='emp-label-fldset-1'>
                                                        Last Name
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-7'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' 
                                                    value={employee.email} className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, email: e.target.value })
                                                        }
                                                        id='emp-7' />

                                                    <label htmlFor="emp-7" className='emp-label-fldset-1'>
                                                        Email Id
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-7'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' 
                                                    value={employee.officialEmail}className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, officialEmail: e.target.value })
                                                        }
                                                        id='emp-8' />

                                                    <label htmlFor="emp-8" className='emp-label-fldset-1'>
                                                        Official Email Id
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-7'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder=''
                                                    value={employee.motherName}
                                                     className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, motherName: e.target.value })
                                                        }
                                                        id='emp-9' />

                                                    <label htmlFor="emp-9" className='emp-label-fldset-1'>
                                                        Mother's Name
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-7'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-10" placeholder=''
                                                        className='emp-text-fldset-1'
                                                        value={status}
                                                        onChange={changeStatus}>
                                                        <option value="">Status</option>
                                                        {statuses.map((e) => {
                                                            return <option value={e.statusName}>{e.statusName}</option>;
                                                        })}
                                                    </select>
                                                    <label htmlFor="emp-10" className='emp-label-fldset-1'>
                                                        Status
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='basic-details-form'>
                                        <div className='basic-details-form-8'>
                                            <div className='basic-font'>
                                                Select Gender:
                                            </div>
                                            <div className='basic-btn'>
                                                <span className='me-2'>
                                                    <input type="radio" id='radio-1' name='gender'
                                                        value='male'
                                                        // checked="checked"
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, gender: e.target.value })
                                                        }
                                                    />
                                                    <label htmlFor="radio-1">
                                                        Male
                                                    </label>
                                                </span>

                                                <span className='me-2'>
                                                    <input type="radio" id='radio-2' name='gender'
                                                        value='female'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, gender: e.target.value })
                                                        }
                                                    />
                                                    <label htmlFor="radio-2">
                                                        Female
                                                    </label>
                                                </span>

                                                <span>
                                                    <input type="radio" id='radio-3' name='gender'
                                                        value='trans'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, gender: e.target.value })
                                                        }
                                                    />
                                                    <label htmlFor="radio-3">
                                                        Trans
                                                    </label>
                                                </span>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-6'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' 
                                                    value={employee.employeeCode} className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, employeeCode: e.target.value })
                                                        }
                                                        id='emp-11' />
                                                    <label htmlFor="emp-11" className='emp-label-fldset-1'>
                                                        Employee Code
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-6'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder=''
                                                    value={employee.mobile}
                                                    className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, mobile: e.target.value })
                                                        }
                                                        id='emp-12' />
                                                    <label htmlFor="emp-12" className='emp-label-fldset-1'>
                                                        Mobile Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-6'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder=''
                                                    value={employee.officialMobile}
                                                    className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, officialMobile: e.target.value })
                                                        }
                                                        id='emp-13' />
                                                    <label htmlFor="emp-13" className='emp-label-fldset-1'>
                                                        Official Mobile Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-6'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="date" placeholder='' 
                                                    value={employee.joningDate}
                                                    className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, joningDate: e.target.value })
                                                        }
                                                        id='emp-14' />
                                                    <label htmlFor="emp-14" className='emp-label-fldset-1'>
                                                        Joining Date
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-6'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="date" placeholder='' 
                                                    value={employee.dateOfBirth}
                                                    className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, dateOfBirth: e.target.value })
                                                        }
                                                        id='emp-15' />
                                                    <label htmlFor="emp-15" className='emp-label-fldset-1'>
                                                        Date of Birth
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-7'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-16" placeholder=''
                                                        className='emp-text-fldset-1'
                                                        value={marritalStatus}
                                                        onChange={changeMarritalStatus}>
                                                        <option value="">Marital Status</option>
                                                        {marritalStatuses.map((e) => {
                                                            return <option value={e.statusName}>{e.statusName}</option>;
                                                        })}

                                                    </select>
                                                    <label htmlFor="emp-16" className='emp-label-fldset-1'>
                                                        Marital Status
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-9'>
                                            {/* <div className='basic-details-form-10'>Save</div> */}
                                            <div className='basic-details-form-11'
                                                onClick={() => updateToggle(2)}>
                                                Next
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={toggle === 2 ? "show-tab-container" : "tab-container"}>
                            <div className='row row-cols-1 row-cols-md-3'>
                                <div className='col'>
                                    <div className='basic-details-form'>
                                        <div className='basic-details-form-12'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' 
                                                    value={employee.uanNumber}
                                                    className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, uanNumber: e.target.value })
                                                        }
                                                        id='emp-17' />

                                                    <label htmlFor="emp-17" className='emp-label-fldset-1'>
                                                        UAN Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-7'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' 
                                                    value={employee.esicNumber}
                                                    className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, esicNumber: e.target.value })
                                                        }
                                                        id='emp-18' />

                                                    <label htmlFor="emp-18" className='emp-label-fldset-1'>
                                                        ESIC Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-13'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, panNumber: e.target.value })
                                                        }
                                                        id='emp-19' />

                                                    <label htmlFor="emp-19" className='emp-label-fldset-1'>
                                                        PAN Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='basic-details-form'>
                                        <div className='basic-details-form-6'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, aadharNumber: e.target.value })
                                                        }
                                                        id='emp-20' />

                                                    <label htmlFor="emp-20" className='emp-label-fldset-1'>
                                                        Aadhar Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-7'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, InsuranceNumber: e.target.value })
                                                        }
                                                        id='emp-21' />

                                                    <label htmlFor="emp-21" className='emp-label-fldset-1'>
                                                        Insurance Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-13'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, drivingLicenceNumber: e.target.value })
                                                        }
                                                        id='emp-22' />

                                                    <label htmlFor="emp-22" className='emp-label-fldset-1'>
                                                        Driving Licence Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='basic-details-form'>
                                        <div className='basic-details-form-6'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, ipNumber: e.target.value })
                                                        }
                                                        id='emp-23' />
                                                    <label htmlFor="emp-23" className='emp-label-fldset-1'>
                                                        IP Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-6'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, pfNumber: e.target.value })
                                                        }
                                                        id='emp-24' />
                                                    <label htmlFor="emp-24" className='emp-label-fldset-1'>
                                                        PF Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row-up-line'></div>
                            <div className='basic-details-form-15'>
                                <div className='row row-cols-1 row-cols-md-3'>
                                    <div className='col'>
                                        <div className='basic-details-form-14'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, ctcProbation: e.target.value })
                                                        }
                                                        id='emp-25' />
                                                    <label htmlFor="emp-25" className='emp-label-fldset-1'>
                                                        CTC Monthly (In Probation)
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='basic-details-form-14'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, probationPeriod: e.target.value })
                                                        }
                                                        id='emp-26' />
                                                    <label htmlFor="emp-26" className='emp-label-fldset-1'>
                                                        Probation Period (Days)
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='basic-details-form-14'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, ctcAfterProbation: e.target.value })
                                                        }
                                                        id='emp-27' />
                                                    <label htmlFor="emp-27" className='emp-label-fldset-1'>
                                                        CTC Monthly (After Probation)
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row-down-line'></div>
                            <div className='basic-details-form-15'>
                                <div className='row row-cols-1 row-cols-md-3'>
                                    <div className='col'>
                                        <div className='basic-details-form-14'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-28" placeholder=''
                                                        className='emp-text-fldset-1'
                                                        value={client}
                                                        onChange={changeClient}>
                                                        <option value="">Client Name</option>
                                                        {clients.map((e) => {
                                                            return <option value={e.clientName}>{e.clientName}</option>;
                                                        })}
                                                    </select>
                                                    <label htmlFor="emp-28" className='emp-label-fldset-1'>
                                                        Client Name
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='basic-details-form-16'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, deleverySubType: e.target.value })
                                                        }
                                                        id='emp-29' />
                                                    <label htmlFor="emp-29" className='emp-label-fldset-1'>
                                                        Delevery Sub Type
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='basic-details-form-14'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, clientId: e.target.value })
                                                        }
                                                        id='emp-30' />
                                                    <label htmlFor="emp-30" className='emp-label-fldset-1'>
                                                        Client Id
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='basic-details-form-14'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, deleveryType: e.target.value })
                                                        }
                                                        id='emp-31' />
                                                    <label htmlFor="emp-31" className='emp-label-fldset-1'>
                                                        Delevery Type
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='basic-details-form-17'>
                                <div className='d-flex justify-content-between text-center'>
                                    <div className='basic-details-form-11'
                                        onClick={() => updateToggle(1)}>
                                        Back
                                    </div>
                                    {/* <div className='basic-details-form-10'>
                                        Save
                                    </div> */}
                                    <div className='basic-details-form-11'
                                        onClick={() => updateToggle(3)}>
                                        Next
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={toggle === 3 ? "show-tab-container" : "tab-container"}>
                            <div className='row row-cols-1 row-cols-md-2'>
                                <div className='col'>
                                    <div className='basic-details-form-18'>
                                        <div className='basic-details-form-19'>
                                            <label htmlFor="emp-32">
                                                Present Address
                                            </label>
                                        </div>
                                        <div className=''>
                                            <div className='address-body-fldset-1'>
                                                <div className='address-form-fldset-1'>
                                                    <textarea type="" placeholder='' className='address-text-fldset-1'
                                                        rows="4"
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, presentAddressField: e.target.value })
                                                        }
                                                        id='emp-32' />
                                                    <label htmlFor="emp-32" className='address-label-fldset-1'>
                                                        Address
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row row-cols-2 row-cols-md-2'>
                                            <div className='col'>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <select name="" id="emp-33" placeholder=''
                                                                className='smAddress-text-fldset-1'
                                                                value={country}
                                                                onChange={changeCountry}>
                                                                <option value="">Country *</option>
                                                                {contries.map((ctr) => {
                                                                    return <option value={ctr.name}>{ctr.name}</option>;
                                                                })}
                                                            </select>
                                                            <label htmlFor="emp-33" className='smAddress-label-fldset-1'>
                                                                Country *
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <select name="" id="emp-34" placeholder=''
                                                                className='smAddress-text-fldset-1'
                                                                value={city}
                                                                onChange={changeCity}>
                                                                <option value="">City *</option>
                                                                {cities.map((city) => {
                                                                    return <option value={city}>{city}</option>;
                                                                })}
                                                            </select>
                                                            <label htmlFor="emp-34" className='smAddress-label-fldset-1'>
                                                                City *
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <select name="" id="emp-35" placeholder=''
                                                                className='smAddress-text-fldset-1'
                                                                value={state}
                                                                onChange={changeState}>
                                                                <option value="">State *</option>
                                                                {states.map((sta) => {
                                                                    return <option value={sta.name}>{sta.name}</option>;
                                                                })}
                                                            </select>
                                                            <label htmlFor="emp-35" className='smAddress-label-fldset-1'>
                                                                State *
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <input type="text" placeholder='' className='smAddress-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, presentPinCode: e.target.value })
                                                                }
                                                                id='emp-36' />
                                                            <label htmlFor="emp-36" className='smAddress-label-fldset-1'>
                                                                Pincode *
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='basic-details-form-18'>
                                        <div className='basic-details-form-21'>
                                            <div className='basic-details-form-20'>
                                                <label htmlFor="emp-37">
                                                    Permanent Address
                                                </label>
                                            </div>
                                            {/* <div className='basic-details-form-22'>
                                                <input type="checkbox" id='emp-38' className='me-2' />
                                                <label htmlFor="emp-38">
                                                    Same as present Address
                                                </label>
                                            </div> */}
                                        </div>
                                        <div className=''>
                                            <div className='address-body-fldset-1'>
                                                <div className='address-form-fldset-1'>
                                                    <textarea type="" placeholder='' className='address-text-fldset-1'
                                                        rows="4"
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, permanentAddressField: e.target.value })
                                                        }
                                                        id='emp-37' />
                                                    <label htmlFor="emp-37" className='address-label-fldset-1'>
                                                        Address
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row row-cols-2 row-cols-md-2'>
                                            <div className='col'>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <select name="" id="emp-39" placeholder=''
                                                                className='smAddress-text-fldset-1'
                                                                value={countryP}
                                                                onChange={changeCountryPermanentAddress}>
                                                                <option value="">Country *</option>
                                                                {contriesP.map((ctr) => {
                                                                    return <option value={ctr.name}>{ctr.name}</option>;
                                                                })}
                                                            </select>
                                                            <label htmlFor="emp-39" className='smAddress-label-fldset-1'>
                                                                Country *
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <select name="" id="emp-40" placeholder=''
                                                                className='smAddress-text-fldset-1'
                                                                value={cityP}
                                                                onChange={changeCityPermanentAddress}>
                                                                <option value="">City *</option>
                                                                {citiesP.map((cityP) => {
                                                                    return <option value={cityP}>{cityP}</option>;
                                                                })}
                                                            </select>
                                                            <label htmlFor="emp-40" className='smAddress-label-fldset-1'>
                                                                City *
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <select name="" id="emp-41" placeholder=''
                                                                className='smAddress-text-fldset-1'
                                                                value={stateP}
                                                                onChange={changeStatePermanentAddress}>
                                                                <option value="">State *</option>
                                                                {statesP.map((sta) => {
                                                                    return <option value={sta.name}>{sta.name}</option>;
                                                                })}
                                                            </select>
                                                            <label htmlFor="emp-41" className='smAddress-label-fldset-1'>
                                                                State *
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <input type="text" placeholder='' className='smAddress-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, permanentPinCode: e.target.value })
                                                                }
                                                                id='emp-42' />
                                                            <label htmlFor="emp-42" className='smAddress-label-fldset-1'>
                                                                Pincode *
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='basic-details-form-17'>
                                <div className='d-flex justify-content-between text-center'>
                                    <div className='basic-details-form-11'
                                        onClick={() => updateToggle(2)}>
                                        Back
                                    </div>
                                    {/* <div className='basic-details-form-10'>
                                        Save
                                    </div> */}
                                    <div className='basic-details-form-11'
                                        onClick={() => updateToggle(4)}>
                                        Next
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={toggle === 4 ? "show-tab-container" : "tab-container"}>
                            <div className='row row-cols-1 row-cols-md-2'>

                                <div className='col'>
                                    <div className='basic-details-form-24'>
                                        <div>Bank Account Details 1</div>
                                        <div className='row row-cols-1 row-cols-md-2'>
                                            <div className='col'>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <input type="text" placeholder='' className='smAddress-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, acHolderName_1: e.target.value })
                                                                }
                                                                id='emp-43' />
                                                            <label htmlFor="emp-43" className='smAddress-label-fldset-1'>
                                                                Account Holder Name
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <input type="text" placeholder='' className='smAddress-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, ifsc_1: e.target.value })
                                                                }
                                                                id='emp-44' />
                                                            <label htmlFor="emp-44" className='smAddress-label-fldset-1'>
                                                                IFSC/RTGS Code
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <input type="text" placeholder='' className='smAddress-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, acNumber_1: e.target.value })
                                                                }
                                                                id='emp-45' />
                                                            <label htmlFor="emp-45" className='smAddress-label-fldset-1'>
                                                                Account Number
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <input type="text" placeholder='' className='smAddress-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, bankName_1: e.target.value })
                                                                }
                                                                id='emp-46' />
                                                            <label htmlFor="emp-46" className='smAddress-label-fldset-1'>
                                                                Bank Name
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col'>
                                    <div className='basic-details-form-24'>
                                        <div>Bank Account Details 2</div>
                                        <div className='row row-cols-1 row-cols-md-2'>
                                            <div className='col'>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <input type="text" placeholder='' className='smAddress-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, acHolderName_2: e.target.value })
                                                                }
                                                                id='emp-47' />
                                                            <label htmlFor="emp-47" className='smAddress-label-fldset-1'>
                                                                Account Holder Name
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <input type="text" placeholder='' className='smAddress-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, ifsc_2: e.target.value })
                                                                }
                                                                id='emp-48' />
                                                            <label htmlFor="emp-48" className='smAddress-label-fldset-1'>
                                                                IFSC/RTGS Code
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <input type="text" placeholder='' className='smAddress-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, acNumber_2: e.target.value })
                                                                }
                                                                id='emp-49' />
                                                            <label htmlFor="emp-49" className='smAddress-label-fldset-1'>
                                                                Account Number
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-23'>
                                                    <div className='smAddress-body-fldset-1'>
                                                        <div className='smAddress-form-fldset-1'>
                                                            <input type="text" placeholder='' className='smAddress-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, bankName_2: e.target.value })
                                                                }
                                                                id='emp-50' />
                                                            <label htmlFor="emp-50" className='smAddress-label-fldset-1'>
                                                                Bank Name
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='row row-cols-1 row-cols-md-2'>
                                <div className='col'>
                                    <div className='basic-details-form-25'>
                                        <div className='address-body-fldset-1'>
                                            <div className='address-form-fldset-1'>
                                                <textarea type="" placeholder='' className='address-text-fldset-1'
                                                    rows="4"
                                                    onChange={(e) =>
                                                        setEmployee({ ...employee, bankAddress_1: e.target.value })
                                                    }
                                                    id='emp-51' />
                                                <label htmlFor="emp-51" className='address-label-fldset-1'>
                                                    Bank Address
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='basic-details-form-25'>
                                        <div className='address-body-fldset-1'>
                                            <div className='address-form-fldset-1'>
                                                <textarea type="" placeholder='' className='address-text-fldset-1'
                                                    rows="4"
                                                    onChange={(e) =>
                                                        setEmployee({ ...employee, bankAddress_2: e.target.value })
                                                    }
                                                    id='emp-52' />
                                                <label htmlFor="emp-52" className='address-label-fldset-1'>
                                                    Bank Address
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='basic-details-form-17'>
                                <div className='d-flex justify-content-between text-center'>
                                    <div className='basic-details-form-11'
                                        onClick={() => updateToggle(3)}>
                                        Back
                                    </div>
                                    {/* <div className='basic-details-form-10'>
                                        Save
                                    </div> */}
                                    <div className='basic-details-form-11'
                                        onClick={() => updateToggle(5)}>
                                        Next
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={toggle === 5 ? "show-tab-container" : "tab-container"}>
                            <div className='row row-cols-1 row-cols-md-1'>
                                <div className='col'>

                                    <div className='qualification-head'>

                                        <div className='qualification-div'>

                                            <div className='qualification-div-1'>
                                                Matriculation (10th)
                                            </div>

                                            <div className='qualification-div-2'>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='board'
                                                                className='quali-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, matricBoard: e.target.value })
                                                                }
                                                                id='emp-54' />
                                                            <label htmlFor='emp-54' className='quali-label-fldset-1'>
                                                                Board/University
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='college'
                                                                className='quali-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, matricInstitute: e.target.value })
                                                                }
                                                                id='emp-55' />
                                                            <label htmlFor='emp-55' className='quali-label-fldset-1'>
                                                                Institute/College
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='passingYear'
                                                                className='quali-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, matricPassingYear: e.target.value })
                                                                }
                                                                id='emp-56' />
                                                            <label htmlFor='emp-56' className='quali-label-fldset-1'>
                                                                Passing Year
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='totalMarks' className='quali-text-fldset-1'
                                                                onChange={handleTotalMarksM}
                                                                id='emp-57' />
                                                            <label htmlFor='emp-57' className='quali-label-fldset-1'>
                                                                Total Marks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='obtentMarks' className='quali-text-fldset-1'
                                                                onChange={handleObtentMarksM}
                                                                id='emp-58' />
                                                            <label htmlFor='emp-58' className='quali-label-fldset-1'>
                                                                Obtent Marks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='percentage' className='quali-text-fldset-1'
                                                                id='emp-59'
                                                                value={percentageM}
                                                                onClick={handlePercentageM}
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, matricPercentage: e.target.value })
                                                                } />
                                                            <label htmlFor='emp-59' className='quali-label-fldset-1'>
                                                                Percentage (%)
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='qualification-div'>

                                            <div className='qualification-div-1'>
                                                Intermediate (12th)
                                            </div>

                                            <div className='qualification-div-2'>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='board'
                                                                className='quali-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, interBoard: e.target.value })
                                                                }
                                                                id='emp-60' />
                                                            <label htmlFor='emp-60' className='quali-label-fldset-1'>
                                                                Board/University
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='college'
                                                                className='quali-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, interInstitute: e.target.value })
                                                                }
                                                                id='emp-61' />
                                                            <label htmlFor='emp-61' className='quali-label-fldset-1'>
                                                                Institute/College
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='passingYear'
                                                                className='quali-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, interPassingYear: e.target.value })
                                                                }
                                                                id='emp-62' />
                                                            <label htmlFor='emp-62' className='quali-label-fldset-1'>
                                                                Passing Year
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='totalMarks' className='quali-text-fldset-1'
                                                                onChange={handleTotalMarksI}
                                                                id='emp-63' />
                                                            <label htmlFor='emp-63' className='quali-label-fldset-1'>
                                                                Total Marks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='obtentMarks' className='quali-text-fldset-1'
                                                                onChange={handleObtentMarksI}
                                                                id='emp-64' />
                                                            <label htmlFor='emp-64' className='quali-label-fldset-1'>
                                                                Obtent Marks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='percentage' className='quali-text-fldset-1'
                                                                id='emp-65'
                                                                value={percentageI}
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, interPercentage: e.target.value })
                                                                }
                                                                onClick={handlePercentageI} />
                                                            <label htmlFor='emp-65' className='quali-label-fldset-1'>
                                                                Percentage (%)
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='qualification-div'>

                                            <div className='qualification-div-1'>
                                                Graduation
                                            </div>

                                            <div className='qualification-div-2'>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='board'
                                                                className='quali-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, graduationBoard: e.target.value })
                                                                }
                                                                id='emp-66' />
                                                            <label htmlFor='emp-66' className='quali-label-fldset-1'>
                                                                Board/University
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='college'
                                                                className='quali-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, graduationInstitute: e.target.value })
                                                                }
                                                                id='emp-67' />
                                                            <label htmlFor='emp-67' className='quali-label-fldset-1'>
                                                                Institute/College
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='passingYear'
                                                                className='quali-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, graduationPassingYear: e.target.value })
                                                                }
                                                                id='emp-68' />
                                                            <label htmlFor='emp-68' className='quali-label-fldset-1'>
                                                                Passing Year
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='totalMarks' className='quali-text-fldset-1'
                                                                onChange={handleTotalMarksG}
                                                                id='emp-69' />
                                                            <label htmlFor='emp-69' className='quali-label-fldset-1'>
                                                                Total Marks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='obtentMarks' className='quali-text-fldset-1'
                                                                onChange={handleObtentMarksG}
                                                                id='emp-70' />
                                                            <label htmlFor='emp-70' className='quali-label-fldset-1'>
                                                                Obtent Marks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='percentage' className='quali-text-fldset-1'
                                                                id='emp-71'
                                                                value={percentageG}
                                                                onClick={handlePercentageG}
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, graduationPercentage: e.target.value })
                                                                } />
                                                            <label htmlFor='emp-71' className='quali-label-fldset-1'>
                                                                Percentage (%)
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='qualification-div'>

                                            <div className='qualification-div-1'>
                                                Post Graduation
                                            </div>

                                            <div className='qualification-div-2'>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='board'
                                                                className='quali-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, pgBoard: e.target.value })
                                                                }
                                                                id='emp-72' />
                                                            <label htmlFor='emp-72' className='quali-label-fldset-1'>
                                                                Board/University
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='college'
                                                                className='quali-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, pgInstitute: e.target.value })
                                                                }
                                                                id='emp-73' />
                                                            <label htmlFor='emp-73' className='quali-label-fldset-1'>
                                                                Institute/College
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='passingYear'
                                                                className='quali-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, pgPassingYear: e.target.value })
                                                                }
                                                                id='emp-74' />
                                                            <label htmlFor='emp-74' className='quali-label-fldset-1'>
                                                                Passing Year
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='totalMarks' className='quali-text-fldset-1'
                                                                onChange={handleTotalMarksP}
                                                                id='emp-75' />
                                                            <label htmlFor='emp-75' className='quali-label-fldset-1'>
                                                                Total Marks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='obtentMarks' className='quali-text-fldset-1'
                                                                onChange={handleObtentMarksP}
                                                                id='emp-76' />
                                                            <label htmlFor='emp-76' className='quali-label-fldset-1'>
                                                                Obtent Marks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='percentage' className='quali-text-fldset-1'
                                                                id='emp-77'
                                                                value={percentageP}
                                                                onClick={handlePercentageP}
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, pgPercentage: e.target.value })
                                                                } />
                                                            <label htmlFor='emp-77' className='quali-label-fldset-1'>
                                                                Percentage (%)
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='qualification-div'>

                                            <div className='qualification-div-1'>
                                                Other Course
                                            </div>

                                            <div className='qualification-div-2'>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='board'
                                                                className='quali-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, otherBoard: e.target.value })
                                                                }
                                                                id='emp-78' />
                                                            <label htmlFor='emp-78' className='quali-label-fldset-1'>
                                                                Board/University
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='college'
                                                                className='quali-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, otherInstitute: e.target.value })
                                                                }
                                                                id='emp-79' />
                                                            <label htmlFor='emp-79' className='quali-label-fldset-1'>
                                                                Institute/College
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='passingYear'
                                                                className='quali-text-fldset-1'
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, otherPassingYear: e.target.value })
                                                                }
                                                                id='emp-80' />
                                                            <label htmlFor='emp-80' className='quali-label-fldset-1'>
                                                                Passing Year
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='totalMarks' className='quali-text-fldset-1'
                                                                onChange={handleTotalMarksO}
                                                                id='emp-81' />
                                                            <label htmlFor='emp-81' className='quali-label-fldset-1'>
                                                                Total Marks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='obtentMarks' className='quali-text-fldset-1'
                                                                onChange={handleObtentMarksO}
                                                                id='emp-82' />
                                                            <label htmlFor='emp-82' className='quali-label-fldset-1'>
                                                                Obtent Marks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='basic-details-form-26'>
                                                    <div className='quali-body-fldset-1'>
                                                        <div className='quali-form-fldset-1'>
                                                            <input type="text" placeholder=''
                                                                name='percentage' className='quali-text-fldset-1'
                                                                id='emp-83'
                                                                value={percentageO}
                                                                onClick={handlePercentageO}
                                                                onChange={(e) =>
                                                                    setEmployee({ ...employee, otherPercentage: e.target.value })
                                                                } />
                                                            <label htmlFor='emp-83' className='quali-label-fldset-1'>
                                                                Percentage (%)
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='basic-details-form-17'>
                                        <div className='d-flex justify-content-between text-center'>
                                            <div className='basic-details-form-11'
                                                onClick={() => updateToggle(4)}>
                                                Back
                                            </div>
                                            {/* <div className='basic-details-form-10'>
                                                Save
                                            </div> */}
                                            <div className='basic-details-form-11'
                                                onClick={() => updateToggle(6)}>
                                                Next
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className={toggle === 6 ? "show-tab-container" : "tab-container"}>
                            <div className='row row-cols-1 row-cols-md-1'>
                                <div className='col'>

                                    <div className='workExpe-head'>
                                        <div className='qualification-div'>

                                            <div className='qualification-div-1'>
                                                Work Experience
                                            </div>

                                            {/* Dynamic form section start */}

                                            {expList.map((x, i) => (

                                                <div key={i} className='quali-div-main'>


                                                    <div className='qualification-div-2'>
                                                        <div className='basic-details-form-26'>
                                                            {i + 1}.
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="text" placeholder=''
                                                                        name='companyName'
                                                                        className='quali-text-fldset-1'
                                                                        value={x.companyName}
                                                                        onChange={(e) => handleServiceChange(e, i)
                                                                        }
                                                                        id={i + 'a'} />
                                                                    <label htmlFor={i + 'a'} className='quali-label-fldset-1'>
                                                                        Company Name
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="text" placeholder=''
                                                                        name='designation'
                                                                        className='quali-text-fldset-1' value={x.designation}
                                                                        onChange={(e) => handleServiceChange(e, i)}
                                                                        id={i + 'b'} />
                                                                    <label htmlFor={i + 'b'} className='quali-label-fldset-1'>
                                                                        Designation
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="date" placeholder=''
                                                                        name='from'
                                                                        className='quali-text-fldset-1'
                                                                        value={x.from}
                                                                        onChange={(e) => handleServiceChange(e, i)}
                                                                        id={i + 'c'} />
                                                                    <label htmlFor={i + 'c'} className='quali-label-fldset-1'>
                                                                        From
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="date" placeholder=''
                                                                        name='to' className='quali-text-fldset-1'
                                                                        value={x.to}
                                                                        onChange={(e) => handleServiceChange(e, i)}
                                                                        id={i + 'd'} />
                                                                    <label htmlFor={i + 'd'} className='quali-label-fldset-1'>
                                                                        To
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="text" placeholder=''
                                                                        name='duration' className='quali-text-fldset-1'
                                                                        value={x.duration}
                                                                        onChange={(e) => handleServiceChange(e, i)}
                                                                        id={i + 'e'} />
                                                                    <label htmlFor={i + 'e'} className='quali-label-fldset-1'>
                                                                        Duration (In Year)
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            {expList.length > 1 &&
                                                                (
                                                                    <div onClick={() => handleServiceRemove(i)} className='qualification-div-3'>
                                                                        <i className="bi bi-trash-fill" />
                                                                    </div>
                                                                )}

                                                        </div>
                                                    </div>

                                                    <div className='basic-details-form-28'>
                                                        {expList.length - 1 === i &&
                                                            expList.length < 10 &&
                                                            (
                                                                <div className='pb-2'>
                                                                    <div onClick={handleServiceAdd} className='qualification-div-3'>
                                                                        <i className="bi bi-plus-lg" />
                                                                    </div>
                                                                </div>
                                                            )}

                                                    </div>

                                                </div>

                                            ))}

                                        </div>

                                        {/* <div>
                                            <h1>OutPut</h1>
                                            {
                                                expList.map((x, i) => (
                                                    <ul key={i}>
                                                        {i+1} ,
                                                        {x.companyName} ,
                                                        {x.designation} ,
                                                        {x.from} ,
                                                        {x.to} ,
                                                        {x.duration} ,
                                                    </ul>
                                                ))
                                            }
                                        </div> */}

                                    </div>

                                    <div className='basic-details-form-17'>
                                        <div className='d-flex justify-content-between text-center'>
                                            <div className='basic-details-form-11'
                                                onClick={() => updateToggle(5)}>
                                                Back
                                            </div>
                                            {/* <div className='basic-details-form-10'>
                                                Save
                                            </div> */}
                                            <div className='basic-details-form-11'
                                                onClick={() => updateToggle(7)}>
                                                Next
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={toggle === 7 ? "show-tab-container" : "tab-container"}>
                            <div className='row row-cols-1 row-cols-md-3'>
                                <div className='col'>
                                    <div className='basic-details-form'>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-84" placeholder=''
                                                        className='emp-text-fldset-1'
                                                        value={employeeType}
                                                        onChange={changeEmployeeType}>
                                                        <option value="">Employee Type</option>
                                                        {employeeTypes.map((c) => {
                                                            return <option value={c.empTypeName}>{c.empTypeName}</option>;
                                                        })}
                                                    </select>
                                                    <label htmlFor="emp-84" className='emp-label-fldset-1'>
                                                        Employee Type
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-85" placeholder=''
                                                        className='emp-text-fldset-1'
                                                        value={department}
                                                        onChange={changeDepartment}>
                                                        <option value="">Department</option>
                                                        {departments.map((c) => {
                                                            return <option value={c.departmentName}>{c.departmentName}</option>;
                                                        })}
                                                    </select>
                                                    <label htmlFor="emp-85" className='emp-label-fldset-1'>
                                                        Department
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-86" placeholder=''
                                                        className='emp-text-fldset-1'
                                                        value={selectRole}
                                                        onChange={changeSelectRole}>
                                                        <option value="">Select Role</option>
                                                        {selectRoles.map((c) => {
                                                            return <option value={c.roleName}>{c.roleName}</option>;
                                                        })}
                                                    </select>
                                                    <label htmlFor="emp-86" className='emp-label-fldset-1'>
                                                        Select Role
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-87" placeholder=''
                                                        className='emp-text-fldset-1'
                                                        value={selectSkill}
                                                        onChange={changeSelectSkill}>
                                                        <option value="">Select Skills</option>
                                                        {selectSkills.map((c) => {
                                                            return <option value={c.skillName}>{c.skillName}</option>;
                                                        })}
                                                    </select>
                                                    <label htmlFor="emp-87" className='emp-label-fldset-1'>
                                                        Select Skills
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, cardId: e.target.value })
                                                        }
                                                        id='emp-88' />

                                                    <label htmlFor="emp-88" className='emp-label-fldset-1'>
                                                        Card Id
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='basic-details-form'>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-89" placeholder=''
                                                        className='emp-text-fldset-1'
                                                        value={employmentType}
                                                        onChange={changeEmploymentType}>
                                                        <option value="">Employment Type</option>
                                                        {employmentTypes.map((c) => {
                                                            return <option value={c.employmentTypeName}>{c.employmentTypeName}</option>;
                                                        })}
                                                    </select>
                                                    <label htmlFor="emp-89" className='emp-label-fldset-1'>
                                                        Employment Type
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-90" placeholder=''
                                                        className='emp-text-fldset-1'
                                                        value={subDepartment}
                                                        onChange={changeSubDepartment}>
                                                        <option value="">Sub Department</option>
                                                        {subDepartments.map((c) => {
                                                            return <option value={c.subDepName}>{c.subDepName}</option>;
                                                        })}
                                                    </select>
                                                    <label htmlFor="emp-90" className='emp-label-fldset-1'>
                                                        Sub Department
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-91" placeholder=''
                                                        className='emp-text-fldset-1'
                                                        value={grade}
                                                        onChange={changeGrade}>
                                                        <option value="">Grade</option>
                                                        {grades.map((c) => {
                                                            return <option value={c.gradeName}>{c.gradeName}</option>;
                                                        })}
                                                    </select>
                                                    <label htmlFor="emp-91" className='emp-label-fldset-1'>
                                                        Grade
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-92" placeholder=''
                                                        className='emp-text-fldset-1'
                                                        value={shift}
                                                        onChange={changeShift}>
                                                        <option value="">Shift</option>
                                                        {shifts.map((c) => {
                                                            return <option value={c.shiftName}>{c.shiftName}</option>;
                                                        })}
                                                    </select>
                                                    <label htmlFor="emp-92" className='emp-label-fldset-1'>
                                                        Shift
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, offerId: e.target.value })
                                                        }
                                                        id='emp-93' />

                                                    <label htmlFor="emp-93" className='emp-label-fldset-1'>
                                                        Offer Id
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='basic-details-form'>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-94" placeholder=''
                                                        className='emp-text-fldset-1'
                                                        value={designation}
                                                        onChange={changeDesignation}>
                                                        <option value="">Designation</option>
                                                        {designations.map((c) => {
                                                            return <option value={c.desigName}>{c.desigName}</option>;
                                                        })}
                                                    </select>
                                                    <label htmlFor="emp-94" className='emp-label-fldset-1'>
                                                        Designation
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-95" placeholder=''
                                                        className='emp-text-fldset-1'
                                                        value={site}
                                                        onChange={changeSite}>
                                                        <option value="">Site</option>
                                                        {sites.map((c) => {
                                                            return <option value={c.siteName}>{c.siteName}</option>;
                                                        })}
                                                    </select>
                                                    <label htmlFor="emp-95" className='emp-label-fldset-1'>
                                                        Site
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <select name="" id="emp-96" placeholder=''
                                                        className='emp-text-fldset-1'
                                                        value={qualification}
                                                        onChange={changeQualification}>
                                                        <option value="">Highest Qualification</option>
                                                        {qualificatios.map((c) => {
                                                            return <option value={c.qulifName}>{c.qulifName}</option>;
                                                        })}
                                                    </select>
                                                    <label htmlFor="emp-96" className='emp-label-fldset-1'>
                                                        Highest Qualification
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="time" placeholder='' className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, shiftStartTime: e.target.value })
                                                        }
                                                        id='emp-97' />

                                                    <label htmlFor="emp-97" className='emp-label-fldset-1'>
                                                        Shift Start Time
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='permition-select'>
                                <div className='permition-select-1'>
                                    <div className='permition-select-2 me-2'>
                                        <label htmlFor="">
                                            Flexi Hours:
                                        </label>
                                    </div>
                                    <div className=' me-2'>
                                        <input type="radio" id='permi-yes-1' name='permi-left' className='me-2' value='Yes'
                                            onChange={(e) =>
                                                setEmployee({ ...employee, flexiHour: e.target.value })
                                            } />
                                        <label htmlFor="permi-yes-1">Yes</label>
                                    </div>
                                    <div className=' me-2'>
                                        <input type="radio" id='permi-yes-2' name='permi-left' className='me-2' value='No'
                                            onChange={(e) =>
                                                setEmployee({ ...employee, flexiHour: e.target.value })
                                            } />
                                        <label htmlFor="permi-yes-2">No</label>
                                    </div>
                                </div>
                                <div className='permition-select-1'>
                                    <div className='permition-select-2 me-2'>
                                        <label htmlFor="">
                                            Admin Role:
                                        </label>
                                    </div>
                                    <div className=' me-2'>
                                        <input type="radio" id='permi-yes-3' name='permi-right' className='me-2' value='Yes'
                                            onChange={(e) =>
                                                setEmployee({ ...employee, adminRole: e.target.value })
                                            } />
                                        <label htmlFor="permi-yes-3">Yes</label>
                                    </div>
                                    <div className=' me-2'>
                                        <input type="radio" id='permi-yes-4' name='permi-right' className='me-2' value='No'
                                            onChange={(e) =>
                                                setEmployee({ ...employee, adminRole: e.target.value })
                                            } />
                                        <label htmlFor="permi-yes-4">No</label>
                                    </div>
                                </div>
                            </div>
                            <div className='permition-select-3'>
                                <div className='row row-cols-1 row-cols-md-4'>
                                    <div className='col'>
                                        <div className='mb-4 mt-2'>
                                            <input type="checkbox" id='check-1' className='me-2'
                                                value='Allowed OD'
                                                onChange={(e) =>
                                                    setEmployee({ ...employee, allowedOD: e.target.value })
                                                } />
                                            <label htmlFor="check-1">Allowed OD</label>
                                        </div>
                                        <div className=''>
                                            <input type="checkbox" id='check-2' className='me-2'
                                                value='Office Attendance Allowed'
                                                onChange={(e) =>
                                                    setEmployee({ ...employee, officeAttendAlowed: e.target.value })
                                                } />
                                            <label htmlFor="check-2">Office Attendance Allowed</label>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='mb-4 mt-2'>
                                            <input type="checkbox" id='check-3' className='me-2'
                                                value='Auto Attendance Allowed'
                                                onChange={(e) =>
                                                    setEmployee({ ...employee, AutoAttendAlowed: e.target.value })
                                                } />
                                            <label htmlFor="check-3">Auto Attendance Allowed</label>
                                        </div>
                                        <div className=''>
                                            <input type="checkbox" id='check-4' className='me-2'
                                                value='Is MultiShift Enable'
                                                onChange={(e) =>
                                                    setEmployee({ ...employee, isMultiShift: e.target.value })
                                                } />
                                            <label htmlFor="check-4">Is MultiShift Enable</label>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='mb-4 mt-2'>
                                            <input type="checkbox" id='check-5' className='me-2'
                                                value='Work From Home Allowed'
                                                onChange={(e) =>
                                                    setEmployee({ ...employee, workFromHome: e.target.value })
                                                } />
                                            <label htmlFor="check-5">Work From Home Allowed</label>
                                        </div>
                                        <div className=''>
                                            <input type="checkbox" id='check-6' className='me-2'
                                                value='Geofence Auto CheckIn'
                                                onChange={(e) =>
                                                    setEmployee({ ...employee, geoAutoCheckIn: e.target.value })
                                                } />
                                            <label htmlFor="check-6">Geofence Auto CheckIn</label>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='mb-4 mt-2'>
                                            <input type="checkbox" id='check-7' className='me-2'
                                                value='Rotational weekOff Allowed'
                                                onChange={(e) =>
                                                    setEmployee({ ...employee, rotationalweekOff: e.target.value })
                                                } />
                                            <label htmlFor="check-7">Rotational weekOff Allowed</label>
                                        </div>
                                        <div className=''>
                                            <input type="checkbox" id='check-8' className='me-2'
                                                value='Geofence Auto Checkout'
                                                onChange={(e) =>
                                                    setEmployee({ ...employee, geoAutoCheckOut: e.target.value })
                                                } />
                                            <label htmlFor="check-8">Geofence Auto Checkout</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='permition-select-3'>
                                <div className='row row-cols-1 row-cols-md-3'>
                                    <div className='col'>
                                        <div className='permition-details-form-1'>
                                            <div className='ms-1'>
                                                Hindi
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='ms-1'>
                                                English
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='emp-body-fldset-1'>
                                                <div className='emp-form-fldset-1'>
                                                    <input type="text" placeholder='' className='emp-text-fldset-1'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, otherLanguage: e.target.value })
                                                        }
                                                        id='emp-98' />

                                                    <label htmlFor="emp-98" className='emp-label-fldset-1'>
                                                        Other Language
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='permition-details-form-1'>
                                            <div className='d-flex'>
                                                <div>
                                                    <input type="checkbox" id='check-9' className='me-2'
                                                        value='Hindi Read'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, hindiRead: e.target.value })
                                                        } />
                                                    <label htmlFor="check-9">Read</label>
                                                </div>
                                                <div className='ms-3'>
                                                    <input type="checkbox" id='check-10' className='me-2'
                                                        value='Hindi Write'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, hindiWrite: e.target.value })
                                                        } />
                                                    <label htmlFor="check-10">Write</label>
                                                </div>
                                                <div className='ms-3'>
                                                    <input type="checkbox" id='check-11' className='me-2'
                                                        value='Hindi Speak'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, hindiSpeak: e.target.value })
                                                        } />
                                                    <label htmlFor="check-11">Speak</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='d-flex'>
                                                <div>
                                                    <input type="checkbox" id='check-12' className='me-2'
                                                        value='English Read'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, englishRead: e.target.value })
                                                        } />
                                                    <label htmlFor="check-12">Read</label>
                                                </div>
                                                <div className='ms-3'>
                                                    <input type="checkbox" id='check-13' className='me-2'
                                                        value='English Write'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, englishWrite: e.target.value })
                                                        } />
                                                    <label htmlFor="check-13">Write</label>
                                                </div>
                                                <div className='ms-3'>
                                                    <input type="checkbox" id='check-14' className='me-2'
                                                        value='English Speak'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, englishSpeak: e.target.value })
                                                        } />
                                                    <label htmlFor="check-14">Speak</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='permition-details-form-1'>
                                            <div className='d-flex'>
                                                <div>
                                                    <input type="checkbox" id='check-15' className='me-2'
                                                        value='Other Language Read'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, otherLangRead: e.target.value })
                                                        } />
                                                    <label htmlFor="check-15">Read</label>
                                                </div>
                                                <div className='ms-3'>
                                                    <input type="checkbox" id='check-16' className='me-2'
                                                        value='Other Language Write'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, otherLangWrite: e.target.value })
                                                        } />
                                                    <label htmlFor="check-16">Write</label>
                                                </div>
                                                <div className='ms-3'>
                                                    <input type="checkbox" id='check-17' className='me-2'
                                                        value='Other Language Speak'
                                                        onChange={(e) =>
                                                            setEmployee({ ...employee, otherLangSpeak: e.target.value })
                                                        } />
                                                    <label htmlFor="check-17">Speak</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='basic-details-form-17'>
                                <div className='d-flex justify-content-between text-center'>
                                    <div className='basic-details-form-11'
                                        onClick={() => updateToggle(6)}>
                                        Back
                                    </div>
                                    {/* <div className='basic-details-form-10'>
                                        Save
                                    </div> */}
                                    <div className='basic-details-form-11'
                                        onClick={() => updateToggle(8)}>
                                        Next
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={toggle === 8 ? "show-tab-container" : "tab-container"}>
                            <div className='row row-cols-1 row-cols-md-1'>
                                <div className='col'>

                                    <div className='workExpe-head'>
                                        <div className='qualification-div'>

                                            <div className='qualification-div-1'>
                                                Family Details
                                            </div>

                                            {/* Dynamic form section start */}

                                            {familyList.map((y, j) => (

                                                <div key={j} className='quali-div-main'>


                                                    <div className='qualification-div-2'>
                                                        <div className='basic-details-form-26'>
                                                            {j + 1}.
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="text" placeholder=''
                                                                        name='relationName'
                                                                        className='quali-text-fldset-1'
                                                                        value={y.relationName}
                                                                        onChange={(e) => handleFamilyServiceChange(e, j)}
                                                                        id={j + 'a1'} />
                                                                    <label htmlFor={j + 'a1'} className='quali-label-fldset-1'>
                                                                        Realation Name
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="text" placeholder=''
                                                                        name='realtionType'
                                                                        className='quali-text-fldset-1' value={y.realtionType}
                                                                        onChange={(e) => handleFamilyServiceChange(e, j)}
                                                                        id={j + 'b1'} />
                                                                    <label htmlFor={j + 'b1'} className='quali-label-fldset-1'>
                                                                        Relation Type
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="text" placeholder=''
                                                                        name='relationPhone'
                                                                        className='quali-text-fldset-1'
                                                                        value={y.relationPhone}
                                                                        onChange={(e) => handleFamilyServiceChange(e, j)}
                                                                        id={j + 'c1'} />
                                                                    <label htmlFor={j + 'c1'} className='quali-label-fldset-1'>
                                                                        Phone No.
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="date" placeholder=''
                                                                        name='relationDOB' className='quali-text-fldset-1'
                                                                        value={y.relationDOB}
                                                                        onChange={(e) => handleFamilyServiceChange(e, j)}
                                                                        id={j + 'd1'} />
                                                                    <label htmlFor={j + 'd1'} className='quali-label-fldset-1'>
                                                                        Date of Birth
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            {familyList.length > 1 &&
                                                                (
                                                                    <div onClick={() => handleFamilyServiceRemove(j)} className='qualification-div-3'>
                                                                        <i className="bi bi-trash-fill" />
                                                                    </div>
                                                                )}

                                                        </div>
                                                    </div>

                                                    <div className='basic-details-form-28'>
                                                        {familyList.length - 1 === j &&
                                                            familyList.length < 10 &&
                                                            (
                                                                <div className='pb-2'>
                                                                    <div onClick={handleFamilyServiceAdd} className='qualification-div-3'>
                                                                        <i className="bi bi-plus-lg" />
                                                                    </div>
                                                                </div>
                                                            )}

                                                    </div>

                                                </div>

                                            ))}

                                        </div>

                                        {/* <div>
                                            <h1>OutPut</h1>
                                            {
                                                expList.map((x, i) => (
                                                    <ul key={i}>
                                                        {i+1} ,
                                                        {x.companyName} ,
                                                        {x.designation} ,
                                                        {x.from} ,
                                                        {x.to} ,
                                                        {x.duration} ,
                                                    </ul>
                                                ))
                                            }
                                        </div>
                                        <div>
                                            <h1>OutPut</h1>
                                            {
                                                familyList.map((y, j) => (
                                                    <ul key={j}>
                                                        {j+1} ,
                                                        {y.relationName} ,
                                                        {y.realtionType} ,
                                                        {y.relationPhone} ,
                                                        {y.relationDOB} 
                                                    </ul>
                                                ))
                                            }
                                        </div> */}

                                    </div>

                                    <div className='basic-details-form-17'>
                                        <div className='d-flex justify-content-between text-center'>
                                            <div className='basic-details-form-11'
                                                onClick={() => updateToggle(7)}>
                                                Back
                                            </div>
                                            {/* <div className='basic-details-form-10'>
                                                Save
                                            </div> */}
                                            <div className='basic-details-form-11'
                                                onClick={() => updateToggle(9)}>
                                                Next
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={toggle === 9 ? "show-tab-container" : "tab-container"}>
                            <div className='row row-cols-1 row-cols-md-1'>
                                <div className='col'>

                                    <div className='workExpe-head'>
                                        <div className='qualification-div'>

                                            <div className='qualification-div-1'>
                                                Asset Allocation
                                            </div>

                                            {/* Dynamic form section start */}

                                            {assetList.map((z, k) => (

                                                <div key={k} className='quali-div-main'>


                                                    <div className='qualification-div-2'>
                                                        <div className='basic-details-form-26'>
                                                            {k + 1}.
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="text" placeholder=''
                                                                        name='assetName'
                                                                        className='quali-text-fldset-1'
                                                                        value={z.assetName}
                                                                        onChange={(e) => handleAssetServiceChange(e, k)}
                                                                        id={k + 'a2'} />
                                                                    <label htmlFor={k + 'a2'} className='quali-label-fldset-1'>
                                                                        Asset Name
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="text" placeholder=''
                                                                        name='assetModel'
                                                                        className='quali-text-fldset-1' value={z.assetModel}
                                                                        onChange={(e) => handleAssetServiceChange(e, k)}
                                                                        id={k + 'b2'} />
                                                                    <label htmlFor={k + 'b2'} className='quali-label-fldset-1'>
                                                                        Model No.
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="text" placeholder=''
                                                                        name='assetSerial'
                                                                        className='quali-text-fldset-1'
                                                                        value={z.assetSerial}
                                                                        onChange={(e) => handleAssetServiceChange(e, k)}
                                                                        id={k + 'c2'} />
                                                                    <label htmlFor={k + 'c2'} className='quali-label-fldset-1'>
                                                                        Serial No.
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            <div className='quali-body-fldset-1'>
                                                                <div className='quali-form-fldset-1'>
                                                                    <input type="date" placeholder=''
                                                                        name='assetDOA' className='quali-text-fldset-1'
                                                                        value={z.assetDOA}
                                                                        onChange={(e) => handleAssetServiceChange(e, k)}
                                                                        id={k + 'd2'} />
                                                                    <label htmlFor={k + 'd2'} className='quali-label-fldset-1'>
                                                                        Date of Allocation
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='basic-details-form-26'>
                                                            {assetList.length > 1 &&
                                                                (
                                                                    <div onClick={() => handleAssetServiceRemove(k)} className='qualification-div-3'>
                                                                        <i className="bi bi-trash-fill" />
                                                                    </div>
                                                                )}

                                                        </div>
                                                    </div>

                                                    <div className='basic-details-form-28'>
                                                        {assetList.length - 1 === k &&
                                                            assetList.length < 10 &&
                                                            (
                                                                <div className='pb-2'>
                                                                    <div onClick={handleAssetServiceAdd} className='qualification-div-3'>
                                                                        <i className="bi bi-plus-lg" />
                                                                    </div>
                                                                </div>
                                                            )}

                                                    </div>

                                                </div>

                                            ))}

                                        </div>

                                        {/* <div>
                                            <h1>OutPut</h1>
                                            {
                                                expList.map((x, i) => (
                                                    <ul key={i}>
                                                        {i+1} ,
                                                        {x.companyName} ,
                                                        {x.designation} ,
                                                        {x.from} ,
                                                        {x.to} ,
                                                        {x.duration} ,
                                                    </ul>
                                                ))
                                            }
                                        </div>
                                        <div>
                                            <h1>OutPut</h1>
                                            {
                                                familyList.map((y, j) => (
                                                    <ul key={j}>
                                                        {j+1} ,
                                                        {y.relationName} ,
                                                        {y.realtionType} ,
                                                        {y.relationPhone} ,
                                                        {y.relationDOB} 
                                                    </ul>
                                                ))
                                            }
                                        </div> */}

                                    </div>

                                    <div className='basic-details-form-17'>
                                        <div className='d-flex justify-content-between text-center'>
                                            <div className='basic-details-form-11'
                                                onClick={() => updateToggle(8)}>
                                                Back
                                            </div>
                                            {/* <div className='basic-details-form-10'>
                                                Save
                                            </div> */}
                                            <div className='basic-details-form-11'
                                                onClick={() => updateToggle(10)}>
                                                Next
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={toggle === 10 ? "show-tab-container" : "tab-container"}>
                            <div className='row row-cols-1 row-cols-md-1'>
                                <div className='col'>
                                    <div className='workExpe-head'>
                                        <div className='document-div'>

                                            <div className='document-div-1'>
                                                <div>
                                                    10th Certificate
                                                </div>
                                                <div>
                                                    <div className='btn-document-upload'>
                                                        <input type="file"
                                                            onChange={(e) =>
                                                                setEmployee({ ...employee, certifiMatric: e.target.value })
                                                            } />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='document-div-1'>
                                                <div>
                                                    12th Certificate
                                                </div>
                                                <div>
                                                    <div className='btn-document-upload'>
                                                        <input type="file"
                                                            onChange={(e) =>
                                                                setEmployee({ ...employee, certifiInter: e.target.value })
                                                            } />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='document-div-1'>
                                                <div>
                                                    Graduation
                                                </div>
                                                <div>
                                                    <div className='btn-document-upload'>
                                                        <input type="file"
                                                            onChange={(e) =>
                                                                setEmployee({ ...employee, certifiGraduation: e.target.value })
                                                            } />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='document-div-1'>
                                                <div>
                                                    Post Graduation
                                                </div>
                                                <div>
                                                    <div className='btn-document-upload'>
                                                        <input type="file"
                                                            onChange={(e) =>
                                                                setEmployee({ ...employee, certifiPg: e.target.value })
                                                            } />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='document-div-1'>
                                                <div>
                                                    Other Course
                                                </div>
                                                <div>
                                                    <div className='btn-document-upload'>
                                                        <input type="file"
                                                            onChange={(e) =>
                                                                setEmployee({ ...employee, certifiother: e.target.value })
                                                            } />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='basic-details-form-17'>
                                        <div className='d-flex justify-content-between text-center'>
                                            <div className='basic-details-form-11'
                                                onClick={() => updateToggle(9)}>
                                                Back
                                            </div>
                                            {/* <div className='basic-details-form-10'>
                                                Submit
                                            </div> */}
                                            <div>
                                                <button type="submit" className='submit-button-style'>
                                                    Submit
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditEmployeeIndivisual