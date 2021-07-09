function cesar (string) {
    let splitedString = string.split("")
    let reversedString = splitedString.reverse()
    let jointString = reversedString.join("")
    return jointString
}

module.exports = cesar