type UserDataRegisterController = {
    email: string | undefined,
    firstName: string | undefined,
    lastName: string | undefined,
    phone: string | undefined,
    password: string | undefined,
    repass: string | undefined
}

type UserDataRegisterService = {
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    hashedPassword: string,
}



type UserDataLoginController = {
    email: string | undefined,
    password: string | undefined,
}

type UserDataLoginService = {
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    hashedPassword: string,

}

type ErrorResponse = {
    message: string;
}


export { UserDataRegisterController, UserDataRegisterService, UserDataLoginController, UserDataLoginService, ErrorResponse };