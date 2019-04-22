import jsonp from 'jsonp'

class API {
    get(url) {
        return new Promise((resolve, reject) => {
            jsonp(`https://api.douban.com${url}`, null, (err, data) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('触发了')
                    // console.log('resolve data', data)
                    resolve(data)
                }
            })
        })
    
    }
    getMobile(url) {
        return new Promise((resolve, reject) => {
            jsonp(`https://m.douban.com${url}`, null, (err, data) => {
                if (err) {
                    console.error(err);
                } else {
                    // console.log('resolve data', data)
                    resolve(data)
                }
            })
        })
    }
}

export default new API()



