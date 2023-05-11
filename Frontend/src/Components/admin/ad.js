export default function Validation(values) {
    const errors = {}

    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.password === "Nurjabalkatcenter1!"){
        errors.password = 'Password Benar'
    }else {
        errors.password = 'Password Salah'
    }

    return errors
    
}