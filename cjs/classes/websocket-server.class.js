'use strict';const a2_0x160f50=a2_0x5bae;function a2_0x12f0(){const _0x2d2f7d=['__importDefault','53078MOBhhT','close','raise','handlers','1566531gQUvig','splice','6dZnmoM','1282967voGkpF','default','randomUUID','crypto','clients','upgrade','\x20event\x20type\x20but\x20it\x20wasn\x27t\x20found','3xvdxKb','971272FQUFIh','open','1368284uGkRCw','__esModule','findIndex','608020xsRsLa','./websocket-client-server.class','4975605zIWmeR','Attempted\x20to\x20remove\x20an\x20handler\x20for\x20','defineProperty','off'];a2_0x12f0=function(){return _0x2d2f7d;};return a2_0x12f0();}(function(_0x303c42,_0x149549){const _0x161110=a2_0x5bae,_0x1483a6=_0x303c42();while(!![]){try{const _0x31cdf2=-parseInt(_0x161110(0x11b))/0x1*(parseInt(_0x161110(0x128))/0x2)+parseInt(_0x161110(0x12c))/0x3+-parseInt(_0x161110(0x11e))/0x4+-parseInt(_0x161110(0x121))/0x5+parseInt(_0x161110(0x12e))/0x6*(-parseInt(_0x161110(0x12f))/0x7)+parseInt(_0x161110(0x11c))/0x8+parseInt(_0x161110(0x123))/0x9;if(_0x31cdf2===_0x149549)break;else _0x1483a6['push'](_0x1483a6['shift']());}catch(_0x187627){_0x1483a6['push'](_0x1483a6['shift']());}}}(a2_0x12f0,0x72b62));function a2_0x5bae(_0x1039b8,_0x19e106){const _0x12f08e=a2_0x12f0();return a2_0x5bae=function(_0x5bae15,_0x121a9b){_0x5bae15=_0x5bae15-0x11b;let _0x10e938=_0x12f08e[_0x5bae15];return _0x10e938;},a2_0x5bae(_0x1039b8,_0x19e106);}var __importDefault=this&&this[a2_0x160f50(0x127)]||function(_0x5a19cd){const _0x59731e=a2_0x160f50;return _0x5a19cd&&_0x5a19cd[_0x59731e(0x11f)]?_0x5a19cd:{'default':_0x5a19cd};};Object[a2_0x160f50(0x125)](exports,'__esModule',{'value':!![]});const crypto_1=__importDefault(require(a2_0x160f50(0x132))),websocket_client_server_class_1=__importDefault(require(a2_0x160f50(0x122)));class WebsocketServer{constructor(_0x354b54){const _0x3f6474=a2_0x160f50;this['clients']={},this[_0x3f6474(0x12b)]={},_0x354b54['on'](_0x3f6474(0x134),(_0x1eb507,_0xcc952f)=>{const _0x3b8db9=_0x3f6474,_0x30cd57=websocket_client_server_class_1[_0x3b8db9(0x130)]['fromUpgradeRequest'](_0x1eb507,_0xcc952f),_0x398588=crypto_1['default'][_0x3b8db9(0x131)]();if(_0x30cd57===null)return;this[_0x3b8db9(0x133)][_0x398588]=_0x30cd57,_0x30cd57['on'](_0x3b8db9(0x129),()=>{const _0x1a2877=_0x3b8db9;delete this[_0x1a2877(0x133)][_0x398588];}),this[_0x3b8db9(0x12a)](_0x3b8db9(0x11d),_0x30cd57);});}['on'](_0x1ae0c4,_0x49ffe1){const _0x3b38ae=a2_0x160f50;if(this[_0x3b38ae(0x12b)][_0x1ae0c4]==undefined)this[_0x3b38ae(0x12b)][_0x1ae0c4]=[];this['handlers'][_0x1ae0c4]['push'](_0x49ffe1);}[a2_0x160f50(0x126)](_0x2818ab,_0x24aa0c){const _0x517913=a2_0x160f50;if(_0x24aa0c==undefined){this['handlers'][_0x2818ab]=[];return;}const _0x50a621=this[_0x517913(0x12b)][_0x2818ab],_0x57e0e3=(_0x50a621!==null&&_0x50a621!==void 0x0?_0x50a621:[])[_0x517913(0x120)](_0x52e7d4=>_0x52e7d4===_0x24aa0c);if(_0x57e0e3===-0x1)throw new Error(_0x517913(0x124)+_0x2818ab+_0x517913(0x135));_0x50a621[_0x517913(0x12d)](_0x57e0e3,0x1);}[a2_0x160f50(0x12a)](_0x40cebe,_0x207d6d){const _0x246204=a2_0x160f50;var _0x4950f3;const _0x461c17=(_0x4950f3=this[_0x246204(0x12b)][_0x40cebe])!==null&&_0x4950f3!==void 0x0?_0x4950f3:[];for(const _0x265647 of _0x461c17){_0x265647(_0x207d6d);}}}exports[a2_0x160f50(0x130)]=WebsocketServer;