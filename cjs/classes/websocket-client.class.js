'use strict';const a1_0x3ca62c=a1_0x5a61;(function(_0x5de755,_0x1302ef){const _0x4301e1=a1_0x5a61,_0x17c006=_0x5de755();while(!![]){try{const _0x2fd45f=-parseInt(_0x4301e1(0x1dc))/0x1*(-parseInt(_0x4301e1(0x1d9))/0x2)+-parseInt(_0x4301e1(0x1e1))/0x3*(-parseInt(_0x4301e1(0x1ba))/0x4)+parseInt(_0x4301e1(0x1bd))/0x5*(parseInt(_0x4301e1(0x1d8))/0x6)+-parseInt(_0x4301e1(0x196))/0x7*(-parseInt(_0x4301e1(0x1be))/0x8)+-parseInt(_0x4301e1(0x1bf))/0x9+-parseInt(_0x4301e1(0x1af))/0xa+parseInt(_0x4301e1(0x1d0))/0xb*(-parseInt(_0x4301e1(0x1c2))/0xc);if(_0x2fd45f===_0x1302ef)break;else _0x17c006['push'](_0x17c006['shift']());}catch(_0x17594a){_0x17c006['push'](_0x17c006['shift']());}}}(a1_0x58b1,0xc6de3));var __awaiter=this&&this[a1_0x3ca62c(0x1a9)]||function(_0x2c917a,_0x380213,_0x352386,_0x4e01ae){function _0x4ea050(_0xaa3662){return _0xaa3662 instanceof _0x352386?_0xaa3662:new _0x352386(function(_0x1c73f1){_0x1c73f1(_0xaa3662);});}return new(_0x352386||(_0x352386=Promise))(function(_0x551b07,_0x51643e){const _0x1ebc58=a1_0x5a61;function _0x3c33cd(_0x526fc2){try{_0x258f81(_0x4e01ae['next'](_0x526fc2));}catch(_0x3b5f64){_0x51643e(_0x3b5f64);}}function _0x2d9398(_0x227705){const _0x368114=a1_0x5a61;try{_0x258f81(_0x4e01ae[_0x368114(0x1c3)](_0x227705));}catch(_0x2e421d){_0x51643e(_0x2e421d);}}function _0x258f81(_0x4551dd){const _0x53cbfd=a1_0x5a61;_0x4551dd[_0x53cbfd(0x1e5)]?_0x551b07(_0x4551dd[_0x53cbfd(0x1b4)]):_0x4ea050(_0x4551dd[_0x53cbfd(0x1b4)])[_0x53cbfd(0x1e4)](_0x3c33cd,_0x2d9398);}_0x258f81((_0x4e01ae=_0x4e01ae['apply'](_0x2c917a,_0x380213||[]))[_0x1ebc58(0x1aa)]());});},__importDefault=this&&this[a1_0x3ca62c(0x1bc)]||function(_0x321124){const _0x408dba=a1_0x3ca62c;return _0x321124&&_0x321124[_0x408dba(0x1d2)]?_0x321124:{'default':_0x321124};};function a1_0x58b1(){const _0x36198c=['slice','utf-8','15920weMpQE','No\x20url\x20specified','emit','removeAllListeners','readUInt8','value','handshake','close','readyState','findIndex','disconnect','9128ilJhBe','\x20event\x20type\x20but\x20it\x20wasn\x27t\x20found','__importDefault','565exImeW','16voJaQH','35784fqyoHN','connecting','CLOSING','523536boTlrg','throw','heartbeatTimeout','from','concat','stringify','addEventListener','raise','handshakeStatus','handle','sent-info','length','ping','reconnectTimeout','649zkrmYx','error','__esModule','off','open','send','url','message','38358tugddz','20nkEpvu','alloc','checkHeartbeat','121921XKQppK','closing','CONNECTING','Timeout','defineProperty','465JZLnLY','removeEventListener','decode','then','done','handlers','default','connect','The\x20websocket\x20is\x20already\x20connected','pong','3845989qklTeb','The\x20websocket\x20isn\x27t\x20connected\x20or\x20is\x20already\x20trying\x20to\x20close\x20the\x20connection','string','waiting','encode','isArray','requestId','parse','call','socket','OPEN','pendingRequests','toString','closed','handshakeData','status','splice','CLOSED','includes','__awaiter','next','heartbeatInterval','completed'];a1_0x58b1=function(){return _0x36198c;};return a1_0x58b1();}Object[a1_0x3ca62c(0x1e0)](exports,'__esModule',{'value':!![]});const ws_1=__importDefault(require('ws'));class WebsocketClient{constructor(){const _0xb6177d=a1_0x3ca62c;this[_0xb6177d(0x1ab)]=0x5*0x3e8+0x1f4,this[_0xb6177d(0x1cf)]=null,this[_0xb6177d(0x1ca)]='waiting',this[_0xb6177d(0x19c)]=0x1,this[_0xb6177d(0x1a1)]={},this['handlers']={},this['checkHeartbeat']=()=>{const _0x206906=_0xb6177d;if(this['heartbeatTimeout']!=undefined)clearTimeout(this[_0x206906(0x1c4)]);this['heartbeatTimeout']=setTimeout(()=>{const _0x2b796a=_0x206906;var _0x4781de;if(this[_0x2b796a(0x19f)]!=undefined&&this['socket'][_0x2b796a(0x1b7)]!==ws_1[_0x2b796a(0x1e7)][_0x2b796a(0x1a0)])return;(_0x4781de=this[_0x2b796a(0x19f)])===null||_0x4781de===void 0x0?void 0x0:_0x4781de[_0x2b796a(0x1b6)]();},this['heartbeatInterval']);};}[a1_0x3ca62c(0x1e8)](){return __awaiter(this,arguments,void 0x0,function*({url:_0x265a9f,allowReject:_0x216f9d,handshakeData:_0x4da796,reconnectTimeout:_0x10062c}={}){return new Promise((_0x2bdca2,_0xede9a4)=>{const _0x3d6ce5=a1_0x5a61;if(this['socket']!=undefined&&this['socket'][_0x3d6ce5(0x1b7)]===ws_1[_0x3d6ce5(0x1e7)][_0x3d6ce5(0x1a0)]){if(_0x216f9d!==!![])_0xede9a4(new Error(_0x3d6ce5(0x1e9)));else _0x2bdca2();}this['socket']!=undefined&&(this[_0x3d6ce5(0x19f)][_0x3d6ce5(0x1b2)](),this[_0x3d6ce5(0x19f)][_0x3d6ce5(0x1d3)]('ping',this[_0x3d6ce5(0x1db)]),this['handshakeStatus']=_0x3d6ce5(0x199));if(this[_0x3d6ce5(0x1d6)]==undefined&&_0x265a9f==undefined)_0xede9a4(new Error(_0x3d6ce5(0x1b0)));this[_0x3d6ce5(0x1d6)]=_0x265a9f||this[_0x3d6ce5(0x1d6)];if(_0x10062c!==undefined)this[_0x3d6ce5(0x1cf)]=_0x10062c;if(_0x4da796!==undefined)this[_0x3d6ce5(0x1a4)]=_0x4da796;this[_0x3d6ce5(0x19f)]=new ws_1[(_0x3d6ce5(0x1e7))](this['url']),this['socket'][_0x3d6ce5(0x1c8)](_0x3d6ce5(0x1d4),this[_0x3d6ce5(0x1db)]),this[_0x3d6ce5(0x19f)][_0x3d6ce5(0x1c8)](_0x3d6ce5(0x1d7),this['checkHeartbeat']),this[_0x3d6ce5(0x19f)]['on'](_0x3d6ce5(0x1ce),_0x4e2312=>{const _0x3b7400=_0x3d6ce5;var _0x27294d;(_0x27294d=this[_0x3b7400(0x19f)])===null||_0x27294d===void 0x0?void 0x0:_0x27294d[_0x3b7400(0x1ea)](_0x4e2312),this[_0x3b7400(0x1db)]();}),this[_0x3d6ce5(0x19f)]['addEventListener'](_0x3d6ce5(0x1b6),()=>{const _0x403381=_0x3d6ce5;if(this[_0x403381(0x1c4)]!=undefined)clearTimeout(this['heartbeatTimeout']);});if(this['reconnectTimeout']!=undefined)this[_0x3d6ce5(0x19f)][_0x3d6ce5(0x1c8)](_0x3d6ce5(0x1b6),()=>{const _0x3317b5=_0x3d6ce5;setTimeout(()=>this[_0x3317b5(0x1e8)](),this[_0x3317b5(0x1cf)]);});this[_0x3d6ce5(0x19f)][_0x3d6ce5(0x1c8)](_0x3d6ce5(0x1d7),_0x12e13a=>this[_0x3d6ce5(0x1cb)](_0x12e13a)),this[_0x3d6ce5(0x19f)][_0x3d6ce5(0x1c8)](_0x3d6ce5(0x1d4),_0x379848=>this[_0x3d6ce5(0x1c9)](_0x3d6ce5(0x1d4),_0x379848)),this[_0x3d6ce5(0x19f)][_0x3d6ce5(0x1c8)]('error',_0x5612e2=>this['raise'](_0x3d6ce5(0x1d1),_0x5612e2)),this[_0x3d6ce5(0x19f)][_0x3d6ce5(0x1c8)](_0x3d6ce5(0x1b6),_0x249ad6=>this['raise'](_0x3d6ce5(0x1b6),_0x249ad6));const _0x4b43a2=()=>{_0x2bdca2(),_0x119f31();},_0x505ba2=_0x2840f9=>{_0x216f9d?_0xede9a4(_0x2840f9):_0x2bdca2(),_0x119f31();};this[_0x3d6ce5(0x19f)][_0x3d6ce5(0x1c8)](_0x3d6ce5(0x1d4),_0x4b43a2,{'once':!![]}),this[_0x3d6ce5(0x19f)][_0x3d6ce5(0x1c8)](_0x3d6ce5(0x1d1),_0x505ba2,{'once':!![]});const _0x119f31=()=>{const _0x56c701=_0x3d6ce5;var _0x3d6cc6,_0x2ef832;(_0x3d6cc6=this['socket'])===null||_0x3d6cc6===void 0x0?void 0x0:_0x3d6cc6['removeEventListener']('open',_0x4b43a2),(_0x2ef832=this['socket'])===null||_0x2ef832===void 0x0?void 0x0:_0x2ef832[_0x56c701(0x1e2)](_0x56c701(0x1d1),_0x505ba2);};});});}[a1_0x3ca62c(0x1b9)](_0x407f2f,_0x3a83ad){return __awaiter(this,void 0x0,void 0x0,function*(){return new Promise((_0xed52b3,_0x1f7deb)=>{const _0x8c5f33=a1_0x5a61;if(this['socket']==undefined||this['socket']['readyState']===ws_1['default']['CLOSING']||this[_0x8c5f33(0x19f)]['readyState']===ws_1[_0x8c5f33(0x1e7)]['CLOSED'])return _0x1f7deb(new Error(_0x8c5f33(0x197)));this[_0x8c5f33(0x19f)][_0x8c5f33(0x1b6)](_0x407f2f,_0x3a83ad);const _0x244a2b=()=>{_0xed52b3(),_0x2c2535();},_0x3ac13a=_0x4d4de9=>{_0x1f7deb(_0x4d4de9),_0x2c2535();};this['socket'][_0x8c5f33(0x1c8)](_0x8c5f33(0x1b6),_0x244a2b,{'once':!![]}),this[_0x8c5f33(0x19f)][_0x8c5f33(0x1c8)](_0x8c5f33(0x1d1),_0x3ac13a,{'once':!![]});const _0x2c2535=()=>{const _0x85c869=_0x8c5f33;var _0x537575,_0x37f280;(_0x537575=this[_0x85c869(0x19f)])===null||_0x537575===void 0x0?void 0x0:_0x537575[_0x85c869(0x1e2)](_0x85c869(0x1b6),_0x244a2b),(_0x37f280=this[_0x85c869(0x19f)])===null||_0x37f280===void 0x0?void 0x0:_0x37f280['removeEventListener']('error',_0x3ac13a);};});});}get[a1_0x3ca62c(0x1a5)](){const _0x3943df=a1_0x3ca62c;var _0x3cb755;switch((_0x3cb755=this[_0x3943df(0x19f)])===null||_0x3cb755===void 0x0?void 0x0:_0x3cb755[_0x3943df(0x1b7)]){case ws_1[_0x3943df(0x1e7)][_0x3943df(0x1de)]:return _0x3943df(0x1c0);case ws_1[_0x3943df(0x1e7)][_0x3943df(0x1a0)]:return this[_0x3943df(0x1ca)]===_0x3943df(0x1ac)?'open':'handshake';case ws_1[_0x3943df(0x1e7)][_0x3943df(0x1c1)]:return _0x3943df(0x1dd);case ws_1[_0x3943df(0x1e7)][_0x3943df(0x1a7)]:default:return _0x3943df(0x1a3);}}[a1_0x3ca62c(0x1b1)](_0x35fd4e,_0xca2ffe,_0x40bf18,_0x5976dd=0x5*0x3e8){const _0xdd197b=a1_0x3ca62c;if(this[_0xdd197b(0x19f)]==undefined||this[_0xdd197b(0x1a5)]!==_0xdd197b(0x1d4))throw new Error('The\x20websocket\x20is\x20not\x20connected');if([_0xdd197b(0x1b5),_0xdd197b(0x1d4),'error',_0xdd197b(0x1b6)][_0xdd197b(0x1a8)](_0x35fd4e))throw new Error('Cannot\x20emit\x20a\x20class\x20internal\x20event\x20as\x20handshake,\x20open,\x20error\x20or\x20close');const _0x49cfea=_0x40bf18==undefined?0x0:this[_0xdd197b(0x19c)],_0x3d5c03=Buffer[_0xdd197b(0x1c5)](_0x35fd4e,'utf-8');if(_0x3d5c03[_0xdd197b(0x1cd)]>0xff)throw new Error('Event\x20name\x20too\x20long\x20(max\x20255\x20bytes)');if(_0x40bf18!=undefined){this['requestId']=(this[_0xdd197b(0x19c)]+0x1)%0x80||0x1;const _0x470ac7=setTimeout(()=>{const _0x4506e1=_0xdd197b;delete this[_0x4506e1(0x1a1)][_0x49cfea],_0x40bf18(new Error(_0x4506e1(0x1df)));},_0x5976dd);this[_0xdd197b(0x1a1)][_0x49cfea]=_0x5df8f5=>{if(!(_0x5df8f5 instanceof Error))clearTimeout(_0x470ac7);_0x40bf18(_0x5df8f5);};}const _0x4469f0=Buffer['concat']([Buffer[_0xdd197b(0x1c5)]([_0x49cfea|0x80,_0x3d5c03[_0xdd197b(0x1cd)]]),_0x3d5c03,this['encode'](_0xca2ffe)]);this['socket']['send'](_0x4469f0);}[a1_0x3ca62c(0x1cb)]({data:_0x2ef141}){const _0x3d957b=a1_0x3ca62c;var _0x5092d4,_0x2eed5c,_0x562070;let _0x2f738c=Buffer[_0x3d957b(0x1da)](0x0);if(_0x2ef141 instanceof Buffer)_0x2f738c=_0x2ef141;if(typeof _0x2ef141===_0x3d957b(0x198))_0x2f738c=Buffer[_0x3d957b(0x1c5)](_0x2ef141,'utf-8');if(_0x2ef141 instanceof ArrayBuffer)_0x2f738c=Buffer[_0x3d957b(0x1c5)](_0x2ef141);if(Array[_0x3d957b(0x19b)](_0x2ef141))_0x2f738c=Buffer[_0x3d957b(0x1c6)](_0x2ef141);if(this[_0x3d957b(0x1ca)]===_0x3d957b(0x199)){const {pingInterval:_0x2a5b71}=this[_0x3d957b(0x1e3)](_0x2f738c);this['heartbeatInterval']=_0x2a5b71+0x1f4;const _0x31cc2c=this['encode'](this[_0x3d957b(0x1a4)]===undefined?null:this[_0x3d957b(0x1a4)]);(_0x5092d4=this['socket'])===null||_0x5092d4===void 0x0?void 0x0:_0x5092d4[_0x3d957b(0x1d5)](_0x31cc2c),this['handshakeStatus']=_0x3d957b(0x1cc);return;}else{if(this[_0x3d957b(0x1ca)]==='sent-info'){this[_0x3d957b(0x1ca)]=_0x3d957b(0x1ac);return;}}const _0x2f3633=_0x2f738c[_0x3d957b(0x1b3)](0x0),_0x1a1774=_0x2f3633&0x7f,_0x125618=(_0x2f3633&0x80)!==0x0;if(_0x125618){const _0x4dfcdd=_0x2f738c['readUInt8'](0x1),_0x5a7a48=_0x2f738c[_0x3d957b(0x1ad)](0x2,0x2+_0x4dfcdd)['toString']('utf-8');if(['handshake',_0x3d957b(0x1d4),_0x3d957b(0x1d1),_0x3d957b(0x1b6)]['includes'](_0x5a7a48))return;const _0x4d5550=this['decode'](_0x2f738c['slice'](0x2+_0x4dfcdd)),_0x4fca5e=(_0x2eed5c=this[_0x3d957b(0x1e6)][_0x5a7a48])!==null&&_0x2eed5c!==void 0x0?_0x2eed5c:[];let _0x20294a=![];for(const _0x1bc528 of _0x4fca5e){const _0x426009=_0x1bc528[_0x3d957b(0x19e)](undefined,_0x4d5550);if(!_0x20294a&&_0x426009!==undefined&&_0x1a1774!==0x0){_0x20294a=!![];const _0x18e571=Buffer[_0x3d957b(0x1c6)]([Buffer[_0x3d957b(0x1c5)]([_0x1a1774&0x7f]),this[_0x3d957b(0x19a)](_0x426009)]);(_0x562070=this[_0x3d957b(0x19f)])===null||_0x562070===void 0x0?void 0x0:_0x562070[_0x3d957b(0x1d5)](_0x18e571);}}if(!_0x20294a&&_0x1a1774!==0x0){}return;}const _0x17d345=this[_0x3d957b(0x1a1)][_0x1a1774];if(_0x17d345==undefined)return;const _0x58a5bc=this[_0x3d957b(0x1e3)](_0x2f738c[_0x3d957b(0x1ad)](0x1));_0x17d345(_0x58a5bc);}[a1_0x3ca62c(0x19a)](_0x1dda50){const _0x2ba3f5=a1_0x3ca62c;return Buffer[_0x2ba3f5(0x1c5)](JSON[_0x2ba3f5(0x1c7)](_0x1dda50),_0x2ba3f5(0x1ae));}[a1_0x3ca62c(0x1e3)](_0x323eee){const _0x369205=a1_0x3ca62c;return JSON[_0x369205(0x19d)](_0x323eee[_0x369205(0x1a2)](_0x369205(0x1ae)));}['on'](_0x2db3b5,_0x2dc831){const _0x37a8b5=a1_0x3ca62c;if(this[_0x37a8b5(0x1e6)][_0x2db3b5]==undefined)this[_0x37a8b5(0x1e6)][_0x2db3b5]=[];this[_0x37a8b5(0x1e6)][_0x2db3b5]['push'](_0x2dc831);}['off'](_0x18c32e,_0x87f4f6){const _0x2ad603=a1_0x3ca62c;if(_0x87f4f6==undefined){delete this['handlers'][_0x18c32e];return;}const _0x24ed04=this['handlers'][_0x18c32e],_0x258725=(_0x24ed04!==null&&_0x24ed04!==void 0x0?_0x24ed04:[])[_0x2ad603(0x1b8)](_0x4edd4d=>_0x4edd4d===_0x87f4f6);if(_0x258725===-0x1)throw new Error('Attempted\x20to\x20remove\x20an\x20handler\x20for\x20'+_0x18c32e+_0x2ad603(0x1bb));_0x24ed04[_0x2ad603(0x1a6)](_0x258725,0x1);}[a1_0x3ca62c(0x1c9)](_0x4c5be5,_0x5149f5){const _0x3b8cee=a1_0x3ca62c;var _0x41d2c0;const _0x49922b=(_0x41d2c0=this[_0x3b8cee(0x1e6)][_0x4c5be5])!==null&&_0x41d2c0!==void 0x0?_0x41d2c0:[];for(const _0xe01626 of _0x49922b)_0xe01626(_0x5149f5);}}function a1_0x5a61(_0x10a396,_0x37c040){const _0x58b17e=a1_0x58b1();return a1_0x5a61=function(_0x5a61a5,_0x59500d){_0x5a61a5=_0x5a61a5-0x196;let _0x81b7f7=_0x58b17e[_0x5a61a5];return _0x81b7f7;},a1_0x5a61(_0x10a396,_0x37c040);}exports[a1_0x3ca62c(0x1e7)]=WebsocketClient;