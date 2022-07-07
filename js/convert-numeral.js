// satuan : ['I','II','III','IV','V','VI','VII','VIII','IX']
// puluhan : ['x','xx','xxx','xl','l','LX','LXX','LXXX','XC']
// ratusan : ['C','CC','CCC','CD','D','DC','DCC','DCCC','CM']
// ribuan : ['M','MM','MMM','MV','V']
const arrSatuan = ['I','II','III','IV','V','VI','VII','VIII','IX']
const arrPuluhan =['X','XX','XXX','XL','L','LX','LXX','LXXX','XC'] 
const arrRatusan =['C','CC','CCC','CD','D','DC','DCC','DCCC','CM'] 
const arrRibuan = ['M','MM','MMM','MV']
function convertToRoman(num) {
  let hasil = []
  num==0 && hasil.push(0)
  num==10 && hasil.push('X')
  num==100 && hasil.push('C')
  num==1000 && hasil.push('M')
  num>1000 && hasil.push(arrRibuan[num.toString().slice(-4,-3)-1])
  num>100 && hasil.push(arrRatusan[num.toString().slice(-3,-2)-1])
  num>10 && hasil.push(arrPuluhan[num.toString().slice(-2,-1)-1])
  num>0 && hasil.push(arrSatuan[num.toString().slice(-1)-1])
  console.log(hasil.join(''))
  console.log(hasil)
 return hasil.join('');
}

convertToRoman(5);
convertToRoman(22);
convertToRoman(222);
convertToRoman(0)
convertToRoman(10)
convertToRoman(100)
