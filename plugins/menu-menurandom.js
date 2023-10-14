import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let vn = './media/menu.mp3'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
//let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
  let pp = './Menu2.jpg'
//let pp = gataVidMenu.getRandom()
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(global.img)).buffer(), sourceUrl: redesMenu.getRandom() }}}


let menu = `⌜ *${wm}* ⌟  

*Hola ${taguser}*

◉ _*INFO DEL USUARIO*_
□ *🙌 Registrado:* ${user.registered === true ? '✅' : '❌ _#verificar_'}
□ *🎟️ Premium:* ${user.premiumTime > 0 ? '✅' : '❌ _#pase premium_'}
□ *🔰 Mi estado:* ${typeof user.miestado !== 'string' ? '_#miestado || Estado no asignado_' : '_Me siento ' + user.miestado + '_'}
□ *🎖️ Nivel:* ${level}
□ *💎 Diamantes:* ${limit}
□ *👾 LoliCoins:* ${money}
□ *🪙 Tokens:* ${joincount}
□ *🧰 Experiencia:* ${exp}
□ *⚓ Rango:* ${role}
${readMore}

┌───⊷ *FRASES Y TEXTOS*
┆ *Enamora a tu enamorada/o*
┆ *con esta frases/piropo uwu*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ 🥀 _${usedPrefix}piropo_
┆🥀 _${usedPrefix}consejo_
┆🥀 _${usedPrefix}fraseromantica_
└─────────────

┌───⊷ *RANDOM*
┆👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
┆👾 _${usedPrefix}cristianoronaldo_
┆👾 _${usedPrefix}messi_
┆👾 _${usedPrefix}meme_
┆👾 _${usedPrefix}itzy_
┆👾 _${usedPrefix}blackpink_
┆👾 _${usedPrefix}lolivid_
┆👾 _${usedPrefix}loli_
┆👾 _${usedPrefix}navidad_
┆👾 _${usedPrefix}ppcouple_
┆👾 _${usedPrefix}wpmontaña_
┆👾 _${usedPrefix}pubg_
┆👾 _${usedPrefix}wpgaming_
┆👾 _${usedPrefix}wpaesthetic_
┆👾 _${usedPrefix}wpaesthetic2_
┆👾 _${usedPrefix}wprandom_
┆👾 _${usedPrefix}wallhp_
┆👾 _${usedPrefix}wpvehiculo_
┆👾 _${usedPrefix}wpmoto_
┆👾 _${usedPrefix}coffee_
┆👾 _${usedPrefix}pentol_
┆👾 _${usedPrefix}caricatura_
┆👾 _${usedPrefix}ciberespacio_
┆👾 _${usedPrefix}technology_
┆👾 _${usedPrefix}doraemon_
┆👾 _${usedPrefix}hacker_
┆👾 _${usedPrefix}planeta_
┆👾 _${usedPrefix}randomprofile_
┆👾 _${usedPrefix}neko_
┆👾 _${usedPrefix}waifu_
┆👾 _${usedPrefix}akira_
┆👾 _${usedPrefix}akiyama_
┆👾 _${usedPrefix}anna_
┆👾 _${usedPrefix}asuna_
┆👾 _${usedPrefix}ayuzawa_
┆👾 _${usedPrefix}boruto_
┆👾 _${usedPrefix}chiho_
┆👾 _${usedPrefix}chitoge_
┆👾 _${usedPrefix}deidara_
┆👾 _${usedPrefix}erza_
┆👾 _${usedPrefix}elaina_
┆👾 _${usedPrefix}eba_
┆👾 _${usedPrefix}emilia_
┆👾 _${usedPrefix}hestia_
┆👾 _${usedPrefix}hinata_
┆👾 _${usedPrefix}inori_
┆👾 _${usedPrefix}isuzu_
┆👾 _${usedPrefix}itachi_
┆👾 _${usedPrefix}itori_
┆👾 _${usedPrefix}kaga_
┆👾 _${usedPrefix}kagura_
┆👾 _${usedPrefix}kaori_
┆👾 _${usedPrefix}keneki_
┆👾 _${usedPrefix}kotori_
┆👾 _${usedPrefix}kurumi_
┆👾 _${usedPrefix}madara_
┆👾 _${usedPrefix}mikasa_
┆👾 _${usedPrefix}miku_
┆👾 _${usedPrefix}minato_
┆👾 _${usedPrefix}naruto_
┆👾 _${usedPrefix}nezuko_
┆👾 _${usedPrefix}sagiri_
┆👾 _${usedPrefix}sasuke_
┆👾 _${usedPrefix}sakura_
┆👾 _${usedPrefix}cosplay_
└─────────────`.trim()
    conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
	
} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menurandom|Menurandom\?)$/i
//handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
