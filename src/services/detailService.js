/**
 * 评价页面的数据请求
 */

export default {
    getDetailListData() {
        return new Promise((resolve, reject) => {
            fetch('/data/detail.json')
                .then((result) => {
                    if (result.ok) {
                        return result.json()
                    } else {
                        
                    }
                })
                .then((data) => {
                    resolve(data)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}