const fs = require('fs-extra')

exports.wait = () => {
	return`*「 WAIT 」 SEDANG DIPROSES*`
}
exports.reminderOn = (messRemind, parsedTime, sender) => {
    return `
*── 「 SET REMINDER SUCCESS」 ──*
    
Reminder berhasil diaktifkan!
➸ *Pesan*: ${messRemind}
➸ *Durasi*: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik
➸ *Untuk*: @${sender.replace('@s.whatsapp.net', '')}
    ` }
exports.reminderAlert = (messRemind, sender) => {
    return `
*── 「 REMINDER 」 ──*

⏰ @${sender.replace('@s.whatsapp.net', '')} ⏰
*Pesan*: \n${messRemind}`
}
exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}
exports.maintenance = () => {
    return `Maaf, Fitur sedang Maintenance. Silahkan Hubungi Admin untuk Informasi Lebih Lanjut\n*${prefix}OWNER* `
}
exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 PENDAFTARAN 」*\n\n*Cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar Yogi|17*`
}

exports.rediregis = () => {
	return`*「 SUDAH TERDAFTAR 」*\n\n*Kamu sudah terdaftar di database XYTOD-bot*`
}

exports.stikga = () => {
	return`*Yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW TIDAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner Yogiツ, Laporan palsu atau main² tidak akan ditanggapi.*`
}

exports.wrongf = () => {
	return`*Format salah/text kosong*`
}

exports.clears = () => {
	return`*Clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nUntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*Jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA XYTOD BOT 」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ini penting! katanya:V`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `◪ INFO DEVELOPER
  ► Nama : Vinz-BOT
  ► WhatsApp : Wa.me/6281387777325
  ► Instagram : instagram.com/Kelviniylas13
  ----------------------------------
◪ YOUR INFO
  ► Prefix : 「 ${prefix} 」
  ► Nama : ${pushname}
  ► Duit : *Rp.${uangku}.-*
  ► Role : *${role}*
  ► Level : ${getLevelingLevel(sender)}
  ► Xp : ${getLevelingXp(sender)}/${reqXp} 
  ► Nomer : wa.me/${sender.split("@")[0]}
  ----------------------------------


*${prefix}info*
*${prefix}snk*
*${prefix}lpr*
*${prefix}request*
*${prefix}blocklist*
*${prefix}ping*
*${prefix}buypremium*
*${prefix}hargaprem*


  *◪ GROUP MENU*
► ${prefix}welcome [1/0]
► ${prefix}nsfw [1/0]
► ${prefix}antilink [1/0]
► ${prefix}leveling [1/0]
► ${prefix}nobadword [1/0]
► ${prefix}simih [1/0] 
► ${prefix}promote [@tag]
► ${prefix}demote [@tag]
► ${prefix}tagall
► ${prefix}listadmin
► ${prefix}wakillist
► ${prefix}premiumlist
► ${prefix}banlist
► ${prefix}blocklist
► ${prefix}linkgc
► ${prefix}mining
► ${prefix}hidetag
► ${prefix}grouplist
► ${prefix}add [62]
► ${prefix}kick [@tag]
► ${prefix}setname
► ${prefix}setdesc
► ${prefix}setpp
► ${prefix}listadmin
► ${prefix}linkgc
► ${prefix}leave
► ${prefix}mining
► ${prefix}nguli
► ${prefix}maling
► ${prefix}sedekah
► ${prefix}level
► ${prefix}grup [buka/tutup)


  *◪ OWNER MENU*
► ${prefix}bc
► ${prefix}addbadword
► ${prefix}delbadword
► ${prefix}addpremium
► ${prefix}dellpremium
► ${prefix}bcgc
► ${prefix}kickall
► ${prefix}setreply
► ${prefix}setprefix
► ${prefix}clearall
► ${prefix}block
► ${prefix}unblock
► ${prefix}leave
► ${prefix}event [1/0]
► ${prefix}clone
► ${prefix}setppbot

  *◪ INFORMATION MENU*
► ${prefix}covidindo err
► ${prefix}infonomor err
► ${prefix}infogempa err
► ${prefix}infocuaca err
► ${prefix}infofilm  err
► ${prefix}jadwaltv err
► ${prefix}jadwalsholat
► ${prefix}tribunews err
► ${prefix}liputan6 err
► ${prefix}foxnews err
► ${prefix}apkpure err
► ${prefix}film1 err
► ${prefix}film2 err
► ${prefix}lirik err
► ${prefix}searchfilm err
► ${prefix}nickff err


  *◪ MAKER MENU*
