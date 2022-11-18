export const passwordValidator = (password)=>{
     //regex for valid password
     const validPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");   
     if (!validPassword.test(password)) {
        return false
    }
    return true
}