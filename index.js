//https://api.zeks.xyz/api/pantun?apikey=apivinz
//https://docs-jojo.herokuapp.com/api/spamsms?no=081387777325&jum=3
//https://videfikri.com/api/
//FULL FREE WEB APIKEY
//TQ TO

//ALPIN
//DAPPA
//ITSMEIKY
//DEV BOT LAINNYA.
//CREDITED: FZNXSEC404
//NO GANTI CREDIT!
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const util = require('util')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { donasi } = require('./lib/donasi')
const { developer } = require('./lib/developer')
const { randompict } = require('./lib/randompict')
const { fetchJson, uploadImages } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fontPath = ('./lib/Zahraaa.ttf')
const path = require('path')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close,sleep } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./bahasa')
const fetch = require('node-fetch')
const FormData = require('form-data')
const ms = require('parse-ms')
const toMs = require('ms')             
const imgbb = require('imgbb-uploader')  
const { reminder,addReminder, getReminderTime, getReminderMsg, getReminderPosition } = require('./lib/reminder')                
/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n'  // Gak Usah Di Ganti
            + 'VERSION:3.0\n'  // Gak Usah DiGanti
            + 'FN:VinzBOT\n' //ganti nama bot lu
            + 'ORG: Kelvin Ilyas;\n' //Ganti Jadi Nama Lu
            + 'TEL;type=CELL;type=VOICE;waid=6281387777325:+62 81387777325\n'  //ganti nomor lu! 
            + 'END:VCARD'
