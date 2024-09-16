/**
 * Base By Siputzx
 * Created On 22/2/2024
 * Contact Me on wa.me/2347082664317
 * Supported By Gpt Assistant 
 
 • Renovasi oleh ziyo
*/

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner ========//
global.owner = '2347082664617'
global.nomerowner = ["2347082664317"]
// Apikey ======//
global.skizo = 'FalX'
//watermark ====//
global.packname = 'Di Buat Oleh'
global.author = 'V E R A N - MD'
global.title = '⟡T E N I C L A I R E • M U L T I • D E V I C E⟡'
global.body = 'x SIR - BMB '
global.filename = 'V E R A N - FDOC'
global.botname = 'V E R A N - Md'
global.shinka = 'V E R A N Jogress Shinka !'
global.idsaluran = '120363313633262988@newsletter'
global.namesaluran = '- V E R A N • Chanels -'
global.sourceurl = 'https://whatsapp.com/channel/0029VajIDgjDZ4LVnxfB1Z2s'
//setcode & logo ======//
global.tekspushkonv1 = ``
global.tekspushkonv2 = ``
global.tekspushkonv3 = ``
global.tekspushkonv4 = ``
global.setmenu = "v1"
global.setreply = "v1"
global.antibot = false
global.khas = '∨'
global.khasbawah = 'ꕤ'
global.khasmiring = '◦'
global.khasatas1 = '[ ⏤͟͟͞͞ '
global.khasatas2 = ' ͟͟͞͞⏤ ]'
global.footer = 'TICKIE Official'
// cpanel ======//
global.domain = 'https://center.zaaoffc.digitalserver.my.id'
global.apikey2 = 'ptla_ovG2AkH9oAcHVf6iy4W5bsN7VQ7Hbxwpk2LjVecndRB' // Isi Apikey Plta Lu
global.capikey2 = 'ptlc_2Kp2aFe56IXfQ4paiB2xu3kPBYo7P5gPs5MM3KRvVHQ' // Isi Apikey Pltc Lu 
global.eggsnya = '15' // id eggs yang dipakai kalo id nya 5 biarin aja ini jangan di ubah
global.location = '1' // id location
//linode & d-o ==//
global.apilinode = ''// apikey akun vps linode
global.apitokendo = ''
//database ======//
global.urldb = ''; // kosongin aja 
global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}

//rpg ==========//
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
