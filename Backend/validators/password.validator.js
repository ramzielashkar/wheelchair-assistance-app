const passwordValidator = require('password-validator');

const passwordSchema = new passwordValidator();

passwordSchema.is().min(8)
.is().max(50)
.has().uppercase()
.has().lowercase()
.has().digits(2) 
.has().not().spaces()  

module.exports = passwordSchema 