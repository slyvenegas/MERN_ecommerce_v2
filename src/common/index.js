const backendDomin = "http://localhost:8080"

const SummaryApi = {
    signUp : {
        url : `${backendDomin}/api/signup`,
        method : "POST"
    },
    signIn : {
        url : `${backendDomin}/api/signin`,
        method : "POST"
    },
    current_user : {
        url : `${backendDomin}/api/user-details`,
        method : "GET"
    },
    logout_user : {
        url : `${backendDomin}/api/userLogout`,
        method : "GET"
    },
    allUser : {
        url : `${backendDomin}/api/all-users`,
        method : "GET"
    },
    updateUser : {
        url : `${backendDomin}/api/update-user`,
        method : "POST"
    },
}

export default SummaryApi

