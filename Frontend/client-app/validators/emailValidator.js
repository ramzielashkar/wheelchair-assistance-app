import {validate} from 'react-email-validator'
export const emailValidator = (email)=>{
    if (!validate(email)) {
        console.log(email)
        return false
    }
    return true
}