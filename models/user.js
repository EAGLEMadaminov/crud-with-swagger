const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    universityName: { type: String, required: true },
    entranceYear: { type: String, required: true },
    graduationYear: { type: String, required: true },
    faculty: { type: String, required: true },
    speciality: { type: String, required: true },
    studyType: { type: String, required: true },
    academicType: { type: String, required: true },
    diplomaRegistrationNumber: { type: String, required: true },
    givenDate: { type: String, required: true },
    academicLevel: { type: String, required: true },
    appendixNumber: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    Data: { type: Date, default: Date.now() },
    role: { type: String, enum: ['admin', 'moderator', 'user'], default: 'user' },
    avatar: { type: String },
    rating: { type: Number, default: 0 },
    info: { type: String }
})

module.exports = mongoose.model('User', UserSchema);