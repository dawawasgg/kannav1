import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*============== SOCIAL ==============*/

// Wajib diisi ya kak!, kalo ga punya biarin aja, biar ada creditsnya :v
global.sig = 'https://www.instagram.com/ohlxmarket'
global.sgh = 'www.xnxz.com'
global.sgc = 'https://chat.whatsapp.com/GMv2BxudUzfJhIAwtv8Tvh'
global.sdc = " "
global.snh = 'https://nhentai.net/g/365296/'

/*============== PAYMENT ==============*/
global.pdana = '083848128003'
global.povo = '083848128003'
global.pgopay = '083160327945'
global.ppulsa = '083848128003'
global.ppulsa2 = ''
global.psaweria = '-'

/*============== NOMOR ==============*/
global.nomorbot = '13152202542'
global.nomorown = '6283160327945'
global.namebot = 'πΌππππ½πππ'
global.nameown = 'Ridho'


/*============== STAFF ==============*/
global.owner = [
  ['6283160327945'],
  ['6283160327945'],
  ['6283160327945'],
  ['6283160327945', 'Ridho', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = ['6283160327945'] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'cristian9407',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'apikeyaine',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'wEDTUsWj',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
// Kata APIKEY itu isi dengan apikey lu sendiri, dengan beli ke website itu

/*============== WATERMARK ==============*/
global.wm = '                γ πΌππππ½πππ γβ© γ' //Main Watermark
global.wm2 = 'κ·οΈΆκ·κ₯κ· β§βΛ κ°ΰΈΛΖΞ±nnΞ± - chΞ±nΛΰΈ κ± β§βΛκ·οΈΆκ·κ₯κ·'
global.wm3 = 'β«Ήβ«Ί ΖΞ±nnΞ± ππ’π§'
global.botdate = `β«Ήβ«Ί ππ?ππ²: ${week} ${date}`
global.bottime = `π§ π π  π : ${wktuwib}`
global.titlebot = 'π± β π₯π£π Whatsapp Κα΄α΄'
global.author = global.wm


/*============== LOGO ==============*/
global.thumb = 'https://telegra.ph/file/5cd3cc7381bce4a4a65ec.jpg' //Main Thumbnail
global.thumb2 = 'https://telegra.ph/file/5cd3cc7381bce4a4a65ec.jpg'
global.thumbbc = 'https://telegra.ph/file/5cd3cc7381bce4a4a65ec.jpg' //For broadcast
global.giflogo = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

/*============== TEXT ==============*/
global.wait = '```γβ°β°β°β±β±β±β±β±β±β±γLoading...```'
global.eror = '```404 error```'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/5cd3cc7381bce4a4a65ec.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = 'βββββββ©' //top
global.dmenub = 'ββ’' //body
global.dmenub2 = 'β' //body for info cmd on Default menu
global.dmenuf = 'ββββββββββββ¦' //footer

// COMMAND MENU
global.dashmenu = 'ββββββββββ *DASHBOARD* ββββββββββ'
global.cmenut = 'βββββββγ'                       //top
global.cmenuh = 'γββββββ'                        //header
global.cmenub = 'ββ² '                            //body
global.cmenuf = 'ββββββββββββΰΉ\n'                //footer
global.cmenua = 'γβ°β°β°β±β±β±β±β±β±β±γSpam...     ' //after
global.pmenus = 'β'                              //pembatas menu selector

global.htki = 'ββββββγ' // Hiasan Titile (KIRI)
global.htka = 'γββββββ' // Hiasan Title  (KANAN)
global.lopr = 'β' //LOGO PREMIUM ON MENU.JS
global.lolm = 'β' //LOGO FREE ON MENU.JS
global.htjava = 'β«Ήβ«Ί'    //hiasan Doang :v
global.hsquere = ['βΆ','β','β«Ήβ«Ί']

/*============== STICKER WM ==============*/
global.stickpack = '.'
global.stickauth = `βοΈ\nπ\na\nn\nn\na\n-\nπ\nπ’\nπ§\nβ¦\n\nβ«Ήβ«Ί Whatsapp BOT\nwa.me/${global.nomorbot}`

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'π',
      limit: 'π«',
      health: 'β€οΈ',
      exp: 'β¨',
      money: 'πΉ',
      bank: 'π¦',
      potion: 'π₯€',
      diamond: 'π',
      common: 'π¦',
      uncommon: 'ποΈ',
      mythic: 'π',
      legendary: 'ποΈ',
      superior: 'πΌ',
      pet: 'π',
      trash: 'π',
      armor: 'π₯Ό',
      sword: 'βοΈ',
      pickaxe: 'βοΈ',
      fishingrod: 'π£',
      wood: 'πͺ΅',
      rock: 'πͺ¨',
      string: 'πΈοΈ',
      horse: 'π΄',
      cat: 'π±',
      dog: 'πΆ',
      fox: 'π¦',
      petFood: 'π',
      iron: 'βοΈ',
      gold: 'πͺ',
      emerald: 'βοΈ',
      upgrader: 'π§°'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