prefix = '.' // Ganti Aja Terserah Lu 
blocked = []   //Jangan Ganti
limitawal = 100000 //Bebas Ganti 
memberlimit = 1
cr = '*Vinz - BOT*' 
open = '0OQFfH-XIhkxY-W1IB0g-hvYNOI-lsVPc6'
lol = ''
/******** OWNER NUMBER**********/
const ownerNumber = "6281387777325@s.whatsapp.net"  // Ganti Nomor Lu
const pacarNumber = ["6285876013017@s.whatsapp.net"]  // Ganti Jadi Nomor Bot Lu
/************************************/

       
/*********** LOAD FILE ***********/
const tebakz = JSON.parse(fs.readFileSync('./database/bot/tebak.json'))
const tebaks = JSON.parse(fs.readFileSync('./database/kelompok/tebakgambar.json'))
const reminders = JSON.parse(fs.readFileSync('./database/bot/reminders.json'))
const categ = JSON.parse(fs.readFileSync('./database/kelompok/category.json'))
const layanan = JSON.parse(fs.readFileSync('./database/kelompok/layanan.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/kelompok/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/kelompok/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./database/pengguna/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/pengguna.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/pengguna/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/pengguna/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/pengguna/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/pengguna/premium.json'))
const adm = JSON.parse(fs.readFileSync('./database/pengguna/admin.json'))
const bad = JSON.parse(fs.readFileSync('./database/kelompok/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/kelompok/badword.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/

        // const FileUploder = (file) => {
        //     // var file = document.getElementById('input_img');
        //     var form = new FormData();
        //     form.append("image", file)

        //     var settings = {
        //       "url": "https://api.imgbb.com/1/upload?key=7fbe9c37ac4ebb843fd3e109b1458317",
        //       "method": "POST",
        //       "timeout": 0,
        //       "processData": false,
        //       "mimeType": "multipart/form-data",
        //       "contentType": false,
        //       "data": form
        //     };


        //     $.ajax(settings).done(function (response) {
        //       console.log(response);
        //       var jx = JSON.parse(response);
        //       console.log(jx.data.url);


        //     });
        // }
          //   imgbbUploader = require("imgbb-uploader");
          //   const imgbbUploader = (file) => {
          //       (
          //     "7fbe9c37ac4ebb843fd3e109b1458317",
          //     "./undefined.jpeg", )
          //     .then((response) => console.log(response))
          //     .catch((error) => console.error(error));
          // }
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid) => {
            const obj = { id: userid}
            _registered.push(obj)
            fs.writeFileSync('./database/bot/pengguna.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 400}
            uang.push(obj)
            fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        const checkLimitUser = (sender) => {
            let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _limit[position].limit
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
        //bayarATM	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
        //checkATMuser
        const tebak = (nfile) => {
            let position = false
            Object.keys(tebaks).forEach((i) => {
                if (tebaks[i].id === nfile) {
                    position = i
                }
            })
            if (position !== false) {
                return tebaks[position].jwb
            }
        }
        //Validasi
        const vtebak = (nfile) => {
            let position = false
            Object.keys(tebaks).forEach((i) => {
                if (tebaks[i].id === nfile) {
                    position = i
                }
            })
            if (position !== false) {
                return tebaks[position].answ
            }
        }
         //CheckLimit
         const addTebak = (nfile, jwban) => {
            let found = false
                    for (let teba of tebaks) {
                        if (teba.id === nfile) {
                            console.log(teba.id)
                            console.log(nfile)
                            //client.sendMessage(from,ind.maintenance(), text,{ quoted: mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: nfile, jwb: jwban, answ: '' }
                        tebaks.push(obj)
                        fs.writeFileSync('./database/kelompok/tebakgambar.json', JSON.stringify(tebaks))
                        //client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
                }
         const JwbTebak = (nfile,answ) => {       
                var found = false
                Object.keys(tebaks).forEach((i) => {
                    if(tebaks[i].id === nfile){
                        found = i
                        }
                    })
                if (found !== false) {
                    tebaks[found].answ = answ
                    const tebaku = tebaks[found]
                    fs.writeFileSync('./database/kelompok/tebakgambar.json',JSON.stringify(tebaks));
                } 
        }
        const tod = [
            'Truth',
            'Dare'
            ]   
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/

const client = new WAConnection()
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('QR code is ready, Scan now..','white'),color('Ojan','red'),color('X','lime'),color('MikuBot','red'))
})

client.on('credentials-updated', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
client.connect();


client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Hallo* @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*\nJangan rusuh ya\nSemoga Betah ^_^ @${num.split('@')[0]} 🗣`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Selamat Tinggal* @${num.split('@')[0]}\n*Semoga Tenang yaa di alam lainnn :)*`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
            const self = from
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isBadWord = isGroup ? badword.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
            const isTebak = isGroup ? tebakz.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPacar = pacarNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isAdmin = adm.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
            const sendImages = (buff,capst) => {
            client.sendMessage(from, buff, image, { quoted: mek, caption: capst })
            }
            const SendVideos = (buff,capst) => {
            client.sendMessage(from, buff, video, {quoted: mek, caption: capst})
            //client.sendMessage(from, buff, video, { mimetype: 'video/mp4', filename: `vidio.mp4`, quoted: mek, caption: capst })
            }
            const sendAudio = (buff,capst) => {
            client.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', filename: `audio.mp3`, quoted: mek, caption: capst})
		    }
            const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (audio) => {
		    client.sendMessage(from, audio, mp3, {quoted:mek})
		    }
            const sendTextWithMentions = (teks) => {
            client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": adm}})
            }
	        /*****************END SCURITY FEATURE ********/
			
		//role level
        const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Legends 忍'
        } else if (levelRole <= 2000) {
            role = 'Legends 忍'
        } else if (levelRole <= 3000) {
            role = 'Legends 忍'
        } else if (levelRole <= 4000) {
            role = 'Legends 忍'
        } else if (levelRole <= 5000) {
            role = 'Legends 忍'
        } else if (levelRole <= 6000) {
            role = 'Legends 忍'
        } else if (levelRole <= 7000) {
            role = 'Legends 忍'
        } else if (levelRole <= 8000) {
            role = 'Legends 忍'
        } else if (levelRole <= 9000) {
            role = 'Legends 忍'
        } else if (levelRole <= 10000) {
            role = 'Legends 忍'
           
           var prema = 'Free'
			if (!isAdmin) {
				prema = 'Admin'
			}
			if (!isPremium) {
				prema = 'Premium'
			} 
			if (!isOwner) {
				prema = 'Owner'
			}
	}
			//funtion nobadword
			if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    return reply("JAGA UCAPAN DONG!! 😠")
                        .then(() => client.groupRemove(from, sender))
                        .then(() => {
                            client.sendMessage(from, `*「 ANTI BADWORD 」*\nMiku akan kick kamu karena berkata kasar!`, text ,{quoted: mek})
                        }).catch(() => client.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
                } else {
                    return reply( "Tolong Jaga Ucapan Min 😇")
                }
            }
        }
	        //function leveling
            /*if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }*/
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 99500 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
                            client.groupLeave (from) 
					    }
		       } catch (err) { console.error(err)  }
        }
      
            /*//function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }*/

            //Register
            if (!isRegistered) {
                addRegisteredUser(sender)
                addATM(sender)
                addLevelingId(sender)
                checkLimit(sender)
            }

        if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('Admin Grup Mah Bebass :D')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1detik")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 0)
	}

             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
            if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, '!',color(budy), 'from', color(sender.split('@')[0]), '!Command')
			//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(body))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, '!',color(budy), 'from', color(sender.split('@')[0]), 'in', color(groupName), '!Command')
			
			switch(command) {
				case 'nobadword':  // Fix Bug By PojanGanz
                    if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('1 untuk menyalakan, 0 untuk mematikan')
                if (args[0] === '1') {
                if (isBadWord) return reply('*Fitur BadWord sudah aktif sebelum nya*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                  	   reply(`Fitur Badword Enable!`)
              	  } else if (args[0] === '0') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                 	    reply(`Fitur Badword Disable`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
				
				case 'addbadword':  // Fix Bug By PojanGanz
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':  // Fix Bug By PojanGanz
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                case 'listbadword':  // Fix Bug By PojanGanz
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
				case 'getsticker':
				case 'gets':  // Fix Bug By PojanGanz
				
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
					client.sendMessage(from, result, sticker, {quoted :mek})
					break
				case 'stickerlist':
				case 'liststicker':  // Fix Bug By PojanGanz
				
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
				case 'addsticker':  // Fix Bug By PojanGanz
				
					if (!isQuotedSticker) return reply('Reply stiker nya')
					svst = body.slice(12)
					if (!svst) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					client.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
					break
				case 'addvn':  // Fix Bug By PojanGanz
				
					if (!isQuotedAudio) return reply('Reply vnnya blokk!')
					svst = body.slice(7)
					if (!svst) return reply('Nama audionya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
					break
				case 'getvn':  // Fix Bug By PojanGanz
				
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
				case 'listvn':
				case 'vnlist':  // Fix Bug By PojanGanz
				
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
				case 'addimage':  // Fix Bug By PojanGanz
				
					if (!isQuotedImage) return reply('Reply imagenya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama imagenya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
					break
				case 'getimage':  // Fix Bug By PojanGanz
				
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					break
				case 'imagelist':
				case 'listimage':  // Fix Bug By PojanGanz
				
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
				case 'addvideo':  // Fix Bug By PojanGanz
				
					if (!isQuotedVideo) return reply('Reply videonya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama videonya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
					break
				case 'getvideo':  // Fix Bug By PojanGanz
				
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
				case 'listvideo':
				case 'videolist':  // Fix Bug By PojanGanz
				
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break	
			
				
		case 'mutual'://Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
		case 'next'://Case By PojanGanz
                //if (!isRegistered) return reply( ind.noregis())
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
		case 'sedekah':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                		const tujuan = q.substring(0, q.indexOf('|') - 1)
                		const jumblah = q.substring(q.lastIndexOf('|') + 1)
                		if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                		if (jumblah < 5000 ) return reply(`minimal transfer 5000`)
                		if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                		const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                		fee = 0.010 *  jumblah
                		hasiltf = jumblah - fee
                		addKoinUser(tujuantf, hasiltf)
                		confirmATM(sender, jumblah)
                		addKoinUser('6281387777325@s.whatsapp.net', fee)
                		reply(`*「 SUKSES 」*\n\nPengiriman uang telah sukses\nDari : +${sender.split("@")[0]}\nKe : +${tujuan}\njJumlah transfer : ${jumblah}\nPajak : ${fee}`)
                		break
        case 'soundplaydate':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				let XYTODmy = fs.readFileSync('./mp3/Play-Date-Melanie-Martinez-Cover-by-邢凯悦XKY.mp3')
				client.sendMessage(from, XYTODmy, MessageType.audio, { quoted: mek, ptt: true })
				await limitAdd(sender)
				break
        case 'addadmin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(10)
				adm.push(`${admm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
				reply(`Berhasil menambahkan admin bot wa.me/${admm} `)
				break
        case 'deladmin':
				if (!isOwner || !isAdmin) return reply(ind.ownerb())
				admm = body.slice(9)
                adm.splice(`${admm}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
				reply(`Berhasil Menghapus admin bot wa.me/${admm} `)
				break
        case 'adminbot':
                if (!isOwner || !isAdmin) return reply(ind.ownerb())
				client.updatePresence(from, Presence.composing) 
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of admin bot number :\n'
				for (let admm of adm) {
					teks += `~> @${admm.split('@')[0]}\n`
					}
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": adm}})
				break
         case 'userbot':
                if (!isOwner) return reply(ind.ownerb())
                client.updatePresence(from, Presence.composing) 
                //Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())    
                teks = 'Daftar List User Vinz-BOT:\n'
                for (let i of _limit) {
                    itung = limitawal - i.limit
                    const uangki = checkATMuser(i.id)
                    teks += `~> @${i.id.split('@')[0]} | Limit : ${itung} | Uang : ${uangki}\n`
                    }
                client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": adm}})
                break
        case 'addpremium':
                if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}addpremium 6281387777325*\n`)
				if (!isOwner || !isAdmin) return reply(ind.ownerb())
				premm = body.slice(12)
				prem.push(`${premm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				reply(`Berhasil menjadi premium wa.me/${premm} `)
				break
		case 'unpremium':
				if (!isOwner || !isAdmin) return reply(ind.ownerb())
				premm = body.slice(11)
				prem.splice(`${premm}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				reply(`Nomor sudah berakhir menjadi premium wa.me/${premm} `)
				break
                case 'premiumlist':
				client.updatePresence(from, Presence.composing) 
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of premium number :\n'
				for (let premm of prem) {
					teks += `~> @${premm.split('@')[0]}\n`
					}
					teks += `Total : ${prem.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": prem}})
				break
        case 'ban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		case 'unban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
        case 'banlist':
				client.updatePresence(from, Presence.composing) 
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of banned number :\n'
				for (let benn of ban) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
				break

		case 'leaderboard':
		case 'lb':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
				let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
				let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
				let nom = 0
				try {
				for (let i = 0; i < 10; i++) {
					nom++
					leaderboardlvl += `*[${nom}]* ${_level[i].id.replace('@s.whatsapp.net', '')}\n◪  *XP*: ${_level[i].xp}\n◪  *Level*: ${_level[i].level}\n`
					leaderboarduang += `*[${nom}]* ${uang[i].id.replace('@s.whatsapp.net', '')}\n◪  *Uang*: _Rp${uang[i].uang}_\n◪  *Limit*: ${limitawal - _limit[i].limit}\n`
				}
				await reply(leaderboardlvl)
				await reply(leaderboarduang)
				} catch (err) {
				console.error(err)
				await reply(`minimal 10 user untuk bisa mengakses database`)
				}
				break
		case 'kalkulator':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				} else {
					reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				await limitAdd(sender)
				break
		case 'dompet':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
		case 'buylimit':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
                if (args.length < 1) return reply(`⚠️ Format salah! Ketik *${prefix}buylimit jumlah*\nContoh : *${prefix}buylimit 100*`)                 
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				payout = body.slice(10)
				const koinPerlimit = 100
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Admin\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
				break
		/*case 'buypremiumlimit':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				payout = body.slice(17)
				const koinpremPerlimit = 500
				const totalprem = koinpremPerlimit * payout
				if ( checkATMuser(sender) <= totalprem) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= totalprem ) {
					confirmATM(sender, totalprem)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Ojanツ\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinpremPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
				break*/
        case 'setlimitall':
            if (!isAdmin) return reply('*Only Admin bot*')
                const setlimitall = body.slice(13)
                var sll = false
                Object.keys(_limit).forEach((i) => {
                     itung =   (limitawal - setlimitall)
                     _limit[i].limit = itung
                      console.log(_limit[i])
                      fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit));
                })
                reply(`「 SET LIMIT ALL SUKSES 」\nTanggal : ${moment().format('DD/MM/YY HH:mm:ss')}`) 
        break
		case 'giftlimit': 
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
                if(!isAdmin) return reply('*Only Admin bot*')
				const nomerr = args[0].replace('@','')
                		const jmla = args[1]
                		if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                		if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                		if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @62895336253039 20`)
                		const cysz = nomerr + '@s.whatsapp.net'
                		var found = false
                        			Object.keys(_limit).forEach((i) => {
                            			if(_limit[i].id === cysz){
                                			found = i
                            			}
                        		})
                        	if (found !== false) {
                            	_limit[found].limit -= jmla
                            	const updated = _limit[found]
                            	const result = `Gift kuota limit sukses pada ${moment().format('DD/MM/YY HH:mm:ss')}\n*「 GIFT KUOTA LIMIT 」*\n• User : @${updated.id.replace('@s.whatsapp.net','')}\n• Limit: ${limitawal-updated.limit}`
                            	console.log(_limit[found])
                            	fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit));
                            	reply(result)
                        	} else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        	}
               	break
        case 'giftuang': 
                //Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
                if(!isAdmin) return reply('*Only Admin bot*')
                const nomers = args[0].replace('@','')
                const jmla2 = args[1]
                console.log(args)
                console.log(nomers)
                if (jmla2 <= 4500) return reply(`minimal gift uang adalah 5000`)
                if (isNaN(jmla2)) return reply(`limit harus berupa angka`)
                if (!nomers) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftuang @62895336253039 5000`)
                const cysz2 = nomers + '@s.whatsapp.net'
                var found = false
                    Object.keys(uang).forEach((i) => {
                        if(uang[i].id === cysz2){
                            found = i
                        }
                    })
                if (found !== false) {
                    uang[found].uang += Number(jmla2)
                    const updated = uang[found]
                    const giftuang = checkATMuser(cysz2)
                    console.log(updated)
                    const result = `Gift kuota limit sukses pada ${moment().format('DD/MM/YY HH:mm:ss')}\n*「 GIFT KUOTA LIMIT 」*\n• User : @${updated.id.replace('@s.whatsapp.net','')}\n• Limit: ${giftuang}`
                    console.log(uang[found])
                    fs.writeFileSync('./database/pengguna/uang.json',JSON.stringify(uang));
                    reply(result)
                } else {
                    reply(`Maaf, nomor ${nomers} tidak terdaftar di database!`)
                    }
                break
        //BATES//
        case 'reminder':
            if (args.length === 0) return reply(`Fromat Salah...!\nKirim perintah *${prefix}reminder 10s-Pesan*\nContoh: *${prefix}reminder 1h-Belajaarr\nh: Jam , m: Menit , s: Detik`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            const qp = body.slice(10).split('-')
            const timeRemind = qp[0]
            const messRemind = qp[1]
            const parsedTime = ms(toMs(timeRemind))
            console.log(parsedTime.seconds)
            reminder.addReminder(sender, messRemind, timeRemind, reminders)
            await sendTextWithMentions(ind.reminderOn(messRemind, parsedTime, sender))
            const intervRemind = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender, reminders)) {
                        await sendTextWithMentions(ind.reminderAlert(reminder.getReminderMsg(sender, reminders), sender))
                        reminders.splice(reminder.getReminderPosition(sender, reminders), 1)
                        fs.writeFileSync('./database/bot/reminders.json', JSON.stringify(reminders))
                        clearInterval(intervRemind)
                        await limitAdd((sender))
                    }
                }, 1000)
        break
        case 'cekresi':
            if (args.length === 0) return reply(`Format Salah..!\nKetik: *${prefix}cekresi Kurir-Resi*\nContoh: *${prefix}cekresi sicepat-002515523548* \n\nList Kurir:  \nJNE, POS, TIKI, WAHANA, JNT, RPX, SAP, SICEPAT, PCP, JET, DSE, FIRST, NINJA, LION, IDL, REX.`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try{
                const p = body.slice(9).split('-')
                //console.log(p1p)
                const p1 = await axios.get(`https://api.i-tech.id/tools/resi?key=${open}&kurir=${p[0]}&resi=${p[1]}`)
                console.log(p)
                const p1p = p1.data
                if(p1p.status.code == 200){ 
                   const p1p1 =  p1p.result
                   let tp = (`Detail Resi ${p[1]}\n====================\nKurir : ${p1p1.summary.courier_name}\nPengirim : ${p1p1.summary.shipper_name}\nPenerima : ${p1p1.summary.receiver_name}\nDi Kirim Dari : ${p1p1.summary.origin}\nTujuan : ${p1p1.summary.destination}\n====================\n\n`)
                   for(let i of p1p1.manifest){
                     tp += (`Tanggal : ${i.manifest_date} : ${i.manifest_time}\nKota : ${i.city_name}\nNote:${i.manifest_description}\n====================\n`)
                   }
                   reply(tp)
                   await limitAdd(sender)
                }
            }catch (err) { sendMess(ownerNumber, 'Cekresi Error : '+ err) , reply(ind.maintenance() ) } 
        break
        /*case 'beli':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            await limitAdd(sender)
            if (args.length < 1) return reply(self,`Format Salah..!\nKetik *ID.NomorHP/Email*`)
            const nomor = body.slice(6).split('.')
            snw = moment().format('DDMMYY-HHmmss')+`-${nomor[1]}`
            console.log(snw)
            var bool = false
            for(let i of layanan.result){
                if(nomor[0].toUpperCase() == i.id) {hh = Number(i.price) + 100}
            }
            Object.keys(premiumuser).forEach((i) => {
                if(premiumuser[i].id == serial){
                    limit = premiumuser[i].limit + hh
                    console.log("limit",limit)
                    if(limit > limitCount){bool=true}
                        premiumuser[i].limit = limit
                        console.log(" premiumuser[i]", premiumuser[i])
                        fs.writeFileSync('./lib/database/premium.json',JSON.stringify(premiumuser));
                }
            })
            console.log(hh)
            if(bool == true) return reply(self,ind.saldoh())
            await limitpAdd(serial)
            var formdata = new FormData();
            formdata.append("key", "0OQFfH-XIhkxY-W1IB0g-hvYNOI-lsVPc6");
            formdata.append("service", `${nomor[0]}`);
            formdata.append("nomor", `${nomor[1]}`);

            var requestOptions = {
              method: 'POST',
              body: formdata,
              redirect: 'follow'
            };
            fetch("https://api.i-tech.id/ppob/order", requestOptions)
              .then(response => response.text())
              .then(result => 
              fs.writeFileSync(`./lib/order/${snw}.json`, result.toString())
              )
              .catch(error => console.log('error', error));
              await sleep(5000)
            const beli2 = JSON.parse(fs.readFileSync(`./lib/order/${snw}.json`))
            if(beli2.status == "success"){
                console.log(beli2.status)
                tsuccess = (`TX ID : ${beli2.result.order_id}\nService : ${beli2.result.service}\nHarga: ${hh}\nNote: ${beli2.result.note}\nPhone: ${beli2.result.phone}\nStatus : ${beli2.result.status}\nCode TX : ${snw}`)
                reply(self,tsuccess)
            }
            else{ reply(self,beli2.pesan)  }
        break
        case 'status':
         if (args.length < 1) return reply(self,`Format Salah..!\n*${prefix}status TX_ID*\nContoh: *${prefix}status 2021000001`)
            const cstate = body.slice(8)
           var formdata = new FormData();
            formdata.append("key", "0OQFfH-XIhkxY-W1IB0g-hvYNOI-lsVPc6");
            formdata.append("kode", `${cstate}`);

            var requestOptions = {
              method: 'POST',
              body: formdata,
              redirect: 'follow'
            };
            fetch("https://api.i-tech.id/ppob/status", requestOptions)
              .then(response => response.text())
              .then(result => 
              fs.writeFileSync(`./lib/status/${cstate}.json`, result.toString())
              )
              .catch(error => console.log('error', error));
              await sleep(5000)
            const cstate2 = JSON.parse(fs.readFileSync(`./lib/status/${cstate}.json`))
            if(cstate2.status == "success"){
                console.log(cstate2.status)
                let hh = Number(cstate2.result.price) + 1500
                tsuccess = (`TX ID : ${cstate2.result.order_id}\nService : ${cstate2.result.service}\nHarga: ${hh}\nNote: ${cstate2.result.note}\nPhone: ${cstate2.result.phone}\nStatus : ${cstate2.result.status}`)
                reply(self,tsuccess)
            }
            else{ reply(self,cstate2.pesan)  }
        break*/
        //FITUR PREMIUM.....//
        case 'updated':
         var formdata = new FormData();
            formdata.append("key", "0OQFfH-XIhkxY-W1IB0g-hvYNOI-lsVPc6");

            var requestOptions = {
              method: 'POST',
              body: formdata,
              redirect: 'follow'
            };
            fetch("https://api.i-tech.id/ppob/category", requestOptions)
              .then(response => response.text())
              .then(result => fs.writeFileSync('./database/kelompok/category.json', result.toString()))
              //console.log(result.slice(70,13854))) //replace(/( \r\n|\n|\r|\ )/gm, "")
              .catch(error => console.log('error', error));
              console.log("Category Updated..")
              reply("Category Updated..")

            var formdata = new FormData();
            formdata.append("key", "0OQFfH-XIhkxY-W1IB0g-hvYNOI-lsVPc6");

            var requestOptions = {
              method: 'POST',
              body: formdata,
              redirect: 'follow'
            };
            fetch("https://api.i-tech.id/ppob/layanan", requestOptions)
              .then(response => response.text())
              .then(result => fs.writeFileSync('./database/kelompok/layanan.json', result.toString()))
              //console.log(result.slice(70,13854))) //replace(/( \r\n|\n|\r|\ )/gm, "")
              .catch(error => console.log('error', error));
              console.log("Layanan Updated...")
              reply("Layanan Updated.....")
        break
        case 'layanan':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            await limitAdd(sender)
            const tiplay = `╔═✪〘 LIST LAYANAN 〙\n╠➥1. NETFLIX\n╠➥2. PAKET INTERNET\n╠➥3. PAKET SMS\n╠➥4. PULSA\n╠➥5. SALDO DOMPET DIGITAL\n╠➥6. TOKENPLN\n╠➥7. VGAME\n╠➥8. VOUCHER\n╠➥9. YT\n╠➥10. LAIN-LAIN\n╚═〘 LIST LAYANAN 〙\n\nKetik : *${prefix}layanan 4 Untuk melihat Detail Layanan`
            if (args.length === 0) return reply(tiplay)
            const lay = body.slice(9)
            if(lay > 10 || lay != Number(lay)) { reply("Maaf, Command Tidak Terdaftar...!") 
            console.log("HMMMMM")} else {
            if(lay == 1){layn = "NETFLIX"  
                         tlayn =  "NETFLIX"}
            if(lay == 2){layn = "PKIN"    
                        tlayn = "PAKET INTERNET"}
            if(lay == 3){layn = "PKSMS"  
                        tlayn = "PAKET SMS"}
            if(lay == 4){layn = "PULSA"  
                        tlayn = "PULSA"}
            if(lay == 5){layn = "SAGO" 
                        tlayn = "SALDO DOMPET DIGITAL"}
            if(lay == 6){layn = "TOKENPLN"
                         tlayn = "TOKEN PLN"}
            if(lay == 7){layn = "VGAME"  
                        tlayn = "VOUCHER GAME"}
            if(lay == 8){layn = "VOUCHER" 
                        tlayn = "VOUCHER PULSA"}
            if(lay == 9){layn = "YT"     
                        tlayn = "YOUTUBE"}  
            if(lay == 10){layn = "LAINYA"}  
                let z = `✪══〘 LIST LAYANAN ${tlayn.toUpperCase()}〙══✪\n`
                for(let i of layanan.result){
                    if(Number(i.price) < 15000){ price =  Number(i.price) + 500}else{ price =  Number(i.price) + 1500 }
                if(layn == i.tipe){
                    z += ` ID : ${i.id}\n Nama : ${i.name}\n Harga : ${price}\n Note : ${i.note}\n=====================\n`
                  }
                }
                    z +=`✪══〘 LIST LAYANAN ${tlayn.toUpperCase()}〙══✪\n\n Untuk Beli ketik : *${prefix}beli ID.NOHP*\nContoh : ${prefix}beli np1.081387777325`
                reply(z) }
        break
        case 'crypto':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            await limitAdd(sender)
           // if (args.length < 1) return reply(self,`Format Salah..!\nHarga-Beli Estimasi-Koin`)
            const crypto = await axios.get(`https://indodax.com/api/summaries`)
            const crpr = crypto.data.tickers
            const c24hr = crypto.data.prices_24h
            const c7hr = crypto.data.prices_7d
            const stn = body.slice(8)+`_idr`
            //fs.writeFileSync(`./lib/database/indodax.json`, JSON.parse(crpr))
            const crr = JSON.parse(fs.readFileSync(`./database/kelompok/indodax.json`))
            //console.log(crr[0])
            itek = `✪══〘 LIST Crypto 〙 ══✪\n\nNama Coin => High | Low // Last \n`
            cuan = `✪══〘 POTENSI CUAN 〙 ══✪\nNama Coin => High | Low // Last \n`
            lows = `✪══〘 POTENSI LOWS 〙 ══✪\nNama Coin => High | Low // Last \n`
            for(let i of crr){
                const nmc = i.split('_')[0].toUpperCase()
                const label = i.split('_')
                const lbl = label[0]+label[1]
                const highc = crpr[`${i}`]['high'] 
                const lowc = crpr[`${i}`]['low'] 
                const last = crpr[`${i}`]['last']
                const medium = (Number(highc) + Number(lowc))/2
                const d24 = c24hr[`${lbl}`]
                const d7 = c7hr[`${lbl}`]
                const naik = Number(lowc)+(Number(lowc)*0.5)
               /* if(Number(last) <= Number(d7) && Number(last) <= Number(d24) && Number(last) < Number(medium)){
                    itek += `${nmc} => ${highc} | ${lowc} // ${last} !!\n 7D : ${d7} | 24H : ${d24}\n==============\n`
                }else{
                itek += `${nmc} => ${highc} | ${lowc} // ${last}\n7D : ${d7} | 24H : ${d24}\n==============\n`} */
                if(Number(last) > Number(d7) && Number(last) > Number(d24) &&  Number(last) > naik){
                    cuan += `${nmc} => ${highc} | ${lowc} // ${last} \n 7D : ${d7} | 24H : ${d24}\n==============\n`
                }
                 if(Number(last) <= Number(d7) && Number(last) <= Number(d24) && Number(last) < Number(medium)){
                    lows += `${nmc} => ${highc} | ${lowc} // ${last} !!\n 7D : ${d7} | 24H : ${d24}\n==============\n`
                }
            }   
           //reply(self,`${itek}`)
           reply(`${cuan}`)
           reply(`${lows}`)
        break
        case 'coin':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            await limitAdd(sender)
            // if (args.length < 1) return reply(self,`Format Salah..!\nHarga-Beli Estimasi-Koin`)
            const coin = await axios.get(`https://indodax.com/api/summaries`)
            const coini = JSON.parse(fs.readFileSync(`./database/kelompok/indodax.json`))
            const qteks = body.slice(6)+`_idr`
            const indox = coin.data.tickers
            const cc24hr = coin.data.prices_24h
            const cc7hr = coin.data.prices_7d
            coink = ``
           for(let i of coini){
            //console.log(coini[])
           if(qteks == i){
                const nmac = qteks.split('_')[0].toUpperCase()
                const labelx = i.split('_')
                const lbl2 = labelx[0]+labelx[1]
                const highcc = indox[`${qteks}`]['high'] 
                const lowcc = indox[`${qteks}`]['low'] 
                const lastt = indox[`${qteks}`]['last']
                const d24 = cc24hr[`${lbl2}`]
                const d7 = cc7hr[`${lbl2}`]
                coink += `✪══〘 COIN ${nmac} 〙 ══✪\n\n${nmac} => ${highcc} | ${lowcc} // ${lastt} \n 7D : ${d7} | 24H : ${d24}\n`
                }
            }
            reply(coink)
           //console.log(indox[qteks])
        break
        case 'openapi':
            const l99 = body.slice(9)
            if( l99 == "535846") { 
            const l991 = await axios.get(`https://api.i-tech.id/tools/profile?key=0OQFfH-XIhkxY-W1IB0g-hvYNOI-lsVPc6`)
            const l992 = l991.data.result
            reply(`Nama: ${l992.nama}\nSaldo : ${l992.saldo}\nTotal HIT Today : ${l992.hit_today}\nTotal HIT : ${l992.total_hit}\nExpired : ${l992.expaired}`)
            }else if(l99 == "13") {
                const testip = await axios.get(`https://api.i-tech.id/tools/ipsaya?key=` + open)
                reply(`IP : ${testip.data.ip}\nRegistered : ${testip.data.registered}`)
            }else { }
        break
        case 'indihome':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            if (args.length < 1) return reply( `Kirim perintah *${prefix}indihome No-Internet*\nContoh: *${prefix}indihome 121703231772*`)
            try{
                const indihome = await fetchJson(`https://api.i-tech.id/tagihan/indihome?key=${open}&no=${args[0]}`)
                buff = await getBuffer(`https://telegra.ph/file/4bce81fb3b51fbdf5867a.png`)
                inditeks = `✪═══〘 Tagihan Indihome 〙═══✪\nNomor Internet : ${indihome.nomor}\nNama Pelanggan : ${indihome.nama}\nJumlah Tunggakan : ${indihome.lembar_tagihan}\nTotal Tagihan : ${indihome.total}\n\n`//+`Bingung Mau Bayar Tagihan? Ketik aja *${prefix}Layanan* untuk Informasi Lebih Lanjut.`
                if(indihome.code == "200"){
                    sendImages(buff,inditeks)
                }else{reply(ind.maintenance()), sendMess(ownerNumber, '<<INFO>>\nFitur: *indihome Invalid*')}
                } catch (err) { sendMess(ownerNumber, 'indihome Error : '+ err) }
        break
        case 'pln':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            if (args.length < 1) return reply( `Kirim perintah *${prefix}pln noPLN*\nContoh: *${prefix}pln 121703231772*`)
            try{
                const indihome = await fetchJson(`https://api.i-tech.id/tagihan/pln?key=${open}&no=${args[0]}`)
                buff = await getBuffer(`https://telegra.ph/file/ae15e62093c83a69f1e2c.png`)
                inditeks = `✪═══〘 Tagihan PLN 〙═══✪\nNomor PLN : ${indihome.nomor}\nNama Pelanggan : ${indihome.nama}\nJumlah Tunggakan : ${indihome.lembar_tagihan}\nTotal Tagihan : ${indihome.total}\n\n`//+`Bingung Mau Bayar Tagihan? Ketik aja *${prefix}Layanan* untuk Informasi Lebih Lanjut.`
                if(indihome.code == "200"){
                    sendImages(buff,inditeks)
                }else{reply(ind.maintenance()), sendMess(ownerNumber, '<<INFO>>\nFitur: *pln Invalid*')}
                } catch (err) { sendMess(ownerNumber, 'Harta Error : '+ err) }
        break
        case 'tebakgambar':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            await limitAdd(sender)
            try {
            const resp = await axios.get('https://videfikri.com/api/tebakgambar/')
            if (resp.data.error) return reply(resp.data.error)
            const nFile = createSerial(6)
            //console.log(mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation.slice(0,10))
            //const nfile = mek.message.extendedTextMessage.contextInfo.stanzaId
            const jwban = `➸ Jawaban : ${resp.data.result.jawaban}`
            await addTebak(nFile,jwban.slice(12,100).toUpperCase())
            buffer = await getBuffer(resp.data.result.soal_gbr)
            sendImages(buffer,`ID : ${nFile}\n_Silahkan Jawab Maksud Dari Gambar Ini_`)
            await sleep(5000)
            reply(`60 Detik Dari Skarangg....!`)
            await sleep(10000)
            if(vtebak(nFile) != "") return reply("Quiz Sudah Selesai")
            reply(`50 Detik Lagi...`)
            await sleep(20000)
            if(vtebak(nFile) != "") return reply("Quiz Sudah Selesai")
            reply(`30 Detik Lagi...`)
            await sleep(20000)
            if(vtebak(nFile) != "") return reply("Quiz Sudah Selesai")
            reply(`10 Detik Lagi...`)
            await sleep(10000)
            reply(`Waktu Habis...!`)
            if(vtebak(nFile) != "") return reply("Quiz Sudah Selesai")
            reply(jwban)
            } catch (err) { sendMess(ownerNumber, 'Tebakgambar Error : '+ err) 
            reply(ind.maintenance()) }
            break

        case 'harta':
            if (args.length < 1) return reply(`Kirim perintah *${prefix}harta [TEKS]*\nContoh: *${prefix}harta CINTA*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try{
            const harta = await axios.get(`https://api.i-tech.id/tools/harta?key=`+open+`&kata=`+body.slice(7))
            if(harta.data.code == "200") { await limitAdd(sender)
                buff = await getBuffer(harta.data.result) 
                sendImages(buff,``) }
                else{reply(ind.maintenance()), sendMess(ownerNumber, '<<INFO>>\nFitur: *Tahta Invalid*')}
            } catch (err) { sendMess(ownerNumber, 'Harta Error : '+ err) }
        break
        case 'tahta':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}harta [TEKS1]-[TEKS2]-[TEKS3]*\nContoh: *${prefix}tahta Kelvin-Ilyas-Ganteng*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            const tahta = body.slice(7).split('-')
            try{
            const tahtar = await axios.get(`https://api.i-tech.id/tools/tahta?key=`+open+`&teks1=${tahta[0]}&teks2=${tahta[1]}&teks3=${tahta[2]}`)
            if(tahtar.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(tahtar.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) } 
            } catch (err) { sendMess(ownerNumber, 'Tahta Error : '+ err) }
        break
        case 'pubg':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}pubg [TEKS1]-[TEKS2]*\nContoh: *${prefix}pubg Kelvin-Ilyas*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            const pubg = body.slice(6).split('-')
            try{
            const pubg2 = await axios.get(`https://api.i-tech.id/tools/pubg?key=`+open+`&teks1=${pubg[0]}&teks2=${pubg[1]}`)
            if(pubg2.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(pubg2.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) } 
            } catch (err) { sendMess(ownerNumber, 'Pubg Error : '+ err) }
        break
        case 'avenger':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}avenger [TEKS1]-[TEKS2]*\nContoh: *${prefix}avenger Kelvin-Ilyas*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            const aveng = body.slice(9).split('-')
            try{
            const avenger = await axios.get(`https://api.i-tech.id/tools/avenger?key=`+open+`&teks1=${aveng[0]}&teks2=${aveng[1]}`)
            if(avenger.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(avenger.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) } 
            } catch (err) { sendMess(ownerNumber, 'Avenger Error : '+ err) }
        break
        case 'haha':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}haha [TEKS1]-[TEKS2]*\nContoh: *${prefix}haha Kelvin-Ilyas*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            const haha = body.slice(6).split('-')
            try{
            const hahar = await axios.get(`https://api.i-tech.id/tools/haha?key=`+open+`&teks1=${haha[0]}&teks2=${haha[1]}`)
            if(hahar.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(hahar.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) } 
            } catch (err) { sendMess(ownerNumber, 'haha Error : '+ err) }
        break
        case 'marvel':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}marvel [TEKS1]-[TEKS2]*\nContoh: *${prefix}marvel Kelvin-Ilyas*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            const marvel = body.slice(8).split('-')
            try{
            const marvelr = await axios.get(`https://api.i-tech.id/tools/marvel?key=`+open+`&teks1=${marvel[0]}&teks2=${marvel[1]}`)
            if(marvelr.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(marvelr.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) } 
            } catch (err) { sendMess(ownerNumber, 'marvel Error : '+ err) }
        break
        case 'marvel2':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}marvel2 [TEKS1]-[TEKS2]*\nContoh: *${prefix}marvel2 Kelvin-Ilyas*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            const marvel2 = body.slice(9).split('-')
            try{
            const marvel2r = await axios.get(`https://api.i-tech.id/tools/marvel2?key=`+open+`&teks1=${marvel2[0]}&teks2=${marvel2[1]}`)
            if(marvel2r.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(marvel2r.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) } 
            } catch (err) { sendMess(ownerNumber, 'marvel2 Error : '+ err) }
        break
        case 'sarangheo':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}sarangheo [TEKS]*\nContoh: *${prefix}sarangheo Kelvin*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try{
            const sh = await axios.get(`https://api.i-tech.id/tools/sh?key=`+open+`&teks=`+encodeURIComponent(body.slice(11)) )
            if(sh.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(sh.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) } 
            } catch (err) { sendMess(ownerNumber, 'sarangheo Error : '+ err) }
        break
        case 'tatto':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}tatto [TEKS]*\nContoh: *${prefix}tatto CINTA*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try{
            const tatto = await axios.get(`https://api.i-tech.id/tools/hand?key=`+open+`&teks=`+body.slice(7))
            if(tatto.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(tatto.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) } 
            } catch (err) { sendMess(ownerNumber, 'tatto Error : '+ err) }
        break
        case 'blur':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}blur [TEKS]*\nContoh: *${prefix}blur CINTA*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try{
            const blur = await axios.get(`https://api.i-tech.id/tools/blur?key=`+open+`&teks=`+body.slice(6))
            if(blur.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(blur.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) } 
            } catch (err) { sendMess(ownerNumber, 'blur Error : '+ err) }
        break
        case 'blackpink':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}blackpink [TEKS]*\nContoh: *${prefix}blackpink CINTA*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try{
            const bp = await axios.get(`https://api.i-tech.id/tools/blackpink?key=`+open+`&teks=`+body.slice(10))
            if(bp.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(bp.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) } 
            } catch (err) { sendMess(ownerNumber, 'blackpink Error : '+ err) }
        break
        case 'thunder':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}thunder [TEKS]*\nContoh: *${prefix}thunder CINTA*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try{
            const thunder = await axios.get(`https://api.i-tech.id/tools/thunder?key=`+open+`&teks=`+body.slice(9))
            if(thunder.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(thunder.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) } 
            } catch (err) { sendMess(ownerNumber, 'thunder Error : '+ err) }
        break
        case 'dota':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}dota [TEKS]*\nContoh: *${prefix}dota Kelvin*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try{
            const dota = await axios.get(`https://api.i-tech.id/tools/dota?key=`+open+`&teks=`+encodeURIComponent(body.slice(6)) )
            if(dota.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(dota.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) } 
            } catch (err) { sendMess(ownerNumber, 'dota Error : '+ err) }
        break
        case 'avatar':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}avatar [TEKS]*\nContoh: *${prefix}avatar Kelvin*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try{
            const avatar = await axios.get(`https://api.i-tech.id/tools/avatar?key=`+open+`&teks=`+encodeURIComponent(body.slice(8)) )
            if(avatar.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(avatar.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) } 
            } catch (err) { sendMess(ownerNumber, 'avatar Error : '+ err) }
        break
        case 'pokemons':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}pokemons [TEKS]*\nContoh: *${prefix}pokemons Kelvin*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try{
            const pokemons = await axios.get(`https://api.i-tech.id/tools/pokemon?key=`+open+`&teks=`+encodeURIComponent(body.slice(10)) )
             if(pokemons.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(pokemons.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) } 
            } catch (err) { sendMess(ownerNumber, 'pokemons Error : '+ err) }
        break
        case 'warface':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}warface [TEKS]*\nContoh: *${prefix}warface Kelvin*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try{
            const warface = await axios.get(`https://api.i-tech.id/tools/warface?key=`+open+`&teks=`+encodeURIComponent(body.slice(9)) )
            if(warface.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(warface.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) } 
            } catch (err) { sendMess(ownerNumber, 'warface Error : '+ err) }
        break
        case 'csgo':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}csgo [TEKS]*\nContoh: *${prefix}csgo Kelvin*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try{
            const csgo = await axios.get(`https://api.i-tech.id/tools/csgo?key=`+open+`&teks=`+encodeURIComponent(body.slice(6)) )
            if(csgo.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(csgo.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) }   
            } catch (err) { sendMess(ownerNumber, 'csgo Error : '+ err) }
        break
        case 'crossfire':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}crossfire [TEKS]*\nContoh: *${prefix}crossfire Kelvin*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try{
            const crossfire = await axios.get(`https://api.i-tech.id/tools/crossfire?key=`+open+`&teks=`+encodeURIComponent(body.slice(11)) )
            if(crossfire.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(crossfire.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) } 
            } catch (err) { sendMess(ownerNumber, 'crossfire Error : '+ err) }
        break
        case 'battlefield':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}battlefield [TEKS1]-[TEKS2]*\nContoh: *${prefix}battlefield Kelvin-Ilyas*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            const battlefield = body.slice(8).split('-')
            try{
            const tmbtl = await axios.get(`https://api.i-tech.id/tools/battlefield?key=`+open+`&teks1=${battlefield[0]}&teks2=${battlefield[1]}`)
            if(tmbtl.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(tmbtl.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) } 
            } catch (err) { sendMess(ownerNumber, 'battlefield Error : '+ err) }
        break
        case 'flaming':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}flaming [TEKS]*\nContoh: *${prefix}flaming Kelvin*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try{
            const flaming = await axios.get(`https://api.i-tech.id/tools/flaming?key=`+open+`&teks=`+encodeURIComponent(body.slice(9)) )
            if(flaming.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(flaming.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) } 
            } catch (err) { sendMess(ownerNumber, 'flaming Error : '+ err) }
        break
        case 'metalic':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}metalic [TEKS]*\nContoh: *${prefix}metalic Kelvin*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try{
            const metalic = await axios.get(`https://api.i-tech.id/tools/metalic?key=`+open+`&teks=`+encodeURIComponent(body.slice(9)) )
            if(metalic.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(metalic.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) } 
            } catch (err) { sendMess(ownerNumber, 'metalic Error : '+ err) }
        break
        case 'coffee':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}coffee [TEKS]*\nContoh: *${prefix}coffee Kelvin*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try{
            const coffee = await axios.get(`https://api.i-tech.id/tools/coffee?key=`+open+`&teks=`+encodeURIComponent(body.slice(9)) )
            if(coffee.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(coffee.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) }  
            } catch (err) { sendMess(ownerNumber, 'coffee Error : '+ err) }
        break
        case 'tiktod':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}tiktod [TEKS1]-[TEKS2]*\nContoh: *${prefix}tiktod Kelvin-Ilyas*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            const tiktod = body.slice(8).split('-')
            try{
            const tiktods = await axios.get(`https://api.i-tech.id/tools/tiktok?key=`+open+`&teks1=${tiktod[0]}&teks2=${tiktod[1]}`)
            if(tiktods.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(tiktods.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) }  
            } catch (err) { sendMess(ownerNumber, 'tiktod Error : '+ err) }
        break
        case 'lol':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}lol [TEKS]*\nContoh: *${prefix}lol Kelvin*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try{
            const lol = await axios.get(`https://api.i-tech.id/tools/lol?key=`+open+`&teks=`+encodeURIComponent(body.slice(5)) )
            if(lol.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(lol.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) }  
            } catch (err) { sendMess(ownerNumber, 'lol Error : '+ err) }
        break
        case 'lol2':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}lol2 [TEKS]*\nContoh: *${prefix}lol2 Kelvin*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try{
            const lol2 = await axios.get(`https://api.i-tech.id/tools/lol2?key=`+open+`&teks=`+encodeURIComponent(body.slice(6)) )
             if(lol2.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(lol2.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) }  
            } catch (err) { sendMess(ownerNumber, 'lol2 Error : '+ err) }
        break
        case 'love':
            if (args.length < 1) return reply( `Kirim perintah *${prefix}love [TEKS]*\nContoh: *${prefix}love Kelvin*\n Selengkapnya ketik *${prefix}readme*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try{
            const love = await axios.get(`https://api.i-tech.id/tools/love?key=`+open+`&teks=`+encodeURIComponent(body.slice(6)) )
            if(love.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(love.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) }  
            } catch (err) { sendMess(ownerNumber, 'love Error : '+ err) }
        break
        case 'kucing':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            await limitAdd(sender)
            const cat = await axios.get(`https://api.i-tech.id/tools/cat?key=`+open)
            if(cat.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(cat.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) }           
        break    
        case `kambing`:
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            await limitAdd(sender)
            const goat = await axios.get(`https://api.i-tech.id/tools/goat?key=`+open)
            if(goat.data.code == "200") { await limitAdd(sender) 
                txt = goat.data.result
                console.log(txt)
                const buff = await getBuffer(goat.data.result) 
                await sendImages(buff,``) }
            else { reply(ind.maintenance()) }                
        break
        case `rubah`:
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            const rubah = await axios.get(`https://api.i-tech.id/tools/foxes?key=`+open)
            if(rubah.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(rubah.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) } 
        break
        case `koala`:
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            const koala = await axios.get(`https://api.i-tech.id/tools/koala?key=`+open)
            if(koala.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(koala.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) }  
        break
        case `burung`:
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            const bird = await axios.get(`https://api.i-tech.id/tools/bird?key=`+open)
            if(bird.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(bird.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) }   
        break
        case `panda`:
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            const panda = await axios.get(`https://api.i-tech.id/tools/panda?key=`+open)
            if(panda.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(panda.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) }   
        break
        case 'pandar':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            const pandar = await axios.get(`https://api.i-tech.id/tools/pandar?key=`+open)
            if(pandar.data.code == "200") { await limitAdd(sender) 
                const buff = await getBuffer(pandar.data.result) 
                sendImages(buff,``) }
            else { reply(ind.maintenance()) }                
        break
        case `asupan`:
           // if (!isGroupMsg) return await zama.reply(self, ind.grupOnly(), id)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            await limitAdd(sender)
            reply(`Tunggu sebentar kaka...`)
            const ditai = fs.readFileSync('./database/kelompok/asupan.json')
            const ditaijson = JSON.parse(ditai)
            const randtai = Math.floor(Math.random() * ditaijson.length)
            const randtaii = ditaijson[randtai]
            buff = await getBuffer(randtaii)
            SendVideos(buff,`Nih Asupan`)
            break
    //MEDIA-MENU//
        case 'removebg':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try {
                if(isQuotedImage){
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const removebg = await fetchJson(`https://api.i-tech.id/tools/nobg?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(removebg.result)
                    sendImages(buff,'')
                }
                else{
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const removebg = await fetchJson(`https://api.i-tech.id/tools/nobg?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(removebg.result)
                    sendImages(buff,'')
                }
            } catch (err) { sendMess(ownerNumber, 'removebg Error : ' + err) }
        break
        case 'rainbow':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try {
                if(isQuotedImage){
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const rainbow = await fetchJson(`https://api.i-tech.id/tools/rainbow?key=${open}&url=${anu.display_url}`)
                    buff = await getBuffer(rainbow.result)
                    sendImages(buff,'')
                }
                else{
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const rainbow = await fetchJson(`https://api.i-tech.id/tools/rainbow?key=${open}&url=${anu.display_url}`)
                    buff = await getBuffer(rainbow.result)
                    sendImages(buff,'')
                }
            } catch (err) { sendMess(ownerNumber, 'rainbow Error : ' + err) }
        break
        case 'glass':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try {
                if(isQuotedImage){
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const glass = await fetchJson(`https://api.i-tech.id/tools/glass?key=${open}&url=${anu.display_url}`)
                    buff = await getBuffer(glass.result)
                    sendImages(buff,'')
                }
                else{
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const glass = await fetchJson(`https://api.i-tech.id/tools/glass?key=${open}&url=${anu.display_url}`)
                    buff = await getBuffer(glass.result)
                    sendImages(buff,'')
                }
            } catch (err) { sendMess(ownerNumber, 'glass Error : ' + err) }
        break
        case 'trigger':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try {
                if(isQuotedImage){
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const triggered = await fetchJson(`https://api.i-tech.id/tools/triggered?key=${open}&url=${anu.display_url}`)
                    buff = await getBuffer(triggered.result)
                    sendImages(buff,'')
                }
                else{
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const triggered = await fetchJson(`https://api.i-tech.id/tools/triggered?key=${open}&url=${anu.display_url}`)
                    buff = await getBuffer(triggered.result)
                    sendImages(buff,'')
                }
            } catch (err) { sendMess(ownerNumber, 'triggered Error : ' + err) }
        break
        case 'wasted':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try {
                if(isQuotedImage){
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const wasted = await fetchJson(`https://api.i-tech.id/tools/wasted?key=${open}&url=${anu.display_url}`)
                    buff = await getBuffer(wasted.result)
                    sendImages(buff,'')
                }
                else{
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const wasted = await fetchJson(`https://api.i-tech.id/tools/wasted?key=${open}&url=${anu.display_url}`)
                    buff = await getBuffer(wasted.result)
                    sendImages(buff,'')
                }
            } catch (err) { sendMess(ownerNumber, 'wasted Error : ' + err) }
        break
        case 'photomath':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try {
                if(isQuotedImage){
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const photomath = await fetchJson(`https://api.i-tech.id/tools/photomath?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(photomath.result)
                    sendImages(buff,'')
                }
                else{
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const photomath = await fetchJson(`https://api.i-tech.id/tools/photomath?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(photomath.result)
                    sendImages(buff,'')
                }
            } catch (err) { sendMess(ownerNumber, 'photomath Error : ' + err) }
        break
        case 'lines':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try {
                if(isQuotedImage){
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const lines = await fetchJson(`https://api.i-tech.id/tools/lines?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(lines.result)
                    sendImages(buff,'')
                }
                else{
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const lines = await fetchJson(`https://api.i-tech.id/tools/lines?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(lines.result)
                    sendImages(buff,'')
                }
            } catch (err) { sendMess(ownerNumber, 'lines Error : ' + err) }
        break
        case 'glitch':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try {
                if(isQuotedImage){
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const glitch = await fetchJson(`https://api.i-tech.id/tools/glitch?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(glitch.result)
                    sendImages(buff,'')
                }
                else{
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const glitch = await fetchJson(`https://api.i-tech.id/tools/glitch?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(glitch.result)
                    sendImages(buff,'')
                }
            } catch (err) { sendMess(ownerNumber, 'glitch Error : ' + err) }
            break
        case 'hujan':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try {
                if(isQuotedImage){
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const hujan = await fetchJson(`https://api.i-tech.id/tools/hujan?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(hujan.result)
                    sendImages(buff,'')
                }
                else{
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const hujan = await fetchJson(`https://api.i-tech.id/tools/hujan?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(hujan.result)
                    sendImages(buff,'')
                }
            } catch (err) { sendMess(ownerNumber, 'hujan Error : ' + err) }
            break
        case 'sketch':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try {
                if(isQuotedImage){
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const sketch = await fetchJson(`https://api.i-tech.id/tools/sketch?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(sketch.result)
                    sendImages(buff,'')
                }
                else{
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const sketch = await fetchJson(`https://api.i-tech.id/tools/sketch?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(sketch.result)
                    sendImages(buff,'')
                }
            } catch (err) { sendMess(ownerNumber, 'sketch Error : ' + err) }
            break
        case 'draw':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try {
                if(isQuotedImage){
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const draw = await fetchJson(`https://api.i-tech.id/tools/draw?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(draw.result)
                    sendImages(buff,'')
                }
                else{
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const draw = await fetchJson(`https://api.i-tech.id/tools/draw?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(draw.result)
                    sendImages(buff,'')
                }
            } catch (err) { sendMess(ownerNumber, 'draw Error : ' + err) }
            break
        case 'mirror':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try {
                if(isQuotedImage){
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const mirror = await fetchJson(`https://api.i-tech.id/tools/mirror?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(mirror.result)
                    sendImages(buff,'')
                }
                else{
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const mirror = await fetchJson(`https://api.i-tech.id/tools/mirror?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(mirror.result)
                    sendImages(buff,'')
                }
            } catch (err) { sendMess(ownerNumber, 'mirror Error : ' + err) }
            break
        case 'frame':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try {
                if(isQuotedImage){
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const frame = await fetchJson(`https://api.i-tech.id/tools/frame?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(frame.result)
                    sendImages(buff,'')
                }
                else{
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const frame = await fetchJson(`https://api.i-tech.id/tools/frame?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(frame.result)
                    sendImages(buff,'')
                }
            } catch (err) { sendMess(ownerNumber, 'frame Error : ' + err) }
            break
        case 'toilet':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try {
                if(isQuotedImage){
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const toilet = await fetchJson(`https://api.i-tech.id/tools/toilet?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(toilet.result)
                    sendImages(buff,'')
                }
                else{
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const toilet = await fetchJson(`https://api.i-tech.id/tools/toilet?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(toilet.result)
                    sendImages(buff,'')
                }
            } catch (err) { sendMess(ownerNumber, 'toilet Error : ' + err) }
            break
        case 'gta':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try {
                if(isQuotedImage){
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const gta = await fetchJson(`https://api.i-tech.id/tools/gta?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(gta.result)
                    sendImages(buff,'')
                }
                else{
                    var imgbb = require('imgbb-uploader')
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply('[❕] Loading')
                    owgi = await client.downloadAndSaveMediaMessage(encmedia)
                    anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
                    const gta = await fetchJson(`https://api.i-tech.id/tools/gta?key=${open}&link=${anu.display_url}`)
                    buff = await getBuffer(gta.result)
                    sendImages(buff,'')
                }
            } catch (err) { sendMess(ownerNumber, 'gta Error : ' + err) }
            break
        // case 'facebook':
        //     if (isLimit(sender)) return reply(ind.limitend(pusname))
        //     try {
        //         if(isQuotedImage){
        //             var imgbb = require('imgbb-uploader')
        //             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        //             reply('[❕] Loading')
        //             owgi = await client.downloadAndSaveMediaMessage(encmedia)
        //             anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
        //             const fb = await fetchJson(`https://api.i-tech.id/tools/fb?key=${open}&url=${anu.display_url}`)
        //             buff = await getBuffer(fb.result)
        //             sendImages(buff,'')
        //         }
        //         else{
        //             var imgbb = require('imgbb-uploader')
        //             const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        //             reply('[❕] Loading')
        //             owgi = await client.downloadAndSaveMediaMessage(encmedia)
        //             anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
        //             const fb = await fetchJson(`https://api.i-tech.id/tools/fb?key=${open}&link=${anu.display_url}`)
        //             buff = await getBuffer(fb.result)
        //             sendImages(buff,'')
        //         }
        //     } catch (err) { sendMess(ownerNumber, 'fb Error : ' + err) }
        //     break
        // case 'versus':
        //     if (isLimit(sender)) return reply(ind.limitend(pusname))
        //     try {
        //         if(isQuotedImage){
        //             var imgbb = require('imgbb-uploader')
        //             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        //             reply('[❕] Loading')
        //             owgi = await client.downloadAndSaveMediaMessage(encmedia)
        //             anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
        //             const versus = await fetchJson(`https://api.i-tech.id/tools/versus?key=${open}&url=${anu.display_url}`)
        //             buff = await getBuffer(versus.result)
        //             sendImages(buff,'')
        //         }
        //         else{
        //             var imgbb = require('imgbb-uploader')
        //             const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        //             reply('[❕] Loading')
        //             owgi = await client.downloadAndSaveMediaMessage(encmedia)
        //             anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
        //             const versus = await fetchJson(`https://api.i-tech.id/tools/versus?key=${open}&link1=${anu.display_url}`)
        //             buff = await getBuffer(versus.result)
        //             sendImages(buff,'')
        //         }
        //     } catch (err) { sendMess(ownerNumber, 'versus Error : ' + err) }
        //     break
        case `fb`:
            //if (!isregis) return reply( ind.notRegistered())
            //if (!isGroupMsg) return await reply( ind.grupOnly())
            if (isLimit(sender)) return reply(ind.limitend(pusname))

            if (args.length === 0) return reply( `Kirim perintah *${prefix}fb [ Link Fb ]*\nContoh : *${prefix}fb https://www.facebook.com/24609282673/posts/10158628585367674/*`)
            try {
            //reply( mess.wait)
            const resp = await axios.get('https://api.i-tech.id/dl/fb?key='+ open + '&link='+body.slice(4) )
            const rfb = resp.data
            const epbe1 = `*「 FACEBOOK DOWNLOADER 」*\n➸ Aplikasi: Facebook\n➸ Tittle : ${rfb.title}\n\n_Mohon Bersabar Video Sedang di Upload`
            SendVideos(rfb.result[1].url,``) 
            if(rfb.code == "200") { await limitAdd(sender)
                const buff = await getBuffer(rfb.thumbnail)
                sendImages(buff,epbe1) 
                const buff2 = await getBuffer(rfb.result[1].url)
                SendVideos(buff2,``) }
            else { reply(ind.maintenance()) } 
            } catch (err) { sendMess(ownerNumber, 'Facebook Error : ' + err) }
            break 
        case 'tiktok':
            //if (!isregis) return reply( ind.notRegistered())
            if (args.length === 0) return reply(`Kirim perintah *${prefix}tiktok [linkTiktok]*\nContoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*`)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            const tikl = body.slice(8)
            try{
                console.log(args[0])
            const tik = await axios.get(`https://api.i-tech.id/dl/tiktok?key=`+open+`&link=${args[0]}`)
            const tikr = tik.data
            const tikt = `Username : ${tikr.username}\nCaption : ${tikr.description}\n\n_Video Sedang di Upload Mohon Bersabar...._`
            if(tikr.code == "200"){
                buff = await getBuffer(tikr.image)
                sendImages(buff, tikt)
                buff2 = await getBuffer(tikr.video_nowm)
                SendVideos(buff2, '')
                await limitAdd(sender)
            } else { reply(ind.maintenance())
                sendMess(ownerNumber, '<<INFO>>\nTiktok: *Tiktok Invalid*')}
            } catch (err) { sendMess(ownerNumber, 'Tiktok Error : '+ err) } 
            break
        case `ytplay`:
            if (args.length == 0) return reply( `⚠️ Format salah!\nUntuk mencari lagu dari youtube\n\nPenggunaan: #play judul lagu`)
            if (isLimit(sender)) return reply(ind.limitend())
            try{    
                const ytcari = await axios.get(`https://api.i-tech.id/dl/ytplay?key=`+open+`&query=${args[0]}`)
                const ytcr = ytcari.data
                if(ytcr.code == "200"){
                    buff = await getBuffer(ytcr.thumbnail)
                    sendImages(buff,`Tittle : ${ytcr.title}\n\n_Mohon Menunggu Video Sedang di Kirim_`)
                    buff2 = await getBuffer(ytcr.url_video)
                    SendVideos(buff2,'')
                    await limitAdd(sender)
            } else{reply(ind.maintenance()), sendMess(ownerNumber, '<<INFO>>\nytplay: *ytplay Invalid*')}
            } catch (err) { sendMess(ownerNumber, 'ytplay Error : '+ err) }
        break
        case `ytmp4`:
            if (args.length === 0)  return reply( `Kirim Perintah *${prefix}ytmp4 [link]*\nExample : *${prefix}ytmp4 https://youtu.be/F4oJsxLBfGA*`)
            if (isLimit(sender)) return reply(ind.limitend())
            try{
            const ytnva = body.slice(7)
            const ytnv = await axios.get(`https://api.i-tech.id/dl/yt?key=`+ open + `&link=` + ytnva)
            const ytnv1= ytnv.data
            if(ytnv1.code == "200"){
                bufft = `*「 YOUTUBE MP4 」*\n\n• *Judul* : ${ytnv1.title}\n• *Filesize* : ${ytnv1.size}\n\n__Maaf, Durasi video melebihi 30 MB. Silahkan download video melalui link dibawah_.\n${ytnv1.url_video}`
                buff = await getBuffer(ytnv1.url_video)
            if (Number(ytnv1.size.split(' MB')[0]) > 40.00) return reply(bufft)
            reply(`*「 YOUTUBE MP4 」*\n\n• *Judul* : ${ytnv1.title}\n• *Filesize* : ${ytnv1.size}\n\n_Mohon Menunggu, Video Sedang di Upload_`)
            SendVideos(buff,'')
            await limitAdd(sender)
            } else { reply(ind.maintenance()), sendMess(ownerNumber, '<<INFO>>\nytmp4: *ytmp4 Invalid*') }
            } catch (err) { sendMess(ownerNumber, 'ytmp4 Error : '+ err) }
        break
        case `ytmp3`:
            if (args.length === 0)  return reply( `Kirim Perintah *${prefix}ytmp3 [link]*\nExample : *${prefix}ytmp3 https://youtu.be/F4oJsxLBfGA*`)
            if (isLimit(sender)) return reply(ind.limitend() )
            try{
            const ytm = body.slice(7)
            const ytm1 = await axios.get(`https://api.i-tech.id/dl/yt?key=`+ open + `&link=` + ytm)
            const ytmr= ytm1.data
            if(ytmr.code == "200"){
            if (Number(ytmr.size.split(' MB')[0]) > 40.00) return reply(`*「 YOUTUBE MP4 」*\n\n• *Judul* : ${ytmr.title}\n• *Filesize* : ${ytmr.size}\n\n__Maaf, Durasi video melebihi 30 MB. Silahkan download video melalui link dibawah_.\n${ytmr.url_audio}`)
            reply(`*「 YOUTUBE MP3 」*\n\n• *Judul* : ${ytmr.title}\n• *Filesize* : ${ytmr.size}\n\n_Mohon Menunggu, Video Sedang di Upload_`)
            buff = await getBuffer(ytmr.url_audio)
            await sendAudio(buff,'')
            await limitAdd(sender)
            } else {reply(ind.maintenance() ), sendText(ownerNumber, '<<INFO>>\nytmp3: *ytmp3 Invalid*') }
            } catch (err) { sendMess(ownerNumber, 'ytmp3 Error : '+ err) }
        break
        case `cocofun`:
            if (args.length === 0)  return reply( `Kirim Perintah *${prefix}cocofun [link]*\nExample : *${prefix}cocofun https://www.cocofun.com/p/540617916_3377707895*`)
            if (isLimit(sender)) return reply(ind.limitend() )
            try{
            const cocofun = await axios.get(`https://api.i-tech.id/dl/cocofun?key=`+ open + `&link=` + body.slice(9) )
            const cocor= cocofun.data
            if(cocor.code == "200"){
            reply(`*「 COCOFUN DOWNLOADER 」*\n\n• *Judul* : ${cocor.caption}\n\n_Mohon Menunggu, Video Sedang di Upload_`)
            buff = await getBuffer(cocor.url)
            SendVideos(buff,'')
            await limitAdd(sender)
            } else {reply(ind.maintenance()), sendMess(ownerNumber, '<<INFO>>\ncocofun: *cocofun Invalid*') }
            } catch (err) { sendMess(ownerNumber, 'cocofun Error : '+ err) }
        break
        case `snack`:
            if (args.length === 0)  return reply( `Kirim Perintah *${prefix}snack [link]*\nExample : *${prefix}snack https://www.snack.com/p/540617916_3377707895*`)
            if (isLimit(sender)) return reply(ind.limitend() )
            try{
            const snackvid = await axios.get(`https://api.i-tech.id/dl/snackdl?key=`+ open + `&link=` + body.slice(7) )
            const snackr= snackvid.data
            if(snackr.code == "200"){
            const snackteks = `*「 SNACK DOWNLOADER 」*\n\n• *Judul* : ${snackr.title}\n• *Liket* : ${snackr.likes}\n\n_Mohon Menunggu, Video Sedang di Upload_`
            buff = await getBuffer(snackr.thumbnail)
            sendImages(buff,snackteks)
            buff2 = await getBuffer(snackr.url)
            sendAudio(buff2,'')
            await limitAdd(serial)
            } else { reply(ind.maintenance() ), sendMess(ownerNumber, '<<INFO>>\nsnack: *snack Invalid*') }
            } catch (err) { sendMess(ownerNumber, 'snack Error : '+ err) }
        break
        case `smule`:
            if (args.length === 0)  return reply( `Kirim Perintah *${prefix}smule [link]*\nExample : *${prefix}smule https://www.smule.com/p/540617916_3377707895*`)
            if (isLimit(sender)) return reply(ind.limitend() )
            const smule = await axios.get(`https://api.i-tech.id/dl/smule?key=${api}&link=${body.slice(7)}`)
            const smlr = smule.data
            try{
            if (smlr.code != "200") {
                    reply(ind.maintenance())
                    sendMess(ownerNumber, '<<INFO>>\nsmule: *smule Invalid*')
                } else {
                    const smlrt = `*「 SMULE DOWNLOADER 」*\n\n➸ *Title : * : ${smlr.title}\n➸ *Caption* : ${smlr.caption}\n\n_Mohon Menunggu, Video sedang di Upload_`
                    buff = await getBuffer(smlr.thumbnail)
                    sendImages(buff,smlrt)
                    buff2 = await getBuffer(smlr.url)
                    sendAudio(buff2,'')
                    await limitAdd(sender)
                }
            } catch (err) { sendMess(ownerNumber, 'snack Error : '+ err) }
            break 
        case `twitter`:
            if (args.length === 0)  return reply(`Kirim Perintah *${prefix}smule [link]*\nExample : *${prefix}smule https://twitter.com/sellaprwt/status/1349568876476944384*`)
            if (isLimit(sender)) return reply(ind.limitend() )
                const twitter = await axios.get(`https://api.i-tech.id/dl/twitter?key=${api}&link=${body.slice(9)}`)
                const twtr = twitter.data
                try{
                if (twtr.code != "200") {
                        reply(ind.maintenance() )
                        sendMess(ownerNumber, '<<INFO>>\ntwitter: *twitter Invalid*')
                     } else {
                        const Ttwtr = `*「 TWITTER DOWNLOADER 」*\n\n➸ *Title : * : ${twtr.title}\n\n_Mohon Menunggu, Video sedang di Upload_`
                        buff = await getBuffer(twtr.thumbnail)
                        sendImages(buff,Ttwtr)
                        buff2 = await getBuffer(twtr.result[2].url)
                        SendVideos(buff2,'')
                        await limitAdd(sender)
                    }
                } catch (err) { sendMess(ownerNumber, 'snack Error : '+ err) }
        break
        case `igstalk`:
            if (isLimit(sender)) return reply(ind.limitend() )
            if (args.length === 0)  return reply(`Kirim perintah *${prefix}igstalk @username*\nContoh *${prefix}igstalk duar_amjay*`)
            try {
            const istalk2 = await axios.get('https://api.i-tech.id/dl/stalk?key=' + open + '&username=' + body.slice(9))
            const { username, bio, following, followers, name, pic_hd, post, private } = istalk2.data
            const istalk3 = `*「 INSTAGRAM PROFILE 」*

• *Username:* @${username}
• *Nama:* ${name}
• *Deskripsi:* ${bio}
• *Pengikut:* ${followers}
• *Mengikuti*: ${following}
• *Jumlah Postingan:* ${post}
• *Private:* ${private}
• *Link:* https://instagram.com/${username}`
            buff =  await getBuffer(pic_hd)
            if(istalk2.data.code =="200"){
            sendImages(buff,istalk3)
            await limitAdd(sender)
            }else { reply(ind.maintenance())
                sendMess(ownerNumber, '<<INFO>>\nigstalk: *igstalk Invalid*')}
            } catch (err) { sendMess(ownerNumber, 'Igstalk Error : ' + err) }
          break
        case `tiktokstalk`:
            if (isLimit(sender)) return reply(ind.limitend() )
            if (args.length === 0)  return reply(`Kirim perintah *${prefix}tiktokstalk @username*\nContoh *${prefix}tiktokstalk @fatimahalattas_*`)
            try {
            const tiktokstalk = await axios.get(`https://api.i-tech.id/dl/tiktoks?key=`+open+`&query=${body.slice(13)}`)
            const tiktoks = tiktokstalk.data
            const tiktokds = `*「 TIKTOK PROFILE 」*

• *Username:* @${tiktoks.username}
• *Nama:* ${tiktoks.name}
• *Deskripsi:* ${tiktoks.bio}
• *Pengikut:* ${tiktoks.followers}
• *Mengikuti*: ${tiktoks.following}
• *Jumlah Postingan:* ${tiktoks.post}
• *Like:* ${tiktoks.like}
• *Link:* ${tiktoks.url}`
            buff = getBuffer(tiktoks.pic)
            if(tiktoks.code =="200"){
            sendImages(buff,tiktokds)
            await limitAdd(sender)
            }else { reply(ind.maintenance())
            sendMess(ownerNumber, '<<INFO>>\ntiktokstalk: *tiktokstalk Invalid*')}
            } catch (err) { sendMess(ownerNumber, 'tiktokstalk Error : ' + err) }
          break
        case `smulestalk`:
            if (isLimit(sender)) return reply(ind.limitend() )
            if (args.length === 0)  return reply(self, `Kirim perintah *${prefix}smulestalk username*\nContoh *${prefix}smulestalk JeffKraad*`)
            try {
            const smulestalk = await axios.get(`https://api.i-tech.id/dl/smules?key=`+open+`&username=${body.slice(12)}`)
            const smuler = tiktokstalk.data
            const smulet = `*「 SMULE PROFILE 」*

• *Username:* @${smuler.username}
• *Nama:* ${smuler.name}
• *Deskripsi:* ${smuler.bio}
• *Pengikut:* ${smuler.followers}
• *Mengikuti*: ${smuler.following}`
            buff = await getBuffer(smuler.pic)
            if(smuler.code =="200"){
            sendImages(buff,smulet)
            await limitAdd(sender)
            }else { reply(ind.maintenance()) 
                sendMess(ownerNumber, '<<INFO>>\smulestalk: *tiktokstalk Invalid*')}
            } catch (err) { sendMess(ownerNumber, 'smulestalk Error : ' + err) }
          break
        case `ig`:
        case `instagram`:
            if (isLimit(sender)) return reply(ind.limitend() )
            if (args.length === 0) return reply( `Kirim perintah *${prefix}ig [ Link Instagram ]* untuk contoh silahkan kirim perintah *${prefix}readme*`)
            if (!args[0].match(isUrl) && !args[0].includes('instagram.com')) return reply(`Maaf, link yang kamu kirim tidak valid. [Invalid Link]`)
            await reply(mess.wait);
            try{
            const ig = await axios.get(`https://api.i-tech.id/dl/igdl?key=`+ open + `&link=`+body.slice(4))
            const igr = ig.data
            const tig = `*「 INSTAGRAM DOWNLOADER 」*\nUsername : ${igr.username}\nCaption : ${igr.caption}`
            buff = await getBuffer(igr.result.url)
            buff2 = await getBuffer(igr.result.url)
            if(igr.result.type = 'image/jpeg') { sendImages(buff,tig) }
            else {SendVideos(buff2,tig) }
            }catch (err) { sendMess(ownerNumber, 'instagram Error : ' + err) }
            break
        case `wiki`:
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            try{
            if (args.length === 0) return reply(`Kirim perintah *${prefix}wiki [ Query ]*\nContoh : *${prefix}wiki asu*`)
            const wiki = await axios.get(`https://api.i-tech.id/tools/wiki?key=`+open+`&query=${body.slice(6)}`)
            if(wiki.data.code == "200"){await limitAdd(sender), reply(wiki.data.result) }
            else{reply(ind.maintenance()), sendMess(ownerNumber, '<<INFO>>\nwiki: *wiki Invalid*')}            
            }catch (err) { sendMess(ownerNumber, 'wiki Error : '+ err) }
        case `kbbi`:
            //if (!isregis) return reply( ind.notRegistered())
            //if (!isGroupMsg) return await reply( ind.grupOnly())
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            if (args.length === 0) return reply(  `Kirim perintah *${prefix}kbbi [ Query ]*\nContoh : *${prefix}kbbi asu*`)
            const kbbl2 = await axios.get(`https://api.i-tech.id/tools/kbbi?key=` + open + `&query=${agrs[0]}`)
            console.log(kbbl2.data)
            if (kbbl2.data.code != "200") {
                reply(ind.maintenance()), sendMess(ownerNumber, '<<INFO>>\nkbbi: *kbbi Invalid*')
            } else {
                reply(`*「 KBBI 」*\n\n➸ *Query* : ${kbbl2.data.result[0].kata}\n\n➸ *Result* : ${kbbl2.data.result[0].arti}`)
                await limitAdd(sender)
            }
            break
        case '`':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            if (args.length === 0)  return reply(self, `Kirim perintah *${prefix}cekjodoh kamu-pasangan*\nContoh *${prefix}cekjodoh kelvin-entahlah*`)
            const cjdoh = body.slice(10).split('-')
            try{
                const cekjodoh = await fetchJson(`https://api.i-tech.id/tools/jodoh?key=${open}&p1=${cjdoh[0]}&p2=${cjdoh[1]}`)
                if(cekjodoh.code =="200"){
                    buff = await getBuffer(cekjodoh.gambar)
                    jodohteks = `Sisi Positif : ${cekjodoh.sisi.positif}\n\nSisi Negatif : ${cekjodoh.sisi.negatif}`
                    sendImages(buff,jodohteks)
                    await limitAdd(sender)
                } else{reply(ind.maintenance())
            sendMess(ownerNumber, '<<INFO>>\ntiktokstalk: *Cekjodoh Invalid*')}
            } catch (err) { sendMess(ownerNumber, 'Cekjodoh Error : ' + err) }
        break
        case 'translate':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            if (args.length === 0)  return reply(self, `Kirim perintah *${prefix}translate bahasa-text*\nContoh *${prefix}translate en-aku sayang kamu*`)
                try{
                    const transl = body.slice(11).split('-')
                    console.log(transl)
                    const translate = await axios.get(`https://api.i-tech.id/tools/translate?key=${open}&lang=${transl[0]}&teks=${transl[1]}`)
                    console.log(translate)
                    if(cekjodoh.data.code =="200"){ reply(translate.data.result) }
                        else { reply(ind.maintenance() ) , sendMess(ownerNumber, 'translate Invalid ') }
                } catch (err) { sendMess(ownerNumber, 'translate Error : ' + err) }
        break
        case 'moddroid':
				//Case By PojanGanz
                //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
				hepi = data.result[0] 
				teks = `*Nama*: ${data.result[0].title}\n*Publisher*: ${hepi.publisher}\n*Mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*Latest version*: ${hepi.latest_version}\n*Genre*: ${hepi.genre}\n*Link:* ${hepi.link}\n*Download*: ${hepi.download}`
				buffer = await getBuffer(hepi.image)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
				await limitAdd(sender)
		break
		case 'happymod':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
				hupo = data.result[0] 
				teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
				buffer = await getBuffer(hupo.image)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
				await limitAdd(sender)
				break
		case 'apkpure':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Nama APK* : ${i.title}\n*Link* : ${i.url}\n*Rating* : ${i.rating}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
		case 'jadwalbola': 			
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://api.vhtear.com/jadwalbola&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result.data) {
					teks += `► *Kick Off* : ${i.kickoff}\n► *Pertandingan* : ${i.pertandingan}\n► *Stasiuntv* : ${i.stasiuntv}\n\n=================\n\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
		case 'coronainfo': 
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://api.vhtear.com/corona&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Updated* : ${i.updated}\n*Country* : ${i.country}\n*CountryInfo* : \n*ID* : ${i.countryInfo._id}\n*iso2* : ${i.countryInfo.iso2}\n*iso3* : ${i.countryInfo.iso3}\n*lat* : ${i.countryInfo.lat}\n*long* : ${i.countryInfo.long}\n*cases* : ${i.cases}\n*todayCases* : ${i.todayCases}\n*deaths* : ${i.deaths}\n*todayDeaths* : ${i.todayDeaths}\n*recovered* : ${i.recovered}\n*todayRecovered* : ${i.todayRecovered}\n*active* : ${i.active}\n*critical* : ${i.critical}\n*casesPerOneMillion* : ${i.casesPerOneMillion}\n*deathsPerOneMillion* : ${i.deathsPerOneMillion}\n*tests* : ${i.tests}\n*testsPerOneMillion* : ${i.testsPerOneMillion}\n*population* : ${i.population}\n*continent* : ${i.continent}\n*oneCasePerPeople* : ${i.oneCasePerPeople}\n*oneDeathPerPeople* : ${i.oneDeathPerPeople}\n*oneTestPerPeople* : ${i.oneTestPerPeople}\n*activePerOneMillion* : ${i.activePerOneMillion}\n*recoveredPerOneMillion* : ${i.recoveredPerOneMillion}\n*criticalPerOneMillion* : ${i.criticalPerOneMillion}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
		case 'bitly':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				client.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=BotWeA`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'cuttly':
				 				
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				client.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
				case 'pornhub2':
                	
					var gh = body.slice(10)
					var porn = gh.split("/")[0];
					var hub = gh.split("/")[1];
					if (args.length < 1) return reply(`ã€Œâ—ã€Contoh : ${prefix}pornhub Ojan/Hub`)
					reply(ind.wait())
					alan = await getBuffer(`https://vinz.zeks.xyz/api/pornhub?text1=${porn}&text2=${hub}`)
					client.sendMessage(from, alan, image, {quoted: mek})
					await limitAdd(sender)
				break
		// case 'wasted':
  //       case 'was':
  //               if (isBanned) return reply('```Maaf, Kamu telah di Banned...!```')
  //               var imgbb = require('imgbb-uploader')
  //               if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  //               ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  //               reply('[❕] Loading')
  //               owgi = await client.downloadAndSaveMediaMessage(ger)
  //                anu = await imgbb("7fbe9c37ac4ebb843fd3e109b1458317", "./undefined.jpeg")
  //                console.log(anu)
  //               teks = `${anu.display_url}`
  //               ranp = getRandom('.gif')
  //               rano = getRandom('.webp')
  //               anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
  //               exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
  //               fs.unlinkSync(ranp)
  //               if (err) return reply(mess.error.stick)
  //               nobg = fs.readFileSync(rano)
  //               client.sendMessage(from, nobg, sticker, { quoted: mek })
  //               fs.unlinkSync(rano) }) } else { reply('Gunakan foto!') }
  //       break
		// case 'triggered':
  //       case 'ger':
  //               if (isBanned) return reply('```Maaf, Kamu telah di Banned...!```')
  //               var imgbb = require('imgbb-uploader')
  //               if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  //               ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  //               reply('[❕] Loading')
  //               owgi = await client.downloadAndSaveMediaMessage(ger)
  //               anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  //               teks = `${anu.display_url}`
  //               ranp = getRandom('.gif')
  //               rano = getRandom('.webp')
  //               anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
  //               exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, 
  //                   (err) => {fs.unlinkSync(ranp)
  //               if (err) return reply(mess.error.stick)
  //               nobg = fs.readFileSync(rano)
  //               client.sendMessage(from, nobg, sticker, {quoted: mek})
  //               fs.unlinkSync(rano) })                                   
  //               } else {reply('Gunakan foto!') }
  //       break
			case 'lionlogo':
				var gh = body.slice(10) 
				var lion = gh.split("/")[0]
				var logo = gh.split("/")[1]
				if (args.length < 1) return reply(`「❗」Contoh : ${prefix}lionlogo Ojan/Senpai`)
				reply('[❕] Loading') 
				buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome2/lionlogo?apikey=RamlanID&text1=${lion}&text2=${logo}`) 
				client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan Lupa Follow IG BOT : instagram.com/miku.bot*', quoted: mek})
				await limitAdd(sender) 
			break
			case 'pornhub':
				var gh = body.slice(9) 
				var porn = gh.split("/")[0]
				var hub = gh.split("/")[1]
				if (args.length < 1) return reply(`「❗」Contoh : ${prefix}pornhub Ojan/Hub`)
				reply('[❕] Loading') 
				buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome2/pornhub?apikey=RamlanID&text1=${porn}&text2=${hub}`) 
				client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan Lupa Follow IG BOT : instagram.com/miku.bot*', quoted: mek})
				await limitAdd(sender) 
			break
			case 'valorant':
				var gh = body.slice(10) 
				var teks1 = gh.split("/")[0]
				var teks2 = gh.split("/")[1]
				var teks3 = gh.split("/")[2]
				if (args.length < 1) return reply(`「❗」Contoh : ${prefix}pornhub Ojan/Develor/Bot`)
				reply('[❕] Loading') 
				buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/ephoto3/valorantbanner?apikey=RamlanID&text1=${teks1}&text2=${teks2}&text3=${teks3}`) 
				client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan Lupa Follow IG BOT : instagram.com/miku.bot*', quoted: mek})
			break
			case 'amongus':
                if (!isRegister) return reply(mess.only.daftarB)     
                if (isBanned) return reply('```Maaf, Kamu telah di Banned...!```')
                if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Ojan`)
                txt = args.join(" ")
                reply('[❕] Loading')
                buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/amongus?apikey=RamlanID&text=${txt}`)
                client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan Lupa Follow IG BOT : instagram.com/miku.bot*', quoted: mek})
            break
            case 'googletext':
					var gh = body.slice(12)
					var yogi = gh.split("/")[0];
					var ganz = gh.split("/")[1];
					var abiez = gh.split("/")[2];
					if (args.length < 1) return reply(`ã€Œâ—ã€Contoh : ${prefix}googletext Ojan/gans/abiezz`)
					reply(ind.wait())
					yogi = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${yogi}&text2=${ganz}&text3=${abiez}`)
					client.sendMessage(from, yogi, image, {quoted: mek})
					await limitAdd(sender)
			break
		case 'shorturl':
               client.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/shorturl-at?url=${args[0]}`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
                reply(hasil)
                await limitAdd(sender)
                break
		case 'tinyurl':
				 				
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				client.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://api.zeks.xyz/api/urlshort?url=${args[0]}&apikey=apivinz`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
            case 'nangis':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://api.shizukaa.xyz/api/bj18?apikey=client633', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'blowjob':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
		case 'rdmhentai':
		case 'randomhentai':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					
					if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                                        gatauda = body.slice(12)
					reply(ind.wait())
                                        anu = await fetchJson(`https://api.shizukaa.xyz/api/randomimage?apikey=client633`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
                                        break
		case 'cium':
                                        //Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://api.shizukaa.xyz/api/randomimage?apikey=client633', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
		case 'peluk':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://api.shizukaa.xyz/api/randomimage?apikey=client633', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
		case 'nulis':
				 				
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(6)
				reply(ind.wait())
				ct = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${ct}&apikey=apivinz`)
				client.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'nulis2':
				 				
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(7)
				ll1 = ct.split("/")[0];
                ll2 = ct.split("/")[1];
                ll3 = ct.split("/")[2];
                ll4 = ct.split("/")[3];
				reply(ind.wait())
				ct = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${ll1}&kelas=${ll2}&text=${ll3}&tinta=${ll4}`)
				client.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'galaxtext':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/galaxywallpaper?apikey=RamlanID&text=${ct}`)
				client.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'bplogo':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				vinz = body.slice(8)
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/logobp?text=${vinz}&apikey=apivinz`)
				buffer = await getBuffer(anu.result)
				client.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'tahta':
         if (isBanned) return reply('Maaf Kamu Sudah Terbanned astagfirullah') 
         if (args.length == 0) return reply(`Usage: ${prefix} + command} text\nExample: ${prefix + command} Ojan`) 
         teks = args.join(" ") 
         reply('[❕] Loading') 
         buffer = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${teks}&apikey=apivinz`) 
         client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan Lupa Follow IG BOT : instagram.com/miku.bot*', quoted: mek})
         break
		case 'darkneon':
                case 'candlemug':
                case 'lovemsg':
                case 'mugflower':
                case 'narutobanner':
                case 'paperonglass':
                case 'romancetext':
                case 'shadowtext':
                case 'coffeecup':
                case 'coffeecup2':
                case 'glowingneon':
                case 'underwater':
                case 'hpotter':
                case 'woodblock':
                //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Miku`)
                    txt = args.join(" ")
                    reply('[â•] Loading')
                    buffer = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?text=${txt}`)
                    client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan lupa follow ig instagram.com/miku.bot*', quoted: mek})
         break
         case 'wanted':
	//if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.quotedmessage
	  reply(ind.wait())
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
      console.log(anu)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=kelvin`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'gtav':
	//if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'facebookpage':
	//if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'costumwp':
	//if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pantaimalam':
	//if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pencil':
	//if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'bakar':
	//if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'crossgun':
	//if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
		case 'hartatata3':
				 				
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(12)
				reply(ind.wait())
				bh = await getBuffer(`https://api.vhtear.com/hartatahta?text=${bh}&apikey=c1d162b46e634f389efa1ac715f03d03`)
				client.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'text2gif':
				 				
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(10)
				reply(ind.wait())
				bh = await getBuffer(`https://api.vhtear.com/textxgif?text=${bh}&apikey=c1d162b46e634f389efa1ac715f03d03`)
				client.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'attp':
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp Wajahku Ganteng*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				client.sendMessage(from, attp2, sticker, {quoted: mek})
				break
		case 'ttp':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Kata`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp3?apikey=RamlanID&text=${txt}`)
                    client.sendMessage(from, buffer, sticker, { quoted: mek })
                    break
		case 'thunder':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bhaine = body.slice(9)
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/thundertext?text=${bhaine}&apikey=apivinz`)
				buffer = await getBuffer(anu.result)
				client.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'imgmaker':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Url png/jpg mana kak')
				ainez = body.slice(10)
				reply(ind.wait())
				anu = await fetchJson(`http://lolhuman.herokuapp.com/api/quotemaker?apikey=RamlanID&text=${ainez}`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				client.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'calendermaker':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Url png/jpg mana kak')
				ainez2 = body.slice(15)
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/calendar?img=${ainez2}&apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				client.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'nekonime':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    gatauda = body.slice(8)
					reply(ind.wait())
                    anu = await fetchJson(`https://api.zeks.xyz/api/nekonime?apikey=apivinz`, {method: 'get'})
                    buffer = await getBuffer(anu.result.result)
                    client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
                    break
		case 'husbu':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(13)
				reply(ind.wait())
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu2?apikey=BotWeA`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
		case 'shota':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=BotWeA`)
						buffer = await getBuffer(res.image)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai husbumu'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
                case 'jokerlogo':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teks nya mana kak?')
				tels = body.slice(10)
				reply(ind.wait())
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${tels}&apikey=BotWeA`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
                case 'anime':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(5)
				reply(ind.wait())
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'slowmo':
				
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break

				case 'tupai':
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemok':
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'bass':                 
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
                case 'neko':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(4)
				reply(ind.wait())
				anu = await fetchJson(`https://alfians-api.herokuapp.com/api/nekonime`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'tolol': 
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teks nya mana ? titit ?')
				gatauda = body.slice(6)
				reply(ind.wait())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/toloserti?apikey=RamlanID&name=${gatauda}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				
				case 'emoji2img': 
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('emoji nya mana sayang ?')
				gatauda = body.slice(11)
				reply(ind.wait())
				buffer = await getBuffer(`https://api.zeks.xyz/api/emoji-image?apikey=apivinz&emoji=${gatauda}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				
                case 'memeindo':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(8)
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'haram':
         if (isBanned) return reply('Maaf kamu sudah terbenned astagfirullah!')
         if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Kamu`)
         teks = args.join(" ")
         reply('[❕] Loading')
         buffer = await getBuffer(`http://rzky.net/docs/api/AnakHaramSerti/img.php?nama=${teks}`) 
         client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan Lupa Follow IG BOT : instagram.com/miku.bot*', quoted: mek})
         break
         
         case 'gay':
         if (isBanned) return reply('Maaf kamu sudah terbenned astagfirullah!')
         if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Kamu`)
         teks = args.join(" ") 
         reply('[❕] Loading') 
         buffer = await getBuffer(`http://rzky.net/docs/api/GaySerti/img.php?nama=${teks}`) 
         client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan Lupa Follow IG BOT : instagram.com/miku.bot*', quoted: mek})
         break
         
         case 'surga':
         if (isBanned) return reply('Maaf kamu sudah terbenned astagfirullah!')
         if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Kamu`)
         teks = args.join(" ") 
         reply('[❕] Loading') 
         buffer = await getBuffer(`http://rzky.net/docs/api/SurgaSerti/img.php?nama=${teks}`) 
         client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan Lupa Follow IG BOT : instagram.com/miku.bot*', quoted: mek})
         break
         
         case 'editod':
         if (isBanned) return reply('Maaf kamu sudah terbenned astagfirullah!')
         if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Kamu`)
         teks = args.join(" ") 
         reply('[❕] Loading') 
         buffer = await getBuffer(`http://rzky.net/docs/api/EditorBerkelasSerti/img.php?nama=${teks}`) 
         client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan Lupa Follow IG BOT : instagram.com/miku.bot*', quoted: mek})
         break
         
         case 'hekerserti':
         if (isBanned) return reply('Maaf kamu sudah terbenned astagfirullah!')
         if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Kamu`)
         teks = args.join(" ") 
         reply('[❕] Loading') 
         buffer = await getBuffer(`http://rzky.net/docs/api/HekerSerti/img.php?nama=${teks}`) 
         client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan Lupa Follow IG BOT : instagram.com/miku.bot*', quoted: mek})
         break
         
         case 'ffserti':
         if (isBanned) return reply('Maaf kamu sudah terbenned astagfirullah!')
         if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Kamu`)
         teks = args.join(" ") 
         reply('[❕] Loading') 
         buffer = await getBuffer(`http://rzky.net/docs/api/FFSerti/img.php?nama=${teks}`) 
         client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan Lupa Follow IG BOT : instagram.com/miku.bot*', quoted: mek})
         break
         
         case 'ffserti2':
         if (isBanned) return reply('Maaf kamu sudah terbenned astagfirullah!')
         if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Kamu`)
         teks = args.join(" ") 
         reply('[❕] Loading') 
         buffer = await getBuffer(`http://rzky.net/docs/api/FFSerti4/img.php?nama=${teks}`) 
         client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan Lupa Follow IG BOT : instagram.com/miku.bot*', quoted: mek})
         break
         
         case 'mlserti':
         if (isBanned) return reply('Maaf kamu sudah terbenned astagfirullah!')
         if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Kamu`)
         teks = args.join(" ") 
         reply('[❕] Loading') 
         buffer = await getBuffer(`http://rzky.net/docs/api/MLTourSerti2/img.php?nama=${teks}`) 
         client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan Lupa Follow IG BOT : instagram.com/miku.bot*', quoted: mek})
         break
         
         case 'pubgserti':
         if (isBanned) return reply('Maaf kamu sudah terbenned astagfirullah!')
         if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Kamu`)
         teks = args.join(" ") 
         reply('[❕] Loading') 
         buffer = await getBuffer(`http://rzky.net/docs/api/PubgTourSerti3/img.php?nama=${teks}`) 
         client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan Lupa Follow IG BOT : instagram.com/miku.bot*', quoted: mek})
         break
         
         case 'lollogo':
         if (isBanned) return reply('Maaf Kamu Sudah Terbanned astagfirullah') 
         if (args.length == 0) return reply(`Usage: ${prefix} + command} text\nExample: ${prefix + command} Ojan`) 
         teks = args.join(" ") 
         reply('[❕] Loading') 
         buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/photooxy3/bannerlol?apikey=RamlanID&text=${teks}`) 
         client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan Lupa Follow IG BOT : instagram.com/miku.bot*', quoted: mek})
         break 
         
				// case 'meme': 
    //              //if (!isRegistered) return reply( ind.noregis())
				// if (isLimit(sender)) return reply(ind.limitend(pusname))
				// if (isBanned) return reply('Maaf kamu sudah terbenned!')
				// reply(ind.wait())
				// anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/meme?apikey=RamlanID`, {method: 'get'})
				// buffer = await getBuffer(anu.result)
				// client.sendMessage(from, buffer, image, {quoted: mek})
				// await limitAdd(sender)
				// break 
				
		case 'darkjoke': 
				 // Fix Bug By RzkyO				
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				darkjoke = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`, {method: 'get'})
                buffer = await getBuffer(darkjoke.result)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
		case 'randomkpop':
				gatauda = body.slice(10)
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=BotWeA`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih kpopnya kak...'})
				await limitAdd(sender)
				break
		case 'aesthetic':
				gatauda = body.slice(9)
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result.result)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih aestheticnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep': 
				gatauda = body.slice(9)
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Maxim&text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep2': 
				gatauda = body.slice(10)
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Alok&text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep3': 
				gatauda = body.slice(10)
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Alvaro&text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep4': 
				gatauda = body.slice(10)
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Caroline&text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'logoepep5': 
				gatauda = body.slice(10)
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Kla&text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'gamelogo': 
				gatauda = body.slice(9)
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/gamelogo?text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
		case 'pornlogo': 
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					var gh = body.slice(10)
					var gbl7 = gh.split("/")[0];
					var gbl8 = gh.split("/")[1];
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${gbl7}&text2=${gbl8}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
                case 'joox':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
				if (data.error) return reply(data.error)
				infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
				buffer = await getBuffer(data.result.thumb)
				lagu = await getBuffer(data.result.mp3)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
				await limitAdd(sender)
				break
		case 'play':   
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				play = body.slice(5)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.source}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
				buffer = await getBuffer(anu.result.thumbnail)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				lagu = await getBuffer(anu.result.url_audio)
				client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
				await limitAdd(sender)
				break
		/*case 'play2':   
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				played = body.slice(6)
				anu = await fetchJson(`https://videfikri.com/api/ytplay/?query=${played}`)
				if (anu.error) return reply(anu.error)
				iinfomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.id}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
				buffer = await getBuffer(anu.result.thumbnail)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: iinfomp3})
				laguu = await getBuffer(anu.result.url)
				client.sendMessage(from, laguu , audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
				await limitAdd(sender)
				break*/
		case 'limit':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				checkLimit(sender)
				break
		case 'vinta':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				vin = body.slice(7)
				reply(ind.wait())
				vintage = await getBuffer(`https://m.arugaz.my.id/api/textpro/realvintage?text=${vin}`)
				client.sendMessage(from, vintage, image, {caption: 'Nih kak ${vin}', quoted: mek})
				await limitAdd(sender)
				break
                case '1cak':
				    try {
					    //Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					    if (isLimit(sender)) return reply(ind.limitend(pusname))
					    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					    if (!isGroup) return reply(ind.groupo())
					    if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://st4rz.herokuapp.com/api/1cak`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih Kak udah Jadi'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(ind.wrongf())
					}
					await limitAdd(sender)
					break
                case 'animequotes':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.data.quote)
					await limitAdd(sender)
					break	
                case 'twichquotes':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break	
                case 'faktaunik': // Fixed By Pojan
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/faktaunik?apikey=RamlanID`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break		
		case 'quotes':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://api.zeks.xyz/api/quote?apikey=apivinz`)
					cop = `Quotes : _${data.result.quotes}_\n\nAuthor : _${data.result.author}_`
					reply(cop)
					await limitAdd(sender)
					break
		case 'covidindo': 
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://videfikri.com/api/covidindo/`)
					hasil = `Positif : ${data.result.positif}\nSembuh : ${data.result.sembuh}\nMeninggal : ${data.result.meninggal}\nDirawat : ${data.result.dalam_perawatan}`
					reply(hasil)
					await limitAdd(sender)
					break		
		case 'covidglobal':    
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				client.updatePresence(from, Presence.composing) 
			    tels = body.slice(12)
				asu = await fetchJson(`http://lolhuman.herokuapp.com/api/corona/global?apikey=RamlanID`)
				ez = `*╠➥  Positif :* ${asu.result.positif}\n*╠➥  Sembuh :* ${asu.result.sembuh}\n*╠➥  Di Rawat :* ${asu.result.dirawat}\n*╠➥  Meninggal :* ${asu.result.meninggal}\n`
				reply(ez)
				await limitAdd(sender)
					break
		case 'ceknamaff': 
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/freefire/${gatauda}?apikey=RamlanID`)
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'ceknamaml': 
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/mobilelegend/${gatauda}?apikey=RamlanID`)
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'namaninja': 
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/ninja?apikey=RamlanID&nama=${gatauda}`)
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'infonomor':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
					if (data.error) return reply(data.error)
					if (data.result) return reply(data.result)
					hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
					reply(hasil)
					await limitAdd(sender)
					break 
		case 'infogempa':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infogempa`, {method: 'get'})
					buffer= await getBuffer(anu.map)
					hasil = `*Potensi*\n${anu.potensi}\n*Lokasi*\n${anu.lokasi}\n*Magnitude*\n${anu.magnitude}\n*Koordinat*\n${anu.koordinat}\n*Kedalaman*\n${anu.kedalaman}\n*Waktu*\n${anu.waktu}\n*Map*\n${anu.map}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
					await limitAdd(sender)
					break
			case 'infocuaca':
                  if (isLimit(sender)) return reply(ind.limitend(pusname))
                  if (!isRegister) return reply(mess.only.daftarB)     
                  if (isBanned) return reply('```Maaf, Kamu telah di Banned...!```')
                  if (args.length < 1) return reply('Masukan nama daerah')
                  tels = body.slice(7)
                  try {
                  anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/cuaca?p=${tels}`, {method: 'get'})  
                  hasil = `‣ *Tempat* : ${anu.hasil.Nama}\n‣ *Cuaca* : ${anu.hasil.Cuaca}\n‣ *Angin* : ${anu.hasil.Angin}\n‣ *Suhu* : ${anu.hasil.Suhu}\n‣ *Kelembapan* : ${anu.hasil.Kelembaban}\n‣ *Keterangan* : ${anu.hasil.Keterangan}`
                  client.sendMessage(from, hasil, text, {quoted: mek}) 
                  await limitAdd(sender)
                  } catch {
                    reply(mess.ferr)
                  }
                  break
		case 'cuaca':
					tels = body.slice(11)
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cuaca?wilayah=${tels}&apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					hasil = `*Tempat* : ${anu.result.tempat}\n*Cuaca* : ${anu.result.cuaca}\n*Angin* : ${anu.result.angin}\n*Suhu* : ${anu.result.suhu}\n*Kelembapan* : ${anu.result.kelembapan}`
					client.sendMessage(from, hasil, text, {quoted: mek})
					await limitAdd(sender)
					break
		case 'kurs': 
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.vhtear.com/kurs&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					hasil = `\n*==========*\n*USD Jual* : ${anu.result.Data.USD.Jual}\n*USD Beli* : ${anu.result.Data.USD.Beli}\n*==========*\n*SGD Jual* : ${anu.result.Data.SGD.Jual}\n*SGD Beli* : ${anu.result.Data.SGD.Beli}\n*==========*\n*EUR Jual* : ${anu.result.Data.EUR.Jual}\n*EUR Beli* : ${anu.result.Data.EUR.Beli}\n*==========*\n*AUD Jual* : ${anu.result.Data.AUD.Jual}\n*AUD Beli* : ${anu.result.Data.AUD.Beli}\n*==========*\n*DKK Jual* : ${anu.result.Data.DKK.Jual}\n*DKK Beli* : ${anu.result.Data.DKK.Beli}\n*==========*\n*SEK Jual* : ${anu.result.Data.SEK.Jual}\n*SEK Beli* : ${anu.result.Data.SEK.Beli}\n*==========*\n*CAD Jual* : ${anu.result.Data.CAD.Jual}\n*CAD Beli* : ${anu.result.Data.CAD.Beli}\n*==========*\n*CHF Jual* : ${anu.result.Data.CHF.Jual}\n*CHF Beli* : ${anu.result.Data.CHF.Beli}\n*==========*\n*NZD Jual* : ${anu.result.Data.NZD.Jual}\n*NZD Beli* : ${anu.result.Data.NZD.Beli}\n*==========*\n*GBP Jual* : ${anu.result.Data.GBP.Jual}\n*GBP Beli* : ${anu.result.Data.GBP.Beli}\n*==========*\n*HKD Jual* : ${anu.result.Data.HKD.Jual}\n*HKD Beli* : ${anu.result.Data.HKD.Beli}\n*==========*\n*JPY Jual* : ${anu.result.Data.JPY.Jual}\n*JPY Beli* : ${anu.result.Data.JPY.Beli}\n*==========*\n*SAR Jual* : ${anu.result.Data.SAR.Jual}\n*SAR Beli* : ${anu.result.Data.SAR.Beli}\n*==========*\n*CNH Jual* : ${anu.result.Data.CNH.Jual}\n*CNH Beli* : ${anu.result.Data.CNH.Beli}\n*==========*\n*MYR Jual* : ${anu.result.Data.MYR.Jual}\n*MYR Beli* : ${anu.result.Data.MYR.Beli}\n*==========*\n*THB Jual* : ${anu.result.Data.THB.Jual}\n*THB Beli* : ${anu.result.Data.THB.Beli}\n*==========*\n`
					client.sendMessage(from, hasil, text, {quoted: mek})
					await limitAdd(sender)
					break
		case 'github': 
					tels = body.slice(8) 
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/stalkgithub?apikey=client633&user=${tels}`, {method: 'get'})
					buffer7 = await getBuffer(anu.avatar_url)
					if (anu.error) return reply(anu.error)
					capt = `*HASIL*\n\n*id* : ${anu.id}\n*node_id* : ${anu.node_id}\n*gravatar_id* : ${anu.gravatar_id}\n*html_url* : ${anu.html_url}\n*type* : ${anu.type}\n*site_admin* : ${anu.site_admin}\n*name* : ${anu.name}\n*company* : ${anu.company}\n*blog* : ${anu.blog}\n*location* : ${anu.location}\n*email* : ${anu.email}\n*bio* : ${anu.bio}\n*twitter_username* : ${anu.twitter_username}\n*public_repos* : ${anu.public_repos}\n*public_gists* : ${anu.public_gists}\n*followers* : ${anu.followers}\n*following* : ${anu.following}\n*created_at* : ${anu.created_at}\n*updated_at* : ${anu.updated_at}`
					client.sendMessage(from, buffer7, image, {quoted: mek, caption: capt})
					await limitAdd(sender)
					break
                case 'slap':
					kapankah = body.slice(1)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','anjing lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak setan','puki lu','anjing ngajak gelud','sama hantu takut cupu bangsat','cupu cupu aja gausah bacot','bangsat lu semua','bocah lu semua bangsat','3 Hari Lagi']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					client.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n'+ ple })
					await limitAdd(sender)
					break
		case 'tampar':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif', {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'tribunews':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Time* : ${i.time}\n*Link* : ${i.url}\n*Keterangan* : ${i.ket}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
			    case 'liputan6': 
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n*Category* : ${i.category}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'foxnews': 
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Country* : ${i.country}\n*Content* : ${i.content}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'nickff': 
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'newsinfo': 
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`http://lolhuman.herokuapp.com/api/newsinfo?apikey=RamlanID`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Source:* : ${i.source.name}\n*Author* : ${i.author}\n*Title* : ${i.title}\n*Description* : ${i.description}\n*Url* : ${i.url}\n*Published At* : ${i.publishedAt}\n*Content* : ${i.content}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'film': 	
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'film2': 	
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film?q=${body.slice(7)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
        case 'beritahoax':
					//Case By PojanGanz
                    //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
		case 'trendtwit':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://api.vhtear.com/trendtwitter?country=indonesia&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
		case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
					client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
		case 'setppbott':
				if (!isOwner) return reply(ind.ownerb())
					client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
		case 'brainly':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
					console.log(res)
					})
					await limitAdd(sender)
					break 
		case 'bcgc':
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers 
					tagss = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break 
		case 'pinterest':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*`})
					await limitAdd(sender)
					break 
           case 'glitchtext':
					
					var gh = body.slice(12)
					var gli = gh.split("/")[0];
					var tch = gh.split("/")[1];
					if (args.length < 1) return reply(`ã€Œâ—ã€Contoh : ${prefix}glitchtext Ojan/Gans`)
					reply(ind.wait())
					buffer = await getBuffer(`https://api.zeks.xyz/api/gtext?text1=${gli}&text2=${tch}&apikey=apivinz`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
				break
