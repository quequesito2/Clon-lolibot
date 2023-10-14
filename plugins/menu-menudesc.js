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

□ *Creador: Mario*
□ *Numero del creador: wa.me/5492266466080*
□ *Numero del bot ofc: wa.me/573183650526*
□ *Tiempos activos :* *${uptime}*
□ *Usuarios:* *${Object.keys(global.db.data.users).length}*
□ *Registrado: ${rtotalreg} de ${totalreg}* ${(conn.user.jid == global.conn.user.jid ? '' : `\n□ *Soy un sub bot del:* wa.me/${global.conn.user.jid.split`@`[0]}`) || ''}
    
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

┌───⊷ *DESCARGAS*
┆📥 _${usedPrefix}play *<texto>*_
┆📥 _${usedPrefix}play.1 *<texto>*_
┆📥 _${usedPrefix}play.2 *<texto>*_
┆📥 _${usedPrefix}playdoc *<texto>*_
┆📥 _${usedPrefix}playlist *<texto>*_
┆📥 _${usedPrefix}playlist2 *<texto>*_
┆📥 _${usedPrefix}spotify *<texto>*_
┆📥 _${usedPrefix}tiktok *<enlace / link / url>*_
┆📥 _${usedPrefix}instagram *<enlace / link / url>*_
┆📥 _${usedPrefix}mediafire *<enlace / link / url>*_
┆📥 _${usedPrefix}instagram *<enlace / link / url>*_
┆📥 _${usedPrefix}gitclone *<enlace / link / url>*_
┆📥 _${usedPrefix}gdrive *<enlace / link / url>*_
┆📥 _${usedPrefix}twitter *<enlace / link / url>*_
┆📥 _${usedPrefix}fb *<enlace / link / url>*_
┆📥 _${usedPrefix}fb2 *<enlace / link / url>*_
┆📥 _${usedPrefix}fb3 *<enlace / link / url>*_
┆📥 _${usedPrefix}fb4 *<enlace / link / url>*_
┆📥 _${usedPrefix}fb5 *<enlace / link / url>*_
┆📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
┆📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
┆📥 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┆📥 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┆📥 _${usedPrefix}stickerpack *<enlace / link / url>*_
┆📥 _${usedPrefix}stickerly *<texto>*_
┆📥 _${usedPrefix}ringtone *<texto>*_
┆📥 _${usedPrefix}soundcloud *<texto>*_
┆📥 _${usedPrefix}imagen *<texto>*_
┆📥 _${usedPrefix}pinteret *<texto>*_
┆📥 _${usedPrefix}wallpaper *<texto>*_
┆📥 _${usedPrefix}wallpaper2 *<texto>*_
┆📥 _${usedPrefix}pptiktok *<nombre de usuario>*_
┆📥 _${usedPrefix}igstalk *<nombre de usuario>*_
┆📥 _${usedPrefix}igstory *<nombre de usuario>*_
┆📥 _${usedPrefix}tiktokstalk *<username>*_
└─────────────

┌──`.trim()
    conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
	
} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(descargas|Descargas\?)$/i
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
