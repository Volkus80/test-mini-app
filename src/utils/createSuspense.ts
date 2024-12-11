

export const createSuspense = <T>(promise: Promise<T>) => {
    let result:T, err:Error;
    promise.then(res => {
        console.log(res)
       result = res
    }).catch(e => err = e)

    return {
        read() {
        console.log("result = ", result)
        if (result) return result;
        console.log("err = ", err)
        if (err) throw err;
        console.log("promise = ", promise)
        throw promise;
        }
    }
}