// 			case 'katailham':
// 			        //Case By PojanGanz
//                  //if (!isRegistered) return reply( ind.noregis())
// 					if (isLimit(sender)) return reply(ind.limitend(pusname))
// 				anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotanilham?apikey=client633`, {method: 'get'})
// 				kata = anu.result
// 				client.sendMessage(from, kata, text, {quoted: mek })
// 				await limitAdd(sender)
// 				break
// 				case 'cecan':
//   tels = body.slice(5)
//   client.updatePresence(from, Presence.composing)
//   ty = ["ulzhang girl",
// "cewek cantik",
// "cewe hijab",
// "cewe rusia cantik",
// "cewe jepang cantik",
// "cecan indo"]
//   nk = ty[Math.floor(Math.random() * ty.length)]
//   try {
//   data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
// method: 'get'
//   })
//   reply('[❕] Loading')
//   n = JSON.parse(JSON.stringify(data));
//   nimek = n[Math.floor(Math.random() * n.length)];
//   pok = await getBuffer(nimek)
//   client.sendMessage(from, pok, image, {
// quoted: mek, caption: `Gimana? *Jangan Lupa Follow IG Bot : instagram.com/miku.bot`
//   })
//   } catch {
//     reply(mess.ferr)
//   }
//   break
  
                  //--Pinterest cogan
                  case 'cogan': //OjanGanz
                  client.updatePresence(from, Presence.composing)
                  uk = ["ulzhang boy","cowok keren","cowo ganteng","cogan","cogan jawa"]
                  nk = uk[Math.floor(Math.random() * uk.length)]
                  try {
                  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
                method: 'get'
                  })
                  reply('[❕] Loading')
                  n = JSON.parse(JSON.stringify(data));
                  nimek = n[Math.floor(Math.random() * n.length)];
                  pok = await getBuffer(nimek)
                  client.sendMessage(from, pok, image, {
                quoted: mek, caption: `Wah ganteng kek gua`
                  })
                  } catch {
                    reply(mess.ferr)
                  }
                  break
				case 'caklontong':
			        //Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api-mikubot.herokuapp.com/api/kuis/caklontong?apikey=ojanganz`, {method: 'get'})
					caklontong = `*${anu.pertanyaan}*`
					setTimeout( () => {
					client.sendMessage(from, '*тЮ╕ Jawaban :* '+anu.jawaban+ '\n\nтАв Penjelasan: *'+ anu.keterangan+'*', text, {quoted: mek }) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagiтАж_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_тАж', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_тАж', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, caklontong, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
		         case 'babi':
			        //Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                 const gshizuka = await client.getGroupMembersId(groupId)
                 let gmik = gshizuka[Math.floor(Math.random() * gshizuka.length)]
                 const mmkk = `YANG PALING BABI DISINI ADALAH @${gmik.replace(/@c.us/g, '')}`
                 client.sendTextWithMentions(dari, mmkk, id )
                 break
		case 'spamcall':
			        //Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
			call = `${body.slice(11)}`
			anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			client.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek })
			await limitAdd(sender) 
			break  
     //           case 'asupan':
			  //       //Case By PojanGanz
     //             //if (!isRegistered) return reply( ind.noregis())
					// if (isLimit(sender)) return reply(ind.limitend(pusname))
     //            reply(mess.wait)
     //            anu = await fetchJson(`https://api.shizukaa.xyz/api/asupan?apikey=client633`)
     //            asup = await getBuffer(anu.result)
     //            client.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: mek, caption: 'Asupannya Tuan:v'})
     //            await limitAdd(sender) 
     //            break*
                case 'carbon':
				if (isBanned) return reply('Maaf kamu sudah terbenned astagfirullah!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Ojan Ganteng`)
                    txt = args.join(" ")
                    reply('[❕] Loading')
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/carbon?apikey=RamlanID&code=${txt}`)
                    client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan Lupa Follow IG BOT : instagram.com/miku.bot*', quoted: mek})
         break
         
         case 'lollogo':
         if (isBanned) return reply('Maaf Kamu Sudah Terbanned astagfirullah') 
         if (args.length == 0) return reply(`Usage: ${prefix} + command} text\nExample: ${prefix + command} Ojan`) 
         teks = args.join(" ") 
         reply('[❕] Loading') 
         buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/photooxy3/bannerlol?apikey=RamlanID&text=${teks}`) 
         client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan Lupa Follow IG BOT : instagram.com/miku.bot*', quoted: mek})
         break 
         
         case '1917':
         if (isBanned) return reply('Maaf Kamu Sudah Terbanned astagfirullah') 
         if (args.length == 0) return reply(`Usage: ${prefix} + command} text\nExample: ${prefix + command} Hans`) 
         teks = args.join(" ") 
         reply('[❕] Loading') 
         buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/text1917?apikey=RamlanID&text=${teks}`) 
         client.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan Lupa Follow IG BOT : instagram.com/miku.bot*', quoted: mek})
         break
// 					case 'igdl':
                        // if (!isRegister) return reply(mess.only.daftarB)     
                        // if (isBanned) return reply('```Maaf, Kamu telah di Banned...!```')
//                     ini_url = args[0]
//                     ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=RamlanID&url=${ini_url}`)
//                     ini_url = ini_url.result
//                     ini_type = image
//                     if (ini_url.includes(".mp4")) ini_type = video
//                     buffer = await getBuffer(ini_url)
//                     client.sendMessage(from, buffer, ini_type, { quoted: mek })
//                     break
                    
               // case 'ytmp4':
               //      ini_link = args[0]
               //      get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=RamlanID&url=${ini_link}`)
               //      get_result = get_result.result
               //      txt = `Title : ${get_result.title}\n`
               //      txt += `Uploader : ${get_result.uploader}\n`
               //      txt += `Duration : ${get_result.duration}\n`
               //      txt += `View : ${get_result.view}\n`
               //      txt += `Like : ${get_result.like}\n`
               //      txt += `Dislike : ${get_result.dislike}\n`
               //      txt += `Description :\n ${get_result.description}`
               //      buffer = await getBuffer(get_result.thumbnail)
               //      client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
               //      get_audio = await getBuffer(get_result.link[0].link)
               //      client.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
               //      break
                    
	case 'xnxxsearch':
