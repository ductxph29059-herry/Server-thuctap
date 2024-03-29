const db = require('./db');
const nguoiDungSchema = new db.mongodb.Schema(
    {
        username: { type: String , required: true},
        email: {type: String, required: true},
        password:{type: String , required: true},
        fullname:{type: String , required: true},
        isAdmin:{type: Boolean , required: true},
        trangThai:{type: Boolean, required: true}
    }, { collection: 'NguoiDung'}
);
let nguoiDungModel = db.mongodb.model ('nguoiDungModel', nguoiDungSchema );
module.exports = {nguoiDungModel}