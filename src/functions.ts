
export function callApi(url: string, cb: Function) {
    setTimeout(() => {
        cb('got url:' + url, null);
    }, 2000);
}

export function callApiPromise(url: string) {
    return new Promise<string>((resolve, reject) => {

        /*if (url == 'www.bing.com') {
            reject(new Error('bad url'));
        }*/

        callApi(url, (result: string, error: Error) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        })
        setTimeout(() => {
            reject(new Error('timed out'))
        }, 10000);

    })
}

export function makeCalls() {
    return callApiPromise('www.google.com')
        .then((result) => {
            console.log('got promise result:', result);
            throw new Error('Boom!');
            // return callApiPromise('www.bing.com');
        })
        .then((result) => {
            console.log('got second result:', result);
            return 22;
        })
        .then((value: any) => {
            console.log(value);
            return value;
        })
        .catch((err) => {
            console.log('err here');
            return 'ERROR HAPPENED';
        })
}