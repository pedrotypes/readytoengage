(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,a={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return i(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==a.call(t)?o(t):i(r(t))}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),a=n("2d00"),s=i("species");t.exports=function(t){return a>=51||!r((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),i=n("825a"),a=n("d039"),s=n("ad6d"),o="toString",u=RegExp.prototype,c=u[o],f=a((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),l=c.name!=o;(f||l)&&r(RegExp.prototype,o,(function(){var t=i(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in u)?s.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("69f3"),a=n("7dd0"),s="String Iterator",o=i.set,u=i.getterFor(s);a(String,"String",(function(t){o(this,{type:s,string:String(t),index:0})}),(function(){var t,e=u(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"4bb8":function(t,e,n){"use strict";n("98e9")},"4df4":function(t,e,n){"use strict";var r=n("0366"),i=n("7b0b"),a=n("9bdd"),s=n("e95a"),o=n("50c4"),u=n("8418"),c=n("35a1");t.exports=function(t){var e,n,f,l,h,d,p=i(t),g="function"==typeof this?this:Array,v=arguments.length,b=v>1?arguments[1]:void 0,m=void 0!==b,y=c(p),S=0;if(m&&(b=r(b,v>2?arguments[2]:void 0,2)),void 0==y||g==Array&&s(y))for(e=o(p.length),n=new g(e);e>S;S++)d=m?b(p[S],S):p[S],u(n,S,d);else for(l=y.call(p),h=l.next,n=new g;!(f=h.call(l)).done;S++)d=m?a(l,b,[f.value,S],!0):f.value,u(n,S,d);return n.length=S,n}},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),a=function(t){return function(e,n){var a,s,o=String(i(e)),u=r(n),c=o.length;return u<0||u>=c?t?"":void 0:(a=o.charCodeAt(u),a<55296||a>56319||u+1===c||(s=o.charCodeAt(u+1))<56320||s>57343?t?o.charAt(u):a:t?o.slice(u,u+2):s-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),a=n("b622"),s=a("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"68a7":function(t,e,n){},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),a=n("e538"),s=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||s(e,t,{value:a.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var s=r(e);s in t?i.f(t,s,a(0,n)):t[s]=n}},9649:function(t,e,n){"use strict";n("68a7")},"98e9":function(t,e,n){},"99af":function(t,e,n){"use strict";var r=n("23e7"),i=n("d039"),a=n("e8b5"),s=n("861d"),o=n("7b0b"),u=n("50c4"),c=n("8418"),f=n("65f0"),l=n("1dde"),h=n("b622"),d=n("2d00"),p=h("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",b=d>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),m=l("concat"),y=function(t){if(!s(t))return!1;var e=t[p];return void 0!==e?!!e:a(t)},S=!b||!m;r({target:"Array",proto:!0,forced:S},{concat:function(t){var e,n,r,i,a,s=o(this),l=f(s,0),h=0;for(e=-1,r=arguments.length;e<r;e++)if(a=-1===e?s:arguments[e],y(a)){if(i=u(a.length),h+i>g)throw TypeError(v);for(n=0;n<i;n++,h++)n in a&&c(l,h,a[n])}else{if(h>=g)throw TypeError(v);c(l,h++,a)}return l.length=h,l}})},"9bdd":function(t,e,n){var r=n("825a"),i=n("2a62");t.exports=function(t,e,n,a){try{return a?e(r(n)[0],n[1]):e(n)}catch(s){throw i(t),s}}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),a=n("d066"),s=n("c430"),o=n("83ab"),u=n("4930"),c=n("fdbf"),f=n("d039"),l=n("5135"),h=n("e8b5"),d=n("861d"),p=n("825a"),g=n("7b0b"),v=n("fc6a"),b=n("c04e"),m=n("5c6c"),y=n("7c73"),S=n("df75"),w=n("241c"),O=n("057f"),j=n("7418"),_=n("06cf"),k=n("9bf2"),A=n("d1e7"),x=n("9112"),L=n("6eeb"),C=n("5692"),T=n("f772"),E=n("d012"),P=n("90e3"),M=n("b622"),R=n("e538"),D=n("746f"),F=n("d44e"),N=n("69f3"),I=n("b727").forEach,J=T("hidden"),G="Symbol",H="prototype",V=M("toPrimitive"),B=N.set,$=N.getterFor(G),W=Object[H],q=i.Symbol,K=a("JSON","stringify"),Q=_.f,U=k.f,z=O.f,X=A.f,Y=C("symbols"),Z=C("op-symbols"),tt=C("string-to-symbol-registry"),et=C("symbol-to-string-registry"),nt=C("wks"),rt=i.QObject,it=!rt||!rt[H]||!rt[H].findChild,at=o&&f((function(){return 7!=y(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Q(W,e);r&&delete W[e],U(t,e,n),r&&t!==W&&U(W,e,r)}:U,st=function(t,e){var n=Y[t]=y(q[H]);return B(n,{type:G,tag:t,description:e}),o||(n.description=e),n},ot=c?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},ut=function(t,e,n){t===W&&ut(Z,e,n),p(t);var r=b(e,!0);return p(n),l(Y,r)?(n.enumerable?(l(t,J)&&t[J][r]&&(t[J][r]=!1),n=y(n,{enumerable:m(0,!1)})):(l(t,J)||U(t,J,m(1,{})),t[J][r]=!0),at(t,r,n)):U(t,r,n)},ct=function(t,e){p(t);var n=v(e),r=S(n).concat(pt(n));return I(r,(function(e){o&&!lt.call(n,e)||ut(t,e,n[e])})),t},ft=function(t,e){return void 0===e?y(t):ct(y(t),e)},lt=function(t){var e=b(t,!0),n=X.call(this,e);return!(this===W&&l(Y,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(Y,e)||l(this,J)&&this[J][e])||n)},ht=function(t,e){var n=v(t),r=b(e,!0);if(n!==W||!l(Y,r)||l(Z,r)){var i=Q(n,r);return!i||!l(Y,r)||l(n,J)&&n[J][r]||(i.enumerable=!0),i}},dt=function(t){var e=z(v(t)),n=[];return I(e,(function(t){l(Y,t)||l(E,t)||n.push(t)})),n},pt=function(t){var e=t===W,n=z(e?Z:v(t)),r=[];return I(n,(function(t){!l(Y,t)||e&&!l(W,t)||r.push(Y[t])})),r};if(u||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=P(t),n=function(t){this===W&&n.call(Z,t),l(this,J)&&l(this[J],e)&&(this[J][e]=!1),at(this,e,m(1,t))};return o&&it&&at(W,e,{configurable:!0,set:n}),st(e,t)},L(q[H],"toString",(function(){return $(this).tag})),L(q,"withoutSetter",(function(t){return st(P(t),t)})),A.f=lt,k.f=ut,_.f=ht,w.f=O.f=dt,j.f=pt,R.f=function(t){return st(M(t),t)},o&&(U(q[H],"description",{configurable:!0,get:function(){return $(this).description}}),s||L(W,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:q}),I(S(nt),(function(t){D(t)})),r({target:G,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!o},{create:ft,defineProperty:ut,defineProperties:ct,getOwnPropertyDescriptor:ht}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:f((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(g(t))}}),K){var gt=!u||f((function(){var t=q();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));r({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,n){var r,i=[t],a=1;while(arguments.length>a)i.push(arguments[a++]);if(r=e,(d(e)||void 0!==t)&&!ot(t))return h(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ot(e))return e}),i[1]=e,K.apply(null,i)}})}q[H][V]||x(q[H],V,q[H].valueOf),F(q,G),E[J]=!0},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),a=n("1c7e"),s=!a((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:s},{from:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ade3:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},ae40:function(t,e,n){var r=n("83ab"),i=n("d039"),a=n("5135"),s=Object.defineProperty,o={},u=function(t){throw t};t.exports=function(t,e){if(a(o,t))return o[t];e||(e={});var n=[][t],c=!!a(e,"ACCESSORS")&&e.ACCESSORS,f=a(e,0)?e[0]:u,l=a(e,1)?e[1]:void 0;return o[t]=!!n&&!i((function(){if(c&&!r)return!0;var t={length:-1};c?s(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,f,l)}))}},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,a=Function.prototype,s=a.toString,o=/^\s*function ([^ (]*)/,u="name";r&&!(u in a)&&i(a,u,{configurable:!0,get:function(){try{return s.call(this).match(o)[1]}catch(t){return""}}})},b6fe:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"duel"},[n("div",{staticClass:"card player"},[n("p",[t._v("Player")]),n("p",[t._v(" "+t._s(t.player.name)+" ")])]),n("div",{staticClass:"card mob"},[n("p",[t._v("Mob")]),n("p",[t._v(" "+t._s(t.mob.name)+" ")])])])},i=[],a=(n("99af"),n("b0c0"),n("d4ec")),s=n("bee2"),o=n("ade3"),u={name:"Duel",components:{},data:function(){return{player:{},mob:{}}},created:function(){var t=function(){function t(){Object(a["a"])(this,t),Object(o["a"])(this,"name",null),Object(o["a"])(this,"armor",0)}return Object(s["a"])(t,[{key:"handleDamage",value:function(t){var e=t.damage-this.armor;e=e>=0?e:0,console.log("Receiving ".concat(e," damage from ").concat(t.name))}}],[{key:"create",value:function(e){var n=new t;return n.name=e.name,n.armor=e.armor,n}}]),t}(),e=function(){function t(){Object(a["a"])(this,t),Object(o["a"])(this,"name",null),Object(o["a"])(this,"damage",1)}return Object(s["a"])(t,[{key:"fire",value:function(t){t.handleDamage(this)}}],[{key:"create",value:function(e){var n=new t;return n.name=e.name,n.damage=e.damage,n}}]),t}(),n=t.create({name:"Adamastor",armor:1}),r=e.create({name:"Light Kinetic Gun",damage:1});r.fire(n)}},c=u,f=(n("4bb8"),n("2877")),l=Object(f["a"])(c,r,i,!1,null,"a87c21ca",null);e["default"]=l.exports},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),a=n("7b0b"),s=n("50c4"),o=n("65f0"),u=[].push,c=function(t){var e=1==t,n=2==t,c=3==t,f=4==t,l=6==t,h=7==t,d=5==t||l;return function(p,g,v,b){for(var m,y,S=a(p),w=i(S),O=r(g,v,3),j=s(w.length),_=0,k=b||o,A=e?k(p,j):n||h?k(p,0):void 0;j>_;_++)if((d||_ in w)&&(m=w[_],y=O(m,_,S),t))if(e)A[_]=y;else if(y)switch(t){case 3:return!0;case 5:return m;case 6:return _;case 2:u.call(A,m)}else switch(t){case 4:return!1;case 7:u.call(A,m)}return l?-1:c||f?f:A}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},bb51:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Bridge")],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bridge"},[n("div",{staticClass:"status"},[t._v(" j:"+t._s(t.status.jumps)+" f:"+t._s(t.status.fuel)+" hp:"+t._s(t.status.hp)+"/"+t._s(t.status.maxHp)+" g:"+t._s(t.status.guns)+" e:"+t._s(t.status.engine)+" k:"+t._s(t.status.kills)+" s:"+t._s(t.status.scrap)+" ")]),t.status.dead?n("div",{},[t._v(" "+t._s(t.status.dead.reason)+" after "+t._s(t.status.jumps)+" jumps. ")]):t._e(),t.status.dead?t._e():n("div",[n("div",[t.canJump?n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.jump(e)}}},[t._v("activate jump drive")]):t._e()]),t.area.ship?n("div",[n("p",[t._v("Ship in range")]),n("p",[t._v(t._s(t.area.ship.guns)+"g, "+t._s(t.area.ship.hp)+"hp")]),n("p",[n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.attack(e)}}},[t._v("attack")]),t.status.engaged?n("span",[t._v(" | "),n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.evade(e)}}},[t._v(" break off the attack")])]):t._e()])]):t._e()]),n("div",{staticClass:"highscores"},[t._v(" hs/ j:"+t._s(this.highscore.jumps)+" k:"+t._s(this.highscore.kills)+" ")])])},s=[],o=n("d4ec"),u=n("bee2"),c=(n("b0c0"),n("ade3")),f=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(o["a"])(this,t),Object(c["a"])(this,"name",""),Object(c["a"])(this,"type",""),Object(c["a"])(this,"model",""),Object(c["a"])(this,"guns",0),Object(c["a"])(this,"engine",0),Object(c["a"])(this,"hp",0),Object(c["a"])(this,"fuel",0),Object(c["a"])(this,"scrap",0),this.name=e.name,this.type=e.type,this.model=e.model,this.guns=e.guns,this.engine=e.engine,this.hp=e.hp,this.fuel=e.fuel,this.scrap=e.scrap},l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;Object(o["a"])(this,t),this.sides=e}return Object(u["a"])(t,[{key:"roll",value:function(){return Math.ceil(Math.random()*this.sides)}}]),t}();n("d3b7"),n("ddb0"),n("a4d3"),n("e01a"),n("d28b"),n("3ca3"),n("a630"),n("fb6a"),n("25f0");function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t,e){if(t){if("string"===typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function p(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=d(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,o=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){o=!0,a=t},f:function(){try{s||null==n["return"]||n["return"]()}finally{if(o)throw a}}}}var g=function(){function t(){Object(o["a"])(this,t),Object(c["a"])(this,"entries",[]),Object(c["a"])(this,"lotsTotal",0)}return Object(u["a"])(t,[{key:"addEntry",value:function(t){return this.entries.push(t),this.lotsTotal+=t.lots,this}},{key:"getWinner",value:function(){var t,e=new l(this.lotsTotal).roll(),n=0,r=p(this.entries);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(n+=i.lots,n>=e)return i.participant}}catch(a){r.e(a)}finally{r.f()}}}]),t}(),v={transport:{type:"transport",model:"Civilian transport",chance:50,guns:0,hp:3,drops:{fuel:3}},freighter:{type:"freighter",model:"Cargo freighter",chance:30,guns:3,hp:10,drops:{fuel:10}},gunboat:{type:"gunboat",model:"Light gunboat",chance:20,guns:10,hp:10,drops:{fuel:5,guns:1}}},b=function(){function t(){Object(o["a"])(this,t);var e=new g;for(var n in v)e.addEntry({participant:n,lots:v[n].chance});this.lottery=e,this.d6=new l(6),this.d8=new l(8),this.d20=new l(20)}return Object(u["a"])(t,[{key:"generateShips",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e=[],n=new l(t).roll()-1,r=0;r<n;r++)e.push(this.generateShip());return e}},{key:"generateShip",value:function(){return new f(v[this.lottery.getWinner()])}},{key:"generateRandomShip",value:function(){return new f({guns:this.d6.roll(),hp:this.d20.roll(),fuel:this.d8.roll(),engine:this.d6.roll(),scrap:this.d6.roll()})}}]),t}(),m={name:"Bridge",data:function(){return{status:{jumps:0,kills:0,fuel:10,hp:10,maxHp:10,guns:6,engine:6,scrap:0,engaged:!1,dead:!1},highscore:{jumps:0,kills:0},area:{ship:null}}},computed:{canJump:function(){return this.status.fuel>0&&!0!==this.status.engaged}},methods:{log:function(t){console.log(t)},jump:function(){this.status.jumps++;var t=new b;new l(6).roll()>2?this.area.ship=t.generateRandomShip():this.area.ship=null,this.burnFuel(1),this.hs("jumps")},attack:function(){this.status.engaged||this.engage(),this.playerTurn(),this.area.ship&&this.enemyTurn()},playerTurn:function(){this.log("Player turn");var t=this.area.ship.hp,e=new l(this.status.guns+1).roll()-1;this.log("Dealt ".concat(e," damage")),this.area.ship.hp=t-e,this.area.ship.hp<=0&&this.kill()},kill:function(){this.disengage(),this.status.kills++,this.addFuel(new l(this.area.ship.fuel).roll()),this.addScrap(new l(this.area.ship.scrap).roll()),this.area.ship=null,this.hs("kills")},enemyTurn:function(){this.log("Enemy turn");var t=this.status.hp,e=new l(this.area.ship.guns+1).roll()-1;this.log("Received ".concat(e," damage")),this.status.hp=t-e,this.status.hp<=0&&this.die("Blown up by an enemy vessel")},engage:function(){this.status.engaged=!0,this.log("engaging enemy")},disengage:function(){this.status.engaged=!1,this.log("disengaged")},evade:function(){new l(this.status.engine).roll()>=new l(this.area.ship.engine).roll()?this.disengage():(this.log("failed to disengage"),this.enemyTurn()),this.burnFuel(1)},burnFuel:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.status.fuel=this.status.fuel-t,this.status.fuel<=0&&this.die("Ran out of fuel")},addFuel:function(t){this.status.fuel=this.status.fuel+t,this.log("Added ".concat(t,"t of fuel"))},addScrap:function(t){this.status.scrap=this.status.scrap+t,this.log("Loaded up on ".concat(t,"t of scrap"))},die:function(t){this.status.dead={reason:t}},hs:function(t){this.status[t]>this.highscore[t]&&(this.highscore[t]=this.status[t]),window.localStorage.setItem("highscore",JSON.stringify(this.highscore))}},created:function(){var t=window.localStorage.getItem("highscore");if(t){var e=JSON.parse(t);this.highscore.jumps=e.jumps,this.highscore.kills=e.kills}}},y=m,S=(n("9649"),n("2877")),w=Object(S["a"])(y,a,s,!1,null,"5ead9c46",null),O=w.exports,j={name:"Home",components:{Bridge:O}},_=j,k=Object(S["a"])(_,r,i,!1,null,null,null);e["default"]=k.exports},bee2:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return i}))},d28b:function(t,e,n){var r=n("746f");r("iterator")},d4ec:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),a=n("e260"),s=n("9112"),o=n("b622"),u=o("iterator"),c=o("toStringTag"),f=a.values;for(var l in i){var h=r[l],d=h&&h.prototype;if(d){if(d[u]!==f)try{s(d,u,f)}catch(g){d[u]=f}if(d[c]||s(d,c,l),i[l])for(var p in a)if(d[p]!==a[p])try{s(d,p,a[p])}catch(g){d[p]=a[p]}}}},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),a=n("da84"),s=n("5135"),o=n("861d"),u=n("9bf2").f,c=n("e893"),f=a.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof h?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};c(h,f);var d=h.prototype=f.prototype;d.constructor=h;var p=d.toString,g="Symbol(test)"==String(f("test")),v=/^Symbol\((.*)\)[^)]+$/;u(d,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=p.call(t);if(s(l,t))return"";var n=g?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:h})}},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("861d"),a=n("e8b5"),s=n("23cb"),o=n("50c4"),u=n("fc6a"),c=n("8418"),f=n("b622"),l=n("1dde"),h=n("ae40"),d=l("slice"),p=h("slice",{ACCESSORS:!0,0:0,1:2}),g=f("species"),v=[].slice,b=Math.max;r({target:"Array",proto:!0,forced:!d||!p},{slice:function(t,e){var n,r,f,l=u(this),h=o(l.length),d=s(t,h),p=s(void 0===e?h:e,h);if(a(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?i(n)&&(n=n[g],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return v.call(l,d,p);for(r=new(void 0===n?Array:n)(b(p-d,0)),f=0;d<p;d++,f++)d in l&&c(r,f,l[d]);return r.length=f,r}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=about.ffd0e1ec.js.map