► ${prefix}sticker
► ${prefix}harta
► ${prefix}tahta
► ${prefix}ttp
► ${prefix}ttp
► ${prefix}ttp
► ${prefix}ttp
► ${prefix}ttp
► ${prefix}ttp
► ${prefix}ttp
► ${prefix}ttp
► ${prefix}ttp
► ${prefix}ttp
► ${prefix}attp
► ${prefix}nulis
► ${prefix}nulis2
► ${prefix}tahta
► ${prefix}darkneon
► ${prefix}candlemug
► ${prefix}lovemsg
► ${prefix}mugflower
► ${prefix}narutobanner
► ${prefix}paperonglass
► ${prefix}romancetext
► ${prefix}shadowtext
► ${prefix}coffeecup
► ${prefix}coffeecup2
► ${prefix}glowingneon
► ${prefix}underwater
► ${prefix}hpotter
► ${prefix}woodblock
► ${prefix}ttp
► ${prefix}attp
► ${prefix}jokerlogo
► ${prefix}calendermaker
► ${prefix}pornhub
► ${prefix}googletext
► ${prefix}glitchtext
► ${prefix}cecan
► ${prefix}cogan
► ${prefix}pornhub
► ${prefix}ttp
► ${prefix}pinterest
► ${prefix}ytplay
► ${prefix}play
► ${prefix}joox
► ${prefix}gpl
► ${prefix}ig
► ${prefix}amongus
► ${prefix}wame
► ${prefix}carbon
► ${prefix}lollogo
► ${prefix}lionlogo
► ${prefix}cuaca
► ${prefix}haram
► ${prefix}valorant
► ${prefix}gay
► ${prefix}editod
► ${prefix}hekerserti
► ${prefix}ffserti
► ${prefix}ffserti2
► ${prefix}mlserti
► ${prefix}pubgserti


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
► ${prefix}gantengcek
► ${prefix}cantikcek
► ${prefix}sangecek
► ${prefix}gaycek
► ${prefix}lesbicek
► ${prefix}watak
► ${prefix}hobby
► ${prefix}apakah
► ${prefix}kapankah
► ${prefix}bisakah
► ${prefix}bagaimanakah
► ${prefix}rate
► ${prefix}alay
► ${prefix}fml
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
► ${prefix}pinterest fixz
► ${prefix}fototiktok [Username] fixz
► ${prefix}tiktok [Link] err
► ${prefix}resepmasakan [makanan] fixz
► ${prefix}igstalk
► ${prefix}bitly
► ${prefix}tiktokstalk 
► ${prefix}ssweb
► ${prefix}kbbi
► ${prefix}meme
► ${prefix}memeindo
 
 
  *◪ DOWNLOAD*
► ${prefix}joox 
► ${prefix}ytmp4 
► ${prefix}ytmp3 
► ${prefix}play

 
  *◪ ANIME MENU*
► ${prefix}peluk
► ${prefix}cium
► ${prefix}husbu
► ${prefix}ranime
► ${prefix}waifu
► ${prefix}animeboy
► ${prefix}animegirl
► ${prefix}animeimg
► ${prefix}loli
► ${prefix}shota
► ${prefix}neko
► ${prefix}animehug
► ${prefix}animecry


  *◪ MENU RANDOM*
► ${prefix}quotes fixz
► ${prefix}quotesid fixz
► ${prefix}quotesen fixz
► ${prefix}quotesidislam fixz
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


 *◪ LIMIT & UANG*
► ${prefix}limit
► ${prefix}buylimit
► ${prefix}buypremiumlimit
► ${prefix}transfer

 
 *◪ TOOLS*
► ${prefix}bass
► ${prefix}toimg
► ${prefix}tomp3
► ${prefix}slowmo
► ${prefix}gemok
► ${prefix}tupai
► ${prefix}tinyurl
► ${prefix}bitly
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
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*
 📊➤ Nama : ${pushname}
 📊➤ Nomer : ${sender.split("@")[0]}
 📊➤ Xp : ${getLevelingXp(sender)}
 📊➤ Limit :  +3
 📊➤ Pangkat :  ${role}
 📊➤ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} limit kamu sudah habis*\n*Hubungi kami* : wa.me/6283815956151\n\n*Note : Kami akan berikan random dari 1-10*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : Untuk mendapatkan limit. Bisa lewat naik level melalui group atau buylimit.
`}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`◪ *「 ATM 」*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  └─ ❏ *Uang* : Rp. ${uangkau}
`}
