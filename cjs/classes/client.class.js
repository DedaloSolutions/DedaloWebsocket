'use strict';const a0_0x5a4cc7=a0_0x2c3d;(function(_0xd3eea5,_0x54252f){const _0x5a0dbd=a0_0x2c3d,_0xd159ad=_0xd3eea5();while(!![]){try{const _0x35b168=parseInt(_0x5a0dbd(0x210))/0x1*(-parseInt(_0x5a0dbd(0x1d5))/0x2)+parseInt(_0x5a0dbd(0x200))/0x3+-parseInt(_0x5a0dbd(0x1fc))/0x4*(parseInt(_0x5a0dbd(0x201))/0x5)+-parseInt(_0x5a0dbd(0x219))/0x6+parseInt(_0x5a0dbd(0x1dd))/0x7+parseInt(_0x5a0dbd(0x1dc))/0x8+-parseInt(_0x5a0dbd(0x1fb))/0x9*(-parseInt(_0x5a0dbd(0x1e3))/0xa);if(_0x35b168===_0x54252f)break;else _0xd159ad['push'](_0xd159ad['shift']());}catch(_0x5a1b25){_0xd159ad['push'](_0xd159ad['shift']());}}}(a0_0x57de,0xca0ea));var __awaiter=this&&this['__awaiter']||function(_0x28ea6c,_0xd2c277,_0x40dec6,_0x551c33){function _0x41d0b4(_0x21d5d8){return _0x21d5d8 instanceof _0x40dec6?_0x21d5d8:new _0x40dec6(function(_0x387ced){_0x387ced(_0x21d5d8);});}return new(_0x40dec6||(_0x40dec6=Promise))(function(_0x5b8b72,_0x3190b4){function _0x1b5bf1(_0x3a0dee){const _0x6107aa=a0_0x2c3d;try{_0x28e911(_0x551c33[_0x6107aa(0x1f8)](_0x3a0dee));}catch(_0x3d2a36){_0x3190b4(_0x3d2a36);}}function _0x4d4550(_0x11b38b){const _0x20687b=a0_0x2c3d;try{_0x28e911(_0x551c33[_0x20687b(0x220)](_0x11b38b));}catch(_0x46bae3){_0x3190b4(_0x46bae3);}}function _0x28e911(_0x19d31d){const _0x576b57=a0_0x2c3d;_0x19d31d[_0x576b57(0x1f9)]?_0x5b8b72(_0x19d31d['value']):_0x41d0b4(_0x19d31d[_0x576b57(0x224)])['then'](_0x1b5bf1,_0x4d4550);}_0x28e911((_0x551c33=_0x551c33['apply'](_0x28ea6c,_0xd2c277||[]))['next']());});},__importDefault=this&&this['__importDefault']||function(_0x50fd42){return _0x50fd42&&_0x50fd42['__esModule']?_0x50fd42:{'default':_0x50fd42};};Object[a0_0x5a4cc7(0x20b)](exports,a0_0x5a4cc7(0x21b),{'value':!![]});const ws_1=__importDefault(require('ws'));class Client{constructor(){const _0x27a291=a0_0x5a4cc7;this['heartbeatInterval']=0x5*0x3e8+0x1f4,this['reconnectTimeout']=null,this[_0x27a291(0x1e6)]=_0x27a291(0x20f),this[_0x27a291(0x213)]=![],this['requestId']=0x1,this[_0x27a291(0x202)]={},this['handlers']={},this[_0x27a291(0x222)]=()=>{const _0x1db181=_0x27a291;if(this[_0x1db181(0x20a)]!=undefined)clearTimeout(this['heartbeatTimeout']);this[_0x1db181(0x20a)]=setTimeout(()=>{const _0x398064=_0x1db181;var _0xd3f5df;if(this[_0x398064(0x1ed)]!=undefined&&this[_0x398064(0x1ed)][_0x398064(0x1fa)]!==ws_1[_0x398064(0x1f0)][_0x398064(0x203)])return;(_0xd3f5df=this['socket'])===null||_0xd3f5df===void 0x0?void 0x0:_0xd3f5df[_0x398064(0x211)]();},this[_0x1db181(0x207)]);};}[a0_0x5a4cc7(0x1f3)](){return __awaiter(this,arguments,void 0x0,function*({url:_0x5f2dd6,allowReject:_0x387a06,handshakeData:_0xb915f3,reconnectTimeout:_0x1a221c}={}){return new Promise((_0xf3e086,_0x455b28)=>{const _0x4e72fb=a0_0x2c3d;if(this[_0x4e72fb(0x1ed)]!=undefined&&this['socket'][_0x4e72fb(0x1fa)]===ws_1[_0x4e72fb(0x1f0)][_0x4e72fb(0x203)]){if(_0x387a06!==!![])_0x455b28(new Error(_0x4e72fb(0x215)));else _0xf3e086();}this[_0x4e72fb(0x1ed)]!=undefined&&(this[_0x4e72fb(0x1ed)][_0x4e72fb(0x1d9)]=()=>{},this['socket'][_0x4e72fb(0x1e8)]=()=>{},this[_0x4e72fb(0x1ed)]['onmessage']=()=>{},this[_0x4e72fb(0x1ed)][_0x4e72fb(0x1db)]=()=>{},this[_0x4e72fb(0x1e6)]='waiting');if(this[_0x4e72fb(0x1ff)]==undefined&&_0x5f2dd6==undefined)_0x455b28(new Error(_0x4e72fb(0x214)));this[_0x4e72fb(0x1ff)]=_0x5f2dd6||this[_0x4e72fb(0x1ff)];if(_0x1a221c!==undefined)this[_0x4e72fb(0x20c)]=_0x1a221c;if(_0xb915f3!==undefined)this[_0x4e72fb(0x1fd)]=_0xb915f3;this[_0x4e72fb(0x1ed)]=new ws_1[(_0x4e72fb(0x1f0))](this[_0x4e72fb(0x1ff)]),this['socket'][_0x4e72fb(0x1d9)]=_0x3cf903=>{const _0x3384e4=_0x4e72fb;this[_0x3384e4(0x21e)]('open',_0x3cf903);},this[_0x4e72fb(0x1ed)]['onerror']=_0x198104=>{const _0x675672=_0x4e72fb;this[_0x675672(0x21e)](_0x675672(0x1e2),_0x198104);},this[_0x4e72fb(0x1ed)][_0x4e72fb(0x1f4)]=_0x3c1d3e=>{const _0x42294d=_0x4e72fb;this['handle'](_0x3c1d3e),this[_0x42294d(0x222)]();},this['socket'][_0x4e72fb(0x1db)]=_0x25d6b5=>{const _0x61619a=_0x4e72fb;if(this['heartbeatTimeout']!=undefined)clearTimeout(this[_0x61619a(0x20a)]);if(this['reconnectTimeout']!=undefined&&!this[_0x61619a(0x213)])setTimeout(()=>this[_0x61619a(0x1f3)](),this[_0x61619a(0x20c)]);this[_0x61619a(0x213)]=![],this['raise'](_0x61619a(0x211),_0x25d6b5);};const _0x2638db=()=>{_0xf3e086(),_0xb0e8();},_0x4cd706=_0x28d6c2=>{_0x387a06?_0x455b28(_0x28d6c2):_0xf3e086(),_0xb0e8();};this[_0x4e72fb(0x1ed)][_0x4e72fb(0x1e7)](_0x4e72fb(0x1e4),_0x2638db,{'once':!![]}),this[_0x4e72fb(0x1ed)]['addEventListener'](_0x4e72fb(0x1e2),_0x4cd706,{'once':!![]});const _0xb0e8=()=>{const _0xbc8de0=_0x4e72fb;var _0x4c2675,_0x5788a1;(_0x4c2675=this[_0xbc8de0(0x1ed)])===null||_0x4c2675===void 0x0?void 0x0:_0x4c2675[_0xbc8de0(0x1f6)](_0xbc8de0(0x1e4),_0x2638db),(_0x5788a1=this[_0xbc8de0(0x1ed)])===null||_0x5788a1===void 0x0?void 0x0:_0x5788a1['removeEventListener']('error',_0x4cd706);};});});}[a0_0x5a4cc7(0x1f1)](_0x5eb0a4,_0x2f15fb){return __awaiter(this,void 0x0,void 0x0,function*(){return new Promise((_0x3591f6,_0x126e4c)=>{const _0x500d71=a0_0x2c3d;if(this[_0x500d71(0x1ed)]==undefined||this[_0x500d71(0x1ed)][_0x500d71(0x1fa)]===ws_1[_0x500d71(0x1f0)]['CLOSING']||this[_0x500d71(0x1ed)][_0x500d71(0x1fa)]===ws_1[_0x500d71(0x1f0)][_0x500d71(0x1e0)])return _0x126e4c(new Error('The\x20websocket\x20isn\x27t\x20connected\x20or\x20is\x20already\x20trying\x20to\x20close\x20the\x20connection'));this['requestedDisconnected']=!![],this[_0x500d71(0x1ed)][_0x500d71(0x211)](_0x5eb0a4,_0x2f15fb);const _0x538edb=()=>{_0x3591f6(),_0x1dc347();},_0x3ba5b2=_0x497cd3=>{_0x126e4c(_0x497cd3),_0x1dc347();};this[_0x500d71(0x1ed)]['addEventListener'](_0x500d71(0x211),_0x538edb,{'once':!![]}),this[_0x500d71(0x1ed)][_0x500d71(0x1e7)](_0x500d71(0x1e2),_0x3ba5b2,{'once':!![]});const _0x1dc347=()=>{const _0x549ab2=_0x500d71;var _0x553695,_0x2a1a8c;(_0x553695=this[_0x549ab2(0x1ed)])===null||_0x553695===void 0x0?void 0x0:_0x553695['removeEventListener'](_0x549ab2(0x211),_0x538edb),(_0x2a1a8c=this[_0x549ab2(0x1ed)])===null||_0x2a1a8c===void 0x0?void 0x0:_0x2a1a8c[_0x549ab2(0x1f6)](_0x549ab2(0x1e2),_0x3ba5b2);};});});}get['status'](){const _0x3c6a67=a0_0x5a4cc7;var _0x47aaa0;switch((_0x47aaa0=this['socket'])===null||_0x47aaa0===void 0x0?void 0x0:_0x47aaa0[_0x3c6a67(0x1fa)]){case ws_1[_0x3c6a67(0x1f0)][_0x3c6a67(0x1e5)]:return'connecting';case ws_1['default'][_0x3c6a67(0x203)]:return this[_0x3c6a67(0x1e6)]==='completed'?_0x3c6a67(0x1e4):_0x3c6a67(0x212);case ws_1['default'][_0x3c6a67(0x223)]:return'closing';case ws_1[_0x3c6a67(0x1f0)][_0x3c6a67(0x1e0)]:default:return'closed';}}[a0_0x5a4cc7(0x1de)](_0x14177a,_0x957c8f,_0x4c19ae){return __awaiter(this,arguments,void 0x0,function*(_0x2778bc,_0x53317b,_0x406b8d,_0x74894c=0x5*0x3e8){const _0x37c840=a0_0x2c3d;if(this[_0x37c840(0x1ed)]==undefined||this[_0x37c840(0x206)]!=='open')throw new Error(_0x37c840(0x21f));if([_0x37c840(0x212),_0x37c840(0x1e4),_0x37c840(0x1e2),_0x37c840(0x211),'*'][_0x37c840(0x1df)](_0x2778bc))throw new Error('Cannot\x20emit\x20a\x20class\x20internal\x20event\x20as\x20handshake,\x20open,\x20error,\x20close\x20or\x20\x22*\x22');const _0x39f164=new TextEncoder()[_0x37c840(0x216)](_0x2778bc);if(_0x39f164[_0x37c840(0x1eb)]>0xff)throw new Error(_0x37c840(0x1ef));const _0x276887=this[_0x37c840(0x1f5)];if(_0x406b8d!=undefined){this[_0x37c840(0x1f5)]=(this[_0x37c840(0x1f5)]+0x1)%0x100;const _0x21e93b=setTimeout(()=>{const _0x2ad0d1=_0x37c840;delete this['pendingRequests'][_0x276887],_0x406b8d(new Error(_0x2ad0d1(0x209)));},_0x74894c);this[_0x37c840(0x202)][_0x276887]=_0x2fcec3=>{if(!(_0x2fcec3 instanceof Error))clearTimeout(_0x21e93b);_0x406b8d(_0x2fcec3);};}const _0x3c0ce4=this[_0x37c840(0x216)](_0x53317b),_0xf9b801=new Uint8Array(0x2+(_0x406b8d==undefined?0x0:0x1)+_0x39f164[_0x37c840(0x1eb)]+_0x3c0ce4[_0x37c840(0x1eb)]);_0xf9b801[0x0]=_0x406b8d==undefined?0x2:0x3;if(_0x406b8d!=undefined)_0xf9b801[0x1]=_0x276887;_0xf9b801[0x1+(_0x406b8d!=undefined?0x1:0x0)]=_0x39f164['length'],_0xf9b801['set'](_0x39f164,0x2+(_0x406b8d!=undefined?0x1:0x0)),_0xf9b801[_0x37c840(0x1f2)](_0x3c0ce4,0x2+(_0x406b8d!=undefined?0x1:0x0)+_0x39f164[_0x37c840(0x1eb)]),yield new Promise((_0x300b16,_0x5eda05)=>{const _0x462f6f=_0x37c840;this[_0x462f6f(0x1ed)][_0x462f6f(0x218)](_0xf9b801,_0x162747=>{if(_0x162747!=undefined)return _0x5eda05(_0x162747);_0x300b16();});});});}[a0_0x5a4cc7(0x21a)](_0x4ccd6d){return __awaiter(this,arguments,void 0x0,function*({data:_0x5e9674}){const _0x1a895e=a0_0x2c3d;var _0x1cd6f3,_0x4f1b94,_0x328d60;let _0x113d1b=new Uint8Array();if(typeof _0x5e9674===_0x1a895e(0x1d6))_0x113d1b=new TextEncoder()[_0x1a895e(0x216)](_0x5e9674);else{if(_0x5e9674 instanceof Buffer)_0x113d1b=new Uint8Array(_0x5e9674[_0x1a895e(0x1ec)],_0x5e9674[_0x1a895e(0x1ea)],_0x5e9674[_0x1a895e(0x1e9)]);else{if(_0x5e9674 instanceof ArrayBuffer)_0x113d1b=new Uint8Array(_0x5e9674);else{if(_0x5e9674 instanceof Blob)_0x113d1b=new Uint8Array(yield _0x5e9674['arrayBuffer']());else{if(Array['isArray'](_0x5e9674)){const _0x34c35a=_0x5e9674[_0x1a895e(0x1da)]((_0x2d7354,_0x451c97)=>_0x2d7354+_0x451c97[_0x1a895e(0x1eb)],0x0);_0x113d1b=new Uint8Array(_0x34c35a);let _0x12a9d7=0x0;for(const _0x18c404 of _0x5e9674){_0x113d1b[_0x1a895e(0x1f2)](new Uint8Array(_0x18c404['buffer'],_0x18c404[_0x1a895e(0x1ea)],_0x18c404[_0x1a895e(0x1e9)]),_0x12a9d7),_0x12a9d7+=_0x18c404[_0x1a895e(0x1eb)];}}else throw new Error(_0x1a895e(0x1ee));}}}}if(this[_0x1a895e(0x1e6)]===_0x1a895e(0x20f)){const {pingInterval:_0x1d0e96}=this[_0x1a895e(0x20d)](_0x113d1b);this[_0x1a895e(0x207)]=_0x1d0e96+0x1f4;const _0x3a338b=this['encode']((_0x1cd6f3=this[_0x1a895e(0x1fd)])!==null&&_0x1cd6f3!==void 0x0?_0x1cd6f3:null);this[_0x1a895e(0x1ed)]['send'](_0x3a338b),this['handshakeStatus']=_0x1a895e(0x1d8);return;}if(this['handshakeStatus']===_0x1a895e(0x1d8)){this['handshakeStatus']='completed';return;}const _0x3140e3=_0x113d1b[0x0];switch(_0x3140e3){case 0x0:{this[_0x1a895e(0x222)](),_0x113d1b[0x0]=0x1,this['socket']['send'](_0x113d1b);break;}case 0x1:{break;}case 0x2:case 0x3:{const _0x3e4abe=_0x3140e3===0x2?Number['NaN']:_0x113d1b[0x1],_0x217886=_0x3140e3===0x2?0x0:0x1,_0x2bc27f=_0x113d1b[0x1+_0x217886],_0x5097ed=new TextDecoder()[_0x1a895e(0x20d)](_0x113d1b[_0x1a895e(0x1fe)](0x2+_0x217886,0x2+_0x217886+_0x2bc27f));if([_0x1a895e(0x212),_0x1a895e(0x1e4),'error',_0x1a895e(0x211),'*'][_0x1a895e(0x1df)](_0x5097ed))return;const _0x262c12=this[_0x1a895e(0x20d)](_0x113d1b['slice'](0x2+_0x217886+_0x2bc27f)),_0x12145d=(_0x4f1b94=this[_0x1a895e(0x21d)][_0x5097ed])!==null&&_0x4f1b94!==void 0x0?_0x4f1b94:[];let _0x5e111d=![];for(const _0x5ec813 of _0x12145d){const _0x508442=_0x5ec813[_0x1a895e(0x20e)](undefined,_0x262c12);if(!_0x5e111d&&_0x508442!==undefined&&_0x3e4abe!==0x0){_0x5e111d=!![];const _0x308ca0=Buffer[_0x1a895e(0x221)]([Buffer[_0x1a895e(0x21c)]([0x4,_0x3e4abe]),this[_0x1a895e(0x216)](_0x508442)]);this[_0x1a895e(0x1ed)][_0x1a895e(0x218)](_0x308ca0);}}const _0x41edaf=(_0x328d60=this[_0x1a895e(0x21d)]['*'])!==null&&_0x328d60!==void 0x0?_0x328d60:[];for(const _0x2dd427 of _0x41edaf)_0x2dd427['call'](undefined,_0x5097ed,_0x262c12);if(!_0x5e111d&&_0x3140e3===0x3){}break;}case 0x4:{const _0x2517bf=_0x113d1b[0x1],_0x2a3eaa=this[_0x1a895e(0x202)][_0x2517bf];if(_0x2a3eaa==undefined)return;const _0x484f1a=this[_0x1a895e(0x20d)](_0x113d1b[_0x1a895e(0x1fe)](0x2));_0x2a3eaa(_0x484f1a);break;}}});}[a0_0x5a4cc7(0x216)](_0x2c9907){const _0x336f26=a0_0x5a4cc7;return new TextEncoder()[_0x336f26(0x216)](JSON[_0x336f26(0x205)](_0x2c9907));}[a0_0x5a4cc7(0x20d)](_0x253a2c){const _0x374e59=a0_0x5a4cc7;return JSON[_0x374e59(0x1f7)](new TextDecoder()[_0x374e59(0x20d)](_0x253a2c));}['on'](_0x5ebc9e,_0x3c5384){const _0x4d1e8d=a0_0x5a4cc7;if(this[_0x4d1e8d(0x21d)][_0x5ebc9e]==undefined)this[_0x4d1e8d(0x21d)][_0x5ebc9e]=[];this[_0x4d1e8d(0x21d)][_0x5ebc9e]['push'](_0x3c5384);}[a0_0x5a4cc7(0x204)](_0x3b0ba3,_0x5d2fd1){const _0xa3de3d=a0_0x5a4cc7;if(_0x5d2fd1==undefined){delete this[_0xa3de3d(0x21d)][_0x3b0ba3];return;}const _0x33c209=this[_0xa3de3d(0x21d)][_0x3b0ba3],_0xf05f38=(_0x33c209!==null&&_0x33c209!==void 0x0?_0x33c209:[])[_0xa3de3d(0x1d7)](_0x356b23=>_0x356b23===_0x5d2fd1);if(_0xf05f38===-0x1)throw new Error(_0xa3de3d(0x1e1)+_0x3b0ba3+_0xa3de3d(0x208));_0x33c209[_0xa3de3d(0x217)](_0xf05f38,0x1);}[a0_0x5a4cc7(0x21e)](_0x5b67ae,_0xfc29f8){const _0x147b12=a0_0x5a4cc7;var _0x2e7896,_0x4d61f3;const _0x57a60a=(_0x2e7896=this[_0x147b12(0x21d)][_0x5b67ae])!==null&&_0x2e7896!==void 0x0?_0x2e7896:[];for(const _0x477da0 of _0x57a60a)_0x477da0(_0xfc29f8);const _0x187a5d=(_0x4d61f3=this['handlers']['*'])!==null&&_0x4d61f3!==void 0x0?_0x4d61f3:[];for(const _0x1a920b of _0x187a5d)_0x1a920b(_0x5b67ae,_0xfc29f8);}}exports[a0_0x5a4cc7(0x1f0)]=Client;function a0_0x2c3d(_0x4eda5c,_0x5bf65a){const _0x57de8e=a0_0x57de();return a0_0x2c3d=function(_0x2c3d5e,_0x3a3e50){_0x2c3d5e=_0x2c3d5e-0x1d5;let _0x1efe23=_0x57de8e[_0x2c3d5e];return _0x1efe23;},a0_0x2c3d(_0x4eda5c,_0x5bf65a);}function a0_0x57de(){const _0x436179=['No\x20url\x20specified','The\x20websocket\x20is\x20already\x20connected','encode','splice','send','7046748ZyIntG','handle','__esModule','from','handlers','raise','The\x20websocket\x20is\x20not\x20connected','throw','concat','checkHeartbeat','CLOSING','value','2MfqrSR','string','findIndex','sent-info','onopen','reduce','onclose','12821384ZfnJSe','7866957uUVJLM','emit','includes','CLOSED','Attempted\x20to\x20remove\x20an\x20handler\x20for\x20','error','10xUiTok','open','CONNECTING','handshakeStatus','addEventListener','onerror','byteLength','byteOffset','length','buffer','socket','Unsupported\x20data\x20type','Event\x20name\x20too\x20long\x20(max\x20255\x20bytes)','default','disconnect','set','connect','onmessage','requestId','removeEventListener','parse','next','done','readyState','14852106rUGiDd','284SAvVpb','handshakeData','slice','url','380886hTdIyT','108595iwFDcG','pendingRequests','OPEN','off','stringify','status','heartbeatInterval','\x20event\x20type\x20but\x20it\x20wasn\x27t\x20found','Timeout','heartbeatTimeout','defineProperty','reconnectTimeout','decode','call','waiting','959587KeQWui','close','handshake','requestedDisconnected'];a0_0x57de=function(){return _0x436179;};return a0_0x57de();}