export const validateEmail = (email)=>{
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isError = !isValidEmail ? "Invalid Email" : null
    return isError
}

export const validatePassword = (password)=>{
    const isValidEmail = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test([password])
    const isError = !isValidEmail ? "Invalid password" : null
    return isError
}