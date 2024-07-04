const backendDomain = "http://localhost:8080";

const SummaryApi = {
    signUp: {
        url: `${backendDomain}/api/signup`,
        method: "POST"
    },
    signIn: {
        url: `${backendDomain}/api/signin`,
        method: "POST"
    },
    current_user: {
        url: `${backendDomain}/api/user-details`,
        method: "GET"
    },
    logout_user: {
        url: `${backendDomain}/api/userLogout`,
        method: "GET"
    },
    allUser: {
        url: `${backendDomain}/api/all-users`,
        method: "GET"
    },
    updateUser: {
        url: `${backendDomain}/api/update-user`,
        method: "POST"
    },
    uploadProduct: {
        url: `${backendDomain}/api/upload-product`,
        method: 'post'
    },
    allProduct: {
        url: `${backendDomain}/api/get-product`,
        method: 'get'
    },
    updateProduct : {
        url: `${backendDomain}/api/update-product`,
        method: 'post'
    }
};

export default SummaryApi;
