module.exports = function check(str, bracketsConfig) {
    let bracketsArray = [];
    let strArray = str.split("");
    let newArray = [];
    bracketsConfig.forEach(item => {
        bracketsArray.push(item[0] + item[1])
    })
    for (let i = 0; i < str.length; i++) {
        newArray.push(str[i])
        bracketsArray.forEach(item => {
            if ((newArray[newArray.length - 2] + newArray[newArray.length - 1]) == item) {
                newArray = newArray.slice(0, -2)
            }
        })
    }
    if (newArray.length == 0) {
        return true
    }
    else {
        return false
    }
}
