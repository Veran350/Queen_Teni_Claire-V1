const fs = require('fs');


// Deklarasikan koinPerak sebagai objek yang akan menyimpan informasi koin perak pengguna
const koinPerak = {};

// Fungsi untuk menambah koin perak
const tambahKoinPerak = (userId) => {
  if (koinPerak[userId]) {
    koinPerak[userId] += 1;
  } else {
    koinPerak[userId] = 1;
  }
};

// Fungsi untuk mendapatkan jumlah koin perak pengguna
const cekKoinPerak = (userId) => {
  return koinPerak[userId] || 0;
};

// Dalam kode lain, Anda dapat mengakses jumlah koin perak dengan menggunakan fungsi cekKoinPerak(userId)
const addSaldo = (userId, amount, _dir) => {
let position = null
Object.keys(_dir).forEach((x) => {
if (_dir[x].id === userId) {
position = x
}
})
if (position !== null) {
_dir[position].saldo += amount
fs.writeFileSync('./database/saldo.json', JSON.stringify(_dir, null, 3))
} else {
var object_add = ({
id: userId,
saldo: amount
})
_dir.push(object_add)
fs.writeFileSync('./database/saldo.json', JSON.stringify(_dir, null, 3))
}
}

const minSaldo = (userId, amount, _dir) => {
let position = null
Object.keys(_dir).forEach((x) => {
if (_dir[x].id === userId) {
position = x
}
})
if (position !== null) {
_dir[position].saldo -= amount
fs.writeFileSync('./database/saldo.json', JSON.stringify(_dir, null, 3))
}}

const cekSaldo = (userId, _dir) => {
let position = null
Object.keys(_dir).forEach((x) => {
if (_dir[x].id === userId) {
position = x
}
})
if (position !== null) {
return _dir[position].saldo
} else {
return 0
}}

module.exports = { addSaldo, minSaldo, cekKoinPerak, cekSaldo }