/**
 * Base By Siputzx
 * Created On 8/8/2024
 * Contact Me on wa.me/2347082664317
 * Supported By Gpt Assistant 
 
 - Queen_Teni_Claire Is Black -
 
 • Base Remaked By Veran
 • No Having Team For Ever
*/

require('./config')
const { default: makeWASocket, getAggregateVotesInPollMessage, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore, jidDecode, proto, getContentType, downloadContentFromMessage, fetchLatestWaWebVersion } = require("@adiwajshing/baileys");
const fs = require("fs");
const chalk = require("chalk")
const cfont = require('cfonts')
const pino = require("pino");
const lolcatjs = require('lolcatjs')
const path = require('path')
const NodeCache = require("node-cache");

const fetch = require("node-fetch")
const FileType = require('file-type')
const _ = require('lodash')
const { Boom } = require("@hapi/boom");
const PhoneNumber = require("awesome-phonenumber");
const readline = require("readline");
const { smsg, color, getBuffer } = require("./lib/myfunc")
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { toAudio, toPTT, toVideo } = require('./lib/converter')

const yargs = require('yargs/yargs')
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }) });
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())

const low = require('./lib/lowdb');
const { Low, JSONFile } = low;
const mongoDB = require('./lib/mongoDB');

const opts = yargs(process.argv.slice(2)).exitProcess(false).parse();
const dbPath = './src/database.json';

let db;
if (urldb !== '') {
db = new mongoDB(urldb);
console.log("[Successfully connected to MongoDB database]");
} else {
db = new JSONFile(dbPath);
console.log(chalk.blue("[Successfully connected to Local database]"));
}

global.db = new Low(db);
global.DATABASE = global.db;

global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000));
if (global.db.data !== null) return;

global.db.READ = true;
await global.db.read();
global.db.READ = false;

global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})
};

global.db.chain = _.chain(global.db.data);
};

global.loadDatabase();

process.on('uncaughtException', console.error);

if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)



function createTmpFolder() {
const folderName = "tmp";
const folderPath = path.join(__dirname, folderName);
if (!fs.existsSync(folderPath)) {
fs.mkdirSync(folderPath);
//console.log(chalk.blue(`Folder '${folderName}' successfully created.`))
} else {
//console.log(chalk.blue((`Folder '${folderName}' already available.`))
}
}
createTmpFolder();

const usePairingCode = true
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
return new Promise((resolve) => {
rl.question(text, resolve)
})
};

const { version, isLatest } = fetchLatestBaileysVersion();
const msgRetryCounterCache = new NodeCache();
async function startBotz() {
const { state, saveCreds } = await useMultiFileAuthState("session")
const ptz = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
isLatest: true,
msgRetryCounterCache,
connectTimeoutMs: 60000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 10000,
emitOwnEvents: true,
fireInitQueries: true,
generateHighQualityLinkPreview: true,
syncFullHistory: true,
markOnlineOnConnect: true,
browser: ["Ubuntu", "Chrome", "20.0.04"],
getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id)
                return msg.message
            }
            return {
                conversation: "Tee.. Headshot !!"
            }
        },
});

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
 console.log(chalk.blue(` ‎ ‎   Queen_Teni_Claire- Multi Device • Tëñïí Official\n ‎ ‎${chalk.white("Created by Veran and his team")}`))
    console.log(chalk.white(' ‎ ‎_____________________________________\n'))
if(usePairingCode && !ptz.authState.creds.registered) {
console.clear()
    cfont.say('<- Queen_Teni_Claire->', {
    font: 'chrome',
    align: 'left',
    colors: ['blue','white'],
    background: 'white',
    letterSpacing: 1,
    lineHeight: 1,
    space: false,
    maxLength: '20',
});
console.log(chalk.blue(` ‎ ‎  Queen_Teni_Claire- Multi Device\n ‎ ‎${chalk.white("Enter an active number starting with 23470826xxx or 25671626xxx")}`))
   console.log(chalk.white(' ‎ ‎_____________________________________\n'))
const phoneNumber = await question(" ")

    
const code = await ptz.requestPairingCode(phoneNumber.trim())


    
    
    
    
    
    
console.log(chalk.blue(`${chalk.white("Pairing code:")} -[ ${chalk.white(code)} ]-`))
    
}

async function getMessage(key){
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id)
return msg?.message
}
return {
conversation: "Tee!!! HEADSHOT!"
}
}

store.bind(ptz.ev);
ptz.ev.on('messages.update', async (chatUpdate) => {
try {
    for(const { key, update } of chatUpdate) {
     let forpollup = chatUpdate[0].update.pollUpdates
        if(forpollup) {
            // Payload key
            const pollCreation = await getMessage(key);
            
            // If it's from a boat  Queen_Teni_Claire          
            if(pollCreation && key.fromMe) {
                const pollUpdate = await getAggregateVotesInPollMessage({
                    message: pollCreation,
                    pollUpdates: forpollup,
                });
                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name;
                if (toCmd == undefined) {
                    return
                } else {
                    var prefCmd = "." + toCmd;
                    await ptz.appenTextMessage(prefCmd, chatUpdate);
                    //auto delete poll update
                       ptz.sendMessage(key.remoteJid,
			    {
			        delete: {
			            remoteJid: key.remoteJid,
			            fromMe: true,
			            id: key.id,
			            participant: key.participant
			        }
			    })
			    
                }
            }
        }
    }
    } catch(e) {
    console.log(e)
    }
    })
    
