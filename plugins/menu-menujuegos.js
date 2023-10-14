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

┌───⊷ *JUEGOS*
┆ *conando para la diversión del tu Grupos*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🕹 _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┆🕹️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
┆🕹 _${usedPrefix}prostituto *<nombre / @tag>*_
┆🕹️ _${usedPrefix}prostituta *<nombre / @tag>*_
┆🕹️ _${usedPrefix}gay2 *<nombre / @tag>*_
┆🕹️ _${usedPrefix}lesbiana *<nombre / @tag>*_
┆🕹 _${usedPrefix}pajero *<nombre / @tag>*_
┆🕹 _${usedPrefix}pajera *<nombre / @tag>*_
┆🕹️ _${usedPrefix}puto *<nombre / @tag>*_
┆🕹️ _${usedPrefix}puta *<nombre / @tag>*_
┆🕹️ _${usedPrefix}manco *<nombre / @tag>*_
┆🕹️ _${usedPrefix}manca *<nombre / @tag>*_
┆🕹️ _${usedPrefix}rata *<nombre / @tag>*_
┆🕹️ _${usedPrefix}love *<nombre / @tag>*_
┆🕹️ _${usedPrefix}doxear *<nombre / @tag>*_
┆🕹 _${usedPrefix}pregunta *<texto>*_
┆🕹️ _${usedPrefix}suitpvp *<@tag>*_
┆🕹️ _${usedPrefix}slot *<apuesta>*_
┆🕹️ _${usedPrefix}ttt *<nombre sala>*_
┆🕹️ _${usedPrefix}delttt_
┆🕹️ _${usedPrefix}simi *<texto>*_
┆🕹️ _${usedPrefix}top *<texto>*_
┆🕹️ _${usedPrefix}topotakus_
┆🕹️️ _${usedPrefix}top10gays_
┆🕹️️ _${usedPrefix}toplind@s_
┆🕹️️ _${usedPrefix}topput@s_
┆🕹️️ _${usedPrefix}toppajer@s_
┆🕹️️ _${usedPrefix}topotakus_
┆🕹️️ _${usedPrefix}topintegrantes_
┆🕹️️ _${usedPrefix}toplagrasa_
┆🕹️️ _${usedPrefix}toppanafrescos_
┆🕹️ _${usedPrefix}topshiposters_
┆🕹️️ _${usedPrefix}toppajeros_
┆🕹️️ _${usedPrefix}toplind@s_
┆🕹️️ _${usedPrefix}topfamosos_
┆🕹️️ _${usedPrefix}topsoltero
┆🕹️️ _${usedPrefix}topparejas_
┆🕹️ _${usedPrefix}formarpareja_
┆🕹️ _${usedPrefix}verdad_
┆🕹️ _${usedPrefix}reto_
┆🕹️ _${usedPrefix}cancion_
┆🕹️ _${usedPrefix}pista_
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ 💞 𝙋𝙖𝙧𝙚𝙟𝙖𝙨
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *Declarate con alguien*
┆ *para que sean Parejas!!*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆❤️➺ _${usedPrefix}listaparejas_
┆❤️➺ _${usedPrefix}mipareja_
┆❤️➺ _${usedPrefix}pareja *@tag*_
┆❤️➺ _${usedPrefix}aceptar *@tag*_
┆❤️➺ _${usedPrefix}rechazar *@tag*_
┆❤️➺ _${usedPrefix}terminar *@tag*_
└─────────────

┌───⊷ *RPG - LIMITES - ECONÓMIAS*
┆ *Compra, Adquiere Recuersos*
┆ *Mejora Tú Nivel y Rango!!*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆💵 _${usedPrefix}verificar_
┆💵 _${usedPrefix}unreg *<numero de serie>*_
┆💵 _${usedPrefix}claim_
┆💵 _${usedPrefix}lb_
┆💵 _${usedPrefix}levelup_
┆💵 _${usedPrefix}perfil_
┆💵 _${usedPrefix}minar_
┆💵 _${usedPrefix}buy_
┆💵 _${usedPrefix}balance_
┆💵 _${usedPrefix}myns_
┆💵 _${usedPrefix}work_
┆💵 _${usedPrefix}buyall_
┆💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
└─────────────`.trim()
    conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
	
} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(Menujuegos|menujuegos\?)$/i
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
