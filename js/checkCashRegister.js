const checkCashRegister = (price, cash, cid) => {
  // hitung total kembalian (dikali 100)
  let totalKembalian = cash * 100 - price * 100

  // hitung jumlah uang di dalam mesin kasir (dikali 100)
  let totalUangDiMesinKasir = cid
    .map((e) => e[1])
    .reduce((acc, curr) => acc + curr * 100, 0)

  // panduan satuan & pecahan (sudah dikalikan 100)
  const rumusSlot = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    'ONE HUNDRED': 10000,
  }

  // PENGECEKAN KONDISI
  // KONDISI 1, ketika kembalian tidak cukup
  if (totalKembalian > totalUangDiMesinKasir) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] }
  }

  // KONDISI 2, ketika kembalian sama dengan uang yang ada di kasir
  else if (totalKembalian === totalUangDiMesinKasir) {
    return { status: 'CLOSED', change: cid }
  }

  // KONDISI 3
  // Jika total kembalian lebih kecil dari uang yang ada di mesin kasir
  // Kembalikan uang sesuai dengan pecahannya mengurut dari yang paling besar dulu
  else {
    // urutkan uang di kasir dari yang paling besar
    cid = cid.reverse()

    // Siapkan uang kembaliannya (dalam bentuk array)
    let jumlahUangYangDikembalikan = []

    // telusuri setiap slot uang di mesin kasir
    cid.forEach((slot) => {
      // set kondisi awal dari slot baru
      let kondisiSlotBaru = [slot[0], 0]
      // satuan (nama pecahan)
      let satuan = slot[0]

      // jumlah uang dalam slot
      let pecahan = slot[1] * 100
      // jika obj = satuan => isi

      // console.log(rumusSlot[satuan])
      // cek uang berdasarkan satuan, kurangi jika kembalian masih memenuhi
      // rumusSlot[satuan] = exam => rumusSlot.peni
      while (totalKembalian >= rumusSlot[satuan] && pecahan > 0) {
        // kembalian kurangi rumus yang sudah difilter
        console.log(rumusSlot[satuan])
        totalKembalian -= rumusSlot[satuan]
        pecahan -= rumusSlot[satuan]
        kondisiSlotBaru[1] += rumusSlot[satuan] / 100
      }

      if (kondisiSlotBaru[1] > 0) {
        jumlahUangYangDikembalikan.push(kondisiSlotBaru)
      }
    })

    // cek jika uang ada, tapi pecahannya tidak ada
    if (totalKembalian > 0) {
      return { status: 'INSUFFICIENT_FUNDS', change: [] }
    }
    // jika lolos semua return
    return {
      status: 'OPEN',
      change: jumlahUangYangDikembalikan,
    }
  }
}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
)
