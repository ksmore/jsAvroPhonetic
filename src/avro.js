/*! JS Avro Phonetic v1.0 http://omicronlab.com | https://raw.github.com/torifat/jsAvroPhonetic/master/MPL-1.1.txt */
var OmicronLab={Avro:{}};
OmicronLab.Avro.Phonetic={parse:function(a){for(var a=this.fixString(a),f="",c=0;c<a.length;++c){for(var e=c,g=c+1,h=e-1,k=!1,h=0;h<this.data.patterns.length;++h){var i=this.data.patterns[h],g=c+i.f.length;if(g<=a.length&&a.substring(e,g)==i.f){for(var h=e-1,l=0;l<i.u.length;++l){for(var m=i.u[l],j=!0,d=0,n=0;n<m.m.length;++n){var b=m.m[n],d=b.t==="s"?g:h;if(b.s==="p"){if(!(d<0&&b.t==="p"||d>=a.length&&b.t==="s"||this.isPunctuation(a.charAt(d)))^
b.n){j=!1;break}}else if(b.s==="vowel"){if(!((d>=0&&b.t==="p"||d<a.length&&b.t==="s")&&this.isVowel(a.charAt(d)))^b.n){j=!1;break}}else if(b.s==="c"){if(!((d>=0&&b.t==="p"||d<a.length&&b.t==="s")&&this.isConsonant(a.charAt(d)))^b.n){j=!1;break}}else if(b.s==="e"){var o;b.t==="s"?(d=g,o=g+b.v.length):(d=e-b.v.length,o=e);if(!this.isExact(b.v,a,d,o,b.n)){j=!1;break}}}if(j){f+=m.r;c=g-1;k=!0;
break}}if(k==!0)break;f+=i.r;c=g-1;k=!0;break}}k||(f+=a.charAt(c))}return f},fixString:function(a){for(var f="",c=0;c<a.length;++c){var e=a.charAt(c);f+=this.isCaseSensitive(e)?e:e.toLowerCase()}return f},isVowel:function(a){return this.data.vowel.indexOf(a.toLowerCase())>=0},isConsonant:function(a){return this.data.c.indexOf(a.toLowerCase())>=0},isPunctuation:function(a){return!(this.isVowel(a)||this.isConsonant(a))},isExact:function(a,f,c,e,g){return(c>=0&&e<f.length&&f.substring(c,
e)===a)^g},isCaseSensitive:function(a){return this.data.casesensitive.indexOf(a.toLowerCase())>=0},data:{patterns:[{f:"bhl",r:"\u09ad\u09cd\u09b2",u:[]},{f:"psh",r:"\u09aa\u09b6",u:[]},{f:"bj",r:"\u09ac\u09cd\u099c",u:[]},{f:"bd",r:"\u09ac\u09cd\u09a6",u:[]},{f:"bb",r:"\u09ac\u09cd\u09ac",u:[]},{f:"bl",r:"\u09ac\u09cd\u09b2",u:[]},{f:"bh",r:"\u09ad",u:[]},{f:"vl",r:"\u09ad\u09cd\u09b2",u:[]},{f:"b",
r:"\u09ac",u:[]},{f:"v",r:"\u09ad",u:[]},{f:"cNG",r:"\u099a\u09cd\u099e",u:[]},{f:"cch",r:"\u099a\u09cd\u099b",u:[]},{f:"cc",r:"\u099a\u09cd\u099a",u:[]},{f:"ch",r:"\u099b",u:[]},{f:"c",r:"\u099a",u:[]},{f:"dhn",r:"\u09a7\u09cd\u09a8",u:[]},{f:"dhm",r:"\u09a7\u09cd\u09ae",u:[]},{f:"dgh",r:"\u09a6\u09cd\u0998",u:[]},{f:"ddh",r:"\u09a6\u09cd\u09a7",u:[]},{f:"dbh",
r:"\u09a6\u09cd\u09ad",u:[]},{f:"dv",r:"\u09a6\u09cd\u09ad",u:[]},{f:"dm",r:"\u09a6\u09cd\u09ae",u:[]},{f:"DD",r:"\u09a1\u09cd\u09a1",u:[]},{f:"Dh",r:"\u09a2",u:[]},{f:"dh",r:"\u09a7",u:[]},{f:"dg",r:"\u09a6\u09cd\u0997",u:[]},{f:"dd",r:"\u09a6\u09cd\u09a6",u:[]},{f:"D",r:"\u09a1",u:[]},{f:"d",r:"\u09a6",u:[]},{f:"...",r:"...",u:[]},{f:".`",r:".",u:[]},
{f:"..",r:"\u0964\u0964",u:[]},{f:".",r:"\u0964",u:[]},{f:"ghn",r:"\u0998\u09cd\u09a8",u:[]},{f:"Ghn",r:"\u0998\u09cd\u09a8",u:[]},{f:"gdh",r:"\u0997\u09cd\u09a7",u:[]},{f:"Gdh",r:"\u0997\u09cd\u09a7",u:[]},{f:"gN",r:"\u0997\u09cd\u09a3",u:[]},{f:"GN",r:"\u0997\u09cd\u09a3",u:[]},{f:"gn",r:"\u0997\u09cd\u09a8",u:[]},{f:"Gn",r:"\u0997\u09cd\u09a8",u:[]},{f:"gm",r:"\u0997\u09cd\u09ae",
u:[]},{f:"Gm",r:"\u0997\u09cd\u09ae",u:[]},{f:"gl",r:"\u0997\u09cd\u09b2",u:[]},{f:"Gl",r:"\u0997\u09cd\u09b2",u:[]},{f:"gg",r:"\u099c\u09cd\u099e",u:[]},{f:"GG",r:"\u099c\u09cd\u099e",u:[]},{f:"Gg",r:"\u099c\u09cd\u099e",u:[]},{f:"gG",r:"\u099c\u09cd\u099e",u:[]},{f:"gh",r:"\u0998",u:[]},{f:"Gh",r:"\u0998",u:[]},{f:"g",r:"\u0997",u:[]},{f:"G",r:"\u0997",u:[]},
{f:"hN",r:"\u09b9\u09cd\u09a3",u:[]},{f:"hn",r:"\u09b9\u09cd\u09a8",u:[]},{f:"hm",r:"\u09b9\u09cd\u09ae",u:[]},{f:"hl",r:"\u09b9\u09cd\u09b2",u:[]},{f:"h",r:"\u09b9",u:[]},{f:"jjh",r:"\u099c\u09cd\u099d",u:[]},{f:"jNG",r:"\u099c\u09cd\u099e",u:[]},{f:"jh",r:"\u099d",u:[]},{f:"jj",r:"\u099c\u09cd\u099c",u:[]},{f:"j",r:"\u099c",u:[]},{f:"J",r:"\u099c",u:[]},
{f:"kkhN",r:"\u0995\u09cd\u09b7\u09cd\u09a3",u:[]},{f:"kShN",r:"\u0995\u09cd\u09b7\u09cd\u09a3",u:[]},{f:"kkhm",r:"\u0995\u09cd\u09b7\u09cd\u09ae",u:[]},{f:"kShm",r:"\u0995\u09cd\u09b7\u09cd\u09ae",u:[]},{f:"kxN",r:"\u0995\u09cd\u09b7\u09cd\u09a3",u:[]},{f:"kxm",r:"\u0995\u09cd\u09b7\u09cd\u09ae",u:[]},{f:"kkh",r:"\u0995\u09cd\u09b7",u:[]},{f:"kSh",r:"\u0995\u09cd\u09b7",u:[]},{f:"ksh",r:"\u0995\u09b6",
u:[]},{f:"kx",r:"\u0995\u09cd\u09b7",u:[]},{f:"kk",r:"\u0995\u09cd\u0995",u:[]},{f:"kT",r:"\u0995\u09cd\u099f",u:[]},{f:"kt",r:"\u0995\u09cd\u09a4",u:[]},{f:"kl",r:"\u0995\u09cd\u09b2",u:[]},{f:"ks",r:"\u0995\u09cd\u09b8",u:[]},{f:"kh",r:"\u0996",u:[]},{f:"k",r:"\u0995",u:[]},{f:"lbh",r:"\u09b2\u09cd\u09ad",u:[]},{f:"ldh",r:"\u09b2\u09cd\u09a7",u:[]},{f:"lkh",r:"\u09b2\u0996",
u:[]},{f:"lgh",r:"\u09b2\u0998",u:[]},{f:"lph",r:"\u09b2\u09ab",u:[]},{f:"lk",r:"\u09b2\u09cd\u0995",u:[]},{f:"lg",r:"\u09b2\u09cd\u0997",u:[]},{f:"lT",r:"\u09b2\u09cd\u099f",u:[]},{f:"lD",r:"\u09b2\u09cd\u09a1",u:[]},{f:"lp",r:"\u09b2\u09cd\u09aa",u:[]},{f:"lv",r:"\u09b2\u09cd\u09ad",u:[]},{f:"lm",r:"\u09b2\u09cd\u09ae",u:[]},{f:"ll",r:"\u09b2\u09cd\u09b2",u:[]},{f:"lb",
r:"\u09b2\u09cd\u09ac",u:[]},{f:"l",r:"\u09b2",u:[]},{f:"mth",r:"\u09ae\u09cd\u09a5",u:[]},{f:"mph",r:"\u09ae\u09cd\u09ab",u:[]},{f:"mbh",r:"\u09ae\u09cd\u09ad",u:[]},{f:"mpl",r:"\u09ae\u09aa\u09cd\u09b2",u:[]},{f:"mn",r:"\u09ae\u09cd\u09a8",u:[]},{f:"mp",r:"\u09ae\u09cd\u09aa",u:[]},{f:"mv",r:"\u09ae\u09cd\u09ad",u:[]},{f:"mm",r:"\u09ae\u09cd\u09ae",u:[]},{f:"ml",r:"\u09ae\u09cd\u09b2",
u:[]},{f:"mb",r:"\u09ae\u09cd\u09ac",u:[]},{f:"mf",r:"\u09ae\u09cd\u09ab",u:[]},{f:"m",r:"\u09ae",u:[]},{f:"0",r:"\u09e6",u:[]},{f:"1",r:"\u09e7",u:[]},{f:"2",r:"\u09e8",u:[]},{f:"3",r:"\u09e9",u:[]},{f:"4",r:"\u09ea",u:[]},{f:"5",r:"\u09eb",u:[]},{f:"6",r:"\u09ec",u:[]},{f:"7",r:"\u09ed",u:[]},{f:"8",r:"\u09ee",u:[]},{f:"9",r:"\u09ef",
u:[]},{f:"NgkSh",r:"\u0999\u09cd\u0995\u09cd\u09b7",u:[]},{f:"Ngkkh",r:"\u0999\u09cd\u0995\u09cd\u09b7",u:[]},{f:"NGch",r:"\u099e\u09cd\u099b",u:[]},{f:"Nggh",r:"\u0999\u09cd\u0998",u:[]},{f:"Ngkh",r:"\u0999\u09cd\u0996",u:[]},{f:"NGjh",r:"\u099e\u09cd\u099d",u:[]},{f:"ngOU",r:"\u0999\u09cd\u0997\u09cc",u:[]},{f:"ngOI",r:"\u0999\u09cd\u0997\u09c8",u:[]},{f:"Ngkx",r:"\u0999\u09cd\u0995\u09cd\u09b7",
u:[]},{f:"NGc",r:"\u099e\u09cd\u099a",u:[]},{f:"nch",r:"\u099e\u09cd\u099b",u:[]},{f:"njh",r:"\u099e\u09cd\u099d",u:[]},{f:"ngh",r:"\u0999\u09cd\u0998",u:[]},{f:"Ngk",r:"\u0999\u09cd\u0995",u:[]},{f:"Ngx",r:"\u0999\u09cd\u09b7",u:[]},{f:"Ngg",r:"\u0999\u09cd\u0997",u:[]},{f:"Ngm",r:"\u0999\u09cd\u09ae",u:[]},{f:"NGj",r:"\u099e\u09cd\u099c",u:[]},{f:"ndh",r:"\u09a8\u09cd\u09a7",
u:[]},{f:"nTh",r:"\u09a8\u09cd\u09a0",u:[]},{f:"NTh",r:"\u09a3\u09cd\u09a0",u:[]},{f:"nth",r:"\u09a8\u09cd\u09a5",u:[]},{f:"nkh",r:"\u0999\u09cd\u0996",u:[]},{f:"ngo",r:"\u0999\u09cd\u0997",u:[]},{f:"nga",r:"\u0999\u09cd\u0997\u09be",u:[]},{f:"ngi",r:"\u0999\u09cd\u0997\u09bf",u:[]},{f:"ngI",r:"\u0999\u09cd\u0997\u09c0",u:[]},{f:"ngu",r:"\u0999\u09cd\u0997\u09c1",u:[]},{f:"ngU",
r:"\u0999\u09cd\u0997\u09c2",u:[]},{f:"nge",r:"\u0999\u09cd\u0997\u09c7",u:[]},{f:"ngO",r:"\u0999\u09cd\u0997\u09cb",u:[]},{f:"NDh",r:"\u09a3\u09cd\u09a2",u:[]},{f:"nsh",r:"\u09a8\u09b6",u:[]},{f:"Ngr",r:"\u0999\u09b0",u:[]},{f:"NGr",r:"\u099e\u09b0",u:[]},{f:"ngr",r:"\u0982\u09b0",u:[]},{f:"nj",r:"\u099e\u09cd\u099c",u:[]},{f:"Ng",r:"\u0999",u:[]},{f:"NG",r:"\u099e",
u:[]},{f:"nk",r:"\u0999\u09cd\u0995",u:[]},{f:"ng",r:"\u0982",u:[]},{f:"nn",r:"\u09a8\u09cd\u09a8",u:[]},{f:"NN",r:"\u09a3\u09cd\u09a3",u:[]},{f:"Nn",r:"\u09a3\u09cd\u09a8",u:[]},{f:"nm",r:"\u09a8\u09cd\u09ae",u:[]},{f:"Nm",r:"\u09a3\u09cd\u09ae",u:[]},{f:"nd",r:"\u09a8\u09cd\u09a6",u:[]},{f:"nT",r:"\u09a8\u09cd\u099f",u:[]},{f:"NT",r:"\u09a3\u09cd\u099f",u:[]},{f:"nD",
r:"\u09a8\u09cd\u09a1",u:[]},{f:"ND",r:"\u09a3\u09cd\u09a1",u:[]},{f:"nt",r:"\u09a8\u09cd\u09a4",u:[]},{f:"ns",r:"\u09a8\u09cd\u09b8",u:[]},{f:"nc",r:"\u099e\u09cd\u099a",u:[]},{f:"n",r:"\u09a8",u:[]},{f:"N",r:"\u09a3",u:[]},{f:"OI`",r:"\u09c8",u:[]},{f:"OU`",r:"\u09cc",u:[]},{f:"O`",r:"\u09cb",u:[]},{f:"OI",r:"\u09c8",u:[{m:[{t:"p",s:"c",
v:"",n:!0}],r:"\u0990"},{m:[{t:"p",s:"p",v:"",n:!1}],r:"\u0990"}]},{f:"OU",r:"\u09cc",u:[{m:[{t:"p",s:"c",v:"",n:!0}],r:"\u0994"},{m:[{t:"p",s:"p",v:"",n:!1}],r:"\u0994"}]},{f:"O",r:"\u09cb",u:[{m:[{t:"p",s:"c",v:"",n:!0}],r:"\u0993"},{m:[{t:"p",s:"p",v:"",
n:!1}],r:"\u0993"}]},{f:"phl",r:"\u09ab\u09cd\u09b2",u:[]},{f:"pT",r:"\u09aa\u09cd\u099f",u:[]},{f:"pt",r:"\u09aa\u09cd\u09a4",u:[]},{f:"pn",r:"\u09aa\u09cd\u09a8",u:[]},{f:"pp",r:"\u09aa\u09cd\u09aa",u:[]},{f:"pl",r:"\u09aa\u09cd\u09b2",u:[]},{f:"ps",r:"\u09aa\u09cd\u09b8",u:[]},{f:"ph",r:"\u09ab",u:[]},{f:"fl",r:"\u09ab\u09cd\u09b2",u:[]},{f:"f",r:"\u09ab",u:[]},
{f:"p",r:"\u09aa",u:[]},{f:"rri`",r:"\u09c3",u:[]},{f:"rri",r:"\u09c3",u:[{m:[{t:"p",s:"c",v:"",n:!0}],r:"\u098b"},{m:[{t:"p",s:"p",v:"",n:!1}],r:"\u098b"}]},{f:"rrZ",r:"\u09b0\u09b0\u200d\u09cd\u09af",u:[]},{f:"rry",r:"\u09b0\u09b0\u200d\u09cd\u09af",u:[]},{f:"rZ",r:"\u09b0\u200d\u09cd\u09af",u:[{m:[{t:"p",s:"c",
v:"",n:!1},{t:"p",s:"e",v:"r",n:!0},{t:"p",s:"e",v:"y",n:!0},{t:"p",s:"e",v:"w",n:!0},{t:"p",s:"e",v:"x",n:!0}],r:"\u09cd\u09b0\u09cd\u09af"}]},{f:"ry",r:"\u09b0\u200d\u09cd\u09af",u:[{m:[{t:"p",s:"c",v:"",n:!1},{t:"p",s:"e",v:"r",n:!0},{t:"p",s:"e",v:"y",n:!0},{t:"p",
s:"e",v:"w",n:!0},{t:"p",s:"e",v:"x",n:!0}],r:"\u09cd\u09b0\u09cd\u09af"}]},{f:"rr",r:"\u09b0\u09b0",u:[{m:[{t:"p",s:"c",v:"",n:!0},{t:"s",s:"vowel",v:"",n:!0},{t:"s",s:"e",v:"r",n:!0},{t:"s",s:"p",v:"",n:!0}],r:"\u09b0\u09cd"},{m:[{t:"p",s:"c",v:"",n:!1},{t:"p",s:"e",
v:"r",n:!0}],r:"\u09cd\u09b0\u09b0"}]},{f:"Rg",r:"\u09a1\u09bc\u09cd\u0997",u:[]},{f:"Rh",r:"\u09a2\u09bc",u:[]},{f:"R",r:"\u09a1\u09bc",u:[]},{f:"r",r:"\u09b0",u:[{m:[{t:"p",s:"c",v:"",n:!1},{t:"p",s:"e",v:"r",n:!0},{t:"p",s:"e",v:"y",n:!0},{t:"p",s:"e",v:"w",n:!0},{t:"p",s:"e",v:"x",n:!0},
{t:"p",s:"e",v:"Z",n:!0}],r:"\u09cd\u09b0"}]},{f:"shch",r:"\u09b6\u09cd\u099b",u:[]},{f:"ShTh",r:"\u09b7\u09cd\u09a0",u:[]},{f:"Shph",r:"\u09b7\u09cd\u09ab",u:[]},{f:"Sch",r:"\u09b6\u09cd\u099b",u:[]},{f:"skl",r:"\u09b8\u09cd\u0995\u09cd\u09b2",u:[]},{f:"skh",r:"\u09b8\u09cd\u0996",u:[]},{f:"sth",r:"\u09b8\u09cd\u09a5",u:[]},{f:"sph",r:"\u09b8\u09cd\u09ab",u:[]},
{f:"shc",r:"\u09b6\u09cd\u099a",u:[]},{f:"sht",r:"\u09b6\u09cd\u09a4",u:[]},{f:"shn",r:"\u09b6\u09cd\u09a8",u:[]},{f:"shm",r:"\u09b6\u09cd\u09ae",u:[]},{f:"shl",r:"\u09b6\u09cd\u09b2",u:[]},{f:"Shk",r:"\u09b7\u09cd\u0995",u:[]},{f:"ShT",r:"\u09b7\u09cd\u099f",u:[]},{f:"ShN",r:"\u09b7\u09cd\u09a3",u:[]},{f:"Shp",r:"\u09b7\u09cd\u09aa",u:[]},{f:"Shf",r:"\u09b7\u09cd\u09ab",u:[]},
{f:"Shm",r:"\u09b7\u09cd\u09ae",u:[]},{f:"spl",r:"\u09b8\u09cd\u09aa\u09cd\u09b2",u:[]},{f:"sk",r:"\u09b8\u09cd\u0995",u:[]},{f:"Sc",r:"\u09b6\u09cd\u099a",u:[]},{f:"sT",r:"\u09b8\u09cd\u099f",u:[]},{f:"st",r:"\u09b8\u09cd\u09a4",u:[]},{f:"sn",r:"\u09b8\u09cd\u09a8",u:[]},{f:"sp",r:"\u09b8\u09cd\u09aa",u:[]},{f:"sf",r:"\u09b8\u09cd\u09ab",u:[]},{f:"sm",r:"\u09b8\u09cd\u09ae",
u:[]},{f:"sl",r:"\u09b8\u09cd\u09b2",u:[]},{f:"sh",r:"\u09b6",u:[]},{f:"Sc",r:"\u09b6\u09cd\u099a",u:[]},{f:"St",r:"\u09b6\u09cd\u09a4",u:[]},{f:"Sn",r:"\u09b6\u09cd\u09a8",u:[]},{f:"Sm",r:"\u09b6\u09cd\u09ae",u:[]},{f:"Sl",r:"\u09b6\u09cd\u09b2",u:[]},{f:"Sh",r:"\u09b7",u:[]},{f:"s",r:"\u09b8",u:[]},{f:"S",r:"\u09b6",u:[]},{f:"oo`",r:"\u09c1",u:[]},{f:"oo",
r:"\u09c1",u:[{m:[{t:"p",s:"c",v:"",n:!0},{t:"s",s:"e",v:"`",n:!0}],r:"\u0989"},{m:[{t:"p",s:"p",v:"",n:!1},{t:"s",s:"e",v:"`",n:!0}],r:"\u0989"}]},{f:"o`",r:"",u:[]},{f:"oZ",r:"\u0985\u09cd\u09af",u:[]},{f:"o",r:"",u:[{m:[{t:"p",s:"vowel",v:"",n:!1},{t:"p",s:"e",v:"o",
n:!0}],r:"\u0993"},{m:[{t:"p",s:"vowel",v:"",n:!1},{t:"p",s:"e",v:"o",n:!1}],r:"\u0985"},{m:[{t:"p",s:"p",v:"",n:!1}],r:"\u0985"}]},{f:"tth",r:"\u09a4\u09cd\u09a5",u:[]},{f:"t``",r:"\u09ce",u:[]},{f:"TT",r:"\u099f\u09cd\u099f",u:[]},{f:"Tm",r:"\u099f\u09cd\u09ae",u:[]},{f:"Th",r:"\u09a0",u:[]},{f:"tn",r:"\u09a4\u09cd\u09a8",
u:[]},{f:"tm",r:"\u09a4\u09cd\u09ae",u:[]},{f:"th",r:"\u09a5",u:[]},{f:"tt",r:"\u09a4\u09cd\u09a4",u:[]},{f:"T",r:"\u099f",u:[]},{f:"t",r:"\u09a4",u:[]},{f:"aZ",r:"\u0985\u09cd\u09af\u09be",u:[]},{f:"AZ",r:"\u0985\u09cd\u09af\u09be",u:[]},{f:"a`",r:"\u09be",u:[]},{f:"A`",r:"\u09be",u:[]},{f:"a",r:"\u09be",u:[{m:[{t:"p",s:"p",v:"",n:!1},
{t:"s",s:"e",v:"`",n:!0}],r:"\u0986"},{m:[{t:"p",s:"c",v:"",n:!0},{t:"p",s:"e",v:"a",n:!0},{t:"s",s:"e",v:"`",n:!0}],r:"\u09af\u09bc\u09be"},{m:[{t:"p",s:"e",v:"a",n:!1},{t:"s",s:"e",v:"`",n:!0}],r:"\u0986"}]},{f:"i`",r:"\u09bf",u:[]},{f:"i",r:"\u09bf",u:[{m:[{t:"p",
s:"c",v:"",n:!0},{t:"s",s:"e",v:"`",n:!0}],r:"\u0987"},{m:[{t:"p",s:"p",v:"",n:!1},{t:"s",s:"e",v:"`",n:!0}],r:"\u0987"}]},{f:"I`",r:"\u09c0",u:[]},{f:"I",r:"\u09c0",u:[{m:[{t:"p",s:"c",v:"",n:!0},{t:"s",s:"e",v:"`",n:!0}],r:"\u0988"},{m:[{t:"p",s:"p",
v:"",n:!1},{t:"s",s:"e",v:"`",n:!0}],r:"\u0988"}]},{f:"u`",r:"\u09c1",u:[]},{f:"u",r:"\u09c1",u:[{m:[{t:"p",s:"c",v:"",n:!0},{t:"s",s:"e",v:"`",n:!0}],r:"\u0989"},{m:[{t:"p",s:"p",v:"",n:!1},{t:"s",s:"e",v:"`",n:!0}],r:"\u0989"}]},{f:"U`",r:"\u09c2",u:[]},{f:"U",r:"\u09c2",
u:[{m:[{t:"p",s:"c",v:"",n:!0},{t:"s",s:"e",v:"`",n:!0}],r:"\u098a"},{m:[{t:"p",s:"p",v:"",n:!1},{t:"s",s:"e",v:"`",n:!0}],r:"\u098a"}]},{f:"ee`",r:"\u09c0",u:[]},{f:"ee",r:"\u09c0",u:[{m:[{t:"p",s:"c",v:"",n:!0},{t:"s",s:"e",v:"`",n:!0}],r:"\u0988"},{m:[{t:"p",
s:"p",v:"",n:!1},{t:"s",s:"e",v:"`",n:!0}],r:"\u0988"}]},{f:"e`",r:"\u09c7",u:[]},{f:"e",r:"\u09c7",u:[{m:[{t:"p",s:"c",v:"",n:!0},{t:"s",s:"e",v:"`",n:!0}],r:"\u098f"},{m:[{t:"p",s:"p",v:"",n:!1},{t:"s",s:"e",v:"`",n:!0}],r:"\u098f"}]},{f:"z",r:"\u09af",u:[]},{f:"Z",
r:"\u09cd\u09af",u:[]},{f:"y",r:"\u09cd\u09af",u:[{m:[{t:"p",s:"c",v:"",n:!0},{t:"p",s:"p",v:"",n:!0}],r:"\u09af\u09bc"},{m:[{t:"p",s:"p",v:"",n:!1}],r:"\u0987\u09af\u09bc"}]},{f:"Y",r:"\u09af\u09bc",u:[]},{f:"q",r:"\u0995",u:[]},{f:"w",r:"\u0993",u:[{m:[{t:"p",s:"p",v:"",n:!1},
{t:"s",s:"vowel",v:"",n:!1}],r:"\u0993\u09af\u09bc"},{m:[{t:"p",s:"c",v:"",n:!1}],r:"\u09cd\u09ac"}]},{f:"x",r:"\u0995\u09cd\u09b8",u:[{m:[{t:"p",s:"p",v:"",n:!1}],r:"\u098f\u0995\u09cd\u09b8"}]},{f:":`",r:":",u:[]},{f:":",r:"\u0983",u:[]},{f:"^`",r:"^",u:[]},{f:"^",r:"\u0981",u:[]},{f:",,",r:"\u09cd\u200c",u:[]},
{f:",",r:",",u:[]},{f:"$",r:"\u09f3",u:[]},{f:"`",r:"",u:[]}],vowel:"aeiou",c:"bcdfghjklmnpqrstvwxyz",casesensitive:"oiudgjnrstyz"}};
(function(e){var b={last:null,opt:{bn:!0},init:function(a){a&&e.extend(b.opt,a);return this.each(function(){e(this).bind("keypress.avro",b.keypress)})},destroy:function(){return this.each(function(){e(this).unbind(".avro")})},keypress:function(a){var c=a.keyCode||a.which||a.charCode,d=a.currentTarget||a.target||a.srcElement;if(a.ctrlKey===!0&&c===13)b.opt.bn=!b.opt.bn,a.preventDefault();if(b.opt.bn){if(b.last===null)b.last=b.getCaret(d);if(c===32||c===13)b.replace(d),b.last=null}},replace:function(a){var c=
b.getCaret(a),d=OmicronLab.Avro.Phonetic.parse(a.value.substring(b.last,c));document.selection?(a=document.selection.createRange(),a.moveStart("character",-1*Math.abs(c-b.last)),a.text=d,a.collapse(!0)):(a.value=a.value.substring(0,b.last)+d+a.value.substring(c),a.selectionStart=a.selectionEnd=c-(Math.abs(c-b.last)-d.length))},getCaret:function(a){if(a.selectionStart)return a.selectionStart;else if(document.selection){a.focus();var b=document.selection.createRange();if(b==null)return 0;var a=a.createTextRange(),
d=a.duplicate();a.moveToBookmark(b.getBookmark());d.setEndPoint("EndToStart",a);return d.text.length}return 0}};e.fn.avro=function(a){if(b[a])return b[a].apply(this,Array.prototype.slice.call(arguments,1));else if(typeof a==="object"||!a)return b.init.apply(this,arguments);else e.error("Method "+a+" does not exist on jQuery.avro")}})(jQuery);