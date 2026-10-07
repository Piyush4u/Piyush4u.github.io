var Dh="170";var Xp=0,Gu=1,qp=2;var tc=1,Lh=2,Pi=3,Xn=0,$t=1,Xt=2,cn=0,mr=1,xi=2,Vu=3,Wu=4,Uh=5,Vn=100,Yp=101,jp=102,Zp=103,Kp=104,Nr=200,Jp=201,$p=202,Qp=203,dl=204,pl=205,nc=206,em=207,ic=208,tm=209,nm=210,im=211,sm=212,rm=213,om=214,ml=0,gl=1,xl=2,br=3,vl=4,bl=5,yl=6,_l=7,pd=0,am=1,cm=2,is=0,Nh=1,Fh=2,Oh=3,wo=4,lm=5,Bh=6,zh=7,Xu="attached",hm="detached",md=300,yr=301,_r=302,Ml=303,Sl=304,sc=306,hn=1e3,Hn=1001,mo=1002,ln=1003,kh=1004;var fr=1005;var Jt=1006,ao=1007;var oi=1008;var ai=1009,gd=1010,xd=1011,go=1012,Hh=1013,Ns=1014,An=1015,tn=1016,Gh=1017,Vh=1018,ss=1020,vd=35902,bd=1021,yd=1022,En=1023,_d=1024,Md=1025,gr=1026,rs=1027,To=1028,Wh=1029,Sd=1030,Xh=1031;var qh=1033,Ma=33776,Sa=33777,Ea=33778,wa=33779,El=35840,wl=35841,Tl=35842,Al=35843,Rl=36196,Cl=37492,Pl=37496,Il=37808,Dl=37809,Ll=37810,Ul=37811,Nl=37812,Fl=37813,Ol=37814,Bl=37815,zl=37816,kl=37817,Hl=37818,Gl=37819,Vl=37820,Wl=37821,Ta=36492,Xl=36494,ql=36495,Ed=36283,Yl=36284,jl=36285,Zl=36286;var Mr=2300,Sr=2301,Ic=2302,qu=2400,Yu=2401,ju=2402,um=2500;var wd=0,rc=1,Ao=2,fm=3200,Ro=3201;var Yh=0,dm=1,gi="",Gt="srgb",pn="srgb-linear",oc="linear",Lt="srgb";var Ys=7680;var Zu=519,pm=512,mm=513,gm=514,Td=515,xm=516,vm=517,bm=518,ym=519,Kl=35044;var Ku="300 es",Di=2e3,Aa=2001,os=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ju=1234567,co=Math.PI/180,Er=180/Math.PI;function Wn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function an(i,e,t){return Math.max(e,Math.min(t,i))}function jh(i,e){return(i%e+e)%e}function _m(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Mm(i,e,t){return i!==e?(t-i)/(e-i):0}function lo(i,e,t){return(1-t)*i+t*e}function Sm(i,e,t,n){return lo(i,e,1-Math.exp(-t*n))}function Em(i,e=1){return e-Math.abs(jh(i,e*2)-e)}function wm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Tm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Am(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Rm(i,e){return i+Math.random()*(e-i)}function Cm(i){return i*(.5-Math.random())}function Pm(i){i!==void 0&&(Ju=i);let e=Ju+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Im(i){return i*co}function Dm(i){return i*Er}function Lm(i){return(i&i-1)===0&&i!==0}function Um(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fm(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*x,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*x,a*l);break;case"ZYZ":i.set(c*x,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var yi={DEG2RAD:co,RAD2DEG:Er,generateUUID:Wn,clamp:an,euclideanModulo:jh,mapLinear:_m,inverseLerp:Mm,lerp:lo,damp:Sm,pingpong:Em,smoothstep:wm,smootherstep:Tm,randInt:Am,randFloat:Rm,randFloatSpread:Cm,seededRandom:Pm,degToRad:Im,radToDeg:Dm,isPowerOfTwo:Lm,ceilPowerOfTwo:Um,floorPowerOfTwo:Nm,setQuaternionFromProperEuler:Fm,normalize:Ft,denormalize:ri},_e=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ut=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],v=s[0],m=s[3],g=s[6],A=s[1],E=s[4],y=s[7],P=s[2],w=s[5],S=s[8];return r[0]=o*v+a*A+c*P,r[3]=o*m+a*E+c*w,r[6]=o*g+a*y+c*S,r[1]=l*v+h*A+u*P,r[4]=l*m+h*E+u*w,r[7]=l*g+h*y+u*S,r[2]=f*v+d*A+x*P,r[5]=f*m+d*E+x*w,r[8]=f*g+d*y+x*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,x=t*u+n*f+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=f*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Dc.makeScale(e,t)),this}rotate(e){return this.premultiply(Dc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Dc=new ut;function Ad(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Om(){let i=xo("canvas");return i.style.display="block",i}var $u={};function ro(i){i in $u||($u[i]=!0,console.warn(i))}function Bm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function zm(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function km(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var yt={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Lt&&(i.r=Li(i.r),i.g=Li(i.g),i.b=Li(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Lt&&(i.r=xr(i.r),i.g=xr(i.g),i.b=xr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gi?oc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qu=[.64,.33,.3,.6,.15,.06],ef=[.2126,.7152,.0722],tf=[.3127,.329],nf=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sf=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);yt.define({[pn]:{primaries:Qu,whitePoint:tf,transfer:oc,toXYZ:nf,fromXYZ:sf,luminanceCoefficients:ef,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:Qu,whitePoint:tf,transfer:Lt,toXYZ:nf,fromXYZ:sf,luminanceCoefficients:ef,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}});var js,Jl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{js===void 0&&(js=xo("canvas")),js.width=e.width,js.height=e.height;let n=js.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Li(t[n]/255)*255):t[n]=Li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hm=0,Ra=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Lc(s[o].image)):r.push(Lc(s[o]))}else r=Lc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Lc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Gm=0,sn=class i extends os{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Hn,s=Hn,r=Jt,o=oi,a=En,c=ai,l=i.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Wn(),this.name="",this.source=new Ra(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==md)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hn:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hn:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=md;sn.DEFAULT_ANISOTROPY=1;var wt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],x=c[9],v=c[2],m=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(x+m)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,y=(d+1)/2,P=(g+1)/2,w=(h+f)/4,S=(u+v)/4,T=(x+m)/4;return E>y&&E>P?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=S/n):y>P?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=T/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=S/r,s=T/r),this.set(n,s,r,t),this}let A=Math.sqrt((m-x)*(m-x)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(m-x)/A,this.y=(u-v)/A,this.z=(f-h)/A,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$l=class extends os{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ra(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zt=class extends $l{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ca=class extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ql=class extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ot=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],x=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=x,e[t+3]=v;return}if(u!==v||c!==f||l!==d||h!==x){let m=1-a,g=c*f+l*d+h*x+u*v,A=g>=0?1:-1,E=1-g*g;if(E>Number.EPSILON){let P=Math.sqrt(E),w=Math.atan2(P,g*A);m=Math.sin(m*w)/P,a=Math.sin(a*w)/P}let y=a*A;if(c=c*m+f*y,l=l*m+d*y,h=h*m+x*y,u=u*m+v*y,m===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],x=r[o+3];return e[t]=a*x+h*u+c*d-l*f,e[t+1]=c*x+h*f+l*u-a*d,e[t+2]=l*x+h*d+a*f-c*u,e[t+3]=h*x-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u+f*d*x;break;case"YZX":this._x=f*h*u+l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u-f*d*x;break;case"XZY":this._x=f*h*u-l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u+f*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Uc.copy(this).projectOnVector(e),this.sub(Uc)}reflect(e){return this.sub(Uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uc=new L,rf=new Ot,un=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vo.copy(n.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Wo.subVectors(this.max,jr),Zs.subVectors(e.a,jr),Ks.subVectors(e.b,jr),Js.subVectors(e.c,jr),Zi.subVectors(Ks,Zs),Ki.subVectors(Js,Ks),As.subVectors(Zs,Js);let t=[0,-Zi.z,Zi.y,0,-Ki.z,Ki.y,0,-As.z,As.y,Zi.z,0,-Zi.x,Ki.z,0,-Ki.x,As.z,0,-As.x,-Zi.y,Zi.x,0,-Ki.y,Ki.x,0,-As.y,As.x,0];return!Nc(t,Zs,Ks,Js,Wo)||(t=[1,0,0,0,1,0,0,0,1],!Nc(t,Zs,Ks,Js,Wo))?!1:(Xo.crossVectors(Zi,Ki),t=[Xo.x,Xo.y,Xo.z],Nc(t,Zs,Ks,Js,Wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ei=[new L,new L,new L,new L,new L,new L,new L,new L],ti=new L,Vo=new un,Zs=new L,Ks=new L,Js=new L,Zi=new L,Ki=new L,As=new L,jr=new L,Wo=new L,Xo=new L,Rs=new L;function Nc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Rs.fromArray(i,r);let a=s.x*Math.abs(Rs.x)+s.y*Math.abs(Rs.y)+s.z*Math.abs(Rs.z),c=e.dot(Rs),l=t.dot(Rs),h=n.dot(Rs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Vm=new un,Zr=new L,Fc=new L,Rn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Vm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);let t=Zr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Zr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(Fc)),this.expandByPoint(Zr.copy(e.center).sub(Fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},wi=new L,Oc=new L,qo=new L,Ji=new L,Bc=new L,Yo=new L,zc=new L,wr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Oc.copy(e).add(t).multiplyScalar(.5),qo.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(Oc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(qo),a=Ji.dot(this.direction),c=-Ji.dot(qo),l=Ji.lengthSq(),h=Math.abs(1-o*o),u,f,d,x;if(h>0)if(u=o*c-a,f=o*a-c,x=r*h,u>=0)if(f>=-x)if(f<=x){let v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=x?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Oc).addScaledVector(qo,f),d}intersectSphere(e,t){wi.subVectors(e.center,this.origin);let n=wi.dot(this.direction),s=wi.dot(wi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,n,s,r){Bc.subVectors(t,e),Yo.subVectors(n,e),zc.crossVectors(Bc,Yo);let o=this.direction.dot(zc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);let c=a*this.direction.dot(Yo.crossVectors(Ji,Yo));if(c<0)return null;let l=a*this.direction.dot(Bc.cross(Ji));if(l<0||c+l>o)return null;let h=-a*Ji.dot(zc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},He=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,f,d,x,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,d,x,v,m)}set(e,t,n,s,r,o,a,c,l,h,u,f,d,x,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=x,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),r=1/$s.setFromMatrixColumn(e,1).length(),o=1/$s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,x=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+x*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=x+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,x=l*h,v=l*u;t[0]=f+v*a,t[4]=x*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-x,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,x=l*h,v=l*u;t[0]=f-v*a,t[4]=-o*u,t[8]=x+d*a,t[1]=d+x*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,x=a*h,v=a*u;t[0]=c*h,t[4]=x*l-d,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=d*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,x=a*c,v=a*l;t[0]=c*h,t[4]=v-f*u,t[8]=x*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+x,t[10]=f-v*u}else if(e.order==="XZY"){let f=o*c,d=o*l,x=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=o*h,t[9]=d*u-x,t[2]=x*u-d,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wm,e,Xm)}lookAt(e,t,n){let s=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),$i.crossVectors(n,zn),$i.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),$i.crossVectors(n,zn)),$i.normalize(),jo.crossVectors(zn,$i),s[0]=$i.x,s[4]=jo.x,s[8]=zn.x,s[1]=$i.y,s[5]=jo.y,s[9]=zn.y,s[2]=$i.z,s[6]=jo.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],v=n[6],m=n[10],g=n[14],A=n[3],E=n[7],y=n[11],P=n[15],w=s[0],S=s[4],T=s[8],M=s[12],_=s[1],C=s[5],N=s[9],H=s[13],X=s[2],K=s[6],F=s[10],j=s[14],G=s[3],q=s[7],ce=s[11],$=s[15];return r[0]=o*w+a*_+c*X+l*G,r[4]=o*S+a*C+c*K+l*q,r[8]=o*T+a*N+c*F+l*ce,r[12]=o*M+a*H+c*j+l*$,r[1]=h*w+u*_+f*X+d*G,r[5]=h*S+u*C+f*K+d*q,r[9]=h*T+u*N+f*F+d*ce,r[13]=h*M+u*H+f*j+d*$,r[2]=x*w+v*_+m*X+g*G,r[6]=x*S+v*C+m*K+g*q,r[10]=x*T+v*N+m*F+g*ce,r[14]=x*M+v*H+m*j+g*$,r[3]=A*w+E*_+y*X+P*G,r[7]=A*S+E*C+y*K+P*q,r[11]=A*T+E*N+y*F+P*ce,r[15]=A*M+E*H+y*j+P*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],x=e[3],v=e[7],m=e[11],g=e[15];return x*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+v*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+g*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],x=e[12],v=e[13],m=e[14],g=e[15],A=u*m*l-v*f*l+v*c*d-a*m*d-u*c*g+a*f*g,E=x*f*l-h*m*l-x*c*d+o*m*d+h*c*g-o*f*g,y=h*v*l-x*u*l+x*a*d-o*v*d-h*a*g+o*u*g,P=x*u*c-h*v*c-x*a*f+o*v*f+h*a*m-o*u*m,w=t*A+n*E+s*y+r*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/w;return e[0]=A*S,e[1]=(v*f*r-u*m*r-v*s*d+n*m*d+u*s*g-n*f*g)*S,e[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*g+n*c*g)*S,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*S,e[4]=E*S,e[5]=(h*m*r-x*f*r+x*s*d-t*m*d-h*s*g+t*f*g)*S,e[6]=(x*c*r-o*m*r-x*s*l+t*m*l+o*s*g-t*c*g)*S,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*S,e[8]=y*S,e[9]=(x*u*r-h*v*r-x*n*d+t*v*d+h*n*g-t*u*g)*S,e[10]=(o*v*r-x*a*r+x*n*l-t*v*l-o*n*g+t*a*g)*S,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*S,e[12]=P*S,e[13]=(h*v*s-x*u*s+x*n*f-t*v*f-h*n*m+t*u*m)*S,e[14]=(x*a*s-o*v*s-x*n*c+t*v*c+o*n*m-t*a*m)*S,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*S,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,x=r*u,v=o*h,m=o*u,g=a*u,A=c*l,E=c*h,y=c*u,P=n.x,w=n.y,S=n.z;return s[0]=(1-(v+g))*P,s[1]=(d+y)*P,s[2]=(x-E)*P,s[3]=0,s[4]=(d-y)*w,s[5]=(1-(f+g))*w,s[6]=(m+A)*w,s[7]=0,s[8]=(x+E)*S,s[9]=(m-A)*S,s[10]=(1-(f+v))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=$s.set(s[0],s[1],s[2]).length(),o=$s.set(s[4],s[5],s[6]).length(),a=$s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ni.copy(this);let l=1/r,h=1/o,u=1/a;return ni.elements[0]*=l,ni.elements[1]*=l,ni.elements[2]*=l,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=u,ni.elements[9]*=u,ni.elements[10]*=u,t.setFromRotationMatrix(ni),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Di){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),d,x;if(a===Di)d=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Aa)d=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Di){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*l,d=(n+s)*h,x,v;if(a===Di)x=(o+r)*u,v=-2*u;else if(a===Aa)x=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},$s=new L,ni=new He,Wm=new L(0,0,0),Xm=new L(1,1,1),$i=new L,jo=new L,zn=new L,of=new He,af=new Ot,qn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(an(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(of,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return af.setFromEuler(this),this.setFromQuaternion(af,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var Pa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qm=0,cf=new L,Qs=new Ot,Ti=new He,Zo=new L,Kr=new L,Ym=new L,jm=new Ot,lf=new L(1,0,0),hf=new L(0,1,0),uf=new L(0,0,1),ff={type:"added"},Zm={type:"removed"},er={type:"childadded",child:null},kc={type:"childremoved",child:null},zt=class i extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new qn,n=new Ot,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new ut}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(lf,e)}rotateY(e){return this.rotateOnAxis(hf,e)}rotateZ(e){return this.rotateOnAxis(uf,e)}translateOnAxis(e,t){return cf.copy(e).applyQuaternion(this.quaternion),this.position.add(cf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lf,e)}translateY(e){return this.translateOnAxis(hf,e)}translateZ(e){return this.translateOnAxis(uf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zo.copy(e):Zo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Kr,Zo,this.up):Ti.lookAt(Zo,Kr,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),Qs.setFromRotationMatrix(Ti),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ff),er.child=e,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zm),kc.child=e,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ff),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,Ym),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,jm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};zt.DEFAULT_UP=new L(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ii=new L,Ai=new L,Hc=new L,Ri=new L,tr=new L,nr=new L,df=new L,Gc=new L,Vc=new L,Wc=new L,Xc=new wt,qc=new wt,Yc=new wt,ts=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ii.subVectors(e,t),s.cross(ii);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ii.subVectors(s,t),Ai.subVectors(n,t),Hc.subVectors(e,t);let o=ii.dot(ii),a=ii.dot(Ai),c=ii.dot(Hc),l=Ai.dot(Ai),h=Ai.dot(Hc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,x=(o*h-a*c)*f;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ri.x),c.addScaledVector(o,Ri.y),c.addScaledVector(a,Ri.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Xc.setScalar(0),qc.setScalar(0),Yc.setScalar(0),Xc.fromBufferAttribute(e,t),qc.fromBufferAttribute(e,n),Yc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Xc,r.x),o.addScaledVector(qc,r.y),o.addScaledVector(Yc,r.z),o}static isFrontFacing(e,t,n,s){return ii.subVectors(n,t),Ai.subVectors(e,t),ii.cross(Ai).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ii.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;tr.subVectors(s,n),nr.subVectors(r,n),Gc.subVectors(e,n);let c=tr.dot(Gc),l=nr.dot(Gc);if(c<=0&&l<=0)return t.copy(n);Vc.subVectors(e,s);let h=tr.dot(Vc),u=nr.dot(Vc);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(tr,o);Wc.subVectors(e,r);let d=tr.dot(Wc),x=nr.dot(Wc);if(x>=0&&d<=x)return t.copy(r);let v=d*l-c*x;if(v<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(nr,a);let m=h*x-d*u;if(m<=0&&u-h>=0&&d-x>=0)return df.subVectors(r,s),a=(u-h)/(u-h+(d-x)),t.copy(s).addScaledVector(df,a);let g=1/(m+v+f);return o=v*g,a=f*g,t.copy(n).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function jc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=yt.workingColorSpace){if(e=jh(e,1),t=an(t,0,1),n=an(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=jc(o,r,e+1/3),this.g=jc(o,r,e),this.b=jc(o,r,e-1/3)}return yt.toWorkingColorSpace(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let n=Rd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return yt.fromWorkingColorSpace(Sn.copy(this),e),Math.round(an(Sn.r*255,0,255))*65536+Math.round(an(Sn.g*255,0,255))*256+Math.round(an(Sn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(Sn.copy(this),t);let n=Sn.r,s=Sn.g,r=Sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Gt){yt.fromWorkingColorSpace(Sn.copy(this),e);let t=Sn.r,n=Sn.g,s=Sn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(Ko);let n=lo(Qi.h,Ko.h,t),s=lo(Qi.s,Ko.s,t),r=lo(Qi.l,Ko.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new Pe;Pe.NAMES=Rd;var Km=0,Cn=class extends os{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Wn(),this.name="",this.blending=mr,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=pl,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dl&&(n.blendSrc=this.blendSrc),this.blendDst!==pl&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Qt=class extends Cn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=pd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ii=Jm();function Jm(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function $m(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=an(i,-65504,65504),Ii.floatView[0]=i;let e=Ii.uint32View[0],t=e>>23&511;return Ii.baseTable[t]+((e&8388607)>>Ii.shiftTable[t])}function Qm(i){let e=i>>10;return Ii.uint32View[0]=Ii.mantissaTable[Ii.offsetTable[e]+(i&1023)]+Ii.exponentTable[e],Ii.floatView[0]}var Zh={toHalfFloat:$m,fromHalfFloat:Qm},nn=new L,Jo=new _e,pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kl,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jo.fromBufferAttribute(this,t),Jo.applyMatrix3(e),this.setXY(t,Jo.x,Jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kl&&(e.usage=this.usage),e}};var Ia=class extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Da=class extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var At=class extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},e0=0,Gn=new He,Zc=new zt,ir=new L,kn=new un,Jr=new un,bn=new L,Ct=class i extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ad(e)?Da:Ia)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new At(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Jr.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(kn.min,Jr.min),kn.expandByPoint(bn),bn.addVectors(kn.max,Jr.max),kn.expandByPoint(bn)):(kn.expandByPoint(Jr.min),kn.expandByPoint(Jr.max))}kn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)bn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(bn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)bn.fromBufferAttribute(a,l),c&&(ir.fromBufferAttribute(e,l),bn.add(ir)),s=Math.max(s,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new L,c[T]=new L;let l=new L,h=new L,u=new L,f=new _e,d=new _e,x=new _e,v=new L,m=new L;function g(T,M,_){l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,T),d.fromBufferAttribute(r,M),x.fromBufferAttribute(r,_),h.sub(l),u.sub(l),d.sub(f),x.sub(f);let C=1/(d.x*x.y-x.x*d.y);isFinite(C)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(C),a[T].add(v),a[M].add(v),a[_].add(v),c[T].add(m),c[M].add(m),c[_].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let T=0,M=A.length;T<M;++T){let _=A[T],C=_.start,N=_.count;for(let H=C,X=C+N;H<X;H+=3)g(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let E=new L,y=new L,P=new L,w=new L;function S(T){P.fromBufferAttribute(s,T),w.copy(P);let M=a[T];E.copy(M),E.sub(P.multiplyScalar(P.dot(M))).normalize(),y.crossVectors(w,M);let C=y.dot(c[T])<0?-1:1;o.setXYZW(T,E.x,E.y,E.z,C)}for(let T=0,M=A.length;T<M;++T){let _=A[T],C=_.start,N=_.count;for(let H=C,X=C+N;H<X;H+=3)S(e.getX(H+0)),S(e.getX(H+1)),S(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){let x=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,x=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*h;for(let g=0;g<h;g++)f[x++]=l[d++]}return new pt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pf=new He,Cs=new wr,$o=new Rn,mf=new L,Qo=new L,ea=new L,ta=new L,Kc=new L,na=new L,gf=new L,ia=new L,ke=class extends zt{constructor(e=new Ct,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){na.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Kc.fromBufferAttribute(u,e),o?na.addScaledVector(Kc,h):na.addScaledVector(Kc.sub(t),h))}t.add(na)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(r),Cs.copy(e.ray).recast(e.near),!($o.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere($o,mf)===null||Cs.origin.distanceToSquared(mf)>(e.far-e.near)**2))&&(pf.copy(r).invert(),Cs.copy(e.ray).applyMatrix4(pf),!(n.boundingBox!==null&&Cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){let m=f[x],g=o[m.materialIndex],A=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=A,P=E;y<P;y+=3){let w=a.getX(y),S=a.getX(y+1),T=a.getX(y+2);s=sa(this,g,e,n,l,h,u,w,S,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=x,g=v;m<g;m+=3){let A=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);s=sa(this,o,e,n,l,h,u,A,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){let m=f[x],g=o[m.materialIndex],A=Math.max(m.start,d.start),E=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=A,P=E;y<P;y+=3){let w=y,S=y+1,T=y+2;s=sa(this,g,e,n,l,h,u,w,S,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=x,g=v;m<g;m+=3){let A=m,E=m+1,y=m+2;s=sa(this,o,e,n,l,h,u,A,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function t0(i,e,t,n,s,r,o,a){let c;if(e.side===$t?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Xn,a),c===null)return null;ia.copy(a),ia.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ia);return l<t.near||l>t.far?null:{distance:l,point:ia.clone(),object:i}}function sa(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Qo),i.getVertexPosition(c,ea),i.getVertexPosition(l,ta);let h=t0(i,e,t,n,Qo,ea,ta,gf);if(h){let u=new L;ts.getBarycoord(gf,Qo,ea,ta,u),s&&(h.uv=ts.getInterpolatedAttribute(s,a,c,l,u,new _e)),r&&(h.uv1=ts.getInterpolatedAttribute(r,a,c,l,u,new _e)),o&&(h.normal=ts.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new L,materialIndex:0};ts.getNormal(Qo,ea,ta,f.normal),h.face=f,h.barycoord=u}return h}var Ne=class i extends Ct{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(u,2));function x(v,m,g,A,E,y,P,w,S,T,M){let _=y/S,C=P/T,N=y/2,H=P/2,X=w/2,K=S+1,F=T+1,j=0,G=0,q=new L;for(let ce=0;ce<F;ce++){let $=ce*C-H;for(let fe=0;fe<K;fe++){let De=fe*_-N;q[v]=De*A,q[m]=$*E,q[g]=X,l.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[g]=w>0?1:-1,h.push(q.x,q.y,q.z),u.push(fe/S),u.push(1-ce/T),j+=1}}for(let ce=0;ce<T;ce++)for(let $=0;$<S;$++){let fe=f+$+K*ce,De=f+$+K*(ce+1),J=f+($+1)+K*(ce+1),de=f+($+1)+K*ce;c.push(fe,De,de),c.push(De,J,de),G+=6}a.addGroup(d,G,M),d+=G,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Tr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Tn(i){let e={};for(let t=0;t<i.length;t++){let n=Tr(i[t]);for(let s in n)e[s]=n[s]}return e}function n0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Cd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var mn={clone:Tr,merge:Tn},i0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pt=class extends Cn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i0,this.fragmentShader=s0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=n0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},La=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},es=new L,xf=new _e,vf=new _e,en=class extends La{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,xf,vf),t.subVectors(vf,xf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(co*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},sr=-90,rr=1,eh=class extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(sr,rr,e,t);s.layers=this.layers,this.add(s);let r=new en(sr,rr,e,t);r.layers=this.layers,this.add(r);let o=new en(sr,rr,e,t);o.layers=this.layers,this.add(o);let a=new en(sr,rr,e,t);a.layers=this.layers,this.add(a);let c=new en(sr,rr,e,t);c.layers=this.layers,this.add(c);let l=new en(sr,rr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ua=class extends sn{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:yr,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},th=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ua(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ne(5,5,5),r=new Pt({name:"CubemapFromEquirect",uniforms:Tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:cn});r.uniforms.tEquirect.value=t;let o=new ke(s,r),a=t.minFilter;return t.minFilter===oi&&(t.minFilter=Jt),new eh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Jc=new L,r0=new L,o0=new ut,si=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Jc.subVectors(n,t).cross(r0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Jc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||o0.getNormalMatrix(e),s=this.coplanarPoint(Jc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ps=new Rn,ra=new L,Ui=class{constructor(e=new si,t=new si,n=new si,s=new si,r=new si,o=new si){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Di){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],x=s[9],v=s[10],m=s[11],g=s[12],A=s[13],E=s[14],y=s[15];if(n[0].setComponents(c-r,f-l,m-d,y-g).normalize(),n[1].setComponents(c+r,f+l,m+d,y+g).normalize(),n[2].setComponents(c+o,f+h,m+x,y+A).normalize(),n[3].setComponents(c-o,f-h,m-x,y-A).normalize(),n[4].setComponents(c-a,f-u,m-v,y-E).normalize(),t===Di)n[5].setComponents(c+a,f+u,m+v,y+E).normalize();else if(t===Aa)n[5].setComponents(a,u,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){return Ps.center.set(0,0,0),Ps.radius=.7071067811865476,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ra.x=s.normal.x>0?e.max.x:e.min.x,ra.y=s.normal.y>0?e.max.y:e.min.y,ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Pd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function a0(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){let x=u[f],v=u[d];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){let v=u[d];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Tt=class i extends Ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],x=[],v=[],m=[];for(let g=0;g<h;g++){let A=g*f-o;for(let E=0;E<l;E++){let y=E*u-r;x.push(y,-A,0),v.push(0,0,1),m.push(E/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let A=0;A<a;A++){let E=A+l*g,y=A+l*(g+1),P=A+1+l*(g+1),w=A+1+l*g;d.push(E,y,w),d.push(y,P,w)}this.setIndex(d),this.setAttribute("position",new At(x,3)),this.setAttribute("normal",new At(v,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},c0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l0=`#ifdef USE_ALPHAHASH
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
#endif`,h0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p0=`#ifdef USE_AOMAP
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
#endif`,m0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g0=`#ifdef USE_BATCHING
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
#endif`,x0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,v0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_0=`#ifdef USE_IRIDESCENCE
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
#endif`,M0=`#ifdef USE_BUMPMAP
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
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,I0=`#define PI 3.141592653589793
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
} // validated`,D0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,L0=`vec3 transformedNormal = objectNormal;
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
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B0="gl_FragColor = linearToOutputTexel( gl_FragColor );",z0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k0=`#ifdef USE_ENVMAP
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
#endif`,H0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z0=`#ifdef USE_GRADIENTMAP
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
}`,K0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q0=`uniform bool receiveShadow;
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
#endif`,eg=`#ifdef USE_ENVMAP
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
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
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
#endif`,og=`struct PhysicalMaterial {
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
}`,ag=`
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
#endif`,cg=`#if defined( RE_IndirectDiffuse )
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ug=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xg=`#if defined( USE_POINTS_UV )
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
#endif`,vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`#ifdef USE_MORPHTARGETS
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
#endif`,Eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
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
#endif`,Ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qg=`float getShadowMask() {
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
}`,Yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jg=`#ifdef USE_SKINNING
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
#endif`,Zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
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
#endif`,Jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ex=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tx=`#ifdef USE_TRANSMISSION
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
#endif`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cx=`uniform sampler2D t2D;
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`#include <common>
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
}`,px=`#if DEPTH_PACKING == 3200
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
}`,mx=`#define DISTANCE
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
}`,gx=`#define DISTANCE
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
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`uniform float scale;
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
}`,yx=`uniform vec3 diffuse;
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
}`,_x=`#include <common>
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
}`,Mx=`uniform vec3 diffuse;
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
}`,Sx=`#define LAMBERT
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
}`,Ex=`#define LAMBERT
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
}`,wx=`#define MATCAP
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
}`,Tx=`#define MATCAP
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
}`,Ax=`#define NORMAL
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
}`,Rx=`#define NORMAL
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
}`,Cx=`#define PHONG
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
}`,Px=`#define PHONG
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
}`,Ix=`#define STANDARD
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
}`,Dx=`#define STANDARD
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
}`,Lx=`#define TOON
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
}`,Ux=`#define TOON
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
}`,Nx=`uniform float size;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Ox=`#include <common>
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
}`,Bx=`uniform vec3 color;
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
}`,zx=`uniform float rotation;
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
}`,kx=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:c0,alphahash_pars_fragment:l0,alphamap_fragment:h0,alphamap_pars_fragment:u0,alphatest_fragment:f0,alphatest_pars_fragment:d0,aomap_fragment:p0,aomap_pars_fragment:m0,batching_pars_vertex:g0,batching_vertex:x0,begin_vertex:v0,beginnormal_vertex:b0,bsdfs:y0,iridescence_fragment:_0,bumpmap_pars_fragment:M0,clipping_planes_fragment:S0,clipping_planes_pars_fragment:E0,clipping_planes_pars_vertex:w0,clipping_planes_vertex:T0,color_fragment:A0,color_pars_fragment:R0,color_pars_vertex:C0,color_vertex:P0,common:I0,cube_uv_reflection_fragment:D0,defaultnormal_vertex:L0,displacementmap_pars_vertex:U0,displacementmap_vertex:N0,emissivemap_fragment:F0,emissivemap_pars_fragment:O0,colorspace_fragment:B0,colorspace_pars_fragment:z0,envmap_fragment:k0,envmap_common_pars_fragment:H0,envmap_pars_fragment:G0,envmap_pars_vertex:V0,envmap_physical_pars_fragment:eg,envmap_vertex:W0,fog_vertex:X0,fog_pars_vertex:q0,fog_fragment:Y0,fog_pars_fragment:j0,gradientmap_pars_fragment:Z0,lightmap_pars_fragment:K0,lights_lambert_fragment:J0,lights_lambert_pars_fragment:$0,lights_pars_begin:Q0,lights_toon_fragment:tg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:sg,lights_physical_fragment:rg,lights_physical_pars_fragment:og,lights_fragment_begin:ag,lights_fragment_maps:cg,lights_fragment_end:lg,logdepthbuf_fragment:hg,logdepthbuf_pars_fragment:ug,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:dg,map_fragment:pg,map_pars_fragment:mg,map_particle_fragment:gg,map_particle_pars_fragment:xg,metalnessmap_fragment:vg,metalnessmap_pars_fragment:bg,morphinstance_vertex:yg,morphcolor_vertex:_g,morphnormal_vertex:Mg,morphtarget_pars_vertex:Sg,morphtarget_vertex:Eg,normal_fragment_begin:wg,normal_fragment_maps:Tg,normal_pars_fragment:Ag,normal_pars_vertex:Rg,normal_vertex:Cg,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Ig,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Lg,iridescence_pars_fragment:Ug,opaque_fragment:Ng,packing:Fg,premultiplied_alpha_fragment:Og,project_vertex:Bg,dithering_fragment:zg,dithering_pars_fragment:kg,roughnessmap_fragment:Hg,roughnessmap_pars_fragment:Gg,shadowmap_pars_fragment:Vg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Xg,shadowmask_pars_fragment:qg,skinbase_vertex:Yg,skinning_pars_vertex:jg,skinning_vertex:Zg,skinnormal_vertex:Kg,specularmap_fragment:Jg,specularmap_pars_fragment:$g,tonemapping_fragment:Qg,tonemapping_pars_fragment:ex,transmission_fragment:tx,transmission_pars_fragment:nx,uv_pars_fragment:ix,uv_pars_vertex:sx,uv_vertex:rx,worldpos_vertex:ox,background_vert:ax,background_frag:cx,backgroundCube_vert:lx,backgroundCube_frag:hx,cube_vert:ux,cube_frag:fx,depth_vert:dx,depth_frag:px,distanceRGBA_vert:mx,distanceRGBA_frag:gx,equirect_vert:xx,equirect_frag:vx,linedashed_vert:bx,linedashed_frag:yx,meshbasic_vert:_x,meshbasic_frag:Mx,meshlambert_vert:Sx,meshlambert_frag:Ex,meshmatcap_vert:wx,meshmatcap_frag:Tx,meshnormal_vert:Ax,meshnormal_frag:Rx,meshphong_vert:Cx,meshphong_frag:Px,meshphysical_vert:Ix,meshphysical_frag:Dx,meshtoon_vert:Lx,meshtoon_frag:Ux,points_vert:Nx,points_frag:Fx,shadow_vert:Ox,shadow_frag:Bx,sprite_vert:zx,sprite_frag:kx},ze={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},mi={basic:{uniforms:Tn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Tn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Pe(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Tn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Tn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Tn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Pe(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Tn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Tn([ze.points,ze.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Tn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Tn([ze.common,ze.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Tn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Tn([ze.sprite,ze.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Tn([ze.common,ze.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Tn([ze.lights,ze.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};mi.physical={uniforms:Tn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var oa={r:0,b:0,g:0},Is=new qn,Hx=new He;function Gx(i,e,t,n,s,r,o){let a=new Pe(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function x(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?t:e).get(E)),E}function v(A){let E=!1,y=x(A);y===null?g(a,c):y&&y.isColor&&(g(y,1),E=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,E){let y=x(E);y&&(y.isCubeTexture||y.mapping===sc)?(h===void 0&&(h=new ke(new Ne(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:Tr(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Is.copy(E.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(Is)),h.material.toneMapped=yt.getTransfer(y.colorSpace)!==Lt,(u!==y||f!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ke(new Tt(2,2),new Pt({name:"BackgroundMaterial",uniforms:Tr(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=yt.getTransfer(y.colorSpace)!==Lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function g(A,E){A.getRGB(oa,Cd(i)),n.buffers.color.setClear(oa.r,oa.g,oa.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(A,E=1){a.set(A),c=E,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,g(a,c)},render:v,addToRenderList:m}}function Vx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(_,C,N,H,X){let K=!1,F=u(H,N,C);r!==F&&(r=F,l(r.object)),K=d(_,H,N,X),K&&x(_,H,N,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(_,C,N,H),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,C,N){let H=N.wireframe===!0,X=n[_.id];X===void 0&&(X={},n[_.id]=X);let K=X[C.id];K===void 0&&(K={},X[C.id]=K);let F=K[H];return F===void 0&&(F=f(c()),K[H]=F),F}function f(_){let C=[],N=[],H=[];for(let X=0;X<t;X++)C[X]=0,N[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:H,object:_,attributes:{},index:null}}function d(_,C,N,H){let X=r.attributes,K=C.attributes,F=0,j=N.getAttributes();for(let G in j)if(j[G].location>=0){let ce=X[G],$=K[G];if($===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&($=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&($=_.instanceColor)),ce===void 0||ce.attribute!==$||$&&ce.data!==$.data)return!0;F++}return r.attributesNum!==F||r.index!==H}function x(_,C,N,H){let X={},K=C.attributes,F=0,j=N.getAttributes();for(let G in j)if(j[G].location>=0){let ce=K[G];ce===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ce=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ce=_.instanceColor));let $={};$.attribute=ce,ce&&ce.data&&($.data=ce.data),X[G]=$,F++}r.attributes=X,r.attributesNum=F,r.index=H}function v(){let _=r.newAttributes;for(let C=0,N=_.length;C<N;C++)_[C]=0}function m(_){g(_,0)}function g(_,C){let N=r.newAttributes,H=r.enabledAttributes,X=r.attributeDivisors;N[_]=1,H[_]===0&&(i.enableVertexAttribArray(_),H[_]=1),X[_]!==C&&(i.vertexAttribDivisor(_,C),X[_]=C)}function A(){let _=r.newAttributes,C=r.enabledAttributes;for(let N=0,H=C.length;N<H;N++)C[N]!==_[N]&&(i.disableVertexAttribArray(N),C[N]=0)}function E(_,C,N,H,X,K,F){F===!0?i.vertexAttribIPointer(_,C,N,X,K):i.vertexAttribPointer(_,C,N,H,X,K)}function y(_,C,N,H){v();let X=H.attributes,K=N.getAttributes(),F=C.defaultAttributeValues;for(let j in K){let G=K[j];if(G.location>=0){let q=X[j];if(q===void 0&&(j==="instanceMatrix"&&_.instanceMatrix&&(q=_.instanceMatrix),j==="instanceColor"&&_.instanceColor&&(q=_.instanceColor)),q!==void 0){let ce=q.normalized,$=q.itemSize,fe=e.get(q);if(fe===void 0)continue;let De=fe.buffer,J=fe.type,de=fe.bytesPerElement,ge=J===i.INT||J===i.UNSIGNED_INT||q.gpuType===Hh;if(q.isInterleavedBufferAttribute){let pe=q.data,ve=pe.stride,Ye=q.offset;if(pe.isInstancedInterleavedBuffer){for(let je=0;je<G.locationSize;je++)g(G.location+je,pe.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let je=0;je<G.locationSize;je++)m(G.location+je);i.bindBuffer(i.ARRAY_BUFFER,De);for(let je=0;je<G.locationSize;je++)E(G.location+je,$/G.locationSize,J,ce,ve*de,(Ye+$/G.locationSize*je)*de,ge)}else{if(q.isInstancedBufferAttribute){for(let pe=0;pe<G.locationSize;pe++)g(G.location+pe,q.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let pe=0;pe<G.locationSize;pe++)m(G.location+pe);i.bindBuffer(i.ARRAY_BUFFER,De);for(let pe=0;pe<G.locationSize;pe++)E(G.location+pe,$/G.locationSize,J,ce,$*de,$/G.locationSize*pe*de,ge)}}else if(F!==void 0){let ce=F[j];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(G.location,ce);break;case 3:i.vertexAttrib3fv(G.location,ce);break;case 4:i.vertexAttrib4fv(G.location,ce);break;default:i.vertexAttrib1fv(G.location,ce)}}}}A()}function P(){T();for(let _ in n){let C=n[_];for(let N in C){let H=C[N];for(let X in H)h(H[X].object),delete H[X];delete C[N]}delete n[_]}}function w(_){if(n[_.id]===void 0)return;let C=n[_.id];for(let N in C){let H=C[N];for(let X in H)h(H[X].object),delete H[X];delete C[N]}delete n[_.id]}function S(_){for(let C in n){let N=n[C];if(N[_.id]===void 0)continue;let H=N[_.id];for(let X in H)h(H[X].object),delete H[X];delete N[_.id]}}function T(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:S,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function Wx(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<l.length;x++)o(l[x],h[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let x=0;for(let v=0;v<u;v++)x+=h[v]*f[v];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Xx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==En&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let T=S===tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==ai&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==An&&!T)}function c(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=x>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:P,maxSamples:w}}function qx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new si,a=new ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let x=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):l();else{let A=r?0:n,E=A*4,y=g.clippingState||null;c.value=y,y=h(x,f,E,d);for(let P=0;P!==E;++P)y[P]=t[P];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,x){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=c.value,x!==!0||m===null){let g=d+v*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,y=d;E!==v;++E,y+=4)o.copy(u[E]).applyMatrix4(A,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Yx(i){let e=new WeakMap;function t(o,a){return a===Ml?o.mapping=yr:a===Sl&&(o.mapping=_r),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ml||a===Sl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new th(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var as=class extends La{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dr=4,bf=[.125,.215,.35,.446,.526,.582],Us=20,$c=new as,yf=new Pe,Qc=null,el=0,tl=0,nl=!1,Ls=(1+Math.sqrt(5))/2,or=1/Ls,_f=[new L(-Ls,or,0),new L(Ls,or,0),new L(-or,0,Ls),new L(or,0,Ls),new L(0,Ls,-or),new L(0,Ls,or),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],cs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Qc=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qc,el,tl),this._renderer.xr.enabled=nl,e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qc=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:tn,format:En,colorSpace:pn,depthBuffer:!1},s=Mf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jx(r)),this._blurMaterial=Zx(r,e,t)}return s}_compileMaterial(e){let t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,$c)}_sceneToCubeUV(e,t,n,s){let a=new en(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(yf),h.toneMapping=is,h.autoClear=!1;let d=new Qt({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),x=new ke(new Ne,d),v=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(yf),v=!0);for(let g=0;g<6;g++){let A=g%3;A===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):A===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));let E=this._cubeSize;aa(s,A*E,g>2?E:0,E,E),h.setRenderTarget(s),v&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===yr||e.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;aa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,$c)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_f[(s-r-1)%_f.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ke(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Us-1),v=r/x,m=isFinite(r)?1+Math.floor(h*v):Us;m>Us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Us}`);let g=[],A=0;for(let S=0;S<Us;++S){let T=S/v,M=Math.exp(-T*T/2);g.push(M),S===0?A+=M:S<m&&(A+=2*M)}for(let S=0;S<g.length;S++)g[S]=g[S]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=x,f.mipInt.value=E-n;let y=this._sizeLods[s],P=3*y*(s>E-dr?s-E+dr:0),w=4*(this._cubeSize-y);aa(t,P,w,3*y,2*y),c.setRenderTarget(t),c.render(u,$c)}};function jx(i){let e=[],t=[],n=[],s=i,r=i-dr+1+bf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-dr?c=bf[o-i+dr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,v=3,m=2,g=1,A=new Float32Array(v*x*d),E=new Float32Array(m*x*d),y=new Float32Array(g*x*d);for(let w=0;w<d;w++){let S=w%3*2/3-1,T=w>2?0:-1,M=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];A.set(M,v*x*w),E.set(f,m*x*w);let _=[w,w,w,w,w,w];y.set(_,g*x*w)}let P=new Ct;P.setAttribute("position",new pt(A,v)),P.setAttribute("uv",new pt(E,m)),P.setAttribute("faceIndex",new pt(y,g)),e.push(P),s>dr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mf(i,e,t){let n=new Zt(i,e,t);return n.texture.mapping=sc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function aa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Zx(i,e,t){let n=new Float32Array(Us),s=new L(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Sf(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Ef(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Kh(){return`

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
	`}function Kx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ml||c===Sl,h=c===yr||c===_r;if(l||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new cs(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new cs(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Jx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ro("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $x(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);for(let x in f.morphAttributes){let v=f.morphAttributes[x];for(let m=0,g=v.length;m<g;m++)e.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let x in f)e.update(f[x],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let x in d){let v=d[x];for(let m=0,g=v.length;m<g;m++)e.update(v[m],i.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,x=u.attributes.position,v=0;if(d!==null){let A=d.array;v=d.version;for(let E=0,y=A.length;E<y;E+=3){let P=A[E+0],w=A[E+1],S=A[E+2];f.push(P,w,w,S,S,P)}}else if(x!==void 0){let A=x.array;v=x.version;for(let E=0,y=A.length/3-1;E<y;E+=3){let P=E+0,w=E+1,S=E+2;f.push(P,w,w,S,S,P)}}else return;let m=new(Ad(f)?Da:Ia)(f,1);m.version=v;let g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Qx(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,x){x!==0&&(i.drawElementsInstanced(n,d,r,f*o,x),t.update(d,n,x))}function h(f,d,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,x);let m=0;for(let g=0;g<x;g++)m+=d[g];t.update(m,n,1)}function u(f,d,x,v){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)l(f[g]/o,d[g],v[g]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,x);let g=0;for(let A=0;A<x;A++)g+=d[A]*v[A];t.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ev(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function tv(i,e,t){let n=new WeakMap,s=new wt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let M=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],E=0;d===!0&&(E=1),x===!0&&(E=2),v===!0&&(E=3);let y=a.attributes.position.count*E,P=1;y>e.maxTextureSize&&(P=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*P*4*u),S=new Ca(w,y,P,u);S.type=An,S.needsUpdate=!0;let T=E*4;for(let _=0;_<u;_++){let C=m[_],N=g[_],H=A[_],X=y*P*4*_;for(let K=0;K<C.count;K++){let F=K*T;d===!0&&(s.fromBufferAttribute(C,K),w[X+F+0]=s.x,w[X+F+1]=s.y,w[X+F+2]=s.z,w[X+F+3]=0),x===!0&&(s.fromBufferAttribute(N,K),w[X+F+4]=s.x,w[X+F+5]=s.y,w[X+F+6]=s.z,w[X+F+7]=0),v===!0&&(s.fromBufferAttribute(H,K),w[X+F+8]=s.x,w[X+F+9]=s.y,w[X+F+10]=s.z,w[X+F+11]=H.itemSize===4?s.w:1)}}f={count:u,texture:S,size:new _e(y,P)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let x=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function nv(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var ls=class extends sn{constructor(e,t,n,s,r,o,a,c,l,h=gr){if(h!==gr&&h!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gr&&(n=Ns),n===void 0&&h===rs&&(n=ss),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ln,this.minFilter=c!==void 0?c:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Id=new sn,wf=new ls(1,1),Dd=new Ca,Ld=new Ql,Ud=new Ua,Tf=[],Af=[],Rf=new Float32Array(16),Cf=new Float32Array(9),Pf=new Float32Array(4);function Fr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Tf[s];if(r===void 0&&(r=new Float32Array(s),Tf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function fn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ac(i,e){let t=Af[e];t===void 0&&(t=new Int32Array(e),Af[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function iv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2fv(this.addr,e),dn(t,e)}}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;i.uniform3fv(this.addr,e),dn(t,e)}}function ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4fv(this.addr,e),dn(t,e)}}function av(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;Pf.set(n),i.uniformMatrix2fv(this.addr,!1,Pf),dn(t,n)}}function cv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;Cf.set(n),i.uniformMatrix3fv(this.addr,!1,Cf),dn(t,n)}}function lv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;Rf.set(n),i.uniformMatrix4fv(this.addr,!1,Rf),dn(t,n)}}function hv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2iv(this.addr,e),dn(t,e)}}function fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3iv(this.addr,e),dn(t,e)}}function dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4iv(this.addr,e),dn(t,e)}}function pv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2uiv(this.addr,e),dn(t,e)}}function gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3uiv(this.addr,e),dn(t,e)}}function xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4uiv(this.addr,e),dn(t,e)}}function vv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wf.compareFunction=Td,r=wf):r=Id,t.setTexture2D(e||r,s)}function bv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ld,s)}function yv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ud,s)}function _v(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Dd,s)}function Mv(i){switch(i){case 5126:return iv;case 35664:return sv;case 35665:return rv;case 35666:return ov;case 35674:return av;case 35675:return cv;case 35676:return lv;case 5124:case 35670:return hv;case 35667:case 35671:return uv;case 35668:case 35672:return fv;case 35669:case 35673:return dv;case 5125:return pv;case 36294:return mv;case 36295:return gv;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return _v}}function Sv(i,e){i.uniform1fv(this.addr,e)}function Ev(i,e){let t=Fr(e,this.size,2);i.uniform2fv(this.addr,t)}function wv(i,e){let t=Fr(e,this.size,3);i.uniform3fv(this.addr,t)}function Tv(i,e){let t=Fr(e,this.size,4);i.uniform4fv(this.addr,t)}function Av(i,e){let t=Fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Rv(i,e){let t=Fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Cv(i,e){let t=Fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Pv(i,e){i.uniform1iv(this.addr,e)}function Iv(i,e){i.uniform2iv(this.addr,e)}function Dv(i,e){i.uniform3iv(this.addr,e)}function Lv(i,e){i.uniform4iv(this.addr,e)}function Uv(i,e){i.uniform1uiv(this.addr,e)}function Nv(i,e){i.uniform2uiv(this.addr,e)}function Fv(i,e){i.uniform3uiv(this.addr,e)}function Ov(i,e){i.uniform4uiv(this.addr,e)}function Bv(i,e,t){let n=this.cache,s=e.length,r=ac(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Id,r[o])}function zv(i,e,t){let n=this.cache,s=e.length,r=ac(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ld,r[o])}function kv(i,e,t){let n=this.cache,s=e.length,r=ac(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ud,r[o])}function Hv(i,e,t){let n=this.cache,s=e.length,r=ac(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Dd,r[o])}function Gv(i){switch(i){case 5126:return Sv;case 35664:return Ev;case 35665:return wv;case 35666:return Tv;case 35674:return Av;case 35675:return Rv;case 35676:return Cv;case 5124:case 35670:return Pv;case 35667:case 35671:return Iv;case 35668:case 35672:return Dv;case 35669:case 35673:return Lv;case 5125:return Uv;case 36294:return Nv;case 36295:return Fv;case 36296:return Ov;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return zv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Hv}}var nh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mv(t.type)}},ih=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gv(t.type)}},sh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},il=/(\w+)(\])?(\[|\.)?/g;function If(i,e){i.seq.push(e),i.map[e.id]=e}function Vv(i,e,t){let n=i.name,s=n.length;for(il.lastIndex=0;;){let r=il.exec(n),o=il.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){If(t,l===void 0?new nh(a,i,e):new ih(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new sh(a),If(t,u)),t=u}}}var vr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Vv(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Df(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Wv=37297,Xv=0;function qv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Lf=new ut;function Yv(i){yt._getMatrix(Lf,yt.workingColorSpace,i);let e=`mat3( ${Lf.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(i)){case oc:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Uf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+qv(i.getShaderSource(e),o)}else return s}function jv(i,e){let t=Yv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Zv(i,e){let t;switch(e){case Nh:t="Linear";break;case Fh:t="Reinhard";break;case Oh:t="Cineon";break;case wo:t="ACESFilmic";break;case Bh:t="AgX";break;case zh:t="Neutral";break;case lm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ca=new L;function Kv(){yt.getLuminanceCoefficients(ca);let i=ca.x.toFixed(4),e=ca.y.toFixed(4),t=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function $v(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function oo(i){return i!==""}function Nf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ff(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function rh(i){return i.replace(eb,nb)}var tb=new Map;function nb(i,e){let t=dt[e];if(t===void 0){let n=tb.get(e);if(n!==void 0)t=dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rh(t)}var ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Of(i){return i.replace(ib,sb)}function sb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function rb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function ob(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yr:case _r:e="ENVMAP_TYPE_CUBE";break;case sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ab(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _r:e="ENVMAP_MODE_REFRACTION";break}return e}function cb(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pd:e="ENVMAP_BLENDING_MULTIPLY";break;case am:e="ENVMAP_BLENDING_MIX";break;case cm:e="ENVMAP_BLENDING_ADD";break}return e}function lb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function hb(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=rb(t),l=ob(t),h=ab(t),u=cb(t),f=lb(t),d=Jv(t),x=$v(r),v=s.createProgram(),m,g,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(oo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(oo).join(`
`),g.length>0&&(g+=`
`)):(m=[Bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),g=[Bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==is?"#define TONE_MAPPING":"",t.toneMapping!==is?dt.tonemapping_pars_fragment:"",t.toneMapping!==is?Zv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,jv("linearToOutputTexel",t.outputColorSpace),Kv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oo).join(`
`)),o=rh(o),o=Nf(o,t),o=Ff(o,t),a=rh(a),a=Nf(a,t),a=Ff(a,t),o=Of(o),a=Of(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=A+m+o,y=A+g+a,P=Df(s,s.VERTEX_SHADER,E),w=Df(s,s.FRAGMENT_SHADER,y);s.attachShader(v,P),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function S(C){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(v).trim(),H=s.getShaderInfoLog(P).trim(),X=s.getShaderInfoLog(w).trim(),K=!0,F=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,P,w);else{let j=Uf(s,P,"vertex"),G=Uf(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+j+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(H===""||X==="")&&(F=!1);F&&(C.diagnostics={runnable:K,programLog:N,vertexShader:{log:H,prefix:m},fragmentShader:{log:X,prefix:g}})}s.deleteShader(P),s.deleteShader(w),T=new vr(s,v),M=Qv(s,v)}let T;this.getUniforms=function(){return T===void 0&&S(this),T};let M;this.getAttributes=function(){return M===void 0&&S(this),M};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,Wv)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=w,this}var ub=0,oh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ah(e),t.set(e,n)),n}},ah=class{constructor(e){this.id=ub++,this.code=e,this.usedTimes=0}};function fb(i,e,t,n,s,r,o){let a=new Pa,c=new oh,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,_,C,N,H){let X=N.fog,K=H.geometry,F=M.isMeshStandardMaterial?N.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||F),G=j&&j.mapping===sc?j.image.height:null,q=x[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let ce=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,$=ce!==void 0?ce.length:0,fe=0;K.morphAttributes.position!==void 0&&(fe=1),K.morphAttributes.normal!==void 0&&(fe=2),K.morphAttributes.color!==void 0&&(fe=3);let De,J,de,ge;if(q){let tt=mi[q];De=tt.vertexShader,J=tt.fragmentShader}else De=M.vertexShader,J=M.fragmentShader,c.update(M),de=c.getVertexShaderID(M),ge=c.getFragmentShaderID(M);let pe=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ye=H.isInstancedMesh===!0,je=H.isBatchedMesh===!0,ot=!!M.map,le=!!M.matcap,ye=!!j,z=!!M.aoMap,Ze=!!M.lightMap,Se=!!M.bumpMap,We=!!M.normalMap,Re=!!M.displacementMap,Ke=!!M.emissiveMap,Ge=!!M.metalnessMap,O=!!M.roughnessMap,I=M.anisotropy>0,te=M.clearcoat>0,he=M.dispersion>0,xe=M.iridescence>0,ue=M.sheen>0,Je=M.transmission>0,Ie=I&&!!M.anisotropyMap,Le=te&&!!M.clearcoatMap,it=te&&!!M.clearcoatNormalMap,be=te&&!!M.clearcoatRoughnessMap,Ve=xe&&!!M.iridescenceMap,$e=xe&&!!M.iridescenceThicknessMap,Qe=ue&&!!M.sheenColorMap,Xe=ue&&!!M.sheenRoughnessMap,Z=!!M.specularMap,Q=!!M.specularColorMap,oe=!!M.specularIntensityMap,B=Je&&!!M.transmissionMap,V=Je&&!!M.thicknessMap,W=!!M.gradientMap,re=!!M.alphaMap,Ee=M.alphaTest>0,Me=!!M.alphaHash,Fe=!!M.extensions,nt=is;M.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(nt=i.toneMapping);let lt={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:De,fragmentShader:J,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:je,batchingColor:je&&H._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&H.instanceColor!==null,instancingMorph:Ye&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:pn,alphaToCoverage:!!M.alphaToCoverage,map:ot,matcap:le,envMap:ye,envMapMode:ye&&j.mapping,envMapCubeUVHeight:G,aoMap:z,lightMap:Ze,bumpMap:Se,normalMap:We,displacementMap:f&&Re,emissiveMap:Ke,normalMapObjectSpace:We&&M.normalMapType===dm,normalMapTangentSpace:We&&M.normalMapType===Yh,metalnessMap:Ge,roughnessMap:O,anisotropy:I,anisotropyMap:Ie,clearcoat:te,clearcoatMap:Le,clearcoatNormalMap:it,clearcoatRoughnessMap:be,dispersion:he,iridescence:xe,iridescenceMap:Ve,iridescenceThicknessMap:$e,sheen:ue,sheenColorMap:Qe,sheenRoughnessMap:Xe,specularMap:Z,specularColorMap:Q,specularIntensityMap:oe,transmission:Je,transmissionMap:B,thicknessMap:V,gradientMap:W,opaque:M.transparent===!1&&M.blending===mr&&M.alphaToCoverage===!1,alphaMap:re,alphaTest:Ee,alphaHash:Me,combine:M.combine,mapUv:ot&&v(M.map.channel),aoMapUv:z&&v(M.aoMap.channel),lightMapUv:Ze&&v(M.lightMap.channel),bumpMapUv:Se&&v(M.bumpMap.channel),normalMapUv:We&&v(M.normalMap.channel),displacementMapUv:Re&&v(M.displacementMap.channel),emissiveMapUv:Ke&&v(M.emissiveMap.channel),metalnessMapUv:Ge&&v(M.metalnessMap.channel),roughnessMapUv:O&&v(M.roughnessMap.channel),anisotropyMapUv:Ie&&v(M.anisotropyMap.channel),clearcoatMapUv:Le&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:it&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&v(M.sheenRoughnessMap.channel),specularMapUv:Z&&v(M.specularMap.channel),specularColorMapUv:Q&&v(M.specularColorMap.channel),specularIntensityMapUv:oe&&v(M.specularIntensityMap.channel),transmissionMapUv:B&&v(M.transmissionMap.channel),thicknessMapUv:V&&v(M.thicknessMap.channel),alphaMapUv:re&&v(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(We||I),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!K.attributes.uv&&(ot||re),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ve,skinning:H.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:fe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:ot&&M.map.isVideoTexture===!0&&yt.getTransfer(M.map.colorSpace)===Lt,decodeVideoTextureEmissive:Ke&&M.emissiveMap.isVideoTexture===!0&&yt.getTransfer(M.emissiveMap.colorSpace)===Lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xt,flipSided:M.side===$t,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Fe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&M.extensions.multiDraw===!0||je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function g(M){let _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)_.push(C),_.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(A(_,M),E(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function A(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function E(M,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){let _=x[M.type],C;if(_){let N=mi[_];C=mn.clone(N.uniforms)}else C=M.uniforms;return C}function P(M,_){let C;for(let N=0,H=h.length;N<H;N++){let X=h[N];if(X.cacheKey===_){C=X,++C.usedTimes;break}}return C===void 0&&(C=new hb(i,_,M,r),h.push(C)),C}function w(M){if(--M.usedTimes===0){let _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function S(M){c.remove(M)}function T(){c.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:y,acquireProgram:P,releaseProgram:w,releaseShaderCache:S,programs:h,dispose:T}}function db(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function pb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function zf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,x,v,m){let g=i[e];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:v,group:m},i[e]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=x,g.renderOrder=u.renderOrder,g.z=v,g.group=m),e++,g}function a(u,f,d,x,v,m){let g=o(u,f,d,x,v,m);d.transmission>0?n.push(g):d.transparent===!0?s.push(g):t.push(g)}function c(u,f,d,x,v,m){let g=o(u,f,d,x,v,m);d.transmission>0?n.unshift(g):d.transparent===!0?s.unshift(g):t.unshift(g)}function l(u,f){t.length>1&&t.sort(u||pb),n.length>1&&n.sort(f||zf),s.length>1&&s.sort(f||zf)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function mb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new kf,i.set(n,[o])):s>=r.length?(o=new kf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function gb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Pe};break;case"SpotLight":t={position:new L,direction:new L,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function xb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var vb=0;function bb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function yb(i){let e=new gb,t=xb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new He,o=new He;function a(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,x=0,v=0,m=0,g=0,A=0,E=0,y=0,P=0,w=0,S=0;l.sort(bb);for(let M=0,_=l.length;M<_;M++){let C=l[M],N=C.color,H=C.intensity,X=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=N.r*H,u+=N.g*H,f+=N.b*H;else if(C.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(C.sh.coefficients[F],H);S++}else if(C.isDirectionalLight){let F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=K,n.directionalShadowMatrix[d]=C.shadow.matrix,A++}n.directional[d]=F,d++}else if(C.isSpotLight){let F=e.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(N).multiplyScalar(H),F.distance=X,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,n.spot[v]=F;let j=C.shadow;if(C.map&&(n.spotLightMap[P]=C.map,P++,j.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[v]=j.matrix,C.castShadow){let G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=K,y++}v++}else if(C.isRectAreaLight){let F=e.get(C);F.color.copy(N).multiplyScalar(H),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=F,m++}else if(C.isPointLight){let F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){let j=C.shadow,G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[x]=G,n.pointShadowMap[x]=K,n.pointShadowMatrix[x]=C.shadow.matrix,E++}n.point[x]=F,x++}else if(C.isHemisphereLight){let F=e.get(C);F.skyColor.copy(C.color).multiplyScalar(H),F.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[g]=F,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let T=n.hash;(T.directionalLength!==d||T.pointLength!==x||T.spotLength!==v||T.rectAreaLength!==m||T.hemiLength!==g||T.numDirectionalShadows!==A||T.numPointShadows!==E||T.numSpotShadows!==y||T.numSpotMaps!==P||T.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=x,n.hemi.length=g,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+P-w,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=S,T.directionalLength=d,T.pointLength=x,T.spotLength=v,T.rectAreaLength=m,T.hemiLength=g,T.numDirectionalShadows=A,T.numPointShadows=E,T.numSpotShadows=y,T.numSpotMaps=P,T.numLightProbes=S,n.version=vb++)}function c(l,h){let u=0,f=0,d=0,x=0,v=0,m=h.matrixWorldInverse;for(let g=0,A=l.length;g<A;g++){let E=l[g];if(E.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(E.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(E.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(E.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function Hf(i){let e=new yb(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function _b(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Hf(i),e.set(s,[a])):r>=o.length?(a=new Hf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Fs=class extends Cn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ch=class extends Cn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sb=`uniform sampler2D shadow_pass;
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
}`;function Eb(i,e,t){let n=new Ui,s=new _e,r=new _e,o=new wt,a=new Fs({depthPacking:Ro}),c=new ch,l={},h=t.maxTextureSize,u={[Xn]:$t,[$t]:Xn,[Xt]:Xt},f=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:Mb,fragmentShader:Sb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new Ct;x.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ke(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tc;let g=this.type;this.render=function(w,S,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let M=i.getRenderTarget(),_=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(cn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let H=g!==Pi&&this.type===Pi,X=g===Pi&&this.type!==Pi;for(let K=0,F=w.length;K<F;K++){let j=w[K],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let q=G.getFrameExtents();if(s.multiply(q),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,G.mapSize.y=r.y)),G.map===null||H===!0||X===!0){let $=this.type!==Pi?{minFilter:ln,magFilter:ln}:{};G.map!==null&&G.map.dispose(),G.map=new Zt(s.x,s.y,$),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let ce=G.getViewportCount();for(let $=0;$<ce;$++){let fe=G.getViewport($);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),N.viewport(o),G.updateMatrices(j,$),n=G.getFrustum(),y(S,T,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===Pi&&A(G,T),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(M,_,C)};function A(w,S){let T=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Zt(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(S,null,T,f,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(S,null,T,d,v,null)}function E(w,S,T,M){let _=null,C=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)_=C;else if(_=T.isPointLight===!0?c:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let N=_.uuid,H=S.uuid,X=l[N];X===void 0&&(X={},l[N]=X);let K=X[H];K===void 0&&(K=_.clone(),X[H]=K,S.addEventListener("dispose",P)),_=K}if(_.visible=S.visible,_.wireframe=S.wireframe,M===Pi?_.side=S.shadowSide!==null?S.shadowSide:S.side:_.side=S.shadowSide!==null?S.shadowSide:u[S.side],_.alphaMap=S.alphaMap,_.alphaTest=S.alphaTest,_.map=S.map,_.clipShadows=S.clipShadows,_.clippingPlanes=S.clippingPlanes,_.clipIntersection=S.clipIntersection,_.displacementMap=S.displacementMap,_.displacementScale=S.displacementScale,_.displacementBias=S.displacementBias,_.wireframeLinewidth=S.wireframeLinewidth,_.linewidth=S.linewidth,T.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let N=i.properties.get(_);N.light=T}return _}function y(w,S,T,M,_){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===Pi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);let H=e.update(w),X=w.material;if(Array.isArray(X)){let K=H.groups;for(let F=0,j=K.length;F<j;F++){let G=K[F],q=X[G.materialIndex];if(q&&q.visible){let ce=E(w,q,M,_);w.onBeforeShadow(i,w,S,T,H,ce,G),i.renderBufferDirect(T,null,H,ce,w,G),w.onAfterShadow(i,w,S,T,H,ce,G)}}}else if(X.visible){let K=E(w,X,M,_);w.onBeforeShadow(i,w,S,T,H,K,null),i.renderBufferDirect(T,null,H,K,w,null),w.onAfterShadow(i,w,S,T,H,K,null)}}let N=w.children;for(let H=0,X=N.length;H<X;H++)y(N[H],S,T,M,_)}function P(w){w.target.removeEventListener("dispose",P);for(let T in l){let M=l[T],_=w.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}var wb={[ml]:gl,[xl]:yl,[vl]:_l,[br]:bl,[gl]:ml,[yl]:xl,[_l]:vl,[bl]:br};function Tb(i,e){function t(){let B=!1,V=new wt,W=null,re=new wt(0,0,0,0);return{setMask:function(Ee){W!==Ee&&!B&&(i.colorMask(Ee,Ee,Ee,Ee),W=Ee)},setLocked:function(Ee){B=Ee},setClear:function(Ee,Me,Fe,nt,lt){lt===!0&&(Ee*=nt,Me*=nt,Fe*=nt),V.set(Ee,Me,Fe,nt),re.equals(V)===!1&&(i.clearColor(Ee,Me,Fe,nt),re.copy(V))},reset:function(){B=!1,W=null,re.set(-1,0,0,0)}}}function n(){let B=!1,V=!1,W=null,re=null,Ee=null;return{setReversed:function(Me){if(V!==Me){let Fe=e.get("EXT_clip_control");V?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);let nt=Ee;Ee=null,this.setClear(nt)}V=Me},getReversed:function(){return V},setTest:function(Me){Me?pe(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(Me){W!==Me&&!B&&(i.depthMask(Me),W=Me)},setFunc:function(Me){if(V&&(Me=wb[Me]),re!==Me){switch(Me){case ml:i.depthFunc(i.NEVER);break;case gl:i.depthFunc(i.ALWAYS);break;case xl:i.depthFunc(i.LESS);break;case br:i.depthFunc(i.LEQUAL);break;case vl:i.depthFunc(i.EQUAL);break;case bl:i.depthFunc(i.GEQUAL);break;case yl:i.depthFunc(i.GREATER);break;case _l:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=Me}},setLocked:function(Me){B=Me},setClear:function(Me){Ee!==Me&&(V&&(Me=1-Me),i.clearDepth(Me),Ee=Me)},reset:function(){B=!1,W=null,re=null,Ee=null,V=!1}}}function s(){let B=!1,V=null,W=null,re=null,Ee=null,Me=null,Fe=null,nt=null,lt=null;return{setTest:function(tt){B||(tt?pe(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(tt){V!==tt&&!B&&(i.stencilMask(tt),V=tt)},setFunc:function(tt,xt,Dt){(W!==tt||re!==xt||Ee!==Dt)&&(i.stencilFunc(tt,xt,Dt),W=tt,re=xt,Ee=Dt)},setOp:function(tt,xt,Dt){(Me!==tt||Fe!==xt||nt!==Dt)&&(i.stencilOp(tt,xt,Dt),Me=tt,Fe=xt,nt=Dt)},setLocked:function(tt){B=tt},setClear:function(tt){lt!==tt&&(i.clearStencil(tt),lt=tt)},reset:function(){B=!1,V=null,W=null,re=null,Ee=null,Me=null,Fe=null,nt=null,lt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],x=null,v=!1,m=null,g=null,A=null,E=null,y=null,P=null,w=null,S=new Pe(0,0,0),T=0,M=!1,_=null,C=null,N=null,H=null,X=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,j=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),F=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),F=j>=2);let q=null,ce={},$=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),De=new wt().fromArray($),J=new wt().fromArray(fe);function de(B,V,W,re){let Ee=new Uint8Array(4),Me=i.createTexture();i.bindTexture(B,Me),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<W;Fe++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(V,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(V+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return Me}let ge={};ge[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(i.DEPTH_TEST),o.setFunc(br),Se(!1),We(Gu),pe(i.CULL_FACE),z(cn);function pe(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function ve(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Ye(B,V){return u[B]!==V?(i.bindFramebuffer(B,V),u[B]=V,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=V),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=V),!0):!1}function je(B,V){let W=d,re=!1;if(B){W=f.get(V),W===void 0&&(W=[],f.set(V,W));let Ee=B.textures;if(W.length!==Ee.length||W[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,Fe=Ee.length;Me<Fe;Me++)W[Me]=i.COLOR_ATTACHMENT0+Me;W.length=Ee.length,re=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,re=!0);re&&i.drawBuffers(W)}function ot(B){return x!==B?(i.useProgram(B),x=B,!0):!1}let le={[Vn]:i.FUNC_ADD,[Yp]:i.FUNC_SUBTRACT,[jp]:i.FUNC_REVERSE_SUBTRACT};le[Zp]=i.MIN,le[Kp]=i.MAX;let ye={[Nr]:i.ZERO,[Jp]:i.ONE,[$p]:i.SRC_COLOR,[dl]:i.SRC_ALPHA,[nm]:i.SRC_ALPHA_SATURATE,[ic]:i.DST_COLOR,[nc]:i.DST_ALPHA,[Qp]:i.ONE_MINUS_SRC_COLOR,[pl]:i.ONE_MINUS_SRC_ALPHA,[tm]:i.ONE_MINUS_DST_COLOR,[em]:i.ONE_MINUS_DST_ALPHA,[im]:i.CONSTANT_COLOR,[sm]:i.ONE_MINUS_CONSTANT_COLOR,[rm]:i.CONSTANT_ALPHA,[om]:i.ONE_MINUS_CONSTANT_ALPHA};function z(B,V,W,re,Ee,Me,Fe,nt,lt,tt){if(B===cn){v===!0&&(ve(i.BLEND),v=!1);return}if(v===!1&&(pe(i.BLEND),v=!0),B!==Uh){if(B!==m||tt!==M){if((g!==Vn||y!==Vn)&&(i.blendEquation(i.FUNC_ADD),g=Vn,y=Vn),tt)switch(B){case mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xi:i.blendFunc(i.ONE,i.ONE);break;case Vu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}A=null,E=null,P=null,w=null,S.set(0,0,0),T=0,m=B,M=tt}return}Ee=Ee||V,Me=Me||W,Fe=Fe||re,(V!==g||Ee!==y)&&(i.blendEquationSeparate(le[V],le[Ee]),g=V,y=Ee),(W!==A||re!==E||Me!==P||Fe!==w)&&(i.blendFuncSeparate(ye[W],ye[re],ye[Me],ye[Fe]),A=W,E=re,P=Me,w=Fe),(nt.equals(S)===!1||lt!==T)&&(i.blendColor(nt.r,nt.g,nt.b,lt),S.copy(nt),T=lt),m=B,M=!1}function Ze(B,V){B.side===Xt?ve(i.CULL_FACE):pe(i.CULL_FACE);let W=B.side===$t;V&&(W=!W),Se(W),B.blending===mr&&B.transparent===!1?z(cn):z(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let re=B.stencilWrite;a.setTest(re),re&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ke(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(B){_!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),_=B)}function We(B){B!==Xp?(pe(i.CULL_FACE),B!==C&&(B===Gu?i.cullFace(i.BACK):B===qp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),C=B}function Re(B){B!==N&&(F&&i.lineWidth(B),N=B)}function Ke(B,V,W){B?(pe(i.POLYGON_OFFSET_FILL),(H!==V||X!==W)&&(i.polygonOffset(V,W),H=V,X=W)):ve(i.POLYGON_OFFSET_FILL)}function Ge(B){B?pe(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function O(B){B===void 0&&(B=i.TEXTURE0+K-1),q!==B&&(i.activeTexture(B),q=B)}function I(B,V,W){W===void 0&&(q===null?W=i.TEXTURE0+K-1:W=q);let re=ce[W];re===void 0&&(re={type:void 0,texture:void 0},ce[W]=re),(re.type!==B||re.texture!==V)&&(q!==W&&(i.activeTexture(W),q=W),i.bindTexture(B,V||ge[B]),re.type=B,re.texture=V)}function te(){let B=ce[q];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function he(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Je(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ve(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $e(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Qe(B){De.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),De.copy(B))}function Xe(B){J.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),J.copy(B))}function Z(B,V){let W=l.get(V);W===void 0&&(W=new WeakMap,l.set(V,W));let re=W.get(B);re===void 0&&(re=i.getUniformBlockIndex(V,B.name),W.set(B,re))}function Q(B,V){let re=l.get(V).get(B);c.get(V)!==re&&(i.uniformBlockBinding(V,re,B.__bindingPointIndex),c.set(V,re))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},q=null,ce={},u={},f=new WeakMap,d=[],x=null,v=!1,m=null,g=null,A=null,E=null,y=null,P=null,w=null,S=new Pe(0,0,0),T=0,M=!1,_=null,C=null,N=null,H=null,X=null,De.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:ve,bindFramebuffer:Ye,drawBuffers:je,useProgram:ot,setBlending:z,setMaterial:Ze,setFlipSided:Se,setCullFace:We,setLineWidth:Re,setPolygonOffset:Ke,setScissorTest:Ge,activeTexture:O,bindTexture:I,unbindTexture:te,compressedTexImage2D:he,compressedTexImage3D:xe,texImage2D:Ve,texImage3D:$e,updateUBOMapping:Z,uniformBlockBinding:Q,texStorage2D:it,texStorage3D:be,texSubImage2D:ue,texSubImage3D:Je,compressedTexSubImage2D:Ie,compressedTexSubImage3D:Le,scissor:Qe,viewport:Xe,reset:oe}}function Gf(i,e,t,n){let s=Ab(n);switch(t){case bd:return i*e;case _d:return i*e;case Md:return i*e*2;case To:return i*e/s.components*s.byteLength;case Wh:return i*e/s.components*s.byteLength;case Sd:return i*e*2/s.components*s.byteLength;case Xh:return i*e*2/s.components*s.byteLength;case yd:return i*e*3/s.components*s.byteLength;case En:return i*e*4/s.components*s.byteLength;case qh:return i*e*4/s.components*s.byteLength;case Ma:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ea:case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wl:case Al:return Math.max(i,16)*Math.max(e,8)/4;case El:case Tl:return Math.max(i,8)*Math.max(e,8)/2;case Rl:case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case kl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ta:case Xl:case ql:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ed:case Yl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case jl:case Zl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ab(i){switch(i){case ai:case gd:return{byteLength:1,components:1};case go:case xd:case tn:return{byteLength:2,components:1};case Gh:case Vh:return{byteLength:2,components:4};case Ns:case Hh:case An:return{byteLength:4,components:1};case vd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Rb(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _e,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,I){return d?new OffscreenCanvas(O,I):xo("canvas")}function v(O,I,te){let he=1,xe=Ge(O);if((xe.width>te||xe.height>te)&&(he=te/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let ue=Math.floor(he*xe.width),Je=Math.floor(he*xe.height);u===void 0&&(u=x(ue,Je));let Ie=I?x(ue,Je):u;return Ie.width=ue,Ie.height=Je,Ie.getContext("2d").drawImage(O,0,0,ue,Je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ue+"x"+Je+")."),Ie}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),O;return O}function m(O){return O.generateMipmaps}function g(O){i.generateMipmap(O)}function A(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(O,I,te,he,xe=!1){if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ue=I;if(I===i.RED&&(te===i.FLOAT&&(ue=i.R32F),te===i.HALF_FLOAT&&(ue=i.R16F),te===i.UNSIGNED_BYTE&&(ue=i.R8)),I===i.RED_INTEGER&&(te===i.UNSIGNED_BYTE&&(ue=i.R8UI),te===i.UNSIGNED_SHORT&&(ue=i.R16UI),te===i.UNSIGNED_INT&&(ue=i.R32UI),te===i.BYTE&&(ue=i.R8I),te===i.SHORT&&(ue=i.R16I),te===i.INT&&(ue=i.R32I)),I===i.RG&&(te===i.FLOAT&&(ue=i.RG32F),te===i.HALF_FLOAT&&(ue=i.RG16F),te===i.UNSIGNED_BYTE&&(ue=i.RG8)),I===i.RG_INTEGER&&(te===i.UNSIGNED_BYTE&&(ue=i.RG8UI),te===i.UNSIGNED_SHORT&&(ue=i.RG16UI),te===i.UNSIGNED_INT&&(ue=i.RG32UI),te===i.BYTE&&(ue=i.RG8I),te===i.SHORT&&(ue=i.RG16I),te===i.INT&&(ue=i.RG32I)),I===i.RGB_INTEGER&&(te===i.UNSIGNED_BYTE&&(ue=i.RGB8UI),te===i.UNSIGNED_SHORT&&(ue=i.RGB16UI),te===i.UNSIGNED_INT&&(ue=i.RGB32UI),te===i.BYTE&&(ue=i.RGB8I),te===i.SHORT&&(ue=i.RGB16I),te===i.INT&&(ue=i.RGB32I)),I===i.RGBA_INTEGER&&(te===i.UNSIGNED_BYTE&&(ue=i.RGBA8UI),te===i.UNSIGNED_SHORT&&(ue=i.RGBA16UI),te===i.UNSIGNED_INT&&(ue=i.RGBA32UI),te===i.BYTE&&(ue=i.RGBA8I),te===i.SHORT&&(ue=i.RGBA16I),te===i.INT&&(ue=i.RGBA32I)),I===i.RGB&&te===i.UNSIGNED_INT_5_9_9_9_REV&&(ue=i.RGB9_E5),I===i.RGBA){let Je=xe?oc:yt.getTransfer(he);te===i.FLOAT&&(ue=i.RGBA32F),te===i.HALF_FLOAT&&(ue=i.RGBA16F),te===i.UNSIGNED_BYTE&&(ue=Je===Lt?i.SRGB8_ALPHA8:i.RGBA8),te===i.UNSIGNED_SHORT_4_4_4_4&&(ue=i.RGBA4),te===i.UNSIGNED_SHORT_5_5_5_1&&(ue=i.RGB5_A1)}return(ue===i.R16F||ue===i.R32F||ue===i.RG16F||ue===i.RG32F||ue===i.RGBA16F||ue===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function y(O,I){let te;return O?I===null||I===Ns||I===ss?te=i.DEPTH24_STENCIL8:I===An?te=i.DEPTH32F_STENCIL8:I===go&&(te=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===Ns||I===ss?te=i.DEPTH_COMPONENT24:I===An?te=i.DEPTH_COMPONENT32F:I===go&&(te=i.DEPTH_COMPONENT16),te}function P(O,I){return m(O)===!0||O.isFramebufferTexture&&O.minFilter!==ln&&O.minFilter!==Jt?Math.log2(Math.max(I.width,I.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?I.mipmaps.length:1}function w(O){let I=O.target;I.removeEventListener("dispose",w),T(I),I.isVideoTexture&&h.delete(I)}function S(O){let I=O.target;I.removeEventListener("dispose",S),_(I)}function T(O){let I=n.get(O);if(I.__webglInit===void 0)return;let te=O.source,he=f.get(te);if(he){let xe=he[I.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&M(O),Object.keys(he).length===0&&f.delete(te)}n.remove(O)}function M(O){let I=n.get(O);i.deleteTexture(I.__webglTexture);let te=O.source,he=f.get(te);delete he[I.__cacheKey],o.memory.textures--}function _(O){let I=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(I.__webglFramebuffer[he]))for(let xe=0;xe<I.__webglFramebuffer[he].length;xe++)i.deleteFramebuffer(I.__webglFramebuffer[he][xe]);else i.deleteFramebuffer(I.__webglFramebuffer[he]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[he])}else{if(Array.isArray(I.__webglFramebuffer))for(let he=0;he<I.__webglFramebuffer.length;he++)i.deleteFramebuffer(I.__webglFramebuffer[he]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let he=0;he<I.__webglColorRenderbuffer.length;he++)I.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[he]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let te=O.textures;for(let he=0,xe=te.length;he<xe;he++){let ue=n.get(te[he]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),o.memory.textures--),n.remove(te[he])}n.remove(O)}let C=0;function N(){C=0}function H(){let O=C;return O>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),C+=1,O}function X(O){let I=[];return I.push(O.wrapS),I.push(O.wrapT),I.push(O.wrapR||0),I.push(O.magFilter),I.push(O.minFilter),I.push(O.anisotropy),I.push(O.internalFormat),I.push(O.format),I.push(O.type),I.push(O.generateMipmaps),I.push(O.premultiplyAlpha),I.push(O.flipY),I.push(O.unpackAlignment),I.push(O.colorSpace),I.join()}function K(O,I){let te=n.get(O);if(O.isVideoTexture&&Re(O),O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){let he=O.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(te,O,I);return}}t.bindTexture(i.TEXTURE_2D,te.__webglTexture,i.TEXTURE0+I)}function F(O,I){let te=n.get(O);if(O.version>0&&te.__version!==O.version){J(te,O,I);return}t.bindTexture(i.TEXTURE_2D_ARRAY,te.__webglTexture,i.TEXTURE0+I)}function j(O,I){let te=n.get(O);if(O.version>0&&te.__version!==O.version){J(te,O,I);return}t.bindTexture(i.TEXTURE_3D,te.__webglTexture,i.TEXTURE0+I)}function G(O,I){let te=n.get(O);if(O.version>0&&te.__version!==O.version){de(te,O,I);return}t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture,i.TEXTURE0+I)}let q={[hn]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[mo]:i.MIRRORED_REPEAT},ce={[ln]:i.NEAREST,[kh]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[Jt]:i.LINEAR,[ao]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},$={[pm]:i.NEVER,[ym]:i.ALWAYS,[mm]:i.LESS,[Td]:i.LEQUAL,[gm]:i.EQUAL,[bm]:i.GEQUAL,[xm]:i.GREATER,[vm]:i.NOTEQUAL};function fe(O,I){if(I.type===An&&e.has("OES_texture_float_linear")===!1&&(I.magFilter===Jt||I.magFilter===ao||I.magFilter===fr||I.magFilter===oi||I.minFilter===Jt||I.minFilter===ao||I.minFilter===fr||I.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,q[I.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,q[I.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,q[I.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,ce[I.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,ce[I.minFilter]),I.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,$[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===ln||I.minFilter!==fr&&I.minFilter!==oi||I.type===An&&e.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){let te=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function De(O,I){let te=!1;O.__webglInit===void 0&&(O.__webglInit=!0,I.addEventListener("dispose",w));let he=I.source,xe=f.get(he);xe===void 0&&(xe={},f.set(he,xe));let ue=X(I);if(ue!==O.__cacheKey){xe[ue]===void 0&&(xe[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,te=!0),xe[ue].usedTimes++;let Je=xe[O.__cacheKey];Je!==void 0&&(xe[O.__cacheKey].usedTimes--,Je.usedTimes===0&&M(I)),O.__cacheKey=ue,O.__webglTexture=xe[ue].texture}return te}function J(O,I,te){let he=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(he=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(he=i.TEXTURE_3D);let xe=De(O,I),ue=I.source;t.bindTexture(he,O.__webglTexture,i.TEXTURE0+te);let Je=n.get(ue);if(ue.version!==Je.__version||xe===!0){t.activeTexture(i.TEXTURE0+te);let Ie=yt.getPrimaries(yt.workingColorSpace),Le=I.colorSpace===gi?null:yt.getPrimaries(I.colorSpace),it=I.colorSpace===gi||Ie===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let be=v(I.image,!1,s.maxTextureSize);be=Ke(I,be);let Ve=r.convert(I.format,I.colorSpace),$e=r.convert(I.type),Qe=E(I.internalFormat,Ve,$e,I.colorSpace,I.isVideoTexture);fe(he,I);let Xe,Z=I.mipmaps,Q=I.isVideoTexture!==!0,oe=Je.__version===void 0||xe===!0,B=ue.dataReady,V=P(I,be);if(I.isDepthTexture)Qe=y(I.format===rs,I.type),oe&&(Q?t.texStorage2D(i.TEXTURE_2D,1,Qe,be.width,be.height):t.texImage2D(i.TEXTURE_2D,0,Qe,be.width,be.height,0,Ve,$e,null));else if(I.isDataTexture)if(Z.length>0){Q&&oe&&t.texStorage2D(i.TEXTURE_2D,V,Qe,Z[0].width,Z[0].height);for(let W=0,re=Z.length;W<re;W++)Xe=Z[W],Q?B&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Xe.width,Xe.height,Ve,$e,Xe.data):t.texImage2D(i.TEXTURE_2D,W,Qe,Xe.width,Xe.height,0,Ve,$e,Xe.data);I.generateMipmaps=!1}else Q?(oe&&t.texStorage2D(i.TEXTURE_2D,V,Qe,be.width,be.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be.width,be.height,Ve,$e,be.data)):t.texImage2D(i.TEXTURE_2D,0,Qe,be.width,be.height,0,Ve,$e,be.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){Q&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,V,Qe,Z[0].width,Z[0].height,be.depth);for(let W=0,re=Z.length;W<re;W++)if(Xe=Z[W],I.format!==En)if(Ve!==null)if(Q){if(B)if(I.layerUpdates.size>0){let Ee=Gf(Xe.width,Xe.height,I.format,I.type);for(let Me of I.layerUpdates){let Fe=Xe.data.subarray(Me*Ee/Xe.data.BYTES_PER_ELEMENT,(Me+1)*Ee/Xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,Me,Xe.width,Xe.height,1,Ve,Fe)}I.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Xe.width,Xe.height,be.depth,Ve,Xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Qe,Xe.width,Xe.height,be.depth,0,Xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Q?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Xe.width,Xe.height,be.depth,Ve,$e,Xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Qe,Xe.width,Xe.height,be.depth,0,Ve,$e,Xe.data)}else{Q&&oe&&t.texStorage2D(i.TEXTURE_2D,V,Qe,Z[0].width,Z[0].height);for(let W=0,re=Z.length;W<re;W++)Xe=Z[W],I.format!==En?Ve!==null?Q?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,Xe.width,Xe.height,Ve,Xe.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Qe,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?B&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Xe.width,Xe.height,Ve,$e,Xe.data):t.texImage2D(i.TEXTURE_2D,W,Qe,Xe.width,Xe.height,0,Ve,$e,Xe.data)}else if(I.isDataArrayTexture)if(Q){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,V,Qe,be.width,be.height,be.depth),B)if(I.layerUpdates.size>0){let W=Gf(be.width,be.height,I.format,I.type);for(let re of I.layerUpdates){let Ee=be.data.subarray(re*W/be.data.BYTES_PER_ELEMENT,(re+1)*W/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,be.width,be.height,1,Ve,$e,Ee)}I.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ve,$e,be.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Qe,be.width,be.height,be.depth,0,Ve,$e,be.data);else if(I.isData3DTexture)Q?(oe&&t.texStorage3D(i.TEXTURE_3D,V,Qe,be.width,be.height,be.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ve,$e,be.data)):t.texImage3D(i.TEXTURE_3D,0,Qe,be.width,be.height,be.depth,0,Ve,$e,be.data);else if(I.isFramebufferTexture){if(oe)if(Q)t.texStorage2D(i.TEXTURE_2D,V,Qe,be.width,be.height);else{let W=be.width,re=be.height;for(let Ee=0;Ee<V;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Qe,W,re,0,Ve,$e,null),W>>=1,re>>=1}}else if(Z.length>0){if(Q&&oe){let W=Ge(Z[0]);t.texStorage2D(i.TEXTURE_2D,V,Qe,W.width,W.height)}for(let W=0,re=Z.length;W<re;W++)Xe=Z[W],Q?B&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Ve,$e,Xe):t.texImage2D(i.TEXTURE_2D,W,Qe,Ve,$e,Xe);I.generateMipmaps=!1}else if(Q){if(oe){let W=Ge(be);t.texStorage2D(i.TEXTURE_2D,V,Qe,W.width,W.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ve,$e,be)}else t.texImage2D(i.TEXTURE_2D,0,Qe,Ve,$e,be);m(I)&&g(he),Je.__version=ue.version,I.onUpdate&&I.onUpdate(I)}O.__version=I.version}function de(O,I,te){if(I.image.length!==6)return;let he=De(O,I),xe=I.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+te);let ue=n.get(xe);if(xe.version!==ue.__version||he===!0){t.activeTexture(i.TEXTURE0+te);let Je=yt.getPrimaries(yt.workingColorSpace),Ie=I.colorSpace===gi?null:yt.getPrimaries(I.colorSpace),Le=I.colorSpace===gi||Je===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let it=I.isCompressedTexture||I.image[0].isCompressedTexture,be=I.image[0]&&I.image[0].isDataTexture,Ve=[];for(let re=0;re<6;re++)!it&&!be?Ve[re]=v(I.image[re],!0,s.maxCubemapSize):Ve[re]=be?I.image[re].image:I.image[re],Ve[re]=Ke(I,Ve[re]);let $e=Ve[0],Qe=r.convert(I.format,I.colorSpace),Xe=r.convert(I.type),Z=E(I.internalFormat,Qe,Xe,I.colorSpace),Q=I.isVideoTexture!==!0,oe=ue.__version===void 0||he===!0,B=xe.dataReady,V=P(I,$e);fe(i.TEXTURE_CUBE_MAP,I);let W;if(it){Q&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,V,Z,$e.width,$e.height);for(let re=0;re<6;re++){W=Ve[re].mipmaps;for(let Ee=0;Ee<W.length;Ee++){let Me=W[Ee];I.format!==En?Qe!==null?Q?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,0,0,Me.width,Me.height,Qe,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,Z,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,0,0,Me.width,Me.height,Qe,Xe,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,Z,Me.width,Me.height,0,Qe,Xe,Me.data)}}}else{if(W=I.mipmaps,Q&&oe){W.length>0&&V++;let re=Ge(Ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,V,Z,re.width,re.height)}for(let re=0;re<6;re++)if(be){Q?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ve[re].width,Ve[re].height,Qe,Xe,Ve[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Z,Ve[re].width,Ve[re].height,0,Qe,Xe,Ve[re].data);for(let Ee=0;Ee<W.length;Ee++){let Fe=W[Ee].image[re].image;Q?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,0,0,Fe.width,Fe.height,Qe,Xe,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,Z,Fe.width,Fe.height,0,Qe,Xe,Fe.data)}}else{Q?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Qe,Xe,Ve[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Z,Qe,Xe,Ve[re]);for(let Ee=0;Ee<W.length;Ee++){let Me=W[Ee];Q?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,0,0,Qe,Xe,Me.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,Z,Qe,Xe,Me.image[re])}}}m(I)&&g(i.TEXTURE_CUBE_MAP),ue.__version=xe.version,I.onUpdate&&I.onUpdate(I)}O.__version=I.version}function ge(O,I,te,he,xe,ue){let Je=r.convert(te.format,te.colorSpace),Ie=r.convert(te.type),Le=E(te.internalFormat,Je,Ie,te.colorSpace),it=n.get(I),be=n.get(te);if(be.__renderTarget=I,!it.__hasExternalTextures){let Ve=Math.max(1,I.width>>ue),$e=Math.max(1,I.height>>ue);xe===i.TEXTURE_3D||xe===i.TEXTURE_2D_ARRAY?t.texImage3D(xe,ue,Le,Ve,$e,I.depth,0,Je,Ie,null):t.texImage2D(xe,ue,Le,Ve,$e,0,Je,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),We(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,xe,be.__webglTexture,0,Se(I)):(xe===i.TEXTURE_2D||xe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,he,xe,be.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(O,I,te){if(i.bindRenderbuffer(i.RENDERBUFFER,O),I.depthBuffer){let he=I.depthTexture,xe=he&&he.isDepthTexture?he.type:null,ue=y(I.stencilBuffer,xe),Je=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=Se(I);We(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,ue,I.width,I.height):te?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,ue,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,ue,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Je,i.RENDERBUFFER,O)}else{let he=I.textures;for(let xe=0;xe<he.length;xe++){let ue=he[xe],Je=r.convert(ue.format,ue.colorSpace),Ie=r.convert(ue.type),Le=E(ue.internalFormat,Je,Ie,ue.colorSpace),it=Se(I);te&&We(I)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,Le,I.width,I.height):We(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,Le,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,Le,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(O,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let he=n.get(I.depthTexture);he.__renderTarget=I,(!he.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),K(I.depthTexture,0);let xe=he.__webglTexture,ue=Se(I);if(I.depthTexture.format===gr)We(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(I.depthTexture.format===rs)We(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Ye(O){let I=n.get(O),te=O.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==O.depthTexture){let he=O.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),he){let xe=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),I.__depthDisposeCallback=xe}I.__boundDepthTexture=he}if(O.depthTexture&&!I.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");ve(I.__webglFramebuffer,O)}else if(te){I.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[he]),I.__webglDepthbuffer[he]===void 0)I.__webglDepthbuffer[he]=i.createRenderbuffer(),pe(I.__webglDepthbuffer[he],O,!1);else{let xe=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=I.__webglDepthbuffer[he];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,ue)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),pe(I.__webglDepthbuffer,O,!1);else{let he=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,xe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(O,I,te){let he=n.get(O);I!==void 0&&ge(he.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),te!==void 0&&Ye(O)}function ot(O){let I=O.texture,te=n.get(O),he=n.get(I);O.addEventListener("dispose",S);let xe=O.textures,ue=O.isWebGLCubeRenderTarget===!0,Je=xe.length>1;if(Je||(he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture()),he.__version=I.version,o.memory.textures++),ue){te.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(I.mipmaps&&I.mipmaps.length>0){te.__webglFramebuffer[Ie]=[];for(let Le=0;Le<I.mipmaps.length;Le++)te.__webglFramebuffer[Ie][Le]=i.createFramebuffer()}else te.__webglFramebuffer[Ie]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ie=0;Ie<I.mipmaps.length;Ie++)te.__webglFramebuffer[Ie]=i.createFramebuffer()}else te.__webglFramebuffer=i.createFramebuffer();if(Je)for(let Ie=0,Le=xe.length;Ie<Le;Ie++){let it=n.get(xe[Ie]);it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture(),o.memory.textures++)}if(O.samples>0&&We(O)===!1){te.__webglMultisampledFramebuffer=i.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Ie=0;Ie<xe.length;Ie++){let Le=xe[Ie];te.__webglColorRenderbuffer[Ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,te.__webglColorRenderbuffer[Ie]);let it=r.convert(Le.format,Le.colorSpace),be=r.convert(Le.type),Ve=E(Le.internalFormat,it,be,Le.colorSpace,O.isXRRenderTarget===!0),$e=Se(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,Ve,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,te.__webglColorRenderbuffer[Ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(te.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(te.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),fe(i.TEXTURE_CUBE_MAP,I);for(let Ie=0;Ie<6;Ie++)if(I.mipmaps&&I.mipmaps.length>0)for(let Le=0;Le<I.mipmaps.length;Le++)ge(te.__webglFramebuffer[Ie][Le],O,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Le);else ge(te.__webglFramebuffer[Ie],O,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);m(I)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Je){for(let Ie=0,Le=xe.length;Ie<Le;Ie++){let it=xe[Ie],be=n.get(it);t.bindTexture(i.TEXTURE_2D,be.__webglTexture),fe(i.TEXTURE_2D,it),ge(te.__webglFramebuffer,O,it,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,0),m(it)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let Ie=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ie=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ie,he.__webglTexture),fe(Ie,I),I.mipmaps&&I.mipmaps.length>0)for(let Le=0;Le<I.mipmaps.length;Le++)ge(te.__webglFramebuffer[Le],O,I,i.COLOR_ATTACHMENT0,Ie,Le);else ge(te.__webglFramebuffer,O,I,i.COLOR_ATTACHMENT0,Ie,0);m(I)&&g(Ie),t.unbindTexture()}O.depthBuffer&&Ye(O)}function le(O){let I=O.textures;for(let te=0,he=I.length;te<he;te++){let xe=I[te];if(m(xe)){let ue=A(O),Je=n.get(xe).__webglTexture;t.bindTexture(ue,Je),g(ue),t.unbindTexture()}}}let ye=[],z=[];function Ze(O){if(O.samples>0){if(We(O)===!1){let I=O.textures,te=O.width,he=O.height,xe=i.COLOR_BUFFER_BIT,ue=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Je=n.get(O),Ie=I.length>1;if(Ie)for(let Le=0;Le<I.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Je.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Je.__webglFramebuffer);for(let Le=0;Le<I.length;Le++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(xe|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(xe|=i.STENCIL_BUFFER_BIT)),Ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Je.__webglColorRenderbuffer[Le]);let it=n.get(I[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,te,he,0,0,te,he,xe,i.NEAREST),c===!0&&(ye.length=0,z.length=0,ye.push(i.COLOR_ATTACHMENT0+Le),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ye.push(ue),z.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ie)for(let Le=0;Le<I.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,Je.__webglColorRenderbuffer[Le]);let it=n.get(I[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,it,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Je.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&c){let I=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function Se(O){return Math.min(s.maxSamples,O.samples)}function We(O){let I=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Re(O){let I=o.render.frame;h.get(O)!==I&&(h.set(O,I),O.update())}function Ke(O,I){let te=O.colorSpace,he=O.format,xe=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||te!==pn&&te!==gi&&(yt.getTransfer(te)===Lt?(he!==En||xe!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),I}function Ge(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.setTexture2D=K,this.setTexture2DArray=F,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=je,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=We}function Cb(i,e){function t(n,s=gi){let r,o=yt.getTransfer(s);if(n===ai)return i.UNSIGNED_BYTE;if(n===Gh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gd)return i.BYTE;if(n===xd)return i.SHORT;if(n===go)return i.UNSIGNED_SHORT;if(n===Hh)return i.INT;if(n===Ns)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===tn)return i.HALF_FLOAT;if(n===bd)return i.ALPHA;if(n===yd)return i.RGB;if(n===En)return i.RGBA;if(n===_d)return i.LUMINANCE;if(n===Md)return i.LUMINANCE_ALPHA;if(n===gr)return i.DEPTH_COMPONENT;if(n===rs)return i.DEPTH_STENCIL;if(n===To)return i.RED;if(n===Wh)return i.RED_INTEGER;if(n===Sd)return i.RG;if(n===Xh)return i.RG_INTEGER;if(n===qh)return i.RGBA_INTEGER;if(n===Ma||n===Sa||n===Ea||n===wa)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===El||n===wl||n===Tl||n===Al)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===El)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rl||n===Cl||n===Pl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rl||n===Cl)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Il||n===Dl||n===Ll||n===Ul||n===Nl||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Hl||n===Gl||n===Vl||n===Wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Il)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ll)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ul)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ta||n===Xl||n===ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ta)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ed||n===Yl||n===jl||n===Zl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ta)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var lh=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ft=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pb={type:"move"},ho=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),g=this._getHandJoint(l,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;l.inputState.pinching&&f>d+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pb)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ib=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Db=`
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

}`,hh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new sn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Pt({vertexShader:Ib,fragmentShader:Db,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new Tt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uh=class extends os{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,x=null,v=new hh,m=t.getContextAttributes(),g=null,A=null,E=[],y=[],P=new _e,w=null,S=new en;S.viewport=new wt;let T=new en;T.viewport=new wt;let M=[S,T],_=new lh,C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let de=E[J];return de===void 0&&(de=new ho,E[J]=de),de.getTargetRaySpace()},this.getControllerGrip=function(J){let de=E[J];return de===void 0&&(de=new ho,E[J]=de),de.getGripSpace()},this.getHand=function(J){let de=E[J];return de===void 0&&(de=new ho,E[J]=de),de.getHandSpace()};function H(J){let de=y.indexOf(J.inputSource);if(de===-1)return;let ge=E[de];ge!==void 0&&(ge.update(J.inputSource,J.frame,l||o),ge.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",K);for(let J=0;J<E.length;J++){let de=y[J];de!==null&&(y[J]=null,E[J].disconnect(de))}C=null,N=null,v.reset(),e.setRenderTarget(g),d=null,f=null,u=null,s=null,A=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",X),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){let de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Zt(d.framebufferWidth,d.framebufferHeight,{format:En,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,ge=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?rs:gr,ge=m.stencil?ss:Ns);let ve={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(ve),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Zt(f.textureWidth,f.textureHeight,{format:En,type:ai,depthTexture:new ls(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),De.setContext(s),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(J){for(let de=0;de<J.removed.length;de++){let ge=J.removed[de],pe=y.indexOf(ge);pe>=0&&(y[pe]=null,E[pe].disconnect(ge))}for(let de=0;de<J.added.length;de++){let ge=J.added[de],pe=y.indexOf(ge);if(pe===-1){for(let Ye=0;Ye<E.length;Ye++)if(Ye>=y.length){y.push(ge),pe=Ye;break}else if(y[Ye]===null){y[Ye]=ge,pe=Ye;break}if(pe===-1)break}let ve=E[pe];ve&&ve.connect(ge)}}let F=new L,j=new L;function G(J,de,ge){F.setFromMatrixPosition(de.matrixWorld),j.setFromMatrixPosition(ge.matrixWorld);let pe=F.distanceTo(j),ve=de.projectionMatrix.elements,Ye=ge.projectionMatrix.elements,je=ve[14]/(ve[10]-1),ot=ve[14]/(ve[10]+1),le=(ve[9]+1)/ve[5],ye=(ve[9]-1)/ve[5],z=(ve[8]-1)/ve[0],Ze=(Ye[8]+1)/Ye[0],Se=je*z,We=je*Ze,Re=pe/(-z+Ze),Ke=Re*-z;if(de.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ke),J.translateZ(Re),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ve[10]===-1)J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let Ge=je+Re,O=ot+Re,I=Se-Ke,te=We+(pe-Ke),he=le*ot/O*Ge,xe=ye*ot/O*Ge;J.projectionMatrix.makePerspective(I,te,he,xe,Ge,O),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function q(J,de){de===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(de.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let de=J.near,ge=J.far;v.texture!==null&&(v.depthNear>0&&(de=v.depthNear),v.depthFar>0&&(ge=v.depthFar)),_.near=T.near=S.near=de,_.far=T.far=S.far=ge,(C!==_.near||N!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,N=_.far),S.layers.mask=J.layers.mask|2,T.layers.mask=J.layers.mask|4,_.layers.mask=S.layers.mask|T.layers.mask;let pe=J.parent,ve=_.cameras;q(_,pe);for(let Ye=0;Ye<ve.length;Ye++)q(ve[Ye],pe);ve.length===2?G(_,S,T):_.projectionMatrix.copy(S.projectionMatrix),ce(J,_,pe)};function ce(J,de,ge){ge===null?J.matrix.copy(de.matrixWorld):(J.matrix.copy(ge.matrixWorld),J.matrix.invert(),J.matrix.multiply(de.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Er*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let $=null;function fe(J,de){if(h=de.getViewerPose(l||o),x=de,h!==null){let ge=h.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let pe=!1;ge.length!==_.cameras.length&&(_.cameras.length=0,pe=!0);for(let Ye=0;Ye<ge.length;Ye++){let je=ge[Ye],ot=null;if(d!==null)ot=d.getViewport(je);else{let ye=u.getViewSubImage(f,je);ot=ye.viewport,Ye===0&&(e.setRenderTargetTextures(A,ye.colorTexture,f.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(A))}let le=M[Ye];le===void 0&&(le=new en,le.layers.enable(Ye),le.viewport=new wt,M[Ye]=le),le.matrix.fromArray(je.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(je.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(ot.x,ot.y,ot.width,ot.height),Ye===0&&(_.matrix.copy(le.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),pe===!0&&_.cameras.push(le)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")){let Ye=u.getDepthInformation(ge[0]);Ye&&Ye.isValid&&Ye.texture&&v.init(e,Ye,s.renderState)}}for(let ge=0;ge<E.length;ge++){let pe=y[ge],ve=E[ge];pe!==null&&ve!==void 0&&ve.update(pe,de,l||o)}$&&$(J,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),x=null}let De=new Pd;De.setAnimationLoop(fe),this.setAnimationLoop=function(J){$=J},this.dispose=function(){}}},Ds=new qn,Lb=new He;function Ub(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Cd(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,A,E,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),x(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,A,E):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===$t&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===$t&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let A=e.get(g),E=A.envMap,y=A.envMapRotation;E&&(m.envMap.value=E,Ds.copy(y),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),m.envMapRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(Ds)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,A,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*A,m.scale.value=E*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,A){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$t&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let A=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Nb(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,E){let y=E.program;n.uniformBlockBinding(A,y)}function l(A,E){let y=s[A.id];y===void 0&&(x(A),y=h(A),s[A.id]=y,A.addEventListener("dispose",m));let P=E.program;n.updateUBOMapping(A,P);let w=e.render.frame;r[A.id]!==w&&(f(A),r[A.id]=w)}function h(A){let E=u();A.__bindingPointIndex=E;let y=i.createBuffer(),P=A.__size,w=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,P,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function u(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){let E=s[A.id],y=A.uniforms,P=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,S=y.length;w<S;w++){let T=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,_=T.length;M<_;M++){let C=T[M];if(d(C,w,M,P)===!0){let N=C.__offset,H=Array.isArray(C.value)?C.value:[C.value],X=0;for(let K=0;K<H.length;K++){let F=H[K],j=v(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,N+X,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):(F.toArray(C.__data,X),X+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(A,E,y,P){let w=A.value,S=E+"_"+y;if(P[S]===void 0)return typeof w=="number"||typeof w=="boolean"?P[S]=w:P[S]=w.clone(),!0;{let T=P[S];if(typeof w=="number"||typeof w=="boolean"){if(T!==w)return P[S]=w,!0}else if(T.equals(w)===!1)return T.copy(w),!0}return!1}function x(A){let E=A.uniforms,y=0,P=16;for(let S=0,T=E.length;S<T;S++){let M=Array.isArray(E[S])?E[S]:[E[S]];for(let _=0,C=M.length;_<C;_++){let N=M[_],H=Array.isArray(N.value)?N.value:[N.value];for(let X=0,K=H.length;X<K;X++){let F=H[X],j=v(F),G=y%P,q=G%j.boundary,ce=G+q;y+=q,ce!==0&&P-ce<j.storage&&(y+=P-ce),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=j.storage}}}let w=y%P;return w>0&&(y+=P-w),A.__size=y,A.__cache={},this}function v(A){let E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function m(A){let E=A.target;E.removeEventListener("dispose",m);let y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(let A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:c,update:l,dispose:g}}var Na=class{constructor(e={}){let{canvas:t=Om(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let x=new Uint32Array(4),v=new Int32Array(4),m=null,g=null,A=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this.toneMapping=is,this.toneMappingExposure=1;let y=this,P=!1,w=0,S=0,T=null,M=-1,_=null,C=new wt,N=new wt,H=null,X=new Pe(0),K=0,F=t.width,j=t.height,G=1,q=null,ce=null,$=new wt(0,0,F,j),fe=new wt(0,0,F,j),De=!1,J=new Ui,de=!1,ge=!1,pe=new He,ve=new He,Ye=new L,je=new wt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function ye(){return T===null?G:1}let z=n;function Ze(p,b){return t.getContext(p,b)}try{let p={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dh}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Me,!1),z===null){let b="webgl2";if(z=Ze(b,p),z===null)throw Ze(b)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(p){throw console.error("THREE.WebGLRenderer: "+p.message),p}let Se,We,Re,Ke,Ge,O,I,te,he,xe,ue,Je,Ie,Le,it,be,Ve,$e,Qe,Xe,Z,Q,oe,B;function V(){Se=new Jx(z),Se.init(),Q=new Cb(z,Se),We=new Xx(z,Se,e,Q),Re=new Tb(z,Se),We.reverseDepthBuffer&&f&&Re.buffers.depth.setReversed(!0),Ke=new ev(z),Ge=new db,O=new Rb(z,Se,Re,Ge,We,Q,Ke),I=new Yx(y),te=new Kx(y),he=new a0(z),oe=new Vx(z,he),xe=new $x(z,he,Ke,oe),ue=new nv(z,xe,he,Ke),Qe=new tv(z,We,O),be=new qx(Ge),Je=new fb(y,I,te,Se,We,oe,be),Ie=new Ub(y,Ge),Le=new mb,it=new _b(Se),$e=new Gx(y,I,te,Re,ue,d,c),Ve=new Eb(y,ue,We),B=new Nb(z,Ke,We,Re),Xe=new Wx(z,Se,Ke),Z=new Qx(z,Se,Ke),Ke.programs=Je.programs,y.capabilities=We,y.extensions=Se,y.properties=Ge,y.renderLists=Le,y.shadowMap=Ve,y.state=Re,y.info=Ke}V();let W=new uh(y,z);this.xr=W,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let p=Se.get("WEBGL_lose_context");p&&p.loseContext()},this.forceContextRestore=function(){let p=Se.get("WEBGL_lose_context");p&&p.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(p){p!==void 0&&(G=p,this.setSize(F,j,!1))},this.getSize=function(p){return p.set(F,j)},this.setSize=function(p,b,R=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=p,j=b,t.width=Math.floor(p*G),t.height=Math.floor(b*G),R===!0&&(t.style.width=p+"px",t.style.height=b+"px"),this.setViewport(0,0,p,b)},this.getDrawingBufferSize=function(p){return p.set(F*G,j*G).floor()},this.setDrawingBufferSize=function(p,b,R){F=p,j=b,G=R,t.width=Math.floor(p*R),t.height=Math.floor(b*R),this.setViewport(0,0,p,b)},this.getCurrentViewport=function(p){return p.copy(C)},this.getViewport=function(p){return p.copy($)},this.setViewport=function(p,b,R,D){p.isVector4?$.set(p.x,p.y,p.z,p.w):$.set(p,b,R,D),Re.viewport(C.copy($).multiplyScalar(G).round())},this.getScissor=function(p){return p.copy(fe)},this.setScissor=function(p,b,R,D){p.isVector4?fe.set(p.x,p.y,p.z,p.w):fe.set(p,b,R,D),Re.scissor(N.copy(fe).multiplyScalar(G).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(p){Re.setScissorTest(De=p)},this.setOpaqueSort=function(p){q=p},this.setTransparentSort=function(p){ce=p},this.getClearColor=function(p){return p.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(p=!0,b=!0,R=!0){let D=0;if(p){let U=!1;if(T!==null){let k=T.texture.format;U=k===qh||k===Xh||k===Wh}if(U){let k=T.texture.type,Y=k===ai||k===Ns||k===go||k===ss||k===Gh||k===Vh,ie=$e.getClearColor(),ee=$e.getClearAlpha(),ne=ie.r,se=ie.g,ae=ie.b;Y?(x[0]=ne,x[1]=se,x[2]=ae,x[3]=ee,z.clearBufferuiv(z.COLOR,0,x)):(v[0]=ne,v[1]=se,v[2]=ae,v[3]=ee,z.clearBufferiv(z.COLOR,0,v))}else D|=z.COLOR_BUFFER_BIT}b&&(D|=z.DEPTH_BUFFER_BIT),R&&(D|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Le.dispose(),it.dispose(),Ge.dispose(),I.dispose(),te.dispose(),ue.dispose(),oe.dispose(),B.dispose(),Je.dispose(),W.dispose(),W.removeEventListener("sessionstart",Ut),W.removeEventListener("sessionend",ht),Ht.stop()};function re(p){p.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let p=Ke.autoReset,b=Ve.enabled,R=Ve.autoUpdate,D=Ve.needsUpdate,U=Ve.type;V(),Ke.autoReset=p,Ve.enabled=b,Ve.autoUpdate=R,Ve.needsUpdate=D,Ve.type=U}function Me(p){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",p.statusMessage)}function Fe(p){let b=p.target;b.removeEventListener("dispose",Fe),nt(b)}function nt(p){lt(p),Ge.remove(p)}function lt(p){let b=Ge.get(p).programs;b!==void 0&&(b.forEach(function(R){Je.releaseProgram(R)}),p.isShaderMaterial&&Je.releaseShaderCache(p))}this.renderBufferDirect=function(p,b,R,D,U,k){b===null&&(b=ot);let Y=U.isMesh&&U.matrixWorld.determinant()<0,ie=et(p,b,R,D,U);Re.setMaterial(D,Y);let ee=R.index,ne=1;if(D.wireframe===!0){if(ee=xe.getWireframeAttribute(R),ee===void 0)return;ne=2}let se=R.drawRange,ae=R.attributes.position,Te=se.start*ne,Ae=(se.start+se.count)*ne;k!==null&&(Te=Math.max(Te,k.start*ne),Ae=Math.min(Ae,(k.start+k.count)*ne)),ee!==null?(Te=Math.max(Te,0),Ae=Math.min(Ae,ee.count)):ae!=null&&(Te=Math.max(Te,0),Ae=Math.min(Ae,ae.count));let Oe=Ae-Te;if(Oe<0||Oe===1/0)return;oe.setup(U,D,ie,R,ee);let Ue,Ce=Xe;if(ee!==null&&(Ue=he.get(ee),Ce=Z,Ce.setIndex(Ue)),U.isMesh)D.wireframe===!0?(Re.setLineWidth(D.wireframeLinewidth*ye()),Ce.setMode(z.LINES)):Ce.setMode(z.TRIANGLES);else if(U.isLine){let we=D.linewidth;we===void 0&&(we=1),Re.setLineWidth(we*ye()),U.isLineSegments?Ce.setMode(z.LINES):U.isLineLoop?Ce.setMode(z.LINE_LOOP):Ce.setMode(z.LINE_STRIP)}else U.isPoints?Ce.setMode(z.POINTS):U.isSprite&&Ce.setMode(z.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ce.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))Ce.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let we=U._multiDrawStarts,vt=U._multiDrawCounts,st=U._multiDrawCount,qt=ee?he.get(ee).bytesPerElement:1,Rt=Ge.get(D).currentProgram.getUniforms();for(let ct=0;ct<st;ct++)Rt.setValue(z,"_gl_DrawID",ct),Ce.render(we[ct]/qt,vt[ct])}else if(U.isInstancedMesh)Ce.renderInstances(Te,Oe,U.count);else if(R.isInstancedBufferGeometry){let we=R._maxInstanceCount!==void 0?R._maxInstanceCount:1/0,vt=Math.min(R.instanceCount,we);Ce.renderInstances(Te,Oe,vt)}else Ce.render(Te,Oe)};function tt(p,b,R){p.transparent===!0&&p.side===Xt&&p.forceSinglePass===!1?(p.side=$t,p.needsUpdate=!0,Si(p,b,R),p.side=Xn,p.needsUpdate=!0,Si(p,b,R),p.side=Xt):Si(p,b,R)}this.compile=function(p,b,R=null){R===null&&(R=p),g=it.get(R),g.init(b),E.push(g),R.traverseVisible(function(U){U.isLight&&U.layers.test(b.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),p!==R&&p.traverseVisible(function(U){U.isLight&&U.layers.test(b.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),g.setupLights();let D=new Set;return p.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let k=U.material;if(k)if(Array.isArray(k))for(let Y=0;Y<k.length;Y++){let ie=k[Y];tt(ie,R,U),D.add(ie)}else tt(k,R,U),D.add(k)}),E.pop(),g=null,D},this.compileAsync=function(p,b,R=null){let D=this.compile(p,b,R);return new Promise(U=>{function k(){if(D.forEach(function(Y){Ge.get(Y).currentProgram.isReady()&&D.delete(Y)}),D.size===0){U(p);return}setTimeout(k,10)}Se.get("KHR_parallel_shader_compile")!==null?k():setTimeout(k,10)})};let xt=null;function Dt(p){xt&&xt(p)}function Ut(){Ht.stop()}function ht(){Ht.start()}let Ht=new Pd;Ht.setAnimationLoop(Dt),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(p){xt=p,W.setAnimationLoop(p),p===null?Ht.stop():Ht.start()},W.addEventListener("sessionstart",Ut),W.addEventListener("sessionend",ht),this.render=function(p,b){if(b!==void 0&&b.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(b),b=W.getCamera()),p.isScene===!0&&p.onBeforeRender(y,p,b,T),g=it.get(p,E.length),g.init(b),E.push(g),ve.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),J.setFromProjectionMatrix(ve),ge=this.localClippingEnabled,de=be.init(this.clippingPlanes,ge),m=Le.get(p,A.length),m.init(),A.push(m),W.enabled===!0&&W.isPresenting===!0){let k=y.xr.getDepthSensingMesh();k!==null&&Ln(k,b,-1/0,y.sortObjects)}Ln(p,b,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(q,ce),le=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,le&&$e.addToRenderList(m,p),this.info.render.frame++,de===!0&&be.beginShadows();let R=g.state.shadowsArray;Ve.render(R,p,b),de===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();let D=m.opaque,U=m.transmissive;if(g.setupLights(),b.isArrayCamera){let k=b.cameras;if(U.length>0)for(let Y=0,ie=k.length;Y<ie;Y++){let ee=k[Y];ws(D,U,p,ee)}le&&$e.render(p);for(let Y=0,ie=k.length;Y<ie;Y++){let ee=k[Y];pi(m,p,ee,ee.viewport)}}else U.length>0&&ws(D,U,p,b),le&&$e.render(p),pi(m,p,b);T!==null&&(O.updateMultisampleRenderTarget(T),O.updateRenderTargetMipmap(T)),p.isScene===!0&&p.onAfterRender(y,p,b),oe.resetDefaultState(),M=-1,_=null,E.pop(),E.length>0?(g=E[E.length-1],de===!0&&be.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Ln(p,b,R,D){if(p.visible===!1)return;if(p.layers.test(b.layers)){if(p.isGroup)R=p.renderOrder;else if(p.isLOD)p.autoUpdate===!0&&p.update(b);else if(p.isLight)g.pushLight(p),p.castShadow&&g.pushShadow(p);else if(p.isSprite){if(!p.frustumCulled||J.intersectsSprite(p)){D&&je.setFromMatrixPosition(p.matrixWorld).applyMatrix4(ve);let Y=ue.update(p),ie=p.material;ie.visible&&m.push(p,Y,ie,R,je.z,null)}}else if((p.isMesh||p.isLine||p.isPoints)&&(!p.frustumCulled||J.intersectsObject(p))){let Y=ue.update(p),ie=p.material;if(D&&(p.boundingSphere!==void 0?(p.boundingSphere===null&&p.computeBoundingSphere(),je.copy(p.boundingSphere.center)):(Y.boundingSphere===null&&Y.computeBoundingSphere(),je.copy(Y.boundingSphere.center)),je.applyMatrix4(p.matrixWorld).applyMatrix4(ve)),Array.isArray(ie)){let ee=Y.groups;for(let ne=0,se=ee.length;ne<se;ne++){let ae=ee[ne],Te=ie[ae.materialIndex];Te&&Te.visible&&m.push(p,Y,Te,R,je.z,ae)}}else ie.visible&&m.push(p,Y,ie,R,je.z,null)}}let k=p.children;for(let Y=0,ie=k.length;Y<ie;Y++)Ln(k[Y],b,R,D)}function pi(p,b,R,D){let U=p.opaque,k=p.transmissive,Y=p.transparent;g.setupLightsView(R),de===!0&&be.setGlobalState(y.clippingPlanes,R),D&&Re.viewport(C.copy(D)),U.length>0&&ji(U,b,R),k.length>0&&ji(k,b,R),Y.length>0&&ji(Y,b,R),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function ws(p,b,R,D){if((R.isScene===!0?R.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[D.id]===void 0&&(g.state.transmissionRenderTarget[D.id]=new Zt(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?tn:ai,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));let k=g.state.transmissionRenderTarget[D.id],Y=D.viewport||C;k.setSize(Y.z,Y.w);let ie=y.getRenderTarget();y.setRenderTarget(k),y.getClearColor(X),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),le&&$e.render(R);let ee=y.toneMapping;y.toneMapping=is;let ne=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),g.setupLightsView(D),de===!0&&be.setGlobalState(y.clippingPlanes,D),ji(p,R,D),O.updateMultisampleRenderTarget(k),O.updateRenderTargetMipmap(k),Se.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let ae=0,Te=b.length;ae<Te;ae++){let Ae=b[ae],Oe=Ae.object,Ue=Ae.geometry,Ce=Ae.material,we=Ae.group;if(Ce.side===Xt&&Oe.layers.test(D.layers)){let vt=Ce.side;Ce.side=$t,Ce.needsUpdate=!0,qs(Oe,R,D,Ue,Ce,we),Ce.side=vt,Ce.needsUpdate=!0,se=!0}}se===!0&&(O.updateMultisampleRenderTarget(k),O.updateRenderTargetMipmap(k))}y.setRenderTarget(ie),y.setClearColor(X,K),ne!==void 0&&(D.viewport=ne),y.toneMapping=ee}function ji(p,b,R){let D=b.isScene===!0?b.overrideMaterial:null;for(let U=0,k=p.length;U<k;U++){let Y=p[U],ie=Y.object,ee=Y.geometry,ne=D===null?Y.material:D,se=Y.group;ie.layers.test(R.layers)&&qs(ie,b,R,ee,ne,se)}}function qs(p,b,R,D,U,k){p.onBeforeRender(y,b,R,D,U,k),p.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,p.matrixWorld),p.normalMatrix.getNormalMatrix(p.modelViewMatrix),U.onBeforeRender(y,b,R,D,p,k),U.transparent===!0&&U.side===Xt&&U.forceSinglePass===!1?(U.side=$t,U.needsUpdate=!0,y.renderBufferDirect(R,b,D,U,p,k),U.side=Xn,U.needsUpdate=!0,y.renderBufferDirect(R,b,D,U,p,k),U.side=Xt):y.renderBufferDirect(R,b,D,U,p,k),p.onAfterRender(y,b,R,D,U,k)}function Si(p,b,R){b.isScene!==!0&&(b=ot);let D=Ge.get(p),U=g.state.lights,k=g.state.shadowsArray,Y=U.state.version,ie=Je.getParameters(p,U.state,k,b,R),ee=Je.getProgramCacheKey(ie),ne=D.programs;D.environment=p.isMeshStandardMaterial?b.environment:null,D.fog=b.fog,D.envMap=(p.isMeshStandardMaterial?te:I).get(p.envMap||D.environment),D.envMapRotation=D.environment!==null&&p.envMap===null?b.environmentRotation:p.envMapRotation,ne===void 0&&(p.addEventListener("dispose",Fe),ne=new Map,D.programs=ne);let se=ne.get(ee);if(se!==void 0){if(D.currentProgram===se&&D.lightsStateVersion===Y)return me(p,ie),se}else ie.uniforms=Je.getUniforms(p),p.onBeforeCompile(ie,y),se=Je.acquireProgram(ie,ee),ne.set(ee,se),D.uniforms=ie.uniforms;let ae=D.uniforms;return(!p.isShaderMaterial&&!p.isRawShaderMaterial||p.clipping===!0)&&(ae.clippingPlanes=be.uniform),me(p,ie),D.needsLights=at(p),D.lightsStateVersion=Y,D.needsLights&&(ae.ambientLightColor.value=U.state.ambient,ae.lightProbe.value=U.state.probe,ae.directionalLights.value=U.state.directional,ae.directionalLightShadows.value=U.state.directionalShadow,ae.spotLights.value=U.state.spot,ae.spotLightShadows.value=U.state.spotShadow,ae.rectAreaLights.value=U.state.rectArea,ae.ltc_1.value=U.state.rectAreaLTC1,ae.ltc_2.value=U.state.rectAreaLTC2,ae.pointLights.value=U.state.point,ae.pointLightShadows.value=U.state.pointShadow,ae.hemisphereLights.value=U.state.hemi,ae.directionalShadowMap.value=U.state.directionalShadowMap,ae.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ae.spotShadowMap.value=U.state.spotShadowMap,ae.spotLightMatrix.value=U.state.spotLightMatrix,ae.spotLightMap.value=U.state.spotLightMap,ae.pointShadowMap.value=U.state.pointShadowMap,ae.pointShadowMatrix.value=U.state.pointShadowMatrix),D.currentProgram=se,D.uniformsList=null,se}function Ts(p){if(p.uniformsList===null){let b=p.currentProgram.getUniforms();p.uniformsList=vr.seqWithValue(b.seq,p.uniforms)}return p.uniformsList}function me(p,b){let R=Ge.get(p);R.outputColorSpace=b.outputColorSpace,R.batching=b.batching,R.batchingColor=b.batchingColor,R.instancing=b.instancing,R.instancingColor=b.instancingColor,R.instancingMorph=b.instancingMorph,R.skinning=b.skinning,R.morphTargets=b.morphTargets,R.morphNormals=b.morphNormals,R.morphColors=b.morphColors,R.morphTargetsCount=b.morphTargetsCount,R.numClippingPlanes=b.numClippingPlanes,R.numIntersection=b.numClipIntersection,R.vertexAlphas=b.vertexAlphas,R.vertexTangents=b.vertexTangents,R.toneMapping=b.toneMapping}function et(p,b,R,D,U){b.isScene!==!0&&(b=ot),O.resetTextureUnits();let k=b.fog,Y=D.isMeshStandardMaterial?b.environment:null,ie=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:pn,ee=(D.isMeshStandardMaterial?te:I).get(D.envMap||Y),ne=D.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,se=!!R.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),ae=!!R.morphAttributes.position,Te=!!R.morphAttributes.normal,Ae=!!R.morphAttributes.color,Oe=is;D.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Oe=y.toneMapping);let Ue=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Ce=Ue!==void 0?Ue.length:0,we=Ge.get(D),vt=g.state.lights;if(de===!0&&(ge===!0||p!==_)){let mt=p===_&&D.id===M;be.setState(D,p,mt)}let st=!1;D.version===we.__version?(we.needsLights&&we.lightsStateVersion!==vt.state.version||we.outputColorSpace!==ie||U.isBatchedMesh&&we.batching===!1||!U.isBatchedMesh&&we.batching===!0||U.isBatchedMesh&&we.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&we.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&we.instancing===!1||!U.isInstancedMesh&&we.instancing===!0||U.isSkinnedMesh&&we.skinning===!1||!U.isSkinnedMesh&&we.skinning===!0||U.isInstancedMesh&&we.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&we.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&we.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&we.instancingMorph===!1&&U.morphTexture!==null||we.envMap!==ee||D.fog===!0&&we.fog!==k||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==be.numPlanes||we.numIntersection!==be.numIntersection)||we.vertexAlphas!==ne||we.vertexTangents!==se||we.morphTargets!==ae||we.morphNormals!==Te||we.morphColors!==Ae||we.toneMapping!==Oe||we.morphTargetsCount!==Ce)&&(st=!0):(st=!0,we.__version=D.version);let qt=we.currentProgram;st===!0&&(qt=Si(D,b,U));let Rt=!1,ct=!1,Yt=!1,bt=qt.getUniforms(),Nt=we.uniforms;if(Re.useProgram(qt.program)&&(Rt=!0,ct=!0,Yt=!0),D.id!==M&&(M=D.id,ct=!0),Rt||_!==p){Re.buffers.depth.getReversed()?(pe.copy(p.projectionMatrix),zm(pe),km(pe),bt.setValue(z,"projectionMatrix",pe)):bt.setValue(z,"projectionMatrix",p.projectionMatrix),bt.setValue(z,"viewMatrix",p.matrixWorldInverse);let vn=bt.map.cameraPosition;vn!==void 0&&vn.setValue(z,Ye.setFromMatrixPosition(p.matrixWorld)),We.logarithmicDepthBuffer&&bt.setValue(z,"logDepthBufFC",2/(Math.log(p.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&bt.setValue(z,"isOrthographic",p.isOrthographicCamera===!0),_!==p&&(_=p,ct=!0,Yt=!0)}if(U.isSkinnedMesh){bt.setOptional(z,U,"bindMatrix"),bt.setOptional(z,U,"bindMatrixInverse");let mt=U.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),bt.setValue(z,"boneTexture",mt.boneTexture,O))}U.isBatchedMesh&&(bt.setOptional(z,U,"batchingTexture"),bt.setValue(z,"batchingTexture",U._matricesTexture,O),bt.setOptional(z,U,"batchingIdTexture"),bt.setValue(z,"batchingIdTexture",U._indirectTexture,O),bt.setOptional(z,U,"batchingColorTexture"),U._colorsTexture!==null&&bt.setValue(z,"batchingColorTexture",U._colorsTexture,O));let Et=R.morphAttributes;if((Et.position!==void 0||Et.normal!==void 0||Et.color!==void 0)&&Qe.update(U,R,qt),(ct||we.receiveShadow!==U.receiveShadow)&&(we.receiveShadow=U.receiveShadow,bt.setValue(z,"receiveShadow",U.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Nt.envMap.value=ee,Nt.flipEnvMap.value=ee.isCubeTexture&&ee.isRenderTargetTexture===!1?-1:1),D.isMeshStandardMaterial&&D.envMap===null&&b.environment!==null&&(Nt.envMapIntensity.value=b.environmentIntensity),ct&&(bt.setValue(z,"toneMappingExposure",y.toneMappingExposure),we.needsLights&&qe(Nt,Yt),k&&D.fog===!0&&Ie.refreshFogUniforms(Nt,k),Ie.refreshMaterialUniforms(Nt,D,G,j,g.state.transmissionRenderTarget[p.id]),vr.upload(z,Ts(we),Nt,O)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(vr.upload(z,Ts(we),Nt,O),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&bt.setValue(z,"center",U.center),bt.setValue(z,"modelViewMatrix",U.modelViewMatrix),bt.setValue(z,"normalMatrix",U.normalMatrix),bt.setValue(z,"modelMatrix",U.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){let mt=D.uniformsGroups;for(let vn=0,Un=mt.length;vn<Un;vn++){let Bn=mt[vn];B.update(Bn,qt),B.bind(Bn,qt)}}return qt}function qe(p,b){p.ambientLightColor.needsUpdate=b,p.lightProbe.needsUpdate=b,p.directionalLights.needsUpdate=b,p.directionalLightShadows.needsUpdate=b,p.pointLights.needsUpdate=b,p.pointLightShadows.needsUpdate=b,p.spotLights.needsUpdate=b,p.spotLightShadows.needsUpdate=b,p.rectAreaLights.needsUpdate=b,p.hemisphereLights.needsUpdate=b}function at(p){return p.isMeshLambertMaterial||p.isMeshToonMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isShadowMaterial||p.isShaderMaterial&&p.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(p,b,R){Ge.get(p.texture).__webglTexture=b,Ge.get(p.depthTexture).__webglTexture=R;let D=Ge.get(p);D.__hasExternalTextures=!0,D.__autoAllocateDepthBuffer=R===void 0,D.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(p,b){let R=Ge.get(p);R.__webglFramebuffer=b,R.__useDefaultFramebuffer=b===void 0},this.setRenderTarget=function(p,b=0,R=0){T=p,w=b,S=R;let D=!0,U=null,k=!1,Y=!1;if(p){let ee=Ge.get(p);if(ee.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(z.FRAMEBUFFER,null),D=!1;else if(ee.__webglFramebuffer===void 0)O.setupRenderTarget(p);else if(ee.__hasExternalTextures)O.rebindTextures(p,Ge.get(p.texture).__webglTexture,Ge.get(p.depthTexture).__webglTexture);else if(p.depthBuffer){let ae=p.depthTexture;if(ee.__boundDepthTexture!==ae){if(ae!==null&&Ge.has(ae)&&(p.width!==ae.image.width||p.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(p)}}let ne=p.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Y=!0);let se=Ge.get(p).__webglFramebuffer;p.isWebGLCubeRenderTarget?(Array.isArray(se[b])?U=se[b][R]:U=se[b],k=!0):p.samples>0&&O.useMultisampledRTT(p)===!1?U=Ge.get(p).__webglMultisampledFramebuffer:Array.isArray(se)?U=se[R]:U=se,C.copy(p.viewport),N.copy(p.scissor),H=p.scissorTest}else C.copy($).multiplyScalar(G).floor(),N.copy(fe).multiplyScalar(G).floor(),H=De;if(Re.bindFramebuffer(z.FRAMEBUFFER,U)&&D&&Re.drawBuffers(p,U),Re.viewport(C),Re.scissor(N),Re.setScissorTest(H),k){let ee=Ge.get(p.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+b,ee.__webglTexture,R)}else if(Y){let ee=Ge.get(p.texture),ne=b||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ee.__webglTexture,R||0,ne)}M=-1},this.readRenderTargetPixels=function(p,b,R,D,U,k,Y){if(!(p&&p.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ie=Ge.get(p).__webglFramebuffer;if(p.isWebGLCubeRenderTarget&&Y!==void 0&&(ie=ie[Y]),ie){Re.bindFramebuffer(z.FRAMEBUFFER,ie);try{let ee=p.texture,ne=ee.format,se=ee.type;if(!We.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}b>=0&&b<=p.width-D&&R>=0&&R<=p.height-U&&z.readPixels(b,R,D,U,Q.convert(ne),Q.convert(se),k)}finally{let ee=T!==null?Ge.get(T).__webglFramebuffer:null;Re.bindFramebuffer(z.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(p,b,R,D,U,k,Y){if(!(p&&p.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ie=Ge.get(p).__webglFramebuffer;if(p.isWebGLCubeRenderTarget&&Y!==void 0&&(ie=ie[Y]),ie){let ee=p.texture,ne=ee.format,se=ee.type;if(!We.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(b>=0&&b<=p.width-D&&R>=0&&R<=p.height-U){Re.bindFramebuffer(z.FRAMEBUFFER,ie);let ae=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ae),z.bufferData(z.PIXEL_PACK_BUFFER,k.byteLength,z.STREAM_READ),z.readPixels(b,R,D,U,Q.convert(ne),Q.convert(se),0);let Te=T!==null?Ge.get(T).__webglFramebuffer:null;Re.bindFramebuffer(z.FRAMEBUFFER,Te);let Ae=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Bm(z,Ae,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ae),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,k),z.deleteBuffer(ae),z.deleteSync(Ae),k}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(p,b=null,R=0){p.isTexture!==!0&&(ro("WebGLRenderer: copyFramebufferToTexture function signature has changed."),b=arguments[0]||null,p=arguments[1]);let D=Math.pow(2,-R),U=Math.floor(p.image.width*D),k=Math.floor(p.image.height*D),Y=b!==null?b.x:0,ie=b!==null?b.y:0;O.setTexture2D(p,0),z.copyTexSubImage2D(z.TEXTURE_2D,R,0,0,Y,ie,U,k),Re.unbindTexture()},this.copyTextureToTexture=function(p,b,R=null,D=null,U=0){p.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture function signature has changed."),D=arguments[0]||null,p=arguments[1],b=arguments[2],U=arguments[3]||0,R=null);let k,Y,ie,ee,ne,se,ae,Te,Ae,Oe=p.isCompressedTexture?p.mipmaps[U]:p.image;R!==null?(k=R.max.x-R.min.x,Y=R.max.y-R.min.y,ie=R.isBox3?R.max.z-R.min.z:1,ee=R.min.x,ne=R.min.y,se=R.isBox3?R.min.z:0):(k=Oe.width,Y=Oe.height,ie=Oe.depth||1,ee=0,ne=0,se=0),D!==null?(ae=D.x,Te=D.y,Ae=D.z):(ae=0,Te=0,Ae=0);let Ue=Q.convert(b.format),Ce=Q.convert(b.type),we;b.isData3DTexture?(O.setTexture3D(b,0),we=z.TEXTURE_3D):b.isDataArrayTexture||b.isCompressedArrayTexture?(O.setTexture2DArray(b,0),we=z.TEXTURE_2D_ARRAY):(O.setTexture2D(b,0),we=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,b.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,b.unpackAlignment);let vt=z.getParameter(z.UNPACK_ROW_LENGTH),st=z.getParameter(z.UNPACK_IMAGE_HEIGHT),qt=z.getParameter(z.UNPACK_SKIP_PIXELS),Rt=z.getParameter(z.UNPACK_SKIP_ROWS),ct=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Oe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Oe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ee),z.pixelStorei(z.UNPACK_SKIP_ROWS,ne),z.pixelStorei(z.UNPACK_SKIP_IMAGES,se);let Yt=p.isDataArrayTexture||p.isData3DTexture,bt=b.isDataArrayTexture||b.isData3DTexture;if(p.isRenderTargetTexture||p.isDepthTexture){let Nt=Ge.get(p),Et=Ge.get(b),mt=Ge.get(Nt.__renderTarget),vn=Ge.get(Et.__renderTarget);Re.bindFramebuffer(z.READ_FRAMEBUFFER,mt.__webglFramebuffer),Re.bindFramebuffer(z.DRAW_FRAMEBUFFER,vn.__webglFramebuffer);for(let Un=0;Un<ie;Un++)Yt&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.get(p).__webglTexture,U,se+Un),p.isDepthTexture?(bt&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.get(b).__webglTexture,U,Ae+Un),z.blitFramebuffer(ee,ne,k,Y,ae,Te,k,Y,z.DEPTH_BUFFER_BIT,z.NEAREST)):bt?z.copyTexSubImage3D(we,U,ae,Te,Ae+Un,ee,ne,k,Y):z.copyTexSubImage2D(we,U,ae,Te,Ae+Un,ee,ne,k,Y);Re.bindFramebuffer(z.READ_FRAMEBUFFER,null),Re.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else bt?p.isDataTexture||p.isData3DTexture?z.texSubImage3D(we,U,ae,Te,Ae,k,Y,ie,Ue,Ce,Oe.data):b.isCompressedArrayTexture?z.compressedTexSubImage3D(we,U,ae,Te,Ae,k,Y,ie,Ue,Oe.data):z.texSubImage3D(we,U,ae,Te,Ae,k,Y,ie,Ue,Ce,Oe):p.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,U,ae,Te,k,Y,Ue,Ce,Oe.data):p.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,U,ae,Te,Oe.width,Oe.height,Ue,Oe.data):z.texSubImage2D(z.TEXTURE_2D,U,ae,Te,k,Y,Ue,Ce,Oe);z.pixelStorei(z.UNPACK_ROW_LENGTH,vt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,st),z.pixelStorei(z.UNPACK_SKIP_PIXELS,qt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Rt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ct),U===0&&b.generateMipmaps&&z.generateMipmap(we),Re.unbindTexture()},this.copyTextureToTexture3D=function(p,b,R=null,D=null,U=0){return p.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture3D function signature has changed."),R=arguments[0]||null,D=arguments[1]||null,p=arguments[2],b=arguments[3],U=arguments[4]||0),ro('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(p,b,R,D,U)},this.initRenderTarget=function(p){Ge.get(p).__webglFramebuffer===void 0&&O.setupRenderTarget(p)},this.initTexture=function(p){p.isCubeTexture?O.setTextureCube(p,0):p.isData3DTexture?O.setTexture3D(p,0):p.isDataArrayTexture||p.isCompressedArrayTexture?O.setTexture2DArray(p,0):O.setTexture2D(p,0),Re.unbindTexture()},this.resetState=function(){w=0,S=0,T=null,Re.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}},Fa=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var hs=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ar=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kl,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},wn=new L,Os=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vi=class extends Cn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ar,$r=new L,cr=new L,lr=new L,hr=new _e,Qr=new _e,Nd=new He,la=new L,eo=new L,ha=new L,Vf=new _e,sl=new _e,Wf=new _e,Ni=class extends zt{constructor(e=new vi){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new Ct;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ar(t,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new Os(n,3,0,!1)),ar.setAttribute("uv",new Os(n,2,3,!1))}this.geometry=ar,this.material=e,this.center=new _e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cr.setFromMatrixScale(this.matrixWorld),Nd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cr.multiplyScalar(-lr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ua(la.set(-.5,-.5,0),lr,o,cr,s,r),ua(eo.set(.5,-.5,0),lr,o,cr,s,r),ua(ha.set(.5,.5,0),lr,o,cr,s,r),Vf.set(0,0),sl.set(1,0),Wf.set(1,1);let a=e.ray.intersectTriangle(la,eo,ha,!1,$r);if(a===null&&(ua(eo.set(-.5,.5,0),lr,o,cr,s,r),sl.set(0,1),a=e.ray.intersectTriangle(la,ha,eo,!1,$r),a===null))return;let c=e.ray.origin.distanceTo($r);c<e.near||c>e.far||t.push({distance:c,point:$r.clone(),uv:ts.getInterpolation($r,la,eo,ha,Vf,sl,Wf,new _e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ua(i,e,t,n,s,r){hr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Qr.x=r*hr.x-s*hr.y,Qr.y=s*hr.x+r*hr.y):Qr.copy(hr),i.copy(e),i.x+=Qr.x,i.y+=Qr.y,i.applyMatrix4(Nd)}var Xf=new L,qf=new wt,Yf=new wt,Fb=new L,jf=new He,fa=new L,rl=new Rn,Zf=new He,ol=new wr,Oa=class extends ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Xu,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new un),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fa),this.boundingBox.expandByPoint(fa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fa),this.boundingSphere.expandByPoint(fa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rl.copy(this.boundingSphere),rl.applyMatrix4(s),e.ray.intersectsSphere(rl)!==!1&&(Zf.copy(s).invert(),ol.copy(e.ray).applyMatrix4(Zf),!(this.boundingBox!==null&&ol.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ol)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Xu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;qf.fromBufferAttribute(s.attributes.skinIndex,e),Yf.fromBufferAttribute(s.attributes.skinWeight,e),Xf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Yf.getComponent(r);if(o!==0){let a=qf.getComponent(r);jf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Fb.copy(Xf).applyMatrix4(jf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},vo=class extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ci=class extends sn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=ln,h=ln,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kf=new He,Ob=new He,Ba=class i{constructor(e=[],t=[]){this.uuid=Wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Ob;Kf.multiplyMatrices(a,t[r]),Kf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ci(t,e,e,En,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new vo),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Bs=class extends pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ur=new He,Jf=new He,da=[],$f=new un,Bb=new He,to=new ke,no=new Rn,yn=class extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Bb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ur),$f.copy(e.boundingBox).applyMatrix4(ur),this.boundingBox.union($f)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ur),no.copy(e.boundingSphere).applyMatrix4(ur),this.boundingSphere.union(no)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(to.geometry=this.geometry,to.material=this.material,to.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),no.copy(this.boundingSphere),no.applyMatrix4(n),e.ray.intersectsSphere(no)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ur),Jf.multiplyMatrices(n,ur),to.matrixWorld=Jf,to.raycast(e,da);for(let o=0,a=da.length;o<a;o++){let c=da[o];c.instanceId=r,c.object=this,t.push(c)}da.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ci(new Float32Array(s*this.count),s,this.count,To,An));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var zs=class extends Cn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},za=new L,ka=new L,Qf=new He,io=new wr,pa=new Rn,al=new L,ed=new L,Rr=class extends zt{constructor(e=new Ct,t=new zs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)za.fromBufferAttribute(t,s-1),ka.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=za.distanceTo(ka);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),pa.radius+=r,e.ray.intersectsSphere(pa)===!1)return;Qf.copy(s).invert(),io.copy(e.ray).applyMatrix4(Qf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let v=d,m=x-1;v<m;v+=l){let g=h.getX(v),A=h.getX(v+1),E=ma(this,e,io,c,g,A);E&&t.push(E)}if(this.isLineLoop){let v=h.getX(x-1),m=h.getX(d),g=ma(this,e,io,c,v,m);g&&t.push(g)}}else{let d=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let v=d,m=x-1;v<m;v+=l){let g=ma(this,e,io,c,v,v+1);g&&t.push(g)}if(this.isLineLoop){let v=ma(this,e,io,c,x-1,d);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ma(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(za.fromBufferAttribute(o,s),ka.fromBufferAttribute(o,r),t.distanceSqToSegment(za,ka,al,ed)>n)return;al.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(al);if(!(c<e.near||c>e.far))return{distance:c,point:ed.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var td=new L,nd=new L,Cr=class extends Rr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)td.fromBufferAttribute(t,s),nd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+td.distanceTo(nd);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ha=class extends Rr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Fi=class extends Cn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},id=new He,fh=new wr,ga=new Rn,xa=new L,us=class extends zt{constructor(e=new Ct,t=new Fi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;id.copy(s).invert(),fh.copy(e.ray).applyMatrix4(id);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let x=f,v=d;x<v;x++){let m=l.getX(x);xa.fromBufferAttribute(u,m),sd(xa,m,c,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let x=f,v=d;x<v;x++)xa.fromBufferAttribute(u,x),sd(xa,x,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function sd(i,e,t,n,s,r,o){let a=fh.distanceSqToPoint(i);if(a<t){let c=new L;fh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ks=class extends sn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new _e:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,s=[],r=[],o=[],a=new L,c=new He;for(let d=0;d<=e;d++){let x=d/e;s[d]=this.getTangentAt(x,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(an(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,x))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(an(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],d*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},bo=class extends Yn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new _e){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},dh=class extends bo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Jh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var va=new L,cl=new Jh,ll=new Jh,hl=new Jh,yo=class extends Yn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(va.subVectors(s[0],s[1]).add(s[0]),l=va);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(va.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=va),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),x<1e-4&&(x=v),m<1e-4&&(m=v),cl.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,x,v,m),ll.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,x,v,m),hl.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,x,v,m)}else this.curveType==="catmullrom"&&(cl.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),ll.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),hl.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(cl.calc(c),ll.calc(c),hl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function rd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function zb(i,e){let t=1-i;return t*t*e}function kb(i,e){return 2*(1-i)*i*e}function Hb(i,e){return i*i*e}function uo(i,e,t,n){return zb(i,e)+kb(i,t)+Hb(i,n)}function Gb(i,e){let t=1-i;return t*t*t*e}function Vb(i,e){let t=1-i;return 3*t*t*i*e}function Wb(i,e){return 3*(1-i)*i*i*e}function Xb(i,e){return i*i*i*e}function fo(i,e,t,n,s){return Gb(i,e)+Vb(i,t)+Wb(i,n)+Xb(i,s)}var Ga=class extends Yn{constructor(e=new _e,t=new _e,n=new _e,s=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new _e){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fo(e,s.x,r.x,o.x,a.x),fo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ph=class extends Yn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fo(e,s.x,r.x,o.x,a.x),fo(e,s.y,r.y,o.y,a.y),fo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Va=class extends Yn{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mh=class extends Yn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends Yn{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(uo(e,s.x,r.x,o.x),uo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gh=class extends Yn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(uo(e,s.x,r.x,o.x),uo(e,s.y,r.y,o.y),uo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(rd(a,c.x,l.x,h.x,u.x),rd(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new _e().fromArray(s))}return this}},xh=Object.freeze({__proto__:null,ArcCurve:dh,CatmullRomCurve3:yo,CubicBezierCurve:Ga,CubicBezierCurve3:ph,EllipseCurve:bo,LineCurve:Va,LineCurve3:mh,QuadraticBezierCurve:Wa,QuadraticBezierCurve3:gh,SplineCurve:Xa}),vh=class extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new xh[s.type]().fromJSON(s))}return this}},qa=class extends vh{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Va(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Wa(this.currentPoint.clone(),new _e(e,t),new _e(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Ga(this.currentPoint.clone(),new _e(e,t),new _e(n,s),new _e(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Xa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new bo(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Mt=class i extends Ct{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],x=0,v=[],m=n/2,g=0;A(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new At(u,3)),this.setAttribute("normal",new At(f,3)),this.setAttribute("uv",new At(d,2));function A(){let y=new L,P=new L,w=0,S=(t-e)/n;for(let T=0;T<=r;T++){let M=[],_=T/r,C=_*(t-e)+e;for(let N=0;N<=s;N++){let H=N/s,X=H*c+a,K=Math.sin(X),F=Math.cos(X);P.x=C*K,P.y=-_*n+m,P.z=C*F,u.push(P.x,P.y,P.z),y.set(K,S,F).normalize(),f.push(y.x,y.y,y.z),d.push(H,1-_),M.push(x++)}v.push(M)}for(let T=0;T<s;T++)for(let M=0;M<r;M++){let _=v[M][T],C=v[M+1][T],N=v[M+1][T+1],H=v[M][T+1];(e>0||M!==0)&&(h.push(_,C,H),w+=3),(t>0||M!==r-1)&&(h.push(C,N,H),w+=3)}l.addGroup(g,w,0),g+=w}function E(y){let P=x,w=new _e,S=new L,T=0,M=y===!0?e:t,_=y===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*_,0),f.push(0,_,0),d.push(.5,.5),x++;let C=x;for(let N=0;N<=s;N++){let X=N/s*c+a,K=Math.cos(X),F=Math.sin(X);S.x=M*F,S.y=m*_,S.z=M*K,u.push(S.x,S.y,S.z),f.push(0,_,0),w.x=K*.5+.5,w.y=F*.5*_+.5,d.push(w.x,w.y),x++}for(let N=0;N<s;N++){let H=P+N,X=C+N;y===!0?h.push(X,X+1,H):h.push(X+1,X,H),T+=3}l.addGroup(g,T,y===!0?1:2),g+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ya=class i extends Mt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var fs=class extends qa{constructor(e){super(e),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new qa().fromJSON(s))}return this}},qb={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Fd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=Jb(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let x=t;x<s;x+=t)u=i[x],f=i[x+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return _o(r,o,t,a,c,d,0),o}};function Fd(i,e,t,n,s){let r,o;if(s===cy(i,e,t,n)>0)for(r=e;r<t;r+=n)o=od(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=od(r,i[r],i[r+1],o);return o&&cc(o,o.next)&&(So(o),o=o.next),o}function Hs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(cc(t,t.next)||Kt(t.prev,t,t.next)===0)){if(So(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function _o(i,e,t,n,s,r,o){if(!i)return;!o&&r&&ny(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?jb(i,n,s,r):Yb(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),So(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Zb(Hs(i),e,t),_o(i,e,t,n,s,r,2)):o===2&&Kb(i,e,t,n,s,r):_o(Hs(i),e,t,n,s,r,1);break}}}function Yb(i){let e=i.prev,t=i,n=i.next;if(Kt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=d&&pr(s,a,r,c,o,l,x.x,x.y)&&Kt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function jb(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Kt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,x=h<u?h<f?h:f:u<f?u:f,v=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,g=bh(d,x,e,t,n),A=bh(v,m,e,t,n),E=i.prevZ,y=i.nextZ;for(;E&&E.z>=g&&y&&y.z<=A;){if(E.x>=d&&E.x<=v&&E.y>=x&&E.y<=m&&E!==s&&E!==o&&pr(a,h,c,u,l,f,E.x,E.y)&&Kt(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=d&&y.x<=v&&y.y>=x&&y.y<=m&&y!==s&&y!==o&&pr(a,h,c,u,l,f,y.x,y.y)&&Kt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=g;){if(E.x>=d&&E.x<=v&&E.y>=x&&E.y<=m&&E!==s&&E!==o&&pr(a,h,c,u,l,f,E.x,E.y)&&Kt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=A;){if(y.x>=d&&y.x<=v&&y.y>=x&&y.y<=m&&y!==s&&y!==o&&pr(a,h,c,u,l,f,y.x,y.y)&&Kt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Zb(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!cc(s,r)&&Od(s,n,n.next,r)&&Mo(s,r)&&Mo(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),So(n),So(n.next),n=i=r),n=n.next}while(n!==i);return Hs(n)}function Kb(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ry(o,a)){let c=Bd(o,a);o=Hs(o,o.next),c=Hs(c,c.next),_o(o,e,t,n,s,r,0),_o(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Jb(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Fd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(sy(l));for(s.sort($b),r=0;r<s.length;r++)t=Qb(s[r],t);return t}function $b(i,e){return i.x-e.x}function Qb(i,e){let t=ey(i,e);if(!t)return e;let n=Bd(t,i);return Hs(n,n.next),Hs(t,t.next)}function ey(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&pr(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Mo(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&ty(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function ty(i,e){return Kt(i.prev,i,e.prev)<0&&Kt(e.next,i,i.next)<0}function ny(i,e,t,n){let s=i;do s.z===0&&(s.z=bh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,iy(s)}function iy(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function bh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function sy(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function pr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ry(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!oy(i,e)&&(Mo(i,e)&&Mo(e,i)&&ay(i,e)&&(Kt(i.prev,i,e.prev)||Kt(i,e.prev,e))||cc(i,e)&&Kt(i.prev,i,i.next)>0&&Kt(e.prev,e,e.next)>0)}function Kt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function cc(i,e){return i.x===e.x&&i.y===e.y}function Od(i,e,t,n){let s=ya(Kt(i,e,t)),r=ya(Kt(i,e,n)),o=ya(Kt(t,n,i)),a=ya(Kt(t,n,e));return!!(s!==r&&o!==a||s===0&&ba(i,t,e)||r===0&&ba(i,n,e)||o===0&&ba(t,i,n)||a===0&&ba(t,e,n))}function ba(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ya(i){return i>0?1:i<0?-1:0}function oy(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Od(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Mo(i,e){return Kt(i.prev,i,i.next)<0?Kt(i,e,i.next)>=0&&Kt(i,i.prev,e)>=0:Kt(i,e,i.prev)<0||Kt(i,i.next,e)<0}function ay(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Bd(i,e){let t=new yh(i.i,i.x,i.y),n=new yh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function od(i,e,t,n){let s=new yh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function So(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function yh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cy(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var po=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];ad(e),cd(n,e);let o=e.length;t.forEach(ad);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,cd(n,t[c]);let a=qb.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function ad(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function cd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Pr=class i extends Ct{constructor(e=new fs([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new At(s,3)),this.setAttribute("uv",new At(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:ly,E,y=!1,P,w,S,T;g&&(E=g.getSpacedPoints(h),y=!0,f=!1,P=g.computeFrenetFrames(h,!1),w=new L,S=new L,T=new L),f||(m=0,d=0,x=0,v=0);let M=a.extractPoints(l),_=M.shape,C=M.holes;if(!po.isClockWise(_)){_=_.reverse();for(let le=0,ye=C.length;le<ye;le++){let z=C[le];po.isClockWise(z)&&(C[le]=z.reverse())}}let H=po.triangulateShape(_,C),X=_;for(let le=0,ye=C.length;le<ye;le++){let z=C[le];_=_.concat(z)}function K(le,ye,z){return ye||console.error("THREE.ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(ye,z)}let F=_.length,j=H.length;function G(le,ye,z){let Ze,Se,We,Re=le.x-ye.x,Ke=le.y-ye.y,Ge=z.x-le.x,O=z.y-le.y,I=Re*Re+Ke*Ke,te=Re*O-Ke*Ge;if(Math.abs(te)>Number.EPSILON){let he=Math.sqrt(I),xe=Math.sqrt(Ge*Ge+O*O),ue=ye.x-Ke/he,Je=ye.y+Re/he,Ie=z.x-O/xe,Le=z.y+Ge/xe,it=((Ie-ue)*O-(Le-Je)*Ge)/(Re*O-Ke*Ge);Ze=ue+Re*it-le.x,Se=Je+Ke*it-le.y;let be=Ze*Ze+Se*Se;if(be<=2)return new _e(Ze,Se);We=Math.sqrt(be/2)}else{let he=!1;Re>Number.EPSILON?Ge>Number.EPSILON&&(he=!0):Re<-Number.EPSILON?Ge<-Number.EPSILON&&(he=!0):Math.sign(Ke)===Math.sign(O)&&(he=!0),he?(Ze=-Ke,Se=Re,We=Math.sqrt(I)):(Ze=Re,Se=Ke,We=Math.sqrt(I/2))}return new _e(Ze/We,Se/We)}let q=[];for(let le=0,ye=X.length,z=ye-1,Ze=le+1;le<ye;le++,z++,Ze++)z===ye&&(z=0),Ze===ye&&(Ze=0),q[le]=G(X[le],X[z],X[Ze]);let ce=[],$,fe=q.concat();for(let le=0,ye=C.length;le<ye;le++){let z=C[le];$=[];for(let Ze=0,Se=z.length,We=Se-1,Re=Ze+1;Ze<Se;Ze++,We++,Re++)We===Se&&(We=0),Re===Se&&(Re=0),$[Ze]=G(z[Ze],z[We],z[Re]);ce.push($),fe=fe.concat($)}for(let le=0;le<m;le++){let ye=le/m,z=d*Math.cos(ye*Math.PI/2),Ze=x*Math.sin(ye*Math.PI/2)+v;for(let Se=0,We=X.length;Se<We;Se++){let Re=K(X[Se],q[Se],Ze);pe(Re.x,Re.y,-z)}for(let Se=0,We=C.length;Se<We;Se++){let Re=C[Se];$=ce[Se];for(let Ke=0,Ge=Re.length;Ke<Ge;Ke++){let O=K(Re[Ke],$[Ke],Ze);pe(O.x,O.y,-z)}}}let De=x+v;for(let le=0;le<F;le++){let ye=f?K(_[le],fe[le],De):_[le];y?(S.copy(P.normals[0]).multiplyScalar(ye.x),w.copy(P.binormals[0]).multiplyScalar(ye.y),T.copy(E[0]).add(S).add(w),pe(T.x,T.y,T.z)):pe(ye.x,ye.y,0)}for(let le=1;le<=h;le++)for(let ye=0;ye<F;ye++){let z=f?K(_[ye],fe[ye],De):_[ye];y?(S.copy(P.normals[le]).multiplyScalar(z.x),w.copy(P.binormals[le]).multiplyScalar(z.y),T.copy(E[le]).add(S).add(w),pe(T.x,T.y,T.z)):pe(z.x,z.y,u/h*le)}for(let le=m-1;le>=0;le--){let ye=le/m,z=d*Math.cos(ye*Math.PI/2),Ze=x*Math.sin(ye*Math.PI/2)+v;for(let Se=0,We=X.length;Se<We;Se++){let Re=K(X[Se],q[Se],Ze);pe(Re.x,Re.y,u+z)}for(let Se=0,We=C.length;Se<We;Se++){let Re=C[Se];$=ce[Se];for(let Ke=0,Ge=Re.length;Ke<Ge;Ke++){let O=K(Re[Ke],$[Ke],Ze);y?pe(O.x,O.y+E[h-1].y,E[h-1].x+z):pe(O.x,O.y,u+z)}}}J(),de();function J(){let le=s.length/3;if(f){let ye=0,z=F*ye;for(let Ze=0;Ze<j;Ze++){let Se=H[Ze];ve(Se[2]+z,Se[1]+z,Se[0]+z)}ye=h+m*2,z=F*ye;for(let Ze=0;Ze<j;Ze++){let Se=H[Ze];ve(Se[0]+z,Se[1]+z,Se[2]+z)}}else{for(let ye=0;ye<j;ye++){let z=H[ye];ve(z[2],z[1],z[0])}for(let ye=0;ye<j;ye++){let z=H[ye];ve(z[0]+F*h,z[1]+F*h,z[2]+F*h)}}n.addGroup(le,s.length/3-le,0)}function de(){let le=s.length/3,ye=0;ge(X,ye),ye+=X.length;for(let z=0,Ze=C.length;z<Ze;z++){let Se=C[z];ge(Se,ye),ye+=Se.length}n.addGroup(le,s.length/3-le,1)}function ge(le,ye){let z=le.length;for(;--z>=0;){let Ze=z,Se=z-1;Se<0&&(Se=le.length-1);for(let We=0,Re=h+m*2;We<Re;We++){let Ke=F*We,Ge=F*(We+1),O=ye+Ze+Ke,I=ye+Se+Ke,te=ye+Se+Ge,he=ye+Ze+Ge;Ye(O,I,te,he)}}}function pe(le,ye,z){c.push(le),c.push(ye),c.push(z)}function ve(le,ye,z){je(le),je(ye),je(z);let Ze=s.length/3,Se=A.generateTopUV(n,s,Ze-3,Ze-2,Ze-1);ot(Se[0]),ot(Se[1]),ot(Se[2])}function Ye(le,ye,z,Ze){je(le),je(ye),je(Ze),je(ye),je(z),je(Ze);let Se=s.length/3,We=A.generateSideWallUV(n,s,Se-6,Se-3,Se-2,Se-1);ot(We[0]),ot(We[1]),ot(We[3]),ot(We[1]),ot(We[2]),ot(We[3])}function je(le){s.push(c[le*3+0]),s.push(c[le*3+1]),s.push(c[le*3+2])}function ot(le){r.push(le.x),r.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return hy(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new xh[s.type]().fromJSON(s)),new i(n,e.options)}},ly={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new _e(r,o),new _e(a,c),new _e(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],x=e[s*3+2],v=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new _e(o,1-c),new _e(l,1-u),new _e(f,1-x),new _e(v,1-g)]:[new _e(a,1-c),new _e(h,1-u),new _e(d,1-x),new _e(m,1-g)]}};function hy(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Pn=class i extends Ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,f=new L,d=[],x=[],v=[],m=[];for(let g=0;g<=n;g++){let A=[],E=g/n,y=0;g===0&&o===0?y=.5/t:g===n&&c===Math.PI&&(y=-.5/t);for(let P=0;P<=t;P++){let w=P/t;u.x=-e*Math.cos(s+w*r)*Math.sin(o+E*a),u.y=e*Math.cos(o+E*a),u.z=e*Math.sin(s+w*r)*Math.sin(o+E*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(w+y,1-E),A.push(l++)}h.push(A)}for(let g=0;g<n;g++)for(let A=0;A<t;A++){let E=h[g][A+1],y=h[g][A],P=h[g+1][A],w=h[g+1][A+1];(g!==0||o>0)&&d.push(E,y,w),(g!==n-1||c<Math.PI)&&d.push(y,P,w)}this.setIndex(d),this.setAttribute("position",new At(x,3)),this.setAttribute("normal",new At(v,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ds=class i extends Ct{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new L,u=new L,f=new L;for(let d=0;d<=n;d++)for(let x=0;x<=s;x++){let v=x/s*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(x/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=s;x++){let v=(s+1)*d+x-1,m=(s+1)*(d-1)+x-1,g=(s+1)*(d-1)+x,A=(s+1)*d+x;o.push(v,m,A),o.push(m,g,A)}this.setIndex(o),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(c,3)),this.setAttribute("uv",new At(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ja=class extends Pt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},rt=class extends Cn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yh,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bt=class extends rt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return an(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Za=class extends Cn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yh,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function _a(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function uy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fy(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ld(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function zd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var ps=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_h=class extends ps{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qu,endingEnd:qu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yu:r=e,a=2*t-n;break;case ju:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Yu:o=e,c=2*n-t;break;case ju:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-t)/(s-t),v=x*x,m=v*x,g=-f*m+2*f*v-f*x,A=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*x+1,E=(-1-d)*m+(1.5+d)*v+.5*x,y=d*m-d*v;for(let P=0;P!==a;++P)r[P]=g*o[h+P]+A*o[l+P]+E*o[c+P]+y*o[u+P];return r}},Mh=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Sh=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},jn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_a(t,this.TimeBufferType),this.values=_a(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_a(e.times,Array),values:_a(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _h(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mr:t=this.InterpolantFactoryMethodDiscrete;break;case Sr:t=this.InterpolantFactoryMethodLinear;break;case Ic:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Sr;case this.InterpolantFactoryMethodSmooth:return Ic}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&uy(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ic,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let x=0;x!==n;++x){let v=t[u+x];if(v!==t[f+x]||v!==t[d+x]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=Sr;var ms=class extends jn{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Mr;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends jn{};Ka.prototype.ValueTypeName="color";var Oi=class extends jn{};Oi.prototype.ValueTypeName="number";var Eh=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Ot.slerpFlat(r,0,o,l-a,o,l,c);return r}},Bi=class extends jn{InterpolantFactoryMethodLinear(e){return new Eh(this.times,this.values,this.getValueSize(),e)}};Bi.prototype.ValueTypeName="quaternion";Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends jn{constructor(e,t,n){super(e,t,n)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Mr;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends jn{};zi.prototype.ValueTypeName="vector";var Ja=class{constructor(e="",t=-1,n=[],s=um){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Wn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(py(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(jn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=fy(c);c=ld(c,1,h),l=ld(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Oi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,x,v){if(d.length!==0){let m=[],g=[];zd(d,m,g,x),m.length!==0&&v.push(new u(f,m,g))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let v=0;v<f[x].morphTargets.length;v++)d[f[x].morphTargets[v]]=-1;for(let v in d){let m=[],g=[];for(let A=0;A!==f[x].morphTargets.length;++A){let E=f[x];m.push(E.time),g.push(E.morphTarget===v?1:0)}s.push(new Oi(".morphTargetInfluence["+v+"]",m,g))}c=d.length*o}else{let d=".bones["+t[u].name+"]";n(zi,d+".position",f,"pos",s),n(Bi,d+".quaternion",f,"rot",s),n(zi,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function dy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Oi;case"vector":case"vector2":case"vector3":case"vector4":return zi;case"color":return Ka;case"quaternion":return Bi;case"bool":case"boolean":return ms;case"string":return gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function py(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=dy(i.type);if(i.times===void 0){let t=[],n=[];zd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ns={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},wh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],x=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null}}},my=new wh,bi=class{constructor(e){this.manager=e!==void 0?e:my,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};bi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ci={},Th=class extends Error{constructor(e,t){super(e),this.response=t}},Ir=class extends bi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ns.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:n,onError:s});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ci[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,x=d!==0,v=0,m=new ReadableStream({start(g){A();function A(){u.read().then(({done:E,value:y})=>{if(E)g.close();else{v+=y.byteLength;let P=new ProgressEvent("progress",{lengthComputable:x,loaded:v,total:d});for(let w=0,S=h.length;w<S;w++){let T=h[w];T.onProgress&&T.onProgress(P)}g.enqueue(y),A()}},E=>{g.error(E)})}}});return new Response(m)}else throw new Th(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(x=>d.decode(x))}}}).then(l=>{ns.add(e,l);let h=Ci[e];delete Ci[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=Ci[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ci[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ah=class extends bi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ns.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=xo("img");function c(){h(),ns.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var $a=class extends bi{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new ci,a=new Ir(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:Hn,o.wrapT=l.wrapT!==void 0?l.wrapT:Hn,o.magFilter=l.magFilter!==void 0?l.magFilter:Jt,o.minFilter=l.minFilter!==void 0?l.minFilter:Jt,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=oi),l.mipmapCount===1&&(o.minFilter=Jt),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,s),o}},xs=class extends bi{constructor(e){super(e)}load(e,t,n,s){let r=new sn,o=new Ah(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Dr=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Qa=class extends Dr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ul=new He,hd=new L,ud=new L,Eo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ui,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;hd.setFromMatrixPosition(e.matrixWorld),t.position.copy(hd),ud.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ud),t.updateMatrixWorld(),ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Rh=class extends Eo{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Er*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},vs=class extends Dr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Rh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},fd=new He,so=new L,fl=new L,Ch=class extends Eo{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),so.setFromMatrixPosition(e.matrixWorld),n.position.copy(so),fl.copy(n.position),fl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fl),n.updateMatrixWorld(),s.makeTranslation(-so.x,-so.y,-so.z),fd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd)}},bs=class extends Dr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ch}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ph=class extends Eo{constructor(){super(new as(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lr=class extends Dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Ph}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ys=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ec=class extends bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ns.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ns.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ns.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ns.add(e,c),r.manager.itemStart(e)}};var Ur=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=dd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function dd(){return performance.now()}var $h="\\[\\]\\.:\\/",gy=new RegExp("["+$h+"]","g"),Qh="[^"+$h+"]",xy="[^"+$h.replace("\\.","")+"]",vy=/((?:WC+[\/:])*)/.source.replace("WC",Qh),by=/(WCOD+)?/.source.replace("WCOD",xy),yy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qh),_y=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qh),My=new RegExp("^"+vy+by+yy+_y+"$"),Sy=["material","materials","bones","map"],Ih=class{constructor(e,t,n){let s=n||Wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gy,"")}static parseTrackName(e){let t=My.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Sy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wt.Composite=Ih;Wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Wt.prototype.GetterByBindingType=[Wt.prototype._getValue_direct,Wt.prototype._getValue_array,Wt.prototype._getValue_arrayElement,Wt.prototype._getValue_toArray];Wt.prototype.SetterByBindingTypeAndVersioning=[[Wt.prototype._setValue_direct,Wt.prototype._setValue_direct_setNeedsUpdate,Wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_array,Wt.prototype._setValue_array_setNeedsUpdate,Wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_arrayElement,Wt.prototype._setValue_arrayElement_setNeedsUpdate,Wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_fromArray,Wt.prototype._setValue_fromArray_setNeedsUpdate,Wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var __=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);var Co=class i extends ke{constructor(){let e=i.SkyShader,t=new Pt({name:e.name,uniforms:mn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:$t,depthWrite:!1});super(new Ne(1,1,1),t),this.isSky=!0}};Co.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new L},up:{value:new L(0,1,0)}},vertexShader:`
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

		}`};var lc=class extends hs{constructor(){super();let e=new Ne;e.deleteAttribute("uv");let t=new rt({side:$t}),n=new rt,s=new bs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ke(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ke(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new ke(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new ke(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new ke(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new ke(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new ke(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new ke(e,Or(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new ke(e,Or(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let x=new ke(e,Or(17));x.position.set(14.904,12.198,-1.832),x.scale.set(.15,4.265,6.331),this.add(x);let v=new ke(e,Or(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);let m=new ke(e,Or(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let g=new ke(e,Or(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Or(i){let e=new Qt;return e.color.setScalar(i),e}var _s={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var In=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ey=new as(-1,1,1,-1,0,1),eu=class extends Ct{constructor(){super(),this.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new At([0,2,0,0,2,0],2))}},wy=new eu,_i=class{constructor(e){this._mesh=new ke(wy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ey)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Br=class extends In{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mn.clone(e.uniforms),this.material=new Pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new _i(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Po=class extends In{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},hc=class extends In{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var uc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new _e);this._width=n.width,this._height=n.height,t=new Zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:tn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Br(_s),this.copyPass.material.blending=cn,this.clock=new Ur}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Po!==void 0&&(o instanceof Po?n=!0:o instanceof hc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new _e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var fc=class extends In{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var kd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var zr=class i extends In{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new _e(e.x,e.y):new _e(256,256),this.clearColor=new Pe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Zt(r,o,{type:tn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Zt(r,o,{type:tn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Zt(r,o,{type:tn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=kd;this.highPassUniforms=mn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new _e(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=_s;this.copyUniforms=mn.clone(h.uniforms),this.blendMaterial=new Pt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:xi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Pe,this.oldClearAlpha=1,this.basic=new Qt,this.fsQuad=new _i(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new _e(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Pt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new _e(.5,.5)},direction:{value:new _e(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};zr.BlurDirectionX=new _e(1,0);zr.BlurDirectionY=new _e(0,1);var Hd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var dc=class extends In{constructor(){super();let e=Hd;this.uniforms=mn.clone(e.uniforms),this.material=new ja({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new _i(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},yt.getTransfer(this._outputColorSpace)===Lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Nh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Fh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Oh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Bh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Io={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new _e},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new He},cameraProjectionMatrixInverse:{value:new He},cameraWorldMatrix:{value:new He},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

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
		}`},Do={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},pc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Gd(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Ty(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],c=2*Math.PI*a/n,l=new L(Math.cos(c),Math.sin(c),0).normalize();s[o*4]=(l.x*.5+.5)*255,s[o*4+1]=(l.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new ci(s,e,e);return r.wrapS=hn,r.wrapT=hn,r.needsUpdate=!0,r}function Ty(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var Lo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:tu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new _e},cameraProjectionMatrixInverse:{value:new He},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function tu(i,e,t){let n=Ay(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function Ay(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new L(Math.cos(r),Math.sin(r),o))}return n}var mc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),l=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(c+l)*h,f=c-u,d=l-u,x=e-f,v=t-d,m,g;x>v?(m=1,g=0):(m=0,g=1);let A=x-m+h,E=v-g+h,y=x-1+2*h,P=v-1+2*h,w=c&255,S=l&255,T=this.perm[w+this.perm[S]]%12,M=this.perm[w+m+this.perm[S+g]]%12,_=this.perm[w+1+this.perm[S+1]]%12,C=.5-x*x-v*v;C<0?n=0:(C*=C,n=C*C*this.dot(this.grad3[T],x,v));let N=.5-A*A-E*E;N<0?s=0:(N*=N,s=N*N*this.dot(this.grad3[M],A,E));let H=.5-y*y-P*P;return H<0?r=0:(H*=H,r=H*H*this.dot(this.grad3[_],y,P)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),f=Math.floor(n+l),d=1/6,x=(h+u+f)*d,v=h-x,m=u-x,g=f-x,A=e-v,E=t-m,y=n-g,P,w,S,T,M,_;A>=E?E>=y?(P=1,w=0,S=0,T=1,M=1,_=0):A>=y?(P=1,w=0,S=0,T=1,M=0,_=1):(P=0,w=0,S=1,T=1,M=0,_=1):E<y?(P=0,w=0,S=1,T=0,M=1,_=1):A<y?(P=0,w=1,S=0,T=0,M=1,_=1):(P=0,w=1,S=0,T=1,M=1,_=0);let C=A-P+d,N=E-w+d,H=y-S+d,X=A-T+2*d,K=E-M+2*d,F=y-_+2*d,j=A-1+3*d,G=E-1+3*d,q=y-1+3*d,ce=h&255,$=u&255,fe=f&255,De=this.perm[ce+this.perm[$+this.perm[fe]]]%12,J=this.perm[ce+P+this.perm[$+w+this.perm[fe+S]]]%12,de=this.perm[ce+T+this.perm[$+M+this.perm[fe+_]]]%12,ge=this.perm[ce+1+this.perm[$+1+this.perm[fe+1]]]%12,pe=.6-A*A-E*E-y*y;pe<0?s=0:(pe*=pe,s=pe*pe*this.dot3(this.grad3[De],A,E,y));let ve=.6-C*C-N*N-H*H;ve<0?r=0:(ve*=ve,r=ve*ve*this.dot3(this.grad3[J],C,N,H));let Ye=.6-X*X-K*K-F*F;Ye<0?o=0:(Ye*=Ye,o=Ye*Ye*this.dot3(this.grad3[de],X,K,F));let je=.6-j*j-G*G-q*q;return je<0?a=0:(je*=je,a=je*je*this.dot3(this.grad3[ge],j,G,q)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,u,f,d,x,v=(e+t+n+s)*c,m=Math.floor(e+v),g=Math.floor(t+v),A=Math.floor(n+v),E=Math.floor(s+v),y=(m+g+A+E)*l,P=m-y,w=g-y,S=A-y,T=E-y,M=e-P,_=t-w,C=n-S,N=s-T,H=M>_?32:0,X=M>C?16:0,K=_>C?8:0,F=M>N?4:0,j=_>N?2:0,G=C>N?1:0,q=H+X+K+F+j+G,ce=o[q][0]>=3?1:0,$=o[q][1]>=3?1:0,fe=o[q][2]>=3?1:0,De=o[q][3]>=3?1:0,J=o[q][0]>=2?1:0,de=o[q][1]>=2?1:0,ge=o[q][2]>=2?1:0,pe=o[q][3]>=2?1:0,ve=o[q][0]>=1?1:0,Ye=o[q][1]>=1?1:0,je=o[q][2]>=1?1:0,ot=o[q][3]>=1?1:0,le=M-ce+l,ye=_-$+l,z=C-fe+l,Ze=N-De+l,Se=M-J+2*l,We=_-de+2*l,Re=C-ge+2*l,Ke=N-pe+2*l,Ge=M-ve+3*l,O=_-Ye+3*l,I=C-je+3*l,te=N-ot+3*l,he=M-1+4*l,xe=_-1+4*l,ue=C-1+4*l,Je=N-1+4*l,Ie=m&255,Le=g&255,it=A&255,be=E&255,Ve=a[Ie+a[Le+a[it+a[be]]]]%32,$e=a[Ie+ce+a[Le+$+a[it+fe+a[be+De]]]]%32,Qe=a[Ie+J+a[Le+de+a[it+ge+a[be+pe]]]]%32,Xe=a[Ie+ve+a[Le+Ye+a[it+je+a[be+ot]]]]%32,Z=a[Ie+1+a[Le+1+a[it+1+a[be+1]]]]%32,Q=.6-M*M-_*_-C*C-N*N;Q<0?h=0:(Q*=Q,h=Q*Q*this.dot4(r[Ve],M,_,C,N));let oe=.6-le*le-ye*ye-z*z-Ze*Ze;oe<0?u=0:(oe*=oe,u=oe*oe*this.dot4(r[$e],le,ye,z,Ze));let B=.6-Se*Se-We*We-Re*Re-Ke*Ke;B<0?f=0:(B*=B,f=B*B*this.dot4(r[Qe],Se,We,Re,Ke));let V=.6-Ge*Ge-O*O-I*I-te*te;V<0?d=0:(V*=V,d=V*V*this.dot4(r[Xe],Ge,O,I,te));let W=.6-he*he-xe*xe-ue*ue-Je*Je;return W<0?x=0:(W*=W,x=W*W*this.dot4(r[Z],he,xe,ue,Je)),27*(h+u+f+d+x)}};var Uo=class i extends In{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Gd(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Zt(this.width,this.height,{type:tn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Pt({defines:Object.assign({},Io.defines),uniforms:mn.clone(Io.uniforms),vertexShader:Io.vertexShader,fragmentShader:Io.fragmentShader,blending:cn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Za,this.normalMaterial.blending=cn,this.pdMaterial=new Pt({defines:Object.assign({},Lo.defines),uniforms:mn.clone(Lo.uniforms),vertexShader:Lo.vertexShader,fragmentShader:Lo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Pt({defines:Object.assign({},Do.defines),uniforms:mn.clone(Do.uniforms),vertexShader:Do.vertexShader,fragmentShader:Do.fragmentShader,blending:cn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Pt({uniforms:mn.clone(_s.uniforms),vertexShader:_s.vertexShader,fragmentShader:_s.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ic,blendDst:Nr,blendEquation:Vn,blendSrcAlpha:nc,blendDstAlpha:Nr,blendEquationAlpha:Vn}),this.blendMaterial=new Pt({uniforms:mn.clone(pc.uniforms),vertexShader:pc.vertexShader,fragmentShader:pc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Uh,blendSrc:ic,blendDst:Nr,blendEquation:Vn,blendSrcAlpha:nc,blendDstAlpha:Nr,blendEquationAlpha:Vn}),this.fsQuad=new _i(null),this.originalClearColor=new Pe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new ls,this.depthTexture.format=rs,this.depthTexture.type=ss,this.normalRenderTarget=new Zt(this.width,this.height,{minFilter:ln,magFilter:ln,type:tn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=tu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=cn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=cn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=cn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=cn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=cn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new mc,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let c=o,l=a;s[(o*e+a)*4]=(t.noise(c,l)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new ci(s,e,e,En,ai);return r.wrapS=hn,r.wrapT=hn,r.needsUpdate=!0,r}};Uo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Kn=Uint8Array,kr=Uint16Array,Ry=Int32Array,Vd=new Kn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Wd=new Kn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Cy=new Kn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Xd=function(i,e){for(var t=new kr(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new Ry(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},qd=Xd(Vd,2),Yd=qd.b,Py=qd.r;Yd[28]=258,Py[258]=28;var jd=Xd(Wd,0),Iy=jd.b,d1=jd.r,su=new kr(32768);for(It=0;It<32768;++It)ki=(It&43690)>>1|(It&21845)<<1,ki=(ki&52428)>>2|(ki&13107)<<2,ki=(ki&61680)>>4|(ki&3855)<<4,su[It]=((ki&65280)>>8|(ki&255)<<8)>>1;var ki,It,No=function(i,e,t){for(var n=i.length,s=0,r=new kr(e);s<n;++s)i[s]&&++r[i[s]-1];var o=new kr(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new kr(1<<e);var c=15-e;for(s=0;s<n;++s)if(i[s])for(var l=s<<4|i[s],h=e-i[s],u=o[i[s]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[su[u]>>c]=l}else for(a=new kr(n),s=0;s<n;++s)i[s]&&(a[s]=su[o[i[s]-1]++]>>15-i[s]);return a},Fo=new Kn(288);for(It=0;It<144;++It)Fo[It]=8;var It;for(It=144;It<256;++It)Fo[It]=9;var It;for(It=256;It<280;++It)Fo[It]=7;var It;for(It=280;It<288;++It)Fo[It]=8;var It,Zd=new Kn(32);for(It=0;It<32;++It)Zd[It]=5;var It;var Dy=No(Fo,9,1);var Ly=No(Zd,5,1),nu=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},li=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},iu=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Uy=function(i){return(i+7)/8|0},Ny=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new Kn(i.subarray(e,t))};var Fy=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],hi=function(i,e,t){var n=new Error(e||Fy[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,hi),!t)throw n;return n},Oy=function(i,e,t,n){var s=i.length,r=n?n.length:0;if(!s||e.f&&!e.l)return t||new Kn(0);var o=!t,a=o||e.i!=2,c=e.i;o&&(t=new Kn(s*3));var l=function(ot){var le=t.length;if(ot>le){var ye=new Kn(Math.max(le*2,ot));ye.set(t),t=ye}},h=e.f||0,u=e.p||0,f=e.b||0,d=e.l,x=e.d,v=e.m,m=e.n,g=s*8;do{if(!d){h=li(i,u,1);var A=li(i,u+1,3);if(u+=3,A)if(A==1)d=Dy,x=Ly,v=9,m=5;else if(A==2){var w=li(i,u,31)+257,S=li(i,u+10,15)+4,T=w+li(i,u+5,31)+1;u+=14;for(var M=new Kn(T),_=new Kn(19),C=0;C<S;++C)_[Cy[C]]=li(i,u+C*3,7);u+=S*3;for(var N=nu(_),H=(1<<N)-1,X=No(_,N,1),C=0;C<T;){var K=X[li(i,u,H)];u+=K&15;var E=K>>4;if(E<16)M[C++]=E;else{var F=0,j=0;for(E==16?(j=3+li(i,u,3),u+=2,F=M[C-1]):E==17?(j=3+li(i,u,7),u+=3):E==18&&(j=11+li(i,u,127),u+=7);j--;)M[C++]=F}}var G=M.subarray(0,w),q=M.subarray(w);v=nu(G),m=nu(q),d=No(G,v,1),x=No(q,m,1)}else hi(1);else{var E=Uy(u)+4,y=i[E-4]|i[E-3]<<8,P=E+y;if(P>s){c&&hi(0);break}a&&l(f+y),t.set(i.subarray(E,P),f),e.b=f+=y,e.p=u=P*8,e.f=h;continue}if(u>g){c&&hi(0);break}}a&&l(f+131072);for(var ce=(1<<v)-1,$=(1<<m)-1,fe=u;;fe=u){var F=d[iu(i,u)&ce],De=F>>4;if(u+=F&15,u>g){c&&hi(0);break}if(F||hi(2),De<256)t[f++]=De;else if(De==256){fe=u,d=null;break}else{var J=De-254;if(De>264){var C=De-257,de=Vd[C];J=li(i,u,(1<<de)-1)+Yd[C],u+=de}var ge=x[iu(i,u)&$],pe=ge>>4;ge||hi(3),u+=ge&15;var q=Iy[pe];if(pe>3){var de=Wd[pe];q+=iu(i,u)&(1<<de)-1,u+=de}if(u>g){c&&hi(0);break}a&&l(f+131072);var ve=f+J;if(f<q){var Ye=r-q,je=Math.min(q,ve);for(Ye+f<0&&hi(3);f<je;++f)t[f]=n[Ye+f]}for(;f<ve;++f)t[f]=t[f-q]}}e.l=d,e.p=fe,e.b=f,e.f=h,d&&(h=1,e.m=v,e.d=x,e.n=m)}while(!h);return f!=t.length&&o?Ny(t,0,f):t.subarray(0,f)};var By=new Kn(0);var zy=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&hi(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&hi(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function Oo(i,e){return Oy(i.subarray(zy(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var ky=typeof TextDecoder<"u"&&new TextDecoder,Hy=0;try{ky.decode(By,{stream:!0}),Hy=1}catch{}var gc=class extends $a{constructor(e){super(e),this.type=tn}parse(e){let M=Math.pow(2.7182818,2.2);function _(p,b){let R=0;for(let U=0;U<65536;++U)(U==0||p[U>>3]&1<<(U&7))&&(b[R++]=U);let D=R-1;for(;R<65536;)b[R++]=0;return D}function C(p){for(let b=0;b<16384;b++)p[b]={},p[b].len=0,p[b].lit=0,p[b].p=null}let N={l:0,c:0,lc:0};function H(p,b,R,D,U){for(;R<p;)b=b<<8|Xe(D,U),R+=8;R-=p,N.l=b>>R&(1<<p)-1,N.c=b,N.lc=R}let X=new Array(59);function K(p){for(let R=0;R<=58;++R)X[R]=0;for(let R=0;R<65537;++R)X[p[R]]+=1;let b=0;for(let R=58;R>0;--R){let D=b+X[R]>>1;X[R]=b,b=D}for(let R=0;R<65537;++R){let D=p[R];D>0&&(p[R]=D|X[D]++<<6)}}function F(p,b,R,D,U,k){let Y=b,ie=0,ee=0;for(;D<=U;D++){if(Y.value-b.value>R)return!1;H(6,ie,ee,p,Y);let ne=N.l;if(ie=N.c,ee=N.lc,k[D]=ne,ne==63){if(Y.value-b.value>R)throw new Error("Something wrong with hufUnpackEncTable");H(8,ie,ee,p,Y);let se=N.l+6;if(ie=N.c,ee=N.lc,D+se>U+1)throw new Error("Something wrong with hufUnpackEncTable");for(;se--;)k[D++]=0;D--}else if(ne>=59){let se=ne-59+2;if(D+se>U+1)throw new Error("Something wrong with hufUnpackEncTable");for(;se--;)k[D++]=0;D--}}K(k)}function j(p){return p&63}function G(p){return p>>6}function q(p,b,R,D){for(;b<=R;b++){let U=G(p[b]),k=j(p[b]);if(U>>k)throw new Error("Invalid table entry");if(k>14){let Y=D[U>>k-14];if(Y.len)throw new Error("Invalid table entry");if(Y.lit++,Y.p){let ie=Y.p;Y.p=new Array(Y.lit);for(let ee=0;ee<Y.lit-1;++ee)Y.p[ee]=ie[ee]}else Y.p=new Array(1);Y.p[Y.lit-1]=b}else if(k){let Y=0;for(let ie=1<<14-k;ie>0;ie--){let ee=D[(U<<14-k)+Y];if(ee.len||ee.p)throw new Error("Invalid table entry");ee.len=k,ee.lit=b,Y++}}}return!0}let ce={c:0,lc:0};function $(p,b,R,D){p=p<<8|Xe(R,D),b+=8,ce.c=p,ce.lc=b}let fe={c:0,lc:0};function De(p,b,R,D,U,k,Y,ie,ee){if(p==b){D<8&&($(R,D,U,k),R=ce.c,D=ce.lc),D-=8;let ne=R>>D;if(ne=new Uint8Array([ne])[0],ie.value+ne>ee)return!1;let se=Y[ie.value-1];for(;ne-- >0;)Y[ie.value++]=se}else if(ie.value<ee)Y[ie.value++]=p;else return!1;fe.c=R,fe.lc=D}function J(p){return p&65535}function de(p){let b=J(p);return b>32767?b-65536:b}let ge={a:0,b:0};function pe(p,b){let R=de(p),U=de(b),k=R+(U&1)+(U>>1),Y=k,ie=k-U;ge.a=Y,ge.b=ie}function ve(p,b){let R=J(p),D=J(b),U=R-(D>>1)&65535,k=D+U-32768&65535;ge.a=k,ge.b=U}function Ye(p,b,R,D,U,k,Y){let ie=Y<16384,ee=R>U?U:R,ne=1,se,ae;for(;ne<=ee;)ne<<=1;for(ne>>=1,se=ne,ne>>=1;ne>=1;){ae=0;let Te=ae+k*(U-se),Ae=k*ne,Oe=k*se,Ue=D*ne,Ce=D*se,we,vt,st,qt;for(;ae<=Te;ae+=Oe){let Rt=ae,ct=ae+D*(R-se);for(;Rt<=ct;Rt+=Ce){let Yt=Rt+Ue,bt=Rt+Ae,Nt=bt+Ue;ie?(pe(p[Rt+b],p[bt+b]),we=ge.a,st=ge.b,pe(p[Yt+b],p[Nt+b]),vt=ge.a,qt=ge.b,pe(we,vt),p[Rt+b]=ge.a,p[Yt+b]=ge.b,pe(st,qt),p[bt+b]=ge.a,p[Nt+b]=ge.b):(ve(p[Rt+b],p[bt+b]),we=ge.a,st=ge.b,ve(p[Yt+b],p[Nt+b]),vt=ge.a,qt=ge.b,ve(we,vt),p[Rt+b]=ge.a,p[Yt+b]=ge.b,ve(st,qt),p[bt+b]=ge.a,p[Nt+b]=ge.b)}if(R&ne){let Yt=Rt+Ae;ie?pe(p[Rt+b],p[Yt+b]):ve(p[Rt+b],p[Yt+b]),we=ge.a,p[Yt+b]=ge.b,p[Rt+b]=we}}if(U&ne){let Rt=ae,ct=ae+D*(R-se);for(;Rt<=ct;Rt+=Ce){let Yt=Rt+Ue;ie?pe(p[Rt+b],p[Yt+b]):ve(p[Rt+b],p[Yt+b]),we=ge.a,p[Yt+b]=ge.b,p[Rt+b]=we}}se=ne,ne>>=1}return ae}function je(p,b,R,D,U,k,Y,ie,ee){let ne=0,se=0,ae=Y,Te=Math.trunc(D.value+(U+7)/8);for(;D.value<Te;)for($(ne,se,R,D),ne=ce.c,se=ce.lc;se>=14;){let Oe=ne>>se-14&16383,Ue=b[Oe];if(Ue.len)se-=Ue.len,De(Ue.lit,k,ne,se,R,D,ie,ee,ae),ne=fe.c,se=fe.lc;else{if(!Ue.p)throw new Error("hufDecode issues");let Ce;for(Ce=0;Ce<Ue.lit;Ce++){let we=j(p[Ue.p[Ce]]);for(;se<we&&D.value<Te;)$(ne,se,R,D),ne=ce.c,se=ce.lc;if(se>=we&&G(p[Ue.p[Ce]])==(ne>>se-we&(1<<we)-1)){se-=we,De(Ue.p[Ce],k,ne,se,R,D,ie,ee,ae),ne=fe.c,se=fe.lc;break}}if(Ce==Ue.lit)throw new Error("hufDecode issues")}}let Ae=8-U&7;for(ne>>=Ae,se-=Ae;se>0;){let Oe=b[ne<<14-se&16383];if(Oe.len)se-=Oe.len,De(Oe.lit,k,ne,se,R,D,ie,ee,ae),ne=fe.c,se=fe.lc;else throw new Error("hufDecode issues")}return!0}function ot(p,b,R,D,U,k){let Y={value:0},ie=R.value,ee=Qe(b,R),ne=Qe(b,R);R.value+=4;let se=Qe(b,R);if(R.value+=4,ee<0||ee>=65537||ne<0||ne>=65537)throw new Error("Something wrong with HUF_ENCSIZE");let ae=new Array(65537),Te=new Array(16384);C(Te);let Ae=D-(R.value-ie);if(F(p,R,Ae,ee,ne,ae),se>8*(D-(R.value-ie)))throw new Error("Something wrong with hufUncompress");q(ae,ee,ne,Te),je(ae,Te,p,R,se,ne,k,U,Y)}function le(p,b,R){for(let D=0;D<R;++D)b[D]=p[b[D]]}function ye(p){for(let b=1;b<p.length;b++){let R=p[b-1]+p[b]-128;p[b]=R}}function z(p,b){let R=0,D=Math.floor((p.length+1)/2),U=0,k=p.length-1;for(;!(U>k||(b[U++]=p[R++],U>k));)b[U++]=p[D++]}function Ze(p){let b=p.byteLength,R=new Array,D=0,U=new DataView(p);for(;b>0;){let k=U.getInt8(D++);if(k<0){let Y=-k;b-=Y+1;for(let ie=0;ie<Y;ie++)R.push(U.getUint8(D++))}else{let Y=k;b-=2;let ie=U.getUint8(D++);for(let ee=0;ee<Y+1;ee++)R.push(ie)}}return R}function Se(p,b,R,D,U,k){let Y=new DataView(k.buffer),ie=R[p.idx[0]].width,ee=R[p.idx[0]].height,ne=3,se=Math.floor(ie/8),ae=Math.ceil(ie/8),Te=Math.ceil(ee/8),Ae=ie-(ae-1)*8,Oe=ee-(Te-1)*8,Ue={value:0},Ce=new Array(ne),we=new Array(ne),vt=new Array(ne),st=new Array(ne),qt=new Array(ne);for(let ct=0;ct<ne;++ct)qt[ct]=b[p.idx[ct]],Ce[ct]=ct<1?0:Ce[ct-1]+ae*Te,we[ct]=new Float32Array(64),vt[ct]=new Uint16Array(64),st[ct]=new Uint16Array(ae*64);for(let ct=0;ct<Te;++ct){let Yt=8;ct==Te-1&&(Yt=Oe);let bt=8;for(let Et=0;Et<ae;++Et){Et==ae-1&&(bt=Ae);for(let mt=0;mt<ne;++mt)vt[mt].fill(0),vt[mt][0]=U[Ce[mt]++],We(Ue,D,vt[mt]),Re(vt[mt],we[mt]),Ke(we[mt]);ne==3&&Ge(we);for(let mt=0;mt<ne;++mt)O(we[mt],st[mt],Et*64)}let Nt=0;for(let Et=0;Et<ne;++Et){let mt=R[p.idx[Et]].type;for(let vn=8*ct;vn<8*ct+Yt;++vn){Nt=qt[Et][vn];for(let Un=0;Un<se;++Un){let Bn=Un*64+(vn&7)*8;Y.setUint16(Nt+0*2*mt,st[Et][Bn+0],!0),Y.setUint16(Nt+1*2*mt,st[Et][Bn+1],!0),Y.setUint16(Nt+2*2*mt,st[Et][Bn+2],!0),Y.setUint16(Nt+3*2*mt,st[Et][Bn+3],!0),Y.setUint16(Nt+4*2*mt,st[Et][Bn+4],!0),Y.setUint16(Nt+5*2*mt,st[Et][Bn+5],!0),Y.setUint16(Nt+6*2*mt,st[Et][Bn+6],!0),Y.setUint16(Nt+7*2*mt,st[Et][Bn+7],!0),Nt+=8*2*mt}}if(se!=ae)for(let vn=8*ct;vn<8*ct+Yt;++vn){let Un=qt[Et][vn]+8*se*2*mt,Bn=se*64+(vn&7)*8;for(let Go=0;Go<bt;++Go)Y.setUint16(Un+Go*2*mt,st[Et][Bn+Go],!0)}}}let Rt=new Uint16Array(ie);Y=new DataView(k.buffer);for(let ct=0;ct<ne;++ct){R[p.idx[ct]].decoded=!0;let Yt=R[p.idx[ct]].type;if(R[ct].type==2)for(let bt=0;bt<ee;++bt){let Nt=qt[ct][bt];for(let Et=0;Et<ie;++Et)Rt[Et]=Y.getUint16(Nt+Et*2*Yt,!0);for(let Et=0;Et<ie;++Et)Y.setFloat32(Nt+Et*2*Yt,V(Rt[Et]),!0)}}}function We(p,b,R){let D,U=1;for(;U<64;)D=b[p.value],D==65280?U=64:D>>8==255?U+=D&255:(R[U]=D,U++),p.value++}function Re(p,b){b[0]=V(p[0]),b[1]=V(p[1]),b[2]=V(p[5]),b[3]=V(p[6]),b[4]=V(p[14]),b[5]=V(p[15]),b[6]=V(p[27]),b[7]=V(p[28]),b[8]=V(p[2]),b[9]=V(p[4]),b[10]=V(p[7]),b[11]=V(p[13]),b[12]=V(p[16]),b[13]=V(p[26]),b[14]=V(p[29]),b[15]=V(p[42]),b[16]=V(p[3]),b[17]=V(p[8]),b[18]=V(p[12]),b[19]=V(p[17]),b[20]=V(p[25]),b[21]=V(p[30]),b[22]=V(p[41]),b[23]=V(p[43]),b[24]=V(p[9]),b[25]=V(p[11]),b[26]=V(p[18]),b[27]=V(p[24]),b[28]=V(p[31]),b[29]=V(p[40]),b[30]=V(p[44]),b[31]=V(p[53]),b[32]=V(p[10]),b[33]=V(p[19]),b[34]=V(p[23]),b[35]=V(p[32]),b[36]=V(p[39]),b[37]=V(p[45]),b[38]=V(p[52]),b[39]=V(p[54]),b[40]=V(p[20]),b[41]=V(p[22]),b[42]=V(p[33]),b[43]=V(p[38]),b[44]=V(p[46]),b[45]=V(p[51]),b[46]=V(p[55]),b[47]=V(p[60]),b[48]=V(p[21]),b[49]=V(p[34]),b[50]=V(p[37]),b[51]=V(p[47]),b[52]=V(p[50]),b[53]=V(p[56]),b[54]=V(p[59]),b[55]=V(p[61]),b[56]=V(p[35]),b[57]=V(p[36]),b[58]=V(p[48]),b[59]=V(p[49]),b[60]=V(p[57]),b[61]=V(p[58]),b[62]=V(p[62]),b[63]=V(p[63])}function Ke(p){let b=.5*Math.cos(.7853975),R=.5*Math.cos(3.14159/16),D=.5*Math.cos(3.14159/8),U=.5*Math.cos(3*3.14159/16),k=.5*Math.cos(5*3.14159/16),Y=.5*Math.cos(3*3.14159/8),ie=.5*Math.cos(7*3.14159/16),ee=new Array(4),ne=new Array(4),se=new Array(4),ae=new Array(4);for(let Te=0;Te<8;++Te){let Ae=Te*8;ee[0]=D*p[Ae+2],ee[1]=Y*p[Ae+2],ee[2]=D*p[Ae+6],ee[3]=Y*p[Ae+6],ne[0]=R*p[Ae+1]+U*p[Ae+3]+k*p[Ae+5]+ie*p[Ae+7],ne[1]=U*p[Ae+1]-ie*p[Ae+3]-R*p[Ae+5]-k*p[Ae+7],ne[2]=k*p[Ae+1]-R*p[Ae+3]+ie*p[Ae+5]+U*p[Ae+7],ne[3]=ie*p[Ae+1]-k*p[Ae+3]+U*p[Ae+5]-R*p[Ae+7],se[0]=b*(p[Ae+0]+p[Ae+4]),se[3]=b*(p[Ae+0]-p[Ae+4]),se[1]=ee[0]+ee[3],se[2]=ee[1]-ee[2],ae[0]=se[0]+se[1],ae[1]=se[3]+se[2],ae[2]=se[3]-se[2],ae[3]=se[0]-se[1],p[Ae+0]=ae[0]+ne[0],p[Ae+1]=ae[1]+ne[1],p[Ae+2]=ae[2]+ne[2],p[Ae+3]=ae[3]+ne[3],p[Ae+4]=ae[3]-ne[3],p[Ae+5]=ae[2]-ne[2],p[Ae+6]=ae[1]-ne[1],p[Ae+7]=ae[0]-ne[0]}for(let Te=0;Te<8;++Te)ee[0]=D*p[16+Te],ee[1]=Y*p[16+Te],ee[2]=D*p[48+Te],ee[3]=Y*p[48+Te],ne[0]=R*p[8+Te]+U*p[24+Te]+k*p[40+Te]+ie*p[56+Te],ne[1]=U*p[8+Te]-ie*p[24+Te]-R*p[40+Te]-k*p[56+Te],ne[2]=k*p[8+Te]-R*p[24+Te]+ie*p[40+Te]+U*p[56+Te],ne[3]=ie*p[8+Te]-k*p[24+Te]+U*p[40+Te]-R*p[56+Te],se[0]=b*(p[Te]+p[32+Te]),se[3]=b*(p[Te]-p[32+Te]),se[1]=ee[0]+ee[3],se[2]=ee[1]-ee[2],ae[0]=se[0]+se[1],ae[1]=se[3]+se[2],ae[2]=se[3]-se[2],ae[3]=se[0]-se[1],p[0+Te]=ae[0]+ne[0],p[8+Te]=ae[1]+ne[1],p[16+Te]=ae[2]+ne[2],p[24+Te]=ae[3]+ne[3],p[32+Te]=ae[3]-ne[3],p[40+Te]=ae[2]-ne[2],p[48+Te]=ae[1]-ne[1],p[56+Te]=ae[0]-ne[0]}function Ge(p){for(let b=0;b<64;++b){let R=p[0][b],D=p[1][b],U=p[2][b];p[0][b]=R+1.5747*U,p[1][b]=R-.1873*D-.4682*U,p[2][b]=R+1.8556*D}}function O(p,b,R){for(let D=0;D<64;++D)b[R+D]=Zh.toHalfFloat(I(p[D]))}function I(p){return p<=1?Math.sign(p)*Math.pow(Math.abs(p),2.2):Math.sign(p)*Math.pow(M,Math.abs(p)-1)}function te(p){return new DataView(p.array.buffer,p.offset.value,p.size)}function he(p){let b=p.viewer.buffer.slice(p.offset.value,p.offset.value+p.size),R=new Uint8Array(Ze(b)),D=new Uint8Array(R.length);return ye(R),z(R,D),new DataView(D.buffer)}function xe(p){let b=p.array.slice(p.offset.value,p.offset.value+p.size),R=Oo(b),D=new Uint8Array(R.length);return ye(R),z(R,D),new DataView(D.buffer)}function ue(p){let b=p.viewer,R={value:p.offset.value},D=new Uint16Array(p.columns*p.lines*(p.inputChannels.length*p.type)),U=new Uint8Array(8192),k=0,Y=new Array(p.inputChannels.length);for(let Oe=0,Ue=p.inputChannels.length;Oe<Ue;Oe++)Y[Oe]={},Y[Oe].start=k,Y[Oe].end=Y[Oe].start,Y[Oe].nx=p.columns,Y[Oe].ny=p.lines,Y[Oe].size=p.type,k+=Y[Oe].nx*Y[Oe].ny*Y[Oe].size;let ie=W(b,R),ee=W(b,R);if(ee>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ie<=ee)for(let Oe=0;Oe<ee-ie+1;Oe++)U[Oe+ie]=Z(b,R);let ne=new Uint16Array(65536),se=_(U,ne),ae=Qe(b,R);ot(p.array,b,R,ae,D,k);for(let Oe=0;Oe<p.inputChannels.length;++Oe){let Ue=Y[Oe];for(let Ce=0;Ce<Y[Oe].size;++Ce)Ye(D,Ue.start+Ce,Ue.nx,Ue.size,Ue.ny,Ue.nx*Ue.size,se)}le(ne,D,k);let Te=0,Ae=new Uint8Array(D.buffer.byteLength);for(let Oe=0;Oe<p.lines;Oe++)for(let Ue=0;Ue<p.inputChannels.length;Ue++){let Ce=Y[Ue],we=Ce.nx*Ce.size,vt=new Uint8Array(D.buffer,Ce.end*2,we*2);Ae.set(vt,Te),Te+=we*2,Ce.end+=we}return new DataView(Ae.buffer)}function Je(p){let b=p.array.slice(p.offset.value,p.offset.value+p.size),R=Oo(b),D=p.inputChannels.length*p.lines*p.columns*p.totalBytes,U=new ArrayBuffer(D),k=new DataView(U),Y=0,ie=0,ee=new Array(4);for(let ne=0;ne<p.lines;ne++)for(let se=0;se<p.inputChannels.length;se++){let ae=0;switch(p.inputChannels[se].pixelType){case 1:ee[0]=Y,ee[1]=ee[0]+p.columns,Y=ee[1]+p.columns;for(let Ae=0;Ae<p.columns;++Ae){let Oe=R[ee[0]++]<<8|R[ee[1]++];ae+=Oe,k.setUint16(ie,ae,!0),ie+=2}break;case 2:ee[0]=Y,ee[1]=ee[0]+p.columns,ee[2]=ee[1]+p.columns,Y=ee[2]+p.columns;for(let Ae=0;Ae<p.columns;++Ae){let Oe=R[ee[0]++]<<24|R[ee[1]++]<<16|R[ee[2]++]<<8;ae+=Oe,k.setUint32(ie,ae,!0),ie+=4}break}}return k}function Ie(p){let b=p.viewer,R={value:p.offset.value},D=new Uint8Array(p.columns*p.lines*(p.inputChannels.length*p.type*2)),U={version:Q(b,R),unknownUncompressedSize:Q(b,R),unknownCompressedSize:Q(b,R),acCompressedSize:Q(b,R),dcCompressedSize:Q(b,R),rleCompressedSize:Q(b,R),rleUncompressedSize:Q(b,R),rleRawSize:Q(b,R),totalAcUncompressedCount:Q(b,R),totalDcUncompressedCount:Q(b,R),acCompression:Q(b,R)};if(U.version<2)throw new Error("EXRLoader.parse: "+qe.compression+" version "+U.version+" is unsupported");let k=new Array,Y=W(b,R)-2;for(;Y>0;){let Ue=Le(b.buffer,R),Ce=Z(b,R),we=Ce>>2&3,vt=(Ce>>4)-1,st=new Int8Array([vt])[0],qt=Z(b,R);k.push({name:Ue,index:st,type:qt,compression:we}),Y-=Ue.length+3}let ie=qe.channels,ee=new Array(p.inputChannels.length);for(let Ue=0;Ue<p.inputChannels.length;++Ue){let Ce=ee[Ue]={},we=ie[Ue];Ce.name=we.name,Ce.compression=0,Ce.decoded=!1,Ce.type=we.pixelType,Ce.pLinear=we.pLinear,Ce.width=p.columns,Ce.height=p.lines}let ne={idx:new Array(3)};for(let Ue=0;Ue<p.inputChannels.length;++Ue){let Ce=ee[Ue];for(let we=0;we<k.length;++we){let vt=k[we];Ce.name==vt.name&&(Ce.compression=vt.compression,vt.index>=0&&(ne.idx[vt.index]=Ue),Ce.offset=Ue)}}let se,ae,Te;if(U.acCompressedSize>0)switch(U.acCompression){case 0:se=new Uint16Array(U.totalAcUncompressedCount),ot(p.array,b,R,U.acCompressedSize,se,U.totalAcUncompressedCount);break;case 1:let Ue=p.array.slice(R.value,R.value+U.totalAcUncompressedCount),Ce=Oo(Ue);se=new Uint16Array(Ce.buffer),R.value+=U.totalAcUncompressedCount;break}if(U.dcCompressedSize>0){let Ue={array:p.array,offset:R,size:U.dcCompressedSize};ae=new Uint16Array(xe(Ue).buffer),R.value+=U.dcCompressedSize}if(U.rleRawSize>0){let Ue=p.array.slice(R.value,R.value+U.rleCompressedSize),Ce=Oo(Ue);Te=Ze(Ce.buffer),R.value+=U.rleCompressedSize}let Ae=0,Oe=new Array(ee.length);for(let Ue=0;Ue<Oe.length;++Ue)Oe[Ue]=new Array;for(let Ue=0;Ue<p.lines;++Ue)for(let Ce=0;Ce<ee.length;++Ce)Oe[Ce].push(Ae),Ae+=ee[Ce].width*p.type*2;Se(ne,Oe,ee,se,ae,D);for(let Ue=0;Ue<ee.length;++Ue){let Ce=ee[Ue];if(!Ce.decoded)switch(Ce.compression){case 2:let we=0,vt=0;for(let st=0;st<p.lines;++st){let qt=Oe[Ue][we];for(let Rt=0;Rt<Ce.width;++Rt){for(let ct=0;ct<2*Ce.type;++ct)D[qt++]=Te[vt+ct*Ce.width*Ce.height];vt++}we++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(D.buffer)}function Le(p,b){let R=new Uint8Array(p),D=0;for(;R[b.value+D]!=0;)D+=1;let U=new TextDecoder().decode(R.slice(b.value,b.value+D));return b.value=b.value+D+1,U}function it(p,b,R){let D=new TextDecoder().decode(new Uint8Array(p).slice(b.value,b.value+R));return b.value=b.value+R,D}function be(p,b){let R=$e(p,b),D=Qe(p,b);return[R,D]}function Ve(p,b){let R=Qe(p,b),D=Qe(p,b);return[R,D]}function $e(p,b){let R=p.getInt32(b.value,!0);return b.value=b.value+4,R}function Qe(p,b){let R=p.getUint32(b.value,!0);return b.value=b.value+4,R}function Xe(p,b){let R=p[b.value];return b.value=b.value+1,R}function Z(p,b){let R=p.getUint8(b.value);return b.value=b.value+1,R}let Q=function(p,b){let R;return"getBigInt64"in DataView.prototype?R=Number(p.getBigInt64(b.value,!0)):R=p.getUint32(b.value+4,!0)+Number(p.getUint32(b.value,!0)<<32),b.value+=8,R};function oe(p,b){let R=p.getFloat32(b.value,!0);return b.value+=4,R}function B(p,b){return Zh.toHalfFloat(oe(p,b))}function V(p){let b=(p&31744)>>10,R=p&1023;return(p>>15?-1:1)*(b?b===31?R?NaN:1/0:Math.pow(2,b-15)*(1+R/1024):6103515625e-14*(R/1024))}function W(p,b){let R=p.getUint16(b.value,!0);return b.value+=2,R}function re(p,b){return V(W(p,b))}function Ee(p,b,R,D){let U=R.value,k=[];for(;R.value<U+D-1;){let Y=Le(b,R),ie=$e(p,R),ee=Z(p,R);R.value+=3;let ne=$e(p,R),se=$e(p,R);k.push({name:Y,pixelType:ie,pLinear:ee,xSampling:ne,ySampling:se})}return R.value+=1,k}function Me(p,b){let R=oe(p,b),D=oe(p,b),U=oe(p,b),k=oe(p,b),Y=oe(p,b),ie=oe(p,b),ee=oe(p,b),ne=oe(p,b);return{redX:R,redY:D,greenX:U,greenY:k,blueX:Y,blueY:ie,whiteX:ee,whiteY:ne}}function Fe(p,b){let R=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],D=Z(p,b);return R[D]}function nt(p,b){let R=$e(p,b),D=$e(p,b),U=$e(p,b),k=$e(p,b);return{xMin:R,yMin:D,xMax:U,yMax:k}}function lt(p,b){let R=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],D=Z(p,b);return R[D]}function tt(p,b){let R=["ENVMAP_LATLONG","ENVMAP_CUBE"],D=Z(p,b);return R[D]}function xt(p,b){let R=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],D=["ROUND_DOWN","ROUND_UP"],U=Qe(p,b),k=Qe(p,b),Y=Z(p,b);return{xSize:U,ySize:k,levelMode:R[Y&15],roundingMode:D[Y>>4]}}function Dt(p,b){let R=oe(p,b),D=oe(p,b);return[R,D]}function Ut(p,b){let R=oe(p,b),D=oe(p,b),U=oe(p,b);return[R,D,U]}function ht(p,b,R,D,U){if(D==="string"||D==="stringvector"||D==="iccProfile")return it(b,R,U);if(D==="chlist")return Ee(p,b,R,U);if(D==="chromaticities")return Me(p,R);if(D==="compression")return Fe(p,R);if(D==="box2i")return nt(p,R);if(D==="envmap")return tt(p,R);if(D==="tiledesc")return xt(p,R);if(D==="lineOrder")return lt(p,R);if(D==="float")return oe(p,R);if(D==="v2f")return Dt(p,R);if(D==="v3f")return Ut(p,R);if(D==="int")return $e(p,R);if(D==="rational")return be(p,R);if(D==="timecode")return Ve(p,R);if(D==="preview")return R.value+=U,"skipped";R.value+=U}function Ht(p,b){let R=Math.log2(p);return b=="ROUND_DOWN"?Math.floor(R):Math.ceil(R)}function Ln(p,b,R){let D=0;switch(p.levelMode){case"ONE_LEVEL":D=1;break;case"MIPMAP_LEVELS":D=Ht(Math.max(b,R),p.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return D}function pi(p,b,R,D){let U=new Array(p);for(let k=0;k<p;k++){let Y=1<<k,ie=b/Y|0;D=="ROUND_UP"&&ie*Y<b&&(ie+=1);let ee=Math.max(ie,1);U[k]=(ee+R-1)/R|0}return U}function ws(){let p=this,b=p.offset,R={value:0};for(let D=0;D<p.tileCount;D++){let U=$e(p.viewer,b),k=$e(p.viewer,b);b.value+=8,p.size=Qe(p.viewer,b);let Y=U*p.blockWidth,ie=k*p.blockHeight;p.columns=Y+p.blockWidth>p.width?p.width-Y:p.blockWidth,p.lines=ie+p.blockHeight>p.height?p.height-ie:p.blockHeight;let ee=p.columns*p.totalBytes,se=p.size<p.lines*ee?p.uncompress(p):te(p);b.value+=p.size;for(let ae=0;ae<p.lines;ae++){let Te=ae*p.columns*p.totalBytes;for(let Ae=0;Ae<p.inputChannels.length;Ae++){let Oe=qe.channels[Ae].name,Ue=p.channelByteOffsets[Oe]*p.columns,Ce=p.decodeChannels[Oe];if(Ce===void 0)continue;R.value=Te+Ue;let we=(p.height-(1+ie+ae))*p.outLineWidth;for(let vt=0;vt<p.columns;vt++){let st=we+(vt+Y)*p.outputChannels+Ce;p.byteArray[st]=p.getter(se,R)}}}}}function ji(){let p=this,b=p.offset,R={value:0};for(let D=0;D<p.height/p.blockHeight;D++){let U=$e(p.viewer,b)-qe.dataWindow.yMin;p.size=Qe(p.viewer,b),p.lines=U+p.blockHeight>p.height?p.height-U:p.blockHeight;let k=p.columns*p.totalBytes,ie=p.size<p.lines*k?p.uncompress(p):te(p);b.value+=p.size;for(let ee=0;ee<p.blockHeight;ee++){let ne=D*p.blockHeight,se=ee+p.scanOrder(ne);if(se>=p.height)continue;let ae=ee*k,Te=(p.height-1-se)*p.outLineWidth;for(let Ae=0;Ae<p.inputChannels.length;Ae++){let Oe=qe.channels[Ae].name,Ue=p.channelByteOffsets[Oe]*p.columns,Ce=p.decodeChannels[Oe];if(Ce!==void 0){R.value=ae+Ue;for(let we=0;we<p.columns;we++){let vt=Te+we*p.outputChannels+Ce;p.byteArray[vt]=p.getter(ie,R)}}}}}}function qs(p,b,R){let D={};if(p.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");D.version=p.getUint8(4);let U=p.getUint8(5);D.spec={singleTile:!!(U&2),longName:!!(U&4),deepFormat:!!(U&8),multiPart:!!(U&16)},R.value=8;let k=!0;for(;k;){let Y=Le(b,R);if(Y==0)k=!1;else{let ie=Le(b,R),ee=Qe(p,R),ne=ht(p,b,R,ie,ee);ne===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${ie}'.`):D[Y]=ne}}if(U&-7)throw console.error("THREE.EXRHeader:",D),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return D}function Si(p,b,R,D,U){let k={size:0,viewer:b,array:R,offset:D,width:p.dataWindow.xMax-p.dataWindow.xMin+1,height:p.dataWindow.yMax-p.dataWindow.yMin+1,inputChannels:p.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:pn};switch(p.compression){case"NO_COMPRESSION":k.blockHeight=1,k.uncompress=te;break;case"RLE_COMPRESSION":k.blockHeight=1,k.uncompress=he;break;case"ZIPS_COMPRESSION":k.blockHeight=1,k.uncompress=xe;break;case"ZIP_COMPRESSION":k.blockHeight=16,k.uncompress=xe;break;case"PIZ_COMPRESSION":k.blockHeight=32,k.uncompress=ue;break;case"PXR24_COMPRESSION":k.blockHeight=16,k.uncompress=Je;break;case"DWAA_COMPRESSION":k.blockHeight=32,k.uncompress=Ie;break;case"DWAB_COMPRESSION":k.blockHeight=256,k.uncompress=Ie;break;default:throw new Error("EXRLoader.parse: "+p.compression+" is unsupported")}let Y={};for(let se of p.channels)switch(se.name){case"Y":case"R":case"G":case"B":case"A":Y[se.name]=!0,k.type=se.pixelType}let ie=!1;if(Y.R&&Y.G&&Y.B)ie=!Y.A,k.outputChannels=4,k.decodeChannels={R:0,G:1,B:2,A:3};else if(Y.Y)k.outputChannels=1,k.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(k.type==1)switch(U){case An:k.getter=re;break;case tn:k.getter=W;break}else if(k.type==2)switch(U){case An:k.getter=oe;break;case tn:k.getter=B}else throw new Error("EXRLoader.parse: unsupported pixelType "+k.type+" for "+p.compression+".");k.columns=k.width;let ee=k.width*k.height*k.outputChannels;switch(U){case An:k.byteArray=new Float32Array(ee),ie&&k.byteArray.fill(1,0,ee);break;case tn:k.byteArray=new Uint16Array(ee),ie&&k.byteArray.fill(15360,0,ee);break;default:console.error("THREE.EXRLoader: unsupported type: ",U);break}let ne=0;for(let se of p.channels)k.decodeChannels[se.name]!==void 0&&(k.channelByteOffsets[se.name]=ne),ne+=se.pixelType*2;if(k.totalBytes=ne,k.outLineWidth=k.width*k.outputChannels,p.lineOrder==="INCREASING_Y"?k.scanOrder=se=>se:k.scanOrder=se=>k.height-1-se,k.outputChannels==4?(k.format=En,k.colorSpace=pn):(k.format=To,k.colorSpace=gi),p.spec.singleTile){k.blockHeight=p.tiles.ySize,k.blockWidth=p.tiles.xSize;let se=Ln(p.tiles,k.width,k.height),ae=pi(se,k.width,p.tiles.xSize,p.tiles.roundingMode),Te=pi(se,k.height,p.tiles.ySize,p.tiles.roundingMode);k.tileCount=ae[0]*Te[0];for(let Ae=0;Ae<se;Ae++)for(let Oe=0;Oe<Te[Ae];Oe++)for(let Ue=0;Ue<ae[Ae];Ue++)Q(b,D);k.decode=ws.bind(k)}else{k.blockWidth=k.width;let se=Math.ceil(k.height/k.blockHeight);for(let ae=0;ae<se;ae++)Q(b,D);k.decode=ji.bind(k)}return k}let Ts={value:0},me=new DataView(e),et=new Uint8Array(e),qe=qs(me,e,Ts),at=Si(qe,me,et,Ts,this.type);return at.decode(),{header:qe,width:at.width,height:at.height,data:at.byteArray,format:at.format,colorSpace:at.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){o.colorSpace=a.colorSpace,o.minFilter=Jt,o.magFilter=Jt,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,r,n,s)}};function ui(i=1){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Gs=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Jn=(i,e,t)=>i+(e-i)*t,Hr=i=>i*i*(3-2*i),Qd=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Mi=(i,e,t)=>Gs((i-e)/(t-e));function Vt(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e;let s=n.getContext("2d");return t(s,i,e),n}function kt(i,{srgb:e=!0,repeat:t=!1,aniso:n=8}={}){let s=i instanceof sn?i:new ks(i);return e&&(s.colorSpace=Gt),t&&(s.wrapS=s.wrapT=hn),s.anisotropy=n,s.needsUpdate=!0,s}function $n(i="rgba(255,255,255,1)",e="rgba(255,255,255,0)",t=128){return kt(Vt(t,t,(n,s)=>{let r=n.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);r.addColorStop(0,i),r.addColorStop(1,e),n.fillStyle=r,n.fillRect(0,0,s,s)}))}var Vy=new L(0,1,0),xc=new L,Kd=new Ot,Jd=new L,$d=new L;function ep(i,e,t=.2,n=t,s=new He){xc.subVectors(e,i);let r=xc.length();return xc.normalize(),Kd.setFromUnitVectors(Vy,xc),$d.addVectors(i,e).multiplyScalar(.5),Jd.set(t,r,n),s.compose($d,Kd,Jd)}function Hi(i,e){let t=new Pe(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return i.setAttribute("color",new pt(s,3)),i}function Nn(i,e=["position","normal","uv","color"]){let t=i.index?i.toNonIndexed():i;for(let n of Object.keys(t.attributes))e.includes(n)||t.deleteAttribute(n);return e.includes("uv")&&!t.attributes.uv&&t.setAttribute("uv",new pt(new Float32Array(t.attributes.position.count*2),2)),t}var Gi=()=>new Promise(i=>requestAnimationFrame(()=>i()));function Fn(i,{height:e=2.6,strength:t=.32}={}){return i.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying float vGrimeY;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
{ vec4 gp = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
 gp = instanceMatrix * gp;
#endif
 vGrimeY = (modelMatrix * gp).y; }`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGrimeY;`).replace("#include <map_fragment>",`#include <map_fragment>
 diffuseColor.rgb *= mix(1.0 - ${t.toFixed(3)}, 1.0, smoothstep(0.0, ${e.toFixed(2)}, vGrimeY));`)},i.customProgramCacheKey=()=>"grime"+e+t,i}var Ms=[{p:0,name:"dawn",gain:1},{p:.17,name:"city",gain:1},{p:.56,name:"city",gain:.95},{p:.7,name:"sunset",gain:1},{p:.8,name:"sunset",gain:.8},{p:.9,name:"night",gain:1.5},{p:1,name:"night",gain:1.5}];async function tp(i,{steps:e=4}={}){let t=new gc,n=[...new Set(Ms.map(f=>f.name))],s={};await Promise.all(n.map(f=>t.loadAsync(`assets/hdri/${f}.exr`).then(d=>{d.minFilter=d.magFilter=Jt,d.generateMipmaps=!1,s[f]=d})));let r=new cs(i),o=r._setSize.bind(r);r._setSize=()=>o(128);let a=new hs,c=new Pt({side:$t,depthWrite:!1,uniforms:{a:{value:null},b:{value:null},k:{value:0},ga:{value:1},gb:{value:1}},vertexShader:`
      varying vec3 vDir;
      void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform sampler2D a; uniform sampler2D b; uniform float k; uniform float ga; uniform float gb;
      varying vec3 vDir;
      vec2 eq(vec3 d) { return vec2(atan(d.z, d.x) * 0.15915494 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5); }
      void main() {
        vec2 uv = eq(normalize(vDir));
        vec3 c = mix(texture2D(a, uv).rgb * ga, texture2D(b, uv).rgb * gb, k);
        gl_FragColor = vec4(c, 1.0);
      }`});a.add(new ke(new Pn(5,64,32),c));let l=e,h=new Map,u=(f,d)=>{let x=Ms[f],v=Ms[f+1],m=d===0?`${x.name}*${x.gain}`:d===1?`${v.name}*${v.gain}`:`${x.name}*${x.gain}>${v.name}*${v.gain}@${d}`;if(h.has(m))return h.get(m);c.uniforms.a.value=s[x.name],c.uniforms.b.value=s[v.name],c.uniforms.ga.value=x.gain,c.uniforms.gb.value=v.gain,c.uniforms.k.value=d;let g=r.fromScene(a,0,.1,20);return h.set(m,g.texture),g.texture};for(let f=0;f<Ms.length-1;f++)for(let d=0;d<=l;d++)u(f,d/l);return r.dispose(),{update(f,d){let x=0;for(;x<Ms.length-2&&f>Ms[x+1].p;)x++;let v=Ms[x],m=Ms[x+1],g=Math.round(Hr(Mi(f,v.p,m.p))*l)/l,A=u(x,g);d.environment!==A&&(d.environment=A)}}}var np={uniforms:{tDiffuse:{value:null},time:{value:0},vignette:{value:.32},grain:{value:.035},ca:{value:.0025},lift:{value:new L(0,0,0)},sat:{value:1.06}},vertexShader:`
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
    }`};var Wy={plaster:{orm:!0},asphalt:{orm:!0},pavers:{orm:!0},corrugated:{orm:!0},steel:{orm:!0},concrete:{orm:!0},ground:{orm:!0},bark:{orm:!0},wood:{orm:!0}},Xy=["curb_col","leaves_col","leaves_nor","louver_col","louver_nor","rail_col"],rn={};async function ip(i,e){let t=new xs,n=Math.min(16,i.capabilities.getMaxAnisotropy()),s=[],r=(a,c,l)=>s.push(t.loadAsync(`assets/tex/${c}.webp`).then(h=>{h.wrapS=h.wrapT=hn,h.anisotropy=n,l&&(h.colorSpace=Gt),rn[a]=h}));for(let a of Object.keys(Wy))r(`${a}_col`,`${a}_col`,!0),r(`${a}_nor`,`${a}_nor`,!1),r(`${a}_orm`,`${a}_orm`,!1);for(let a of Xy)r(a,a,a.endsWith("_col"));let o=0;await Promise.all(s.map(a=>a.then(()=>e?.(++o/s.length))))}var ru=(i,e,t)=>{if(e===1&&t===1)return i;let n=i.clone();return n.repeat.set(e,t),n.needsUpdate=!0,n};function gt(i,{repeat:e=[1,1],normalScale:t=1,physical:n=!1,...s}={}){let[r,o]=e,a=n?Bt:rt,c=ru(rn[`${i}_orm`],r,o);return new a({map:ru(rn[`${i}_col`],r,o),normalMap:ru(rn[`${i}_nor`],r,o),normalScale:new _e(t,t),roughnessMap:c,metalnessMap:c,aoMap:c,aoMapIntensity:.9,roughness:1,metalness:1,...s})}function Dn(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ct,l=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let x=0;x<d.count;++x)u.push(d.getX(x)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=sp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][f]);let x=sp(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}return c}function sp(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new pt(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,d=h.count;f<d;f++)for(let x=0;x<t;x++){let v=h.getComponent(f,x);a.setComponent(f+u,x,v)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function ou(i,e){if(e===wd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ao||e===rc){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ao)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var vc=class extends ke{constructor(e,t={}){super(e),this.isWater=!0;let n=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,c=t.time!==void 0?t.time:0,l=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new L(.70707,.70707,0),u=new Pe(t.sunColor!==void 0?t.sunColor:16777215),f=new Pe(t.waterColor!==void 0?t.waterColor:8355711),d=t.eye!==void 0?t.eye:new L(0,0,0),x=t.distortionScale!==void 0?t.distortionScale:20,v=t.side!==void 0?t.side:Xn,m=t.fog!==void 0?t.fog:!1,g=new si,A=new L,E=new L,y=new L,P=new He,w=new L(0,0,-1),S=new wt,T=new L,M=new L,_=new wt,C=new He,N=new en,H=new Zt(s,r),X={name:"MirrorShader",uniforms:mn.merge([ze.fog,ze.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new He},sunColor:{value:new Pe(8355711)},sunDirection:{value:new L(.70707,.70707,0)},eye:{value:new L},waterColor:{value:new Pe(5592405)}}]),vertexShader:`
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
				}`},K=new Pt({name:X.name,uniforms:mn.clone(X.uniforms),vertexShader:X.vertexShader,fragmentShader:X.fragmentShader,lights:!0,side:v,fog:m});K.uniforms.mirrorSampler.value=H.texture,K.uniforms.textureMatrix.value=C,K.uniforms.alpha.value=a,K.uniforms.time.value=c,K.uniforms.normalSampler.value=l,K.uniforms.sunColor.value=u,K.uniforms.waterColor.value=f,K.uniforms.sunDirection.value=h,K.uniforms.distortionScale.value=x,K.uniforms.eye.value=d,n.material=K,n.onBeforeRender=function(F,j,G){if(E.setFromMatrixPosition(n.matrixWorld),y.setFromMatrixPosition(G.matrixWorld),P.extractRotation(n.matrixWorld),A.set(0,0,1),A.applyMatrix4(P),T.subVectors(E,y),T.dot(A)>0)return;T.reflect(A).negate(),T.add(E),P.extractRotation(G.matrixWorld),w.set(0,0,-1),w.applyMatrix4(P),w.add(y),M.subVectors(E,w),M.reflect(A).negate(),M.add(E),N.position.copy(T),N.up.set(0,1,0),N.up.applyMatrix4(P),N.up.reflect(A),N.lookAt(M),N.far=G.far,N.updateMatrixWorld(),N.projectionMatrix.copy(G.projectionMatrix),C.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),C.multiply(N.projectionMatrix),C.multiply(N.matrixWorldInverse),g.setFromNormalAndCoplanarPoint(A,E),g.applyMatrix4(N.matrixWorldInverse),S.set(g.normal.x,g.normal.y,g.normal.z,g.constant);let q=N.projectionMatrix;_.x=(Math.sign(S.x)+q.elements[8])/q.elements[0],_.y=(Math.sign(S.y)+q.elements[9])/q.elements[5],_.z=-1,_.w=(1+q.elements[10])/q.elements[14],S.multiplyScalar(2/S.dot(_)),q.elements[2]=S.x,q.elements[6]=S.y,q.elements[10]=S.z+1-o,q.elements[14]=S.w,d.setFromMatrixPosition(G.matrixWorld);let ce=F.getRenderTarget(),$=F.xr.enabled,fe=F.shadowMap.autoUpdate;n.visible=!1,F.xr.enabled=!1,F.shadowMap.autoUpdate=!1,F.setRenderTarget(H),F.state.buffers.depth.setMask(!0),F.autoClear===!1&&F.clear(),F.render(j,N),n.visible=!0,F.xr.enabled=$,F.shadowMap.autoUpdate=fe,F.setRenderTarget(ce);let De=G.viewport;De!==void 0&&F.state.viewport(De)}}};var yc=70,rp=(i,e,t=yc)=>`${Math.floor(i/t)},${Math.floor(e/t)}`,au=new L;function Gr(i,e,t,{colors:n=null,cast:s=!0,receive:r=!0,layer:o=0,chunk:a=yc,cull:c=0}={}){let l=new Map;t.forEach((u,f)=>{au.setFromMatrixPosition(u);let d=rp(au.x,au.z,a);l.has(d)||l.set(d,[]),l.get(d).push(f)});let h=[];for(let u of l.values()){let f=new yn(i,e,u.length);u.forEach((d,x)=>{f.setMatrixAt(x,t[d]),n&&f.setColorAt(x,n[d])}),f.castShadow=s,f.receiveShadow=r,f.computeBoundingSphere(),f.userData.indices=u,c&&(f.userData.cull=c),o&&f.layers.set(o),h.push(f)}return h}function qy(i,e=yc){let t=i.attributes.position,n=i.index?i.index.array:null,s=n?n.length/3:t.count/3,r=(c,l)=>n?n[c*3+l]:c*3+l,o=new Map;for(let c=0;c<s;c++){let l=r(c,0),h=r(c,1),u=r(c,2),f=(t.getX(l)+t.getX(h)+t.getX(u))/3,d=(t.getZ(l)+t.getZ(h)+t.getZ(u))/3,x=rp(f,d,e);o.has(x)||o.set(x,[]),o.get(x).push(c)}if(o.size<=1)return[i];let a=[];for(let c of o.values()){let l=new Map,h=[];for(let d of c)for(let x=0;x<3;x++){let v=r(d,x);l.has(v)||l.set(v,l.size),h.push(l.get(v))}let u=l.size,f=new Ct;for(let[d,x]of Object.entries(i.attributes)){let v=x.itemSize,m=new x.array.constructor(u*v);for(let[g,A]of l)for(let E=0;E<v;E++)m[A*v+E]=x.array[g*v+E];f.setAttribute(d,new pt(m,v,x.normalized))}f.setIndex(new pt(u>65535?Uint32Array.from(h):Uint16Array.from(h),1)),f.computeBoundingSphere(),f.computeBoundingBox(),a.push(f)}return a}function fi(i,{chunk:e=yc,cull:t=0}={}){let n=i.parent,s=qy(i.geometry,e);if(s.length<=1)return t&&(i.userData.cull=t),[i];let r=s.map(o=>{let a=new ke(o,i.material);return a.castShadow=i.castShadow,a.receiveShadow=i.receiveShadow,a.renderOrder=i.renderOrder,a.layers.mask=i.layers.mask,a.position.copy(i.position),a.quaternion.copy(i.quaternion),a.scale.copy(i.scale),t&&(a.userData.cull=t),n?.add(a),a});return n?.remove(i),i.geometry.dispose(),r}function cu(i){i.updateMatrixWorld(!0);let e=new He().copy(i.matrixWorld).invert(),t=new Map,n=[],s=c=>{for(let l=c;l&&l!==i;l=l.parent)if(l.userData.dynamic)return!0;return!1},r=c=>Object.values(c).some(l=>l&&l.isTexture),o=c=>c.isMeshStandardMaterial&&!c.isMeshPhysicalMaterial&&!r(c)&&!c.userData.live&&!c.vertexColors&&!c.onBeforeCompile.toString().includes("shader")?`std|${c.roughness}|${c.metalness}|${c.emissive.getHexString()}|${c.emissiveIntensity}|${c.side}|${c.flatShading}`:null;i.traverse(c=>{if(!c.isMesh||c.isInstancedMesh||c.isSkinnedMesh||s(c)||Array.isArray(c.material)||c.material.transparent||c.geometry.morphAttributes.position)return;let l=o(c.material),h=(l||c.material.uuid)+(c.castShadow?"s":"")+(c.receiveShadow?"r":"");t.has(h)||t.set(h,{material:c.material,sig:l,cast:c.castShadow,receive:c.receiveShadow,geos:[]});let u=c.geometry.index?c.geometry.toNonIndexed():c.geometry.clone();for(let f of Object.keys(u.attributes))["position","normal","uv"].includes(f)||u.deleteAttribute(f);if(u.attributes.uv||u.setAttribute("uv",new pt(new Float32Array(u.attributes.position.count*2),2)),u.attributes.normal||u.computeVertexNormals(),l){let f=c.material.color,d=u.attributes.position.count,x=new Float32Array(d*3);for(let v=0;v<d;v++)x[v*3]=f.r,x[v*3+1]=f.g,x[v*3+2]=f.b;u.setAttribute("color",new pt(x,3))}u.applyMatrix4(new He().multiplyMatrices(e,c.matrixWorld)),t.get(h).geos.push(u),n.push(c)});for(let c of n)c.parent.remove(c);let a=[];for(let{material:c,sig:l,cast:h,receive:u,geos:f}of t.values()){let d=f.length>1?Dn(f):f[0];if(!d)continue;let x=c;l&&(x=c.clone(),x.color.set(16777215),x.vertexColors=!0);let v=new ke(d,x);v.castShadow=h,v.receiveShadow=u,i.add(v),a.push(v)}return a}async function op(i,e,t,{extra:n=()=>{},onProgress:s=()=>{}}={}){let r=()=>new Promise(m=>requestAnimationFrame(()=>m())),o=[],a=[],c=new Set;e.traverse(m=>{m.visible===!1&&(o.push(m),m.visible=!0),m.frustumCulled&&(a.push(m),m.frustumCulled=!1);let g=m.material?Array.isArray(m.material)?m.material:[m.material]:[];for(let A of g)for(let E in A)A[E]&&A[E].isTexture&&c.add(A[E])});let l=location.search.includes("debug"),h=performance.now(),u=performance.now(),f=0;for(let m of c)i.initTexture(m),performance.now()-u>10?(s(.3*++f/c.size),await r(),u=performance.now()):f++;s(.3);try{i.compileAsync&&await i.compileAsync(e,t)}catch{}s(.55),l&&console.log("STAGE compiled",(performance.now()-h).toFixed(0));let d=new Zt(64,64),x=e.children.filter(m=>!m.isLight),v=Math.min(12,x.length);for(let m=0;m<v;m++)x.forEach((g,A)=>{g.visible=A%v===m}),i.setRenderTarget(d),n(),i.render(e,t),i.setRenderTarget(null),s(.55+.4*(m+1)/v),await r();for(let m of x)m.visible=!0;l&&console.log("STAGE warm render",(performance.now()-h).toFixed(0)),d.dispose();for(let m of o)m.visible=!1;for(let m of a)m.frustumCulled=!0;s(1)}var bc=class{constructor(e){this.items=[];let t=new un,n=new Rn;e.updateMatrixWorld(!0),e.traverse(s=>{let r=s.userData.cull;r&&(s.isInstancedMesh?(s.boundingSphere||s.computeBoundingSphere(),n.copy(s.boundingSphere).applyMatrix4(s.matrixWorld)):s.isMesh?(s.geometry.boundingSphere||s.geometry.computeBoundingSphere(),n.copy(s.geometry.boundingSphere).applyMatrix4(s.matrixWorld)):t.setFromObject(s).getBoundingSphere(n),this.items.push({o:s,c:n.center.clone(),r:n.radius,d:r}))})}update(e){for(let t of this.items)t.o.visible=t.c.distanceTo(e)-t.r<t.d}};var Ss=4.2,Wr=3.2,hp=[["MAA TARA SWEETS","\u09AE\u09BF\u09B7\u09CD\u099F\u09BE\u09A8\u09CD\u09A8 \u09AD\u09BE\u09A3\u09CD\u09A1\u09BE\u09B0","#b3261e","#ffe7a8"],["SHARMA STORES","GROCERY \xB7 DAILY NEEDS","#1f4e8c","#ffffff"],["XEROX \xB7 STD \xB7 ISD","LAMINATION \xB7 PRINTOUT","#f2c200","#1a1a1a"],["NEW MEDICAL HALL","\u0994\u09B7\u09A7\u09BE\u09B2\u09AF\u09BC \xB7 24 HRS","#0f7a4f","#ffffff"],["CHA & TOAST","\u099A\u09BE \xB7 \u099F\u09CB\u09B8\u09CD\u099F \xB7 \u0998\u09C1\u0997\u09A8\u09BF","#6b2f1a","#ffd9a0"],["MOBILE REPAIR","ALL BRANDS \xB7 RECHARGE","#202020","#3fe0ff"],["LAXMI JEWELLERS","HALLMARK GOLD \xB7 SINCE 1972","#7a1630","#f6d27a"],["BOOK DEPOT","\u09AC\u0987 \xB7 STATIONERY","#2c5530","#f3eedb"],["HOTEL BIRIYANI","MUTTON \xB7 CHICKEN \xB7 AC","#d8432f","#ffffff"],["PHOTO STUDIO","PASSPORT PHOTO IN 5 MIN","#3b2a68","#ffffff"],["GUPTA HARDWARE","PAINTS \xB7 SANITARY \xB7 TOOLS","#e86a10","#1a1a1a"],["FRESH JUICE CORNER","MOSAMBI \xB7 ANAR \xB7 SUGARCANE","#2f8f2f","#fff9c4"],["CYBER CAFE","INTERNET \xB7 FORMS \xB7 TICKETS","#0b3d91","#9be7ff"],["DAS TAILORS","LADIES & GENTS \xB7 ALTERATION","#7b5b3a","#fff3dc"],["RATION SHOP","FAIR PRICE \xB7 NO. 14/B","#55606b","#ffffff"],["SEN ELECTRICALS","FANS \xB7 WIRING \xB7 INVERTER","#ffd400","#0d2a6b"]];function Yy(){return kt(Vt(2048,1024,i=>{hp.forEach(([e,t,n,s],r)=>{let o=r%2*1024,a=Math.floor(r/2)*128,c=i.createLinearGradient(0,a,0,a+128);c.addColorStop(0,n),c.addColorStop(1,ap(n,-.25)),i.fillStyle=c,i.fillRect(o,a,1024,128),i.strokeStyle=ap(n,-.45),i.lineWidth=6,i.strokeRect(o+3,a+3,1018,122),i.fillStyle=s,i.textBaseline="middle",i.font='800 66px "Manrope", "Hind Siliguri", sans-serif',i.fillText(e,o+34,a+54),i.font='600 26px "Hind Siliguri", "Manrope", sans-serif',i.globalAlpha=.85,i.fillText(t,o+38,a+104),i.globalAlpha=1;for(let h=0;h<120;h++)i.fillStyle=`rgba(0,0,0,${Math.random()*.08})`,i.fillRect(o+Math.random()*1024,a+Math.random()*60,2+Math.random()*3,30+Math.random()*70);let l=i.createLinearGradient(0,a+90,0,a+128);l.addColorStop(0,"rgba(30,20,10,0)"),l.addColorStop(1,"rgba(30,20,10,0.35)"),i.fillStyle=l,i.fillRect(o,a+90,1024,38)})}))}function ap(i,e){let t=new Pe(i);return t.offsetHSL(0,0,e*.5),"#"+t.getHexString()}function jy(){return kt(Vt(256,256,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#ffe2b0"),n.addColorStop(1,"#f2a75c"),i.fillStyle=n,i.fillRect(0,0,e,t);for(let s=0;s<e;s+=2){let r=Math.sin(s*.19)*.5+Math.sin(s*.07+1)*.5;i.fillStyle=`rgba(120,60,20,${.08+r*.08})`,i.fillRect(s,0,2,t)}i.fillStyle="rgba(255,255,240,0.55)",i.fillRect(e*.55,t*.08,e*.35,6),i.fillStyle="rgba(60,40,30,0.5)",i.fillRect(e*.5,t*.3,e*.5,t*.7)}))}function Zy(){return kt(Vt(512,256,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#fff3d6"),n.addColorStop(1,"#c79a62"),i.fillStyle=n,i.fillRect(0,0,e,t);let s=["#a8483c","#c9a43a","#3e6690","#4a7a58","#e8e2d4","#c07a3a","#6a5080","#d9d0bf","#8a8478"];for(let o=0;o<4;o++){let a=18+o*52;i.fillStyle="#6b4a2a",i.fillRect(0,a+40,e,5);let c=4;for(;c<e-8;){let l=8+Math.random()*18,h=16+Math.random()*22;i.fillStyle=s[Math.floor(Math.random()*s.length)],i.fillRect(c,a+40-h,l,h),i.fillStyle="rgba(0,0,0,0.15)",i.fillRect(c+l-2,a+40-h,2,h),c+=l+1.5}}let r=i.createRadialGradient(e/2,t*.3,t*.2,e/2,t*.4,e*.6);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(20,12,4,0.55)"),i.fillStyle=r,i.fillRect(0,0,e,t),i.fillStyle="#4a3020",i.fillRect(0,t-40,e,40),i.fillStyle="rgba(255,255,255,0.08)",i.fillRect(0,t-40,e,3)}))}function Ky(){return kt(Vt(128,96,(i,e,t)=>{i.fillStyle="#e9e7e0",i.fillRect(0,0,e,t),i.fillStyle="#3a3a3a",i.beginPath(),i.arc(e*.62,t/2,t*.36,0,7),i.fill(),i.strokeStyle="#9a9a9a";for(let n=0;n<6;n++)i.beginPath(),i.arc(e*.62,t/2,t*.06*n,0,7),i.stroke();i.fillStyle="rgba(120,90,60,0.35)",i.fillRect(0,t-10,e,10)}))}var Vr=(i,e,t,n=0,s=0,r=0)=>Nn(new Ne(i,e,t).translate(n,s,r),["position","normal","uv"]),_c=null;function up(){if(_c)return _c;let i={frame:Dn([Vr(.14,.16,1.62,.07,1,0),Vr(.26,.07,1.72,.13,-.95,0),Vr(.1,1.9,.1,.05,0,-.71),Vr(.1,1.9,.1,.05,0,.71),Vr(.05,1.8,.05,.04,0,0),Vr(.05,.05,1.32,.04,.45,0)]),pane:new Tt(1.34,1.84).rotateY(Math.PI/2),shutter:new Ne(.035,1.84,.64),slab:new Ne(1,.14,2.8),rail:new Ne(.02,1,2.8),railSide:new Ne(1,1,.02),cloth:new Tt(.5,.75).rotateY(Math.PI/2).translate(0,-.37,0),ac:new Ne(.55,.5,.82),pipe:new Mt(.06,.06,1,8),shop:new Tt(1,1).rotateY(Math.PI/2),awning:(()=>{let r=new Ne(1.4,.06,1);return r.rotateZ(-.3),r})()},e=jy(),t=Zy(),n=rn.louver_col,s={frame:Fn(new rt({color:16777215,roughness:.55})),paneDark:new Bt({color:790805,roughness:.05,metalness:0,envMapIntensity:1.6,specularIntensity:1,ior:1.52}),paneLit:new Bt({color:2102798,map:e,emissive:16777215,emissiveMap:e,emissiveIntensity:.05,roughness:.08,envMapIntensity:1.2}),shutter:new rt({map:n,normalMap:rn.louver_nor,roughness:.75,color:16777215}),slab:Fn(gt("plaster",{repeat:[.4,.4],vertexColors:!1})),rail:new rt({map:rn.rail_col,alphaTest:.5,side:Xt,metalness:.6,roughness:.5,color:2236962}),cloth:new rt({side:Xt,roughness:.95,color:16777215}),ac:new rt({map:Ky(),roughness:.6}),pipe:new rt({color:3816510,roughness:.5,metalness:.2}),shopLit:new rt({map:t,emissive:16777215,emissiveMap:t,emissiveIntensity:.35,roughness:.4}),shutterRoll:gt("corrugated",{repeat:[1,1],color:10134440}),awning:new rt({roughness:.85,side:Xt,color:16777215})};return _c={geo:i,mats:s},_c}var cp={},lp={};function fp({lit:i=!1,shutters:e=!0,shutterColor:t="#2f5e44",frameColor:n="#f1ede3",open:s=.35}={}){let{geo:r,mats:o}=up(),a=new ft,c=lp[n]||(lp[n]=Fn(new rt({color:n,roughness:.55}))),l=new ke(r.frame,c);l.castShadow=l.receiveShadow=!0,a.add(l);let h=new ke(r.pane,i?o.paneLit:o.paneDark);if(h.position.x=.012,a.add(h),e){let u=cp[t]||(cp[t]=Object.assign(o.shutter.clone(),{}));u.color.set(t);for(let f of[-1,1]){let d=new ke(r.shutter,u);d.position.set(.06+Math.sin(s)*.3,0,f*1),d.rotation.y=f*s,d.castShadow=!0,a.add(d)}}return a}var Mc=class{constructor(e,{lite:t=!1}={}){this.r=e,this.lite=t,this.I={frame:[],paneDark:[],paneLit:[],shutter:[],slab:[],rail:[],railSide:[],cloth:[],ac:[],pipe:[],shopLit:[],shutterRoll:[],awning:[]},this.signGeos=[],this.wallGeos=[]}addBuilding({x:e,z:t,rot:n,side:s,perp:r,along:o,floors:a,tint:c}){let l=this.r,h=n+(s>0?0:Math.PI),u=new Ot().setFromAxisAngle(new L(0,1,0),h),f=new Ot().setFromAxisAngle(new L(0,1,0),n),d=s*(r/2),x=(w,S,T=0)=>new L(d+s*T,S,w).applyQuaternion(f).add(new L(e,0,t)),v=(w,S,T=0,M=[1,1,1],_,C=u)=>{let N=T?C.clone().multiply(new Ot().setFromAxisAngle(new L(0,1,0),T)):C;this.I[w].push({m:new He().compose(S,N,new L(...M)),color:_})},m=["#f1ede3","#f1ede3","#2f5e44","#5b3b24","#3b5a7a","#e8e0c8"][Math.floor(l()*6)],g=["#2f5e44","#2d6a5a","#3f6b3a","#5b3b24","#2f4f6f","#7b8b5a"][Math.floor(l()*6)],A=Math.max(1,Math.floor((o-1.2)/3)),E=w=>-o/2+o*(w+.5)/A;for(let w=0;w<=a;w++){let S=Ss+w*Wr-.06,T=new Ne(.24,w===a?.3:.14,o+.24);T.translate(d+s*.1,S,0),Xr(T),Hi(T,new Pe(c).multiplyScalar(.93)),T.applyQuaternion(f),T.translate(e,0,t),this.wallGeos.push(Nn(T))}let y=l()<.55;for(let w=0;w<a;w++){let S=Ss+w*Wr+1.55;for(let T=0;T<A;T++){let M=E(T);v("frame",x(M,S),0,[1,1,1],m);let _=l()<.16;if(_||v(l()<.42?"paneLit":"paneDark",x(M,S,.012)),_)for(let C of[-1,1])v("shutter",x(M+C*.33,S,.07),0,[1,1,1],g);else if(l()<.6)for(let C of[-1,1]){let N=.15+l()*.5;v("shutter",x(M+C*(.7+.3),S,.06+Math.sin(N)*.3),C*N,[1,1,1],g)}if(y&&w>=0&&l()<.5&&!this.lite){let C=S-1.02;v("slab",x(M,C,.5),0,[1,1,1],c),v("rail",x(M,C+.55,.98));for(let H of[-1,1])v("railSide",x(M+H*1.38,C+.55,.5));let N=Math.floor(l()*4);for(let H=0;H<N;H++){let X=["#c2185b","#f9a825","#1565c0","#2e7d32","#ffffff","#6a1b9a","#e65100","#00838f"][Math.floor(l()*8)];v("cloth",x(M-.9+H*.6+l()*.2,C+.55,.8),(l()-.5)*.4,[.8+l()*.5,.9+l()*.6,1],X)}}else l()<.12&&!this.lite&&v("ac",x(M,S-1.3,.3))}}for(let w of[-1,1]){if(l()<.35)continue;let S=new Ot().setFromAxisAngle(new L(0,1,0),n+(w>0?-Math.PI/2:Math.PI/2)),T=(_,C,N=0)=>new L(_,C,w*(o/2+N)).applyQuaternion(f).add(new L(e,0,t)),M=Math.max(0,Math.floor((r-2.5)/3.6));for(let _=0;_<a;_++){let C=Ss+_*Wr+1.55;for(let N=0;N<M;N++){let H=-r/2+1.2+(r-2.4)*(N+.5)/M;if(v("frame",T(H,C),0,[1,1,1],m,S),v(l()<.4?"paneLit":"paneDark",T(H,C,.012),0,[1,1,1],void 0,S),l()<.5)for(let X of[-1,1])v("shutter",T(H+X*1,C,.08),X*(.2+l()*.3),[1,1,1],g,S)}}}if(!this.lite){let w=Ss+a*Wr;for(let S of[-o/2+.25,o/2-.25])l()<.6&&v("pipe",x(S,w/2,.1),0,[1,w,1])}let P=Math.max(1,Math.round(o/5));for(let w=0;w<P;w++){let S=o/P,T=-o/2+S*(w+.5),M=l()<.6;if(v(M?"shopLit":"shutterRoll",x(T,1.55,.015),0,[1,3.1,S-.5]),w>0){let _=new Ne(.3,Ss,.45);_.translate(d+s*.12,Ss/2,-o/2+S*w),Xr(_),Hi(_,new Pe(c).multiplyScalar(.88)),_.applyQuaternion(f),_.translate(e,0,t),this.wallGeos.push(Nn(_))}if(l()<.75){let _=Math.floor(l()*hp.length),C=new Ne(.1,.78,S-.3),N=C.attributes.uv,H=_%2*.5,X=1-Math.floor(_/2)/8,K=X-1/8;for(let F=0;F<6;F++)for(let j=0;j<4;j++){let G=F*4+j;F===0?N.setXY(G,H+N.getX(G)*.5,K+N.getY(G)/8):N.setXY(G,H+.002,X-.002)}s<0&&C.rotateY(Math.PI),C.translate(d+s*.1,3.72,T),C.applyQuaternion(f),C.translate(e,0,t),this.signGeos.push(Nn(C))}else l()<.6&&v("awning",x(T,3.3,.7),0,[1,1,S-.4],["#b23a2e","#2f6d8a","#d18b2c","#3f7a4c","#8a3f6d"][Math.floor(l()*5)])}}build(e){let t={setNight:()=>{}},{geo:n,mats:s}=up(),r=(c,l,h,u=!1)=>{let f=this.I[c];if(!f.length)return null;let d=new Pe,x=f.map(m=>m.color?d.clone().set(m.color):null),v=Gr(l,h,f.map(m=>m.m),{colors:x.some(Boolean)?x.map(m=>m||new Pe(1,1,1)):null,cast:u,layer:1,cull:150});return v.forEach(m=>e.add(m)),v};r("frame",n.frame,s.frame,!1),r("paneDark",n.pane,s.paneDark,!1),r("paneLit",n.pane,s.paneLit,!1),r("shutter",n.shutter,s.shutter),r("slab",n.slab,s.slab,!0),r("rail",n.rail,s.rail),r("railSide",n.railSide,s.rail),r("cloth",n.cloth,s.cloth),r("ac",n.ac,s.ac),r("pipe",n.pipe,s.pipe),r("shopLit",n.shop,s.shopLit,!1),r("shutterRoll",n.shop,s.shutterRoll,!1),r("awning",n.awning,s.awning);let o=Yy(),a=new rt({map:o,emissive:16777215,emissiveMap:o,emissiveIntensity:0,roughness:.6});if(this.signGeos.length){let c=new ke(Dn(this.signGeos),a);c.receiveShadow=!0,e.add(c),fi(c,{cull:170}).forEach(l=>l.layers.set(1))}return t.setNight=c=>{s.paneLit.emissiveIntensity=.05+c*1.5,s.shopLit.emissiveIntensity=.3+c*.55,a.emissiveIntensity=c*.55},t}};function Xr(i,e=3){let t=i.attributes.position,n=i.attributes.normal,s=i.attributes.uv;for(let r=0;r<t.count;r++){let o=Math.abs(n.getX(r)),a=Math.abs(n.getY(r)),c,l;a>.5?(c=t.getX(r),l=t.getZ(r)):o>.5?(c=t.getZ(r),l=t.getY(r)):(c=t.getX(r),l=t.getY(r)),s.setXY(r,c/e,l/e)}return i}var Vi=i=>Math.atan2(i.x,i.z);function dp({route:i,kit:e,exclusions:t,rng:n,ROAD_HALF:s,WALK_OUT:r,RIVER:o}){let a=i.length,c={},l={},h={"-1":[],1:[]},u=[],f=t.slice(),d=(w,S)=>f.every(T=>Math.hypot(T.x-w.x,T.z-w.z)>T.r+S),x=w=>{i.frame((w-16)/a,c);let S=c.t.clone();return i.frame((w+16)/a,l),S.angleTo(l.t)<.085},v=[],m=["street","boulevard","street"],g=-1e9;for(let w=60;w<a-80&&v.length<m.length;w+=5){if(w-g<110||!x(w)||(i.frame(w/a,c),c.p.z<o.zNear+60))continue;let S=m[v.length],T=S==="boulevard"?e.roads.boulevard.size.x:e.roads.road.size.x,M=S==="boulevard"?e.roads.boulevard.size.z:105;if(!(S==="boulevard"&&!e.roads.boulevard))for(let _ of v.length%2?[-1,1]:[1,-1]){let C=c.r.clone().multiplyScalar(_),N=!0;for(let H=0;H<=M+20&&N;H+=6){let X=c.p.clone().addScaledVector(C,s+H);N=d(X,T/2+8)}if(N){v.push({s:w,side:_,kind:S,W:T,P:c.p.clone(),R:c.r.clone(),T:c.t.clone(),d:C}),g=w;break}}}let A=e.buildings.filter(w=>w.kind==="block").sort((w,S)=>S.size.x-w.size.x),E=w=>{let S=e.buildings.filter(T=>T.size.x<=w&&T.kind==="block");return S.length?S[Math.floor(n()*S.length)]:null};for(let w of v){let{d:S,W:T,side:M}=w,_=new L(-S.z,0,S.x),C=w.P.clone().addScaledVector(S,s).setY(.006);h[M].push([w.s-T/2-.3,w.s+T/2+.3]);let N=w.kind==="boulevard"?["boulevard"]:["crossing","road","manhole","crossroad","old","road","entrance"],H=0,X=Vi(S.clone().negate());for(let K of N){let F=e.roads[K];if(!F)continue;let j=F.place(C.clone().addScaledVector(S,H),X);for(let G of F.tips)u.push(G.clone().applyMatrix4(j));H+=F.size.z}w.length=H;for(let K=-2;K<=H+2;K+=4){let F=C.clone().addScaledVector(S,K);t.push({x:F.x,z:F.z,r:T/2+.6})}for(let K of[-1,1]){let F=16;for(;F<H-6;){let j=E(Math.min(34,H-F-2));if(!j)break;let G=j.size.x,q=j.size.z,ce=_.clone().multiplyScalar(-K),$=C.clone().addScaledVector(S,F+G/2).addScaledVector(_,K*(T/2+.3)).setY(0),fe=$.clone().addScaledVector(ce,-q/2),De=d(fe,Math.hypot(G,q)/2)&&i.distToRoad(fe.x,fe.z)>r+q/2;for(let[J,de]of[[-G/2,0],[G/2,0],[-G/2,-q],[G/2,-q]]){let ge=$.clone().addScaledVector(S,J).addScaledVector(ce,de);i.distToRoad(ge.x,ge.z)<r+.8&&(De=!1)}De&&(j.place($,Vi(ce)),t.push({x:fe.x,z:fe.z,r:Math.min(G,q)*.55})),F+=G+.4+n()*1.5}}{let K=A.find(G=>G.size.x>=T+4)||A[0],F=C.clone().addScaledVector(S,H+1.5).setY(0),j=F.clone().addScaledVector(S,K.size.z/2);d(j,K.size.x/2)&&(K.place(F,Vi(S.clone().negate())),t.push({x:j.x,z:j.z,r:Math.max(K.size.x,K.size.z)*.55}))}if(w.kind==="street"&&e.props.lamp)for(let K=10;K<H-4;K+=24)for(let F of[-1,1]){let j=C.clone().addScaledVector(S,K+(F>0?0:12)).addScaledVector(_,F*(T/2-.45)).setY(.19),G=e.props.lamp.place(j,Vi(_.clone().multiplyScalar(-F)));for(let q of e.props.lamp.tips)u.push(q.clone().applyMatrix4(G))}if(e.props.signal)for(let K of[-1,1]){i.frame((w.s+K*(T/2+1.6))/a,l);let F=l.p.clone().addScaledVector(l.r,M*(s+.55)).setY(.16);e.props.signal.place(F,Vi(l.r.clone().multiplyScalar(-M))),t.push({x:F.x,z:F.z,r:1.5})}if(e.props.stop){let K=C.clone().addScaledVector(S,4).addScaledVector(_,T/2-.7).setY(.19);e.props.stop.place(K,Vi(S))}}let y=(w,S)=>h[S].some(([T,M])=>w>T-8&&w<M+8),P=0;for(let w=120;w<a-120&&P<2&&e.props.busstop;w+=7){let S=P%2?-1:1;if(y(w,S)||!x(w))continue;i.frame(w/a,c);let T=c.p.clone().addScaledVector(c.r,S*((s+r)/2+.2)).setY(.16);!d(T,12)||T.z<o.zNear+30||(e.props.busstop.place(T,Vi(c.r.clone().multiplyScalar(-S))),t.push({x:T.x,z:T.z,r:4}),P++,w+=180)}for(let[w,S]of[[70,"speed30"],[300,"speed30"],[520,"speed80"]]){let T=e.props[S];if(T)for(let M=w;M<w+60;M+=3){if(y(M,1))continue;i.frame(M/a,c);let _=c.p.clone().addScaledVector(c.r,s+.45).setY(.16);if(d(_,3)){T.place(_,Vi(c.t.clone().negate())),t.push({x:_.x,z:_.z,r:1.2});break}}}return{gaps:h,lampHeads:u,plan:v}}function pp({pf:i,route:e,s:t,side:n,WALK_OUT:s,excluded:r,inRiver:o}){let a=e.length,c=i.size.x,l=i.size.z,h=e.frame(Math.min(1,(t+c/2)/a)),u=h.r.clone().multiplyScalar(-n),f=h.t;for(let d=.25;d<=4.5;d+=.75){let x=h.p.clone().addScaledVector(h.r,n*(s+d)).setY(0),v=x.clone().addScaledVector(u,-l/2),m=Math.hypot(c,l)/2;if(o(v.z,m+4)||r(v.x,v.z,m*.8))return null;let g=!0;for(let[A,E]of[[-c/2,0],[c/2,0],[-c/2,-l],[c/2,-l],[0,-l],[-c/4,0],[c/4,0],[0,0]]){let y=x.clone().addScaledVector(f,A).addScaledVector(u,E);if(e.distToRoad(y.x,y.z)<s+.05||o(y.z,3)){g=!1;break}}if(g)return i.place(x,Vi(u)),{w:c,depth:l,centre:v,setback:d}}return null}var Yr=class extends bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new mu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=ys.extractUrlBase(e);o=ys.resolveURL(l,this.path)}else o=ys.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ir(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===bp){try{o[_t.KHR_BINARY_GLTF]=new Pu(e)}catch(u){s&&s(u);return}r=JSON.parse(o[_t.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Ou(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case _t.KHR_MATERIALS_UNLIT:o[u]=new du;break;case _t.KHR_DRACO_MESH_COMPRESSION:o[u]=new Iu(r,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:o[u]=new Du;break;case _t.KHR_MESH_QUANTIZATION:o[u]=new Lu;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Jy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},fu=class{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Pe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],pn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Lr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new bs(h),l.distance=u;break;case"spot":l=new vs(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Wi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},du=class{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return Qt}extendParams(e,t,n){let s=[];e.color=new Pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],pn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Gt))}return Promise.all(s)}},pu=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},mu=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _e(a,a)}return Promise.all(r)}},gu=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},xu=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},vu=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],pn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Gt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},bu=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},yu=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(a[0],a[1],a[2],pn),Promise.all(r)}},_u=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Mu=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(a[0],a[1],a[2],pn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Gt)),Promise.all(r)}},Su=class{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Eu=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},wu=class{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Tu=class{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Au=class{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ru=class{constructor(e){this.name=_t.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},Cu=class{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Qn.TRIANGLES&&l.mode!==Qn.TRIANGLE_STRIP&&l.mode!==Qn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let x of u){let v=new He,m=new L,g=new Ot,A=new L(1,1,1),E=new yn(x.geometry,x.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,y),c.SCALE&&A.fromBufferAttribute(c.SCALE,y),E.setMatrixAt(y,v.compose(m,g,A));for(let y in c)if(y==="_COLOR_0"){let P=c[y];E.instanceColor=new Bs(P.array,P.itemSize,P.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&x.geometry.setAttribute(y,c[y]);zt.prototype.copy.call(E,x),this.parser.assignFinalMaterial(E),d.push(E)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},bp="glTF",Bo=12,mp={JSON:1313821514,BIN:5130562},Pu=class{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Bo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Bo,r=new DataView(e,Bo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===mp.JSON){let l=new Uint8Array(e,Bo+o,a);this.content=n.decode(l)}else if(c===mp.BIN){let l=Bo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Iu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Nu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Nu[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=qr[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let x in d.attributes){let v=d.attributes[x],m=c[x];m!==void 0&&(v.normalized=m)}u(d)},a,l,pn,f)})})}},Du=class{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Lu=class{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}},Sc=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,x=e*l,v=x-l,m=-2*d+3*f,g=d-f,A=1-m,E=g-f+u;for(let y=0;y!==a;y++){let P=o[v+y+a],w=o[v+y+c]*h,S=o[x+y+a],T=o[x+y]*h;r[y]=A*P+E*w+m*S+g*T}return r}},$y=new Ot,Uu=class extends Sc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return $y.fromArray(r).normalize().toArray(r),r}},Qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},qr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gp={9728:ln,9729:Jt,9984:kh,9985:ao,9986:fr,9987:oi},xp={33071:Hn,33648:mo,10497:hn},lu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Es={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Qy={CUBICSPLINE:void 0,LINEAR:Sr,STEP:Mr},hu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function e_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new rt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xn})),i.DefaultMaterial}function Vs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Wi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function t_(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function n_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function i_(i){let e,t=i.extensions&&i.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+uu(t.attributes):e=i.indices+":"+uu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+uu(i.targets[n]);return e}function uu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Fu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function s_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var r_=new He,Ou=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Jy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new xs(this.options.manager):this.textureLoader=new ec(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ir(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Vs(r,a,s),Wi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ys.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=lu[s.type],a=qr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new pt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=lu[s.type],l=qr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0,v,m;if(d&&d!==u){let g=Math.floor(f/d),A="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,E=t.cache.get(A);E||(v=new l(a,g*d,s.count*d/h),E=new Ar(v,d/h),t.cache.add(A,E)),m=new Os(E,c,f%d/h,x)}else a===null?v=new l(s.count*c):v=new l(a,f,s.count*c),m=new pt(v,c,x);if(s.sparse!==void 0){let g=lu.SCALAR,A=qr[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,P=new A(o[1],E,s.sparse.count*g),w=new l(o[2],y,s.sparse.count*c);a!==null&&(m=new pt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let S=0,T=P.length;S<T;S++){let M=P[S];if(m.setX(M,w[S*c]),c>=2&&m.setY(M,w[S*c+1]),c>=3&&m.setZ(M,w[S*c+2]),c>=4&&m.setW(M,w[S*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=x}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=gp[f.magFilter]||Jt,h.minFilter=gp[f.minFilter]||oi,h.wrapS=xp[f.wrapS]||hn,h.wrapT=xp[f.wrapT]||hn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==ln&&h.minFilter!==Jt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let x=f;t.isImageBitmapLoader===!0&&(x=function(v){let m=new sn(v);m.needsUpdate=!0,f(m)}),t.load(ys.resolveURL(u,r.path),x,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Wi(u,o),u.userData.mimeType=o.mimeType||s_(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[_t.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Fi,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new zs,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return rt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[_t.KHR_MATERIALS_UNLIT]){let u=s[_t.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Pe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],pn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Gt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Xt);let h=r.alphaMode||hu.OPAQUE;if(h===hu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===hu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Qt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new _e(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Qt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Qt){let u=r.emissiveFactor;a.emissive=new Pe().setRGB(u[0],u[1],u[2],pn)}return r.emissiveTexture!==void 0&&o!==Qt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Gt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Wi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Vs(s,u,r),u})}createUniqueName(e){let t=Wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return vp(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=i_(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=vp(new Ct,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?e_(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,x=h.length;d<x;d++){let v=h[d],m=o[d],g,A=l[d];if(m.mode===Qn.TRIANGLES||m.mode===Qn.TRIANGLE_STRIP||m.mode===Qn.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new Oa(v,A):new ke(v,A),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===Qn.TRIANGLE_STRIP?g.geometry=ou(g.geometry,rc):m.mode===Qn.TRIANGLE_FAN&&(g.geometry=ou(g.geometry,Ao));else if(m.mode===Qn.LINES)g=new Cr(v,A);else if(m.mode===Qn.LINE_STRIP)g=new Rr(v,A);else if(m.mode===Qn.LINE_LOOP)g=new Ha(v,A);else if(m.mode===Qn.POINTS)g=new us(v,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&n_(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Wi(g,r),m.extensions&&Vs(s,g,m),t.assignFinalMaterial(g),u.push(g)}for(let d=0,x=u.length;d<x;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Vs(s,u[0],r),u[0];let f=new ft;r.extensions&&Vs(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,x=u.length;d<x;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new en(yi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new as(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Wi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new He;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ba(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],x=s.samplers[d.sampler],v=d.target,m=v.node,g=s.parameters!==void 0?s.parameters[x.input]:x.input,A=s.parameters!==void 0?s.parameters[x.output]:x.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",A)),l.push(x),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],x=u[2],v=u[3],m=u[4],g=[];for(let A=0,E=f.length;A<E;A++){let y=f[A],P=d[A],w=x[A],S=v[A],T=m[A];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let M=n._createAnimationTracks(y,P,w,S,T);if(M)for(let _=0;_<M.length;_++)g.push(M[_])}return new Ja(r,void 0,g)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,r_)});for(let d=0,x=u.length;d<x;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new vo:l.length>1?h=new ft:l.length===1?h=l[0]:h=new zt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Wi(h,r),r.extensions&&Vs(n,h,r),r.matrix!==void 0){let u=new He;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ft;n.name&&(r.name=s.createUniqueName(n.name)),Wi(r,n),n.extensions&&Vs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof Cn||f instanceof sn)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];Es[r.path]===Es.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Es[r.path]){case Es.weights:l=Oi;break;case Es.rotation:l=Bi;break;case Es.position:case Es.scale:l=zi;break;default:switch(n.itemSize){case 1:l=Oi;break;case 2:case 3:default:l=zi;break}break}let h=s.interpolation!==void 0?Qy[s.interpolation]:Sr,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let x=new l(c[f]+"."+Es[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Fu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Bi?Uu:Sc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function o_(i,e,t){let n=e.attributes,s=new un;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){let h=Fu(qr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,c=new L;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,x=f.max;if(d!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(x[2]))),f.normalized){let v=Fu(qr[f.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Rn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function vp(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Nu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return yt.workingColorSpace!==pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),Wi(i,e),o_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?t_(i,e.targets,t):i})}var Ec=function(){"use strict";var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,r,o=WebAssembly.instantiate(a(s),{}).then(function(g){r=g.instance,r.exports.__wasm_call_ctors()});function a(g){for(var A=new Uint8Array(g.length),E=0;E<g.length;++E){var y=g.charCodeAt(E);A[E]=y>96?y-97:y>64?y-39:y+4}for(var P=0,E=0;E<g.length;++E)A[P++]=A[E]<60?n[A[E]]:(A[E]-60)*64+A[++E];return A.buffer.slice(0,P)}function c(g,A,E,y,P,w){var S=r.exports.sbrk,T=E+3&-4,M=S(T*y),_=S(P.length),C=new Uint8Array(r.exports.memory.buffer);C.set(P,_);var N=g(M,E,y,_,P.length);if(N==0&&w&&w(M,T,y),A.set(C.subarray(M,M+E*y)),S(M-S(0)),N!=0)throw new Error("Malformed buffer data: "+N)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(g){var A={object:new Worker(g),pending:0,requests:{}};return A.object.onmessage=function(E){var y=E.data;A.pending-=y.count,A.requests[y.id][y.action](y.value),delete A.requests[y.id]},A}function x(g){for(var A="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),E=new Blob([A],{type:"text/javascript"}),y=URL.createObjectURL(E),P=0;P<g;++P)u[P]=d(y);URL.revokeObjectURL(y)}function v(g,A,E,y,P){for(var w=u[0],S=1;S<u.length;++S)u[S].pending<w.pending&&(w=u[S]);return new Promise(function(T,M){var _=new Uint8Array(E),C=f++;w.pending+=g,w.requests[C]={resolve:T,reject:M},w.object.postMessage({id:C,count:g,size:A,source:_,mode:y,filter:P},[_.buffer])})}function m(g){o.then(function(){var A=g.data;try{var E=new Uint8Array(A.count*A.size);c(r.exports[A.mode],E,A.count,A.size,A.source,r.exports[A.filter]),self.postMessage({id:A.id,count:A.count,action:"resolve",value:E},[E.buffer])}catch(y){self.postMessage({id:A.id,count:A.count,action:"reject",value:y})}})}return{ready:o,supported:!0,useWorkers:function(g){x(g)},decodeVertexBuffer:function(g,A,E,y,P){c(r.exports.meshopt_decodeVertexBuffer,g,A,E,y,r.exports[l[P]])},decodeIndexBuffer:function(g,A,E,y){c(r.exports.meshopt_decodeIndexBuffer,g,A,E,y)},decodeIndexSequence:function(g,A,E,y){c(r.exports.meshopt_decodeIndexSequence,g,A,E,y)},decodeGltfBuffer:function(g,A,E,y,P,w){c(r.exports[h[P]],g,A,E,y,r.exports[l[w]])},decodeGltfBufferAsync:function(g,A,E,y,P){return u.length>0?v(g,A,E,h[y],l[P]):o.then(function(){var w=new Uint8Array(g*A);return c(r.exports[h[y]],w,g,A,E,r.exports[l[P]]),w})}}}();var Mp=new L(0,1,0);function Bu(i,e){let t=i.geometry,n=t.attributes.position.count,s=new Ct,r=new L,o=new ut().getNormalMatrix(e),a=new ut().setFromMatrix4(e),c=new Float32Array(n*3);for(let h=0;h<n;h++)r.fromBufferAttribute(t.attributes.position,h).applyMatrix4(e),c[h*3]=r.x,c[h*3+1]=r.y,c[h*3+2]=r.z;if(s.setAttribute("position",new pt(c,3)),t.attributes.normal){let h=new Float32Array(n*3);for(let u=0;u<n;u++)r.fromBufferAttribute(t.attributes.normal,u).applyMatrix3(o).normalize(),h[u*3]=r.x,h[u*3+1]=r.y,h[u*3+2]=r.z;s.setAttribute("normal",new pt(h,3))}if(t.attributes.uv){let h=t.attributes.uv,u=new Float32Array(n*2);for(let f=0;f<n;f++)u[f*2]=h.getX(f),u[f*2+1]=h.getY(f);s.setAttribute("uv",new pt(u,2))}t.index&&s.setIndex(new pt(Uint32Array.from(t.index.array),1));let l=t.morphAttributes.position;if(l?.length){let h=t.morphTargetsRelative;s.morphTargetsRelative=h,s.morphAttributes.position=l.map(f=>{let d=new Float32Array(n*3);for(let x=0;x<n;x++)r.fromBufferAttribute(f,x),h?r.applyMatrix3(a):r.applyMatrix4(e),d[x*3]=r.x,d[x*3+1]=r.y,d[x*3+2]=r.z;return new pt(d,3)});let u=t.morphAttributes.normal;u?.length&&(s.morphAttributes.normal=u.map(f=>{let d=new Float32Array(n*3);for(let x=0;x<n;x++)r.fromBufferAttribute(f,x).applyMatrix3(o),d[x*3]=r.x,d[x*3+1]=r.y,d[x*3+2]=r.z;return new pt(d,3)}))}return s}function yp(i,e){let t=i.index.array,n=i.attributes.position.array,s=new Int32Array(i.attributes.position.count).fill(-1),r=[],o=0;for(let l=0;l<t.length;l+=3){let h=t[l],u=t[l+1],f=t[l+2],d=(n[h*3]+n[u*3]+n[f*3])/3,x=(n[h*3+1]+n[u*3+1]+n[f*3+1])/3,v=(n[h*3+2]+n[u*3+2]+n[f*3+2])/3;if(e(d,x,v))for(let m of[h,u,f])s[m]<0&&(s[m]=o++),r.push(s[m])}let a=l=>{let h=l.itemSize,u=new Float32Array(o*h);for(let f=0;f<s.length;f++)if(s[f]>=0)for(let d=0;d<h;d++)u[s[f]*h+d]=l.array[f*h+d];return new pt(u,h)},c=new Ct;for(let[l,h]of Object.entries(i.attributes))c.setAttribute(l,a(h));c.setIndex(new pt(Uint32Array.from(r),1));for(let[l,h]of Object.entries(i.morphAttributes))c.morphAttributes[l]=h.map(a);return c.morphTargetsRelative=i.morphTargetsRelative,c}function zo(i){let e=[];for(let t of i)t.traverse(n=>n.isMesh&&e.push(n));return e}var wc=class{constructor(e,t){this.name=e,this.parts=t,this.box=new un;for(let n of t)n.geometry.computeBoundingBox(),this.box.union(n.geometry.boundingBox);this.size=this.box.getSize(new L),this.instances=[],this.tips=[]}place(e,t,n=1){let s=new He().compose(e,new Ot().setFromAxisAngle(Mp,t),new L(n,n,n));return this.instances.push(s),s}};function Ws(i,e,t,{yaw:n=0,scale:s=1,mergeByMaterial:r=!0}={}){let o=new He().makeScale(s,s,s).multiply(new He().makeRotationY(n)).multiply(new He().makeTranslation(-t.x,-t.y,-t.z)),a=new Map;for(let h of zo(e)){let u=Bu(h,o.clone().multiply(h.matrixWorld)),f=r?h.material.uuid:h.uuid,d="";for(let x=h;x&&!d;x=x.parent)e.includes(x)&&(d=x.name);a.has(f)||a.set(f,{material:h.material,geos:[],src:d}),a.get(f).geos.push(u)}let c=[];for(let{material:h,geos:u,src:f}of a.values()){let d=u.length>1?Dn(u):u[0];if(!d){for(let x of u)c.push({geometry:x,material:h,src:f});continue}c.push({geometry:d,material:h,src:f})}let l=new wc(i,c);return l.toPrefab=o,l}var Xi=i=>{let e=new un;for(let t of i)e.expandByObject(t);return e};function _p(i){let e=zo([i]),t=new L,n=Xi([i]),s=new L,r=0;for(let h of e){let u=h.geometry.attributes.position;for(let f=0;f<u.count;f++)t.fromBufferAttribute(u,f).applyMatrix4(h.matrixWorld),t.y<n.min.y+.4&&(s.add(t),r++)}s.divideScalar(Math.max(1,r)),s.y=n.min.y;let o=n.max.x-n.min.x,a=n.max.z-n.min.z,c=[],l=n.max.y-.25;if(o>a)for(let h of[n.min.x,n.max.x])Math.abs(h-s.x)>.9&&c.push(new L(h+Math.sign(s.x-h)*.35,l,s.z));else for(let h of[n.min.z,n.max.z])Math.abs(h-s.z)>.9&&c.push(new L(s.x,l,h+Math.sign(s.z-h)*.35));return{base:s,tips:c}}function a_(i,e=1){let t=i.image;if(!t||!t.width)return null;let n=Math.min(512,t.width),s=Math.min(512,t.height),r=document.createElement("canvas");r.width=n,r.height=s;let o=r.getContext("2d",{willReadFrequently:!0});o.drawImage(t,0,0,n,s);let a=o.getImageData(0,0,n,s),c=e*9301+49297,l=()=>(c=(c*9301+49297)%233280)/233280,h=14,u=[];for(let x=0;x<Math.ceil(n/h)*Math.ceil(s/h);x++)u.push(l()<.38?.6+l()*.4:0);let f=Math.ceil(n/h);for(let x=0;x<s;x++)for(let v=0;v<n;v++){let m=(x*n+v)*4,g=a.data[m]/255,A=a.data[m+1]/255,E=a.data[m+2]/255,y=.2126*g+.7152*A+.0722*E,P=Math.max(g,A,E)-Math.min(g,A,E),S=(y<.26&&P<.16?1:0)*u[Math.floor(x/h)*f+Math.floor(v/h)];a.data[m]=255*S,a.data[m+1]=196*S,a.data[m+2]=120*S,a.data[m+3]=255}o.putImageData(a,0,0);let d=new ks(r);return d.flipY=i.flipY,d.colorSpace=Gt,d.wrapS=i.wrapS,d.wrapT=i.wrapT,d.channel=i.channel,d}function c_(){let i=document.createElement("canvas");i.width=512,i.height=1024;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,1024);return t.addColorStop(0,"#11151b"),t.addColorStop(1,"#2a1c10"),e.fillStyle=t,e.fillRect(0,0,512,1024),e.fillStyle="#f5c518",e.font='400 120px "Instrument Serif", Georgia, serif',e.fillText("Boring",40,300),e.fillText("work?",40,420),e.fillStyle="#ffffff",e.font='italic 400 64px "Instrument Serif", Georgia, serif',e.fillText("Let a bot do it.",40,520),e.font='600 26px "JetBrains Mono", monospace',e.fillStyle="#c8c0b2",e.fillText("SAP \xB7 PYTHON \xB7 POWER BI",40,620),e.fillStyle="#f5c518",e.fillRect(40,860,432,90),e.fillStyle="#111",e.font="800 30px Manrope, sans-serif",e.fillText("PIYUSH4U.GITHUB.IO",64,918),i}async function Sp(i){let e=new Yr().setMeshoptDecoder(Ec),t=["roadkit","soho","blocks","tree"],n={},s=()=>i?.(Object.values(n).reduce((P,w)=>P+w,0)/t.length),[r,o,a,c]=await Promise.all(t.map(P=>e.loadAsync(`assets/models/${P}.glb`,w=>{w.total&&(n[P]=w.loaded/w.total,s())})));for(let P of[r,o,a,c])P.scene.updateMatrixWorld(!0);let l={buildings:[],props:{},roads:{},trees:[],nightMats:[]},h=(P,w)=>{let S=[];return P.scene.traverse(T=>{w.test(T.name)&&T.parent&&!w.test(T.parent.name)&&S.push(T)}),S},u=(P,w)=>h(P,w)[0],f=(P,w)=>{if(!P.map||P.userData.night)return;let S=a_(P.map,w);S&&(P.emissiveMap=S,P.emissive=new Pe(16777215),P.emissiveIntensity=0,P.userData.night="windows",l.nightMats.push(P))},d=P=>{!P.map||P.userData.night||(P.emissiveMap=P.map,P.emissive=new Pe(16769720),P.emissiveIntensity=0,P.userData.night="shop",l.nightMats.push(P))},x=3,v=[];a.scene.traverse(P=>{/^Building(_0\d)?$/.test(P.name)&&v.push(P)});for(let P of v){let w=Xi([P]),S=Ws(P.name,[P],new L((w.min.x+w.max.x)/2,w.min.y,w.max.z));for(let T of S.parts){let M=T.material.name||"";T.material.envMapIntensity=.8,/^Shops/.test(M)?d(T.material):/^building/.test(M)&&f(T.material,x++)}S.kind="block",l.buildings.push(S)}let m=.44,g=h(o,/^BROWN_SOHO00[1-6]_\d+$/);{let P=Xi(g),w=Ws("soho-block",g,new L((P.min.x+P.max.x)/2,m,P.max.z-.6));w.kind="soho",l.buildings.push(w)}for(let[P,w]of[["soho-brown",/^BROWN_SOHO00[34]_\d+$/],["soho-green",/^BROWN_SOHO006_\d+$/]]){let S=h(o,w),T=Xi(S),M=Ws(P,S,new L((T.min.x+T.max.x)/2,m,T.max.z-.4)),_=new Ne(M.size.x-.5,M.box.max.y-.6,M.size.z-2.2);_.translate(0,(M.box.max.y-.6)/2,M.box.min.z+(M.size.z-2.2)/2+.25);let C=_.attributes.uv,N=_.attributes.position,H=_.attributes.normal;for(let X=0;X<N.count;X++){let K=Math.abs(H.getX(X))>.5;C.setXY(X,(K?N.getZ(X):N.getX(X))/4,N.getY(X)/4)}M.parts.push({geometry:_,material:gt("concrete",{color:12432292}),src:"core"}),M.kind="soho",l.buildings.push(M)}o.scene.traverse(P=>{P.isMesh&&/SoHo/.test(P.material.name)&&f(P.material,x++)});for(let[P,w]of[["crossing",/^Pedestrian_crossing/],["road",/^Road_\d/],["manhole",/^Manhole/],["old",/^Old_/],["crossroad",/^Crossroad/],["entrance",/^Road_entrance/]]){let S=u(r,w);if(!S)continue;let T=Xi([S]);l.roads[P]=Ws(P,[S],new L((T.min.x+T.max.x)/2,0,T.max.z))}{let P=u(r,/^Double_road_\d/),w=h(r,/^Dual_light_pole/).filter(_=>{let C=Xi([_]).getCenter(new L),N=Xi([P]);return C.x>N.min.x&&C.x<N.max.x&&C.z>N.min.z&&C.z<N.max.z}),S=Xi([P]),T=new L((S.min.x+S.max.x)/2,0,S.max.z),M=Ws("boulevard",[P,...w],T);for(let _ of w)for(let C of _p(_).tips)M.tips.push(C.clone().applyMatrix4(M.toPrefab));l.roads.boulevard=M}let A=gt("steel",{color:9081496,repeat:[.3,2]}),E=(P,w)=>P.parts.forEach(S=>{S.material.name==="material_0"&&(S.material=w)}),y=(P,w,S)=>{let T=u(r,w);if(!T)return;let{base:M,tips:_}=_p(T),C=Ws(P,[T],M,{yaw:S});C.tips=_.map(N=>N.clone().applyMatrix4(C.toPrefab)),E(C,A),l.props[P]=C};y("lamp",/^Light_pole_24/,Math.PI/2),y("signal",/^Traffic_light_18/,Math.PI/2),y("stop",/^Stop_sign_45/,Math.PI/2),y("speed30",/^Speed_limit_plate_30/,Math.PI/2),y("speed80",/^Speed_limit_plate_80/,Math.PI/2);{let P=h(r,/bus_stop/),w=Xi(P),S=Ws("busstop",P,new L((w.min.x+w.max.x)/2,w.min.y,(w.min.z+w.max.z)/2),{yaw:Math.PI/2,mergeByMaterial:!1}),T=new rt({color:3883592,metalness:.7,roughness:.35}),M=new Bt({color:11060428,transparent:!0,opacity:.25,roughness:.05,depthWrite:!1}),_=new ks(c_());_.colorSpace=Gt;let C=new rt({map:_,emissive:16777215,emissiveMap:_,emissiveIntensity:.25,roughness:.3});l.poster=C,_.flipY=!1;let N=S.box.getCenter(new L);S.parts.forEach(H=>{if(/^Glasses/.test(H.src))H.material=M;else if(/^Poster/.test(H.src)){H.material=C;let X=H.geometry;X.computeBoundingBox();let K=X.boundingBox,F=K.getCenter(new L),j=F.clone().sub(N).setY(0),G=K.getSize(new L);G.x<G.z?j.set(Math.sign(j.x)||1,0,0):j.set(0,0,Math.sign(j.z)||1);let q=j.clone().negate().cross(Mp),ce=X.attributes.position,$=new Float32Array(ce.count*2),fe=new L,De=Math.abs(q.x)>.5?G.x:G.z;for(let J=0;J<ce.count;J++)fe.fromBufferAttribute(ce,J).sub(F),$[J*2]=fe.dot(q)/De+.5,$[J*2+1]=.5-fe.y/G.y;X.setAttribute("uv",new pt($,2))}else H.material=T}),l.props.busstop=S}{let P=zo([c.scene]).find(_=>_.material.name==="Bark"),w=zo([c.scene]).filter(_=>_!==P),S=c.animations[0],T=[-1/0,-92,-22,1/0],M=[8.6,9.6,7.6];for(let _=0;_<3;_++){let C=J=>J>T[_]&&J<=T[_+1],N=yp(Bu(P,P.matrixWorld),J=>C(J));N.computeBoundingBox();let H=N.attributes.position.array,X=new L,K=0;for(let J=0;J<H.length;J+=3)H[J+1]<N.boundingBox.min.y+2&&(X.x+=H[J],X.z+=H[J+2],K++);X.x/=K,X.z/=K,X.y=N.boundingBox.min.y;let F=[N],j=[],G=w.map(J=>({m:J,g:yp(Bu(J,J.matrixWorld),de=>C(de))}));G.forEach(({g:J})=>F.push(J));let q=-1/0;for(let J of F)J.computeBoundingBox(),q=Math.max(q,J.boundingBox.max.y);let ce=M[_]/(q-X.y),$=new He().makeScale(ce,ce,ce).multiply(new He().makeTranslation(-X.x,-X.y,-X.z)),fe=J=>{J.applyMatrix4($);for(let de of Object.keys(J.morphAttributes))if(de==="position")for(let ge of J.morphAttributes[de])for(let pe=0;pe<ge.count;pe++)ge.setXYZ(pe,ge.getX(pe)*ce,ge.getY(pe)*ce,ge.getZ(pe)*ce);return J};j.push({geometry:fe(N),material:P.material});for(let{m:J,g:de}of G){let ge=S.tracks.find(pe=>pe.name.startsWith(J.name+".morphTargetInfluences"));j.push({geometry:fe(de),material:J.material,track:ge})}let De=new wc("tree"+_,j);l.trees.push(De)}for(let _ of zo([c.scene])){let C=_.material;C.metalness=0,C.metalnessMap=null,C.roughness=C.name==="Bark"?.95:.82,C.roughnessMap=null,C.envMapIntensity=.55,"specularIntensity"in C&&(C.specularIntensity=.25,C.specularIntensityMap=null,C.specularColorMap=null),C.side=Xt,C.name!=="Bark"&&(C.alphaTest=.45,C.transparent=!1),C.needsUpdate=!0}}return l}function ko(i,e,{shadows:t=!0,chunk:n,cull:s=0,layer:r=0}={}){let o=[];for(let a of e)if(a.instances.length)for(let c of a.parts){c.geometry.computeBoundingSphere();let l=c.geometry.boundingSphere.radius<.6||a.size.y<.5,h=t&&!c.material.transparent&&!l;c.meshes=Gr(c.geometry,c.material,a.instances,{cast:h,chunk:n,cull:s,layer:r});for(let u of c.meshes)i.add(u),o.push(u)}return o}function Ep(i){let e=new ke,t=[],n=new Ui,s=new He;for(let o of i){if(!o.instances.length)continue;let a=o.instances.map((c,l)=>l*1.618%6.4);for(let c of o.parts){if(!c.track||!c.meshes)continue;let l=c.track.createInterpolant(),h=c.geometry.morphAttributes.position?.length||0,u=c.track.times[c.track.times.length-1],f=c.material.alphaTest?new Fs({depthPacking:Ro,map:c.material.map,alphaTest:c.material.alphaTest}):null;for(let d of c.meshes){f&&(d.customDepthMaterial=f),e.morphTargetInfluences=new Array(h).fill(0);for(let x=0;x<d.count;x++)d.setMorphAt(x,e);t.push(x=>{if(!n.intersectsSphere(d.boundingSphere))return;e.morphTargetInfluences.length=h;let v=d.userData.indices;for(let m=0;m<v.length;m++){let g=l.evaluate((x*.8+a[v[m]])%u);for(let A=0;A<h;A++)e.morphTargetInfluences[A]=g[A];d.setMorphAt(m,e)}d.morphTexture.needsUpdate=!0})}}}let r=-1;return(o,a)=>{if(!(o-r<1/30)){r=o,a&&n.setFromProjectionMatrix(s.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse));for(let c of t)c(o)}}}var l_=new L(0,1,0),qi=4.5,gn=7.4,jt={zNear:-582,zFar:-716,level:-3.2};function Rp(){let i=[[0,70],[0,20],[3,-40],[-10,-100],[-16,-160],[-2,-220],[18,-280],[20,-340],[2,-400],[-14,-455],[-8,-505],[0,-545],[0,-575],[0,-620],[0,-700],[0,-760],[0,-830]].map(([c,l])=>new L(c,0,l)),e=new yo(i,!1,"centripetal");e.arcLengthDivisions=2e3;let t=e.getLength(),n=1400,s=[];for(let c=0;c<=n;c++)s.push(e.getPointAt(c/n));return{curve:e,length:t,samples:s,uAtZ:c=>{let l=0,h=1/0;for(let u=0;u<=n;u++){let f=Math.abs(s[u].z-c);f<h&&(h=f,l=u)}return l/n},frame:(c,l={})=>(c=Math.min(1,Math.max(0,c)),l.p=e.getPointAt(c,l.p||new L),l.t=e.getTangentAt(c,l.t||new L).setY(0).normalize(),l.r=(l.r||new L).crossVectors(l.t,l_).normalize(),l),distToRoad:(c,l)=>{let h=1/0;for(let u=0;u<=n;u+=2){let f=s[u].x-c,d=s[u].z-l,x=f*f+d*d;x<h&&(h=x)}return Math.sqrt(h)}}}function h_(){let i=ui(21),e=[];for(let n=0;n<64;n++)e.push({shutter:i()<.38,balcony:i()<.22,lit:i()<.36,warm:i()<.75,blind:i()*.5});let t=n=>Vt(512,512,(s,r)=>{let o=r/8;if(s.fillStyle=n?"#000":"#efe9dd",s.fillRect(0,0,r,r),!n){for(let a=0;a<3e4;a++)s.fillStyle=`rgba(${i()<.5?"90,80,70":"255,255,255"},${i()*.12})`,s.fillRect(i()*r,i()*r,2,2);for(let a=0;a<140;a++)s.fillStyle=`rgba(70,64,55,${.04+i()*.08})`,s.fillRect(i()*r,i()*r,1+i()*3,20+i()*60)}e.forEach((a,c)=>{let l=c%8*o,h=Math.floor(c/8)*o;n||(s.fillStyle="rgba(60,52,44,0.18)",s.fillRect(l,h,o,4));let u=l+o*.3,f=h+o*.24,d=o*.4,x=o*.52;if(n){if(a.lit){let m=s.createLinearGradient(0,f,0,f+x);m.addColorStop(0,a.warm?"#ffd28a":"#cfe6ff"),m.addColorStop(1,a.warm?"#ff9f43":"#7fa9e0"),s.fillStyle=m,s.fillRect(u,f,d,x),s.fillStyle=`rgba(0,0,0,${a.blind})`,s.fillRect(u,f,d,x*.4)}return}s.fillStyle="rgba(70,60,50,0.35)",s.fillRect(u-3,f-3,d+6,x+6);let v=s.createLinearGradient(u,f,u+d,f+x);if(v.addColorStop(0,"#2f3c48"),v.addColorStop(1,"#151b22"),s.fillStyle=v,s.fillRect(u,f,d,x),s.fillStyle="rgba(220,230,240,0.12)",s.fillRect(u+2,f+2,d*.35,x-4),a.shutter){s.fillStyle="#3d6b4f",s.fillRect(u-d*.42,f,d*.38,x),s.fillRect(u+d*1.04,f,d*.38,x),s.fillStyle="rgba(0,0,0,0.25)";for(let m=0;m<7;m++)s.fillRect(u-d*.42,f+m*x/7,d*.38,1.5),s.fillRect(u+d*1.04,f+m*x/7,d*.38,1.5)}if(a.balcony){s.fillStyle="rgba(40,40,40,0.75)",s.fillRect(l+o*.12,f+x+2,o*.76,3);for(let m=0;m<9;m++)s.fillRect(l+o*.12+m*o*.76/8,f+x*.75,1.5,x*.25+4)}})});return{map:kt(t(!1),{repeat:!0}),emissive:kt(t(!0),{repeat:!0})}}function wp(i,e,t,n,s=12,r=1,o=[]){let a=[],c=[],l=[],h=i.samples.length-1,u={},f=0,d=null,x=0;for(let g=0;g<=h;g+=r){if(i.frame(g/h,u),d&&(f+=d.distanceTo(u.p)),d=u.p.clone(),o.some(([y,P])=>f>y&&f<P)){x=0;continue}let A=u.p.clone().addScaledVector(u.r,e),E=u.p.clone().addScaledVector(u.r,t);if(a.push(A.x,n,A.z,E.x,n,E.z),c.push(0,f/s,1,f/s),x>0){let y=a.length/3-2;l.push(y-2,y,y-1,y-1,y,y+1)}x++}let v=new Ct;v.setAttribute("position",new At(a,3)),v.setAttribute("uv",new At(c,2)),v.setIndex(l),v.computeVertexNormals();let m=v.attributes.normal;for(let g=0;g<m.count;g++)m.setXYZ(g,0,1,0);return v}function Tp(i,e,t,n=2,s=[]){let r=[],o=[],a=[],c=0,l=null,h=0,u=null,f=i.samples.length-1,d={},x=0;for(let m=0;m<=f;m+=n){i.frame(m/f,d);let g=d.p.clone().addScaledVector(d.r,e);if(l&&(c+=l.distanceTo(g)),l=g,u&&(h+=u.distanceTo(d.p)),u=d.p.clone(),s.some(([A,E])=>h>A&&h<E)){x=0;continue}if(r.push(g.x,0,g.z,g.x,t,g.z),a.push(c/2,0,c/2,1),x>0){let A=r.length/3-2;o.push(A-2,A,A-1,A-1,A,A+1)}x++}let v=new Ct;return v.setAttribute("position",new At(r,3)),v.setAttribute("uv",new At(a,2)),v.setIndex(o),v.computeVertexNormals(),v}function u_(i,e,t,n){let s=new Ne(i,e,t),r=s.attributes.uv,o=24,a=Math.floor(n()*8)/8,c=Math.floor(n()*8)/8;for(let l=0;l<6;l++)for(let h=0;h<4;h++){let u=l*4+h;if(l===2||l===3){r.setXY(u,.003,.997);continue}let f=l<2?t:i;r.setXY(u,r.getX(u)*(f/o)+a,r.getY(u)*(e/o)+c)}return s.translate(0,e/2,0),s}var Ap=["#e9dcc0","#d39a76","#efe6d2","#bccab9","#e2b98b","#cfc7b8","#e8cfc7","#f3eee3","#c9b48f","#a9bfc9","#dcc6a0"];function Cp(i,e,t,n,s=null){let r=ui(42),o={nightMats:[],update:[]},a=e.samples.length-1,c=(Z,Q)=>{let oe=Math.abs(Q-Z),B=gt("ground",{repeat:[3600/10,oe/10]}),V=new ke(new Tt(3600,oe),B);V.rotation.x=-Math.PI/2,V.position.set(0,-.02,(Z+Q)/2),V.receiveShadow=!0,i.add(V)};c(1500,jt.zNear),c(jt.zFar,-2600);let l=(()=>{let Q=new Uint8Array(262144),oe=(V,W)=>Math.sin(V*.11)*.5+Math.sin(W*.07+V*.03)*.8+Math.sin((V+W)*.23)*.3+Math.sin(V*.4-W*.31)*.15;for(let V=0;V<256;V++)for(let W=0;W<256;W++){let re=2*Math.PI/256,Ee=oe((W+1)*re*40,V*re*40)-oe((W-1)*re*40,V*re*40),Me=oe(W*re*40,(V+1)*re*40)-oe(W*re*40,(V-1)*re*40),Fe=new L(-Ee,-Me,2).normalize(),nt=(V*256+W)*4;Q[nt]=(Fe.x*.5+.5)*255,Q[nt+1]=(Fe.y*.5+.5)*255,Q[nt+2]=(Fe.z*.5+.5)*255,Q[nt+3]=255}let B=new ci(Q,256,256);return B.wrapS=B.wrapT=hn,B.repeat.set(60,4),B.needsUpdate=!0,B})(),h;if(n.tier===0)h=new ke(new Tt(3600,jt.zNear-jt.zFar+10),new Bt({color:1914432,roughness:.06,metalness:.1,normalMap:l,normalScale:new _e(.35,.35),clearcoat:1,clearcoatRoughness:.1})),o.update.push(Z=>{l.offset.set(Z*.004,Z*.011)});else{l.repeat.set(1,1),h=new vc(new Tt(3600,jt.zNear-jt.zFar+10),{textureWidth:n.tier===2?512:256,textureHeight:n.tier===2?512:256,waterNormals:l,sunDirection:new L(.3,.6,-.7).normalize(),sunColor:16769712,waterColor:862e3,distortionScale:1.6,fog:!0,alpha:1}),h.material.uniforms.size.value=6,h.material.fragmentShader=h.material.fragmentShader.replace("( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight )","( waterColor * 0.5 + reflectionSample * 0.94 + specularLight * 0.6 )").replace("sunColor * diffuseLight * 0.3","diffuseLight * waterColor * 0.6"),o.water=h;let Z=h.onBeforeRender.bind(h),Q=0;h.onBeforeRender=(...oe)=>{o.reflections!==!1&&!(Q++&1)&&Z(...oe)},o.update.push((oe,B)=>{h.material.uniforms.time.value=oe*.35,h.visible=!B||B.position.z<-380})}let u=new Pe("#1f5a5e");o.lightWater=(Z,Q,oe,B,V,W)=>{if(h.isWater){let re=h.material.uniforms;re.sunDirection.value.copy(Z),re.sunColor.value.copy(Q).multiplyScalar(oe/3*(1-W*.7)),re.waterColor.value.copy(u).multiply(B).multiplyScalar(.25+V*.35)}else h.material.color.copy(u).multiplyScalar(yi.lerp(.75,.22,W))},h.rotation.x=-Math.PI/2,h.position.set(0,jt.level,(jt.zNear+jt.zFar)/2),i.add(h);let f=gt("concrete",{repeat:[900,1.2],color:10262154});for(let Z of[jt.zNear,jt.zFar]){let Q=new ke(new Ne(3600,4.5,2),f);Q.position.set(0,-2.2,Z+(Z===jt.zNear?-1:1)),Q.receiveShadow=!0,i.add(Q)}let d=s?dp({route:e,kit:s,exclusions:t,rng:ui(91),ROAD_HALF:qi,WALK_OUT:gn,RIVER:jt}):{gaps:{"-1":[],1:[]},lampHeads:[]};o.streets=d;let x=gt("asphalt",{side:Xt,normalScale:1.2,envMapIntensity:1.1}),v=new ke(wp(e,-qi,qi,0,9,1),x);v.receiveShadow=!0,i.add(v),fi(v,{chunk:140,cull:520}).forEach(Z=>Z.layers.set(1)),o.road=x;let m=Fn(gt("pavers",{side:Xt}),{height:.4,strength:0});for(let[Z,Q,oe]of[[qi,gn,1],[-gn,-qi,-1]]){let B=wp(e,Z,Q,.16,2.4,1,d.gaps[oe]),V=B.attributes.uv;for(let re=0;re<V.count;re++)V.setX(re,V.getX(re)*((gn-qi)/2.4));let W=new ke(B,m);W.receiveShadow=!0,i.add(W),fi(W,{chunk:140,cull:420}).forEach(re=>re.layers.set(1))}let g=new rt({map:rn.curb_col,roughness:.8,side:Xt}),A=gt("concrete",{repeat:[1,.05],side:Xt});for(let Z of[qi,-qi]){let Q=new ke(Tp(e,Z,.16,1,d.gaps[Math.sign(Z)]),g);Q.receiveShadow=!0,i.add(Q),fi(Q,{chunk:140,cull:300}).forEach(oe=>oe.layers.set(1))}for(let Z of[gn,-gn]){let Q=new ke(Tp(e,Z,.16,2,d.gaps[Math.sign(Z)]),A);i.add(Q),fi(Q,{chunk:140,cull:300}).forEach(oe=>oe.layers.set(1))}let E=(Z,Q=6)=>Z<jt.zNear+Q&&Z>jt.zFar-Q,y=(Z,Q,oe)=>t.some(B=>Math.hypot(B.x-Z,B.z-Q)<B.r+oe),P=h_(),w=[],S=[],T=[],M=[],_=new Mc(ui(77),{lite:n.isMobile}),C=(Z,Q,oe,B,V,W,re=gn+.6,Ee=0,Me=0)=>{let Fe=Math.hypot(oe,B)/2;if(E(Q,Fe+4)||y(Z,Q,Fe))return!1;let nt=Math.cos(W),lt=Math.sin(W);for(let[ht,Ht]of[[-oe/2,-B/2],[oe/2,-B/2],[-oe/2,B/2],[oe/2,B/2],[0,0]]){let Ln=Z+ht*nt+Ht*lt,pi=Q-ht*lt+Ht*nt;if(e.distToRoad(Ln,pi)<re)return!1}let tt=Ap[Math.floor(r()*Ap.length)];if(Ee){let ht=Xr(new Ne(oe,V,B).translate(0,V/2,0));Hi(ht,tt),ht.rotateY(W),ht.translate(Z,0,Q),M.push(Nn(ht)),_.addBuilding({x:Z,z:Q,rot:W,side:Ee,perp:oe,along:B,floors:Me,tint:tt})}else{let ht=u_(oe,V,B,r);Hi(ht,tt),ht.rotateY(W),ht.translate(Z,0,Q),w.push(Nn(ht))}let xt=new Ne(oe+.3,.6,B+.3);xt.translate(0,V+.3,0),Hi(xt,"#8a8378");let Dt=[xt],Ut=1+Math.floor(r()*3);for(let ht=0;ht<Ut;ht++){let Ht=new Mt(.7,.75,1.5,14);Ht.translate((r()-.5)*(oe-2),V+1.35,(r()-.5)*(B-2)),Hi(Ht,"#141414"),Dt.push(Ht)}if(r()<.4){let ht=new Ne(2.5,2.4,2.5);ht.translate((r()-.5)*(oe-3),V+1.2,(r()-.5)*(B-3)),Hi(ht,"#bdb4a3"),Dt.push(ht)}for(let ht of Dt)ht.rotateY(W),ht.translate(Z,0,Q),S.push(Nn(ht,["position","normal","color"]));return!0},N={};for(let Z of[-1,1]){let Q=4,oe=e.length,B=s?s.buildings.filter(W=>W.kind==="block"||W.name!=="soho-block"):[],V=0;for(;Q<oe+30;){if(B.length&&r()<.9){let Ut=[];V<2&&r()<.18&&Ut.push(s.buildings.find(Ht=>Ht.name==="soho-block")),Ut.push(B[Math.floor(r()*B.length)]),Ut.push(...B.slice().sort((Ht,Ln)=>Ht.size.x-Ln.size.x).slice(0,4).sort(()=>r()-.5));let ht=null;for(let Ht of Ut)if(ht=pp({pf:Ht,route:e,s:Q,side:Z,WALK_OUT:gn,excluded:y,inRiver:E}),ht){Ht.name==="soho-block"&&V++;break}if(ht){t.push({x:ht.centre.x,z:ht.centre.z,r:Math.min(ht.w,ht.depth)*.5}),Q+=ht.w+.15+r()*.6;continue}}let W=8+r()*8,re=Math.min(1,Q/oe);e.frame(re,N);let Ee=9+r()*7,Fe=r()<.06?8+Math.floor(r()*5):2+Math.floor(r()*3.2),nt=Ss+Fe*Wr+.3,lt=gn+1.2+Ee/2+r()*1.5,tt=N.p.x+N.r.x*Z*lt,xt=N.p.z+N.r.z*Z*lt,Dt=Math.atan2(N.t.x,N.t.z);C(tt,xt,Ee,W,nt,Dt,gn+.6,Z,Fe),Q+=W+.6+r()*2.5}for(Q=0;Q<e.length+60;){let W=Math.min(1,Q/e.length);e.frame(W,N);let re=12+r()*14,Ee=12+r()*14,Me=r()<.18?34+r()*40:12+r()*16,Fe=34+r()*30,nt=N.p.x+N.r.x*Z*Fe,lt=N.p.z+N.r.z*Z*Fe;if(s&&r()<.45){let tt=s.buildings[Math.floor(r()*s.buildings.length)],xt=Math.hypot(tt.size.x,tt.size.z)/2;if(!E(lt,xt+4)&&!y(nt,lt,xt*.9)&&e.distToRoad(nt,lt)>20+xt*.5){let Dt=new L(nt,0,lt).addScaledVector(N.r,-Z*tt.size.z/2);tt.place(Dt,Math.atan2(-N.r.x*Z,-N.r.z*Z)),t.push({x:nt,z:lt,r:xt*.7}),Q+=tt.size.x+6+r()*10;continue}}C(nt,lt,re,Ee,Me,Math.atan2(N.t.x,N.t.z)+(r()-.5)*.3,20),Q+=re+6+r()*10}}for(let Z=0;Z<70;Z++){let Q=(r()-.5)*520,oe=jt.zFar-24-r()*240,B=12+r()*18,V=12+r()*18,W=r()<.3?40+r()*55:14+r()*22;C(Q,oe,B,V,W,(r()-.5)*.4,14)}for(let Z=0;Z<36;Z++){let Q=(r()<.5?-1:1)*(26+r()*240),oe=jt.zNear+22+r()*70;C(Q,oe,12+r()*10,10+r()*10,10+r()*22,(r()-.5)*.2,14)}let H=new rt({map:P.map,emissiveMap:P.emissive,emissive:16777215,emissiveIntensity:0,vertexColors:!0,roughness:.88}),X=Fn(gt("plaster",{vertexColors:!0,normalScale:1.4}),{height:3.2,strength:.38}),K=new ke(Dn([...M,..._.wallGeos]),X);K.castShadow=!0,K.receiveShadow=!0,i.add(K),fi(K,{chunk:140,cull:600}).forEach(Z=>Z.layers.set(1));let F=_.build(i),j=new ke(Dn(w),H);j.castShadow=!0,j.receiveShadow=!0,i.add(j),fi(j,{chunk:140,cull:660});let G=new ke(Dn(S),new rt({vertexColors:!0,roughness:.85}));if(G.castShadow=!0,G.receiveShadow=!0,i.add(G),fi(G,{chunk:140,cull:320}).forEach(Z=>Z.layers.set(1)),T.length){let Z=new ke(Dn(T),new rt({vertexColors:!0,roughness:.75,side:Xt}));Z.castShadow=!0,i.add(Z),fi(Z,{chunk:140,cull:200}).forEach(Q=>Q.layers.set(1))}o.windows=H;let q=Dn([Nn(new Mt(.07,.11,7,10).translate(0,3.5,0),["position","normal","uv"]),Nn(new Ne(.07,.07,1.8).translate(0,6.95,.9),["position","normal","uv"]),Nn(new Ne(.3,.12,.6).translate(0,6.9,1.85),["position","normal","uv"])]),ce=new Ne(.26,.04,.5).translate(0,6.83,1.85),$=[],fe=s?.props.lamp?7.2:6.2;for(let Z=6;Z<e.length-10;Z+=26){e.frame(Z/e.length,N);for(let Q of[-1,1]){let oe=qi+1,B=N.p.x+N.r.x*Q*oe,V=N.p.z+N.r.z*Q*oe;if(y(B,V,1))continue;let W=Math.atan2(-N.r.x*Q,-N.r.z*Q);$.push({x:B,z:V,rot:W,side:Q,onBridge:E(V,0)})}}let De=s?.props.lamp,J=[];if(De){for(let Z of $){let Q=De.place(new L(Z.x,.16,Z.z),Z.rot);for(let oe of De.tips)J.push({pos:oe.clone().applyMatrix4(Q),yaw:Z.rot})}for(let Z of d.lampHeads)J.push({pos:Z,yaw:0})}let de=new yn(q,gt("steel",{color:4870230,repeat:[.5,2]}),De?0:$.length),ge=new rt({color:16773840,emissive:16763266,emissiveIntensity:0}),pe=De?J.length:$.length,ve=new yn(De?new Ne(.34,.05,.6):ce,ge,pe),Ye=$n("rgba(255,196,120,0.9)","rgba(255,170,90,0)",128),je=new Qt({map:Ye,transparent:!0,opacity:0,depthWrite:!1,blending:xi}),ot=new yn(new Tt(8,8).rotateX(-Math.PI/2),je,pe),le=new He,ye=new Ot,z=new L,Ze=new L(1,1,1);De?J.forEach(({pos:Z,yaw:Q},oe)=>{ye.setFromAxisAngle(new L(0,1,0),Q),le.compose(z.copy(Z).setY(Z.y-.12),ye,Ze),ve.setMatrixAt(oe,le),le.compose(z.set(Z.x,.03,Z.z),new Ot,Ze),ot.setMatrixAt(oe,le)}):$.forEach((Z,Q)=>{ye.setFromAxisAngle(new L(0,1,0),Z.rot),le.compose(z.set(Z.x,.16,Z.z),ye,Ze),de.setMatrixAt(Q,le),ve.setMatrixAt(Q,le);let oe=Z.x+Math.sin(Z.rot)*1.85,B=Z.z+Math.cos(Z.rot)*1.85;le.compose(z.set(oe,.03,B),new Ot,Ze),ot.setMatrixAt(Q,le)}),de.castShadow=!0,ot.renderOrder=2,i.add(de,ve,ot),o.lampHead=ge,o.lampPool=je;let Se=[],We={"-1":$.filter(Z=>Z.side===-1&&!Z.onBridge),1:$.filter(Z=>Z.side===1&&!Z.onBridge)};for(let Z of["-1","1"]){let Q=We[Z];for(let oe=0;oe<Q.length-1;oe++){let B=new L(Q[oe].x,fe,Q[oe].z),V=new L(Q[oe+1].x,fe,Q[oe+1].z);if(!(B.distanceTo(V)>40)&&!t.some(W=>W.r>5&&Math.hypot(W.x-(B.x+V.x)/2,W.z-(B.z+V.z)/2)<W.r))for(let W=0;W<3;W++){let re=.8+W*.35+r()*.4,Ee=B.clone().setY(B.y-W*.25);for(let Me=1;Me<=10;Me++){let Fe=Me/10,nt=B.clone().lerp(V,Fe);nt.y=fe-W*.25-Math.sin(Fe*Math.PI)*re,Se.push(Ee.x,Ee.y,Ee.z,nt.x,nt.y,nt.z),Ee=nt}}}}let Re=new Ct;Re.setAttribute("position",new At(Se,3)),i.add(new Cr(Re,new zs({color:1710618,transparent:!0,opacity:.7})));let Ke=ui(5),Ge=[0,1,2].map(()=>{let Z=[],Q=[],oe=new L(0,1,0),B=(Me,Fe,nt,lt)=>{let tt=Me.distanceTo(Fe),xt=new Mt(lt,nt,tt,9,3,!0);xt.translate(0,tt/2,0);let Dt=xt.attributes.uv;for(let Ut=0;Ut<Dt.count;Ut++)Dt.setXY(Ut,Dt.getX(Ut)*2,Dt.getY(Ut)*tt);xt.applyQuaternion(new Ot().setFromUnitVectors(oe,Fe.clone().sub(Me).normalize())),xt.translate(Me.x,Me.y,Me.z),Z.push(Nn(xt,["position","normal","uv"]))},V=new L((Ke()-.5)*.6,3.2+Ke()*1.2,(Ke()-.5)*.6);B(new L(0,-.2,0),V,.32,.22);let W=new L(0,6.4,0),re=[],Ee=5+Math.floor(Ke()*3);for(let Me=0;Me<Ee;Me++){let Fe=Me/Ee*Math.PI*2+Ke()*.6,nt=2.2+Ke()*1.8,lt=V.clone().add(new L(Math.cos(Fe)*nt*.5,1.2+Ke()*.8,Math.sin(Fe)*nt*.5)),tt=V.clone().add(new L(Math.cos(Fe)*nt,2.4+Ke()*1.6,Math.sin(Fe)*nt));B(V,lt,.16,.11),B(lt,tt,.11,.05),re.push(tt,lt.clone().lerp(tt,.5))}re.push(V.clone().add(new L(0,3.2,0)));for(let Me of re)for(let Fe=0;Fe<9;Fe++){let nt=1.5+Ke()*1.1,lt=new Tt(nt,nt);lt.rotateX(-Math.PI/2+(Ke()-.5)*1.6),lt.rotateY(Ke()*Math.PI*2);let tt=new L((Ke()-.5)*1.8,(Ke()-.3)*1.2,(Ke()-.5)*1.8);lt.translate(Me.x+tt.x,Me.y+tt.y,Me.z+tt.z);let xt=lt.attributes.position,Dt=lt.attributes.normal;for(let Ut=0;Ut<xt.count;Ut++){let ht=new L(xt.getX(Ut),xt.getY(Ut),xt.getZ(Ut)).sub(W);ht.y*=1.6,ht.normalize(),Dt.setXYZ(Ut,ht.x,ht.y,ht.z)}Q.push(Nn(lt,["position","normal","uv"]))}return{wood:Dn(Z),leaves:Dn(Q)}}),O=[];for(let Z=14;Z<e.length;Z+=9+r()*10){e.frame(Z/e.length,N);let Q=r()<.5?-1:1,oe=gn-.9,B=N.p.x+N.r.x*Q*oe,V=N.p.z+N.r.z*Q*oe;E(V,8)||t.some(W=>(W.r>9||W.r<4.5)&&Math.hypot(W.x-B,W.z-V)<W.r+2.5)||O.push([B,V,.7+r()*.35,r()*6,!0])}let I=s?n.isMobile?50:150:260;for(let Z=0;Z<I;Z++){let Q=(r()-.5)*500,oe=60-r()*900;E(oe,10)||y(Q,oe,3)||e.distToRoad(Q,oe)<12||O.push([Q,oe,.9+r()*.6,r()*6])}let te=gt("bark",{normalScale:1.5}),he=new rt({map:rn.leaves_col,normalMap:rn.leaves_nor,alphaTest:.45,side:Xt,roughness:.78,color:16777215});he.map.wrapS=he.map.wrapT=Hn;let xe=new Fs({depthPacking:Ro,map:rn.leaves_col,alphaTest:.45}),ue=new Pe;if(s?.trees.length){let Z=s.trees;O.forEach(([Q,oe,B,V,W],re)=>{W?Z[1+re%2].place(new L(Q,.1,oe),V,.62+B*.18):Z[re%Z.length].place(new L(Q,.1,oe),V,.8+B*.3)})}else Ge.forEach((Z,Q)=>{let oe=O.filter((W,re)=>re%3===Q);if(!oe.length)return;let B=new yn(Z.wood,te,oe.length),V=new yn(Z.leaves,he,oe.length);V.customDepthMaterial=xe,oe.forEach(([W,re,Ee,Me],Fe)=>{ye.setFromAxisAngle(new L(0,1,0),Me),le.compose(z.set(W,.1,re),ye,new L(Ee,Ee,Ee)),B.setMatrixAt(Fe,le),V.setMatrixAt(Fe,le),V.setColorAt(Fe,ue.setHSL(.22+r()*.06,.45+r()*.2,.62+r()*.18))}),B.castShadow=V.castShadow=!0,B.receiveShadow=V.receiveShadow=!0,i.add(B,V)});let Je=new Ct,Ie=[];for(let Z=0;Z<1800;Z++){let Q=r()*Math.PI*2,oe=Math.acos(r()*.92);Ie.push(Math.sin(oe)*Math.cos(Q)*640,Math.cos(oe)*640,Math.sin(oe)*Math.sin(Q)*640)}Je.setAttribute("position",new At(Ie,3));let Le=new Fi({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),it=new us(Je,Le);i.add(it);let be=new ke(new Pn(8.5,32,16),new Qt({color:16774880,fog:!1,transparent:!0,opacity:0})),Ve=new Ni(new vi({map:$n("rgba(255,240,210,0.55)","rgba(255,240,210,0)"),fog:!1,transparent:!0,opacity:0,depthWrite:!1}));Ve.scale.set(108,108,1),i.add(be,Ve);let $e=new xs().load("assets/tex/cloud.webp");$e.colorSpace=Gt;let Qe=new ft,Xe=[];for(let Z=0;Z<18;Z++){let Q=new vi({map:$e,transparent:!0,depthWrite:!1,fog:!1,opacity:.55+r()*.35,rotation:r()*6.28});Q.userData.base=Q.opacity,Xe.push(Q);let oe=new Ni(Q),B=r()*Math.PI*2,V=430+r()*200;oe.position.set(Math.cos(B)*V,85+r()*130,Math.sin(B)*V);let W=160+r()*220;oe.scale.set(W*(1.4+r()),W,1),oe.userData.base=Q.opacity,Qe.add(oe)}if(Qe.renderOrder=-1,i.add(Qe),o.clouds=Qe,o.tintClouds=(Z,Q)=>Xe.forEach(oe=>{oe.color.copy(Z),oe.opacity=oe.userData.base*Q}),o.sky={stars:it,starMat:Le,moon:be,moonGlow:Ve},s){ko(i,s.buildings,{chunk:140,cull:640,layer:1}),ko(i,Object.values(s.roads),{cull:460,layer:1}),ko(i,Object.values(s.props),{chunk:140,cull:300,layer:1}),ko(i,s.trees,{chunk:140,cull:300,layer:1});let Z=Ep(s.trees);o.update.push((Q,oe)=>Z(Q,oe))}return o.setNight=Z=>{if(s){for(let Q of s.nightMats)Q.emissiveIntensity=Q.userData.night==="windows"?Z*1.8:Z*.55;s.poster&&(s.poster.emissiveIntensity=.25+Z*.9)}H.emissiveIntensity=Z*1.25,F.setNight(Z),ge.emissiveIntensity=Z*6,je.opacity=Z*.55,ot.visible=Z>.01,it.visible=Z>.35,be.visible=Ve.visible=Z>.3,Le.opacity=Math.max(0,Z-.35)*1.4,be.material.opacity=Math.max(0,Z-.3),Ve.material.opacity=Math.max(0,Z-.3)*.8},o}function Pp(i,e,{shimmer:t=!0}={}){let n=new ft,s=jt.zNear+6,r=jt.zFar-6,o=s-r,a=7.2,c=y=>{let P=[[0,7],[.22,30],[.36,21],[.5,15.5],[.64,21],[.78,30],[1,7]];for(let w=0;w<P.length-1;w++)if(y<=P[w+1][0]){let S=(y-P[w][0])/(P[w+1][0]-P[w][0]);return P[w][1]+(P[w+1][1]-P[w][1])*S}return 7},l=26,h=[],u=(y,P,w)=>new L(y,P,s-w*o);for(let y of[-a,a]){for(let P=0;P<l;P++){let w=P/l,S=(P+1)/l;h.push([u(y,.4,w),u(y,.4,S),.55]),h.push([u(y,c(w),w),u(y,c(S),S),.6]),h.push([u(y,.4,w),u(y,c(w),w),.35]),h.push([u(y,.4,w),u(y,c(S),S),.22]),h.push([u(y,c(w),w),u(y,.4,S),.22])}h.push([u(y,.4,1),u(y,c(1),1),.35]);for(let P of[.22,.78])h.push([u(y,jt.level-1,P),u(y,c(P)+2,P),1.4])}for(let y=0;y<=l;y++){let P=y/l,w=c(P);w>9&&(h.push([u(-a,w,P),u(a,w,P),.28]),y<l&&h.push([u(-a,w,P),u(a,c((y+1)/l),(y+1)/l),.16]))}let f=gt("steel",{color:6976124,repeat:[1,3],normalScale:1.5}),d=new yn(new Ne(1,1,1),f,h.length),x=new He;h.forEach(([y,P,w],S)=>d.setMatrixAt(S,ep(y,P,w,w,x))),d.castShadow=!0,d.receiveShadow=!0,n.add(d);let v=new ke(new Ne(a*2+1,1.4,o+2),gt("steel",{color:5264988,repeat:[2,20]}));v.position.set(0,-.72,s-o/2),v.receiveShadow=!0,n.add(v);for(let y of[.22,.78]){let P=new ke(new Ne(a*2+6,4,7),gt("concrete",{repeat:[5,1]}));P.position.set(0,jt.level+.6,s-y*o),n.add(P)}let m=[];for(let y of[-a,a])for(let P=0;P<=120;P++){let w=P/120;m.push(u(y,c(w)+.45,w))}for(let y of[-a-.4,a+.4])for(let P=0;P<=60;P++){let w=P/60;m.push(u(y,.9,w))}let g=new rt({color:16770736,emissive:16761963,emissiveIntensity:0}),A=new yn(new Pn(.16,8,6),g,m.length);m.forEach((y,P)=>{x.makeTranslation(y.x,y.y,y.z),A.setMatrixAt(P,x)}),n.add(A);let E=new ke(new Tt(22,140),new Qt({map:$n("rgba(255,190,110,0.6)","rgba(255,170,90,0)"),transparent:!0,opacity:0,depthWrite:!1,blending:xi}));return E.rotation.x=-Math.PI/2,E.position.set(0,jt.level+.05,s-o/2),n.add(E),i.add(n),{group:n,setNight(y){g.emissiveIntensity=.1+y*3.2,E.material.opacity=y*.8,E.visible=t&&y>.01}}}var Ho=new L;function ei(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Ho.copy(e),Ho[n]=0,Ho.normalize();let l=.5*o/(o+a),h=1-Ho.angleTo(i)/c;return Math.sign(Ho[t])===1?h*l:a/(o+a)+l+l*(1-h)}var on=class extends Ne{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,c=new L,l=new L(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,x=new L,v=.5/s;for(let m=0,g=0;m<h.length;m+=3,g+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/d)){case 0:x.set(1,0,0),f[g+0]=ei(x,c,"z","y",r,n),f[g+1]=1-ei(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[g+0]=1-ei(x,c,"z","y",r,n),f[g+1]=1-ei(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[g+0]=1-ei(x,c,"x","z",r,e),f[g+1]=ei(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[g+0]=1-ei(x,c,"x","z",r,e),f[g+1]=1-ei(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[g+0]=1-ei(x,c,"x","y",r,e),f[g+1]=1-ei(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[g+0]=ei(x,c,"x","y",r,e),f[g+1]=1-ei(x,c,"y","x",r,t);break}}};var xn=1.62;function f_(){let i=new fs,e=[[2.16,.46],[2.22,.66],[2.16,.88],[1.98,.98],[1.6,1.03],[.85,1.06],[-1.25,1.06],[-1.95,1.03],[-2.16,.96],[-2.22,.78],[-2.18,.52]];i.moveTo(2.16,.46);for(let n=1;n<e.length;n++)i.lineTo(e[n][0],e[n][1]);let t=(n,s,r)=>{let c=Math.asin(.13636363636363635),l=18;for(let h=0;h<=l;h++){let u=Math.PI-c-h/l*(Math.PI-2*c);i.lineTo(n+Math.cos(u)*.44,.36+Math.sin(u)*.44)}};return i.lineTo(-1.79,.42),t(-1.35),i.lineTo(.91,.42),t(1.35),i.lineTo(2.16,.46),i}function Ip(i,e,t=.07,n=5){let s=new Pr(i,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t*.85,bevelSegments:n,curveSegments:24});return s.translate(0,0,-e/2),s.computeVertexNormals(),s}function Dp(i,{yMid:e=.78,ky:t=.9,kx:n=.18,lean:s=0}={}){let r=i.attributes.position,o=i.attributes.normal,a=new L;for(let c=0;c<o.count;c++){let l=o.getZ(c);if(Math.abs(l)<.85)continue;let h=r.getX(c),u=r.getY(c);a.set(Math.sign(h)*Math.pow(Math.abs(h)/2.2,3)*n,(u-e)*t+s,Math.sign(l)).normalize(),o.setXYZ(c,a.x,a.y,a.z)}return i}function zu(i,e,t,n=.06,s=0){let r=new L(e[0],e[1],s),o=new L(t[0],t[1],s),a=r.distanceTo(o),c=new ke(new Ne(n,a,n*.9),i);return c.position.addVectors(r,o).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new L(0,1,0),o.clone().sub(r).normalize()),c.castShadow=!0,c}var Tc;function d_(){if(Tc)return Tc;let i=kt(Vt(512,128,(n,s,r)=>{n.clearRect(0,0,s,r),n.fillStyle="#1b3f8f",n.font='700 64px "JetBrains Mono", monospace',n.textAlign="center",n.textBaseline="middle",n.fillText("NO REFUSAL",s/2,r/2+4)})),e=kt(Vt(512,128,(n,s,r)=>{n.fillStyle="#f6f3ea",n.fillRect(0,0,s,r),n.strokeStyle="#111",n.lineWidth=8,n.strokeRect(6,6,s-12,r-12),n.fillStyle="#111",n.font='700 66px "JetBrains Mono", monospace',n.textAlign="center",n.textBaseline="middle",n.fillText("WB 04 PP 2016",s/2,r/2+4)})),t=$n("rgba(0,0,0,0.85)","rgba(0,0,0,0)",128);return Tc={door:i,plate:e,shadow:t},Tc}function ku({lights:i=!0,color:e=15908123}={}){let t=d_(),n=new ft,s=new ft,r=new ft;r.rotation.y=-Math.PI/2,s.add(r),n.add(s);let o=Fn(new Bt({color:e,roughness:.34,metalness:.05,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.2}),{height:.95,strength:.32}),a=new rt({color:15330543,metalness:1,roughness:.14}),c=new Bt({color:1845806,metalness:0,roughness:.02,envMapIntensity:1.1,transparent:!0,opacity:.34,specularIntensity:1,ior:1.52,depthWrite:!1}),l=new rt({color:2758420,roughness:.45}),h=new rt({color:1381135,roughness:.8}),u=new rt({color:789517,roughness:.7}),f=new rt({color:1315860,roughness:.92}),d=new rt({color:16775398,emissive:16773577,emissiveIntensity:.15,roughness:.1,metalness:.2}),x=new rt({color:7997962,emissive:16718362,emissiveIntensity:.25,roughness:.2}),v=new rt({color:16753178,emissive:16747008,emissiveIntensity:.2}),m=($,fe,De=0,J=0,de=0,ge=!0)=>{let pe=new ke($,fe);return pe.position.set(De,J,de),pe.castShadow=ge,pe.receiveShadow=!0,r.add(pe),pe};m(Dp(Ip(f_(),xn-.14,.07,6)),o);let g=new fs;g.moveTo(-1.22,1),g.lineTo(-.95,1.47),g.lineTo(.42,1.49),g.lineTo(.84,1),g.lineTo(-1.22,1),m(Dp(Ip(g,xn-.3,.035,3),{yMid:1,ky:.2,kx:.05,lean:.3}),c),m(new on(1.5,.08,xn-.2,3,.035),o,-.27,1.5,0);let A=(xn-.24)/2;for(let $ of[-A,A])r.add(zu(o,[.84,1.03],[.42,1.5],.07,$)),r.add(zu(o,[-.22,1.03],[-.22,1.5],.08,$)),r.add(zu(o,[-1.2,1.03],[-.95,1.5],.09,$));for(let $ of[-xn/2-.004,xn/2+.004]){m(new Ne(2.1,.022,.012),a,-.2,1.04,$,!1),m(new Ne(3.95,.03,.014),a,0,.78,$,!1);for(let De of[.86,-.22,-1.24])m(new Ne(.012,.56,.006),u,De,.75,$,!1);for(let De of[.62,-.42])m(new Ne(.16,.03,.03),a,De,.95,$+Math.sign($)*.01,!1);let fe=new ke(new Tt(.95,.24),new rt({map:t.door,transparent:!0,roughness:.4,depthWrite:!1}));fe.position.set(.28,.6,$+Math.sign($)*.006),$<0&&(fe.rotation.y=Math.PI),r.add(fe),m(new Ne(.06,.08,.12),a,.78,1.12,$+Math.sign($)*.08)}m(new on(.16,.15,xn+.08,3,.05),a,2.26,.48,0),m(new on(.16,.15,xn+.06,3,.05),a,-2.25,.5,0),m(new Ne(.05,.3,.92),u,2.2,.72,0,!1),m(new on(.06,.34,.98,2,.02),a,2.19,.72,0,!1).scale.set(1,1,1);for(let $=0;$<9;$++)m(new Ne(.06,.28,.028),a,2.225,.72,-.4+$*.1,!1);let E=new Mt(.115,.115,.08,32);E.rotateZ(Math.PI/2);let y=new ds(.12,.02,10,32);y.rotateY(Math.PI/2);for(let $ of[-.6,.6])m(E,d,2.17,.76,$,!1),m(y,a,2.2,.76,$,!1),m(new Ne(.04,.05,.1),v,2.2,.6,$*1.12,!1),m(new Ne(.04,.17,.13),x,-2.2,.82,$*1.02,!1);let P=new rt({map:t.plate,roughness:.5}),w=m(new Tt(.52,.13),P,2.345,.47,0,!1);w.rotation.y=Math.PI/2;let S=m(new Tt(.52,.13),P,-2.34,.66,0,!1);S.rotation.y=-Math.PI/2,m(new Ne(3.7,.22,xn-.24),u,0,.42,0,!1),m(new Ne(2.3,.05,xn-.3),h,-.25,.64,0,!1),m(new Ne(2.1,.03,xn-.34),h,-.27,1.43,0,!1);for(let[$,fe]of[[.12,-.14],[-.86,-1.12]])m(new on(.52,.2,xn-.36,3,.06),l,$,.78,0,!1),m(new on(.14,.5,xn-.36,3,.05),l,fe,1.07,0,!1).rotation.z=.12;m(new on(.34,.22,xn-.3,2,.05),h,.72,.98,0,!1);let T=new ds(.19,.018,8,32);T.rotateY(Math.PI/2),m(T,u,.46,1.1,.36,!1).rotation.z=.45,m(new Mt(.02,.02,.3,8).rotateZ(Math.PI/2-.45),u,.6,1.04,.36,!1);let M=new rt({color:14209728,roughness:.85}),_=new rt({color:8015411,roughness:.55});m(new on(.26,.5,.4,3,.1),M,.02,1.1,.36,!1),m(new Pn(.105,20,14),_,.06,1.45,.36,!1).scale.set(1,1.15,.95),m(new Pn(.11,20,10,0,Math.PI*2,0,Math.PI/2),new rt({color:1314829,roughness:.9}),.05,1.48,.36,!1);for(let $ of[.22,.5])m(new Mt(.035,.035,.42,8).rotateZ(Math.PI/2-.5),M,.26,1.16,$,!1);m(new on(.14,.16,.1,2,.02),new rt({color:6165010,roughness:.45}),.78,1.18,-(xn/2)-.02,!0),m(new Ne(.015,.1,.07),new rt({color:14210248}),.8,1.32,-(xn/2)-.02,!1);let C=new rt({color:13225168,metalness:1,roughness:.28});for(let $ of[-.62,.62]){m(new Mt(.018,.018,1.4,10).rotateZ(Math.PI/2),C,-.27,1.64,$);for(let fe of[-.9,.35])m(new Mt(.014,.014,.12,8),C,fe,1.58,$)}for(let $ of[-.85,-.27,.3])m(new Mt(.014,.014,1.24,8).rotateX(Math.PI/2),C,$,1.64,0);for(let $ of[-A-.04,A+.04])m(new Ne(1.5,.02,.02),a,-.27,1.47,$,!1);for(let $ of[-.32,.22]){let fe=m(new Ne(.012,.012,.42),u,.86,1.07,$,!1);fe.rotation.x=.25}m(new Mt(.004,.006,.9,6),a,1.5,1.45,-.7,!1).rotation.z=-.25;let N=new Mt(.42,.42,xn-.12,20,1,!0,Math.PI/2,Math.PI);N.rotateX(Math.PI/2);let H=new rt({color:657930,roughness:.95,side:$t});for(let $ of[1.35,-1.35])m(N,H,$,.36,0,!1);let X=[],K=new ds(.245,.095,16,40),F=new Mt(.335,.335,.17,40,1,!0);F.rotateX(Math.PI/2);let j=new Mt(.17,.19,.04,32);j.rotateX(Math.PI/2);let G=new Pn(.07,16,8,0,Math.PI*2,0,Math.PI/2);G.rotateX(Math.PI/2);for(let $ of[1.35,-1.35])for(let fe of[-(xn/2-.13),xn/2-.13]){let De=new ft;De.position.set($,.335,fe);let J=Math.sign(fe),de=new ke(K,f),ge=new ke(F,f),pe=new ke(j,a);pe.position.z=J*.07;let ve=new ke(G,a);ve.position.z=J*.085,ve.scale.z=J;for(let Ye=0;Ye<4;Ye++){let je=new ke(new Ne(.3,.025,.02),u);je.rotation.z=Ye*Math.PI/4,je.position.z=J*.093,De.add(je)}[de,ge,pe,ve].forEach(Ye=>{Ye.castShadow=!0,De.add(Ye)}),r.add(De),X.push(De)}let q=new ke(new Tt(2.4,5.4),new Qt({map:t.shadow,transparent:!0,depthWrite:!1,opacity:.75}));q.rotation.x=-Math.PI/2,q.position.y=.012,q.renderOrder=1,n.add(q);let ce=null;if(i){ce=new vs(16769712,0,55,.5,.55,1.2),ce.position.set(0,.8,2.2);let $=new zt;$.position.set(0,0,14),n.add($),ce.target=$,n.add(ce)}return{root:n,body:s,wheels:X,setNight($){d.emissiveIntensity=.15+$*5,x.emissiveIntensity=.25+$*3,ce&&(ce.intensity=$*60)},spin($){for(let fe of X)fe.rotation.z-=$/.335}}}var p_=4.72,m_=new Set(["tire","rimMat","RimB","rotor"]);async function Lp(i){let n=(await new Yr().setMeshoptDecoder(Ec).loadAsync("assets/models/camaro.glb",S=>{S.total&&i?.(S.loaded/S.total)})).scene,s=new ft,r=new ft;s.add(r),r.add(n);let o=[];n.traverse(S=>{S.isMesh&&o.push(S)});let a=S=>o.filter(T=>T.material?.name===S),c=S=>{let T=new un;return S.forEach(M=>T.expandByObject(M)),T};s.updateMatrixWorld(!0);let l=c([n]),h=l.getCenter(new L),u=c(a("Red_glass")).getCenter(new L),f=h.clone().sub(u).setY(0).normalize();n.rotation.y=-Math.atan2(f.x,f.z),s.updateMatrixWorld(!0),l=c([n]);let d=l.getSize(new L),x=p_/Math.max(d.x,d.z);n.scale.multiplyScalar(x),s.updateMatrixWorld(!0),l=c([n]);let v=l.getCenter(new L);n.position.x-=v.x,n.position.z-=v.z,n.position.y-=l.min.y,s.updateMatrixWorld(!0);let m=[];for(let S of a("tire")){let T=c([S]).getCenter(new L),M=new ft;M.position.copy(r.worldToLocal(T.clone())),r.add(M),M.updateMatrixWorld(!0),m.push({pivot:M,centre:T})}for(let S of o){if(!m_.has(S.material?.name))continue;let T=c([S]).getCenter(new L),M=null,_=1/0;for(let C of m){let N=C.centre.distanceTo(T);N<_&&(_=N,M=C)}M&&_<.6&&M.pivot.attach(S)}let g=m.length?c([m[0].pivot]).getSize(new L).y/2:.34,A=null,E=null;for(let S of o){S.castShadow=!0,S.receiveShadow=!0;let T=S.material;if(T){if(T.transmission>0&&T.name!=="Red_glass"&&(T.transmission=0,T.transparent=!0,T.opacity=.38,T.color.set(791576),T.depthWrite=!1,S.castShadow=!1),T.name==="Light_glass"&&(S.castShadow=!1),T.name==="Red_glass"&&(T.transmission=0,T.transparent=!0,T.color.set(9046534),T.opacity=.85,T.emissive=new Pe(16718352),T.emissiveIntensity=.35,E=T,S.castShadow=!1),T.name==="Light"){T.emissiveMap=null,T.emissive=new Pe(16773336),T.emissiveIntensity=0;let M=S.matrixWorld.clone().invert(),_=new L(0,0,1).transformDirection(M),C=S.worldToLocal(c([S]).getCenter(new L));T.onBeforeCompile=N=>{N.uniforms.uFwd={value:_},N.uniforms.uMid={value:C},N.vertexShader=N.vertexShader.replace("#include <common>",`#include <common>
uniform vec3 uFwd; uniform vec3 uMid; varying float vFront;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFront = dot(position - uMid, uFwd);`),N.fragmentShader=N.fragmentShader.replace("#include <common>",`#include <common>
varying float vFront;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= mix(vec3(1.0, 0.06, 0.03), vec3(1.0), step(0.0, vFront));`)},T.customProgramCacheKey=()=>"camaro-lamps",A=T}T.name==="CarPaint"&&(T.envMapIntensity=1.25)}}let y=new ke(new Tt(2.3,5.2),new Qt({map:$n("rgba(0,0,0,0.85)","rgba(0,0,0,0)",128),transparent:!0,depthWrite:!1,opacity:.8}));y.rotation.x=-Math.PI/2,y.position.y=.012,y.renderOrder=1,s.add(y);let P=new vs(16769712,0,55,.5,.55,1.2);P.position.set(0,.7,2.3);let w=new zt;return w.position.set(0,0,14),s.add(P,w),P.target=w,{root:s,body:r,wheels:m.map(S=>S.pivot),setNight(S){A&&(A.emissiveIntensity=S*2.2),E&&(E.emissiveIntensity=.35+S*3),P.intensity=S*60},spin(S){for(let T of m)T.pivot.rotation.x+=S/g}}}var Hu='"Instrument Serif", Georgia, serif',Xs='"Manrope", system-ui, sans-serif',di='"JetBrains Mono", ui-monospace, monospace';function Up(i,e,t,n,s){let r=i.frame(t);return e.position.copy(r.p).addScaledVector(r.r,n*s),e.rotation.y=Math.atan2(-r.r.x*n,-r.r.z*n),e}var St=i=>new rt(i);function Be(i,e,t=0,n=0,s=0,r){let o=new ke(i,e);return o.position.set(t,n,s),o.castShadow=!0,o.receiveShadow=!0,r&&r.add(o),o}function _n(i,e,t,n=3){return Xr(new Ne(i,e,t),n)}function g_(i){for(let e of["map","normalMap","roughnessMap","metalnessMap","aoMap"])i[e]&&(i[e]=i[e].clone(),i[e].center.set(.5,.5),i[e].rotation=Math.PI/2,i[e].needsUpdate=!0);return i}function Np(i,e,t,n,s){let r=fp(s);return r.position.set(e,t,n),r.rotation.y=-Math.PI/2,i.add(r),r}function Ac(i,e,t){return kt(Vt(i,e,t))}function Fp(){let i=new ft,e=gt("wood",{color:10123866}),t=gt("corrugated",{color:10133668});Be(_n(3.2,1.1,1.3,1.5),e,0,.55,0,i),Be(new Ne(3.4,.08,1.5),St({color:3811868}),0,1.12,0,i);for(let l of[-1.55,1.55])for(let h of[-.6,.6])Be(new Mt(.04,.04,2.6),e,l,1.3,h,i);let n=Be(_n(4,.05,2.4,2),t,0,2.6,.2,i);n.rotation.x=.12;let s=Be(new Mt(.16,.22,.34,20),St({color:12088115,metalness:.9,roughness:.3}),-.8,1.33,.1,i);Be(new Mt(.2,.2,.1,16),St({color:546}),-.8,1.19,.1,i);for(let l=0;l<8;l++)Be(new Mt(.045,.032,.08,10),St({color:10506797,roughness:1}),.2+l%4*.13,1.2,-.1+Math.floor(l/4)*.14,i);Be(new Ne(2.2,.08,.4),e,.4,.5,1.6,i);for(let l of[-.5,1.3])Be(new Ne(.08,.5,.36),e,l,.25,1.6,i);let r=Ac(512,128,(l,h,u)=>{l.fillStyle="#b8321f",l.fillRect(0,0,h,u),l.fillStyle="#ffe9b0",l.font=`700 62px ${Xs}`,l.textAlign="center",l.textBaseline="middle",l.fillText("CHA  \xB7  \u20B910",h/2,u/2+3)}),o=Be(new Tt(2.2,.55),St({map:r,roughness:.7}),0,2.25,.62,i);o.castShadow=!1;let a=$n("rgba(255,255,255,0.55)","rgba(255,255,255,0)"),c=[];for(let l=0;l<10;l++){let h=new Ni(new vi({map:a,transparent:!0,depthWrite:!1,opacity:0}));h.userData.o=l/10,i.add(h),c.push(h)}return{group:i,radius:4,update(l){for(let h of c){let u=(l*.25+h.userData.o)%1;h.position.set(s.position.x+Math.sin(u*6+h.userData.o*9)*.15,1.55+u*1.4,s.position.z);let f=.25+u*.7;h.scale.set(f,f,1),h.material.opacity=Math.sin(u*Math.PI)*.22}}}}function Op(){let i=new ft,e=ui(101),t=Fn(gt("plaster",{color:15390382,normalScale:1.4}),{height:3,strength:.4}),n=Be(_n(14,8,8),t,0,4,-6.5,i);Be(_n(14.5,.45,8.5),gt("concrete",{color:12103324}),0,8.2,-6.5,i),Be(_n(14.3,.18,.3),t,0,4.95,-2.4,i);let s=Be(new Tt(6,3.2),g_(gt("corrugated",{color:9213081,repeat:[1.6,3]})),-3,1.6,-2.48,i),r=kt(Vt(256,256,(T,M,_)=>{let C=T.createLinearGradient(0,0,0,_);C.addColorStop(0,"#3a2a1c"),C.addColorStop(1,"#120c08"),T.fillStyle=C,T.fillRect(0,0,M,_);let N=T.createRadialGradient(M*.5,_*.15,4,M*.5,_*.15,M*.6);N.addColorStop(0,"rgba(255,230,180,0.9)"),N.addColorStop(1,"rgba(255,200,120,0)"),T.fillStyle=N,T.fillRect(0,0,M,_),T.fillStyle="rgba(160,130,90,0.5)";for(let H=0;H<5;H++)T.fillRect(20+H*46,_*.45,34,_*.4)})),o=St({map:r,emissive:16777215,emissiveMap:r,emissiveIntensity:.35,roughness:.3});Be(new Tt(3.4,3),o,3.6,1.5,-2.48,i);for(let[T,M]of[-4.5,0,4.5].entries())Np(i,M,6.3,-2.5,{lit:T===1,shutterColor:"#3f5f7a",open:.3+T*.15});let a=Ac(1024,160,(T,M,_)=>{T.fillStyle="#1f3b63",T.fillRect(0,0,M,_),T.fillStyle="#f5c518",T.fillRect(0,_-10,M,10),T.fillStyle="#fff",T.font=`800 70px ${Xs}`,T.textBaseline="middle",T.fillText("INVOICE DESK",36,_/2-4),T.font=`500 30px ${di}`,T.textAlign="right",T.fillStyle="#c9d6ea",T.fillText("DATA ENTRY \xB7 ERP \xB7 EST. 2016",M-36,_/2-2)});Be(new Ne(12,1.6,.2),St({map:a,emissiveMap:a,emissive:16777215,emissiveIntensity:.25}),0,4.1,-2.35,i);let c=[],l=[{s:[.42,.11,.3],c:[16052972,16777215,15525590]},{s:[.5,.32,.36],c:[16777215,15260875,14272688]},{s:[.32,.29,.07],c:[2772879,9382442,3111493,2039583]}];for(let T=-6;T<=6;T++)for(let M=-2;M<=3;M++){let _=T*.55+(e()-.5)*.2,C=M*.5+(e()-.5)*.2,N=Math.max(0,1-Math.hypot(T/6.5,(M-.2)/3.4)),H=0,X=Math.floor(N*16+e()*2);for(let K=0;K<X;K++){let F=e()<.6?0:e()<.6?1:2,j=l[F],G=j.s;c.push({k:F,x:_,y:H+G[1]/2,z:C,s:G,rot:(e()-.5)*.4,col:F===0?16777215:j.c[Math.floor(e()*j.c.length)]}),H+=G[1]}}let h=kt(Vt(128,128,(T,M,_)=>{T.fillStyle="#f4f2ea",T.fillRect(0,0,M,_);for(let C=0;C<_;C+=2)T.fillStyle=`rgba(150,145,130,${.15+Math.random()*.2})`,T.fillRect(0,C,M,1);T.fillStyle="#2c5aa0",T.fillRect(0,_*.35,M,_*.3),T.fillStyle="#fff",T.font="700 18px Manrope, sans-serif",T.fillText("A4 \xB7 75gsm",10,_*.55)})),u=kt(Vt(128,128,(T,M,_)=>{T.fillStyle="#b08a5a",T.fillRect(0,0,M,_);for(let C=0;C<900;C++)T.fillStyle=`rgba(${90+Math.random()*60},${60+Math.random()*40},30,0.25)`,T.fillRect(Math.random()*M,Math.random()*_,3,1);T.fillStyle="rgba(200,180,140,0.7)",T.fillRect(M*.42,0,M*.16,_),T.fillStyle="#222",T.font="700 14px JetBrains Mono, monospace",T.fillText("FY 2016-17",8,_-12)})),f=kt(Vt(128,128,(T,M,_)=>{T.fillStyle="#ffffff",T.fillRect(0,0,M,_),T.fillStyle="rgba(0,0,0,0.25)",T.fillRect(0,0,M,8),T.fillRect(0,_-8,M,8),T.fillStyle="#f6f1e0",T.fillRect(M*.3,_*.25,M*.4,_*.3),T.beginPath(),T.arc(M/2,_*.78,9,0,7),T.fillStyle="#222",T.fill()})),d={0:[],1:[],2:[]};c.forEach(T=>d[T.k].push(T));let x=new He,v=new Ot,m=new Pe;[[0,h,.75],[1,u,.9],[2,f,.45]].forEach(([T,M,_])=>{let C=d[T];if(!C.length)return;let N=new yn(new on(1,1,1,2,.03),St({map:M,roughness:_,color:16777215}),C.length);C.forEach((H,X)=>{v.setFromEuler(new qn((Math.random()-.5)*.04,H.rot,(Math.random()-.5)*.04)),x.compose(new L(H.x,H.y,H.z),v,new L(...H.s)),N.setMatrixAt(X,x),N.setColorAt(X,m.set(H.col))}),N.castShadow=N.receiveShadow=!0,i.add(N)});let g=Vt(256,192,()=>{}),A=kt(g),E=T=>{let M=g.getContext("2d");M.fillStyle="#031a08",M.fillRect(0,0,256,192),M.fillStyle="#39ff6a",M.font=`600 14px ${di}`,["ERP v4.2  INVOICE ENTRY","------------------------","INV# 2016-0"+(4412+Math.floor(T*3)),"VENDOR  : ______","QTY     : ______","AMOUNT  : ______","GST     : ______","","> F2 SAVE   F3 NEXT","> REPEAT x 10,000"].forEach((C,N)=>M.fillText(C,10,20+N*17)),Math.floor(T*2)%2&&M.fillRect(92,20+9*17-12,9,14);for(let C=0;C<192;C+=3)M.fillStyle="rgba(0,0,0,0.25)",M.fillRect(0,C,256,1);A.needsUpdate=!0};E(0);let y=new ft;y.position.set(5.2,0,1.4),y.rotation.y=-.5,i.add(y),Be(_n(1.6,.06,.8,1.5),gt("wood",{color:8018490}),0,.78,0,y);for(let T of[-.72,.72])for(let M of[-.32,.32])Be(new Ne(.05,.78,.05),St({color:4007959}),T,.39,M,y);Be(new on(.62,.52,.55,3,.05),St({color:14209211,roughness:.6}),0,1.08,-.05,y),Be(new Tt(.5,.38),St({map:A,emissiveMap:A,emissive:16777215,emissiveIntensity:1.4}),0,1.1,.226,y),Be(new Ne(.55,.04,.2),St({color:13616814}),0,.83,.25,y);let P=St({color:16777215,side:Xt,roughness:.7}),w=[];for(let T=0;T<26;T++){let M=Be(new Tt(.3,.42),P,0,0,0,i);M.userData.dynamic=!0,M.castShadow=!0,M.userData={a:e()*6.28,rad:1+e()*3.2,h:2+e()*5,sp:.2+e()*.35,wob:e()*6},w.push(M)}let S=-1;return{group:i,radius:11,center:new L(0,0,-3),update(T,M){if(!M)return;for(let C of w){let N=C.userData,H=N.a+T*N.sp;C.position.set(Math.cos(H)*N.rad,N.h+Math.sin(T*.7+N.wob)*.6,.6+Math.sin(H)*N.rad*.6),C.rotation.set(T*N.sp*2+N.wob,H,Math.sin(T+N.wob))}let _=Math.floor(T*6);_!==S&&(S=_,E(T))}}}function Bp(){let i=new ft,e=kt(Vt(256,256,(f,d)=>{let x=f.createLinearGradient(0,0,0,d);x.addColorStop(0,"#9fbcd0"),x.addColorStop(1,"#5d7d94"),f.fillStyle=x,f.fillRect(0,0,d,d),f.fillStyle="#2a333b";for(let v=0;v<4;v++)f.fillRect(0,v*64,d,5),f.fillRect(v*64,0,3,d)}),{repeat:!0});e.repeat.set(5,18);let t=new Bt({map:e,metalness:.85,roughness:.08,clearcoat:1,envMapIntensity:1.4,emissive:2241348,emissiveIntensity:0}),n=74;Be(new Ne(20,n,20),t,0,n/2+6,-14,i);let s=kt(Vt(512,160,(f,d,x)=>{let v=f.createLinearGradient(0,0,0,x);v.addColorStop(0,"#f6ead2"),v.addColorStop(.5,"#7a6a58"),v.addColorStop(1,"#2a241e"),f.fillStyle=v,f.fillRect(0,0,d,x);for(let m=30;m<d;m+=90){let g=f.createRadialGradient(m,6,2,m,6,60);g.addColorStop(0,"rgba(255,255,255,0.9)"),g.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=g,f.fillRect(m-60,0,120,70)}f.fillStyle="rgba(30,24,18,0.8)",f.fillRect(d*.38,x*.55,d*.24,x*.3),f.fillStyle="rgba(20,20,20,0.9)";for(let m=0;m<=d;m+=d/8)f.fillRect(m-3,0,6,x);f.fillRect(0,x*.18,d,4)})),r=new Bt({map:s,emissive:16777215,emissiveMap:s,emissiveIntensity:.3,roughness:.05,metalness:.1,envMapIntensity:1.4});Be(_n(24,6,22,4),Fn(gt("concrete",{color:14209734})),0,3,-14,i),Be(new Tt(16,4.4),r,0,2.4,-2.98,i),Be(_n(22,.5,2.5,4),gt("concrete",{color:12893616}),0,5.2,-2,i),Be(_n(16,4,16,2),gt("steel",{color:4870746}),0,n+8,-14,i);let o=St({color:16722474,emissive:16719904,emissiveIntensity:2});o.userData.live=!0,Be(new Mt(.1,.1,8),St({color:1911}),0,n+14,-14,i),Be(new Pn(.35,12,8),o,0,n+18.2,-14,i);let a=Vt(1024,576,()=>{}),c=kt(a),l=Array.from({length:12},(f,d)=>.3+Math.abs(Math.sin(d*1.7))*.6),h=f=>{let d=a.getContext("2d");d.fillStyle="#081018",d.fillRect(0,0,1024,576),d.fillStyle="#f5c518",d.font=`700 30px ${di}`,d.fillText("KPI \xB7 WEEKLY QUALITY REVIEW",40,60),d.fillStyle="#7f93a8",d.font=`500 22px ${di}`,d.fillText("CENTRUM \xB7 SALES QA \xB7 2018\u20132020",40,96),[["CSAT",(88+Math.sin(f)*2).toFixed(1)+"%"],["CALLS QA",(1240+Math.floor(f*7)%60).toString()],["TREND","\u25B2 12%"]].forEach(([v,m],g)=>{let A=40+g*320;d.fillStyle="#101c28",d.fillRect(A,124,290,120),d.fillStyle="#7f93a8",d.font=`500 20px ${di}`,d.fillText(v,A+20,158),d.fillStyle="#ffffff",d.font=`400 64px ${Hu}`,d.fillText(m,A+20,226)}),l.forEach((v,m)=>{let g=(v+Math.sin(f*1.3+m)*.05)*230;d.fillStyle=m===11?"#f5c518":"#2b6cb0",d.fillRect(40+m*56,540-g,36,g)}),d.strokeStyle="#ff7a3d",d.lineWidth=4,d.beginPath();for(let v=0;v<=30;v++){let m=720+v*9.5,g=500-v*7-Math.sin(v*.8+f*2)*14;v?d.lineTo(m,g):d.moveTo(m,g)}d.stroke(),d.fillStyle="#7f93a8",d.font=`500 18px ${di}`,d.fillText("A dashboard is an argument.",720,300),c.needsUpdate=!0};h(0),Be(_n(17,9.8,.5,2),gt("steel",{color:2764339}),0,13,-3.7,i),Be(new Tt(16.2,9.1),St({map:c,emissiveMap:c,emissive:16777215,emissiveIntensity:1.15,roughness:.4}),0,13,-3.44,i);let u=-1;return{group:i,radius:16,center:new L(0,0,-14),update(f,d){if(!d)return;let x=Math.floor(f*3);x!==u&&(u=x,h(f)),o.emissiveIntensity=1+Math.max(0,Math.sin(f*3))*4},setNight(f){t.emissiveIntensity=f*.6,r.emissiveIntensity=.3+f*.8}}}function zp(){let i=new ft,e=Fn(gt("plaster",{color:15328472,normalScale:1.4}),{height:3,strength:.4});Be(_n(16,11,10),e,0,5.5,-7,i),Be(_n(16.5,.5,10.5),gt("concrete",{color:11905944}),0,11.2,-7,i),Be(_n(16.3,.2,.3),e,0,9.4,-1.9,i);for(let[l,h]of[-5.5,-1.8,1.8,5.5].entries())Np(i,h,7.6,-2,{lit:l%2===1,shutterColor:"#2f5e44",open:.25+l%3*.2});let t=Vt(1024,384,(l,h,u)=>{let f=l.createLinearGradient(0,0,0,u);f.addColorStop(0,"#fbfaf5"),f.addColorStop(1,"#dfe9e2"),l.fillStyle=f,l.fillRect(0,0,h,u);for(let m=60;m<h;m+=240){let g=l.createRadialGradient(m+60,6,2,m+60,6,120);g.addColorStop(0,"rgba(255,255,255,0.95)"),g.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=g,l.fillRect(m-60,0,240,120)}let d=ui(31),x=["#1f9d6a","#ffffff","#2b6cb0","#e85d4a","#f5c518","#8e5bd1","#f1f1f1","#ff8f3a","#0aa2c0"];for(let m=0;m<4;m++){let g=46+m*84,A=6;for(;A<h-30;){let y=d()<.25,P=y?12+d()*8:16+d()*26,w=y?30+d()*20:24+d()*30,S=x[Math.floor(d()*x.length)],T=l.createLinearGradient(A,0,A+P,0);T.addColorStop(0,S),T.addColorStop(.75,S),T.addColorStop(1,"rgba(0,0,0,0.35)"),l.fillStyle=T,y?(l.beginPath(),l.roundRect(A,g+62-w,P,w,5),l.fill(),l.fillStyle="#ddd",l.fillRect(A+P*.25,g+62-w-6,P*.5,7)):(l.fillRect(A,g+62-w,P,w),l.fillStyle="rgba(255,255,255,0.85)",l.fillRect(A+3,g+62-w*.62,P-6,w*.22),l.fillStyle="rgba(0,0,0,0.5)",l.fillRect(A+4,g+62-w*.55,(P-8)*d(),2)),A+=P+1+d()*2}l.fillStyle="#c9cfd2",l.fillRect(0,g+62,h,7),l.fillStyle="#ffe35a";for(let y=20;y<h;y+=90+d()*40)l.fillRect(y,g+63,26,5);let E=l.createLinearGradient(0,g+69,0,g+86);E.addColorStop(0,"rgba(0,0,0,0.25)"),E.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=E,l.fillRect(0,g+69,h,17)}let v=l.createLinearGradient(0,0,h,u);v.addColorStop(.1,"rgba(255,255,255,0)"),v.addColorStop(.18,"rgba(255,255,255,0.22)"),v.addColorStop(.26,"rgba(255,255,255,0)"),l.fillStyle=v,l.fillRect(0,0,h,u)}),n=kt(t),s=St({map:n,emissiveMap:n,emissive:16777215,emissiveIntensity:.7,roughness:.15,metalness:.1});Be(new Tt(13,4.2),s,0,2.4,-1.98,i);for(let l of[-6.5,-2.2,2.2,6.5])Be(new Ne(.12,4.4,.12),St({color:13684944,metalness:.9,roughness:.25}),l,2.3,-1.92,i);let r=Ac(1024,140,(l,h,u)=>{l.fillStyle="#0f7a4f",l.fillRect(0,0,h,u),l.fillStyle="#ffffff",l.font=`800 74px ${Xs}`,l.textBaseline="middle",l.fillText("PHARMACY",40,u/2),l.font=`600 34px ${di}`,l.textAlign="right",l.fillText("OPEN 24 \xD7 7",h-40,u/2)});Be(new Ne(15.5,1.5,.3),St({map:r,emissiveMap:r,emissive:16777215,emissiveIntensity:.5}),0,5.05,-1.85,i);let o=St({color:1032042,emissive:1695870,emissiveIntensity:1.5,roughness:.3}),a=new ft;a.userData.dynamic=!0,a.position.set(7.4,6.6,.4),i.add(a),Be(new Ne(.06,.06,2.6),St({color:1365}),0,.8,-1.2,a),Be(new on(.5,1.6,.3,2,.06),o,0,0,0,a),Be(new on(1.6,.5,.3,2,.06),o,0,0,0,a);let c=new Ni(new vi({map:$n("rgba(40,255,140,0.6)","rgba(40,255,140,0)"),transparent:!0,depthWrite:!1,blending:xi}));c.scale.set(5,5,1),a.add(c),Be(new Ne(2.2,.08,.5),St({color:3828618}),-4,.62,.3,i);for(let l of[-4.9,-3.1])Be(new Ne(.06,.6,.45),St({color:819}),l,.3,.3,i);return{group:i,radius:11,center:new L(0,0,-6),update(l){let h=.75+.25*Math.sin(l*2.2);o.emissiveIntensity=1.2+h*2.2,c.material.opacity=.35+h*.4,a.rotation.y=Math.sin(l*.6)*.25},setNight(l){s.emissiveIntensity=.7+l*1.3}}}function kp(){let i=new ft,e=ui(404),t=gt("corrugated",{color:9347762,normalScale:1.4}),n=Fn(gt("concrete",{color:12762288})),s=gt("steel",{color:8226190}),r=gt("steel",{color:12087626,normalScale:1.5}),o=Be(_n(110,.2,80,4),gt("concrete",{color:10130828}),0,.1,-40,i);o.castShadow=!1;for(let F=-54;F<=54;F+=3)Math.abs(F)<6||Be(new Ne(.08,2.4,.08),s,F,1.2,-.5,i);for(let F of[.6,1.4,2.2])Be(new Ne(48,.05,.05),s,-30,F,-.5,i),Be(new Ne(48,.05,.05),s,30,F,-.5,i);for(let F of[-6.5,6.5])Be(_n(1.2,6,1.2,2),n,F,3,-.5,i);let a=Ac(1024,150,(F,j,G)=>{F.fillStyle="#121518",F.fillRect(0,0,j,G),F.fillStyle="#ff7a2a",F.font=`800 62px ${Xs}`,F.textBaseline="middle",F.fillText("AUTOMATION FLOOR",32,G/2),F.fillStyle="#a7b1ba",F.font=`500 28px ${di}`,F.textAlign="right",F.fillText("BOTS ON SHIFT \xB7 24/7",j-32,G/2)});Be(new Ne(14.2,1.8,.4),St({map:a,emissiveMap:a,emissive:16777215,emissiveIntensity:.6}),0,6.6,-.5,i);let c=new ft;c.position.set(-8,0,-36),i.add(c),Be(_n(48,18,30,2),t,0,9,0,c);let l=new fs;l.moveTo(-15.5,0),l.lineTo(0,6),l.lineTo(15.5,0),l.lineTo(-15.5,0);let h=Be(new Pr(l,{depth:49,bevelEnabled:!1}),gt("corrugated",{color:8226702,repeat:[.5,.5]}),24.5,18,0,c);h.rotation.y=-Math.PI/2;let u=kt(Vt(256,256,(F,j,G)=>{F.fillStyle="#000",F.fillRect(0,0,j,G);let q=F.createRadialGradient(j/2,G*.7,4,j/2,G*.7,j*.6);q.addColorStop(0,"#fff2c0"),q.addColorStop(.25,"#ffb040"),q.addColorStop(.6,"#c43c08"),q.addColorStop(1,"#100400"),F.fillStyle=q,F.fillRect(0,0,j,G)})),f=St({color:328192,emissive:16777215,emissiveMap:u,emissiveIntensity:2.2});Be(new Tt(10,8),f,-6,4,15.02,c);let d=kt(Vt(512,32,(F,j,G)=>{F.fillStyle="#1a1e22",F.fillRect(0,0,j,G);for(let q=0;q<j;q+=16)F.fillStyle=`rgba(150,170,180,${.25+Math.random()*.2})`,F.fillRect(q+2,3,12,G-6)}));Be(new Tt(40,1.4),St({map:d,roughness:.2,metalness:.3,emissive:16766880,emissiveMap:d,emissiveIntensity:.15}),0,15,15.02,c);let x=kt(Vt(64,256,F=>{F.fillStyle="#c9c3b8",F.fillRect(0,0,64,256);for(let j=0;j<3;j++)F.fillStyle="#b8321f",F.fillRect(0,j*28,64,14)})),v=[];[[18,-58],[26,-60],[34,-56]].forEach(([F,j],G)=>{let q=46+G*4;Be(new Mt(1.3,2.2,q,24),St({map:x,normalMap:rn.concrete_nor,roughnessMap:rn.concrete_orm,roughness:1}),F,q/2,j,i),v.push(new L(F,q+.5,j))});let m=new ft;m.position.set(32,0,-30),i.add(m),Be(new Mt(5,6,22,28),r,0,11,0,m),Be(new Mt(3,5,6,28),s,0,25,0,m),Be(new Mt(.9,.9,16,16),s,0,36,0,m);for(let F of[0,2.1,4.2]){let j=Be(new Mt(.7,.7,26,12),s,Math.cos(F)*7,18,Math.sin(F)*7,m);j.rotation.z=Math.cos(F)*.25,j.rotation.x=-Math.sin(F)*.25}for(let F=0;F<5;F++)Be(new ds(5.6,.25,8,40),s,0,3+F*4.5,0,m).rotation.x=Math.PI/2;for(let[F,j]of[[-40,-28],[-40,-42],[-48,-35]])Be(new Mt(4,4,18,28),St({color:13620182,metalness:.8,roughness:.32,normalMap:rn.steel_nor}),F,9,j,i),Be(new Ya(4.1,3,28),St({color:12172994,metalness:.7,roughness:.35}),F,19.5,j,i);for(let F=-28;F<=28;F+=7)Be(new Ne(.5,9,.5),s,F,4.5,-16,i);for(let F of[8.6,9.6])Be(new Mt(.5,.5,58,14),F>9?r:s,0,F,-16,i).rotation.z=Math.PI/2;let g=new ft;g.position.set(0,0,-8),i.add(g),Be(new Ne(44,.25,2),St({color:1776928,roughness:.75,normalMap:rn.asphalt_nor}),0,1.3,0,g);for(let F of[-1,1])Be(_n(44,.35,.12,2),gt("steel",{color:15774720}),0,1.45,F*1.05,g);for(let F=-21;F<=21;F+=3)for(let j of[-1,1])Be(new Ne(.15,1.2,.15),s,F,.6,j*.9,g);let A=St({color:2230272,emissive:16727040,emissiveIntensity:5,roughness:.6}),E=new yn(new on(1.4,.35,.8,2,.06),A,16);E.castShadow=!0,g.add(E);let y=new bs(16738848,0,26,1.6);y.position.set(0,3,-6),i.add(y);let P=[],w=new Bt({color:16738826,metalness:.2,roughness:.35,clearcoat:.6,clearcoatRoughness:.2}),S=St({color:2237480,metalness:.6,roughness:.4});for(let[F,j]of[[-9,0],[9,1.9]]){let G=new ft;G.userData.dynamic=!0,G.position.set(F,0,-5),i.add(G),Be(new Mt(.9,1.1,.6,24),S,0,.3,0,G);let q=new ft;q.position.y=.6,G.add(q),Be(new Mt(.7,.8,.9,24),w,0,.45,0,q);let ce=new ft;ce.position.y=1,q.add(ce),Be(new Pn(.5,16,12),S,0,0,0,ce),Be(new on(.55,2.8,.55,2,.12),w,0,1.4,0,ce);let $=new ft;$.position.y=2.8,ce.add($),Be(new Pn(.38,16,12),S,0,0,0,$),Be(new on(.42,2.2,.42,2,.1),w,0,1.1,0,$);let fe=new ft;fe.position.y=2.2,$.add(fe),Be(new Mt(.2,.2,.4,12),S,0,.2,0,fe);for(let De of[-1,1])Be(new Ne(.08,.4,.25),S,De*.15,.55,0,fe);P.push({yaw:q,sh:ce,el:$,wr:fe,ph:j})}let T=$n("rgba(200,200,200,0.7)","rgba(200,200,200,0)"),M=[];v.forEach((F,j)=>{for(let G=0;G<7;G++){let q=new Ni(new vi({map:T,transparent:!0,depthWrite:!1,color:13617858}));q.userData={top:F,o:G/7+j*.13,drift:.6+e()*.8},i.add(q),M.push(q)}});let _=140,C=new Ct,N=new Float32Array(_*3),H=[];for(let F=0;F<_;F++)H.push({t:Math.random(),vx:(Math.random()-.5)*4,vy:2+Math.random()*4,vz:2+Math.random()*3});C.setAttribute("position",new pt(N,3));let X=new us(C,new Fi({color:16757575,size:.09,transparent:!0,opacity:.95,blending:xi,depthWrite:!1}));X.position.set(c.position.x-6,1.2,c.position.z+15.2),i.add(X);let K=new He;return{group:i,radius:46,center:new L(0,0,-38),update(F,j){for(let G of M){let q=G.userData,ce=(F*.06+q.o)%1;G.position.set(q.top.x+ce*22*q.drift,q.top.y+ce*18,q.top.z+ce*6);let $=3+ce*16;G.scale.set($,$,1),G.material.opacity=Math.sin(Math.min(1,ce*1.4)*Math.PI)*.4}if(j){for(let G=0;G<16;G++){let q=((F*2.2+G*2.75)%44+44)%44-22;K.makeTranslation(q,1.62,0),E.setMatrixAt(G,K)}E.instanceMatrix.needsUpdate=!0;for(let G=0;G<_;G++){let q=H[G],$=(F*.7+q.t)%1*1.2;N[G*3]=q.vx*$,N[G*3+1]=Math.max(0,q.vy*$-4.9*$*$),N[G*3+2]=q.vz*$}C.attributes.position.needsUpdate=!0;for(let G of P){let q=F*.9+G.ph;G.yaw.rotation.y=Math.sin(q)*1.1,G.sh.rotation.z=.35+Math.sin(q*1.3)*.35,G.el.rotation.z=1.25+Math.sin(q*1.3+1)*.35,G.wr.rotation.y=q*2}f.emissiveIntensity=2+Math.sin(F*7)*.25+Math.sin(F*13)*.15}},setNight(F,j){y.intensity=30+j*80}}}function Hp(i,e){let t=new ft,n=Vt(1280,720,(a,c,l)=>{let h=a.createLinearGradient(0,0,c,l);h.addColorStop(0,"#0b0f14"),h.addColorStop(1,"#141c26"),a.fillStyle=h,a.fillRect(0,0,c,l),a.fillStyle="#f5c518",a.fillRect(0,0,14,l),a.font=`400 200px ${Hu}`,a.fillStyle="rgba(245,197,24,0.16)",a.textAlign="right",a.fillText("0"+(e+1),c-50,210),a.textAlign="left",a.fillStyle="#f5c518",a.font=`600 28px ${di}`,a.fillText(i.category.toUpperCase(),70,100),a.fillStyle="#fff",a.font=`400 96px ${Hu}`;let u=i.title.split(" "),f="",d=210;for(let g of u)a.measureText(f+g).width>c-200&&(a.fillText(f,70,d),f="",d+=96),f+=g+" ";a.fillText(f,70,d),a.fillStyle="#9fb0c2",a.font=`500 30px ${Xs}`;let v=((g,A,E)=>{let y="";for(let P of g.split(" "))a.measureText(y+P).width>E&&(a.fillText(y,70,A),y="",A+=42),y+=P+" ";return a.fillText(y,70,A),A})(i.outcome,d+80,c-160),m=70;a.font=`600 24px ${di}`;for(let g of i.tech){let A=a.measureText(g).width+36;a.strokeStyle="rgba(245,197,24,0.6)",a.lineWidth=2,a.strokeRect(m,v+50,A,48),a.fillStyle="#f5c518",a.fillText(g,m+18,v+83),m+=A+14}}),s=kt(n),r=gt("steel",{color:3817542});for(let a of[-2.8,2.8])Be(new Ne(.3,6,.3),r,a,3,-.2,t);Be(new Ne(9.2,5.3,.35),r,0,8.2,-.25,t);let o=St({map:s,emissiveMap:s,emissive:16777215,emissiveIntensity:.9,roughness:.35});Be(new Tt(8.8,4.95),o,0,8.2,-.06,t);for(let a of[-3,0,3])Be(new Ne(.5,.15,.4),St({color:546,emissive:16773840,emissiveIntensity:1}),a,5.4,.5,t);return{group:t,radius:6,setNight(a){o.emissiveIntensity=.9+a*.6}}}function Gp(i){let e=new ft,t=ui(606),n=256,s=(u,f,d,x,v)=>{if(u.save(),u.translate(f,d),u.drawImage(rn.wood_col.image,0,0,n,n),u.strokeStyle="rgba(70,45,22,0.85)",u.lineWidth=16,u.strokeRect(8,8,n-16,n-16),u.beginPath(),u.moveTo(16,16),u.lineTo(n-16,n-16),u.stroke(),x){u.fillStyle="rgba(20,16,12,0.86)",u.fillRect(30,86,n-60,86),u.fillStyle="#f5c518";let m=40;for(u.font=`800 ${m}px ${Xs}`;u.measureText(x).width>n-80&&m>18;)m-=2,u.font=`800 ${m}px ${Xs}`;u.textAlign="center",u.fillText(x,n/2,128),u.fillStyle="#d9cbb3",u.font=`500 15px ${di}`,u.fillText(v,n/2,156)}u.restore()},r=kt(Vt(n*4,n*4,u=>{i.forEach(([f,d],x)=>s(u,x%4*n,Math.floor(x/4)*n,f,d)),s(u,3*n,3*n)})),o=St({map:r,normalMap:rn.wood_nor,roughness:.85}),a=u=>[u%4/4,1-(Math.floor(u/4)+1)/4],c=1.5,l=[5,4,3],h=0;return l.forEach((u,f)=>{for(let d=0;d<u&&h<i.length;d++,h++){let x=new Ne(c,c,c),v=x.attributes.uv;for(let g=0;g<6;g++){let[A,E]=a(g===4?h:15);for(let y=0;y<4;y++)v.setXY(g*4+y,A+v.getX(g*4+y)/4,E+v.getY(g*4+y)/4)}let m=Be(x,o,(d-(u-1)/2)*(c+.06),c/2+f*c,(t()-.5)*.15,e);m.rotation.y=(t()-.5)*.12}}),Be(new Ne(5*c+1,.15,c+.6),St({color:9071170,roughness:1}),0,.07,0,e),{group:e,radius:6}}var Yi=(i,e=document)=>e.querySelector(i),Rc=(i,e=document)=>[...e.querySelectorAll(i)],Vp=Yi("#loader-bar"),Wp=Yi("#loader-note"),x_=performance.now(),Cc=0,On=(i,e)=>{location.search.includes("debug")&&console.log("STAGE",(performance.now()-x_).toFixed(0),i,e),!(i<=Cc&&!e)&&(Cc=Math.max(Cc,i),Vp&&(Vp.style.transform=`scaleX(${Cc})`),e&&Wp&&(Wp.textContent=e))};function v_(){try{let i=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&i.getContext("webgl2"))}catch{return!1}}var Pc=[{title:"Procurement Audit Automation",category:"Intelligent Automation",tech:["Python","SAP GUI Scripting","SQL"],outcome:"Real-time audit data extraction and validation \u2014 compliance checks that used to take days now run on their own."},{title:"Vendor Analytics Dashboard",category:"Business Intelligence",tech:["Power BI","DAX","PostgreSQL"],outcome:"Vendor performance tracking with anomaly detection, so supply-chain risk shows up before it costs money."},{title:"SAP Reporting Pipeline",category:"Data Engineering",tech:["Python","SAP","Data Warehousing"],outcome:"One unified pipeline that generates and distributes the reports people used to stitch together by hand."},{title:"Document Processing Engine",category:"AI & Data Processing",tech:["Python","OCR","LLM"],outcome:"An OCR + LLM pipeline that turns piles of physical records into clean, structured data."}],b_=[["Python","bots \xB7 scrapers \xB7 ML"],["SAP GUI","scripting"],["Power BI","DAX \xB7 models"],["SQL","Postgres \xB7 MSSQL"],["Power Automate","flows"],["FastAPI","services"],["Django","web apps"],["React","frontends"],["OCR + LLM","documents"],["Selenium","web automation"],["Git","versioning"],["Figma","interfaces"]];async function y_(){if(!v_()){document.documentElement.classList.add("static"),Yi("#loader")?.remove();return}let i=matchMedia("(max-width: 760px), (pointer: coarse)").matches,e=matchMedia("(prefers-reduced-motion: reduce)").matches;On(.08,"Loading type\u2026"),await Promise.race([Promise.all([document.fonts.load('400 40px "Instrument Serif"'),document.fonts.load('800 40px "Manrope"'),document.fonts.load('600 20px "JetBrains Mono"')]),new Promise(me=>setTimeout(me,2500))]).catch(()=>{});let t=Yi("#scene"),n=new Na({canvas:t,antialias:!0,powerPreference:"high-performance",stencil:!1}),s=(()=>{try{let me=n.getContext(),et=me.getExtension("WEBGL_debug_renderer_info");return String(et?me.getParameter(et.UNMASKED_RENDERER_WEBGL):me.getParameter(me.RENDERER))}catch{return""}})(),r=new URLSearchParams(location.search).get("q"),o=i?0:/Intel|Mali|Adreno|PowerVR|SwiftShader|llvmpipe|Software|Basic Render|Radeon\(TM\) Graphics|Vega \d+ Graphics/i.test(s)?1:2;r&&(o={low:0,med:1,medium:1,high:2}[r]??o);let a=window.devicePixelRatio||1,c=Math.min(a,[i?1.25:1,1.25,1.5][o]);n.setPixelRatio(c),n.setSize(innerWidth,innerHeight,!1),n.toneMapping=wo,n.shadowMap.enabled=!0,n.shadowMap.type=o===0?tc:Lh,n.shadowMap.autoUpdate=!1;let l=new hs;l.fog=new Fa(15251872,.004);let h=new en(i?55:42,innerWidth/innerHeight,.3,700);h.layers.enable(1);let u=new cs(n);l.environment=u.fromScene(new lc,.04).texture;let f=new Co;f.scale.setScalar(1e4),l.add(f);let d=f.material.uniforms;d.mieDirectionalG.value=.8;let x=new Lr(16777215,3);x.castShadow=!0;let v=o===0?1024:2048;x.shadow.mapSize.set(v,v);let m=x.shadow.camera;m.left=-45,m.right=45,m.top=45,m.bottom=-45,m.near=60,m.far=260,x.shadow.bias=-4e-4,x.shadow.normalBias=.04,l.add(x,x.target);let g=new Qa(12375807,4934202,.8);l.add(g),On(.12,"Mixing paint\u2026");let A=null,E=ip(n,me=>On(.08+me*.12,"Mixing paint\u2026")).then(()=>Sp(me=>On(.2+me*.12,"Building the street\u2026")).catch(me=>(console.warn("Street assets failed to load; falling back to the procedural city",me),null))),[y]=await Promise.all([tp(n,{steps:o===0?2:4}),E.then(me=>{A=me})]);y.update(0,l),On(.34,"Laying the road\u2026"),await Gi();let P=Rp(),w=me=>P.uAtZ(me),S=[{id:"intro",u:w(8),creep:.004,hold:.04,cam:{pos:[-4.2,1.5,7.2],look:[1.6,1,.2]},mob:{pos:[-3.5,2.2,9.5],look:[.4,1.2,0]}},{id:"ch1",u:w(-82),side:1,creep:.006,cam:{pos:[-3.2,2.3,-6.5],look:[8,3.4,5]},mob:{pos:[-3.5,3,-9],look:[7,3.5,4]}},{id:"ch2",u:w(-170),side:-1,creep:.006,cam:{pos:[5.2,1.6,-17],look:[-12,10,6]},mob:{pos:[4,1.5,-12],look:[-12,13,7]}},{id:"ch3",u:w(-262),side:1,creep:.006,cam:{pos:[-4.2,2.3,-11.5],look:[9,4.6,3]},mob:{pos:[-3.6,2.6,-9],look:[8,4,4]}},{id:"ch4",u:w(-350),side:-1,creep:.008,hold:.07,cam:{pos:[5,5.5,-13],look:[-30,9,12]},mob:{pos:[6,7,-18],look:[-30,11,8]}},{id:"work",u:w(-430),side:1,creep:.06,hold:.13,cam:{pos:[-2.8,3.2,-8],look:[9,5.5,12]},mob:{pos:[-2.5,3.5,-10],look:[8,6.5,13]}},{id:"tools",u:w(-520),side:-1,creep:.006,cam:{pos:[3.4,2,-5.5],look:[-8,2.6,4]},mob:{pos:[3.8,2.6,-9],look:[-8,2.8,2]}},{id:"contact",u:w((jt.zNear+jt.zFar)/2+8),creep:.01,hold:.09,cam:{pos:[42,4.5,44],look:[-4,7,-18]},mob:{pos:[44,6,60],look:[-2,9,-16]}}],T={pos:[0,2.7,-9],look:[0,1.2,8]},M=.055,C=(1-S.reduce((me,et)=>me+(et.hold??M),0))/(S.length-1),N=0;S.forEach((me,et)=>{me.hold=me.hold??M,me.p0=N,me.p1=N+me.hold,N=me.p1+(et<S.length-1?C:0)}),S[S.length-1].p1=1;function H(me){for(let et=0;et<S.length;et++){let qe=S[et];if(me<=qe.p1||et===S.length-1){if(me>=qe.p0){let R=Mi(me,qe.p0,qe.p1);return{i:et,hold:!0,k:R,u:qe.u-qe.creep/2+qe.creep*R}}let at=S[et-1],p=Mi(me,at.p1,qe.p0),b=Qd(p);return{i:et-1,hold:!1,k:p,u:Jn(at.u+at.creep/2,qe.u-qe.creep/2,b)}}}}let X=[],K=[],F=(me,et,qe,at)=>{Up(P,me.group,et,qe,at),cu(me.group),me.group.userData.cull=me.radius>30?460:380,me.group.traverse(b=>{b.isLight||b.layers.set(1)}),l.add(me.group);let p=(me.center||new L).clone().applyEuler(me.group.rotation).add(me.group.position);return X.push({x:p.x,z:p.z,r:me.radius}),me.worldCenter=p,K.push(me),me};On(.38,"Raising landmarks\u2026"),await Gi(),F(Fp(),S[0].u-.004,1,gn-1.3),F(Op(),S[1].u+.004,1,gn+2.6),F(Bp(),S[2].u+.008,-1,gn+1.6),F(zp(),S[3].u+.005,1,gn+1.4),F(kp(),S[4].u+.012,-1,gn+4);let j=S[5],G=Pc.map((me,et)=>{let qe=F(Hp(me,et),j.u-j.creep/2+.008+et*(j.creep+.006)/4,1,gn+.6);return qe.group.rotateY(.55),qe});F(Gp(b_),S[6].u+.004,-1,gn+1.6),On(.45,"Painting the city\u2026"),await Gi();let q=Cp(l,P,X,{isMobile:i,tier:o},A);On(.65,"Bolting the bridge\u2026"),await Gi();let ce=Pp(l,P,{shimmer:!q.water});On(.7,"Rolling the Camaro out\u2026");let $;try{$=await Lp(me=>On(.7+me*.08,"Rolling the Camaro out\u2026"))}catch(me){console.warn("Car model failed, using the Ambassador",me),$=ku({lights:!0})}$.root.traverse(me=>{me.isLight||me.layers.set(1)}),l.add($.root);{let me=ku({lights:!1});cu(me.root),me.root.updateMatrixWorld(!0);let et=[[-30,1],[-128,-1],[-212,1],[-300,-1],[-470,1],[-548,-1],[-760,1]].map(([qe,at])=>{let p=P.frame(w(qe));return new He().compose(p.p.clone().addScaledVector(p.r,at*3.3),new Ot().setFromAxisAngle(new L(0,1,0),Math.atan2(p.t.x,p.t.z)+(at>0?0:Math.PI)),new L(1,1,1))});me.root.traverse(qe=>{if(!qe.isMesh)return;let at=qe.matrixWorld.clone(),p=et.map(b=>b.clone().multiply(at));for(let b of Gr(qe.geometry,qe.material,p,{cast:qe.castShadow&&!qe.material.transparent,chunk:300,cull:260}))b.renderOrder=qe.renderOrder,b.layers.set(1),l.add(b)})}On(.8,"Warming the engine\u2026"),await Gi();let fe=null,De=null,J=null,de=null,ge=()=>{let me=Math.floor(innerWidth*c),et=Math.floor(innerHeight*c),qe=new URLSearchParams(location.search).has("ao")&&o===2,at={type:tn,samples:o===2?4:2};qe&&(at.depthTexture=new ls(me,et));let p=new Zt(me,et,at);if(fe=new uc(n,p),fe.setPixelRatio(c),fe.addPass(new fc(l,h)),qe)try{de=new Uo(l,h,me,et),de.setGBuffer(fe.renderTarget1.depthTexture),de.updateGtaoMaterial({radius:1.2,distanceExponent:1.4,thickness:2,scale:1.1,samples:8,distanceFallOff:1}),de.blendIntensity=.85,fe.addPass(de)}catch{de=null}De=new zr(new _e(Math.floor(innerWidth/4),Math.floor(innerHeight/4)),.3,.6,.92),fe.addPass(De),fe.addPass(new dc),J=new Br(np),fe.addPass(J)},pe=()=>{fe?.dispose(),fe=null,De=null,J=null,de=null};o>0&&ge();let ve=me=>new Pe(me),Ye=[{p:0,elev:4,az:120,sun:ve("#ffb08a"),si:1.6,sky:ve("#a9b6d8"),gnd:ve("#4a3a33"),hi:.55,fog:ve("#e7b8a0"),fd:.0042,tur:8,ray:2.6,mie:.006,exp:.62,night:.05},{p:.18,elev:22,az:140,sun:ve("#ffe2c0"),si:2.6,sky:ve("#bcd2f0"),gnd:ve("#4d4a3a"),hi:.8,fog:ve("#d9d6d2"),fd:.0032,tur:6,ray:1.6,mie:.005,exp:.6,night:0},{p:.36,elev:48,az:170,sun:ve("#fff6ea"),si:3.2,sky:ve("#c4dcff"),gnd:ve("#4f553e"),hi:.95,fog:ve("#c8d6e2"),fd:.003,tur:4,ray:1.2,mie:.004,exp:.55,night:0},{p:.52,elev:18,az:220,sun:ve("#ffc684"),si:2.8,sky:ve("#c8c4d8"),gnd:ve("#55463a"),hi:.75,fog:ve("#e4c39f"),fd:.0032,tur:7,ray:2,mie:.006,exp:.6,night:0},{p:.66,elev:6,az:245,sun:ve("#ff9a52"),si:2.2,sky:ve("#b9a6c8"),gnd:ve("#4a3530"),hi:.6,fog:ve("#d9946f"),fd:.0036,tur:9,ray:3,mie:.008,exp:.66,night:.15},{p:.78,elev:.5,az:255,sun:ve("#ff6a3a"),si:1,sky:ve("#7f74a6"),gnd:ve("#2e2430"),hi:.45,fog:ve("#8a5a63"),fd:.0042,tur:10,ray:3.6,mie:.01,exp:.78,night:.55},{p:.88,elev:-4,az:262,sun:ve("#7f8cff"),si:.35,sky:ve("#3c4a80"),gnd:ve("#151522"),hi:.35,fog:ve("#232a48"),fd:.0042,tur:10,ray:1.5,mie:.005,exp:.95,night:.92},{p:1,elev:-9,az:270,sun:ve("#9fb2ff"),si:.3,sky:ve("#2a3768"),gnd:ve("#0e0f18"),hi:.3,fog:ve("#141a33"),fd:.0036,tur:10,ray:.6,mie:.004,exp:1,night:1}],je={sun:new Pe,sky:new Pe,gnd:new Pe,fog:new Pe};function ot(me){let et=0;for(;et<Ye.length-2&&me>Ye[et+1].p;)et++;let qe=Ye[et],at=Ye[et+1],p=Hr(Mi(me,qe.p,at.p));for(let b of["elev","az","si","hi","fd","tur","ray","mie","exp","night"])je[b]=Jn(qe[b],at[b],p);for(let b of["sun","sky","gnd","fog"])je[b].copy(qe[b]).lerp(at[b],p);return je}let le=new L,ye=new L,z=new L().setFromSphericalCoords(1,yi.degToRad(62),yi.degToRad(200)),Ze=new Pe,Se=Rc(".panel[data-stop]"),We=Rc(".proj"),Re=Yi("#proj-count"),Ke=Rc(".rail a"),Ge=Yi("#progress"),O=Yi("#scroll-hint");Ke.forEach(me=>{me.addEventListener("click",et=>{et.preventDefault();let qe=S[+me.dataset.stop];te(qe.p0+qe.hold*.4)})}),Rc("[data-jump]").forEach(me=>me.addEventListener("click",et=>{et.preventDefault();let qe=S.find(at=>at.id===me.dataset.jump);qe&&te(qe.p0+qe.hold*.4)}));function I(){return document.documentElement.scrollHeight-innerHeight}function te(me){window.scrollTo({top:me*I(),behavior:e?"auto":"smooth"})}let he=Se.map(()=>({o:-1,y:0,vis:"",live:null})),xe=-1,ue=-1,Je=-1,Ie=-1;function Le(me){S.forEach((R,D)=>{let U=Se[D];if(!U)return;let k=D===0?-1:.022,Y=D===S.length-1?-1:.022,ie=1;k>0&&(ie=Math.min(ie,Mi(me,R.p0-k,R.p0))),Y>0&&(ie=Math.min(ie,1-Mi(me,R.p1,R.p1+Y))),ie=Math.round(Gs(ie)*500)/500;let ee=he[D];if(ie===ee.o)return;ee.o=ie,U.style.opacity=String(ie),U.style.transform=`translate3d(0, ${((1-ie)*(me<R.p0?28:-28)).toFixed(1)}px, 0)`;let ne=ie<.01?"hidden":"visible";ne!==ee.vis&&(ee.vis=ne,U.style.visibility=ne);let se=ie>.6;se!==ee.live&&(ee.live=se,U.classList.toggle("live",se))});let et=Mi(me,j.p0,j.p1),qe=Math.min(Pc.length-1,Math.floor(et*Pc.length));qe!==xe&&(xe=qe,We.forEach((R,D)=>R.classList.toggle("on",D===qe)),Re&&(Re.textContent=`${qe+1} / ${Pc.length}`));let at=0;S.forEach((R,D)=>{me>=R.p0-.03&&(at=D)}),at!==ue&&(ue=at,Ke.forEach((R,D)=>R.classList.toggle("on",D===at)));let p=Math.round(me*1e3)/1e3;p!==Je&&Ge&&(Je=p,Ge.style.transform=`scaleX(${p})`);let b=Math.round((1-Mi(me,.005,.03))*100)/100;b!==Ie&&O&&(Ie=b,O.style.opacity=String(b))}let it={},be=new L,Ve=new L,$e={pos:[0,0,0],look:[0,0,0]},Qe=(me,et,qe,at=$e)=>{for(let p=0;p<3;p++)at.pos[p]=Jn(me.pos[p],et.pos[p],qe),at.look[p]=Jn(me.look[p],et.look[p],qe);return at},Xe=me=>i?me.mob:me.cam;function Z(me){let et=S[me.i];if(me.hold)return Xe(et);let qe=S[me.i+1],at=me.k;return at<.4?Qe(Xe(et),T,Hr(at/.4)):at>.6?Qe(T,Xe(qe),Hr((at-.6)/.4)):T}let Q=(me,et,qe)=>qe.copy(et.p).addScaledVector(et.r,me[0]).addScaledVector(new L(0,1,0),me[1]).addScaledVector(et.t,me[2]),oe=0,B=0,V=S[0].u,W=0,re=()=>{oe=Gs(scrollY/Math.max(1,I()))};addEventListener("scroll",re,{passive:!0}),re(),B=oe;let Ee={x:0,y:0,sx:0,sy:0};addEventListener("pointermove",me=>{Ee.x=me.clientX/innerWidth-.5,Ee.y=me.clientY/innerHeight-.5});let Me=innerWidth,Fe=innerHeight,nt=0;addEventListener("resize",()=>{let me=innerWidth,et=innerHeight;me===Me&&Math.abs(et-Fe)<Math.max(160,Fe*.2)||(clearTimeout(nt),nt=setTimeout(()=>{Me=innerWidth,Fe=innerHeight,h.aspect=Me/Fe,h.fov=Me<760?55:42,h.updateProjectionMatrix(),n.setSize(Me,Fe,!1),fe?.setSize(Me,Fe)},150))});let lt=!new URLSearchParams(location.search).has("still"),tt=new URLSearchParams(location.search).has("debug"),xt=new URLSearchParams(location.search).has("fps")?document.body.appendChild(Object.assign(document.createElement("div"),{style:"position:fixed;left:8px;bottom:8px;z-index:99;font:600 12px/1.4 ui-monospace,monospace;color:#f5c518;background:rgba(0,0,0,.6);padding:4px 8px;border-radius:6px;pointer-events:none"})):null,Dt=0,Ut=0;tt&&(n.info.autoReset=!1,window.__perf={renderer:n,scene:l,camera:h,frameMs:[],makeFrustum:me=>new Ui().setFromProjectionMatrix(new He().multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse))});let ht=new Ur,Ht=0,Ln=0,pi=0,ws=0,ji=[()=>{if(c>1)return c=Math.max(1,c-.25),!0},()=>{if(De?.enabled)return De.enabled=!1,!0},()=>{if(q.water&&q.reflections!==!1)return q.reflections=!1,!0},()=>{if(x.shadow.mapSize.x>1024)return x.shadow.mapSize.set(1024,1024),x.shadow.map?.dispose(),x.shadow.map=null,!0},()=>{if(fe)return pe(),!0},()=>{if(c>.8)return c=.8,!0}];function qs(){for(let me of ji){let et=c;if(me()){c!==et&&(n.setPixelRatio(c),fe?.setPixelRatio(c));return}}}function Si(){let me=ht.getDelta(),et=Math.min(me,.05),qe=ht.elapsedTime;B=e?oe:Jn(B,oe,1-Math.exp(-et*3.2)),Math.abs(B-oe)<2e-5&&(B=oe);let at=H(B);P.frame(at.u,it);let p=at.u-V;V=at.u;let b=p*P.length;W=Jn(W,b/Math.max(et,.001),.1),$.root.position.copy(it.p),$.root.rotation.y=Math.atan2(it.t.x,it.t.z),$.spin(b),$.body.position.y=Math.sin(qe*31)*.004+Math.min(Math.abs(W),20)*Math.sin(qe*13)*6e-4,$.body.rotation.x=Gs(-W*.0015,-.03,.03);let R=Z(at);Ee.sx=Jn(Ee.sx,Ee.x,.05),Ee.sy=Jn(Ee.sy,Ee.y,.05),Q(R.pos,it,be),Q(R.look,it,Ve),be.addScaledVector(it.r,Ee.sx*.8).y+=-Ee.sy*.4+Math.sin(qe*.6)*.04,be.y=Math.max(be.y,.6),h.position.copy(be),h.lookAt(Ve);let D=ot(B),U=yi.degToRad(90-D.elev),k=yi.degToRad(D.az);le.setFromSphericalCoords(1,U,k),d.sunPosition.value.copy(le),d.turbidity.value=D.tur,d.rayleigh.value=D.ray,d.mieCoefficient.value=D.mie,ye.setFromSphericalCoords(1,yi.degToRad(90-Math.max(D.elev,24)),k),x.position.copy(it.p).addScaledVector(ye,150),x.target.position.copy(it.p),x.color.copy(D.sun),x.intensity=D.si,g.color.copy(D.sky),g.groundColor.copy(D.gnd),g.intensity=D.hi*.45,l.fog.color.copy(D.fog),l.fog.density=D.fd,y.update(B,l),l.environmentIntensity=Jn(.9,.55,D.night),J&&(J.uniforms.time.value=qe),n.toneMappingExposure=D.exp;let Y=D.night;q.setNight(Y),q.lightWater(ye,D.sun,D.si,D.sky,D.hi,Y),ce.setNight(Y),$.setNight(Gs(Y*1.3)),q.sky.moon.position.copy(h.position).addScaledVector(z,590),q.sky.moonGlow.position.copy(q.sky.moon.position),q.sky.stars.position.copy(h.position),q.clouds.position.set(h.position.x,0,h.position.z),Ze.copy(D.sun).lerp(D.fog,.55).multiplyScalar(Jn(1,.18,Y)),q.tintClouds(Ze,Jn(.75,.25,Y)),De&&(De.strength=.2+Y*.45);for(let ne of K){let se=ne.worldCenter.distanceToSquared(h.position)<19600;ne.update?.(qe,se),ne.setNight?.(Y,Gs(1-Math.abs(B-.42)*6))}for(let ne of q.update)ne(qe,h);Le(B),Ts.update(h.position);let ie=Math.abs(b)>1e-4;pi++,(ie||pi%(o===0?6:4)===0)&&(n.shadowMap.needsUpdate=!0);let ee=tt?performance.now():0;tt&&n.info.reset(),fe?fe.render():n.render(l,h),tt&&window.__perf.frameMs.push(performance.now()-ee),xt&&(Dt++,Ut+=me,Ut>.5&&(xt.textContent=`${Math.round(Dt/Ut)} fps \xB7 tier ${o} \xB7 ${c.toFixed(2)}x${fe?"":" \xB7 direct"}`,Dt=0,Ut=0)),lt&&!document.hidden&&(Ht++,Ln+=me,Ln>2&&(Ht/Ln<52&&qe-ws>3&&(qs(),ws=qe),Ht=0,Ln=0)),requestAnimationFrame(Si)}if(A?.trees){let me=[],et={};for(let b=0;b<=800;b++){let R=H(b/800);P.frame(R.u,et),me.push(Q(Z(R).pos,et,new L))}let qe=new L,at=new L,p=new He;for(let b of A.trees){let R=new Set;if(b.instances.forEach((D,U)=>{qe.setFromMatrixPosition(D),me.some(k=>Math.hypot(k.x-qe.x,k.z-qe.z)<4.5)&&R.add(U)}),!!R.size)for(let D of b.parts)for(let U of D.meshes||[])U.userData.indices.forEach((k,Y)=>{R.has(k)&&U.setMatrixAt(Y,p.copy(b.instances[k]).scale(at))}),U.instanceMatrix.needsUpdate=!0,U.computeBoundingSphere()}}On(.84,"Warming up the GPU\u2026"),await Gi();let Ts=new bc(l);n.shadowMap.needsUpdate=!0,await op(n,l,h,{extra:()=>{n.shadowMap.needsUpdate=!0},onProgress:me=>On(.84+me*.15)}),fe&&fe.render(),n.shadowMap.needsUpdate=!0,On(1,"Ready. Hop in."),requestAnimationFrame(Si),await Gi(),await Gi(),document.documentElement.classList.add("ready"),setTimeout(()=>Yi("#loader")?.remove(),1600),window.__story={STOPS:S,jumpTo:te}}y_().catch(i=>{console.error(i),document.documentElement.classList.add("static"),Yi("#loader")?.remove()});
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
