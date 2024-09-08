/**
 * Base By Siputzx
 * Created On 6/8/2024
 * Contact Me on wa.me/2347082664317
 * Supported By Gpt Assistant 
*/

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '2347082664317'
global.nomerowner = ["2347082664317"]

// Apikey 

global.skizo = 'Terry Blossom'
global.casterix = 'Veran350'
//watermark 
global.packname = 'Veran maina'
global.author = 'Qüéëñ_Tèñï_Çlãìré'

// cpanel 
global.domain = 'https://' // Veran350
global.apikey2 = 'ptlc' // I love teni_claire
global.capikey2 = 'ptla' // Veran $ Teni
global.eggsnya = '15' // The id eggs used if the id is 5, just leave it, don't change it
global.location = '1' // id location


global.apilinode = ''// apikey   akun vps linode
global.apitokendo = ''

//database 
global.urldb = ''; // just leave it blank but if you want to use the mongo database, fill in the mongo url

global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}

//rpg
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
// Jangan di ubh
global.antibot = false
//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
