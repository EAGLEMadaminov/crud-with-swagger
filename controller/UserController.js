const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

/* 
    function: Register User
    url: api/user/register
    type : Public
    Method: POST
*/
exports.register = async (req, res, next) => {

    const salt = await bcrypt.genSaltSync(12);
    const password = await bcrypt.hashSync(req.body.password, salt)
    const user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        universityName: req.body.universityName,
        entranceYear: req.body.entranceYear,
        graduationYear: req.body.graduationYear,
        faculty: req.body.faculty,
        speciality: req.body.speciality,
        studyType: req.body.studyType,
        academicType: req.body.academicType,
        diplomaSerial: req.body.diplomaSerial,
        diplomaRegistrationNumber: req.body.diplomaRegistrationNumber,
        givenDate: req.body.givenDate,
        academicLevel: req.body.academicLevel,
        appendixNumber: req.body.appendixNumber,
        password: password
    })
    user.save()
        .then(() => {
            res.status(201).json({
                success: true,
                data: user
            })
        })
        .catch((error) => {
            res.status(400).json({
                success: false,
                data: error
            })
        })
}

/*
  function : Get and sea all User
  url:getAllUser
  type:Public
  Method: Get
*/
exports.gettAllUser = async (req, res) => {
    const user = await User.find()

    res.status(201).json({
        success: true,
        data: user
    })
}
/* 
    function: Login User
    url: api/user/register
    type : Public
    Method: POST
*/
exports.login = async (req, res, next) => {
    await User.findOne({ email: req.body.email }, (error, user) => {
        if (error) {
            res.send(error)
        } else {
            if (!user) {
                res.status(404).json({
                    success: false,
                    data: "User not found"
                });
            }
            else {
                if (!bcrypt.compareSync(req.body.password, user.password)) {
                    res.status(401).json({
                        success: false,
                        data: "Invalid password"
                    })
                }
                else {
                    let payload = { subject: user_id }
                    let token = jwt.sign(payload, config.JWT_SECRET)
                    res.status(200).json({
                        token
                    })
                }
            }
        }
    })
}
/*
  function : Get and sea user by id
  url:id
  type:Public
  Method: Get
*/
exports.getUserById = async (req, res) => {
    const user = await User.findById(req.params.id)
    res.status(200).json({
        success: true,
        data: user
    })
}
/*
  function : Delete user by id
  url:id
  type:Public
  Method: delete
*/
exports.deleteUserById = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success: true,
        data: []
    })
}
/*
  function : Update user by id
  url:id
  type:Public
  Method: put
*/
exports.updateUerById = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id)
    user.fullName = req.body.fullName
    user.email = req.body.email
    user.universityName = req.body.universityName,
        user.entranceYear = req.body.entranceYear,
        user.graduationYear = req.body.graduationYear,
        user.faculty = req.body.faculty,
        user.speciality = req.body.speciality,
        user.studyType = req.body.studyType,
        user.academicType = req.body.academicType,
        user.diplomaSerial = req.body.diplomaSerial,
        user.diplomaRegistrationNumber = req.body.diplomaRegistrationNumber,
        user.givenDate = req.body.givenDate,
        user.academicLevel = req.body.academicLevel,
        user.appendixNumber = req.body.appendixNumber,
        user.password = req.body.password

    user.save()
        .then(() => {
            res.status(200).json({
                success: true,
                data: user
            })
        })
        .catch((error) => {
            res.status(400).json({
                success: false,
                data: error
            })
        })
}