ptz.ev.on("messages.upsert", async (chatUpdate) => {
 try {

  const mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast'){
 await ptz.readMessages([mek.key]) }
if (!ptz.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
const m = smsg(ptz, mek, store)
require("./message")(ptz, m, chatUpdate, store)
 } catch (err) {
 console.log(err)
 }
});

// Setting
ptz.decodeJid = (jid) => {
if (!jid) return jid;
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {};
return (decode.user && decode.server && decode.user + "@" + decode.server) || jid;
} else return jid;
};

ptz.ev.on("contacts.update", (update) => {
for (let contact of update) {
let id = ptz.decodeJid(contact.id);
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify };
}
});

ptz.getName = (jid, withoutContact = false) => {
id = ptz.decodeJid(jid);
withoutContact = ptz.withoutContact || withoutContact;
let v;
if (id.endsWith("@g.us"))
return new Promise(async (resolve) => {
v = store.contacts[id] || {};
if (!(v.name || v.subject)) v = ptz.groupMetadata(id) || {};
resolve(v.name || v.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"));
});
else
v =
id === "0@s.whatsapp.net"
? {
id,
name: "WhatsApp",
}
: id === ptz.decodeJid(ptz.user.id)
? ptz.user
: store.contacts[id] || {};
return (withoutContact ? "" : v.name) || v.subject || v.verifiedName || PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber("international");
};

ptz.public = true

ptz.serializeM = (m) => smsg(ptz, m, store)

ptz.ev.on('connection.update', async (update) => {
const {
connection,
lastDisconnect
} = update
try{
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Verification Again`); ptz.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startBotz(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startBotz(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); ptz.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Verification Again And Run.`); ptz.logout(); }
else if (reason === DisconnectReason.restartRequired) { 
    console.log("Restart Required, Restarting..."); 
    console.clear()
    startBotz(); 
}
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startBotz(); }
else ptz.end(`Unknown DisconnectReason: ${reason}|${connection}`)
} if (update.connection == "open" || update.receivedPendingNotifications == "true") {
    //console.log(chalk.white(' ‎ ‎\n'))
    let cxdf = JSON.stringify(ptz.user, null, 2)
    let cxdf2 = cxdf.replace("{", '')
    .replace(/"/g, '');
    
    const cxdf3 = cxdf2.replace("}", '')
console.log(chalk.white(` ‎ ‎Connected, welcome owner ! ` + chalk.blueBright(cxdf3)))
    
    console.log(chalk.white(' ‎ ‎_____________________________________\n'))
}} catch (err) {
console.log('Error Di Connection.update '+err)
}
})


ptz.ev.on("creds.update", saveCreds);
ptz.getFile = async (PATH, returnAsFilename) => {
let res, filename
const data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
const type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
if (data && returnAsFilename && !filename)(filename = path.join(__dirname, './tmp/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
return {
res,
filename,
...type,
data,
deleteFile() {
return filename && fs.promises.unlink(filename)
}
}
}


		
ptz.ev.on('group-participants.update', async (anu) => {
    	if (global.welcome){
try {
let metadata = await ptz.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await ptz.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await ptz.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
async function kirimstik(linknya) {
ptz.sendImageAsStickerso(anu.id, linknya, { packname: '\n'.repeat(999)})
}

//welcome simpel 🗿

                if (anu.action == 'add') {
                
                await kirimstik("https://i.imgur.com/hN0daS1.jpeg")
                setTimeout(async () => {
                ptz.sendMessage(anu.id, {text: "*_WELCOME - NEW - MEMBER_*"})
                }, 1000)
                
                } else if (anu.action == 'remove') {
                	
                	await kirimstik("https://i.imgur.com/hN0daS1.jpeg")
                setTimeout(async () => {
                ptz.sendMessage(anu.id, {text: "*_LEAVING - BYE - MEMBER_*"})
                }, 1000)
                }
                }
} catch (err) {
console.log(err)
}
}
})		
    




ptz.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 

ptz.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await ptz.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await ptz.getName(i)}\nFN:${await ptz.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
	    })
	}
	ptz.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

ptz.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await ptz.getFile(path, true)
let { res, data: file, filename: pathFile } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let opt = { filename }
if (quoted) opt.quoted = quoted
if (!type) options.asDocument = true
let mtype = '', mimetype = type.mime, convert
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime)) (
convert = await (ptt ? toPTT : toAudio)(file, type.ext),
file = convert.data,
pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
if (options.asDocument) mtype = 'document'

let message = {
...options,
caption,
ptt,
[mtype]: { url: pathFile },
mimetype
}
let m
try {
m = await ptz.sendMessage(jid, message, { ...opt, ...options })
} catch (e) {
console.error(e)
m = null
} finally {
if (!m) m = await ptz.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
return m
}
}


ptz.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await ptz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
ptz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}
const path = require('path');

ptz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || '';
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await(const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await FileType.fromBuffer(buffer);
    let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename;
    let savePath = path.join(__dirname, 'tmp', trueFileName); // Save to 'tmp' folder
    await fs.writeFileSync(savePath, buffer);
    return savePath;
};
ptz.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await ptz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

ptz.sendImageAsStickerso = async (jid, path, options = {}, quoted) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await ptz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

ptz.sendPoll = (jid, name = '', values = [], selectableCount = 1) => {
return ptz.sendMessage(jid, {poll: { name, values, selectableCount }})
};

ptz.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await ptz.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

ptz.sendText = (jid, text, quoted = '', options) => ptz.sendMessage(jid, { text: text, ...options }, { quoted })
return ptz;
}

startBotz();

//law
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
