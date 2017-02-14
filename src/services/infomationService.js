/**
 * 个人信息数据请求
 */
export default {
    getInfomationData() {
        return new Promise((resolve, reject) => {
            fetch('/data/infomation.json')
                .then(result => {
                    if(result.ok){
                        return result.json()
                    }else{

                    }
                })
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}