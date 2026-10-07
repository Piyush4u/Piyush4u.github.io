var wh="170";var Np=0,Lu=1,Op=2;var rd=1,Th=2,Mi=3,kn=0,Xt=1,zt=2,tn=0,or=1,hi=2,Uu=3,Nu=4,Ah=5,Bn=100,Fp=101,Bp=102,zp=103,kp=104,Tr=200,Hp=201,Gp=202,Vp=203,ol=204,al=205,Ja=206,Wp=207,Qa=208,Xp=209,qp=210,Yp=211,jp=212,Zp=213,Kp=214,cl=0,ll=1,hl=2,hr=3,ul=4,fl=5,dl=6,pl=7,od=0,Jp=1,Qp=2,ji=0,Rh=1,Ch=2,Ph=3,bo=4,$p=5,Ih=6,Dh=7,Ou="attached",em="detached",ad=300,ur=301,fr=302,ml=303,gl=304,$a=306,sn=1e3,Dn=1001,ao=1002,nn=1003,Lh=1004;var ir=1005;var Wt=1006,eo=1007;var ei=1008;var ti=1009,cd=1010,ld=1011,co=1012,Uh=1013,ws=1014,Mn=1015,Zt=1016,Nh=1017,Oh=1018,Zi=1020,hd=35902,ud=1021,fd=1022,bn=1023,dd=1024,pd=1025,ar=1026,Ki=1027,yo=1028,Fh=1029,md=1030,Bh=1031;var zh=1033,va=33776,ba=33777,ya=33778,_a=33779,xl=35840,vl=35841,bl=35842,yl=35843,_l=36196,Ml=37492,Sl=37496,El=37808,wl=37809,Tl=37810,Al=37811,Rl=37812,Cl=37813,Pl=37814,Il=37815,Dl=37816,Ll=37817,Ul=37818,Nl=37819,Ol=37820,Fl=37821,Ma=36492,Bl=36494,zl=36495,gd=36283,kl=36284,Hl=36285,Gl=36286;var dr=2300,pr=2301,Ec=2302,Fu=2400,Bu=2401,zu=2402,tm=2500;var xd=0,ec=1,_o=2,nm=3200,Mo=3201;var kh=0,im=1,li="",Nt="srgb",cn="srgb-linear",tc="linear",Rt="srgb";var Bs=7680;var ku=519,sm=512,rm=513,om=514,vd=515,am=516,cm=517,lm=518,hm=519,Vl=35044;var Hu="300 es",Ei=2e3,Sa=2001,Ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gu=1234567,to=Math.PI/180,mr=180/Math.PI;function zn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function en(i,e,t){return Math.max(e,Math.min(t,i))}function Hh(i,e){return(i%e+e)%e}function um(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function fm(i,e,t){return i!==e?(t-i)/(e-i):0}function no(i,e,t){return(1-t)*i+t*e}function dm(i,e,t,n){return no(i,e,1-Math.exp(-t*n))}function pm(i,e=1){return e-Math.abs(Hh(i,e*2)-e)}function mm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function gm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function xm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function vm(i,e){return i+Math.random()*(e-i)}function bm(i){return i*(.5-Math.random())}function ym(i){i!==void 0&&(Gu=i);let e=Gu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _m(i){return i*to}function Mm(i){return i*mr}function Sm(i){return(i&i-1)===0&&i!==0}function Em(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tm(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*x,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*x,a*l);break;case"ZYZ":i.set(c*x,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var fs={DEG2RAD:to,RAD2DEG:mr,generateUUID:zn,clamp:en,euclideanModulo:Hh,mapLinear:um,inverseLerp:fm,lerp:no,damp:dm,pingpong:pm,smoothstep:mm,smootherstep:gm,randInt:xm,randFloat:vm,randFloatSpread:bm,seededRandom:ym,degToRad:_m,radToDeg:Mm,isPowerOfTwo:Sm,ceilPowerOfTwo:Em,floorPowerOfTwo:wm,setQuaternionFromProperEuler:Tm,normalize:It,denormalize:$n},be=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ot=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],v=s[0],g=s[3],m=s[6],E=s[1],M=s[4],b=s[7],I=s[2],T=s[5],A=s[8];return r[0]=o*v+a*E+c*I,r[3]=o*g+a*M+c*T,r[6]=o*m+a*b+c*A,r[1]=l*v+h*E+u*I,r[4]=l*g+h*M+u*T,r[7]=l*m+h*b+u*A,r[2]=f*v+d*E+x*I,r[5]=f*g+d*M+x*T,r[8]=f*m+d*b+x*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,x=t*u+n*f+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=f*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wc.makeScale(e,t)),this}rotate(e){return this.premultiply(wc.makeRotation(-e)),this}translate(e,t){return this.premultiply(wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},wc=new ot;function bd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Am(){let i=lo("canvas");return i.style.display="block",i}var Vu={};function Qr(i){i in Vu||(Vu[i]=!0,console.warn(i))}function Rm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Cm(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Pm(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var pt={enabled:!0,workingColorSpace:cn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Rt&&(i.r=wi(i.r),i.g=wi(i.g),i.b=wi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Rt&&(i.r=cr(i.r),i.g=cr(i.g),i.b=cr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===li?tc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Wu=[.64,.33,.3,.6,.15,.06],Xu=[.2126,.7152,.0722],qu=[.3127,.329],Yu=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ju=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pt.define({[cn]:{primaries:Wu,whitePoint:qu,transfer:tc,toXYZ:Yu,fromXYZ:ju,luminanceCoefficients:Xu,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:Wu,whitePoint:qu,transfer:Rt,toXYZ:Yu,fromXYZ:ju,luminanceCoefficients:Xu,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}});var zs,Wl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zs===void 0&&(zs=lo("canvas")),zs.width=e.width,zs.height=e.height;let n=zs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=lo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Im=0,Ea=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Tc(s[o].image)):r.push(Tc(s[o]))}else r=Tc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Tc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Dm=0,Jt=class i extends Ji{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Dn,s=Dn,r=Wt,o=ei,a=bn,c=ti,l=i.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=zn(),this.name="",this.source=new Ea(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sn:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sn:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=ad;Jt.DEFAULT_ANISOTROPY=1;var yt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],x=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(x+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,b=(d+1)/2,I=(m+1)/2,T=(h+f)/4,A=(u+v)/4,w=(x+g)/4;return M>b&&M>I?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=A/n):b>I?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=w/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=A/r,s=w/r),this.set(n,s,r,t),this}let E=Math.sqrt((g-x)*(g-x)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(g-x)/E,this.y=(u-v)/E,this.z=(f-h)/E,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xl=class extends Ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Jt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ea(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends Xl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},wa=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ql=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ot=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],x=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=x,e[t+3]=v;return}if(u!==v||c!==f||l!==d||h!==x){let g=1-a,m=c*f+l*d+h*x+u*v,E=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let I=Math.sqrt(M),T=Math.atan2(I,m*E);g=Math.sin(g*T)/I,a=Math.sin(a*T)/I}let b=a*E;if(c=c*g+f*b,l=l*g+d*b,h=h*g+x*b,u=u*g+v*b,g===1-a){let I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],x=r[o+3];return e[t]=a*x+h*u+c*d-l*f,e[t+1]=c*x+h*f+l*u-a*d,e[t+2]=l*x+h*d+a*f-c*u,e[t+3]=h*x-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u+f*d*x;break;case"YZX":this._x=f*h*u+l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u-f*d*x;break;case"XZY":this._x=f*h*u-l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u+f*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ac.copy(this).projectOnVector(e),this.sub(Ac)}reflect(e){return this.sub(Ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ac=new D,Zu=new Ot,mn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zo.copy(n.boundingBox)),zo.applyMatrix4(e.matrixWorld),this.union(zo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),ko.subVectors(this.max,Hr),ks.subVectors(e.a,Hr),Hs.subVectors(e.b,Hr),Gs.subVectors(e.c,Hr),ki.subVectors(Hs,ks),Hi.subVectors(Gs,Hs),xs.subVectors(ks,Gs);let t=[0,-ki.z,ki.y,0,-Hi.z,Hi.y,0,-xs.z,xs.y,ki.z,0,-ki.x,Hi.z,0,-Hi.x,xs.z,0,-xs.x,-ki.y,ki.x,0,-Hi.y,Hi.x,0,-xs.y,xs.x,0];return!Rc(t,ks,Hs,Gs,ko)||(t=[1,0,0,0,1,0,0,0,1],!Rc(t,ks,Hs,Gs,ko))?!1:(Ho.crossVectors(ki,Hi),t=[Ho.x,Ho.y,Ho.z],Rc(t,ks,Hs,Gs,ko))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},gi=[new D,new D,new D,new D,new D,new D,new D,new D],Zn=new D,zo=new mn,ks=new D,Hs=new D,Gs=new D,ki=new D,Hi=new D,xs=new D,Hr=new D,ko=new D,Ho=new D,vs=new D;function Rc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){vs.fromArray(i,r);let a=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),c=e.dot(vs),l=t.dot(vs),h=n.dot(vs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Lm=new mn,Gr=new D,Cc=new D,Ln=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Lm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);let t=Gr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Gr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(Cc)),this.expandByPoint(Gr.copy(e.center).sub(Cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},xi=new D,Pc=new D,Go=new D,Gi=new D,Ic=new D,Vo=new D,Dc=new D,gr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Pc.copy(e).add(t).multiplyScalar(.5),Go.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(Pc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Go),a=Gi.dot(this.direction),c=-Gi.dot(Go),l=Gi.lengthSq(),h=Math.abs(1-o*o),u,f,d,x;if(h>0)if(u=o*c-a,f=o*a-c,x=r*h,u>=0)if(f>=-x)if(f<=x){let v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=x?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Pc).addScaledVector(Go,f),d}intersectSphere(e,t){xi.subVectors(e.center,this.origin);let n=xi.dot(this.direction),s=xi.dot(xi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,s,r){Ic.subVectors(t,e),Vo.subVectors(n,e),Dc.crossVectors(Ic,Vo);let o=this.direction.dot(Dc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);let c=a*this.direction.dot(Vo.crossVectors(Gi,Vo));if(c<0)return null;let l=a*this.direction.dot(Ic.cross(Gi));if(l<0||c+l>o)return null;let h=-a*Gi.dot(Dc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ze=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,f,d,x,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,d,x,v,g)}set(e,t,n,s,r,o,a,c,l,h,u,f,d,x,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=x,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Vs.setFromMatrixColumn(e,0).length(),r=1/Vs.setFromMatrixColumn(e,1).length(),o=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,x=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+x*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=x+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,x=l*h,v=l*u;t[0]=f+v*a,t[4]=x*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-x,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,x=l*h,v=l*u;t[0]=f-v*a,t[4]=-o*u,t[8]=x+d*a,t[1]=d+x*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,x=a*h,v=a*u;t[0]=c*h,t[4]=x*l-d,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=d*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,x=a*c,v=a*l;t[0]=c*h,t[4]=v-f*u,t[8]=x*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+x,t[10]=f-v*u}else if(e.order==="XZY"){let f=o*c,d=o*l,x=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=o*h,t[9]=d*u-x,t[2]=x*u-d,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Um,e,Nm)}lookAt(e,t,n){let s=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Vi.crossVectors(n,Pn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Vi.crossVectors(n,Pn)),Vi.normalize(),Wo.crossVectors(Pn,Vi),s[0]=Vi.x,s[4]=Wo.x,s[8]=Pn.x,s[1]=Vi.y,s[5]=Wo.y,s[9]=Pn.y,s[2]=Vi.z,s[6]=Wo.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],v=n[6],g=n[10],m=n[14],E=n[3],M=n[7],b=n[11],I=n[15],T=s[0],A=s[4],w=s[8],S=s[12],_=s[1],R=s[5],B=s[9],W=s[13],X=s[2],Q=s[6],N=s[10],K=s[14],k=s[3],Z=s[7],le=s[11],$=s[15];return r[0]=o*T+a*_+c*X+l*k,r[4]=o*A+a*R+c*Q+l*Z,r[8]=o*w+a*B+c*N+l*le,r[12]=o*S+a*W+c*K+l*$,r[1]=h*T+u*_+f*X+d*k,r[5]=h*A+u*R+f*Q+d*Z,r[9]=h*w+u*B+f*N+d*le,r[13]=h*S+u*W+f*K+d*$,r[2]=x*T+v*_+g*X+m*k,r[6]=x*A+v*R+g*Q+m*Z,r[10]=x*w+v*B+g*N+m*le,r[14]=x*S+v*W+g*K+m*$,r[3]=E*T+M*_+b*X+I*k,r[7]=E*A+M*R+b*Q+I*Z,r[11]=E*w+M*B+b*N+I*le,r[15]=E*S+M*W+b*K+I*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],x=e[3],v=e[7],g=e[11],m=e[15];return x*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+v*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+g*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+m*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],x=e[12],v=e[13],g=e[14],m=e[15],E=u*g*l-v*f*l+v*c*d-a*g*d-u*c*m+a*f*m,M=x*f*l-h*g*l-x*c*d+o*g*d+h*c*m-o*f*m,b=h*v*l-x*u*l+x*a*d-o*v*d-h*a*m+o*u*m,I=x*u*c-h*v*c-x*a*f+o*v*f+h*a*g-o*u*g,T=t*E+n*M+s*b+r*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=E*A,e[1]=(v*f*r-u*g*r-v*s*d+n*g*d+u*s*m-n*f*m)*A,e[2]=(a*g*r-v*c*r+v*s*l-n*g*l-a*s*m+n*c*m)*A,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*A,e[4]=M*A,e[5]=(h*g*r-x*f*r+x*s*d-t*g*d-h*s*m+t*f*m)*A,e[6]=(x*c*r-o*g*r-x*s*l+t*g*l+o*s*m-t*c*m)*A,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*A,e[8]=b*A,e[9]=(x*u*r-h*v*r-x*n*d+t*v*d+h*n*m-t*u*m)*A,e[10]=(o*v*r-x*a*r+x*n*l-t*v*l-o*n*m+t*a*m)*A,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*A,e[12]=I*A,e[13]=(h*v*s-x*u*s+x*n*f-t*v*f-h*n*g+t*u*g)*A,e[14]=(x*a*s-o*v*s-x*n*c+t*v*c+o*n*g-t*a*g)*A,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,x=r*u,v=o*h,g=o*u,m=a*u,E=c*l,M=c*h,b=c*u,I=n.x,T=n.y,A=n.z;return s[0]=(1-(v+m))*I,s[1]=(d+b)*I,s[2]=(x-M)*I,s[3]=0,s[4]=(d-b)*T,s[5]=(1-(f+m))*T,s[6]=(g+E)*T,s[7]=0,s[8]=(x+M)*A,s[9]=(g-E)*A,s[10]=(1-(f+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Vs.set(s[0],s[1],s[2]).length(),o=Vs.set(s[4],s[5],s[6]).length(),a=Vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kn.copy(this);let l=1/r,h=1/o,u=1/a;return Kn.elements[0]*=l,Kn.elements[1]*=l,Kn.elements[2]*=l,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=u,Kn.elements[9]*=u,Kn.elements[10]*=u,t.setFromRotationMatrix(Kn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ei){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),d,x;if(a===Ei)d=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Sa)d=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ei){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*l,d=(n+s)*h,x,v;if(a===Ei)x=(o+r)*u,v=-2*u;else if(a===Sa)x=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Vs=new D,Kn=new Ze,Um=new D(0,0,0),Nm=new D(1,1,1),Vi=new D,Wo=new D,Pn=new D,Ku=new Ze,Ju=new Ot,Hn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(en(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ku,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";var Ta=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Om=0,Qu=new D,Ws=new Ot,vi=new Ze,Xo=new D,Vr=new D,Fm=new D,Bm=new Ot,$u=new D(1,0,0),ef=new D(0,1,0),tf=new D(0,0,1),nf={type:"added"},zm={type:"removed"},Xs={type:"childadded",child:null},Lc={type:"childremoved",child:null},Lt=class i extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Hn,n=new Ot,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new ot}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis($u,e)}rotateY(e){return this.rotateOnAxis(ef,e)}rotateZ(e){return this.rotateOnAxis(tf,e)}translateOnAxis(e,t){return Qu.copy(e).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($u,e)}translateY(e){return this.translateOnAxis(ef,e)}translateZ(e){return this.translateOnAxis(tf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xo.copy(e):Xo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Vr,Xo,this.up):vi.lookAt(Xo,Vr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Ws.setFromRotationMatrix(vi),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nf),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zm),Lc.child=e,this.dispatchEvent(Lc),Lc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nf),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,Fm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,Bm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Lt.DEFAULT_UP=new D(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=new D,bi=new D,Uc=new D,yi=new D,qs=new D,Ys=new D,sf=new D,Nc=new D,Oc=new D,Fc=new D,Bc=new yt,zc=new yt,kc=new yt,qi=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Jn.subVectors(e,t),s.cross(Jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Jn.subVectors(s,t),bi.subVectors(n,t),Uc.subVectors(e,t);let o=Jn.dot(Jn),a=Jn.dot(bi),c=Jn.dot(Uc),l=bi.dot(bi),h=bi.dot(Uc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,x=(o*h-a*c)*f;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yi.x),c.addScaledVector(o,yi.y),c.addScaledVector(a,yi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Bc.setScalar(0),zc.setScalar(0),kc.setScalar(0),Bc.fromBufferAttribute(e,t),zc.fromBufferAttribute(e,n),kc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Bc,r.x),o.addScaledVector(zc,r.y),o.addScaledVector(kc,r.z),o}static isFrontFacing(e,t,n,s){return Jn.subVectors(n,t),bi.subVectors(e,t),Jn.cross(bi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Jn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;qs.subVectors(s,n),Ys.subVectors(r,n),Nc.subVectors(e,n);let c=qs.dot(Nc),l=Ys.dot(Nc);if(c<=0&&l<=0)return t.copy(n);Oc.subVectors(e,s);let h=qs.dot(Oc),u=Ys.dot(Oc);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(qs,o);Fc.subVectors(e,r);let d=qs.dot(Fc),x=Ys.dot(Fc);if(x>=0&&d<=x)return t.copy(r);let v=d*l-c*x;if(v<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(Ys,a);let g=h*x-d*u;if(g<=0&&u-h>=0&&d-x>=0)return sf.subVectors(r,s),a=(u-h)/(u-h+(d-x)),t.copy(s).addScaledVector(sf,a);let m=1/(g+v+f);return o=v*m,a=f*m,t.copy(n).addScaledVector(qs,o).addScaledVector(Ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},qo={h:0,s:0,l:0};function Hc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=Hh(e,1),t=en(t,0,1),n=en(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Hc(o,r,e+1/3),this.g=Hc(o,r,e),this.b=Hc(o,r,e-1/3)}return pt.toWorkingColorSpace(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=yd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return pt.fromWorkingColorSpace(vn.copy(this),e),Math.round(en(vn.r*255,0,255))*65536+Math.round(en(vn.g*255,0,255))*256+Math.round(en(vn.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(vn.copy(this),t);let n=vn.r,s=vn.g,r=vn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Nt){pt.fromWorkingColorSpace(vn.copy(this),e);let t=vn.r,n=vn.g,s=vn.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(qo);let n=no(Wi.h,qo.h,t),s=no(Wi.s,qo.s,t),r=no(Wi.l,qo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new Ie;Ie.NAMES=yd;var km=0,Sn=class extends Ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=zn(),this.name="",this.blending=or,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=al,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ol&&(n.blendSrc=this.blendSrc),this.blendDst!==al&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ku&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Yt=class extends Sn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Si=Hm();function Hm(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Gm(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=en(i,-65504,65504),Si.floatView[0]=i;let e=Si.uint32View[0],t=e>>23&511;return Si.baseTable[t]+((e&8388607)>>Si.shiftTable[t])}function Vm(i){let e=i>>10;return Si.uint32View[0]=Si.mantissaTable[Si.offsetTable[e]+(i&1023)]+Si.exponentTable[e],Si.floatView[0]}var Gh={toHalfFloat:Gm,fromHalfFloat:Vm},Kt=new D,Yo=new be,bt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vl,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yo.fromBufferAttribute(this,t),Yo.applyMatrix3(e),this.setXY(t,Yo.x,Yo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$n(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$n(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$n(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vl&&(e.usage=this.usage),e}};var Aa=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ra=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Mt=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Wm=0,Fn=new Ze,Gc=new Lt,js=new D,In=new mn,Wr=new mn,pn=new D,Ct=class i extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bd(e)?Ra:Aa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(In.min,Wr.min),In.expandByPoint(pn),pn.addVectors(In.max,Wr.max),In.expandByPoint(pn)):(In.expandByPoint(Wr.min),In.expandByPoint(Wr.max))}In.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)pn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(pn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)pn.fromBufferAttribute(a,l),c&&(js.fromBufferAttribute(e,l),pn.add(js)),s=Math.max(s,n.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<n.count;w++)a[w]=new D,c[w]=new D;let l=new D,h=new D,u=new D,f=new be,d=new be,x=new be,v=new D,g=new D;function m(w,S,_){l.fromBufferAttribute(n,w),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,w),d.fromBufferAttribute(r,S),x.fromBufferAttribute(r,_),h.sub(l),u.sub(l),d.sub(f),x.sub(f);let R=1/(d.x*x.y-x.x*d.y);isFinite(R)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(R),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(R),a[w].add(v),a[S].add(v),a[_].add(v),c[w].add(g),c[S].add(g),c[_].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let w=0,S=E.length;w<S;++w){let _=E[w],R=_.start,B=_.count;for(let W=R,X=R+B;W<X;W+=3)m(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let M=new D,b=new D,I=new D,T=new D;function A(w){I.fromBufferAttribute(s,w),T.copy(I);let S=a[w];M.copy(S),M.sub(I.multiplyScalar(I.dot(S))).normalize(),b.crossVectors(T,S);let R=b.dot(c[w])<0?-1:1;o.setXYZW(w,M.x,M.y,M.z,R)}for(let w=0,S=E.length;w<S;++w){let _=E[w],R=_.start,B=_.count;for(let W=R,X=R+B;W<X;W+=3)A(e.getX(W+0)),A(e.getX(W+1)),A(e.getX(W+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){let x=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,x=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*h;for(let m=0;m<h;m++)f[x++]=l[d++]}return new bt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rf=new Ze,bs=new gr,jo=new Ln,of=new D,Zo=new D,Ko=new D,Jo=new D,Vc=new D,Qo=new D,af=new D,$o=new D,Ge=class extends Lt{constructor(e=new Ct,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Qo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Vc.fromBufferAttribute(u,e),o?Qo.addScaledVector(Vc,h):Qo.addScaledVector(Vc.sub(t),h))}t.add(Qo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(r),bs.copy(e.ray).recast(e.near),!(jo.containsPoint(bs.origin)===!1&&(bs.intersectSphere(jo,of)===null||bs.origin.distanceToSquared(of)>(e.far-e.near)**2))&&(rf.copy(r).invert(),bs.copy(e.ray).applyMatrix4(rf),!(n.boundingBox!==null&&bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){let g=f[x],m=o[g.materialIndex],E=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let b=E,I=M;b<I;b+=3){let T=a.getX(b),A=a.getX(b+1),w=a.getX(b+2);s=ea(this,m,e,n,l,h,u,T,A,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=x,m=v;g<m;g+=3){let E=a.getX(g),M=a.getX(g+1),b=a.getX(g+2);s=ea(this,o,e,n,l,h,u,E,M,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){let g=f[x],m=o[g.materialIndex],E=Math.max(g.start,d.start),M=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let b=E,I=M;b<I;b+=3){let T=b,A=b+1,w=b+2;s=ea(this,m,e,n,l,h,u,T,A,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let g=x,m=v;g<m;g+=3){let E=g,M=g+1,b=g+2;s=ea(this,o,e,n,l,h,u,E,M,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Xm(i,e,t,n,s,r,o,a){let c;if(e.side===Xt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===kn,a),c===null)return null;$o.copy(a),$o.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo($o);return l<t.near||l>t.far?null:{distance:l,point:$o.clone(),object:i}}function ea(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Zo),i.getVertexPosition(c,Ko),i.getVertexPosition(l,Jo);let h=Xm(i,e,t,n,Zo,Ko,Jo,af);if(h){let u=new D;qi.getBarycoord(af,Zo,Ko,Jo,u),s&&(h.uv=qi.getInterpolatedAttribute(s,a,c,l,u,new be)),r&&(h.uv1=qi.getInterpolatedAttribute(r,a,c,l,u,new be)),o&&(h.normal=qi.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new D,materialIndex:0};qi.getNormal(Zo,Ko,Jo,f.normal),h.face=f,h.barycoord=u}return h}var Ne=class i extends Ct{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(u,2));function x(v,g,m,E,M,b,I,T,A,w,S){let _=b/A,R=I/w,B=b/2,W=I/2,X=T/2,Q=A+1,N=w+1,K=0,k=0,Z=new D;for(let le=0;le<N;le++){let $=le*R-W;for(let ae=0;ae<Q;ae++){let Oe=ae*_-B;Z[v]=Oe*E,Z[g]=$*M,Z[m]=X,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[g]=0,Z[m]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(ae/A),u.push(1-le/w),K+=1}}for(let le=0;le<w;le++)for(let $=0;$<A;$++){let ae=f+$+Q*le,Oe=f+$+Q*(le+1),J=f+($+1)+Q*(le+1),me=f+($+1)+Q*le;c.push(ae,Oe,me),c.push(Oe,J,me),k+=6}a.addGroup(d,k,S),d+=k,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function _n(i){let e={};for(let t=0;t<i.length;t++){let n=xr(i[t]);for(let s in n)e[s]=n[s]}return e}function qm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _d(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var ln={clone:xr,merge:_n},Ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wt=class extends Sn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ym,this.fragmentShader=jm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=qm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ca=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xi=new D,cf=new be,lf=new be,jt=class extends Ca{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,cf,lf),t.subVectors(lf,cf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(to*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Zs=-90,Ks=1,Yl=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(Zs,Ks,e,t);s.layers=this.layers,this.add(s);let r=new jt(Zs,Ks,e,t);r.layers=this.layers,this.add(r);let o=new jt(Zs,Ks,e,t);o.layers=this.layers,this.add(o);let a=new jt(Zs,Ks,e,t);a.layers=this.layers,this.add(a);let c=new jt(Zs,Ks,e,t);c.layers=this.layers,this.add(c);let l=new jt(Zs,Ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Pa=class extends Jt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ur,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},jl=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Pa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ne(5,5,5),r=new wt({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:tn});r.uniforms.tEquirect.value=t;let o=new Ge(s,r),a=t.minFilter;return t.minFilter===ei&&(t.minFilter=Wt),new Yl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Wc=new D,Zm=new D,Km=new ot,Qn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Wc.subVectors(n,t).cross(Zm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Wc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Km.getNormalMatrix(e),s=this.coplanarPoint(Wc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ys=new Ln,ta=new D,ho=class{constructor(e=new Qn,t=new Qn,n=new Qn,s=new Qn,r=new Qn,o=new Qn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ei){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],x=s[9],v=s[10],g=s[11],m=s[12],E=s[13],M=s[14],b=s[15];if(n[0].setComponents(c-r,f-l,g-d,b-m).normalize(),n[1].setComponents(c+r,f+l,g+d,b+m).normalize(),n[2].setComponents(c+o,f+h,g+x,b+E).normalize(),n[3].setComponents(c-o,f-h,g-x,b-E).normalize(),n[4].setComponents(c-a,f-u,g-v,b-M).normalize(),t===Ei)n[5].setComponents(c+a,f+u,g+v,b+M).normalize();else if(t===Sa)n[5].setComponents(a,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){return ys.center.set(0,0,0),ys.radius=.7071067811865476,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ta.x=s.normal.x>0?e.max.x:e.min.x,ta.y=s.normal.y>0?e.max.y:e.min.y,ta.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ta)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Md(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Jm(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){let x=u[f],v=u[d];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){let v=u[d];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var _t=class i extends Ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],x=[],v=[],g=[];for(let m=0;m<h;m++){let E=m*f-o;for(let M=0;M<l;M++){let b=M*u-r;x.push(b,-E,0),v.push(0,0,1),g.push(M/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let E=0;E<a;E++){let M=E+l*m,b=E+l*(m+1),I=E+1+l*(m+1),T=E+1+l*m;d.push(M,b,T),d.push(b,I,T)}this.setIndex(d),this.setAttribute("position",new Mt(x,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$m=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,e0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,r0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,a0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,u0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,f0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,M0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,S0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R0="gl_FragColor = linearToOutputTexel( gl_FragColor );",C0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,D0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,N0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,k0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,W0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,X0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,K0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,J0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ag=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ug=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ag=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Og=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ox=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ux=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,px=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_x=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ex=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ax=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:Qm,alphahash_pars_fragment:$m,alphamap_fragment:e0,alphamap_pars_fragment:t0,alphatest_fragment:n0,alphatest_pars_fragment:i0,aomap_fragment:s0,aomap_pars_fragment:r0,batching_pars_vertex:o0,batching_vertex:a0,begin_vertex:c0,beginnormal_vertex:l0,bsdfs:h0,iridescence_fragment:u0,bumpmap_pars_fragment:f0,clipping_planes_fragment:d0,clipping_planes_pars_fragment:p0,clipping_planes_pars_vertex:m0,clipping_planes_vertex:g0,color_fragment:x0,color_pars_fragment:v0,color_pars_vertex:b0,color_vertex:y0,common:_0,cube_uv_reflection_fragment:M0,defaultnormal_vertex:S0,displacementmap_pars_vertex:E0,displacementmap_vertex:w0,emissivemap_fragment:T0,emissivemap_pars_fragment:A0,colorspace_fragment:R0,colorspace_pars_fragment:C0,envmap_fragment:P0,envmap_common_pars_fragment:I0,envmap_pars_fragment:D0,envmap_pars_vertex:L0,envmap_physical_pars_fragment:W0,envmap_vertex:U0,fog_vertex:N0,fog_pars_vertex:O0,fog_fragment:F0,fog_pars_fragment:B0,gradientmap_pars_fragment:z0,lightmap_pars_fragment:k0,lights_lambert_fragment:H0,lights_lambert_pars_fragment:G0,lights_pars_begin:V0,lights_toon_fragment:X0,lights_toon_pars_fragment:q0,lights_phong_fragment:Y0,lights_phong_pars_fragment:j0,lights_physical_fragment:Z0,lights_physical_pars_fragment:K0,lights_fragment_begin:J0,lights_fragment_maps:Q0,lights_fragment_end:$0,logdepthbuf_fragment:eg,logdepthbuf_pars_fragment:tg,logdepthbuf_pars_vertex:ng,logdepthbuf_vertex:ig,map_fragment:sg,map_pars_fragment:rg,map_particle_fragment:og,map_particle_pars_fragment:ag,metalnessmap_fragment:cg,metalnessmap_pars_fragment:lg,morphinstance_vertex:hg,morphcolor_vertex:ug,morphnormal_vertex:fg,morphtarget_pars_vertex:dg,morphtarget_vertex:pg,normal_fragment_begin:mg,normal_fragment_maps:gg,normal_pars_fragment:xg,normal_pars_vertex:vg,normal_vertex:bg,normalmap_pars_fragment:yg,clearcoat_normal_fragment_begin:_g,clearcoat_normal_fragment_maps:Mg,clearcoat_pars_fragment:Sg,iridescence_pars_fragment:Eg,opaque_fragment:wg,packing:Tg,premultiplied_alpha_fragment:Ag,project_vertex:Rg,dithering_fragment:Cg,dithering_pars_fragment:Pg,roughnessmap_fragment:Ig,roughnessmap_pars_fragment:Dg,shadowmap_pars_fragment:Lg,shadowmap_pars_vertex:Ug,shadowmap_vertex:Ng,shadowmask_pars_fragment:Og,skinbase_vertex:Fg,skinning_pars_vertex:Bg,skinning_vertex:zg,skinnormal_vertex:kg,specularmap_fragment:Hg,specularmap_pars_fragment:Gg,tonemapping_fragment:Vg,tonemapping_pars_fragment:Wg,transmission_fragment:Xg,transmission_pars_fragment:qg,uv_pars_fragment:Yg,uv_pars_vertex:jg,uv_vertex:Zg,worldpos_vertex:Kg,background_vert:Jg,background_frag:Qg,backgroundCube_vert:$g,backgroundCube_frag:ex,cube_vert:tx,cube_frag:nx,depth_vert:ix,depth_frag:sx,distanceRGBA_vert:rx,distanceRGBA_frag:ox,equirect_vert:ax,equirect_frag:cx,linedashed_vert:lx,linedashed_frag:hx,meshbasic_vert:ux,meshbasic_frag:fx,meshlambert_vert:dx,meshlambert_frag:px,meshmatcap_vert:mx,meshmatcap_frag:gx,meshnormal_vert:xx,meshnormal_frag:vx,meshphong_vert:bx,meshphong_frag:yx,meshphysical_vert:_x,meshphysical_frag:Mx,meshtoon_vert:Sx,meshtoon_frag:Ex,points_vert:wx,points_frag:Tx,shadow_vert:Ax,shadow_frag:Rx,sprite_vert:Cx,sprite_frag:Px},He={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},ci={basic:{uniforms:_n([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:_n([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Ie(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:_n([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:_n([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:_n([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Ie(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:_n([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:_n([He.points,He.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:_n([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:_n([He.common,He.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:_n([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:_n([He.sprite,He.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:_n([He.common,He.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:_n([He.lights,He.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};ci.physical={uniforms:_n([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var na={r:0,b:0,g:0},_s=new Hn,Ix=new Ze;function Dx(i,e,t,n,s,r,o){let a=new Ie(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function x(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?t:e).get(M)),M}function v(E){let M=!1,b=x(E);b===null?m(a,c):b&&b.isColor&&(m(b,1),M=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(E,M){let b=x(M);b&&(b.isCubeTexture||b.mapping===$a)?(h===void 0&&(h=new Ge(new Ne(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:xr(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_s.copy(M.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ix.makeRotationFromEuler(_s)),h.material.toneMapped=pt.getTransfer(b.colorSpace)!==Rt,(u!==b||f!==b.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ge(new _t(2,2),new wt({name:"BackgroundMaterial",uniforms:xr(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=pt.getTransfer(b.colorSpace)!==Rt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,d=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,M){E.getRGB(na,_d(i)),n.buffers.color.setClear(na.r,na.g,na.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(E,M=1){a.set(E),c=M,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,m(a,c)},render:v,addToRenderList:g}}function Lx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(_,R,B,W,X){let Q=!1,N=u(W,B,R);r!==N&&(r=N,l(r.object)),Q=d(_,W,B,X),Q&&x(_,W,B,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,b(_,R,B,W),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,R,B){let W=B.wireframe===!0,X=n[_.id];X===void 0&&(X={},n[_.id]=X);let Q=X[R.id];Q===void 0&&(Q={},X[R.id]=Q);let N=Q[W];return N===void 0&&(N=f(c()),Q[W]=N),N}function f(_){let R=[],B=[],W=[];for(let X=0;X<t;X++)R[X]=0,B[X]=0,W[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:W,object:_,attributes:{},index:null}}function d(_,R,B,W){let X=r.attributes,Q=R.attributes,N=0,K=B.getAttributes();for(let k in K)if(K[k].location>=0){let le=X[k],$=Q[k];if($===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&($=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&($=_.instanceColor)),le===void 0||le.attribute!==$||$&&le.data!==$.data)return!0;N++}return r.attributesNum!==N||r.index!==W}function x(_,R,B,W){let X={},Q=R.attributes,N=0,K=B.getAttributes();for(let k in K)if(K[k].location>=0){let le=Q[k];le===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(le=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(le=_.instanceColor));let $={};$.attribute=le,le&&le.data&&($.data=le.data),X[k]=$,N++}r.attributes=X,r.attributesNum=N,r.index=W}function v(){let _=r.newAttributes;for(let R=0,B=_.length;R<B;R++)_[R]=0}function g(_){m(_,0)}function m(_,R){let B=r.newAttributes,W=r.enabledAttributes,X=r.attributeDivisors;B[_]=1,W[_]===0&&(i.enableVertexAttribArray(_),W[_]=1),X[_]!==R&&(i.vertexAttribDivisor(_,R),X[_]=R)}function E(){let _=r.newAttributes,R=r.enabledAttributes;for(let B=0,W=R.length;B<W;B++)R[B]!==_[B]&&(i.disableVertexAttribArray(B),R[B]=0)}function M(_,R,B,W,X,Q,N){N===!0?i.vertexAttribIPointer(_,R,B,X,Q):i.vertexAttribPointer(_,R,B,W,X,Q)}function b(_,R,B,W){v();let X=W.attributes,Q=B.getAttributes(),N=R.defaultAttributeValues;for(let K in Q){let k=Q[K];if(k.location>=0){let Z=X[K];if(Z===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(Z=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(Z=_.instanceColor)),Z!==void 0){let le=Z.normalized,$=Z.itemSize,ae=e.get(Z);if(ae===void 0)continue;let Oe=ae.buffer,J=ae.type,me=ae.bytesPerElement,xe=J===i.INT||J===i.UNSIGNED_INT||Z.gpuType===Uh;if(Z.isInterleavedBufferAttribute){let de=Z.data,Fe=de.stride,qe=Z.offset;if(de.isInstancedInterleavedBuffer){for(let We=0;We<k.locationSize;We++)m(k.location+We,de.meshPerAttribute);_.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let We=0;We<k.locationSize;We++)g(k.location+We);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let We=0;We<k.locationSize;We++)M(k.location+We,$/k.locationSize,J,le,Fe*me,(qe+$/k.locationSize*We)*me,xe)}else{if(Z.isInstancedBufferAttribute){for(let de=0;de<k.locationSize;de++)m(k.location+de,Z.meshPerAttribute);_.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let de=0;de<k.locationSize;de++)g(k.location+de);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let de=0;de<k.locationSize;de++)M(k.location+de,$/k.locationSize,J,le,$*me,$/k.locationSize*de*me,xe)}}else if(N!==void 0){let le=N[K];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(k.location,le);break;case 3:i.vertexAttrib3fv(k.location,le);break;case 4:i.vertexAttrib4fv(k.location,le);break;default:i.vertexAttrib1fv(k.location,le)}}}}E()}function I(){w();for(let _ in n){let R=n[_];for(let B in R){let W=R[B];for(let X in W)h(W[X].object),delete W[X];delete R[B]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;let R=n[_.id];for(let B in R){let W=R[B];for(let X in W)h(W[X].object),delete W[X];delete R[B]}delete n[_.id]}function A(_){for(let R in n){let B=n[R];if(B[_.id]===void 0)continue;let W=B[_.id];for(let X in W)h(W[X].object),delete W[X];delete B[_.id]}}function w(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:E}}function Ux(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<l.length;x++)o(l[x],h[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let x=0;for(let v=0;v<u;v++)x+=h[v]*f[v];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Nx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==bn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let w=A===Zt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ti&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Mn&&!w)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=x>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:b,vertexTextures:I,maxSamples:T}}function Ox(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Qn,a=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let x=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||x===null||x.length===0||r&&!g)r?h(null):l();else{let E=r?0:n,M=E*4,b=m.clippingState||null;c.value=b,b=h(x,f,M,d);for(let I=0;I!==M;++I)b[I]=t[I];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,x){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=c.value,x!==!0||g===null){let m=d+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,b=d;M!==v;++M,b+=4)o.copy(u[M]).applyMatrix4(E,a),o.normal.toArray(g,b),g[b+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Fx(i){let e=new WeakMap;function t(o,a){return a===ml?o.mapping=ur:a===gl&&(o.mapping=fr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ml||a===gl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new jl(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Qi=class extends Ca{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},sr=4,hf=[.125,.215,.35,.446,.526,.582],Es=20,Xc=new Qi,uf=new Ie,qc=null,Yc=0,jc=0,Zc=!1,Ss=(1+Math.sqrt(5))/2,Js=1/Ss,ff=[new D(-Ss,Js,0),new D(Ss,Js,0),new D(-Js,0,Ss),new D(Js,0,Ss),new D(0,Ss,-Js),new D(0,Ss,Js),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],$i=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,Yc,jc),this._renderer.xr.enabled=Zc,e.scissorTest=!1,ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ur||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Zt,format:bn,colorSpace:cn,depthBuffer:!1},s=df(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=df(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bx(r)),this._blurMaterial=zx(r,e,t)}return s}_compileMaterial(e){let t=new Ge(this._lodPlanes[0],e);this._renderer.compile(t,Xc)}_sceneToCubeUV(e,t,n,s){let a=new jt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(uf),h.toneMapping=ji,h.autoClear=!1;let d=new Yt({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),x=new Ge(new Ne,d),v=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,v=!0):(d.color.copy(uf),v=!0);for(let m=0;m<6;m++){let E=m%3;E===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):E===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let M=this._cubeSize;ia(s,E*M,m>2?M:0,M,M),h.setRenderTarget(s),v&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ur||e.mapping===fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;ia(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Xc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ff[(s-r-1)%ff.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ge(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Es-1),v=r/x,g=isFinite(r)?1+Math.floor(h*v):Es;g>Es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Es}`);let m=[],E=0;for(let A=0;A<Es;++A){let w=A/v,S=Math.exp(-w*w/2);m.push(S),A===0?E+=S:A<g&&(E+=2*S)}for(let A=0;A<m.length;A++)m[A]=m[A]/E;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=x,f.mipInt.value=M-n;let b=this._sizeLods[s],I=3*b*(s>M-sr?s-M+sr:0),T=4*(this._cubeSize-b);ia(t,I,T,3*b,2*b),c.setRenderTarget(t),c.render(u,Xc)}};function Bx(i){let e=[],t=[],n=[],s=i,r=i-sr+1+hf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-sr?c=hf[o-i+sr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,v=3,g=2,m=1,E=new Float32Array(v*x*d),M=new Float32Array(g*x*d),b=new Float32Array(m*x*d);for(let T=0;T<d;T++){let A=T%3*2/3-1,w=T>2?0:-1,S=[A,w,0,A+2/3,w,0,A+2/3,w+1,0,A,w,0,A+2/3,w+1,0,A,w+1,0];E.set(S,v*x*T),M.set(f,g*x*T);let _=[T,T,T,T,T,T];b.set(_,m*x*T)}let I=new Ct;I.setAttribute("position",new bt(E,v)),I.setAttribute("uv",new bt(M,g)),I.setAttribute("faceIndex",new bt(b,m)),e.push(I),s>sr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function df(i,e,t){let n=new qt(i,e,t);return n.texture.mapping=$a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ia(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function zx(i,e,t){let n=new Float32Array(Es),s=new D(0,1,0);return new wt({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function pf(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function mf(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Vh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ml||c===gl,h=c===ur||c===fr;if(l||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new $i(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new $i(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Hx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Qr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gx(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);for(let x in f.morphAttributes){let v=f.morphAttributes[x];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let x in f)e.update(f[x],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let x in d){let v=d[x];for(let g=0,m=v.length;g<m;g++)e.update(v[g],i.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,x=u.attributes.position,v=0;if(d!==null){let E=d.array;v=d.version;for(let M=0,b=E.length;M<b;M+=3){let I=E[M+0],T=E[M+1],A=E[M+2];f.push(I,T,T,A,A,I)}}else if(x!==void 0){let E=x.array;v=x.version;for(let M=0,b=E.length/3-1;M<b;M+=3){let I=M+0,T=M+1,A=M+2;f.push(I,T,T,A,A,I)}}else return;let g=new(bd(f)?Ra:Aa)(f,1);g.version=v;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Vx(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,x){x!==0&&(i.drawElementsInstanced(n,d,r,f*o,x),t.update(d,n,x))}function h(f,d,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,x);let g=0;for(let m=0;m<x;m++)g+=d[m];t.update(g,n,1)}function u(f,d,x,v){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/o,d[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,x);let m=0;for(let E=0;E<x;E++)m+=d[E]*v[E];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Wx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Xx(i,e,t){let n=new WeakMap,s=new yt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],M=0;d===!0&&(M=1),x===!0&&(M=2),v===!0&&(M=3);let b=a.attributes.position.count*M,I=1;b>e.maxTextureSize&&(I=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let T=new Float32Array(b*I*4*u),A=new wa(T,b,I,u);A.type=Mn,A.needsUpdate=!0;let w=M*4;for(let _=0;_<u;_++){let R=g[_],B=m[_],W=E[_],X=b*I*4*_;for(let Q=0;Q<R.count;Q++){let N=Q*w;d===!0&&(s.fromBufferAttribute(R,Q),T[X+N+0]=s.x,T[X+N+1]=s.y,T[X+N+2]=s.z,T[X+N+3]=0),x===!0&&(s.fromBufferAttribute(B,Q),T[X+N+4]=s.x,T[X+N+5]=s.y,T[X+N+6]=s.z,T[X+N+7]=0),v===!0&&(s.fromBufferAttribute(W,Q),T[X+N+8]=s.x,T[X+N+9]=s.y,T[X+N+10]=s.z,T[X+N+11]=W.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new be(b,I)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let x=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function qx(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var es=class extends Jt{constructor(e,t,n,s,r,o,a,c,l,h=ar){if(h!==ar&&h!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ar&&(n=ws),n===void 0&&h===Ki&&(n=Zi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Sd=new Jt,gf=new es(1,1),Ed=new wa,wd=new ql,Td=new Pa,xf=[],vf=[],bf=new Float32Array(16),yf=new Float32Array(9),_f=new Float32Array(4);function Ar(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=xf[s];if(r===void 0&&(r=new Float32Array(s),xf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function rn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function on(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nc(i,e){let t=vf[e];t===void 0&&(t=new Int32Array(e),vf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Yx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2fv(this.addr,e),on(t,e)}}function Zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;i.uniform3fv(this.addr,e),on(t,e)}}function Kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4fv(this.addr,e),on(t,e)}}function Jx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(rn(t,n))return;_f.set(n),i.uniformMatrix2fv(this.addr,!1,_f),on(t,n)}}function Qx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(rn(t,n))return;yf.set(n),i.uniformMatrix3fv(this.addr,!1,yf),on(t,n)}}function $x(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(rn(t,n))return;bf.set(n),i.uniformMatrix4fv(this.addr,!1,bf),on(t,n)}}function ev(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2iv(this.addr,e),on(t,e)}}function nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3iv(this.addr,e),on(t,e)}}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4iv(this.addr,e),on(t,e)}}function sv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2uiv(this.addr,e),on(t,e)}}function ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3uiv(this.addr,e),on(t,e)}}function av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4uiv(this.addr,e),on(t,e)}}function cv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gf.compareFunction=vd,r=gf):r=Sd,t.setTexture2D(e||r,s)}function lv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wd,s)}function hv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Td,s)}function uv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ed,s)}function fv(i){switch(i){case 5126:return Yx;case 35664:return jx;case 35665:return Zx;case 35666:return Kx;case 35674:return Jx;case 35675:return Qx;case 35676:return $x;case 5124:case 35670:return ev;case 35667:case 35671:return tv;case 35668:case 35672:return nv;case 35669:case 35673:return iv;case 5125:return sv;case 36294:return rv;case 36295:return ov;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return uv}}function dv(i,e){i.uniform1fv(this.addr,e)}function pv(i,e){let t=Ar(e,this.size,2);i.uniform2fv(this.addr,t)}function mv(i,e){let t=Ar(e,this.size,3);i.uniform3fv(this.addr,t)}function gv(i,e){let t=Ar(e,this.size,4);i.uniform4fv(this.addr,t)}function xv(i,e){let t=Ar(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function vv(i,e){let t=Ar(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function bv(i,e){let t=Ar(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function yv(i,e){i.uniform1iv(this.addr,e)}function _v(i,e){i.uniform2iv(this.addr,e)}function Mv(i,e){i.uniform3iv(this.addr,e)}function Sv(i,e){i.uniform4iv(this.addr,e)}function Ev(i,e){i.uniform1uiv(this.addr,e)}function wv(i,e){i.uniform2uiv(this.addr,e)}function Tv(i,e){i.uniform3uiv(this.addr,e)}function Av(i,e){i.uniform4uiv(this.addr,e)}function Rv(i,e,t){let n=this.cache,s=e.length,r=nc(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Sd,r[o])}function Cv(i,e,t){let n=this.cache,s=e.length,r=nc(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||wd,r[o])}function Pv(i,e,t){let n=this.cache,s=e.length,r=nc(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Td,r[o])}function Iv(i,e,t){let n=this.cache,s=e.length,r=nc(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ed,r[o])}function Dv(i){switch(i){case 5126:return dv;case 35664:return pv;case 35665:return mv;case 35666:return gv;case 35674:return xv;case 35675:return vv;case 35676:return bv;case 5124:case 35670:return yv;case 35667:case 35671:return _v;case 35668:case 35672:return Mv;case 35669:case 35673:return Sv;case 5125:return Ev;case 36294:return wv;case 36295:return Tv;case 36296:return Av;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Iv}}var Zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fv(t.type)}},Kl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dv(t.type)}},Jl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Kc=/(\w+)(\])?(\[|\.)?/g;function Mf(i,e){i.seq.push(e),i.map[e.id]=e}function Lv(i,e,t){let n=i.name,s=n.length;for(Kc.lastIndex=0;;){let r=Kc.exec(n),o=Kc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Mf(t,l===void 0?new Zl(a,i,e):new Kl(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Jl(a),Mf(t,u)),t=u}}}var lr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Lv(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Sf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Uv=37297,Nv=0;function Ov(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ef=new ot;function Fv(i){pt._getMatrix(Ef,pt.workingColorSpace,i);let e=`mat3( ${Ef.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case tc:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function wf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ov(i.getShaderSource(e),o)}else return s}function Bv(i,e){let t=Fv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function zv(i,e){let t;switch(e){case Rh:t="Linear";break;case Ch:t="Reinhard";break;case Ph:t="Cineon";break;case bo:t="ACESFilmic";break;case Ih:t="AgX";break;case Dh:t="Neutral";break;case $p:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var sa=new D;function kv(){pt.getLuminanceCoefficients(sa);let i=sa.x.toFixed(4),e=sa.y.toFixed(4),t=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function Gv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function $r(i){return i!==""}function Tf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Af(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(i){return i.replace(Wv,qv)}var Xv=new Map;function qv(i,e){let t=lt[e];if(t===void 0){let n=Xv.get(e);if(n!==void 0)t=lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ql(t)}var Yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rf(i){return i.replace(Yv,jv)}function jv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Th?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function Kv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ur:case fr:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fr:e="ENVMAP_MODE_REFRACTION";break}return e}function Qv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case od:e="ENVMAP_BLENDING_MULTIPLY";break;case Jp:e="ENVMAP_BLENDING_MIX";break;case Qp:e="ENVMAP_BLENDING_ADD";break}return e}function $v(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function eb(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Zv(t),l=Kv(t),h=Jv(t),u=Qv(t),f=$v(t),d=Hv(t),x=Gv(r),v=s.createProgram(),g,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter($r).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter($r).join(`
`),m.length>0&&(m+=`
`)):(g=[Cf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),m=[Cf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?lt.tonemapping_pars_fragment:"",t.toneMapping!==ji?zv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,Bv("linearToOutputTexel",t.outputColorSpace),kv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),o=Ql(o),o=Tf(o,t),o=Af(o,t),a=Ql(a),a=Tf(a,t),a=Af(a,t),o=Rf(o),a=Rf(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=E+g+o,b=E+m+a,I=Sf(s,s.VERTEX_SHADER,M),T=Sf(s,s.FRAGMENT_SHADER,b);s.attachShader(v,I),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(R){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(v).trim(),W=s.getShaderInfoLog(I).trim(),X=s.getShaderInfoLog(T).trim(),Q=!0,N=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,I,T);else{let K=wf(s,I,"vertex"),k=wf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+K+`
`+k)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(W===""||X==="")&&(N=!1);N&&(R.diagnostics={runnable:Q,programLog:B,vertexShader:{log:W,prefix:g},fragmentShader:{log:X,prefix:m}})}s.deleteShader(I),s.deleteShader(T),w=new lr(s,v),S=Vv(s,v)}let w;this.getUniforms=function(){return w===void 0&&A(this),w};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,Uv)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=T,this}var tb=0,$l=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new eh(e),t.set(e,n)),n}},eh=class{constructor(e){this.id=tb++,this.code=e,this.usedTimes=0}};function nb(i,e,t,n,s,r,o){let a=new Ta,c=new $l,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,_,R,B,W){let X=B.fog,Q=W.geometry,N=S.isMeshStandardMaterial?B.environment:null,K=(S.isMeshStandardMaterial?t:e).get(S.envMap||N),k=K&&K.mapping===$a?K.image.height:null,Z=x[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let le=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,$=le!==void 0?le.length:0,ae=0;Q.morphAttributes.position!==void 0&&(ae=1),Q.morphAttributes.normal!==void 0&&(ae=2),Q.morphAttributes.color!==void 0&&(ae=3);let Oe,J,me,xe;if(Z){let Je=ci[Z];Oe=Je.vertexShader,J=Je.fragmentShader}else Oe=S.vertexShader,J=S.fragmentShader,c.update(S),me=c.getVertexShaderID(S),xe=c.getFragmentShaderID(S);let de=i.getRenderTarget(),Fe=i.state.buffers.depth.getReversed(),qe=W.isInstancedMesh===!0,We=W.isBatchedMesh===!0,et=!!S.map,pe=!!S.matcap,_e=!!K,z=!!S.aoMap,Ye=!!S.lightMap,Ee=!!S.bumpMap,De=!!S.normalMap,ye=!!S.displacementMap,Qe=!!S.emissiveMap,Be=!!S.metalnessMap,F=!!S.roughnessMap,P=S.anisotropy>0,te=S.clearcoat>0,fe=S.dispersion>0,ge=S.iridescence>0,he=S.sheen>0,je=S.transmission>0,Re=P&&!!S.anisotropyMap,Le=te&&!!S.clearcoatMap,$e=te&&!!S.clearcoatNormalMap,Me=te&&!!S.clearcoatRoughnessMap,Ve=ge&&!!S.iridescenceMap,Xe=ge&&!!S.iridescenceThicknessMap,Ke=he&&!!S.sheenColorMap,Y=he&&!!S.sheenRoughnessMap,V=!!S.specularMap,j=!!S.specularColorMap,ne=!!S.specularIntensityMap,O=je&&!!S.transmissionMap,H=je&&!!S.thicknessMap,q=!!S.gradientMap,se=!!S.alphaMap,Se=S.alphaTest>0,ve=!!S.alphaHash,Pe=!!S.extensions,tt=ji;S.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(tt=i.toneMapping);let rt={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:Oe,fragmentShader:J,defines:S.defines,customVertexShaderID:me,customFragmentShaderID:xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:We,batchingColor:We&&W._colorsTexture!==null,instancing:qe,instancingColor:qe&&W.instanceColor!==null,instancingMorph:qe&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:cn,alphaToCoverage:!!S.alphaToCoverage,map:et,matcap:pe,envMap:_e,envMapMode:_e&&K.mapping,envMapCubeUVHeight:k,aoMap:z,lightMap:Ye,bumpMap:Ee,normalMap:De,displacementMap:f&&ye,emissiveMap:Qe,normalMapObjectSpace:De&&S.normalMapType===im,normalMapTangentSpace:De&&S.normalMapType===kh,metalnessMap:Be,roughnessMap:F,anisotropy:P,anisotropyMap:Re,clearcoat:te,clearcoatMap:Le,clearcoatNormalMap:$e,clearcoatRoughnessMap:Me,dispersion:fe,iridescence:ge,iridescenceMap:Ve,iridescenceThicknessMap:Xe,sheen:he,sheenColorMap:Ke,sheenRoughnessMap:Y,specularMap:V,specularColorMap:j,specularIntensityMap:ne,transmission:je,transmissionMap:O,thicknessMap:H,gradientMap:q,opaque:S.transparent===!1&&S.blending===or&&S.alphaToCoverage===!1,alphaMap:se,alphaTest:Se,alphaHash:ve,combine:S.combine,mapUv:et&&v(S.map.channel),aoMapUv:z&&v(S.aoMap.channel),lightMapUv:Ye&&v(S.lightMap.channel),bumpMapUv:Ee&&v(S.bumpMap.channel),normalMapUv:De&&v(S.normalMap.channel),displacementMapUv:ye&&v(S.displacementMap.channel),emissiveMapUv:Qe&&v(S.emissiveMap.channel),metalnessMapUv:Be&&v(S.metalnessMap.channel),roughnessMapUv:F&&v(S.roughnessMap.channel),anisotropyMapUv:Re&&v(S.anisotropyMap.channel),clearcoatMapUv:Le&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:$e&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Y&&v(S.sheenRoughnessMap.channel),specularMapUv:V&&v(S.specularMap.channel),specularColorMapUv:j&&v(S.specularColorMap.channel),specularIntensityMapUv:ne&&v(S.specularIntensityMap.channel),transmissionMapUv:O&&v(S.transmissionMap.channel),thicknessMapUv:H&&v(S.thicknessMap.channel),alphaMapUv:se&&v(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(De||P),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Q.attributes.uv&&(et||se),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Fe,skinning:W.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ae,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,decodeVideoTexture:et&&S.map.isVideoTexture===!0&&pt.getTransfer(S.map.colorSpace)===Rt,decodeVideoTextureEmissive:Qe&&S.emissiveMap.isVideoTexture===!0&&pt.getTransfer(S.emissiveMap.colorSpace)===Rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===zt,flipSided:S.side===Xt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Pe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&S.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function m(S){let _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(let R in S.defines)_.push(R),_.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(E(_,S),M(_,S),_.push(i.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function E(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function M(S,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),S.push(a.mask)}function b(S){let _=x[S.type],R;if(_){let B=ci[_];R=ln.clone(B.uniforms)}else R=S.uniforms;return R}function I(S,_){let R;for(let B=0,W=h.length;B<W;B++){let X=h[B];if(X.cacheKey===_){R=X,++R.usedTimes;break}}return R===void 0&&(R=new eb(i,_,S,r),h.push(R)),R}function T(S){if(--S.usedTimes===0){let _=h.indexOf(S);h[_]=h[h.length-1],h.pop(),S.destroy()}}function A(S){c.remove(S)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:b,acquireProgram:I,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:w}}function ib(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function sb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Pf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function If(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,x,v,g){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:v,group:g},i[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=x,m.renderOrder=u.renderOrder,m.z=v,m.group=g),e++,m}function a(u,f,d,x,v,g){let m=o(u,f,d,x,v,g);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):t.push(m)}function c(u,f,d,x,v,g){let m=o(u,f,d,x,v,g);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function l(u,f){t.length>1&&t.sort(u||sb),n.length>1&&n.sort(f||Pf),s.length>1&&s.sort(f||Pf)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function rb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new If,i.set(n,[o])):s>=r.length?(o=new If,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ob(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ie};break;case"SpotLight":t={position:new D,direction:new D,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function ab(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var cb=0;function lb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function hb(i){let e=new ob,t=ab(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new Ze,o=new Ze;function a(l){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,x=0,v=0,g=0,m=0,E=0,M=0,b=0,I=0,T=0,A=0;l.sort(lb);for(let S=0,_=l.length;S<_;S++){let R=l[S],B=R.color,W=R.intensity,X=R.distance,Q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=B.r*W,u+=B.g*W,f+=B.b*W;else if(R.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(R.sh.coefficients[N],W);A++}else if(R.isDirectionalLight){let N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let K=R.shadow,k=t.get(R);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=Q,n.directionalShadowMatrix[d]=R.shadow.matrix,E++}n.directional[d]=N,d++}else if(R.isSpotLight){let N=e.get(R);N.position.setFromMatrixPosition(R.matrixWorld),N.color.copy(B).multiplyScalar(W),N.distance=X,N.coneCos=Math.cos(R.angle),N.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),N.decay=R.decay,n.spot[v]=N;let K=R.shadow;if(R.map&&(n.spotLightMap[I]=R.map,I++,K.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[v]=K.matrix,R.castShadow){let k=t.get(R);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.spotShadow[v]=k,n.spotShadowMap[v]=Q,b++}v++}else if(R.isRectAreaLight){let N=e.get(R);N.color.copy(B).multiplyScalar(W),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=N,g++}else if(R.isPointLight){let N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),N.distance=R.distance,N.decay=R.decay,R.castShadow){let K=R.shadow,k=t.get(R);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,n.pointShadow[x]=k,n.pointShadowMap[x]=Q,n.pointShadowMatrix[x]=R.shadow.matrix,M++}n.point[x]=N,x++}else if(R.isHemisphereLight){let N=e.get(R);N.skyColor.copy(R.color).multiplyScalar(W),N.groundColor.copy(R.groundColor).multiplyScalar(W),n.hemi[m]=N,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=He.LTC_FLOAT_1,n.rectAreaLTC2=He.LTC_FLOAT_2):(n.rectAreaLTC1=He.LTC_HALF_1,n.rectAreaLTC2=He.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let w=n.hash;(w.directionalLength!==d||w.pointLength!==x||w.spotLength!==v||w.rectAreaLength!==g||w.hemiLength!==m||w.numDirectionalShadows!==E||w.numPointShadows!==M||w.numSpotShadows!==b||w.numSpotMaps!==I||w.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=g,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=b+I-T,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,w.directionalLength=d,w.pointLength=x,w.spotLength=v,w.rectAreaLength=g,w.hemiLength=m,w.numDirectionalShadows=E,w.numPointShadows=M,w.numSpotShadows=b,w.numSpotMaps=I,w.numLightProbes=A,n.version=cb++)}function c(l,h){let u=0,f=0,d=0,x=0,v=0,g=h.matrixWorldInverse;for(let m=0,E=l.length;m<E;m++){let M=l[m];if(M.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),u++}else if(M.isSpotLight){let b=n.spot[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),d++}else if(M.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let b=n.hemi[v];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:n}}function Df(i){let e=new hb(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function ub(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Df(i),e.set(s,[a])):r>=o.length?(a=new Df(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ts=class extends Sn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},th=class extends Sn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},fb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,db=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pb(i,e,t){let n=new ho,s=new be,r=new be,o=new yt,a=new Ts({depthPacking:Mo}),c=new th,l={},h=t.maxTextureSize,u={[kn]:Xt,[Xt]:kn,[zt]:zt},f=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:fb,fragmentShader:db}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new Ct;x.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ge(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rd;let m=this.type;this.render=function(T,A,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let S=i.getRenderTarget(),_=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),B=i.state;B.setBlending(tn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let W=m!==Mi&&this.type===Mi,X=m===Mi&&this.type!==Mi;for(let Q=0,N=T.length;Q<N;Q++){let K=T[Q],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let Z=k.getFrameExtents();if(s.multiply(Z),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,k.mapSize.y=r.y)),k.map===null||W===!0||X===!0){let $=this.type!==Mi?{minFilter:nn,magFilter:nn}:{};k.map!==null&&k.map.dispose(),k.map=new qt(s.x,s.y,$),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let le=k.getViewportCount();for(let $=0;$<le;$++){let ae=k.getViewport($);o.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),B.viewport(o),k.updateMatrices(K,$),n=k.getFrustum(),b(A,w,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===Mi&&E(k,w),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(S,_,R)};function E(T,A){let w=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new qt(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,w,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,w,d,v,null)}function M(T,A,w,S){let _=null,R=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)_=R;else if(_=w.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let B=_.uuid,W=A.uuid,X=l[B];X===void 0&&(X={},l[B]=X);let Q=X[W];Q===void 0&&(Q=_.clone(),X[W]=Q,A.addEventListener("dispose",I)),_=Q}if(_.visible=A.visible,_.wireframe=A.wireframe,S===Mi?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:u[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,w.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let B=i.properties.get(_);B.light=w}return _}function b(T,A,w,S,_){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===Mi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let W=e.update(T),X=T.material;if(Array.isArray(X)){let Q=W.groups;for(let N=0,K=Q.length;N<K;N++){let k=Q[N],Z=X[k.materialIndex];if(Z&&Z.visible){let le=M(T,Z,S,_);T.onBeforeShadow(i,T,A,w,W,le,k),i.renderBufferDirect(w,null,W,le,T,k),T.onAfterShadow(i,T,A,w,W,le,k)}}}else if(X.visible){let Q=M(T,X,S,_);T.onBeforeShadow(i,T,A,w,W,Q,null),i.renderBufferDirect(w,null,W,Q,T,null),T.onAfterShadow(i,T,A,w,W,Q,null)}}let B=T.children;for(let W=0,X=B.length;W<X;W++)b(B[W],A,w,S,_)}function I(T){T.target.removeEventListener("dispose",I);for(let w in l){let S=l[w],_=T.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}var mb={[cl]:ll,[hl]:dl,[ul]:pl,[hr]:fl,[ll]:cl,[dl]:hl,[pl]:ul,[fl]:hr};function gb(i,e){function t(){let O=!1,H=new yt,q=null,se=new yt(0,0,0,0);return{setMask:function(Se){q!==Se&&!O&&(i.colorMask(Se,Se,Se,Se),q=Se)},setLocked:function(Se){O=Se},setClear:function(Se,ve,Pe,tt,rt){rt===!0&&(Se*=tt,ve*=tt,Pe*=tt),H.set(Se,ve,Pe,tt),se.equals(H)===!1&&(i.clearColor(Se,ve,Pe,tt),se.copy(H))},reset:function(){O=!1,q=null,se.set(-1,0,0,0)}}}function n(){let O=!1,H=!1,q=null,se=null,Se=null;return{setReversed:function(ve){if(H!==ve){let Pe=e.get("EXT_clip_control");H?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT);let tt=Se;Se=null,this.setClear(tt)}H=ve},getReversed:function(){return H},setTest:function(ve){ve?de(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(ve){q!==ve&&!O&&(i.depthMask(ve),q=ve)},setFunc:function(ve){if(H&&(ve=mb[ve]),se!==ve){switch(ve){case cl:i.depthFunc(i.NEVER);break;case ll:i.depthFunc(i.ALWAYS);break;case hl:i.depthFunc(i.LESS);break;case hr:i.depthFunc(i.LEQUAL);break;case ul:i.depthFunc(i.EQUAL);break;case fl:i.depthFunc(i.GEQUAL);break;case dl:i.depthFunc(i.GREATER);break;case pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=ve}},setLocked:function(ve){O=ve},setClear:function(ve){Se!==ve&&(H&&(ve=1-ve),i.clearDepth(ve),Se=ve)},reset:function(){O=!1,q=null,se=null,Se=null,H=!1}}}function s(){let O=!1,H=null,q=null,se=null,Se=null,ve=null,Pe=null,tt=null,rt=null;return{setTest:function(Je){O||(Je?de(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(Je){H!==Je&&!O&&(i.stencilMask(Je),H=Je)},setFunc:function(Je,At,Et){(q!==Je||se!==At||Se!==Et)&&(i.stencilFunc(Je,At,Et),q=Je,se=At,Se=Et)},setOp:function(Je,At,Et){(ve!==Je||Pe!==At||tt!==Et)&&(i.stencilOp(Je,At,Et),ve=Je,Pe=At,tt=Et)},setLocked:function(Je){O=Je},setClear:function(Je){rt!==Je&&(i.clearStencil(Je),rt=Je)},reset:function(){O=!1,H=null,q=null,se=null,Se=null,ve=null,Pe=null,tt=null,rt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],x=null,v=!1,g=null,m=null,E=null,M=null,b=null,I=null,T=null,A=new Ie(0,0,0),w=0,S=!1,_=null,R=null,B=null,W=null,X=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,K=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=K>=2);let Z=null,le={},$=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),Oe=new yt().fromArray($),J=new yt().fromArray(ae);function me(O,H,q,se){let Se=new Uint8Array(4),ve=i.createTexture();i.bindTexture(O,ve),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<q;Pe++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(H,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(H+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return ve}let xe={};xe[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(hr),Ee(!1),De(Lu),de(i.CULL_FACE),z(tn);function de(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Fe(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function qe(O,H){return u[O]!==H?(i.bindFramebuffer(O,H),u[O]=H,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=H),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=H),!0):!1}function We(O,H){let q=d,se=!1;if(O){q=f.get(H),q===void 0&&(q=[],f.set(H,q));let Se=O.textures;if(q.length!==Se.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,Pe=Se.length;ve<Pe;ve++)q[ve]=i.COLOR_ATTACHMENT0+ve;q.length=Se.length,se=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,se=!0);se&&i.drawBuffers(q)}function et(O){return x!==O?(i.useProgram(O),x=O,!0):!1}let pe={[Bn]:i.FUNC_ADD,[Fp]:i.FUNC_SUBTRACT,[Bp]:i.FUNC_REVERSE_SUBTRACT};pe[zp]=i.MIN,pe[kp]=i.MAX;let _e={[Tr]:i.ZERO,[Hp]:i.ONE,[Gp]:i.SRC_COLOR,[ol]:i.SRC_ALPHA,[qp]:i.SRC_ALPHA_SATURATE,[Qa]:i.DST_COLOR,[Ja]:i.DST_ALPHA,[Vp]:i.ONE_MINUS_SRC_COLOR,[al]:i.ONE_MINUS_SRC_ALPHA,[Xp]:i.ONE_MINUS_DST_COLOR,[Wp]:i.ONE_MINUS_DST_ALPHA,[Yp]:i.CONSTANT_COLOR,[jp]:i.ONE_MINUS_CONSTANT_COLOR,[Zp]:i.CONSTANT_ALPHA,[Kp]:i.ONE_MINUS_CONSTANT_ALPHA};function z(O,H,q,se,Se,ve,Pe,tt,rt,Je){if(O===tn){v===!0&&(Fe(i.BLEND),v=!1);return}if(v===!1&&(de(i.BLEND),v=!0),O!==Ah){if(O!==g||Je!==S){if((m!==Bn||b!==Bn)&&(i.blendEquation(i.FUNC_ADD),m=Bn,b=Bn),Je)switch(O){case or:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hi:i.blendFunc(i.ONE,i.ONE);break;case Uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case or:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}E=null,M=null,I=null,T=null,A.set(0,0,0),w=0,g=O,S=Je}return}Se=Se||H,ve=ve||q,Pe=Pe||se,(H!==m||Se!==b)&&(i.blendEquationSeparate(pe[H],pe[Se]),m=H,b=Se),(q!==E||se!==M||ve!==I||Pe!==T)&&(i.blendFuncSeparate(_e[q],_e[se],_e[ve],_e[Pe]),E=q,M=se,I=ve,T=Pe),(tt.equals(A)===!1||rt!==w)&&(i.blendColor(tt.r,tt.g,tt.b,rt),A.copy(tt),w=rt),g=O,S=!1}function Ye(O,H){O.side===zt?Fe(i.CULL_FACE):de(i.CULL_FACE);let q=O.side===Xt;H&&(q=!q),Ee(q),O.blending===or&&O.transparent===!1?z(tn):z(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let se=O.stencilWrite;a.setTest(se),se&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Qe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(O){_!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),_=O)}function De(O){O!==Np?(de(i.CULL_FACE),O!==R&&(O===Lu?i.cullFace(i.BACK):O===Op?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),R=O}function ye(O){O!==B&&(N&&i.lineWidth(O),B=O)}function Qe(O,H,q){O?(de(i.POLYGON_OFFSET_FILL),(W!==H||X!==q)&&(i.polygonOffset(H,q),W=H,X=q)):Fe(i.POLYGON_OFFSET_FILL)}function Be(O){O?de(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function F(O){O===void 0&&(O=i.TEXTURE0+Q-1),Z!==O&&(i.activeTexture(O),Z=O)}function P(O,H,q){q===void 0&&(Z===null?q=i.TEXTURE0+Q-1:q=Z);let se=le[q];se===void 0&&(se={type:void 0,texture:void 0},le[q]=se),(se.type!==O||se.texture!==H)&&(Z!==q&&(i.activeTexture(q),Z=q),i.bindTexture(O,H||xe[O]),se.type=O,se.texture=H)}function te(){let O=le[Z];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function fe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function je(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $e(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ve(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xe(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ke(O){Oe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Oe.copy(O))}function Y(O){J.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),J.copy(O))}function V(O,H){let q=l.get(H);q===void 0&&(q=new WeakMap,l.set(H,q));let se=q.get(O);se===void 0&&(se=i.getUniformBlockIndex(H,O.name),q.set(O,se))}function j(O,H){let se=l.get(H).get(O);c.get(H)!==se&&(i.uniformBlockBinding(H,se,O.__bindingPointIndex),c.set(H,se))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Z=null,le={},u={},f=new WeakMap,d=[],x=null,v=!1,g=null,m=null,E=null,M=null,b=null,I=null,T=null,A=new Ie(0,0,0),w=0,S=!1,_=null,R=null,B=null,W=null,X=null,Oe.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Fe,bindFramebuffer:qe,drawBuffers:We,useProgram:et,setBlending:z,setMaterial:Ye,setFlipSided:Ee,setCullFace:De,setLineWidth:ye,setPolygonOffset:Qe,setScissorTest:Be,activeTexture:F,bindTexture:P,unbindTexture:te,compressedTexImage2D:fe,compressedTexImage3D:ge,texImage2D:Ve,texImage3D:Xe,updateUBOMapping:V,uniformBlockBinding:j,texStorage2D:$e,texStorage3D:Me,texSubImage2D:he,texSubImage3D:je,compressedTexSubImage2D:Re,compressedTexSubImage3D:Le,scissor:Ke,viewport:Y,reset:ne}}function Lf(i,e,t,n){let s=xb(n);switch(t){case ud:return i*e;case dd:return i*e;case pd:return i*e*2;case yo:return i*e/s.components*s.byteLength;case Fh:return i*e/s.components*s.byteLength;case md:return i*e*2/s.components*s.byteLength;case Bh:return i*e*2/s.components*s.byteLength;case fd:return i*e*3/s.components*s.byteLength;case bn:return i*e*4/s.components*s.byteLength;case zh:return i*e*4/s.components*s.byteLength;case va:case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ya:case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vl:case yl:return Math.max(i,16)*Math.max(e,8)/4;case xl:case bl:return Math.max(i,8)*Math.max(e,8)/2;case _l:case Ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case El:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ma:case Bl:case zl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case gd:case kl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Hl:case Gl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xb(i){switch(i){case ti:case cd:return{byteLength:1,components:1};case co:case ld:case Zt:return{byteLength:2,components:1};case Nh:case Oh:return{byteLength:2,components:4};case ws:case Uh:case Mn:return{byteLength:4,components:1};case hd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function vb(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new be,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(F,P){return d?new OffscreenCanvas(F,P):lo("canvas")}function v(F,P,te){let fe=1,ge=Be(F);if((ge.width>te||ge.height>te)&&(fe=te/Math.max(ge.width,ge.height)),fe<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let he=Math.floor(fe*ge.width),je=Math.floor(fe*ge.height);u===void 0&&(u=x(he,je));let Re=P?x(he,je):u;return Re.width=he,Re.height=je,Re.getContext("2d").drawImage(F,0,0,he,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+he+"x"+je+")."),Re}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),F;return F}function g(F){return F.generateMipmaps}function m(F){i.generateMipmap(F)}function E(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(F,P,te,fe,ge=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let he=P;if(P===i.RED&&(te===i.FLOAT&&(he=i.R32F),te===i.HALF_FLOAT&&(he=i.R16F),te===i.UNSIGNED_BYTE&&(he=i.R8)),P===i.RED_INTEGER&&(te===i.UNSIGNED_BYTE&&(he=i.R8UI),te===i.UNSIGNED_SHORT&&(he=i.R16UI),te===i.UNSIGNED_INT&&(he=i.R32UI),te===i.BYTE&&(he=i.R8I),te===i.SHORT&&(he=i.R16I),te===i.INT&&(he=i.R32I)),P===i.RG&&(te===i.FLOAT&&(he=i.RG32F),te===i.HALF_FLOAT&&(he=i.RG16F),te===i.UNSIGNED_BYTE&&(he=i.RG8)),P===i.RG_INTEGER&&(te===i.UNSIGNED_BYTE&&(he=i.RG8UI),te===i.UNSIGNED_SHORT&&(he=i.RG16UI),te===i.UNSIGNED_INT&&(he=i.RG32UI),te===i.BYTE&&(he=i.RG8I),te===i.SHORT&&(he=i.RG16I),te===i.INT&&(he=i.RG32I)),P===i.RGB_INTEGER&&(te===i.UNSIGNED_BYTE&&(he=i.RGB8UI),te===i.UNSIGNED_SHORT&&(he=i.RGB16UI),te===i.UNSIGNED_INT&&(he=i.RGB32UI),te===i.BYTE&&(he=i.RGB8I),te===i.SHORT&&(he=i.RGB16I),te===i.INT&&(he=i.RGB32I)),P===i.RGBA_INTEGER&&(te===i.UNSIGNED_BYTE&&(he=i.RGBA8UI),te===i.UNSIGNED_SHORT&&(he=i.RGBA16UI),te===i.UNSIGNED_INT&&(he=i.RGBA32UI),te===i.BYTE&&(he=i.RGBA8I),te===i.SHORT&&(he=i.RGBA16I),te===i.INT&&(he=i.RGBA32I)),P===i.RGB&&te===i.UNSIGNED_INT_5_9_9_9_REV&&(he=i.RGB9_E5),P===i.RGBA){let je=ge?tc:pt.getTransfer(fe);te===i.FLOAT&&(he=i.RGBA32F),te===i.HALF_FLOAT&&(he=i.RGBA16F),te===i.UNSIGNED_BYTE&&(he=je===Rt?i.SRGB8_ALPHA8:i.RGBA8),te===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),te===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function b(F,P){let te;return F?P===null||P===ws||P===Zi?te=i.DEPTH24_STENCIL8:P===Mn?te=i.DEPTH32F_STENCIL8:P===co&&(te=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===ws||P===Zi?te=i.DEPTH_COMPONENT24:P===Mn?te=i.DEPTH_COMPONENT32F:P===co&&(te=i.DEPTH_COMPONENT16),te}function I(F,P){return g(F)===!0||F.isFramebufferTexture&&F.minFilter!==nn&&F.minFilter!==Wt?Math.log2(Math.max(P.width,P.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?P.mipmaps.length:1}function T(F){let P=F.target;P.removeEventListener("dispose",T),w(P),P.isVideoTexture&&h.delete(P)}function A(F){let P=F.target;P.removeEventListener("dispose",A),_(P)}function w(F){let P=n.get(F);if(P.__webglInit===void 0)return;let te=F.source,fe=f.get(te);if(fe){let ge=fe[P.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&S(F),Object.keys(fe).length===0&&f.delete(te)}n.remove(F)}function S(F){let P=n.get(F);i.deleteTexture(P.__webglTexture);let te=F.source,fe=f.get(te);delete fe[P.__cacheKey],o.memory.textures--}function _(F){let P=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(P.__webglFramebuffer[fe]))for(let ge=0;ge<P.__webglFramebuffer[fe].length;ge++)i.deleteFramebuffer(P.__webglFramebuffer[fe][ge]);else i.deleteFramebuffer(P.__webglFramebuffer[fe]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[fe])}else{if(Array.isArray(P.__webglFramebuffer))for(let fe=0;fe<P.__webglFramebuffer.length;fe++)i.deleteFramebuffer(P.__webglFramebuffer[fe]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let fe=0;fe<P.__webglColorRenderbuffer.length;fe++)P.__webglColorRenderbuffer[fe]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[fe]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let te=F.textures;for(let fe=0,ge=te.length;fe<ge;fe++){let he=n.get(te[fe]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),o.memory.textures--),n.remove(te[fe])}n.remove(F)}let R=0;function B(){R=0}function W(){let F=R;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),R+=1,F}function X(F){let P=[];return P.push(F.wrapS),P.push(F.wrapT),P.push(F.wrapR||0),P.push(F.magFilter),P.push(F.minFilter),P.push(F.anisotropy),P.push(F.internalFormat),P.push(F.format),P.push(F.type),P.push(F.generateMipmaps),P.push(F.premultiplyAlpha),P.push(F.flipY),P.push(F.unpackAlignment),P.push(F.colorSpace),P.join()}function Q(F,P){let te=n.get(F);if(F.isVideoTexture&&ye(F),F.isRenderTargetTexture===!1&&F.version>0&&te.__version!==F.version){let fe=F.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(te,F,P);return}}t.bindTexture(i.TEXTURE_2D,te.__webglTexture,i.TEXTURE0+P)}function N(F,P){let te=n.get(F);if(F.version>0&&te.__version!==F.version){J(te,F,P);return}t.bindTexture(i.TEXTURE_2D_ARRAY,te.__webglTexture,i.TEXTURE0+P)}function K(F,P){let te=n.get(F);if(F.version>0&&te.__version!==F.version){J(te,F,P);return}t.bindTexture(i.TEXTURE_3D,te.__webglTexture,i.TEXTURE0+P)}function k(F,P){let te=n.get(F);if(F.version>0&&te.__version!==F.version){me(te,F,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture,i.TEXTURE0+P)}let Z={[sn]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[ao]:i.MIRRORED_REPEAT},le={[nn]:i.NEAREST,[Lh]:i.NEAREST_MIPMAP_NEAREST,[ir]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[eo]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},$={[sm]:i.NEVER,[hm]:i.ALWAYS,[rm]:i.LESS,[vd]:i.LEQUAL,[om]:i.EQUAL,[lm]:i.GEQUAL,[am]:i.GREATER,[cm]:i.NOTEQUAL};function ae(F,P){if(P.type===Mn&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===Wt||P.magFilter===eo||P.magFilter===ir||P.magFilter===ei||P.minFilter===Wt||P.minFilter===eo||P.minFilter===ir||P.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,Z[P.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,Z[P.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,Z[P.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,le[P.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,le[P.minFilter]),P.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,$[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===nn||P.minFilter!==ir&&P.minFilter!==ei||P.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){let te=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function Oe(F,P){let te=!1;F.__webglInit===void 0&&(F.__webglInit=!0,P.addEventListener("dispose",T));let fe=P.source,ge=f.get(fe);ge===void 0&&(ge={},f.set(fe,ge));let he=X(P);if(he!==F.__cacheKey){ge[he]===void 0&&(ge[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,te=!0),ge[he].usedTimes++;let je=ge[F.__cacheKey];je!==void 0&&(ge[F.__cacheKey].usedTimes--,je.usedTimes===0&&S(P)),F.__cacheKey=he,F.__webglTexture=ge[he].texture}return te}function J(F,P,te){let fe=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(fe=i.TEXTURE_3D);let ge=Oe(F,P),he=P.source;t.bindTexture(fe,F.__webglTexture,i.TEXTURE0+te);let je=n.get(he);if(he.version!==je.__version||ge===!0){t.activeTexture(i.TEXTURE0+te);let Re=pt.getPrimaries(pt.workingColorSpace),Le=P.colorSpace===li?null:pt.getPrimaries(P.colorSpace),$e=P.colorSpace===li||Re===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Me=v(P.image,!1,s.maxTextureSize);Me=Qe(P,Me);let Ve=r.convert(P.format,P.colorSpace),Xe=r.convert(P.type),Ke=M(P.internalFormat,Ve,Xe,P.colorSpace,P.isVideoTexture);ae(fe,P);let Y,V=P.mipmaps,j=P.isVideoTexture!==!0,ne=je.__version===void 0||ge===!0,O=he.dataReady,H=I(P,Me);if(P.isDepthTexture)Ke=b(P.format===Ki,P.type),ne&&(j?t.texStorage2D(i.TEXTURE_2D,1,Ke,Me.width,Me.height):t.texImage2D(i.TEXTURE_2D,0,Ke,Me.width,Me.height,0,Ve,Xe,null));else if(P.isDataTexture)if(V.length>0){j&&ne&&t.texStorage2D(i.TEXTURE_2D,H,Ke,V[0].width,V[0].height);for(let q=0,se=V.length;q<se;q++)Y=V[q],j?O&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Y.width,Y.height,Ve,Xe,Y.data):t.texImage2D(i.TEXTURE_2D,q,Ke,Y.width,Y.height,0,Ve,Xe,Y.data);P.generateMipmaps=!1}else j?(ne&&t.texStorage2D(i.TEXTURE_2D,H,Ke,Me.width,Me.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me.width,Me.height,Ve,Xe,Me.data)):t.texImage2D(i.TEXTURE_2D,0,Ke,Me.width,Me.height,0,Ve,Xe,Me.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){j&&ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,H,Ke,V[0].width,V[0].height,Me.depth);for(let q=0,se=V.length;q<se;q++)if(Y=V[q],P.format!==bn)if(Ve!==null)if(j){if(O)if(P.layerUpdates.size>0){let Se=Lf(Y.width,Y.height,P.format,P.type);for(let ve of P.layerUpdates){let Pe=Y.data.subarray(ve*Se/Y.data.BYTES_PER_ELEMENT,(ve+1)*Se/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,ve,Y.width,Y.height,1,Ve,Pe)}P.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Y.width,Y.height,Me.depth,Ve,Y.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Ke,Y.width,Y.height,Me.depth,0,Y.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Y.width,Y.height,Me.depth,Ve,Xe,Y.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,Ke,Y.width,Y.height,Me.depth,0,Ve,Xe,Y.data)}else{j&&ne&&t.texStorage2D(i.TEXTURE_2D,H,Ke,V[0].width,V[0].height);for(let q=0,se=V.length;q<se;q++)Y=V[q],P.format!==bn?Ve!==null?j?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Y.width,Y.height,Ve,Y.data):t.compressedTexImage2D(i.TEXTURE_2D,q,Ke,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?O&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Y.width,Y.height,Ve,Xe,Y.data):t.texImage2D(i.TEXTURE_2D,q,Ke,Y.width,Y.height,0,Ve,Xe,Y.data)}else if(P.isDataArrayTexture)if(j){if(ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,H,Ke,Me.width,Me.height,Me.depth),O)if(P.layerUpdates.size>0){let q=Lf(Me.width,Me.height,P.format,P.type);for(let se of P.layerUpdates){let Se=Me.data.subarray(se*q/Me.data.BYTES_PER_ELEMENT,(se+1)*q/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,Me.width,Me.height,1,Ve,Xe,Se)}P.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ve,Xe,Me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ke,Me.width,Me.height,Me.depth,0,Ve,Xe,Me.data);else if(P.isData3DTexture)j?(ne&&t.texStorage3D(i.TEXTURE_3D,H,Ke,Me.width,Me.height,Me.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ve,Xe,Me.data)):t.texImage3D(i.TEXTURE_3D,0,Ke,Me.width,Me.height,Me.depth,0,Ve,Xe,Me.data);else if(P.isFramebufferTexture){if(ne)if(j)t.texStorage2D(i.TEXTURE_2D,H,Ke,Me.width,Me.height);else{let q=Me.width,se=Me.height;for(let Se=0;Se<H;Se++)t.texImage2D(i.TEXTURE_2D,Se,Ke,q,se,0,Ve,Xe,null),q>>=1,se>>=1}}else if(V.length>0){if(j&&ne){let q=Be(V[0]);t.texStorage2D(i.TEXTURE_2D,H,Ke,q.width,q.height)}for(let q=0,se=V.length;q<se;q++)Y=V[q],j?O&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Ve,Xe,Y):t.texImage2D(i.TEXTURE_2D,q,Ke,Ve,Xe,Y);P.generateMipmaps=!1}else if(j){if(ne){let q=Be(Me);t.texStorage2D(i.TEXTURE_2D,H,Ke,q.width,q.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ve,Xe,Me)}else t.texImage2D(i.TEXTURE_2D,0,Ke,Ve,Xe,Me);g(P)&&m(fe),je.__version=he.version,P.onUpdate&&P.onUpdate(P)}F.__version=P.version}function me(F,P,te){if(P.image.length!==6)return;let fe=Oe(F,P),ge=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+te);let he=n.get(ge);if(ge.version!==he.__version||fe===!0){t.activeTexture(i.TEXTURE0+te);let je=pt.getPrimaries(pt.workingColorSpace),Re=P.colorSpace===li?null:pt.getPrimaries(P.colorSpace),Le=P.colorSpace===li||je===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let $e=P.isCompressedTexture||P.image[0].isCompressedTexture,Me=P.image[0]&&P.image[0].isDataTexture,Ve=[];for(let se=0;se<6;se++)!$e&&!Me?Ve[se]=v(P.image[se],!0,s.maxCubemapSize):Ve[se]=Me?P.image[se].image:P.image[se],Ve[se]=Qe(P,Ve[se]);let Xe=Ve[0],Ke=r.convert(P.format,P.colorSpace),Y=r.convert(P.type),V=M(P.internalFormat,Ke,Y,P.colorSpace),j=P.isVideoTexture!==!0,ne=he.__version===void 0||fe===!0,O=ge.dataReady,H=I(P,Xe);ae(i.TEXTURE_CUBE_MAP,P);let q;if($e){j&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,H,V,Xe.width,Xe.height);for(let se=0;se<6;se++){q=Ve[se].mipmaps;for(let Se=0;Se<q.length;Se++){let ve=q[Se];P.format!==bn?Ke!==null?j?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,0,0,ve.width,ve.height,Ke,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,V,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,0,0,ve.width,ve.height,Ke,Y,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,V,ve.width,ve.height,0,Ke,Y,ve.data)}}}else{if(q=P.mipmaps,j&&ne){q.length>0&&H++;let se=Be(Ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,H,V,se.width,se.height)}for(let se=0;se<6;se++)if(Me){j?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ve[se].width,Ve[se].height,Ke,Y,Ve[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,V,Ve[se].width,Ve[se].height,0,Ke,Y,Ve[se].data);for(let Se=0;Se<q.length;Se++){let Pe=q[Se].image[se].image;j?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,0,0,Pe.width,Pe.height,Ke,Y,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,V,Pe.width,Pe.height,0,Ke,Y,Pe.data)}}else{j?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ke,Y,Ve[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,V,Ke,Y,Ve[se]);for(let Se=0;Se<q.length;Se++){let ve=q[Se];j?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,0,0,Ke,Y,ve.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,V,Ke,Y,ve.image[se])}}}g(P)&&m(i.TEXTURE_CUBE_MAP),he.__version=ge.version,P.onUpdate&&P.onUpdate(P)}F.__version=P.version}function xe(F,P,te,fe,ge,he){let je=r.convert(te.format,te.colorSpace),Re=r.convert(te.type),Le=M(te.internalFormat,je,Re,te.colorSpace),$e=n.get(P),Me=n.get(te);if(Me.__renderTarget=P,!$e.__hasExternalTextures){let Ve=Math.max(1,P.width>>he),Xe=Math.max(1,P.height>>he);ge===i.TEXTURE_3D||ge===i.TEXTURE_2D_ARRAY?t.texImage3D(ge,he,Le,Ve,Xe,P.depth,0,je,Re,null):t.texImage2D(ge,he,Le,Ve,Xe,0,je,Re,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),De(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ge,Me.__webglTexture,0,Ee(P)):(ge===i.TEXTURE_2D||ge>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,ge,Me.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(F,P,te){if(i.bindRenderbuffer(i.RENDERBUFFER,F),P.depthBuffer){let fe=P.depthTexture,ge=fe&&fe.isDepthTexture?fe.type:null,he=b(P.stencilBuffer,ge),je=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=Ee(P);De(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,he,P.width,P.height):te?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,he,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,he,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,je,i.RENDERBUFFER,F)}else{let fe=P.textures;for(let ge=0;ge<fe.length;ge++){let he=fe[ge],je=r.convert(he.format,he.colorSpace),Re=r.convert(he.type),Le=M(he.internalFormat,je,Re,he.colorSpace),$e=Ee(P);te&&De(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,Le,P.width,P.height):De(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e,Le,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Le,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(F,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let fe=n.get(P.depthTexture);fe.__renderTarget=P,(!fe.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),Q(P.depthTexture,0);let ge=fe.__webglTexture,he=Ee(P);if(P.depthTexture.format===ar)De(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0);else if(P.depthTexture.format===Ki)De(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function qe(F){let P=n.get(F),te=F.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==F.depthTexture){let fe=F.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),fe){let ge=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,fe.removeEventListener("dispose",ge)};fe.addEventListener("dispose",ge),P.__depthDisposeCallback=ge}P.__boundDepthTexture=fe}if(F.depthTexture&&!P.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Fe(P.__webglFramebuffer,F)}else if(te){P.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[fe]),P.__webglDepthbuffer[fe]===void 0)P.__webglDepthbuffer[fe]=i.createRenderbuffer(),de(P.__webglDepthbuffer[fe],F,!1);else{let ge=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=P.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,he)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),de(P.__webglDepthbuffer,F,!1);else{let fe=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,ge)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(F,P,te){let fe=n.get(F);P!==void 0&&xe(fe.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),te!==void 0&&qe(F)}function et(F){let P=F.texture,te=n.get(F),fe=n.get(P);F.addEventListener("dispose",A);let ge=F.textures,he=F.isWebGLCubeRenderTarget===!0,je=ge.length>1;if(je||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=P.version,o.memory.textures++),he){te.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(P.mipmaps&&P.mipmaps.length>0){te.__webglFramebuffer[Re]=[];for(let Le=0;Le<P.mipmaps.length;Le++)te.__webglFramebuffer[Re][Le]=i.createFramebuffer()}else te.__webglFramebuffer[Re]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){te.__webglFramebuffer=[];for(let Re=0;Re<P.mipmaps.length;Re++)te.__webglFramebuffer[Re]=i.createFramebuffer()}else te.__webglFramebuffer=i.createFramebuffer();if(je)for(let Re=0,Le=ge.length;Re<Le;Re++){let $e=n.get(ge[Re]);$e.__webglTexture===void 0&&($e.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&De(F)===!1){te.__webglMultisampledFramebuffer=i.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Re=0;Re<ge.length;Re++){let Le=ge[Re];te.__webglColorRenderbuffer[Re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,te.__webglColorRenderbuffer[Re]);let $e=r.convert(Le.format,Le.colorSpace),Me=r.convert(Le.type),Ve=M(Le.internalFormat,$e,Me,Le.colorSpace,F.isXRRenderTarget===!0),Xe=Ee(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Ve,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,te.__webglColorRenderbuffer[Re])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(te.__webglDepthRenderbuffer=i.createRenderbuffer(),de(te.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),ae(i.TEXTURE_CUBE_MAP,P);for(let Re=0;Re<6;Re++)if(P.mipmaps&&P.mipmaps.length>0)for(let Le=0;Le<P.mipmaps.length;Le++)xe(te.__webglFramebuffer[Re][Le],F,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Le);else xe(te.__webglFramebuffer[Re],F,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);g(P)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let Re=0,Le=ge.length;Re<Le;Re++){let $e=ge[Re],Me=n.get($e);t.bindTexture(i.TEXTURE_2D,Me.__webglTexture),ae(i.TEXTURE_2D,$e),xe(te.__webglFramebuffer,F,$e,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,0),g($e)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let Re=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Re=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Re,fe.__webglTexture),ae(Re,P),P.mipmaps&&P.mipmaps.length>0)for(let Le=0;Le<P.mipmaps.length;Le++)xe(te.__webglFramebuffer[Le],F,P,i.COLOR_ATTACHMENT0,Re,Le);else xe(te.__webglFramebuffer,F,P,i.COLOR_ATTACHMENT0,Re,0);g(P)&&m(Re),t.unbindTexture()}F.depthBuffer&&qe(F)}function pe(F){let P=F.textures;for(let te=0,fe=P.length;te<fe;te++){let ge=P[te];if(g(ge)){let he=E(F),je=n.get(ge).__webglTexture;t.bindTexture(he,je),m(he),t.unbindTexture()}}}let _e=[],z=[];function Ye(F){if(F.samples>0){if(De(F)===!1){let P=F.textures,te=F.width,fe=F.height,ge=i.COLOR_BUFFER_BIT,he=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,je=n.get(F),Re=P.length>1;if(Re)for(let Le=0;Le<P.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Le=0;Le<P.length;Le++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ge|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ge|=i.STENCIL_BUFFER_BIT)),Re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,je.__webglColorRenderbuffer[Le]);let $e=n.get(P[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$e,0)}i.blitFramebuffer(0,0,te,fe,0,0,te,fe,ge,i.NEAREST),c===!0&&(_e.length=0,z.length=0,_e.push(i.COLOR_ATTACHMENT0+Le),F.depthBuffer&&F.resolveDepthBuffer===!1&&(_e.push(he),z.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Re)for(let Le=0;Le<P.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,je.__webglColorRenderbuffer[Le]);let $e=n.get(P[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,$e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&c){let P=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function Ee(F){return Math.min(s.maxSamples,F.samples)}function De(F){let P=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function ye(F){let P=o.render.frame;h.get(F)!==P&&(h.set(F,P),F.update())}function Qe(F,P){let te=F.colorSpace,fe=F.format,ge=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||te!==cn&&te!==li&&(pt.getTransfer(te)===Rt?(fe!==bn||ge!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),P}function Be(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(l.width=F.naturalWidth||F.width,l.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(l.width=F.displayWidth,l.height=F.displayHeight):(l.width=F.width,l.height=F.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.setTexture2D=Q,this.setTexture2DArray=N,this.setTexture3D=K,this.setTextureCube=k,this.rebindTextures=We,this.setupRenderTarget=et,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=De}function bb(i,e){function t(n,s=li){let r,o=pt.getTransfer(s);if(n===ti)return i.UNSIGNED_BYTE;if(n===Nh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cd)return i.BYTE;if(n===ld)return i.SHORT;if(n===co)return i.UNSIGNED_SHORT;if(n===Uh)return i.INT;if(n===ws)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Zt)return i.HALF_FLOAT;if(n===ud)return i.ALPHA;if(n===fd)return i.RGB;if(n===bn)return i.RGBA;if(n===dd)return i.LUMINANCE;if(n===pd)return i.LUMINANCE_ALPHA;if(n===ar)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===yo)return i.RED;if(n===Fh)return i.RED_INTEGER;if(n===md)return i.RG;if(n===Bh)return i.RG_INTEGER;if(n===zh)return i.RGBA_INTEGER;if(n===va||n===ba||n===ya||n===_a)if(o===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xl||n===vl||n===bl||n===yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_l||n===Ml||n===Sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_l||n===Ml)return o===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===El||n===wl||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Dl||n===Ll||n===Ul||n===Nl||n===Ol||n===Fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===El)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Al)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Il)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ll)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ul)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ol)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ma||n===Bl||n===zl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ma)return o===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gd||n===kl||n===Hl||n===Gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ma)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var nh=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ct=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},yb={type:"move"},io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),m=this._getHandJoint(l,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;l.inputState.pinching&&f>d+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yb)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},_b=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Jt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wt({vertexShader:_b,fragmentShader:Mb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ge(new _t(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sh=class extends Ji{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,x=null,v=new ih,g=t.getContextAttributes(),m=null,E=null,M=[],b=[],I=new be,T=null,A=new jt;A.viewport=new yt;let w=new jt;w.viewport=new yt;let S=[A,w],_=new nh,R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let me=M[J];return me===void 0&&(me=new io,M[J]=me),me.getTargetRaySpace()},this.getControllerGrip=function(J){let me=M[J];return me===void 0&&(me=new io,M[J]=me),me.getGripSpace()},this.getHand=function(J){let me=M[J];return me===void 0&&(me=new io,M[J]=me),me.getHandSpace()};function W(J){let me=b.indexOf(J.inputSource);if(me===-1)return;let xe=M[me];xe!==void 0&&(xe.update(J.inputSource,J.frame,l||o),xe.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Q);for(let J=0;J<M.length;J++){let me=b[J];me!==null&&(b[J]=null,M[J].disconnect(me))}R=null,B=null,v.reset(),e.setRenderTarget(m),d=null,f=null,u=null,s=null,E=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Q),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){let me={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new qt(d.framebufferWidth,d.framebufferHeight,{format:bn,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let me=null,xe=null,de=null;g.depth&&(de=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=g.stencil?Ki:ar,xe=g.stencil?Zi:ws);let Fe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Fe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new qt(f.textureWidth,f.textureHeight,{format:bn,type:ti,depthTexture:new es(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Oe.setContext(s),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(J){for(let me=0;me<J.removed.length;me++){let xe=J.removed[me],de=b.indexOf(xe);de>=0&&(b[de]=null,M[de].disconnect(xe))}for(let me=0;me<J.added.length;me++){let xe=J.added[me],de=b.indexOf(xe);if(de===-1){for(let qe=0;qe<M.length;qe++)if(qe>=b.length){b.push(xe),de=qe;break}else if(b[qe]===null){b[qe]=xe,de=qe;break}if(de===-1)break}let Fe=M[de];Fe&&Fe.connect(xe)}}let N=new D,K=new D;function k(J,me,xe){N.setFromMatrixPosition(me.matrixWorld),K.setFromMatrixPosition(xe.matrixWorld);let de=N.distanceTo(K),Fe=me.projectionMatrix.elements,qe=xe.projectionMatrix.elements,We=Fe[14]/(Fe[10]-1),et=Fe[14]/(Fe[10]+1),pe=(Fe[9]+1)/Fe[5],_e=(Fe[9]-1)/Fe[5],z=(Fe[8]-1)/Fe[0],Ye=(qe[8]+1)/qe[0],Ee=We*z,De=We*Ye,ye=de/(-z+Ye),Qe=ye*-z;if(me.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Qe),J.translateZ(ye),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Fe[10]===-1)J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{let Be=We+ye,F=et+ye,P=Ee-Qe,te=De+(de-Qe),fe=pe*et/F*Be,ge=_e*et/F*Be;J.projectionMatrix.makePerspective(P,te,fe,ge,Be,F),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Z(J,me){me===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(me.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let me=J.near,xe=J.far;v.texture!==null&&(v.depthNear>0&&(me=v.depthNear),v.depthFar>0&&(xe=v.depthFar)),_.near=w.near=A.near=me,_.far=w.far=A.far=xe,(R!==_.near||B!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),R=_.near,B=_.far),A.layers.mask=J.layers.mask|2,w.layers.mask=J.layers.mask|4,_.layers.mask=A.layers.mask|w.layers.mask;let de=J.parent,Fe=_.cameras;Z(_,de);for(let qe=0;qe<Fe.length;qe++)Z(Fe[qe],de);Fe.length===2?k(_,A,w):_.projectionMatrix.copy(A.projectionMatrix),le(J,_,de)};function le(J,me,xe){xe===null?J.matrix.copy(me.matrixWorld):(J.matrix.copy(xe.matrixWorld),J.matrix.invert(),J.matrix.multiply(me.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=mr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let $=null;function ae(J,me){if(h=me.getViewerPose(l||o),x=me,h!==null){let xe=h.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let de=!1;xe.length!==_.cameras.length&&(_.cameras.length=0,de=!0);for(let qe=0;qe<xe.length;qe++){let We=xe[qe],et=null;if(d!==null)et=d.getViewport(We);else{let _e=u.getViewSubImage(f,We);et=_e.viewport,qe===0&&(e.setRenderTargetTextures(E,_e.colorTexture,f.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(E))}let pe=S[qe];pe===void 0&&(pe=new jt,pe.layers.enable(qe),pe.viewport=new yt,S[qe]=pe),pe.matrix.fromArray(We.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(We.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(et.x,et.y,et.width,et.height),qe===0&&(_.matrix.copy(pe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),de===!0&&_.cameras.push(pe)}let Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){let qe=u.getDepthInformation(xe[0]);qe&&qe.isValid&&qe.texture&&v.init(e,qe,s.renderState)}}for(let xe=0;xe<M.length;xe++){let de=b[xe],Fe=M[xe];de!==null&&Fe!==void 0&&Fe.update(de,me,l||o)}$&&$(J,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),x=null}let Oe=new Md;Oe.setAnimationLoop(ae),this.setAnimationLoop=function(J){$=J},this.dispose=function(){}}},Ms=new Hn,Sb=new Ze;function Eb(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,_d(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,E,M,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,b)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,E,M):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Xt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Xt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let E=e.get(m),M=E.envMap,b=E.envMapRotation;M&&(g.envMap.value=M,Ms.copy(b),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),g.envMapRotation.value.setFromMatrix4(Sb.makeRotationFromEuler(Ms)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,E,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*E,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,E){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let E=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wb(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,M){let b=M.program;n.uniformBlockBinding(E,b)}function l(E,M){let b=s[E.id];b===void 0&&(x(E),b=h(E),s[E.id]=b,E.addEventListener("dispose",g));let I=M.program;n.updateUBOMapping(E,I);let T=e.render.frame;r[E.id]!==T&&(f(E),r[E.id]=T)}function h(E){let M=u();E.__bindingPointIndex=M;let b=i.createBuffer(),I=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,I,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let M=s[E.id],b=E.uniforms,I=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,A=b.length;T<A;T++){let w=Array.isArray(b[T])?b[T]:[b[T]];for(let S=0,_=w.length;S<_;S++){let R=w[S];if(d(R,T,S,I)===!0){let B=R.__offset,W=Array.isArray(R.value)?R.value:[R.value],X=0;for(let Q=0;Q<W.length;Q++){let N=W[Q],K=v(N);typeof N=="number"||typeof N=="boolean"?(R.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,B+X,R.__data)):N.isMatrix3?(R.__data[0]=N.elements[0],R.__data[1]=N.elements[1],R.__data[2]=N.elements[2],R.__data[3]=0,R.__data[4]=N.elements[3],R.__data[5]=N.elements[4],R.__data[6]=N.elements[5],R.__data[7]=0,R.__data[8]=N.elements[6],R.__data[9]=N.elements[7],R.__data[10]=N.elements[8],R.__data[11]=0):(N.toArray(R.__data,X),X+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,M,b,I){let T=E.value,A=M+"_"+b;if(I[A]===void 0)return typeof T=="number"||typeof T=="boolean"?I[A]=T:I[A]=T.clone(),!0;{let w=I[A];if(typeof T=="number"||typeof T=="boolean"){if(w!==T)return I[A]=T,!0}else if(w.equals(T)===!1)return w.copy(T),!0}return!1}function x(E){let M=E.uniforms,b=0,I=16;for(let A=0,w=M.length;A<w;A++){let S=Array.isArray(M[A])?M[A]:[M[A]];for(let _=0,R=S.length;_<R;_++){let B=S[_],W=Array.isArray(B.value)?B.value:[B.value];for(let X=0,Q=W.length;X<Q;X++){let N=W[X],K=v(N),k=b%I,Z=k%K.boundary,le=k+Z;b+=Z,le!==0&&I-le<K.storage&&(b+=I-le),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=K.storage}}}let T=b%I;return T>0&&(b+=I-T),E.__size=b,E.__cache={},this}function v(E){let M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function g(E){let M=E.target;M.removeEventListener("dispose",g);let b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var Ia=class{constructor(e={}){let{canvas:t=Am(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let x=new Uint32Array(4),v=new Int32Array(4),g=null,m=null,E=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this.toneMapping=ji,this.toneMappingExposure=1;let b=this,I=!1,T=0,A=0,w=null,S=-1,_=null,R=new yt,B=new yt,W=null,X=new Ie(0),Q=0,N=t.width,K=t.height,k=1,Z=null,le=null,$=new yt(0,0,N,K),ae=new yt(0,0,N,K),Oe=!1,J=new ho,me=!1,xe=!1,de=new Ze,Fe=new Ze,qe=new D,We=new yt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function _e(){return w===null?k:1}let z=n;function Ye(p,y){return t.getContext(p,y)}try{let p={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wh}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",ve,!1),z===null){let y="webgl2";if(z=Ye(y,p),z===null)throw Ye(y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(p){throw console.error("THREE.WebGLRenderer: "+p.message),p}let Ee,De,ye,Qe,Be,F,P,te,fe,ge,he,je,Re,Le,$e,Me,Ve,Xe,Ke,Y,V,j,ne,O;function H(){Ee=new Hx(z),Ee.init(),j=new bb(z,Ee),De=new Nx(z,Ee,e,j),ye=new gb(z,Ee),De.reverseDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),Qe=new Wx(z),Be=new ib,F=new vb(z,Ee,ye,Be,De,j,Qe),P=new Fx(b),te=new kx(b),fe=new Jm(z),ne=new Lx(z,fe),ge=new Gx(z,fe,Qe,ne),he=new qx(z,ge,fe,Qe),Ke=new Xx(z,De,F),Me=new Ox(Be),je=new nb(b,P,te,Ee,De,ne,Me),Re=new Eb(b,Be),Le=new rb,$e=new ub(Ee),Xe=new Dx(b,P,te,ye,he,d,c),Ve=new pb(b,he,De),O=new wb(z,Qe,De,ye),Y=new Ux(z,Ee,Qe),V=new Vx(z,Ee,Qe),Qe.programs=je.programs,b.capabilities=De,b.extensions=Ee,b.properties=Be,b.renderLists=Le,b.shadowMap=Ve,b.state=ye,b.info=Qe}H();let q=new sh(b,z);this.xr=q,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let p=Ee.get("WEBGL_lose_context");p&&p.loseContext()},this.forceContextRestore=function(){let p=Ee.get("WEBGL_lose_context");p&&p.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(p){p!==void 0&&(k=p,this.setSize(N,K,!1))},this.getSize=function(p){return p.set(N,K)},this.setSize=function(p,y,C=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=p,K=y,t.width=Math.floor(p*k),t.height=Math.floor(y*k),C===!0&&(t.style.width=p+"px",t.style.height=y+"px"),this.setViewport(0,0,p,y)},this.getDrawingBufferSize=function(p){return p.set(N*k,K*k).floor()},this.setDrawingBufferSize=function(p,y,C){N=p,K=y,k=C,t.width=Math.floor(p*C),t.height=Math.floor(y*C),this.setViewport(0,0,p,y)},this.getCurrentViewport=function(p){return p.copy(R)},this.getViewport=function(p){return p.copy($)},this.setViewport=function(p,y,C,L){p.isVector4?$.set(p.x,p.y,p.z,p.w):$.set(p,y,C,L),ye.viewport(R.copy($).multiplyScalar(k).round())},this.getScissor=function(p){return p.copy(ae)},this.setScissor=function(p,y,C,L){p.isVector4?ae.set(p.x,p.y,p.z,p.w):ae.set(p,y,C,L),ye.scissor(B.copy(ae).multiplyScalar(k).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(p){ye.setScissorTest(Oe=p)},this.setOpaqueSort=function(p){Z=p},this.setTransparentSort=function(p){le=p},this.getClearColor=function(p){return p.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(p=!0,y=!0,C=!0){let L=0;if(p){let U=!1;if(w!==null){let G=w.texture.format;U=G===zh||G===Bh||G===Fh}if(U){let G=w.texture.type,ee=G===ti||G===ws||G===co||G===Zi||G===Nh||G===Oh,ce=Xe.getClearColor(),ie=Xe.getClearAlpha(),re=ce.r,oe=ce.g,ue=ce.b;ee?(x[0]=re,x[1]=oe,x[2]=ue,x[3]=ie,z.clearBufferuiv(z.COLOR,0,x)):(v[0]=re,v[1]=oe,v[2]=ue,v[3]=ie,z.clearBufferiv(z.COLOR,0,v))}else L|=z.COLOR_BUFFER_BIT}y&&(L|=z.DEPTH_BUFFER_BIT),C&&(L|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Le.dispose(),$e.dispose(),Be.dispose(),P.dispose(),te.dispose(),he.dispose(),ne.dispose(),O.dispose(),je.dispose(),q.dispose(),q.removeEventListener("sessionstart",at),q.removeEventListener("sessionend",fn),Rn.stop()};function se(p){p.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let p=Qe.autoReset,y=Ve.enabled,C=Ve.autoUpdate,L=Ve.needsUpdate,U=Ve.type;H(),Qe.autoReset=p,Ve.enabled=y,Ve.autoUpdate=C,Ve.needsUpdate=L,Ve.type=U}function ve(p){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",p.statusMessage)}function Pe(p){let y=p.target;y.removeEventListener("dispose",Pe),tt(y)}function tt(p){rt(p),Be.remove(p)}function rt(p){let y=Be.get(p).programs;y!==void 0&&(y.forEach(function(C){je.releaseProgram(C)}),p.isShaderMaterial&&je.releaseShaderCache(p))}this.renderBufferDirect=function(p,y,C,L,U,G){y===null&&(y=et);let ee=U.isMesh&&U.matrixWorld.determinant()<0,ce=Sc(p,y,C,L,U);ye.setMaterial(L,ee);let ie=C.index,re=1;if(L.wireframe===!0){if(ie=ge.getWireframeAttribute(C),ie===void 0)return;re=2}let oe=C.drawRange,ue=C.attributes.position,Te=oe.start*re,Ae=(oe.start+oe.count)*re;G!==null&&(Te=Math.max(Te,G.start*re),Ae=Math.min(Ae,(G.start+G.count)*re)),ie!==null?(Te=Math.max(Te,0),Ae=Math.min(Ae,ie.count)):ue!=null&&(Te=Math.max(Te,0),Ae=Math.min(Ae,ue.count));let ze=Ae-Te;if(ze<0||ze===1/0)return;ne.setup(U,L,ce,C,ie);let Ue,Ce=Y;if(ie!==null&&(Ue=fe.get(ie),Ce=V,Ce.setIndex(Ue)),U.isMesh)L.wireframe===!0?(ye.setLineWidth(L.wireframeLinewidth*_e()),Ce.setMode(z.LINES)):Ce.setMode(z.TRIANGLES);else if(U.isLine){let we=L.linewidth;we===void 0&&(we=1),ye.setLineWidth(we*_e()),U.isLineSegments?Ce.setMode(z.LINES):U.isLineLoop?Ce.setMode(z.LINE_LOOP):Ce.setMode(z.LINE_STRIP)}else U.isPoints?Ce.setMode(z.POINTS):U.isSprite&&Ce.setMode(z.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ce.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Ce.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let we=U._multiDrawStarts,ft=U._multiDrawCounts,nt=U._multiDrawCount,kt=ie?fe.get(ie).bytesPerElement:1,St=Be.get(L).currentProgram.getUniforms();for(let st=0;st<nt;st++)St.setValue(z,"_gl_DrawID",st),Ce.render(we[st]/kt,ft[st])}else if(U.isInstancedMesh)Ce.renderInstances(Te,ze,U.count);else if(C.isInstancedBufferGeometry){let we=C._maxInstanceCount!==void 0?C._maxInstanceCount:1/0,ft=Math.min(C.instanceCount,we);Ce.renderInstances(Te,ze,ft)}else Ce.render(Te,ze)};function Je(p,y,C){p.transparent===!0&&p.side===zt&&p.forceSinglePass===!1?(p.side=Xt,p.needsUpdate=!0,Fs(p,y,C),p.side=kn,p.needsUpdate=!0,Fs(p,y,C),p.side=zt):Fs(p,y,C)}this.compile=function(p,y,C=null){C===null&&(C=p),m=$e.get(C),m.init(y),M.push(m),C.traverseVisible(function(U){U.isLight&&U.layers.test(y.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),p!==C&&p.traverseVisible(function(U){U.isLight&&U.layers.test(y.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();let L=new Set;return p.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let G=U.material;if(G)if(Array.isArray(G))for(let ee=0;ee<G.length;ee++){let ce=G[ee];Je(ce,C,U),L.add(ce)}else Je(G,C,U),L.add(G)}),M.pop(),m=null,L},this.compileAsync=function(p,y,C=null){let L=this.compile(p,y,C);return new Promise(U=>{function G(){if(L.forEach(function(ee){Be.get(ee).currentProgram.isReady()&&L.delete(ee)}),L.size===0){U(p);return}setTimeout(G,10)}Ee.get("KHR_parallel_shader_compile")!==null?G():setTimeout(G,10)})};let At=null;function Et(p){At&&At(p)}function at(){Rn.stop()}function fn(){Rn.start()}let Rn=new Md;Rn.setAnimationLoop(Et),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(p){At=p,q.setAnimationLoop(p),p===null?Rn.stop():Rn.start()},q.addEventListener("sessionstart",at),q.addEventListener("sessionend",fn),this.render=function(p,y){if(y!==void 0&&y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(y),y=q.getCamera()),p.isScene===!0&&p.onBeforeRender(b,p,y,w),m=$e.get(p,M.length),m.init(y),M.push(m),Fe.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),J.setFromProjectionMatrix(Fe),xe=this.localClippingEnabled,me=Me.init(this.clippingPlanes,xe),g=Le.get(p,E.length),g.init(),E.push(g),q.enabled===!0&&q.isPresenting===!0){let G=b.xr.getDepthSensingMesh();G!==null&&gs(G,y,-1/0,b.sortObjects)}gs(p,y,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(Z,le),pe=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,pe&&Xe.addToRenderList(g,p),this.info.render.frame++,me===!0&&Me.beginShadows();let C=m.state.shadowsArray;Ve.render(C,p,y),me===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();let L=g.opaque,U=g.transmissive;if(m.setupLights(),y.isArrayCamera){let G=y.cameras;if(U.length>0)for(let ee=0,ce=G.length;ee<ce;ee++){let ie=G[ee];Oo(L,U,p,ie)}pe&&Xe.render(p);for(let ee=0,ce=G.length;ee<ce;ee++){let ie=G[ee];Br(g,p,ie,ie.viewport)}}else U.length>0&&Oo(L,U,p,y),pe&&Xe.render(p),Br(g,p,y);w!==null&&(F.updateMultisampleRenderTarget(w),F.updateRenderTargetMipmap(w)),p.isScene===!0&&p.onAfterRender(b,p,y),ne.resetDefaultState(),S=-1,_=null,M.pop(),M.length>0?(m=M[M.length-1],me===!0&&Me.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function gs(p,y,C,L){if(p.visible===!1)return;if(p.layers.test(y.layers)){if(p.isGroup)C=p.renderOrder;else if(p.isLOD)p.autoUpdate===!0&&p.update(y);else if(p.isLight)m.pushLight(p),p.castShadow&&m.pushShadow(p);else if(p.isSprite){if(!p.frustumCulled||J.intersectsSprite(p)){L&&We.setFromMatrixPosition(p.matrixWorld).applyMatrix4(Fe);let ee=he.update(p),ce=p.material;ce.visible&&g.push(p,ee,ce,C,We.z,null)}}else if((p.isMesh||p.isLine||p.isPoints)&&(!p.frustumCulled||J.intersectsObject(p))){let ee=he.update(p),ce=p.material;if(L&&(p.boundingSphere!==void 0?(p.boundingSphere===null&&p.computeBoundingSphere(),We.copy(p.boundingSphere.center)):(ee.boundingSphere===null&&ee.computeBoundingSphere(),We.copy(ee.boundingSphere.center)),We.applyMatrix4(p.matrixWorld).applyMatrix4(Fe)),Array.isArray(ce)){let ie=ee.groups;for(let re=0,oe=ie.length;re<oe;re++){let ue=ie[re],Te=ce[ue.materialIndex];Te&&Te.visible&&g.push(p,ee,Te,C,We.z,ue)}}else ce.visible&&g.push(p,ee,ce,C,We.z,null)}}let G=p.children;for(let ee=0,ce=G.length;ee<ce;ee++)gs(G[ee],y,C,L)}function Br(p,y,C,L){let U=p.opaque,G=p.transmissive,ee=p.transparent;m.setupLightsView(C),me===!0&&Me.setGlobalState(b.clippingPlanes,C),L&&ye.viewport(R.copy(L)),U.length>0&&Os(U,y,C),G.length>0&&Os(G,y,C),ee.length>0&&Os(ee,y,C),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Oo(p,y,C,L){if((C.isScene===!0?C.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[L.id]===void 0&&(m.state.transmissionRenderTarget[L.id]=new qt(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?Zt:ti,minFilter:ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));let G=m.state.transmissionRenderTarget[L.id],ee=L.viewport||R;G.setSize(ee.z,ee.w);let ce=b.getRenderTarget();b.setRenderTarget(G),b.getClearColor(X),Q=b.getClearAlpha(),Q<1&&b.setClearColor(16777215,.5),b.clear(),pe&&Xe.render(C);let ie=b.toneMapping;b.toneMapping=ji;let re=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),m.setupLightsView(L),me===!0&&Me.setGlobalState(b.clippingPlanes,L),Os(p,C,L),F.updateMultisampleRenderTarget(G),F.updateRenderTargetMipmap(G),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let ue=0,Te=y.length;ue<Te;ue++){let Ae=y[ue],ze=Ae.object,Ue=Ae.geometry,Ce=Ae.material,we=Ae.group;if(Ce.side===zt&&ze.layers.test(L.layers)){let ft=Ce.side;Ce.side=Xt,Ce.needsUpdate=!0,Fo(ze,C,L,Ue,Ce,we),Ce.side=ft,Ce.needsUpdate=!0,oe=!0}}oe===!0&&(F.updateMultisampleRenderTarget(G),F.updateRenderTargetMipmap(G))}b.setRenderTarget(ce),b.setClearColor(X,Q),re!==void 0&&(L.viewport=re),b.toneMapping=ie}function Os(p,y,C){let L=y.isScene===!0?y.overrideMaterial:null;for(let U=0,G=p.length;U<G;U++){let ee=p[U],ce=ee.object,ie=ee.geometry,re=L===null?ee.material:L,oe=ee.group;ce.layers.test(C.layers)&&Fo(ce,y,C,ie,re,oe)}}function Fo(p,y,C,L,U,G){p.onBeforeRender(b,y,C,L,U,G),p.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,p.matrixWorld),p.normalMatrix.getNormalMatrix(p.modelViewMatrix),U.onBeforeRender(b,y,C,L,p,G),U.transparent===!0&&U.side===zt&&U.forceSinglePass===!1?(U.side=Xt,U.needsUpdate=!0,b.renderBufferDirect(C,y,L,U,p,G),U.side=kn,U.needsUpdate=!0,b.renderBufferDirect(C,y,L,U,p,G),U.side=zt):b.renderBufferDirect(C,y,L,U,p,G),p.onAfterRender(b,y,C,L,U,G)}function Fs(p,y,C){y.isScene!==!0&&(y=et);let L=Be.get(p),U=m.state.lights,G=m.state.shadowsArray,ee=U.state.version,ce=je.getParameters(p,U.state,G,y,C),ie=je.getProgramCacheKey(ce),re=L.programs;L.environment=p.isMeshStandardMaterial?y.environment:null,L.fog=y.fog,L.envMap=(p.isMeshStandardMaterial?te:P).get(p.envMap||L.environment),L.envMapRotation=L.environment!==null&&p.envMap===null?y.environmentRotation:p.envMapRotation,re===void 0&&(p.addEventListener("dispose",Pe),re=new Map,L.programs=re);let oe=re.get(ie);if(oe!==void 0){if(L.currentProgram===oe&&L.lightsStateVersion===ee)return kr(p,ce),oe}else ce.uniforms=je.getUniforms(p),p.onBeforeCompile(ce,b),oe=je.acquireProgram(ce,ie),re.set(ie,oe),L.uniforms=ce.uniforms;let ue=L.uniforms;return(!p.isShaderMaterial&&!p.isRawShaderMaterial||p.clipping===!0)&&(ue.clippingPlanes=Me.uniform),kr(p,ce),L.needsLights=zi(p),L.lightsStateVersion=ee,L.needsLights&&(ue.ambientLightColor.value=U.state.ambient,ue.lightProbe.value=U.state.probe,ue.directionalLights.value=U.state.directional,ue.directionalLightShadows.value=U.state.directionalShadow,ue.spotLights.value=U.state.spot,ue.spotLightShadows.value=U.state.spotShadow,ue.rectAreaLights.value=U.state.rectArea,ue.ltc_1.value=U.state.rectAreaLTC1,ue.ltc_2.value=U.state.rectAreaLTC2,ue.pointLights.value=U.state.point,ue.pointLightShadows.value=U.state.pointShadow,ue.hemisphereLights.value=U.state.hemi,ue.directionalShadowMap.value=U.state.directionalShadowMap,ue.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ue.spotShadowMap.value=U.state.spotShadowMap,ue.spotLightMatrix.value=U.state.spotLightMatrix,ue.spotLightMap.value=U.state.spotLightMap,ue.pointShadowMap.value=U.state.pointShadowMap,ue.pointShadowMatrix.value=U.state.pointShadowMatrix),L.currentProgram=oe,L.uniformsList=null,oe}function zr(p){if(p.uniformsList===null){let y=p.currentProgram.getUniforms();p.uniformsList=lr.seqWithValue(y.seq,p.uniforms)}return p.uniformsList}function kr(p,y){let C=Be.get(p);C.outputColorSpace=y.outputColorSpace,C.batching=y.batching,C.batchingColor=y.batchingColor,C.instancing=y.instancing,C.instancingColor=y.instancingColor,C.instancingMorph=y.instancingMorph,C.skinning=y.skinning,C.morphTargets=y.morphTargets,C.morphNormals=y.morphNormals,C.morphColors=y.morphColors,C.morphTargetsCount=y.morphTargetsCount,C.numClippingPlanes=y.numClippingPlanes,C.numIntersection=y.numClipIntersection,C.vertexAlphas=y.vertexAlphas,C.vertexTangents=y.vertexTangents,C.toneMapping=y.toneMapping}function Sc(p,y,C,L,U){y.isScene!==!0&&(y=et),F.resetTextureUnits();let G=y.fog,ee=L.isMeshStandardMaterial?y.environment:null,ce=w===null?b.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:cn,ie=(L.isMeshStandardMaterial?te:P).get(L.envMap||ee),re=L.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,oe=!!C.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),ue=!!C.morphAttributes.position,Te=!!C.morphAttributes.normal,Ae=!!C.morphAttributes.color,ze=ji;L.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ze=b.toneMapping);let Ue=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,Ce=Ue!==void 0?Ue.length:0,we=Be.get(L),ft=m.state.lights;if(me===!0&&(xe===!0||p!==_)){let ut=p===_&&L.id===S;Me.setState(L,p,ut)}let nt=!1;L.version===we.__version?(we.needsLights&&we.lightsStateVersion!==ft.state.version||we.outputColorSpace!==ce||U.isBatchedMesh&&we.batching===!1||!U.isBatchedMesh&&we.batching===!0||U.isBatchedMesh&&we.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&we.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&we.instancing===!1||!U.isInstancedMesh&&we.instancing===!0||U.isSkinnedMesh&&we.skinning===!1||!U.isSkinnedMesh&&we.skinning===!0||U.isInstancedMesh&&we.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&we.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&we.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&we.instancingMorph===!1&&U.morphTexture!==null||we.envMap!==ie||L.fog===!0&&we.fog!==G||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Me.numPlanes||we.numIntersection!==Me.numIntersection)||we.vertexAlphas!==re||we.vertexTangents!==oe||we.morphTargets!==ue||we.morphNormals!==Te||we.morphColors!==Ae||we.toneMapping!==ze||we.morphTargetsCount!==Ce)&&(nt=!0):(nt=!0,we.__version=L.version);let kt=we.currentProgram;nt===!0&&(kt=Fs(L,y,U));let St=!1,st=!1,Ht=!1,dt=kt.getUniforms(),Pt=we.uniforms;if(ye.useProgram(kt.program)&&(St=!0,st=!0,Ht=!0),L.id!==S&&(S=L.id,st=!0),St||_!==p){ye.buffers.depth.getReversed()?(de.copy(p.projectionMatrix),Cm(de),Pm(de),dt.setValue(z,"projectionMatrix",de)):dt.setValue(z,"projectionMatrix",p.projectionMatrix),dt.setValue(z,"viewMatrix",p.matrixWorldInverse);let dn=dt.map.cameraPosition;dn!==void 0&&dn.setValue(z,qe.setFromMatrixPosition(p.matrixWorld)),De.logarithmicDepthBuffer&&dt.setValue(z,"logDepthBufFC",2/(Math.log(p.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&dt.setValue(z,"isOrthographic",p.isOrthographicCamera===!0),_!==p&&(_=p,st=!0,Ht=!0)}if(U.isSkinnedMesh){dt.setOptional(z,U,"bindMatrix"),dt.setOptional(z,U,"bindMatrixInverse");let ut=U.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),dt.setValue(z,"boneTexture",ut.boneTexture,F))}U.isBatchedMesh&&(dt.setOptional(z,U,"batchingTexture"),dt.setValue(z,"batchingTexture",U._matricesTexture,F),dt.setOptional(z,U,"batchingIdTexture"),dt.setValue(z,"batchingIdTexture",U._indirectTexture,F),dt.setOptional(z,U,"batchingColorTexture"),U._colorsTexture!==null&&dt.setValue(z,"batchingColorTexture",U._colorsTexture,F));let vt=C.morphAttributes;if((vt.position!==void 0||vt.normal!==void 0||vt.color!==void 0)&&Ke.update(U,C,kt),(st||we.receiveShadow!==U.receiveShadow)&&(we.receiveShadow=U.receiveShadow,dt.setValue(z,"receiveShadow",U.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(Pt.envMap.value=ie,Pt.flipEnvMap.value=ie.isCubeTexture&&ie.isRenderTargetTexture===!1?-1:1),L.isMeshStandardMaterial&&L.envMap===null&&y.environment!==null&&(Pt.envMapIntensity.value=y.environmentIntensity),st&&(dt.setValue(z,"toneMappingExposure",b.toneMappingExposure),we.needsLights&&mi(Pt,Ht),G&&L.fog===!0&&Re.refreshFogUniforms(Pt,G),Re.refreshMaterialUniforms(Pt,L,k,K,m.state.transmissionRenderTarget[p.id]),lr.upload(z,zr(we),Pt,F)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(lr.upload(z,zr(we),Pt,F),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&dt.setValue(z,"center",U.center),dt.setValue(z,"modelViewMatrix",U.modelViewMatrix),dt.setValue(z,"normalMatrix",U.normalMatrix),dt.setValue(z,"modelMatrix",U.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){let ut=L.uniformsGroups;for(let dn=0,Tn=ut.length;dn<Tn;dn++){let Cn=ut[dn];O.update(Cn,kt),O.bind(Cn,kt)}}return kt}function mi(p,y){p.ambientLightColor.needsUpdate=y,p.lightProbe.needsUpdate=y,p.directionalLights.needsUpdate=y,p.directionalLightShadows.needsUpdate=y,p.pointLights.needsUpdate=y,p.pointLightShadows.needsUpdate=y,p.spotLights.needsUpdate=y,p.spotLightShadows.needsUpdate=y,p.rectAreaLights.needsUpdate=y,p.hemisphereLights.needsUpdate=y}function zi(p){return p.isMeshLambertMaterial||p.isMeshToonMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isShadowMaterial||p.isShaderMaterial&&p.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(p,y,C){Be.get(p.texture).__webglTexture=y,Be.get(p.depthTexture).__webglTexture=C;let L=Be.get(p);L.__hasExternalTextures=!0,L.__autoAllocateDepthBuffer=C===void 0,L.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(p,y){let C=Be.get(p);C.__webglFramebuffer=y,C.__useDefaultFramebuffer=y===void 0},this.setRenderTarget=function(p,y=0,C=0){w=p,T=y,A=C;let L=!0,U=null,G=!1,ee=!1;if(p){let ie=Be.get(p);if(ie.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(z.FRAMEBUFFER,null),L=!1;else if(ie.__webglFramebuffer===void 0)F.setupRenderTarget(p);else if(ie.__hasExternalTextures)F.rebindTextures(p,Be.get(p.texture).__webglTexture,Be.get(p.depthTexture).__webglTexture);else if(p.depthBuffer){let ue=p.depthTexture;if(ie.__boundDepthTexture!==ue){if(ue!==null&&Be.has(ue)&&(p.width!==ue.image.width||p.height!==ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(p)}}let re=p.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(ee=!0);let oe=Be.get(p).__webglFramebuffer;p.isWebGLCubeRenderTarget?(Array.isArray(oe[y])?U=oe[y][C]:U=oe[y],G=!0):p.samples>0&&F.useMultisampledRTT(p)===!1?U=Be.get(p).__webglMultisampledFramebuffer:Array.isArray(oe)?U=oe[C]:U=oe,R.copy(p.viewport),B.copy(p.scissor),W=p.scissorTest}else R.copy($).multiplyScalar(k).floor(),B.copy(ae).multiplyScalar(k).floor(),W=Oe;if(ye.bindFramebuffer(z.FRAMEBUFFER,U)&&L&&ye.drawBuffers(p,U),ye.viewport(R),ye.scissor(B),ye.setScissorTest(W),G){let ie=Be.get(p.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+y,ie.__webglTexture,C)}else if(ee){let ie=Be.get(p.texture),re=y||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ie.__webglTexture,C||0,re)}S=-1},this.readRenderTargetPixels=function(p,y,C,L,U,G,ee){if(!(p&&p.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ce=Be.get(p).__webglFramebuffer;if(p.isWebGLCubeRenderTarget&&ee!==void 0&&(ce=ce[ee]),ce){ye.bindFramebuffer(z.FRAMEBUFFER,ce);try{let ie=p.texture,re=ie.format,oe=ie.type;if(!De.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}y>=0&&y<=p.width-L&&C>=0&&C<=p.height-U&&z.readPixels(y,C,L,U,j.convert(re),j.convert(oe),G)}finally{let ie=w!==null?Be.get(w).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(p,y,C,L,U,G,ee){if(!(p&&p.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ce=Be.get(p).__webglFramebuffer;if(p.isWebGLCubeRenderTarget&&ee!==void 0&&(ce=ce[ee]),ce){let ie=p.texture,re=ie.format,oe=ie.type;if(!De.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(y>=0&&y<=p.width-L&&C>=0&&C<=p.height-U){ye.bindFramebuffer(z.FRAMEBUFFER,ce);let ue=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ue),z.bufferData(z.PIXEL_PACK_BUFFER,G.byteLength,z.STREAM_READ),z.readPixels(y,C,L,U,j.convert(re),j.convert(oe),0);let Te=w!==null?Be.get(w).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,Te);let Ae=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Rm(z,Ae,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ue),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,G),z.deleteBuffer(ue),z.deleteSync(Ae),G}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(p,y=null,C=0){p.isTexture!==!0&&(Qr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),y=arguments[0]||null,p=arguments[1]);let L=Math.pow(2,-C),U=Math.floor(p.image.width*L),G=Math.floor(p.image.height*L),ee=y!==null?y.x:0,ce=y!==null?y.y:0;F.setTexture2D(p,0),z.copyTexSubImage2D(z.TEXTURE_2D,C,0,0,ee,ce,U,G),ye.unbindTexture()},this.copyTextureToTexture=function(p,y,C=null,L=null,U=0){p.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture function signature has changed."),L=arguments[0]||null,p=arguments[1],y=arguments[2],U=arguments[3]||0,C=null);let G,ee,ce,ie,re,oe,ue,Te,Ae,ze=p.isCompressedTexture?p.mipmaps[U]:p.image;C!==null?(G=C.max.x-C.min.x,ee=C.max.y-C.min.y,ce=C.isBox3?C.max.z-C.min.z:1,ie=C.min.x,re=C.min.y,oe=C.isBox3?C.min.z:0):(G=ze.width,ee=ze.height,ce=ze.depth||1,ie=0,re=0,oe=0),L!==null?(ue=L.x,Te=L.y,Ae=L.z):(ue=0,Te=0,Ae=0);let Ue=j.convert(y.format),Ce=j.convert(y.type),we;y.isData3DTexture?(F.setTexture3D(y,0),we=z.TEXTURE_3D):y.isDataArrayTexture||y.isCompressedArrayTexture?(F.setTexture2DArray(y,0),we=z.TEXTURE_2D_ARRAY):(F.setTexture2D(y,0),we=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,y.unpackAlignment);let ft=z.getParameter(z.UNPACK_ROW_LENGTH),nt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),kt=z.getParameter(z.UNPACK_SKIP_PIXELS),St=z.getParameter(z.UNPACK_SKIP_ROWS),st=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ze.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ze.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ie),z.pixelStorei(z.UNPACK_SKIP_ROWS,re),z.pixelStorei(z.UNPACK_SKIP_IMAGES,oe);let Ht=p.isDataArrayTexture||p.isData3DTexture,dt=y.isDataArrayTexture||y.isData3DTexture;if(p.isRenderTargetTexture||p.isDepthTexture){let Pt=Be.get(p),vt=Be.get(y),ut=Be.get(Pt.__renderTarget),dn=Be.get(vt.__renderTarget);ye.bindFramebuffer(z.READ_FRAMEBUFFER,ut.__webglFramebuffer),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,dn.__webglFramebuffer);for(let Tn=0;Tn<ce;Tn++)Ht&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Be.get(p).__webglTexture,U,oe+Tn),p.isDepthTexture?(dt&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Be.get(y).__webglTexture,U,Ae+Tn),z.blitFramebuffer(ie,re,G,ee,ue,Te,G,ee,z.DEPTH_BUFFER_BIT,z.NEAREST)):dt?z.copyTexSubImage3D(we,U,ue,Te,Ae+Tn,ie,re,G,ee):z.copyTexSubImage2D(we,U,ue,Te,Ae+Tn,ie,re,G,ee);ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else dt?p.isDataTexture||p.isData3DTexture?z.texSubImage3D(we,U,ue,Te,Ae,G,ee,ce,Ue,Ce,ze.data):y.isCompressedArrayTexture?z.compressedTexSubImage3D(we,U,ue,Te,Ae,G,ee,ce,Ue,ze.data):z.texSubImage3D(we,U,ue,Te,Ae,G,ee,ce,Ue,Ce,ze):p.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,U,ue,Te,G,ee,Ue,Ce,ze.data):p.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,U,ue,Te,ze.width,ze.height,Ue,ze.data):z.texSubImage2D(z.TEXTURE_2D,U,ue,Te,G,ee,Ue,Ce,ze);z.pixelStorei(z.UNPACK_ROW_LENGTH,ft),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,nt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,kt),z.pixelStorei(z.UNPACK_SKIP_ROWS,St),z.pixelStorei(z.UNPACK_SKIP_IMAGES,st),U===0&&y.generateMipmaps&&z.generateMipmap(we),ye.unbindTexture()},this.copyTextureToTexture3D=function(p,y,C=null,L=null,U=0){return p.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),C=arguments[0]||null,L=arguments[1]||null,p=arguments[2],y=arguments[3],U=arguments[4]||0),Qr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(p,y,C,L,U)},this.initRenderTarget=function(p){Be.get(p).__webglFramebuffer===void 0&&F.setupRenderTarget(p)},this.initTexture=function(p){p.isCubeTexture?F.setTextureCube(p,0):p.isData3DTexture?F.setTexture3D(p,0):p.isDataArrayTexture||p.isCompressedArrayTexture?F.setTexture2DArray(p,0):F.setTexture2D(p,0),ye.unbindTexture()},this.resetState=function(){T=0,A=0,w=null,ye.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}},Da=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ts=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},vr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vl,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new D,As=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array),r=It(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ui=class extends Sn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qs,Xr=new D,$s=new D,er=new D,tr=new be,qr=new be,Ad=new Ze,ra=new D,Yr=new D,oa=new D,Uf=new be,Jc=new be,Nf=new be,Ti=class extends Lt{constructor(e=new ui){if(super(),this.isSprite=!0,this.type="Sprite",Qs===void 0){Qs=new Ct;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vr(t,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new As(n,3,0,!1)),Qs.setAttribute("uv",new As(n,2,3,!1))}this.geometry=Qs,this.material=e,this.center=new be(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),Ad.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-er.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;aa(ra.set(-.5,-.5,0),er,o,$s,s,r),aa(Yr.set(.5,-.5,0),er,o,$s,s,r),aa(oa.set(.5,.5,0),er,o,$s,s,r),Uf.set(0,0),Jc.set(1,0),Nf.set(1,1);let a=e.ray.intersectTriangle(ra,Yr,oa,!1,Xr);if(a===null&&(aa(Yr.set(-.5,.5,0),er,o,$s,s,r),Jc.set(0,1),a=e.ray.intersectTriangle(ra,oa,Yr,!1,Xr),a===null))return;let c=e.ray.origin.distanceTo(Xr);c<e.near||c>e.far||t.push({distance:c,point:Xr.clone(),uv:qi.getInterpolation(Xr,ra,Yr,oa,Uf,Jc,Nf,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function aa(i,e,t,n,s,r){tr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(qr.x=r*tr.x-s*tr.y,qr.y=s*tr.x+r*tr.y):qr.copy(tr),i.copy(e),i.x+=qr.x,i.y+=qr.y,i.applyMatrix4(Ad)}var Of=new D,Ff=new yt,Bf=new yt,Tb=new D,zf=new Ze,ca=new D,Qc=new Ln,kf=new Ze,$c=new gr,La=class extends Ge{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ou,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ca),this.boundingBox.expandByPoint(ca)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ca),this.boundingSphere.expandByPoint(ca)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qc.copy(this.boundingSphere),Qc.applyMatrix4(s),e.ray.intersectsSphere(Qc)!==!1&&(kf.copy(s).invert(),$c.copy(e.ray).applyMatrix4(kf),!(this.boundingBox!==null&&$c.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$c)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ou?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===em?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Ff.fromBufferAttribute(s.attributes.skinIndex,e),Bf.fromBufferAttribute(s.attributes.skinWeight,e),Of.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Bf.getComponent(r);if(o!==0){let a=Ff.getComponent(r);zf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Tb.copy(Of).applyMatrix4(zf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},uo=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ni=class extends Jt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=nn,h=nn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hf=new Ze,Ab=new Ze,Ua=class i{constructor(e=[],t=[]){this.uuid=zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Ab;Hf.multiplyMatrices(a,t[r]),Hf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ni(t,e,e,bn,Mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new uo),this.bones.push(o),this.boneInverses.push(new Ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Rs=class extends bt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},nr=new Ze,Gf=new Ze,la=[],Vf=new mn,Rb=new Ze,jr=new Ge,Zr=new Ln,an=class extends Ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),Vf.copy(e.boundingBox).applyMatrix4(nr),this.boundingBox.union(Vf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),Zr.copy(e.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(Zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zr.copy(this.boundingSphere),Zr.applyMatrix4(n),e.ray.intersectsSphere(Zr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,nr),Gf.multiplyMatrices(n,nr),jr.matrixWorld=Gf,jr.raycast(e,la);for(let o=0,a=la.length;o<a;o++){let c=la[o];c.instanceId=r,c.object=this,t.push(c)}la.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ni(new Float32Array(s*this.count),s,this.count,yo,Mn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Cs=class extends Sn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Na=new D,Oa=new D,Wf=new Ze,Kr=new gr,ha=new Ln,el=new D,Xf=new D,br=class extends Lt{constructor(e=new Ct,t=new Cs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Na.fromBufferAttribute(t,s-1),Oa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Na.distanceTo(Oa);e.setAttribute("lineDistance",new Mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(s),ha.radius+=r,e.ray.intersectsSphere(ha)===!1)return;Wf.copy(s).invert(),Kr.copy(e.ray).applyMatrix4(Wf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let v=d,g=x-1;v<g;v+=l){let m=h.getX(v),E=h.getX(v+1),M=ua(this,e,Kr,c,m,E);M&&t.push(M)}if(this.isLineLoop){let v=h.getX(x-1),g=h.getX(d),m=ua(this,e,Kr,c,v,g);m&&t.push(m)}}else{let d=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let v=d,g=x-1;v<g;v+=l){let m=ua(this,e,Kr,c,v,v+1);m&&t.push(m)}if(this.isLineLoop){let v=ua(this,e,Kr,c,x-1,d);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ua(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Na.fromBufferAttribute(o,s),Oa.fromBufferAttribute(o,r),t.distanceSqToSegment(Na,Oa,el,Xf)>n)return;el.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(el);if(!(c<e.near||c>e.far))return{distance:c,point:Xf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var qf=new D,Yf=new D,yr=class extends br{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)qf.fromBufferAttribute(t,s),Yf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+qf.distanceTo(Yf);e.setAttribute("lineDistance",new Mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Fa=class extends br{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ai=class extends Sn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},jf=new Ze,rh=new gr,fa=new Ln,da=new D,ns=class extends Lt{constructor(e=new Ct,t=new Ai){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,e.ray.intersectsSphere(fa)===!1)return;jf.copy(s).invert(),rh.copy(e.ray).applyMatrix4(jf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let x=f,v=d;x<v;x++){let g=l.getX(x);da.fromBufferAttribute(u,g),Zf(da,g,c,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let x=f,v=d;x<v;x++)da.fromBufferAttribute(u,x),Zf(da,x,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zf(i,e,t,n,s,r,o){let a=rh.distanceSqToPoint(i);if(a<t){let c=new D;rh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ps=class extends Jt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new be:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new D,s=[],r=[],o=[],a=new D,c=new Ze;for(let d=0;d<=e;d++){let x=d/e;s[d]=this.getTangentAt(x,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(en(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,x))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(en(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],d*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fo=class extends Gn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new be){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},oh=class extends fo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Wh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var pa=new D,tl=new Wh,nl=new Wh,il=new Wh,po=class extends Gn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(pa.subVectors(s[0],s[1]).add(s[0]),l=pa);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(pa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=pa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),x<1e-4&&(x=v),g<1e-4&&(g=v),tl.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,x,v,g),nl.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,x,v,g),il.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,x,v,g)}else this.curveType==="catmullrom"&&(tl.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),nl.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),il.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(tl.calc(c),nl.calc(c),il.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Kf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Cb(i,e){let t=1-i;return t*t*e}function Pb(i,e){return 2*(1-i)*i*e}function Ib(i,e){return i*i*e}function so(i,e,t,n){return Cb(i,e)+Pb(i,t)+Ib(i,n)}function Db(i,e){let t=1-i;return t*t*t*e}function Lb(i,e){let t=1-i;return 3*t*t*i*e}function Ub(i,e){return 3*(1-i)*i*i*e}function Nb(i,e){return i*i*i*e}function ro(i,e,t,n,s){return Db(i,e)+Lb(i,t)+Ub(i,n)+Nb(i,s)}var Ba=class extends Gn{constructor(e=new be,t=new be,n=new be,s=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new be){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ro(e,s.x,r.x,o.x,a.x),ro(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ah=class extends Gn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ro(e,s.x,r.x,o.x,a.x),ro(e,s.y,r.y,o.y,a.y),ro(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},za=class extends Gn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ch=class extends Gn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ka=class extends Gn{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(so(e,s.x,r.x,o.x),so(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lh=class extends Gn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(so(e,s.x,r.x,o.x),so(e,s.y,r.y,o.y),so(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ha=class extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Kf(a,c.x,l.x,h.x,u.x),Kf(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new be().fromArray(s))}return this}},hh=Object.freeze({__proto__:null,ArcCurve:oh,CatmullRomCurve3:po,CubicBezierCurve:Ba,CubicBezierCurve3:ah,EllipseCurve:fo,LineCurve:za,LineCurve3:ch,QuadraticBezierCurve:ka,QuadraticBezierCurve3:lh,SplineCurve:Ha}),uh=class extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new hh[s.type]().fromJSON(s))}return this}},Ga=class extends uh{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new za(this.currentPoint.clone(),new be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ka(this.currentPoint.clone(),new be(e,t),new be(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Ba(this.currentPoint.clone(),new be(e,t),new be(n,s),new be(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ha(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new fo(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var gt=class i extends Ct{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],x=0,v=[],g=n/2,m=0;E(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Mt(u,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(d,2));function E(){let b=new D,I=new D,T=0,A=(t-e)/n;for(let w=0;w<=r;w++){let S=[],_=w/r,R=_*(t-e)+e;for(let B=0;B<=s;B++){let W=B/s,X=W*c+a,Q=Math.sin(X),N=Math.cos(X);I.x=R*Q,I.y=-_*n+g,I.z=R*N,u.push(I.x,I.y,I.z),b.set(Q,A,N).normalize(),f.push(b.x,b.y,b.z),d.push(W,1-_),S.push(x++)}v.push(S)}for(let w=0;w<s;w++)for(let S=0;S<r;S++){let _=v[S][w],R=v[S+1][w],B=v[S+1][w+1],W=v[S][w+1];(e>0||S!==0)&&(h.push(_,R,W),T+=3),(t>0||S!==r-1)&&(h.push(R,B,W),T+=3)}l.addGroup(m,T,0),m+=T}function M(b){let I=x,T=new be,A=new D,w=0,S=b===!0?e:t,_=b===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,g*_,0),f.push(0,_,0),d.push(.5,.5),x++;let R=x;for(let B=0;B<=s;B++){let X=B/s*c+a,Q=Math.cos(X),N=Math.sin(X);A.x=S*N,A.y=g*_,A.z=S*Q,u.push(A.x,A.y,A.z),f.push(0,_,0),T.x=Q*.5+.5,T.y=N*.5*_+.5,d.push(T.x,T.y),x++}for(let B=0;B<s;B++){let W=I+B,X=R+B;b===!0?h.push(X,X+1,W):h.push(X+1,X,W),w+=3}l.addGroup(m,w,b===!0?1:2),m+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Va=class i extends gt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var is=class extends Ga{constructor(e){super(e),this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ga().fromJSON(s))}return this}},Ob={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Rd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=Hb(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let x=t;x<s;x+=t)u=i[x],f=i[x+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return mo(r,o,t,a,c,d,0),o}};function Rd(i,e,t,n,s){let r,o;if(s===Qb(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Jf(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Jf(r,i[r],i[r+1],o);return o&&ic(o,o.next)&&(xo(o),o=o.next),o}function Is(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ic(t,t.next)||Vt(t.prev,t,t.next)===0)){if(xo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function mo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&qb(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Bb(i,n,s,r):Fb(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),xo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=zb(Is(i),e,t),mo(i,e,t,n,s,r,2)):o===2&&kb(i,e,t,n,s,r):mo(Is(i),e,t,n,s,r,1);break}}}function Fb(i){let e=i.prev,t=i,n=i.next;if(Vt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=d&&rr(s,a,r,c,o,l,x.x,x.y)&&Vt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Bb(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Vt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,x=h<u?h<f?h:f:u<f?u:f,v=a>c?a>l?a:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,m=fh(d,x,e,t,n),E=fh(v,g,e,t,n),M=i.prevZ,b=i.nextZ;for(;M&&M.z>=m&&b&&b.z<=E;){if(M.x>=d&&M.x<=v&&M.y>=x&&M.y<=g&&M!==s&&M!==o&&rr(a,h,c,u,l,f,M.x,M.y)&&Vt(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=d&&b.x<=v&&b.y>=x&&b.y<=g&&b!==s&&b!==o&&rr(a,h,c,u,l,f,b.x,b.y)&&Vt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=v&&M.y>=x&&M.y<=g&&M!==s&&M!==o&&rr(a,h,c,u,l,f,M.x,M.y)&&Vt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=E;){if(b.x>=d&&b.x<=v&&b.y>=x&&b.y<=g&&b!==s&&b!==o&&rr(a,h,c,u,l,f,b.x,b.y)&&Vt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function zb(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!ic(s,r)&&Cd(s,n,n.next,r)&&go(s,r)&&go(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),xo(n),xo(n.next),n=i=r),n=n.next}while(n!==i);return Is(n)}function kb(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zb(o,a)){let c=Pd(o,a);o=Is(o,o.next),c=Is(c,c.next),mo(o,e,t,n,s,r,0),mo(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Hb(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Rd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(jb(l));for(s.sort(Gb),r=0;r<s.length;r++)t=Vb(s[r],t);return t}function Gb(i,e){return i.x-e.x}function Vb(i,e){let t=Wb(i,e);if(!t)return e;let n=Pd(t,i);return Is(n,n.next),Is(t,t.next)}function Wb(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&rr(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),go(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Xb(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function Xb(i,e){return Vt(i.prev,i,e.prev)<0&&Vt(e.next,i,i.next)<0}function qb(i,e,t,n){let s=i;do s.z===0&&(s.z=fh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Yb(s)}function Yb(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function fh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function jb(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function rr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Zb(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Kb(i,e)&&(go(i,e)&&go(e,i)&&Jb(i,e)&&(Vt(i.prev,i,e.prev)||Vt(i,e.prev,e))||ic(i,e)&&Vt(i.prev,i,i.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ic(i,e){return i.x===e.x&&i.y===e.y}function Cd(i,e,t,n){let s=ga(Vt(i,e,t)),r=ga(Vt(i,e,n)),o=ga(Vt(t,n,i)),a=ga(Vt(t,n,e));return!!(s!==r&&o!==a||s===0&&ma(i,t,e)||r===0&&ma(i,n,e)||o===0&&ma(t,i,n)||a===0&&ma(t,e,n))}function ma(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ga(i){return i>0?1:i<0?-1:0}function Kb(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Cd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function go(i,e){return Vt(i.prev,i,i.next)<0?Vt(i,e,i.next)>=0&&Vt(i,i.prev,e)>=0:Vt(i,e,i.prev)<0||Vt(i,i.next,e)<0}function Jb(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Pd(i,e){let t=new dh(i.i,i.x,i.y),n=new dh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Jf(i,e,t,n){let s=new dh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Qb(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var oo=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Qf(e),$f(n,e);let o=e.length;t.forEach(Qf);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,$f(n,t[c]);let a=Ob.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Qf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function $f(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var _r=class i extends Ct{constructor(e=new is([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Mt(s,3)),this.setAttribute("uv",new Mt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:$b,M,b=!1,I,T,A,w;m&&(M=m.getSpacedPoints(h),b=!0,f=!1,I=m.computeFrenetFrames(h,!1),T=new D,A=new D,w=new D),f||(g=0,d=0,x=0,v=0);let S=a.extractPoints(l),_=S.shape,R=S.holes;if(!oo.isClockWise(_)){_=_.reverse();for(let pe=0,_e=R.length;pe<_e;pe++){let z=R[pe];oo.isClockWise(z)&&(R[pe]=z.reverse())}}let W=oo.triangulateShape(_,R),X=_;for(let pe=0,_e=R.length;pe<_e;pe++){let z=R[pe];_=_.concat(z)}function Q(pe,_e,z){return _e||console.error("THREE.ExtrudeGeometry: vec does not exist"),pe.clone().addScaledVector(_e,z)}let N=_.length,K=W.length;function k(pe,_e,z){let Ye,Ee,De,ye=pe.x-_e.x,Qe=pe.y-_e.y,Be=z.x-pe.x,F=z.y-pe.y,P=ye*ye+Qe*Qe,te=ye*F-Qe*Be;if(Math.abs(te)>Number.EPSILON){let fe=Math.sqrt(P),ge=Math.sqrt(Be*Be+F*F),he=_e.x-Qe/fe,je=_e.y+ye/fe,Re=z.x-F/ge,Le=z.y+Be/ge,$e=((Re-he)*F-(Le-je)*Be)/(ye*F-Qe*Be);Ye=he+ye*$e-pe.x,Ee=je+Qe*$e-pe.y;let Me=Ye*Ye+Ee*Ee;if(Me<=2)return new be(Ye,Ee);De=Math.sqrt(Me/2)}else{let fe=!1;ye>Number.EPSILON?Be>Number.EPSILON&&(fe=!0):ye<-Number.EPSILON?Be<-Number.EPSILON&&(fe=!0):Math.sign(Qe)===Math.sign(F)&&(fe=!0),fe?(Ye=-Qe,Ee=ye,De=Math.sqrt(P)):(Ye=ye,Ee=Qe,De=Math.sqrt(P/2))}return new be(Ye/De,Ee/De)}let Z=[];for(let pe=0,_e=X.length,z=_e-1,Ye=pe+1;pe<_e;pe++,z++,Ye++)z===_e&&(z=0),Ye===_e&&(Ye=0),Z[pe]=k(X[pe],X[z],X[Ye]);let le=[],$,ae=Z.concat();for(let pe=0,_e=R.length;pe<_e;pe++){let z=R[pe];$=[];for(let Ye=0,Ee=z.length,De=Ee-1,ye=Ye+1;Ye<Ee;Ye++,De++,ye++)De===Ee&&(De=0),ye===Ee&&(ye=0),$[Ye]=k(z[Ye],z[De],z[ye]);le.push($),ae=ae.concat($)}for(let pe=0;pe<g;pe++){let _e=pe/g,z=d*Math.cos(_e*Math.PI/2),Ye=x*Math.sin(_e*Math.PI/2)+v;for(let Ee=0,De=X.length;Ee<De;Ee++){let ye=Q(X[Ee],Z[Ee],Ye);de(ye.x,ye.y,-z)}for(let Ee=0,De=R.length;Ee<De;Ee++){let ye=R[Ee];$=le[Ee];for(let Qe=0,Be=ye.length;Qe<Be;Qe++){let F=Q(ye[Qe],$[Qe],Ye);de(F.x,F.y,-z)}}}let Oe=x+v;for(let pe=0;pe<N;pe++){let _e=f?Q(_[pe],ae[pe],Oe):_[pe];b?(A.copy(I.normals[0]).multiplyScalar(_e.x),T.copy(I.binormals[0]).multiplyScalar(_e.y),w.copy(M[0]).add(A).add(T),de(w.x,w.y,w.z)):de(_e.x,_e.y,0)}for(let pe=1;pe<=h;pe++)for(let _e=0;_e<N;_e++){let z=f?Q(_[_e],ae[_e],Oe):_[_e];b?(A.copy(I.normals[pe]).multiplyScalar(z.x),T.copy(I.binormals[pe]).multiplyScalar(z.y),w.copy(M[pe]).add(A).add(T),de(w.x,w.y,w.z)):de(z.x,z.y,u/h*pe)}for(let pe=g-1;pe>=0;pe--){let _e=pe/g,z=d*Math.cos(_e*Math.PI/2),Ye=x*Math.sin(_e*Math.PI/2)+v;for(let Ee=0,De=X.length;Ee<De;Ee++){let ye=Q(X[Ee],Z[Ee],Ye);de(ye.x,ye.y,u+z)}for(let Ee=0,De=R.length;Ee<De;Ee++){let ye=R[Ee];$=le[Ee];for(let Qe=0,Be=ye.length;Qe<Be;Qe++){let F=Q(ye[Qe],$[Qe],Ye);b?de(F.x,F.y+M[h-1].y,M[h-1].x+z):de(F.x,F.y,u+z)}}}J(),me();function J(){let pe=s.length/3;if(f){let _e=0,z=N*_e;for(let Ye=0;Ye<K;Ye++){let Ee=W[Ye];Fe(Ee[2]+z,Ee[1]+z,Ee[0]+z)}_e=h+g*2,z=N*_e;for(let Ye=0;Ye<K;Ye++){let Ee=W[Ye];Fe(Ee[0]+z,Ee[1]+z,Ee[2]+z)}}else{for(let _e=0;_e<K;_e++){let z=W[_e];Fe(z[2],z[1],z[0])}for(let _e=0;_e<K;_e++){let z=W[_e];Fe(z[0]+N*h,z[1]+N*h,z[2]+N*h)}}n.addGroup(pe,s.length/3-pe,0)}function me(){let pe=s.length/3,_e=0;xe(X,_e),_e+=X.length;for(let z=0,Ye=R.length;z<Ye;z++){let Ee=R[z];xe(Ee,_e),_e+=Ee.length}n.addGroup(pe,s.length/3-pe,1)}function xe(pe,_e){let z=pe.length;for(;--z>=0;){let Ye=z,Ee=z-1;Ee<0&&(Ee=pe.length-1);for(let De=0,ye=h+g*2;De<ye;De++){let Qe=N*De,Be=N*(De+1),F=_e+Ye+Qe,P=_e+Ee+Qe,te=_e+Ee+Be,fe=_e+Ye+Be;qe(F,P,te,fe)}}}function de(pe,_e,z){c.push(pe),c.push(_e),c.push(z)}function Fe(pe,_e,z){We(pe),We(_e),We(z);let Ye=s.length/3,Ee=E.generateTopUV(n,s,Ye-3,Ye-2,Ye-1);et(Ee[0]),et(Ee[1]),et(Ee[2])}function qe(pe,_e,z,Ye){We(pe),We(_e),We(Ye),We(_e),We(z),We(Ye);let Ee=s.length/3,De=E.generateSideWallUV(n,s,Ee-6,Ee-3,Ee-2,Ee-1);et(De[0]),et(De[1]),et(De[3]),et(De[1]),et(De[2]),et(De[3])}function We(pe){s.push(c[pe*3+0]),s.push(c[pe*3+1]),s.push(c[pe*3+2])}function et(pe){r.push(pe.x),r.push(pe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ey(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new hh[s.type]().fromJSON(s)),new i(n,e.options)}},$b={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new be(r,o),new be(a,c),new be(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],x=e[s*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new be(o,1-c),new be(l,1-u),new be(f,1-x),new be(v,1-m)]:[new be(a,1-c),new be(h,1-u),new be(d,1-x),new be(g,1-m)]}};function ey(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var En=class i extends Ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,f=new D,d=[],x=[],v=[],g=[];for(let m=0;m<=n;m++){let E=[],M=m/n,b=0;m===0&&o===0?b=.5/t:m===n&&c===Math.PI&&(b=-.5/t);for(let I=0;I<=t;I++){let T=I/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+M*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),g.push(T+b,1-M),E.push(l++)}h.push(E)}for(let m=0;m<n;m++)for(let E=0;E<t;E++){let M=h[m][E+1],b=h[m][E],I=h[m+1][E],T=h[m+1][E+1];(m!==0||o>0)&&d.push(M,b,T),(m!==n-1||c<Math.PI)&&d.push(b,I,T)}this.setIndex(d),this.setAttribute("position",new Mt(x,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ss=class i extends Ct{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new D,u=new D,f=new D;for(let d=0;d<=n;d++)for(let x=0;x<=s;x++){let v=x/s*r,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(x/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=s;x++){let v=(s+1)*d+x-1,g=(s+1)*(d-1)+x-1,m=(s+1)*(d-1)+x,E=(s+1)*d+x;o.push(v,g,E),o.push(g,m,E)}this.setIndex(o),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(c,3)),this.setAttribute("uv",new Mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Wa=class extends wt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},it=class extends Sn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Dt=class extends it{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return en(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Xa=class extends Sn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function xa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ty(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ny(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ed(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Id(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var rs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ph=class extends rs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fu,endingEnd:Fu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bu:r=e,a=2*t-n;break;case zu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Bu:o=e,c=2*n-t;break;case zu:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-t)/(s-t),v=x*x,g=v*x,m=-f*g+2*f*v-f*x,E=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*x+1,M=(-1-d)*g+(1.5+d)*v+.5*x,b=d*g-d*v;for(let I=0;I!==a;++I)r[I]=m*o[h+I]+E*o[l+I]+M*o[c+I]+b*o[u+I];return r}},mh=class extends rs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},gh=class extends rs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xa(t,this.TimeBufferType),this.values=xa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xa(e.times,Array),values:xa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ph(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case dr:t=this.InterpolantFactoryMethodDiscrete;break;case pr:t=this.InterpolantFactoryMethodLinear;break;case Ec:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return pr;case this.InterpolantFactoryMethodSmooth:return Ec}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&ty(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ec,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let x=0;x!==n;++x){let v=t[u+x];if(v!==t[f+x]||v!==t[d+x]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=pr;var os=class extends Vn{constructor(e,t,n){super(e,t,n)}};os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=dr;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var qa=class extends Vn{};qa.prototype.ValueTypeName="color";var Ri=class extends Vn{};Ri.prototype.ValueTypeName="number";var xh=class extends rs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Ot.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ci=class extends Vn{InterpolantFactoryMethodLinear(e){return new xh(this.times,this.values,this.getValueSize(),e)}};Ci.prototype.ValueTypeName="quaternion";Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends Vn{constructor(e,t,n){super(e,t,n)}};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=dr;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends Vn{};Pi.prototype.ValueTypeName="vector";var Ya=class{constructor(e="",t=-1,n=[],s=tm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=zn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(sy(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Vn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=ny(c);c=ed(c,1,h),l=ed(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ri(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,x,v){if(d.length!==0){let g=[],m=[];Id(d,g,m,x),g.length!==0&&v.push(new u(f,g,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let v=0;v<f[x].morphTargets.length;v++)d[f[x].morphTargets[v]]=-1;for(let v in d){let g=[],m=[];for(let E=0;E!==f[x].morphTargets.length;++E){let M=f[x];g.push(M.time),m.push(M.morphTarget===v?1:0)}s.push(new Ri(".morphTargetInfluence["+v+"]",g,m))}c=d.length*o}else{let d=".bones["+t[u].name+"]";n(Pi,d+".position",f,"pos",s),n(Ci,d+".quaternion",f,"rot",s),n(Pi,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function iy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ri;case"vector":case"vector2":case"vector3":case"vector4":return Pi;case"color":return qa;case"quaternion":return Ci;case"bool":case"boolean":return os;case"string":return as}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function sy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=iy(i.type);if(i.times===void 0){let t=[],n=[];Id(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Yi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},vh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],x=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null}}},ry=new vh,fi=class{constructor(e){this.manager=e!==void 0?e:ry,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};fi.DEFAULT_MATERIAL_NAME="__DEFAULT";var _i={},bh=class extends Error{constructor(e,t){super(e),this.response=t}},Mr=class extends fi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Yi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:n,onError:s});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=_i[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,x=d!==0,v=0,g=new ReadableStream({start(m){E();function E(){u.read().then(({done:M,value:b})=>{if(M)m.close();else{v+=b.byteLength;let I=new ProgressEvent("progress",{lengthComputable:x,loaded:v,total:d});for(let T=0,A=h.length;T<A;T++){let w=h[T];w.onProgress&&w.onProgress(I)}m.enqueue(b),E()}},M=>{m.error(M)})}}});return new Response(g)}else throw new bh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(x=>d.decode(x))}}}).then(l=>{Yi.add(e,l);let h=_i[e];delete _i[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=_i[e];if(h===void 0)throw this.manager.itemError(e),l;delete _i[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var yh=class extends fi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Yi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=lo("img");function c(){h(),Yi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var ja=class extends fi{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new ni,a=new Mr(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:Dn,o.wrapT=l.wrapT!==void 0?l.wrapT:Dn,o.magFilter=l.magFilter!==void 0?l.magFilter:Wt,o.minFilter=l.minFilter!==void 0?l.minFilter:Wt,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=ei),l.mipmapCount===1&&(o.minFilter=Wt),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,s),o}},cs=class extends fi{constructor(e){super(e)}load(e,t,n,s){let r=new Jt,o=new yh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Sr=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Za=class extends Sr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},sl=new Ze,td=new D,nd=new D,vo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ho,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;td.setFromMatrixPosition(e.matrixWorld),t.position.copy(td),nd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nd),t.updateMatrixWorld(),sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_h=class extends vo{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=mr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ls=class extends Sr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new _h}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},id=new Ze,Jr=new D,rl=new D,Mh=class extends vo{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jr),rl.copy(n.position),rl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(rl),n.updateMatrixWorld(),s.makeTranslation(-Jr.x,-Jr.y,-Jr.z),id.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(id)}},hs=class extends Sr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Mh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Sh=class extends vo{constructor(){super(new Qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Er=class extends Sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Sh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var us=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ka=class extends fi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Yi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Yi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Yi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Yi.add(e,c),r.manager.itemStart(e)}};var wr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=sd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function sd(){return performance.now()}var Xh="\\[\\]\\.:\\/",oy=new RegExp("["+Xh+"]","g"),qh="[^"+Xh+"]",ay="[^"+Xh.replace("\\.","")+"]",cy=/((?:WC+[\/:])*)/.source.replace("WC",qh),ly=/(WCOD+)?/.source.replace("WCOD",ay),hy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qh),uy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qh),fy=new RegExp("^"+cy+ly+hy+uy+"$"),dy=["material","materials","bones","map"],Eh=class{constructor(e,t,n){let s=n||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(oy,"")}static parseTrackName(e){let t=fy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);dy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=Eh;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var c_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);var So=class i extends Ge{constructor(){let e=i.SkyShader,t=new wt({name:e.name,uniforms:ln.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Xt,depthWrite:!1});super(new Ne(1,1,1),t),this.isSky=!0}};So.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},up:{value:new D(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var sc=class extends ts{constructor(){super();let e=new Ne;e.deleteAttribute("uv");let t=new it({side:Xt}),n=new it,s=new hs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ge(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ge(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Ge(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new Ge(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new Ge(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new Ge(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Ge(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new Ge(e,Rr(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new Ge(e,Rr(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let x=new Ge(e,Rr(17));x.position.set(14.904,12.198,-1.832),x.scale.set(.15,4.265,6.331),this.add(x);let v=new Ge(e,Rr(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);let g=new Ge(e,Rr(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let m=new Ge(e,Rr(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Rr(i){let e=new Yt;return e.color.setScalar(i),e}var ds={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var wn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},py=new Qi(-1,1,1,-1,0,1),Yh=class extends Ct{constructor(){super(),this.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Mt([0,2,0,0,2,0],2))}},my=new Yh,di=class{constructor(e){this._mesh=new Ge(my,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,py)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Cr=class extends wn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ln.clone(e.uniforms),this.material=new wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new di(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Eo=class extends wn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},rc=class extends wn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var oc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new be);this._width=n.width,this._height=n.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cr(ds),this.copyPass.material.blending=tn,this.clock=new wr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Eo!==void 0&&(o instanceof Eo?n=!0:o instanceof rc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ac=class extends wn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ie}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Dd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Pr=class i extends wn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new be(e.x,e.y):new be(256,256),this.clearColor=new Ie(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(r,o,{type:Zt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new qt(r,o,{type:Zt});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new qt(r,o,{type:Zt});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Dd;this.highPassUniforms=ln.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new wt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new be(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ds;this.copyUniforms=ln.clone(h.uniforms),this.blendMaterial=new wt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:hi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ie,this.oldClearAlpha=1,this.basic=new Yt,this.fsQuad=new di(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new be(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new be(.5,.5)},direction:{value:new be(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Pr.BlurDirectionX=new be(1,0);Pr.BlurDirectionY=new be(0,1);var Ld={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var cc=class extends wn{constructor(){super();let e=Ld;this.uniforms=ln.clone(e.uniforms),this.material=new Wa({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new di(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===Rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Rh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ch?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ph?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===bo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ih?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Dh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var wo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new be},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ze},cameraProjectionMatrixInverse:{value:new Ze},cameraWorldMatrix:{value:new Ze},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},To={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},lc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Ud(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=gy(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],c=2*Math.PI*a/n,l=new D(Math.cos(c),Math.sin(c),0).normalize();s[o*4]=(l.x*.5+.5)*255,s[o*4+1]=(l.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new ni(s,e,e);return r.wrapS=sn,r.wrapT=sn,r.needsUpdate=!0,r}function gy(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var Ao={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:jh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new be},cameraProjectionMatrixInverse:{value:new Ze},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function jh(i,e,t){let n=xy(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function xy(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new D(Math.cos(r),Math.sin(r),o))}return n}var hc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),l=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(c+l)*h,f=c-u,d=l-u,x=e-f,v=t-d,g,m;x>v?(g=1,m=0):(g=0,m=1);let E=x-g+h,M=v-m+h,b=x-1+2*h,I=v-1+2*h,T=c&255,A=l&255,w=this.perm[T+this.perm[A]]%12,S=this.perm[T+g+this.perm[A+m]]%12,_=this.perm[T+1+this.perm[A+1]]%12,R=.5-x*x-v*v;R<0?n=0:(R*=R,n=R*R*this.dot(this.grad3[w],x,v));let B=.5-E*E-M*M;B<0?s=0:(B*=B,s=B*B*this.dot(this.grad3[S],E,M));let W=.5-b*b-I*I;return W<0?r=0:(W*=W,r=W*W*this.dot(this.grad3[_],b,I)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),f=Math.floor(n+l),d=1/6,x=(h+u+f)*d,v=h-x,g=u-x,m=f-x,E=e-v,M=t-g,b=n-m,I,T,A,w,S,_;E>=M?M>=b?(I=1,T=0,A=0,w=1,S=1,_=0):E>=b?(I=1,T=0,A=0,w=1,S=0,_=1):(I=0,T=0,A=1,w=1,S=0,_=1):M<b?(I=0,T=0,A=1,w=0,S=1,_=1):E<b?(I=0,T=1,A=0,w=0,S=1,_=1):(I=0,T=1,A=0,w=1,S=1,_=0);let R=E-I+d,B=M-T+d,W=b-A+d,X=E-w+2*d,Q=M-S+2*d,N=b-_+2*d,K=E-1+3*d,k=M-1+3*d,Z=b-1+3*d,le=h&255,$=u&255,ae=f&255,Oe=this.perm[le+this.perm[$+this.perm[ae]]]%12,J=this.perm[le+I+this.perm[$+T+this.perm[ae+A]]]%12,me=this.perm[le+w+this.perm[$+S+this.perm[ae+_]]]%12,xe=this.perm[le+1+this.perm[$+1+this.perm[ae+1]]]%12,de=.6-E*E-M*M-b*b;de<0?s=0:(de*=de,s=de*de*this.dot3(this.grad3[Oe],E,M,b));let Fe=.6-R*R-B*B-W*W;Fe<0?r=0:(Fe*=Fe,r=Fe*Fe*this.dot3(this.grad3[J],R,B,W));let qe=.6-X*X-Q*Q-N*N;qe<0?o=0:(qe*=qe,o=qe*qe*this.dot3(this.grad3[me],X,Q,N));let We=.6-K*K-k*k-Z*Z;return We<0?a=0:(We*=We,a=We*We*this.dot3(this.grad3[xe],K,k,Z)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,u,f,d,x,v=(e+t+n+s)*c,g=Math.floor(e+v),m=Math.floor(t+v),E=Math.floor(n+v),M=Math.floor(s+v),b=(g+m+E+M)*l,I=g-b,T=m-b,A=E-b,w=M-b,S=e-I,_=t-T,R=n-A,B=s-w,W=S>_?32:0,X=S>R?16:0,Q=_>R?8:0,N=S>B?4:0,K=_>B?2:0,k=R>B?1:0,Z=W+X+Q+N+K+k,le=o[Z][0]>=3?1:0,$=o[Z][1]>=3?1:0,ae=o[Z][2]>=3?1:0,Oe=o[Z][3]>=3?1:0,J=o[Z][0]>=2?1:0,me=o[Z][1]>=2?1:0,xe=o[Z][2]>=2?1:0,de=o[Z][3]>=2?1:0,Fe=o[Z][0]>=1?1:0,qe=o[Z][1]>=1?1:0,We=o[Z][2]>=1?1:0,et=o[Z][3]>=1?1:0,pe=S-le+l,_e=_-$+l,z=R-ae+l,Ye=B-Oe+l,Ee=S-J+2*l,De=_-me+2*l,ye=R-xe+2*l,Qe=B-de+2*l,Be=S-Fe+3*l,F=_-qe+3*l,P=R-We+3*l,te=B-et+3*l,fe=S-1+4*l,ge=_-1+4*l,he=R-1+4*l,je=B-1+4*l,Re=g&255,Le=m&255,$e=E&255,Me=M&255,Ve=a[Re+a[Le+a[$e+a[Me]]]]%32,Xe=a[Re+le+a[Le+$+a[$e+ae+a[Me+Oe]]]]%32,Ke=a[Re+J+a[Le+me+a[$e+xe+a[Me+de]]]]%32,Y=a[Re+Fe+a[Le+qe+a[$e+We+a[Me+et]]]]%32,V=a[Re+1+a[Le+1+a[$e+1+a[Me+1]]]]%32,j=.6-S*S-_*_-R*R-B*B;j<0?h=0:(j*=j,h=j*j*this.dot4(r[Ve],S,_,R,B));let ne=.6-pe*pe-_e*_e-z*z-Ye*Ye;ne<0?u=0:(ne*=ne,u=ne*ne*this.dot4(r[Xe],pe,_e,z,Ye));let O=.6-Ee*Ee-De*De-ye*ye-Qe*Qe;O<0?f=0:(O*=O,f=O*O*this.dot4(r[Ke],Ee,De,ye,Qe));let H=.6-Be*Be-F*F-P*P-te*te;H<0?d=0:(H*=H,d=H*H*this.dot4(r[Y],Be,F,P,te));let q=.6-fe*fe-ge*ge-he*he-je*je;return q<0?x=0:(q*=q,x=q*q*this.dot4(r[V],fe,ge,he,je)),27*(h+u+f+d+x)}};var Ro=class i extends wn{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Ud(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new qt(this.width,this.height,{type:Zt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new wt({defines:Object.assign({},wo.defines),uniforms:ln.clone(wo.uniforms),vertexShader:wo.vertexShader,fragmentShader:wo.fragmentShader,blending:tn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Xa,this.normalMaterial.blending=tn,this.pdMaterial=new wt({defines:Object.assign({},Ao.defines),uniforms:ln.clone(Ao.uniforms),vertexShader:Ao.vertexShader,fragmentShader:Ao.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new wt({defines:Object.assign({},To.defines),uniforms:ln.clone(To.uniforms),vertexShader:To.vertexShader,fragmentShader:To.fragmentShader,blending:tn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new wt({uniforms:ln.clone(ds.uniforms),vertexShader:ds.vertexShader,fragmentShader:ds.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Qa,blendDst:Tr,blendEquation:Bn,blendSrcAlpha:Ja,blendDstAlpha:Tr,blendEquationAlpha:Bn}),this.blendMaterial=new wt({uniforms:ln.clone(lc.uniforms),vertexShader:lc.vertexShader,fragmentShader:lc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ah,blendSrc:Qa,blendDst:Tr,blendEquation:Bn,blendSrcAlpha:Ja,blendDstAlpha:Tr,blendEquationAlpha:Bn}),this.fsQuad=new di(null),this.originalClearColor=new Ie,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new es,this.depthTexture.format=Ki,this.depthTexture.type=Zi,this.normalRenderTarget=new qt(this.width,this.height,{minFilter:nn,magFilter:nn,type:Zt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=jh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new hc,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let c=o,l=a;s[(o*e+a)*4]=(t.noise(c,l)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new ni(s,e,e,bn,ti);return r.wrapS=sn,r.wrapT=sn,r.needsUpdate=!0,r}};Ro.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Wn=Uint8Array,Ir=Uint16Array,vy=Int32Array,Nd=new Wn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Od=new Wn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),by=new Wn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Fd=function(i,e){for(var t=new Ir(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new vy(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},Bd=Fd(Nd,2),zd=Bd.b,yy=Bd.r;zd[28]=258,yy[258]=28;var kd=Fd(Od,0),_y=kd.b,e1=kd.r,Jh=new Ir(32768);for(Tt=0;Tt<32768;++Tt)Ii=(Tt&43690)>>1|(Tt&21845)<<1,Ii=(Ii&52428)>>2|(Ii&13107)<<2,Ii=(Ii&61680)>>4|(Ii&3855)<<4,Jh[Tt]=((Ii&65280)>>8|(Ii&255)<<8)>>1;var Ii,Tt,Co=function(i,e,t){for(var n=i.length,s=0,r=new Ir(e);s<n;++s)i[s]&&++r[i[s]-1];var o=new Ir(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new Ir(1<<e);var c=15-e;for(s=0;s<n;++s)if(i[s])for(var l=s<<4|i[s],h=e-i[s],u=o[i[s]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[Jh[u]>>c]=l}else for(a=new Ir(n),s=0;s<n;++s)i[s]&&(a[s]=Jh[o[i[s]-1]++]>>15-i[s]);return a},Po=new Wn(288);for(Tt=0;Tt<144;++Tt)Po[Tt]=8;var Tt;for(Tt=144;Tt<256;++Tt)Po[Tt]=9;var Tt;for(Tt=256;Tt<280;++Tt)Po[Tt]=7;var Tt;for(Tt=280;Tt<288;++Tt)Po[Tt]=8;var Tt,Hd=new Wn(32);for(Tt=0;Tt<32;++Tt)Hd[Tt]=5;var Tt;var My=Co(Po,9,1);var Sy=Co(Hd,5,1),Zh=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},si=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Kh=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Ey=function(i){return(i+7)/8|0},wy=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new Wn(i.subarray(e,t))};var Ty=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ri=function(i,e,t){var n=new Error(e||Ty[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,ri),!t)throw n;return n},Ay=function(i,e,t,n){var s=i.length,r=n?n.length:0;if(!s||e.f&&!e.l)return t||new Wn(0);var o=!t,a=o||e.i!=2,c=e.i;o&&(t=new Wn(s*3));var l=function(et){var pe=t.length;if(et>pe){var _e=new Wn(Math.max(pe*2,et));_e.set(t),t=_e}},h=e.f||0,u=e.p||0,f=e.b||0,d=e.l,x=e.d,v=e.m,g=e.n,m=s*8;do{if(!d){h=si(i,u,1);var E=si(i,u+1,3);if(u+=3,E)if(E==1)d=My,x=Sy,v=9,g=5;else if(E==2){var T=si(i,u,31)+257,A=si(i,u+10,15)+4,w=T+si(i,u+5,31)+1;u+=14;for(var S=new Wn(w),_=new Wn(19),R=0;R<A;++R)_[by[R]]=si(i,u+R*3,7);u+=A*3;for(var B=Zh(_),W=(1<<B)-1,X=Co(_,B,1),R=0;R<w;){var Q=X[si(i,u,W)];u+=Q&15;var M=Q>>4;if(M<16)S[R++]=M;else{var N=0,K=0;for(M==16?(K=3+si(i,u,3),u+=2,N=S[R-1]):M==17?(K=3+si(i,u,7),u+=3):M==18&&(K=11+si(i,u,127),u+=7);K--;)S[R++]=N}}var k=S.subarray(0,T),Z=S.subarray(T);v=Zh(k),g=Zh(Z),d=Co(k,v,1),x=Co(Z,g,1)}else ri(1);else{var M=Ey(u)+4,b=i[M-4]|i[M-3]<<8,I=M+b;if(I>s){c&&ri(0);break}a&&l(f+b),t.set(i.subarray(M,I),f),e.b=f+=b,e.p=u=I*8,e.f=h;continue}if(u>m){c&&ri(0);break}}a&&l(f+131072);for(var le=(1<<v)-1,$=(1<<g)-1,ae=u;;ae=u){var N=d[Kh(i,u)&le],Oe=N>>4;if(u+=N&15,u>m){c&&ri(0);break}if(N||ri(2),Oe<256)t[f++]=Oe;else if(Oe==256){ae=u,d=null;break}else{var J=Oe-254;if(Oe>264){var R=Oe-257,me=Nd[R];J=si(i,u,(1<<me)-1)+zd[R],u+=me}var xe=x[Kh(i,u)&$],de=xe>>4;xe||ri(3),u+=xe&15;var Z=_y[de];if(de>3){var me=Od[de];Z+=Kh(i,u)&(1<<me)-1,u+=me}if(u>m){c&&ri(0);break}a&&l(f+131072);var Fe=f+J;if(f<Z){var qe=r-Z,We=Math.min(Z,Fe);for(qe+f<0&&ri(3);f<We;++f)t[f]=n[qe+f]}for(;f<Fe;++f)t[f]=t[f-Z]}}e.l=d,e.p=ae,e.b=f,e.f=h,d&&(h=1,e.m=v,e.d=x,e.n=g)}while(!h);return f!=t.length&&o?wy(t,0,f):t.subarray(0,f)};var Ry=new Wn(0);var Cy=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&ri(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&ri(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function Io(i,e){return Ay(i.subarray(Cy(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var Py=typeof TextDecoder<"u"&&new TextDecoder,Iy=0;try{Py.decode(Ry,{stream:!0}),Iy=1}catch{}var uc=class extends ja{constructor(e){super(e),this.type=Zt}parse(e){let S=Math.pow(2.7182818,2.2);function _(p,y){let C=0;for(let U=0;U<65536;++U)(U==0||p[U>>3]&1<<(U&7))&&(y[C++]=U);let L=C-1;for(;C<65536;)y[C++]=0;return L}function R(p){for(let y=0;y<16384;y++)p[y]={},p[y].len=0,p[y].lit=0,p[y].p=null}let B={l:0,c:0,lc:0};function W(p,y,C,L,U){for(;C<p;)y=y<<8|Y(L,U),C+=8;C-=p,B.l=y>>C&(1<<p)-1,B.c=y,B.lc=C}let X=new Array(59);function Q(p){for(let C=0;C<=58;++C)X[C]=0;for(let C=0;C<65537;++C)X[p[C]]+=1;let y=0;for(let C=58;C>0;--C){let L=y+X[C]>>1;X[C]=y,y=L}for(let C=0;C<65537;++C){let L=p[C];L>0&&(p[C]=L|X[L]++<<6)}}function N(p,y,C,L,U,G){let ee=y,ce=0,ie=0;for(;L<=U;L++){if(ee.value-y.value>C)return!1;W(6,ce,ie,p,ee);let re=B.l;if(ce=B.c,ie=B.lc,G[L]=re,re==63){if(ee.value-y.value>C)throw new Error("Something wrong with hufUnpackEncTable");W(8,ce,ie,p,ee);let oe=B.l+6;if(ce=B.c,ie=B.lc,L+oe>U+1)throw new Error("Something wrong with hufUnpackEncTable");for(;oe--;)G[L++]=0;L--}else if(re>=59){let oe=re-59+2;if(L+oe>U+1)throw new Error("Something wrong with hufUnpackEncTable");for(;oe--;)G[L++]=0;L--}}Q(G)}function K(p){return p&63}function k(p){return p>>6}function Z(p,y,C,L){for(;y<=C;y++){let U=k(p[y]),G=K(p[y]);if(U>>G)throw new Error("Invalid table entry");if(G>14){let ee=L[U>>G-14];if(ee.len)throw new Error("Invalid table entry");if(ee.lit++,ee.p){let ce=ee.p;ee.p=new Array(ee.lit);for(let ie=0;ie<ee.lit-1;++ie)ee.p[ie]=ce[ie]}else ee.p=new Array(1);ee.p[ee.lit-1]=y}else if(G){let ee=0;for(let ce=1<<14-G;ce>0;ce--){let ie=L[(U<<14-G)+ee];if(ie.len||ie.p)throw new Error("Invalid table entry");ie.len=G,ie.lit=y,ee++}}}return!0}let le={c:0,lc:0};function $(p,y,C,L){p=p<<8|Y(C,L),y+=8,le.c=p,le.lc=y}let ae={c:0,lc:0};function Oe(p,y,C,L,U,G,ee,ce,ie){if(p==y){L<8&&($(C,L,U,G),C=le.c,L=le.lc),L-=8;let re=C>>L;if(re=new Uint8Array([re])[0],ce.value+re>ie)return!1;let oe=ee[ce.value-1];for(;re-- >0;)ee[ce.value++]=oe}else if(ce.value<ie)ee[ce.value++]=p;else return!1;ae.c=C,ae.lc=L}function J(p){return p&65535}function me(p){let y=J(p);return y>32767?y-65536:y}let xe={a:0,b:0};function de(p,y){let C=me(p),U=me(y),G=C+(U&1)+(U>>1),ee=G,ce=G-U;xe.a=ee,xe.b=ce}function Fe(p,y){let C=J(p),L=J(y),U=C-(L>>1)&65535,G=L+U-32768&65535;xe.a=G,xe.b=U}function qe(p,y,C,L,U,G,ee){let ce=ee<16384,ie=C>U?U:C,re=1,oe,ue;for(;re<=ie;)re<<=1;for(re>>=1,oe=re,re>>=1;re>=1;){ue=0;let Te=ue+G*(U-oe),Ae=G*re,ze=G*oe,Ue=L*re,Ce=L*oe,we,ft,nt,kt;for(;ue<=Te;ue+=ze){let St=ue,st=ue+L*(C-oe);for(;St<=st;St+=Ce){let Ht=St+Ue,dt=St+Ae,Pt=dt+Ue;ce?(de(p[St+y],p[dt+y]),we=xe.a,nt=xe.b,de(p[Ht+y],p[Pt+y]),ft=xe.a,kt=xe.b,de(we,ft),p[St+y]=xe.a,p[Ht+y]=xe.b,de(nt,kt),p[dt+y]=xe.a,p[Pt+y]=xe.b):(Fe(p[St+y],p[dt+y]),we=xe.a,nt=xe.b,Fe(p[Ht+y],p[Pt+y]),ft=xe.a,kt=xe.b,Fe(we,ft),p[St+y]=xe.a,p[Ht+y]=xe.b,Fe(nt,kt),p[dt+y]=xe.a,p[Pt+y]=xe.b)}if(C&re){let Ht=St+Ae;ce?de(p[St+y],p[Ht+y]):Fe(p[St+y],p[Ht+y]),we=xe.a,p[Ht+y]=xe.b,p[St+y]=we}}if(U&re){let St=ue,st=ue+L*(C-oe);for(;St<=st;St+=Ce){let Ht=St+Ue;ce?de(p[St+y],p[Ht+y]):Fe(p[St+y],p[Ht+y]),we=xe.a,p[Ht+y]=xe.b,p[St+y]=we}}oe=re,re>>=1}return ue}function We(p,y,C,L,U,G,ee,ce,ie){let re=0,oe=0,ue=ee,Te=Math.trunc(L.value+(U+7)/8);for(;L.value<Te;)for($(re,oe,C,L),re=le.c,oe=le.lc;oe>=14;){let ze=re>>oe-14&16383,Ue=y[ze];if(Ue.len)oe-=Ue.len,Oe(Ue.lit,G,re,oe,C,L,ce,ie,ue),re=ae.c,oe=ae.lc;else{if(!Ue.p)throw new Error("hufDecode issues");let Ce;for(Ce=0;Ce<Ue.lit;Ce++){let we=K(p[Ue.p[Ce]]);for(;oe<we&&L.value<Te;)$(re,oe,C,L),re=le.c,oe=le.lc;if(oe>=we&&k(p[Ue.p[Ce]])==(re>>oe-we&(1<<we)-1)){oe-=we,Oe(Ue.p[Ce],G,re,oe,C,L,ce,ie,ue),re=ae.c,oe=ae.lc;break}}if(Ce==Ue.lit)throw new Error("hufDecode issues")}}let Ae=8-U&7;for(re>>=Ae,oe-=Ae;oe>0;){let ze=y[re<<14-oe&16383];if(ze.len)oe-=ze.len,Oe(ze.lit,G,re,oe,C,L,ce,ie,ue),re=ae.c,oe=ae.lc;else throw new Error("hufDecode issues")}return!0}function et(p,y,C,L,U,G){let ee={value:0},ce=C.value,ie=Ke(y,C),re=Ke(y,C);C.value+=4;let oe=Ke(y,C);if(C.value+=4,ie<0||ie>=65537||re<0||re>=65537)throw new Error("Something wrong with HUF_ENCSIZE");let ue=new Array(65537),Te=new Array(16384);R(Te);let Ae=L-(C.value-ce);if(N(p,C,Ae,ie,re,ue),oe>8*(L-(C.value-ce)))throw new Error("Something wrong with hufUncompress");Z(ue,ie,re,Te),We(ue,Te,p,C,oe,re,G,U,ee)}function pe(p,y,C){for(let L=0;L<C;++L)y[L]=p[y[L]]}function _e(p){for(let y=1;y<p.length;y++){let C=p[y-1]+p[y]-128;p[y]=C}}function z(p,y){let C=0,L=Math.floor((p.length+1)/2),U=0,G=p.length-1;for(;!(U>G||(y[U++]=p[C++],U>G));)y[U++]=p[L++]}function Ye(p){let y=p.byteLength,C=new Array,L=0,U=new DataView(p);for(;y>0;){let G=U.getInt8(L++);if(G<0){let ee=-G;y-=ee+1;for(let ce=0;ce<ee;ce++)C.push(U.getUint8(L++))}else{let ee=G;y-=2;let ce=U.getUint8(L++);for(let ie=0;ie<ee+1;ie++)C.push(ce)}}return C}function Ee(p,y,C,L,U,G){let ee=new DataView(G.buffer),ce=C[p.idx[0]].width,ie=C[p.idx[0]].height,re=3,oe=Math.floor(ce/8),ue=Math.ceil(ce/8),Te=Math.ceil(ie/8),Ae=ce-(ue-1)*8,ze=ie-(Te-1)*8,Ue={value:0},Ce=new Array(re),we=new Array(re),ft=new Array(re),nt=new Array(re),kt=new Array(re);for(let st=0;st<re;++st)kt[st]=y[p.idx[st]],Ce[st]=st<1?0:Ce[st-1]+ue*Te,we[st]=new Float32Array(64),ft[st]=new Uint16Array(64),nt[st]=new Uint16Array(ue*64);for(let st=0;st<Te;++st){let Ht=8;st==Te-1&&(Ht=ze);let dt=8;for(let vt=0;vt<ue;++vt){vt==ue-1&&(dt=Ae);for(let ut=0;ut<re;++ut)ft[ut].fill(0),ft[ut][0]=U[Ce[ut]++],De(Ue,L,ft[ut]),ye(ft[ut],we[ut]),Qe(we[ut]);re==3&&Be(we);for(let ut=0;ut<re;++ut)F(we[ut],nt[ut],vt*64)}let Pt=0;for(let vt=0;vt<re;++vt){let ut=C[p.idx[vt]].type;for(let dn=8*st;dn<8*st+Ht;++dn){Pt=kt[vt][dn];for(let Tn=0;Tn<oe;++Tn){let Cn=Tn*64+(dn&7)*8;ee.setUint16(Pt+0*2*ut,nt[vt][Cn+0],!0),ee.setUint16(Pt+1*2*ut,nt[vt][Cn+1],!0),ee.setUint16(Pt+2*2*ut,nt[vt][Cn+2],!0),ee.setUint16(Pt+3*2*ut,nt[vt][Cn+3],!0),ee.setUint16(Pt+4*2*ut,nt[vt][Cn+4],!0),ee.setUint16(Pt+5*2*ut,nt[vt][Cn+5],!0),ee.setUint16(Pt+6*2*ut,nt[vt][Cn+6],!0),ee.setUint16(Pt+7*2*ut,nt[vt][Cn+7],!0),Pt+=8*2*ut}}if(oe!=ue)for(let dn=8*st;dn<8*st+Ht;++dn){let Tn=kt[vt][dn]+8*oe*2*ut,Cn=oe*64+(dn&7)*8;for(let Bo=0;Bo<dt;++Bo)ee.setUint16(Tn+Bo*2*ut,nt[vt][Cn+Bo],!0)}}}let St=new Uint16Array(ce);ee=new DataView(G.buffer);for(let st=0;st<re;++st){C[p.idx[st]].decoded=!0;let Ht=C[p.idx[st]].type;if(C[st].type==2)for(let dt=0;dt<ie;++dt){let Pt=kt[st][dt];for(let vt=0;vt<ce;++vt)St[vt]=ee.getUint16(Pt+vt*2*Ht,!0);for(let vt=0;vt<ce;++vt)ee.setFloat32(Pt+vt*2*Ht,H(St[vt]),!0)}}}function De(p,y,C){let L,U=1;for(;U<64;)L=y[p.value],L==65280?U=64:L>>8==255?U+=L&255:(C[U]=L,U++),p.value++}function ye(p,y){y[0]=H(p[0]),y[1]=H(p[1]),y[2]=H(p[5]),y[3]=H(p[6]),y[4]=H(p[14]),y[5]=H(p[15]),y[6]=H(p[27]),y[7]=H(p[28]),y[8]=H(p[2]),y[9]=H(p[4]),y[10]=H(p[7]),y[11]=H(p[13]),y[12]=H(p[16]),y[13]=H(p[26]),y[14]=H(p[29]),y[15]=H(p[42]),y[16]=H(p[3]),y[17]=H(p[8]),y[18]=H(p[12]),y[19]=H(p[17]),y[20]=H(p[25]),y[21]=H(p[30]),y[22]=H(p[41]),y[23]=H(p[43]),y[24]=H(p[9]),y[25]=H(p[11]),y[26]=H(p[18]),y[27]=H(p[24]),y[28]=H(p[31]),y[29]=H(p[40]),y[30]=H(p[44]),y[31]=H(p[53]),y[32]=H(p[10]),y[33]=H(p[19]),y[34]=H(p[23]),y[35]=H(p[32]),y[36]=H(p[39]),y[37]=H(p[45]),y[38]=H(p[52]),y[39]=H(p[54]),y[40]=H(p[20]),y[41]=H(p[22]),y[42]=H(p[33]),y[43]=H(p[38]),y[44]=H(p[46]),y[45]=H(p[51]),y[46]=H(p[55]),y[47]=H(p[60]),y[48]=H(p[21]),y[49]=H(p[34]),y[50]=H(p[37]),y[51]=H(p[47]),y[52]=H(p[50]),y[53]=H(p[56]),y[54]=H(p[59]),y[55]=H(p[61]),y[56]=H(p[35]),y[57]=H(p[36]),y[58]=H(p[48]),y[59]=H(p[49]),y[60]=H(p[57]),y[61]=H(p[58]),y[62]=H(p[62]),y[63]=H(p[63])}function Qe(p){let y=.5*Math.cos(.7853975),C=.5*Math.cos(3.14159/16),L=.5*Math.cos(3.14159/8),U=.5*Math.cos(3*3.14159/16),G=.5*Math.cos(5*3.14159/16),ee=.5*Math.cos(3*3.14159/8),ce=.5*Math.cos(7*3.14159/16),ie=new Array(4),re=new Array(4),oe=new Array(4),ue=new Array(4);for(let Te=0;Te<8;++Te){let Ae=Te*8;ie[0]=L*p[Ae+2],ie[1]=ee*p[Ae+2],ie[2]=L*p[Ae+6],ie[3]=ee*p[Ae+6],re[0]=C*p[Ae+1]+U*p[Ae+3]+G*p[Ae+5]+ce*p[Ae+7],re[1]=U*p[Ae+1]-ce*p[Ae+3]-C*p[Ae+5]-G*p[Ae+7],re[2]=G*p[Ae+1]-C*p[Ae+3]+ce*p[Ae+5]+U*p[Ae+7],re[3]=ce*p[Ae+1]-G*p[Ae+3]+U*p[Ae+5]-C*p[Ae+7],oe[0]=y*(p[Ae+0]+p[Ae+4]),oe[3]=y*(p[Ae+0]-p[Ae+4]),oe[1]=ie[0]+ie[3],oe[2]=ie[1]-ie[2],ue[0]=oe[0]+oe[1],ue[1]=oe[3]+oe[2],ue[2]=oe[3]-oe[2],ue[3]=oe[0]-oe[1],p[Ae+0]=ue[0]+re[0],p[Ae+1]=ue[1]+re[1],p[Ae+2]=ue[2]+re[2],p[Ae+3]=ue[3]+re[3],p[Ae+4]=ue[3]-re[3],p[Ae+5]=ue[2]-re[2],p[Ae+6]=ue[1]-re[1],p[Ae+7]=ue[0]-re[0]}for(let Te=0;Te<8;++Te)ie[0]=L*p[16+Te],ie[1]=ee*p[16+Te],ie[2]=L*p[48+Te],ie[3]=ee*p[48+Te],re[0]=C*p[8+Te]+U*p[24+Te]+G*p[40+Te]+ce*p[56+Te],re[1]=U*p[8+Te]-ce*p[24+Te]-C*p[40+Te]-G*p[56+Te],re[2]=G*p[8+Te]-C*p[24+Te]+ce*p[40+Te]+U*p[56+Te],re[3]=ce*p[8+Te]-G*p[24+Te]+U*p[40+Te]-C*p[56+Te],oe[0]=y*(p[Te]+p[32+Te]),oe[3]=y*(p[Te]-p[32+Te]),oe[1]=ie[0]+ie[3],oe[2]=ie[1]-ie[2],ue[0]=oe[0]+oe[1],ue[1]=oe[3]+oe[2],ue[2]=oe[3]-oe[2],ue[3]=oe[0]-oe[1],p[0+Te]=ue[0]+re[0],p[8+Te]=ue[1]+re[1],p[16+Te]=ue[2]+re[2],p[24+Te]=ue[3]+re[3],p[32+Te]=ue[3]-re[3],p[40+Te]=ue[2]-re[2],p[48+Te]=ue[1]-re[1],p[56+Te]=ue[0]-re[0]}function Be(p){for(let y=0;y<64;++y){let C=p[0][y],L=p[1][y],U=p[2][y];p[0][y]=C+1.5747*U,p[1][y]=C-.1873*L-.4682*U,p[2][y]=C+1.8556*L}}function F(p,y,C){for(let L=0;L<64;++L)y[C+L]=Gh.toHalfFloat(P(p[L]))}function P(p){return p<=1?Math.sign(p)*Math.pow(Math.abs(p),2.2):Math.sign(p)*Math.pow(S,Math.abs(p)-1)}function te(p){return new DataView(p.array.buffer,p.offset.value,p.size)}function fe(p){let y=p.viewer.buffer.slice(p.offset.value,p.offset.value+p.size),C=new Uint8Array(Ye(y)),L=new Uint8Array(C.length);return _e(C),z(C,L),new DataView(L.buffer)}function ge(p){let y=p.array.slice(p.offset.value,p.offset.value+p.size),C=Io(y),L=new Uint8Array(C.length);return _e(C),z(C,L),new DataView(L.buffer)}function he(p){let y=p.viewer,C={value:p.offset.value},L=new Uint16Array(p.columns*p.lines*(p.inputChannels.length*p.type)),U=new Uint8Array(8192),G=0,ee=new Array(p.inputChannels.length);for(let ze=0,Ue=p.inputChannels.length;ze<Ue;ze++)ee[ze]={},ee[ze].start=G,ee[ze].end=ee[ze].start,ee[ze].nx=p.columns,ee[ze].ny=p.lines,ee[ze].size=p.type,G+=ee[ze].nx*ee[ze].ny*ee[ze].size;let ce=q(y,C),ie=q(y,C);if(ie>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ce<=ie)for(let ze=0;ze<ie-ce+1;ze++)U[ze+ce]=V(y,C);let re=new Uint16Array(65536),oe=_(U,re),ue=Ke(y,C);et(p.array,y,C,ue,L,G);for(let ze=0;ze<p.inputChannels.length;++ze){let Ue=ee[ze];for(let Ce=0;Ce<ee[ze].size;++Ce)qe(L,Ue.start+Ce,Ue.nx,Ue.size,Ue.ny,Ue.nx*Ue.size,oe)}pe(re,L,G);let Te=0,Ae=new Uint8Array(L.buffer.byteLength);for(let ze=0;ze<p.lines;ze++)for(let Ue=0;Ue<p.inputChannels.length;Ue++){let Ce=ee[Ue],we=Ce.nx*Ce.size,ft=new Uint8Array(L.buffer,Ce.end*2,we*2);Ae.set(ft,Te),Te+=we*2,Ce.end+=we}return new DataView(Ae.buffer)}function je(p){let y=p.array.slice(p.offset.value,p.offset.value+p.size),C=Io(y),L=p.inputChannels.length*p.lines*p.columns*p.totalBytes,U=new ArrayBuffer(L),G=new DataView(U),ee=0,ce=0,ie=new Array(4);for(let re=0;re<p.lines;re++)for(let oe=0;oe<p.inputChannels.length;oe++){let ue=0;switch(p.inputChannels[oe].pixelType){case 1:ie[0]=ee,ie[1]=ie[0]+p.columns,ee=ie[1]+p.columns;for(let Ae=0;Ae<p.columns;++Ae){let ze=C[ie[0]++]<<8|C[ie[1]++];ue+=ze,G.setUint16(ce,ue,!0),ce+=2}break;case 2:ie[0]=ee,ie[1]=ie[0]+p.columns,ie[2]=ie[1]+p.columns,ee=ie[2]+p.columns;for(let Ae=0;Ae<p.columns;++Ae){let ze=C[ie[0]++]<<24|C[ie[1]++]<<16|C[ie[2]++]<<8;ue+=ze,G.setUint32(ce,ue,!0),ce+=4}break}}return G}function Re(p){let y=p.viewer,C={value:p.offset.value},L=new Uint8Array(p.columns*p.lines*(p.inputChannels.length*p.type*2)),U={version:j(y,C),unknownUncompressedSize:j(y,C),unknownCompressedSize:j(y,C),acCompressedSize:j(y,C),dcCompressedSize:j(y,C),rleCompressedSize:j(y,C),rleUncompressedSize:j(y,C),rleRawSize:j(y,C),totalAcUncompressedCount:j(y,C),totalDcUncompressedCount:j(y,C),acCompression:j(y,C)};if(U.version<2)throw new Error("EXRLoader.parse: "+mi.compression+" version "+U.version+" is unsupported");let G=new Array,ee=q(y,C)-2;for(;ee>0;){let Ue=Le(y.buffer,C),Ce=V(y,C),we=Ce>>2&3,ft=(Ce>>4)-1,nt=new Int8Array([ft])[0],kt=V(y,C);G.push({name:Ue,index:nt,type:kt,compression:we}),ee-=Ue.length+3}let ce=mi.channels,ie=new Array(p.inputChannels.length);for(let Ue=0;Ue<p.inputChannels.length;++Ue){let Ce=ie[Ue]={},we=ce[Ue];Ce.name=we.name,Ce.compression=0,Ce.decoded=!1,Ce.type=we.pixelType,Ce.pLinear=we.pLinear,Ce.width=p.columns,Ce.height=p.lines}let re={idx:new Array(3)};for(let Ue=0;Ue<p.inputChannels.length;++Ue){let Ce=ie[Ue];for(let we=0;we<G.length;++we){let ft=G[we];Ce.name==ft.name&&(Ce.compression=ft.compression,ft.index>=0&&(re.idx[ft.index]=Ue),Ce.offset=Ue)}}let oe,ue,Te;if(U.acCompressedSize>0)switch(U.acCompression){case 0:oe=new Uint16Array(U.totalAcUncompressedCount),et(p.array,y,C,U.acCompressedSize,oe,U.totalAcUncompressedCount);break;case 1:let Ue=p.array.slice(C.value,C.value+U.totalAcUncompressedCount),Ce=Io(Ue);oe=new Uint16Array(Ce.buffer),C.value+=U.totalAcUncompressedCount;break}if(U.dcCompressedSize>0){let Ue={array:p.array,offset:C,size:U.dcCompressedSize};ue=new Uint16Array(ge(Ue).buffer),C.value+=U.dcCompressedSize}if(U.rleRawSize>0){let Ue=p.array.slice(C.value,C.value+U.rleCompressedSize),Ce=Io(Ue);Te=Ye(Ce.buffer),C.value+=U.rleCompressedSize}let Ae=0,ze=new Array(ie.length);for(let Ue=0;Ue<ze.length;++Ue)ze[Ue]=new Array;for(let Ue=0;Ue<p.lines;++Ue)for(let Ce=0;Ce<ie.length;++Ce)ze[Ce].push(Ae),Ae+=ie[Ce].width*p.type*2;Ee(re,ze,ie,oe,ue,L);for(let Ue=0;Ue<ie.length;++Ue){let Ce=ie[Ue];if(!Ce.decoded)switch(Ce.compression){case 2:let we=0,ft=0;for(let nt=0;nt<p.lines;++nt){let kt=ze[Ue][we];for(let St=0;St<Ce.width;++St){for(let st=0;st<2*Ce.type;++st)L[kt++]=Te[ft+st*Ce.width*Ce.height];ft++}we++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(L.buffer)}function Le(p,y){let C=new Uint8Array(p),L=0;for(;C[y.value+L]!=0;)L+=1;let U=new TextDecoder().decode(C.slice(y.value,y.value+L));return y.value=y.value+L+1,U}function $e(p,y,C){let L=new TextDecoder().decode(new Uint8Array(p).slice(y.value,y.value+C));return y.value=y.value+C,L}function Me(p,y){let C=Xe(p,y),L=Ke(p,y);return[C,L]}function Ve(p,y){let C=Ke(p,y),L=Ke(p,y);return[C,L]}function Xe(p,y){let C=p.getInt32(y.value,!0);return y.value=y.value+4,C}function Ke(p,y){let C=p.getUint32(y.value,!0);return y.value=y.value+4,C}function Y(p,y){let C=p[y.value];return y.value=y.value+1,C}function V(p,y){let C=p.getUint8(y.value);return y.value=y.value+1,C}let j=function(p,y){let C;return"getBigInt64"in DataView.prototype?C=Number(p.getBigInt64(y.value,!0)):C=p.getUint32(y.value+4,!0)+Number(p.getUint32(y.value,!0)<<32),y.value+=8,C};function ne(p,y){let C=p.getFloat32(y.value,!0);return y.value+=4,C}function O(p,y){return Gh.toHalfFloat(ne(p,y))}function H(p){let y=(p&31744)>>10,C=p&1023;return(p>>15?-1:1)*(y?y===31?C?NaN:1/0:Math.pow(2,y-15)*(1+C/1024):6103515625e-14*(C/1024))}function q(p,y){let C=p.getUint16(y.value,!0);return y.value+=2,C}function se(p,y){return H(q(p,y))}function Se(p,y,C,L){let U=C.value,G=[];for(;C.value<U+L-1;){let ee=Le(y,C),ce=Xe(p,C),ie=V(p,C);C.value+=3;let re=Xe(p,C),oe=Xe(p,C);G.push({name:ee,pixelType:ce,pLinear:ie,xSampling:re,ySampling:oe})}return C.value+=1,G}function ve(p,y){let C=ne(p,y),L=ne(p,y),U=ne(p,y),G=ne(p,y),ee=ne(p,y),ce=ne(p,y),ie=ne(p,y),re=ne(p,y);return{redX:C,redY:L,greenX:U,greenY:G,blueX:ee,blueY:ce,whiteX:ie,whiteY:re}}function Pe(p,y){let C=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],L=V(p,y);return C[L]}function tt(p,y){let C=Xe(p,y),L=Xe(p,y),U=Xe(p,y),G=Xe(p,y);return{xMin:C,yMin:L,xMax:U,yMax:G}}function rt(p,y){let C=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],L=V(p,y);return C[L]}function Je(p,y){let C=["ENVMAP_LATLONG","ENVMAP_CUBE"],L=V(p,y);return C[L]}function At(p,y){let C=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],L=["ROUND_DOWN","ROUND_UP"],U=Ke(p,y),G=Ke(p,y),ee=V(p,y);return{xSize:U,ySize:G,levelMode:C[ee&15],roundingMode:L[ee>>4]}}function Et(p,y){let C=ne(p,y),L=ne(p,y);return[C,L]}function at(p,y){let C=ne(p,y),L=ne(p,y),U=ne(p,y);return[C,L,U]}function fn(p,y,C,L,U){if(L==="string"||L==="stringvector"||L==="iccProfile")return $e(y,C,U);if(L==="chlist")return Se(p,y,C,U);if(L==="chromaticities")return ve(p,C);if(L==="compression")return Pe(p,C);if(L==="box2i")return tt(p,C);if(L==="envmap")return Je(p,C);if(L==="tiledesc")return At(p,C);if(L==="lineOrder")return rt(p,C);if(L==="float")return ne(p,C);if(L==="v2f")return Et(p,C);if(L==="v3f")return at(p,C);if(L==="int")return Xe(p,C);if(L==="rational")return Me(p,C);if(L==="timecode")return Ve(p,C);if(L==="preview")return C.value+=U,"skipped";C.value+=U}function Rn(p,y){let C=Math.log2(p);return y=="ROUND_DOWN"?Math.floor(C):Math.ceil(C)}function gs(p,y,C){let L=0;switch(p.levelMode){case"ONE_LEVEL":L=1;break;case"MIPMAP_LEVELS":L=Rn(Math.max(y,C),p.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return L}function Br(p,y,C,L){let U=new Array(p);for(let G=0;G<p;G++){let ee=1<<G,ce=y/ee|0;L=="ROUND_UP"&&ce*ee<y&&(ce+=1);let ie=Math.max(ce,1);U[G]=(ie+C-1)/C|0}return U}function Oo(){let p=this,y=p.offset,C={value:0};for(let L=0;L<p.tileCount;L++){let U=Xe(p.viewer,y),G=Xe(p.viewer,y);y.value+=8,p.size=Ke(p.viewer,y);let ee=U*p.blockWidth,ce=G*p.blockHeight;p.columns=ee+p.blockWidth>p.width?p.width-ee:p.blockWidth,p.lines=ce+p.blockHeight>p.height?p.height-ce:p.blockHeight;let ie=p.columns*p.totalBytes,oe=p.size<p.lines*ie?p.uncompress(p):te(p);y.value+=p.size;for(let ue=0;ue<p.lines;ue++){let Te=ue*p.columns*p.totalBytes;for(let Ae=0;Ae<p.inputChannels.length;Ae++){let ze=mi.channels[Ae].name,Ue=p.channelByteOffsets[ze]*p.columns,Ce=p.decodeChannels[ze];if(Ce===void 0)continue;C.value=Te+Ue;let we=(p.height-(1+ce+ue))*p.outLineWidth;for(let ft=0;ft<p.columns;ft++){let nt=we+(ft+ee)*p.outputChannels+Ce;p.byteArray[nt]=p.getter(oe,C)}}}}}function Os(){let p=this,y=p.offset,C={value:0};for(let L=0;L<p.height/p.blockHeight;L++){let U=Xe(p.viewer,y)-mi.dataWindow.yMin;p.size=Ke(p.viewer,y),p.lines=U+p.blockHeight>p.height?p.height-U:p.blockHeight;let G=p.columns*p.totalBytes,ce=p.size<p.lines*G?p.uncompress(p):te(p);y.value+=p.size;for(let ie=0;ie<p.blockHeight;ie++){let re=L*p.blockHeight,oe=ie+p.scanOrder(re);if(oe>=p.height)continue;let ue=ie*G,Te=(p.height-1-oe)*p.outLineWidth;for(let Ae=0;Ae<p.inputChannels.length;Ae++){let ze=mi.channels[Ae].name,Ue=p.channelByteOffsets[ze]*p.columns,Ce=p.decodeChannels[ze];if(Ce!==void 0){C.value=ue+Ue;for(let we=0;we<p.columns;we++){let ft=Te+we*p.outputChannels+Ce;p.byteArray[ft]=p.getter(ce,C)}}}}}}function Fo(p,y,C){let L={};if(p.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");L.version=p.getUint8(4);let U=p.getUint8(5);L.spec={singleTile:!!(U&2),longName:!!(U&4),deepFormat:!!(U&8),multiPart:!!(U&16)},C.value=8;let G=!0;for(;G;){let ee=Le(y,C);if(ee==0)G=!1;else{let ce=Le(y,C),ie=Ke(p,C),re=fn(p,y,C,ce,ie);re===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${ce}'.`):L[ee]=re}}if(U&-7)throw console.error("THREE.EXRHeader:",L),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return L}function Fs(p,y,C,L,U){let G={size:0,viewer:y,array:C,offset:L,width:p.dataWindow.xMax-p.dataWindow.xMin+1,height:p.dataWindow.yMax-p.dataWindow.yMin+1,inputChannels:p.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:cn};switch(p.compression){case"NO_COMPRESSION":G.blockHeight=1,G.uncompress=te;break;case"RLE_COMPRESSION":G.blockHeight=1,G.uncompress=fe;break;case"ZIPS_COMPRESSION":G.blockHeight=1,G.uncompress=ge;break;case"ZIP_COMPRESSION":G.blockHeight=16,G.uncompress=ge;break;case"PIZ_COMPRESSION":G.blockHeight=32,G.uncompress=he;break;case"PXR24_COMPRESSION":G.blockHeight=16,G.uncompress=je;break;case"DWAA_COMPRESSION":G.blockHeight=32,G.uncompress=Re;break;case"DWAB_COMPRESSION":G.blockHeight=256,G.uncompress=Re;break;default:throw new Error("EXRLoader.parse: "+p.compression+" is unsupported")}let ee={};for(let oe of p.channels)switch(oe.name){case"Y":case"R":case"G":case"B":case"A":ee[oe.name]=!0,G.type=oe.pixelType}let ce=!1;if(ee.R&&ee.G&&ee.B)ce=!ee.A,G.outputChannels=4,G.decodeChannels={R:0,G:1,B:2,A:3};else if(ee.Y)G.outputChannels=1,G.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(G.type==1)switch(U){case Mn:G.getter=se;break;case Zt:G.getter=q;break}else if(G.type==2)switch(U){case Mn:G.getter=ne;break;case Zt:G.getter=O}else throw new Error("EXRLoader.parse: unsupported pixelType "+G.type+" for "+p.compression+".");G.columns=G.width;let ie=G.width*G.height*G.outputChannels;switch(U){case Mn:G.byteArray=new Float32Array(ie),ce&&G.byteArray.fill(1,0,ie);break;case Zt:G.byteArray=new Uint16Array(ie),ce&&G.byteArray.fill(15360,0,ie);break;default:console.error("THREE.EXRLoader: unsupported type: ",U);break}let re=0;for(let oe of p.channels)G.decodeChannels[oe.name]!==void 0&&(G.channelByteOffsets[oe.name]=re),re+=oe.pixelType*2;if(G.totalBytes=re,G.outLineWidth=G.width*G.outputChannels,p.lineOrder==="INCREASING_Y"?G.scanOrder=oe=>oe:G.scanOrder=oe=>G.height-1-oe,G.outputChannels==4?(G.format=bn,G.colorSpace=cn):(G.format=yo,G.colorSpace=li),p.spec.singleTile){G.blockHeight=p.tiles.ySize,G.blockWidth=p.tiles.xSize;let oe=gs(p.tiles,G.width,G.height),ue=Br(oe,G.width,p.tiles.xSize,p.tiles.roundingMode),Te=Br(oe,G.height,p.tiles.ySize,p.tiles.roundingMode);G.tileCount=ue[0]*Te[0];for(let Ae=0;Ae<oe;Ae++)for(let ze=0;ze<Te[Ae];ze++)for(let Ue=0;Ue<ue[Ae];Ue++)j(y,L);G.decode=Oo.bind(G)}else{G.blockWidth=G.width;let oe=Math.ceil(G.height/G.blockHeight);for(let ue=0;ue<oe;ue++)j(y,L);G.decode=Os.bind(G)}return G}let zr={value:0},kr=new DataView(e),Sc=new Uint8Array(e),mi=Fo(kr,e,zr),zi=Fs(mi,kr,Sc,zr,this.type);return zi.decode(),{header:mi,width:zi.width,height:zi.height,data:zi.byteArray,format:zi.format,colorSpace:zi.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){o.colorSpace=a.colorSpace,o.minFilter=Wt,o.magFilter=Wt,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,r,n,s)}};function oi(i=1){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Ds=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Xn=(i,e,t)=>i+(e-i)*t,Dr=i=>i*i*(3-2*i),Xd=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,pi=(i,e,t)=>Ds((i-e)/(t-e));function Ft(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e;let s=n.getContext("2d");return t(s,i,e),n}function Ut(i,{srgb:e=!0,repeat:t=!1,aniso:n=8}={}){let s=i instanceof Jt?i:new Ps(i);return e&&(s.colorSpace=Nt),t&&(s.wrapS=s.wrapT=sn),s.anisotropy=n,s.needsUpdate=!0,s}function qn(i="rgba(255,255,255,1)",e="rgba(255,255,255,0)",t=128){return Ut(Ft(t,t,(n,s)=>{let r=n.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);r.addColorStop(0,i),r.addColorStop(1,e),n.fillStyle=r,n.fillRect(0,0,s,s)}))}var Ly=new D(0,1,0),fc=new D,Gd=new Ot,Vd=new D,Wd=new D;function qd(i,e,t=.2,n=t,s=new Ze){fc.subVectors(e,i);let r=fc.length();return fc.normalize(),Gd.setFromUnitVectors(Ly,fc),Wd.addVectors(i,e).multiplyScalar(.5),Vd.set(t,r,n),s.compose(Wd,Gd,Vd)}function Di(i,e){let t=new Ie(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return i.setAttribute("color",new bt(s,3)),i}function An(i,e=["position","normal","uv","color"]){let t=i.index?i.toNonIndexed():i;for(let n of Object.keys(t.attributes))e.includes(n)||t.deleteAttribute(n);return e.includes("uv")&&!t.attributes.uv&&t.setAttribute("uv",new bt(new Float32Array(t.attributes.position.count*2),2)),t}var Li=()=>new Promise(i=>requestAnimationFrame(()=>i()));function Un(i,{height:e=2.6,strength:t=.32}={}){return i.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying float vGrimeY;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
{ vec4 gp = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
 gp = instanceMatrix * gp;
#endif
 vGrimeY = (modelMatrix * gp).y; }`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGrimeY;`).replace("#include <map_fragment>",`#include <map_fragment>
 diffuseColor.rgb *= mix(1.0 - ${t.toFixed(3)}, 1.0, smoothstep(0.0, ${e.toFixed(2)}, vGrimeY));`)},i.customProgramCacheKey=()=>"grime"+e+t,i}var Do=[{p:0,name:"dawn",gain:1},{p:.17,name:"city",gain:1},{p:.56,name:"city",gain:.95},{p:.7,name:"sunset",gain:1},{p:.8,name:"sunset",gain:.8},{p:.9,name:"night",gain:1.5},{p:1,name:"night",gain:1.5}];async function Yd(i){let e=new uc,t=[...new Set(Do.map(l=>l.name))],n={};await Promise.all(t.map(l=>e.loadAsync(`assets/hdri/${l}.exr`).then(h=>{h.minFilter=h.magFilter=Wt,h.generateMipmaps=!1,n[l]=h})));let s=new $i(i),r=new ts,o=new wt({side:Xt,depthWrite:!1,uniforms:{a:{value:null},b:{value:null},k:{value:0},ga:{value:1},gb:{value:1}},vertexShader:`
      varying vec3 vDir;
      void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform sampler2D a; uniform sampler2D b; uniform float k; uniform float ga; uniform float gb;
      varying vec3 vDir;
      vec2 eq(vec3 d) { return vec2(atan(d.z, d.x) * 0.15915494 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5); }
      void main() {
        vec2 uv = eq(normalize(vDir));
        vec3 c = mix(texture2D(a, uv).rgb * ga, texture2D(b, uv).rgb * gb, k);
        gl_FragColor = vec4(c, 1.0);
      }`});r.add(new Ge(new En(5,64,32),o));let a=null,c="";return{update(l,h){let u=0;for(;u<Do.length-2&&l>Do[u+1].p;)u++;let f=Do[u],d=Do[u+1],x=Math.round(Dr(pi(l,f.p,d.p))*20)/20,v=`${u}:${x}`;if(v===c)return;c=v,o.uniforms.a.value=n[f.name],o.uniforms.b.value=n[d.name],o.uniforms.ga.value=f.gain,o.uniforms.gb.value=d.gain,o.uniforms.k.value=x;let g=s.fromScene(r,0,.1,20);h.environment=g.texture,a?.dispose(),a=g}}}var jd={uniforms:{tDiffuse:{value:null},time:{value:0},vignette:{value:.32},grain:{value:.035},ca:{value:.0025},lift:{value:new D(0,0,0)},sat:{value:1.06}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse; uniform float time; uniform float vignette; uniform float grain; uniform float ca;
    uniform vec3 lift; uniform float sat;
    varying vec2 vUv;
    float rand(vec2 co) { return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 d = vUv - 0.5;
      float r2 = dot(d, d);
      vec2 off = d * ca * (0.4 + r2 * 2.0);
      vec3 c;
      c.r = texture2D(tDiffuse, vUv + off).r;
      c.g = texture2D(tDiffuse, vUv).g;
      c.b = texture2D(tDiffuse, vUv - off).b;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = mix(vec3(l), c, sat);
      c = c + lift * (1.0 - c);
      c = mix(c, c * c * (3.0 - 2.0 * c), 0.18);
      c *= 1.0 - vignette * smoothstep(0.05, 0.62, r2 * 1.6);
      c += (rand(vUv * 1024.0 + fract(time) * 37.0) - 0.5) * grain;
      gl_FragColor = vec4(c, 1.0);
    }`};var Uy={plaster:{orm:!0},asphalt:{orm:!0},pavers:{orm:!0},corrugated:{orm:!0},steel:{orm:!0},concrete:{orm:!0},ground:{orm:!0},bark:{orm:!0},wood:{orm:!0}},Ny=["curb_col","leaves_col","leaves_nor","louver_col","louver_nor","rail_col"],Qt={};async function Zd(i,e){let t=new cs,n=Math.min(16,i.capabilities.getMaxAnisotropy()),s=[],r=(a,c,l)=>s.push(t.loadAsync(`assets/tex/${c}.webp`).then(h=>{h.wrapS=h.wrapT=sn,h.anisotropy=n,l&&(h.colorSpace=Nt),Qt[a]=h}));for(let a of Object.keys(Uy))r(`${a}_col`,`${a}_col`,!0),r(`${a}_nor`,`${a}_nor`,!1),r(`${a}_orm`,`${a}_orm`,!1);for(let a of Ny)r(a,a,a.endsWith("_col"));let o=0;await Promise.all(s.map(a=>a.then(()=>e?.(++o/s.length))))}var Qh=(i,e,t)=>{if(e===1&&t===1)return i;let n=i.clone();return n.repeat.set(e,t),n.needsUpdate=!0,n};function ht(i,{repeat:e=[1,1],normalScale:t=1,physical:n=!1,...s}={}){let[r,o]=e,a=n?Dt:it,c=Qh(Qt[`${i}_orm`],r,o);return new a({map:Qh(Qt[`${i}_col`],r,o),normalMap:Qh(Qt[`${i}_nor`],r,o),normalScale:new be(t,t),roughnessMap:c,metalnessMap:c,aoMap:c,aoMapIntensity:.9,roughness:1,metalness:1,...s})}function Nn(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ct,l=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let x=0;x<d.count;++x)u.push(d.getX(x)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Kd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][f]);let x=Kd(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}return c}function Kd(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new bt(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,d=h.count;f<d;f++)for(let x=0;x<t;x++){let v=h.getComponent(f,x);a.setComponent(f+u,x,v)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function $h(i,e){if(e===xd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===_o||e===ec){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===_o)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var dc=class extends Ge{constructor(e,t={}){super(e),this.isWater=!0;let n=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,c=t.time!==void 0?t.time:0,l=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new D(.70707,.70707,0),u=new Ie(t.sunColor!==void 0?t.sunColor:16777215),f=new Ie(t.waterColor!==void 0?t.waterColor:8355711),d=t.eye!==void 0?t.eye:new D(0,0,0),x=t.distortionScale!==void 0?t.distortionScale:20,v=t.side!==void 0?t.side:kn,g=t.fog!==void 0?t.fog:!1,m=new Qn,E=new D,M=new D,b=new D,I=new Ze,T=new D(0,0,-1),A=new yt,w=new D,S=new D,_=new yt,R=new Ze,B=new jt,W=new qt(s,r),X={name:"MirrorShader",uniforms:ln.merge([He.fog,He.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ze},sunColor:{value:new Ie(8355711)},sunDirection:{value:new D(.70707,.70707,0)},eye:{value:new D},waterColor:{value:new Ie(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},Q=new wt({name:X.name,uniforms:ln.clone(X.uniforms),vertexShader:X.vertexShader,fragmentShader:X.fragmentShader,lights:!0,side:v,fog:g});Q.uniforms.mirrorSampler.value=W.texture,Q.uniforms.textureMatrix.value=R,Q.uniforms.alpha.value=a,Q.uniforms.time.value=c,Q.uniforms.normalSampler.value=l,Q.uniforms.sunColor.value=u,Q.uniforms.waterColor.value=f,Q.uniforms.sunDirection.value=h,Q.uniforms.distortionScale.value=x,Q.uniforms.eye.value=d,n.material=Q,n.onBeforeRender=function(N,K,k){if(M.setFromMatrixPosition(n.matrixWorld),b.setFromMatrixPosition(k.matrixWorld),I.extractRotation(n.matrixWorld),E.set(0,0,1),E.applyMatrix4(I),w.subVectors(M,b),w.dot(E)>0)return;w.reflect(E).negate(),w.add(M),I.extractRotation(k.matrixWorld),T.set(0,0,-1),T.applyMatrix4(I),T.add(b),S.subVectors(M,T),S.reflect(E).negate(),S.add(M),B.position.copy(w),B.up.set(0,1,0),B.up.applyMatrix4(I),B.up.reflect(E),B.lookAt(S),B.far=k.far,B.updateMatrixWorld(),B.projectionMatrix.copy(k.projectionMatrix),R.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),R.multiply(B.projectionMatrix),R.multiply(B.matrixWorldInverse),m.setFromNormalAndCoplanarPoint(E,M),m.applyMatrix4(B.matrixWorldInverse),A.set(m.normal.x,m.normal.y,m.normal.z,m.constant);let Z=B.projectionMatrix;_.x=(Math.sign(A.x)+Z.elements[8])/Z.elements[0],_.y=(Math.sign(A.y)+Z.elements[9])/Z.elements[5],_.z=-1,_.w=(1+Z.elements[10])/Z.elements[14],A.multiplyScalar(2/A.dot(_)),Z.elements[2]=A.x,Z.elements[6]=A.y,Z.elements[10]=A.z+1-o,Z.elements[14]=A.w,d.setFromMatrixPosition(k.matrixWorld);let le=N.getRenderTarget(),$=N.xr.enabled,ae=N.shadowMap.autoUpdate;n.visible=!1,N.xr.enabled=!1,N.shadowMap.autoUpdate=!1,N.setRenderTarget(W),N.state.buffers.depth.setMask(!0),N.autoClear===!1&&N.clear(),N.render(K,B),n.visible=!0,N.xr.enabled=$,N.shadowMap.autoUpdate=ae,N.setRenderTarget(le);let Oe=k.viewport;Oe!==void 0&&N.state.viewport(Oe)}}};var ps=4.2,Ur=3.2,$d=[["MAA TARA SWEETS","\u09AE\u09BF\u09B7\u09CD\u099F\u09BE\u09A8\u09CD\u09A8 \u09AD\u09BE\u09A3\u09CD\u09A1\u09BE\u09B0","#b3261e","#ffe7a8"],["SHARMA STORES","GROCERY \xB7 DAILY NEEDS","#1f4e8c","#ffffff"],["XEROX \xB7 STD \xB7 ISD","LAMINATION \xB7 PRINTOUT","#f2c200","#1a1a1a"],["NEW MEDICAL HALL","\u0994\u09B7\u09A7\u09BE\u09B2\u09AF\u09BC \xB7 24 HRS","#0f7a4f","#ffffff"],["CHA & TOAST","\u099A\u09BE \xB7 \u099F\u09CB\u09B8\u09CD\u099F \xB7 \u0998\u09C1\u0997\u09A8\u09BF","#6b2f1a","#ffd9a0"],["MOBILE REPAIR","ALL BRANDS \xB7 RECHARGE","#202020","#3fe0ff"],["LAXMI JEWELLERS","HALLMARK GOLD \xB7 SINCE 1972","#7a1630","#f6d27a"],["BOOK DEPOT","\u09AC\u0987 \xB7 STATIONERY","#2c5530","#f3eedb"],["HOTEL BIRIYANI","MUTTON \xB7 CHICKEN \xB7 AC","#d8432f","#ffffff"],["PHOTO STUDIO","PASSPORT PHOTO IN 5 MIN","#3b2a68","#ffffff"],["GUPTA HARDWARE","PAINTS \xB7 SANITARY \xB7 TOOLS","#e86a10","#1a1a1a"],["FRESH JUICE CORNER","MOSAMBI \xB7 ANAR \xB7 SUGARCANE","#2f8f2f","#fff9c4"],["CYBER CAFE","INTERNET \xB7 FORMS \xB7 TICKETS","#0b3d91","#9be7ff"],["DAS TAILORS","LADIES & GENTS \xB7 ALTERATION","#7b5b3a","#fff3dc"],["RATION SHOP","FAIR PRICE \xB7 NO. 14/B","#55606b","#ffffff"],["SEN ELECTRICALS","FANS \xB7 WIRING \xB7 INVERTER","#ffd400","#0d2a6b"]];function Oy(){return Ut(Ft(2048,1024,i=>{$d.forEach(([e,t,n,s],r)=>{let o=r%2*1024,a=Math.floor(r/2)*128,c=i.createLinearGradient(0,a,0,a+128);c.addColorStop(0,n),c.addColorStop(1,Jd(n,-.25)),i.fillStyle=c,i.fillRect(o,a,1024,128),i.strokeStyle=Jd(n,-.45),i.lineWidth=6,i.strokeRect(o+3,a+3,1018,122),i.fillStyle=s,i.textBaseline="middle",i.font='800 66px "Manrope", "Hind Siliguri", sans-serif',i.fillText(e,o+34,a+54),i.font='600 26px "Hind Siliguri", "Manrope", sans-serif',i.globalAlpha=.85,i.fillText(t,o+38,a+104),i.globalAlpha=1;for(let h=0;h<120;h++)i.fillStyle=`rgba(0,0,0,${Math.random()*.08})`,i.fillRect(o+Math.random()*1024,a+Math.random()*60,2+Math.random()*3,30+Math.random()*70);let l=i.createLinearGradient(0,a+90,0,a+128);l.addColorStop(0,"rgba(30,20,10,0)"),l.addColorStop(1,"rgba(30,20,10,0.35)"),i.fillStyle=l,i.fillRect(o,a+90,1024,38)})}))}function Jd(i,e){let t=new Ie(i);return t.offsetHSL(0,0,e*.5),"#"+t.getHexString()}function Fy(){return Ut(Ft(256,256,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#ffe2b0"),n.addColorStop(1,"#f2a75c"),i.fillStyle=n,i.fillRect(0,0,e,t);for(let s=0;s<e;s+=2){let r=Math.sin(s*.19)*.5+Math.sin(s*.07+1)*.5;i.fillStyle=`rgba(120,60,20,${.08+r*.08})`,i.fillRect(s,0,2,t)}i.fillStyle="rgba(255,255,240,0.55)",i.fillRect(e*.55,t*.08,e*.35,6),i.fillStyle="rgba(60,40,30,0.5)",i.fillRect(e*.5,t*.3,e*.5,t*.7)}))}function By(){return Ut(Ft(512,256,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#fff3d6"),n.addColorStop(1,"#c79a62"),i.fillStyle=n,i.fillRect(0,0,e,t);let s=["#a8483c","#c9a43a","#3e6690","#4a7a58","#e8e2d4","#c07a3a","#6a5080","#d9d0bf","#8a8478"];for(let o=0;o<4;o++){let a=18+o*52;i.fillStyle="#6b4a2a",i.fillRect(0,a+40,e,5);let c=4;for(;c<e-8;){let l=8+Math.random()*18,h=16+Math.random()*22;i.fillStyle=s[Math.floor(Math.random()*s.length)],i.fillRect(c,a+40-h,l,h),i.fillStyle="rgba(0,0,0,0.15)",i.fillRect(c+l-2,a+40-h,2,h),c+=l+1.5}}let r=i.createRadialGradient(e/2,t*.3,t*.2,e/2,t*.4,e*.6);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(20,12,4,0.55)"),i.fillStyle=r,i.fillRect(0,0,e,t),i.fillStyle="#4a3020",i.fillRect(0,t-40,e,40),i.fillStyle="rgba(255,255,255,0.08)",i.fillRect(0,t-40,e,3)}))}function zy(){return Ut(Ft(128,96,(i,e,t)=>{i.fillStyle="#e9e7e0",i.fillRect(0,0,e,t),i.fillStyle="#3a3a3a",i.beginPath(),i.arc(e*.62,t/2,t*.36,0,7),i.fill(),i.strokeStyle="#9a9a9a";for(let n=0;n<6;n++)i.beginPath(),i.arc(e*.62,t/2,t*.06*n,0,7),i.stroke();i.fillStyle="rgba(120,90,60,0.35)",i.fillRect(0,t-10,e,10)}))}var Lr=(i,e,t,n=0,s=0,r=0)=>An(new Ne(i,e,t).translate(n,s,r),["position","normal","uv"]),pc=null;function ep(){if(pc)return pc;let i={frame:Nn([Lr(.14,.16,1.62,.07,1,0),Lr(.26,.07,1.72,.13,-.95,0),Lr(.1,1.9,.1,.05,0,-.71),Lr(.1,1.9,.1,.05,0,.71),Lr(.05,1.8,.05,.04,0,0),Lr(.05,.05,1.32,.04,.45,0)]),pane:new _t(1.34,1.84).rotateY(Math.PI/2),shutter:new Ne(.035,1.84,.64),slab:new Ne(1,.14,2.8),rail:new Ne(.02,1,2.8),railSide:new Ne(1,1,.02),cloth:new _t(.5,.75).rotateY(Math.PI/2).translate(0,-.37,0),ac:new Ne(.55,.5,.82),pipe:new gt(.06,.06,1,8),shop:new _t(1,1).rotateY(Math.PI/2),awning:(()=>{let r=new Ne(1.4,.06,1);return r.rotateZ(-.3),r})()},e=Fy(),t=By(),n=Qt.louver_col,s={frame:Un(new it({color:16777215,roughness:.55})),paneDark:new Dt({color:790805,roughness:.05,metalness:0,envMapIntensity:1.6,specularIntensity:1,ior:1.52}),paneLit:new Dt({color:2102798,map:e,emissive:16777215,emissiveMap:e,emissiveIntensity:.05,roughness:.08,envMapIntensity:1.2}),shutter:new it({map:n,normalMap:Qt.louver_nor,roughness:.75,color:16777215}),slab:Un(ht("plaster",{repeat:[.4,.4],vertexColors:!1})),rail:new it({map:Qt.rail_col,alphaTest:.5,side:zt,metalness:.6,roughness:.5,color:2236962}),cloth:new it({side:zt,roughness:.95,color:16777215}),ac:new it({map:zy(),roughness:.6}),pipe:new it({color:3816510,roughness:.5,metalness:.2}),shopLit:new it({map:t,emissive:16777215,emissiveMap:t,emissiveIntensity:.35,roughness:.4}),shutterRoll:ht("corrugated",{repeat:[1,1],color:10134440}),awning:new it({roughness:.85,side:zt,color:16777215})};return pc={geo:i,mats:s},pc}var Qd={};function tp({lit:i=!1,shutters:e=!0,shutterColor:t="#2f5e44",frameColor:n="#f1ede3",open:s=.35}={}){let{geo:r,mats:o}=ep(),a=new ct,c=o.frame.clone();c.color.set(n);let l=new Ge(r.frame,c);l.castShadow=l.receiveShadow=!0,a.add(l);let h=new Ge(r.pane,i?o.paneLit:o.paneDark);if(h.position.x=.012,a.add(h),e){let u=Qd[t]||(Qd[t]=Object.assign(o.shutter.clone(),{}));u.color.set(t);for(let f of[-1,1]){let d=new Ge(r.shutter,u);d.position.set(.06+Math.sin(s)*.3,0,f*1),d.rotation.y=f*s,d.castShadow=!0,a.add(d)}}return a}var mc=class{constructor(e,{lite:t=!1}={}){this.r=e,this.lite=t,this.I={frame:[],paneDark:[],paneLit:[],shutter:[],slab:[],rail:[],railSide:[],cloth:[],ac:[],pipe:[],shopLit:[],shutterRoll:[],awning:[]},this.signGeos=[],this.wallGeos=[]}addBuilding({x:e,z:t,rot:n,side:s,perp:r,along:o,floors:a,tint:c}){let l=this.r,h=n+(s>0?0:Math.PI),u=new Ot().setFromAxisAngle(new D(0,1,0),h),f=new Ot().setFromAxisAngle(new D(0,1,0),n),d=s*(r/2),x=(T,A,w=0)=>new D(d+s*w,A,T).applyQuaternion(f).add(new D(e,0,t)),v=(T,A,w=0,S=[1,1,1],_,R=u)=>{let B=w?R.clone().multiply(new Ot().setFromAxisAngle(new D(0,1,0),w)):R;this.I[T].push({m:new Ze().compose(A,B,new D(...S)),color:_})},g=["#f1ede3","#f1ede3","#2f5e44","#5b3b24","#3b5a7a","#e8e0c8"][Math.floor(l()*6)],m=["#2f5e44","#2d6a5a","#3f6b3a","#5b3b24","#2f4f6f","#7b8b5a"][Math.floor(l()*6)],E=Math.max(1,Math.floor((o-1.2)/3)),M=T=>-o/2+o*(T+.5)/E;for(let T=0;T<=a;T++){let A=ps+T*Ur-.06,w=new Ne(.24,T===a?.3:.14,o+.24);w.translate(d+s*.1,A,0),Nr(w),Di(w,new Ie(c).multiplyScalar(.93)),w.applyQuaternion(f),w.translate(e,0,t),this.wallGeos.push(An(w))}let b=l()<.55;for(let T=0;T<a;T++){let A=ps+T*Ur+1.55;for(let w=0;w<E;w++){let S=M(w);v("frame",x(S,A),0,[1,1,1],g);let _=l()<.16;if(_||v(l()<.42?"paneLit":"paneDark",x(S,A,.012)),_)for(let R of[-1,1])v("shutter",x(S+R*.33,A,.07),0,[1,1,1],m);else if(l()<.6)for(let R of[-1,1]){let B=.15+l()*.5;v("shutter",x(S+R*(.7+.3),A,.06+Math.sin(B)*.3),R*B,[1,1,1],m)}if(b&&T>=0&&l()<.5&&!this.lite){let R=A-1.02;v("slab",x(S,R,.5),0,[1,1,1],c),v("rail",x(S,R+.55,.98));for(let W of[-1,1])v("railSide",x(S+W*1.38,R+.55,.5));let B=Math.floor(l()*4);for(let W=0;W<B;W++){let X=["#c2185b","#f9a825","#1565c0","#2e7d32","#ffffff","#6a1b9a","#e65100","#00838f"][Math.floor(l()*8)];v("cloth",x(S-.9+W*.6+l()*.2,R+.55,.8),(l()-.5)*.4,[.8+l()*.5,.9+l()*.6,1],X)}}else l()<.12&&!this.lite&&v("ac",x(S,A-1.3,.3))}}for(let T of[-1,1]){if(l()<.35)continue;let A=new Ot().setFromAxisAngle(new D(0,1,0),n+(T>0?-Math.PI/2:Math.PI/2)),w=(_,R,B=0)=>new D(_,R,T*(o/2+B)).applyQuaternion(f).add(new D(e,0,t)),S=Math.max(0,Math.floor((r-2.5)/3.6));for(let _=0;_<a;_++){let R=ps+_*Ur+1.55;for(let B=0;B<S;B++){let W=-r/2+1.2+(r-2.4)*(B+.5)/S;if(v("frame",w(W,R),0,[1,1,1],g,A),v(l()<.4?"paneLit":"paneDark",w(W,R,.012),0,[1,1,1],void 0,A),l()<.5)for(let X of[-1,1])v("shutter",w(W+X*1,R,.08),X*(.2+l()*.3),[1,1,1],m,A)}}}if(!this.lite){let T=ps+a*Ur;for(let A of[-o/2+.25,o/2-.25])l()<.6&&v("pipe",x(A,T/2,.1),0,[1,T,1])}let I=Math.max(1,Math.round(o/5));for(let T=0;T<I;T++){let A=o/I,w=-o/2+A*(T+.5),S=l()<.6;if(v(S?"shopLit":"shutterRoll",x(w,1.55,.015),0,[1,3.1,A-.5]),T>0){let _=new Ne(.3,ps,.45);_.translate(d+s*.12,ps/2,-o/2+A*T),Nr(_),Di(_,new Ie(c).multiplyScalar(.88)),_.applyQuaternion(f),_.translate(e,0,t),this.wallGeos.push(An(_))}if(l()<.75){let _=Math.floor(l()*$d.length),R=new Ne(.1,.78,A-.3),B=R.attributes.uv,W=_%2*.5,X=1-Math.floor(_/2)/8,Q=X-1/8;for(let N=0;N<6;N++)for(let K=0;K<4;K++){let k=N*4+K;N===0?B.setXY(k,W+B.getX(k)*.5,Q+B.getY(k)/8):B.setXY(k,W+.002,X-.002)}s<0&&R.rotateY(Math.PI),R.translate(d+s*.1,3.72,w),R.applyQuaternion(f),R.translate(e,0,t),this.signGeos.push(An(R))}else l()<.6&&v("awning",x(w,3.3,.7),0,[1,1,A-.4],["#b23a2e","#2f6d8a","#d18b2c","#3f7a4c","#8a3f6d"][Math.floor(l()*5)])}}build(e){let t={setNight:()=>{}},{geo:n,mats:s}=ep(),r=(c,l,h,u=!0)=>{let f=this.I[c];if(!f.length)return null;let d=new an(l,h,f.length),x=new Ie;return f.forEach((v,g)=>{d.setMatrixAt(g,v.m),v.color&&d.setColorAt(g,x.set(v.color))}),d.castShadow=u,d.receiveShadow=!0,e.add(d),d};r("frame",n.frame,s.frame),r("paneDark",n.pane,s.paneDark,!1),r("paneLit",n.pane,s.paneLit,!1),r("shutter",n.shutter,s.shutter),r("slab",n.slab,s.slab),r("rail",n.rail,s.rail),r("railSide",n.railSide,s.rail),r("cloth",n.cloth,s.cloth),r("ac",n.ac,s.ac),r("pipe",n.pipe,s.pipe),r("shopLit",n.shop,s.shopLit,!1),r("shutterRoll",n.shop,s.shutterRoll,!1),r("awning",n.awning,s.awning);let o=Oy(),a=new it({map:o,emissive:16777215,emissiveMap:o,emissiveIntensity:0,roughness:.6});if(this.signGeos.length){let c=new Ge(Nn(this.signGeos),a);c.castShadow=!0,c.receiveShadow=!0,e.add(c)}return t.setNight=c=>{s.paneLit.emissiveIntensity=.05+c*1.5,s.shopLit.emissiveIntensity=.3+c*.55,a.emissiveIntensity=c*.55},t}};function Nr(i,e=3){let t=i.attributes.position,n=i.attributes.normal,s=i.attributes.uv;for(let r=0;r<t.count;r++){let o=Math.abs(n.getX(r)),a=Math.abs(n.getY(r)),c,l;a>.5?(c=t.getX(r),l=t.getZ(r)):o>.5?(c=t.getZ(r),l=t.getY(r)):(c=t.getX(r),l=t.getY(r)),s.setXY(r,c/e,l/e)}return i}var Ui=i=>Math.atan2(i.x,i.z);function np({route:i,kit:e,exclusions:t,rng:n,ROAD_HALF:s,WALK_OUT:r,RIVER:o}){let a=i.length,c={},l={},h={"-1":[],1:[]},u=[],f=t.slice(),d=(T,A)=>f.every(w=>Math.hypot(w.x-T.x,w.z-T.z)>w.r+A),x=T=>{i.frame((T-16)/a,c);let A=c.t.clone();return i.frame((T+16)/a,l),A.angleTo(l.t)<.085},v=[],g=["street","boulevard","street"],m=-1e9;for(let T=60;T<a-80&&v.length<g.length;T+=5){if(T-m<110||!x(T)||(i.frame(T/a,c),c.p.z<o.zNear+60))continue;let A=g[v.length],w=A==="boulevard"?e.roads.boulevard.size.x:e.roads.road.size.x,S=A==="boulevard"?e.roads.boulevard.size.z:105;if(!(A==="boulevard"&&!e.roads.boulevard))for(let _ of v.length%2?[-1,1]:[1,-1]){let R=c.r.clone().multiplyScalar(_),B=!0;for(let W=0;W<=S+20&&B;W+=6){let X=c.p.clone().addScaledVector(R,s+W);B=d(X,w/2+8)}if(B){v.push({s:T,side:_,kind:A,W:w,P:c.p.clone(),R:c.r.clone(),T:c.t.clone(),d:R}),m=T;break}}}let E=e.buildings.filter(T=>T.kind==="block").sort((T,A)=>A.size.x-T.size.x),M=T=>{let A=e.buildings.filter(w=>w.size.x<=T&&w.kind==="block");return A.length?A[Math.floor(n()*A.length)]:null};for(let T of v){let{d:A,W:w,side:S}=T,_=new D(-A.z,0,A.x),R=T.P.clone().addScaledVector(A,s).setY(.006);h[S].push([T.s-w/2-.3,T.s+w/2+.3]);let B=T.kind==="boulevard"?["boulevard"]:["crossing","road","manhole","crossroad","old","road","entrance"],W=0,X=Ui(A.clone().negate());for(let Q of B){let N=e.roads[Q];if(!N)continue;let K=N.place(R.clone().addScaledVector(A,W),X);for(let k of N.tips)u.push(k.clone().applyMatrix4(K));W+=N.size.z}T.length=W;for(let Q=-2;Q<=W+2;Q+=4){let N=R.clone().addScaledVector(A,Q);t.push({x:N.x,z:N.z,r:w/2+.6})}for(let Q of[-1,1]){let N=16;for(;N<W-6;){let K=M(Math.min(34,W-N-2));if(!K)break;let k=K.size.x,Z=K.size.z,le=_.clone().multiplyScalar(-Q),$=R.clone().addScaledVector(A,N+k/2).addScaledVector(_,Q*(w/2+.3)).setY(0),ae=$.clone().addScaledVector(le,-Z/2),Oe=d(ae,Math.hypot(k,Z)/2)&&i.distToRoad(ae.x,ae.z)>r+Z/2;for(let[J,me]of[[-k/2,0],[k/2,0],[-k/2,-Z],[k/2,-Z]]){let xe=$.clone().addScaledVector(A,J).addScaledVector(le,me);i.distToRoad(xe.x,xe.z)<r+.8&&(Oe=!1)}Oe&&(K.place($,Ui(le)),t.push({x:ae.x,z:ae.z,r:Math.min(k,Z)*.55})),N+=k+.4+n()*1.5}}{let Q=E.find(k=>k.size.x>=w+4)||E[0],N=R.clone().addScaledVector(A,W+1.5).setY(0),K=N.clone().addScaledVector(A,Q.size.z/2);d(K,Q.size.x/2)&&(Q.place(N,Ui(A.clone().negate())),t.push({x:K.x,z:K.z,r:Math.max(Q.size.x,Q.size.z)*.55}))}if(T.kind==="street"&&e.props.lamp)for(let Q=10;Q<W-4;Q+=24)for(let N of[-1,1]){let K=R.clone().addScaledVector(A,Q+(N>0?0:12)).addScaledVector(_,N*(w/2-.45)).setY(.19),k=e.props.lamp.place(K,Ui(_.clone().multiplyScalar(-N)));for(let Z of e.props.lamp.tips)u.push(Z.clone().applyMatrix4(k))}if(e.props.signal)for(let Q of[-1,1]){i.frame((T.s+Q*(w/2+1.6))/a,l);let N=l.p.clone().addScaledVector(l.r,S*(s+.55)).setY(.16);e.props.signal.place(N,Ui(l.r.clone().multiplyScalar(-S))),t.push({x:N.x,z:N.z,r:1.5})}if(e.props.stop){let Q=R.clone().addScaledVector(A,4).addScaledVector(_,w/2-.7).setY(.19);e.props.stop.place(Q,Ui(A))}}let b=(T,A)=>h[A].some(([w,S])=>T>w-8&&T<S+8),I=0;for(let T=120;T<a-120&&I<2&&e.props.busstop;T+=7){let A=I%2?-1:1;if(b(T,A)||!x(T))continue;i.frame(T/a,c);let w=c.p.clone().addScaledVector(c.r,A*((s+r)/2+.2)).setY(.16);!d(w,12)||w.z<o.zNear+30||(e.props.busstop.place(w,Ui(c.r.clone().multiplyScalar(-A))),t.push({x:w.x,z:w.z,r:4}),I++,T+=180)}for(let[T,A]of[[70,"speed30"],[300,"speed30"],[520,"speed80"]]){let w=e.props[A];if(w)for(let S=T;S<T+60;S+=3){if(b(S,1))continue;i.frame(S/a,c);let _=c.p.clone().addScaledVector(c.r,s+.45).setY(.16);if(d(_,3)){w.place(_,Ui(c.t.clone().negate())),t.push({x:_.x,z:_.z,r:1.2});break}}}return{gaps:h,lampHeads:u,plan:v}}function ip({pf:i,route:e,s:t,side:n,WALK_OUT:s,excluded:r,inRiver:o}){let a=e.length,c=i.size.x,l=i.size.z,h=e.frame(Math.min(1,(t+c/2)/a)),u=h.r.clone().multiplyScalar(-n),f=h.t;for(let d=.25;d<=4.5;d+=.75){let x=h.p.clone().addScaledVector(h.r,n*(s+d)).setY(0),v=x.clone().addScaledVector(u,-l/2),g=Math.hypot(c,l)/2;if(o(v.z,g+4)||r(v.x,v.z,g*.8))return null;let m=!0;for(let[E,M]of[[-c/2,0],[c/2,0],[-c/2,-l],[c/2,-l],[0,-l],[-c/4,0],[c/4,0],[0,0]]){let b=x.clone().addScaledVector(f,E).addScaledVector(u,M);if(e.distToRoad(b.x,b.z)<s+.05||o(b.z,3)){m=!1;break}}if(m)return i.place(x,Ui(u)),{w:c,depth:l,centre:v,setback:d}}return null}var Fr=class extends fi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ou(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new yu(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=us.extractUrlBase(e);o=us.resolveURL(l,this.path)}else o=us.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Mr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===cp){try{o[mt.KHR_BINARY_GLTF]=new _u(e)}catch(u){s&&s(u);return}r=JSON.parse(o[mt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Ru(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case mt.KHR_MATERIALS_UNLIT:o[u]=new su;break;case mt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Mu(r,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:o[u]=new Su;break;case mt.KHR_MESH_QUANTIZATION:o[u]=new Eu;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function ky(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},iu=class{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ie(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],cn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Er(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new hs(h),l.distance=u;break;case"spot":l=new ls(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ni(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},su=class{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return Yt}extendParams(e,t,n){let s=[];e.color=new Ie(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],cn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Nt))}return Promise.all(s)}},ru=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},ou=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(a,a)}return Promise.all(r)}},au=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},cu=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},lu=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],cn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Nt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},hu=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},uu=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(a[0],a[1],a[2],cn),Promise.all(r)}},fu=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},du=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(a[0],a[1],a[2],cn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Nt)),Promise.all(r)}},pu=class{constructor(e){this.parser=e,this.name=mt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},mu=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},gu=class{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},xu=class{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},vu=class{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},bu=class{constructor(e){this.name=mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},yu=class{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Yn.TRIANGLES&&l.mode!==Yn.TRIANGLE_STRIP&&l.mode!==Yn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let x of u){let v=new Ze,g=new D,m=new Ot,E=new D(1,1,1),M=new an(x.geometry,x.material,f);for(let b=0;b<f;b++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,b),c.SCALE&&E.fromBufferAttribute(c.SCALE,b),M.setMatrixAt(b,v.compose(g,m,E));for(let b in c)if(b==="_COLOR_0"){let I=c[b];M.instanceColor=new Rs(I.array,I.itemSize,I.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&x.geometry.setAttribute(b,c[b]);Lt.prototype.copy.call(M,x),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},cp="glTF",Lo=12,sp={JSON:1313821514,BIN:5130562},_u=class{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Lo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Lo,r=new DataView(e,Lo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===sp.JSON){let l=new Uint8Array(e,Lo+o,a);this.content=n.decode(l)}else if(c===sp.BIN){let l=Lo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Mu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Tu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Tu[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Or[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let x in d.attributes){let v=d.attributes[x],g=c[x];g!==void 0&&(v.normalized=g)}u(d)},a,l,cn,f)})})}},Su=class{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Eu=class{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}},gc=class extends rs{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,x=e*l,v=x-l,g=-2*d+3*f,m=d-f,E=1-g,M=m-f+u;for(let b=0;b!==a;b++){let I=o[v+b+a],T=o[v+b+c]*h,A=o[x+b+a],w=o[x+b]*h;r[b]=E*I+M*T+g*A+m*w}return r}},Hy=new Ot,wu=class extends gc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Hy.fromArray(r).normalize().toArray(r),r}},Yn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rp={9728:nn,9729:Wt,9984:Lh,9985:eo,9986:ir,9987:ei},op={33071:Dn,33648:ao,10497:sn},eu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Tu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Gy={CUBICSPLINE:void 0,LINEAR:pr,STEP:dr},tu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Vy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new it({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:kn})),i.DefaultMaterial}function Ls(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ni(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Wy(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Xy(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qy(i){let e,t=i.extensions&&i.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+nu(t.attributes):e=i.indices+":"+nu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+nu(i.targets[n]);return e}function nu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Au(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Yy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var jy=new Ze,Ru=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ky,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new cs(this.options.manager):this.textureLoader=new Ka(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ls(r,a,s),Ni(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(us.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=eu[s.type],a=Or[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new bt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=eu[s.type],l=Or[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0,v,g;if(d&&d!==u){let m=Math.floor(f/d),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,M=t.cache.get(E);M||(v=new l(a,m*d,s.count*d/h),M=new vr(v,d/h),t.cache.add(E,M)),g=new As(M,c,f%d/h,x)}else a===null?v=new l(s.count*c):v=new l(a,f,s.count*c),g=new bt(v,c,x);if(s.sparse!==void 0){let m=eu.SCALAR,E=Or[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,I=new E(o[1],M,s.sparse.count*m),T=new l(o[2],b,s.sparse.count*c);a!==null&&(g=new bt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,w=I.length;A<w;A++){let S=I[A];if(g.setX(S,T[A*c]),c>=2&&g.setY(S,T[A*c+1]),c>=3&&g.setZ(S,T[A*c+2]),c>=4&&g.setW(S,T[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=x}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=rp[f.magFilter]||Wt,h.minFilter=rp[f.minFilter]||ei,h.wrapS=op[f.wrapS]||sn,h.wrapT=op[f.wrapT]||sn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==nn&&h.minFilter!==Wt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let x=f;t.isImageBitmapLoader===!0&&(x=function(v){let g=new Jt(v);g.needsUpdate=!0,f(g)}),t.load(us.resolveURL(u,r.path),x,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Ni(u,o),u.userData.mimeType=o.mimeType||Yy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[mt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ai,Sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Cs,Sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return it}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[mt.KHR_MATERIALS_UNLIT]){let u=s[mt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],cn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Nt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=zt);let h=r.alphaMode||tu.OPAQUE;if(h===tu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===tu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Yt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new be(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Yt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Yt){let u=r.emissiveFactor;a.emissive=new Ie().setRGB(u[0],u[1],u[2],cn)}return r.emissiveTexture!==void 0&&o!==Yt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Nt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ni(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ls(s,u,r),u})}createUniqueName(e){let t=Bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return ap(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=qy(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=ap(new Ct,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Vy(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,x=h.length;d<x;d++){let v=h[d],g=o[d],m,E=l[d];if(g.mode===Yn.TRIANGLES||g.mode===Yn.TRIANGLE_STRIP||g.mode===Yn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new La(v,E):new Ge(v,E),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Yn.TRIANGLE_STRIP?m.geometry=$h(m.geometry,ec):g.mode===Yn.TRIANGLE_FAN&&(m.geometry=$h(m.geometry,_o));else if(g.mode===Yn.LINES)m=new yr(v,E);else if(g.mode===Yn.LINE_STRIP)m=new br(v,E);else if(g.mode===Yn.LINE_LOOP)m=new Fa(v,E);else if(g.mode===Yn.POINTS)m=new ns(v,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Xy(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Ni(m,r),g.extensions&&Ls(s,m,g),t.assignFinalMaterial(m),u.push(m)}for(let d=0,x=u.length;d<x;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Ls(s,u[0],r),u[0];let f=new ct;r.extensions&&Ls(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,x=u.length;d<x;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(fs.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Qi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ni(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new Ze;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ua(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],x=s.samplers[d.sampler],v=d.target,g=v.node,m=s.parameters!==void 0?s.parameters[x.input]:x.input,E=s.parameters!==void 0?s.parameters[x.output]:x.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",E)),l.push(x),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],x=u[2],v=u[3],g=u[4],m=[];for(let E=0,M=f.length;E<M;E++){let b=f[E],I=d[E],T=x[E],A=v[E],w=g[E];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let S=n._createAnimationTracks(b,I,T,A,w);if(S)for(let _=0;_<S.length;_++)m.push(S[_])}return new Ya(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,jy)});for(let d=0,x=u.length;d<x;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new uo:l.length>1?h=new ct:l.length===1?h=l[0]:h=new Lt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ni(h,r),r.extensions&&Ls(n,h,r),r.matrix!==void 0){let u=new Ze;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ct;n.name&&(r.name=s.createUniqueName(n.name)),Ni(r,n),n.extensions&&Ls(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof Sn||f instanceof Jt)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];ms[r.path]===ms.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(ms[r.path]){case ms.weights:l=Ri;break;case ms.rotation:l=Ci;break;case ms.position:case ms.scale:l=Pi;break;default:switch(n.itemSize){case 1:l=Ri;break;case 2:case 3:default:l=Pi;break}break}let h=s.interpolation!==void 0?Gy[s.interpolation]:pr,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let x=new l(c[f]+"."+ms[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Au(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ci?wu:gc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Zy(i,e,t){let n=e.attributes,s=new mn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){let h=Au(Or[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new D,c=new D;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,x=f.max;if(d!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(x[2]))),f.normalized){let v=Au(Or[f.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Ln;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function ap(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Tu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return pt.workingColorSpace!==cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),Ni(i,e),Zy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Wy(i,e.targets,t):i})}var xc=function(){"use strict";var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,r,o=WebAssembly.instantiate(a(s),{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function a(m){for(var E=new Uint8Array(m.length),M=0;M<m.length;++M){var b=m.charCodeAt(M);E[M]=b>96?b-97:b>64?b-39:b+4}for(var I=0,M=0;M<m.length;++M)E[I++]=E[M]<60?n[E[M]]:(E[M]-60)*64+E[++M];return E.buffer.slice(0,I)}function c(m,E,M,b,I,T){var A=r.exports.sbrk,w=M+3&-4,S=A(w*b),_=A(I.length),R=new Uint8Array(r.exports.memory.buffer);R.set(I,_);var B=m(S,M,b,_,I.length);if(B==0&&T&&T(S,w,b),E.set(R.subarray(S,S+M*b)),A(S-A(0)),B!=0)throw new Error("Malformed buffer data: "+B)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(m){var E={object:new Worker(m),pending:0,requests:{}};return E.object.onmessage=function(M){var b=M.data;E.pending-=b.count,E.requests[b.id][b.action](b.value),delete E.requests[b.id]},E}function x(m){for(var E="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),M=new Blob([E],{type:"text/javascript"}),b=URL.createObjectURL(M),I=0;I<m;++I)u[I]=d(b);URL.revokeObjectURL(b)}function v(m,E,M,b,I){for(var T=u[0],A=1;A<u.length;++A)u[A].pending<T.pending&&(T=u[A]);return new Promise(function(w,S){var _=new Uint8Array(M),R=f++;T.pending+=m,T.requests[R]={resolve:w,reject:S},T.object.postMessage({id:R,count:m,size:E,source:_,mode:b,filter:I},[_.buffer])})}function g(m){o.then(function(){var E=m.data;try{var M=new Uint8Array(E.count*E.size);c(r.exports[E.mode],M,E.count,E.size,E.source,r.exports[E.filter]),self.postMessage({id:E.id,count:E.count,action:"resolve",value:M},[M.buffer])}catch(b){self.postMessage({id:E.id,count:E.count,action:"reject",value:b})}})}return{ready:o,supported:!0,useWorkers:function(m){x(m)},decodeVertexBuffer:function(m,E,M,b,I){c(r.exports.meshopt_decodeVertexBuffer,m,E,M,b,r.exports[l[I]])},decodeIndexBuffer:function(m,E,M,b){c(r.exports.meshopt_decodeIndexBuffer,m,E,M,b)},decodeIndexSequence:function(m,E,M,b){c(r.exports.meshopt_decodeIndexSequence,m,E,M,b)},decodeGltfBuffer:function(m,E,M,b,I,T){c(r.exports[h[I]],m,E,M,b,r.exports[l[T]])},decodeGltfBufferAsync:function(m,E,M,b,I){return u.length>0?v(m,E,M,h[b],l[I]):o.then(function(){var T=new Uint8Array(m*E);return c(r.exports[h[b]],T,m,E,M,r.exports[l[I]]),T})}}}();var up=new D(0,1,0);function Cu(i,e){let t=i.geometry,n=t.attributes.position.count,s=new Ct,r=new D,o=new ot().getNormalMatrix(e),a=new ot().setFromMatrix4(e),c=new Float32Array(n*3);for(let h=0;h<n;h++)r.fromBufferAttribute(t.attributes.position,h).applyMatrix4(e),c[h*3]=r.x,c[h*3+1]=r.y,c[h*3+2]=r.z;if(s.setAttribute("position",new bt(c,3)),t.attributes.normal){let h=new Float32Array(n*3);for(let u=0;u<n;u++)r.fromBufferAttribute(t.attributes.normal,u).applyMatrix3(o).normalize(),h[u*3]=r.x,h[u*3+1]=r.y,h[u*3+2]=r.z;s.setAttribute("normal",new bt(h,3))}if(t.attributes.uv){let h=t.attributes.uv,u=new Float32Array(n*2);for(let f=0;f<n;f++)u[f*2]=h.getX(f),u[f*2+1]=h.getY(f);s.setAttribute("uv",new bt(u,2))}t.index&&s.setIndex(new bt(Uint32Array.from(t.index.array),1));let l=t.morphAttributes.position;if(l?.length){let h=t.morphTargetsRelative;s.morphTargetsRelative=h,s.morphAttributes.position=l.map(f=>{let d=new Float32Array(n*3);for(let x=0;x<n;x++)r.fromBufferAttribute(f,x),h?r.applyMatrix3(a):r.applyMatrix4(e),d[x*3]=r.x,d[x*3+1]=r.y,d[x*3+2]=r.z;return new bt(d,3)});let u=t.morphAttributes.normal;u?.length&&(s.morphAttributes.normal=u.map(f=>{let d=new Float32Array(n*3);for(let x=0;x<n;x++)r.fromBufferAttribute(f,x).applyMatrix3(o),d[x*3]=r.x,d[x*3+1]=r.y,d[x*3+2]=r.z;return new bt(d,3)}))}return s}function lp(i,e){let t=i.index.array,n=i.attributes.position.array,s=new Int32Array(i.attributes.position.count).fill(-1),r=[],o=0;for(let l=0;l<t.length;l+=3){let h=t[l],u=t[l+1],f=t[l+2],d=(n[h*3]+n[u*3]+n[f*3])/3,x=(n[h*3+1]+n[u*3+1]+n[f*3+1])/3,v=(n[h*3+2]+n[u*3+2]+n[f*3+2])/3;if(e(d,x,v))for(let g of[h,u,f])s[g]<0&&(s[g]=o++),r.push(s[g])}let a=l=>{let h=l.itemSize,u=new Float32Array(o*h);for(let f=0;f<s.length;f++)if(s[f]>=0)for(let d=0;d<h;d++)u[s[f]*h+d]=l.array[f*h+d];return new bt(u,h)},c=new Ct;for(let[l,h]of Object.entries(i.attributes))c.setAttribute(l,a(h));c.setIndex(new bt(Uint32Array.from(r),1));for(let[l,h]of Object.entries(i.morphAttributes))c.morphAttributes[l]=h.map(a);return c.morphTargetsRelative=i.morphTargetsRelative,c}function Uo(i){let e=[];for(let t of i)t.traverse(n=>n.isMesh&&e.push(n));return e}var vc=class{constructor(e,t){this.name=e,this.parts=t,this.box=new mn;for(let n of t)n.geometry.computeBoundingBox(),this.box.union(n.geometry.boundingBox);this.size=this.box.getSize(new D),this.instances=[],this.tips=[]}place(e,t,n=1){let s=new Ze().compose(e,new Ot().setFromAxisAngle(up,t),new D(n,n,n));return this.instances.push(s),s}};function Us(i,e,t,{yaw:n=0,scale:s=1,mergeByMaterial:r=!0}={}){let o=new Ze().makeScale(s,s,s).multiply(new Ze().makeRotationY(n)).multiply(new Ze().makeTranslation(-t.x,-t.y,-t.z)),a=new Map;for(let h of Uo(e)){let u=Cu(h,o.clone().multiply(h.matrixWorld)),f=r?h.material.uuid:h.uuid,d="";for(let x=h;x&&!d;x=x.parent)e.includes(x)&&(d=x.name);a.has(f)||a.set(f,{material:h.material,geos:[],src:d}),a.get(f).geos.push(u)}let c=[];for(let{material:h,geos:u,src:f}of a.values()){let d=u.length>1?Nn(u):u[0];if(!d){for(let x of u)c.push({geometry:x,material:h,src:f});continue}c.push({geometry:d,material:h,src:f})}let l=new vc(i,c);return l.toPrefab=o,l}var Oi=i=>{let e=new mn;for(let t of i)e.expandByObject(t);return e};function hp(i){let e=Uo([i]),t=new D,n=Oi([i]),s=new D,r=0;for(let h of e){let u=h.geometry.attributes.position;for(let f=0;f<u.count;f++)t.fromBufferAttribute(u,f).applyMatrix4(h.matrixWorld),t.y<n.min.y+.4&&(s.add(t),r++)}s.divideScalar(Math.max(1,r)),s.y=n.min.y;let o=n.max.x-n.min.x,a=n.max.z-n.min.z,c=[],l=n.max.y-.25;if(o>a)for(let h of[n.min.x,n.max.x])Math.abs(h-s.x)>.9&&c.push(new D(h+Math.sign(s.x-h)*.35,l,s.z));else for(let h of[n.min.z,n.max.z])Math.abs(h-s.z)>.9&&c.push(new D(s.x,l,h+Math.sign(s.z-h)*.35));return{base:s,tips:c}}function Ky(i,e=1){let t=i.image;if(!t||!t.width)return null;let n=Math.min(512,t.width),s=Math.min(512,t.height),r=document.createElement("canvas");r.width=n,r.height=s;let o=r.getContext("2d",{willReadFrequently:!0});o.drawImage(t,0,0,n,s);let a=o.getImageData(0,0,n,s),c=e*9301+49297,l=()=>(c=(c*9301+49297)%233280)/233280,h=14,u=[];for(let x=0;x<Math.ceil(n/h)*Math.ceil(s/h);x++)u.push(l()<.38?.6+l()*.4:0);let f=Math.ceil(n/h);for(let x=0;x<s;x++)for(let v=0;v<n;v++){let g=(x*n+v)*4,m=a.data[g]/255,E=a.data[g+1]/255,M=a.data[g+2]/255,b=.2126*m+.7152*E+.0722*M,I=Math.max(m,E,M)-Math.min(m,E,M),A=(b<.26&&I<.16?1:0)*u[Math.floor(x/h)*f+Math.floor(v/h)];a.data[g]=255*A,a.data[g+1]=196*A,a.data[g+2]=120*A,a.data[g+3]=255}o.putImageData(a,0,0);let d=new Ps(r);return d.flipY=i.flipY,d.colorSpace=Nt,d.wrapS=i.wrapS,d.wrapT=i.wrapT,d.channel=i.channel,d}function Jy(){let i=document.createElement("canvas");i.width=512,i.height=1024;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,1024);return t.addColorStop(0,"#11151b"),t.addColorStop(1,"#2a1c10"),e.fillStyle=t,e.fillRect(0,0,512,1024),e.fillStyle="#f5c518",e.font='400 120px "Instrument Serif", Georgia, serif',e.fillText("Boring",40,300),e.fillText("work?",40,420),e.fillStyle="#ffffff",e.font='italic 400 64px "Instrument Serif", Georgia, serif',e.fillText("Let a bot do it.",40,520),e.font='600 26px "JetBrains Mono", monospace',e.fillStyle="#c8c0b2",e.fillText("SAP \xB7 PYTHON \xB7 POWER BI",40,620),e.fillStyle="#f5c518",e.fillRect(40,860,432,90),e.fillStyle="#111",e.font="800 30px Manrope, sans-serif",e.fillText("PIYUSH4U.GITHUB.IO",64,918),i}async function fp(i){let e=new Fr().setMeshoptDecoder(xc),t=["roadkit","soho","blocks","tree"],n={},s=()=>i?.(Object.values(n).reduce((I,T)=>I+T,0)/t.length),[r,o,a,c]=await Promise.all(t.map(I=>e.loadAsync(`assets/models/${I}.glb`,T=>{T.total&&(n[I]=T.loaded/T.total,s())})));for(let I of[r,o,a,c])I.scene.updateMatrixWorld(!0);let l={buildings:[],props:{},roads:{},trees:[],nightMats:[]},h=(I,T)=>{let A=[];return I.scene.traverse(w=>{T.test(w.name)&&w.parent&&!T.test(w.parent.name)&&A.push(w)}),A},u=(I,T)=>h(I,T)[0],f=(I,T)=>{if(!I.map||I.userData.night)return;let A=Ky(I.map,T);A&&(I.emissiveMap=A,I.emissive=new Ie(16777215),I.emissiveIntensity=0,I.userData.night="windows",l.nightMats.push(I))},d=I=>{!I.map||I.userData.night||(I.emissiveMap=I.map,I.emissive=new Ie(16769720),I.emissiveIntensity=0,I.userData.night="shop",l.nightMats.push(I))},x=3,v=[];a.scene.traverse(I=>{/^Building(_0\d)?$/.test(I.name)&&v.push(I)});for(let I of v){let T=Oi([I]),A=Us(I.name,[I],new D((T.min.x+T.max.x)/2,T.min.y,T.max.z));for(let w of A.parts){let S=w.material.name||"";w.material.envMapIntensity=.8,/^Shops/.test(S)?d(w.material):/^building/.test(S)&&f(w.material,x++)}A.kind="block",l.buildings.push(A)}let g=.44,m=h(o,/^BROWN_SOHO00[1-6]_\d+$/);{let I=Oi(m),T=Us("soho-block",m,new D((I.min.x+I.max.x)/2,g,I.max.z-.6));T.kind="soho",l.buildings.push(T)}for(let[I,T]of[["soho-brown",/^BROWN_SOHO00[34]_\d+$/],["soho-green",/^BROWN_SOHO006_\d+$/]]){let A=h(o,T),w=Oi(A),S=Us(I,A,new D((w.min.x+w.max.x)/2,g,w.max.z-.4)),_=new Ne(S.size.x-.5,S.box.max.y-.6,S.size.z-2.2);_.translate(0,(S.box.max.y-.6)/2,S.box.min.z+(S.size.z-2.2)/2+.25);let R=_.attributes.uv,B=_.attributes.position,W=_.attributes.normal;for(let X=0;X<B.count;X++){let Q=Math.abs(W.getX(X))>.5;R.setXY(X,(Q?B.getZ(X):B.getX(X))/4,B.getY(X)/4)}S.parts.push({geometry:_,material:ht("concrete",{color:12432292}),src:"core"}),S.kind="soho",l.buildings.push(S)}o.scene.traverse(I=>{I.isMesh&&/SoHo/.test(I.material.name)&&f(I.material,x++)});for(let[I,T]of[["crossing",/^Pedestrian_crossing/],["road",/^Road_\d/],["manhole",/^Manhole/],["old",/^Old_/],["crossroad",/^Crossroad/],["entrance",/^Road_entrance/]]){let A=u(r,T);if(!A)continue;let w=Oi([A]);l.roads[I]=Us(I,[A],new D((w.min.x+w.max.x)/2,0,w.max.z))}{let I=u(r,/^Double_road_\d/),T=h(r,/^Dual_light_pole/).filter(_=>{let R=Oi([_]).getCenter(new D),B=Oi([I]);return R.x>B.min.x&&R.x<B.max.x&&R.z>B.min.z&&R.z<B.max.z}),A=Oi([I]),w=new D((A.min.x+A.max.x)/2,0,A.max.z),S=Us("boulevard",[I,...T],w);for(let _ of T)for(let R of hp(_).tips)S.tips.push(R.clone().applyMatrix4(S.toPrefab));l.roads.boulevard=S}let E=ht("steel",{color:9081496,repeat:[.3,2]}),M=(I,T)=>I.parts.forEach(A=>{A.material.name==="material_0"&&(A.material=T)}),b=(I,T,A)=>{let w=u(r,T);if(!w)return;let{base:S,tips:_}=hp(w),R=Us(I,[w],S,{yaw:A});R.tips=_.map(B=>B.clone().applyMatrix4(R.toPrefab)),M(R,E),l.props[I]=R};b("lamp",/^Light_pole_24/,Math.PI/2),b("signal",/^Traffic_light_18/,Math.PI/2),b("stop",/^Stop_sign_45/,Math.PI/2),b("speed30",/^Speed_limit_plate_30/,Math.PI/2),b("speed80",/^Speed_limit_plate_80/,Math.PI/2);{let I=h(r,/bus_stop/),T=Oi(I),A=Us("busstop",I,new D((T.min.x+T.max.x)/2,T.min.y,(T.min.z+T.max.z)/2),{yaw:Math.PI/2,mergeByMaterial:!1}),w=new it({color:3883592,metalness:.7,roughness:.35}),S=new Dt({color:11060428,transparent:!0,opacity:.25,roughness:.05,depthWrite:!1}),_=new Ps(Jy());_.colorSpace=Nt;let R=new it({map:_,emissive:16777215,emissiveMap:_,emissiveIntensity:.25,roughness:.3});l.poster=R,_.flipY=!1;let B=A.box.getCenter(new D);A.parts.forEach(W=>{if(/^Glasses/.test(W.src))W.material=S;else if(/^Poster/.test(W.src)){W.material=R;let X=W.geometry;X.computeBoundingBox();let Q=X.boundingBox,N=Q.getCenter(new D),K=N.clone().sub(B).setY(0),k=Q.getSize(new D);k.x<k.z?K.set(Math.sign(K.x)||1,0,0):K.set(0,0,Math.sign(K.z)||1);let Z=K.clone().negate().cross(up),le=X.attributes.position,$=new Float32Array(le.count*2),ae=new D,Oe=Math.abs(Z.x)>.5?k.x:k.z;for(let J=0;J<le.count;J++)ae.fromBufferAttribute(le,J).sub(N),$[J*2]=ae.dot(Z)/Oe+.5,$[J*2+1]=.5-ae.y/k.y;X.setAttribute("uv",new bt($,2))}else W.material=w}),l.props.busstop=A}{let I=Uo([c.scene]).find(_=>_.material.name==="Bark"),T=Uo([c.scene]).filter(_=>_!==I),A=c.animations[0],w=[-1/0,-92,-22,1/0],S=[8.6,9.6,7.6];for(let _=0;_<3;_++){let R=J=>J>w[_]&&J<=w[_+1],B=lp(Cu(I,I.matrixWorld),J=>R(J));B.computeBoundingBox();let W=B.attributes.position.array,X=new D,Q=0;for(let J=0;J<W.length;J+=3)W[J+1]<B.boundingBox.min.y+2&&(X.x+=W[J],X.z+=W[J+2],Q++);X.x/=Q,X.z/=Q,X.y=B.boundingBox.min.y;let N=[B],K=[],k=T.map(J=>({m:J,g:lp(Cu(J,J.matrixWorld),me=>R(me))}));k.forEach(({g:J})=>N.push(J));let Z=-1/0;for(let J of N)J.computeBoundingBox(),Z=Math.max(Z,J.boundingBox.max.y);let le=S[_]/(Z-X.y),$=new Ze().makeScale(le,le,le).multiply(new Ze().makeTranslation(-X.x,-X.y,-X.z)),ae=J=>{J.applyMatrix4($);for(let me of Object.keys(J.morphAttributes))if(me==="position")for(let xe of J.morphAttributes[me])for(let de=0;de<xe.count;de++)xe.setXYZ(de,xe.getX(de)*le,xe.getY(de)*le,xe.getZ(de)*le);return J};K.push({geometry:ae(B),material:I.material});for(let{m:J,g:me}of k){let xe=A.tracks.find(de=>de.name.startsWith(J.name+".morphTargetInfluences"));K.push({geometry:ae(me),material:J.material,track:xe})}let Oe=new vc("tree"+_,K);l.trees.push(Oe)}for(let _ of Uo([c.scene])){let R=_.material;R.metalness=0,R.metalnessMap=null,R.roughness=R.name==="Bark"?.95:.82,R.roughnessMap=null,R.envMapIntensity=.55,"specularIntensity"in R&&(R.specularIntensity=.25,R.specularIntensityMap=null,R.specularColorMap=null),R.side=zt,R.name!=="Bark"&&(R.alphaTest=.45,R.transparent=!1),R.needsUpdate=!0}}return l}function dp(i,e,{shadows:t=!0}={}){let n=[];for(let s of e)if(s.instances.length)for(let r of s.parts){let o=new an(r.geometry,r.material,s.instances.length);s.instances.forEach((a,c)=>o.setMatrixAt(c,a)),o.castShadow=t&&!r.material.transparent,o.receiveShadow=!0,o.computeBoundingSphere(),o.computeBoundingBox?.(),i.add(o),n.push(o),r.mesh=o}return n}function pp(i){let e=new Ge,t=[];for(let s of i){if(!s.instances.length)continue;let r=s.instances.map((o,a)=>a*1.618%6.4);for(let o of s.parts){if(!o.track||!o.mesh)continue;let a=o.track.createInterpolant(),c=o.geometry.morphAttributes.position?.length||0;e.morphTargetInfluences=new Array(c).fill(0);let l=o.track.times[o.track.times.length-1];o.material.alphaTest&&(o.mesh.customDepthMaterial=new Ts({depthPacking:Mo,map:o.material.map,alphaTest:o.material.alphaTest})),t.push(h=>{for(let u=0;u<s.instances.length;u++){let f=a.evaluate((h*.8+r[u])%l);for(let d=0;d<c;d++)e.morphTargetInfluences[d]=f[d];o.mesh.setMorphAt(u,e)}o.mesh.morphTexture.needsUpdate=!0})}}let n=-1;return(s,r=!0)=>{if(!(s-n<1/30)){n=s;for(let o of t)o(s)}}}var Fi=4.5,hn=7.4,Gt={zNear:-582,zFar:-716,level:-3.2};function vp(){let i=[[0,70],[0,20],[3,-40],[-10,-100],[-16,-160],[-2,-220],[18,-280],[20,-340],[2,-400],[-14,-455],[-8,-505],[0,-545],[0,-575],[0,-620],[0,-700],[0,-760],[0,-830]].map(([c,l])=>new D(c,0,l)),e=new po(i,!1,"centripetal");e.arcLengthDivisions=2e3;let t=e.getLength(),n=1400,s=[];for(let c=0;c<=n;c++)s.push(e.getPointAt(c/n));return{curve:e,length:t,samples:s,uAtZ:c=>{let l=0,h=1/0;for(let u=0;u<=n;u++){let f=Math.abs(s[u].z-c);f<h&&(h=f,l=u)}return l/n},frame:(c,l={})=>(c=Math.min(1,Math.max(0,c)),l.p=e.getPointAt(c,l.p||new D),l.t=e.getTangentAt(c,l.t||new D).setY(0).normalize(),l.r=(l.r||new D).crossVectors(l.t,new D(0,1,0)).normalize(),l),distToRoad:(c,l)=>{let h=1/0;for(let u=0;u<=n;u+=2){let f=s[u].x-c,d=s[u].z-l,x=f*f+d*d;x<h&&(h=x)}return Math.sqrt(h)}}}function Qy(){let i=oi(21),e=[];for(let n=0;n<64;n++)e.push({shutter:i()<.38,balcony:i()<.22,lit:i()<.36,warm:i()<.75,blind:i()*.5});let t=n=>Ft(512,512,(s,r)=>{let o=r/8;if(s.fillStyle=n?"#000":"#efe9dd",s.fillRect(0,0,r,r),!n){for(let a=0;a<3e4;a++)s.fillStyle=`rgba(${i()<.5?"90,80,70":"255,255,255"},${i()*.12})`,s.fillRect(i()*r,i()*r,2,2);for(let a=0;a<140;a++)s.fillStyle=`rgba(70,64,55,${.04+i()*.08})`,s.fillRect(i()*r,i()*r,1+i()*3,20+i()*60)}e.forEach((a,c)=>{let l=c%8*o,h=Math.floor(c/8)*o;n||(s.fillStyle="rgba(60,52,44,0.18)",s.fillRect(l,h,o,4));let u=l+o*.3,f=h+o*.24,d=o*.4,x=o*.52;if(n){if(a.lit){let g=s.createLinearGradient(0,f,0,f+x);g.addColorStop(0,a.warm?"#ffd28a":"#cfe6ff"),g.addColorStop(1,a.warm?"#ff9f43":"#7fa9e0"),s.fillStyle=g,s.fillRect(u,f,d,x),s.fillStyle=`rgba(0,0,0,${a.blind})`,s.fillRect(u,f,d,x*.4)}return}s.fillStyle="rgba(70,60,50,0.35)",s.fillRect(u-3,f-3,d+6,x+6);let v=s.createLinearGradient(u,f,u+d,f+x);if(v.addColorStop(0,"#2f3c48"),v.addColorStop(1,"#151b22"),s.fillStyle=v,s.fillRect(u,f,d,x),s.fillStyle="rgba(220,230,240,0.12)",s.fillRect(u+2,f+2,d*.35,x-4),a.shutter){s.fillStyle="#3d6b4f",s.fillRect(u-d*.42,f,d*.38,x),s.fillRect(u+d*1.04,f,d*.38,x),s.fillStyle="rgba(0,0,0,0.25)";for(let g=0;g<7;g++)s.fillRect(u-d*.42,f+g*x/7,d*.38,1.5),s.fillRect(u+d*1.04,f+g*x/7,d*.38,1.5)}if(a.balcony){s.fillStyle="rgba(40,40,40,0.75)",s.fillRect(l+o*.12,f+x+2,o*.76,3);for(let g=0;g<9;g++)s.fillRect(l+o*.12+g*o*.76/8,f+x*.75,1.5,x*.25+4)}})});return{map:Ut(t(!1),{repeat:!0}),emissive:Ut(t(!0),{repeat:!0})}}function mp(i,e,t,n,s=12,r=1,o=[]){let a=[],c=[],l=[],h=i.samples.length-1,u={},f=0,d=null,x=0;for(let m=0;m<=h;m+=r){if(i.frame(m/h,u),d&&(f+=d.distanceTo(u.p)),d=u.p.clone(),o.some(([b,I])=>f>b&&f<I)){x=0;continue}let E=u.p.clone().addScaledVector(u.r,e),M=u.p.clone().addScaledVector(u.r,t);if(a.push(E.x,n,E.z,M.x,n,M.z),c.push(0,f/s,1,f/s),x>0){let b=a.length/3-2;l.push(b-2,b,b-1,b-1,b,b+1)}x++}let v=new Ct;v.setAttribute("position",new Mt(a,3)),v.setAttribute("uv",new Mt(c,2)),v.setIndex(l),v.computeVertexNormals();let g=v.attributes.normal;for(let m=0;m<g.count;m++)g.setXYZ(m,0,1,0);return v}function gp(i,e,t,n=2,s=[]){let r=[],o=[],a=[],c=0,l=null,h=0,u=null,f=i.samples.length-1,d={},x=0;for(let g=0;g<=f;g+=n){i.frame(g/f,d);let m=d.p.clone().addScaledVector(d.r,e);if(l&&(c+=l.distanceTo(m)),l=m,u&&(h+=u.distanceTo(d.p)),u=d.p.clone(),s.some(([E,M])=>h>E&&h<M)){x=0;continue}if(r.push(m.x,0,m.z,m.x,t,m.z),a.push(c/2,0,c/2,1),x>0){let E=r.length/3-2;o.push(E-2,E,E-1,E-1,E,E+1)}x++}let v=new Ct;return v.setAttribute("position",new Mt(r,3)),v.setAttribute("uv",new Mt(a,2)),v.setIndex(o),v.computeVertexNormals(),v}function $y(i,e,t,n){let s=new Ne(i,e,t),r=s.attributes.uv,o=24,a=Math.floor(n()*8)/8,c=Math.floor(n()*8)/8;for(let l=0;l<6;l++)for(let h=0;h<4;h++){let u=l*4+h;if(l===2||l===3){r.setXY(u,.003,.997);continue}let f=l<2?t:i;r.setXY(u,r.getX(u)*(f/o)+a,r.getY(u)*(e/o)+c)}return s.translate(0,e/2,0),s}var xp=["#e9dcc0","#d39a76","#efe6d2","#bccab9","#e2b98b","#cfc7b8","#e8cfc7","#f3eee3","#c9b48f","#a9bfc9","#dcc6a0"];function bp(i,e,t,n,s=null){let r=oi(42),o={nightMats:[],update:[]},a=e.samples.length-1,c=(Y,V)=>{let j=Math.abs(V-Y),ne=ht("ground",{repeat:[3600/10,j/10]}),O=new Ge(new _t(3600,j),ne);O.rotation.x=-Math.PI/2,O.position.set(0,-.02,(Y+V)/2),O.receiveShadow=!0,i.add(O)};c(1500,Gt.zNear),c(Gt.zFar,-2600);let l=(()=>{let V=new Uint8Array(262144),j=(O,H)=>Math.sin(O*.11)*.5+Math.sin(H*.07+O*.03)*.8+Math.sin((O+H)*.23)*.3+Math.sin(O*.4-H*.31)*.15;for(let O=0;O<256;O++)for(let H=0;H<256;H++){let q=2*Math.PI/256,se=j((H+1)*q*40,O*q*40)-j((H-1)*q*40,O*q*40),Se=j(H*q*40,(O+1)*q*40)-j(H*q*40,(O-1)*q*40),ve=new D(-se,-Se,2).normalize(),Pe=(O*256+H)*4;V[Pe]=(ve.x*.5+.5)*255,V[Pe+1]=(ve.y*.5+.5)*255,V[Pe+2]=(ve.z*.5+.5)*255,V[Pe+3]=255}let ne=new ni(V,256,256);return ne.wrapS=ne.wrapT=sn,ne.repeat.set(60,4),ne.needsUpdate=!0,ne})(),h;n.isMobile?(h=new Ge(new _t(3600,Gt.zNear-Gt.zFar+10),new Dt({color:1914432,roughness:.06,metalness:.1,normalMap:l,normalScale:new be(.35,.35),clearcoat:1,clearcoatRoughness:.1})),o.update.push(Y=>{l.offset.set(Y*.004,Y*.011)})):(l.repeat.set(1,1),h=new dc(new _t(3600,Gt.zNear-Gt.zFar+10),{textureWidth:1024,textureHeight:1024,waterNormals:l,sunDirection:new D(.3,.6,-.7).normalize(),sunColor:16769712,waterColor:862e3,distortionScale:1.6,fog:!0,alpha:1}),h.material.uniforms.size.value=6,o.water=h,o.update.push((Y,V)=>{h.material.uniforms.time.value=Y*.35,h.visible=!V||V.position.z<-380})),h.rotation.x=-Math.PI/2,h.position.set(0,Gt.level,(Gt.zNear+Gt.zFar)/2),i.add(h);let u=ht("concrete",{repeat:[900,1.2],color:10262154});for(let Y of[Gt.zNear,Gt.zFar]){let V=new Ge(new Ne(3600,4.5,2),u);V.position.set(0,-2.2,Y+(Y===Gt.zNear?-1:1)),V.receiveShadow=!0,i.add(V)}let f=s?np({route:e,kit:s,exclusions:t,rng:oi(91),ROAD_HALF:Fi,WALK_OUT:hn,RIVER:Gt}):{gaps:{"-1":[],1:[]},lampHeads:[]};o.streets=f;let d=ht("asphalt",{side:zt,normalScale:1.2,envMapIntensity:1.1}),x=new Ge(mp(e,-Fi,Fi,0,9,1),d);x.receiveShadow=!0,i.add(x),o.road=d;let v=Un(ht("pavers",{side:zt}),{height:.4,strength:0});for(let[Y,V,j]of[[Fi,hn,1],[-hn,-Fi,-1]]){let ne=mp(e,Y,V,.16,2.4,1,f.gaps[j]),O=ne.attributes.uv;for(let q=0;q<O.count;q++)O.setX(q,O.getX(q)*((hn-Fi)/2.4));let H=new Ge(ne,v);H.receiveShadow=!0,i.add(H)}let g=new it({map:Qt.curb_col,roughness:.8,side:zt}),m=ht("concrete",{repeat:[1,.05],side:zt});for(let Y of[Fi,-Fi]){let V=new Ge(gp(e,Y,.16,1,f.gaps[Math.sign(Y)]),g);V.receiveShadow=!0,i.add(V)}for(let Y of[hn,-hn])i.add(new Ge(gp(e,Y,.16,2,f.gaps[Math.sign(Y)]),m));let E=(Y,V=6)=>Y<Gt.zNear+V&&Y>Gt.zFar-V,M=(Y,V,j)=>t.some(ne=>Math.hypot(ne.x-Y,ne.z-V)<ne.r+j),b=Qy(),I=[],T=[],A=[],w=[],S=new mc(oi(77),{lite:n.isMobile}),_=(Y,V,j,ne,O,H,q=hn+.6,se=0,Se=0)=>{let ve=Math.hypot(j,ne)/2;if(E(V,ve+4)||M(Y,V,ve))return!1;let Pe=Math.cos(H),tt=Math.sin(H);for(let[at,fn]of[[-j/2,-ne/2],[j/2,-ne/2],[-j/2,ne/2],[j/2,ne/2],[0,0]]){let Rn=Y+at*Pe+fn*tt,gs=V-at*tt+fn*Pe;if(e.distToRoad(Rn,gs)<q)return!1}let rt=xp[Math.floor(r()*xp.length)];if(se){let at=Nr(new Ne(j,O,ne).translate(0,O/2,0));Di(at,rt),at.rotateY(H),at.translate(Y,0,V),w.push(An(at)),S.addBuilding({x:Y,z:V,rot:H,side:se,perp:j,along:ne,floors:Se,tint:rt})}else{let at=$y(j,O,ne,r);Di(at,rt),at.rotateY(H),at.translate(Y,0,V),I.push(An(at))}let Je=new Ne(j+.3,.6,ne+.3);Je.translate(0,O+.3,0),Di(Je,"#8a8378");let At=[Je],Et=1+Math.floor(r()*3);for(let at=0;at<Et;at++){let fn=new gt(.7,.75,1.5,14);fn.translate((r()-.5)*(j-2),O+1.35,(r()-.5)*(ne-2)),Di(fn,"#141414"),At.push(fn)}if(r()<.4){let at=new Ne(2.5,2.4,2.5);at.translate((r()-.5)*(j-3),O+1.2,(r()-.5)*(ne-3)),Di(at,"#bdb4a3"),At.push(at)}for(let at of At)at.rotateY(H),at.translate(Y,0,V),T.push(An(at,["position","normal","color"]));return!0},R={};for(let Y of[-1,1]){let V=4,j=e.length,ne=s?s.buildings.filter(H=>H.kind==="block"||H.name!=="soho-block"):[],O=0;for(;V<j+30;){if(ne.length&&r()<.9){let Et=[];O<2&&r()<.18&&Et.push(s.buildings.find(fn=>fn.name==="soho-block")),Et.push(ne[Math.floor(r()*ne.length)]),Et.push(...ne.slice().sort((fn,Rn)=>fn.size.x-Rn.size.x).slice(0,4).sort(()=>r()-.5));let at=null;for(let fn of Et)if(at=ip({pf:fn,route:e,s:V,side:Y,WALK_OUT:hn,excluded:M,inRiver:E}),at){fn.name==="soho-block"&&O++;break}if(at){t.push({x:at.centre.x,z:at.centre.z,r:Math.min(at.w,at.depth)*.5}),V+=at.w+.15+r()*.6;continue}}let H=8+r()*8,q=Math.min(1,V/j);e.frame(q,R);let se=9+r()*7,ve=r()<.06?8+Math.floor(r()*5):2+Math.floor(r()*3.2),Pe=ps+ve*Ur+.3,tt=hn+1.2+se/2+r()*1.5,rt=R.p.x+R.r.x*Y*tt,Je=R.p.z+R.r.z*Y*tt,At=Math.atan2(R.t.x,R.t.z);_(rt,Je,se,H,Pe,At,hn+.6,Y,ve),V+=H+.6+r()*2.5}for(V=0;V<e.length+60;){let H=Math.min(1,V/e.length);e.frame(H,R);let q=12+r()*14,se=12+r()*14,Se=r()<.18?34+r()*40:12+r()*16,ve=34+r()*30,Pe=R.p.x+R.r.x*Y*ve,tt=R.p.z+R.r.z*Y*ve;if(s&&r()<.45){let rt=s.buildings[Math.floor(r()*s.buildings.length)],Je=Math.hypot(rt.size.x,rt.size.z)/2;if(!E(tt,Je+4)&&!M(Pe,tt,Je*.9)&&e.distToRoad(Pe,tt)>20+Je*.5){let At=new D(Pe,0,tt).addScaledVector(R.r,-Y*rt.size.z/2);rt.place(At,Math.atan2(-R.r.x*Y,-R.r.z*Y)),t.push({x:Pe,z:tt,r:Je*.7}),V+=rt.size.x+6+r()*10;continue}}_(Pe,tt,q,se,Se,Math.atan2(R.t.x,R.t.z)+(r()-.5)*.3,20),V+=q+6+r()*10}}for(let Y=0;Y<70;Y++){let V=(r()-.5)*520,j=Gt.zFar-24-r()*240,ne=12+r()*18,O=12+r()*18,H=r()<.3?40+r()*55:14+r()*22;_(V,j,ne,O,H,(r()-.5)*.4,14)}for(let Y=0;Y<36;Y++){let V=(r()<.5?-1:1)*(26+r()*240),j=Gt.zNear+22+r()*70;_(V,j,12+r()*10,10+r()*10,10+r()*22,(r()-.5)*.2,14)}let B=new it({map:b.map,emissiveMap:b.emissive,emissive:16777215,emissiveIntensity:0,vertexColors:!0,roughness:.88}),W=Un(ht("plaster",{vertexColors:!0,normalScale:1.4}),{height:3.2,strength:.38}),X=new Ge(Nn([...w,...S.wallGeos]),W);X.castShadow=!0,X.receiveShadow=!0,i.add(X);let Q=S.build(i),N=new Ge(Nn(I),B);N.castShadow=!0,N.receiveShadow=!0,i.add(N);let K=new Ge(Nn(T),new it({vertexColors:!0,roughness:.85}));if(K.castShadow=!0,K.receiveShadow=!0,i.add(K),A.length){let Y=new Ge(Nn(A),new it({vertexColors:!0,roughness:.75,side:zt}));Y.castShadow=!0,i.add(Y)}o.windows=B;let k=Nn([An(new gt(.07,.11,7,10).translate(0,3.5,0),["position","normal","uv"]),An(new Ne(.07,.07,1.8).translate(0,6.95,.9),["position","normal","uv"]),An(new Ne(.3,.12,.6).translate(0,6.9,1.85),["position","normal","uv"])]),Z=new Ne(.26,.04,.5).translate(0,6.83,1.85),le=[],$=s?.props.lamp?7.2:6.2;for(let Y=6;Y<e.length-10;Y+=26){e.frame(Y/e.length,R);for(let V of[-1,1]){let j=Fi+1,ne=R.p.x+R.r.x*V*j,O=R.p.z+R.r.z*V*j;if(M(ne,O,1))continue;let H=Math.atan2(-R.r.x*V,-R.r.z*V);le.push({x:ne,z:O,rot:H,side:V,onBridge:E(O,0)})}}let ae=s?.props.lamp,Oe=[];if(ae){for(let Y of le){let V=ae.place(new D(Y.x,.16,Y.z),Y.rot);for(let j of ae.tips)Oe.push({pos:j.clone().applyMatrix4(V),yaw:Y.rot})}for(let Y of f.lampHeads)Oe.push({pos:Y,yaw:0})}let J=new an(k,ht("steel",{color:4870230,repeat:[.5,2]}),ae?0:le.length),me=new it({color:16773840,emissive:16763266,emissiveIntensity:0}),xe=ae?Oe.length:le.length,de=new an(ae?new Ne(.34,.05,.6):Z,me,xe),Fe=qn("rgba(255,196,120,0.9)","rgba(255,170,90,0)",128),qe=new Yt({map:Fe,transparent:!0,opacity:0,depthWrite:!1,blending:hi}),We=new an(new _t(8,8).rotateX(-Math.PI/2),qe,xe),et=new Ze,pe=new Ot,_e=new D,z=new D(1,1,1);ae?Oe.forEach(({pos:Y,yaw:V},j)=>{pe.setFromAxisAngle(new D(0,1,0),V),et.compose(_e.copy(Y).setY(Y.y-.12),pe,z),de.setMatrixAt(j,et),et.compose(_e.set(Y.x,.03,Y.z),new Ot,z),We.setMatrixAt(j,et)}):le.forEach((Y,V)=>{pe.setFromAxisAngle(new D(0,1,0),Y.rot),et.compose(_e.set(Y.x,.16,Y.z),pe,z),J.setMatrixAt(V,et),de.setMatrixAt(V,et);let j=Y.x+Math.sin(Y.rot)*1.85,ne=Y.z+Math.cos(Y.rot)*1.85;et.compose(_e.set(j,.03,ne),new Ot,z),We.setMatrixAt(V,et)}),J.castShadow=!0,We.renderOrder=2,i.add(J,de,We),o.lampHead=me,o.lampPool=qe;let Ye=[],Ee={"-1":le.filter(Y=>Y.side===-1&&!Y.onBridge),1:le.filter(Y=>Y.side===1&&!Y.onBridge)};for(let Y of["-1","1"]){let V=Ee[Y];for(let j=0;j<V.length-1;j++){let ne=new D(V[j].x,$,V[j].z),O=new D(V[j+1].x,$,V[j+1].z);if(!(ne.distanceTo(O)>40)&&!t.some(H=>H.r>5&&Math.hypot(H.x-(ne.x+O.x)/2,H.z-(ne.z+O.z)/2)<H.r))for(let H=0;H<3;H++){let q=.8+H*.35+r()*.4,se=ne.clone().setY(ne.y-H*.25);for(let Se=1;Se<=10;Se++){let ve=Se/10,Pe=ne.clone().lerp(O,ve);Pe.y=$-H*.25-Math.sin(ve*Math.PI)*q,Ye.push(se.x,se.y,se.z,Pe.x,Pe.y,Pe.z),se=Pe}}}}let De=new Ct;De.setAttribute("position",new Mt(Ye,3)),i.add(new yr(De,new Cs({color:1710618,transparent:!0,opacity:.7})));let ye=oi(5),Qe=[0,1,2].map(()=>{let Y=[],V=[],j=new D(0,1,0),ne=(Se,ve,Pe,tt)=>{let rt=Se.distanceTo(ve),Je=new gt(tt,Pe,rt,9,3,!0);Je.translate(0,rt/2,0);let At=Je.attributes.uv;for(let Et=0;Et<At.count;Et++)At.setXY(Et,At.getX(Et)*2,At.getY(Et)*rt);Je.applyQuaternion(new Ot().setFromUnitVectors(j,ve.clone().sub(Se).normalize())),Je.translate(Se.x,Se.y,Se.z),Y.push(An(Je,["position","normal","uv"]))},O=new D((ye()-.5)*.6,3.2+ye()*1.2,(ye()-.5)*.6);ne(new D(0,-.2,0),O,.32,.22);let H=new D(0,6.4,0),q=[],se=5+Math.floor(ye()*3);for(let Se=0;Se<se;Se++){let ve=Se/se*Math.PI*2+ye()*.6,Pe=2.2+ye()*1.8,tt=O.clone().add(new D(Math.cos(ve)*Pe*.5,1.2+ye()*.8,Math.sin(ve)*Pe*.5)),rt=O.clone().add(new D(Math.cos(ve)*Pe,2.4+ye()*1.6,Math.sin(ve)*Pe));ne(O,tt,.16,.11),ne(tt,rt,.11,.05),q.push(rt,tt.clone().lerp(rt,.5))}q.push(O.clone().add(new D(0,3.2,0)));for(let Se of q)for(let ve=0;ve<9;ve++){let Pe=1.5+ye()*1.1,tt=new _t(Pe,Pe);tt.rotateX(-Math.PI/2+(ye()-.5)*1.6),tt.rotateY(ye()*Math.PI*2);let rt=new D((ye()-.5)*1.8,(ye()-.3)*1.2,(ye()-.5)*1.8);tt.translate(Se.x+rt.x,Se.y+rt.y,Se.z+rt.z);let Je=tt.attributes.position,At=tt.attributes.normal;for(let Et=0;Et<Je.count;Et++){let at=new D(Je.getX(Et),Je.getY(Et),Je.getZ(Et)).sub(H);at.y*=1.6,at.normalize(),At.setXYZ(Et,at.x,at.y,at.z)}V.push(An(tt,["position","normal","uv"]))}return{wood:Nn(Y),leaves:Nn(V)}}),Be=[];for(let Y=14;Y<e.length;Y+=9+r()*10){e.frame(Y/e.length,R);let V=r()<.5?-1:1,j=hn-.9,ne=R.p.x+R.r.x*V*j,O=R.p.z+R.r.z*V*j;E(O,8)||t.some(H=>(H.r>9||H.r<4.5)&&Math.hypot(H.x-ne,H.z-O)<H.r+2.5)||Be.push([ne,O,.7+r()*.35,r()*6,!0])}let F=s?n.isMobile?50:150:260;for(let Y=0;Y<F;Y++){let V=(r()-.5)*500,j=60-r()*900;E(j,10)||M(V,j,3)||e.distToRoad(V,j)<12||Be.push([V,j,.9+r()*.6,r()*6])}let P=ht("bark",{normalScale:1.5}),te=new it({map:Qt.leaves_col,normalMap:Qt.leaves_nor,alphaTest:.45,side:zt,roughness:.78,color:16777215});te.map.wrapS=te.map.wrapT=Dn;let fe=new Ts({depthPacking:Mo,map:Qt.leaves_col,alphaTest:.45}),ge=new Ie;if(s?.trees.length){let Y=s.trees;Be.forEach(([V,j,ne,O,H],q)=>{H?Y[1+q%2].place(new D(V,.1,j),O,.62+ne*.18):Y[q%Y.length].place(new D(V,.1,j),O,.8+ne*.3)})}else Qe.forEach((Y,V)=>{let j=Be.filter((H,q)=>q%3===V);if(!j.length)return;let ne=new an(Y.wood,P,j.length),O=new an(Y.leaves,te,j.length);O.customDepthMaterial=fe,j.forEach(([H,q,se,Se],ve)=>{pe.setFromAxisAngle(new D(0,1,0),Se),et.compose(_e.set(H,.1,q),pe,new D(se,se,se)),ne.setMatrixAt(ve,et),O.setMatrixAt(ve,et),O.setColorAt(ve,ge.setHSL(.22+r()*.06,.45+r()*.2,.62+r()*.18))}),ne.castShadow=O.castShadow=!0,ne.receiveShadow=O.receiveShadow=!0,i.add(ne,O)});let he=new Ct,je=[];for(let Y=0;Y<1800;Y++){let V=r()*Math.PI*2,j=Math.acos(r()*.92);je.push(Math.sin(j)*Math.cos(V)*1400,Math.cos(j)*1400,Math.sin(j)*Math.sin(V)*1400)}he.setAttribute("position",new Mt(je,3));let Re=new Ai({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),Le=new ns(he,Re);i.add(Le);let $e=new Ge(new En(18,32,16),new Yt({color:16774880,fog:!1,transparent:!0,opacity:0})),Me=new Ti(new ui({map:qn("rgba(255,240,210,0.55)","rgba(255,240,210,0)"),fog:!1,transparent:!0,opacity:0,depthWrite:!1}));Me.scale.set(220,220,1),i.add($e,Me);let Ve=new cs().load("assets/tex/cloud.webp");Ve.colorSpace=Nt;let Xe=new ct,Ke=[];for(let Y=0;Y<46;Y++){let V=new ui({map:Ve,transparent:!0,depthWrite:!1,fog:!1,opacity:.55+r()*.35,rotation:r()*6.28});V.userData.base=V.opacity,Ke.push(V);let j=new Ti(V),ne=r()*Math.PI*2,O=900+r()*700;j.position.set(Math.cos(ne)*O,140+r()*260,Math.sin(ne)*O);let H=260+r()*420;j.scale.set(H*(1.4+r()),H,1),j.userData.base=V.opacity,Xe.add(j)}if(Xe.renderOrder=-1,i.add(Xe),o.clouds=Xe,o.tintClouds=(Y,V)=>Ke.forEach(j=>{j.color.copy(Y),j.opacity=j.userData.base*V}),o.sky={stars:Le,starMat:Re,moon:$e,moonGlow:Me},s){dp(i,[...s.buildings,...Object.values(s.roads),...Object.values(s.props),...s.trees]);let Y=pp(s.trees);o.update.push(V=>Y(V))}return o.setNight=Y=>{if(s){for(let V of s.nightMats)V.emissiveIntensity=V.userData.night==="windows"?Y*1.8:Y*.55;s.poster&&(s.poster.emissiveIntensity=.25+Y*.9)}B.emissiveIntensity=Y*1.25,Q.setNight(Y),me.emissiveIntensity=Y*6,qe.opacity=Y*.55,Re.opacity=Math.max(0,Y-.35)*1.4,$e.material.opacity=Math.max(0,Y-.3),Me.material.opacity=Math.max(0,Y-.3)*.8},o}function yp(i,e){let t=new ct,n=Gt.zNear+6,s=Gt.zFar-6,r=n-s,o=7.2,a=M=>{let b=[[0,7],[.22,30],[.36,21],[.5,15.5],[.64,21],[.78,30],[1,7]];for(let I=0;I<b.length-1;I++)if(M<=b[I+1][0]){let T=(M-b[I][0])/(b[I+1][0]-b[I][0]);return b[I][1]+(b[I+1][1]-b[I][1])*T}return 7},c=26,l=[],h=(M,b,I)=>new D(M,b,n-I*r);for(let M of[-o,o]){for(let b=0;b<c;b++){let I=b/c,T=(b+1)/c;l.push([h(M,.4,I),h(M,.4,T),.55]),l.push([h(M,a(I),I),h(M,a(T),T),.6]),l.push([h(M,.4,I),h(M,a(I),I),.35]),l.push([h(M,.4,I),h(M,a(T),T),.22]),l.push([h(M,a(I),I),h(M,.4,T),.22])}l.push([h(M,.4,1),h(M,a(1),1),.35]);for(let b of[.22,.78])l.push([h(M,Gt.level-1,b),h(M,a(b)+2,b),1.4])}for(let M=0;M<=c;M++){let b=M/c,I=a(b);I>9&&(l.push([h(-o,I,b),h(o,I,b),.28]),M<c&&l.push([h(-o,I,b),h(o,a((M+1)/c),(M+1)/c),.16]))}let u=ht("steel",{color:6976124,repeat:[1,3],normalScale:1.5}),f=new an(new Ne(1,1,1),u,l.length),d=new Ze;l.forEach(([M,b,I],T)=>f.setMatrixAt(T,qd(M,b,I,I,d))),f.castShadow=!0,f.receiveShadow=!0,t.add(f);let x=new Ge(new Ne(o*2+1,1.4,r+2),ht("steel",{color:5264988,repeat:[2,20]}));x.position.set(0,-.72,n-r/2),x.receiveShadow=!0,t.add(x);for(let M of[.22,.78]){let b=new Ge(new Ne(o*2+6,4,7),ht("concrete",{repeat:[5,1]}));b.position.set(0,Gt.level+.6,n-M*r),t.add(b)}let v=[];for(let M of[-o,o])for(let b=0;b<=120;b++){let I=b/120;v.push(h(M,a(I)+.45,I))}for(let M of[-o-.4,o+.4])for(let b=0;b<=60;b++){let I=b/60;v.push(h(M,.9,I))}let g=new it({color:16770736,emissive:16761963,emissiveIntensity:0}),m=new an(new En(.16,8,6),g,v.length);v.forEach((M,b)=>{d.makeTranslation(M.x,M.y,M.z),m.setMatrixAt(b,d)}),t.add(m);let E=new Ge(new _t(22,140),new Yt({map:qn("rgba(255,190,110,0.6)","rgba(255,170,90,0)"),transparent:!0,opacity:0,depthWrite:!1,blending:hi}));return E.rotation.x=-Math.PI/2,E.position.set(0,Gt.level+.05,n-r/2),t.add(E),i.add(t),{group:t,setNight(M){g.emissiveIntensity=.1+M*3.2,E.material.opacity=M*.8}}}var No=new D;function jn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;No.copy(e),No[n]=0,No.normalize();let l=.5*o/(o+a),h=1-No.angleTo(i)/c;return Math.sign(No[t])===1?h*l:a/(o+a)+l+l*(1-h)}var $t=class extends Ne{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new D,c=new D,l=new D(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,x=new D,v=.5/s;for(let g=0,m=0;g<h.length;g+=3,m+=2)switch(a.fromArray(h,g),c.copy(a),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),h[g+0]=l.x*Math.sign(a.x)+c.x*r,h[g+1]=l.y*Math.sign(a.y)+c.y*r,h[g+2]=l.z*Math.sign(a.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/d)){case 0:x.set(1,0,0),f[m+0]=jn(x,c,"z","y",r,n),f[m+1]=1-jn(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[m+0]=1-jn(x,c,"z","y",r,n),f[m+1]=1-jn(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[m+0]=1-jn(x,c,"x","z",r,e),f[m+1]=jn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[m+0]=1-jn(x,c,"x","z",r,e),f[m+1]=1-jn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[m+0]=1-jn(x,c,"x","y",r,e),f[m+1]=1-jn(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[m+0]=jn(x,c,"x","y",r,e),f[m+1]=1-jn(x,c,"y","x",r,t);break}}};var un=1.62;function e_(){let i=new is,e=[[2.16,.46],[2.22,.66],[2.16,.88],[1.98,.98],[1.6,1.03],[.85,1.06],[-1.25,1.06],[-1.95,1.03],[-2.16,.96],[-2.22,.78],[-2.18,.52]];i.moveTo(2.16,.46);for(let n=1;n<e.length;n++)i.lineTo(e[n][0],e[n][1]);let t=(n,s,r)=>{let c=Math.asin(.13636363636363635),l=18;for(let h=0;h<=l;h++){let u=Math.PI-c-h/l*(Math.PI-2*c);i.lineTo(n+Math.cos(u)*.44,.36+Math.sin(u)*.44)}};return i.lineTo(-1.79,.42),t(-1.35),i.lineTo(.91,.42),t(1.35),i.lineTo(2.16,.46),i}function _p(i,e,t=.07,n=5){let s=new _r(i,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t*.85,bevelSegments:n,curveSegments:24});return s.translate(0,0,-e/2),s.computeVertexNormals(),s}function Mp(i,{yMid:e=.78,ky:t=.9,kx:n=.18,lean:s=0}={}){let r=i.attributes.position,o=i.attributes.normal,a=new D;for(let c=0;c<o.count;c++){let l=o.getZ(c);if(Math.abs(l)<.85)continue;let h=r.getX(c),u=r.getY(c);a.set(Math.sign(h)*Math.pow(Math.abs(h)/2.2,3)*n,(u-e)*t+s,Math.sign(l)).normalize(),o.setXYZ(c,a.x,a.y,a.z)}return i}function Pu(i,e,t,n=.06,s=0){let r=new D(e[0],e[1],s),o=new D(t[0],t[1],s),a=r.distanceTo(o),c=new Ge(new Ne(n,a,n*.9),i);return c.position.addVectors(r,o).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new D(0,1,0),o.clone().sub(r).normalize()),c.castShadow=!0,c}var bc;function t_(){if(bc)return bc;let i=Ut(Ft(512,128,(n,s,r)=>{n.clearRect(0,0,s,r),n.fillStyle="#1b3f8f",n.font='700 64px "JetBrains Mono", monospace',n.textAlign="center",n.textBaseline="middle",n.fillText("NO REFUSAL",s/2,r/2+4)})),e=Ut(Ft(512,128,(n,s,r)=>{n.fillStyle="#f6f3ea",n.fillRect(0,0,s,r),n.strokeStyle="#111",n.lineWidth=8,n.strokeRect(6,6,s-12,r-12),n.fillStyle="#111",n.font='700 66px "JetBrains Mono", monospace',n.textAlign="center",n.textBaseline="middle",n.fillText("WB 04 PP 2016",s/2,r/2+4)})),t=qn("rgba(0,0,0,0.85)","rgba(0,0,0,0)",128);return bc={door:i,plate:e,shadow:t},bc}function Iu({lights:i=!0,color:e=15908123}={}){let t=t_(),n=new ct,s=new ct,r=new ct;r.rotation.y=-Math.PI/2,s.add(r),n.add(s);let o=Un(new Dt({color:e,roughness:.34,metalness:.05,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.2}),{height:.95,strength:.32}),a=new it({color:15330543,metalness:1,roughness:.14}),c=new Dt({color:1845806,metalness:0,roughness:.02,envMapIntensity:1.1,transparent:!0,opacity:.34,specularIntensity:1,ior:1.52,depthWrite:!1}),l=new it({color:2758420,roughness:.45}),h=new it({color:1381135,roughness:.8}),u=new it({color:789517,roughness:.7}),f=new it({color:1315860,roughness:.92}),d=new it({color:16775398,emissive:16773577,emissiveIntensity:.15,roughness:.1,metalness:.2}),x=new it({color:7997962,emissive:16718362,emissiveIntensity:.25,roughness:.2}),v=new it({color:16753178,emissive:16747008,emissiveIntensity:.2}),g=($,ae,Oe=0,J=0,me=0,xe=!0)=>{let de=new Ge($,ae);return de.position.set(Oe,J,me),de.castShadow=xe,de.receiveShadow=!0,r.add(de),de};g(Mp(_p(e_(),un-.14,.07,6)),o);let m=new is;m.moveTo(-1.22,1),m.lineTo(-.95,1.47),m.lineTo(.42,1.49),m.lineTo(.84,1),m.lineTo(-1.22,1),g(Mp(_p(m,un-.3,.035,3),{yMid:1,ky:.2,kx:.05,lean:.3}),c),g(new $t(1.5,.08,un-.2,3,.035),o,-.27,1.5,0);let E=(un-.24)/2;for(let $ of[-E,E])r.add(Pu(o,[.84,1.03],[.42,1.5],.07,$)),r.add(Pu(o,[-.22,1.03],[-.22,1.5],.08,$)),r.add(Pu(o,[-1.2,1.03],[-.95,1.5],.09,$));for(let $ of[-un/2-.004,un/2+.004]){g(new Ne(2.1,.022,.012),a,-.2,1.04,$,!1),g(new Ne(3.95,.03,.014),a,0,.78,$,!1);for(let Oe of[.86,-.22,-1.24])g(new Ne(.012,.56,.006),u,Oe,.75,$,!1);for(let Oe of[.62,-.42])g(new Ne(.16,.03,.03),a,Oe,.95,$+Math.sign($)*.01,!1);let ae=new Ge(new _t(.95,.24),new it({map:t.door,transparent:!0,roughness:.4,depthWrite:!1}));ae.position.set(.28,.6,$+Math.sign($)*.006),$<0&&(ae.rotation.y=Math.PI),r.add(ae),g(new Ne(.06,.08,.12),a,.78,1.12,$+Math.sign($)*.08)}g(new $t(.16,.15,un+.08,3,.05),a,2.26,.48,0),g(new $t(.16,.15,un+.06,3,.05),a,-2.25,.5,0),g(new Ne(.05,.3,.92),u,2.2,.72,0,!1),g(new $t(.06,.34,.98,2,.02),a,2.19,.72,0,!1).scale.set(1,1,1);for(let $=0;$<9;$++)g(new Ne(.06,.28,.028),a,2.225,.72,-.4+$*.1,!1);let M=new gt(.115,.115,.08,32);M.rotateZ(Math.PI/2);let b=new ss(.12,.02,10,32);b.rotateY(Math.PI/2);for(let $ of[-.6,.6])g(M,d,2.17,.76,$,!1),g(b,a,2.2,.76,$,!1),g(new Ne(.04,.05,.1),v,2.2,.6,$*1.12,!1),g(new Ne(.04,.17,.13),x,-2.2,.82,$*1.02,!1);let I=new it({map:t.plate,roughness:.5}),T=g(new _t(.52,.13),I,2.345,.47,0,!1);T.rotation.y=Math.PI/2;let A=g(new _t(.52,.13),I,-2.34,.66,0,!1);A.rotation.y=-Math.PI/2,g(new Ne(3.7,.22,un-.24),u,0,.42,0,!1),g(new Ne(2.3,.05,un-.3),h,-.25,.64,0,!1),g(new Ne(2.1,.03,un-.34),h,-.27,1.43,0,!1);for(let[$,ae]of[[.12,-.14],[-.86,-1.12]])g(new $t(.52,.2,un-.36,3,.06),l,$,.78,0,!1),g(new $t(.14,.5,un-.36,3,.05),l,ae,1.07,0,!1).rotation.z=.12;g(new $t(.34,.22,un-.3,2,.05),h,.72,.98,0,!1);let w=new ss(.19,.018,8,32);w.rotateY(Math.PI/2),g(w,u,.46,1.1,.36,!1).rotation.z=.45,g(new gt(.02,.02,.3,8).rotateZ(Math.PI/2-.45),u,.6,1.04,.36,!1);let S=new it({color:14209728,roughness:.85}),_=new it({color:8015411,roughness:.55});g(new $t(.26,.5,.4,3,.1),S,.02,1.1,.36,!1),g(new En(.105,20,14),_,.06,1.45,.36,!1).scale.set(1,1.15,.95),g(new En(.11,20,10,0,Math.PI*2,0,Math.PI/2),new it({color:1314829,roughness:.9}),.05,1.48,.36,!1);for(let $ of[.22,.5])g(new gt(.035,.035,.42,8).rotateZ(Math.PI/2-.5),S,.26,1.16,$,!1);g(new $t(.14,.16,.1,2,.02),new it({color:6165010,roughness:.45}),.78,1.18,-(un/2)-.02,!0),g(new Ne(.015,.1,.07),new it({color:14210248}),.8,1.32,-(un/2)-.02,!1);let R=new it({color:13225168,metalness:1,roughness:.28});for(let $ of[-.62,.62]){g(new gt(.018,.018,1.4,10).rotateZ(Math.PI/2),R,-.27,1.64,$);for(let ae of[-.9,.35])g(new gt(.014,.014,.12,8),R,ae,1.58,$)}for(let $ of[-.85,-.27,.3])g(new gt(.014,.014,1.24,8).rotateX(Math.PI/2),R,$,1.64,0);for(let $ of[-E-.04,E+.04])g(new Ne(1.5,.02,.02),a,-.27,1.47,$,!1);for(let $ of[-.32,.22]){let ae=g(new Ne(.012,.012,.42),u,.86,1.07,$,!1);ae.rotation.x=.25}g(new gt(.004,.006,.9,6),a,1.5,1.45,-.7,!1).rotation.z=-.25;let B=new gt(.42,.42,un-.12,20,1,!0,Math.PI/2,Math.PI);B.rotateX(Math.PI/2);let W=new it({color:657930,roughness:.95,side:Xt});for(let $ of[1.35,-1.35])g(B,W,$,.36,0,!1);let X=[],Q=new ss(.245,.095,16,40),N=new gt(.335,.335,.17,40,1,!0);N.rotateX(Math.PI/2);let K=new gt(.17,.19,.04,32);K.rotateX(Math.PI/2);let k=new En(.07,16,8,0,Math.PI*2,0,Math.PI/2);k.rotateX(Math.PI/2);for(let $ of[1.35,-1.35])for(let ae of[-(un/2-.13),un/2-.13]){let Oe=new ct;Oe.position.set($,.335,ae);let J=Math.sign(ae),me=new Ge(Q,f),xe=new Ge(N,f),de=new Ge(K,a);de.position.z=J*.07;let Fe=new Ge(k,a);Fe.position.z=J*.085,Fe.scale.z=J;for(let qe=0;qe<4;qe++){let We=new Ge(new Ne(.3,.025,.02),u);We.rotation.z=qe*Math.PI/4,We.position.z=J*.093,Oe.add(We)}[me,xe,de,Fe].forEach(qe=>{qe.castShadow=!0,Oe.add(qe)}),r.add(Oe),X.push(Oe)}let Z=new Ge(new _t(2.4,5.4),new Yt({map:t.shadow,transparent:!0,depthWrite:!1,opacity:.75}));Z.rotation.x=-Math.PI/2,Z.position.y=.012,Z.renderOrder=1,n.add(Z);let le=null;if(i){le=new ls(16769712,0,55,.5,.55,1.2),le.position.set(0,.8,2.2);let $=new Lt;$.position.set(0,0,14),n.add($),le.target=$,n.add(le)}return{root:n,body:s,wheels:X,setNight($){d.emissiveIntensity=.15+$*5,x.emissiveIntensity=.25+$*3,le&&(le.intensity=$*60)},spin($){for(let ae of X)ae.rotation.z-=$/.335}}}var n_=4.72,i_=new Set(["tire","rimMat","RimB","rotor"]);async function Sp(i){let n=(await new Fr().setMeshoptDecoder(xc).loadAsync("assets/models/camaro.glb",A=>{A.total&&i?.(A.loaded/A.total)})).scene,s=new ct,r=new ct;s.add(r),r.add(n);let o=[];n.traverse(A=>{A.isMesh&&o.push(A)});let a=A=>o.filter(w=>w.material?.name===A),c=A=>{let w=new mn;return A.forEach(S=>w.expandByObject(S)),w};s.updateMatrixWorld(!0);let l=c([n]),h=l.getCenter(new D),u=c(a("Red_glass")).getCenter(new D),f=h.clone().sub(u).setY(0).normalize();n.rotation.y=-Math.atan2(f.x,f.z),s.updateMatrixWorld(!0),l=c([n]);let d=l.getSize(new D),x=n_/Math.max(d.x,d.z);n.scale.multiplyScalar(x),s.updateMatrixWorld(!0),l=c([n]);let v=l.getCenter(new D);n.position.x-=v.x,n.position.z-=v.z,n.position.y-=l.min.y,s.updateMatrixWorld(!0);let g=[];for(let A of a("tire")){let w=c([A]).getCenter(new D),S=new ct;S.position.copy(r.worldToLocal(w.clone())),r.add(S),S.updateMatrixWorld(!0),g.push({pivot:S,centre:w})}for(let A of o){if(!i_.has(A.material?.name))continue;let w=c([A]).getCenter(new D),S=null,_=1/0;for(let R of g){let B=R.centre.distanceTo(w);B<_&&(_=B,S=R)}S&&_<.6&&S.pivot.attach(A)}let m=g.length?c([g[0].pivot]).getSize(new D).y/2:.34,E=null,M=null;for(let A of o){A.castShadow=!0,A.receiveShadow=!0;let w=A.material;if(w){if(w.name==="Windows"&&(w.transmission=0,w.transparent=!0,w.opacity=.38,w.color.set(791576),w.depthWrite=!1,A.castShadow=!1),w.name==="Light_glass"&&(A.castShadow=!1),w.name==="Red_glass"&&(w.transmission=0,w.transparent=!0,w.color.set(9046534),w.opacity=.85,w.emissive=new Ie(16718352),w.emissiveIntensity=.35,M=w,A.castShadow=!1),w.name==="Light"){w.emissiveMap=null,w.emissive=new Ie(16773336),w.emissiveIntensity=0;let S=A.matrixWorld.clone().invert(),_=new D(0,0,1).transformDirection(S),R=A.worldToLocal(c([A]).getCenter(new D));w.onBeforeCompile=B=>{B.uniforms.uFwd={value:_},B.uniforms.uMid={value:R},B.vertexShader=B.vertexShader.replace("#include <common>",`#include <common>
uniform vec3 uFwd; uniform vec3 uMid; varying float vFront;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFront = dot(position - uMid, uFwd);`),B.fragmentShader=B.fragmentShader.replace("#include <common>",`#include <common>
varying float vFront;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= mix(vec3(1.0, 0.06, 0.03), vec3(1.0), step(0.0, vFront));`)},w.customProgramCacheKey=()=>"camaro-lamps",E=w}w.name==="CarPaint"&&(w.envMapIntensity=1.25)}}let b=new Ge(new _t(2.3,5.2),new Yt({map:qn("rgba(0,0,0,0.85)","rgba(0,0,0,0)",128),transparent:!0,depthWrite:!1,opacity:.8}));b.rotation.x=-Math.PI/2,b.position.y=.012,b.renderOrder=1,s.add(b);let I=new ls(16769712,0,55,.5,.55,1.2);I.position.set(0,.7,2.3);let T=new Lt;return T.position.set(0,0,14),s.add(I,T),I.target=T,{root:s,body:r,wheels:g.map(A=>A.pivot),setNight(A){E&&(E.emissiveIntensity=A*2.2),M&&(M.emissiveIntensity=.35+A*3),I.intensity=A*60},spin(A){for(let w of g)w.pivot.rotation.x+=A/m}}}var Du='"Instrument Serif", Georgia, serif',Ns='"Manrope", system-ui, sans-serif',ai='"JetBrains Mono", ui-monospace, monospace';function Ep(i,e,t,n,s){let r=i.frame(t);return e.position.copy(r.p).addScaledVector(r.r,n*s),e.rotation.y=Math.atan2(-r.r.x*n,-r.r.z*n),e}var xt=i=>new it(i);function ke(i,e,t=0,n=0,s=0,r){let o=new Ge(i,e);return o.position.set(t,n,s),o.castShadow=!0,o.receiveShadow=!0,r&&r.add(o),o}function gn(i,e,t,n=3){return Nr(new Ne(i,e,t),n)}function s_(i){for(let e of["map","normalMap","roughnessMap","metalnessMap","aoMap"])i[e]&&(i[e]=i[e].clone(),i[e].center.set(.5,.5),i[e].rotation=Math.PI/2,i[e].needsUpdate=!0);return i}function wp(i,e,t,n,s){let r=tp(s);return r.position.set(e,t,n),r.rotation.y=-Math.PI/2,i.add(r),r}function yc(i,e,t){return Ut(Ft(i,e,t))}function Tp(){let i=new ct,e=ht("wood",{color:10123866}),t=ht("corrugated",{color:10133668});ke(gn(3.2,1.1,1.3,1.5),e,0,.55,0,i),ke(new Ne(3.4,.08,1.5),xt({color:3811868}),0,1.12,0,i);for(let l of[-1.55,1.55])for(let h of[-.6,.6])ke(new gt(.04,.04,2.6),e,l,1.3,h,i);let n=ke(gn(4,.05,2.4,2),t,0,2.6,.2,i);n.rotation.x=.12;let s=ke(new gt(.16,.22,.34,20),xt({color:12088115,metalness:.9,roughness:.3}),-.8,1.33,.1,i);ke(new gt(.2,.2,.1,16),xt({color:546}),-.8,1.19,.1,i);for(let l=0;l<8;l++)ke(new gt(.045,.032,.08,10),xt({color:10506797,roughness:1}),.2+l%4*.13,1.2,-.1+Math.floor(l/4)*.14,i);ke(new Ne(2.2,.08,.4),e,.4,.5,1.6,i);for(let l of[-.5,1.3])ke(new Ne(.08,.5,.36),e,l,.25,1.6,i);let r=yc(512,128,(l,h,u)=>{l.fillStyle="#b8321f",l.fillRect(0,0,h,u),l.fillStyle="#ffe9b0",l.font=`700 62px ${Ns}`,l.textAlign="center",l.textBaseline="middle",l.fillText("CHA  \xB7  \u20B910",h/2,u/2+3)}),o=ke(new _t(2.2,.55),xt({map:r,roughness:.7}),0,2.25,.62,i);o.castShadow=!1;let a=qn("rgba(255,255,255,0.55)","rgba(255,255,255,0)"),c=[];for(let l=0;l<10;l++){let h=new Ti(new ui({map:a,transparent:!0,depthWrite:!1,opacity:0}));h.userData.o=l/10,i.add(h),c.push(h)}return{group:i,radius:4,update(l){for(let h of c){let u=(l*.25+h.userData.o)%1;h.position.set(s.position.x+Math.sin(u*6+h.userData.o*9)*.15,1.55+u*1.4,s.position.z);let f=.25+u*.7;h.scale.set(f,f,1),h.material.opacity=Math.sin(u*Math.PI)*.22}}}}function Ap(){let i=new ct,e=oi(101),t=Un(ht("plaster",{color:15390382,normalScale:1.4}),{height:3,strength:.4}),n=ke(gn(14,8,8),t,0,4,-6.5,i);ke(gn(14.5,.45,8.5),ht("concrete",{color:12103324}),0,8.2,-6.5,i),ke(gn(14.3,.18,.3),t,0,4.95,-2.4,i);let s=ke(new _t(6,3.2),s_(ht("corrugated",{color:9213081,repeat:[1.6,3]})),-3,1.6,-2.48,i),r=Ut(Ft(256,256,(w,S,_)=>{let R=w.createLinearGradient(0,0,0,_);R.addColorStop(0,"#3a2a1c"),R.addColorStop(1,"#120c08"),w.fillStyle=R,w.fillRect(0,0,S,_);let B=w.createRadialGradient(S*.5,_*.15,4,S*.5,_*.15,S*.6);B.addColorStop(0,"rgba(255,230,180,0.9)"),B.addColorStop(1,"rgba(255,200,120,0)"),w.fillStyle=B,w.fillRect(0,0,S,_),w.fillStyle="rgba(160,130,90,0.5)";for(let W=0;W<5;W++)w.fillRect(20+W*46,_*.45,34,_*.4)})),o=xt({map:r,emissive:16777215,emissiveMap:r,emissiveIntensity:.35,roughness:.3});ke(new _t(3.4,3),o,3.6,1.5,-2.48,i);for(let[w,S]of[-4.5,0,4.5].entries())wp(i,S,6.3,-2.5,{lit:w===1,shutterColor:"#3f5f7a",open:.3+w*.15});let a=yc(1024,160,(w,S,_)=>{w.fillStyle="#1f3b63",w.fillRect(0,0,S,_),w.fillStyle="#f5c518",w.fillRect(0,_-10,S,10),w.fillStyle="#fff",w.font=`800 70px ${Ns}`,w.textBaseline="middle",w.fillText("INVOICE DESK",36,_/2-4),w.font=`500 30px ${ai}`,w.textAlign="right",w.fillStyle="#c9d6ea",w.fillText("DATA ENTRY \xB7 ERP \xB7 EST. 2016",S-36,_/2-2)});ke(new Ne(12,1.6,.2),xt({map:a,emissiveMap:a,emissive:16777215,emissiveIntensity:.25}),0,4.1,-2.35,i);let c=[],l=[{s:[.42,.11,.3],c:[16052972,16777215,15525590]},{s:[.5,.32,.36],c:[16777215,15260875,14272688]},{s:[.32,.29,.07],c:[2772879,9382442,3111493,2039583]}];for(let w=-6;w<=6;w++)for(let S=-2;S<=3;S++){let _=w*.55+(e()-.5)*.2,R=S*.5+(e()-.5)*.2,B=Math.max(0,1-Math.hypot(w/6.5,(S-.2)/3.4)),W=0,X=Math.floor(B*16+e()*2);for(let Q=0;Q<X;Q++){let N=e()<.6?0:e()<.6?1:2,K=l[N],k=K.s;c.push({k:N,x:_,y:W+k[1]/2,z:R,s:k,rot:(e()-.5)*.4,col:N===0?16777215:K.c[Math.floor(e()*K.c.length)]}),W+=k[1]}}let h=Ut(Ft(128,128,(w,S,_)=>{w.fillStyle="#f4f2ea",w.fillRect(0,0,S,_);for(let R=0;R<_;R+=2)w.fillStyle=`rgba(150,145,130,${.15+Math.random()*.2})`,w.fillRect(0,R,S,1);w.fillStyle="#2c5aa0",w.fillRect(0,_*.35,S,_*.3),w.fillStyle="#fff",w.font="700 18px Manrope, sans-serif",w.fillText("A4 \xB7 75gsm",10,_*.55)})),u=Ut(Ft(128,128,(w,S,_)=>{w.fillStyle="#b08a5a",w.fillRect(0,0,S,_);for(let R=0;R<900;R++)w.fillStyle=`rgba(${90+Math.random()*60},${60+Math.random()*40},30,0.25)`,w.fillRect(Math.random()*S,Math.random()*_,3,1);w.fillStyle="rgba(200,180,140,0.7)",w.fillRect(S*.42,0,S*.16,_),w.fillStyle="#222",w.font="700 14px JetBrains Mono, monospace",w.fillText("FY 2016-17",8,_-12)})),f=Ut(Ft(128,128,(w,S,_)=>{w.fillStyle="#ffffff",w.fillRect(0,0,S,_),w.fillStyle="rgba(0,0,0,0.25)",w.fillRect(0,0,S,8),w.fillRect(0,_-8,S,8),w.fillStyle="#f6f1e0",w.fillRect(S*.3,_*.25,S*.4,_*.3),w.beginPath(),w.arc(S/2,_*.78,9,0,7),w.fillStyle="#222",w.fill()})),d={0:[],1:[],2:[]};c.forEach(w=>d[w.k].push(w));let x=new Ze,v=new Ot,g=new Ie;[[0,h,.75],[1,u,.9],[2,f,.45]].forEach(([w,S,_])=>{let R=d[w];if(!R.length)return;let B=new an(new $t(1,1,1,2,.03),xt({map:S,roughness:_,color:16777215}),R.length);R.forEach((W,X)=>{v.setFromEuler(new Hn((Math.random()-.5)*.04,W.rot,(Math.random()-.5)*.04)),x.compose(new D(W.x,W.y,W.z),v,new D(...W.s)),B.setMatrixAt(X,x),B.setColorAt(X,g.set(W.col))}),B.castShadow=B.receiveShadow=!0,i.add(B)});let m=Ft(256,192,()=>{}),E=Ut(m),M=w=>{let S=m.getContext("2d");S.fillStyle="#031a08",S.fillRect(0,0,256,192),S.fillStyle="#39ff6a",S.font=`600 14px ${ai}`,["ERP v4.2  INVOICE ENTRY","------------------------","INV# 2016-0"+(4412+Math.floor(w*3)),"VENDOR  : ______","QTY     : ______","AMOUNT  : ______","GST     : ______","","> F2 SAVE   F3 NEXT","> REPEAT x 10,000"].forEach((R,B)=>S.fillText(R,10,20+B*17)),Math.floor(w*2)%2&&S.fillRect(92,20+9*17-12,9,14);for(let R=0;R<192;R+=3)S.fillStyle="rgba(0,0,0,0.25)",S.fillRect(0,R,256,1);E.needsUpdate=!0};M(0);let b=new ct;b.position.set(5.2,0,1.4),b.rotation.y=-.5,i.add(b),ke(gn(1.6,.06,.8,1.5),ht("wood",{color:8018490}),0,.78,0,b);for(let w of[-.72,.72])for(let S of[-.32,.32])ke(new Ne(.05,.78,.05),xt({color:4007959}),w,.39,S,b);ke(new $t(.62,.52,.55,3,.05),xt({color:14209211,roughness:.6}),0,1.08,-.05,b),ke(new _t(.5,.38),xt({map:E,emissiveMap:E,emissive:16777215,emissiveIntensity:1.4}),0,1.1,.226,b),ke(new Ne(.55,.04,.2),xt({color:13616814}),0,.83,.25,b);let I=xt({color:16777215,side:zt,roughness:.7}),T=[];for(let w=0;w<26;w++){let S=ke(new _t(.3,.42),I,0,0,0,i);S.castShadow=!0,S.userData={a:e()*6.28,rad:1+e()*3.2,h:2+e()*5,sp:.2+e()*.35,wob:e()*6},T.push(S)}let A=-1;return{group:i,radius:11,center:new D(0,0,-3),update(w,S){if(!S)return;for(let R of T){let B=R.userData,W=B.a+w*B.sp;R.position.set(Math.cos(W)*B.rad,B.h+Math.sin(w*.7+B.wob)*.6,.6+Math.sin(W)*B.rad*.6),R.rotation.set(w*B.sp*2+B.wob,W,Math.sin(w+B.wob))}let _=Math.floor(w*6);_!==A&&(A=_,M(w))}}}function Rp(){let i=new ct,e=Ut(Ft(256,256,(f,d)=>{let x=f.createLinearGradient(0,0,0,d);x.addColorStop(0,"#9fbcd0"),x.addColorStop(1,"#5d7d94"),f.fillStyle=x,f.fillRect(0,0,d,d),f.fillStyle="#2a333b";for(let v=0;v<4;v++)f.fillRect(0,v*64,d,5),f.fillRect(v*64,0,3,d)}),{repeat:!0});e.repeat.set(5,18);let t=new Dt({map:e,metalness:.85,roughness:.08,clearcoat:1,envMapIntensity:1.4,emissive:2241348,emissiveIntensity:0}),n=74;ke(new Ne(20,n,20),t,0,n/2+6,-14,i);let s=Ut(Ft(512,160,(f,d,x)=>{let v=f.createLinearGradient(0,0,0,x);v.addColorStop(0,"#f6ead2"),v.addColorStop(.5,"#7a6a58"),v.addColorStop(1,"#2a241e"),f.fillStyle=v,f.fillRect(0,0,d,x);for(let g=30;g<d;g+=90){let m=f.createRadialGradient(g,6,2,g,6,60);m.addColorStop(0,"rgba(255,255,255,0.9)"),m.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=m,f.fillRect(g-60,0,120,70)}f.fillStyle="rgba(30,24,18,0.8)",f.fillRect(d*.38,x*.55,d*.24,x*.3),f.fillStyle="rgba(20,20,20,0.9)";for(let g=0;g<=d;g+=d/8)f.fillRect(g-3,0,6,x);f.fillRect(0,x*.18,d,4)})),r=new Dt({map:s,emissive:16777215,emissiveMap:s,emissiveIntensity:.3,roughness:.05,metalness:.1,envMapIntensity:1.4});ke(gn(24,6,22,4),Un(ht("concrete",{color:14209734})),0,3,-14,i),ke(new _t(16,4.4),r,0,2.4,-2.98,i),ke(gn(22,.5,2.5,4),ht("concrete",{color:12893616}),0,5.2,-2,i),ke(gn(16,4,16,2),ht("steel",{color:4870746}),0,n+8,-14,i);let o=xt({color:16722474,emissive:16719904,emissiveIntensity:2});ke(new gt(.1,.1,8),xt({color:1911}),0,n+14,-14,i),ke(new En(.35,12,8),o,0,n+18.2,-14,i);let a=Ft(1024,576,()=>{}),c=Ut(a),l=Array.from({length:12},(f,d)=>.3+Math.abs(Math.sin(d*1.7))*.6),h=f=>{let d=a.getContext("2d");d.fillStyle="#081018",d.fillRect(0,0,1024,576),d.fillStyle="#f5c518",d.font=`700 30px ${ai}`,d.fillText("KPI \xB7 WEEKLY QUALITY REVIEW",40,60),d.fillStyle="#7f93a8",d.font=`500 22px ${ai}`,d.fillText("CENTRUM \xB7 SALES QA \xB7 2018\u20132020",40,96),[["CSAT",(88+Math.sin(f)*2).toFixed(1)+"%"],["CALLS QA",(1240+Math.floor(f*7)%60).toString()],["TREND","\u25B2 12%"]].forEach(([v,g],m)=>{let E=40+m*320;d.fillStyle="#101c28",d.fillRect(E,124,290,120),d.fillStyle="#7f93a8",d.font=`500 20px ${ai}`,d.fillText(v,E+20,158),d.fillStyle="#ffffff",d.font=`400 64px ${Du}`,d.fillText(g,E+20,226)}),l.forEach((v,g)=>{let m=(v+Math.sin(f*1.3+g)*.05)*230;d.fillStyle=g===11?"#f5c518":"#2b6cb0",d.fillRect(40+g*56,540-m,36,m)}),d.strokeStyle="#ff7a3d",d.lineWidth=4,d.beginPath();for(let v=0;v<=30;v++){let g=720+v*9.5,m=500-v*7-Math.sin(v*.8+f*2)*14;v?d.lineTo(g,m):d.moveTo(g,m)}d.stroke(),d.fillStyle="#7f93a8",d.font=`500 18px ${ai}`,d.fillText("A dashboard is an argument.",720,300),c.needsUpdate=!0};h(0),ke(gn(17,9.8,.5,2),ht("steel",{color:2764339}),0,13,-3.7,i),ke(new _t(16.2,9.1),xt({map:c,emissiveMap:c,emissive:16777215,emissiveIntensity:1.15,roughness:.4}),0,13,-3.44,i);let u=-1;return{group:i,radius:16,center:new D(0,0,-14),update(f,d){if(!d)return;let x=Math.floor(f*8);x!==u&&(u=x,h(f)),o.emissiveIntensity=1+Math.max(0,Math.sin(f*3))*4},setNight(f){t.emissiveIntensity=f*.6,r.emissiveIntensity=.3+f*.8}}}function Cp(){let i=new ct,e=Un(ht("plaster",{color:15328472,normalScale:1.4}),{height:3,strength:.4});ke(gn(16,11,10),e,0,5.5,-7,i),ke(gn(16.5,.5,10.5),ht("concrete",{color:11905944}),0,11.2,-7,i),ke(gn(16.3,.2,.3),e,0,9.4,-1.9,i);for(let[l,h]of[-5.5,-1.8,1.8,5.5].entries())wp(i,h,7.6,-2,{lit:l%2===1,shutterColor:"#2f5e44",open:.25+l%3*.2});let t=Ft(1024,384,(l,h,u)=>{let f=l.createLinearGradient(0,0,0,u);f.addColorStop(0,"#fbfaf5"),f.addColorStop(1,"#dfe9e2"),l.fillStyle=f,l.fillRect(0,0,h,u);for(let g=60;g<h;g+=240){let m=l.createRadialGradient(g+60,6,2,g+60,6,120);m.addColorStop(0,"rgba(255,255,255,0.95)"),m.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=m,l.fillRect(g-60,0,240,120)}let d=oi(31),x=["#1f9d6a","#ffffff","#2b6cb0","#e85d4a","#f5c518","#8e5bd1","#f1f1f1","#ff8f3a","#0aa2c0"];for(let g=0;g<4;g++){let m=46+g*84,E=6;for(;E<h-30;){let b=d()<.25,I=b?12+d()*8:16+d()*26,T=b?30+d()*20:24+d()*30,A=x[Math.floor(d()*x.length)],w=l.createLinearGradient(E,0,E+I,0);w.addColorStop(0,A),w.addColorStop(.75,A),w.addColorStop(1,"rgba(0,0,0,0.35)"),l.fillStyle=w,b?(l.beginPath(),l.roundRect(E,m+62-T,I,T,5),l.fill(),l.fillStyle="#ddd",l.fillRect(E+I*.25,m+62-T-6,I*.5,7)):(l.fillRect(E,m+62-T,I,T),l.fillStyle="rgba(255,255,255,0.85)",l.fillRect(E+3,m+62-T*.62,I-6,T*.22),l.fillStyle="rgba(0,0,0,0.5)",l.fillRect(E+4,m+62-T*.55,(I-8)*d(),2)),E+=I+1+d()*2}l.fillStyle="#c9cfd2",l.fillRect(0,m+62,h,7),l.fillStyle="#ffe35a";for(let b=20;b<h;b+=90+d()*40)l.fillRect(b,m+63,26,5);let M=l.createLinearGradient(0,m+69,0,m+86);M.addColorStop(0,"rgba(0,0,0,0.25)"),M.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=M,l.fillRect(0,m+69,h,17)}let v=l.createLinearGradient(0,0,h,u);v.addColorStop(.1,"rgba(255,255,255,0)"),v.addColorStop(.18,"rgba(255,255,255,0.22)"),v.addColorStop(.26,"rgba(255,255,255,0)"),l.fillStyle=v,l.fillRect(0,0,h,u)}),n=Ut(t),s=xt({map:n,emissiveMap:n,emissive:16777215,emissiveIntensity:.7,roughness:.15,metalness:.1});ke(new _t(13,4.2),s,0,2.4,-1.98,i);for(let l of[-6.5,-2.2,2.2,6.5])ke(new Ne(.12,4.4,.12),xt({color:13684944,metalness:.9,roughness:.25}),l,2.3,-1.92,i);let r=yc(1024,140,(l,h,u)=>{l.fillStyle="#0f7a4f",l.fillRect(0,0,h,u),l.fillStyle="#ffffff",l.font=`800 74px ${Ns}`,l.textBaseline="middle",l.fillText("PHARMACY",40,u/2),l.font=`600 34px ${ai}`,l.textAlign="right",l.fillText("OPEN 24 \xD7 7",h-40,u/2)});ke(new Ne(15.5,1.5,.3),xt({map:r,emissiveMap:r,emissive:16777215,emissiveIntensity:.5}),0,5.05,-1.85,i);let o=xt({color:1032042,emissive:1695870,emissiveIntensity:1.5,roughness:.3}),a=new ct;a.position.set(7.4,6.6,.4),i.add(a),ke(new Ne(.06,.06,2.6),xt({color:1365}),0,.8,-1.2,a),ke(new $t(.5,1.6,.3,2,.06),o,0,0,0,a),ke(new $t(1.6,.5,.3,2,.06),o,0,0,0,a);let c=new Ti(new ui({map:qn("rgba(40,255,140,0.6)","rgba(40,255,140,0)"),transparent:!0,depthWrite:!1,blending:hi}));c.scale.set(5,5,1),a.add(c),ke(new Ne(2.2,.08,.5),xt({color:3828618}),-4,.62,.3,i);for(let l of[-4.9,-3.1])ke(new Ne(.06,.6,.45),xt({color:819}),l,.3,.3,i);return{group:i,radius:11,center:new D(0,0,-6),update(l){let h=.75+.25*Math.sin(l*2.2);o.emissiveIntensity=1.2+h*2.2,c.material.opacity=.35+h*.4,a.rotation.y=Math.sin(l*.6)*.25},setNight(l){s.emissiveIntensity=.7+l*1.3}}}function Pp(){let i=new ct,e=oi(404),t=ht("corrugated",{color:9347762,normalScale:1.4}),n=Un(ht("concrete",{color:12762288})),s=ht("steel",{color:8226190}),r=ht("steel",{color:12087626,normalScale:1.5}),o=ke(gn(110,.2,80,4),ht("concrete",{color:10130828}),0,.1,-40,i);o.castShadow=!1;for(let N=-54;N<=54;N+=3)Math.abs(N)<6||ke(new Ne(.08,2.4,.08),s,N,1.2,-.5,i);for(let N of[.6,1.4,2.2])ke(new Ne(48,.05,.05),s,-30,N,-.5,i),ke(new Ne(48,.05,.05),s,30,N,-.5,i);for(let N of[-6.5,6.5])ke(gn(1.2,6,1.2,2),n,N,3,-.5,i);let a=yc(1024,150,(N,K,k)=>{N.fillStyle="#121518",N.fillRect(0,0,K,k),N.fillStyle="#ff7a2a",N.font=`800 62px ${Ns}`,N.textBaseline="middle",N.fillText("AUTOMATION FLOOR",32,k/2),N.fillStyle="#a7b1ba",N.font=`500 28px ${ai}`,N.textAlign="right",N.fillText("BOTS ON SHIFT \xB7 24/7",K-32,k/2)});ke(new Ne(14.2,1.8,.4),xt({map:a,emissiveMap:a,emissive:16777215,emissiveIntensity:.6}),0,6.6,-.5,i);let c=new ct;c.position.set(-8,0,-36),i.add(c),ke(gn(48,18,30,2),t,0,9,0,c);let l=new is;l.moveTo(-15.5,0),l.lineTo(0,6),l.lineTo(15.5,0),l.lineTo(-15.5,0);let h=ke(new _r(l,{depth:49,bevelEnabled:!1}),ht("corrugated",{color:8226702,repeat:[.5,.5]}),24.5,18,0,c);h.rotation.y=-Math.PI/2;let u=Ut(Ft(256,256,(N,K,k)=>{N.fillStyle="#000",N.fillRect(0,0,K,k);let Z=N.createRadialGradient(K/2,k*.7,4,K/2,k*.7,K*.6);Z.addColorStop(0,"#fff2c0"),Z.addColorStop(.25,"#ffb040"),Z.addColorStop(.6,"#c43c08"),Z.addColorStop(1,"#100400"),N.fillStyle=Z,N.fillRect(0,0,K,k)})),f=xt({color:328192,emissive:16777215,emissiveMap:u,emissiveIntensity:2.2});ke(new _t(10,8),f,-6,4,15.02,c);let d=Ut(Ft(512,32,(N,K,k)=>{N.fillStyle="#1a1e22",N.fillRect(0,0,K,k);for(let Z=0;Z<K;Z+=16)N.fillStyle=`rgba(150,170,180,${.25+Math.random()*.2})`,N.fillRect(Z+2,3,12,k-6)}));ke(new _t(40,1.4),xt({map:d,roughness:.2,metalness:.3,emissive:16766880,emissiveMap:d,emissiveIntensity:.15}),0,15,15.02,c);let x=Ut(Ft(64,256,N=>{N.fillStyle="#c9c3b8",N.fillRect(0,0,64,256);for(let K=0;K<3;K++)N.fillStyle="#b8321f",N.fillRect(0,K*28,64,14)})),v=[];[[18,-58],[26,-60],[34,-56]].forEach(([N,K],k)=>{let Z=46+k*4;ke(new gt(1.3,2.2,Z,24),xt({map:x,normalMap:Qt.concrete_nor,roughnessMap:Qt.concrete_orm,roughness:1}),N,Z/2,K,i),v.push(new D(N,Z+.5,K))});let g=new ct;g.position.set(32,0,-30),i.add(g),ke(new gt(5,6,22,28),r,0,11,0,g),ke(new gt(3,5,6,28),s,0,25,0,g),ke(new gt(.9,.9,16,16),s,0,36,0,g);for(let N of[0,2.1,4.2]){let K=ke(new gt(.7,.7,26,12),s,Math.cos(N)*7,18,Math.sin(N)*7,g);K.rotation.z=Math.cos(N)*.25,K.rotation.x=-Math.sin(N)*.25}for(let N=0;N<5;N++)ke(new ss(5.6,.25,8,40),s,0,3+N*4.5,0,g).rotation.x=Math.PI/2;for(let[N,K]of[[-40,-28],[-40,-42],[-48,-35]])ke(new gt(4,4,18,28),xt({color:13620182,metalness:.8,roughness:.32,normalMap:Qt.steel_nor}),N,9,K,i),ke(new Va(4.1,3,28),xt({color:12172994,metalness:.7,roughness:.35}),N,19.5,K,i);for(let N=-28;N<=28;N+=7)ke(new Ne(.5,9,.5),s,N,4.5,-16,i);for(let N of[8.6,9.6])ke(new gt(.5,.5,58,14),N>9?r:s,0,N,-16,i).rotation.z=Math.PI/2;let m=new ct;m.position.set(0,0,-8),i.add(m),ke(new Ne(44,.25,2),xt({color:1776928,roughness:.75,normalMap:Qt.asphalt_nor}),0,1.3,0,m);for(let N of[-1,1])ke(gn(44,.35,.12,2),ht("steel",{color:15774720}),0,1.45,N*1.05,m);for(let N=-21;N<=21;N+=3)for(let K of[-1,1])ke(new Ne(.15,1.2,.15),s,N,.6,K*.9,m);let E=xt({color:2230272,emissive:16727040,emissiveIntensity:5,roughness:.6}),M=new an(new $t(1.4,.35,.8,2,.06),E,16);M.castShadow=!0,m.add(M);let b=new hs(16738848,0,26,1.6);b.position.set(0,3,-6),i.add(b);let I=[],T=new Dt({color:16738826,metalness:.2,roughness:.35,clearcoat:.6,clearcoatRoughness:.2}),A=xt({color:2237480,metalness:.6,roughness:.4});for(let[N,K]of[[-9,0],[9,1.9]]){let k=new ct;k.position.set(N,0,-5),i.add(k),ke(new gt(.9,1.1,.6,24),A,0,.3,0,k);let Z=new ct;Z.position.y=.6,k.add(Z),ke(new gt(.7,.8,.9,24),T,0,.45,0,Z);let le=new ct;le.position.y=1,Z.add(le),ke(new En(.5,16,12),A,0,0,0,le),ke(new $t(.55,2.8,.55,2,.12),T,0,1.4,0,le);let $=new ct;$.position.y=2.8,le.add($),ke(new En(.38,16,12),A,0,0,0,$),ke(new $t(.42,2.2,.42,2,.1),T,0,1.1,0,$);let ae=new ct;ae.position.y=2.2,$.add(ae),ke(new gt(.2,.2,.4,12),A,0,.2,0,ae);for(let Oe of[-1,1])ke(new Ne(.08,.4,.25),A,Oe*.15,.55,0,ae);I.push({yaw:Z,sh:le,el:$,wr:ae,ph:K})}let w=qn("rgba(200,200,200,0.7)","rgba(200,200,200,0)"),S=[];v.forEach((N,K)=>{for(let k=0;k<12;k++){let Z=new Ti(new ui({map:w,transparent:!0,depthWrite:!1,color:13617858}));Z.userData={top:N,o:k/12+K*.13,drift:.6+e()*.8},i.add(Z),S.push(Z)}});let _=140,R=new Ct,B=new Float32Array(_*3),W=[];for(let N=0;N<_;N++)W.push({t:Math.random(),vx:(Math.random()-.5)*4,vy:2+Math.random()*4,vz:2+Math.random()*3});R.setAttribute("position",new bt(B,3));let X=new ns(R,new Ai({color:16757575,size:.09,transparent:!0,opacity:.95,blending:hi,depthWrite:!1}));X.position.set(c.position.x-6,1.2,c.position.z+15.2),i.add(X);let Q=new Ze;return{group:i,radius:46,center:new D(0,0,-38),update(N,K){for(let k of S){let Z=k.userData,le=(N*.06+Z.o)%1;k.position.set(Z.top.x+le*22*Z.drift,Z.top.y+le*18,Z.top.z+le*6);let $=3+le*16;k.scale.set($,$,1),k.material.opacity=Math.sin(Math.min(1,le*1.4)*Math.PI)*.4}if(K){for(let k=0;k<16;k++){let Z=((N*2.2+k*2.75)%44+44)%44-22;Q.makeTranslation(Z,1.62,0),M.setMatrixAt(k,Q)}M.instanceMatrix.needsUpdate=!0;for(let k=0;k<_;k++){let Z=W[k],$=(N*.7+Z.t)%1*1.2;B[k*3]=Z.vx*$,B[k*3+1]=Math.max(0,Z.vy*$-4.9*$*$),B[k*3+2]=Z.vz*$}R.attributes.position.needsUpdate=!0;for(let k of I){let Z=N*.9+k.ph;k.yaw.rotation.y=Math.sin(Z)*1.1,k.sh.rotation.z=.35+Math.sin(Z*1.3)*.35,k.el.rotation.z=1.25+Math.sin(Z*1.3+1)*.35,k.wr.rotation.y=Z*2}f.emissiveIntensity=2+Math.sin(N*7)*.25+Math.sin(N*13)*.15}},setNight(N,K){b.intensity=30+K*80}}}function Ip(i,e){let t=new ct,n=Ft(1280,720,(a,c,l)=>{let h=a.createLinearGradient(0,0,c,l);h.addColorStop(0,"#0b0f14"),h.addColorStop(1,"#141c26"),a.fillStyle=h,a.fillRect(0,0,c,l),a.fillStyle="#f5c518",a.fillRect(0,0,14,l),a.font=`400 200px ${Du}`,a.fillStyle="rgba(245,197,24,0.16)",a.textAlign="right",a.fillText("0"+(e+1),c-50,210),a.textAlign="left",a.fillStyle="#f5c518",a.font=`600 28px ${ai}`,a.fillText(i.category.toUpperCase(),70,100),a.fillStyle="#fff",a.font=`400 96px ${Du}`;let u=i.title.split(" "),f="",d=210;for(let m of u)a.measureText(f+m).width>c-200&&(a.fillText(f,70,d),f="",d+=96),f+=m+" ";a.fillText(f,70,d),a.fillStyle="#9fb0c2",a.font=`500 30px ${Ns}`;let v=((m,E,M)=>{let b="";for(let I of m.split(" "))a.measureText(b+I).width>M&&(a.fillText(b,70,E),b="",E+=42),b+=I+" ";return a.fillText(b,70,E),E})(i.outcome,d+80,c-160),g=70;a.font=`600 24px ${ai}`;for(let m of i.tech){let E=a.measureText(m).width+36;a.strokeStyle="rgba(245,197,24,0.6)",a.lineWidth=2,a.strokeRect(g,v+50,E,48),a.fillStyle="#f5c518",a.fillText(m,g+18,v+83),g+=E+14}}),s=Ut(n),r=ht("steel",{color:3817542});for(let a of[-2.8,2.8])ke(new Ne(.3,6,.3),r,a,3,-.2,t);ke(new Ne(9.2,5.3,.35),r,0,8.2,-.25,t);let o=xt({map:s,emissiveMap:s,emissive:16777215,emissiveIntensity:.9,roughness:.35});ke(new _t(8.8,4.95),o,0,8.2,-.06,t);for(let a of[-3,0,3])ke(new Ne(.5,.15,.4),xt({color:546,emissive:16773840,emissiveIntensity:1}),a,5.4,.5,t);return{group:t,radius:6,setNight(a){o.emissiveIntensity=.9+a*.6}}}function Dp(i){let e=new ct,t=oi(606),n=(c,l)=>Ut(Ft(256,256,(h,u)=>{if(h.drawImage(Qt.wood_col.image,0,0,u,u),h.strokeStyle="rgba(70,45,22,0.85)",h.lineWidth=16,h.strokeRect(8,8,u-16,u-16),h.beginPath(),h.moveTo(16,16),h.lineTo(u-16,u-16),h.stroke(),c){h.fillStyle="rgba(20,16,12,0.86)",h.fillRect(30,86,u-60,86),h.fillStyle="#f5c518";let f=40;for(h.font=`800 ${f}px ${Ns}`;h.measureText(c).width>u-80&&f>18;)f-=2,h.font=`800 ${f}px ${Ns}`;h.textAlign="center",h.fillText(c,u/2,128),h.fillStyle="#d9cbb3",h.font=`500 15px ${ai}`,h.fillText(l,u/2,156)}})),s=ht("wood",{repeat:[1,1]}),r=1.5,o=[5,4,3],a=0;return o.forEach((c,l)=>{for(let h=0;h<c&&a<i.length;h++,a++){let[u,f]=i[a],d=xt({map:n(u,f),normalMap:Qt.wood_nor,roughness:.85}),x=ke(new Ne(r,r,r),[s,s,s,s,d,s],(h-(c-1)/2)*(r+.06),r/2+l*r,(t()-.5)*.15,e);x.rotation.y=(t()-.5)*.12}}),ke(new Ne(5*r+1,.15,r+.6),xt({color:9071170,roughness:1}),0,.07,0,e).position.y=-0,{group:e,radius:6}}var Bi=(i,e=document)=>e.querySelector(i),_c=(i,e=document)=>[...e.querySelectorAll(i)],Lp=Bi("#loader-bar"),Up=Bi("#loader-note"),On=(i,e)=>{Lp&&(Lp.style.transform=`scaleX(${i})`),e&&Up&&(Up.textContent=e)};function r_(){try{let i=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&i.getContext("webgl2"))}catch{return!1}}var Mc=[{title:"Procurement Audit Automation",category:"Intelligent Automation",tech:["Python","SAP GUI Scripting","SQL"],outcome:"Real-time audit data extraction and validation \u2014 compliance checks that used to take days now run on their own."},{title:"Vendor Analytics Dashboard",category:"Business Intelligence",tech:["Power BI","DAX","PostgreSQL"],outcome:"Vendor performance tracking with anomaly detection, so supply-chain risk shows up before it costs money."},{title:"SAP Reporting Pipeline",category:"Data Engineering",tech:["Python","SAP","Data Warehousing"],outcome:"One unified pipeline that generates and distributes the reports people used to stitch together by hand."},{title:"Document Processing Engine",category:"AI & Data Processing",tech:["Python","OCR","LLM"],outcome:"An OCR + LLM pipeline that turns piles of physical records into clean, structured data."}],o_=[["Python","bots \xB7 scrapers \xB7 ML"],["SAP GUI","scripting"],["Power BI","DAX \xB7 models"],["SQL","Postgres \xB7 MSSQL"],["Power Automate","flows"],["FastAPI","services"],["Django","web apps"],["React","frontends"],["OCR + LLM","documents"],["Selenium","web automation"],["Git","versioning"],["Figma","interfaces"]];async function a_(){if(!r_()){document.documentElement.classList.add("static"),Bi("#loader")?.remove();return}let i=matchMedia("(max-width: 760px), (pointer: coarse)").matches,e=matchMedia("(prefers-reduced-motion: reduce)").matches;On(.08,"Loading type\u2026"),await Promise.race([Promise.all([document.fonts.load('400 40px "Instrument Serif"'),document.fonts.load('800 40px "Manrope"'),document.fonts.load('600 20px "JetBrains Mono"')]),new Promise(V=>setTimeout(V,2500))]).catch(()=>{});let t=Bi("#scene"),n=new Ia({canvas:t,antialias:!i,powerPreference:"high-performance"}),s=Math.min(window.devicePixelRatio,i?1.5:1.75);n.setPixelRatio(s),n.setSize(innerWidth,innerHeight),n.toneMapping=bo,n.shadowMap.enabled=!0,n.shadowMap.type=Th;let r=new ts;r.fog=new Da(15251872,.004);let o=new jt(i?55:42,innerWidth/innerHeight,.1,3e3),a=new $i(n);r.environment=a.fromScene(new sc,.04).texture;let c=new So;c.scale.setScalar(1e4),r.add(c);let l=c.material.uniforms;l.mieDirectionalG.value=.8;let h=new Er(16777215,3);h.castShadow=!0,h.shadow.mapSize.set(i?1024:4096,i?1024:4096);let u=h.shadow.camera;u.left=-55,u.right=55,u.top=55,u.bottom=-55,u.near=1,u.far=400,h.shadow.bias=-4e-4,h.shadow.normalBias=.04,r.add(h,h.target);let f=new Za(12375807,4934202,.8);r.add(f),On(.12,"Mixing paint\u2026");let d=null,x=Zd(n,V=>On(.08+V*.12,"Mixing paint\u2026")).then(()=>fp(V=>On(.2+V*.12,"Building the street\u2026")).catch(V=>(console.warn("Street assets failed to load; falling back to the procedural city",V),null))),[v]=await Promise.all([Yd(n),x.then(V=>{d=V})]);v.update(0,r),On(.34,"Laying the road\u2026"),await Li();let g=vp(),m=V=>g.uAtZ(V),E=[{id:"intro",u:m(8),creep:.004,hold:.04,cam:{pos:[-4.2,1.5,7.2],look:[1.6,1,.2]},mob:{pos:[-3.5,2.2,9.5],look:[.4,1.2,0]}},{id:"ch1",u:m(-82),side:1,creep:.006,cam:{pos:[-3.2,2.3,-6.5],look:[8,3.4,5]},mob:{pos:[-3.5,3,-9],look:[7,3.5,4]}},{id:"ch2",u:m(-170),side:-1,creep:.006,cam:{pos:[5.2,1.6,-17],look:[-12,10,6]},mob:{pos:[4,1.5,-12],look:[-12,13,7]}},{id:"ch3",u:m(-262),side:1,creep:.006,cam:{pos:[-4.2,2.3,-11.5],look:[9,4.6,3]},mob:{pos:[-3.6,2.6,-9],look:[8,4,4]}},{id:"ch4",u:m(-350),side:-1,creep:.008,hold:.07,cam:{pos:[5,5.5,-13],look:[-30,9,12]},mob:{pos:[6,7,-18],look:[-30,11,8]}},{id:"work",u:m(-430),side:1,creep:.06,hold:.13,cam:{pos:[-2.8,3.2,-8],look:[9,5.5,12]},mob:{pos:[-2.5,3.5,-10],look:[8,6.5,13]}},{id:"tools",u:m(-520),side:-1,creep:.006,cam:{pos:[3.4,2,-5.5],look:[-8,2.6,4]},mob:{pos:[3.8,2.6,-9],look:[-8,2.8,2]}},{id:"contact",u:m((Gt.zNear+Gt.zFar)/2+8),creep:.01,hold:.09,cam:{pos:[42,4.5,44],look:[-4,7,-18]},mob:{pos:[44,6,60],look:[-2,9,-16]}}],M={pos:[0,2.7,-9],look:[0,1.2,8]},b=.055,T=(1-E.reduce((V,j)=>V+(j.hold??b),0))/(E.length-1),A=0;E.forEach((V,j)=>{V.hold=V.hold??b,V.p0=A,V.p1=A+V.hold,A=V.p1+(j<E.length-1?T:0)}),E[E.length-1].p1=1;function w(V){for(let j=0;j<E.length;j++){let ne=E[j];if(V<=ne.p1||j===E.length-1){if(V>=ne.p0){let se=pi(V,ne.p0,ne.p1);return{i:j,hold:!0,k:se,u:ne.u-ne.creep/2+ne.creep*se}}let O=E[j-1],H=pi(V,O.p1,ne.p0),q=Xd(H);return{i:j-1,hold:!1,k:H,u:Xn(O.u+O.creep/2,ne.u-ne.creep/2,q)}}}}let S=[],_=[],R=(V,j,ne,O)=>{Ep(g,V.group,j,ne,O),r.add(V.group);let H=(V.center||new D).clone().applyEuler(V.group.rotation).add(V.group.position);return S.push({x:H.x,z:H.z,r:V.radius}),V.worldCenter=H,_.push(V),V};On(.3,"Raising landmarks\u2026"),await Li(),R(Tp(),E[0].u-.004,1,hn-1.3),R(Ap(),E[1].u+.004,1,hn+2.6),R(Rp(),E[2].u+.008,-1,hn+1.6),R(Cp(),E[3].u+.005,1,hn+1.4),R(Pp(),E[4].u+.012,-1,hn+4);let B=E[5],W=Mc.map((V,j)=>{let ne=R(Ip(V,j),B.u-B.creep/2+.008+j*(B.creep+.006)/4,1,hn+.6);return ne.group.rotateY(.55),ne});R(Dp(o_),E[6].u+.004,-1,hn+1.6),On(.45,"Painting the city\u2026"),await Li();let X=bp(r,g,S,{isMobile:i},d);On(.65,"Bolting the bridge\u2026"),await Li();let Q=yp(r,g);On(.7,"Rolling the Camaro out\u2026");let N;try{N=await Sp(V=>On(.7+V*.08,"Rolling the Camaro out\u2026"))}catch(V){console.warn("Car model failed, using the Ambassador",V),N=Iu({lights:!0})}r.add(N.root);let K=[];for(let[V,j]of[[-30,1],[-128,-1],[-212,1],[-300,-1],[-470,1],[-548,-1],[-760,1]]){let ne=Iu({lights:!1}),O=g.frame(m(V));ne.root.position.copy(O.p).addScaledVector(O.r,j*3.3),ne.root.rotation.y=Math.atan2(O.t.x,O.t.z)+(j>0?0:Math.PI),r.add(ne.root),K.push(ne)}On(.8,"Warming the engine\u2026"),await Li();let k=null,Z=null,le=null,$=null;if(!i){let V=innerWidth*s,j=innerHeight*s,ne=new qt(V,j,{type:Zt,samples:4,depthTexture:new es(V,j)});k=new oc(n,ne),k.setPixelRatio(s),k.addPass(new ac(r,o));try{$=new Ro(r,o,V,j),$.setGBuffer(k.renderTarget1.depthTexture),$.updateGtaoMaterial({radius:1.2,distanceExponent:1.4,thickness:2,scale:1.1,samples:16,distanceFallOff:1}),$.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),$.blendIntensity=.85,k.addPass($)}catch(O){console.warn("AO disabled",O),$=null}Z=new Pr(new be(innerWidth/2,innerHeight/2),.3,.6,.92),k.addPass(Z),k.addPass(new cc),le=new Cr(jd),k.addPass(le)}let ae=V=>new Ie(V),Oe=[{p:0,elev:4,az:120,sun:ae("#ffb08a"),si:1.6,sky:ae("#a9b6d8"),gnd:ae("#4a3a33"),hi:.55,fog:ae("#e7b8a0"),fd:.0042,tur:8,ray:2.6,mie:.006,exp:.62,night:.05},{p:.18,elev:22,az:140,sun:ae("#ffe2c0"),si:2.6,sky:ae("#bcd2f0"),gnd:ae("#4d4a3a"),hi:.8,fog:ae("#d9d6d2"),fd:.0032,tur:6,ray:1.6,mie:.005,exp:.6,night:0},{p:.36,elev:48,az:170,sun:ae("#fff6ea"),si:3.2,sky:ae("#c4dcff"),gnd:ae("#4f553e"),hi:.95,fog:ae("#c8d6e2"),fd:.0021,tur:4,ray:1.2,mie:.004,exp:.55,night:0},{p:.52,elev:18,az:220,sun:ae("#ffc684"),si:2.8,sky:ae("#c8c4d8"),gnd:ae("#55463a"),hi:.75,fog:ae("#e4c39f"),fd:.0032,tur:7,ray:2,mie:.006,exp:.6,night:0},{p:.66,elev:6,az:245,sun:ae("#ff9a52"),si:2.2,sky:ae("#b9a6c8"),gnd:ae("#4a3530"),hi:.6,fog:ae("#d9946f"),fd:.0036,tur:9,ray:3,mie:.008,exp:.66,night:.15},{p:.78,elev:.5,az:255,sun:ae("#ff6a3a"),si:1,sky:ae("#7f74a6"),gnd:ae("#2e2430"),hi:.45,fog:ae("#8a5a63"),fd:.0042,tur:10,ray:3.6,mie:.01,exp:.78,night:.55},{p:.88,elev:-4,az:262,sun:ae("#7f8cff"),si:.35,sky:ae("#3c4a80"),gnd:ae("#151522"),hi:.35,fog:ae("#232a48"),fd:.0042,tur:10,ray:1.5,mie:.005,exp:.95,night:.92},{p:1,elev:-9,az:270,sun:ae("#9fb2ff"),si:.3,sky:ae("#2a3768"),gnd:ae("#0e0f18"),hi:.3,fog:ae("#141a33"),fd:.0036,tur:10,ray:.6,mie:.004,exp:1,night:1}],J={sun:new Ie,sky:new Ie,gnd:new Ie,fog:new Ie};function me(V){let j=0;for(;j<Oe.length-2&&V>Oe[j+1].p;)j++;let ne=Oe[j],O=Oe[j+1],H=Dr(pi(V,ne.p,O.p));for(let q of["elev","az","si","hi","fd","tur","ray","mie","exp","night"])J[q]=Xn(ne[q],O[q],H);for(let q of["sun","sky","gnd","fog"])J[q].copy(ne[q]).lerp(O[q],H);return J}let xe=new D,de=new Ie,Fe=_c(".panel[data-stop]"),qe=_c(".proj"),We=Bi("#proj-count"),et=_c(".rail a"),pe=Bi("#progress"),_e=Bi("#scroll-hint");et.forEach(V=>{V.addEventListener("click",j=>{j.preventDefault();let ne=E[+V.dataset.stop];Ye(ne.p0+ne.hold*.4)})}),_c("[data-jump]").forEach(V=>V.addEventListener("click",j=>{j.preventDefault();let ne=E.find(O=>O.id===V.dataset.jump);ne&&Ye(ne.p0+ne.hold*.4)}));function z(){return document.documentElement.scrollHeight-innerHeight}function Ye(V){window.scrollTo({top:V*z(),behavior:e?"auto":"smooth"})}function Ee(V){E.forEach((H,q)=>{let se=Fe[q];if(!se)return;let Se=q===0?-1:.022,ve=q===E.length-1?-1:.022,Pe=1;Se>0&&(Pe=Math.min(Pe,pi(V,H.p0-Se,H.p0))),ve>0&&(Pe=Math.min(Pe,1-pi(V,H.p1,H.p1+ve))),Pe=Ds(Pe),se.style.opacity=Pe.toFixed(3),se.style.transform=`translate3d(0, ${((1-Pe)*(V<H.p0?28:-28)).toFixed(1)}px, 0)`,se.style.visibility=Pe<.01?"hidden":"visible",se.classList.toggle("live",Pe>.6)});let j=pi(V,B.p0,B.p1),ne=Math.min(Mc.length-1,Math.floor(j*Mc.length));qe.forEach((H,q)=>H.classList.toggle("on",q===ne)),We&&(We.textContent=`${ne+1} / ${Mc.length}`);let O=0;E.forEach((H,q)=>{V>=H.p0-.03&&(O=q)}),et.forEach((H,q)=>H.classList.toggle("on",q===O)),pe&&(pe.style.transform=`scaleX(${V})`),_e&&(_e.style.opacity=String(1-pi(V,.005,.03)))}let De={},ye=new D,Qe=new D,Be={pos:[0,0,0],look:[0,0,0]},F=(V,j,ne,O=Be)=>{for(let H=0;H<3;H++)O.pos[H]=Xn(V.pos[H],j.pos[H],ne),O.look[H]=Xn(V.look[H],j.look[H],ne);return O},P=V=>i?V.mob:V.cam;function te(V){let j=E[V.i];if(V.hold)return P(j);let ne=E[V.i+1],O=V.k;return O<.4?F(P(j),M,Dr(O/.4)):O>.6?F(M,P(ne),Dr((O-.6)/.4)):M}let fe=(V,j,ne)=>ne.copy(j.p).addScaledVector(j.r,V[0]).addScaledVector(new D(0,1,0),V[1]).addScaledVector(j.t,V[2]),ge=0,he=0,je=E[0].u,Re=0,Le=()=>{ge=Ds(scrollY/Math.max(1,z()))};addEventListener("scroll",Le,{passive:!0}),Le(),he=ge;let $e={x:0,y:0,sx:0,sy:0};addEventListener("pointermove",V=>{$e.x=V.clientX/innerWidth-.5,$e.y=V.clientY/innerHeight-.5}),addEventListener("resize",()=>{o.aspect=innerWidth/innerHeight,o.fov=innerWidth<760?55:42,o.updateProjectionMatrix(),n.setSize(innerWidth,innerHeight),k?.setSize(innerWidth,innerHeight)});let Me=!new URLSearchParams(location.search).has("still"),Ve=new wr,Xe=0,Ke=0;function Y(){let V=Math.min(Ve.getDelta(),.05),j=Ve.elapsedTime;he=e?ge:Xn(he,ge,1-Math.exp(-V*3.2)),Math.abs(he-ge)<2e-5&&(he=ge);let ne=w(he);g.frame(ne.u,De);let O=ne.u-je;je=ne.u;let H=O*g.length;Re=Xn(Re,H/Math.max(V,.001),.1),N.root.position.copy(De.p),N.root.rotation.y=Math.atan2(De.t.x,De.t.z),N.spin(H),N.body.position.y=Math.sin(j*31)*.004+Math.min(Math.abs(Re),20)*Math.sin(j*13)*6e-4,N.body.rotation.x=Ds(-Re*.0015,-.03,.03);let q=te(ne);$e.sx=Xn($e.sx,$e.x,.05),$e.sy=Xn($e.sy,$e.y,.05),fe(q.pos,De,ye),fe(q.look,De,Qe),ye.addScaledVector(De.r,$e.sx*.8).y+=-$e.sy*.4+Math.sin(j*.6)*.04,ye.y=Math.max(ye.y,.6),o.position.copy(ye),o.lookAt(Qe);let se=me(he),Se=fs.degToRad(90-se.elev),ve=fs.degToRad(se.az);xe.setFromSphericalCoords(1,Se,ve),l.sunPosition.value.copy(xe),l.turbidity.value=se.tur,l.rayleigh.value=se.ray,l.mieCoefficient.value=se.mie;let Pe=new D().setFromSphericalCoords(1,fs.degToRad(90-Math.max(se.elev,24)),ve);h.position.copy(De.p).addScaledVector(Pe,150),h.target.position.copy(De.p),h.color.copy(se.sun),h.intensity=se.si,f.color.copy(se.sky),f.groundColor.copy(se.gnd),f.intensity=se.hi*.45,r.fog.color.copy(se.fog),r.fog.density=se.fd,v.update(he,r),r.environmentIntensity=Xn(.9,.55,se.night),le&&(le.uniforms.time.value=j),n.toneMappingExposure=se.exp;let tt=se.night;X.setNight(tt),Q.setNight(tt),N.setNight(Ds(tt*1.3));let rt=new D().setFromSphericalCoords(1,fs.degToRad(62),fs.degToRad(200));X.sky.moon.position.copy(o.position).addScaledVector(rt,1200),X.sky.moonGlow.position.copy(X.sky.moon.position),X.sky.stars.position.copy(o.position),X.clouds.position.set(o.position.x,0,o.position.z),de.copy(se.sun).lerp(se.fog,.55).multiplyScalar(Xn(1,.18,tt)),X.tintClouds(de,Xn(.75,.25,tt)),Z&&(Z.strength=.2+tt*.45);for(let Je of _){let At=Je.worldCenter.distanceToSquared(o.position)<19600;Je.update?.(j,At),Je.setNight?.(tt,Ds(1-Math.abs(he-.42)*6))}for(let Je of X.update)Je(j,o);Ee(he),k?k.render():n.render(r,o),Xe++,Ke+=V,Ke>1.5&&Me&&(Xe/Ke<38&&(s>1?(s=Math.max(1,s-.25),n.setPixelRatio(s),k?.setPixelRatio?.(s)):$&&$.enabled?$.enabled=!1:Z&&Z.enabled?Z.enabled=!1:s>.75&&(s=.75,n.setPixelRatio(s),k?.setPixelRatio?.(s))),Xe=0,Ke=0),requestAnimationFrame(Y)}On(.92,"Compiling shaders\u2026"),await Li();try{n.compile(r,o)}catch{}On(1,"Ready. Hop in."),requestAnimationFrame(Y),await Li(),await Li(),document.documentElement.classList.add("ready"),setTimeout(()=>Bi("#loader")?.remove(),1600),window.__story={STOPS:E,jumpTo:Ye}}a_().catch(i=>{console.error(i),document.documentElement.classList.add("static"),Bi("#loader")?.remove()});
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.8.2
  *)
*/
