function byCar(money) {
    return new Promise((resolve, reject) => {
        if (money > 1000) {
            setTimeout(() => {
                resolve("You have new car ^_^");
            }, 1000)
        } else {
            reject("You don't have enough money ~>_<~")
        }
    })
}

byCar(5000)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })

