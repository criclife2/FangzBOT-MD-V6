(function(_0x887422,_0x574d5d){function _0xa30230(_0x1a4e41,_0x50ed0b){return _0x1d30(_0x1a4e41- -0x2a4,_0x50ed0b);}const _0x4d26a1=_0x887422();while(!![]){try{const _0x4b1096=parseInt(_0xa30230(-0x182,-0xe7))/0x1+-parseInt(_0xa30230(-0xf2,-0x132))/0x2+parseInt(_0xa30230(-0x1fd,-0x241))/0x3*(parseInt(_0xa30230(-0x186,-0x15f))/0x4)+-parseInt(_0xa30230(-0xb6,-0x152))/0x5+-parseInt(_0xa30230(-0x134,-0x153))/0x6*(-parseInt(_0xa30230(-0x12e,-0xc7))/0x7)+-parseInt(_0xa30230(-0xc4,-0x155))/0x8*(-parseInt(_0xa30230(-0xfa,-0xf2))/0x9)+-parseInt(_0xa30230(-0x109,-0xe2))/0xa*(parseInt(_0xa30230(-0xbb,-0x96))/0xb);if(_0x4b1096===_0x574d5d)break;else _0x4d26a1['push'](_0x4d26a1['shift']());}catch(_0x58ae95){_0x4d26a1['push'](_0x4d26a1['shift']());}}}(_0x3542,0x7f4a0));import{promises}from'fs';import{join}from'path';import{xpRange}from'../lib/levelling.js';import _0x146ea1 from'moment-timezone';import _0x104357 from'os';import _0x4452d0 from'fs';import _0x292615 from'node-fetch';function _0x1d30(_0x3f679e,_0x5a6366){const _0x3542b5=_0x3542();return _0x1d30=function(_0x1d30de,_0x5230cf){_0x1d30de=_0x1d30de-0x94;let _0x3ff2cb=_0x3542b5[_0x1d30de];return _0x3ff2cb;},_0x1d30(_0x3f679e,_0x5a6366);}const defaultMenu={'before':_0x4ff5bf(0x2ec,0x337)[_0x4ff5bf(0x3e1,0x390)](),'header':_0x4ff5bf(0x3a5,0x3a4),'body':_0x4ff5bf(0x46b,0x3eb),'footer':_0x4ff5bf(0x39a,0x3ab),'after':_0x4ff5bf(0x3ba,0x3f6)};let handler=async(_0x4eb888,{conn:_0x367b77,usedPrefix:_0x30b687,__dirname:_0x2b76ee,args:_0x954983})=>{let _0x3a566f,_0x1fc2b=(''+_0x954983[0x0])[_0x106b99(-0x17e,-0x104)](),_0x29b1b6=[_0x106b99(-0x135,-0xb3),'anime',_0x106b99(-0xda,-0xc3),_0x106b99(-0xcd,-0x128),_0x106b99(0x20,-0x71),_0x106b99(-0x22,-0x42),_0x106b99(-0xb4,-0x38),_0x106b99(-0xbf,-0x129),'xp',_0x106b99(0x4d,-0x15),_0x106b99(-0x1c0,-0x131),_0x106b99(-0x13f,-0xeb),_0x106b99(-0x95,0x4),'quotes',_0x106b99(-0xde,-0x132),_0x106b99(-0x16e,-0x13d),_0x106b99(-0x18e,-0x13f),_0x106b99(-0x113,-0xe0),_0x106b99(-0xdb,-0xa9),_0x106b99(0x4b,-0x2f),_0x106b99(-0x15c,-0x11d),'tools',_0x106b99(-0xec,-0x8d),_0x106b99(-0x1a3,-0xf4),_0x106b99(-0x11f,-0x13c),_0x106b99(-0x11a,-0xce),_0x106b99(-0x3,-0x7),_0x106b99(-0x11b,-0x107),'jadibot',_0x106b99(-0xd9,-0x138),_0x106b99(-0x116,-0xc2),'nocategory'];if(!_0x29b1b6['includes'](_0x1fc2b))_0x1fc2b=_0x106b99(-0x108,-0xae);if(_0x1fc2b==_0x106b99(-0xe2,-0xb3))_0x3a566f={'main':_0x106b99(-0xa0,-0x9d),'game':_0x106b99(-0xa3,-0x8c),'rpg':'RPG\x20Games','xp':_0x106b99(-0x40,-0xb5),'sticker':_0x106b99(-0x8b,-0xee),'kerang':_0x106b99(-0x71,-0x21),'quotes':_0x106b99(-0xa8,-0x37),'fun':_0x106b99(0x35,-0x4e),'anime':_0x106b99(0x52,-0x27),'admin':_0x106b99(-0x148,-0x12b),'group':_0x106b99(-0x17,-0xb),'vote':'Voting','absen':_0x106b99(-0xe1,-0x44),'premium':_0x106b99(-0xbb,-0x10a),'anonymous':_0x106b99(-0x4a,-0x1b),'internet':_0x106b99(0x32,-0x2c),'downloader':_0x106b99(-0x46,-0xb6),'tools':_0x106b99(-0x118,-0xde),'nulis':'MagerNulis\x20&\x20Logo','audio':_0x106b99(-0xd6,-0x9f),'maker':'Maker','database':_0x106b99(-0xfb,-0xa6),'quran':_0x106b99(0x5,-0xa1),'owner':_0x106b99(-0x35,-0x32),'host':_0x106b99(-0x7b,-0xcb),'advanced':'Advanced','info':'Info','':_0x106b99(-0x9f,-0x33)};if(_0x1fc2b=='game')_0x3a566f={'game':_0x106b99(-0x121,-0x8c)};if(_0x1fc2b=='anime')_0x3a566f={'anime':'Anime'};function _0x106b99(_0x343f48,_0x3022f8){return _0x4ff5bf(_0x343f48,_0x3022f8- -0x432);}if(_0x1fc2b=='nsfw')_0x3a566f={'nsfw':'Nsfw'};if(_0x1fc2b==_0x106b99(-0xba,-0xeb))_0x3a566f={'rpg':_0x106b99(-0xb0,-0x133)};if(_0x1fc2b=='edukasi')_0x3a566f={'edukasi':_0x106b99(-0xda,-0x118)};if(_0x1fc2b==_0x106b99(-0xd0,-0x42))_0x3a566f={'news':_0x106b99(0xb,-0x53)};if(_0x1fc2b==_0x106b99(-0x51,-0x38))_0x3a566f={'random':'Random'};if(_0x1fc2b=='xp')_0x3a566f={'xp':_0x106b99(-0x92,-0xb5)};if(_0x1fc2b==_0x106b99(-0x150,-0x131))_0x3a566f={'sticker':_0x106b99(0x7a,-0x11)};if(_0x1fc2b==_0x106b99(0x7e,0x4))_0x3a566f={'kerang':_0x106b99(0x57,-0x21)};if(_0x1fc2b==_0x106b99(-0xd6,-0x119))_0x3a566f={'quotes':_0x106b99(-0x24,-0x37)};if(_0x1fc2b==_0x106b99(-0x19f,-0x132))_0x3a566f={'admin':_0x106b99(-0xd8,-0x135)+(global['opts'][_0x106b99(-0x1c,-0x5e)]?'':_0x106b99(-0x146,-0xec)),'group':'Grup'};if(_0x1fc2b==_0x106b99(-0xe6,-0x13d))_0x3a566f={'group':_0x106b99(0x95,-0xb)};if(_0x1fc2b==_0x106b99(-0xbf,-0x13f))_0x3a566f={'premium':_0x106b99(-0xdb,-0x10a)};if(_0x1fc2b==_0x106b99(-0xd8,-0xe0))_0x3a566f={'internet':_0x106b99(0x51,-0x2c)};if(_0x1fc2b==_0x106b99(-0xd6,-0xa9))_0x3a566f={'anonymous':_0x106b99(0x3d,-0x1b)};if(_0x1fc2b==_0x106b99(-0x50,-0x2f))_0x3a566f={'nulis':_0x106b99(-0xad,-0x115),'maker':_0x106b99(0x20,-0x1c)};if(_0x1fc2b==_0x106b99(-0x13d,-0x11d))_0x3a566f={'downloader':_0x106b99(-0x92,-0xb6)};if(_0x1fc2b==_0x106b99(-0x98,-0x140))_0x3a566f={'tools':_0x106b99(-0xbf,-0xde)};if(_0x1fc2b==_0x106b99(-0x79,-0x8d))_0x3a566f={'fun':'Fun'};if(_0x1fc2b==_0x106b99(-0x167,-0xf4))_0x3a566f={'database':_0x106b99(-0x2,-0xa6)};if(_0x1fc2b=='vote')_0x3a566f={'vote':_0x106b99(-0xf0,-0xf8),'absen':_0x106b99(-0x35,-0x44)};if(_0x1fc2b==_0x106b99(-0x49,-0x51))_0x3a566f={'absen':_0x106b99(-0xc2,-0x44)};if(_0x1fc2b==_0x106b99(-0xe1,-0x13c))_0x3a566f={'quran':'Al-Qur\x27an','islamic':_0x106b99(-0x6f,-0x20)};if(_0x1fc2b==_0x106b99(-0x1a1,-0x107))_0x3a566f={'audio':_0x106b99(-0x6c,-0x9f)};if(_0x1fc2b==_0x106b99(-0xc6,-0x4a))_0x3a566f={'jadibot':'Jadi\x20Bot'};if(_0x1fc2b=='info')_0x3a566f={'info':_0x106b99(0xf,-0x79)};if(_0x1fc2b==_0x106b99(-0x98,-0xc2))_0x3a566f={'owner':_0x106b99(-0x83,-0x32),'host':_0x106b99(-0xd8,-0xcb),'advanced':_0x106b99(-0x60,-0x93)};if(_0x1fc2b==_0x106b99(-0x99,-0x7))_0x3a566f={'nsfw':_0x106b99(-0x173,-0xe1)};if(_0x1fc2b==_0x106b99(-0x74,-0x119))_0x3a566f={'quotes':'Quotes'};if(_0x1fc2b==_0x106b99(-0x1b9,-0x128))_0x3a566f={'maker':_0x106b99(0x6f,-0x1c)};if(_0x1fc2b==_0x106b99(-0x59,-0xc3))_0x3a566f={'update':_0x106b99(-0x31,-0x95)};try{let _0x349792=global[_0x106b99(-0xad,-0x8b)],_0x4e7a0f=global[_0x106b99(-0x126,-0xad)],_0x26f288=global[_0x106b99(-0x11f,-0x7b)],_0x1b3b8c=global[_0x106b99(-0x148,-0xbc)],_0x2fd4e8=global[_0x106b99(-0xa0,-0x18)],_0x930d45=global[_0x106b99(-0x122,-0x80)],_0x150de2=global[_0x106b99(-0x8a,-0xa8)],_0x1bbf0a=global[_0x106b99(-0x79,-0xd9)],_0x5f1a83=global['cmenuf'],_0xd114ac=global['cmenua'],_0x55552b=global[_0x106b99(0x58,-0x6)],_0x2ec0d4=global[_0x106b99(-0x41,-0x12)],_0x283faa='@'+_0x4eb888['sender'][_0x106b99(-0x129,-0x11c)]('@')[0x0],_0x4c2054;process[_0x106b99(-0xcf,-0xf0)]&&(process['send'](_0x106b99(-0xe1,-0x127)),_0x4c2054=await new Promise(_0x2c7d37=>{process[_0x45bf35(-0xf2,-0x8e)](_0x45bf35(-0x172,-0xef),_0x2c7d37);function _0x45bf35(_0x94754e,_0x53e11a){return _0x106b99(_0x94754e,_0x53e11a- -0x18);}setTimeout(_0x2c7d37,0x3e8);})*0x3e8);let _0xb86f56=clockString(_0x4c2054);const _0x14c2c3=[{'title':htki+_0x106b99(-0xa6,-0xa5)+htka,'rows':[{'title':'❀📛\x20'+pmenus+_0x106b99(-0x46,-0xab),'rowId':_0x106b99(0x30,-0x2e),'description':_0x106b99(-0x8a,-0xa3)},{'title':_0x106b99(-0x80,-0xf1)+pmenus+'\x20OWNER','rowId':_0x106b99(-0xcb,-0x84),'description':_0x106b99(-0xe0,-0xe7)},{'title':_0x106b99(-0x19f,-0x11e)+pmenus+'\x20SCRIPT','rowId':_0x106b99(-0x124,-0xcc),'description':_0x106b99(-0x1b4,-0x114)+namebot},{'title':_0x106b99(-0x39,-0xe4)+pmenus+_0x106b99(0x4e,-0x31),'rowId':_0x106b99(-0x15d,-0xe9),'description':'Peraturan\x20menggunakan\x20'+namebot},{'title':'❀🗣️\x20'+pmenus+_0x106b99(-0xb8,-0x148),'rowId':_0x106b99(-0x8c,-0xe6),'description':'Request\x20fitur\x20Fangz\x20BOT'}]},{'title':htki+_0x106b99(-0xe,-0x6c)+htka,'rows':[{'title':_0x106b99(-0xae,-0x2a)+pmenus+_0x106b99(-0xf0,-0xcf),'rowId':_0x106b99(-0x198,-0x125),'description':_0x106b99(-0x193,-0x142)},{'title':_0x106b99(0xe,-0x3)+pmenus+_0x106b99(0x4a,-0x62),'rowId':_0x106b99(-0xee,-0x84),'description':'Menampilkan\x20list\x20harga\x20script\x20BOT'},{'title':_0x106b99(-0x5b,-0xd0)+pmenus+_0x106b99(-0x37,-0x5f),'rowId':_0x106b99(-0xb4,-0xb0),'description':_0x106b99(-0x147,-0x10d)},{'title':'❀💰\x20'+pmenus+_0x106b99(-0x6a,-0x9b),'rowId':'.donasi','description':_0x106b99(0x11,0x7)},{'title':_0x106b99(-0x15,-0x7d)+pmenus+_0x106b99(-0xdb,-0x146),'rowId':'.rate','description':_0x106b99(-0x2b,-0x52)},{'title':'❀🌐\x20'+pmenus+_0x106b99(0x3c,-0x56),'rowId':'.website','description':_0x106b99(-0x14f,-0xd6)}]},{'title':htki+_0x106b99(-0xa8,-0xb1)+htka,'rows':[{'title':'இ💬☜\x20'+pmenus+_0x106b99(-0x40,-0x55),'rowId':_0x106b99(-0x11e,-0x103),'description':_0x106b99(-0x18c,-0x150)},{'title':_0x106b99(-0x192,-0x110)+pmenus+_0x106b99(-0xea,-0x91),'rowId':_0x106b99(-0xec,-0x64),'description':_0x106b99(-0x52,-0x3d)},{'title':_0x106b99(-0x8,0x8)+pmenus+_0x106b99(-0x1e3,-0x145),'rowId':'.?\x20xp','description':_0x106b99(-0xc4,-0x48)},{'title':'இ🎮☜\x20'+pmenus+_0x106b99(-0x8d,-0x59),'rowId':_0x106b99(-0x94,-0x6d),'description':_0x106b99(0xe,-0x6e)},{'title':_0x106b99(-0xe3,-0xf2)+pmenus+'\x20Fun','rowId':_0x106b99(-0x2f,-0x23),'description':_0x106b99(-0x7e,-0xb2)},{'title':_0x106b99(-0x159,-0xdd)+pmenus+_0x106b99(-0xbb,-0x12d),'rowId':_0x106b99(-0xf1,-0x124),'description':'Tanyakan\x20pada\x20ketua\x20club'},{'title':'இ📑☜\x20'+pmenus+'\x20Quotes','rowId':_0x106b99(-0x48,0x2),'description':_0x106b99(0x4e,-0x1a)},{'title':_0x106b99(-0x105,-0x98)+pmenus+'\x20Anime','rowId':_0x106b99(-0x16d,-0x151),'description':_0x106b99(-0x95,-0x11a)},{'title':'இ🔞☜\x20'+pmenus+_0x106b99(-0x154,-0x10e),'rowId':_0x106b99(-0x4f,-0x77),'description':_0x106b99(-0xb5,-0xfd)},{'title':_0x106b99(-0x13a,-0xa4)+pmenus+_0x106b99(-0x84,-0xaa),'rowId':_0x106b99(-0x194,-0xff),'description':_0x106b99(-0x80,-0xdb)},{'title':_0x106b99(-0xb7,-0x43)+pmenus+'\x20Anonymous\x20Chats','rowId':_0x106b99(-0x10c,-0xbf),'description':_0x106b99(-0x5f,-0xd3)},{'title':'இ📖☜\x20'+pmenus+_0x106b99(-0x6c,-0xe8),'rowId':_0x106b99(-0x149,-0x116),'description':'Tobat\x20yuk\x20kak'},{'title':_0x106b99(-0x182,-0x109)+pmenus+'\x20Internet','rowId':_0x106b99(0x3,-0x40),'description':_0x106b99(-0x1dd,-0x147)},{'title':_0x106b99(-0x77,-0x92)+pmenus+_0x106b99(-0x184,-0xfe),'rowId':_0x106b99(-0x44,-0x6b),'description':_0x106b99(-0xad,-0x45)},{'title':_0x106b99(-0x100,-0x9a)+pmenus+'\x20Stikers','rowId':'.?\x20stiker','description':_0x106b99(-0xd0,-0x123)},{'title':_0x106b99(-0x14,-0x68)+pmenus+_0x106b99(0x38,-0x26),'rowId':'.?\x20nulis','description':_0x106b99(-0x6f,-0xea)},{'title':_0x106b99(-0x3c,-0x75)+pmenus+_0x106b99(-0xd1,-0x13b),'rowId':'.?\x20audio','description':_0x106b99(-0xd8,-0xb7)},{'title':_0x106b99(-0x17,-0xb9)+pmenus+_0x106b99(-0xcd,-0x12a),'rowId':_0x106b99(-0x1a5,-0x14a),'description':_0x106b99(-0x69,-0x4f)},{'title':'இ👑☜\x20'+pmenus+'\x20Admin','rowId':_0x106b99(-0xd6,-0x149),'description':_0x106b99(-0x127,-0x7a)},{'title':_0x106b99(-0x6d,-0x65)+pmenus+_0x106b99(-0xb2,-0xe3),'rowId':_0x106b99(-0x89,-0x122),'description':'Simpan\x20sesuatu\x20diBOT'},{'title':_0x106b99(-0x201,-0x152)+pmenus+_0x106b99(-0x2e,-0x61),'rowId':_0x106b99(-0xe8,-0x134),'description':'Mungkin\x20tools\x20ini\x20bisa\x20membantu?'},{'title':_0x106b99(-0x79,-0x7e)+pmenus+'\x20Info','rowId':_0x106b99(0x2d,-0x30),'description':_0x106b99(-0x17,-0xc0)},{'title':_0x106b99(-0xae,-0x111)+pmenus+_0x106b99(-0x107,-0xd5),'rowId':_0x106b99(-0x9,-0x94),'description':'Owner\x20Only!'},{'title':_0x106b99(-0x77,-0xf3)+pmenus+_0x106b99(-0x49,-0x35),'rowId':_0x106b99(-0x10b,-0x12f),'description':_0x106b99(-0x197,-0x11b)},{'title':_0x106b99(-0x129,-0xba)+pmenus+_0x106b99(-0x114,-0xed),'rowId':'.?\x20update','description':_0x106b99(-0xfb,-0x113)}]}];let _0x8d5fbb=db[_0x106b99(-0xbf,-0x69)][_0x106b99(-0xca,-0x9c)][_0x4eb888[_0x106b99(-0x27,-0xc4)]],_0x203269='*✧'+ucapan()+'\x20'+_0x367b77[_0x106b99(-0xed,-0x73)](_0x4eb888['sender'])+_0x106b99(-0xa1,-0x14)+(_0x8d5fbb[_0x106b99(-0x17d,-0xef)]?_0x8d5fbb['name']:_0x367b77[_0x106b99(-0x48,-0x73)](_0x4eb888[_0x106b99(-0xff,-0xc4)]))+'\x0a┝🌸•\x20*ᴛᴀɢs:*\x20@'+_0x4eb888[_0x106b99(-0x31,-0xc4)][_0x106b99(-0x7e,-0x11c)]`@`[0x0]+_0x106b99(-0xd8,-0x83)+(_0x4eb888['sender'][_0x106b99(-0x1c8,-0x11c)]`@`[0x0]==nomorown?_0x106b99(-0x11e,-0xdf):_0x8d5fbb['premiumTime']>=0x1?_0x106b99(-0x116,-0xd8):_0x106b99(0x30,-0x25))+_0x106b99(-0xc5,-0xac)+(_0x8d5fbb['premiumTime']>0x1?'Yes':'No')+_0x106b99(0x34,-0x46)+_0xb86f56+_0x106b99(-0x17f,-0x144)+_0x146ea1['tz']('Asia/Jakarta')[_0x106b99(-0x68,-0x81)]('HH')+_0x106b99(-0x1aa,-0x11f)+_0x146ea1['tz'](_0x106b99(-0x5f,0x3))[_0x106b99(-0x31,-0x81)]('mm')+_0x106b99(-0xc0,-0xda)+_0x146ea1['tz'](_0x106b99(0x83,0x3))[_0x106b99(-0xa7,-0x81)]('ss')+_0x106b99(-0x12d,-0x99)+Object['keys'](global['db'][_0x106b99(-0xf1,-0x69)][_0x106b99(-0xe1,-0x9c)])[_0x106b99(-0x6e,-0x70)]+_0x106b99(-0x174,-0x154)+_0x8d5fbb[_0x106b99(-0x9e,-0x121)]+_0x106b99(-0x121,-0x120)+_0x8d5fbb[_0x106b99(-0x1d5,-0x136)]+_0x106b99(-0x1b,-0x3a)+_0x8d5fbb[_0x106b99(-0xe3,-0x5b)]+(_0x8d5fbb[_0x106b99(-0x3c,-0x9e)]>0x1?_0x106b99(-0x1c8,-0x126)+clockStringP(_0x8d5fbb[_0x106b99(-0x9b,-0x9e)]-new Date()):'')+_0x106b99(0x4d,-0xe);const _0x317753={'text':_0x203269,'footer':_0x106b99(0x1d,-0x49),'mentions':await _0x367b77[_0x106b99(-0x87,-0x4c)](_0x203269),'title':htki+'\x20*LIST\x20MENU*\x20'+htka,'buttonText':_0x106b99(-0x117,-0x82),'sections':_0x14c2c3};if(_0x1fc2b==_0x106b99(-0xff,-0xae))return _0x367b77[_0x106b99(-0x18b,-0x117)](_0x4eb888['chat'],_0x317753,{'quoted':_0x4eb888,'mentions':await _0x367b77[_0x106b99(-0xcc,-0x4c)](_0x203269),'contextInfo':{'forwardingScore':0x1869f,'isForwarded':!![]}});let _0xa1527c=_0x146ea1['tz']('Asia/Jakarta')['format'](_0x106b99(-0x107,-0x5c)),_0x37e154=_0x146ea1['tz']('Asia/Jakarta')['format']('HH'),_0xe97024=_0x146ea1['tz'](_0x106b99(0xae,0x3))[_0x106b99(-0xbf,-0x81)]('mm'),_0x2861f7=_0x146ea1['tz'](_0x106b99(-0x84,0x3))['format']('ss'),_0x556cf0=_0x146ea1['tz'](_0x106b99(0x93,-0x10))['format']('HH:mm:ss'),_0x5921cf=_0x146ea1['tz'](_0x106b99(-0xe0,-0x54))['format'](_0x106b99(0x23,-0x5c)),_0x1ca458=_0x37e154+_0x106b99(-0x39,-0xc7)+_0xe97024+_0x106b99(-0xb3,-0xf5)+_0x2861f7+'\x20S',_0x1cc9b8=global[_0x106b99(-0x54,-0x63)]['self']?_0x106b99(0x36,-0xa):_0x106b99(-0xe9,-0x10c),_0x5dbba5=JSON[_0x106b99(-0x64,-0xd4)](await promises['readFile'](join(_0x2b76ee,_0x106b99(-0x6c,-0x96)))[_0x106b99(-0xb0,-0x88)](_0x1b3ecb=>({})))||{},{age:_0x329a02,exp:_0x75b070,limit:_0x36587d,level:_0xeef670,role:_0xf5285e,registered:_0x1bc22a,money:_0x4ee0ae}=global['db']['data'][_0x106b99(-0x2d,-0x9c)][_0x4eb888[_0x106b99(-0x2a,-0xc4)]],{min:_0x2eb705,xp:_0x2d5d59,max:_0x5a92e0}=xpRange(_0xeef670,global[_0x106b99(-0x19b,-0x112)]),_0x588119=await _0x367b77[_0x106b99(-0xc8,-0x73)](_0x4eb888[_0x106b99(-0x4d,-0xc4)]),_0xce0590=global['db'][_0x106b99(-0x95,-0x69)]['users'][_0x4eb888['sender']]['premiumTime'],_0x46d3e3=''+(_0xce0590>0x0?_0x106b99(-0x7e,-0x10a):_0x106b99(0x18,-0x5)),_0x848fae=_0x104357[_0x106b99(0x3b,-0x17)](),_0x51a0e9=''+ucapan(),_0x461b1d=_0x4eb888[_0x106b99(-0x188,-0xe5)]&&_0x4eb888[_0x106b99(-0xd7,-0xe5)][0x0]?_0x4eb888[_0x106b99(-0x158,-0xe5)][0x0]:_0x4eb888[_0x106b99(-0x8c,-0x22)]?_0x367b77[_0x106b99(0x99,-0x2)][_0x106b99(-0x46,-0xaf)]:_0x4eb888[_0x106b99(-0xcf,-0xc4)],_0x3e283d=new Date(new Date()+0x36ee80),_0x455c0c='id',_0x376d85=[_0x106b99(-0x6a,-0x100),_0x106b99(-0x10d,-0x89),_0x106b99(-0x1dd,-0x12e),'Kliwon',_0x106b99(-0x1d5,-0x14c)][Math[_0x106b99(-0xb3,-0x6f)](_0x3e283d/0x50ae4c0)%0x5],_0x958bed=_0x3e283d['toLocaleDateString'](_0x455c0c,{'weekday':_0x106b99(-0x19f,-0x106)}),_0x14d329=_0x3e283d[_0x106b99(-0x16e,-0xd1)](_0x455c0c,{'day':_0x106b99(-0xbb,-0x8a),'month':_0x106b99(-0x126,-0x106),'year':'numeric'}),_0x27bd1e=Intl[_0x106b99(0x14,-0x67)](_0x455c0c+'-TN-u-ca-islamic',{'day':'numeric','month':_0x106b99(-0x19b,-0x106),'year':_0x106b99(-0xea,-0x8a)})[_0x106b99(-0x90,-0x81)](_0x3e283d),_0x15add6=_0x3e283d[_0x106b99(-0x32,-0x74)](_0x455c0c,{'hour':_0x106b99(-0x124,-0x8a),'minute':_0x106b99(-0xa2,-0x8a),'second':_0x106b99(-0xd4,-0x8a)}),_0x3f18c4=process[_0x106b99(-0x1ac,-0x127)]()*0x3e8,_0x2bbed7;process[_0x106b99(-0xe5,-0xf0)]&&(process[_0x106b99(-0x155,-0xf0)](_0x106b99(-0xce,-0x127)),_0x2bbed7=await new Promise(_0x1ca771=>{process[_0x2fc2f5(0x22b,0x2be)](_0x2fc2f5(0x1ca,0x149),_0x1ca771);function _0x2fc2f5(_0x31f9a8,_0x2166c9){return _0x106b99(_0x2166c9,_0x31f9a8-0x2a1);}setTimeout(_0x1ca771,0x3e8);})*0x3e8);let _0x3388b9=clockString(_0x2bbed7),_0x3d2d4b=clockString(_0x3f18c4),_0x34f503=Object[_0x106b99(-0x86,-0x16)](global['db']['data'][_0x106b99(-0x18,-0x9c)])['length'],_0x7657eb=Object[_0x106b99(0x8c,-0xf)](global['db'][_0x106b99(-0x79,-0x69)]['users'])[_0x106b99(0x16,-0x1e)](_0x7cef75=>_0x7cef75['registered']==!![])[_0x106b99(-0x12,-0x70)],_0x6cac14=Object[_0x106b99(-0xba,-0xf)](global[_0x106b99(-0x174,-0x14f)])['filter'](_0x10e18d=>!_0x10e18d['disabled'])[_0x106b99(0x52,-0x34)](_0x4c702c=>{function _0x86d6c0(_0x4bb492,_0x461296){return _0x106b99(_0x461296,_0x4bb492-0x468);}return{'help':Array[_0x86d6c0(0x39f,0x37f)](_0x4c702c[_0x86d6c0(0x3d8,0x443)])?_0x4c702c[_0x86d6c0(0x3a7,0x440)]:[_0x4c702c[_0x86d6c0(0x3a7,0x387)]],'tags':Array['isArray'](_0x4c702c[_0x86d6c0(0x3d8,0x3a3)])?_0x4c702c['tags']:[_0x4c702c[_0x86d6c0(0x3d8,0x47f)]],'prefix':_0x86d6c0(0x45f,0x446)in _0x4c702c,'limit':_0x4c702c[_0x86d6c0(0x347,0x2f5)],'premium':_0x4c702c[_0x86d6c0(0x329,0x33e)],'enabled':!_0x4c702c[_0x86d6c0(0x444,0x3f2)]};}),_0x5efeb3={};for(let _0x4351bb in _0x3a566f){_0x5efeb3[_0x4351bb]=[];for(let _0x1b0d2c of _0x6cac14)if(_0x1b0d2c[_0x106b99(-0x6a,-0x90)]&&_0x1b0d2c[_0x106b99(-0x130,-0x90)][_0x106b99(-0x114,-0x7f)](_0x4351bb)){if(_0x1b0d2c['help'])_0x5efeb3[_0x4351bb][_0x106b99(-0x127,-0xfa)](_0x1b0d2c);}}_0x367b77[_0x106b99(-0x5a,-0xcd)]=_0x367b77[_0x106b99(-0x9d,-0xcd)]?_0x367b77[_0x106b99(-0xc5,-0xcd)]:{};let _0x2e8b38=_0x367b77[_0x106b99(-0x21,-0xcd)][_0x106b99(-0x123,-0x14e)]||defaultMenu[_0x106b99(-0xb3,-0x14e)],_0x198d3b=_0x367b77['menu'][_0x106b99(0x3b,-0x28)]||defaultMenu[_0x106b99(0x61,-0x28)],_0xe5969=_0x367b77[_0x106b99(-0xd3,-0xcd)][_0x106b99(-0x10,-0xa0)]||defaultMenu[_0x106b99(-0xeb,-0xa0)],_0x4a11dd=_0x367b77['menu'][_0x106b99(-0x113,-0x10f)]||defaultMenu[_0x106b99(-0xb1,-0x10f)],_0x244ad4=_0x367b77[_0x106b99(-0x13d,-0xcd)][_0x106b99(-0x106,-0x130)]||(_0x367b77[_0x106b99(0xa8,-0x2)][_0x106b99(-0xbd,-0xaf)]==global[_0x106b99(-0xd2,-0xfc)][_0x106b99(-0x51,-0x2)][_0x106b99(-0x154,-0xaf)]?'':_0x106b99(-0x14a,-0x143)+global[_0x106b99(-0x8b,-0xfc)]['user'][_0x106b99(-0x60,-0xaf)][_0x106b99(-0x8e,-0x11c)]`@`[0x0])+defaultMenu[_0x106b99(-0xc6,-0x130)],_0x413894=[_0x2e8b38,...Object[_0x106b99(-0x1d,-0x16)](_0x3a566f)['map'](_0x424d22=>{function _0x319fda(_0x4c112f,_0x12d008){return _0x106b99(_0x4c112f,_0x12d008-0x33d);}return _0x198d3b[_0x319fda(0x1ff,0x246)](/%category/g,_0x3a566f[_0x424d22])+'\x0a'+[..._0x6cac14['filter'](_0x4f530b=>_0x4f530b[_0x319fda(0x31d,0x2ad)]&&_0x4f530b[_0x319fda(0x202,0x2ad)][_0x319fda(0x279,0x2be)](_0x424d22)&&_0x4f530b[_0x319fda(0x22a,0x27c)])['map'](_0x443459=>{function _0x215daf(_0x4fbc2e,_0x40dbfd){return _0x319fda(_0x40dbfd,_0x4fbc2e- -0x114);}return _0x443459[_0x215daf(0x168,0x171)]['map'](_0xdde81d=>{function _0x49ed82(_0x40d0cb,_0x142d59){return _0x215daf(_0x40d0cb- -0x27b,_0x142d59);}return _0xe5969[_0x49ed82(-0x149,-0x1da)](/%cmd/g,_0x443459[_0x49ed82(-0x1a5,-0x15f)]?_0xdde81d:_0x49ed82(-0x19f,-0x17f)+_0xdde81d)[_0x49ed82(-0x149,-0x1e3)](/%islimit/g,_0x443459[_0x49ed82(-0x173,-0x11e)]?_0x2ec0d4:'')[_0x49ed82(-0x149,-0xaa)](/%isPremium/g,_0x443459[_0x49ed82(-0x191,-0x1fb)]?_0x55552b:'')[_0x49ed82(-0x53,-0xc8)]();})['join']('\x0a');}),_0x4a11dd][_0x319fda(0x2e5,0x238)]('\x0a');}),_0x244ad4][_0x106b99(-0x1b3,-0x105)]('\x0a'),_0xf50ce9=typeof _0x367b77[_0x106b99(-0x16b,-0xcd)]==_0x106b99(-0xe6,-0x3f)?_0x367b77['menu']:typeof _0x367b77[_0x106b99(-0x3c,-0xcd)]==_0x106b99(-0x95,-0x101)?_0x413894:'',_0x13f512={'%':'%','p':_0x3d2d4b,'muptime':_0x3388b9,'me':_0x367b77['getName'](_0x367b77['user'][_0x106b99(-0xe6,-0xaf)]),'npmname':_0x5dbba5['name'],'npmdesc':_0x5dbba5['description'],'version':_0x5dbba5[_0x106b99(-0xc5,-0x5a)],'exp':_0x75b070-_0x2eb705,'maxexp':_0x2d5d59,'totalexp':_0x75b070,'xp4levelup':_0x5a92e0-_0x75b070,'github':_0x5dbba5['homepage']?_0x5dbba5[_0x106b99(-0x12f,-0x139)]['url']||_0x5dbba5['homepage']:_0x106b99(-0x118,-0x6a),'tag':_0x283faa,'dash':_0x349792,'m1':_0x4e7a0f,'m2':_0x26f288,'m3':_0x1b3b8c,'m4':_0x2fd4e8,'cc':_0x930d45,'c1':_0x150de2,'c2':_0x1bbf0a,'c3':_0x5f1a83,'c4':_0xd114ac,'lprem':_0x55552b,'llim':_0x2ec0d4,'ucpn':_0x51a0e9,'platform':_0x848fae,'wib':_0xa1527c,'mode':_0x1cc9b8,'_p':_0x30b687,'money':_0x4ee0ae,'age':_0x329a02,'tag':_0x283faa,'name':_0x588119,'prems':_0x46d3e3,'level':_0xeef670,'limit':_0x36587d,'name':_0x588119,'weton':_0x376d85,'week':_0x958bed,'date':_0x14d329,'dateIslamic':_0x27bd1e,'time':_0x15add6,'totalreg':_0x34f503,'rtotalreg':_0x7657eb,'role':_0xf5285e,'readmore':readMore};_0xf50ce9=_0xf50ce9[_0x106b99(-0x76,-0xf7)](new RegExp('%('+Object['keys'](_0x13f512)[_0x106b99(-0x45,0x9)]((_0x3f90d6,_0x4c160c)=>_0x4c160c[_0x106b99(-0x37,-0x70)]-_0x3f90d6[_0x106b99(-0xed,-0x70)])[_0x106b99(-0x12a,-0x105)]`|`+')','g'),(_0x41b5be,_0x51e661)=>''+_0x13f512[_0x51e661]);let _0x1c8071={'key':{'fromMe':![],'participant':''+_0x4eb888['sender'][_0x106b99(-0xdb,-0x11c)]`@`[0x0]+_0x106b99(-0x152,-0xb4),'remoteJid':_0x106b99(0x9b,-0xd)},'message':{'productMessage':{'product':{'productImage':{'mimetype':'image/jpeg','jpegThumbnail':_0x4452d0[_0x106b99(-0x84,-0x41)]('./thumbnail.jpg')},'title':''+ucapan(),'description':'𝗧\x20𝗜\x20𝗠\x20𝗘\x20:\x20'+_0x1ca458,'currencyCode':'US','priceAmount1000':'100','retailerId':wm,'productImageCount':0x3e7},'businessOwnerJid':_0x4eb888[_0x106b99(-0x4e,-0xc4)][_0x106b99(-0xc8,-0x11c)]`@`[0x0]+'@s.whatsapp.net'}}},_0xb8dd22={'key':{'remoteJid':_0x106b99(-0x3a,-0xd),'participant':_0x106b99(-0xad,-0x2d)},'message':{'videoMessage':{'title':wm,'h':_0x106b99(-0x15c,-0xe2),'duration':'99999999','gifPlayback':_0x106b99(-0x24,-0x8f),'caption':bottime,'jpegThumbnail':thumb}}},_0x172c1c={'key':{'fromMe':![],'participant':_0x4eb888[_0x106b99(-0xd4,-0xc4)][_0x106b99(-0xd3,-0x11c)]`@`[0x0]+_0x106b99(-0x9c,-0xb4),..._0x4eb888[_0x106b99(-0xa7,-0xdc)]?{'remoteJid':_0x106b99(0x12,-0x66)}:{}},'message':{'contactMessage':{'displayName':''+_0x588119,'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:;a,;;;\x0aFN:'+_0x588119+'\x0aitem1.TEL;waid='+_0x4eb888[_0x106b99(-0x29,-0xc4)][_0x106b99(-0x83,-0x11c)]('@')[0x0]+':'+_0x4eb888[_0x106b99(-0xae,-0xc4)]['split']('@')[0x0]+'\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'}}};const _0x1891d7=await _0x367b77['profilePictureUrl'](_0x367b77[_0x106b99(0x1c,-0x2)][_0x106b99(-0x1c,-0xaf)])[_0x106b99(-0xde,-0x88)](_0x492ffd=>_0x106b99(-0xd1,-0xb8));let _0x53b9b6=_0x106b99(-0x7f,-0xf6),_0x222d13=_0x106b99(-0x40,-0x4b),_0xc0111f=_0x106b99(-0xd9,-0xbe),_0x470560='application/pdf',_0x2b3809=_0x106b99(-0xb6,-0x3b),_0x1fdd90=''+pickRandom([_0x53b9b6,_0x222d13,_0xc0111f,_0x470560,_0x2b3809]);const _0x41b18c=_0x5b7fb8;function _0x5b7fb8(_0x1da60e,_0x143b8d){const _0xce9612=_0xa01366();return _0x5b7fb8=function(_0x3e306f,_0x5ba42b){_0x3e306f=_0x3e306f-0x1bb;let _0x543a7a=_0xce9612[_0x3e306f];return _0x543a7a;},_0x5b7fb8(_0x1da60e,_0x143b8d);}(function(_0x1271db,_0x47979c){function _0xfb7b8(_0x46d3d0,_0x1690e4){return _0x106b99(_0x1690e4,_0x46d3d0-0x88);}const _0x21ce07=_0x5b7fb8,_0x51336f=_0x1271db();while(!![]){try{const _0x143926=-parseInt(_0x21ce07(0x1d0))/0x1*(-parseInt(_0x21ce07(0x1bd))/0x2)+parseInt(_0x21ce07(0x1c4))/0x3*(parseInt(_0x21ce07(0x1bf))/0x4)+parseInt(_0x21ce07(0x1cc))/0x5*(-parseInt(_0x21ce07(0x1d1))/0x6)+parseInt(_0x21ce07(0x1c1))/0x7*(parseInt(_0x21ce07(0x1bc))/0x8)+parseInt(_0x21ce07(0x1cd))/0x9*(-parseInt(_0x21ce07(0x1c7))/0xa)+parseInt(_0x21ce07(0x1cb))/0xb*(-parseInt(_0x21ce07(0x1be))/0xc)+parseInt(_0x21ce07(0x1ce))/0xd;if(_0x143926===_0x47979c)break;else _0x51336f['push'](_0x51336f[_0xfb7b8(-0x40,-0x9)]());}catch(_0x575abf){_0x51336f[_0xfb7b8(-0x72,-0xc9)](_0x51336f[_0xfb7b8(-0x40,-0x8c)]());}}}(_0xa01366,0x70ad5));let _0xccb998={'document':{'url':sgc},'mimetype':_0x1fdd90,'fileName':global['wm'],'fileLength':fsizedoc,'pageCount':fpagedoc,'contextInfo':{'forwardingScore':0x22b,'isForwarded':!![],'externalAdReply':{'mediaUrl':global[_0x41b18c(0x1c8)],'mediaType':0x2,'previewType':_0x41b18c(0x1c9),'title':global[_0x106b99(-0x91,-0xd2)],'body':global[_0x106b99(-0x8d,-0xd2)],'thumbnail':await(await _0x292615(thumb))[_0x41b18c(0x1ca)](),'sourceUrl':sgc}},'caption':_0xf50ce9,'footer':botdate,'buttons':[{'buttonId':_0x106b99(-0x74,-0x84),'buttonText':{'displayText':_0x41b18c(0x1bb)},'type':0x1},{'buttonId':_0x41b18c(0x1c5),'buttonText':{'displayText':_0x41b18c(0x1c0)},'type':0x1},{'buttonId':_0x41b18c(0x1c6),'buttonText':{'displayText':_0x106b99(-0x151,-0xbb)},'type':0x1}],'headerType':0x6};await _0x367b77[_0x41b18c(0x1c2)](_0x4eb888[_0x41b18c(0x1cf)],_0xccb998,{'quoted':_0x4eb888,'mentionedJid':[_0x4eb888[_0x41b18c(0x1c3)]]});function _0xa01366(){const _0x668994=['3ezQcUH',_0x1ef9e0(0x4e6,0x55b),_0x1ef9e0(0x57d,0x55c),_0x1ef9e0(0x544,0x5b5),'sig','pdf',_0x1ef9e0(0x579,0x4fd),_0x1ef9e0(0x4c0,0x477),_0x1ef9e0(0x4f8,0x487),'72BjUaMS',_0x1ef9e0(0x501,0x4b1),_0x1ef9e0(0x4a1,0x489),'6NokiEm',_0x1ef9e0(0x475,0x4da),_0x1ef9e0(0x54b,0x512),_0x1ef9e0(0x4f7,0x599),_0x1ef9e0(0x446,0x46d),_0x1ef9e0(0x4d6,0x4cf),'3329164htczQJ',_0x1ef9e0(0x554,0x500),_0x1ef9e0(0x560,0x4e4),_0x1ef9e0(0x466,0x4fc),_0x1ef9e0(0x4b9,0x46b)];_0xa01366=function(){return _0x668994;};function _0x1ef9e0(_0x59504f,_0x205b75){return _0x106b99(_0x205b75,_0x59504f-0x57d);}return _0xa01366();}const _0x544e69={'document':{'url':thumbdoc},'jpegThumbnail':await(await _0x292615(thumbdoc))[_0x106b99(0x9d,-0x4)](),'fileName':'𝗧\x20𝗜\x20𝗠\x20𝗘\x20:\x20'+_0x1ca458,'mimetype':_0x1fdd90,'fileLength':fsizedoc,'pageCount':fpagedoc,'caption':_0xf50ce9,'footer':titlebot+_0x106b99(-0x70,-0xf9),'templateButtons':[{'urlButton':{'displayText':''+namebot,'url':_0x106b99(-0x1b,-0x19)}},{'urlButton':{'displayText':_0x106b99(0x7a,-0x2b),'url':sgc}},{'quickReplyButton':{'displayText':_0x106b99(-0xb6,-0x32),'id':_0x106b99(-0x3f,-0x84)}},{'quickReplyButton':{'displayText':'Speed','id':'.ping'}},{'quickReplyButton':{'displayText':_0x106b99(-0x15d,-0xbb),'id':_0x106b99(0xa8,0x0)}}]};}catch(_0x1257da){_0x367b77['reply'](_0x4eb888[_0x106b99(-0x64,-0xdc)],'Maaf,\x20menu\x20sedang\x20error',_0x4eb888);throw _0x1257da;}};handler[_0x4ff5bf(0x37a,0x371)]=[_0x4ff5bf(0x359,0x365),_0x4ff5bf(0x40a,0x371),'?'],handler[_0x4ff5bf(0x37b,0x3a2)]=[_0x4ff5bf(0x28a,0x330)],handler['command']=/^(menu|help|\?)$/i,handler[_0x4ff5bf(0x31c,0x2e7)]=!![],handler[_0x4ff5bf(0x355,0x3d5)]=0x3;export default handler;function pickRandom(_0x4425cb){function _0x190dad(_0x2cb921,_0x3a0844){return _0x4ff5bf(_0x3a0844,_0x2cb921- -0x1ff);}return _0x4425cb[Math[_0x190dad(0x1c4,0x198)](Math[_0x190dad(0x1fb,0x1d0)]()*_0x4425cb['length'])];}function _0x3542(){const _0xd1a355=['values','\x0a╰═┅═━═┅═━═┅═━––––––๑\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20「\x20*By\x20Fangz\x20あ⁩*\x20」\x0a','status@broadcast','Good\x20Night\x20🌙','Group','Private','customPrefix','1624ILGRPP','nsfw','lopr','Free','buffer','❀📑\x20','user','trim','.donasi','11mGsUvQ','.?\x20quotes','Asia/Jakarta','kerangajaib','\x20*Years\x20🗓️*\x0a','1625655lkwYhV','Support\x20BOT\x20agar\x20on\x201\x20Minggu\x20non\x20stop','இ✨☜\x20','sort','\x0a┝🎟️•\x20*ʟɪᴍɪᴛ:*\x20','prefix','இ🛠️☜\x20','.?\x20anime','Menampilkan\x20Semua\x20command\x20BOT','plugins','before','%_p','Legi','register','.?\x20group','.?\x20admin','\x20REQUEST\x20FITUR','Cari\x20sesuatu\x20diBOT','\x20Rαƚҽ','\x20Exp','\x0a┝⏲️•\x20*ᴛɪᴍᴇ:*\x20','Powered\x20by\x20https://wa.me/','Menampilkan\x20list\x20harga\x20sewa\x20BOT','497976jdiMYE','tools','premium','repeat','group','quran','\x20Audio','\x20*Month\x20🌙*\x0a','homepage','info','205026IsvCrH','level','Admin\x20','.?\x20tools','Rpg','admin','stiker','after','.?\x20maker','Wage','\x20Kerang','padStart','Admin','\x20Group','game','maker','uptime','\x0a┝📛•\x20*ᴇxᴘɪʀᴇᴅ\x20ᴘʀᴇᴍɪᴜᴍ:*\x0a','.sewa','.?\x20kerangajaib','Buat\x20Sticker\x20diBOT','.?\x20database','limit','\x0a┝📊•\x20*ʟᴇᴠᴇʟ:*\x20','\x20H\x20\x20','❀📔\x20','downloader','split','Fitur\x20Maker\x20menu','Kamu\x20wibu\x20ya\x20bang?','quotes','Edukasi','sendMessage','.?\x20quran','Nulis','Source\x20Code\x20','Perkembangan','multiplier','இ👩‍💻☜\x20','இ🌱☜\x20','footer','\x20Nsfw','Menampilkan\x20list\x20harga\x20upgrade\x20premium','Publik','\x20*Minute\x20⏰*\x0a','Premium','இ🌐☜\x20','72PsFaxu','audio','long','join','toLowerCase','.?\x20all','main','object','Pahing','.?\x20premium','\x20Downloaders','Tch,\x20dasar\x20sagne','conn','\x0a%dash\x0a%m1\x20*U\x20S\x20E\x20R*\x0a%m2\x20*Name:*\x20%name\x0a%m2\x20*Tag:*\x20%tag\x0a%m2\x20*Status:*\x20%prems\x0a%m2\x20*Limit:*\x20%limit\x0a%m2\x20*Money:*\x20%money\x0a%m2\x20*Role:*\x20%role\x0a%m2\x20*Level:*\x20%level\x20[\x20%xp4levelup\x20Xp\x20For\x20Levelup]\x0a%m2\x20*Xp:*\x20%exp\x20/\x20%maxexp\x0a%m2\x20*Total\x20Xp:*\x20%totalexp\x0a%m3\x0a\x0a%m1\x20*T\x20O\x20D\x20A\x20Y*\x0a%m2\x20*%ucpn*\x0a%m2\x20*Days:*\x20%week\x20%weton\x0a%m2\x20*Date:*\x20%date\x0a%m2\x20*Islamic\x20Date:*\x20%dateIslamic\x0a%m2\x20*Time:*\x20%wib\x0a%m3\x0a\x0a%m1\x20*I\x20N\x20F\x20O*\x0a%m2\x20*Bot\x20Name:*\x20%me\x0a%m2\x20*Mode:*\x20%mode\x0a%m2\x20*Platform:*\x20%platform\x0a%m2\x20*Type:*\x20Node.Js\x0a%m2\x20*Baileys:*\x20Multi\x20Device\x0a%m2\x20*Prefix:*\x20[\x20*%_p*\x20]\x0a%m2\x20*Uptime:*\x20%muptime\x0a%m2\x20*Database:*\x20%rtotalreg\x20dari\x20%totalreg\x0a%m3\x0a\x0a%m1\x20*I\x20N\x20F\x20O\x20\x20C\x20M\x20D*\x20\x0a%m4\x20*Ⓟ*\x20=\x20Premium\x0a%m4\x20*Ⓛ*\x20=\x20Limit\x0a%m3\x0a%readmore\x0a','push','\x0a⚡\x20Supported\x20By\x20Fangz\x20TEAM','Voting','replace','application/vnd.openxmlformats-officedocument.presentationml.presentation','\x20M\x20','database','இ🖼️\x20','இ🧩☜\x20','❀💌\x20','send','registered','Sticker','\x20Next\x20Update','(Dinonaktifkan)','rpg','Nulis\x20kok\x20males\x20kak?','.rules','\x20Al-Quran','Menampilkan\x20List\x20owner\x20Fangz\x20BOT','.request','mentionedJid','❀📮\x20','\x20Database','Nekohime','Nsfw','internet','Developer','Tools','இ🐚☜\x20','chat','Only\x20premium\x20Users','\x20M\x20\x20','cmenub','Premium\x20User','message','Jangan\x20lupa\x20mampir','\x20Owner','parse','Bicara\x20dengan\x20orang\x20tidak\x20dikenal','titlebot','toLocaleDateString','❀🌟\x20','\x20ѕєωα\x20вσт','vote','menu','.sc','Host','8AmhGVo','isArray','shift','\x20H\x20','1027341RBgVhK','toString','sender','update','owner','help','Info\x20info\x20BOT','.?\x20anonymous','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','305624SHQwwY','dmenuf','Donasi','இ⛔\x20','இ🏢☜\x20','./src/avatar_contact.png','Ubah\x20Audio\x20dengan\x20Filter','Downloader','Exp\x20&\x20Limit','@s.whatsapp.net','all','Fitur\x20yang\x20aman\x20untuk\x20keluarga','\x20MENU\x20FANGZ\x20BOT','.premium','jid','404','dmenut','\x0a┝🌸•\x20*ᴘʀᴇᴍɪᴜᴍ:*\x20','\x20INFO\x20BOT','\x20Premium','anonymous','cmenuh','132IBvmfp','Database','\x20MAIN\x20','இ🌟☜\x20','Menampilkan\x20kecepatan\x20respon\x20Fangz\x20BOT','trimStart','Al\x20Qur\x27an','body','Audio','premiumTime','Main','users','\x20∂σηαѕι','இ🎨☜\x20','\x20S\x0a┝👤•\x20*ᴜsᴇʀs:*\x20','இ⛩️☜\x20','.ping','../package.json','Next\x20Update','.?\x20owner','Advanced','இ📩☜\x20','\x20Rpg','tags','true','%cc\x20*%category*\x20%c1','fun','Game','dashmenu','numeric','Pon','catch','%c3','1832yREmVQ','233195fjGJSZ','.owner','\x0a┝🌸•\x20*sᴛᴀᴛᴜs:*\x20','LIST\x20FITUR','format','cmenut','includes','இℹ️️☜\x20','❀✨\x20','2869867kBKaey','dmenub','Only\x20Admin\x20Group','Info','509412xfjmyv','.?\x20nsfw','once','இ🎧☜\x20','toLocaleTimeString','getName','35amotKI','edukasi','length','floor','Gamenya\x20seru\x20seru\x20lho\x20>-<','.?\x20game','\x20SUPPORT\x20','.?\x20downloader','[unknown\x20github\x20url]','data','இ✏️☜\x20','DateTimeFormat','16504228206@s.whatsapp.net','இ🗂☜️\x20','.?\x20rpg','opts','\x20вυу\x20ѕ¢яιρт','\x20Tools','fromCharCode','\x20υρgяα∂є\x20ρяємιυм','restrict','exp','HH:mm:ss','role','version','\x20Game','\x20*Second\x20⏱️*','Good\x20Afternoon\x20☀️','\x20WҽႦʂιƚҽ','\x20All','Asia/Makassar','News','Support\x20BOT\x20agar\x20Semangat\x20update','absen','Good\x20Morning\x20🌄','Only\x20Groups','Fun','13779630nPIRTi','parseMention','application/vnd.openxmlformats-officedocument.wordprocessingml.document','jadibot','📮Jika\x20ada\x20fitur\x20yg\x20eror\x20laporkan\x20ke\x20creator\x20bot!\x0a\x0a⌕\x20❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘\x20⌕','Ayo\x20tingkatkan\x20pangkat\x20mu!','%c2\x20%cmd\x20%isPremium\x20%islimit','\x0a╰═┅═━═┅═━═┅═━––––––๑\x0a\x0a\x0a╭═┅═「\x20*Bσt\x20Ɩnfσrmαtισn*\x20」\x0a┝⏳•\x20*ᴜᴘᴛɪᴍᴇ:*\x20','Download\x20sesuatu\x20diBOT','Absen','இ🎭☜\x20','news','readFileSync','.?\x20internet','string','41121rUMimx','Game\x20Epic\x20Rpg!','%c4\x20%me','text/rtf','\x0a┝🏆•\x20*ʀᴏʟᴇ:*\x20','725770ccnUBU','random','Quotes','973744EPkPia','\x20Maker','map','No\x20Category','Owner','\x20S&K\x20BOT','.?\x20info','nulis','.info','0@s.whatsapp.net','Internet','Group\x20Official','❀🔖\x20','Speed','header','Anime','\x20Nulis','Free\x20User','disabled','.?\x20fun','fromMe','Kerang\x20Ajaib','Islamic','Good\x20Afternoon\x20🌇','filter','7315FCLnNH','Maker','Anonymous\x20Chat','Random\x20Inspirasi','https://s.id/Fangzganz','dmenub2','platform','keys','islamic','*\x0a\x0a────━⃝┅\x20*D\x20A\x20S\x20H\x20B\x20O\x20A\x20R\x20D*\x20┅⃝━────\x0a\x0a╭━━━━「\x20*I\x20N\x20F\x20O\x20\x20C\x20M\x20D*\x20」\x0a┝\x20*🅟*\x20=\x20Premium\x0a┝\x20*Ⓛ*\x20=\x20Limit\x0a╰═┅═━–––๑\x0a\x0a╭━━━━「\x20*Ʋser\x20Ɩnfσrmαtισn*\x20」\x0a┝🌸•\x20*ɴᴀᴍᴇ:*\x20','\x20*Days\x20☀️*\x0a','lolm','Stiker','Asia/Jayapura'];_0x3542=function(){return _0xd1a355;};return _0x3542();}const more=String[_0x4ff5bf(0x360,0x3d2)](0x200e),readMore=more[_0x4ff5bf(0x30b,0x2f4)](0xfa1);function _0x4ff5bf(_0x1b9223,_0x35702b){return _0x1d30(_0x35702b-0x24a,_0x1b9223);}function clockString(_0x44b9f1){let _0x25b796=isNaN(_0x44b9f1)?'--':Math[_0x1407c4(-0x8,0x49)](_0x44b9f1/0x36ee80),_0x5b49ad=isNaN(_0x44b9f1)?'--':Math[_0x1407c4(-0x8,-0x50)](_0x44b9f1/0xea60)%0x3c,_0x3dd1d1=isNaN(_0x44b9f1)?'--':Math[_0x1407c4(-0x8,-0x59)](_0x44b9f1/0x3e8)%0x3c;function _0x1407c4(_0x62d42d,_0x2265ac){return _0x4ff5bf(_0x2265ac,_0x62d42d- -0x3cb);}return[_0x25b796,'\x20H\x20',_0x5b49ad,_0x1407c4(-0x8e,-0x124),_0x3dd1d1,'\x20S\x20'][_0x1407c4(0x33,-0x3f)](_0x22e12e=>_0x22e12e[_0x1407c4(-0x5e,-0x64)]()[_0x1407c4(-0xc5,-0x4d)](0x2,0x0))['join']('');}function clockStringP(_0x1c73b5){let _0x51a38e=isNaN(_0x1c73b5)?'--':Math[_0x428a3b(0x46a,0x3e1)](_0x1c73b5/0x73df16000)%0xa,_0x2c94bc=isNaN(_0x1c73b5)?'--':Math[_0x428a3b(0x358,0x3e1)](_0x1c73b5/0x9a7ec800)%0xc,_0x36152e=isNaN(_0x1c73b5)?'--':Math[_0x428a3b(0x384,0x3e1)](_0x1c73b5/0x5265c00)%0x1e,_0x129f6e=isNaN(_0x1c73b5)?'--':Math[_0x428a3b(0x40c,0x3e1)](_0x1c73b5/0x36ee80)%0x18;function _0x428a3b(_0x12cd9d,_0x1765c4){return _0x4ff5bf(_0x12cd9d,_0x1765c4-0x1e);}let _0x401411=isNaN(_0x1c73b5)?'--':Math[_0x428a3b(0x365,0x3e1)](_0x1c73b5/0xea60)%0x3c,_0x1d6917=isNaN(_0x1c73b5)?'--':Math['floor'](_0x1c73b5/0x3e8)%0x3c;return[_0x51a38e,_0x428a3b(0x4de,0x455),_0x2c94bc,_0x428a3b(0x3c2,0x316),_0x36152e,_0x428a3b(0x42b,0x43d),_0x129f6e,'\x20*Hours\x20🕐*\x0a',_0x401411,_0x428a3b(0x3e8,0x345),_0x1d6917,_0x428a3b(0x397,0x3f8)][_0x428a3b(0x498,0x41c)](_0x4f0722=>_0x4f0722[_0x428a3b(0x343,0x38b)]()[_0x428a3b(0x325,0x324)](0x2,0x0))[_0x428a3b(0x3f6,0x34b)]('');}function ucapan(){const _0x41d865=_0x146ea1['tz'](_0x3b862b(-0xf4,-0xf3))[_0x3b862b(-0x178,-0xcd)]('HH');let _0x181838='Selamat\x20DiniHari\x20☀️';function _0x3b862b(_0x90011a,_0xeaa328){return _0x4ff5bf(_0xeaa328,_0x90011a- -0x529);}return _0x41d865>=0x4&&(_0x181838=_0x3b862b(-0x147,-0x148)),_0x41d865>=0xa&&(_0x181838=_0x3b862b(-0x14e,-0x1e5)),_0x41d865>=0xf&&(_0x181838=_0x3b862b(-0x116,-0x108)),_0x41d865>=0x12&&(_0x181838=_0x3b862b(-0x103,-0xa7)),_0x181838;}
//Buy no enc? chat
//wa gw ada di desk yt