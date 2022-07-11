// string to number
// 'hello'.getleng => for i < leng => str.character(i+4) push var => arr

function rot13(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    const asci = str[i].charCodeAt()
    if (asci >= 65 && asci <= 77) {
      result += String.fromCharCode(asci + 13)
    } else if (asci >= 78 && asci <= 90) {
      result += String.fromCharCode(asci - 13)
    } else {
      result += str[i]
    }
  }
  console.log(result)
  return result
}

rot13('SERR PBQR PNZC')
