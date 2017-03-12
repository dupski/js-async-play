
import * as f from './functions';


async function doAsyncStuff() {

    try {
        let result1 = await f.callApiPromise('www.google.com');
        console.log('got promise result:', result1);
        let result2 = await f.callApiPromise('www.bing.com');
        console.log('got second result:', result2);
        return result1 + result2;
    }
    catch (e) {
        console.log('ERR', e);
    }
}

Promise.all([
    doAsyncStuff(),
    f.callApiPromise('www.google.com22'),
    f.callApiPromise('www.google.com33')
])
.then((results) => {
    console.log(results);
})

console.log('Got Here');
