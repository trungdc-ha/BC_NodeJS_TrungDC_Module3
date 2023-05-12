function findMax(arr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Array.isArray(arr)) {
                const result = arr.reduce((max, value) => {
                    if (value > max) {
                        max = value
                    }
                    return max
                })
                resolve('Max in Array: ' + result)
            } else {
                reject('Please please pass in array.')
            }
        }, 2000)
    })
}

async function main(arr) {
    try {
        let req = await findMax(arr);
        console.log('OK', req)
    } catch (e) {
        console.log('Error', e)
    }
}

main([1, 3, 4, 7, 4, 9])
main('abc')