if (!isRegister) return reply(mess.only.daftarB)     
if (isBanned) return reply('```Maaf, Kamu telah di Banned...!```')
   

                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=RamlanID&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Views : ${get_result[x].views}\n`
                        txt += `Duration : ${get_result[x].duration}\n`
                        txt += `Uploader : ${get_result[x].uploader}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Thumbnail : ${get_result[x].thumbnail}\n\n`
                    }
                    reply(txt)
                    break
			// case 'ytmp3': // Fix By PojanGanz
			// 		if (!isRegistered) return reply( ind.noregis())
			// 		if (isLimit(sender)) return reply(ind.limitend(pusname))
			// 		if (args.length < 1) return reply('Urlnya mana gan?')
			// 		if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.error.Iv)
			// 		anu = await fetchJson(`https://videfikri.com/api/ytmp3/?url=${body.slice(7)}`, {method: 'get'})
			// 		if (anu.error) return reply(anu.error)
			// 		yta = `â•­â”€ã€Œ *YOUTUBE MP3 DOWNLOADER* ã€\nâ”‚\nâ”‚â€¢ *Title:* ${anu.result.judul}\nâ”‚â€¢ *Size:* ${anu.result.size}\nâ”‚â€¢ *Link:* https://www.youtu.be/${anu.result.id}\nâ”‚\nâ”‚ Tunggu Sebentar 1 menit Mungkin Agak Lama â”‚ Karna Mendownload Video\nâ•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€`
			// 		buffing = await getBuffer(anu.result.thumbnail)
			// 		reply(ind.wait())
			// 		buffer = await getBuffer(anu.result.url)
			// 		client.sendMessage(from, buffing, image, {quoted: mek, caption: yta})
			// 		client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.judul}.mp3`, quoted: mek, caption: 'Nih Gan'})
			// 		await limitAdd(sender) 
			// 		break 
			 case 'nsfwloli':
				    try {
			        //Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://api.shizukaa.xyz/api/neko?apikey=client633`, {method: 'get'})
						buffer = await getBuffer(res.neko)
						client.sendMessage(from, buffer, image, {quoted: shizuka, caption: 'Jangan jadiin bahan buat comli om'})
					    } catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					    }
					    await limitAdd(sender)
					    break/*
		case 'hilih':
                    const hilih = quotedMsg.type == 'chat' ? quotedMsg.body : ''
                    const hili = hilih.replace(/a|u|e|o/g, "i")
                    await reply(hili)
                    break
        case 'halah':
                    const halah = quotedMsg.type == 'chat' ? quotedMsg.body : ''
                    const hala = halah.replace(/i|u|e|o/g, "a")
                    await reply(hala)
                    break
        case 'heleh':
                    const heleh = quotedMsg.type == 'chat' ? quotedMsg.body : ''
                    const hele = heleh.replace(/i|u|a|o/g, "e")
                    await reply(hele)
                    break
        case 'holoh':
                    const holoh = quotedMsg.type == 'chat' ? quotedMsg.body : ''
                    const holo = holoh.replace(/i|u|e|a/g, "o")
                    await reply(holo)
                    break
        case 'huluh':
                    const huluh = quotedMsg.type == 'chat' ? quotedMsg.body : ''
                    const hulu = huluh.replace(/i|o|e|a/g, "u")
                    await reply(hulu)
                    break */
		case 'hurufterbalik': 
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					gatauda = body.slice(14)
					anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${gatauda}`, {method: 'get'})
					reply(anu.result.kata)
					await limitAdd(sender)
					break
		case 'lirik': 
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					teks = body.slice(6)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/lirik?q=${teks}`, {method: 'get'})
					reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result)
					await limitAdd(sender)
					break
		case 'alay':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					data = await fetchJson(`https://api.zeks.xyz/api/alaymaker?kata=${body.slice(6)}&apikey=apivinz`)
					reply(data.result)
				        await limitAdd(sender)
					break
		case 'alay2': 
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					data = await fetchJson(`http://lolhuman.herokuapp.com/api/upperlower?apikey=RamlanID&text=${body.slice(6)}`)
					reply(data.result)
				        await limitAdd(sender)
					break
		case 'chord':
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Judul lagunya mana kak')
					tels = body.slice(7)					
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${tels}&apikey=BotWeA`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katacinta':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(8)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'pantun':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(8)					
					anu = await fetchJson(`https://api.zeks.xyz/api/pantun?apikey=apivinz`, {method: 'get'})
					reply(anu.result.pantun)
					await limitAdd(sender)
					break
		case 'cersex': 
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(8)					
					anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					reply(anu.result.cerita)
					await limitAdd(sender)
					break
		case 'jadwaltv':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(10)					
					anu = await fetchJson(`https://api.zeks.xyz/api/jadwaltv?channel=${gatauda}&apikey=apivinz`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katadilan': 
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotandilan?apikey=client633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katabucin': 
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bucin?apikey=client633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katabucin2': 
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bucin?apikey=client633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'cerpen': 
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/cerpen?apikey=RamlanID`, {method: 'get'})
					reply(anu.result.cerpen)
					await limitAdd(sender)
					break
		case 'bacotanhacker': 
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotanhacker?apikey=client633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'quotedoraemon': 
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/quotedoraemon?apikey=client633`, {method: 'get'})
					reply(anu.result.quote)
					await limitAdd(sender)
					break
		case 'resepmasakan':
        case 'resepmakanan':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/resep?q=${body.slice(14)}`, {method: 'get'})
					buffer = await getBuffer(anu.img)
					hasil = `*Title* \n ${anu.title} *Bahan* \n ${anu.bahan.trim()} \n*Langkah-Langkah*\n`
                    for(let i  of anu.langkah){
                        hasil += `${i}\n`
                    }
					client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
					await limitAdd(sender)
					break 
		case 'heroml':  
					
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(`[❕] Loading`)
				ige = body.slice(8)
				anu = await fetchJson(`http://api.hurtzcrafter.xyz/herodetail?hero=${ige}`) 
				buffer7 = await getBuffer(anu.result.image)
				teks = `Hasil\n*Hero Name*: ${anu.result.hero_name}\n*Quotes Hero*: ${anu.result.entrance_quotes}\n*Hero Feature*: ${anu.result.hero_feature}\n*Items*: ${anu.result.items}\n*Character*: ${anu.result.character.chara}\n*Movement Speed*: ${anu.result.attributes.movement_speed}\n*Physical Attack*: ${anu.result.attributes.physical_attack}\n*Magic Power*: ${anu.result.attributes.magic_power}\n*Attack Speed*: ${anu.result.attributes.attack_speed}\n*Physical Defense*: ${anu.result.attributes.physical_defense}\n*Basic Atk Crit Rate*: ${anu.result.attributes.basic_atk_crit_rate}\n*HP*: ${anu.result.attributes.hp}\n*Mana*: ${anu.result.attributes.mana}\n*ability_crit_rate*: ${anu.result.attributes.ability_crit_rate}\n*hp_regen*: ${anu.result.attributes.hp_regen}\n*mana_regen*: ${anu.result.attributes.mana_regen}\n*Price Hero BP*: ${anu.result.price.battle_point}\n*Price Hero DM*: ${anu.result.price.diamond}\n*Price Hero FRAG*: ${anu.result.price.hero_fragment}\n*Role*: ${anu.result.role}\n*Durability*: ${anu.result.skill.durability}\n*offense*: ${anu.result.skill.offense}\n*skill_effects*: ${anu.result.skill.skill_effects}\n*difficulty*: ${anu.result.skill.difficulty}\n*speciality*: ${anu.result.speciality}\n*laning_recommendation*: ${anu.result.laning_recommendation}\n*release_date*: ${anu.result.release_date}`
				client.sendMessage(from, buffer7, image, {quoted: mek, caption: teks})
				await limitAdd(sender)
				break
				case 'igvideo': 
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana sayang?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(9)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=RamlanID&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    client.sendMessage(from, buffer, video, )
				    break
				case 'igpost': 
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana sayang?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(8)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=RamlanID&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    client.sendMessage(from, buffer, image, )
				    break
				case 'igtv': 
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana sayang?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(6)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=RamlanID&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    client.sendMessage(from, buffer, video, )
				    break
				// case 'tiktok': 
    //                  if (!isRegistered) return reply( ind.noregis())
    //                 if (args.length < 1) return reply(`⚠️ Format salah! Ketik *${prefix}tiktok URL/LINK*\nContoh : *${prefix}tiktok https://www.tiktok.com/@bucinparkjimin7/video/6903432183768272129*`)                 
    //                 if (isLimit(sender)) return reply(ind.limitend(pusname))
    //                 await limitAdd(sender)
    // 				if (args.length < 1) return reply('Urlnya mana sayang?')
    // 				if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.lv)
    //                 ige = body.slice(12)
    //                 anu = await fetchJson(`https://api.zeks.xyz/api/tiktok?url=${args[0]}&apikey=apivinz`, {method: 'get'})
    //                 reply(mess.wait)
    //                 buffer = await getBuffer(anu.no_watermark)
    //                 SendVideos(buffer,anu.title)
				//     break
				 case 'ccgenerator': 
					//if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                   reply(`_[❕] Loading_`)
				   anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`, {method:'get'})
				   teks = `*Hasil CCGenerator*\n*♻️NUMBER*: ${anu.result.card.number}\n*♻️TYPE*: ${anu.result.card.network}\n*♻️CVV*: ${anu.result.card.cvv}\n*♻️PIN*: ${anu.result.card.pin}\n*♻️MONEY*: ${anu.result.card.balance}\n*♻️EXPIRE-MONTH*: *Custom*\n*♻️EXPIRE-YEAR*: *Custume*\n*♻️COUTRY*: ${anu.result.customer.country}\n*♻️NAME*: ${anu.result.customer.name}\n*♻️ADDRESS*: ${anu.result.customer.address}`
				   client.sendMessage(from, teks, text, {quoted: mek})
				   await limitAdd(sender)
				   break
				 case 'ceritahorror': 
					//if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                   reply(`_[❕] Loading_`)
				   anu = await fetchJson(`https://naufalhoster.xyz/tools/story_horror?apikey=IgygEb-7vT4iB-h2zOyi`, {method:'get'})
				   teks = `*Hasil Cerita*\n*Nama Cerita*: ${anu.result.title}\n*Cerita*: ${anu.result.story}`
				   client.sendMessage(from, teks, text, {quoted: mek})
				   await limitAdd(sender)
				   break
					/*
                case 'kickall':
					if (!isOwner) return reply(ind.ownerb())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
					break*/
		case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
		case 'setreplyy':
				if (!isAdmin) return reply('*Only Admin bot*')
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
		case 'grouplist':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					client.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group Vinz-BOT :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
		//daftar 
		/*case 'daftar':
                			if (isRegistered) return  reply(ind.rediregis())
                			if (!q.includes('|')) return  reply(ind.wrongf())
                			const namaUser = q.substring(0, q.indexOf('|') - 0)
                			const umurUser = q.substring(q.lastIndexOf('|') + 1)
                			const serialUser = createSerial(20)
                			if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                			if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                			if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                			if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
                					try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
                				veri = sender
                				if (isGroup) {
                    			addRegisteredUser(sender)
                    			//await client.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                			} else {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await client.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                			}
				        break */
		/*case 'mining':
		case 'maling':
		case 'nguli':
		case 'sedekah':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isAdmin | isPremium) {
					const one = Math.ceil(Math.random() * 100000000000000000000)
					addLevelingXp(sender, one)
					await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one}Xp* untuk anda`)
                 					     }else{
					const mining = Math.ceil(Math.random() * 100000000000000000000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break*/
		case 'bisakah':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'kapankah':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'apakah':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'bagaimanakah':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'rate':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'sangecek':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					client.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'gaycek':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					client.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'lesbicek':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					client.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'gantengcek':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'cantikcek':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					client.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'watak':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					await limitAdd(sender)
				        break
		case 'hobby':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'speed5':
		case 'ping3':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					await client.sendMessage(from, `Pong!!!!\nSpeed: ${processTime(time, moment())} _Second_`)
					break
        case'q':
        const qq = body.slice(3)
        const qwert = await imgbbUploader(qq)
        console.log(qwert)
        // // console.log(mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.jpegThumbnail)
        // const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        // // buff = await client.downloadMediaMessage(encmedia)
        //  owgi = await client.downloadAndSaveMediaMessage(encmedia)
        // // sendImages(buff,'')
        // // console.log(buff)
        //  console.log(owgi)
        break
		/*case 'help': 
		case 'menu':
            //Gk Ush Di Hapus Tod, Dh Susah" Ngefix Di Hapus Sofun kh bgitu?:v
                 //if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					const uangku = checkATMuser(sender)
                    const limit = limitawal - checkLimitUser(sender)
                    wew = fs.readFileSync(`./src/logo.jpg`)
                    shiz = `◪ INFO DEVELOPER
  ► Nama : Vinz-BOT
  ► WhatsApp : Wa.me/6281387777325
  ► Instagram : instagram.com/Kelviniylas13
  ----------------------------------
◪ YOUR INFO
  ► Prefix : 「 ${prefix} 」
  ► Nama : ${pushname}
  ► Duit : *Rp.${uangku}.-*
  ► Limit : *Rp.${limit}.-*
  ► Nomer : wa.me/${sender.split("@")[0]}
  ----------------------------------


*${prefix}info*
*${prefix}snk*
*${prefix}report*

  *◪ MAKER MENU*► ${prefix}avatar
► ${prefix}avenger
► ${prefix}battlefield
► ${prefix}blackpink
► ${prefix}blur
► ${prefix}burung
► ${prefix}coffee
► ${prefix}crossfire
► ${prefix}csgo
► ${prefix}dota
► ${prefix}flaming
► ${prefix}haha
► ${prefix}harta
► ${prefix}kambing
► ${prefix}koala
► ${prefix}kucing
► ${prefix}lol
► ${prefix}lol2
► ${prefix}love
► ${prefix}marvel
► ${prefix}marvel2
► ${prefix}metalic
► ${prefix}pandar
► ${prefix}pokemons
► ${prefix}pubg
► ${prefix}rubah
► ${prefix}sarangheo
► ${prefix}tahta
► ${prefix}tatto
► ${prefix}thunder
► ${prefix}tiktod
► ${prefix}warface


  *◪ IMAGE EDIT MENU*
► ${prefix}wanted
► ${prefix}gtav
► ${prefix}crossgun
► ${prefix}bakar
► ${prefix}facebookpage
► ${prefix}costumwp
► ${prefix}pantaimalam
► ${prefix}pencil
 
 
  *◪ FUN MENU*
► ${prefix}tebakgambar
► ${prefix}gantengcek
► ${prefix}cantikcek
► ${prefix}gaycek
► ${prefix}lesbicek
► ${prefix}watak
► ${prefix}hobby
► ${prefix}apakah
► ${prefix}kapankah
► ${prefix}bisakah
► ${prefix}bagaimanakah
► ${prefix}rate
► ${prefix}katacinta
► ${prefix}pantun
► ${prefix}hilih
► ${prefix}holoh
► ${prefix}halah
► ${prefix}hurufterbalik

 
   *◪ APK MENU*
► ${prefix}apkpure
► ${prefix}happymod
► ${prefix}moddroid

 
  *◪ MEDIA MENU*
► ${prefix}brainly 
► ${prefix}pinterest
► ${prefix}resepmasakan
► ${prefix}igstalk
► ${prefix}bitly
► ${prefix}tiktokstalk 
► ${prefix}ssweb
► ${prefix}kbbi
► ${prefix}memeindo
 
 
  *◪ DOWNLOAD*
► ${prefix}joox 
► ${prefix}ytmp4 
► ${prefix}ytmp3 
► ${prefix}play

 
  *◪ ANIME MENU*
► ${prefix}peluk
► ${prefix}cium
► ${prefix}ranime
► ${prefix}waifu
► ${prefix}animeboy
► ${prefix}animegirl
► ${prefix}animeimg
► ${prefix}loli
► ${prefix}neko
► ${prefix}animehug
► ${prefix}animecry


  *◪ RANDOM MENU*
► ${prefix}quran
► ${prefix}aesthetic
► ${prefix}fotocewek
► ${prefix}doraemon
► ${prefix}pokemon
► ${prefix}kucing
► ${prefix}hamster
► ${prefix}kelinci
► ${prefix}freefireimg
► ${prefix}ww2
► ${prefix}shota
► ${prefix}neko
 
 
  *◪ QUOTES MENU*
► ${prefix}quotesislami
► ${prefix}quotesnasehat
► ${prefix}quotesmotivasi
► ${prefix}quoteskehidupan
► ${prefix}quotes
► ${prefix}quotes2

 *◪ LIMIT & UANG*
► ${prefix}limit
► ${prefix}buylimit
 
 *◪ TOOLS*
► ${prefix}bass
► ${prefix}toimg
► ${prefix}tomp3
► ${prefix}slowmo
► ${prefix}gemok
► ${prefix}tupai
► ${prefix}tinyurl
► ${prefix}shorturl
► ${prefix}ocr
► ${prefix}tts
► ${prefix}kalkulator

 
 *◪ STORAGE*
► ${prefix}addsticker
► ${prefix}getsticker
► ${prefix}stickerlist
► ${prefix}addvideo
► ${prefix}getvideo
► ${prefix}videolist
► ${prefix}getimage
► ${prefix}addImage
► ${prefix}imagelist
► ${prefix}addaudio
► ${prefix}getaudio
► ${prefix}audiolist



 
 *◪ ABOUT BOT*
► Name : ${client.user.name}
► Browser : ${client.browserDescription[1]}
► Server : ${client.browserDescription[0]}
► Version : ${client.browserDescription[2]}
► Speed : ${process.uptime()}
► Handphone : ${client.user.phone.device_manufacturer}
► Versi Whatsapp : ${client.user.phone.wa_version}
 
📄NOTE : 
Spam call,Spam command = *BLOCK + BANNED*` 

                    client.sendMessage(from, wew, image, { quoted: mek, caption: shiz })
					break
		
					
		case 'menupicture':
		case 'menupict':
		case 'pictmenu':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					wew = fs.readFileSync(`./src/logo.jpg`)
					client.sendMessage(from, wew, image, { quoted: mek, caption: randompict(prefix)})
					break
		case 'menuowner':
		case 'ownermenu':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					wew = fs.readFileSync(`./src/logo.jpg`)
					client.sendMessage(from, wew, image, { quoted: mek, caption: developer(prefix)})
					break
		case 'bahasa':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.sendMessage(from, bahasa(), text)
					await limitAdd(sender)
					break
		case 'kodenegara':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.sendMessage(from, negara(), text)
					await limitAdd(sender)
					break
		case 'del':
		case 'd':
		case 'delete':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					await limitAdd(sender)
					break
		case 'level':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (!isLevelingOn) return reply(ind.lvlnoon())
					if (!isGroup) return reply(ind.groupo())
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
					const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
					resul = `◪ *LEVEL*\n  ├─ ► *Name* : ${pushname}\n  ├─ ► *Nomor* : ${sender.split("@")[0]}\n  ├─ ► *User XP* : ${userXp}/${requiredXp}\n  └─ ► *User Level* : ${userLevel}\n`
					client.sendMessage(from, resul, text, { quoted: mek})
					.catch(async (err) => {
					console.error(err)
					await reply(`Error!\n${err}`)
					})
					break
		case 'say':
                                        teks = body.slice(5)
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        if (args.length < 1) return reply('teksnya mana kak?')
                                        saying = teks
                                        client.sendMessage(from, saying, text)
					await limitAdd(sender)
                                        break
		case 'info':
if (isBanned) return reply('```Maaf, Kamu telah di Banned...!```')
    
  me = client.user
  uptime = process.uptime()
  teks = `*‣ Nama bot* : ${me.name}
  ‣ *Nomor Bot* : @${me.jid.split('@')[0]}
  ‣ *Owner* : FznXSec404
  ‣ *Prefix* : [ ${prefix} ]
  ‣ *Total Block Contact* : ${blocked.length}
  ‣ *The bot is active on* : ${kyun(uptime)}
  ‣ *Total User* : ${_registered.length} User
  ‣ *Total Chat* : 1072`
  buffer = await getBuffer(me.imgUrl)
  client.sendMessage(from, buffer, image, {
caption: teks, contextInfo: {
  mentionedJid: [me.jid]}})
  break 
		case 'snk':
					me = client.user
					uptime = process.uptime()
					teks = `*Syarat & Ketentuan MikuBot*\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break*/
					
		case 'lpr':
					const bug = body.slice(5)
					if (pesan.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					teks1 = `*[LAPORAN]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug}`
					var options = {
					text: teks1,
					contextInfo: {mentionedJid: [nomor]},
					}
					client.sendMessage('6289666262976@s.whatsapp.net', options, text, {quoted: mek})
					reply('Masalah telah di laporkan ke owner Miku, Laporan palsu atau main² tidak akan ditanggapi.')
					break
					
		case 'report':
					const cfrr = body.slice(8)
					if (cfrr.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					const ress = `*[REPORT FITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					client.sendMessage(ownerNumber, options, text, {quoted: mek})
					reply('REQUEST ANDA TELAH SAMPAI KE OWNER VinzBOT, Requests palsu atau main² tidak akan ditanggapi.')
					break
					
		case 'blocklist': 
					teks = '*This is list of blocked number* :\n'
					for (let block of blocked) {
						teks += `*~>* @${block.split('@')[0]}\n`
					}
					teks += `*Total* : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                case 'hidetag':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break

                case 'afk':
    				//Case By PojanGanz
                     //if (!isRegistered) return reply( ind.noregis())
    				if (isLimit(sender)) return reply(ind.limitend(pusname))
    				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    tels = body.slice(4)
                    if (args.length < 1) return reply('Kakak afk karena apa?')
                    var ain = mek.participant
                    const tagzz = {
                            text: `@${tagzz.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                            contextInfo: { mentionedJid: [ain] }
                            }
                    client.sendMessage(from, tagzz, text, {quoted: mek})
					await limitAdd(sender)
                                        break
                case 'profile':
    				client.updatePresence(from, Presence.composing)
    				try {
					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
                    const uangkuh = checkATMuser(sender)
                    const limitkuh = limitawal - checkLimitUser(sender)
					profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• Limit : ${limitkuh}\n│• Uang : Rp. ${uangkuh}\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────────`
					buffer = await getBuffer(ppimg)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: profile})
					break
                case 'quotemaker':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					var gh = body.slice(12)
					var quote = gh.split("/")[0];
					var wm = gh.split("/")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
        /*case 'truth':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
		case 'dare':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break */
        case 'addtruth':
        //if (!isregis) return reply(ind.notRegistered())
            if (!isAdmin) return reply('*Only Admin bot*')
            const truthh = body.slice(10)
            truth.push(truthh)
            fs.writeFileSync('./database/kelompok/truth.json', JSON.stringify(truth))
            reply(`Kalimat *${truthh}*\ntelah berhasil ditambahkan ke Database`)
            break
        case 'deltruth':
        //if (!isregis) return reply(ind.notRegistered())
            if (!isAdmin) return reply('*Only Admin bot*')
            const truthhh = body.slice(10)
            let deltruthhh = truth.indexOf(truthhh)
            truth.splice(deltruthhh, 1)
            fs.writeFileSync('./database/kelompok/truth.json', JSON.stringify(truth))
            reply(`Kalimat *${truthhh}*\nTelah berhasil dihapus dari database`)
            break
        case 'truthlist':
        //if (!isregis) return reply(ind.notRegistered())
            let truthlist = `Random *truth* list\nTotal : ${truth.lenght}\n`
            for (let i of truth) {
            truthlist += `☛ ${i}\n`
            }
            await reply(self,truthlist)
            break
        case 'adddare':
        //if (!isregis) return reply(ind.notRegistered())
            if (!isAdmin) return reply('*Only Admin bot*')
            const daree = body.slice(9)
            dare.push(daree)
            fs.writeFileSync('./database/kelompok/dare.json', JSON.stringify(dare))
            reply(`Kalimat *${daree}*\ntelah berhasil ditambahkan ke Database`)
            break
        case 'deldare':
        //if (!isregis) return reply(ind.notRegistered())
            if (!isAdmin) return reply('*Only Admin bot*')
            const dareee = body.slice(9)
            let deldareee = dare.indexOf(dareee)
            dare.splice(deldareee, 1)
            fs.writeFileSync('./database/kelompok/dare.json', JSON.stringify(dare))
            reply(`Kalimat *${dareee}*\nTelah berhasil dihapus dari database`)
            break
        case 'darelist':
        //if (!isregis) return reply(ind.notRegistered())
            let darelist = `Random *Dare* list\nTotal : ${dare.lenght}\n`
            for (let i of dare) {
            darelist += `☛ ${i}\n`
            }
            await reply(darelist)
            break
        case 'tod':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            await limitAdd(sender)
            var hasiltod = tod[Math.floor(Math.random() * (tod.length))]
            if (hasiltod == "Truth"){
                const tod2 = fs.readFileSync('./database/kelompok/truth.json')
                const dotaJson = JSON.parse(tod2)
                const rondtruth = Math.floor(Math.random() * dotaJson.length)
                const rondtruthh = dotaJson[rondtruth]
                await reply(`*${hasiltod}*\n\n${rondtruthh}`)
            }
            if (hasiltod == "Dare"){
                const dotaa = fs.readFileSync('./database/kelompok/dare.json')
                const dotaaJson = JSON.parse(dotaa)
                const ronddare = Math.floor(Math.random() * dotaaJson.length)
                const ronddaree = dotaaJson[ronddare]
                await reply(`*${hasiltod}*\n\n${ronddaree}`)
            }
            break
        case 'quran':
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    anu = await fetchJson(`https://api.zeks.xyz/api/randomquran`, {method: 'get'})
                    buffer = await getBuffer(anu.result.audio)
                    client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.nama}.mp3`, quoted: mek})
                    reply(anu.result.keterangan)
                    await limitAdd(sender)
        break                    
		case 'quoteskehidupan':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const quotes =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Aku percaya, suatu hari nanti, aku akan memiliki semua hal yang telah aku doa kan selama ini.','Balas dendam yang paling terbaik adalah mengubah dirimu menjadi yang lebih baik lagi.','Hidupku jauh dari kata mewah, kalau kalian lihat aku selalu senang, itu karena aku tau cara menikmati hidup.','Persahabatan bukan tentang orang yang baik didepanmu, tetapi tentang orang yang tetap baik di belakangmu.','Tidak semua bisa dimiliki. Jaga yang sudah termiliki. Tidak semua bisa diterima. Pertahankan yang sudah ada.','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Ibu, sebajingan apapun anakmu ini, Hatiku selalu ingin bisa Membahagiakanmu.','Tidak semua hari berjalan dengan baik tapi ada hal baik di setiap harinya.','Pikiran negatif tidak akan pernah memberi kamu kehidupan yang positif','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Saya percaya bahwa satu-satunya keberanian yang dibutuhkan oleh seseorang adalah keberanian untuk mengikuti impian Anda sendiri.','Arti hidup adalah menemukan hadiahmu. Tujuan hidup adalah untuk memberikannya.','Ada kalanya kita dicari ketika diperlukan, Dan dilupakan setelah dapat apa yang dia inginkan.','Aku suka tidur, Bukan karena aku pemalas Hanya saja mimpiku lebih indah dari kenyataan.','Jika kamu terlahir bukan dari keluarga kaya, Maka pastikanlah keluarga kaya berasal dari mu.','Saat kamu memberi orang lain, sesungguhnya pemberian itu adalah untukmu. Dan saat kamu mendoakan orang lain, sesungguhnya doa itu juga untukmu. Maka sibuklah membahagiakan orang lain, agar kemudian dunia akan sibuk membahagiakanmu.','Pernah salah pilih, Pernah salah jalan, Karena ego, Karena ceroboh, Tapi kalau bukan karena salah, Kita tidak akan pernah belajar.','Teruntuk hatiku semoga kamu sabar dan tabah bukan untuk hari ini, tapi untuk setiap hari.','Apapun yang kamu alami hari ini tetaplah terlihat baik-baik saja, are you oke?','Wajar kulitku hitam, Tanganku kasar, Penampilanku dekil, KARENA KEGIATANKU KERJA BUKAN MEMINTA.','Sibuklah mencintai hidupmu sampai kamu tidak punya waktu untuk membenci, menyesal, ataupun merasa takut.','AKU BAHAGIA KARENA BERSYUKUR, BUKAN BERSYUKUR KARENA BAHAGIA.','Hanya karena kamu bisa melakukan apa saja, bukan berarti kamu mampu melakukan segalanya.','Kegagalan adalah kesempatan untuk memulai lagi dengan cara yang lebih cerdas.','Dulu waktu masih kecil tidak sabar pengen jadi dewasa, tapi ketika udah besar, aku baru sadar bahwa jaman kecil lah yang paling bahagia.','Saya adalah saya, Saya bukan dia ataupun mereka Jika ingin bersama saya, Terimalah apa adanya.','Online ku sangatlah santai ada yang chat ya syukur, tidak ada yang chat ya tidur.','Kamu tidak begitu dalam mengenaliku, jadi tolong berhentilah sok tau tentang hidup ku.','Saya terlahir dari keluarga sederhana jadi maaf kalau penampilan saya apa adanya.','Dirimu sebenarnya adalah apa yang kamu lakukan di saat tiada orang yang melihatmu.','Ada dua pilihan hidup di pagi hari. Kembali tidur untuk melanjutkan mimpi, atau bangun tidur untuk mewujudkan mimpi.','Orang yang dibelakangku membicarakan diriku, keadaanku, keburukanku, mungkin ia membahayakan dalam duniaku tapi yang jelas ia bermanfaat untuk akhiratku, maka biarlah ia meneruskannya. *#Jangan lupa tersenyum untuk setiap harinya*','Lupakanlah masalahmu sejenak, dan berbahagialah kamu.','Mencintai memang tentang penerimaan. Tapi bukan untuk dibodohi.','Hidup adalah keseimbangan antara menggenggam dan melepaskan.','Jalanan yang sulit seringkali membawamu ke tujuan yang paling indah.','Kita tidak gagal. Kita hanya telah belajar dari 1000 cara yang salah.','Kalau kamu menginginkan sesuatu yang belum pernah kamu miliki, kamu harus melakukan sesuatu yang belum pernah kamu lakukan.','Jangan berhenti sebelum kamu bangga dengan dirimu sendiri.','Siapapun yang kamu cari.. Percayalah, dia juga sedang mencarimu.','Bahagia itu tujuan, kecewa itu jalan. Seseorang tidak akan sampai ke tujuan, tanpa melewati sebuah jalan.','Teruslah update status, setidaknya orang lain tau bahwa kamu masih hidup.','Bukan aku yang hebat. Tapi doa orang tua ku.','Kalau kamu sering disakiti orang itu artinya kamu orang baik. Ingat, cuma pohon berbuah yang dilempari batu.','Dalam hidup ini, Sadar itu penting loh, Jangan sabar mulu, CAPEK!','Kamu mempunyai banyak pilihan hidup untuk itu, Pilihlah hanya yang bisa benar-benar menjadikanmu lebih baik.','Aku kuat karena aku pernah lemah. Aku berani karena aku pernah merasa takut. Aku bijak karena aku pernah melakukan kesalahan.','Bukan berdoa untuk meminta hidup yang lebih mudah, Tapi berdoalah untuk bisa menjadi manusia yang lebih tangguh dalam menjalani hidup.','Selalu ada kisah yang kamu tidak tau di balik setiap orang. Selalu ada alasan mengapa mereka menjadi seperti itu. Pikiran hal ini sebelum kamu mencoba menghakimi orang lain.','Orang lain hanya melihat hasil akhir tanpa pernah tau bagaimana lelahnya berproses.','Kebahagiaan bukan milik mereka yang memiliki segalanya, Tetapi untuk mereka yang bisa menghargai apa yang mereka miliki.','Aku hanya ingin diperlakukan spesial lagi.','Terkadang, Hal yang menahan mu untuk bergerak maju hanyalah Pikiranmu sendiri.','Dua hal Menggambarkan dirimu : Kesabaranmu saat tak punya apa-apa Dan Sikapmu saat memiliki segalanya.','Kita hanya bersama bukan bersatu.','Saat kamu benar Semua orang lupa Saat kamu salah Semua orang ingat','Uang memang bukan segalanya tapi Tanpa uang kehidupan ini akan susah','Bila kamu Yakin , Tak perlu ada kata Mungkin','Jadilah kuat untuk melepaskan, Dan sabar untuk apa yang layak kamu dapatkan.','Pembenci itu sangat pemilih, Mereka hanya membenci orang yang hidupnya lebih baik  daripada hidup mereka.','Pasangan adalah cerminan diri kita. Maka teruslah perbaiki diri menjadi lebih baik setiap harinya, Maka pasangan terbaikpun akan diberikan tuhan.','Persahabatan adalah berbagi suka duka dan menua bersama.','Tersenyumlah ketika melihat masa lalu yang kelam, Karena engkau telah berhasil melewatinya.','Ketika banyak permasalahan yang menghampiri dirimu janganlah meminta untuk lekas dihilangkan. Tapi mintalah agar kamu bisa kuat untuk menyelesaikan.','Kehidupanmu adalah buah dari tindakan yang kamu lakukan. Tidak ada yang bisa disalahkan selain dirimu.','Kehidupan bukanlah masalah yang harus diselesaikan namun kenyataan yang harus diambil pengalamannya.','Semoga di tahun baru, Buku baru, Penulisan yang baru dengan isi yang lebih menarik untuk diimbas kembali di penghujung cerita nanti.','Masa lalu memang menyimpan banyak kenangan, Namun itu bukan alasan untuk tidak terus melangkah ke depan.','Santailah, Nikmati saja hidup, Tersenyumlah lebih banyak, Tertawalah lebih banyak, Dan janganlah memikirkan banyak hal.','Setiap perbuatan yang membahagiakan sesama adalah suatu sikap yang mencerminkan pribadi yang mulia.','Jarang yang sadar kalau kegagalan juga merupakan kesempatan emas untuk menuju kesuksesan.','Lebih baik bekerja keras dalam kediamnya kesunyian, Biarkan nanti sukses mu yang berbicara.','Belajar dari kesalahan masa lalu merupakan salah satu langkah awal untuk maju.']
					const quo = quotes[Math.floor(Math.random() * quotes.length)]
					crot = await getBuffer(`https://i.ibb.co/Bj8tD93/IMG-20210126-WA0018.jpg`)
					client.sendMessage(from, crot, image, { quoted: mek, caption: '*Quotes Kehidupan*\n\n'+ quo })
					await limitAdd(sender)
					break
		case 'quotesislami':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
					const isl = islami[Math.floor(Math.random() * islami.length)]
					islam = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
					client.sendMessage(from, islam, image, { quoted: mek, caption: '*Quotes Islami*\n\n'+ isl })
					await limitAdd(sender)
					break	
		case 'quotesnasehat':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const nasehat =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, dilupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','Jadilah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
					const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
					nase = await getBuffer(`https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg`)
					client.sendMessage(from, nase, image, { quoted: mek, caption: '*Quotes Nasehat*\n\n'+ nsh })
					await limitAdd(sender)
					break	
		/*case 'quotescinta':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const cinta =['SABAR MASIH TAHAP PEMBUATAN','MASIH TAHAP PEMBUATAN']
					const cin = cinta[Math.floor(Math.random() * cinta.length)]
					cta = await getBuffer(`https://i.ibb.co/vL5x6F7/IMG-20210126-WA0018.jpg`)
					client.sendMessage(from, cta, image, { quoted: mek, caption: '*Quotes Cinta*\n\n'+ cin })
					await limitAdd(sender)
					break*/
		case 'quotesmotivasi':
					//Case By PojanGanz
                    //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const motiv = ['Nilai sebuah tindakan terletak dalam usaha menyelesaikan sampai tuntas','Kebaikan adalah seorang yang matanya penuh perhatian, serta tangannya yang penuh manfaat','Hiduplah seperti kamu akan mati besok, dan berbahagialah seperti kamu akan hidup selamanya','Kita tidak usah saling menyalahkan, agar dimasa depan tak ada yang menuntut akan kesalahan','Ketika semua hal tidak sejalan dengan anda, ingatlah bahwa sebuah pesawat terbang melawan angin, bukan dengan mengikuti angin','Belajarlah menikmati apa yang kamu miliki, itu akan membuat hidupmu lebih bernilai','Selalu ada kegelapan yang tergelap sebelum terbitnya fajar','Sahabat itu seperti bintang, tak selalu Nampak tetapi selalu ada dihati','Sibuk bukanlah jaminan karir karena hasil jauh lebih didengar orang','semua kemajuan tidak akan ada tanpa kesalahan, kesalahan adalah bagian dari kemajuan selama diakui dan diperbaiki','Sukses meninggalkan jejak, gagal meninggalkan pelajaran, diam meninggalkan penyesalan','Keraguan bersahabat dekat dengan kegagalan','uang tidak merusak seseorang, keserakahan lah yang merusak manusia','Kepercayaan tidak bisa dibeli, tapi kepercayaan bisa dipelihara','Impian, target, kemauan dan tujuan semuanya sia-sia tanpa tindakan','usia bisa berbohong tapi kedewasaan tidak','Ada yang lebih berharga dari uang dan emas yaitu waktu','Tidak ada yang gagal mereka hanya berhenti terlalu cepat','Terasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Seseorang tidak bisa sukses seringkali karena kurangnya keberanian untuk mencobaterasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Bicaralah secukupnya, lakukanlah semampunya. Jangan melakukan sebaliknya','Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','jangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','Kadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','atasan hanya memberikan tugas berat pada karyawan terbaik, Allah hanya memberikan ujian pada pada manusia terbaikKadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','berusaha dan gagal Ternyata jauh lebih melegakan daripada pasrah melihat ke kanan dengan tangan terlipat','lewat kesulitan lah manusia belajar, lewatnya kenyamanan lah manusia Terlena','Saat kita merasa hebat kita baru saja kehilangan separuh pangkat kita karena lengah untuk terus belajar','hidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang hebat membicarakan ide, orang menengah membicarakan pengalaman, orang lemah membicarakan orang lainOrang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Anda tidak akan mengubah kehidupan sampai anda mengubah Apa yang anda lakukan setiap hari','bertahan saja tidak cukup anda perlu bereaksi terhadap tekanan dan merubah keadaan','masa depan kita tergantung pada apa yang kita lakukan pada saat ini. Maka jangan sia-siakan waktumu sekarang','Nilai manusia ditentukan bukan dari apa yang diperoleh melainkan apa yang telah diberikan','Malas adalah kemenangan saat ini dan kekalahan di masa nanti','sebuah masalah merupakan kesempatan bagi anda untuk mengeluarkan kemampuan terbaik anda','Kematian tidak dapat mengubur perbuatan baik seseorang','Asal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Jika ada hari buruk maka pasti akan hari ada hari baik tugas kita adalah terus bergerak majuAsal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Mengeluh adalah cara paling buruk dalam menyelesaikan masalah','Tetap Bertahan dan setia pada tujuan saat menghadapi Hambatan adalah kunci kesuksesan','Tidak perlu keahlian khusus untuk mencari musuh, tapi perlu kesetiaan untuk mempertahankan teman','Orang tua bukan hanya punya kekuatan untuk menatap juga untuk mengalah','Keuletan adalah tanda jadi kesuksesan','cepat atau lambat mereka yang menang adalah mereka yang berfikir dan yakin bahwa mereka bisa','Jaga terus Api Harapan Anda seperti menjaga hidup anda sendiri','Saat semua jalan tertutup. Buatlah jalan dan berserahlah kepada Allah','lari dari masalah bukanlah penyelesaian masalah, hadapi dan Belajarlah dari masalah itu','Rezeki itu ditangan Allah yang kita lakukan hanya berusaha semaksimal mungkin dan menyerahkan hasilnya kepada yang kuasa','Sukses dimulai dengan melakukan apa yang harus dilakukan','rasa syukur membuat kita tidak pernah merasa kekurangan','goal hanya sekedar goal kalau kita tidak mempunyai alasan yang kuat Mengapa kita harus mencapainya','Apapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','orang yang paling Bahagia bukanlah orang yang punya hal-hal terbaik tapi orang yang bisa menjadikan hal-hal yang ia punya menjadi yang terbaikApapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','Respon kita terhadap masalah menentukan kualitas berita fokus pada solusi','Semua yang terlalu sedikit dan terlalu banyak tidak akan membawa kebaikan','Tidak semua usaha kita dibayar oleh manusia, tapi Allah akan membayarnya kelak','Tidak ada harga untuk waktu, tetapi waktu sangat berharga','Sukses seringkali datang pada mereka yang berani bertindak dan jarang menghampiri pada mereka yang dikalahkan ketakutan','Katakan bisa pasti bisa dengan penuh keyakinan otak kita akan segera mencari solusi','Orang yang tidak belajar dari kegagalan adalah orang yang gagal sesungguhnya','Segala sesuatu masalah yang menimpa Anda tidak akan pernah melatih kekuatan anda untuk menyelesaikannya','Saat orang lain melakukan impianmu itu berarti mereka belum mampu melihat sejauh anda melihat','Allah tidak pernah terlambat ia akan menunjukkan kuasanya, pada detik terakhir sekalipun','Bukan banyaknya panah yang menentukan kemenangan tapi tajam panah dan tujuannya yang menentukan','Mengeluh itu sisi lain dari pemborosan, pemborosan waktu dan energy','Pikiran negatif sangat berkuasa bila diberi kesempatan, jadi jangan memberinya kesempatan','Cinta akan membuat kita menjadi orang terkaya di dunia, oleh karena itu mulailah mencintai','Cemas yang berlebihan tidak akan mengubah apapun kecuali merusak diri sendiri','Hidup ini sederhana terkadang pikiran manusia yang membuatnya rumit','Siapa yang bisa menerima kelemahannya sesungguhnya baru saja menambah satu kelebihan pada dirinya','Ada saatnya dimana kekalahan rasa manis yaitu Saat anda sudah melakukan yang terbaik','Menabung itu hanya untuk mempertahankan kekayaan, untuk meningkatkannya berinvestasilah','Jika selamanya anda bermain aman, selamanya juga Anda di tempat yang sama','Lari dari masalah akan membuat masalah menjadi lebih besar, menghadapinya akan membuat anda menjadi lebih besar','Yang menyedihkan bukanlah bidikan yang meleset tapi bidikan tanpa target','Hati yang sedang panas menumpulkan logika dinginkan terlebih dahulu sebelum mengambil keputusan','bila ingin hasil yang besar jangan kerjakan hal yang mudah saja','Jangan biarkan impianmu dijajah oleh pendapat orang lain','Mulailah dengan yang kecil, Kerjakanlah dengan cara yang besar adalah dengan cara yang benar','Pengaruh perkataan orang kepada anda 100% adalah atas izin anda sendiri','Bekerjalah dengan ikhlas karena bekerja tanpa paksaan akan memberi hasil maksimal','Suka belajar, suka jualan, hidup hemat, beli aset suka, sedekah adalah 5 resep Makmur','Lebih baik menjadi raja tikus daripada ekor naga','Kerja keras dan kerja cerdas dapat memastikan keberhasilan dan sedekah dapat memudahkannya','Sakit dalam perjuangan itu hanya berlangsung sementara, namun jika anda menyerah rasa sakit itu akan terasa selamanya','Kegagalan terbesar adalah ketika tidak berani mencoba','Langkah pertama yang diperlukan untuk mendapatkan hal yang anda inginkan adalah memutuskan apa yang anda inginkan','Jangan takut menghadapi masa depan, hadapi dan perjuangkanlah','Dahulukan Allah dalam setiap langkah hidupmu maka semuanya akan ditambahkan kepadamu','Kesulitan adalah hujan terbaik untuk menunjukkan kualitas diri yang sebenarnya','Kesalahan dan kegagalan adalah guru terbaik jika kita mau jujur mengakui dan belajar darinya','Diam belum tentu menyelesaikan masalah tapi setidaknya tidak membesarkan masalah','Pemenang sejati selalu memberikan 100% upayanya, bahkan ketika tidak seorang pun melihatnya','Memaafkan orang lain bagai Menyiram air Bara dendam di hati baik untuk kesehatan kita','Jenius adalah 1 inspirasi dan 99 keringat tidak ada yang dapat menggantikan kerja keras','Disiplin memang tidak mudah tapi tanpa kedisiplinan hidup anda akan jauh lebih sulit','Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan','Hujan tidak hanya datang sendirian Ia datang bersama kesejukan, hal buruk tidak datang sendirian ia datang bersama pembelajaran','Menang atau kalah lakukanlah dengan jujur','Lihatlah tantangan sebagai ujian dan lihatlah masalah Sebagai teguran','Lihat ke atas agar terinspirasi lihat ke bawah agar bersyukur','Untuk meraih apa yang benar-benar anda inginkan fokus saja tidak cukup. Anda harus memiliki rasa lapar untuk meraihnya','90% dari kegagalan berasal dari orang-orang yang memiliki kebiasaan membuat alasan-alasan','Allah tidak membenci orang malas, tapi Allah mengizinkan orang rajin mengambil rezeki orang malas','Keajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Orang optimis dapat melihat peluang dalam masalah, orang pesimis akan melihat masalah dalam peluangKeajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Kualitas pikiran anda menentukan kualitas kehidupan anda','Bersyukur adalah cara ampuh untuk meraih energi yang dahsyat, Sudahkah anda bersyukur hari ini','Jangan mengharapkan sesuatu yang luar biasa jika anda hanya mau melakukan hal yang biasa saja','Kebahagiaan dimulai dengan ketulusan','1000 perkataan dan pengetahuan tidak berarti tanpa adanya satu tindakan yang nyata','Tangkap peluang, kerjakan, selesaikan','Ketika situasi di sekolah Anda tidak menyenangkan. Di saat itulah sebenarnya karakter anda sedang dibentuk','Seorang pemberani bukan orang yang tidak mempunyai rasa takut. Tapi orang yang mampu berjalan diatas rasa takutnya','dalam takut yang tampak adalah hambatan, dalam yakin yang tampak adalah kesempatan','Tidak ada kata gagal yang ada hanya sukses atau perlu belajar lagi sampai berhasil','Menjadi tua itu pasti menjadi dewasa itu pilihan','Kehidupan yang besar dimulai dari mimpi yang besar','Tragedi dalam kehidupan ini bukanlah yang berakhir terlalu cepat, tetapi kita menunggu terlalu lama untuk memulainya','Takut akan kegagalan seharusnya tidak menjadi alasan untuk tidak mencoba sesuatu','Hari ini adalah hari pertama dalam hidup anda. Buatlah hari ini menjadi hari yang terbaik sepanjang hidup anda dan semoga hari esok matahari bersinar dengan terang','Saya berpikir bahwa ada suatu hal yang lebih penting daripada sekedar percaya, tindakan Dunia ini penuh dengan pemimpi ,tidaklah banyak orang yang berani maju ke depan dan Mulai mengambil langkah pasti untuk mewujudkan visi mereka','Anda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Allah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Pergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Menangis dapat melepaskan tambahan hormon stress, itulah mengapa kita sehabis menangis merasa lebih baikPergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Ketika cinta itu dipertahankan kamu akan tau siapa yang lebih menghargai tentang sebuah hubungan','Dalam hidup ini banyak orang tahu apa yang harus dilakukan, tetapi hanya sedikit yang melakukan apa yang ia ketahui. Mengetahui tidaklah cukup, Anda harus mengambil tindakan','Berilah perhatian lebih ke orang yang kamu sayangi, itu yang mereka butuhkan','Satu ons tindakan sama berharganya dengan satu ton teori','Kita mungkin terpisah sejak lama ketika tak mampu belajar untuk lebih dewasa','Sayangilah dia walau tidak sesempurna seperti yang kau inginkan','Kecantikan akan mengundang perhatian sikap santun memikat Kalbu','Mengetahui tidaklah cukup kita harus melakukannya, keinginan tak cukup hanya dengan berangan kita harus melakukannya','Kesalahan adalah bukti bahwa kamu sedang mencoba','Betapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lebih baik sendiri daripada bersama dengan orang yang salahBetapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lakukan sesuatu hari ini yang akan membuat dirimu berterima kasih di hari-hari mendatang','Waktu yang memutuskan Dengan siapa kamu akan berjumpa','Hati yang memutuskan siapa yang kamu inginkan dalam hidup ini','Dengan sikap yang akan menentukan siapa yang akan bertahan dalam hidupmu','Menjadi dewasa dan bijak diawali dengan menjadi muda dan bodoh','Lakukanlah apa yang paling kamu takutkan dalam hidupmu','Bekerjalah seolah kamu tak butuh uang, Cintailah seolah Kamu takkan Tersakiti dan menarilah seakan tak ada yang melihatmu','Jika hari ini sudah sempurna maka Apalah arti hari esok','Bintang pun tak kan bersinar tanpa kegelapan','Suatu saat aku akan menjadi tempat yang akan selalu kau rindu','Guru terbaik kamu adalah kesalahan terakhir yang kamu lakukan','Diam adalah respon terbaik untuk orang bodoh','Jangan pernah membuat keputusan yang permanen untuk perasaan yang sementara','Jika Allah yang menjadi alasan anda untuk hidup maka takkan pernah ada alasan untuk menyerah','Kegagalan ada bukan untuk ditakuti tetapi untuk dipelajari','Anda saat ini adalah hasil dari pengalaman anda','Keberuntungan adalah saat kesempatan datang, anda telah matang dengan segala persiapan','Jangan Menunggu hari yang terbaik untuk melangkah karena setiap hari sangatlah berharga','Keputusan yang baik diperoleh dari pengalaman, dan pengalaman didapat dari keputusan yang buruk','Setiap waktu yang anda lewati dengan sia-sia hanya menjauhkan anda dan semakin jauh dari kata sukses','Realitas kehidupan Anda adalah deskripsi dari jiwa dan pikiran anda','Berani mengambil keputusan maka anda telah melangkah 10 kali lebih cepat untuk sukses','Allah masih mencintai anda jika masih banyak cobaan dan tantangan hidup yang datang menghampiri anda. Allah percaya bahwa anda mampu melaluinya, maka jagalah kepercayaan itu','Ketika orang mengatakan anda sudah berubah sebenarnya itu hanya karena anda berhenti melakukan apa yang mereka ingin anda lakukan','Jangan menukar apa yang sangat anda inginkan untuk apa yang Anda ingin untuk saat ini','Orang-orang yang mengikuti keramaian biasanya tersesat di dalamnya','Orang tua saya bekerja terlalu keras untuk saya bukan supaya saya tidak hanya menjadi orang biasa tetapi menjadi orang luar biasa','Anda menghalangi impian anda ketika anda mengizinkan ketakutan Anda tumbuh lebih besar dari keyakinan anda','Sang juara percaya kepada dirinya sendiri bahkan ketika orang lain tidak percaya','Hanya mereka yang berani mengambil resiko yang jauh pasti dapat menemukan Seberapa jauh seseorang dapat pergi','Tunjukkan teman Anda, saya akan menunjukkan masa depan Anda','Beberapa orang ingin sesuatu terjadi, beberapa orang berharap itu akan terjadi, yang lain mewujudkannya jadi kenyataan','Jika anda menghabiskan waktu untuk mencoba menjadi baik dalam segala hal, Anda tidak akan pernah menjadi hebat dalam apapun','Sebuah perjalanan ribuan mil dimulai dari langkah kecil','Apa yang akan Anda kerjakan, Ketika anda tahu anda tidak mungkin gagal','Ketika kita memiliki satu sama lain, kita Memiliki segalanya','Kebesaran sebenarnya dapat ditemukan dalam hal hal kecil yang terkadang kita lewatkan','Bekerja keraslah, Bermimpilah lebih besar dan jadilah yang terbaik','Apa yang kita pikirkan menentukan apa yang akan terjadi pada kita. Jadi jika kita ingin mengubah hidup kita, kita perlu sedikit mengubah pikiran kita.','Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.','Saya memiliki filosofi yang sederhana: isi apa yang kosong, kosongkan apa yang terlalu penuh.','Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Hidup adalah serangkaian perubahan yang alami dan spontan. Jangan tolak mereka karena itu hanya membuat penyesalan dan duka. Biarkan realita menjadi realita. Biarkan sesuatu mengalir dengan alami ke manapun mereka suka.','Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.','Kenyataannya, Anda tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.','Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin','Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.','Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.','Hidup itu sederhana, kita yang membuatnya sulit.']
					const vasi = motiv[Math.floor(Math.random() * motiv.length)]
					vass = await getBuffer(`https://i.ibb.co/346nsHC/56806462-399407660892553-4745814299438481408-o.jpg`)
					client.sendMessage(from, vass, image, { quoted: mek, caption: '*Motivasi*\n\n'+ cin })
					await limitAdd(sender)
					break
        case 'fotocewek':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    const cangti = ['https://i.ibb.co/1T1DCz7/cewek-thailand-20200325-007-non-fotografer-kly.jpg','https://i.ibb.co/FsJ6jjs/kucing2.jpg','https://i.ibb.co/vvkdS7n/kucing3.jpg','https://i.ibb.co/1QHWxts/kucing4.jpg','https://i.ibb.co/JQmRz4n/kucing5.jpg','https://i.ibb.co/tBwrFkG/kucing6.jpg','https://i.ibb.co/dp0YhYm/kucing7.jpg','https://i.ibb.co/R03smZT/kucing8.jpg','https://i.ibb.co/17tw0dp/kucing9.jpg','https://i.ibb.co/7XdGGqc/kucing10.jpg','https://i.ibb.co/XL9PZxg/kucing11.jpg','https://i.ibb.co/gyjvXWN/kucing12.jpg','https://i.ibb.co/R4gg4wH/kucing13.jpg','https://i.ibb.co/PmLYtFm/kucing14.jpg','https://i.ibb.co/XbSDh47/kucing15.jpg','https://i.ibb.co/kSXNJzt/kucing16.jpg']
                    let cangtip = cangti[Math.floor(Math.random() * cangti.length)]
                    client.sendMessage(from, cangtip, image, {quote: mek})
					await limitAdd(sender)
                                        break
                /*case 'kucing':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	                                const kucings = ['https://i.ibb.co/vvmp82w/kucing1.jpg']
                                        let kucigz = kucings[Math.floor(Math.random() * kucings.length)]
                                        client.sendMessage(from, kucigz, image, {quote: mek})
					await limitAdd(sender)
                                        break*/
		case 'ssweb':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Urlnya mana kak?')
					teks = body.slice(7)
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buffer = await getBuffer(anu.gambar)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
		case 'loli':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    gatauda = body.slice(6)
					reply(ind.wait())
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA`, {method: 'get'})
                    buffer = await getBuffer(anu.result)
                    client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
                    break
		case 'waifu':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(7)
					reply(ind.wait())
					data = await fetchJson('https://waifu.pics/api/sfw/neko')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {quoted: mek})
					await limitAdd(sender)
					break
		case 'loli2':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(7)
					reply(ind.wait())
					data = await fetchJson('https://akaneko-api.herokuapp.com/api/loli')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {quoted: mek})
					await limitAdd(sender)
					break
		case 'hentai2':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					
					if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(9)
					reply(ind.wait())
					data = await fetchJson('https://akaneko-api.herokuapp.com/api/hentai')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {quoted: mek})
					await limitAdd(sender)
					break
		case 'animecry':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					await limitAdd(sender)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
		case 'animehug':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					await limitAdd(sender)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
		/*case 'pokemon':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
				case 'freefireimg':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=freefire`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
				case 'ww2':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=ww2`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break

                case 'kucing':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'doraemon':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=doraemon`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'hamster':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-hamsters`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'kelinci':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-rabbit`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
					case 'nangis':
				
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break*/
                case 'blowjob':
				
				if (!isNsfw) return reply(ind.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'cium':
				
				if (!isNsfw) return reply(ind.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'peluk':
				
				if (!isNsfw) return reply(ind.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
				case 'husbu':
				
				if (!isNsfw) return reply(ind.nsfwoff())
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA`)
						buffer = await getBuffer(res.image)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai husbumu'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('âŒ *ERROR* âŒ')
					}
					await limitAdd(sender)
					break
                case 'ranime':
				
				if (!isNsfw) return reply(ind.nsfwoff())
					gatauda = body.slice(8)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
				//anime
				case 'waifu':
				   	anu = await fetchJson(`https://arugaz.herokuapp.com/api/waifu`)
				  	buf = await getBuffer(anu.image)
				   	texs = ` *anime name* : ${anu.name} \n*deskripsi* : ${anu.desc} \n*source* : ${anu.source}`
				   	client.sendMessage(from, buf, image, { quoted: mek, caption: `${texs}`})
				        break
					case 'animeboy':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime%20boy`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'animegirl':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime%20girl`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break

				case 'animeimg':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break

				case 'loli':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=loli`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
	
                		case 'dewabatch':
                    			teks = body.slice(11)
                    			anu = await fetchJson(`https://arugaz.herokuapp.com/api/dewabatch?q=${teks}` , {method: 'get'})
                    			thum = await getBuffer(anu.thumb)
                    			client.sendMessage(from, thum, image, {quoted: mek, caption: `${anu.result}`})
                 			break
			   case 'animequotes':
				
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.data.quote)
					await limitAdd(sender)
					break
		case 'mobil':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=cars`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'motor':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=motorcycle`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'sepeda':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=bicycle`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'bluesky':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-blue-sky`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'flower':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-flower`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'icecream':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic%20ice%20cream`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'pemandangan':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic%20pemandangan%20alam`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'osakana':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=osakana`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'menherachan':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=menhera-chan`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'naruto':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=naruto%20uzumaki%20wallpaper%20hd`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'animegirl':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime-girl`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'animeboy':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime-boy`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'quotesid':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=quotes%20indonesia`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'quotesen':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=quotes`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'katakata':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=katakata`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'katamotivasi':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=kata%20motivasi`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'kehidupan':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=kata%20kata%20bijak%20kehidupan`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'quotesislam':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=quotes%20islami`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'fototiktok':
					//Case By PojanGanz
                    //if (!isRegistered) return reply( ind.noregis())
                    if (args.length < 1) return reply(`⚠️ Format salah! Ketik *${prefix}fototiktok username*\nContoh : *${prefix}fototiktok Kelvinilyas13*`)                 
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(12)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}` , {method: 'get'})
					buffer = await getBuffer(anu.result)
					reply(buffer)
					await limitAdd(sender)
					break
		case 'map':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
					buffer = await getBuffer(anu.gambar)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
					await limitAdd(sender)
					break
                case 'kbbi':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Apa yang mau dicari kak?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
					break
                case 'artinama':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Apa yang mau dicari kak?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
					break
		case 'jadwalsholat':
					//Case By PojanGanz
                     //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
    				if (isBanned) return reply('Maaf kamu sudah terbenned!')
    				if (args.length < 1) return reply('kota nya mana kak?')
					anu = await fetchJson(`https://api.zeks.xyz/api/jadwalsholat?apikey=apivinz&daerah=${body.slice(14)}`, {method: 'get'})
                    anur = anu.data.object
					sholat = `Ashar : ${anur.Ashr}\nDzuhur : ${anur.Dzuhur}\nMagrib : ${anur.Maghrib}\nIsya : ${anur.Isya}\nSubuh : ${anur.Shubuh}`
					client.sendMessage(from, sholat, text, {quoted: mek})
					await limitAdd(sender)
					break
                case 'neonime':
				        //Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				        if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/neonime_lastest`, {method: 'get'})
					teks = '################\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.judul}\n*link* : ${i.link}\n*rilis* : ${i.rilis}\n###############\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
		case 'ocr': 
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply(`*Kirim foto dengan caption ${prefix}ocr*`)
					}
					await limitAdd(sender)
					break
			case 'stickergif':
			case 'stikergif':
			case 'sgif':
			case 'stiker': 
			case 'sticker':
			case 's':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
					break
		/*case 'gtts':
		case 'tts':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return client.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break*/
        case 'tts':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            if (args.length < 1) return reply(`⚠️ Format salah! Ketik *${prefix}tts [teks]*\nContoh : *${prefix}tts Kelvin Ilyas*`) 
                try{
                const tts = await fetchJson(`https://api.i-tech.id/tools/tts?key=${open}&query=${body.slice(5)}`)
                if(tts.code == "200"){
                    buff = getBuffer(tts.result)
                    sendPtt(buff)
                    await limitAdd(sender)
                } else { reply(ind.maintenance()), sendMess(ownerNumber, '<<INFO>>\ntts: *tts Invalid*') }
            } catch (err) { sendMess(ownerNumber, 'tts Error : '+ err) }
        break
		case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*Prefix berhasil di ubah menjadi* : ${prefix}`)
					break 
		case 'setlimit':
		case 'addlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
		case 'setmemlimitt':
					if (args.length < 1) return
				if (!isAdmin) return reply('*Only Admin bot*')
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
		/*case 'tiktokstalk':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				try {
						if (args.length < 1) return client.sendMessage(from, '*Username mana kak?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait())
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*(ERROR)* *Kemungkinan username tidak valid*')
					}
					await limitAdd(sender)
					break*/
                 case 'linkgroup':

    case 'linkgc':
        if (!isGroup) return reply(mess.only.group)
        if (!isGroupAdmins) return reply(mess.only.admin)
        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
        linkgc = await client.groupInviteCode(from)
        reply('https://chat.whatsapp.com/'+linkgc)
                    break
		case 'sayang':
					client.sendMessage(from, 'Apa sayangku? 🥰',MessageType.text, { quoted: mek} )
					break
		/*case 'gelud':
					client.sendMessage(from, 'Kuylah, dapat duit aku..',MessageType.text, { quoted: mek} )
					break
		case 'hargaprem':
		case 'hargapremium':
					client.sendMessage(from, 'Level 100 = Free 3 day (premium)\n10k = 30day (premium)',MessageType.text, { quoted: mek} )
					break
		case 'buypremium':
					client.sendMessage(from, 'Ingin membeli premium?\nHarap hubungi kami : wa.me/62895336253039',MessageType.text, { quoted: mek} )
					break
		case 'buypremunlimited':
					
					client.sendMessage(from, 'Selamat kamu sudah berlangganan selamanya 🎉',MessageType.text, { quoted: mek} )
					break
		case 'buyprem30day':
					
					client.sendMessage(from, 'Selamat kamu sudah berlangganan 30 hari',MessageType.text, { quoted: mek} )
					break
		case 'buyprem7day':
					
					client.sendMessage(from, 'Selamat kamu sudah berlangganan 7 hari',MessageType.text, { quoted: mek} )
					break
		case 'test':
					client.sendMessage(from, 'Active',MessageType.text, { quoted: mek} )
					break
		case 'ping':
					client.sendMessage(from, 'Active',MessageType.text, { quoted: mek} )
					break*/
		case 'assalamualaikum':
					client.sendMessage(from, 'Waalaikumusalam',MessageType.text, { quoted: mek} )
					break
		case 'wa.me':
		case 'wame':
  					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
  					if (isLimit(sender)) return reply(ind.limitend(pusname))
  					client.updatePresence(from, Presence.composing) 
  					options = {
  					text :`「 *Vinz - BOT* 」\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					client.sendMessage(from, options, text, { quoted: mek } )
  					break
  					if (data.error) return reply(data.error)
  					reply(data.result)
					await limitAdd(sender)
  					break
  
		case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*~>* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
		case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
		case 'blockk':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		case 'unblockk':
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
				    client.blockUser (`${body.slice(10)}@c.us`, "remove")
					client.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
		case 'block':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
		case 'leave':
					//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					setTimeout( () => {
					client.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing) 
					client.sendMessage(from, 'Bye cuk🗣', text) // ur cods
					}, 0)
					break
		case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST MIKU 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
		case 'bcc': 
				if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST Vinz-BOT 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
		case 'setpp': 
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                   			if (!isBotGroupAdmins) return reply(ind.badmin())
					media = await client.downloadAndSaveMediaMessage(mek)
					await client.updateProfilePicture (from, media)
					reply('*Sukses mengganti icon group*')
					break				
		case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
		case 'grup':
		case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
            case 'admin':
            case 'owner':
            case 'creator':
            case 'developer':
                  client.sendMessage(from, {displayname: "Kelvin Ilyas", vcard: vcard}, MessageType.contact, { quoted: mek})
                  client.sendMessage(from, 'Tuh nomer owner ku >_<, jangan spam atau ku block kamu',MessageType.text, { quoted: mek} )
					break    
           /*case 'setname':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					client.groupUpdateSubject(from, `${body.slice(9)}`)
					client.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break*/
                /*case 'setdesc':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					client.groupUpdateDescription(from, `${body.slice(9)}`)
					client.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break*/
           /*case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di turunkan admin group!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Perintah diterima, menurunkan jadi admin group* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`*Perintah diterima, menurunkan* @${mentioned[0].split('@')[0]} *jadi admin group*`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break*/
			/*case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di jadikan admin group!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Selamat* 🥳 *Anda naik menjadi admin group* 🎉 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`*Selamat* 🥳 @${mentioned[0].split('@')[0]} *Anda naik menjadi admin group* 🎉`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break*/
		case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Asek jatah kick, otw kick* 🤭 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`*Asek jatah kick, otw kick* @${mentioned[0].split('@')[0]} 🤭`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
		case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
		case 'toimg':
				//Case By PojanGanz
                 //if (!isRegistered) return reply( ind.noregis())
				if (!isQuotedSticker) return reply('*Reply/Tag sticker!*')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '*DAH JADI SETAN* '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
                 case 'sim': 
        case 'simi': 
				anu = await fetchJson(`https://videfikri.com/api/simsimi/?teks=${body.slice(3)}`)
				reply(anu.result.jawaban)

				break
		case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('*Fitur simi sudah aktif sebelum nya*')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply(ind.satukos())
					}
					break
        case 'tebakzone':
                    if (!isGroup) return reply(ind.groupo())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
                    if (Number(args[0]) === 1) {
                        if (isTebak) return reply('*Fitur simi sudah aktif sebelum nya*')
                        tebakz.push(from)
                        fs.writeFileSync('./database/bot/tebak.json', JSON.stringify(tebakz))
                        reply('Sukses mengaktifkan mode simi di group ini ✔️')
                    } else if (Number(args[0]) === 0) {
                        tebakz.splice(from, 1)
                        fs.writeFileSync('./database/bot/tebak.json', JSON.stringify(tebakz))
                        reply('Sukes menonaktifkan mode simi di group ini ✔️')
                    } else {
                        reply(ind.satukos())
                    }
                    break
		case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan ')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('*Fitur nsfw sudah aktif sebelum nya*')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('Sukes mengaktifkan mode nsfw di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('Sukes menonaktifkan mode nsfw di group ini ✔️')
					} else {
						reply(ind.satukos())
					}
					break
					
		/*case 'leveling':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (args[0] === '1') {
					if (isLevelingOn) return reply('*Fitur level sudah aktif sebelum nya*')
					_leveling.push(from)
					fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
					reply(ind.lvlon())
					} else if (args[0] === '0') {
					_leveling.splice(from, 1)
						fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
						reply(ind.lvloff())
					} else {
						reply(ind.satukos())
					}
					break */
					
		case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*Fitur welcome sudah aktif sebelum nya')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur welcome di group ini')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur welcome di group ini')
					} else {
						reply(ind.satukos())
					}
					break
					 
                 case 'antilinkgrup':
                 case 'antilinkgc':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('UDAH NYALA KAK')
						antilink.push(from)
						fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
						reply('SUKSES MENGAKTIFKAN ANTI LINK DI GROUP')
						client.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
						reply('SUKSES MEMATIKAN ANTI LINK DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
					
                 case 'event':
					if (!isGroup) return reply(ind.groupo()) 
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
                 case 'eventt':
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
		case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('❬ SUCCSESS ❭')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
				case 'wait':
					
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break
        case 'order':
            if (args.length === 0) return reply(`Mau Order Berapa Hari ???\n\n╔═✪〘 Durasi & Harga 〙\n╠➥ 3  Hari : 25.000\n╠➥ 10 Hari : 50.000\n╠➥ 20 Hari : 80.000\n╠➥ 30 Hari : 100.000\n╚═〘 Durasi & Harga 〙\n\nKetik *!Order 3Hari*`)
            const o = body.slice(7).toLowerCase()
            const oo = args[0].toLowerCase()
            console.log(oo)
            var orderp = ''
            if (o == '3hari' || oo == '3hari' || oo == 3)  { orderp = 'Rp. 25.000' }
            if (o == '10hari' || oo == '10hari'|| oo == 10) { orderp = 'Rp. 50.000' }
            if (o == '20hari' || oo == '20hari'|| oo == 20) { orderp = 'Rp. 80.000' }
            if (o == '30hari' || oo == '30hari'|| oo == 30) { orderp = 'Rp. 100.000' }
            const order = `Ok, Harganya ${orderp},- ya
mau Order Via Apa ???

1. ATM BCA (Virtual Accout)
2. ATM BRI
3. ATM BNI
4. ATM MANDIRI
5. TRANSFER OVO
6. TRANSFER GOPAY
7. TRANSFER PULSA
8. TRANSFER SHOPEEPAY

Contoh perintah : 
*!ATM BCA* ATAU *!TRANSFER OVO*`
reply(`${order}`)
    break
    case 'atm':
            if (args.length === 0) return reply(`╔═✪〘 List ATM 〙\n╠➥ ATM BRI\n╠➥ ATM BNI\n╠➥ ATM MANDIRI\n\nKetik Perintah : *!ATM (Nama Bank)* Untuk Melanjutkan\nContoh: *!ATM BRI*`)
            const ATM = body.slice(5)
            const ATMM = body.slice(5).toUpperCase()
            const oa = args[1]
            var ATMp = ''
            if (ATM == 'bri'    || oa == 'bri')  { ATMp = 'No.Rekening : 044001008619502\nAtas Nama : KELVIN ILYAS\n\n'}
            if (ATM == 'bni'    || oa == 'bni') { ATMp = 'No.Rekening : 0839604839\nAtas Nama : KELVIN ILYAS\n\n'}
            if (ATM == 'mandiri'|| oa == 'mandiri') { ATMp = 'No.Rekening : 1180011103826\nAtas Nama : KELVIN ILYAS\n\n'}
            if (ATM == 'bca'    || oa == 'bca') { ATMp = 'No.Rekening : 122081387777325 (Virtual Accout)\nAtas Nama : Kelvin Ilyas \n\n*Note*\nBerikut Cara Transfer VIA Virtual Account BCA\n1. Pilih Transfer Dana > Transfer ke BCA Virtual Account\n2. Centang nomor Virtual Account dan Masukkan Nomor Rekening di atas, kemudian klik Lanjutkan\n3. Masukkan Jumlah Transfer Sesuai Nominal Tersebut\n4. Pastikan Data Sudah benar\n5. Masukan PIN dan klik KIRIM\n\n'}
            const TATM = `Silahkan untuk melakukan Transfer ke ATM ${ATMM||oa.toUpperCase()} dengan Nominal tersebut ke Rekening Berikut 

${ATMp} 
Jika Sudah melakukan Transfer,  Kirim Tanda Buktinya dan balas pesan ini dengan *!CEK* yaa`
reply(TATM)
break
case 'transfer':
            if (args.length === 0) return reply(`╔═✪〘 List Transfer 〙\n╠➥ TRANSFER OVO\n╠➥ TRANSFER GOPAY\n╠➥ TRANSFER PULSA\n\nKetik Perintah : *!TRANSFER (Tujuan)* Untuk Melanjutkan\nContoh: *!TRANSFER GOPAY*`)
            const orde = body.slice(10)
            const tf = body.slice(10)
            const ob = args[1]
            var tfp = ''
            if (orde == 'ovo'   || ob == 'ovo')  { tfp = '0877-7708-7310' }
            if (orde == 'gopay' || ob == 'gopay') { tfp = '0813-8777-7325' }
            if (orde == 'pulsa' || ob == 'pulsa') { tfp = '0877-7708-7310' }
            if (orde == 'shopeepay' || ob == 'shopeepay') { tfp = '0813-8777-7325' }
            const torde = `Silahkan untuk melakukan Transfer ${tf} dengan Nominal tersebut ke Nomor Berikut 

Customer ${tf} : ${tfp}
Atas Nama : KELVIN ILYAS

Jika Sudah melakukan Transfer, Kirim Tanda Buktinya dan balas pesan ini dengan *!CEK* yaa`
reply(torde)
break
        case'cek':
            const filecheat = `https://enginevip.net/achievers/donwloadfile.php?dcodex=AIOH`
            const urlcek = await axios.get(`https://videfikri.com/api/call?nohp=6281387777325`)
            const cekJS = urlcek.data.logs
            var cekk = cekJS.slice(0,12)
            console.log(urlcek)
            if( cekk == '[!] Berhasil') {tcek = `Wait yaa, Saya cek dulu`
                sleep(10000) 
                reply(`Okeh Masuk gan, Silahkan Download File Cheat : ${filecheat}\nKemudian Extract & Runs as Administrator. Nanti Serialnya kirim ke saya ya gan`)} 
                else {tcek = `Maaf Transaksi Belum di Temukan, Silahkan ketik *!CEK* Kembali atau spam chat yaa`,reply(tcek)}
            break
        case'dc':
        case'banned':
        const banned = `Buat yg sering ke detec CS Biru / DC / Bug Trap 

Step 1 :
- Clean pake CC Cleaner
- FULL SCAN pake Windows Defender / Antivirus lain
- Clean/Bersihkan Isi Folder  : temp, %temp%, prefetch
  Cara Open Folder nya Ketik yang ada *gambar WINDOWS + R* di keyboard, Lalu Ketik nama folder di atas

Step 2 :
- Buka CMD
- Ketik : ipconfig /flushdns
- Lalu Ketik : ipconfig/release
- Terakhir Ketik : ipconfig /renew

Setelah Selesai Step 1 & 2 Restart PC dan coba lagi Run As Administrator Cheat nya\n\nBuat Akun Percobaan Bisa Menggunakan Email Palsu , Link  Email Palsu : https://tempmail.ninja/

Order Ataupun Perpanjang, Bisa Langsung Chat Saja atau ketik !order`
reply(banned)
        break            
				default:
                if (budy.includes(`assalamualaikum`)) { reply(`Waalaikumsalam`) }
		        if (budy.includes(`Assalamualaikum`)) { reply(`Waalaikumsalam`) }
                if (budy.includes(`Assalamu'alaikum`)) { reply(`Waalaikum'salam`) }
                if (budy.includes(`assalamu'alaikum`)) { reply(`Waalaikum'salam`) }
                //if (budy.includes(`Bot`)) { reply(`Iya Vinz-BOT Di Sini?\nUntuk Menggunakan Bot Ketik *menu/help*`)}
                //if (budy.includes(`bot`)) {reply(`Ya?\nUntuk Menggunakan Bot Ketik _menu/help`) }
                //if (budy.includes(`Vinz-BOT`)) { reply(`Ya?\nUntuk Menggunakan Bot Ketik _menu/help`) }
                if (budy.includes(`@6295335902040`)) { reply(`Iyaa? Knpa Tag Miku Ada Yg bisa Saya Bantu?`) }
                if (budy.includes(`@6281387777325`)) { reply(`Jangan Tag Kelvin Kak, Dia Lagi Sibuk ><`) }
                // if (budy.includes(`Woy`)) {reply(`Ya?\nUntuk Menggunakan Bot Ketik _${prefix}menu/${prefix}help_`) }
                // if (budy.includes(`Sayang`)) {reply(`Aku Juga Sayang Kamu Kak😍`)}
        		// if (budy.includes(`sayang`)) {reply(`Aku Juga Sayang Kamu Kak😍`) }
                // if (budy.includes(`Hai`)) { reply(`Hai Juga,\nUntuk Menggunakan Bot Ketik _${prefix}menu/${prefix}help_ `) }
                // if (budy.includes(`Hallo`)) { reply(`Hallo Juga,\nUntuk Menggunakan Bot Ketik _${prefix}menu/${prefix}help_`) }
                if (budy.includes(`Thanks`)) { reply(`Sama-sama ${pushname}`) }
                if (budy.includes(`thanks`)) { reply(`Sama-sama ${pushname}`) }
                if (budy.includes(`thx`)) { reply(`Sama-sama ${pushname}`)}
                if (budy.includes(`Thx`)) {reply(`Sama-sama ${pushname}`) }
                if (budy.includes(`Tq`)) {reply(`Sama-sama ${pushname}`)}
                if (budy.includes(`tq`)) {reply(`Sama-sama ${pushname}`)}
                if (budy.includes(`makasih`)) {reply(`Sama-sama ${pushname}`)}
                if (budy.includes(`Makasih`)) {reply(`Sama-sama ${pushname}`)}
                if(isQuotedImage){
                        nfF = mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption.slice(5,11)
                        answ = budy.toUpperCase()
                        console.log(answ)
                        console.log(nfF)
                            if(vtebak(nfF) == "") { 
                                if(tebak(nfF) == answ) {  await JwbTebak(nfF,answ)
                                    return reply("Yeaaayy Jaawban Kamuuu benaarr") }
                            }
                            //reply(tebak(id))
                    }
                //SimiGroup
			    if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
                        console.log("Mode Simi")
						muehe = await simih(budy)
						reply(muehe)
					} 
                
                //Fitur TebakZone
                if (isGroup && !isCmd && isTebak && budy != undefined) {
                    //console.log(budy)
                    console.log("Mode TebakZone")
                    
                } 
		  }	
		} catch (e) {
            console.log("Mode Umum")
            //reply(ind.cmdnf(prefix, command))
            //console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
			console.log('Error : %s', color(e, 'red'))
		}
	})
