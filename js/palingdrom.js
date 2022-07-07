const palindrome = (str) => {
  const del = str.toLowerCase().replace(/[\s]|[\W]|[_]/gm, '')
  const toArr = del.split('')
  const reverse = toArr.reverse().join('')
  console.log(reverse)
  console.log(del)
  if (reverse === del) {
    return true
  }
  return false
}
const result = palindrome('1 eye for of 1 eye.')
console.log(result)
