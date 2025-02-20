import http from "./axios";

export const mentaurantAxios = {
    loginAxios: async (email: any, password: any) => {
        let url = 'http://localhost:8080/api/signin';
        const response = await Method.dataPostWIthOutToken(url, { email, password });
        console.log(response, "responseData");
        return response;
    }
}


const Method = {
    async sessionEnd() {
        try {
            localStorage.clear();
            window.location.replace('/');
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    },
    // not in use
    // async refreshToken() {
    //     const refreshTokenUrl = '/refreshToken';
    //     const refreshTokenBody = { refreshToken: getRefreshAuthToken() };
    //     try {
    //         const response: any = await http.post(refreshTokenUrl, refreshTokenBody, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Access-Control-Allow-Origin": "*",
    //             },
    //         });
    //         if (response.status === 200) {
    //             setAuthToken(response?.headers?.["auth"]);
    //             refreshQueue.forEach(({ resolve, reject, config }:any) => {
    //                 config.headers['Auth'] = getAuthToken();
    //                 http.request(config)
    //                     .then(resolve)
    //                     .catch(reject);
    //             });
    //             refreshQueue = [];
    //             return Promise.resolve();
    //         }
    //     } catch (error) {
    //         refreshQueue.forEach(({ reject }:any) => reject(error));
    //         refreshQueue = [];
    //         Method.sessionLogOut()
    //         return Promise.reject(error);
    //     }
    // },

  

    async handleResponse(result:any, resolve:any, reject:any) {
        if (result.status === 200) {
            return resolve({
                status: 1,
                result: result,
            });
        } else if (result.status === 212) {
            return resolve({
                status: 4,
                result: result,
            });
        } else if (result.status !== 200) {
            return reject({
                status: 5,
                result: result
            });
        } else {
            if (result) {
                return reject({
                    status: 3,
                    error: result.data.message,
                });
            } else {
                return reject({
                    status: 4,
                    error: "Something went wrong.",
                });
            }
        }
    },

    async handleError(err:any,resolve:any, reject:any) {
        if (err.response) {
            if (err.response.status !== null && err.response.status !== undefined) {
                if (err.response.status === 401) {
                    return reject({
                        status: err.response.status, // You can set appropriate status code for network errors
                        error: err,
                        response: err.response
                    });
                } else if (err.response.status === 400) {

                    if(err.response.data.message === 'Incorrect OTP'){
                        return reject({
                            status: 6,
                            error: err,
                            response: err.response
                        });
                    }else {
                        return reject({
                            status: 11,
                            error: err,
                            response: err.response
                        });
                    }
                   
                } else if(err.response.status === 502){
                    return reject({
                        status: err.response.status, // You can set appropriate status code for network errors
                        error: err,
                        response: err.response
                       
                    });
                }
                else if (err.response.status !== 200) {
                    return reject({
                        status: 7,
                        error: err,
                        response: err.response
                    });
                } else {
                    return reject({
                        status: 5,
                        error: err,
                    });
                }
            }
        } else {
            return reject({
                status: 10,
                error: err,
            });
        }
    },

    async dataPostWIthOutToken(newurl: any, body: any) {
        const url = newurl;
        return await new Promise((resolve, reject) => {
            http
                .post(url, body, {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                })

                .then((result) => {
                    Method.handleResponse(result, resolve, reject)
                })
                .catch((err:any) => {
                    Method.handleError(err,resolve, reject)
                });
        });
    },

    async formDataPostWIthOutToken(newurl: any, body: any) {
        const url = newurl;
        return await new Promise((resolve, reject) => {
            http
                .post(url, body, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Access-Control-Allow-Origin": "*",
                    },
                })

                .then((result) => {
                    Method.handleResponse(result, resolve, reject)
                })
                .catch((err:any) => {
                    Method.handleError(err,resolve, reject)
                });
        });
    },

    async dataPost(newurl: any, body: any) {
        const url = newurl;
        return await new Promise((resolve, reject) => {
            http
                .post(url, body, {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        // "Auth": getAuthToken(),
                        // "Session-Token": getSessionToken()
                    },
                })

                .then((result) => {
                    Method.handleResponse(result, resolve, reject)
                })
                .catch((err:any) => {
                    Method.handleError(err,resolve, reject)
                });
        });
    },

    async formDataPost(newurl: any, body: any) {
        const url = newurl;
        return await new Promise((resolve, reject) => {
            http
                .post(url, body, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Access-Control-Allow-Origin": "*",
                        // "Auth": getAuthToken(),
                        // "Session-Token": getSessionToken()
                    },
                })

                .then((result) => {
                    Method.handleResponse(result, resolve, reject)
                })
                .catch((err:any) => {
                    Method.handleError(err,resolve, reject)
                });
        });
    },

    async dataPut(newurl: any, body: any) {
        const url = newurl;
        return await new Promise((resolve, reject) => {
            http
                .put(url, body, {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        // "Auth": getAuthToken(),
                        // "Session-Token": getSessionToken()
                    },
                })

                .then((result) => {
                    Method.handleResponse(result, resolve, reject)
                })
                .catch((err:any) => {
                    Method.handleError(err,resolve, reject)
                });
        });
    },

    async dataGet(newurl: any) {
        const url = newurl;
        return await new Promise((resolve, reject) => {
            http
                .get(url, {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        // "Auth": getAuthToken(),
                        // "Session-Token": getSessionToken()
                    },
                })

                .then((result) => {
                    Method.handleResponse(result, resolve, reject)
                })
                .catch((err:any) => {
                    Method.handleError(err,resolve, reject)
                });
        });
    },
}
