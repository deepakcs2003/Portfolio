const backendURL="http://localhost:5000/api/v1"

const summaryApi={
    add: {
        url: `${backendURL}/add`,
        method: "post",
    },
    get: {
        url: `${backendURL}/get`,
        method: "get",
    },
    
    like: {
        url: `${backendURL}/like`,
        method: "post",
    },
    contact: {
        url: `${backendURL}/contact`,
        method: "post",
    },
}

export default summaryApi;