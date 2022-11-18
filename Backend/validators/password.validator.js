const passwordValidator = require('password-validator');

const passwordSchema = new passwordValidator();

passwordSchema.is().min(8)
.is().max(50)
.has().uppercase()
.has().lowercase()
.has().digits(1) 

module.exports = passwordSchema 