function telephoneCheck(str) {
  const cekKurung1 = /[\(]/gm.test(str)
  const cekKurung2 = /[\)]/gm.test(str)
  const cekAwal = /\(.....*\)|^-|-\d\d-/.test(str)
  console.log(cekAwal)
  if (cekKurung2 !== cekKurung1 | cekAwal) return false
  const sisakanAngka = str.replace(/[-]|[\s]|[\(]|[\)]/gm,'')
  const cekSymbol = /[\W]|[\s]|[a-z]|[A-Z]/gm.test(sisakanAngka)
  const lengthAngka = sisakanAngka.split('').length
  if (cekSymbol==true || lengthAngka > 11 || lengthAngka < 10 || lengthAngka == 11 && sisakanAngka.slice(-11,-10) !== '1') return false
  return true
}
console.log(telephoneCheck("1 555-555-5555"))
// console.log('should return a boolean')
// console.log(telephoneCheck("1 555-555-5555"))
// console.log('should return true')
// console.log(telephoneCheck("1 (555) 555-5555"))
// console.log('should return true')
// console.log(telephoneCheck("5555555555"))
// console.log('should return true')
// console.log(telephoneCheck("555-555-5555"))
// console.log('should return true')
// console.log(telephoneCheck("(555)555-5555"))
// console.log('should return true')
// console.log(telephoneCheck("1(555)555-5555"))
// console.log('should return true')
// console.log(telephoneCheck("555-5555"))
// console.log('should return false')
// console.log(telephoneCheck("5555555"))
// console.log('should return false')
// console.log(telephoneCheck("1 555)555-5555"))
// console.log('should return false')
// console.log(telephoneCheck("1 555 555 5555"))
// console.log('should return true')
// console.log(telephoneCheck("1 456 789 4444"))
// console.log('should return true')
// console.log(telephoneCheck("123**&!!asdf#"))
// console.log('should return false')
// console.log(telephoneCheck("55555555"))
// console.log('should return false')
// console.log(telephoneCheck("(6054756961)"))
// console.log('should return false')
// console.log(telephoneCheck("2 (757) 622-7382"))
// console.log('should return false')
// console.log(telephoneCheck("0 (757) 622-7382"))
// console.log('should return false')
// console.log(telephoneCheck("-1 (757) 622-7382"))
// console.log('should return false')
// console.log(telephoneCheck("2 757 622-7382"))
// console.log('should return false')
// console.log(telephoneCheck("10 (757) 622-7382"))
// console.log('should return false')
// console.log(telephoneCheck("27576227382"))
// console.log('should return false')
// console.log(telephoneCheck("(275)76227382"))
// console.log('should return false')
// console.log(telephoneCheck("2(757)6227382"))
// console.log('should return false')
// console.log(telephoneCheck("2(757)622-7382"))
// console.log('should return false')
// console.log(telephoneCheck("555)-555-5555"))
// console.log('should return false')
// console.log(telephoneCheck("(555-555-5555"))
// console.log('should return false')
// console.log(telephoneCheck("(555)5(55?)-5555"))
// console.log('should return false')
// console.log(telephoneCheck("55 55-55-555-5"))
// console.log('should return false')
// console.log(telephoneCheck("11 555-555-5555"))
// console.log('should return false.')
