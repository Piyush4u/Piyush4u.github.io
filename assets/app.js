var Ih="170";var Wp=0,Hu=1,Xp=2;var tc=1,Dh=2,Ri=3,Xn=0,Kt=1,Vt=2,an=0,mr=1,gi=2,Gu=3,Vu=4,Lh=5,Vn=100,qp=101,Yp=102,jp=103,Zp=104,Nr=200,Kp=201,Jp=202,$p=203,fl=204,dl=205,nc=206,Qp=207,ic=208,em=209,tm=210,nm=211,im=212,sm=213,rm=214,pl=0,ml=1,gl=2,br=3,xl=4,vl=5,bl=6,yl=7,dd=0,om=1,am=2,ns=0,Uh=1,Nh=2,Fh=3,wo=4,cm=5,Oh=6,Bh=7,Wu="attached",lm="detached",pd=300,yr=301,_r=302,_l=303,Ml=304,sc=306,ln=1e3,zn=1001,mo=1002,cn=1003,zh=1004;var fr=1005;var Zt=1006,ao=1007;var oi=1008;var ai=1009,md=1010,gd=1011,go=1012,kh=1013,Ns=1014,An=1015,en=1016,Hh=1017,Gh=1018,is=1020,xd=35902,vd=1021,bd=1022,En=1023,yd=1024,_d=1025,gr=1026,ss=1027,To=1028,Vh=1029,Md=1030,Wh=1031;var Xh=1033,Ma=33776,Sa=33777,Ea=33778,wa=33779,Sl=35840,El=35841,wl=35842,Tl=35843,Al=36196,Rl=37492,Cl=37496,Pl=37808,Il=37809,Dl=37810,Ll=37811,Ul=37812,Nl=37813,Fl=37814,Ol=37815,Bl=37816,zl=37817,kl=37818,Hl=37819,Gl=37820,Vl=37821,Ta=36492,Wl=36494,Xl=36495,Sd=36283,ql=36284,Yl=36285,jl=36286;var Mr=2300,Sr=2301,Pc=2302,Xu=2400,qu=2401,Yu=2402,hm=2500;var Ed=0,rc=1,Ao=2,um=3200,Ro=3201;var qh=0,fm=1,mi="",kt="srgb",dn="srgb-linear",oc="linear",Lt="srgb";var Ys=7680;var ju=519,dm=512,pm=513,mm=514,wd=515,gm=516,xm=517,vm=518,bm=519,Zl=35044;var Zu="300 es",Pi=2e3,Aa=2001,rs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ku=1234567,co=Math.PI/180,Er=180/Math.PI;function Wn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function on(i,e,t){return Math.max(e,Math.min(t,i))}function Yh(i,e){return(i%e+e)%e}function ym(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function _m(i,e,t){return i!==e?(t-i)/(e-i):0}function lo(i,e,t){return(1-t)*i+t*e}function Mm(i,e,t,n){return lo(i,e,1-Math.exp(-t*n))}function Sm(i,e=1){return e-Math.abs(Yh(i,e*2)-e)}function Em(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function wm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Tm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Am(i,e){return i+Math.random()*(e-i)}function Rm(i){return i*(.5-Math.random())}function Cm(i){i!==void 0&&(Ku=i);let e=Ku+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pm(i){return i*co}function Im(i){return i*Er}function Dm(i){return(i&i-1)===0&&i!==0}function Lm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Um(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Nm(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*x,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*x,a*l);break;case"ZYZ":i.set(c*x,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ys={DEG2RAD:co,RAD2DEG:Er,generateUUID:Wn,clamp:on,euclideanModulo:Yh,mapLinear:ym,inverseLerp:_m,lerp:lo,damp:Mm,pingpong:Sm,smoothstep:Em,smootherstep:wm,randInt:Tm,randFloat:Am,randFloatSpread:Rm,seededRandom:Cm,degToRad:Pm,radToDeg:Im,isPowerOfTwo:Dm,ceilPowerOfTwo:Lm,floorPowerOfTwo:Um,setQuaternionFromProperEuler:Nm,normalize:Nt,denormalize:ri},Se=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ut=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],v=s[0],g=s[3],m=s[6],w=s[1],M=s[4],y=s[7],P=s[2],A=s[5],T=s[8];return r[0]=o*v+a*w+c*P,r[3]=o*g+a*M+c*A,r[6]=o*m+a*y+c*T,r[1]=l*v+h*w+u*P,r[4]=l*g+h*M+u*A,r[7]=l*m+h*y+u*T,r[2]=f*v+d*w+x*P,r[5]=f*g+d*M+x*A,r[8]=f*m+d*y+x*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,x=t*u+n*f+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=f*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ic.makeScale(e,t)),this}rotate(e){return this.premultiply(Ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ic=new ut;function Td(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fm(){let i=xo("canvas");return i.style.display="block",i}var Ju={};function ro(i){i in Ju||(Ju[i]=!0,console.warn(i))}function Om(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Bm(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zm(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var bt={enabled:!0,workingColorSpace:dn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Lt&&(i.r=Ii(i.r),i.g=Ii(i.g),i.b=Ii(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Lt&&(i.r=xr(i.r),i.g=xr(i.g),i.b=xr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mi?oc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $u=[.64,.33,.3,.6,.15,.06],Qu=[.2126,.7152,.0722],ef=[.3127,.329],tf=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nf=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);bt.define({[dn]:{primaries:$u,whitePoint:ef,transfer:oc,toXYZ:tf,fromXYZ:nf,luminanceCoefficients:Qu,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:$u,whitePoint:ef,transfer:Lt,toXYZ:tf,fromXYZ:nf,luminanceCoefficients:Qu,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}});var js,Kl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{js===void 0&&(js=xo("canvas")),js.width=e.width,js.height=e.height;let n=js.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ii(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ii(t[n]/255)*255):t[n]=Ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},km=0,Ra=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Dc(s[o].image)):r.push(Dc(s[o]))}else r=Dc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Dc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hm=0,nn=class i extends rs{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=zn,s=zn,r=Zt,o=oi,a=En,c=ai,l=i.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Wn(),this.name="",this.source=new Ra(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ln:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ln:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=pd;nn.DEFAULT_ANISOTROPY=1;var wt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],x=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(x+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,y=(d+1)/2,P=(m+1)/2,A=(h+f)/4,T=(u+v)/4,E=(x+g)/4;return M>y&&M>P?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=A/n,r=T/n):y>P?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=E/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=T/r,s=E/r),this.set(n,s,r,t),this}let w=Math.sqrt((g-x)*(g-x)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(g-x)/w,this.y=(u-v)/w,this.z=(f-h)/w,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jl=class extends rs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ra(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends Jl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ca=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $l=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ft=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],x=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=x,e[t+3]=v;return}if(u!==v||c!==f||l!==d||h!==x){let g=1-a,m=c*f+l*d+h*x+u*v,w=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let P=Math.sqrt(M),A=Math.atan2(P,m*w);g=Math.sin(g*A)/P,a=Math.sin(a*A)/P}let y=a*w;if(c=c*g+f*y,l=l*g+d*y,h=h*g+x*y,u=u*g+v*y,g===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],x=r[o+3];return e[t]=a*x+h*u+c*d-l*f,e[t+1]=c*x+h*f+l*u-a*d,e[t+2]=l*x+h*d+a*f-c*u,e[t+3]=h*x-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u+f*d*x;break;case"YZX":this._x=f*h*u+l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u-f*d*x;break;case"XZY":this._x=f*h*u-l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u+f*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lc=new D,sf=new Ft,hn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vo.copy(n.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Wo.subVectors(this.max,jr),Zs.subVectors(e.a,jr),Ks.subVectors(e.b,jr),Js.subVectors(e.c,jr),ji.subVectors(Ks,Zs),Zi.subVectors(Js,Ks),As.subVectors(Zs,Js);let t=[0,-ji.z,ji.y,0,-Zi.z,Zi.y,0,-As.z,As.y,ji.z,0,-ji.x,Zi.z,0,-Zi.x,As.z,0,-As.x,-ji.y,ji.x,0,-Zi.y,Zi.x,0,-As.y,As.x,0];return!Uc(t,Zs,Ks,Js,Wo)||(t=[1,0,0,0,1,0,0,0,1],!Uc(t,Zs,Ks,Js,Wo))?!1:(Xo.crossVectors(ji,Zi),t=[Xo.x,Xo.y,Xo.z],Uc(t,Zs,Ks,Js,Wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mi=[new D,new D,new D,new D,new D,new D,new D,new D],ti=new D,Vo=new hn,Zs=new D,Ks=new D,Js=new D,ji=new D,Zi=new D,As=new D,jr=new D,Wo=new D,Xo=new D,Rs=new D;function Uc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Rs.fromArray(i,r);let a=s.x*Math.abs(Rs.x)+s.y*Math.abs(Rs.y)+s.z*Math.abs(Rs.z),c=e.dot(Rs),l=t.dot(Rs),h=n.dot(Rs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Gm=new hn,Zr=new D,Nc=new D,Rn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Gm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);let t=Zr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Zr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(Nc)),this.expandByPoint(Zr.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Si=new D,Fc=new D,qo=new D,Ki=new D,Oc=new D,Yo=new D,Bc=new D,wr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fc.copy(e).add(t).multiplyScalar(.5),qo.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(Fc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(qo),a=Ki.dot(this.direction),c=-Ki.dot(qo),l=Ki.lengthSq(),h=Math.abs(1-o*o),u,f,d,x;if(h>0)if(u=o*c-a,f=o*a-c,x=r*h,u>=0)if(f>=-x)if(f<=x){let v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=x?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Fc).addScaledVector(qo,f),d}intersectSphere(e,t){Si.subVectors(e.center,this.origin);let n=Si.dot(this.direction),s=Si.dot(Si)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,s,r){Oc.subVectors(t,e),Yo.subVectors(n,e),Bc.crossVectors(Oc,Yo);let o=this.direction.dot(Bc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);let c=a*this.direction.dot(Yo.crossVectors(Ki,Yo));if(c<0)return null;let l=a*this.direction.dot(Oc.cross(Ki));if(l<0||c+l>o)return null;let h=-a*Ki.dot(Bc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,f,d,x,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,d,x,v,g)}set(e,t,n,s,r,o,a,c,l,h,u,f,d,x,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=x,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),r=1/$s.setFromMatrixColumn(e,1).length(),o=1/$s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,x=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+x*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=x+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,x=l*h,v=l*u;t[0]=f+v*a,t[4]=x*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-x,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,x=l*h,v=l*u;t[0]=f-v*a,t[4]=-o*u,t[8]=x+d*a,t[1]=d+x*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,x=a*h,v=a*u;t[0]=c*h,t[4]=x*l-d,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=d*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,x=a*c,v=a*l;t[0]=c*h,t[4]=v-f*u,t[8]=x*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+x,t[10]=f-v*u}else if(e.order==="XZY"){let f=o*c,d=o*l,x=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=o*h,t[9]=d*u-x,t[2]=x*u-d,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vm,e,Wm)}lookAt(e,t,n){let s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),Ji.crossVectors(n,On),Ji.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Ji.crossVectors(n,On)),Ji.normalize(),jo.crossVectors(On,Ji),s[0]=Ji.x,s[4]=jo.x,s[8]=On.x,s[1]=Ji.y,s[5]=jo.y,s[9]=On.y,s[2]=Ji.z,s[6]=jo.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],v=n[6],g=n[10],m=n[14],w=n[3],M=n[7],y=n[11],P=n[15],A=s[0],T=s[4],E=s[8],S=s[12],_=s[1],C=s[5],O=s[9],H=s[13],W=s[2],J=s[6],N=s[10],j=s[14],G=s[3],q=s[7],oe=s[11],$=s[15];return r[0]=o*A+a*_+c*W+l*G,r[4]=o*T+a*C+c*J+l*q,r[8]=o*E+a*O+c*N+l*oe,r[12]=o*S+a*H+c*j+l*$,r[1]=h*A+u*_+f*W+d*G,r[5]=h*T+u*C+f*J+d*q,r[9]=h*E+u*O+f*N+d*oe,r[13]=h*S+u*H+f*j+d*$,r[2]=x*A+v*_+g*W+m*G,r[6]=x*T+v*C+g*J+m*q,r[10]=x*E+v*O+g*N+m*oe,r[14]=x*S+v*H+g*j+m*$,r[3]=w*A+M*_+y*W+P*G,r[7]=w*T+M*C+y*J+P*q,r[11]=w*E+M*O+y*N+P*oe,r[15]=w*S+M*H+y*j+P*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],x=e[3],v=e[7],g=e[11],m=e[15];return x*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+v*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+g*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+m*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],x=e[12],v=e[13],g=e[14],m=e[15],w=u*g*l-v*f*l+v*c*d-a*g*d-u*c*m+a*f*m,M=x*f*l-h*g*l-x*c*d+o*g*d+h*c*m-o*f*m,y=h*v*l-x*u*l+x*a*d-o*v*d-h*a*m+o*u*m,P=x*u*c-h*v*c-x*a*f+o*v*f+h*a*g-o*u*g,A=t*w+n*M+s*y+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=w*T,e[1]=(v*f*r-u*g*r-v*s*d+n*g*d+u*s*m-n*f*m)*T,e[2]=(a*g*r-v*c*r+v*s*l-n*g*l-a*s*m+n*c*m)*T,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*T,e[4]=M*T,e[5]=(h*g*r-x*f*r+x*s*d-t*g*d-h*s*m+t*f*m)*T,e[6]=(x*c*r-o*g*r-x*s*l+t*g*l+o*s*m-t*c*m)*T,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*T,e[8]=y*T,e[9]=(x*u*r-h*v*r-x*n*d+t*v*d+h*n*m-t*u*m)*T,e[10]=(o*v*r-x*a*r+x*n*l-t*v*l-o*n*m+t*a*m)*T,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*T,e[12]=P*T,e[13]=(h*v*s-x*u*s+x*n*f-t*v*f-h*n*g+t*u*g)*T,e[14]=(x*a*s-o*v*s-x*n*c+t*v*c+o*n*g-t*a*g)*T,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,x=r*u,v=o*h,g=o*u,m=a*u,w=c*l,M=c*h,y=c*u,P=n.x,A=n.y,T=n.z;return s[0]=(1-(v+m))*P,s[1]=(d+y)*P,s[2]=(x-M)*P,s[3]=0,s[4]=(d-y)*A,s[5]=(1-(f+m))*A,s[6]=(g+w)*A,s[7]=0,s[8]=(x+M)*T,s[9]=(g-w)*T,s[10]=(1-(f+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=$s.set(s[0],s[1],s[2]).length(),o=$s.set(s[4],s[5],s[6]).length(),a=$s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ni.copy(this);let l=1/r,h=1/o,u=1/a;return ni.elements[0]*=l,ni.elements[1]*=l,ni.elements[2]*=l,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=u,ni.elements[9]*=u,ni.elements[10]*=u,t.setFromRotationMatrix(ni),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Pi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),d,x;if(a===Pi)d=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Aa)d=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Pi){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*l,d=(n+s)*h,x,v;if(a===Pi)x=(o+r)*u,v=-2*u;else if(a===Aa)x=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},$s=new D,ni=new Ve,Vm=new D(0,0,0),Wm=new D(1,1,1),Ji=new D,jo=new D,On=new D,rf=new Ve,of=new Ft,qn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(on(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(on(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return of.setFromEuler(this),this.setFromQuaternion(of,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var Pa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xm=0,af=new D,Qs=new Ft,Ei=new Ve,Zo=new D,Kr=new D,qm=new D,Ym=new Ft,cf=new D(1,0,0),lf=new D(0,1,0),hf=new D(0,0,1),uf={type:"added"},jm={type:"removed"},er={type:"childadded",child:null},zc={type:"childremoved",child:null},Bt=class i extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new qn,n=new Ft,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new ut}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(cf,e)}rotateY(e){return this.rotateOnAxis(lf,e)}rotateZ(e){return this.rotateOnAxis(hf,e)}translateOnAxis(e,t){return af.copy(e).applyQuaternion(this.quaternion),this.position.add(af.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cf,e)}translateY(e){return this.translateOnAxis(lf,e)}translateZ(e){return this.translateOnAxis(hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zo.copy(e):Zo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Kr,Zo,this.up):Ei.lookAt(Zo,Kr,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),Qs.setFromRotationMatrix(Ei),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uf),er.child=e,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jm),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uf),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,Ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Bt.DEFAULT_UP=new D(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ii=new D,wi=new D,kc=new D,Ti=new D,tr=new D,nr=new D,ff=new D,Hc=new D,Gc=new D,Vc=new D,Wc=new wt,Xc=new wt,qc=new wt,es=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ii.subVectors(e,t),s.cross(ii);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ii.subVectors(s,t),wi.subVectors(n,t),kc.subVectors(e,t);let o=ii.dot(ii),a=ii.dot(wi),c=ii.dot(kc),l=wi.dot(wi),h=wi.dot(kc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,x=(o*h-a*c)*f;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ti.x),c.addScaledVector(o,Ti.y),c.addScaledVector(a,Ti.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Wc.setScalar(0),Xc.setScalar(0),qc.setScalar(0),Wc.fromBufferAttribute(e,t),Xc.fromBufferAttribute(e,n),qc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Wc,r.x),o.addScaledVector(Xc,r.y),o.addScaledVector(qc,r.z),o}static isFrontFacing(e,t,n,s){return ii.subVectors(n,t),wi.subVectors(e,t),ii.cross(wi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),ii.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;tr.subVectors(s,n),nr.subVectors(r,n),Hc.subVectors(e,n);let c=tr.dot(Hc),l=nr.dot(Hc);if(c<=0&&l<=0)return t.copy(n);Gc.subVectors(e,s);let h=tr.dot(Gc),u=nr.dot(Gc);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(tr,o);Vc.subVectors(e,r);let d=tr.dot(Vc),x=nr.dot(Vc);if(x>=0&&d<=x)return t.copy(r);let v=d*l-c*x;if(v<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(nr,a);let g=h*x-d*u;if(g<=0&&u-h>=0&&d-x>=0)return ff.subVectors(r,s),a=(u-h)/(u-h+(d-x)),t.copy(s).addScaledVector(ff,a);let m=1/(g+v+f);return o=v*m,a=f*m,t.copy(n).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function Yc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=bt.workingColorSpace){if(e=Yh(e,1),t=on(t,0,1),n=on(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Yc(o,r,e+1/3),this.g=Yc(o,r,e),this.b=Yc(o,r,e-1/3)}return bt.toWorkingColorSpace(this,s),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){let n=Ad[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return bt.fromWorkingColorSpace(Sn.copy(this),e),Math.round(on(Sn.r*255,0,255))*65536+Math.round(on(Sn.g*255,0,255))*256+Math.round(on(Sn.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(Sn.copy(this),t);let n=Sn.r,s=Sn.g,r=Sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=kt){bt.fromWorkingColorSpace(Sn.copy(this),e);let t=Sn.r,n=Sn.g,s=Sn.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Ko);let n=lo($i.h,Ko.h,t),s=lo($i.s,Ko.s,t),r=lo($i.l,Ko.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new De;De.NAMES=Ad;var Zm=0,Cn=class extends rs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Wn(),this.name="",this.blending=mr,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=dl,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fl&&(n.blendSrc=this.blendSrc),this.blendDst!==dl&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ju&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Jt=class extends Cn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ci=Km();function Km(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Jm(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=on(i,-65504,65504),Ci.floatView[0]=i;let e=Ci.uint32View[0],t=e>>23&511;return Ci.baseTable[t]+((e&8388607)>>Ci.shiftTable[t])}function $m(i){let e=i>>10;return Ci.uint32View[0]=Ci.mantissaTable[Ci.offsetTable[e]+(i&1023)]+Ci.exponentTable[e],Ci.floatView[0]}var jh={toHalfFloat:Jm,fromHalfFloat:$m},tn=new D,Jo=new Se,pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zl,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jo.fromBufferAttribute(this,t),Jo.applyMatrix3(e),this.setXY(t,Jo.x,Jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zl&&(e.usage=this.usage),e}};var Ia=class extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Da=class extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var At=class extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Qm=0,Gn=new Ve,jc=new Bt,ir=new D,Bn=new hn,Jr=new hn,vn=new D,Ct=class i extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Td(e)?Da:Ia)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new At(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Jr.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(Bn.min,Jr.min),Bn.expandByPoint(vn),vn.addVectors(Bn.max,Jr.max),Bn.expandByPoint(vn)):(Bn.expandByPoint(Jr.min),Bn.expandByPoint(Jr.max))}Bn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)vn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(vn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)vn.fromBufferAttribute(a,l),c&&(ir.fromBufferAttribute(e,l),vn.add(ir)),s=Math.max(s,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let E=0;E<n.count;E++)a[E]=new D,c[E]=new D;let l=new D,h=new D,u=new D,f=new Se,d=new Se,x=new Se,v=new D,g=new D;function m(E,S,_){l.fromBufferAttribute(n,E),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,E),d.fromBufferAttribute(r,S),x.fromBufferAttribute(r,_),h.sub(l),u.sub(l),d.sub(f),x.sub(f);let C=1/(d.x*x.y-x.x*d.y);isFinite(C)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(C),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(C),a[E].add(v),a[S].add(v),a[_].add(v),c[E].add(g),c[S].add(g),c[_].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let E=0,S=w.length;E<S;++E){let _=w[E],C=_.start,O=_.count;for(let H=C,W=C+O;H<W;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let M=new D,y=new D,P=new D,A=new D;function T(E){P.fromBufferAttribute(s,E),A.copy(P);let S=a[E];M.copy(S),M.sub(P.multiplyScalar(P.dot(S))).normalize(),y.crossVectors(A,S);let C=y.dot(c[E])<0?-1:1;o.setXYZW(E,M.x,M.y,M.z,C)}for(let E=0,S=w.length;E<S;++E){let _=w[E],C=_.start,O=_.count;for(let H=C,W=C+O;H<W;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){let x=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,x=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*h;for(let m=0;m<h;m++)f[x++]=l[d++]}return new pt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},df=new Ve,Cs=new wr,$o=new Rn,pf=new D,Qo=new D,ea=new D,ta=new D,Zc=new D,na=new D,mf=new D,ia=new D,Ge=class extends Bt{constructor(e=new Ct,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){na.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Zc.fromBufferAttribute(u,e),o?na.addScaledVector(Zc,h):na.addScaledVector(Zc.sub(t),h))}t.add(na)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(r),Cs.copy(e.ray).recast(e.near),!($o.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere($o,pf)===null||Cs.origin.distanceToSquared(pf)>(e.far-e.near)**2))&&(df.copy(r).invert(),Cs.copy(e.ray).applyMatrix4(df),!(n.boundingBox!==null&&Cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){let g=f[x],m=o[g.materialIndex],w=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=w,P=M;y<P;y+=3){let A=a.getX(y),T=a.getX(y+1),E=a.getX(y+2);s=sa(this,m,e,n,l,h,u,A,T,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=x,m=v;g<m;g+=3){let w=a.getX(g),M=a.getX(g+1),y=a.getX(g+2);s=sa(this,o,e,n,l,h,u,w,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){let g=f[x],m=o[g.materialIndex],w=Math.max(g.start,d.start),M=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=w,P=M;y<P;y+=3){let A=y,T=y+1,E=y+2;s=sa(this,m,e,n,l,h,u,A,T,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let g=x,m=v;g<m;g+=3){let w=g,M=g+1,y=g+2;s=sa(this,o,e,n,l,h,u,w,M,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function e0(i,e,t,n,s,r,o,a){let c;if(e.side===Kt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Xn,a),c===null)return null;ia.copy(a),ia.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ia);return l<t.near||l>t.far?null:{distance:l,point:ia.clone(),object:i}}function sa(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Qo),i.getVertexPosition(c,ea),i.getVertexPosition(l,ta);let h=e0(i,e,t,n,Qo,ea,ta,mf);if(h){let u=new D;es.getBarycoord(mf,Qo,ea,ta,u),s&&(h.uv=es.getInterpolatedAttribute(s,a,c,l,u,new Se)),r&&(h.uv1=es.getInterpolatedAttribute(r,a,c,l,u,new Se)),o&&(h.normal=es.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new D,materialIndex:0};es.getNormal(Qo,ea,ta,f.normal),h.face=f,h.barycoord=u}return h}var Oe=class i extends Ct{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(u,2));function x(v,g,m,w,M,y,P,A,T,E,S){let _=y/T,C=P/E,O=y/2,H=P/2,W=A/2,J=T+1,N=E+1,j=0,G=0,q=new D;for(let oe=0;oe<N;oe++){let $=oe*C-H;for(let le=0;le<J;le++){let Le=le*_-O;q[v]=Le*w,q[g]=$*M,q[m]=W,l.push(q.x,q.y,q.z),q[v]=0,q[g]=0,q[m]=A>0?1:-1,h.push(q.x,q.y,q.z),u.push(le/T),u.push(1-oe/E),j+=1}}for(let oe=0;oe<E;oe++)for(let $=0;$<T;$++){let le=f+$+J*oe,Le=f+$+J*(oe+1),K=f+($+1)+J*(oe+1),de=f+($+1)+J*oe;c.push(le,Le,de),c.push(Le,K,de),G+=6}a.addGroup(d,G,S),d+=G,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Tr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Tn(i){let e={};for(let t=0;t<i.length;t++){let n=Tr(i[t]);for(let s in n)e[s]=n[s]}return e}function t0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}var pn={clone:Tr,merge:Tn},n0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,It=class extends Cn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n0,this.fragmentShader=i0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=t0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},La=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qi=new D,gf=new Se,xf=new Se,Qt=class extends La{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,gf,xf),t.subVectors(xf,gf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(co*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},sr=-90,rr=1,Ql=class extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qt(sr,rr,e,t);s.layers=this.layers,this.add(s);let r=new Qt(sr,rr,e,t);r.layers=this.layers,this.add(r);let o=new Qt(sr,rr,e,t);o.layers=this.layers,this.add(o);let a=new Qt(sr,rr,e,t);a.layers=this.layers,this.add(a);let c=new Qt(sr,rr,e,t);c.layers=this.layers,this.add(c);let l=new Qt(sr,rr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ua=class extends nn{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:yr,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},eh=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ua(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Oe(5,5,5),r=new It({name:"CubemapFromEquirect",uniforms:Tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:an});r.uniforms.tEquirect.value=t;let o=new Ge(s,r),a=t.minFilter;return t.minFilter===oi&&(t.minFilter=Zt),new Ql(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Kc=new D,s0=new D,r0=new ut,si=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Kc.subVectors(n,t).cross(s0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Kc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||r0.getNormalMatrix(e),s=this.coplanarPoint(Kc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ps=new Rn,ra=new D,Di=class{constructor(e=new si,t=new si,n=new si,s=new si,r=new si,o=new si){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],x=s[9],v=s[10],g=s[11],m=s[12],w=s[13],M=s[14],y=s[15];if(n[0].setComponents(c-r,f-l,g-d,y-m).normalize(),n[1].setComponents(c+r,f+l,g+d,y+m).normalize(),n[2].setComponents(c+o,f+h,g+x,y+w).normalize(),n[3].setComponents(c-o,f-h,g-x,y-w).normalize(),n[4].setComponents(c-a,f-u,g-v,y-M).normalize(),t===Pi)n[5].setComponents(c+a,f+u,g+v,y+M).normalize();else if(t===Aa)n[5].setComponents(a,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){return Ps.center.set(0,0,0),Ps.radius=.7071067811865476,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ra.x=s.normal.x>0?e.max.x:e.min.x,ra.y=s.normal.y>0?e.max.y:e.min.y,ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Cd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function o0(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){let x=u[f],v=u[d];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){let v=u[d];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Tt=class i extends Ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],x=[],v=[],g=[];for(let m=0;m<h;m++){let w=m*f-o;for(let M=0;M<l;M++){let y=M*u-r;x.push(y,-w,0),v.push(0,0,1),g.push(M/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<a;w++){let M=w+l*m,y=w+l*(m+1),P=w+1+l*(m+1),A=w+1+l*m;d.push(M,y,A),d.push(y,P,A)}this.setIndex(d),this.setAttribute("position",new At(x,3)),this.setAttribute("normal",new At(v,3)),this.setAttribute("uv",new At(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},a0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c0=`#ifdef USE_ALPHAHASH
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
#endif`,l0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d0=`#ifdef USE_AOMAP
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
#endif`,p0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m0=`#ifdef USE_BATCHING
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
#endif`,g0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,y0=`#ifdef USE_IRIDESCENCE
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
#endif`,_0=`#ifdef USE_BUMPMAP
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
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,P0=`#define PI 3.141592653589793
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
} // validated`,I0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,D0=`vec3 transformedNormal = objectNormal;
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
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O0="gl_FragColor = linearToOutputTexel( gl_FragColor );",B0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j0=`#ifdef USE_GRADIENTMAP
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
}`,Z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$0=`uniform bool receiveShadow;
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
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sg=`PhysicalMaterial material;
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
#endif`,rg=`struct PhysicalMaterial {
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
}`,og=`
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
#endif`,ag=`#if defined( RE_IndirectDiffuse )
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
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ug=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gg=`#if defined( USE_POINTS_UV )
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
#endif`,xg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mg=`#ifdef USE_MORPHTARGETS
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
#endif`,Sg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cg=`#ifdef USE_NORMALMAP
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
#endif`,Pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ng=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xg=`float getShadowMask() {
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
}`,qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yg=`#ifdef USE_SKINNING
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
#endif`,jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zg=`#ifdef USE_SKINNING
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
#endif`,Kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ex=`#ifdef USE_TRANSMISSION
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
#endif`,tx=`#ifdef USE_TRANSMISSION
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
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ax=`uniform sampler2D t2D;
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`#include <common>
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
}`,dx=`#if DEPTH_PACKING == 3200
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
}`,px=`#define DISTANCE
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
}`,mx=`#define DISTANCE
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
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`uniform float scale;
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
}`,bx=`uniform vec3 diffuse;
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
}`,yx=`#include <common>
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
}`,_x=`uniform vec3 diffuse;
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
}`,Mx=`#define LAMBERT
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
}`,Sx=`#define LAMBERT
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
}`,Ex=`#define MATCAP
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
}`,wx=`#define MATCAP
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
}`,Tx=`#define NORMAL
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
}`,Ax=`#define NORMAL
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
}`,Rx=`#define PHONG
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
}`,Cx=`#define PHONG
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
}`,Px=`#define STANDARD
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
}`,Ix=`#define STANDARD
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
}`,Dx=`#define TOON
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
}`,Lx=`#define TOON
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
}`,Ux=`uniform float size;
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
}`,Nx=`uniform vec3 diffuse;
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
}`,Fx=`#include <common>
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
}`,Ox=`uniform vec3 color;
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
}`,Bx=`uniform float rotation;
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
}`,zx=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:a0,alphahash_pars_fragment:c0,alphamap_fragment:l0,alphamap_pars_fragment:h0,alphatest_fragment:u0,alphatest_pars_fragment:f0,aomap_fragment:d0,aomap_pars_fragment:p0,batching_pars_vertex:m0,batching_vertex:g0,begin_vertex:x0,beginnormal_vertex:v0,bsdfs:b0,iridescence_fragment:y0,bumpmap_pars_fragment:_0,clipping_planes_fragment:M0,clipping_planes_pars_fragment:S0,clipping_planes_pars_vertex:E0,clipping_planes_vertex:w0,color_fragment:T0,color_pars_fragment:A0,color_pars_vertex:R0,color_vertex:C0,common:P0,cube_uv_reflection_fragment:I0,defaultnormal_vertex:D0,displacementmap_pars_vertex:L0,displacementmap_vertex:U0,emissivemap_fragment:N0,emissivemap_pars_fragment:F0,colorspace_fragment:O0,colorspace_pars_fragment:B0,envmap_fragment:z0,envmap_common_pars_fragment:k0,envmap_pars_fragment:H0,envmap_pars_vertex:G0,envmap_physical_pars_fragment:Q0,envmap_vertex:V0,fog_vertex:W0,fog_pars_vertex:X0,fog_fragment:q0,fog_pars_fragment:Y0,gradientmap_pars_fragment:j0,lightmap_pars_fragment:Z0,lights_lambert_fragment:K0,lights_lambert_pars_fragment:J0,lights_pars_begin:$0,lights_toon_fragment:eg,lights_toon_pars_fragment:tg,lights_phong_fragment:ng,lights_phong_pars_fragment:ig,lights_physical_fragment:sg,lights_physical_pars_fragment:rg,lights_fragment_begin:og,lights_fragment_maps:ag,lights_fragment_end:cg,logdepthbuf_fragment:lg,logdepthbuf_pars_fragment:hg,logdepthbuf_pars_vertex:ug,logdepthbuf_vertex:fg,map_fragment:dg,map_pars_fragment:pg,map_particle_fragment:mg,map_particle_pars_fragment:gg,metalnessmap_fragment:xg,metalnessmap_pars_fragment:vg,morphinstance_vertex:bg,morphcolor_vertex:yg,morphnormal_vertex:_g,morphtarget_pars_vertex:Mg,morphtarget_vertex:Sg,normal_fragment_begin:Eg,normal_fragment_maps:wg,normal_pars_fragment:Tg,normal_pars_vertex:Ag,normal_vertex:Rg,normalmap_pars_fragment:Cg,clearcoat_normal_fragment_begin:Pg,clearcoat_normal_fragment_maps:Ig,clearcoat_pars_fragment:Dg,iridescence_pars_fragment:Lg,opaque_fragment:Ug,packing:Ng,premultiplied_alpha_fragment:Fg,project_vertex:Og,dithering_fragment:Bg,dithering_pars_fragment:zg,roughnessmap_fragment:kg,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Vg,shadowmap_vertex:Wg,shadowmask_pars_fragment:Xg,skinbase_vertex:qg,skinning_pars_vertex:Yg,skinning_vertex:jg,skinnormal_vertex:Zg,specularmap_fragment:Kg,specularmap_pars_fragment:Jg,tonemapping_fragment:$g,tonemapping_pars_fragment:Qg,transmission_fragment:ex,transmission_pars_fragment:tx,uv_pars_fragment:nx,uv_pars_vertex:ix,uv_vertex:sx,worldpos_vertex:rx,background_vert:ox,background_frag:ax,backgroundCube_vert:cx,backgroundCube_frag:lx,cube_vert:hx,cube_frag:ux,depth_vert:fx,depth_frag:dx,distanceRGBA_vert:px,distanceRGBA_frag:mx,equirect_vert:gx,equirect_frag:xx,linedashed_vert:vx,linedashed_frag:bx,meshbasic_vert:yx,meshbasic_frag:_x,meshlambert_vert:Mx,meshlambert_frag:Sx,meshmatcap_vert:Ex,meshmatcap_frag:wx,meshnormal_vert:Tx,meshnormal_frag:Ax,meshphong_vert:Rx,meshphong_frag:Cx,meshphysical_vert:Px,meshphysical_frag:Ix,meshtoon_vert:Dx,meshtoon_frag:Lx,points_vert:Ux,points_frag:Nx,shadow_vert:Fx,shadow_frag:Ox,sprite_vert:Bx,sprite_frag:zx},He={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},pi={basic:{uniforms:Tn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Tn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new De(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Tn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Tn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Tn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new De(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Tn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Tn([He.points,He.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Tn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Tn([He.common,He.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Tn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Tn([He.sprite,He.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Tn([He.common,He.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Tn([He.lights,He.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};pi.physical={uniforms:Tn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var oa={r:0,b:0,g:0},Is=new qn,kx=new Ve;function Hx(i,e,t,n,s,r,o){let a=new De(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function x(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?t:e).get(M)),M}function v(w){let M=!1,y=x(w);y===null?m(a,c):y&&y.isColor&&(m(y,1),M=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(w,M){let y=x(M);y&&(y.isCubeTexture||y.mapping===sc)?(h===void 0&&(h=new Ge(new Oe(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:Tr(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Is.copy(M.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kx.makeRotationFromEuler(Is)),h.material.toneMapped=bt.getTransfer(y.colorSpace)!==Lt,(u!==y||f!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ge(new Tt(2,2),new It({name:"BackgroundMaterial",uniforms:Tr(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=bt.getTransfer(y.colorSpace)!==Lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,M){w.getRGB(oa,Rd(i)),n.buffers.color.setClear(oa.r,oa.g,oa.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),c=M,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,m(a,c)},render:v,addToRenderList:g}}function Gx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(_,C,O,H,W){let J=!1,N=u(H,O,C);r!==N&&(r=N,l(r.object)),J=d(_,H,O,W),J&&x(_,H,O,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,y(_,C,O,H),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,C,O){let H=O.wireframe===!0,W=n[_.id];W===void 0&&(W={},n[_.id]=W);let J=W[C.id];J===void 0&&(J={},W[C.id]=J);let N=J[H];return N===void 0&&(N=f(c()),J[H]=N),N}function f(_){let C=[],O=[],H=[];for(let W=0;W<t;W++)C[W]=0,O[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:H,object:_,attributes:{},index:null}}function d(_,C,O,H){let W=r.attributes,J=C.attributes,N=0,j=O.getAttributes();for(let G in j)if(j[G].location>=0){let oe=W[G],$=J[G];if($===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&($=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&($=_.instanceColor)),oe===void 0||oe.attribute!==$||$&&oe.data!==$.data)return!0;N++}return r.attributesNum!==N||r.index!==H}function x(_,C,O,H){let W={},J=C.attributes,N=0,j=O.getAttributes();for(let G in j)if(j[G].location>=0){let oe=J[G];oe===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(oe=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(oe=_.instanceColor));let $={};$.attribute=oe,oe&&oe.data&&($.data=oe.data),W[G]=$,N++}r.attributes=W,r.attributesNum=N,r.index=H}function v(){let _=r.newAttributes;for(let C=0,O=_.length;C<O;C++)_[C]=0}function g(_){m(_,0)}function m(_,C){let O=r.newAttributes,H=r.enabledAttributes,W=r.attributeDivisors;O[_]=1,H[_]===0&&(i.enableVertexAttribArray(_),H[_]=1),W[_]!==C&&(i.vertexAttribDivisor(_,C),W[_]=C)}function w(){let _=r.newAttributes,C=r.enabledAttributes;for(let O=0,H=C.length;O<H;O++)C[O]!==_[O]&&(i.disableVertexAttribArray(O),C[O]=0)}function M(_,C,O,H,W,J,N){N===!0?i.vertexAttribIPointer(_,C,O,W,J):i.vertexAttribPointer(_,C,O,H,W,J)}function y(_,C,O,H){v();let W=H.attributes,J=O.getAttributes(),N=C.defaultAttributeValues;for(let j in J){let G=J[j];if(G.location>=0){let q=W[j];if(q===void 0&&(j==="instanceMatrix"&&_.instanceMatrix&&(q=_.instanceMatrix),j==="instanceColor"&&_.instanceColor&&(q=_.instanceColor)),q!==void 0){let oe=q.normalized,$=q.itemSize,le=e.get(q);if(le===void 0)continue;let Le=le.buffer,K=le.type,de=le.bytesPerElement,xe=K===i.INT||K===i.UNSIGNED_INT||q.gpuType===kh;if(q.isInterleavedBufferAttribute){let fe=q.data,be=fe.stride,Xe=q.offset;if(fe.isInstancedInterleavedBuffer){for(let qe=0;qe<G.locationSize;qe++)m(G.location+qe,fe.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let qe=0;qe<G.locationSize;qe++)g(G.location+qe);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let qe=0;qe<G.locationSize;qe++)M(G.location+qe,$/G.locationSize,K,oe,be*de,(Xe+$/G.locationSize*qe)*de,xe)}else{if(q.isInstancedBufferAttribute){for(let fe=0;fe<G.locationSize;fe++)m(G.location+fe,q.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let fe=0;fe<G.locationSize;fe++)g(G.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let fe=0;fe<G.locationSize;fe++)M(G.location+fe,$/G.locationSize,K,oe,$*de,$/G.locationSize*fe*de,xe)}}else if(N!==void 0){let oe=N[j];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(G.location,oe);break;case 3:i.vertexAttrib3fv(G.location,oe);break;case 4:i.vertexAttrib4fv(G.location,oe);break;default:i.vertexAttrib1fv(G.location,oe)}}}}w()}function P(){E();for(let _ in n){let C=n[_];for(let O in C){let H=C[O];for(let W in H)h(H[W].object),delete H[W];delete C[O]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;let C=n[_.id];for(let O in C){let H=C[O];for(let W in H)h(H[W].object),delete H[W];delete C[O]}delete n[_.id]}function T(_){for(let C in n){let O=n[C];if(O[_.id]===void 0)continue;let H=O[_.id];for(let W in H)h(H[W].object),delete H[W];delete O[_.id]}}function E(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:g,disableUnusedAttributes:w}}function Vx(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<l.length;x++)o(l[x],h[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let x=0;for(let v=0;v<u;v++)x+=h[v]*f[v];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Wx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==En&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let E=T===en&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ai&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==An&&!E)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=x>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:P,maxSamples:A}}function Xx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new si,a=new ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let x=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||x===null||x.length===0||r&&!g)r?h(null):l();else{let w=r?0:n,M=w*4,y=m.clippingState||null;c.value=y,y=h(x,f,M,d);for(let P=0;P!==M;++P)y[P]=t[P];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,x){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=c.value,x!==!0||g===null){let m=d+v*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,y=d;M!==v;++M,y+=4)o.copy(u[M]).applyMatrix4(w,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function qx(i){let e=new WeakMap;function t(o,a){return a===_l?o.mapping=yr:a===Ml&&(o.mapping=_r),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===_l||a===Ml)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new eh(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var os=class extends La{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dr=4,vf=[.125,.215,.35,.446,.526,.582],Us=20,Jc=new os,bf=new De,$c=null,Qc=0,el=0,tl=!1,Ls=(1+Math.sqrt(5))/2,or=1/Ls,yf=[new D(-Ls,or,0),new D(Ls,or,0),new D(-or,0,Ls),new D(or,0,Ls),new D(0,Ls,-or),new D(0,Ls,or),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],as=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){$c=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($c,Qc,el),this._renderer.xr.enabled=tl,e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:en,format:En,colorSpace:dn,depthBuffer:!1},s=_f(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_f(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yx(r)),this._blurMaterial=jx(r,e,t)}return s}_compileMaterial(e){let t=new Ge(this._lodPlanes[0],e);this._renderer.compile(t,Jc)}_sceneToCubeUV(e,t,n,s){let a=new Qt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(bf),h.toneMapping=ns,h.autoClear=!1;let d=new Jt({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),x=new Ge(new Oe,d),v=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,v=!0):(d.color.copy(bf),v=!0);for(let m=0;m<6;m++){let w=m%3;w===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):w===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let M=this._cubeSize;aa(s,w*M,m>2?M:0,M,M),h.setRenderTarget(s),v&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===yr||e.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;aa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Jc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=yf[(s-r-1)%yf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ge(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Us-1),v=r/x,g=isFinite(r)?1+Math.floor(h*v):Us;g>Us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Us}`);let m=[],w=0;for(let T=0;T<Us;++T){let E=T/v,S=Math.exp(-E*E/2);m.push(S),T===0?w+=S:T<g&&(w+=2*S)}for(let T=0;T<m.length;T++)m[T]=m[T]/w;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=x,f.mipInt.value=M-n;let y=this._sizeLods[s],P=3*y*(s>M-dr?s-M+dr:0),A=4*(this._cubeSize-y);aa(t,P,A,3*y,2*y),c.setRenderTarget(t),c.render(u,Jc)}};function Yx(i){let e=[],t=[],n=[],s=i,r=i-dr+1+vf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-dr?c=vf[o-i+dr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,v=3,g=2,m=1,w=new Float32Array(v*x*d),M=new Float32Array(g*x*d),y=new Float32Array(m*x*d);for(let A=0;A<d;A++){let T=A%3*2/3-1,E=A>2?0:-1,S=[T,E,0,T+2/3,E,0,T+2/3,E+1,0,T,E,0,T+2/3,E+1,0,T,E+1,0];w.set(S,v*x*A),M.set(f,g*x*A);let _=[A,A,A,A,A,A];y.set(_,m*x*A)}let P=new Ct;P.setAttribute("position",new pt(w,v)),P.setAttribute("uv",new pt(M,g)),P.setAttribute("faceIndex",new pt(y,m)),e.push(P),s>dr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _f(i,e,t){let n=new Yt(i,e,t);return n.texture.mapping=sc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function aa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function jx(i,e,t){let n=new Float32Array(Us),s=new D(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zh(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function Mf(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zh(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function Sf(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function Zh(){return`

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
	`}function Zx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===_l||c===Ml,h=c===yr||c===_r;if(l||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new as(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new as(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Kx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ro("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Jx(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);for(let x in f.morphAttributes){let v=f.morphAttributes[x];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let x in f)e.update(f[x],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let x in d){let v=d[x];for(let g=0,m=v.length;g<m;g++)e.update(v[g],i.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,x=u.attributes.position,v=0;if(d!==null){let w=d.array;v=d.version;for(let M=0,y=w.length;M<y;M+=3){let P=w[M+0],A=w[M+1],T=w[M+2];f.push(P,A,A,T,T,P)}}else if(x!==void 0){let w=x.array;v=x.version;for(let M=0,y=w.length/3-1;M<y;M+=3){let P=M+0,A=M+1,T=M+2;f.push(P,A,A,T,T,P)}}else return;let g=new(Td(f)?Da:Ia)(f,1);g.version=v;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function $x(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,x){x!==0&&(i.drawElementsInstanced(n,d,r,f*o,x),t.update(d,n,x))}function h(f,d,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,x);let g=0;for(let m=0;m<x;m++)g+=d[m];t.update(g,n,1)}function u(f,d,x,v){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/o,d[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,x);let m=0;for(let w=0;w<x;w++)m+=d[w]*v[w];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Qx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ev(i,e,t){let n=new WeakMap,s=new wt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],M=0;d===!0&&(M=1),x===!0&&(M=2),v===!0&&(M=3);let y=a.attributes.position.count*M,P=1;y>e.maxTextureSize&&(P=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*P*4*u),T=new Ca(A,y,P,u);T.type=An,T.needsUpdate=!0;let E=M*4;for(let _=0;_<u;_++){let C=g[_],O=m[_],H=w[_],W=y*P*4*_;for(let J=0;J<C.count;J++){let N=J*E;d===!0&&(s.fromBufferAttribute(C,J),A[W+N+0]=s.x,A[W+N+1]=s.y,A[W+N+2]=s.z,A[W+N+3]=0),x===!0&&(s.fromBufferAttribute(O,J),A[W+N+4]=s.x,A[W+N+5]=s.y,A[W+N+6]=s.z,A[W+N+7]=0),v===!0&&(s.fromBufferAttribute(H,J),A[W+N+8]=s.x,A[W+N+9]=s.y,A[W+N+10]=s.z,A[W+N+11]=H.itemSize===4?s.w:1)}}f={count:u,texture:T,size:new Se(y,P)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let x=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function tv(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var cs=class extends nn{constructor(e,t,n,s,r,o,a,c,l,h=gr){if(h!==gr&&h!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gr&&(n=Ns),n===void 0&&h===ss&&(n=is),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Pd=new nn,Ef=new cs(1,1),Id=new Ca,Dd=new $l,Ld=new Ua,wf=[],Tf=[],Af=new Float32Array(16),Rf=new Float32Array(9),Cf=new Float32Array(4);function Fr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=wf[s];if(r===void 0&&(r=new Float32Array(s),wf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function un(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function fn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ac(i,e){let t=Tf[e];t===void 0&&(t=new Int32Array(e),Tf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function nv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2fv(this.addr,e),fn(t,e)}}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;i.uniform3fv(this.addr,e),fn(t,e)}}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4fv(this.addr,e),fn(t,e)}}function ov(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;Cf.set(n),i.uniformMatrix2fv(this.addr,!1,Cf),fn(t,n)}}function av(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;Rf.set(n),i.uniformMatrix3fv(this.addr,!1,Rf),fn(t,n)}}function cv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;Af.set(n),i.uniformMatrix4fv(this.addr,!1,Af),fn(t,n)}}function lv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2iv(this.addr,e),fn(t,e)}}function uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;i.uniform3iv(this.addr,e),fn(t,e)}}function fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4iv(this.addr,e),fn(t,e)}}function dv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2uiv(this.addr,e),fn(t,e)}}function mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;i.uniform3uiv(this.addr,e),fn(t,e)}}function gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4uiv(this.addr,e),fn(t,e)}}function xv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ef.compareFunction=wd,r=Ef):r=Pd,t.setTexture2D(e||r,s)}function vv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Dd,s)}function bv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ld,s)}function yv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Id,s)}function _v(i){switch(i){case 5126:return nv;case 35664:return iv;case 35665:return sv;case 35666:return rv;case 35674:return ov;case 35675:return av;case 35676:return cv;case 5124:case 35670:return lv;case 35667:case 35671:return hv;case 35668:case 35672:return uv;case 35669:case 35673:return fv;case 5125:return dv;case 36294:return pv;case 36295:return mv;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return bv;case 36289:case 36303:case 36311:case 36292:return yv}}function Mv(i,e){i.uniform1fv(this.addr,e)}function Sv(i,e){let t=Fr(e,this.size,2);i.uniform2fv(this.addr,t)}function Ev(i,e){let t=Fr(e,this.size,3);i.uniform3fv(this.addr,t)}function wv(i,e){let t=Fr(e,this.size,4);i.uniform4fv(this.addr,t)}function Tv(i,e){let t=Fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Av(i,e){let t=Fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Rv(i,e){let t=Fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cv(i,e){i.uniform1iv(this.addr,e)}function Pv(i,e){i.uniform2iv(this.addr,e)}function Iv(i,e){i.uniform3iv(this.addr,e)}function Dv(i,e){i.uniform4iv(this.addr,e)}function Lv(i,e){i.uniform1uiv(this.addr,e)}function Uv(i,e){i.uniform2uiv(this.addr,e)}function Nv(i,e){i.uniform3uiv(this.addr,e)}function Fv(i,e){i.uniform4uiv(this.addr,e)}function Ov(i,e,t){let n=this.cache,s=e.length,r=ac(t,s);un(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Pd,r[o])}function Bv(i,e,t){let n=this.cache,s=e.length,r=ac(t,s);un(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Dd,r[o])}function zv(i,e,t){let n=this.cache,s=e.length,r=ac(t,s);un(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ld,r[o])}function kv(i,e,t){let n=this.cache,s=e.length,r=ac(t,s);un(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Id,r[o])}function Hv(i){switch(i){case 5126:return Mv;case 35664:return Sv;case 35665:return Ev;case 35666:return wv;case 35674:return Tv;case 35675:return Av;case 35676:return Rv;case 5124:case 35670:return Cv;case 35667:case 35671:return Pv;case 35668:case 35672:return Iv;case 35669:case 35673:return Dv;case 5125:return Lv;case 36294:return Uv;case 36295:return Nv;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return kv}}var th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_v(t.type)}},nh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hv(t.type)}},ih=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},nl=/(\w+)(\])?(\[|\.)?/g;function Pf(i,e){i.seq.push(e),i.map[e.id]=e}function Gv(i,e,t){let n=i.name,s=n.length;for(nl.lastIndex=0;;){let r=nl.exec(n),o=nl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Pf(t,l===void 0?new th(a,i,e):new nh(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new ih(a),Pf(t,u)),t=u}}}var vr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Gv(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function If(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Vv=37297,Wv=0;function Xv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Df=new ut;function qv(i){bt._getMatrix(Df,bt.workingColorSpace,i);let e=`mat3( ${Df.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(i)){case oc:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Lf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Xv(i.getShaderSource(e),o)}else return s}function Yv(i,e){let t=qv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function jv(i,e){let t;switch(e){case Uh:t="Linear";break;case Nh:t="Reinhard";break;case Fh:t="Cineon";break;case wo:t="ACESFilmic";break;case Oh:t="AgX";break;case Bh:t="Neutral";break;case cm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ca=new D;function Zv(){bt.getLuminanceCoefficients(ca);let i=ca.x.toFixed(4),e=ca.y.toFixed(4),t=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function Jv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $v(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function oo(i){return i!==""}function Uf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(i){return i.replace(Qv,tb)}var eb=new Map;function tb(i,e){let t=dt[e];if(t===void 0){let n=eb.get(e);if(n!==void 0)t=dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sh(t)}var nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ff(i){return i.replace(nb,ib)}function ib(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Of(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function sb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function rb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yr:case _r:e="ENVMAP_TYPE_CUBE";break;case sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ob(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _r:e="ENVMAP_MODE_REFRACTION";break}return e}function ab(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dd:e="ENVMAP_BLENDING_MULTIPLY";break;case om:e="ENVMAP_BLENDING_MIX";break;case am:e="ENVMAP_BLENDING_ADD";break}return e}function cb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function lb(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=sb(t),l=rb(t),h=ob(t),u=ab(t),f=cb(t),d=Kv(t),x=Jv(r),v=s.createProgram(),g,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(oo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(oo).join(`
`),m.length>0&&(m+=`
`)):(g=[Of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),m=[Of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ns?"#define TONE_MAPPING":"",t.toneMapping!==ns?dt.tonemapping_pars_fragment:"",t.toneMapping!==ns?jv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,Yv("linearToOutputTexel",t.outputColorSpace),Zv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oo).join(`
`)),o=sh(o),o=Uf(o,t),o=Nf(o,t),a=sh(a),a=Uf(a,t),a=Nf(a,t),o=Ff(o),a=Ff(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=w+g+o,y=w+m+a,P=If(s,s.VERTEX_SHADER,M),A=If(s,s.FRAGMENT_SHADER,y);s.attachShader(v,P),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(C){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(v).trim(),H=s.getShaderInfoLog(P).trim(),W=s.getShaderInfoLog(A).trim(),J=!0,N=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,P,A);else{let j=Lf(s,P,"vertex"),G=Lf(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+j+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(H===""||W==="")&&(N=!1);N&&(C.diagnostics={runnable:J,programLog:O,vertexShader:{log:H,prefix:g},fragmentShader:{log:W,prefix:m}})}s.deleteShader(P),s.deleteShader(A),E=new vr(s,v),S=$v(s,v)}let E;this.getUniforms=function(){return E===void 0&&T(this),E};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,Vv)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=A,this}var hb=0,rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new oh(e),t.set(e,n)),n}},oh=class{constructor(e){this.id=hb++,this.code=e,this.usedTimes=0}};function ub(i,e,t,n,s,r,o){let a=new Pa,c=new rh,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,_,C,O,H){let W=O.fog,J=H.geometry,N=S.isMeshStandardMaterial?O.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||N),G=j&&j.mapping===sc?j.image.height:null,q=x[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let oe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,$=oe!==void 0?oe.length:0,le=0;J.morphAttributes.position!==void 0&&(le=1),J.morphAttributes.normal!==void 0&&(le=2),J.morphAttributes.color!==void 0&&(le=3);let Le,K,de,xe;if(q){let nt=pi[q];Le=nt.vertexShader,K=nt.fragmentShader}else Le=S.vertexShader,K=S.fragmentShader,c.update(S),de=c.getVertexShaderID(S),xe=c.getFragmentShaderID(S);let fe=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Xe=H.isInstancedMesh===!0,qe=H.isBatchedMesh===!0,it=!!S.map,pe=!!S.matcap,Ee=!!j,z=!!S.aoMap,Ke=!!S.lightMap,we=!!S.bumpMap,We=!!S.normalMap,Te=!!S.displacementMap,et=!!S.emissiveMap,Be=!!S.metalnessMap,F=!!S.roughnessMap,I=S.anisotropy>0,Q=S.clearcoat>0,ue=S.dispersion>0,ve=S.iridescence>0,he=S.sheen>0,Ze=S.transmission>0,Ie=I&&!!S.anisotropyMap,Ue=Q&&!!S.clearcoatMap,tt=Q&&!!S.clearcoatNormalMap,_e=Q&&!!S.clearcoatRoughnessMap,je=ve&&!!S.iridescenceMap,Je=ve&&!!S.iridescenceThicknessMap,$e=he&&!!S.sheenColorMap,X=he&&!!S.sheenRoughnessMap,se=!!S.specularMap,re=!!S.specularColorMap,me=!!S.specularIntensityMap,B=Ze&&!!S.transmissionMap,V=Ze&&!!S.thicknessMap,Z=!!S.gradientMap,ae=!!S.alphaMap,Me=S.alphaTest>0,ye=!!S.alphaHash,Ne=!!S.extensions,rt=ns;S.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(rt=i.toneMapping);let ht={shaderID:q,shaderType:S.type,shaderName:S.name,vertexShader:Le,fragmentShader:K,defines:S.defines,customVertexShaderID:de,customFragmentShaderID:xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:qe,batchingColor:qe&&H._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&H.instanceColor!==null,instancingMorph:Xe&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:dn,alphaToCoverage:!!S.alphaToCoverage,map:it,matcap:pe,envMap:Ee,envMapMode:Ee&&j.mapping,envMapCubeUVHeight:G,aoMap:z,lightMap:Ke,bumpMap:we,normalMap:We,displacementMap:f&&Te,emissiveMap:et,normalMapObjectSpace:We&&S.normalMapType===fm,normalMapTangentSpace:We&&S.normalMapType===qh,metalnessMap:Be,roughnessMap:F,anisotropy:I,anisotropyMap:Ie,clearcoat:Q,clearcoatMap:Ue,clearcoatNormalMap:tt,clearcoatRoughnessMap:_e,dispersion:ue,iridescence:ve,iridescenceMap:je,iridescenceThicknessMap:Je,sheen:he,sheenColorMap:$e,sheenRoughnessMap:X,specularMap:se,specularColorMap:re,specularIntensityMap:me,transmission:Ze,transmissionMap:B,thicknessMap:V,gradientMap:Z,opaque:S.transparent===!1&&S.blending===mr&&S.alphaToCoverage===!1,alphaMap:ae,alphaTest:Me,alphaHash:ye,combine:S.combine,mapUv:it&&v(S.map.channel),aoMapUv:z&&v(S.aoMap.channel),lightMapUv:Ke&&v(S.lightMap.channel),bumpMapUv:we&&v(S.bumpMap.channel),normalMapUv:We&&v(S.normalMap.channel),displacementMapUv:Te&&v(S.displacementMap.channel),emissiveMapUv:et&&v(S.emissiveMap.channel),metalnessMapUv:Be&&v(S.metalnessMap.channel),roughnessMapUv:F&&v(S.roughnessMap.channel),anisotropyMapUv:Ie&&v(S.anisotropyMap.channel),clearcoatMapUv:Ue&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:tt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:X&&v(S.sheenRoughnessMap.channel),specularMapUv:se&&v(S.specularMap.channel),specularColorMapUv:re&&v(S.specularColorMap.channel),specularIntensityMapUv:me&&v(S.specularIntensityMap.channel),transmissionMapUv:B&&v(S.transmissionMap.channel),thicknessMapUv:V&&v(S.thicknessMap.channel),alphaMapUv:ae&&v(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(We||I),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!J.attributes.uv&&(it||ae),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:be,skinning:H.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:le,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,decodeVideoTexture:it&&S.map.isVideoTexture===!0&&bt.getTransfer(S.map.colorSpace)===Lt,decodeVideoTextureEmissive:et&&S.emissiveMap.isVideoTexture===!0&&bt.getTransfer(S.emissiveMap.colorSpace)===Lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Vt,flipSided:S.side===Kt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ne&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&S.extensions.multiDraw===!0||qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function m(S){let _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)_.push(C),_.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(w(_,S),M(_,S),_.push(i.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function w(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function M(S,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let _=x[S.type],C;if(_){let O=pi[_];C=pn.clone(O.uniforms)}else C=S.uniforms;return C}function P(S,_){let C;for(let O=0,H=h.length;O<H;O++){let W=h[O];if(W.cacheKey===_){C=W,++C.usedTimes;break}}return C===void 0&&(C=new lb(i,_,S,r),h.push(C)),C}function A(S){if(--S.usedTimes===0){let _=h.indexOf(S);h[_]=h[h.length-1],h.pop(),S.destroy()}}function T(S){c.remove(S)}function E(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:P,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:E}}function fb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function db(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Bf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,x,v,g){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:v,group:g},i[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=x,m.renderOrder=u.renderOrder,m.z=v,m.group=g),e++,m}function a(u,f,d,x,v,g){let m=o(u,f,d,x,v,g);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):t.push(m)}function c(u,f,d,x,v,g){let m=o(u,f,d,x,v,g);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function l(u,f){t.length>1&&t.sort(u||db),n.length>1&&n.sort(f||Bf),s.length>1&&s.sort(f||Bf)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function pb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new zf,i.set(n,[o])):s>=r.length?(o=new zf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function mb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new De};break;case"SpotLight":t={position:new D,direction:new D,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function gb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var xb=0;function vb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bb(i){let e=new mb,t=gb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new Ve,o=new Ve;function a(l){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,x=0,v=0,g=0,m=0,w=0,M=0,y=0,P=0,A=0,T=0;l.sort(vb);for(let S=0,_=l.length;S<_;S++){let C=l[S],O=C.color,H=C.intensity,W=C.distance,J=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=O.r*H,u+=O.g*H,f+=O.b*H;else if(C.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(C.sh.coefficients[N],H);T++}else if(C.isDirectionalLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=J,n.directionalShadowMatrix[d]=C.shadow.matrix,w++}n.directional[d]=N,d++}else if(C.isSpotLight){let N=e.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy(O).multiplyScalar(H),N.distance=W,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,n.spot[v]=N;let j=C.shadow;if(C.map&&(n.spotLightMap[P]=C.map,P++,j.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[v]=j.matrix,C.castShadow){let G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=J,y++}v++}else if(C.isRectAreaLight){let N=e.get(C);N.color.copy(O).multiplyScalar(H),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=N,g++}else if(C.isPointLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),N.distance=C.distance,N.decay=C.decay,C.castShadow){let j=C.shadow,G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[x]=G,n.pointShadowMap[x]=J,n.pointShadowMatrix[x]=C.shadow.matrix,M++}n.point[x]=N,x++}else if(C.isHemisphereLight){let N=e.get(C);N.skyColor.copy(C.color).multiplyScalar(H),N.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[m]=N,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=He.LTC_FLOAT_1,n.rectAreaLTC2=He.LTC_FLOAT_2):(n.rectAreaLTC1=He.LTC_HALF_1,n.rectAreaLTC2=He.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let E=n.hash;(E.directionalLength!==d||E.pointLength!==x||E.spotLength!==v||E.rectAreaLength!==g||E.hemiLength!==m||E.numDirectionalShadows!==w||E.numPointShadows!==M||E.numSpotShadows!==y||E.numSpotMaps!==P||E.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=g,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,E.directionalLength=d,E.pointLength=x,E.spotLength=v,E.rectAreaLength=g,E.hemiLength=m,E.numDirectionalShadows=w,E.numPointShadows=M,E.numSpotShadows=y,E.numSpotMaps=P,E.numLightProbes=T,n.version=xb++)}function c(l,h){let u=0,f=0,d=0,x=0,v=0,g=h.matrixWorldInverse;for(let m=0,w=l.length;m<w;m++){let M=l[m];if(M.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(M.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(M.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:n}}function kf(i){let e=new bb(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function yb(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new kf(i),e.set(s,[a])):r>=o.length?(a=new kf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Fs=class extends Cn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=um,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ah=class extends Cn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},_b=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mb=`uniform sampler2D shadow_pass;
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
}`;function Sb(i,e,t){let n=new Di,s=new Se,r=new Se,o=new wt,a=new Fs({depthPacking:Ro}),c=new ah,l={},h=t.maxTextureSize,u={[Xn]:Kt,[Kt]:Xn,[Vt]:Vt},f=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:_b,fragmentShader:Mb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new Ct;x.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ge(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tc;let m=this.type;this.render=function(A,T,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let S=i.getRenderTarget(),_=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),O=i.state;O.setBlending(an),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=m!==Ri&&this.type===Ri,W=m===Ri&&this.type!==Ri;for(let J=0,N=A.length;J<N;J++){let j=A[J],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let q=G.getFrameExtents();if(s.multiply(q),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,G.mapSize.y=r.y)),G.map===null||H===!0||W===!0){let $=this.type!==Ri?{minFilter:cn,magFilter:cn}:{};G.map!==null&&G.map.dispose(),G.map=new Yt(s.x,s.y,$),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let oe=G.getViewportCount();for(let $=0;$<oe;$++){let le=G.getViewport($);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),O.viewport(o),G.updateMatrices(j,$),n=G.getFrustum(),y(T,E,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===Ri&&w(G,E),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(S,_,C)};function w(A,T){let E=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Yt(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,E,f,v,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,E,d,v,null)}function M(A,T,E,S){let _=null,C=E.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)_=C;else if(_=E.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let O=_.uuid,H=T.uuid,W=l[O];W===void 0&&(W={},l[O]=W);let J=W[H];J===void 0&&(J=_.clone(),W[H]=J,T.addEventListener("dispose",P)),_=J}if(_.visible=T.visible,_.wireframe=T.wireframe,S===Ri?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:u[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,E.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let O=i.properties.get(_);O.light=E}return _}function y(A,T,E,S,_){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===Ri)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,A.matrixWorld);let H=e.update(A),W=A.material;if(Array.isArray(W)){let J=H.groups;for(let N=0,j=J.length;N<j;N++){let G=J[N],q=W[G.materialIndex];if(q&&q.visible){let oe=M(A,q,S,_);A.onBeforeShadow(i,A,T,E,H,oe,G),i.renderBufferDirect(E,null,H,oe,A,G),A.onAfterShadow(i,A,T,E,H,oe,G)}}}else if(W.visible){let J=M(A,W,S,_);A.onBeforeShadow(i,A,T,E,H,J,null),i.renderBufferDirect(E,null,H,J,A,null),A.onAfterShadow(i,A,T,E,H,J,null)}}let O=A.children;for(let H=0,W=O.length;H<W;H++)y(O[H],T,E,S,_)}function P(A){A.target.removeEventListener("dispose",P);for(let E in l){let S=l[E],_=A.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}var Eb={[pl]:ml,[gl]:bl,[xl]:yl,[br]:vl,[ml]:pl,[bl]:gl,[yl]:xl,[vl]:br};function wb(i,e){function t(){let B=!1,V=new wt,Z=null,ae=new wt(0,0,0,0);return{setMask:function(Me){Z!==Me&&!B&&(i.colorMask(Me,Me,Me,Me),Z=Me)},setLocked:function(Me){B=Me},setClear:function(Me,ye,Ne,rt,ht){ht===!0&&(Me*=rt,ye*=rt,Ne*=rt),V.set(Me,ye,Ne,rt),ae.equals(V)===!1&&(i.clearColor(Me,ye,Ne,rt),ae.copy(V))},reset:function(){B=!1,Z=null,ae.set(-1,0,0,0)}}}function n(){let B=!1,V=!1,Z=null,ae=null,Me=null;return{setReversed:function(ye){if(V!==ye){let Ne=e.get("EXT_clip_control");V?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);let rt=Me;Me=null,this.setClear(rt)}V=ye},getReversed:function(){return V},setTest:function(ye){ye?fe(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(ye){Z!==ye&&!B&&(i.depthMask(ye),Z=ye)},setFunc:function(ye){if(V&&(ye=Eb[ye]),ae!==ye){switch(ye){case pl:i.depthFunc(i.NEVER);break;case ml:i.depthFunc(i.ALWAYS);break;case gl:i.depthFunc(i.LESS);break;case br:i.depthFunc(i.LEQUAL);break;case xl:i.depthFunc(i.EQUAL);break;case vl:i.depthFunc(i.GEQUAL);break;case bl:i.depthFunc(i.GREATER);break;case yl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=ye}},setLocked:function(ye){B=ye},setClear:function(ye){Me!==ye&&(V&&(ye=1-ye),i.clearDepth(ye),Me=ye)},reset:function(){B=!1,Z=null,ae=null,Me=null,V=!1}}}function s(){let B=!1,V=null,Z=null,ae=null,Me=null,ye=null,Ne=null,rt=null,ht=null;return{setTest:function(nt){B||(nt?fe(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(nt){V!==nt&&!B&&(i.stencilMask(nt),V=nt)},setFunc:function(nt,Pt,St){(Z!==nt||ae!==Pt||Me!==St)&&(i.stencilFunc(nt,Pt,St),Z=nt,ae=Pt,Me=St)},setOp:function(nt,Pt,St){(ye!==nt||Ne!==Pt||rt!==St)&&(i.stencilOp(nt,Pt,St),ye=nt,Ne=Pt,rt=St)},setLocked:function(nt){B=nt},setClear:function(nt){ht!==nt&&(i.clearStencil(nt),ht=nt)},reset:function(){B=!1,V=null,Z=null,ae=null,Me=null,ye=null,Ne=null,rt=null,ht=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],x=null,v=!1,g=null,m=null,w=null,M=null,y=null,P=null,A=null,T=new De(0,0,0),E=0,S=!1,_=null,C=null,O=null,H=null,W=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,j=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=j>=2);let q=null,oe={},$=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),Le=new wt().fromArray($),K=new wt().fromArray(le);function de(B,V,Z,ae){let Me=new Uint8Array(4),ye=i.createTexture();i.bindTexture(B,ye),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<Z;Ne++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(V,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(V+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return ye}let xe={};xe[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(i.DEPTH_TEST),o.setFunc(br),we(!1),We(Hu),fe(i.CULL_FACE),z(an);function fe(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function be(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Xe(B,V){return u[B]!==V?(i.bindFramebuffer(B,V),u[B]=V,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=V),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=V),!0):!1}function qe(B,V){let Z=d,ae=!1;if(B){Z=f.get(V),Z===void 0&&(Z=[],f.set(V,Z));let Me=B.textures;if(Z.length!==Me.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,Ne=Me.length;ye<Ne;ye++)Z[ye]=i.COLOR_ATTACHMENT0+ye;Z.length=Me.length,ae=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ae=!0);ae&&i.drawBuffers(Z)}function it(B){return x!==B?(i.useProgram(B),x=B,!0):!1}let pe={[Vn]:i.FUNC_ADD,[qp]:i.FUNC_SUBTRACT,[Yp]:i.FUNC_REVERSE_SUBTRACT};pe[jp]=i.MIN,pe[Zp]=i.MAX;let Ee={[Nr]:i.ZERO,[Kp]:i.ONE,[Jp]:i.SRC_COLOR,[fl]:i.SRC_ALPHA,[tm]:i.SRC_ALPHA_SATURATE,[ic]:i.DST_COLOR,[nc]:i.DST_ALPHA,[$p]:i.ONE_MINUS_SRC_COLOR,[dl]:i.ONE_MINUS_SRC_ALPHA,[em]:i.ONE_MINUS_DST_COLOR,[Qp]:i.ONE_MINUS_DST_ALPHA,[nm]:i.CONSTANT_COLOR,[im]:i.ONE_MINUS_CONSTANT_COLOR,[sm]:i.CONSTANT_ALPHA,[rm]:i.ONE_MINUS_CONSTANT_ALPHA};function z(B,V,Z,ae,Me,ye,Ne,rt,ht,nt){if(B===an){v===!0&&(be(i.BLEND),v=!1);return}if(v===!1&&(fe(i.BLEND),v=!0),B!==Lh){if(B!==g||nt!==S){if((m!==Vn||y!==Vn)&&(i.blendEquation(i.FUNC_ADD),m=Vn,y=Vn),nt)switch(B){case mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gi:i.blendFunc(i.ONE,i.ONE);break;case Gu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Gu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}w=null,M=null,P=null,A=null,T.set(0,0,0),E=0,g=B,S=nt}return}Me=Me||V,ye=ye||Z,Ne=Ne||ae,(V!==m||Me!==y)&&(i.blendEquationSeparate(pe[V],pe[Me]),m=V,y=Me),(Z!==w||ae!==M||ye!==P||Ne!==A)&&(i.blendFuncSeparate(Ee[Z],Ee[ae],Ee[ye],Ee[Ne]),w=Z,M=ae,P=ye,A=Ne),(rt.equals(T)===!1||ht!==E)&&(i.blendColor(rt.r,rt.g,rt.b,ht),T.copy(rt),E=ht),g=B,S=!1}function Ke(B,V){B.side===Vt?be(i.CULL_FACE):fe(i.CULL_FACE);let Z=B.side===Kt;V&&(Z=!Z),we(Z),B.blending===mr&&B.transparent===!1?z(an):z(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let ae=B.stencilWrite;a.setTest(ae),ae&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),et(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function we(B){_!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),_=B)}function We(B){B!==Wp?(fe(i.CULL_FACE),B!==C&&(B===Hu?i.cullFace(i.BACK):B===Xp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),C=B}function Te(B){B!==O&&(N&&i.lineWidth(B),O=B)}function et(B,V,Z){B?(fe(i.POLYGON_OFFSET_FILL),(H!==V||W!==Z)&&(i.polygonOffset(V,Z),H=V,W=Z)):be(i.POLYGON_OFFSET_FILL)}function Be(B){B?fe(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function F(B){B===void 0&&(B=i.TEXTURE0+J-1),q!==B&&(i.activeTexture(B),q=B)}function I(B,V,Z){Z===void 0&&(q===null?Z=i.TEXTURE0+J-1:Z=q);let ae=oe[Z];ae===void 0&&(ae={type:void 0,texture:void 0},oe[Z]=ae),(ae.type!==B||ae.texture!==V)&&(q!==Z&&(i.activeTexture(Z),q=Z),i.bindTexture(B,V||xe[B]),ae.type=B,ae.texture=V)}function Q(){let B=oe[q];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ue(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ze(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function je(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Je(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $e(B){Le.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Le.copy(B))}function X(B){K.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),K.copy(B))}function se(B,V){let Z=l.get(V);Z===void 0&&(Z=new WeakMap,l.set(V,Z));let ae=Z.get(B);ae===void 0&&(ae=i.getUniformBlockIndex(V,B.name),Z.set(B,ae))}function re(B,V){let ae=l.get(V).get(B);c.get(V)!==ae&&(i.uniformBlockBinding(V,ae,B.__bindingPointIndex),c.set(V,ae))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},q=null,oe={},u={},f=new WeakMap,d=[],x=null,v=!1,g=null,m=null,w=null,M=null,y=null,P=null,A=null,T=new De(0,0,0),E=0,S=!1,_=null,C=null,O=null,H=null,W=null,Le.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:fe,disable:be,bindFramebuffer:Xe,drawBuffers:qe,useProgram:it,setBlending:z,setMaterial:Ke,setFlipSided:we,setCullFace:We,setLineWidth:Te,setPolygonOffset:et,setScissorTest:Be,activeTexture:F,bindTexture:I,unbindTexture:Q,compressedTexImage2D:ue,compressedTexImage3D:ve,texImage2D:je,texImage3D:Je,updateUBOMapping:se,uniformBlockBinding:re,texStorage2D:tt,texStorage3D:_e,texSubImage2D:he,texSubImage3D:Ze,compressedTexSubImage2D:Ie,compressedTexSubImage3D:Ue,scissor:$e,viewport:X,reset:me}}function Hf(i,e,t,n){let s=Tb(n);switch(t){case vd:return i*e;case yd:return i*e;case _d:return i*e*2;case To:return i*e/s.components*s.byteLength;case Vh:return i*e/s.components*s.byteLength;case Md:return i*e*2/s.components*s.byteLength;case Wh:return i*e*2/s.components*s.byteLength;case bd:return i*e*3/s.components*s.byteLength;case En:return i*e*4/s.components*s.byteLength;case Xh:return i*e*4/s.components*s.byteLength;case Ma:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ea:case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case El:case Tl:return Math.max(i,16)*Math.max(e,8)/4;case Sl:case wl:return Math.max(i,8)*Math.max(e,8)/2;case Al:case Rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case kl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ta:case Wl:case Xl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Sd:case ql:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Yl:case jl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tb(i){switch(i){case ai:case md:return{byteLength:1,components:1};case go:case gd:case en:return{byteLength:2,components:1};case Hh:case Gh:return{byteLength:2,components:4};case Ns:case kh:case An:return{byteLength:4,components:1};case xd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ab(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Se,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(F,I){return d?new OffscreenCanvas(F,I):xo("canvas")}function v(F,I,Q){let ue=1,ve=Be(F);if((ve.width>Q||ve.height>Q)&&(ue=Q/Math.max(ve.width,ve.height)),ue<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let he=Math.floor(ue*ve.width),Ze=Math.floor(ue*ve.height);u===void 0&&(u=x(he,Ze));let Ie=I?x(he,Ze):u;return Ie.width=he,Ie.height=Ze,Ie.getContext("2d").drawImage(F,0,0,he,Ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+he+"x"+Ze+")."),Ie}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),F;return F}function g(F){return F.generateMipmaps}function m(F){i.generateMipmap(F)}function w(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(F,I,Q,ue,ve=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let he=I;if(I===i.RED&&(Q===i.FLOAT&&(he=i.R32F),Q===i.HALF_FLOAT&&(he=i.R16F),Q===i.UNSIGNED_BYTE&&(he=i.R8)),I===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(he=i.R8UI),Q===i.UNSIGNED_SHORT&&(he=i.R16UI),Q===i.UNSIGNED_INT&&(he=i.R32UI),Q===i.BYTE&&(he=i.R8I),Q===i.SHORT&&(he=i.R16I),Q===i.INT&&(he=i.R32I)),I===i.RG&&(Q===i.FLOAT&&(he=i.RG32F),Q===i.HALF_FLOAT&&(he=i.RG16F),Q===i.UNSIGNED_BYTE&&(he=i.RG8)),I===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(he=i.RG8UI),Q===i.UNSIGNED_SHORT&&(he=i.RG16UI),Q===i.UNSIGNED_INT&&(he=i.RG32UI),Q===i.BYTE&&(he=i.RG8I),Q===i.SHORT&&(he=i.RG16I),Q===i.INT&&(he=i.RG32I)),I===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(he=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(he=i.RGB16UI),Q===i.UNSIGNED_INT&&(he=i.RGB32UI),Q===i.BYTE&&(he=i.RGB8I),Q===i.SHORT&&(he=i.RGB16I),Q===i.INT&&(he=i.RGB32I)),I===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(he=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(he=i.RGBA16UI),Q===i.UNSIGNED_INT&&(he=i.RGBA32UI),Q===i.BYTE&&(he=i.RGBA8I),Q===i.SHORT&&(he=i.RGBA16I),Q===i.INT&&(he=i.RGBA32I)),I===i.RGB&&Q===i.UNSIGNED_INT_5_9_9_9_REV&&(he=i.RGB9_E5),I===i.RGBA){let Ze=ve?oc:bt.getTransfer(ue);Q===i.FLOAT&&(he=i.RGBA32F),Q===i.HALF_FLOAT&&(he=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(he=Ze===Lt?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function y(F,I){let Q;return F?I===null||I===Ns||I===is?Q=i.DEPTH24_STENCIL8:I===An?Q=i.DEPTH32F_STENCIL8:I===go&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===Ns||I===is?Q=i.DEPTH_COMPONENT24:I===An?Q=i.DEPTH_COMPONENT32F:I===go&&(Q=i.DEPTH_COMPONENT16),Q}function P(F,I){return g(F)===!0||F.isFramebufferTexture&&F.minFilter!==cn&&F.minFilter!==Zt?Math.log2(Math.max(I.width,I.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?I.mipmaps.length:1}function A(F){let I=F.target;I.removeEventListener("dispose",A),E(I),I.isVideoTexture&&h.delete(I)}function T(F){let I=F.target;I.removeEventListener("dispose",T),_(I)}function E(F){let I=n.get(F);if(I.__webglInit===void 0)return;let Q=F.source,ue=f.get(Q);if(ue){let ve=ue[I.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&S(F),Object.keys(ue).length===0&&f.delete(Q)}n.remove(F)}function S(F){let I=n.get(F);i.deleteTexture(I.__webglTexture);let Q=F.source,ue=f.get(Q);delete ue[I.__cacheKey],o.memory.textures--}function _(F){let I=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(I.__webglFramebuffer[ue]))for(let ve=0;ve<I.__webglFramebuffer[ue].length;ve++)i.deleteFramebuffer(I.__webglFramebuffer[ue][ve]);else i.deleteFramebuffer(I.__webglFramebuffer[ue]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[ue])}else{if(Array.isArray(I.__webglFramebuffer))for(let ue=0;ue<I.__webglFramebuffer.length;ue++)i.deleteFramebuffer(I.__webglFramebuffer[ue]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let ue=0;ue<I.__webglColorRenderbuffer.length;ue++)I.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[ue]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let Q=F.textures;for(let ue=0,ve=Q.length;ue<ve;ue++){let he=n.get(Q[ue]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),o.memory.textures--),n.remove(Q[ue])}n.remove(F)}let C=0;function O(){C=0}function H(){let F=C;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),C+=1,F}function W(F){let I=[];return I.push(F.wrapS),I.push(F.wrapT),I.push(F.wrapR||0),I.push(F.magFilter),I.push(F.minFilter),I.push(F.anisotropy),I.push(F.internalFormat),I.push(F.format),I.push(F.type),I.push(F.generateMipmaps),I.push(F.premultiplyAlpha),I.push(F.flipY),I.push(F.unpackAlignment),I.push(F.colorSpace),I.join()}function J(F,I){let Q=n.get(F);if(F.isVideoTexture&&Te(F),F.isRenderTargetTexture===!1&&F.version>0&&Q.__version!==F.version){let ue=F.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(Q,F,I);return}}t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+I)}function N(F,I){let Q=n.get(F);if(F.version>0&&Q.__version!==F.version){K(Q,F,I);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+I)}function j(F,I){let Q=n.get(F);if(F.version>0&&Q.__version!==F.version){K(Q,F,I);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+I)}function G(F,I){let Q=n.get(F);if(F.version>0&&Q.__version!==F.version){de(Q,F,I);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+I)}let q={[ln]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[mo]:i.MIRRORED_REPEAT},oe={[cn]:i.NEAREST,[zh]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[Zt]:i.LINEAR,[ao]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},$={[dm]:i.NEVER,[bm]:i.ALWAYS,[pm]:i.LESS,[wd]:i.LEQUAL,[mm]:i.EQUAL,[vm]:i.GEQUAL,[gm]:i.GREATER,[xm]:i.NOTEQUAL};function le(F,I){if(I.type===An&&e.has("OES_texture_float_linear")===!1&&(I.magFilter===Zt||I.magFilter===ao||I.magFilter===fr||I.magFilter===oi||I.minFilter===Zt||I.minFilter===ao||I.minFilter===fr||I.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,q[I.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,q[I.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,q[I.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,oe[I.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,oe[I.minFilter]),I.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,$[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===cn||I.minFilter!==fr&&I.minFilter!==oi||I.type===An&&e.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){let Q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function Le(F,I){let Q=!1;F.__webglInit===void 0&&(F.__webglInit=!0,I.addEventListener("dispose",A));let ue=I.source,ve=f.get(ue);ve===void 0&&(ve={},f.set(ue,ve));let he=W(I);if(he!==F.__cacheKey){ve[he]===void 0&&(ve[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),ve[he].usedTimes++;let Ze=ve[F.__cacheKey];Ze!==void 0&&(ve[F.__cacheKey].usedTimes--,Ze.usedTimes===0&&S(I)),F.__cacheKey=he,F.__webglTexture=ve[he].texture}return Q}function K(F,I,Q){let ue=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(ue=i.TEXTURE_3D);let ve=Le(F,I),he=I.source;t.bindTexture(ue,F.__webglTexture,i.TEXTURE0+Q);let Ze=n.get(he);if(he.version!==Ze.__version||ve===!0){t.activeTexture(i.TEXTURE0+Q);let Ie=bt.getPrimaries(bt.workingColorSpace),Ue=I.colorSpace===mi?null:bt.getPrimaries(I.colorSpace),tt=I.colorSpace===mi||Ie===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let _e=v(I.image,!1,s.maxTextureSize);_e=et(I,_e);let je=r.convert(I.format,I.colorSpace),Je=r.convert(I.type),$e=M(I.internalFormat,je,Je,I.colorSpace,I.isVideoTexture);le(ue,I);let X,se=I.mipmaps,re=I.isVideoTexture!==!0,me=Ze.__version===void 0||ve===!0,B=he.dataReady,V=P(I,_e);if(I.isDepthTexture)$e=y(I.format===ss,I.type),me&&(re?t.texStorage2D(i.TEXTURE_2D,1,$e,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,$e,_e.width,_e.height,0,je,Je,null));else if(I.isDataTexture)if(se.length>0){re&&me&&t.texStorage2D(i.TEXTURE_2D,V,$e,se[0].width,se[0].height);for(let Z=0,ae=se.length;Z<ae;Z++)X=se[Z],re?B&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,X.width,X.height,je,Je,X.data):t.texImage2D(i.TEXTURE_2D,Z,$e,X.width,X.height,0,je,Je,X.data);I.generateMipmaps=!1}else re?(me&&t.texStorage2D(i.TEXTURE_2D,V,$e,_e.width,_e.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e.width,_e.height,je,Je,_e.data)):t.texImage2D(i.TEXTURE_2D,0,$e,_e.width,_e.height,0,je,Je,_e.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){re&&me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,V,$e,se[0].width,se[0].height,_e.depth);for(let Z=0,ae=se.length;Z<ae;Z++)if(X=se[Z],I.format!==En)if(je!==null)if(re){if(B)if(I.layerUpdates.size>0){let Me=Hf(X.width,X.height,I.format,I.type);for(let ye of I.layerUpdates){let Ne=X.data.subarray(ye*Me/X.data.BYTES_PER_ELEMENT,(ye+1)*Me/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,ye,X.width,X.height,1,je,Ne)}I.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,X.width,X.height,_e.depth,je,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,$e,X.width,X.height,_e.depth,0,X.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,X.width,X.height,_e.depth,je,Je,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,$e,X.width,X.height,_e.depth,0,je,Je,X.data)}else{re&&me&&t.texStorage2D(i.TEXTURE_2D,V,$e,se[0].width,se[0].height);for(let Z=0,ae=se.length;Z<ae;Z++)X=se[Z],I.format!==En?je!==null?re?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,X.width,X.height,je,X.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,$e,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?B&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,X.width,X.height,je,Je,X.data):t.texImage2D(i.TEXTURE_2D,Z,$e,X.width,X.height,0,je,Je,X.data)}else if(I.isDataArrayTexture)if(re){if(me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,V,$e,_e.width,_e.height,_e.depth),B)if(I.layerUpdates.size>0){let Z=Hf(_e.width,_e.height,I.format,I.type);for(let ae of I.layerUpdates){let Me=_e.data.subarray(ae*Z/_e.data.BYTES_PER_ELEMENT,(ae+1)*Z/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,_e.width,_e.height,1,je,Je,Me)}I.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,je,Je,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,$e,_e.width,_e.height,_e.depth,0,je,Je,_e.data);else if(I.isData3DTexture)re?(me&&t.texStorage3D(i.TEXTURE_3D,V,$e,_e.width,_e.height,_e.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,je,Je,_e.data)):t.texImage3D(i.TEXTURE_3D,0,$e,_e.width,_e.height,_e.depth,0,je,Je,_e.data);else if(I.isFramebufferTexture){if(me)if(re)t.texStorage2D(i.TEXTURE_2D,V,$e,_e.width,_e.height);else{let Z=_e.width,ae=_e.height;for(let Me=0;Me<V;Me++)t.texImage2D(i.TEXTURE_2D,Me,$e,Z,ae,0,je,Je,null),Z>>=1,ae>>=1}}else if(se.length>0){if(re&&me){let Z=Be(se[0]);t.texStorage2D(i.TEXTURE_2D,V,$e,Z.width,Z.height)}for(let Z=0,ae=se.length;Z<ae;Z++)X=se[Z],re?B&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,je,Je,X):t.texImage2D(i.TEXTURE_2D,Z,$e,je,Je,X);I.generateMipmaps=!1}else if(re){if(me){let Z=Be(_e);t.texStorage2D(i.TEXTURE_2D,V,$e,Z.width,Z.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,je,Je,_e)}else t.texImage2D(i.TEXTURE_2D,0,$e,je,Je,_e);g(I)&&m(ue),Ze.__version=he.version,I.onUpdate&&I.onUpdate(I)}F.__version=I.version}function de(F,I,Q){if(I.image.length!==6)return;let ue=Le(F,I),ve=I.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+Q);let he=n.get(ve);if(ve.version!==he.__version||ue===!0){t.activeTexture(i.TEXTURE0+Q);let Ze=bt.getPrimaries(bt.workingColorSpace),Ie=I.colorSpace===mi?null:bt.getPrimaries(I.colorSpace),Ue=I.colorSpace===mi||Ze===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let tt=I.isCompressedTexture||I.image[0].isCompressedTexture,_e=I.image[0]&&I.image[0].isDataTexture,je=[];for(let ae=0;ae<6;ae++)!tt&&!_e?je[ae]=v(I.image[ae],!0,s.maxCubemapSize):je[ae]=_e?I.image[ae].image:I.image[ae],je[ae]=et(I,je[ae]);let Je=je[0],$e=r.convert(I.format,I.colorSpace),X=r.convert(I.type),se=M(I.internalFormat,$e,X,I.colorSpace),re=I.isVideoTexture!==!0,me=he.__version===void 0||ue===!0,B=ve.dataReady,V=P(I,Je);le(i.TEXTURE_CUBE_MAP,I);let Z;if(tt){re&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,V,se,Je.width,Je.height);for(let ae=0;ae<6;ae++){Z=je[ae].mipmaps;for(let Me=0;Me<Z.length;Me++){let ye=Z[Me];I.format!==En?$e!==null?re?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,0,0,ye.width,ye.height,$e,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,se,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,0,0,ye.width,ye.height,$e,X,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,se,ye.width,ye.height,0,$e,X,ye.data)}}}else{if(Z=I.mipmaps,re&&me){Z.length>0&&V++;let ae=Be(je[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,V,se,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(_e){re?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,je[ae].width,je[ae].height,$e,X,je[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,se,je[ae].width,je[ae].height,0,$e,X,je[ae].data);for(let Me=0;Me<Z.length;Me++){let Ne=Z[Me].image[ae].image;re?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,0,0,Ne.width,Ne.height,$e,X,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,se,Ne.width,Ne.height,0,$e,X,Ne.data)}}else{re?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,$e,X,je[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,se,$e,X,je[ae]);for(let Me=0;Me<Z.length;Me++){let ye=Z[Me];re?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,0,0,$e,X,ye.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,se,$e,X,ye.image[ae])}}}g(I)&&m(i.TEXTURE_CUBE_MAP),he.__version=ve.version,I.onUpdate&&I.onUpdate(I)}F.__version=I.version}function xe(F,I,Q,ue,ve,he){let Ze=r.convert(Q.format,Q.colorSpace),Ie=r.convert(Q.type),Ue=M(Q.internalFormat,Ze,Ie,Q.colorSpace),tt=n.get(I),_e=n.get(Q);if(_e.__renderTarget=I,!tt.__hasExternalTextures){let je=Math.max(1,I.width>>he),Je=Math.max(1,I.height>>he);ve===i.TEXTURE_3D||ve===i.TEXTURE_2D_ARRAY?t.texImage3D(ve,he,Ue,je,Je,I.depth,0,Ze,Ie,null):t.texImage2D(ve,he,Ue,je,Je,0,Ze,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),We(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,ve,_e.__webglTexture,0,we(I)):(ve===i.TEXTURE_2D||ve>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,ve,_e.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(F,I,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,F),I.depthBuffer){let ue=I.depthTexture,ve=ue&&ue.isDepthTexture?ue.type:null,he=y(I.stencilBuffer,ve),Ze=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=we(I);We(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,he,I.width,I.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,he,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,he,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ze,i.RENDERBUFFER,F)}else{let ue=I.textures;for(let ve=0;ve<ue.length;ve++){let he=ue[ve],Ze=r.convert(he.format,he.colorSpace),Ie=r.convert(he.type),Ue=M(he.internalFormat,Ze,Ie,he.colorSpace),tt=we(I);Q&&We(I)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,Ue,I.width,I.height):We(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,Ue,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,Ue,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(F,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ue=n.get(I.depthTexture);ue.__renderTarget=I,(!ue.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),J(I.depthTexture,0);let ve=ue.__webglTexture,he=we(I);if(I.depthTexture.format===gr)We(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ve,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ve,0);else if(I.depthTexture.format===ss)We(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ve,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Xe(F){let I=n.get(F),Q=F.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==F.depthTexture){let ue=F.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),ue){let ve=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,ue.removeEventListener("dispose",ve)};ue.addEventListener("dispose",ve),I.__depthDisposeCallback=ve}I.__boundDepthTexture=ue}if(F.depthTexture&&!I.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");be(I.__webglFramebuffer,F)}else if(Q){I.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[ue]),I.__webglDepthbuffer[ue]===void 0)I.__webglDepthbuffer[ue]=i.createRenderbuffer(),fe(I.__webglDepthbuffer[ue],F,!1);else{let ve=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=I.__webglDepthbuffer[ue];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,he)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),fe(I.__webglDepthbuffer,F,!1);else{let ue=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,ve)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(F,I,Q){let ue=n.get(F);I!==void 0&&xe(ue.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&Xe(F)}function it(F){let I=F.texture,Q=n.get(F),ue=n.get(I);F.addEventListener("dispose",T);let ve=F.textures,he=F.isWebGLCubeRenderTarget===!0,Ze=ve.length>1;if(Ze||(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=I.version,o.memory.textures++),he){Q.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(I.mipmaps&&I.mipmaps.length>0){Q.__webglFramebuffer[Ie]=[];for(let Ue=0;Ue<I.mipmaps.length;Ue++)Q.__webglFramebuffer[Ie][Ue]=i.createFramebuffer()}else Q.__webglFramebuffer[Ie]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ie=0;Ie<I.mipmaps.length;Ie++)Q.__webglFramebuffer[Ie]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Ze)for(let Ie=0,Ue=ve.length;Ie<Ue;Ie++){let tt=n.get(ve[Ie]);tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&We(F)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ie=0;Ie<ve.length;Ie++){let Ue=ve[Ie];Q.__webglColorRenderbuffer[Ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[Ie]);let tt=r.convert(Ue.format,Ue.colorSpace),_e=r.convert(Ue.type),je=M(Ue.internalFormat,tt,_e,Ue.colorSpace,F.isXRRenderTarget===!0),Je=we(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,je,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Q.__webglColorRenderbuffer[Ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(Q.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),le(i.TEXTURE_CUBE_MAP,I);for(let Ie=0;Ie<6;Ie++)if(I.mipmaps&&I.mipmaps.length>0)for(let Ue=0;Ue<I.mipmaps.length;Ue++)xe(Q.__webglFramebuffer[Ie][Ue],F,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Ue);else xe(Q.__webglFramebuffer[Ie],F,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);g(I)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ze){for(let Ie=0,Ue=ve.length;Ie<Ue;Ie++){let tt=ve[Ie],_e=n.get(tt);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),le(i.TEXTURE_2D,tt),xe(Q.__webglFramebuffer,F,tt,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,0),g(tt)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let Ie=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ie=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ie,ue.__webglTexture),le(Ie,I),I.mipmaps&&I.mipmaps.length>0)for(let Ue=0;Ue<I.mipmaps.length;Ue++)xe(Q.__webglFramebuffer[Ue],F,I,i.COLOR_ATTACHMENT0,Ie,Ue);else xe(Q.__webglFramebuffer,F,I,i.COLOR_ATTACHMENT0,Ie,0);g(I)&&m(Ie),t.unbindTexture()}F.depthBuffer&&Xe(F)}function pe(F){let I=F.textures;for(let Q=0,ue=I.length;Q<ue;Q++){let ve=I[Q];if(g(ve)){let he=w(F),Ze=n.get(ve).__webglTexture;t.bindTexture(he,Ze),m(he),t.unbindTexture()}}}let Ee=[],z=[];function Ke(F){if(F.samples>0){if(We(F)===!1){let I=F.textures,Q=F.width,ue=F.height,ve=i.COLOR_BUFFER_BIT,he=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ze=n.get(F),Ie=I.length>1;if(Ie)for(let Ue=0;Ue<I.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let Ue=0;Ue<I.length;Ue++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ve|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ve|=i.STENCIL_BUFFER_BIT)),Ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ze.__webglColorRenderbuffer[Ue]);let tt=n.get(I[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,Q,ue,0,0,Q,ue,ve,i.NEAREST),c===!0&&(Ee.length=0,z.length=0,Ee.push(i.COLOR_ATTACHMENT0+Ue),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Ee.push(he),z.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ee))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ie)for(let Ue=0;Ue<I.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,Ze.__webglColorRenderbuffer[Ue]);let tt=n.get(I[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&c){let I=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function we(F){return Math.min(s.maxSamples,F.samples)}function We(F){let I=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Te(F){let I=o.render.frame;h.get(F)!==I&&(h.set(F,I),F.update())}function et(F,I){let Q=F.colorSpace,ue=F.format,ve=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Q!==dn&&Q!==mi&&(bt.getTransfer(Q)===Lt?(ue!==En||ve!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),I}function Be(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(l.width=F.naturalWidth||F.width,l.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(l.width=F.displayWidth,l.height=F.displayHeight):(l.width=F.width,l.height=F.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=N,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=qe,this.setupRenderTarget=it,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=We}function Rb(i,e){function t(n,s=mi){let r,o=bt.getTransfer(s);if(n===ai)return i.UNSIGNED_BYTE;if(n===Hh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===md)return i.BYTE;if(n===gd)return i.SHORT;if(n===go)return i.UNSIGNED_SHORT;if(n===kh)return i.INT;if(n===Ns)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===en)return i.HALF_FLOAT;if(n===vd)return i.ALPHA;if(n===bd)return i.RGB;if(n===En)return i.RGBA;if(n===yd)return i.LUMINANCE;if(n===_d)return i.LUMINANCE_ALPHA;if(n===gr)return i.DEPTH_COMPONENT;if(n===ss)return i.DEPTH_STENCIL;if(n===To)return i.RED;if(n===Vh)return i.RED_INTEGER;if(n===Md)return i.RG;if(n===Wh)return i.RG_INTEGER;if(n===Xh)return i.RGBA_INTEGER;if(n===Ma||n===Sa||n===Ea||n===wa)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sl||n===El||n===wl||n===Tl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===Rl||n===Cl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Al||n===Rl)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pl||n===Il||n===Dl||n===Ll||n===Ul||n===Nl||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Hl||n===Gl||n===Vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Il)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ll)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ul)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ol)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ta||n===Wl||n===Xl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ta)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sd||n===ql||n===Yl||n===jl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ta)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ch=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ft=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cb={type:"move"},ho=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),m=this._getHandJoint(l,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;l.inputState.pinching&&f>d+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cb)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ib=`
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

}`,lh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new nn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new It({vertexShader:Pb,fragmentShader:Ib,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ge(new Tt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hh=class extends rs{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,x=null,v=new lh,g=t.getContextAttributes(),m=null,w=null,M=[],y=[],P=new Se,A=null,T=new Qt;T.viewport=new wt;let E=new Qt;E.viewport=new wt;let S=[T,E],_=new ch,C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let de=M[K];return de===void 0&&(de=new ho,M[K]=de),de.getTargetRaySpace()},this.getControllerGrip=function(K){let de=M[K];return de===void 0&&(de=new ho,M[K]=de),de.getGripSpace()},this.getHand=function(K){let de=M[K];return de===void 0&&(de=new ho,M[K]=de),de.getHandSpace()};function H(K){let de=y.indexOf(K.inputSource);if(de===-1)return;let xe=M[de];xe!==void 0&&(xe.update(K.inputSource,K.frame,l||o),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",J);for(let K=0;K<M.length;K++){let de=y[K];de!==null&&(y[K]=null,M[K].disconnect(de))}C=null,O=null,v.reset(),e.setRenderTarget(m),d=null,f=null,u=null,s=null,w=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",W),s.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){let de={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new Yt(d.framebufferWidth,d.framebufferHeight,{format:En,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let de=null,xe=null,fe=null;g.depth&&(fe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=g.stencil?ss:gr,xe=g.stencil?is:Ns);let be={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(be),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Yt(f.textureWidth,f.textureHeight,{format:En,type:ai,depthTexture:new cs(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Le.setContext(s),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(K){for(let de=0;de<K.removed.length;de++){let xe=K.removed[de],fe=y.indexOf(xe);fe>=0&&(y[fe]=null,M[fe].disconnect(xe))}for(let de=0;de<K.added.length;de++){let xe=K.added[de],fe=y.indexOf(xe);if(fe===-1){for(let Xe=0;Xe<M.length;Xe++)if(Xe>=y.length){y.push(xe),fe=Xe;break}else if(y[Xe]===null){y[Xe]=xe,fe=Xe;break}if(fe===-1)break}let be=M[fe];be&&be.connect(xe)}}let N=new D,j=new D;function G(K,de,xe){N.setFromMatrixPosition(de.matrixWorld),j.setFromMatrixPosition(xe.matrixWorld);let fe=N.distanceTo(j),be=de.projectionMatrix.elements,Xe=xe.projectionMatrix.elements,qe=be[14]/(be[10]-1),it=be[14]/(be[10]+1),pe=(be[9]+1)/be[5],Ee=(be[9]-1)/be[5],z=(be[8]-1)/be[0],Ke=(Xe[8]+1)/Xe[0],we=qe*z,We=qe*Ke,Te=fe/(-z+Ke),et=Te*-z;if(de.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(et),K.translateZ(Te),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),be[10]===-1)K.projectionMatrix.copy(de.projectionMatrix),K.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let Be=qe+Te,F=it+Te,I=we-et,Q=We+(fe-et),ue=pe*it/F*Be,ve=Ee*it/F*Be;K.projectionMatrix.makePerspective(I,Q,ue,ve,Be,F),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function q(K,de){de===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(de.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let de=K.near,xe=K.far;v.texture!==null&&(v.depthNear>0&&(de=v.depthNear),v.depthFar>0&&(xe=v.depthFar)),_.near=E.near=T.near=de,_.far=E.far=T.far=xe,(C!==_.near||O!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,O=_.far),T.layers.mask=K.layers.mask|2,E.layers.mask=K.layers.mask|4,_.layers.mask=T.layers.mask|E.layers.mask;let fe=K.parent,be=_.cameras;q(_,fe);for(let Xe=0;Xe<be.length;Xe++)q(be[Xe],fe);be.length===2?G(_,T,E):_.projectionMatrix.copy(T.projectionMatrix),oe(K,_,fe)};function oe(K,de,xe){xe===null?K.matrix.copy(de.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply(de.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(de.projectionMatrix),K.projectionMatrixInverse.copy(de.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Er*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let $=null;function le(K,de){if(h=de.getViewerPose(l||o),x=de,h!==null){let xe=h.views;d!==null&&(e.setRenderTargetFramebuffer(w,d.framebuffer),e.setRenderTarget(w));let fe=!1;xe.length!==_.cameras.length&&(_.cameras.length=0,fe=!0);for(let Xe=0;Xe<xe.length;Xe++){let qe=xe[Xe],it=null;if(d!==null)it=d.getViewport(qe);else{let Ee=u.getViewSubImage(f,qe);it=Ee.viewport,Xe===0&&(e.setRenderTargetTextures(w,Ee.colorTexture,f.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(w))}let pe=S[Xe];pe===void 0&&(pe=new Qt,pe.layers.enable(Xe),pe.viewport=new wt,S[Xe]=pe),pe.matrix.fromArray(qe.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(qe.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(it.x,it.y,it.width,it.height),Xe===0&&(_.matrix.copy(pe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),fe===!0&&_.cameras.push(pe)}let be=s.enabledFeatures;if(be&&be.includes("depth-sensing")){let Xe=u.getDepthInformation(xe[0]);Xe&&Xe.isValid&&Xe.texture&&v.init(e,Xe,s.renderState)}}for(let xe=0;xe<M.length;xe++){let fe=y[xe],be=M[xe];fe!==null&&be!==void 0&&be.update(fe,de,l||o)}$&&$(K,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),x=null}let Le=new Cd;Le.setAnimationLoop(le),this.setAnimationLoop=function(K){$=K},this.dispose=function(){}}},Ds=new qn,Db=new Ve;function Lb(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Rd(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,w,M,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,w,M):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Kt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Kt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let w=e.get(m),M=w.envMap,y=w.envMapRotation;M&&(g.envMap.value=M,Ds.copy(y),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),g.envMapRotation.value.setFromMatrix4(Db.makeRotationFromEuler(Ds)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,w,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Kt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let w=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ub(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,M){let y=M.program;n.uniformBlockBinding(w,y)}function l(w,M){let y=s[w.id];y===void 0&&(x(w),y=h(w),s[w.id]=y,w.addEventListener("dispose",g));let P=M.program;n.updateUBOMapping(w,P);let A=e.render.frame;r[w.id]!==A&&(f(w),r[w.id]=A)}function h(w){let M=u();w.__bindingPointIndex=M;let y=i.createBuffer(),P=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let M=s[w.id],y=w.uniforms,P=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,T=y.length;A<T;A++){let E=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,_=E.length;S<_;S++){let C=E[S];if(d(C,A,S,P)===!0){let O=C.__offset,H=Array.isArray(C.value)?C.value:[C.value],W=0;for(let J=0;J<H.length;J++){let N=H[J],j=v(N);typeof N=="number"||typeof N=="boolean"?(C.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,O+W,C.__data)):N.isMatrix3?(C.__data[0]=N.elements[0],C.__data[1]=N.elements[1],C.__data[2]=N.elements[2],C.__data[3]=0,C.__data[4]=N.elements[3],C.__data[5]=N.elements[4],C.__data[6]=N.elements[5],C.__data[7]=0,C.__data[8]=N.elements[6],C.__data[9]=N.elements[7],C.__data[10]=N.elements[8],C.__data[11]=0):(N.toArray(C.__data,W),W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(w,M,y,P){let A=w.value,T=M+"_"+y;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{let E=P[T];if(typeof A=="number"||typeof A=="boolean"){if(E!==A)return P[T]=A,!0}else if(E.equals(A)===!1)return E.copy(A),!0}return!1}function x(w){let M=w.uniforms,y=0,P=16;for(let T=0,E=M.length;T<E;T++){let S=Array.isArray(M[T])?M[T]:[M[T]];for(let _=0,C=S.length;_<C;_++){let O=S[_],H=Array.isArray(O.value)?O.value:[O.value];for(let W=0,J=H.length;W<J;W++){let N=H[W],j=v(N),G=y%P,q=G%j.boundary,oe=G+q;y+=q,oe!==0&&P-oe<j.storage&&(y+=P-oe),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=j.storage}}}let A=y%P;return A>0&&(y+=P-A),w.__size=y,w.__cache={},this}function v(w){let M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function g(w){let M=w.target;M.removeEventListener("dispose",g);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var Na=class{constructor(e={}){let{canvas:t=Fm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let x=new Uint32Array(4),v=new Int32Array(4),g=null,m=null,w=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this.toneMapping=ns,this.toneMappingExposure=1;let y=this,P=!1,A=0,T=0,E=null,S=-1,_=null,C=new wt,O=new wt,H=null,W=new De(0),J=0,N=t.width,j=t.height,G=1,q=null,oe=null,$=new wt(0,0,N,j),le=new wt(0,0,N,j),Le=!1,K=new Di,de=!1,xe=!1,fe=new Ve,be=new Ve,Xe=new D,qe=new wt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function Ee(){return E===null?G:1}let z=n;function Ke(p,b){return t.getContext(p,b)}try{let p={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ih}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ye,!1),z===null){let b="webgl2";if(z=Ke(b,p),z===null)throw Ke(b)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(p){throw console.error("THREE.WebGLRenderer: "+p.message),p}let we,We,Te,et,Be,F,I,Q,ue,ve,he,Ze,Ie,Ue,tt,_e,je,Je,$e,X,se,re,me,B;function V(){we=new Kx(z),we.init(),re=new Rb(z,we),We=new Wx(z,we,e,re),Te=new wb(z,we),We.reverseDepthBuffer&&f&&Te.buffers.depth.setReversed(!0),et=new Qx(z),Be=new fb,F=new Ab(z,we,Te,Be,We,re,et),I=new qx(y),Q=new Zx(y),ue=new o0(z),me=new Gx(z,ue),ve=new Jx(z,ue,et,me),he=new tv(z,ve,ue,et),$e=new ev(z,We,F),_e=new Xx(Be),Ze=new ub(y,I,Q,we,We,me,_e),Ie=new Lb(y,Be),Ue=new pb,tt=new yb(we),Je=new Hx(y,I,Q,Te,he,d,c),je=new Sb(y,he,We),B=new Ub(z,et,We,Te),X=new Vx(z,we,et),se=new $x(z,we,et),et.programs=Ze.programs,y.capabilities=We,y.extensions=we,y.properties=Be,y.renderLists=Ue,y.shadowMap=je,y.state=Te,y.info=et}V();let Z=new hh(y,z);this.xr=Z,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let p=we.get("WEBGL_lose_context");p&&p.loseContext()},this.forceContextRestore=function(){let p=we.get("WEBGL_lose_context");p&&p.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(p){p!==void 0&&(G=p,this.setSize(N,j,!1))},this.getSize=function(p){return p.set(N,j)},this.setSize=function(p,b,R=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=p,j=b,t.width=Math.floor(p*G),t.height=Math.floor(b*G),R===!0&&(t.style.width=p+"px",t.style.height=b+"px"),this.setViewport(0,0,p,b)},this.getDrawingBufferSize=function(p){return p.set(N*G,j*G).floor()},this.setDrawingBufferSize=function(p,b,R){N=p,j=b,G=R,t.width=Math.floor(p*R),t.height=Math.floor(b*R),this.setViewport(0,0,p,b)},this.getCurrentViewport=function(p){return p.copy(C)},this.getViewport=function(p){return p.copy($)},this.setViewport=function(p,b,R,L){p.isVector4?$.set(p.x,p.y,p.z,p.w):$.set(p,b,R,L),Te.viewport(C.copy($).multiplyScalar(G).round())},this.getScissor=function(p){return p.copy(le)},this.setScissor=function(p,b,R,L){p.isVector4?le.set(p.x,p.y,p.z,p.w):le.set(p,b,R,L),Te.scissor(O.copy(le).multiplyScalar(G).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(p){Te.setScissorTest(Le=p)},this.setOpaqueSort=function(p){q=p},this.setTransparentSort=function(p){oe=p},this.getClearColor=function(p){return p.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(p=!0,b=!0,R=!0){let L=0;if(p){let U=!1;if(E!==null){let k=E.texture.format;U=k===Xh||k===Wh||k===Vh}if(U){let k=E.texture.type,Y=k===ai||k===Ns||k===go||k===is||k===Hh||k===Gh,ne=Je.getClearColor(),ee=Je.getClearAlpha(),te=ne.r,ie=ne.g,ce=ne.b;Y?(x[0]=te,x[1]=ie,x[2]=ce,x[3]=ee,z.clearBufferuiv(z.COLOR,0,x)):(v[0]=te,v[1]=ie,v[2]=ce,v[3]=ee,z.clearBufferiv(z.COLOR,0,v))}else L|=z.COLOR_BUFFER_BIT}b&&(L|=z.DEPTH_BUFFER_BIT),R&&(L|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Ue.dispose(),tt.dispose(),Be.dispose(),I.dispose(),Q.dispose(),he.dispose(),me.dispose(),B.dispose(),Ze.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",ct),Z.removeEventListener("sessionend",$t),bn.stop()};function ae(p){p.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let p=et.autoReset,b=je.enabled,R=je.autoUpdate,L=je.needsUpdate,U=je.type;V(),et.autoReset=p,je.enabled=b,je.autoUpdate=R,je.needsUpdate=L,je.type=U}function ye(p){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",p.statusMessage)}function Ne(p){let b=p.target;b.removeEventListener("dispose",Ne),rt(b)}function rt(p){ht(p),Be.remove(p)}function ht(p){let b=Be.get(p).programs;b!==void 0&&(b.forEach(function(R){Ze.releaseProgram(R)}),p.isShaderMaterial&&Ze.releaseShaderCache(p))}this.renderBufferDirect=function(p,b,R,L,U,k){b===null&&(b=it);let Y=U.isMesh&&U.matrixWorld.determinant()<0,ne=Qe(p,b,R,L,U);Te.setMaterial(L,Y);let ee=R.index,te=1;if(L.wireframe===!0){if(ee=ve.getWireframeAttribute(R),ee===void 0)return;te=2}let ie=R.drawRange,ce=R.attributes.position,Re=ie.start*te,Ce=(ie.start+ie.count)*te;k!==null&&(Re=Math.max(Re,k.start*te),Ce=Math.min(Ce,(k.start+k.count)*te)),ee!==null?(Re=Math.max(Re,0),Ce=Math.min(Ce,ee.count)):ce!=null&&(Re=Math.max(Re,0),Ce=Math.min(Ce,ce.count));let ze=Ce-Re;if(ze<0||ze===1/0)return;me.setup(U,L,ne,R,ee);let Fe,Pe=X;if(ee!==null&&(Fe=ue.get(ee),Pe=se,Pe.setIndex(Fe)),U.isMesh)L.wireframe===!0?(Te.setLineWidth(L.wireframeLinewidth*Ee()),Pe.setMode(z.LINES)):Pe.setMode(z.TRIANGLES);else if(U.isLine){let Ae=L.linewidth;Ae===void 0&&(Ae=1),Te.setLineWidth(Ae*Ee()),U.isLineSegments?Pe.setMode(z.LINES):U.isLineLoop?Pe.setMode(z.LINE_LOOP):Pe.setMode(z.LINE_STRIP)}else U.isPoints?Pe.setMode(z.POINTS):U.isSprite&&Pe.setMode(z.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Pe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))Pe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Ae=U._multiDrawStarts,xt=U._multiDrawCounts,st=U._multiDrawCount,Wt=ee?ue.get(ee).bytesPerElement:1,Rt=Be.get(L).currentProgram.getUniforms();for(let lt=0;lt<st;lt++)Rt.setValue(z,"_gl_DrawID",lt),Pe.render(Ae[lt]/Wt,xt[lt])}else if(U.isInstancedMesh)Pe.renderInstances(Re,ze,U.count);else if(R.isInstancedBufferGeometry){let Ae=R._maxInstanceCount!==void 0?R._maxInstanceCount:1/0,xt=Math.min(R.instanceCount,Ae);Pe.renderInstances(Re,ze,xt)}else Pe.render(Re,ze)};function nt(p,b,R){p.transparent===!0&&p.side===Vt&&p.forceSinglePass===!1?(p.side=Kt,p.needsUpdate=!0,_i(p,b,R),p.side=Xn,p.needsUpdate=!0,_i(p,b,R),p.side=Vt):_i(p,b,R)}this.compile=function(p,b,R=null){R===null&&(R=p),m=tt.get(R),m.init(b),M.push(m),R.traverseVisible(function(U){U.isLight&&U.layers.test(b.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),p!==R&&p.traverseVisible(function(U){U.isLight&&U.layers.test(b.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();let L=new Set;return p.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let k=U.material;if(k)if(Array.isArray(k))for(let Y=0;Y<k.length;Y++){let ne=k[Y];nt(ne,R,U),L.add(ne)}else nt(k,R,U),L.add(k)}),M.pop(),m=null,L},this.compileAsync=function(p,b,R=null){let L=this.compile(p,b,R);return new Promise(U=>{function k(){if(L.forEach(function(Y){Be.get(Y).currentProgram.isReady()&&L.delete(Y)}),L.size===0){U(p);return}setTimeout(k,10)}we.get("KHR_parallel_shader_compile")!==null?k():setTimeout(k,10)})};let Pt=null;function St(p){Pt&&Pt(p)}function ct(){bn.stop()}function $t(){bn.start()}let bn=new Cd;bn.setAnimationLoop(St),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(p){Pt=p,Z.setAnimationLoop(p),p===null?bn.stop():bn.start()},Z.addEventListener("sessionstart",ct),Z.addEventListener("sessionend",$t),this.render=function(p,b){if(b!==void 0&&b.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(b),b=Z.getCamera()),p.isScene===!0&&p.onBeforeRender(y,p,b,E),m=tt.get(p,M.length),m.init(b),M.push(m),be.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),K.setFromProjectionMatrix(be),xe=this.localClippingEnabled,de=_e.init(this.clippingPlanes,xe),g=Ue.get(p,w.length),g.init(),w.push(g),Z.enabled===!0&&Z.isPresenting===!0){let k=y.xr.getDepthSensingMesh();k!==null&&Hn(k,b,-1/0,y.sortObjects)}Hn(p,b,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(q,oe),pe=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,pe&&Je.addToRenderList(g,p),this.info.render.frame++,de===!0&&_e.beginShadows();let R=m.state.shadowsArray;je.render(R,p,b),de===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();let L=g.opaque,U=g.transmissive;if(m.setupLights(),b.isArrayCamera){let k=b.cameras;if(U.length>0)for(let Y=0,ne=k.length;Y<ne;Y++){let ee=k[Y];ws(L,U,p,ee)}pe&&Je.render(p);for(let Y=0,ne=k.length;Y<ne;Y++){let ee=k[Y];qi(g,p,ee,ee.viewport)}}else U.length>0&&ws(L,U,p,b),pe&&Je.render(p),qi(g,p,b);E!==null&&(F.updateMultisampleRenderTarget(E),F.updateRenderTargetMipmap(E)),p.isScene===!0&&p.onAfterRender(y,p,b),me.resetDefaultState(),S=-1,_=null,M.pop(),M.length>0?(m=M[M.length-1],de===!0&&_e.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function Hn(p,b,R,L){if(p.visible===!1)return;if(p.layers.test(b.layers)){if(p.isGroup)R=p.renderOrder;else if(p.isLOD)p.autoUpdate===!0&&p.update(b);else if(p.isLight)m.pushLight(p),p.castShadow&&m.pushShadow(p);else if(p.isSprite){if(!p.frustumCulled||K.intersectsSprite(p)){L&&qe.setFromMatrixPosition(p.matrixWorld).applyMatrix4(be);let Y=he.update(p),ne=p.material;ne.visible&&g.push(p,Y,ne,R,qe.z,null)}}else if((p.isMesh||p.isLine||p.isPoints)&&(!p.frustumCulled||K.intersectsObject(p))){let Y=he.update(p),ne=p.material;if(L&&(p.boundingSphere!==void 0?(p.boundingSphere===null&&p.computeBoundingSphere(),qe.copy(p.boundingSphere.center)):(Y.boundingSphere===null&&Y.computeBoundingSphere(),qe.copy(Y.boundingSphere.center)),qe.applyMatrix4(p.matrixWorld).applyMatrix4(be)),Array.isArray(ne)){let ee=Y.groups;for(let te=0,ie=ee.length;te<ie;te++){let ce=ee[te],Re=ne[ce.materialIndex];Re&&Re.visible&&g.push(p,Y,Re,R,qe.z,ce)}}else ne.visible&&g.push(p,Y,ne,R,qe.z,null)}}let k=p.children;for(let Y=0,ne=k.length;Y<ne;Y++)Hn(k[Y],b,R,L)}function qi(p,b,R,L){let U=p.opaque,k=p.transmissive,Y=p.transparent;m.setupLightsView(R),de===!0&&_e.setGlobalState(y.clippingPlanes,R),L&&Te.viewport(C.copy(L)),U.length>0&&Yi(U,b,R),k.length>0&&Yi(k,b,R),Y.length>0&&Yi(Y,b,R),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function ws(p,b,R,L){if((R.isScene===!0?R.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[L.id]===void 0&&(m.state.transmissionRenderTarget[L.id]=new Yt(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float")?en:ai,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));let k=m.state.transmissionRenderTarget[L.id],Y=L.viewport||C;k.setSize(Y.z,Y.w);let ne=y.getRenderTarget();y.setRenderTarget(k),y.getClearColor(W),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),pe&&Je.render(R);let ee=y.toneMapping;y.toneMapping=ns;let te=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),m.setupLightsView(L),de===!0&&_e.setGlobalState(y.clippingPlanes,L),Yi(p,R,L),F.updateMultisampleRenderTarget(k),F.updateRenderTargetMipmap(k),we.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let ce=0,Re=b.length;ce<Re;ce++){let Ce=b[ce],ze=Ce.object,Fe=Ce.geometry,Pe=Ce.material,Ae=Ce.group;if(Pe.side===Vt&&ze.layers.test(L.layers)){let xt=Pe.side;Pe.side=Kt,Pe.needsUpdate=!0,qs(ze,R,L,Fe,Pe,Ae),Pe.side=xt,Pe.needsUpdate=!0,ie=!0}}ie===!0&&(F.updateMultisampleRenderTarget(k),F.updateRenderTargetMipmap(k))}y.setRenderTarget(ne),y.setClearColor(W,J),te!==void 0&&(L.viewport=te),y.toneMapping=ee}function Yi(p,b,R){let L=b.isScene===!0?b.overrideMaterial:null;for(let U=0,k=p.length;U<k;U++){let Y=p[U],ne=Y.object,ee=Y.geometry,te=L===null?Y.material:L,ie=Y.group;ne.layers.test(R.layers)&&qs(ne,b,R,ee,te,ie)}}function qs(p,b,R,L,U,k){p.onBeforeRender(y,b,R,L,U,k),p.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,p.matrixWorld),p.normalMatrix.getNormalMatrix(p.modelViewMatrix),U.onBeforeRender(y,b,R,L,p,k),U.transparent===!0&&U.side===Vt&&U.forceSinglePass===!1?(U.side=Kt,U.needsUpdate=!0,y.renderBufferDirect(R,b,L,U,p,k),U.side=Xn,U.needsUpdate=!0,y.renderBufferDirect(R,b,L,U,p,k),U.side=Vt):y.renderBufferDirect(R,b,L,U,p,k),p.onAfterRender(y,b,R,L,U,k)}function _i(p,b,R){b.isScene!==!0&&(b=it);let L=Be.get(p),U=m.state.lights,k=m.state.shadowsArray,Y=U.state.version,ne=Ze.getParameters(p,U.state,k,b,R),ee=Ze.getProgramCacheKey(ne),te=L.programs;L.environment=p.isMeshStandardMaterial?b.environment:null,L.fog=b.fog,L.envMap=(p.isMeshStandardMaterial?Q:I).get(p.envMap||L.environment),L.envMapRotation=L.environment!==null&&p.envMap===null?b.environmentRotation:p.envMapRotation,te===void 0&&(p.addEventListener("dispose",Ne),te=new Map,L.programs=te);let ie=te.get(ee);if(ie!==void 0){if(L.currentProgram===ie&&L.lightsStateVersion===Y)return ge(p,ne),ie}else ne.uniforms=Ze.getUniforms(p),p.onBeforeCompile(ne,y),ie=Ze.acquireProgram(ne,ee),te.set(ee,ie),L.uniforms=ne.uniforms;let ce=L.uniforms;return(!p.isShaderMaterial&&!p.isRawShaderMaterial||p.clipping===!0)&&(ce.clippingPlanes=_e.uniform),ge(p,ne),L.needsLights=at(p),L.lightsStateVersion=Y,L.needsLights&&(ce.ambientLightColor.value=U.state.ambient,ce.lightProbe.value=U.state.probe,ce.directionalLights.value=U.state.directional,ce.directionalLightShadows.value=U.state.directionalShadow,ce.spotLights.value=U.state.spot,ce.spotLightShadows.value=U.state.spotShadow,ce.rectAreaLights.value=U.state.rectArea,ce.ltc_1.value=U.state.rectAreaLTC1,ce.ltc_2.value=U.state.rectAreaLTC2,ce.pointLights.value=U.state.point,ce.pointLightShadows.value=U.state.pointShadow,ce.hemisphereLights.value=U.state.hemi,ce.directionalShadowMap.value=U.state.directionalShadowMap,ce.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ce.spotShadowMap.value=U.state.spotShadowMap,ce.spotLightMatrix.value=U.state.spotLightMatrix,ce.spotLightMap.value=U.state.spotLightMap,ce.pointShadowMap.value=U.state.pointShadowMap,ce.pointShadowMatrix.value=U.state.pointShadowMatrix),L.currentProgram=ie,L.uniformsList=null,ie}function Ts(p){if(p.uniformsList===null){let b=p.currentProgram.getUniforms();p.uniformsList=vr.seqWithValue(b.seq,p.uniforms)}return p.uniformsList}function ge(p,b){let R=Be.get(p);R.outputColorSpace=b.outputColorSpace,R.batching=b.batching,R.batchingColor=b.batchingColor,R.instancing=b.instancing,R.instancingColor=b.instancingColor,R.instancingMorph=b.instancingMorph,R.skinning=b.skinning,R.morphTargets=b.morphTargets,R.morphNormals=b.morphNormals,R.morphColors=b.morphColors,R.morphTargetsCount=b.morphTargetsCount,R.numClippingPlanes=b.numClippingPlanes,R.numIntersection=b.numClipIntersection,R.vertexAlphas=b.vertexAlphas,R.vertexTangents=b.vertexTangents,R.toneMapping=b.toneMapping}function Qe(p,b,R,L,U){b.isScene!==!0&&(b=it),F.resetTextureUnits();let k=b.fog,Y=L.isMeshStandardMaterial?b.environment:null,ne=E===null?y.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:dn,ee=(L.isMeshStandardMaterial?Q:I).get(L.envMap||Y),te=L.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,ie=!!R.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),ce=!!R.morphAttributes.position,Re=!!R.morphAttributes.normal,Ce=!!R.morphAttributes.color,ze=ns;L.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ze=y.toneMapping);let Fe=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Pe=Fe!==void 0?Fe.length:0,Ae=Be.get(L),xt=m.state.lights;if(de===!0&&(xe===!0||p!==_)){let mt=p===_&&L.id===S;_e.setState(L,p,mt)}let st=!1;L.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==xt.state.version||Ae.outputColorSpace!==ne||U.isBatchedMesh&&Ae.batching===!1||!U.isBatchedMesh&&Ae.batching===!0||U.isBatchedMesh&&Ae.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ae.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ae.instancing===!1||!U.isInstancedMesh&&Ae.instancing===!0||U.isSkinnedMesh&&Ae.skinning===!1||!U.isSkinnedMesh&&Ae.skinning===!0||U.isInstancedMesh&&Ae.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ae.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ae.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ae.instancingMorph===!1&&U.morphTexture!==null||Ae.envMap!==ee||L.fog===!0&&Ae.fog!==k||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==_e.numPlanes||Ae.numIntersection!==_e.numIntersection)||Ae.vertexAlphas!==te||Ae.vertexTangents!==ie||Ae.morphTargets!==ce||Ae.morphNormals!==Re||Ae.morphColors!==Ce||Ae.toneMapping!==ze||Ae.morphTargetsCount!==Pe)&&(st=!0):(st=!0,Ae.__version=L.version);let Wt=Ae.currentProgram;st===!0&&(Wt=_i(L,b,U));let Rt=!1,lt=!1,Xt=!1,vt=Wt.getUniforms(),Ut=Ae.uniforms;if(Te.useProgram(Wt.program)&&(Rt=!0,lt=!0,Xt=!0),L.id!==S&&(S=L.id,lt=!0),Rt||_!==p){Te.buffers.depth.getReversed()?(fe.copy(p.projectionMatrix),Bm(fe),zm(fe),vt.setValue(z,"projectionMatrix",fe)):vt.setValue(z,"projectionMatrix",p.projectionMatrix),vt.setValue(z,"viewMatrix",p.matrixWorldInverse);let xn=vt.map.cameraPosition;xn!==void 0&&xn.setValue(z,Xe.setFromMatrixPosition(p.matrixWorld)),We.logarithmicDepthBuffer&&vt.setValue(z,"logDepthBufFC",2/(Math.log(p.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&vt.setValue(z,"isOrthographic",p.isOrthographicCamera===!0),_!==p&&(_=p,lt=!0,Xt=!0)}if(U.isSkinnedMesh){vt.setOptional(z,U,"bindMatrix"),vt.setOptional(z,U,"bindMatrixInverse");let mt=U.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),vt.setValue(z,"boneTexture",mt.boneTexture,F))}U.isBatchedMesh&&(vt.setOptional(z,U,"batchingTexture"),vt.setValue(z,"batchingTexture",U._matricesTexture,F),vt.setOptional(z,U,"batchingIdTexture"),vt.setValue(z,"batchingIdTexture",U._indirectTexture,F),vt.setOptional(z,U,"batchingColorTexture"),U._colorsTexture!==null&&vt.setValue(z,"batchingColorTexture",U._colorsTexture,F));let Et=R.morphAttributes;if((Et.position!==void 0||Et.normal!==void 0||Et.color!==void 0)&&$e.update(U,R,Wt),(lt||Ae.receiveShadow!==U.receiveShadow)&&(Ae.receiveShadow=U.receiveShadow,vt.setValue(z,"receiveShadow",U.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(Ut.envMap.value=ee,Ut.flipEnvMap.value=ee.isCubeTexture&&ee.isRenderTargetTexture===!1?-1:1),L.isMeshStandardMaterial&&L.envMap===null&&b.environment!==null&&(Ut.envMapIntensity.value=b.environmentIntensity),lt&&(vt.setValue(z,"toneMappingExposure",y.toneMappingExposure),Ae.needsLights&&Ye(Ut,Xt),k&&L.fog===!0&&Ie.refreshFogUniforms(Ut,k),Ie.refreshMaterialUniforms(Ut,L,G,j,m.state.transmissionRenderTarget[p.id]),vr.upload(z,Ts(Ae),Ut,F)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(vr.upload(z,Ts(Ae),Ut,F),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&vt.setValue(z,"center",U.center),vt.setValue(z,"modelViewMatrix",U.modelViewMatrix),vt.setValue(z,"normalMatrix",U.normalMatrix),vt.setValue(z,"modelMatrix",U.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){let mt=L.uniformsGroups;for(let xn=0,Ln=mt.length;xn<Ln;xn++){let Fn=mt[xn];B.update(Fn,Wt),B.bind(Fn,Wt)}}return Wt}function Ye(p,b){p.ambientLightColor.needsUpdate=b,p.lightProbe.needsUpdate=b,p.directionalLights.needsUpdate=b,p.directionalLightShadows.needsUpdate=b,p.pointLights.needsUpdate=b,p.pointLightShadows.needsUpdate=b,p.spotLights.needsUpdate=b,p.spotLightShadows.needsUpdate=b,p.rectAreaLights.needsUpdate=b,p.hemisphereLights.needsUpdate=b}function at(p){return p.isMeshLambertMaterial||p.isMeshToonMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isShadowMaterial||p.isShaderMaterial&&p.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(p,b,R){Be.get(p.texture).__webglTexture=b,Be.get(p.depthTexture).__webglTexture=R;let L=Be.get(p);L.__hasExternalTextures=!0,L.__autoAllocateDepthBuffer=R===void 0,L.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(p,b){let R=Be.get(p);R.__webglFramebuffer=b,R.__useDefaultFramebuffer=b===void 0},this.setRenderTarget=function(p,b=0,R=0){E=p,A=b,T=R;let L=!0,U=null,k=!1,Y=!1;if(p){let ee=Be.get(p);if(ee.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(z.FRAMEBUFFER,null),L=!1;else if(ee.__webglFramebuffer===void 0)F.setupRenderTarget(p);else if(ee.__hasExternalTextures)F.rebindTextures(p,Be.get(p.texture).__webglTexture,Be.get(p.depthTexture).__webglTexture);else if(p.depthBuffer){let ce=p.depthTexture;if(ee.__boundDepthTexture!==ce){if(ce!==null&&Be.has(ce)&&(p.width!==ce.image.width||p.height!==ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(p)}}let te=p.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Y=!0);let ie=Be.get(p).__webglFramebuffer;p.isWebGLCubeRenderTarget?(Array.isArray(ie[b])?U=ie[b][R]:U=ie[b],k=!0):p.samples>0&&F.useMultisampledRTT(p)===!1?U=Be.get(p).__webglMultisampledFramebuffer:Array.isArray(ie)?U=ie[R]:U=ie,C.copy(p.viewport),O.copy(p.scissor),H=p.scissorTest}else C.copy($).multiplyScalar(G).floor(),O.copy(le).multiplyScalar(G).floor(),H=Le;if(Te.bindFramebuffer(z.FRAMEBUFFER,U)&&L&&Te.drawBuffers(p,U),Te.viewport(C),Te.scissor(O),Te.setScissorTest(H),k){let ee=Be.get(p.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+b,ee.__webglTexture,R)}else if(Y){let ee=Be.get(p.texture),te=b||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ee.__webglTexture,R||0,te)}S=-1},this.readRenderTargetPixels=function(p,b,R,L,U,k,Y){if(!(p&&p.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ne=Be.get(p).__webglFramebuffer;if(p.isWebGLCubeRenderTarget&&Y!==void 0&&(ne=ne[Y]),ne){Te.bindFramebuffer(z.FRAMEBUFFER,ne);try{let ee=p.texture,te=ee.format,ie=ee.type;if(!We.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}b>=0&&b<=p.width-L&&R>=0&&R<=p.height-U&&z.readPixels(b,R,L,U,re.convert(te),re.convert(ie),k)}finally{let ee=E!==null?Be.get(E).__webglFramebuffer:null;Te.bindFramebuffer(z.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(p,b,R,L,U,k,Y){if(!(p&&p.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ne=Be.get(p).__webglFramebuffer;if(p.isWebGLCubeRenderTarget&&Y!==void 0&&(ne=ne[Y]),ne){let ee=p.texture,te=ee.format,ie=ee.type;if(!We.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(b>=0&&b<=p.width-L&&R>=0&&R<=p.height-U){Te.bindFramebuffer(z.FRAMEBUFFER,ne);let ce=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ce),z.bufferData(z.PIXEL_PACK_BUFFER,k.byteLength,z.STREAM_READ),z.readPixels(b,R,L,U,re.convert(te),re.convert(ie),0);let Re=E!==null?Be.get(E).__webglFramebuffer:null;Te.bindFramebuffer(z.FRAMEBUFFER,Re);let Ce=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Om(z,Ce,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ce),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,k),z.deleteBuffer(ce),z.deleteSync(Ce),k}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(p,b=null,R=0){p.isTexture!==!0&&(ro("WebGLRenderer: copyFramebufferToTexture function signature has changed."),b=arguments[0]||null,p=arguments[1]);let L=Math.pow(2,-R),U=Math.floor(p.image.width*L),k=Math.floor(p.image.height*L),Y=b!==null?b.x:0,ne=b!==null?b.y:0;F.setTexture2D(p,0),z.copyTexSubImage2D(z.TEXTURE_2D,R,0,0,Y,ne,U,k),Te.unbindTexture()},this.copyTextureToTexture=function(p,b,R=null,L=null,U=0){p.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture function signature has changed."),L=arguments[0]||null,p=arguments[1],b=arguments[2],U=arguments[3]||0,R=null);let k,Y,ne,ee,te,ie,ce,Re,Ce,ze=p.isCompressedTexture?p.mipmaps[U]:p.image;R!==null?(k=R.max.x-R.min.x,Y=R.max.y-R.min.y,ne=R.isBox3?R.max.z-R.min.z:1,ee=R.min.x,te=R.min.y,ie=R.isBox3?R.min.z:0):(k=ze.width,Y=ze.height,ne=ze.depth||1,ee=0,te=0,ie=0),L!==null?(ce=L.x,Re=L.y,Ce=L.z):(ce=0,Re=0,Ce=0);let Fe=re.convert(b.format),Pe=re.convert(b.type),Ae;b.isData3DTexture?(F.setTexture3D(b,0),Ae=z.TEXTURE_3D):b.isDataArrayTexture||b.isCompressedArrayTexture?(F.setTexture2DArray(b,0),Ae=z.TEXTURE_2D_ARRAY):(F.setTexture2D(b,0),Ae=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,b.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,b.unpackAlignment);let xt=z.getParameter(z.UNPACK_ROW_LENGTH),st=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Wt=z.getParameter(z.UNPACK_SKIP_PIXELS),Rt=z.getParameter(z.UNPACK_SKIP_ROWS),lt=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ze.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ze.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ee),z.pixelStorei(z.UNPACK_SKIP_ROWS,te),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ie);let Xt=p.isDataArrayTexture||p.isData3DTexture,vt=b.isDataArrayTexture||b.isData3DTexture;if(p.isRenderTargetTexture||p.isDepthTexture){let Ut=Be.get(p),Et=Be.get(b),mt=Be.get(Ut.__renderTarget),xn=Be.get(Et.__renderTarget);Te.bindFramebuffer(z.READ_FRAMEBUFFER,mt.__webglFramebuffer),Te.bindFramebuffer(z.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let Ln=0;Ln<ne;Ln++)Xt&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Be.get(p).__webglTexture,U,ie+Ln),p.isDepthTexture?(vt&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Be.get(b).__webglTexture,U,Ce+Ln),z.blitFramebuffer(ee,te,k,Y,ce,Re,k,Y,z.DEPTH_BUFFER_BIT,z.NEAREST)):vt?z.copyTexSubImage3D(Ae,U,ce,Re,Ce+Ln,ee,te,k,Y):z.copyTexSubImage2D(Ae,U,ce,Re,Ce+Ln,ee,te,k,Y);Te.bindFramebuffer(z.READ_FRAMEBUFFER,null),Te.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else vt?p.isDataTexture||p.isData3DTexture?z.texSubImage3D(Ae,U,ce,Re,Ce,k,Y,ne,Fe,Pe,ze.data):b.isCompressedArrayTexture?z.compressedTexSubImage3D(Ae,U,ce,Re,Ce,k,Y,ne,Fe,ze.data):z.texSubImage3D(Ae,U,ce,Re,Ce,k,Y,ne,Fe,Pe,ze):p.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,U,ce,Re,k,Y,Fe,Pe,ze.data):p.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,U,ce,Re,ze.width,ze.height,Fe,ze.data):z.texSubImage2D(z.TEXTURE_2D,U,ce,Re,k,Y,Fe,Pe,ze);z.pixelStorei(z.UNPACK_ROW_LENGTH,xt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,st),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Wt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Rt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,lt),U===0&&b.generateMipmaps&&z.generateMipmap(Ae),Te.unbindTexture()},this.copyTextureToTexture3D=function(p,b,R=null,L=null,U=0){return p.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture3D function signature has changed."),R=arguments[0]||null,L=arguments[1]||null,p=arguments[2],b=arguments[3],U=arguments[4]||0),ro('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(p,b,R,L,U)},this.initRenderTarget=function(p){Be.get(p).__webglFramebuffer===void 0&&F.setupRenderTarget(p)},this.initTexture=function(p){p.isCubeTexture?F.setTextureCube(p,0):p.isData3DTexture?F.setTexture3D(p,0):p.isDataArrayTexture||p.isCompressedArrayTexture?F.setTexture2DArray(p,0):F.setTexture2D(p,0),Te.unbindTexture()},this.resetState=function(){A=0,T=0,E=null,Te.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}},Fa=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ls=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ar=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zl,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},wn=new D,Os=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xi=class extends Cn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ar,$r=new D,cr=new D,lr=new D,hr=new Se,Qr=new Se,Ud=new Ve,la=new D,eo=new D,ha=new D,Gf=new Se,il=new Se,Vf=new Se,Li=class extends Bt{constructor(e=new xi){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new Ct;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ar(t,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new Os(n,3,0,!1)),ar.setAttribute("uv",new Os(n,2,3,!1))}this.geometry=ar,this.material=e,this.center=new Se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cr.setFromMatrixScale(this.matrixWorld),Ud.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cr.multiplyScalar(-lr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ua(la.set(-.5,-.5,0),lr,o,cr,s,r),ua(eo.set(.5,-.5,0),lr,o,cr,s,r),ua(ha.set(.5,.5,0),lr,o,cr,s,r),Gf.set(0,0),il.set(1,0),Vf.set(1,1);let a=e.ray.intersectTriangle(la,eo,ha,!1,$r);if(a===null&&(ua(eo.set(-.5,.5,0),lr,o,cr,s,r),il.set(0,1),a=e.ray.intersectTriangle(la,ha,eo,!1,$r),a===null))return;let c=e.ray.origin.distanceTo($r);c<e.near||c>e.far||t.push({distance:c,point:$r.clone(),uv:es.getInterpolation($r,la,eo,ha,Gf,il,Vf,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ua(i,e,t,n,s,r){hr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Qr.x=r*hr.x-s*hr.y,Qr.y=s*hr.x+r*hr.y):Qr.copy(hr),i.copy(e),i.x+=Qr.x,i.y+=Qr.y,i.applyMatrix4(Ud)}var Wf=new D,Xf=new wt,qf=new wt,Nb=new D,Yf=new Ve,fa=new D,sl=new Rn,jf=new Ve,rl=new wr,Oa=class extends Ge{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wu,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new hn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fa),this.boundingBox.expandByPoint(fa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fa),this.boundingSphere.expandByPoint(fa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sl.copy(this.boundingSphere),sl.applyMatrix4(s),e.ray.intersectsSphere(sl)!==!1&&(jf.copy(s).invert(),rl.copy(e.ray).applyMatrix4(jf),!(this.boundingBox!==null&&rl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,rl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Xf.fromBufferAttribute(s.attributes.skinIndex,e),qf.fromBufferAttribute(s.attributes.skinWeight,e),Wf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=qf.getComponent(r);if(o!==0){let a=Xf.getComponent(r);Yf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Nb.copy(Wf).applyMatrix4(Yf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},vo=class extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ci=class extends nn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=cn,h=cn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zf=new Ve,Fb=new Ve,Ba=class i{constructor(e=[],t=[]){this.uuid=Wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Fb;Zf.multiplyMatrices(a,t[r]),Zf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ci(t,e,e,En,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new vo),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Bs=class extends pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ur=new Ve,Kf=new Ve,da=[],Jf=new hn,Ob=new Ve,to=new Ge,no=new Rn,yn=class extends Ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ob)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ur),Jf.copy(e.boundingBox).applyMatrix4(ur),this.boundingBox.union(Jf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ur),no.copy(e.boundingSphere).applyMatrix4(ur),this.boundingSphere.union(no)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(to.geometry=this.geometry,to.material=this.material,to.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),no.copy(this.boundingSphere),no.applyMatrix4(n),e.ray.intersectsSphere(no)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ur),Kf.multiplyMatrices(n,ur),to.matrixWorld=Kf,to.raycast(e,da);for(let o=0,a=da.length;o<a;o++){let c=da[o];c.instanceId=r,c.object=this,t.push(c)}da.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ci(new Float32Array(s*this.count),s,this.count,To,An));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var zs=class extends Cn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},za=new D,ka=new D,$f=new Ve,io=new wr,pa=new Rn,ol=new D,Qf=new D,Rr=class extends Bt{constructor(e=new Ct,t=new zs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)za.fromBufferAttribute(t,s-1),ka.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=za.distanceTo(ka);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),pa.radius+=r,e.ray.intersectsSphere(pa)===!1)return;$f.copy(s).invert(),io.copy(e.ray).applyMatrix4($f);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let v=d,g=x-1;v<g;v+=l){let m=h.getX(v),w=h.getX(v+1),M=ma(this,e,io,c,m,w);M&&t.push(M)}if(this.isLineLoop){let v=h.getX(x-1),g=h.getX(d),m=ma(this,e,io,c,v,g);m&&t.push(m)}}else{let d=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let v=d,g=x-1;v<g;v+=l){let m=ma(this,e,io,c,v,v+1);m&&t.push(m)}if(this.isLineLoop){let v=ma(this,e,io,c,x-1,d);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ma(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(za.fromBufferAttribute(o,s),ka.fromBufferAttribute(o,r),t.distanceSqToSegment(za,ka,ol,Qf)>n)return;ol.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ol);if(!(c<e.near||c>e.far))return{distance:c,point:Qf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var ed=new D,td=new D,Cr=class extends Rr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ed.fromBufferAttribute(t,s),td.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ed.distanceTo(td);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ha=class extends Rr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ui=class extends Cn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nd=new Ve,uh=new wr,ga=new Rn,xa=new D,hs=class extends Bt{constructor(e=new Ct,t=new Ui){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;nd.copy(s).invert(),uh.copy(e.ray).applyMatrix4(nd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let x=f,v=d;x<v;x++){let g=l.getX(x);xa.fromBufferAttribute(u,g),id(xa,g,c,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let x=f,v=d;x<v;x++)xa.fromBufferAttribute(u,x),id(xa,x,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function id(i,e,t,n,s,r,o){let a=uh.distanceSqToPoint(i);if(a<t){let c=new D;uh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ks=class extends nn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Se:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new D,s=[],r=[],o=[],a=new D,c=new Ve;for(let d=0;d<=e;d++){let x=d/e;s[d]=this.getTangentAt(x,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(on(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,x))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(on(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],d*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},bo=class extends Yn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Se){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fh=class extends bo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Kh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var va=new D,al=new Kh,cl=new Kh,ll=new Kh,yo=class extends Yn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(va.subVectors(s[0],s[1]).add(s[0]),l=va);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(va.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=va),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),x<1e-4&&(x=v),g<1e-4&&(g=v),al.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,x,v,g),cl.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,x,v,g),ll.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,x,v,g)}else this.curveType==="catmullrom"&&(al.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),cl.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),ll.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(al.calc(c),cl.calc(c),ll.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function sd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Bb(i,e){let t=1-i;return t*t*e}function zb(i,e){return 2*(1-i)*i*e}function kb(i,e){return i*i*e}function uo(i,e,t,n){return Bb(i,e)+zb(i,t)+kb(i,n)}function Hb(i,e){let t=1-i;return t*t*t*e}function Gb(i,e){let t=1-i;return 3*t*t*i*e}function Vb(i,e){return 3*(1-i)*i*i*e}function Wb(i,e){return i*i*i*e}function fo(i,e,t,n,s){return Hb(i,e)+Gb(i,t)+Vb(i,n)+Wb(i,s)}var Ga=class extends Yn{constructor(e=new Se,t=new Se,n=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fo(e,s.x,r.x,o.x,a.x),fo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},dh=class extends Yn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fo(e,s.x,r.x,o.x,a.x),fo(e,s.y,r.y,o.y,a.y),fo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Va=class extends Yn{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ph=class extends Yn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends Yn{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(uo(e,s.x,r.x,o.x),uo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mh=class extends Yn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(uo(e,s.x,r.x,o.x),uo(e,s.y,r.y,o.y),uo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(sd(a,c.x,l.x,h.x,u.x),sd(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Se().fromArray(s))}return this}},gh=Object.freeze({__proto__:null,ArcCurve:fh,CatmullRomCurve3:yo,CubicBezierCurve:Ga,CubicBezierCurve3:dh,EllipseCurve:bo,LineCurve:Va,LineCurve3:ph,QuadraticBezierCurve:Wa,QuadraticBezierCurve3:mh,SplineCurve:Xa}),xh=class extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new gh[s.type]().fromJSON(s))}return this}},qa=class extends xh{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Va(this.currentPoint.clone(),new Se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Wa(this.currentPoint.clone(),new Se(e,t),new Se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Ga(this.currentPoint.clone(),new Se(e,t),new Se(n,s),new Se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Xa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new bo(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var _t=class i extends Ct{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],x=0,v=[],g=n/2,m=0;w(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new At(u,3)),this.setAttribute("normal",new At(f,3)),this.setAttribute("uv",new At(d,2));function w(){let y=new D,P=new D,A=0,T=(t-e)/n;for(let E=0;E<=r;E++){let S=[],_=E/r,C=_*(t-e)+e;for(let O=0;O<=s;O++){let H=O/s,W=H*c+a,J=Math.sin(W),N=Math.cos(W);P.x=C*J,P.y=-_*n+g,P.z=C*N,u.push(P.x,P.y,P.z),y.set(J,T,N).normalize(),f.push(y.x,y.y,y.z),d.push(H,1-_),S.push(x++)}v.push(S)}for(let E=0;E<s;E++)for(let S=0;S<r;S++){let _=v[S][E],C=v[S+1][E],O=v[S+1][E+1],H=v[S][E+1];(e>0||S!==0)&&(h.push(_,C,H),A+=3),(t>0||S!==r-1)&&(h.push(C,O,H),A+=3)}l.addGroup(m,A,0),m+=A}function M(y){let P=x,A=new Se,T=new D,E=0,S=y===!0?e:t,_=y===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,g*_,0),f.push(0,_,0),d.push(.5,.5),x++;let C=x;for(let O=0;O<=s;O++){let W=O/s*c+a,J=Math.cos(W),N=Math.sin(W);T.x=S*N,T.y=g*_,T.z=S*J,u.push(T.x,T.y,T.z),f.push(0,_,0),A.x=J*.5+.5,A.y=N*.5*_+.5,d.push(A.x,A.y),x++}for(let O=0;O<s;O++){let H=P+O,W=C+O;y===!0?h.push(W,W+1,H):h.push(W+1,W,H),E+=3}l.addGroup(m,E,y===!0?1:2),m+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ya=class i extends _t{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var us=class extends qa{constructor(e){super(e),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new qa().fromJSON(s))}return this}},Xb={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Nd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=Kb(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let x=t;x<s;x+=t)u=i[x],f=i[x+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return _o(r,o,t,a,c,d,0),o}};function Nd(i,e,t,n,s){let r,o;if(s===ay(i,e,t,n)>0)for(r=e;r<t;r+=n)o=rd(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=rd(r,i[r],i[r+1],o);return o&&cc(o,o.next)&&(So(o),o=o.next),o}function Hs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(cc(t,t.next)||jt(t.prev,t,t.next)===0)){if(So(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function _o(i,e,t,n,s,r,o){if(!i)return;!o&&r&&ty(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Yb(i,n,s,r):qb(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),So(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=jb(Hs(i),e,t),_o(i,e,t,n,s,r,2)):o===2&&Zb(i,e,t,n,s,r):_o(Hs(i),e,t,n,s,r,1);break}}}function qb(i){let e=i.prev,t=i,n=i.next;if(jt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=d&&pr(s,a,r,c,o,l,x.x,x.y)&&jt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Yb(i,e,t,n){let s=i.prev,r=i,o=i.next;if(jt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,x=h<u?h<f?h:f:u<f?u:f,v=a>c?a>l?a:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,m=vh(d,x,e,t,n),w=vh(v,g,e,t,n),M=i.prevZ,y=i.nextZ;for(;M&&M.z>=m&&y&&y.z<=w;){if(M.x>=d&&M.x<=v&&M.y>=x&&M.y<=g&&M!==s&&M!==o&&pr(a,h,c,u,l,f,M.x,M.y)&&jt(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=d&&y.x<=v&&y.y>=x&&y.y<=g&&y!==s&&y!==o&&pr(a,h,c,u,l,f,y.x,y.y)&&jt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=v&&M.y>=x&&M.y<=g&&M!==s&&M!==o&&pr(a,h,c,u,l,f,M.x,M.y)&&jt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=w;){if(y.x>=d&&y.x<=v&&y.y>=x&&y.y<=g&&y!==s&&y!==o&&pr(a,h,c,u,l,f,y.x,y.y)&&jt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function jb(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!cc(s,r)&&Fd(s,n,n.next,r)&&Mo(s,r)&&Mo(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),So(n),So(n.next),n=i=r),n=n.next}while(n!==i);return Hs(n)}function Zb(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sy(o,a)){let c=Od(o,a);o=Hs(o,o.next),c=Hs(c,c.next),_o(o,e,t,n,s,r,0),_o(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Kb(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Nd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(iy(l));for(s.sort(Jb),r=0;r<s.length;r++)t=$b(s[r],t);return t}function Jb(i,e){return i.x-e.x}function $b(i,e){let t=Qb(i,e);if(!t)return e;let n=Od(t,i);return Hs(n,n.next),Hs(t,t.next)}function Qb(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&pr(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Mo(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&ey(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function ey(i,e){return jt(i.prev,i,e.prev)<0&&jt(e.next,i,i.next)<0}function ty(i,e,t,n){let s=i;do s.z===0&&(s.z=vh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ny(s)}function ny(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function vh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function iy(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function pr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function sy(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ry(i,e)&&(Mo(i,e)&&Mo(e,i)&&oy(i,e)&&(jt(i.prev,i,e.prev)||jt(i,e.prev,e))||cc(i,e)&&jt(i.prev,i,i.next)>0&&jt(e.prev,e,e.next)>0)}function jt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function cc(i,e){return i.x===e.x&&i.y===e.y}function Fd(i,e,t,n){let s=ya(jt(i,e,t)),r=ya(jt(i,e,n)),o=ya(jt(t,n,i)),a=ya(jt(t,n,e));return!!(s!==r&&o!==a||s===0&&ba(i,t,e)||r===0&&ba(i,n,e)||o===0&&ba(t,i,n)||a===0&&ba(t,e,n))}function ba(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ya(i){return i>0?1:i<0?-1:0}function ry(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Fd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Mo(i,e){return jt(i.prev,i,i.next)<0?jt(i,e,i.next)>=0&&jt(i,i.prev,e)>=0:jt(i,e,i.prev)<0||jt(i,i.next,e)<0}function oy(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Od(i,e){let t=new bh(i.i,i.x,i.y),n=new bh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function rd(i,e,t,n){let s=new bh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function So(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function bh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ay(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var po=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];od(e),ad(n,e);let o=e.length;t.forEach(od);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,ad(n,t[c]);let a=Xb.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function od(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ad(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Pr=class i extends Ct{constructor(e=new us([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new At(s,3)),this.setAttribute("uv",new At(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:cy,M,y=!1,P,A,T,E;m&&(M=m.getSpacedPoints(h),y=!0,f=!1,P=m.computeFrenetFrames(h,!1),A=new D,T=new D,E=new D),f||(g=0,d=0,x=0,v=0);let S=a.extractPoints(l),_=S.shape,C=S.holes;if(!po.isClockWise(_)){_=_.reverse();for(let pe=0,Ee=C.length;pe<Ee;pe++){let z=C[pe];po.isClockWise(z)&&(C[pe]=z.reverse())}}let H=po.triangulateShape(_,C),W=_;for(let pe=0,Ee=C.length;pe<Ee;pe++){let z=C[pe];_=_.concat(z)}function J(pe,Ee,z){return Ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),pe.clone().addScaledVector(Ee,z)}let N=_.length,j=H.length;function G(pe,Ee,z){let Ke,we,We,Te=pe.x-Ee.x,et=pe.y-Ee.y,Be=z.x-pe.x,F=z.y-pe.y,I=Te*Te+et*et,Q=Te*F-et*Be;if(Math.abs(Q)>Number.EPSILON){let ue=Math.sqrt(I),ve=Math.sqrt(Be*Be+F*F),he=Ee.x-et/ue,Ze=Ee.y+Te/ue,Ie=z.x-F/ve,Ue=z.y+Be/ve,tt=((Ie-he)*F-(Ue-Ze)*Be)/(Te*F-et*Be);Ke=he+Te*tt-pe.x,we=Ze+et*tt-pe.y;let _e=Ke*Ke+we*we;if(_e<=2)return new Se(Ke,we);We=Math.sqrt(_e/2)}else{let ue=!1;Te>Number.EPSILON?Be>Number.EPSILON&&(ue=!0):Te<-Number.EPSILON?Be<-Number.EPSILON&&(ue=!0):Math.sign(et)===Math.sign(F)&&(ue=!0),ue?(Ke=-et,we=Te,We=Math.sqrt(I)):(Ke=Te,we=et,We=Math.sqrt(I/2))}return new Se(Ke/We,we/We)}let q=[];for(let pe=0,Ee=W.length,z=Ee-1,Ke=pe+1;pe<Ee;pe++,z++,Ke++)z===Ee&&(z=0),Ke===Ee&&(Ke=0),q[pe]=G(W[pe],W[z],W[Ke]);let oe=[],$,le=q.concat();for(let pe=0,Ee=C.length;pe<Ee;pe++){let z=C[pe];$=[];for(let Ke=0,we=z.length,We=we-1,Te=Ke+1;Ke<we;Ke++,We++,Te++)We===we&&(We=0),Te===we&&(Te=0),$[Ke]=G(z[Ke],z[We],z[Te]);oe.push($),le=le.concat($)}for(let pe=0;pe<g;pe++){let Ee=pe/g,z=d*Math.cos(Ee*Math.PI/2),Ke=x*Math.sin(Ee*Math.PI/2)+v;for(let we=0,We=W.length;we<We;we++){let Te=J(W[we],q[we],Ke);fe(Te.x,Te.y,-z)}for(let we=0,We=C.length;we<We;we++){let Te=C[we];$=oe[we];for(let et=0,Be=Te.length;et<Be;et++){let F=J(Te[et],$[et],Ke);fe(F.x,F.y,-z)}}}let Le=x+v;for(let pe=0;pe<N;pe++){let Ee=f?J(_[pe],le[pe],Le):_[pe];y?(T.copy(P.normals[0]).multiplyScalar(Ee.x),A.copy(P.binormals[0]).multiplyScalar(Ee.y),E.copy(M[0]).add(T).add(A),fe(E.x,E.y,E.z)):fe(Ee.x,Ee.y,0)}for(let pe=1;pe<=h;pe++)for(let Ee=0;Ee<N;Ee++){let z=f?J(_[Ee],le[Ee],Le):_[Ee];y?(T.copy(P.normals[pe]).multiplyScalar(z.x),A.copy(P.binormals[pe]).multiplyScalar(z.y),E.copy(M[pe]).add(T).add(A),fe(E.x,E.y,E.z)):fe(z.x,z.y,u/h*pe)}for(let pe=g-1;pe>=0;pe--){let Ee=pe/g,z=d*Math.cos(Ee*Math.PI/2),Ke=x*Math.sin(Ee*Math.PI/2)+v;for(let we=0,We=W.length;we<We;we++){let Te=J(W[we],q[we],Ke);fe(Te.x,Te.y,u+z)}for(let we=0,We=C.length;we<We;we++){let Te=C[we];$=oe[we];for(let et=0,Be=Te.length;et<Be;et++){let F=J(Te[et],$[et],Ke);y?fe(F.x,F.y+M[h-1].y,M[h-1].x+z):fe(F.x,F.y,u+z)}}}K(),de();function K(){let pe=s.length/3;if(f){let Ee=0,z=N*Ee;for(let Ke=0;Ke<j;Ke++){let we=H[Ke];be(we[2]+z,we[1]+z,we[0]+z)}Ee=h+g*2,z=N*Ee;for(let Ke=0;Ke<j;Ke++){let we=H[Ke];be(we[0]+z,we[1]+z,we[2]+z)}}else{for(let Ee=0;Ee<j;Ee++){let z=H[Ee];be(z[2],z[1],z[0])}for(let Ee=0;Ee<j;Ee++){let z=H[Ee];be(z[0]+N*h,z[1]+N*h,z[2]+N*h)}}n.addGroup(pe,s.length/3-pe,0)}function de(){let pe=s.length/3,Ee=0;xe(W,Ee),Ee+=W.length;for(let z=0,Ke=C.length;z<Ke;z++){let we=C[z];xe(we,Ee),Ee+=we.length}n.addGroup(pe,s.length/3-pe,1)}function xe(pe,Ee){let z=pe.length;for(;--z>=0;){let Ke=z,we=z-1;we<0&&(we=pe.length-1);for(let We=0,Te=h+g*2;We<Te;We++){let et=N*We,Be=N*(We+1),F=Ee+Ke+et,I=Ee+we+et,Q=Ee+we+Be,ue=Ee+Ke+Be;Xe(F,I,Q,ue)}}}function fe(pe,Ee,z){c.push(pe),c.push(Ee),c.push(z)}function be(pe,Ee,z){qe(pe),qe(Ee),qe(z);let Ke=s.length/3,we=w.generateTopUV(n,s,Ke-3,Ke-2,Ke-1);it(we[0]),it(we[1]),it(we[2])}function Xe(pe,Ee,z,Ke){qe(pe),qe(Ee),qe(Ke),qe(Ee),qe(z),qe(Ke);let we=s.length/3,We=w.generateSideWallUV(n,s,we-6,we-3,we-2,we-1);it(We[0]),it(We[1]),it(We[3]),it(We[1]),it(We[2]),it(We[3])}function qe(pe){s.push(c[pe*3+0]),s.push(c[pe*3+1]),s.push(c[pe*3+2])}function it(pe){r.push(pe.x),r.push(pe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ly(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new gh[s.type]().fromJSON(s)),new i(n,e.options)}},cy={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new Se(r,o),new Se(a,c),new Se(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],x=e[s*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Se(o,1-c),new Se(l,1-u),new Se(f,1-x),new Se(v,1-m)]:[new Se(a,1-c),new Se(h,1-u),new Se(d,1-x),new Se(g,1-m)]}};function ly(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Pn=class i extends Ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,f=new D,d=[],x=[],v=[],g=[];for(let m=0;m<=n;m++){let w=[],M=m/n,y=0;m===0&&o===0?y=.5/t:m===n&&c===Math.PI&&(y=-.5/t);for(let P=0;P<=t;P++){let A=P/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+M*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),g.push(A+y,1-M),w.push(l++)}h.push(w)}for(let m=0;m<n;m++)for(let w=0;w<t;w++){let M=h[m][w+1],y=h[m][w],P=h[m+1][w],A=h[m+1][w+1];(m!==0||o>0)&&d.push(M,y,A),(m!==n-1||c<Math.PI)&&d.push(y,P,A)}this.setIndex(d),this.setAttribute("position",new At(x,3)),this.setAttribute("normal",new At(v,3)),this.setAttribute("uv",new At(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var fs=class i extends Ct{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new D,u=new D,f=new D;for(let d=0;d<=n;d++)for(let x=0;x<=s;x++){let v=x/s*r,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(x/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=s;x++){let v=(s+1)*d+x-1,g=(s+1)*(d-1)+x-1,m=(s+1)*(d-1)+x,w=(s+1)*d+x;o.push(v,g,w),o.push(g,m,w)}this.setIndex(o),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(c,3)),this.setAttribute("uv",new At(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ja=class extends It{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},ot=class extends Cn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ot=class extends ot{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return on(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Za=class extends Cn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function _a(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function hy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function uy(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function cd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Bd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var ds=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yh=class extends ds{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xu,endingEnd:Xu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qu:r=e,a=2*t-n;break;case Yu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case qu:o=e,c=2*n-t;break;case Yu:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-t)/(s-t),v=x*x,g=v*x,m=-f*g+2*f*v-f*x,w=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*x+1,M=(-1-d)*g+(1.5+d)*v+.5*x,y=d*g-d*v;for(let P=0;P!==a;++P)r[P]=m*o[h+P]+w*o[l+P]+M*o[c+P]+y*o[u+P];return r}},_h=class extends ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Mh=class extends ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},jn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_a(t,this.TimeBufferType),this.values=_a(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_a(e.times,Array),values:_a(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _h(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mr:t=this.InterpolantFactoryMethodDiscrete;break;case Sr:t=this.InterpolantFactoryMethodLinear;break;case Pc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Sr;case this.InterpolantFactoryMethodSmooth:return Pc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&hy(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Pc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let x=0;x!==n;++x){let v=t[u+x];if(v!==t[f+x]||v!==t[d+x]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=Sr;var ps=class extends jn{constructor(e,t,n){super(e,t,n)}};ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Mr;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends jn{};Ka.prototype.ValueTypeName="color";var Ni=class extends jn{};Ni.prototype.ValueTypeName="number";var Sh=class extends ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Ft.slerpFlat(r,0,o,l-a,o,l,c);return r}},Fi=class extends jn{InterpolantFactoryMethodLinear(e){return new Sh(this.times,this.values,this.getValueSize(),e)}};Fi.prototype.ValueTypeName="quaternion";Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends jn{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Mr;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends jn{};Oi.prototype.ValueTypeName="vector";var Ja=class{constructor(e="",t=-1,n=[],s=hm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Wn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(dy(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(jn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=uy(c);c=cd(c,1,h),l=cd(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ni(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,x,v){if(d.length!==0){let g=[],m=[];Bd(d,g,m,x),g.length!==0&&v.push(new u(f,g,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let v=0;v<f[x].morphTargets.length;v++)d[f[x].morphTargets[v]]=-1;for(let v in d){let g=[],m=[];for(let w=0;w!==f[x].morphTargets.length;++w){let M=f[x];g.push(M.time),m.push(M.morphTarget===v?1:0)}s.push(new Ni(".morphTargetInfluence["+v+"]",g,m))}c=d.length*o}else{let d=".bones["+t[u].name+"]";n(Oi,d+".position",f,"pos",s),n(Fi,d+".quaternion",f,"rot",s),n(Oi,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function fy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ni;case"vector":case"vector2":case"vector3":case"vector4":return Oi;case"color":return Ka;case"quaternion":return Fi;case"bool":case"boolean":return ps;case"string":return ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function dy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=fy(i.type);if(i.times===void 0){let t=[],n=[];Bd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ts={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Eh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],x=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null}}},py=new Eh,vi=class{constructor(e){this.manager=e!==void 0?e:py,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};vi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ai={},wh=class extends Error{constructor(e,t){super(e),this.response=t}},Ir=class extends vi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ts.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:n,onError:s});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ai[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,x=d!==0,v=0,g=new ReadableStream({start(m){w();function w(){u.read().then(({done:M,value:y})=>{if(M)m.close();else{v+=y.byteLength;let P=new ProgressEvent("progress",{lengthComputable:x,loaded:v,total:d});for(let A=0,T=h.length;A<T;A++){let E=h[A];E.onProgress&&E.onProgress(P)}m.enqueue(y),w()}},M=>{m.error(M)})}}});return new Response(g)}else throw new wh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(x=>d.decode(x))}}}).then(l=>{ts.add(e,l);let h=Ai[e];delete Ai[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=Ai[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ai[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Th=class extends vi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ts.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=xo("img");function c(){h(),ts.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var $a=class extends vi{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new ci,a=new Ir(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:zn,o.wrapT=l.wrapT!==void 0?l.wrapT:zn,o.magFilter=l.magFilter!==void 0?l.magFilter:Zt,o.minFilter=l.minFilter!==void 0?l.minFilter:Zt,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=oi),l.mipmapCount===1&&(o.minFilter=Zt),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,s),o}},gs=class extends vi{constructor(e){super(e)}load(e,t,n,s){let r=new nn,o=new Th(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Dr=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Qa=class extends Dr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},hl=new Ve,ld=new D,hd=new D,Eo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Di,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(ld),hd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hd),t.updateMatrixWorld(),hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ah=class extends Eo{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Er*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},xs=class extends Dr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ah}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ud=new Ve,so=new D,ul=new D,Rh=class extends Eo{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),so.setFromMatrixPosition(e.matrixWorld),n.position.copy(so),ul.copy(n.position),ul.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ul),n.updateMatrixWorld(),s.makeTranslation(-so.x,-so.y,-so.z),ud.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ud)}},vs=class extends Dr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Rh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ch=class extends Eo{constructor(){super(new os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lr=class extends Dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new Ch}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var bs=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ec=class extends vi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ts.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ts.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ts.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ts.add(e,c),r.manager.itemStart(e)}};var Ur=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=fd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function fd(){return performance.now()}var Jh="\\[\\]\\.:\\/",my=new RegExp("["+Jh+"]","g"),$h="[^"+Jh+"]",gy="[^"+Jh.replace("\\.","")+"]",xy=/((?:WC+[\/:])*)/.source.replace("WC",$h),vy=/(WCOD+)?/.source.replace("WCOD",gy),by=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$h),yy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$h),_y=new RegExp("^"+xy+vy+by+yy+"$"),My=["material","materials","bones","map"],Ph=class{constructor(e,t,n){let s=n||Gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(my,"")}static parseTrackName(e){let t=_y.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);My.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Gt.Composite=Ph;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var y_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ih);var Co=class i extends Ge{constructor(){let e=i.SkyShader,t=new It({name:e.name,uniforms:pn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Kt,depthWrite:!1});super(new Oe(1,1,1),t),this.isSky=!0}};Co.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},up:{value:new D(0,1,0)}},vertexShader:`
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

		}`};var lc=class extends ls{constructor(){super();let e=new Oe;e.deleteAttribute("uv");let t=new ot({side:Kt}),n=new ot,s=new vs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ge(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ge(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Ge(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new Ge(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new Ge(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new Ge(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Ge(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new Ge(e,Or(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new Ge(e,Or(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let x=new Ge(e,Or(17));x.position.set(14.904,12.198,-1.832),x.scale.set(.15,4.265,6.331),this.add(x);let v=new Ge(e,Or(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);let g=new Ge(e,Or(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let m=new Ge(e,Or(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Or(i){let e=new Jt;return e.color.setScalar(i),e}var _s={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var In=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Sy=new os(-1,1,1,-1,0,1),Qh=class extends Ct{constructor(){super(),this.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new At([0,2,0,0,2,0],2))}},Ey=new Qh,bi=class{constructor(e){this._mesh=new Ge(Ey,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Sy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Br=class extends In{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=pn.clone(e.uniforms),this.material=new It({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new bi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Po=class extends In{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},hc=class extends In{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var uc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Se);this._width=n.width,this._height=n.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:en}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Br(_s),this.copyPass.material.blending=an,this.clock=new Ur}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Po!==void 0&&(o instanceof Po?n=!0:o instanceof hc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var fc=class extends In{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new De}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var zd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new De(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var zr=class i extends In{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Se(e.x,e.y):new Se(256,256),this.clearColor=new De(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Yt(r,o,{type:en}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Yt(r,o,{type:en});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Yt(r,o,{type:en});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=zd;this.highPassUniforms=pn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new It({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Se(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=_s;this.copyUniforms=pn.clone(h.uniforms),this.blendMaterial=new It({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:gi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new De,this.oldClearAlpha=1,this.basic=new Jt,this.fsQuad=new bi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Se(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new It({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Se(.5,.5)},direction:{value:new Se(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new It({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};zr.BlurDirectionX=new Se(1,0);zr.BlurDirectionY=new Se(0,1);var kd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var dc=class extends In{constructor(){super();let e=kd;this.uniforms=pn.clone(e.uniforms),this.material=new ja({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new bi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},bt.getTransfer(this._outputColorSpace)===Lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Uh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Nh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Fh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Oh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Bh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Io={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Se},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ve},cameraProjectionMatrixInverse:{value:new Ve},cameraWorldMatrix:{value:new Ve},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

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
		}`};function Hd(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=wy(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],c=2*Math.PI*a/n,l=new D(Math.cos(c),Math.sin(c),0).normalize();s[o*4]=(l.x*.5+.5)*255,s[o*4+1]=(l.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new ci(s,e,e);return r.wrapS=ln,r.wrapT=ln,r.needsUpdate=!0,r}function wy(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var Lo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:eu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Se},cameraProjectionMatrixInverse:{value:new Ve},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function eu(i,e,t){let n=Ty(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function Ty(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new D(Math.cos(r),Math.sin(r),o))}return n}var mc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),l=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(c+l)*h,f=c-u,d=l-u,x=e-f,v=t-d,g,m;x>v?(g=1,m=0):(g=0,m=1);let w=x-g+h,M=v-m+h,y=x-1+2*h,P=v-1+2*h,A=c&255,T=l&255,E=this.perm[A+this.perm[T]]%12,S=this.perm[A+g+this.perm[T+m]]%12,_=this.perm[A+1+this.perm[T+1]]%12,C=.5-x*x-v*v;C<0?n=0:(C*=C,n=C*C*this.dot(this.grad3[E],x,v));let O=.5-w*w-M*M;O<0?s=0:(O*=O,s=O*O*this.dot(this.grad3[S],w,M));let H=.5-y*y-P*P;return H<0?r=0:(H*=H,r=H*H*this.dot(this.grad3[_],y,P)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),f=Math.floor(n+l),d=1/6,x=(h+u+f)*d,v=h-x,g=u-x,m=f-x,w=e-v,M=t-g,y=n-m,P,A,T,E,S,_;w>=M?M>=y?(P=1,A=0,T=0,E=1,S=1,_=0):w>=y?(P=1,A=0,T=0,E=1,S=0,_=1):(P=0,A=0,T=1,E=1,S=0,_=1):M<y?(P=0,A=0,T=1,E=0,S=1,_=1):w<y?(P=0,A=1,T=0,E=0,S=1,_=1):(P=0,A=1,T=0,E=1,S=1,_=0);let C=w-P+d,O=M-A+d,H=y-T+d,W=w-E+2*d,J=M-S+2*d,N=y-_+2*d,j=w-1+3*d,G=M-1+3*d,q=y-1+3*d,oe=h&255,$=u&255,le=f&255,Le=this.perm[oe+this.perm[$+this.perm[le]]]%12,K=this.perm[oe+P+this.perm[$+A+this.perm[le+T]]]%12,de=this.perm[oe+E+this.perm[$+S+this.perm[le+_]]]%12,xe=this.perm[oe+1+this.perm[$+1+this.perm[le+1]]]%12,fe=.6-w*w-M*M-y*y;fe<0?s=0:(fe*=fe,s=fe*fe*this.dot3(this.grad3[Le],w,M,y));let be=.6-C*C-O*O-H*H;be<0?r=0:(be*=be,r=be*be*this.dot3(this.grad3[K],C,O,H));let Xe=.6-W*W-J*J-N*N;Xe<0?o=0:(Xe*=Xe,o=Xe*Xe*this.dot3(this.grad3[de],W,J,N));let qe=.6-j*j-G*G-q*q;return qe<0?a=0:(qe*=qe,a=qe*qe*this.dot3(this.grad3[xe],j,G,q)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,u,f,d,x,v=(e+t+n+s)*c,g=Math.floor(e+v),m=Math.floor(t+v),w=Math.floor(n+v),M=Math.floor(s+v),y=(g+m+w+M)*l,P=g-y,A=m-y,T=w-y,E=M-y,S=e-P,_=t-A,C=n-T,O=s-E,H=S>_?32:0,W=S>C?16:0,J=_>C?8:0,N=S>O?4:0,j=_>O?2:0,G=C>O?1:0,q=H+W+J+N+j+G,oe=o[q][0]>=3?1:0,$=o[q][1]>=3?1:0,le=o[q][2]>=3?1:0,Le=o[q][3]>=3?1:0,K=o[q][0]>=2?1:0,de=o[q][1]>=2?1:0,xe=o[q][2]>=2?1:0,fe=o[q][3]>=2?1:0,be=o[q][0]>=1?1:0,Xe=o[q][1]>=1?1:0,qe=o[q][2]>=1?1:0,it=o[q][3]>=1?1:0,pe=S-oe+l,Ee=_-$+l,z=C-le+l,Ke=O-Le+l,we=S-K+2*l,We=_-de+2*l,Te=C-xe+2*l,et=O-fe+2*l,Be=S-be+3*l,F=_-Xe+3*l,I=C-qe+3*l,Q=O-it+3*l,ue=S-1+4*l,ve=_-1+4*l,he=C-1+4*l,Ze=O-1+4*l,Ie=g&255,Ue=m&255,tt=w&255,_e=M&255,je=a[Ie+a[Ue+a[tt+a[_e]]]]%32,Je=a[Ie+oe+a[Ue+$+a[tt+le+a[_e+Le]]]]%32,$e=a[Ie+K+a[Ue+de+a[tt+xe+a[_e+fe]]]]%32,X=a[Ie+be+a[Ue+Xe+a[tt+qe+a[_e+it]]]]%32,se=a[Ie+1+a[Ue+1+a[tt+1+a[_e+1]]]]%32,re=.6-S*S-_*_-C*C-O*O;re<0?h=0:(re*=re,h=re*re*this.dot4(r[je],S,_,C,O));let me=.6-pe*pe-Ee*Ee-z*z-Ke*Ke;me<0?u=0:(me*=me,u=me*me*this.dot4(r[Je],pe,Ee,z,Ke));let B=.6-we*we-We*We-Te*Te-et*et;B<0?f=0:(B*=B,f=B*B*this.dot4(r[$e],we,We,Te,et));let V=.6-Be*Be-F*F-I*I-Q*Q;V<0?d=0:(V*=V,d=V*V*this.dot4(r[X],Be,F,I,Q));let Z=.6-ue*ue-ve*ve-he*he-Ze*Ze;return Z<0?x=0:(Z*=Z,x=Z*Z*this.dot4(r[se],ue,ve,he,Ze)),27*(h+u+f+d+x)}};var Uo=class i extends In{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Hd(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Yt(this.width,this.height,{type:en}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new It({defines:Object.assign({},Io.defines),uniforms:pn.clone(Io.uniforms),vertexShader:Io.vertexShader,fragmentShader:Io.fragmentShader,blending:an,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Za,this.normalMaterial.blending=an,this.pdMaterial=new It({defines:Object.assign({},Lo.defines),uniforms:pn.clone(Lo.uniforms),vertexShader:Lo.vertexShader,fragmentShader:Lo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new It({defines:Object.assign({},Do.defines),uniforms:pn.clone(Do.uniforms),vertexShader:Do.vertexShader,fragmentShader:Do.fragmentShader,blending:an}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new It({uniforms:pn.clone(_s.uniforms),vertexShader:_s.vertexShader,fragmentShader:_s.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ic,blendDst:Nr,blendEquation:Vn,blendSrcAlpha:nc,blendDstAlpha:Nr,blendEquationAlpha:Vn}),this.blendMaterial=new It({uniforms:pn.clone(pc.uniforms),vertexShader:pc.vertexShader,fragmentShader:pc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Lh,blendSrc:ic,blendDst:Nr,blendEquation:Vn,blendSrcAlpha:nc,blendDstAlpha:Nr,blendEquationAlpha:Vn}),this.fsQuad=new bi(null),this.originalClearColor=new De,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new cs,this.depthTexture.format=ss,this.depthTexture.type=is,this.normalRenderTarget=new Yt(this.width,this.height,{minFilter:cn,magFilter:cn,type:en,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=eu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=an,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=an,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=an,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=an,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=an,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new mc,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let c=o,l=a;s[(o*e+a)*4]=(t.noise(c,l)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new ci(s,e,e,En,ai);return r.wrapS=ln,r.wrapT=ln,r.needsUpdate=!0,r}};Uo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Kn=Uint8Array,kr=Uint16Array,Ay=Int32Array,Gd=new Kn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Vd=new Kn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ry=new Kn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Wd=function(i,e){for(var t=new kr(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new Ay(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},Xd=Wd(Gd,2),qd=Xd.b,Cy=Xd.r;qd[28]=258,Cy[258]=28;var Yd=Wd(Vd,0),Py=Yd.b,f1=Yd.r,iu=new kr(32768);for(Dt=0;Dt<32768;++Dt)Bi=(Dt&43690)>>1|(Dt&21845)<<1,Bi=(Bi&52428)>>2|(Bi&13107)<<2,Bi=(Bi&61680)>>4|(Bi&3855)<<4,iu[Dt]=((Bi&65280)>>8|(Bi&255)<<8)>>1;var Bi,Dt,No=function(i,e,t){for(var n=i.length,s=0,r=new kr(e);s<n;++s)i[s]&&++r[i[s]-1];var o=new kr(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new kr(1<<e);var c=15-e;for(s=0;s<n;++s)if(i[s])for(var l=s<<4|i[s],h=e-i[s],u=o[i[s]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[iu[u]>>c]=l}else for(a=new kr(n),s=0;s<n;++s)i[s]&&(a[s]=iu[o[i[s]-1]++]>>15-i[s]);return a},Fo=new Kn(288);for(Dt=0;Dt<144;++Dt)Fo[Dt]=8;var Dt;for(Dt=144;Dt<256;++Dt)Fo[Dt]=9;var Dt;for(Dt=256;Dt<280;++Dt)Fo[Dt]=7;var Dt;for(Dt=280;Dt<288;++Dt)Fo[Dt]=8;var Dt,jd=new Kn(32);for(Dt=0;Dt<32;++Dt)jd[Dt]=5;var Dt;var Iy=No(Fo,9,1);var Dy=No(jd,5,1),tu=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},li=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},nu=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Ly=function(i){return(i+7)/8|0},Uy=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new Kn(i.subarray(e,t))};var Ny=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],hi=function(i,e,t){var n=new Error(e||Ny[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,hi),!t)throw n;return n},Fy=function(i,e,t,n){var s=i.length,r=n?n.length:0;if(!s||e.f&&!e.l)return t||new Kn(0);var o=!t,a=o||e.i!=2,c=e.i;o&&(t=new Kn(s*3));var l=function(it){var pe=t.length;if(it>pe){var Ee=new Kn(Math.max(pe*2,it));Ee.set(t),t=Ee}},h=e.f||0,u=e.p||0,f=e.b||0,d=e.l,x=e.d,v=e.m,g=e.n,m=s*8;do{if(!d){h=li(i,u,1);var w=li(i,u+1,3);if(u+=3,w)if(w==1)d=Iy,x=Dy,v=9,g=5;else if(w==2){var A=li(i,u,31)+257,T=li(i,u+10,15)+4,E=A+li(i,u+5,31)+1;u+=14;for(var S=new Kn(E),_=new Kn(19),C=0;C<T;++C)_[Ry[C]]=li(i,u+C*3,7);u+=T*3;for(var O=tu(_),H=(1<<O)-1,W=No(_,O,1),C=0;C<E;){var J=W[li(i,u,H)];u+=J&15;var M=J>>4;if(M<16)S[C++]=M;else{var N=0,j=0;for(M==16?(j=3+li(i,u,3),u+=2,N=S[C-1]):M==17?(j=3+li(i,u,7),u+=3):M==18&&(j=11+li(i,u,127),u+=7);j--;)S[C++]=N}}var G=S.subarray(0,A),q=S.subarray(A);v=tu(G),g=tu(q),d=No(G,v,1),x=No(q,g,1)}else hi(1);else{var M=Ly(u)+4,y=i[M-4]|i[M-3]<<8,P=M+y;if(P>s){c&&hi(0);break}a&&l(f+y),t.set(i.subarray(M,P),f),e.b=f+=y,e.p=u=P*8,e.f=h;continue}if(u>m){c&&hi(0);break}}a&&l(f+131072);for(var oe=(1<<v)-1,$=(1<<g)-1,le=u;;le=u){var N=d[nu(i,u)&oe],Le=N>>4;if(u+=N&15,u>m){c&&hi(0);break}if(N||hi(2),Le<256)t[f++]=Le;else if(Le==256){le=u,d=null;break}else{var K=Le-254;if(Le>264){var C=Le-257,de=Gd[C];K=li(i,u,(1<<de)-1)+qd[C],u+=de}var xe=x[nu(i,u)&$],fe=xe>>4;xe||hi(3),u+=xe&15;var q=Py[fe];if(fe>3){var de=Vd[fe];q+=nu(i,u)&(1<<de)-1,u+=de}if(u>m){c&&hi(0);break}a&&l(f+131072);var be=f+K;if(f<q){var Xe=r-q,qe=Math.min(q,be);for(Xe+f<0&&hi(3);f<qe;++f)t[f]=n[Xe+f]}for(;f<be;++f)t[f]=t[f-q]}}e.l=d,e.p=le,e.b=f,e.f=h,d&&(h=1,e.m=v,e.d=x,e.n=g)}while(!h);return f!=t.length&&o?Uy(t,0,f):t.subarray(0,f)};var Oy=new Kn(0);var By=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&hi(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&hi(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function Oo(i,e){return Fy(i.subarray(By(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var zy=typeof TextDecoder<"u"&&new TextDecoder,ky=0;try{zy.decode(Oy,{stream:!0}),ky=1}catch{}var gc=class extends $a{constructor(e){super(e),this.type=en}parse(e){let S=Math.pow(2.7182818,2.2);function _(p,b){let R=0;for(let U=0;U<65536;++U)(U==0||p[U>>3]&1<<(U&7))&&(b[R++]=U);let L=R-1;for(;R<65536;)b[R++]=0;return L}function C(p){for(let b=0;b<16384;b++)p[b]={},p[b].len=0,p[b].lit=0,p[b].p=null}let O={l:0,c:0,lc:0};function H(p,b,R,L,U){for(;R<p;)b=b<<8|X(L,U),R+=8;R-=p,O.l=b>>R&(1<<p)-1,O.c=b,O.lc=R}let W=new Array(59);function J(p){for(let R=0;R<=58;++R)W[R]=0;for(let R=0;R<65537;++R)W[p[R]]+=1;let b=0;for(let R=58;R>0;--R){let L=b+W[R]>>1;W[R]=b,b=L}for(let R=0;R<65537;++R){let L=p[R];L>0&&(p[R]=L|W[L]++<<6)}}function N(p,b,R,L,U,k){let Y=b,ne=0,ee=0;for(;L<=U;L++){if(Y.value-b.value>R)return!1;H(6,ne,ee,p,Y);let te=O.l;if(ne=O.c,ee=O.lc,k[L]=te,te==63){if(Y.value-b.value>R)throw new Error("Something wrong with hufUnpackEncTable");H(8,ne,ee,p,Y);let ie=O.l+6;if(ne=O.c,ee=O.lc,L+ie>U+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ie--;)k[L++]=0;L--}else if(te>=59){let ie=te-59+2;if(L+ie>U+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ie--;)k[L++]=0;L--}}J(k)}function j(p){return p&63}function G(p){return p>>6}function q(p,b,R,L){for(;b<=R;b++){let U=G(p[b]),k=j(p[b]);if(U>>k)throw new Error("Invalid table entry");if(k>14){let Y=L[U>>k-14];if(Y.len)throw new Error("Invalid table entry");if(Y.lit++,Y.p){let ne=Y.p;Y.p=new Array(Y.lit);for(let ee=0;ee<Y.lit-1;++ee)Y.p[ee]=ne[ee]}else Y.p=new Array(1);Y.p[Y.lit-1]=b}else if(k){let Y=0;for(let ne=1<<14-k;ne>0;ne--){let ee=L[(U<<14-k)+Y];if(ee.len||ee.p)throw new Error("Invalid table entry");ee.len=k,ee.lit=b,Y++}}}return!0}let oe={c:0,lc:0};function $(p,b,R,L){p=p<<8|X(R,L),b+=8,oe.c=p,oe.lc=b}let le={c:0,lc:0};function Le(p,b,R,L,U,k,Y,ne,ee){if(p==b){L<8&&($(R,L,U,k),R=oe.c,L=oe.lc),L-=8;let te=R>>L;if(te=new Uint8Array([te])[0],ne.value+te>ee)return!1;let ie=Y[ne.value-1];for(;te-- >0;)Y[ne.value++]=ie}else if(ne.value<ee)Y[ne.value++]=p;else return!1;le.c=R,le.lc=L}function K(p){return p&65535}function de(p){let b=K(p);return b>32767?b-65536:b}let xe={a:0,b:0};function fe(p,b){let R=de(p),U=de(b),k=R+(U&1)+(U>>1),Y=k,ne=k-U;xe.a=Y,xe.b=ne}function be(p,b){let R=K(p),L=K(b),U=R-(L>>1)&65535,k=L+U-32768&65535;xe.a=k,xe.b=U}function Xe(p,b,R,L,U,k,Y){let ne=Y<16384,ee=R>U?U:R,te=1,ie,ce;for(;te<=ee;)te<<=1;for(te>>=1,ie=te,te>>=1;te>=1;){ce=0;let Re=ce+k*(U-ie),Ce=k*te,ze=k*ie,Fe=L*te,Pe=L*ie,Ae,xt,st,Wt;for(;ce<=Re;ce+=ze){let Rt=ce,lt=ce+L*(R-ie);for(;Rt<=lt;Rt+=Pe){let Xt=Rt+Fe,vt=Rt+Ce,Ut=vt+Fe;ne?(fe(p[Rt+b],p[vt+b]),Ae=xe.a,st=xe.b,fe(p[Xt+b],p[Ut+b]),xt=xe.a,Wt=xe.b,fe(Ae,xt),p[Rt+b]=xe.a,p[Xt+b]=xe.b,fe(st,Wt),p[vt+b]=xe.a,p[Ut+b]=xe.b):(be(p[Rt+b],p[vt+b]),Ae=xe.a,st=xe.b,be(p[Xt+b],p[Ut+b]),xt=xe.a,Wt=xe.b,be(Ae,xt),p[Rt+b]=xe.a,p[Xt+b]=xe.b,be(st,Wt),p[vt+b]=xe.a,p[Ut+b]=xe.b)}if(R&te){let Xt=Rt+Ce;ne?fe(p[Rt+b],p[Xt+b]):be(p[Rt+b],p[Xt+b]),Ae=xe.a,p[Xt+b]=xe.b,p[Rt+b]=Ae}}if(U&te){let Rt=ce,lt=ce+L*(R-ie);for(;Rt<=lt;Rt+=Pe){let Xt=Rt+Fe;ne?fe(p[Rt+b],p[Xt+b]):be(p[Rt+b],p[Xt+b]),Ae=xe.a,p[Xt+b]=xe.b,p[Rt+b]=Ae}}ie=te,te>>=1}return ce}function qe(p,b,R,L,U,k,Y,ne,ee){let te=0,ie=0,ce=Y,Re=Math.trunc(L.value+(U+7)/8);for(;L.value<Re;)for($(te,ie,R,L),te=oe.c,ie=oe.lc;ie>=14;){let ze=te>>ie-14&16383,Fe=b[ze];if(Fe.len)ie-=Fe.len,Le(Fe.lit,k,te,ie,R,L,ne,ee,ce),te=le.c,ie=le.lc;else{if(!Fe.p)throw new Error("hufDecode issues");let Pe;for(Pe=0;Pe<Fe.lit;Pe++){let Ae=j(p[Fe.p[Pe]]);for(;ie<Ae&&L.value<Re;)$(te,ie,R,L),te=oe.c,ie=oe.lc;if(ie>=Ae&&G(p[Fe.p[Pe]])==(te>>ie-Ae&(1<<Ae)-1)){ie-=Ae,Le(Fe.p[Pe],k,te,ie,R,L,ne,ee,ce),te=le.c,ie=le.lc;break}}if(Pe==Fe.lit)throw new Error("hufDecode issues")}}let Ce=8-U&7;for(te>>=Ce,ie-=Ce;ie>0;){let ze=b[te<<14-ie&16383];if(ze.len)ie-=ze.len,Le(ze.lit,k,te,ie,R,L,ne,ee,ce),te=le.c,ie=le.lc;else throw new Error("hufDecode issues")}return!0}function it(p,b,R,L,U,k){let Y={value:0},ne=R.value,ee=$e(b,R),te=$e(b,R);R.value+=4;let ie=$e(b,R);if(R.value+=4,ee<0||ee>=65537||te<0||te>=65537)throw new Error("Something wrong with HUF_ENCSIZE");let ce=new Array(65537),Re=new Array(16384);C(Re);let Ce=L-(R.value-ne);if(N(p,R,Ce,ee,te,ce),ie>8*(L-(R.value-ne)))throw new Error("Something wrong with hufUncompress");q(ce,ee,te,Re),qe(ce,Re,p,R,ie,te,k,U,Y)}function pe(p,b,R){for(let L=0;L<R;++L)b[L]=p[b[L]]}function Ee(p){for(let b=1;b<p.length;b++){let R=p[b-1]+p[b]-128;p[b]=R}}function z(p,b){let R=0,L=Math.floor((p.length+1)/2),U=0,k=p.length-1;for(;!(U>k||(b[U++]=p[R++],U>k));)b[U++]=p[L++]}function Ke(p){let b=p.byteLength,R=new Array,L=0,U=new DataView(p);for(;b>0;){let k=U.getInt8(L++);if(k<0){let Y=-k;b-=Y+1;for(let ne=0;ne<Y;ne++)R.push(U.getUint8(L++))}else{let Y=k;b-=2;let ne=U.getUint8(L++);for(let ee=0;ee<Y+1;ee++)R.push(ne)}}return R}function we(p,b,R,L,U,k){let Y=new DataView(k.buffer),ne=R[p.idx[0]].width,ee=R[p.idx[0]].height,te=3,ie=Math.floor(ne/8),ce=Math.ceil(ne/8),Re=Math.ceil(ee/8),Ce=ne-(ce-1)*8,ze=ee-(Re-1)*8,Fe={value:0},Pe=new Array(te),Ae=new Array(te),xt=new Array(te),st=new Array(te),Wt=new Array(te);for(let lt=0;lt<te;++lt)Wt[lt]=b[p.idx[lt]],Pe[lt]=lt<1?0:Pe[lt-1]+ce*Re,Ae[lt]=new Float32Array(64),xt[lt]=new Uint16Array(64),st[lt]=new Uint16Array(ce*64);for(let lt=0;lt<Re;++lt){let Xt=8;lt==Re-1&&(Xt=ze);let vt=8;for(let Et=0;Et<ce;++Et){Et==ce-1&&(vt=Ce);for(let mt=0;mt<te;++mt)xt[mt].fill(0),xt[mt][0]=U[Pe[mt]++],We(Fe,L,xt[mt]),Te(xt[mt],Ae[mt]),et(Ae[mt]);te==3&&Be(Ae);for(let mt=0;mt<te;++mt)F(Ae[mt],st[mt],Et*64)}let Ut=0;for(let Et=0;Et<te;++Et){let mt=R[p.idx[Et]].type;for(let xn=8*lt;xn<8*lt+Xt;++xn){Ut=Wt[Et][xn];for(let Ln=0;Ln<ie;++Ln){let Fn=Ln*64+(xn&7)*8;Y.setUint16(Ut+0*2*mt,st[Et][Fn+0],!0),Y.setUint16(Ut+1*2*mt,st[Et][Fn+1],!0),Y.setUint16(Ut+2*2*mt,st[Et][Fn+2],!0),Y.setUint16(Ut+3*2*mt,st[Et][Fn+3],!0),Y.setUint16(Ut+4*2*mt,st[Et][Fn+4],!0),Y.setUint16(Ut+5*2*mt,st[Et][Fn+5],!0),Y.setUint16(Ut+6*2*mt,st[Et][Fn+6],!0),Y.setUint16(Ut+7*2*mt,st[Et][Fn+7],!0),Ut+=8*2*mt}}if(ie!=ce)for(let xn=8*lt;xn<8*lt+Xt;++xn){let Ln=Wt[Et][xn]+8*ie*2*mt,Fn=ie*64+(xn&7)*8;for(let Go=0;Go<vt;++Go)Y.setUint16(Ln+Go*2*mt,st[Et][Fn+Go],!0)}}}let Rt=new Uint16Array(ne);Y=new DataView(k.buffer);for(let lt=0;lt<te;++lt){R[p.idx[lt]].decoded=!0;let Xt=R[p.idx[lt]].type;if(R[lt].type==2)for(let vt=0;vt<ee;++vt){let Ut=Wt[lt][vt];for(let Et=0;Et<ne;++Et)Rt[Et]=Y.getUint16(Ut+Et*2*Xt,!0);for(let Et=0;Et<ne;++Et)Y.setFloat32(Ut+Et*2*Xt,V(Rt[Et]),!0)}}}function We(p,b,R){let L,U=1;for(;U<64;)L=b[p.value],L==65280?U=64:L>>8==255?U+=L&255:(R[U]=L,U++),p.value++}function Te(p,b){b[0]=V(p[0]),b[1]=V(p[1]),b[2]=V(p[5]),b[3]=V(p[6]),b[4]=V(p[14]),b[5]=V(p[15]),b[6]=V(p[27]),b[7]=V(p[28]),b[8]=V(p[2]),b[9]=V(p[4]),b[10]=V(p[7]),b[11]=V(p[13]),b[12]=V(p[16]),b[13]=V(p[26]),b[14]=V(p[29]),b[15]=V(p[42]),b[16]=V(p[3]),b[17]=V(p[8]),b[18]=V(p[12]),b[19]=V(p[17]),b[20]=V(p[25]),b[21]=V(p[30]),b[22]=V(p[41]),b[23]=V(p[43]),b[24]=V(p[9]),b[25]=V(p[11]),b[26]=V(p[18]),b[27]=V(p[24]),b[28]=V(p[31]),b[29]=V(p[40]),b[30]=V(p[44]),b[31]=V(p[53]),b[32]=V(p[10]),b[33]=V(p[19]),b[34]=V(p[23]),b[35]=V(p[32]),b[36]=V(p[39]),b[37]=V(p[45]),b[38]=V(p[52]),b[39]=V(p[54]),b[40]=V(p[20]),b[41]=V(p[22]),b[42]=V(p[33]),b[43]=V(p[38]),b[44]=V(p[46]),b[45]=V(p[51]),b[46]=V(p[55]),b[47]=V(p[60]),b[48]=V(p[21]),b[49]=V(p[34]),b[50]=V(p[37]),b[51]=V(p[47]),b[52]=V(p[50]),b[53]=V(p[56]),b[54]=V(p[59]),b[55]=V(p[61]),b[56]=V(p[35]),b[57]=V(p[36]),b[58]=V(p[48]),b[59]=V(p[49]),b[60]=V(p[57]),b[61]=V(p[58]),b[62]=V(p[62]),b[63]=V(p[63])}function et(p){let b=.5*Math.cos(.7853975),R=.5*Math.cos(3.14159/16),L=.5*Math.cos(3.14159/8),U=.5*Math.cos(3*3.14159/16),k=.5*Math.cos(5*3.14159/16),Y=.5*Math.cos(3*3.14159/8),ne=.5*Math.cos(7*3.14159/16),ee=new Array(4),te=new Array(4),ie=new Array(4),ce=new Array(4);for(let Re=0;Re<8;++Re){let Ce=Re*8;ee[0]=L*p[Ce+2],ee[1]=Y*p[Ce+2],ee[2]=L*p[Ce+6],ee[3]=Y*p[Ce+6],te[0]=R*p[Ce+1]+U*p[Ce+3]+k*p[Ce+5]+ne*p[Ce+7],te[1]=U*p[Ce+1]-ne*p[Ce+3]-R*p[Ce+5]-k*p[Ce+7],te[2]=k*p[Ce+1]-R*p[Ce+3]+ne*p[Ce+5]+U*p[Ce+7],te[3]=ne*p[Ce+1]-k*p[Ce+3]+U*p[Ce+5]-R*p[Ce+7],ie[0]=b*(p[Ce+0]+p[Ce+4]),ie[3]=b*(p[Ce+0]-p[Ce+4]),ie[1]=ee[0]+ee[3],ie[2]=ee[1]-ee[2],ce[0]=ie[0]+ie[1],ce[1]=ie[3]+ie[2],ce[2]=ie[3]-ie[2],ce[3]=ie[0]-ie[1],p[Ce+0]=ce[0]+te[0],p[Ce+1]=ce[1]+te[1],p[Ce+2]=ce[2]+te[2],p[Ce+3]=ce[3]+te[3],p[Ce+4]=ce[3]-te[3],p[Ce+5]=ce[2]-te[2],p[Ce+6]=ce[1]-te[1],p[Ce+7]=ce[0]-te[0]}for(let Re=0;Re<8;++Re)ee[0]=L*p[16+Re],ee[1]=Y*p[16+Re],ee[2]=L*p[48+Re],ee[3]=Y*p[48+Re],te[0]=R*p[8+Re]+U*p[24+Re]+k*p[40+Re]+ne*p[56+Re],te[1]=U*p[8+Re]-ne*p[24+Re]-R*p[40+Re]-k*p[56+Re],te[2]=k*p[8+Re]-R*p[24+Re]+ne*p[40+Re]+U*p[56+Re],te[3]=ne*p[8+Re]-k*p[24+Re]+U*p[40+Re]-R*p[56+Re],ie[0]=b*(p[Re]+p[32+Re]),ie[3]=b*(p[Re]-p[32+Re]),ie[1]=ee[0]+ee[3],ie[2]=ee[1]-ee[2],ce[0]=ie[0]+ie[1],ce[1]=ie[3]+ie[2],ce[2]=ie[3]-ie[2],ce[3]=ie[0]-ie[1],p[0+Re]=ce[0]+te[0],p[8+Re]=ce[1]+te[1],p[16+Re]=ce[2]+te[2],p[24+Re]=ce[3]+te[3],p[32+Re]=ce[3]-te[3],p[40+Re]=ce[2]-te[2],p[48+Re]=ce[1]-te[1],p[56+Re]=ce[0]-te[0]}function Be(p){for(let b=0;b<64;++b){let R=p[0][b],L=p[1][b],U=p[2][b];p[0][b]=R+1.5747*U,p[1][b]=R-.1873*L-.4682*U,p[2][b]=R+1.8556*L}}function F(p,b,R){for(let L=0;L<64;++L)b[R+L]=jh.toHalfFloat(I(p[L]))}function I(p){return p<=1?Math.sign(p)*Math.pow(Math.abs(p),2.2):Math.sign(p)*Math.pow(S,Math.abs(p)-1)}function Q(p){return new DataView(p.array.buffer,p.offset.value,p.size)}function ue(p){let b=p.viewer.buffer.slice(p.offset.value,p.offset.value+p.size),R=new Uint8Array(Ke(b)),L=new Uint8Array(R.length);return Ee(R),z(R,L),new DataView(L.buffer)}function ve(p){let b=p.array.slice(p.offset.value,p.offset.value+p.size),R=Oo(b),L=new Uint8Array(R.length);return Ee(R),z(R,L),new DataView(L.buffer)}function he(p){let b=p.viewer,R={value:p.offset.value},L=new Uint16Array(p.columns*p.lines*(p.inputChannels.length*p.type)),U=new Uint8Array(8192),k=0,Y=new Array(p.inputChannels.length);for(let ze=0,Fe=p.inputChannels.length;ze<Fe;ze++)Y[ze]={},Y[ze].start=k,Y[ze].end=Y[ze].start,Y[ze].nx=p.columns,Y[ze].ny=p.lines,Y[ze].size=p.type,k+=Y[ze].nx*Y[ze].ny*Y[ze].size;let ne=Z(b,R),ee=Z(b,R);if(ee>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ne<=ee)for(let ze=0;ze<ee-ne+1;ze++)U[ze+ne]=se(b,R);let te=new Uint16Array(65536),ie=_(U,te),ce=$e(b,R);it(p.array,b,R,ce,L,k);for(let ze=0;ze<p.inputChannels.length;++ze){let Fe=Y[ze];for(let Pe=0;Pe<Y[ze].size;++Pe)Xe(L,Fe.start+Pe,Fe.nx,Fe.size,Fe.ny,Fe.nx*Fe.size,ie)}pe(te,L,k);let Re=0,Ce=new Uint8Array(L.buffer.byteLength);for(let ze=0;ze<p.lines;ze++)for(let Fe=0;Fe<p.inputChannels.length;Fe++){let Pe=Y[Fe],Ae=Pe.nx*Pe.size,xt=new Uint8Array(L.buffer,Pe.end*2,Ae*2);Ce.set(xt,Re),Re+=Ae*2,Pe.end+=Ae}return new DataView(Ce.buffer)}function Ze(p){let b=p.array.slice(p.offset.value,p.offset.value+p.size),R=Oo(b),L=p.inputChannels.length*p.lines*p.columns*p.totalBytes,U=new ArrayBuffer(L),k=new DataView(U),Y=0,ne=0,ee=new Array(4);for(let te=0;te<p.lines;te++)for(let ie=0;ie<p.inputChannels.length;ie++){let ce=0;switch(p.inputChannels[ie].pixelType){case 1:ee[0]=Y,ee[1]=ee[0]+p.columns,Y=ee[1]+p.columns;for(let Ce=0;Ce<p.columns;++Ce){let ze=R[ee[0]++]<<8|R[ee[1]++];ce+=ze,k.setUint16(ne,ce,!0),ne+=2}break;case 2:ee[0]=Y,ee[1]=ee[0]+p.columns,ee[2]=ee[1]+p.columns,Y=ee[2]+p.columns;for(let Ce=0;Ce<p.columns;++Ce){let ze=R[ee[0]++]<<24|R[ee[1]++]<<16|R[ee[2]++]<<8;ce+=ze,k.setUint32(ne,ce,!0),ne+=4}break}}return k}function Ie(p){let b=p.viewer,R={value:p.offset.value},L=new Uint8Array(p.columns*p.lines*(p.inputChannels.length*p.type*2)),U={version:re(b,R),unknownUncompressedSize:re(b,R),unknownCompressedSize:re(b,R),acCompressedSize:re(b,R),dcCompressedSize:re(b,R),rleCompressedSize:re(b,R),rleUncompressedSize:re(b,R),rleRawSize:re(b,R),totalAcUncompressedCount:re(b,R),totalDcUncompressedCount:re(b,R),acCompression:re(b,R)};if(U.version<2)throw new Error("EXRLoader.parse: "+Ye.compression+" version "+U.version+" is unsupported");let k=new Array,Y=Z(b,R)-2;for(;Y>0;){let Fe=Ue(b.buffer,R),Pe=se(b,R),Ae=Pe>>2&3,xt=(Pe>>4)-1,st=new Int8Array([xt])[0],Wt=se(b,R);k.push({name:Fe,index:st,type:Wt,compression:Ae}),Y-=Fe.length+3}let ne=Ye.channels,ee=new Array(p.inputChannels.length);for(let Fe=0;Fe<p.inputChannels.length;++Fe){let Pe=ee[Fe]={},Ae=ne[Fe];Pe.name=Ae.name,Pe.compression=0,Pe.decoded=!1,Pe.type=Ae.pixelType,Pe.pLinear=Ae.pLinear,Pe.width=p.columns,Pe.height=p.lines}let te={idx:new Array(3)};for(let Fe=0;Fe<p.inputChannels.length;++Fe){let Pe=ee[Fe];for(let Ae=0;Ae<k.length;++Ae){let xt=k[Ae];Pe.name==xt.name&&(Pe.compression=xt.compression,xt.index>=0&&(te.idx[xt.index]=Fe),Pe.offset=Fe)}}let ie,ce,Re;if(U.acCompressedSize>0)switch(U.acCompression){case 0:ie=new Uint16Array(U.totalAcUncompressedCount),it(p.array,b,R,U.acCompressedSize,ie,U.totalAcUncompressedCount);break;case 1:let Fe=p.array.slice(R.value,R.value+U.totalAcUncompressedCount),Pe=Oo(Fe);ie=new Uint16Array(Pe.buffer),R.value+=U.totalAcUncompressedCount;break}if(U.dcCompressedSize>0){let Fe={array:p.array,offset:R,size:U.dcCompressedSize};ce=new Uint16Array(ve(Fe).buffer),R.value+=U.dcCompressedSize}if(U.rleRawSize>0){let Fe=p.array.slice(R.value,R.value+U.rleCompressedSize),Pe=Oo(Fe);Re=Ke(Pe.buffer),R.value+=U.rleCompressedSize}let Ce=0,ze=new Array(ee.length);for(let Fe=0;Fe<ze.length;++Fe)ze[Fe]=new Array;for(let Fe=0;Fe<p.lines;++Fe)for(let Pe=0;Pe<ee.length;++Pe)ze[Pe].push(Ce),Ce+=ee[Pe].width*p.type*2;we(te,ze,ee,ie,ce,L);for(let Fe=0;Fe<ee.length;++Fe){let Pe=ee[Fe];if(!Pe.decoded)switch(Pe.compression){case 2:let Ae=0,xt=0;for(let st=0;st<p.lines;++st){let Wt=ze[Fe][Ae];for(let Rt=0;Rt<Pe.width;++Rt){for(let lt=0;lt<2*Pe.type;++lt)L[Wt++]=Re[xt+lt*Pe.width*Pe.height];xt++}Ae++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(L.buffer)}function Ue(p,b){let R=new Uint8Array(p),L=0;for(;R[b.value+L]!=0;)L+=1;let U=new TextDecoder().decode(R.slice(b.value,b.value+L));return b.value=b.value+L+1,U}function tt(p,b,R){let L=new TextDecoder().decode(new Uint8Array(p).slice(b.value,b.value+R));return b.value=b.value+R,L}function _e(p,b){let R=Je(p,b),L=$e(p,b);return[R,L]}function je(p,b){let R=$e(p,b),L=$e(p,b);return[R,L]}function Je(p,b){let R=p.getInt32(b.value,!0);return b.value=b.value+4,R}function $e(p,b){let R=p.getUint32(b.value,!0);return b.value=b.value+4,R}function X(p,b){let R=p[b.value];return b.value=b.value+1,R}function se(p,b){let R=p.getUint8(b.value);return b.value=b.value+1,R}let re=function(p,b){let R;return"getBigInt64"in DataView.prototype?R=Number(p.getBigInt64(b.value,!0)):R=p.getUint32(b.value+4,!0)+Number(p.getUint32(b.value,!0)<<32),b.value+=8,R};function me(p,b){let R=p.getFloat32(b.value,!0);return b.value+=4,R}function B(p,b){return jh.toHalfFloat(me(p,b))}function V(p){let b=(p&31744)>>10,R=p&1023;return(p>>15?-1:1)*(b?b===31?R?NaN:1/0:Math.pow(2,b-15)*(1+R/1024):6103515625e-14*(R/1024))}function Z(p,b){let R=p.getUint16(b.value,!0);return b.value+=2,R}function ae(p,b){return V(Z(p,b))}function Me(p,b,R,L){let U=R.value,k=[];for(;R.value<U+L-1;){let Y=Ue(b,R),ne=Je(p,R),ee=se(p,R);R.value+=3;let te=Je(p,R),ie=Je(p,R);k.push({name:Y,pixelType:ne,pLinear:ee,xSampling:te,ySampling:ie})}return R.value+=1,k}function ye(p,b){let R=me(p,b),L=me(p,b),U=me(p,b),k=me(p,b),Y=me(p,b),ne=me(p,b),ee=me(p,b),te=me(p,b);return{redX:R,redY:L,greenX:U,greenY:k,blueX:Y,blueY:ne,whiteX:ee,whiteY:te}}function Ne(p,b){let R=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],L=se(p,b);return R[L]}function rt(p,b){let R=Je(p,b),L=Je(p,b),U=Je(p,b),k=Je(p,b);return{xMin:R,yMin:L,xMax:U,yMax:k}}function ht(p,b){let R=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],L=se(p,b);return R[L]}function nt(p,b){let R=["ENVMAP_LATLONG","ENVMAP_CUBE"],L=se(p,b);return R[L]}function Pt(p,b){let R=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],L=["ROUND_DOWN","ROUND_UP"],U=$e(p,b),k=$e(p,b),Y=se(p,b);return{xSize:U,ySize:k,levelMode:R[Y&15],roundingMode:L[Y>>4]}}function St(p,b){let R=me(p,b),L=me(p,b);return[R,L]}function ct(p,b){let R=me(p,b),L=me(p,b),U=me(p,b);return[R,L,U]}function $t(p,b,R,L,U){if(L==="string"||L==="stringvector"||L==="iccProfile")return tt(b,R,U);if(L==="chlist")return Me(p,b,R,U);if(L==="chromaticities")return ye(p,R);if(L==="compression")return Ne(p,R);if(L==="box2i")return rt(p,R);if(L==="envmap")return nt(p,R);if(L==="tiledesc")return Pt(p,R);if(L==="lineOrder")return ht(p,R);if(L==="float")return me(p,R);if(L==="v2f")return St(p,R);if(L==="v3f")return ct(p,R);if(L==="int")return Je(p,R);if(L==="rational")return _e(p,R);if(L==="timecode")return je(p,R);if(L==="preview")return R.value+=U,"skipped";R.value+=U}function bn(p,b){let R=Math.log2(p);return b=="ROUND_DOWN"?Math.floor(R):Math.ceil(R)}function Hn(p,b,R){let L=0;switch(p.levelMode){case"ONE_LEVEL":L=1;break;case"MIPMAP_LEVELS":L=bn(Math.max(b,R),p.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return L}function qi(p,b,R,L){let U=new Array(p);for(let k=0;k<p;k++){let Y=1<<k,ne=b/Y|0;L=="ROUND_UP"&&ne*Y<b&&(ne+=1);let ee=Math.max(ne,1);U[k]=(ee+R-1)/R|0}return U}function ws(){let p=this,b=p.offset,R={value:0};for(let L=0;L<p.tileCount;L++){let U=Je(p.viewer,b),k=Je(p.viewer,b);b.value+=8,p.size=$e(p.viewer,b);let Y=U*p.blockWidth,ne=k*p.blockHeight;p.columns=Y+p.blockWidth>p.width?p.width-Y:p.blockWidth,p.lines=ne+p.blockHeight>p.height?p.height-ne:p.blockHeight;let ee=p.columns*p.totalBytes,ie=p.size<p.lines*ee?p.uncompress(p):Q(p);b.value+=p.size;for(let ce=0;ce<p.lines;ce++){let Re=ce*p.columns*p.totalBytes;for(let Ce=0;Ce<p.inputChannels.length;Ce++){let ze=Ye.channels[Ce].name,Fe=p.channelByteOffsets[ze]*p.columns,Pe=p.decodeChannels[ze];if(Pe===void 0)continue;R.value=Re+Fe;let Ae=(p.height-(1+ne+ce))*p.outLineWidth;for(let xt=0;xt<p.columns;xt++){let st=Ae+(xt+Y)*p.outputChannels+Pe;p.byteArray[st]=p.getter(ie,R)}}}}}function Yi(){let p=this,b=p.offset,R={value:0};for(let L=0;L<p.height/p.blockHeight;L++){let U=Je(p.viewer,b)-Ye.dataWindow.yMin;p.size=$e(p.viewer,b),p.lines=U+p.blockHeight>p.height?p.height-U:p.blockHeight;let k=p.columns*p.totalBytes,ne=p.size<p.lines*k?p.uncompress(p):Q(p);b.value+=p.size;for(let ee=0;ee<p.blockHeight;ee++){let te=L*p.blockHeight,ie=ee+p.scanOrder(te);if(ie>=p.height)continue;let ce=ee*k,Re=(p.height-1-ie)*p.outLineWidth;for(let Ce=0;Ce<p.inputChannels.length;Ce++){let ze=Ye.channels[Ce].name,Fe=p.channelByteOffsets[ze]*p.columns,Pe=p.decodeChannels[ze];if(Pe!==void 0){R.value=ce+Fe;for(let Ae=0;Ae<p.columns;Ae++){let xt=Re+Ae*p.outputChannels+Pe;p.byteArray[xt]=p.getter(ne,R)}}}}}}function qs(p,b,R){let L={};if(p.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");L.version=p.getUint8(4);let U=p.getUint8(5);L.spec={singleTile:!!(U&2),longName:!!(U&4),deepFormat:!!(U&8),multiPart:!!(U&16)},R.value=8;let k=!0;for(;k;){let Y=Ue(b,R);if(Y==0)k=!1;else{let ne=Ue(b,R),ee=$e(p,R),te=$t(p,b,R,ne,ee);te===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${ne}'.`):L[Y]=te}}if(U&-7)throw console.error("THREE.EXRHeader:",L),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return L}function _i(p,b,R,L,U){let k={size:0,viewer:b,array:R,offset:L,width:p.dataWindow.xMax-p.dataWindow.xMin+1,height:p.dataWindow.yMax-p.dataWindow.yMin+1,inputChannels:p.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:dn};switch(p.compression){case"NO_COMPRESSION":k.blockHeight=1,k.uncompress=Q;break;case"RLE_COMPRESSION":k.blockHeight=1,k.uncompress=ue;break;case"ZIPS_COMPRESSION":k.blockHeight=1,k.uncompress=ve;break;case"ZIP_COMPRESSION":k.blockHeight=16,k.uncompress=ve;break;case"PIZ_COMPRESSION":k.blockHeight=32,k.uncompress=he;break;case"PXR24_COMPRESSION":k.blockHeight=16,k.uncompress=Ze;break;case"DWAA_COMPRESSION":k.blockHeight=32,k.uncompress=Ie;break;case"DWAB_COMPRESSION":k.blockHeight=256,k.uncompress=Ie;break;default:throw new Error("EXRLoader.parse: "+p.compression+" is unsupported")}let Y={};for(let ie of p.channels)switch(ie.name){case"Y":case"R":case"G":case"B":case"A":Y[ie.name]=!0,k.type=ie.pixelType}let ne=!1;if(Y.R&&Y.G&&Y.B)ne=!Y.A,k.outputChannels=4,k.decodeChannels={R:0,G:1,B:2,A:3};else if(Y.Y)k.outputChannels=1,k.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(k.type==1)switch(U){case An:k.getter=ae;break;case en:k.getter=Z;break}else if(k.type==2)switch(U){case An:k.getter=me;break;case en:k.getter=B}else throw new Error("EXRLoader.parse: unsupported pixelType "+k.type+" for "+p.compression+".");k.columns=k.width;let ee=k.width*k.height*k.outputChannels;switch(U){case An:k.byteArray=new Float32Array(ee),ne&&k.byteArray.fill(1,0,ee);break;case en:k.byteArray=new Uint16Array(ee),ne&&k.byteArray.fill(15360,0,ee);break;default:console.error("THREE.EXRLoader: unsupported type: ",U);break}let te=0;for(let ie of p.channels)k.decodeChannels[ie.name]!==void 0&&(k.channelByteOffsets[ie.name]=te),te+=ie.pixelType*2;if(k.totalBytes=te,k.outLineWidth=k.width*k.outputChannels,p.lineOrder==="INCREASING_Y"?k.scanOrder=ie=>ie:k.scanOrder=ie=>k.height-1-ie,k.outputChannels==4?(k.format=En,k.colorSpace=dn):(k.format=To,k.colorSpace=mi),p.spec.singleTile){k.blockHeight=p.tiles.ySize,k.blockWidth=p.tiles.xSize;let ie=Hn(p.tiles,k.width,k.height),ce=qi(ie,k.width,p.tiles.xSize,p.tiles.roundingMode),Re=qi(ie,k.height,p.tiles.ySize,p.tiles.roundingMode);k.tileCount=ce[0]*Re[0];for(let Ce=0;Ce<ie;Ce++)for(let ze=0;ze<Re[Ce];ze++)for(let Fe=0;Fe<ce[Ce];Fe++)re(b,L);k.decode=ws.bind(k)}else{k.blockWidth=k.width;let ie=Math.ceil(k.height/k.blockHeight);for(let ce=0;ce<ie;ce++)re(b,L);k.decode=Yi.bind(k)}return k}let Ts={value:0},ge=new DataView(e),Qe=new Uint8Array(e),Ye=qs(ge,e,Ts),at=_i(Ye,ge,Qe,Ts,this.type);return at.decode(),{header:Ye,width:at.width,height:at.height,data:at.byteArray,format:at.format,colorSpace:at.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){o.colorSpace=a.colorSpace,o.minFilter=Zt,o.magFilter=Zt,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,r,n,s)}};function ui(i=1){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Gs=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Jn=(i,e,t)=>i+(e-i)*t,Hr=i=>i*i*(3-2*i),$d=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,yi=(i,e,t)=>Gs((i-e)/(t-e));function Ht(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e;let s=n.getContext("2d");return t(s,i,e),n}function zt(i,{srgb:e=!0,repeat:t=!1,aniso:n=8}={}){let s=i instanceof nn?i:new ks(i);return e&&(s.colorSpace=kt),t&&(s.wrapS=s.wrapT=ln),s.anisotropy=n,s.needsUpdate=!0,s}function $n(i="rgba(255,255,255,1)",e="rgba(255,255,255,0)",t=128){return zt(Ht(t,t,(n,s)=>{let r=n.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);r.addColorStop(0,i),r.addColorStop(1,e),n.fillStyle=r,n.fillRect(0,0,s,s)}))}var Gy=new D(0,1,0),xc=new D,Zd=new Ft,Kd=new D,Jd=new D;function Qd(i,e,t=.2,n=t,s=new Ve){xc.subVectors(e,i);let r=xc.length();return xc.normalize(),Zd.setFromUnitVectors(Gy,xc),Jd.addVectors(i,e).multiplyScalar(.5),Kd.set(t,r,n),s.compose(Jd,Zd,Kd)}function zi(i,e){let t=new De(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return i.setAttribute("color",new pt(s,3)),i}function Un(i,e=["position","normal","uv","color"]){let t=i.index?i.toNonIndexed():i;for(let n of Object.keys(t.attributes))e.includes(n)||t.deleteAttribute(n);return e.includes("uv")&&!t.attributes.uv&&t.setAttribute("uv",new pt(new Float32Array(t.attributes.position.count*2),2)),t}var ki=()=>new Promise(i=>requestAnimationFrame(()=>i()));function Nn(i,{height:e=2.6,strength:t=.32}={}){return i.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying float vGrimeY;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
{ vec4 gp = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
 gp = instanceMatrix * gp;
#endif
 vGrimeY = (modelMatrix * gp).y; }`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGrimeY;`).replace("#include <map_fragment>",`#include <map_fragment>
 diffuseColor.rgb *= mix(1.0 - ${t.toFixed(3)}, 1.0, smoothstep(0.0, ${e.toFixed(2)}, vGrimeY));`)},i.customProgramCacheKey=()=>"grime"+e+t,i}var Ms=[{p:0,name:"dawn",gain:1},{p:.17,name:"city",gain:1},{p:.56,name:"city",gain:.95},{p:.7,name:"sunset",gain:1},{p:.8,name:"sunset",gain:.8},{p:.9,name:"night",gain:1.5},{p:1,name:"night",gain:1.5}];async function ep(i,{steps:e=4}={}){let t=new gc,n=[...new Set(Ms.map(f=>f.name))],s={};await Promise.all(n.map(f=>t.loadAsync(`assets/hdri/${f}.exr`).then(d=>{d.minFilter=d.magFilter=Zt,d.generateMipmaps=!1,s[f]=d})));let r=new as(i),o=r._setSize.bind(r);r._setSize=()=>o(128);let a=new ls,c=new It({side:Kt,depthWrite:!1,uniforms:{a:{value:null},b:{value:null},k:{value:0},ga:{value:1},gb:{value:1}},vertexShader:`
      varying vec3 vDir;
      void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform sampler2D a; uniform sampler2D b; uniform float k; uniform float ga; uniform float gb;
      varying vec3 vDir;
      vec2 eq(vec3 d) { return vec2(atan(d.z, d.x) * 0.15915494 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5); }
      void main() {
        vec2 uv = eq(normalize(vDir));
        vec3 c = mix(texture2D(a, uv).rgb * ga, texture2D(b, uv).rgb * gb, k);
        gl_FragColor = vec4(c, 1.0);
      }`});a.add(new Ge(new Pn(5,64,32),c));let l=e,h=new Map,u=(f,d)=>{let x=Ms[f],v=Ms[f+1],g=d===0?`${x.name}*${x.gain}`:d===1?`${v.name}*${v.gain}`:`${x.name}*${x.gain}>${v.name}*${v.gain}@${d}`;if(h.has(g))return h.get(g);c.uniforms.a.value=s[x.name],c.uniforms.b.value=s[v.name],c.uniforms.ga.value=x.gain,c.uniforms.gb.value=v.gain,c.uniforms.k.value=d;let m=r.fromScene(a,0,.1,20);return h.set(g,m.texture),m.texture};for(let f=0;f<Ms.length-1;f++)for(let d=0;d<=l;d++)u(f,d/l);return r.dispose(),{update(f,d){let x=0;for(;x<Ms.length-2&&f>Ms[x+1].p;)x++;let v=Ms[x],g=Ms[x+1],m=Math.round(Hr(yi(f,v.p,g.p))*l)/l,w=u(x,m);d.environment!==w&&(d.environment=w)}}}var tp={uniforms:{tDiffuse:{value:null},time:{value:0},vignette:{value:.32},grain:{value:.035},ca:{value:.0025},lift:{value:new D(0,0,0)},sat:{value:1.06}},vertexShader:`
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
    }`};var Vy={plaster:{orm:!0},asphalt:{orm:!0},pavers:{orm:!0},corrugated:{orm:!0},steel:{orm:!0},concrete:{orm:!0},ground:{orm:!0},bark:{orm:!0},wood:{orm:!0}},Wy=["curb_col","leaves_col","leaves_nor","louver_col","louver_nor","rail_col"],sn={};async function np(i,e){let t=new gs,n=Math.min(16,i.capabilities.getMaxAnisotropy()),s=[],r=(a,c,l)=>s.push(t.loadAsync(`assets/tex/${c}.webp`).then(h=>{h.wrapS=h.wrapT=ln,h.anisotropy=n,l&&(h.colorSpace=kt),sn[a]=h}));for(let a of Object.keys(Vy))r(`${a}_col`,`${a}_col`,!0),r(`${a}_nor`,`${a}_nor`,!1),r(`${a}_orm`,`${a}_orm`,!1);for(let a of Wy)r(a,a,a.endsWith("_col"));let o=0;await Promise.all(s.map(a=>a.then(()=>e?.(++o/s.length))))}var su=(i,e,t)=>{if(e===1&&t===1)return i;let n=i.clone();return n.repeat.set(e,t),n.needsUpdate=!0,n};function gt(i,{repeat:e=[1,1],normalScale:t=1,physical:n=!1,...s}={}){let[r,o]=e,a=n?Ot:ot,c=su(sn[`${i}_orm`],r,o);return new a({map:su(sn[`${i}_col`],r,o),normalMap:su(sn[`${i}_nor`],r,o),normalScale:new Se(t,t),roughnessMap:c,metalnessMap:c,aoMap:c,aoMapIntensity:.9,roughness:1,metalness:1,...s})}function Dn(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ct,l=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let x=0;x<d.count;++x)u.push(d.getX(x)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=ip(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][f]);let x=ip(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}return c}function ip(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new pt(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,d=h.count;f<d;f++)for(let x=0;x<t;x++){let v=h.getComponent(f,x);a.setComponent(f+u,x,v)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function ru(i,e){if(e===Ed)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ao||e===rc){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ao)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var vc=class extends Ge{constructor(e,t={}){super(e),this.isWater=!0;let n=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,c=t.time!==void 0?t.time:0,l=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new D(.70707,.70707,0),u=new De(t.sunColor!==void 0?t.sunColor:16777215),f=new De(t.waterColor!==void 0?t.waterColor:8355711),d=t.eye!==void 0?t.eye:new D(0,0,0),x=t.distortionScale!==void 0?t.distortionScale:20,v=t.side!==void 0?t.side:Xn,g=t.fog!==void 0?t.fog:!1,m=new si,w=new D,M=new D,y=new D,P=new Ve,A=new D(0,0,-1),T=new wt,E=new D,S=new D,_=new wt,C=new Ve,O=new Qt,H=new Yt(s,r),W={name:"MirrorShader",uniforms:pn.merge([He.fog,He.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ve},sunColor:{value:new De(8355711)},sunDirection:{value:new D(.70707,.70707,0)},eye:{value:new D},waterColor:{value:new De(5592405)}}]),vertexShader:`
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
				}`},J=new It({name:W.name,uniforms:pn.clone(W.uniforms),vertexShader:W.vertexShader,fragmentShader:W.fragmentShader,lights:!0,side:v,fog:g});J.uniforms.mirrorSampler.value=H.texture,J.uniforms.textureMatrix.value=C,J.uniforms.alpha.value=a,J.uniforms.time.value=c,J.uniforms.normalSampler.value=l,J.uniforms.sunColor.value=u,J.uniforms.waterColor.value=f,J.uniforms.sunDirection.value=h,J.uniforms.distortionScale.value=x,J.uniforms.eye.value=d,n.material=J,n.onBeforeRender=function(N,j,G){if(M.setFromMatrixPosition(n.matrixWorld),y.setFromMatrixPosition(G.matrixWorld),P.extractRotation(n.matrixWorld),w.set(0,0,1),w.applyMatrix4(P),E.subVectors(M,y),E.dot(w)>0)return;E.reflect(w).negate(),E.add(M),P.extractRotation(G.matrixWorld),A.set(0,0,-1),A.applyMatrix4(P),A.add(y),S.subVectors(M,A),S.reflect(w).negate(),S.add(M),O.position.copy(E),O.up.set(0,1,0),O.up.applyMatrix4(P),O.up.reflect(w),O.lookAt(S),O.far=G.far,O.updateMatrixWorld(),O.projectionMatrix.copy(G.projectionMatrix),C.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),C.multiply(O.projectionMatrix),C.multiply(O.matrixWorldInverse),m.setFromNormalAndCoplanarPoint(w,M),m.applyMatrix4(O.matrixWorldInverse),T.set(m.normal.x,m.normal.y,m.normal.z,m.constant);let q=O.projectionMatrix;_.x=(Math.sign(T.x)+q.elements[8])/q.elements[0],_.y=(Math.sign(T.y)+q.elements[9])/q.elements[5],_.z=-1,_.w=(1+q.elements[10])/q.elements[14],T.multiplyScalar(2/T.dot(_)),q.elements[2]=T.x,q.elements[6]=T.y,q.elements[10]=T.z+1-o,q.elements[14]=T.w,d.setFromMatrixPosition(G.matrixWorld);let oe=N.getRenderTarget(),$=N.xr.enabled,le=N.shadowMap.autoUpdate;n.visible=!1,N.xr.enabled=!1,N.shadowMap.autoUpdate=!1,N.setRenderTarget(H),N.state.buffers.depth.setMask(!0),N.autoClear===!1&&N.clear(),N.render(j,O),n.visible=!0,N.xr.enabled=$,N.shadowMap.autoUpdate=le,N.setRenderTarget(oe);let Le=G.viewport;Le!==void 0&&N.state.viewport(Le)}}};var yc=70,sp=(i,e,t=yc)=>`${Math.floor(i/t)},${Math.floor(e/t)}`,ou=new D;function Gr(i,e,t,{colors:n=null,cast:s=!0,receive:r=!0,layer:o=0,chunk:a=yc,cull:c=0}={}){let l=new Map;t.forEach((u,f)=>{ou.setFromMatrixPosition(u);let d=sp(ou.x,ou.z,a);l.has(d)||l.set(d,[]),l.get(d).push(f)});let h=[];for(let u of l.values()){let f=new yn(i,e,u.length);u.forEach((d,x)=>{f.setMatrixAt(x,t[d]),n&&f.setColorAt(x,n[d])}),f.castShadow=s,f.receiveShadow=r,f.computeBoundingSphere(),f.userData.indices=u,c&&(f.userData.cull=c),o&&f.layers.set(o),h.push(f)}return h}function Xy(i,e=yc){let t=i.attributes.position,n=i.index?i.index.array:null,s=n?n.length/3:t.count/3,r=(c,l)=>n?n[c*3+l]:c*3+l,o=new Map;for(let c=0;c<s;c++){let l=r(c,0),h=r(c,1),u=r(c,2),f=(t.getX(l)+t.getX(h)+t.getX(u))/3,d=(t.getZ(l)+t.getZ(h)+t.getZ(u))/3,x=sp(f,d,e);o.has(x)||o.set(x,[]),o.get(x).push(c)}if(o.size<=1)return[i];let a=[];for(let c of o.values()){let l=new Map,h=[];for(let d of c)for(let x=0;x<3;x++){let v=r(d,x);l.has(v)||l.set(v,l.size),h.push(l.get(v))}let u=l.size,f=new Ct;for(let[d,x]of Object.entries(i.attributes)){let v=x.itemSize,g=new x.array.constructor(u*v);for(let[m,w]of l)for(let M=0;M<v;M++)g[w*v+M]=x.array[m*v+M];f.setAttribute(d,new pt(g,v,x.normalized))}f.setIndex(new pt(u>65535?Uint32Array.from(h):Uint16Array.from(h),1)),f.computeBoundingSphere(),f.computeBoundingBox(),a.push(f)}return a}function fi(i,{chunk:e=yc,cull:t=0}={}){let n=i.parent,s=Xy(i.geometry,e);if(s.length<=1)return t&&(i.userData.cull=t),[i];let r=s.map(o=>{let a=new Ge(o,i.material);return a.castShadow=i.castShadow,a.receiveShadow=i.receiveShadow,a.renderOrder=i.renderOrder,a.layers.mask=i.layers.mask,a.position.copy(i.position),a.quaternion.copy(i.quaternion),a.scale.copy(i.scale),t&&(a.userData.cull=t),n?.add(a),a});return n?.remove(i),i.geometry.dispose(),r}function au(i){i.updateMatrixWorld(!0);let e=new Ve().copy(i.matrixWorld).invert(),t=new Map,n=[],s=c=>{for(let l=c;l&&l!==i;l=l.parent)if(l.userData.dynamic)return!0;return!1},r=c=>Object.values(c).some(l=>l&&l.isTexture),o=c=>c.isMeshStandardMaterial&&!c.isMeshPhysicalMaterial&&!r(c)&&!c.userData.live&&!c.vertexColors&&!c.onBeforeCompile.toString().includes("shader")?`std|${c.roughness}|${c.metalness}|${c.emissive.getHexString()}|${c.emissiveIntensity}|${c.side}|${c.flatShading}`:null;i.traverse(c=>{if(!c.isMesh||c.isInstancedMesh||c.isSkinnedMesh||s(c)||Array.isArray(c.material)||c.material.transparent||c.geometry.morphAttributes.position)return;let l=o(c.material),h=(l||c.material.uuid)+(c.castShadow?"s":"")+(c.receiveShadow?"r":"");t.has(h)||t.set(h,{material:c.material,sig:l,cast:c.castShadow,receive:c.receiveShadow,geos:[]});let u=c.geometry.index?c.geometry.toNonIndexed():c.geometry.clone();for(let f of Object.keys(u.attributes))["position","normal","uv"].includes(f)||u.deleteAttribute(f);if(u.attributes.uv||u.setAttribute("uv",new pt(new Float32Array(u.attributes.position.count*2),2)),u.attributes.normal||u.computeVertexNormals(),l){let f=c.material.color,d=u.attributes.position.count,x=new Float32Array(d*3);for(let v=0;v<d;v++)x[v*3]=f.r,x[v*3+1]=f.g,x[v*3+2]=f.b;u.setAttribute("color",new pt(x,3))}u.applyMatrix4(new Ve().multiplyMatrices(e,c.matrixWorld)),t.get(h).geos.push(u),n.push(c)});for(let c of n)c.parent.remove(c);let a=[];for(let{material:c,sig:l,cast:h,receive:u,geos:f}of t.values()){let d=f.length>1?Dn(f):f[0];if(!d)continue;let x=c;l&&(x=c.clone(),x.color.set(16777215),x.vertexColors=!0);let v=new Ge(d,x);v.castShadow=h,v.receiveShadow=u,i.add(v),a.push(v)}return a}async function rp(i,e,t,n=()=>{}){let s=[],r=[];e.traverse(l=>{l.visible===!1&&(s.push(l),l.visible=!0),l.frustumCulled&&(r.push(l),l.frustumCulled=!1);let h=l.material?Array.isArray(l.material)?l.material:[l.material]:[];for(let u of h)for(let f in u){let d=u[f];d&&d.isTexture&&i.initTexture(d)}});let o=location.search.includes("debug"),a=performance.now();try{i.compileAsync&&await i.compileAsync(e,t)}catch{}o&&console.log("STAGE compileAsync",(performance.now()-a).toFixed(0));let c=new Yt(64,64);i.setRenderTarget(c),n(),i.render(e,t),o&&console.log("STAGE warm render",(performance.now()-a).toFixed(0)),i.setRenderTarget(null),c.dispose();for(let l of s)l.visible=!1;for(let l of r)l.frustumCulled=!0}var bc=class{constructor(e){this.items=[];let t=new hn,n=new Rn;e.updateMatrixWorld(!0),e.traverse(s=>{let r=s.userData.cull;r&&(s.isInstancedMesh?(s.boundingSphere||s.computeBoundingSphere(),n.copy(s.boundingSphere).applyMatrix4(s.matrixWorld)):s.isMesh?(s.geometry.boundingSphere||s.geometry.computeBoundingSphere(),n.copy(s.geometry.boundingSphere).applyMatrix4(s.matrixWorld)):t.setFromObject(s).getBoundingSphere(n),this.items.push({o:s,c:n.center.clone(),r:n.radius,d:r}))})}update(e){for(let t of this.items)t.o.visible=t.c.distanceTo(e)-t.r<t.d}};var Ss=4.2,Wr=3.2,lp=[["MAA TARA SWEETS","\u09AE\u09BF\u09B7\u09CD\u099F\u09BE\u09A8\u09CD\u09A8 \u09AD\u09BE\u09A3\u09CD\u09A1\u09BE\u09B0","#b3261e","#ffe7a8"],["SHARMA STORES","GROCERY \xB7 DAILY NEEDS","#1f4e8c","#ffffff"],["XEROX \xB7 STD \xB7 ISD","LAMINATION \xB7 PRINTOUT","#f2c200","#1a1a1a"],["NEW MEDICAL HALL","\u0994\u09B7\u09A7\u09BE\u09B2\u09AF\u09BC \xB7 24 HRS","#0f7a4f","#ffffff"],["CHA & TOAST","\u099A\u09BE \xB7 \u099F\u09CB\u09B8\u09CD\u099F \xB7 \u0998\u09C1\u0997\u09A8\u09BF","#6b2f1a","#ffd9a0"],["MOBILE REPAIR","ALL BRANDS \xB7 RECHARGE","#202020","#3fe0ff"],["LAXMI JEWELLERS","HALLMARK GOLD \xB7 SINCE 1972","#7a1630","#f6d27a"],["BOOK DEPOT","\u09AC\u0987 \xB7 STATIONERY","#2c5530","#f3eedb"],["HOTEL BIRIYANI","MUTTON \xB7 CHICKEN \xB7 AC","#d8432f","#ffffff"],["PHOTO STUDIO","PASSPORT PHOTO IN 5 MIN","#3b2a68","#ffffff"],["GUPTA HARDWARE","PAINTS \xB7 SANITARY \xB7 TOOLS","#e86a10","#1a1a1a"],["FRESH JUICE CORNER","MOSAMBI \xB7 ANAR \xB7 SUGARCANE","#2f8f2f","#fff9c4"],["CYBER CAFE","INTERNET \xB7 FORMS \xB7 TICKETS","#0b3d91","#9be7ff"],["DAS TAILORS","LADIES & GENTS \xB7 ALTERATION","#7b5b3a","#fff3dc"],["RATION SHOP","FAIR PRICE \xB7 NO. 14/B","#55606b","#ffffff"],["SEN ELECTRICALS","FANS \xB7 WIRING \xB7 INVERTER","#ffd400","#0d2a6b"]];function qy(){return zt(Ht(2048,1024,i=>{lp.forEach(([e,t,n,s],r)=>{let o=r%2*1024,a=Math.floor(r/2)*128,c=i.createLinearGradient(0,a,0,a+128);c.addColorStop(0,n),c.addColorStop(1,op(n,-.25)),i.fillStyle=c,i.fillRect(o,a,1024,128),i.strokeStyle=op(n,-.45),i.lineWidth=6,i.strokeRect(o+3,a+3,1018,122),i.fillStyle=s,i.textBaseline="middle",i.font='800 66px "Manrope", "Hind Siliguri", sans-serif',i.fillText(e,o+34,a+54),i.font='600 26px "Hind Siliguri", "Manrope", sans-serif',i.globalAlpha=.85,i.fillText(t,o+38,a+104),i.globalAlpha=1;for(let h=0;h<120;h++)i.fillStyle=`rgba(0,0,0,${Math.random()*.08})`,i.fillRect(o+Math.random()*1024,a+Math.random()*60,2+Math.random()*3,30+Math.random()*70);let l=i.createLinearGradient(0,a+90,0,a+128);l.addColorStop(0,"rgba(30,20,10,0)"),l.addColorStop(1,"rgba(30,20,10,0.35)"),i.fillStyle=l,i.fillRect(o,a+90,1024,38)})}))}function op(i,e){let t=new De(i);return t.offsetHSL(0,0,e*.5),"#"+t.getHexString()}function Yy(){return zt(Ht(256,256,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#ffe2b0"),n.addColorStop(1,"#f2a75c"),i.fillStyle=n,i.fillRect(0,0,e,t);for(let s=0;s<e;s+=2){let r=Math.sin(s*.19)*.5+Math.sin(s*.07+1)*.5;i.fillStyle=`rgba(120,60,20,${.08+r*.08})`,i.fillRect(s,0,2,t)}i.fillStyle="rgba(255,255,240,0.55)",i.fillRect(e*.55,t*.08,e*.35,6),i.fillStyle="rgba(60,40,30,0.5)",i.fillRect(e*.5,t*.3,e*.5,t*.7)}))}function jy(){return zt(Ht(512,256,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#fff3d6"),n.addColorStop(1,"#c79a62"),i.fillStyle=n,i.fillRect(0,0,e,t);let s=["#a8483c","#c9a43a","#3e6690","#4a7a58","#e8e2d4","#c07a3a","#6a5080","#d9d0bf","#8a8478"];for(let o=0;o<4;o++){let a=18+o*52;i.fillStyle="#6b4a2a",i.fillRect(0,a+40,e,5);let c=4;for(;c<e-8;){let l=8+Math.random()*18,h=16+Math.random()*22;i.fillStyle=s[Math.floor(Math.random()*s.length)],i.fillRect(c,a+40-h,l,h),i.fillStyle="rgba(0,0,0,0.15)",i.fillRect(c+l-2,a+40-h,2,h),c+=l+1.5}}let r=i.createRadialGradient(e/2,t*.3,t*.2,e/2,t*.4,e*.6);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(20,12,4,0.55)"),i.fillStyle=r,i.fillRect(0,0,e,t),i.fillStyle="#4a3020",i.fillRect(0,t-40,e,40),i.fillStyle="rgba(255,255,255,0.08)",i.fillRect(0,t-40,e,3)}))}function Zy(){return zt(Ht(128,96,(i,e,t)=>{i.fillStyle="#e9e7e0",i.fillRect(0,0,e,t),i.fillStyle="#3a3a3a",i.beginPath(),i.arc(e*.62,t/2,t*.36,0,7),i.fill(),i.strokeStyle="#9a9a9a";for(let n=0;n<6;n++)i.beginPath(),i.arc(e*.62,t/2,t*.06*n,0,7),i.stroke();i.fillStyle="rgba(120,90,60,0.35)",i.fillRect(0,t-10,e,10)}))}var Vr=(i,e,t,n=0,s=0,r=0)=>Un(new Oe(i,e,t).translate(n,s,r),["position","normal","uv"]),_c=null;function hp(){if(_c)return _c;let i={frame:Dn([Vr(.14,.16,1.62,.07,1,0),Vr(.26,.07,1.72,.13,-.95,0),Vr(.1,1.9,.1,.05,0,-.71),Vr(.1,1.9,.1,.05,0,.71),Vr(.05,1.8,.05,.04,0,0),Vr(.05,.05,1.32,.04,.45,0)]),pane:new Tt(1.34,1.84).rotateY(Math.PI/2),shutter:new Oe(.035,1.84,.64),slab:new Oe(1,.14,2.8),rail:new Oe(.02,1,2.8),railSide:new Oe(1,1,.02),cloth:new Tt(.5,.75).rotateY(Math.PI/2).translate(0,-.37,0),ac:new Oe(.55,.5,.82),pipe:new _t(.06,.06,1,8),shop:new Tt(1,1).rotateY(Math.PI/2),awning:(()=>{let r=new Oe(1.4,.06,1);return r.rotateZ(-.3),r})()},e=Yy(),t=jy(),n=sn.louver_col,s={frame:Nn(new ot({color:16777215,roughness:.55})),paneDark:new Ot({color:790805,roughness:.05,metalness:0,envMapIntensity:1.6,specularIntensity:1,ior:1.52}),paneLit:new Ot({color:2102798,map:e,emissive:16777215,emissiveMap:e,emissiveIntensity:.05,roughness:.08,envMapIntensity:1.2}),shutter:new ot({map:n,normalMap:sn.louver_nor,roughness:.75,color:16777215}),slab:Nn(gt("plaster",{repeat:[.4,.4],vertexColors:!1})),rail:new ot({map:sn.rail_col,alphaTest:.5,side:Vt,metalness:.6,roughness:.5,color:2236962}),cloth:new ot({side:Vt,roughness:.95,color:16777215}),ac:new ot({map:Zy(),roughness:.6}),pipe:new ot({color:3816510,roughness:.5,metalness:.2}),shopLit:new ot({map:t,emissive:16777215,emissiveMap:t,emissiveIntensity:.35,roughness:.4}),shutterRoll:gt("corrugated",{repeat:[1,1],color:10134440}),awning:new ot({roughness:.85,side:Vt,color:16777215})};return _c={geo:i,mats:s},_c}var ap={},cp={};function up({lit:i=!1,shutters:e=!0,shutterColor:t="#2f5e44",frameColor:n="#f1ede3",open:s=.35}={}){let{geo:r,mats:o}=hp(),a=new ft,c=cp[n]||(cp[n]=Nn(new ot({color:n,roughness:.55}))),l=new Ge(r.frame,c);l.castShadow=l.receiveShadow=!0,a.add(l);let h=new Ge(r.pane,i?o.paneLit:o.paneDark);if(h.position.x=.012,a.add(h),e){let u=ap[t]||(ap[t]=Object.assign(o.shutter.clone(),{}));u.color.set(t);for(let f of[-1,1]){let d=new Ge(r.shutter,u);d.position.set(.06+Math.sin(s)*.3,0,f*1),d.rotation.y=f*s,d.castShadow=!0,a.add(d)}}return a}var Mc=class{constructor(e,{lite:t=!1}={}){this.r=e,this.lite=t,this.I={frame:[],paneDark:[],paneLit:[],shutter:[],slab:[],rail:[],railSide:[],cloth:[],ac:[],pipe:[],shopLit:[],shutterRoll:[],awning:[]},this.signGeos=[],this.wallGeos=[]}addBuilding({x:e,z:t,rot:n,side:s,perp:r,along:o,floors:a,tint:c}){let l=this.r,h=n+(s>0?0:Math.PI),u=new Ft().setFromAxisAngle(new D(0,1,0),h),f=new Ft().setFromAxisAngle(new D(0,1,0),n),d=s*(r/2),x=(A,T,E=0)=>new D(d+s*E,T,A).applyQuaternion(f).add(new D(e,0,t)),v=(A,T,E=0,S=[1,1,1],_,C=u)=>{let O=E?C.clone().multiply(new Ft().setFromAxisAngle(new D(0,1,0),E)):C;this.I[A].push({m:new Ve().compose(T,O,new D(...S)),color:_})},g=["#f1ede3","#f1ede3","#2f5e44","#5b3b24","#3b5a7a","#e8e0c8"][Math.floor(l()*6)],m=["#2f5e44","#2d6a5a","#3f6b3a","#5b3b24","#2f4f6f","#7b8b5a"][Math.floor(l()*6)],w=Math.max(1,Math.floor((o-1.2)/3)),M=A=>-o/2+o*(A+.5)/w;for(let A=0;A<=a;A++){let T=Ss+A*Wr-.06,E=new Oe(.24,A===a?.3:.14,o+.24);E.translate(d+s*.1,T,0),Xr(E),zi(E,new De(c).multiplyScalar(.93)),E.applyQuaternion(f),E.translate(e,0,t),this.wallGeos.push(Un(E))}let y=l()<.55;for(let A=0;A<a;A++){let T=Ss+A*Wr+1.55;for(let E=0;E<w;E++){let S=M(E);v("frame",x(S,T),0,[1,1,1],g);let _=l()<.16;if(_||v(l()<.42?"paneLit":"paneDark",x(S,T,.012)),_)for(let C of[-1,1])v("shutter",x(S+C*.33,T,.07),0,[1,1,1],m);else if(l()<.6)for(let C of[-1,1]){let O=.15+l()*.5;v("shutter",x(S+C*(.7+.3),T,.06+Math.sin(O)*.3),C*O,[1,1,1],m)}if(y&&A>=0&&l()<.5&&!this.lite){let C=T-1.02;v("slab",x(S,C,.5),0,[1,1,1],c),v("rail",x(S,C+.55,.98));for(let H of[-1,1])v("railSide",x(S+H*1.38,C+.55,.5));let O=Math.floor(l()*4);for(let H=0;H<O;H++){let W=["#c2185b","#f9a825","#1565c0","#2e7d32","#ffffff","#6a1b9a","#e65100","#00838f"][Math.floor(l()*8)];v("cloth",x(S-.9+H*.6+l()*.2,C+.55,.8),(l()-.5)*.4,[.8+l()*.5,.9+l()*.6,1],W)}}else l()<.12&&!this.lite&&v("ac",x(S,T-1.3,.3))}}for(let A of[-1,1]){if(l()<.35)continue;let T=new Ft().setFromAxisAngle(new D(0,1,0),n+(A>0?-Math.PI/2:Math.PI/2)),E=(_,C,O=0)=>new D(_,C,A*(o/2+O)).applyQuaternion(f).add(new D(e,0,t)),S=Math.max(0,Math.floor((r-2.5)/3.6));for(let _=0;_<a;_++){let C=Ss+_*Wr+1.55;for(let O=0;O<S;O++){let H=-r/2+1.2+(r-2.4)*(O+.5)/S;if(v("frame",E(H,C),0,[1,1,1],g,T),v(l()<.4?"paneLit":"paneDark",E(H,C,.012),0,[1,1,1],void 0,T),l()<.5)for(let W of[-1,1])v("shutter",E(H+W*1,C,.08),W*(.2+l()*.3),[1,1,1],m,T)}}}if(!this.lite){let A=Ss+a*Wr;for(let T of[-o/2+.25,o/2-.25])l()<.6&&v("pipe",x(T,A/2,.1),0,[1,A,1])}let P=Math.max(1,Math.round(o/5));for(let A=0;A<P;A++){let T=o/P,E=-o/2+T*(A+.5),S=l()<.6;if(v(S?"shopLit":"shutterRoll",x(E,1.55,.015),0,[1,3.1,T-.5]),A>0){let _=new Oe(.3,Ss,.45);_.translate(d+s*.12,Ss/2,-o/2+T*A),Xr(_),zi(_,new De(c).multiplyScalar(.88)),_.applyQuaternion(f),_.translate(e,0,t),this.wallGeos.push(Un(_))}if(l()<.75){let _=Math.floor(l()*lp.length),C=new Oe(.1,.78,T-.3),O=C.attributes.uv,H=_%2*.5,W=1-Math.floor(_/2)/8,J=W-1/8;for(let N=0;N<6;N++)for(let j=0;j<4;j++){let G=N*4+j;N===0?O.setXY(G,H+O.getX(G)*.5,J+O.getY(G)/8):O.setXY(G,H+.002,W-.002)}s<0&&C.rotateY(Math.PI),C.translate(d+s*.1,3.72,E),C.applyQuaternion(f),C.translate(e,0,t),this.signGeos.push(Un(C))}else l()<.6&&v("awning",x(E,3.3,.7),0,[1,1,T-.4],["#b23a2e","#2f6d8a","#d18b2c","#3f7a4c","#8a3f6d"][Math.floor(l()*5)])}}build(e){let t={setNight:()=>{}},{geo:n,mats:s}=hp(),r=(c,l,h,u=!1)=>{let f=this.I[c];if(!f.length)return null;let d=new De,x=f.map(g=>g.color?d.clone().set(g.color):null),v=Gr(l,h,f.map(g=>g.m),{colors:x.some(Boolean)?x.map(g=>g||new De(1,1,1)):null,cast:u,layer:1,cull:150});return v.forEach(g=>e.add(g)),v};r("frame",n.frame,s.frame,!1),r("paneDark",n.pane,s.paneDark,!1),r("paneLit",n.pane,s.paneLit,!1),r("shutter",n.shutter,s.shutter),r("slab",n.slab,s.slab,!0),r("rail",n.rail,s.rail),r("railSide",n.railSide,s.rail),r("cloth",n.cloth,s.cloth),r("ac",n.ac,s.ac),r("pipe",n.pipe,s.pipe),r("shopLit",n.shop,s.shopLit,!1),r("shutterRoll",n.shop,s.shutterRoll,!1),r("awning",n.awning,s.awning);let o=qy(),a=new ot({map:o,emissive:16777215,emissiveMap:o,emissiveIntensity:0,roughness:.6});if(this.signGeos.length){let c=new Ge(Dn(this.signGeos),a);c.receiveShadow=!0,e.add(c),fi(c,{cull:170}).forEach(l=>l.layers.set(1))}return t.setNight=c=>{s.paneLit.emissiveIntensity=.05+c*1.5,s.shopLit.emissiveIntensity=.3+c*.55,a.emissiveIntensity=c*.55},t}};function Xr(i,e=3){let t=i.attributes.position,n=i.attributes.normal,s=i.attributes.uv;for(let r=0;r<t.count;r++){let o=Math.abs(n.getX(r)),a=Math.abs(n.getY(r)),c,l;a>.5?(c=t.getX(r),l=t.getZ(r)):o>.5?(c=t.getZ(r),l=t.getY(r)):(c=t.getX(r),l=t.getY(r)),s.setXY(r,c/e,l/e)}return i}var Hi=i=>Math.atan2(i.x,i.z);function fp({route:i,kit:e,exclusions:t,rng:n,ROAD_HALF:s,WALK_OUT:r,RIVER:o}){let a=i.length,c={},l={},h={"-1":[],1:[]},u=[],f=t.slice(),d=(A,T)=>f.every(E=>Math.hypot(E.x-A.x,E.z-A.z)>E.r+T),x=A=>{i.frame((A-16)/a,c);let T=c.t.clone();return i.frame((A+16)/a,l),T.angleTo(l.t)<.085},v=[],g=["street","boulevard","street"],m=-1e9;for(let A=60;A<a-80&&v.length<g.length;A+=5){if(A-m<110||!x(A)||(i.frame(A/a,c),c.p.z<o.zNear+60))continue;let T=g[v.length],E=T==="boulevard"?e.roads.boulevard.size.x:e.roads.road.size.x,S=T==="boulevard"?e.roads.boulevard.size.z:105;if(!(T==="boulevard"&&!e.roads.boulevard))for(let _ of v.length%2?[-1,1]:[1,-1]){let C=c.r.clone().multiplyScalar(_),O=!0;for(let H=0;H<=S+20&&O;H+=6){let W=c.p.clone().addScaledVector(C,s+H);O=d(W,E/2+8)}if(O){v.push({s:A,side:_,kind:T,W:E,P:c.p.clone(),R:c.r.clone(),T:c.t.clone(),d:C}),m=A;break}}}let w=e.buildings.filter(A=>A.kind==="block").sort((A,T)=>T.size.x-A.size.x),M=A=>{let T=e.buildings.filter(E=>E.size.x<=A&&E.kind==="block");return T.length?T[Math.floor(n()*T.length)]:null};for(let A of v){let{d:T,W:E,side:S}=A,_=new D(-T.z,0,T.x),C=A.P.clone().addScaledVector(T,s).setY(.006);h[S].push([A.s-E/2-.3,A.s+E/2+.3]);let O=A.kind==="boulevard"?["boulevard"]:["crossing","road","manhole","crossroad","old","road","entrance"],H=0,W=Hi(T.clone().negate());for(let J of O){let N=e.roads[J];if(!N)continue;let j=N.place(C.clone().addScaledVector(T,H),W);for(let G of N.tips)u.push(G.clone().applyMatrix4(j));H+=N.size.z}A.length=H;for(let J=-2;J<=H+2;J+=4){let N=C.clone().addScaledVector(T,J);t.push({x:N.x,z:N.z,r:E/2+.6})}for(let J of[-1,1]){let N=16;for(;N<H-6;){let j=M(Math.min(34,H-N-2));if(!j)break;let G=j.size.x,q=j.size.z,oe=_.clone().multiplyScalar(-J),$=C.clone().addScaledVector(T,N+G/2).addScaledVector(_,J*(E/2+.3)).setY(0),le=$.clone().addScaledVector(oe,-q/2),Le=d(le,Math.hypot(G,q)/2)&&i.distToRoad(le.x,le.z)>r+q/2;for(let[K,de]of[[-G/2,0],[G/2,0],[-G/2,-q],[G/2,-q]]){let xe=$.clone().addScaledVector(T,K).addScaledVector(oe,de);i.distToRoad(xe.x,xe.z)<r+.8&&(Le=!1)}Le&&(j.place($,Hi(oe)),t.push({x:le.x,z:le.z,r:Math.min(G,q)*.55})),N+=G+.4+n()*1.5}}{let J=w.find(G=>G.size.x>=E+4)||w[0],N=C.clone().addScaledVector(T,H+1.5).setY(0),j=N.clone().addScaledVector(T,J.size.z/2);d(j,J.size.x/2)&&(J.place(N,Hi(T.clone().negate())),t.push({x:j.x,z:j.z,r:Math.max(J.size.x,J.size.z)*.55}))}if(A.kind==="street"&&e.props.lamp)for(let J=10;J<H-4;J+=24)for(let N of[-1,1]){let j=C.clone().addScaledVector(T,J+(N>0?0:12)).addScaledVector(_,N*(E/2-.45)).setY(.19),G=e.props.lamp.place(j,Hi(_.clone().multiplyScalar(-N)));for(let q of e.props.lamp.tips)u.push(q.clone().applyMatrix4(G))}if(e.props.signal)for(let J of[-1,1]){i.frame((A.s+J*(E/2+1.6))/a,l);let N=l.p.clone().addScaledVector(l.r,S*(s+.55)).setY(.16);e.props.signal.place(N,Hi(l.r.clone().multiplyScalar(-S))),t.push({x:N.x,z:N.z,r:1.5})}if(e.props.stop){let J=C.clone().addScaledVector(T,4).addScaledVector(_,E/2-.7).setY(.19);e.props.stop.place(J,Hi(T))}}let y=(A,T)=>h[T].some(([E,S])=>A>E-8&&A<S+8),P=0;for(let A=120;A<a-120&&P<2&&e.props.busstop;A+=7){let T=P%2?-1:1;if(y(A,T)||!x(A))continue;i.frame(A/a,c);let E=c.p.clone().addScaledVector(c.r,T*((s+r)/2+.2)).setY(.16);!d(E,12)||E.z<o.zNear+30||(e.props.busstop.place(E,Hi(c.r.clone().multiplyScalar(-T))),t.push({x:E.x,z:E.z,r:4}),P++,A+=180)}for(let[A,T]of[[70,"speed30"],[300,"speed30"],[520,"speed80"]]){let E=e.props[T];if(E)for(let S=A;S<A+60;S+=3){if(y(S,1))continue;i.frame(S/a,c);let _=c.p.clone().addScaledVector(c.r,s+.45).setY(.16);if(d(_,3)){E.place(_,Hi(c.t.clone().negate())),t.push({x:_.x,z:_.z,r:1.2});break}}}return{gaps:h,lampHeads:u,plan:v}}function dp({pf:i,route:e,s:t,side:n,WALK_OUT:s,excluded:r,inRiver:o}){let a=e.length,c=i.size.x,l=i.size.z,h=e.frame(Math.min(1,(t+c/2)/a)),u=h.r.clone().multiplyScalar(-n),f=h.t;for(let d=.25;d<=4.5;d+=.75){let x=h.p.clone().addScaledVector(h.r,n*(s+d)).setY(0),v=x.clone().addScaledVector(u,-l/2),g=Math.hypot(c,l)/2;if(o(v.z,g+4)||r(v.x,v.z,g*.8))return null;let m=!0;for(let[w,M]of[[-c/2,0],[c/2,0],[-c/2,-l],[c/2,-l],[0,-l],[-c/4,0],[c/4,0],[0,0]]){let y=x.clone().addScaledVector(f,w).addScaledVector(u,M);if(e.distToRoad(y.x,y.z)<s+.05||o(y.z,3)){m=!1;break}}if(m)return i.place(x,Hi(u)),{w:c,depth:l,centre:v,setback:d}}return null}var Yr=class extends vi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new pu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Ru(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=bs.extractUrlBase(e);o=bs.resolveURL(l,this.path)}else o=bs.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ir(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===vp){try{o[yt.KHR_BINARY_GLTF]=new Cu(e)}catch(u){s&&s(u);return}r=JSON.parse(o[yt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Fu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case yt.KHR_MATERIALS_UNLIT:o[u]=new fu;break;case yt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Pu(r,this.dracoLoader);break;case yt.KHR_TEXTURE_TRANSFORM:o[u]=new Iu;break;case yt.KHR_MESH_QUANTIZATION:o[u]=new Du;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Ky(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},uu=class{constructor(e){this.parser=e,this.name=yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new De(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],dn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Lr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new vs(h),l.distance=u;break;case"spot":l=new xs(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Gi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},fu=class{constructor(){this.name=yt.KHR_MATERIALS_UNLIT}getMaterialType(){return Jt}extendParams(e,t,n){let s=[];e.color=new De(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],dn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,kt))}return Promise.all(s)}},du=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},pu=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Se(a,a)}return Promise.all(r)}},mu=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},gu=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},xu=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],dn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,kt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},vu=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},bu=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(a[0],a[1],a[2],dn),Promise.all(r)}},yu=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},_u=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(a[0],a[1],a[2],dn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,kt)),Promise.all(r)}},Mu=class{constructor(e){this.parser=e,this.name=yt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Su=class{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Eu=class{constructor(e){this.parser=e,this.name=yt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},wu=class{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Tu=class{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Au=class{constructor(e){this.name=yt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},Ru=class{constructor(e){this.name=yt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Qn.TRIANGLES&&l.mode!==Qn.TRIANGLE_STRIP&&l.mode!==Qn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let x of u){let v=new Ve,g=new D,m=new Ft,w=new D(1,1,1),M=new yn(x.geometry,x.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,y),c.SCALE&&w.fromBufferAttribute(c.SCALE,y),M.setMatrixAt(y,v.compose(g,m,w));for(let y in c)if(y==="_COLOR_0"){let P=c[y];M.instanceColor=new Bs(P.array,P.itemSize,P.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&x.geometry.setAttribute(y,c[y]);Bt.prototype.copy.call(M,x),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},vp="glTF",Bo=12,pp={JSON:1313821514,BIN:5130562},Cu=class{constructor(e){this.name=yt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Bo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Bo,r=new DataView(e,Bo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===pp.JSON){let l=new Uint8Array(e,Bo+o,a);this.content=n.decode(l)}else if(c===pp.BIN){let l=Bo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Pu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=yt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Uu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Uu[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=qr[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let x in d.attributes){let v=d.attributes[x],g=c[x];g!==void 0&&(v.normalized=g)}u(d)},a,l,dn,f)})})}},Iu=class{constructor(){this.name=yt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Du=class{constructor(){this.name=yt.KHR_MESH_QUANTIZATION}},Sc=class extends ds{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,x=e*l,v=x-l,g=-2*d+3*f,m=d-f,w=1-g,M=m-f+u;for(let y=0;y!==a;y++){let P=o[v+y+a],A=o[v+y+c]*h,T=o[x+y+a],E=o[x+y]*h;r[y]=w*P+M*A+g*T+m*E}return r}},Jy=new Ft,Lu=class extends Sc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Jy.fromArray(r).normalize().toArray(r),r}},Qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},qr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mp={9728:cn,9729:Zt,9984:zh,9985:ao,9986:fr,9987:oi},gp={33071:zn,33648:mo,10497:ln},cu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Uu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Es={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$y={CUBICSPLINE:void 0,LINEAR:Sr,STEP:Mr},lu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Qy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ot({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xn})),i.DefaultMaterial}function Vs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function e_(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function t_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function n_(i){let e,t=i.extensions&&i.extensions[yt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hu(t.attributes):e=i.indices+":"+hu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+hu(i.targets[n]);return e}function hu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Nu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function i_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var s_=new Ve,Fu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ky,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new gs(this.options.manager):this.textureLoader=new ec(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ir(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Vs(r,a,s),Gi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[yt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(bs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=cu[s.type],a=qr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new pt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=cu[s.type],l=qr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0,v,g;if(d&&d!==u){let m=Math.floor(f/d),w="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,M=t.cache.get(w);M||(v=new l(a,m*d,s.count*d/h),M=new Ar(v,d/h),t.cache.add(w,M)),g=new Os(M,c,f%d/h,x)}else a===null?v=new l(s.count*c):v=new l(a,f,s.count*c),g=new pt(v,c,x);if(s.sparse!==void 0){let m=cu.SCALAR,w=qr[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,P=new w(o[1],M,s.sparse.count*m),A=new l(o[2],y,s.sparse.count*c);a!==null&&(g=new pt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let T=0,E=P.length;T<E;T++){let S=P[T];if(g.setX(S,A[T*c]),c>=2&&g.setY(S,A[T*c+1]),c>=3&&g.setZ(S,A[T*c+2]),c>=4&&g.setW(S,A[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=x}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=mp[f.magFilter]||Zt,h.minFilter=mp[f.minFilter]||oi,h.wrapS=gp[f.wrapS]||ln,h.wrapT=gp[f.wrapT]||ln,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==cn&&h.minFilter!==Zt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let x=f;t.isImageBitmapLoader===!0&&(x=function(v){let g=new nn(v);g.needsUpdate=!0,f(g)}),t.load(bs.resolveURL(u,r.path),x,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Gi(u,o),u.userData.mimeType=o.mimeType||i_(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[yt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[yt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[yt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ui,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new zs,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ot}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[yt.KHR_MATERIALS_UNLIT]){let u=s[yt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],dn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,kt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Vt);let h=r.alphaMode||lu.OPAQUE;if(h===lu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===lu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Jt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Se(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Jt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Jt){let u=r.emissiveFactor;a.emissive=new De().setRGB(u[0],u[1],u[2],dn)}return r.emissiveTexture!==void 0&&o!==Jt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,kt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Gi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Vs(s,u,r),u})}createUniqueName(e){let t=Gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return xp(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=n_(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[yt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=xp(new Ct,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Qy(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,x=h.length;d<x;d++){let v=h[d],g=o[d],m,w=l[d];if(g.mode===Qn.TRIANGLES||g.mode===Qn.TRIANGLE_STRIP||g.mode===Qn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new Oa(v,w):new Ge(v,w),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Qn.TRIANGLE_STRIP?m.geometry=ru(m.geometry,rc):g.mode===Qn.TRIANGLE_FAN&&(m.geometry=ru(m.geometry,Ao));else if(g.mode===Qn.LINES)m=new Cr(v,w);else if(g.mode===Qn.LINE_STRIP)m=new Rr(v,w);else if(g.mode===Qn.LINE_LOOP)m=new Ha(v,w);else if(g.mode===Qn.POINTS)m=new hs(v,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&t_(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Gi(m,r),g.extensions&&Vs(s,m,g),t.assignFinalMaterial(m),u.push(m)}for(let d=0,x=u.length;d<x;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Vs(s,u[0],r),u[0];let f=new ft;r.extensions&&Vs(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,x=u.length;d<x;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Qt(ys.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new os(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new Ve;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ba(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],x=s.samplers[d.sampler],v=d.target,g=v.node,m=s.parameters!==void 0?s.parameters[x.input]:x.input,w=s.parameters!==void 0?s.parameters[x.output]:x.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",w)),l.push(x),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],x=u[2],v=u[3],g=u[4],m=[];for(let w=0,M=f.length;w<M;w++){let y=f[w],P=d[w],A=x[w],T=v[w],E=g[w];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let S=n._createAnimationTracks(y,P,A,T,E);if(S)for(let _=0;_<S.length;_++)m.push(S[_])}return new Ja(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,s_)});for(let d=0,x=u.length;d<x;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new vo:l.length>1?h=new ft:l.length===1?h=l[0]:h=new Bt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Gi(h,r),r.extensions&&Vs(n,h,r),r.matrix!==void 0){let u=new Ve;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ft;n.name&&(r.name=s.createUniqueName(n.name)),Gi(r,n),n.extensions&&Vs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof Cn||f instanceof nn)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];Es[r.path]===Es.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Es[r.path]){case Es.weights:l=Ni;break;case Es.rotation:l=Fi;break;case Es.position:case Es.scale:l=Oi;break;default:switch(n.itemSize){case 1:l=Ni;break;case 2:case 3:default:l=Oi;break}break}let h=s.interpolation!==void 0?$y[s.interpolation]:Sr,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let x=new l(c[f]+"."+Es[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Nu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Fi?Lu:Sc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function r_(i,e,t){let n=e.attributes,s=new hn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){let h=Nu(qr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new D,c=new D;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,x=f.max;if(d!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(x[2]))),f.normalized){let v=Nu(qr[f.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Rn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function xp(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Uu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return bt.workingColorSpace!==dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bt.workingColorSpace}" not supported.`),Gi(i,e),r_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?e_(i,e.targets,t):i})}var Ec=function(){"use strict";var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,r,o=WebAssembly.instantiate(a(s),{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function a(m){for(var w=new Uint8Array(m.length),M=0;M<m.length;++M){var y=m.charCodeAt(M);w[M]=y>96?y-97:y>64?y-39:y+4}for(var P=0,M=0;M<m.length;++M)w[P++]=w[M]<60?n[w[M]]:(w[M]-60)*64+w[++M];return w.buffer.slice(0,P)}function c(m,w,M,y,P,A){var T=r.exports.sbrk,E=M+3&-4,S=T(E*y),_=T(P.length),C=new Uint8Array(r.exports.memory.buffer);C.set(P,_);var O=m(S,M,y,_,P.length);if(O==0&&A&&A(S,E,y),w.set(C.subarray(S,S+M*y)),T(S-T(0)),O!=0)throw new Error("Malformed buffer data: "+O)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(m){var w={object:new Worker(m),pending:0,requests:{}};return w.object.onmessage=function(M){var y=M.data;w.pending-=y.count,w.requests[y.id][y.action](y.value),delete w.requests[y.id]},w}function x(m){for(var w="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),M=new Blob([w],{type:"text/javascript"}),y=URL.createObjectURL(M),P=0;P<m;++P)u[P]=d(y);URL.revokeObjectURL(y)}function v(m,w,M,y,P){for(var A=u[0],T=1;T<u.length;++T)u[T].pending<A.pending&&(A=u[T]);return new Promise(function(E,S){var _=new Uint8Array(M),C=f++;A.pending+=m,A.requests[C]={resolve:E,reject:S},A.object.postMessage({id:C,count:m,size:w,source:_,mode:y,filter:P},[_.buffer])})}function g(m){o.then(function(){var w=m.data;try{var M=new Uint8Array(w.count*w.size);c(r.exports[w.mode],M,w.count,w.size,w.source,r.exports[w.filter]),self.postMessage({id:w.id,count:w.count,action:"resolve",value:M},[M.buffer])}catch(y){self.postMessage({id:w.id,count:w.count,action:"reject",value:y})}})}return{ready:o,supported:!0,useWorkers:function(m){x(m)},decodeVertexBuffer:function(m,w,M,y,P){c(r.exports.meshopt_decodeVertexBuffer,m,w,M,y,r.exports[l[P]])},decodeIndexBuffer:function(m,w,M,y){c(r.exports.meshopt_decodeIndexBuffer,m,w,M,y)},decodeIndexSequence:function(m,w,M,y){c(r.exports.meshopt_decodeIndexSequence,m,w,M,y)},decodeGltfBuffer:function(m,w,M,y,P,A){c(r.exports[h[P]],m,w,M,y,r.exports[l[A]])},decodeGltfBufferAsync:function(m,w,M,y,P){return u.length>0?v(m,w,M,h[y],l[P]):o.then(function(){var A=new Uint8Array(m*w);return c(r.exports[h[y]],A,m,w,M,r.exports[l[P]]),A})}}}();var _p=new D(0,1,0);function Ou(i,e){let t=i.geometry,n=t.attributes.position.count,s=new Ct,r=new D,o=new ut().getNormalMatrix(e),a=new ut().setFromMatrix4(e),c=new Float32Array(n*3);for(let h=0;h<n;h++)r.fromBufferAttribute(t.attributes.position,h).applyMatrix4(e),c[h*3]=r.x,c[h*3+1]=r.y,c[h*3+2]=r.z;if(s.setAttribute("position",new pt(c,3)),t.attributes.normal){let h=new Float32Array(n*3);for(let u=0;u<n;u++)r.fromBufferAttribute(t.attributes.normal,u).applyMatrix3(o).normalize(),h[u*3]=r.x,h[u*3+1]=r.y,h[u*3+2]=r.z;s.setAttribute("normal",new pt(h,3))}if(t.attributes.uv){let h=t.attributes.uv,u=new Float32Array(n*2);for(let f=0;f<n;f++)u[f*2]=h.getX(f),u[f*2+1]=h.getY(f);s.setAttribute("uv",new pt(u,2))}t.index&&s.setIndex(new pt(Uint32Array.from(t.index.array),1));let l=t.morphAttributes.position;if(l?.length){let h=t.morphTargetsRelative;s.morphTargetsRelative=h,s.morphAttributes.position=l.map(f=>{let d=new Float32Array(n*3);for(let x=0;x<n;x++)r.fromBufferAttribute(f,x),h?r.applyMatrix3(a):r.applyMatrix4(e),d[x*3]=r.x,d[x*3+1]=r.y,d[x*3+2]=r.z;return new pt(d,3)});let u=t.morphAttributes.normal;u?.length&&(s.morphAttributes.normal=u.map(f=>{let d=new Float32Array(n*3);for(let x=0;x<n;x++)r.fromBufferAttribute(f,x).applyMatrix3(o),d[x*3]=r.x,d[x*3+1]=r.y,d[x*3+2]=r.z;return new pt(d,3)}))}return s}function bp(i,e){let t=i.index.array,n=i.attributes.position.array,s=new Int32Array(i.attributes.position.count).fill(-1),r=[],o=0;for(let l=0;l<t.length;l+=3){let h=t[l],u=t[l+1],f=t[l+2],d=(n[h*3]+n[u*3]+n[f*3])/3,x=(n[h*3+1]+n[u*3+1]+n[f*3+1])/3,v=(n[h*3+2]+n[u*3+2]+n[f*3+2])/3;if(e(d,x,v))for(let g of[h,u,f])s[g]<0&&(s[g]=o++),r.push(s[g])}let a=l=>{let h=l.itemSize,u=new Float32Array(o*h);for(let f=0;f<s.length;f++)if(s[f]>=0)for(let d=0;d<h;d++)u[s[f]*h+d]=l.array[f*h+d];return new pt(u,h)},c=new Ct;for(let[l,h]of Object.entries(i.attributes))c.setAttribute(l,a(h));c.setIndex(new pt(Uint32Array.from(r),1));for(let[l,h]of Object.entries(i.morphAttributes))c.morphAttributes[l]=h.map(a);return c.morphTargetsRelative=i.morphTargetsRelative,c}function zo(i){let e=[];for(let t of i)t.traverse(n=>n.isMesh&&e.push(n));return e}var wc=class{constructor(e,t){this.name=e,this.parts=t,this.box=new hn;for(let n of t)n.geometry.computeBoundingBox(),this.box.union(n.geometry.boundingBox);this.size=this.box.getSize(new D),this.instances=[],this.tips=[]}place(e,t,n=1){let s=new Ve().compose(e,new Ft().setFromAxisAngle(_p,t),new D(n,n,n));return this.instances.push(s),s}};function Ws(i,e,t,{yaw:n=0,scale:s=1,mergeByMaterial:r=!0}={}){let o=new Ve().makeScale(s,s,s).multiply(new Ve().makeRotationY(n)).multiply(new Ve().makeTranslation(-t.x,-t.y,-t.z)),a=new Map;for(let h of zo(e)){let u=Ou(h,o.clone().multiply(h.matrixWorld)),f=r?h.material.uuid:h.uuid,d="";for(let x=h;x&&!d;x=x.parent)e.includes(x)&&(d=x.name);a.has(f)||a.set(f,{material:h.material,geos:[],src:d}),a.get(f).geos.push(u)}let c=[];for(let{material:h,geos:u,src:f}of a.values()){let d=u.length>1?Dn(u):u[0];if(!d){for(let x of u)c.push({geometry:x,material:h,src:f});continue}c.push({geometry:d,material:h,src:f})}let l=new wc(i,c);return l.toPrefab=o,l}var Vi=i=>{let e=new hn;for(let t of i)e.expandByObject(t);return e};function yp(i){let e=zo([i]),t=new D,n=Vi([i]),s=new D,r=0;for(let h of e){let u=h.geometry.attributes.position;for(let f=0;f<u.count;f++)t.fromBufferAttribute(u,f).applyMatrix4(h.matrixWorld),t.y<n.min.y+.4&&(s.add(t),r++)}s.divideScalar(Math.max(1,r)),s.y=n.min.y;let o=n.max.x-n.min.x,a=n.max.z-n.min.z,c=[],l=n.max.y-.25;if(o>a)for(let h of[n.min.x,n.max.x])Math.abs(h-s.x)>.9&&c.push(new D(h+Math.sign(s.x-h)*.35,l,s.z));else for(let h of[n.min.z,n.max.z])Math.abs(h-s.z)>.9&&c.push(new D(s.x,l,h+Math.sign(s.z-h)*.35));return{base:s,tips:c}}function o_(i,e=1){let t=i.image;if(!t||!t.width)return null;let n=Math.min(512,t.width),s=Math.min(512,t.height),r=document.createElement("canvas");r.width=n,r.height=s;let o=r.getContext("2d",{willReadFrequently:!0});o.drawImage(t,0,0,n,s);let a=o.getImageData(0,0,n,s),c=e*9301+49297,l=()=>(c=(c*9301+49297)%233280)/233280,h=14,u=[];for(let x=0;x<Math.ceil(n/h)*Math.ceil(s/h);x++)u.push(l()<.38?.6+l()*.4:0);let f=Math.ceil(n/h);for(let x=0;x<s;x++)for(let v=0;v<n;v++){let g=(x*n+v)*4,m=a.data[g]/255,w=a.data[g+1]/255,M=a.data[g+2]/255,y=.2126*m+.7152*w+.0722*M,P=Math.max(m,w,M)-Math.min(m,w,M),T=(y<.26&&P<.16?1:0)*u[Math.floor(x/h)*f+Math.floor(v/h)];a.data[g]=255*T,a.data[g+1]=196*T,a.data[g+2]=120*T,a.data[g+3]=255}o.putImageData(a,0,0);let d=new ks(r);return d.flipY=i.flipY,d.colorSpace=kt,d.wrapS=i.wrapS,d.wrapT=i.wrapT,d.channel=i.channel,d}function a_(){let i=document.createElement("canvas");i.width=512,i.height=1024;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,1024);return t.addColorStop(0,"#11151b"),t.addColorStop(1,"#2a1c10"),e.fillStyle=t,e.fillRect(0,0,512,1024),e.fillStyle="#f5c518",e.font='400 120px "Instrument Serif", Georgia, serif',e.fillText("Boring",40,300),e.fillText("work?",40,420),e.fillStyle="#ffffff",e.font='italic 400 64px "Instrument Serif", Georgia, serif',e.fillText("Let a bot do it.",40,520),e.font='600 26px "JetBrains Mono", monospace',e.fillStyle="#c8c0b2",e.fillText("SAP \xB7 PYTHON \xB7 POWER BI",40,620),e.fillStyle="#f5c518",e.fillRect(40,860,432,90),e.fillStyle="#111",e.font="800 30px Manrope, sans-serif",e.fillText("PIYUSH4U.GITHUB.IO",64,918),i}async function Mp(i){let e=new Yr().setMeshoptDecoder(Ec),t=["roadkit","soho","blocks","tree"],n={},s=()=>i?.(Object.values(n).reduce((P,A)=>P+A,0)/t.length),[r,o,a,c]=await Promise.all(t.map(P=>e.loadAsync(`assets/models/${P}.glb`,A=>{A.total&&(n[P]=A.loaded/A.total,s())})));for(let P of[r,o,a,c])P.scene.updateMatrixWorld(!0);let l={buildings:[],props:{},roads:{},trees:[],nightMats:[]},h=(P,A)=>{let T=[];return P.scene.traverse(E=>{A.test(E.name)&&E.parent&&!A.test(E.parent.name)&&T.push(E)}),T},u=(P,A)=>h(P,A)[0],f=(P,A)=>{if(!P.map||P.userData.night)return;let T=o_(P.map,A);T&&(P.emissiveMap=T,P.emissive=new De(16777215),P.emissiveIntensity=0,P.userData.night="windows",l.nightMats.push(P))},d=P=>{!P.map||P.userData.night||(P.emissiveMap=P.map,P.emissive=new De(16769720),P.emissiveIntensity=0,P.userData.night="shop",l.nightMats.push(P))},x=3,v=[];a.scene.traverse(P=>{/^Building(_0\d)?$/.test(P.name)&&v.push(P)});for(let P of v){let A=Vi([P]),T=Ws(P.name,[P],new D((A.min.x+A.max.x)/2,A.min.y,A.max.z));for(let E of T.parts){let S=E.material.name||"";E.material.envMapIntensity=.8,/^Shops/.test(S)?d(E.material):/^building/.test(S)&&f(E.material,x++)}T.kind="block",l.buildings.push(T)}let g=.44,m=h(o,/^BROWN_SOHO00[1-6]_\d+$/);{let P=Vi(m),A=Ws("soho-block",m,new D((P.min.x+P.max.x)/2,g,P.max.z-.6));A.kind="soho",l.buildings.push(A)}for(let[P,A]of[["soho-brown",/^BROWN_SOHO00[34]_\d+$/],["soho-green",/^BROWN_SOHO006_\d+$/]]){let T=h(o,A),E=Vi(T),S=Ws(P,T,new D((E.min.x+E.max.x)/2,g,E.max.z-.4)),_=new Oe(S.size.x-.5,S.box.max.y-.6,S.size.z-2.2);_.translate(0,(S.box.max.y-.6)/2,S.box.min.z+(S.size.z-2.2)/2+.25);let C=_.attributes.uv,O=_.attributes.position,H=_.attributes.normal;for(let W=0;W<O.count;W++){let J=Math.abs(H.getX(W))>.5;C.setXY(W,(J?O.getZ(W):O.getX(W))/4,O.getY(W)/4)}S.parts.push({geometry:_,material:gt("concrete",{color:12432292}),src:"core"}),S.kind="soho",l.buildings.push(S)}o.scene.traverse(P=>{P.isMesh&&/SoHo/.test(P.material.name)&&f(P.material,x++)});for(let[P,A]of[["crossing",/^Pedestrian_crossing/],["road",/^Road_\d/],["manhole",/^Manhole/],["old",/^Old_/],["crossroad",/^Crossroad/],["entrance",/^Road_entrance/]]){let T=u(r,A);if(!T)continue;let E=Vi([T]);l.roads[P]=Ws(P,[T],new D((E.min.x+E.max.x)/2,0,E.max.z))}{let P=u(r,/^Double_road_\d/),A=h(r,/^Dual_light_pole/).filter(_=>{let C=Vi([_]).getCenter(new D),O=Vi([P]);return C.x>O.min.x&&C.x<O.max.x&&C.z>O.min.z&&C.z<O.max.z}),T=Vi([P]),E=new D((T.min.x+T.max.x)/2,0,T.max.z),S=Ws("boulevard",[P,...A],E);for(let _ of A)for(let C of yp(_).tips)S.tips.push(C.clone().applyMatrix4(S.toPrefab));l.roads.boulevard=S}let w=gt("steel",{color:9081496,repeat:[.3,2]}),M=(P,A)=>P.parts.forEach(T=>{T.material.name==="material_0"&&(T.material=A)}),y=(P,A,T)=>{let E=u(r,A);if(!E)return;let{base:S,tips:_}=yp(E),C=Ws(P,[E],S,{yaw:T});C.tips=_.map(O=>O.clone().applyMatrix4(C.toPrefab)),M(C,w),l.props[P]=C};y("lamp",/^Light_pole_24/,Math.PI/2),y("signal",/^Traffic_light_18/,Math.PI/2),y("stop",/^Stop_sign_45/,Math.PI/2),y("speed30",/^Speed_limit_plate_30/,Math.PI/2),y("speed80",/^Speed_limit_plate_80/,Math.PI/2);{let P=h(r,/bus_stop/),A=Vi(P),T=Ws("busstop",P,new D((A.min.x+A.max.x)/2,A.min.y,(A.min.z+A.max.z)/2),{yaw:Math.PI/2,mergeByMaterial:!1}),E=new ot({color:3883592,metalness:.7,roughness:.35}),S=new Ot({color:11060428,transparent:!0,opacity:.25,roughness:.05,depthWrite:!1}),_=new ks(a_());_.colorSpace=kt;let C=new ot({map:_,emissive:16777215,emissiveMap:_,emissiveIntensity:.25,roughness:.3});l.poster=C,_.flipY=!1;let O=T.box.getCenter(new D);T.parts.forEach(H=>{if(/^Glasses/.test(H.src))H.material=S;else if(/^Poster/.test(H.src)){H.material=C;let W=H.geometry;W.computeBoundingBox();let J=W.boundingBox,N=J.getCenter(new D),j=N.clone().sub(O).setY(0),G=J.getSize(new D);G.x<G.z?j.set(Math.sign(j.x)||1,0,0):j.set(0,0,Math.sign(j.z)||1);let q=j.clone().negate().cross(_p),oe=W.attributes.position,$=new Float32Array(oe.count*2),le=new D,Le=Math.abs(q.x)>.5?G.x:G.z;for(let K=0;K<oe.count;K++)le.fromBufferAttribute(oe,K).sub(N),$[K*2]=le.dot(q)/Le+.5,$[K*2+1]=.5-le.y/G.y;W.setAttribute("uv",new pt($,2))}else H.material=E}),l.props.busstop=T}{let P=zo([c.scene]).find(_=>_.material.name==="Bark"),A=zo([c.scene]).filter(_=>_!==P),T=c.animations[0],E=[-1/0,-92,-22,1/0],S=[8.6,9.6,7.6];for(let _=0;_<3;_++){let C=K=>K>E[_]&&K<=E[_+1],O=bp(Ou(P,P.matrixWorld),K=>C(K));O.computeBoundingBox();let H=O.attributes.position.array,W=new D,J=0;for(let K=0;K<H.length;K+=3)H[K+1]<O.boundingBox.min.y+2&&(W.x+=H[K],W.z+=H[K+2],J++);W.x/=J,W.z/=J,W.y=O.boundingBox.min.y;let N=[O],j=[],G=A.map(K=>({m:K,g:bp(Ou(K,K.matrixWorld),de=>C(de))}));G.forEach(({g:K})=>N.push(K));let q=-1/0;for(let K of N)K.computeBoundingBox(),q=Math.max(q,K.boundingBox.max.y);let oe=S[_]/(q-W.y),$=new Ve().makeScale(oe,oe,oe).multiply(new Ve().makeTranslation(-W.x,-W.y,-W.z)),le=K=>{K.applyMatrix4($);for(let de of Object.keys(K.morphAttributes))if(de==="position")for(let xe of K.morphAttributes[de])for(let fe=0;fe<xe.count;fe++)xe.setXYZ(fe,xe.getX(fe)*oe,xe.getY(fe)*oe,xe.getZ(fe)*oe);return K};j.push({geometry:le(O),material:P.material});for(let{m:K,g:de}of G){let xe=T.tracks.find(fe=>fe.name.startsWith(K.name+".morphTargetInfluences"));j.push({geometry:le(de),material:K.material,track:xe})}let Le=new wc("tree"+_,j);l.trees.push(Le)}for(let _ of zo([c.scene])){let C=_.material;C.metalness=0,C.metalnessMap=null,C.roughness=C.name==="Bark"?.95:.82,C.roughnessMap=null,C.envMapIntensity=.55,"specularIntensity"in C&&(C.specularIntensity=.25,C.specularIntensityMap=null,C.specularColorMap=null),C.side=Vt,C.name!=="Bark"&&(C.alphaTest=.45,C.transparent=!1),C.needsUpdate=!0}}return l}function ko(i,e,{shadows:t=!0,chunk:n,cull:s=0,layer:r=0}={}){let o=[];for(let a of e)if(a.instances.length)for(let c of a.parts){c.geometry.computeBoundingSphere();let l=c.geometry.boundingSphere.radius<.6||a.size.y<.5,h=t&&!c.material.transparent&&!l;c.meshes=Gr(c.geometry,c.material,a.instances,{cast:h,chunk:n,cull:s,layer:r});for(let u of c.meshes)i.add(u),o.push(u)}return o}function Sp(i){let e=new Ge,t=[],n=new Di,s=new Ve;for(let o of i){if(!o.instances.length)continue;let a=o.instances.map((c,l)=>l*1.618%6.4);for(let c of o.parts){if(!c.track||!c.meshes)continue;let l=c.track.createInterpolant(),h=c.geometry.morphAttributes.position?.length||0,u=c.track.times[c.track.times.length-1],f=c.material.alphaTest?new Fs({depthPacking:Ro,map:c.material.map,alphaTest:c.material.alphaTest}):null;for(let d of c.meshes){f&&(d.customDepthMaterial=f),e.morphTargetInfluences=new Array(h).fill(0);for(let x=0;x<d.count;x++)d.setMorphAt(x,e);t.push(x=>{if(!n.intersectsSphere(d.boundingSphere))return;e.morphTargetInfluences.length=h;let v=d.userData.indices;for(let g=0;g<v.length;g++){let m=l.evaluate((x*.8+a[v[g]])%u);for(let w=0;w<h;w++)e.morphTargetInfluences[w]=m[w];d.setMorphAt(g,e)}d.morphTexture.needsUpdate=!0})}}}let r=-1;return(o,a)=>{if(!(o-r<1/30)){r=o,a&&n.setFromProjectionMatrix(s.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse));for(let c of t)c(o)}}}var c_=new D(0,1,0),Wi=4.5,mn=7.4,qt={zNear:-582,zFar:-716,level:-3.2};function Ap(){let i=[[0,70],[0,20],[3,-40],[-10,-100],[-16,-160],[-2,-220],[18,-280],[20,-340],[2,-400],[-14,-455],[-8,-505],[0,-545],[0,-575],[0,-620],[0,-700],[0,-760],[0,-830]].map(([c,l])=>new D(c,0,l)),e=new yo(i,!1,"centripetal");e.arcLengthDivisions=2e3;let t=e.getLength(),n=1400,s=[];for(let c=0;c<=n;c++)s.push(e.getPointAt(c/n));return{curve:e,length:t,samples:s,uAtZ:c=>{let l=0,h=1/0;for(let u=0;u<=n;u++){let f=Math.abs(s[u].z-c);f<h&&(h=f,l=u)}return l/n},frame:(c,l={})=>(c=Math.min(1,Math.max(0,c)),l.p=e.getPointAt(c,l.p||new D),l.t=e.getTangentAt(c,l.t||new D).setY(0).normalize(),l.r=(l.r||new D).crossVectors(l.t,c_).normalize(),l),distToRoad:(c,l)=>{let h=1/0;for(let u=0;u<=n;u+=2){let f=s[u].x-c,d=s[u].z-l,x=f*f+d*d;x<h&&(h=x)}return Math.sqrt(h)}}}function l_(){let i=ui(21),e=[];for(let n=0;n<64;n++)e.push({shutter:i()<.38,balcony:i()<.22,lit:i()<.36,warm:i()<.75,blind:i()*.5});let t=n=>Ht(512,512,(s,r)=>{let o=r/8;if(s.fillStyle=n?"#000":"#efe9dd",s.fillRect(0,0,r,r),!n){for(let a=0;a<3e4;a++)s.fillStyle=`rgba(${i()<.5?"90,80,70":"255,255,255"},${i()*.12})`,s.fillRect(i()*r,i()*r,2,2);for(let a=0;a<140;a++)s.fillStyle=`rgba(70,64,55,${.04+i()*.08})`,s.fillRect(i()*r,i()*r,1+i()*3,20+i()*60)}e.forEach((a,c)=>{let l=c%8*o,h=Math.floor(c/8)*o;n||(s.fillStyle="rgba(60,52,44,0.18)",s.fillRect(l,h,o,4));let u=l+o*.3,f=h+o*.24,d=o*.4,x=o*.52;if(n){if(a.lit){let g=s.createLinearGradient(0,f,0,f+x);g.addColorStop(0,a.warm?"#ffd28a":"#cfe6ff"),g.addColorStop(1,a.warm?"#ff9f43":"#7fa9e0"),s.fillStyle=g,s.fillRect(u,f,d,x),s.fillStyle=`rgba(0,0,0,${a.blind})`,s.fillRect(u,f,d,x*.4)}return}s.fillStyle="rgba(70,60,50,0.35)",s.fillRect(u-3,f-3,d+6,x+6);let v=s.createLinearGradient(u,f,u+d,f+x);if(v.addColorStop(0,"#2f3c48"),v.addColorStop(1,"#151b22"),s.fillStyle=v,s.fillRect(u,f,d,x),s.fillStyle="rgba(220,230,240,0.12)",s.fillRect(u+2,f+2,d*.35,x-4),a.shutter){s.fillStyle="#3d6b4f",s.fillRect(u-d*.42,f,d*.38,x),s.fillRect(u+d*1.04,f,d*.38,x),s.fillStyle="rgba(0,0,0,0.25)";for(let g=0;g<7;g++)s.fillRect(u-d*.42,f+g*x/7,d*.38,1.5),s.fillRect(u+d*1.04,f+g*x/7,d*.38,1.5)}if(a.balcony){s.fillStyle="rgba(40,40,40,0.75)",s.fillRect(l+o*.12,f+x+2,o*.76,3);for(let g=0;g<9;g++)s.fillRect(l+o*.12+g*o*.76/8,f+x*.75,1.5,x*.25+4)}})});return{map:zt(t(!1),{repeat:!0}),emissive:zt(t(!0),{repeat:!0})}}function Ep(i,e,t,n,s=12,r=1,o=[]){let a=[],c=[],l=[],h=i.samples.length-1,u={},f=0,d=null,x=0;for(let m=0;m<=h;m+=r){if(i.frame(m/h,u),d&&(f+=d.distanceTo(u.p)),d=u.p.clone(),o.some(([y,P])=>f>y&&f<P)){x=0;continue}let w=u.p.clone().addScaledVector(u.r,e),M=u.p.clone().addScaledVector(u.r,t);if(a.push(w.x,n,w.z,M.x,n,M.z),c.push(0,f/s,1,f/s),x>0){let y=a.length/3-2;l.push(y-2,y,y-1,y-1,y,y+1)}x++}let v=new Ct;v.setAttribute("position",new At(a,3)),v.setAttribute("uv",new At(c,2)),v.setIndex(l),v.computeVertexNormals();let g=v.attributes.normal;for(let m=0;m<g.count;m++)g.setXYZ(m,0,1,0);return v}function wp(i,e,t,n=2,s=[]){let r=[],o=[],a=[],c=0,l=null,h=0,u=null,f=i.samples.length-1,d={},x=0;for(let g=0;g<=f;g+=n){i.frame(g/f,d);let m=d.p.clone().addScaledVector(d.r,e);if(l&&(c+=l.distanceTo(m)),l=m,u&&(h+=u.distanceTo(d.p)),u=d.p.clone(),s.some(([w,M])=>h>w&&h<M)){x=0;continue}if(r.push(m.x,0,m.z,m.x,t,m.z),a.push(c/2,0,c/2,1),x>0){let w=r.length/3-2;o.push(w-2,w,w-1,w-1,w,w+1)}x++}let v=new Ct;return v.setAttribute("position",new At(r,3)),v.setAttribute("uv",new At(a,2)),v.setIndex(o),v.computeVertexNormals(),v}function h_(i,e,t,n){let s=new Oe(i,e,t),r=s.attributes.uv,o=24,a=Math.floor(n()*8)/8,c=Math.floor(n()*8)/8;for(let l=0;l<6;l++)for(let h=0;h<4;h++){let u=l*4+h;if(l===2||l===3){r.setXY(u,.003,.997);continue}let f=l<2?t:i;r.setXY(u,r.getX(u)*(f/o)+a,r.getY(u)*(e/o)+c)}return s.translate(0,e/2,0),s}var Tp=["#e9dcc0","#d39a76","#efe6d2","#bccab9","#e2b98b","#cfc7b8","#e8cfc7","#f3eee3","#c9b48f","#a9bfc9","#dcc6a0"];function Rp(i,e,t,n,s=null){let r=ui(42),o={nightMats:[],update:[]},a=e.samples.length-1,c=(X,se)=>{let re=Math.abs(se-X),me=gt("ground",{repeat:[3600/10,re/10]}),B=new Ge(new Tt(3600,re),me);B.rotation.x=-Math.PI/2,B.position.set(0,-.02,(X+se)/2),B.receiveShadow=!0,i.add(B)};c(1500,qt.zNear),c(qt.zFar,-2600);let l=(()=>{let se=new Uint8Array(262144),re=(B,V)=>Math.sin(B*.11)*.5+Math.sin(V*.07+B*.03)*.8+Math.sin((B+V)*.23)*.3+Math.sin(B*.4-V*.31)*.15;for(let B=0;B<256;B++)for(let V=0;V<256;V++){let Z=2*Math.PI/256,ae=re((V+1)*Z*40,B*Z*40)-re((V-1)*Z*40,B*Z*40),Me=re(V*Z*40,(B+1)*Z*40)-re(V*Z*40,(B-1)*Z*40),ye=new D(-ae,-Me,2).normalize(),Ne=(B*256+V)*4;se[Ne]=(ye.x*.5+.5)*255,se[Ne+1]=(ye.y*.5+.5)*255,se[Ne+2]=(ye.z*.5+.5)*255,se[Ne+3]=255}let me=new ci(se,256,256);return me.wrapS=me.wrapT=ln,me.repeat.set(60,4),me.needsUpdate=!0,me})(),h;if(n.tier===0)h=new Ge(new Tt(3600,qt.zNear-qt.zFar+10),new Ot({color:1914432,roughness:.06,metalness:.1,normalMap:l,normalScale:new Se(.35,.35),clearcoat:1,clearcoatRoughness:.1})),o.update.push(X=>{l.offset.set(X*.004,X*.011)});else{l.repeat.set(1,1),h=new vc(new Tt(3600,qt.zNear-qt.zFar+10),{textureWidth:n.tier===2?512:256,textureHeight:n.tier===2?512:256,waterNormals:l,sunDirection:new D(.3,.6,-.7).normalize(),sunColor:16769712,waterColor:862e3,distortionScale:1.6,fog:!0,alpha:1}),h.material.uniforms.size.value=6,o.water=h;let X=h.onBeforeRender.bind(h),se=0;h.onBeforeRender=(...re)=>{o.reflections!==!1&&!(se++&1)&&X(...re)},o.update.push((re,me)=>{h.material.uniforms.time.value=re*.35,h.visible=!me||me.position.z<-380})}h.rotation.x=-Math.PI/2,h.position.set(0,qt.level,(qt.zNear+qt.zFar)/2),i.add(h);let u=gt("concrete",{repeat:[900,1.2],color:10262154});for(let X of[qt.zNear,qt.zFar]){let se=new Ge(new Oe(3600,4.5,2),u);se.position.set(0,-2.2,X+(X===qt.zNear?-1:1)),se.receiveShadow=!0,i.add(se)}let f=s?fp({route:e,kit:s,exclusions:t,rng:ui(91),ROAD_HALF:Wi,WALK_OUT:mn,RIVER:qt}):{gaps:{"-1":[],1:[]},lampHeads:[]};o.streets=f;let d=gt("asphalt",{side:Vt,normalScale:1.2,envMapIntensity:1.1}),x=new Ge(Ep(e,-Wi,Wi,0,9,1),d);x.receiveShadow=!0,i.add(x),fi(x,{chunk:140,cull:520}).forEach(X=>X.layers.set(1)),o.road=d;let v=Nn(gt("pavers",{side:Vt}),{height:.4,strength:0});for(let[X,se,re]of[[Wi,mn,1],[-mn,-Wi,-1]]){let me=Ep(e,X,se,.16,2.4,1,f.gaps[re]),B=me.attributes.uv;for(let Z=0;Z<B.count;Z++)B.setX(Z,B.getX(Z)*((mn-Wi)/2.4));let V=new Ge(me,v);V.receiveShadow=!0,i.add(V),fi(V,{chunk:140,cull:420}).forEach(Z=>Z.layers.set(1))}let g=new ot({map:sn.curb_col,roughness:.8,side:Vt}),m=gt("concrete",{repeat:[1,.05],side:Vt});for(let X of[Wi,-Wi]){let se=new Ge(wp(e,X,.16,1,f.gaps[Math.sign(X)]),g);se.receiveShadow=!0,i.add(se),fi(se,{chunk:140,cull:300}).forEach(re=>re.layers.set(1))}for(let X of[mn,-mn]){let se=new Ge(wp(e,X,.16,2,f.gaps[Math.sign(X)]),m);i.add(se),fi(se,{chunk:140,cull:300}).forEach(re=>re.layers.set(1))}let w=(X,se=6)=>X<qt.zNear+se&&X>qt.zFar-se,M=(X,se,re)=>t.some(me=>Math.hypot(me.x-X,me.z-se)<me.r+re),y=l_(),P=[],A=[],T=[],E=[],S=new Mc(ui(77),{lite:n.isMobile}),_=(X,se,re,me,B,V,Z=mn+.6,ae=0,Me=0)=>{let ye=Math.hypot(re,me)/2;if(w(se,ye+4)||M(X,se,ye))return!1;let Ne=Math.cos(V),rt=Math.sin(V);for(let[ct,$t]of[[-re/2,-me/2],[re/2,-me/2],[-re/2,me/2],[re/2,me/2],[0,0]]){let bn=X+ct*Ne+$t*rt,Hn=se-ct*rt+$t*Ne;if(e.distToRoad(bn,Hn)<Z)return!1}let ht=Tp[Math.floor(r()*Tp.length)];if(ae){let ct=Xr(new Oe(re,B,me).translate(0,B/2,0));zi(ct,ht),ct.rotateY(V),ct.translate(X,0,se),E.push(Un(ct)),S.addBuilding({x:X,z:se,rot:V,side:ae,perp:re,along:me,floors:Me,tint:ht})}else{let ct=h_(re,B,me,r);zi(ct,ht),ct.rotateY(V),ct.translate(X,0,se),P.push(Un(ct))}let nt=new Oe(re+.3,.6,me+.3);nt.translate(0,B+.3,0),zi(nt,"#8a8378");let Pt=[nt],St=1+Math.floor(r()*3);for(let ct=0;ct<St;ct++){let $t=new _t(.7,.75,1.5,14);$t.translate((r()-.5)*(re-2),B+1.35,(r()-.5)*(me-2)),zi($t,"#141414"),Pt.push($t)}if(r()<.4){let ct=new Oe(2.5,2.4,2.5);ct.translate((r()-.5)*(re-3),B+1.2,(r()-.5)*(me-3)),zi(ct,"#bdb4a3"),Pt.push(ct)}for(let ct of Pt)ct.rotateY(V),ct.translate(X,0,se),A.push(Un(ct,["position","normal","color"]));return!0},C={};for(let X of[-1,1]){let se=4,re=e.length,me=s?s.buildings.filter(V=>V.kind==="block"||V.name!=="soho-block"):[],B=0;for(;se<re+30;){if(me.length&&r()<.9){let St=[];B<2&&r()<.18&&St.push(s.buildings.find($t=>$t.name==="soho-block")),St.push(me[Math.floor(r()*me.length)]),St.push(...me.slice().sort(($t,bn)=>$t.size.x-bn.size.x).slice(0,4).sort(()=>r()-.5));let ct=null;for(let $t of St)if(ct=dp({pf:$t,route:e,s:se,side:X,WALK_OUT:mn,excluded:M,inRiver:w}),ct){$t.name==="soho-block"&&B++;break}if(ct){t.push({x:ct.centre.x,z:ct.centre.z,r:Math.min(ct.w,ct.depth)*.5}),se+=ct.w+.15+r()*.6;continue}}let V=8+r()*8,Z=Math.min(1,se/re);e.frame(Z,C);let ae=9+r()*7,ye=r()<.06?8+Math.floor(r()*5):2+Math.floor(r()*3.2),Ne=Ss+ye*Wr+.3,rt=mn+1.2+ae/2+r()*1.5,ht=C.p.x+C.r.x*X*rt,nt=C.p.z+C.r.z*X*rt,Pt=Math.atan2(C.t.x,C.t.z);_(ht,nt,ae,V,Ne,Pt,mn+.6,X,ye),se+=V+.6+r()*2.5}for(se=0;se<e.length+60;){let V=Math.min(1,se/e.length);e.frame(V,C);let Z=12+r()*14,ae=12+r()*14,Me=r()<.18?34+r()*40:12+r()*16,ye=34+r()*30,Ne=C.p.x+C.r.x*X*ye,rt=C.p.z+C.r.z*X*ye;if(s&&r()<.45){let ht=s.buildings[Math.floor(r()*s.buildings.length)],nt=Math.hypot(ht.size.x,ht.size.z)/2;if(!w(rt,nt+4)&&!M(Ne,rt,nt*.9)&&e.distToRoad(Ne,rt)>20+nt*.5){let Pt=new D(Ne,0,rt).addScaledVector(C.r,-X*ht.size.z/2);ht.place(Pt,Math.atan2(-C.r.x*X,-C.r.z*X)),t.push({x:Ne,z:rt,r:nt*.7}),se+=ht.size.x+6+r()*10;continue}}_(Ne,rt,Z,ae,Me,Math.atan2(C.t.x,C.t.z)+(r()-.5)*.3,20),se+=Z+6+r()*10}}for(let X=0;X<70;X++){let se=(r()-.5)*520,re=qt.zFar-24-r()*240,me=12+r()*18,B=12+r()*18,V=r()<.3?40+r()*55:14+r()*22;_(se,re,me,B,V,(r()-.5)*.4,14)}for(let X=0;X<36;X++){let se=(r()<.5?-1:1)*(26+r()*240),re=qt.zNear+22+r()*70;_(se,re,12+r()*10,10+r()*10,10+r()*22,(r()-.5)*.2,14)}let O=new ot({map:y.map,emissiveMap:y.emissive,emissive:16777215,emissiveIntensity:0,vertexColors:!0,roughness:.88}),H=Nn(gt("plaster",{vertexColors:!0,normalScale:1.4}),{height:3.2,strength:.38}),W=new Ge(Dn([...E,...S.wallGeos]),H);W.castShadow=!0,W.receiveShadow=!0,i.add(W),fi(W,{chunk:140,cull:600}).forEach(X=>X.layers.set(1));let J=S.build(i),N=new Ge(Dn(P),O);N.castShadow=!0,N.receiveShadow=!0,i.add(N),fi(N,{chunk:140,cull:660});let j=new Ge(Dn(A),new ot({vertexColors:!0,roughness:.85}));if(j.castShadow=!0,j.receiveShadow=!0,i.add(j),fi(j,{chunk:140,cull:320}).forEach(X=>X.layers.set(1)),T.length){let X=new Ge(Dn(T),new ot({vertexColors:!0,roughness:.75,side:Vt}));X.castShadow=!0,i.add(X),fi(X,{chunk:140,cull:200}).forEach(se=>se.layers.set(1))}o.windows=O;let G=Dn([Un(new _t(.07,.11,7,10).translate(0,3.5,0),["position","normal","uv"]),Un(new Oe(.07,.07,1.8).translate(0,6.95,.9),["position","normal","uv"]),Un(new Oe(.3,.12,.6).translate(0,6.9,1.85),["position","normal","uv"])]),q=new Oe(.26,.04,.5).translate(0,6.83,1.85),oe=[],$=s?.props.lamp?7.2:6.2;for(let X=6;X<e.length-10;X+=26){e.frame(X/e.length,C);for(let se of[-1,1]){let re=Wi+1,me=C.p.x+C.r.x*se*re,B=C.p.z+C.r.z*se*re;if(M(me,B,1))continue;let V=Math.atan2(-C.r.x*se,-C.r.z*se);oe.push({x:me,z:B,rot:V,side:se,onBridge:w(B,0)})}}let le=s?.props.lamp,Le=[];if(le){for(let X of oe){let se=le.place(new D(X.x,.16,X.z),X.rot);for(let re of le.tips)Le.push({pos:re.clone().applyMatrix4(se),yaw:X.rot})}for(let X of f.lampHeads)Le.push({pos:X,yaw:0})}let K=new yn(G,gt("steel",{color:4870230,repeat:[.5,2]}),le?0:oe.length),de=new ot({color:16773840,emissive:16763266,emissiveIntensity:0}),xe=le?Le.length:oe.length,fe=new yn(le?new Oe(.34,.05,.6):q,de,xe),be=$n("rgba(255,196,120,0.9)","rgba(255,170,90,0)",128),Xe=new Jt({map:be,transparent:!0,opacity:0,depthWrite:!1,blending:gi}),qe=new yn(new Tt(8,8).rotateX(-Math.PI/2),Xe,xe),it=new Ve,pe=new Ft,Ee=new D,z=new D(1,1,1);le?Le.forEach(({pos:X,yaw:se},re)=>{pe.setFromAxisAngle(new D(0,1,0),se),it.compose(Ee.copy(X).setY(X.y-.12),pe,z),fe.setMatrixAt(re,it),it.compose(Ee.set(X.x,.03,X.z),new Ft,z),qe.setMatrixAt(re,it)}):oe.forEach((X,se)=>{pe.setFromAxisAngle(new D(0,1,0),X.rot),it.compose(Ee.set(X.x,.16,X.z),pe,z),K.setMatrixAt(se,it),fe.setMatrixAt(se,it);let re=X.x+Math.sin(X.rot)*1.85,me=X.z+Math.cos(X.rot)*1.85;it.compose(Ee.set(re,.03,me),new Ft,z),qe.setMatrixAt(se,it)}),K.castShadow=!0,qe.renderOrder=2,i.add(K,fe,qe),o.lampHead=de,o.lampPool=Xe;let Ke=[],we={"-1":oe.filter(X=>X.side===-1&&!X.onBridge),1:oe.filter(X=>X.side===1&&!X.onBridge)};for(let X of["-1","1"]){let se=we[X];for(let re=0;re<se.length-1;re++){let me=new D(se[re].x,$,se[re].z),B=new D(se[re+1].x,$,se[re+1].z);if(!(me.distanceTo(B)>40)&&!t.some(V=>V.r>5&&Math.hypot(V.x-(me.x+B.x)/2,V.z-(me.z+B.z)/2)<V.r))for(let V=0;V<3;V++){let Z=.8+V*.35+r()*.4,ae=me.clone().setY(me.y-V*.25);for(let Me=1;Me<=10;Me++){let ye=Me/10,Ne=me.clone().lerp(B,ye);Ne.y=$-V*.25-Math.sin(ye*Math.PI)*Z,Ke.push(ae.x,ae.y,ae.z,Ne.x,Ne.y,Ne.z),ae=Ne}}}}let We=new Ct;We.setAttribute("position",new At(Ke,3)),i.add(new Cr(We,new zs({color:1710618,transparent:!0,opacity:.7})));let Te=ui(5),et=[0,1,2].map(()=>{let X=[],se=[],re=new D(0,1,0),me=(Me,ye,Ne,rt)=>{let ht=Me.distanceTo(ye),nt=new _t(rt,Ne,ht,9,3,!0);nt.translate(0,ht/2,0);let Pt=nt.attributes.uv;for(let St=0;St<Pt.count;St++)Pt.setXY(St,Pt.getX(St)*2,Pt.getY(St)*ht);nt.applyQuaternion(new Ft().setFromUnitVectors(re,ye.clone().sub(Me).normalize())),nt.translate(Me.x,Me.y,Me.z),X.push(Un(nt,["position","normal","uv"]))},B=new D((Te()-.5)*.6,3.2+Te()*1.2,(Te()-.5)*.6);me(new D(0,-.2,0),B,.32,.22);let V=new D(0,6.4,0),Z=[],ae=5+Math.floor(Te()*3);for(let Me=0;Me<ae;Me++){let ye=Me/ae*Math.PI*2+Te()*.6,Ne=2.2+Te()*1.8,rt=B.clone().add(new D(Math.cos(ye)*Ne*.5,1.2+Te()*.8,Math.sin(ye)*Ne*.5)),ht=B.clone().add(new D(Math.cos(ye)*Ne,2.4+Te()*1.6,Math.sin(ye)*Ne));me(B,rt,.16,.11),me(rt,ht,.11,.05),Z.push(ht,rt.clone().lerp(ht,.5))}Z.push(B.clone().add(new D(0,3.2,0)));for(let Me of Z)for(let ye=0;ye<9;ye++){let Ne=1.5+Te()*1.1,rt=new Tt(Ne,Ne);rt.rotateX(-Math.PI/2+(Te()-.5)*1.6),rt.rotateY(Te()*Math.PI*2);let ht=new D((Te()-.5)*1.8,(Te()-.3)*1.2,(Te()-.5)*1.8);rt.translate(Me.x+ht.x,Me.y+ht.y,Me.z+ht.z);let nt=rt.attributes.position,Pt=rt.attributes.normal;for(let St=0;St<nt.count;St++){let ct=new D(nt.getX(St),nt.getY(St),nt.getZ(St)).sub(V);ct.y*=1.6,ct.normalize(),Pt.setXYZ(St,ct.x,ct.y,ct.z)}se.push(Un(rt,["position","normal","uv"]))}return{wood:Dn(X),leaves:Dn(se)}}),Be=[];for(let X=14;X<e.length;X+=9+r()*10){e.frame(X/e.length,C);let se=r()<.5?-1:1,re=mn-.9,me=C.p.x+C.r.x*se*re,B=C.p.z+C.r.z*se*re;w(B,8)||t.some(V=>(V.r>9||V.r<4.5)&&Math.hypot(V.x-me,V.z-B)<V.r+2.5)||Be.push([me,B,.7+r()*.35,r()*6,!0])}let F=s?n.isMobile?50:150:260;for(let X=0;X<F;X++){let se=(r()-.5)*500,re=60-r()*900;w(re,10)||M(se,re,3)||e.distToRoad(se,re)<12||Be.push([se,re,.9+r()*.6,r()*6])}let I=gt("bark",{normalScale:1.5}),Q=new ot({map:sn.leaves_col,normalMap:sn.leaves_nor,alphaTest:.45,side:Vt,roughness:.78,color:16777215});Q.map.wrapS=Q.map.wrapT=zn;let ue=new Fs({depthPacking:Ro,map:sn.leaves_col,alphaTest:.45}),ve=new De;if(s?.trees.length){let X=s.trees;Be.forEach(([se,re,me,B,V],Z)=>{V?X[1+Z%2].place(new D(se,.1,re),B,.62+me*.18):X[Z%X.length].place(new D(se,.1,re),B,.8+me*.3)})}else et.forEach((X,se)=>{let re=Be.filter((V,Z)=>Z%3===se);if(!re.length)return;let me=new yn(X.wood,I,re.length),B=new yn(X.leaves,Q,re.length);B.customDepthMaterial=ue,re.forEach(([V,Z,ae,Me],ye)=>{pe.setFromAxisAngle(new D(0,1,0),Me),it.compose(Ee.set(V,.1,Z),pe,new D(ae,ae,ae)),me.setMatrixAt(ye,it),B.setMatrixAt(ye,it),B.setColorAt(ye,ve.setHSL(.22+r()*.06,.45+r()*.2,.62+r()*.18))}),me.castShadow=B.castShadow=!0,me.receiveShadow=B.receiveShadow=!0,i.add(me,B)});let he=new Ct,Ze=[];for(let X=0;X<1800;X++){let se=r()*Math.PI*2,re=Math.acos(r()*.92);Ze.push(Math.sin(re)*Math.cos(se)*640,Math.cos(re)*640,Math.sin(re)*Math.sin(se)*640)}he.setAttribute("position",new At(Ze,3));let Ie=new Ui({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),Ue=new hs(he,Ie);i.add(Ue);let tt=new Ge(new Pn(8.5,32,16),new Jt({color:16774880,fog:!1,transparent:!0,opacity:0})),_e=new Li(new xi({map:$n("rgba(255,240,210,0.55)","rgba(255,240,210,0)"),fog:!1,transparent:!0,opacity:0,depthWrite:!1}));_e.scale.set(108,108,1),i.add(tt,_e);let je=new gs().load("assets/tex/cloud.webp");je.colorSpace=kt;let Je=new ft,$e=[];for(let X=0;X<18;X++){let se=new xi({map:je,transparent:!0,depthWrite:!1,fog:!1,opacity:.55+r()*.35,rotation:r()*6.28});se.userData.base=se.opacity,$e.push(se);let re=new Li(se),me=r()*Math.PI*2,B=430+r()*200;re.position.set(Math.cos(me)*B,85+r()*130,Math.sin(me)*B);let V=160+r()*220;re.scale.set(V*(1.4+r()),V,1),re.userData.base=se.opacity,Je.add(re)}if(Je.renderOrder=-1,i.add(Je),o.clouds=Je,o.tintClouds=(X,se)=>$e.forEach(re=>{re.color.copy(X),re.opacity=re.userData.base*se}),o.sky={stars:Ue,starMat:Ie,moon:tt,moonGlow:_e},s){ko(i,s.buildings,{chunk:140,cull:640,layer:1}),ko(i,Object.values(s.roads),{cull:460,layer:1}),ko(i,Object.values(s.props),{chunk:140,cull:300,layer:1}),ko(i,s.trees,{chunk:140,cull:300,layer:1});let X=Sp(s.trees);o.update.push((se,re)=>X(se,re))}return o.setNight=X=>{if(s){for(let se of s.nightMats)se.emissiveIntensity=se.userData.night==="windows"?X*1.8:X*.55;s.poster&&(s.poster.emissiveIntensity=.25+X*.9)}O.emissiveIntensity=X*1.25,J.setNight(X),de.emissiveIntensity=X*6,Xe.opacity=X*.55,qe.visible=X>.01,Ue.visible=X>.35,tt.visible=_e.visible=X>.3,Ie.opacity=Math.max(0,X-.35)*1.4,tt.material.opacity=Math.max(0,X-.3),_e.material.opacity=Math.max(0,X-.3)*.8},o}function Cp(i,e){let t=new ft,n=qt.zNear+6,s=qt.zFar-6,r=n-s,o=7.2,a=M=>{let y=[[0,7],[.22,30],[.36,21],[.5,15.5],[.64,21],[.78,30],[1,7]];for(let P=0;P<y.length-1;P++)if(M<=y[P+1][0]){let A=(M-y[P][0])/(y[P+1][0]-y[P][0]);return y[P][1]+(y[P+1][1]-y[P][1])*A}return 7},c=26,l=[],h=(M,y,P)=>new D(M,y,n-P*r);for(let M of[-o,o]){for(let y=0;y<c;y++){let P=y/c,A=(y+1)/c;l.push([h(M,.4,P),h(M,.4,A),.55]),l.push([h(M,a(P),P),h(M,a(A),A),.6]),l.push([h(M,.4,P),h(M,a(P),P),.35]),l.push([h(M,.4,P),h(M,a(A),A),.22]),l.push([h(M,a(P),P),h(M,.4,A),.22])}l.push([h(M,.4,1),h(M,a(1),1),.35]);for(let y of[.22,.78])l.push([h(M,qt.level-1,y),h(M,a(y)+2,y),1.4])}for(let M=0;M<=c;M++){let y=M/c,P=a(y);P>9&&(l.push([h(-o,P,y),h(o,P,y),.28]),M<c&&l.push([h(-o,P,y),h(o,a((M+1)/c),(M+1)/c),.16]))}let u=gt("steel",{color:6976124,repeat:[1,3],normalScale:1.5}),f=new yn(new Oe(1,1,1),u,l.length),d=new Ve;l.forEach(([M,y,P],A)=>f.setMatrixAt(A,Qd(M,y,P,P,d))),f.castShadow=!0,f.receiveShadow=!0,t.add(f);let x=new Ge(new Oe(o*2+1,1.4,r+2),gt("steel",{color:5264988,repeat:[2,20]}));x.position.set(0,-.72,n-r/2),x.receiveShadow=!0,t.add(x);for(let M of[.22,.78]){let y=new Ge(new Oe(o*2+6,4,7),gt("concrete",{repeat:[5,1]}));y.position.set(0,qt.level+.6,n-M*r),t.add(y)}let v=[];for(let M of[-o,o])for(let y=0;y<=120;y++){let P=y/120;v.push(h(M,a(P)+.45,P))}for(let M of[-o-.4,o+.4])for(let y=0;y<=60;y++){let P=y/60;v.push(h(M,.9,P))}let g=new ot({color:16770736,emissive:16761963,emissiveIntensity:0}),m=new yn(new Pn(.16,8,6),g,v.length);v.forEach((M,y)=>{d.makeTranslation(M.x,M.y,M.z),m.setMatrixAt(y,d)}),t.add(m);let w=new Ge(new Tt(22,140),new Jt({map:$n("rgba(255,190,110,0.6)","rgba(255,170,90,0)"),transparent:!0,opacity:0,depthWrite:!1,blending:gi}));return w.rotation.x=-Math.PI/2,w.position.set(0,qt.level+.05,n-r/2),t.add(w),i.add(t),{group:t,setNight(M){g.emissiveIntensity=.1+M*3.2,w.material.opacity=M*.8,w.visible=M>.01}}}var Ho=new D;function ei(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Ho.copy(e),Ho[n]=0,Ho.normalize();let l=.5*o/(o+a),h=1-Ho.angleTo(i)/c;return Math.sign(Ho[t])===1?h*l:a/(o+a)+l+l*(1-h)}var rn=class extends Oe{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new D,c=new D,l=new D(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,x=new D,v=.5/s;for(let g=0,m=0;g<h.length;g+=3,m+=2)switch(a.fromArray(h,g),c.copy(a),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),h[g+0]=l.x*Math.sign(a.x)+c.x*r,h[g+1]=l.y*Math.sign(a.y)+c.y*r,h[g+2]=l.z*Math.sign(a.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/d)){case 0:x.set(1,0,0),f[m+0]=ei(x,c,"z","y",r,n),f[m+1]=1-ei(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[m+0]=1-ei(x,c,"z","y",r,n),f[m+1]=1-ei(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[m+0]=1-ei(x,c,"x","z",r,e),f[m+1]=ei(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[m+0]=1-ei(x,c,"x","z",r,e),f[m+1]=1-ei(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[m+0]=1-ei(x,c,"x","y",r,e),f[m+1]=1-ei(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[m+0]=ei(x,c,"x","y",r,e),f[m+1]=1-ei(x,c,"y","x",r,t);break}}};var gn=1.62;function u_(){let i=new us,e=[[2.16,.46],[2.22,.66],[2.16,.88],[1.98,.98],[1.6,1.03],[.85,1.06],[-1.25,1.06],[-1.95,1.03],[-2.16,.96],[-2.22,.78],[-2.18,.52]];i.moveTo(2.16,.46);for(let n=1;n<e.length;n++)i.lineTo(e[n][0],e[n][1]);let t=(n,s,r)=>{let c=Math.asin(.13636363636363635),l=18;for(let h=0;h<=l;h++){let u=Math.PI-c-h/l*(Math.PI-2*c);i.lineTo(n+Math.cos(u)*.44,.36+Math.sin(u)*.44)}};return i.lineTo(-1.79,.42),t(-1.35),i.lineTo(.91,.42),t(1.35),i.lineTo(2.16,.46),i}function Pp(i,e,t=.07,n=5){let s=new Pr(i,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t*.85,bevelSegments:n,curveSegments:24});return s.translate(0,0,-e/2),s.computeVertexNormals(),s}function Ip(i,{yMid:e=.78,ky:t=.9,kx:n=.18,lean:s=0}={}){let r=i.attributes.position,o=i.attributes.normal,a=new D;for(let c=0;c<o.count;c++){let l=o.getZ(c);if(Math.abs(l)<.85)continue;let h=r.getX(c),u=r.getY(c);a.set(Math.sign(h)*Math.pow(Math.abs(h)/2.2,3)*n,(u-e)*t+s,Math.sign(l)).normalize(),o.setXYZ(c,a.x,a.y,a.z)}return i}function Bu(i,e,t,n=.06,s=0){let r=new D(e[0],e[1],s),o=new D(t[0],t[1],s),a=r.distanceTo(o),c=new Ge(new Oe(n,a,n*.9),i);return c.position.addVectors(r,o).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new D(0,1,0),o.clone().sub(r).normalize()),c.castShadow=!0,c}var Tc;function f_(){if(Tc)return Tc;let i=zt(Ht(512,128,(n,s,r)=>{n.clearRect(0,0,s,r),n.fillStyle="#1b3f8f",n.font='700 64px "JetBrains Mono", monospace',n.textAlign="center",n.textBaseline="middle",n.fillText("NO REFUSAL",s/2,r/2+4)})),e=zt(Ht(512,128,(n,s,r)=>{n.fillStyle="#f6f3ea",n.fillRect(0,0,s,r),n.strokeStyle="#111",n.lineWidth=8,n.strokeRect(6,6,s-12,r-12),n.fillStyle="#111",n.font='700 66px "JetBrains Mono", monospace',n.textAlign="center",n.textBaseline="middle",n.fillText("WB 04 PP 2016",s/2,r/2+4)})),t=$n("rgba(0,0,0,0.85)","rgba(0,0,0,0)",128);return Tc={door:i,plate:e,shadow:t},Tc}function zu({lights:i=!0,color:e=15908123}={}){let t=f_(),n=new ft,s=new ft,r=new ft;r.rotation.y=-Math.PI/2,s.add(r),n.add(s);let o=Nn(new Ot({color:e,roughness:.34,metalness:.05,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.2}),{height:.95,strength:.32}),a=new ot({color:15330543,metalness:1,roughness:.14}),c=new Ot({color:1845806,metalness:0,roughness:.02,envMapIntensity:1.1,transparent:!0,opacity:.34,specularIntensity:1,ior:1.52,depthWrite:!1}),l=new ot({color:2758420,roughness:.45}),h=new ot({color:1381135,roughness:.8}),u=new ot({color:789517,roughness:.7}),f=new ot({color:1315860,roughness:.92}),d=new ot({color:16775398,emissive:16773577,emissiveIntensity:.15,roughness:.1,metalness:.2}),x=new ot({color:7997962,emissive:16718362,emissiveIntensity:.25,roughness:.2}),v=new ot({color:16753178,emissive:16747008,emissiveIntensity:.2}),g=($,le,Le=0,K=0,de=0,xe=!0)=>{let fe=new Ge($,le);return fe.position.set(Le,K,de),fe.castShadow=xe,fe.receiveShadow=!0,r.add(fe),fe};g(Ip(Pp(u_(),gn-.14,.07,6)),o);let m=new us;m.moveTo(-1.22,1),m.lineTo(-.95,1.47),m.lineTo(.42,1.49),m.lineTo(.84,1),m.lineTo(-1.22,1),g(Ip(Pp(m,gn-.3,.035,3),{yMid:1,ky:.2,kx:.05,lean:.3}),c),g(new rn(1.5,.08,gn-.2,3,.035),o,-.27,1.5,0);let w=(gn-.24)/2;for(let $ of[-w,w])r.add(Bu(o,[.84,1.03],[.42,1.5],.07,$)),r.add(Bu(o,[-.22,1.03],[-.22,1.5],.08,$)),r.add(Bu(o,[-1.2,1.03],[-.95,1.5],.09,$));for(let $ of[-gn/2-.004,gn/2+.004]){g(new Oe(2.1,.022,.012),a,-.2,1.04,$,!1),g(new Oe(3.95,.03,.014),a,0,.78,$,!1);for(let Le of[.86,-.22,-1.24])g(new Oe(.012,.56,.006),u,Le,.75,$,!1);for(let Le of[.62,-.42])g(new Oe(.16,.03,.03),a,Le,.95,$+Math.sign($)*.01,!1);let le=new Ge(new Tt(.95,.24),new ot({map:t.door,transparent:!0,roughness:.4,depthWrite:!1}));le.position.set(.28,.6,$+Math.sign($)*.006),$<0&&(le.rotation.y=Math.PI),r.add(le),g(new Oe(.06,.08,.12),a,.78,1.12,$+Math.sign($)*.08)}g(new rn(.16,.15,gn+.08,3,.05),a,2.26,.48,0),g(new rn(.16,.15,gn+.06,3,.05),a,-2.25,.5,0),g(new Oe(.05,.3,.92),u,2.2,.72,0,!1),g(new rn(.06,.34,.98,2,.02),a,2.19,.72,0,!1).scale.set(1,1,1);for(let $=0;$<9;$++)g(new Oe(.06,.28,.028),a,2.225,.72,-.4+$*.1,!1);let M=new _t(.115,.115,.08,32);M.rotateZ(Math.PI/2);let y=new fs(.12,.02,10,32);y.rotateY(Math.PI/2);for(let $ of[-.6,.6])g(M,d,2.17,.76,$,!1),g(y,a,2.2,.76,$,!1),g(new Oe(.04,.05,.1),v,2.2,.6,$*1.12,!1),g(new Oe(.04,.17,.13),x,-2.2,.82,$*1.02,!1);let P=new ot({map:t.plate,roughness:.5}),A=g(new Tt(.52,.13),P,2.345,.47,0,!1);A.rotation.y=Math.PI/2;let T=g(new Tt(.52,.13),P,-2.34,.66,0,!1);T.rotation.y=-Math.PI/2,g(new Oe(3.7,.22,gn-.24),u,0,.42,0,!1),g(new Oe(2.3,.05,gn-.3),h,-.25,.64,0,!1),g(new Oe(2.1,.03,gn-.34),h,-.27,1.43,0,!1);for(let[$,le]of[[.12,-.14],[-.86,-1.12]])g(new rn(.52,.2,gn-.36,3,.06),l,$,.78,0,!1),g(new rn(.14,.5,gn-.36,3,.05),l,le,1.07,0,!1).rotation.z=.12;g(new rn(.34,.22,gn-.3,2,.05),h,.72,.98,0,!1);let E=new fs(.19,.018,8,32);E.rotateY(Math.PI/2),g(E,u,.46,1.1,.36,!1).rotation.z=.45,g(new _t(.02,.02,.3,8).rotateZ(Math.PI/2-.45),u,.6,1.04,.36,!1);let S=new ot({color:14209728,roughness:.85}),_=new ot({color:8015411,roughness:.55});g(new rn(.26,.5,.4,3,.1),S,.02,1.1,.36,!1),g(new Pn(.105,20,14),_,.06,1.45,.36,!1).scale.set(1,1.15,.95),g(new Pn(.11,20,10,0,Math.PI*2,0,Math.PI/2),new ot({color:1314829,roughness:.9}),.05,1.48,.36,!1);for(let $ of[.22,.5])g(new _t(.035,.035,.42,8).rotateZ(Math.PI/2-.5),S,.26,1.16,$,!1);g(new rn(.14,.16,.1,2,.02),new ot({color:6165010,roughness:.45}),.78,1.18,-(gn/2)-.02,!0),g(new Oe(.015,.1,.07),new ot({color:14210248}),.8,1.32,-(gn/2)-.02,!1);let C=new ot({color:13225168,metalness:1,roughness:.28});for(let $ of[-.62,.62]){g(new _t(.018,.018,1.4,10).rotateZ(Math.PI/2),C,-.27,1.64,$);for(let le of[-.9,.35])g(new _t(.014,.014,.12,8),C,le,1.58,$)}for(let $ of[-.85,-.27,.3])g(new _t(.014,.014,1.24,8).rotateX(Math.PI/2),C,$,1.64,0);for(let $ of[-w-.04,w+.04])g(new Oe(1.5,.02,.02),a,-.27,1.47,$,!1);for(let $ of[-.32,.22]){let le=g(new Oe(.012,.012,.42),u,.86,1.07,$,!1);le.rotation.x=.25}g(new _t(.004,.006,.9,6),a,1.5,1.45,-.7,!1).rotation.z=-.25;let O=new _t(.42,.42,gn-.12,20,1,!0,Math.PI/2,Math.PI);O.rotateX(Math.PI/2);let H=new ot({color:657930,roughness:.95,side:Kt});for(let $ of[1.35,-1.35])g(O,H,$,.36,0,!1);let W=[],J=new fs(.245,.095,16,40),N=new _t(.335,.335,.17,40,1,!0);N.rotateX(Math.PI/2);let j=new _t(.17,.19,.04,32);j.rotateX(Math.PI/2);let G=new Pn(.07,16,8,0,Math.PI*2,0,Math.PI/2);G.rotateX(Math.PI/2);for(let $ of[1.35,-1.35])for(let le of[-(gn/2-.13),gn/2-.13]){let Le=new ft;Le.position.set($,.335,le);let K=Math.sign(le),de=new Ge(J,f),xe=new Ge(N,f),fe=new Ge(j,a);fe.position.z=K*.07;let be=new Ge(G,a);be.position.z=K*.085,be.scale.z=K;for(let Xe=0;Xe<4;Xe++){let qe=new Ge(new Oe(.3,.025,.02),u);qe.rotation.z=Xe*Math.PI/4,qe.position.z=K*.093,Le.add(qe)}[de,xe,fe,be].forEach(Xe=>{Xe.castShadow=!0,Le.add(Xe)}),r.add(Le),W.push(Le)}let q=new Ge(new Tt(2.4,5.4),new Jt({map:t.shadow,transparent:!0,depthWrite:!1,opacity:.75}));q.rotation.x=-Math.PI/2,q.position.y=.012,q.renderOrder=1,n.add(q);let oe=null;if(i){oe=new xs(16769712,0,55,.5,.55,1.2),oe.position.set(0,.8,2.2);let $=new Bt;$.position.set(0,0,14),n.add($),oe.target=$,n.add(oe)}return{root:n,body:s,wheels:W,setNight($){d.emissiveIntensity=.15+$*5,x.emissiveIntensity=.25+$*3,oe&&(oe.intensity=$*60)},spin($){for(let le of W)le.rotation.z-=$/.335}}}var d_=4.72,p_=new Set(["tire","rimMat","RimB","rotor"]);async function Dp(i){let n=(await new Yr().setMeshoptDecoder(Ec).loadAsync("assets/models/camaro.glb",T=>{T.total&&i?.(T.loaded/T.total)})).scene,s=new ft,r=new ft;s.add(r),r.add(n);let o=[];n.traverse(T=>{T.isMesh&&o.push(T)});let a=T=>o.filter(E=>E.material?.name===T),c=T=>{let E=new hn;return T.forEach(S=>E.expandByObject(S)),E};s.updateMatrixWorld(!0);let l=c([n]),h=l.getCenter(new D),u=c(a("Red_glass")).getCenter(new D),f=h.clone().sub(u).setY(0).normalize();n.rotation.y=-Math.atan2(f.x,f.z),s.updateMatrixWorld(!0),l=c([n]);let d=l.getSize(new D),x=d_/Math.max(d.x,d.z);n.scale.multiplyScalar(x),s.updateMatrixWorld(!0),l=c([n]);let v=l.getCenter(new D);n.position.x-=v.x,n.position.z-=v.z,n.position.y-=l.min.y,s.updateMatrixWorld(!0);let g=[];for(let T of a("tire")){let E=c([T]).getCenter(new D),S=new ft;S.position.copy(r.worldToLocal(E.clone())),r.add(S),S.updateMatrixWorld(!0),g.push({pivot:S,centre:E})}for(let T of o){if(!p_.has(T.material?.name))continue;let E=c([T]).getCenter(new D),S=null,_=1/0;for(let C of g){let O=C.centre.distanceTo(E);O<_&&(_=O,S=C)}S&&_<.6&&S.pivot.attach(T)}let m=g.length?c([g[0].pivot]).getSize(new D).y/2:.34,w=null,M=null;for(let T of o){T.castShadow=!0,T.receiveShadow=!0;let E=T.material;if(E){if(E.transmission>0&&E.name!=="Red_glass"&&(E.transmission=0,E.transparent=!0,E.opacity=.38,E.color.set(791576),E.depthWrite=!1,T.castShadow=!1),E.name==="Light_glass"&&(T.castShadow=!1),E.name==="Red_glass"&&(E.transmission=0,E.transparent=!0,E.color.set(9046534),E.opacity=.85,E.emissive=new De(16718352),E.emissiveIntensity=.35,M=E,T.castShadow=!1),E.name==="Light"){E.emissiveMap=null,E.emissive=new De(16773336),E.emissiveIntensity=0;let S=T.matrixWorld.clone().invert(),_=new D(0,0,1).transformDirection(S),C=T.worldToLocal(c([T]).getCenter(new D));E.onBeforeCompile=O=>{O.uniforms.uFwd={value:_},O.uniforms.uMid={value:C},O.vertexShader=O.vertexShader.replace("#include <common>",`#include <common>
uniform vec3 uFwd; uniform vec3 uMid; varying float vFront;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFront = dot(position - uMid, uFwd);`),O.fragmentShader=O.fragmentShader.replace("#include <common>",`#include <common>
varying float vFront;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= mix(vec3(1.0, 0.06, 0.03), vec3(1.0), step(0.0, vFront));`)},E.customProgramCacheKey=()=>"camaro-lamps",w=E}E.name==="CarPaint"&&(E.envMapIntensity=1.25)}}let y=new Ge(new Tt(2.3,5.2),new Jt({map:$n("rgba(0,0,0,0.85)","rgba(0,0,0,0)",128),transparent:!0,depthWrite:!1,opacity:.8}));y.rotation.x=-Math.PI/2,y.position.y=.012,y.renderOrder=1,s.add(y);let P=new xs(16769712,0,55,.5,.55,1.2);P.position.set(0,.7,2.3);let A=new Bt;return A.position.set(0,0,14),s.add(P,A),P.target=A,{root:s,body:r,wheels:g.map(T=>T.pivot),setNight(T){w&&(w.emissiveIntensity=T*2.2),M&&(M.emissiveIntensity=.35+T*3),P.intensity=T*60},spin(T){for(let E of g)E.pivot.rotation.x+=T/m}}}var ku='"Instrument Serif", Georgia, serif',Xs='"Manrope", system-ui, sans-serif',di='"JetBrains Mono", ui-monospace, monospace';function Lp(i,e,t,n,s){let r=i.frame(t);return e.position.copy(r.p).addScaledVector(r.r,n*s),e.rotation.y=Math.atan2(-r.r.x*n,-r.r.z*n),e}var Mt=i=>new ot(i);function ke(i,e,t=0,n=0,s=0,r){let o=new Ge(i,e);return o.position.set(t,n,s),o.castShadow=!0,o.receiveShadow=!0,r&&r.add(o),o}function _n(i,e,t,n=3){return Xr(new Oe(i,e,t),n)}function m_(i){for(let e of["map","normalMap","roughnessMap","metalnessMap","aoMap"])i[e]&&(i[e]=i[e].clone(),i[e].center.set(.5,.5),i[e].rotation=Math.PI/2,i[e].needsUpdate=!0);return i}function Up(i,e,t,n,s){let r=up(s);return r.position.set(e,t,n),r.rotation.y=-Math.PI/2,i.add(r),r}function Ac(i,e,t){return zt(Ht(i,e,t))}function Np(){let i=new ft,e=gt("wood",{color:10123866}),t=gt("corrugated",{color:10133668});ke(_n(3.2,1.1,1.3,1.5),e,0,.55,0,i),ke(new Oe(3.4,.08,1.5),Mt({color:3811868}),0,1.12,0,i);for(let l of[-1.55,1.55])for(let h of[-.6,.6])ke(new _t(.04,.04,2.6),e,l,1.3,h,i);let n=ke(_n(4,.05,2.4,2),t,0,2.6,.2,i);n.rotation.x=.12;let s=ke(new _t(.16,.22,.34,20),Mt({color:12088115,metalness:.9,roughness:.3}),-.8,1.33,.1,i);ke(new _t(.2,.2,.1,16),Mt({color:546}),-.8,1.19,.1,i);for(let l=0;l<8;l++)ke(new _t(.045,.032,.08,10),Mt({color:10506797,roughness:1}),.2+l%4*.13,1.2,-.1+Math.floor(l/4)*.14,i);ke(new Oe(2.2,.08,.4),e,.4,.5,1.6,i);for(let l of[-.5,1.3])ke(new Oe(.08,.5,.36),e,l,.25,1.6,i);let r=Ac(512,128,(l,h,u)=>{l.fillStyle="#b8321f",l.fillRect(0,0,h,u),l.fillStyle="#ffe9b0",l.font=`700 62px ${Xs}`,l.textAlign="center",l.textBaseline="middle",l.fillText("CHA  \xB7  \u20B910",h/2,u/2+3)}),o=ke(new Tt(2.2,.55),Mt({map:r,roughness:.7}),0,2.25,.62,i);o.castShadow=!1;let a=$n("rgba(255,255,255,0.55)","rgba(255,255,255,0)"),c=[];for(let l=0;l<10;l++){let h=new Li(new xi({map:a,transparent:!0,depthWrite:!1,opacity:0}));h.userData.o=l/10,i.add(h),c.push(h)}return{group:i,radius:4,update(l){for(let h of c){let u=(l*.25+h.userData.o)%1;h.position.set(s.position.x+Math.sin(u*6+h.userData.o*9)*.15,1.55+u*1.4,s.position.z);let f=.25+u*.7;h.scale.set(f,f,1),h.material.opacity=Math.sin(u*Math.PI)*.22}}}}function Fp(){let i=new ft,e=ui(101),t=Nn(gt("plaster",{color:15390382,normalScale:1.4}),{height:3,strength:.4}),n=ke(_n(14,8,8),t,0,4,-6.5,i);ke(_n(14.5,.45,8.5),gt("concrete",{color:12103324}),0,8.2,-6.5,i),ke(_n(14.3,.18,.3),t,0,4.95,-2.4,i);let s=ke(new Tt(6,3.2),m_(gt("corrugated",{color:9213081,repeat:[1.6,3]})),-3,1.6,-2.48,i),r=zt(Ht(256,256,(E,S,_)=>{let C=E.createLinearGradient(0,0,0,_);C.addColorStop(0,"#3a2a1c"),C.addColorStop(1,"#120c08"),E.fillStyle=C,E.fillRect(0,0,S,_);let O=E.createRadialGradient(S*.5,_*.15,4,S*.5,_*.15,S*.6);O.addColorStop(0,"rgba(255,230,180,0.9)"),O.addColorStop(1,"rgba(255,200,120,0)"),E.fillStyle=O,E.fillRect(0,0,S,_),E.fillStyle="rgba(160,130,90,0.5)";for(let H=0;H<5;H++)E.fillRect(20+H*46,_*.45,34,_*.4)})),o=Mt({map:r,emissive:16777215,emissiveMap:r,emissiveIntensity:.35,roughness:.3});ke(new Tt(3.4,3),o,3.6,1.5,-2.48,i);for(let[E,S]of[-4.5,0,4.5].entries())Up(i,S,6.3,-2.5,{lit:E===1,shutterColor:"#3f5f7a",open:.3+E*.15});let a=Ac(1024,160,(E,S,_)=>{E.fillStyle="#1f3b63",E.fillRect(0,0,S,_),E.fillStyle="#f5c518",E.fillRect(0,_-10,S,10),E.fillStyle="#fff",E.font=`800 70px ${Xs}`,E.textBaseline="middle",E.fillText("INVOICE DESK",36,_/2-4),E.font=`500 30px ${di}`,E.textAlign="right",E.fillStyle="#c9d6ea",E.fillText("DATA ENTRY \xB7 ERP \xB7 EST. 2016",S-36,_/2-2)});ke(new Oe(12,1.6,.2),Mt({map:a,emissiveMap:a,emissive:16777215,emissiveIntensity:.25}),0,4.1,-2.35,i);let c=[],l=[{s:[.42,.11,.3],c:[16052972,16777215,15525590]},{s:[.5,.32,.36],c:[16777215,15260875,14272688]},{s:[.32,.29,.07],c:[2772879,9382442,3111493,2039583]}];for(let E=-6;E<=6;E++)for(let S=-2;S<=3;S++){let _=E*.55+(e()-.5)*.2,C=S*.5+(e()-.5)*.2,O=Math.max(0,1-Math.hypot(E/6.5,(S-.2)/3.4)),H=0,W=Math.floor(O*16+e()*2);for(let J=0;J<W;J++){let N=e()<.6?0:e()<.6?1:2,j=l[N],G=j.s;c.push({k:N,x:_,y:H+G[1]/2,z:C,s:G,rot:(e()-.5)*.4,col:N===0?16777215:j.c[Math.floor(e()*j.c.length)]}),H+=G[1]}}let h=zt(Ht(128,128,(E,S,_)=>{E.fillStyle="#f4f2ea",E.fillRect(0,0,S,_);for(let C=0;C<_;C+=2)E.fillStyle=`rgba(150,145,130,${.15+Math.random()*.2})`,E.fillRect(0,C,S,1);E.fillStyle="#2c5aa0",E.fillRect(0,_*.35,S,_*.3),E.fillStyle="#fff",E.font="700 18px Manrope, sans-serif",E.fillText("A4 \xB7 75gsm",10,_*.55)})),u=zt(Ht(128,128,(E,S,_)=>{E.fillStyle="#b08a5a",E.fillRect(0,0,S,_);for(let C=0;C<900;C++)E.fillStyle=`rgba(${90+Math.random()*60},${60+Math.random()*40},30,0.25)`,E.fillRect(Math.random()*S,Math.random()*_,3,1);E.fillStyle="rgba(200,180,140,0.7)",E.fillRect(S*.42,0,S*.16,_),E.fillStyle="#222",E.font="700 14px JetBrains Mono, monospace",E.fillText("FY 2016-17",8,_-12)})),f=zt(Ht(128,128,(E,S,_)=>{E.fillStyle="#ffffff",E.fillRect(0,0,S,_),E.fillStyle="rgba(0,0,0,0.25)",E.fillRect(0,0,S,8),E.fillRect(0,_-8,S,8),E.fillStyle="#f6f1e0",E.fillRect(S*.3,_*.25,S*.4,_*.3),E.beginPath(),E.arc(S/2,_*.78,9,0,7),E.fillStyle="#222",E.fill()})),d={0:[],1:[],2:[]};c.forEach(E=>d[E.k].push(E));let x=new Ve,v=new Ft,g=new De;[[0,h,.75],[1,u,.9],[2,f,.45]].forEach(([E,S,_])=>{let C=d[E];if(!C.length)return;let O=new yn(new rn(1,1,1,2,.03),Mt({map:S,roughness:_,color:16777215}),C.length);C.forEach((H,W)=>{v.setFromEuler(new qn((Math.random()-.5)*.04,H.rot,(Math.random()-.5)*.04)),x.compose(new D(H.x,H.y,H.z),v,new D(...H.s)),O.setMatrixAt(W,x),O.setColorAt(W,g.set(H.col))}),O.castShadow=O.receiveShadow=!0,i.add(O)});let m=Ht(256,192,()=>{}),w=zt(m),M=E=>{let S=m.getContext("2d");S.fillStyle="#031a08",S.fillRect(0,0,256,192),S.fillStyle="#39ff6a",S.font=`600 14px ${di}`,["ERP v4.2  INVOICE ENTRY","------------------------","INV# 2016-0"+(4412+Math.floor(E*3)),"VENDOR  : ______","QTY     : ______","AMOUNT  : ______","GST     : ______","","> F2 SAVE   F3 NEXT","> REPEAT x 10,000"].forEach((C,O)=>S.fillText(C,10,20+O*17)),Math.floor(E*2)%2&&S.fillRect(92,20+9*17-12,9,14);for(let C=0;C<192;C+=3)S.fillStyle="rgba(0,0,0,0.25)",S.fillRect(0,C,256,1);w.needsUpdate=!0};M(0);let y=new ft;y.position.set(5.2,0,1.4),y.rotation.y=-.5,i.add(y),ke(_n(1.6,.06,.8,1.5),gt("wood",{color:8018490}),0,.78,0,y);for(let E of[-.72,.72])for(let S of[-.32,.32])ke(new Oe(.05,.78,.05),Mt({color:4007959}),E,.39,S,y);ke(new rn(.62,.52,.55,3,.05),Mt({color:14209211,roughness:.6}),0,1.08,-.05,y),ke(new Tt(.5,.38),Mt({map:w,emissiveMap:w,emissive:16777215,emissiveIntensity:1.4}),0,1.1,.226,y),ke(new Oe(.55,.04,.2),Mt({color:13616814}),0,.83,.25,y);let P=Mt({color:16777215,side:Vt,roughness:.7}),A=[];for(let E=0;E<26;E++){let S=ke(new Tt(.3,.42),P,0,0,0,i);S.userData.dynamic=!0,S.castShadow=!0,S.userData={a:e()*6.28,rad:1+e()*3.2,h:2+e()*5,sp:.2+e()*.35,wob:e()*6},A.push(S)}let T=-1;return{group:i,radius:11,center:new D(0,0,-3),update(E,S){if(!S)return;for(let C of A){let O=C.userData,H=O.a+E*O.sp;C.position.set(Math.cos(H)*O.rad,O.h+Math.sin(E*.7+O.wob)*.6,.6+Math.sin(H)*O.rad*.6),C.rotation.set(E*O.sp*2+O.wob,H,Math.sin(E+O.wob))}let _=Math.floor(E*6);_!==T&&(T=_,M(E))}}}function Op(){let i=new ft,e=zt(Ht(256,256,(f,d)=>{let x=f.createLinearGradient(0,0,0,d);x.addColorStop(0,"#9fbcd0"),x.addColorStop(1,"#5d7d94"),f.fillStyle=x,f.fillRect(0,0,d,d),f.fillStyle="#2a333b";for(let v=0;v<4;v++)f.fillRect(0,v*64,d,5),f.fillRect(v*64,0,3,d)}),{repeat:!0});e.repeat.set(5,18);let t=new Ot({map:e,metalness:.85,roughness:.08,clearcoat:1,envMapIntensity:1.4,emissive:2241348,emissiveIntensity:0}),n=74;ke(new Oe(20,n,20),t,0,n/2+6,-14,i);let s=zt(Ht(512,160,(f,d,x)=>{let v=f.createLinearGradient(0,0,0,x);v.addColorStop(0,"#f6ead2"),v.addColorStop(.5,"#7a6a58"),v.addColorStop(1,"#2a241e"),f.fillStyle=v,f.fillRect(0,0,d,x);for(let g=30;g<d;g+=90){let m=f.createRadialGradient(g,6,2,g,6,60);m.addColorStop(0,"rgba(255,255,255,0.9)"),m.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=m,f.fillRect(g-60,0,120,70)}f.fillStyle="rgba(30,24,18,0.8)",f.fillRect(d*.38,x*.55,d*.24,x*.3),f.fillStyle="rgba(20,20,20,0.9)";for(let g=0;g<=d;g+=d/8)f.fillRect(g-3,0,6,x);f.fillRect(0,x*.18,d,4)})),r=new Ot({map:s,emissive:16777215,emissiveMap:s,emissiveIntensity:.3,roughness:.05,metalness:.1,envMapIntensity:1.4});ke(_n(24,6,22,4),Nn(gt("concrete",{color:14209734})),0,3,-14,i),ke(new Tt(16,4.4),r,0,2.4,-2.98,i),ke(_n(22,.5,2.5,4),gt("concrete",{color:12893616}),0,5.2,-2,i),ke(_n(16,4,16,2),gt("steel",{color:4870746}),0,n+8,-14,i);let o=Mt({color:16722474,emissive:16719904,emissiveIntensity:2});o.userData.live=!0,ke(new _t(.1,.1,8),Mt({color:1911}),0,n+14,-14,i),ke(new Pn(.35,12,8),o,0,n+18.2,-14,i);let a=Ht(1024,576,()=>{}),c=zt(a),l=Array.from({length:12},(f,d)=>.3+Math.abs(Math.sin(d*1.7))*.6),h=f=>{let d=a.getContext("2d");d.fillStyle="#081018",d.fillRect(0,0,1024,576),d.fillStyle="#f5c518",d.font=`700 30px ${di}`,d.fillText("KPI \xB7 WEEKLY QUALITY REVIEW",40,60),d.fillStyle="#7f93a8",d.font=`500 22px ${di}`,d.fillText("CENTRUM \xB7 SALES QA \xB7 2018\u20132020",40,96),[["CSAT",(88+Math.sin(f)*2).toFixed(1)+"%"],["CALLS QA",(1240+Math.floor(f*7)%60).toString()],["TREND","\u25B2 12%"]].forEach(([v,g],m)=>{let w=40+m*320;d.fillStyle="#101c28",d.fillRect(w,124,290,120),d.fillStyle="#7f93a8",d.font=`500 20px ${di}`,d.fillText(v,w+20,158),d.fillStyle="#ffffff",d.font=`400 64px ${ku}`,d.fillText(g,w+20,226)}),l.forEach((v,g)=>{let m=(v+Math.sin(f*1.3+g)*.05)*230;d.fillStyle=g===11?"#f5c518":"#2b6cb0",d.fillRect(40+g*56,540-m,36,m)}),d.strokeStyle="#ff7a3d",d.lineWidth=4,d.beginPath();for(let v=0;v<=30;v++){let g=720+v*9.5,m=500-v*7-Math.sin(v*.8+f*2)*14;v?d.lineTo(g,m):d.moveTo(g,m)}d.stroke(),d.fillStyle="#7f93a8",d.font=`500 18px ${di}`,d.fillText("A dashboard is an argument.",720,300),c.needsUpdate=!0};h(0),ke(_n(17,9.8,.5,2),gt("steel",{color:2764339}),0,13,-3.7,i),ke(new Tt(16.2,9.1),Mt({map:c,emissiveMap:c,emissive:16777215,emissiveIntensity:1.15,roughness:.4}),0,13,-3.44,i);let u=-1;return{group:i,radius:16,center:new D(0,0,-14),update(f,d){if(!d)return;let x=Math.floor(f*3);x!==u&&(u=x,h(f)),o.emissiveIntensity=1+Math.max(0,Math.sin(f*3))*4},setNight(f){t.emissiveIntensity=f*.6,r.emissiveIntensity=.3+f*.8}}}function Bp(){let i=new ft,e=Nn(gt("plaster",{color:15328472,normalScale:1.4}),{height:3,strength:.4});ke(_n(16,11,10),e,0,5.5,-7,i),ke(_n(16.5,.5,10.5),gt("concrete",{color:11905944}),0,11.2,-7,i),ke(_n(16.3,.2,.3),e,0,9.4,-1.9,i);for(let[l,h]of[-5.5,-1.8,1.8,5.5].entries())Up(i,h,7.6,-2,{lit:l%2===1,shutterColor:"#2f5e44",open:.25+l%3*.2});let t=Ht(1024,384,(l,h,u)=>{let f=l.createLinearGradient(0,0,0,u);f.addColorStop(0,"#fbfaf5"),f.addColorStop(1,"#dfe9e2"),l.fillStyle=f,l.fillRect(0,0,h,u);for(let g=60;g<h;g+=240){let m=l.createRadialGradient(g+60,6,2,g+60,6,120);m.addColorStop(0,"rgba(255,255,255,0.95)"),m.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=m,l.fillRect(g-60,0,240,120)}let d=ui(31),x=["#1f9d6a","#ffffff","#2b6cb0","#e85d4a","#f5c518","#8e5bd1","#f1f1f1","#ff8f3a","#0aa2c0"];for(let g=0;g<4;g++){let m=46+g*84,w=6;for(;w<h-30;){let y=d()<.25,P=y?12+d()*8:16+d()*26,A=y?30+d()*20:24+d()*30,T=x[Math.floor(d()*x.length)],E=l.createLinearGradient(w,0,w+P,0);E.addColorStop(0,T),E.addColorStop(.75,T),E.addColorStop(1,"rgba(0,0,0,0.35)"),l.fillStyle=E,y?(l.beginPath(),l.roundRect(w,m+62-A,P,A,5),l.fill(),l.fillStyle="#ddd",l.fillRect(w+P*.25,m+62-A-6,P*.5,7)):(l.fillRect(w,m+62-A,P,A),l.fillStyle="rgba(255,255,255,0.85)",l.fillRect(w+3,m+62-A*.62,P-6,A*.22),l.fillStyle="rgba(0,0,0,0.5)",l.fillRect(w+4,m+62-A*.55,(P-8)*d(),2)),w+=P+1+d()*2}l.fillStyle="#c9cfd2",l.fillRect(0,m+62,h,7),l.fillStyle="#ffe35a";for(let y=20;y<h;y+=90+d()*40)l.fillRect(y,m+63,26,5);let M=l.createLinearGradient(0,m+69,0,m+86);M.addColorStop(0,"rgba(0,0,0,0.25)"),M.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=M,l.fillRect(0,m+69,h,17)}let v=l.createLinearGradient(0,0,h,u);v.addColorStop(.1,"rgba(255,255,255,0)"),v.addColorStop(.18,"rgba(255,255,255,0.22)"),v.addColorStop(.26,"rgba(255,255,255,0)"),l.fillStyle=v,l.fillRect(0,0,h,u)}),n=zt(t),s=Mt({map:n,emissiveMap:n,emissive:16777215,emissiveIntensity:.7,roughness:.15,metalness:.1});ke(new Tt(13,4.2),s,0,2.4,-1.98,i);for(let l of[-6.5,-2.2,2.2,6.5])ke(new Oe(.12,4.4,.12),Mt({color:13684944,metalness:.9,roughness:.25}),l,2.3,-1.92,i);let r=Ac(1024,140,(l,h,u)=>{l.fillStyle="#0f7a4f",l.fillRect(0,0,h,u),l.fillStyle="#ffffff",l.font=`800 74px ${Xs}`,l.textBaseline="middle",l.fillText("PHARMACY",40,u/2),l.font=`600 34px ${di}`,l.textAlign="right",l.fillText("OPEN 24 \xD7 7",h-40,u/2)});ke(new Oe(15.5,1.5,.3),Mt({map:r,emissiveMap:r,emissive:16777215,emissiveIntensity:.5}),0,5.05,-1.85,i);let o=Mt({color:1032042,emissive:1695870,emissiveIntensity:1.5,roughness:.3}),a=new ft;a.userData.dynamic=!0,a.position.set(7.4,6.6,.4),i.add(a),ke(new Oe(.06,.06,2.6),Mt({color:1365}),0,.8,-1.2,a),ke(new rn(.5,1.6,.3,2,.06),o,0,0,0,a),ke(new rn(1.6,.5,.3,2,.06),o,0,0,0,a);let c=new Li(new xi({map:$n("rgba(40,255,140,0.6)","rgba(40,255,140,0)"),transparent:!0,depthWrite:!1,blending:gi}));c.scale.set(5,5,1),a.add(c),ke(new Oe(2.2,.08,.5),Mt({color:3828618}),-4,.62,.3,i);for(let l of[-4.9,-3.1])ke(new Oe(.06,.6,.45),Mt({color:819}),l,.3,.3,i);return{group:i,radius:11,center:new D(0,0,-6),update(l){let h=.75+.25*Math.sin(l*2.2);o.emissiveIntensity=1.2+h*2.2,c.material.opacity=.35+h*.4,a.rotation.y=Math.sin(l*.6)*.25},setNight(l){s.emissiveIntensity=.7+l*1.3}}}function zp(){let i=new ft,e=ui(404),t=gt("corrugated",{color:9347762,normalScale:1.4}),n=Nn(gt("concrete",{color:12762288})),s=gt("steel",{color:8226190}),r=gt("steel",{color:12087626,normalScale:1.5}),o=ke(_n(110,.2,80,4),gt("concrete",{color:10130828}),0,.1,-40,i);o.castShadow=!1;for(let N=-54;N<=54;N+=3)Math.abs(N)<6||ke(new Oe(.08,2.4,.08),s,N,1.2,-.5,i);for(let N of[.6,1.4,2.2])ke(new Oe(48,.05,.05),s,-30,N,-.5,i),ke(new Oe(48,.05,.05),s,30,N,-.5,i);for(let N of[-6.5,6.5])ke(_n(1.2,6,1.2,2),n,N,3,-.5,i);let a=Ac(1024,150,(N,j,G)=>{N.fillStyle="#121518",N.fillRect(0,0,j,G),N.fillStyle="#ff7a2a",N.font=`800 62px ${Xs}`,N.textBaseline="middle",N.fillText("AUTOMATION FLOOR",32,G/2),N.fillStyle="#a7b1ba",N.font=`500 28px ${di}`,N.textAlign="right",N.fillText("BOTS ON SHIFT \xB7 24/7",j-32,G/2)});ke(new Oe(14.2,1.8,.4),Mt({map:a,emissiveMap:a,emissive:16777215,emissiveIntensity:.6}),0,6.6,-.5,i);let c=new ft;c.position.set(-8,0,-36),i.add(c),ke(_n(48,18,30,2),t,0,9,0,c);let l=new us;l.moveTo(-15.5,0),l.lineTo(0,6),l.lineTo(15.5,0),l.lineTo(-15.5,0);let h=ke(new Pr(l,{depth:49,bevelEnabled:!1}),gt("corrugated",{color:8226702,repeat:[.5,.5]}),24.5,18,0,c);h.rotation.y=-Math.PI/2;let u=zt(Ht(256,256,(N,j,G)=>{N.fillStyle="#000",N.fillRect(0,0,j,G);let q=N.createRadialGradient(j/2,G*.7,4,j/2,G*.7,j*.6);q.addColorStop(0,"#fff2c0"),q.addColorStop(.25,"#ffb040"),q.addColorStop(.6,"#c43c08"),q.addColorStop(1,"#100400"),N.fillStyle=q,N.fillRect(0,0,j,G)})),f=Mt({color:328192,emissive:16777215,emissiveMap:u,emissiveIntensity:2.2});ke(new Tt(10,8),f,-6,4,15.02,c);let d=zt(Ht(512,32,(N,j,G)=>{N.fillStyle="#1a1e22",N.fillRect(0,0,j,G);for(let q=0;q<j;q+=16)N.fillStyle=`rgba(150,170,180,${.25+Math.random()*.2})`,N.fillRect(q+2,3,12,G-6)}));ke(new Tt(40,1.4),Mt({map:d,roughness:.2,metalness:.3,emissive:16766880,emissiveMap:d,emissiveIntensity:.15}),0,15,15.02,c);let x=zt(Ht(64,256,N=>{N.fillStyle="#c9c3b8",N.fillRect(0,0,64,256);for(let j=0;j<3;j++)N.fillStyle="#b8321f",N.fillRect(0,j*28,64,14)})),v=[];[[18,-58],[26,-60],[34,-56]].forEach(([N,j],G)=>{let q=46+G*4;ke(new _t(1.3,2.2,q,24),Mt({map:x,normalMap:sn.concrete_nor,roughnessMap:sn.concrete_orm,roughness:1}),N,q/2,j,i),v.push(new D(N,q+.5,j))});let g=new ft;g.position.set(32,0,-30),i.add(g),ke(new _t(5,6,22,28),r,0,11,0,g),ke(new _t(3,5,6,28),s,0,25,0,g),ke(new _t(.9,.9,16,16),s,0,36,0,g);for(let N of[0,2.1,4.2]){let j=ke(new _t(.7,.7,26,12),s,Math.cos(N)*7,18,Math.sin(N)*7,g);j.rotation.z=Math.cos(N)*.25,j.rotation.x=-Math.sin(N)*.25}for(let N=0;N<5;N++)ke(new fs(5.6,.25,8,40),s,0,3+N*4.5,0,g).rotation.x=Math.PI/2;for(let[N,j]of[[-40,-28],[-40,-42],[-48,-35]])ke(new _t(4,4,18,28),Mt({color:13620182,metalness:.8,roughness:.32,normalMap:sn.steel_nor}),N,9,j,i),ke(new Ya(4.1,3,28),Mt({color:12172994,metalness:.7,roughness:.35}),N,19.5,j,i);for(let N=-28;N<=28;N+=7)ke(new Oe(.5,9,.5),s,N,4.5,-16,i);for(let N of[8.6,9.6])ke(new _t(.5,.5,58,14),N>9?r:s,0,N,-16,i).rotation.z=Math.PI/2;let m=new ft;m.position.set(0,0,-8),i.add(m),ke(new Oe(44,.25,2),Mt({color:1776928,roughness:.75,normalMap:sn.asphalt_nor}),0,1.3,0,m);for(let N of[-1,1])ke(_n(44,.35,.12,2),gt("steel",{color:15774720}),0,1.45,N*1.05,m);for(let N=-21;N<=21;N+=3)for(let j of[-1,1])ke(new Oe(.15,1.2,.15),s,N,.6,j*.9,m);let w=Mt({color:2230272,emissive:16727040,emissiveIntensity:5,roughness:.6}),M=new yn(new rn(1.4,.35,.8,2,.06),w,16);M.castShadow=!0,m.add(M);let y=new vs(16738848,0,26,1.6);y.position.set(0,3,-6),i.add(y);let P=[],A=new Ot({color:16738826,metalness:.2,roughness:.35,clearcoat:.6,clearcoatRoughness:.2}),T=Mt({color:2237480,metalness:.6,roughness:.4});for(let[N,j]of[[-9,0],[9,1.9]]){let G=new ft;G.userData.dynamic=!0,G.position.set(N,0,-5),i.add(G),ke(new _t(.9,1.1,.6,24),T,0,.3,0,G);let q=new ft;q.position.y=.6,G.add(q),ke(new _t(.7,.8,.9,24),A,0,.45,0,q);let oe=new ft;oe.position.y=1,q.add(oe),ke(new Pn(.5,16,12),T,0,0,0,oe),ke(new rn(.55,2.8,.55,2,.12),A,0,1.4,0,oe);let $=new ft;$.position.y=2.8,oe.add($),ke(new Pn(.38,16,12),T,0,0,0,$),ke(new rn(.42,2.2,.42,2,.1),A,0,1.1,0,$);let le=new ft;le.position.y=2.2,$.add(le),ke(new _t(.2,.2,.4,12),T,0,.2,0,le);for(let Le of[-1,1])ke(new Oe(.08,.4,.25),T,Le*.15,.55,0,le);P.push({yaw:q,sh:oe,el:$,wr:le,ph:j})}let E=$n("rgba(200,200,200,0.7)","rgba(200,200,200,0)"),S=[];v.forEach((N,j)=>{for(let G=0;G<7;G++){let q=new Li(new xi({map:E,transparent:!0,depthWrite:!1,color:13617858}));q.userData={top:N,o:G/7+j*.13,drift:.6+e()*.8},i.add(q),S.push(q)}});let _=140,C=new Ct,O=new Float32Array(_*3),H=[];for(let N=0;N<_;N++)H.push({t:Math.random(),vx:(Math.random()-.5)*4,vy:2+Math.random()*4,vz:2+Math.random()*3});C.setAttribute("position",new pt(O,3));let W=new hs(C,new Ui({color:16757575,size:.09,transparent:!0,opacity:.95,blending:gi,depthWrite:!1}));W.position.set(c.position.x-6,1.2,c.position.z+15.2),i.add(W);let J=new Ve;return{group:i,radius:46,center:new D(0,0,-38),update(N,j){for(let G of S){let q=G.userData,oe=(N*.06+q.o)%1;G.position.set(q.top.x+oe*22*q.drift,q.top.y+oe*18,q.top.z+oe*6);let $=3+oe*16;G.scale.set($,$,1),G.material.opacity=Math.sin(Math.min(1,oe*1.4)*Math.PI)*.4}if(j){for(let G=0;G<16;G++){let q=((N*2.2+G*2.75)%44+44)%44-22;J.makeTranslation(q,1.62,0),M.setMatrixAt(G,J)}M.instanceMatrix.needsUpdate=!0;for(let G=0;G<_;G++){let q=H[G],$=(N*.7+q.t)%1*1.2;O[G*3]=q.vx*$,O[G*3+1]=Math.max(0,q.vy*$-4.9*$*$),O[G*3+2]=q.vz*$}C.attributes.position.needsUpdate=!0;for(let G of P){let q=N*.9+G.ph;G.yaw.rotation.y=Math.sin(q)*1.1,G.sh.rotation.z=.35+Math.sin(q*1.3)*.35,G.el.rotation.z=1.25+Math.sin(q*1.3+1)*.35,G.wr.rotation.y=q*2}f.emissiveIntensity=2+Math.sin(N*7)*.25+Math.sin(N*13)*.15}},setNight(N,j){y.intensity=30+j*80}}}function kp(i,e){let t=new ft,n=Ht(1280,720,(a,c,l)=>{let h=a.createLinearGradient(0,0,c,l);h.addColorStop(0,"#0b0f14"),h.addColorStop(1,"#141c26"),a.fillStyle=h,a.fillRect(0,0,c,l),a.fillStyle="#f5c518",a.fillRect(0,0,14,l),a.font=`400 200px ${ku}`,a.fillStyle="rgba(245,197,24,0.16)",a.textAlign="right",a.fillText("0"+(e+1),c-50,210),a.textAlign="left",a.fillStyle="#f5c518",a.font=`600 28px ${di}`,a.fillText(i.category.toUpperCase(),70,100),a.fillStyle="#fff",a.font=`400 96px ${ku}`;let u=i.title.split(" "),f="",d=210;for(let m of u)a.measureText(f+m).width>c-200&&(a.fillText(f,70,d),f="",d+=96),f+=m+" ";a.fillText(f,70,d),a.fillStyle="#9fb0c2",a.font=`500 30px ${Xs}`;let v=((m,w,M)=>{let y="";for(let P of m.split(" "))a.measureText(y+P).width>M&&(a.fillText(y,70,w),y="",w+=42),y+=P+" ";return a.fillText(y,70,w),w})(i.outcome,d+80,c-160),g=70;a.font=`600 24px ${di}`;for(let m of i.tech){let w=a.measureText(m).width+36;a.strokeStyle="rgba(245,197,24,0.6)",a.lineWidth=2,a.strokeRect(g,v+50,w,48),a.fillStyle="#f5c518",a.fillText(m,g+18,v+83),g+=w+14}}),s=zt(n),r=gt("steel",{color:3817542});for(let a of[-2.8,2.8])ke(new Oe(.3,6,.3),r,a,3,-.2,t);ke(new Oe(9.2,5.3,.35),r,0,8.2,-.25,t);let o=Mt({map:s,emissiveMap:s,emissive:16777215,emissiveIntensity:.9,roughness:.35});ke(new Tt(8.8,4.95),o,0,8.2,-.06,t);for(let a of[-3,0,3])ke(new Oe(.5,.15,.4),Mt({color:546,emissive:16773840,emissiveIntensity:1}),a,5.4,.5,t);return{group:t,radius:6,setNight(a){o.emissiveIntensity=.9+a*.6}}}function Hp(i){let e=new ft,t=ui(606),n=256,s=(u,f,d,x,v)=>{if(u.save(),u.translate(f,d),u.drawImage(sn.wood_col.image,0,0,n,n),u.strokeStyle="rgba(70,45,22,0.85)",u.lineWidth=16,u.strokeRect(8,8,n-16,n-16),u.beginPath(),u.moveTo(16,16),u.lineTo(n-16,n-16),u.stroke(),x){u.fillStyle="rgba(20,16,12,0.86)",u.fillRect(30,86,n-60,86),u.fillStyle="#f5c518";let g=40;for(u.font=`800 ${g}px ${Xs}`;u.measureText(x).width>n-80&&g>18;)g-=2,u.font=`800 ${g}px ${Xs}`;u.textAlign="center",u.fillText(x,n/2,128),u.fillStyle="#d9cbb3",u.font=`500 15px ${di}`,u.fillText(v,n/2,156)}u.restore()},r=zt(Ht(n*4,n*4,u=>{i.forEach(([f,d],x)=>s(u,x%4*n,Math.floor(x/4)*n,f,d)),s(u,3*n,3*n)})),o=Mt({map:r,normalMap:sn.wood_nor,roughness:.85}),a=u=>[u%4/4,1-(Math.floor(u/4)+1)/4],c=1.5,l=[5,4,3],h=0;return l.forEach((u,f)=>{for(let d=0;d<u&&h<i.length;d++,h++){let x=new Oe(c,c,c),v=x.attributes.uv;for(let m=0;m<6;m++){let[w,M]=a(m===4?h:15);for(let y=0;y<4;y++)v.setXY(m*4+y,w+v.getX(m*4+y)/4,M+v.getY(m*4+y)/4)}let g=ke(x,o,(d-(u-1)/2)*(c+.06),c/2+f*c,(t()-.5)*.15,e);g.rotation.y=(t()-.5)*.12}}),ke(new Oe(5*c+1,.15,c+.6),Mt({color:9071170,roughness:1}),0,.07,0,e),{group:e,radius:6}}var Xi=(i,e=document)=>e.querySelector(i),Rc=(i,e=document)=>[...e.querySelectorAll(i)],Gp=Xi("#loader-bar"),Vp=Xi("#loader-note"),g_=performance.now(),kn=(i,e)=>{location.search.includes("debug")&&console.log("STAGE",(performance.now()-g_).toFixed(0),i,e),Gp&&(Gp.style.transform=`scaleX(${i})`),e&&Vp&&(Vp.textContent=e)};function x_(){try{let i=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&i.getContext("webgl2"))}catch{return!1}}var Cc=[{title:"Procurement Audit Automation",category:"Intelligent Automation",tech:["Python","SAP GUI Scripting","SQL"],outcome:"Real-time audit data extraction and validation \u2014 compliance checks that used to take days now run on their own."},{title:"Vendor Analytics Dashboard",category:"Business Intelligence",tech:["Power BI","DAX","PostgreSQL"],outcome:"Vendor performance tracking with anomaly detection, so supply-chain risk shows up before it costs money."},{title:"SAP Reporting Pipeline",category:"Data Engineering",tech:["Python","SAP","Data Warehousing"],outcome:"One unified pipeline that generates and distributes the reports people used to stitch together by hand."},{title:"Document Processing Engine",category:"AI & Data Processing",tech:["Python","OCR","LLM"],outcome:"An OCR + LLM pipeline that turns piles of physical records into clean, structured data."}],v_=[["Python","bots \xB7 scrapers \xB7 ML"],["SAP GUI","scripting"],["Power BI","DAX \xB7 models"],["SQL","Postgres \xB7 MSSQL"],["Power Automate","flows"],["FastAPI","services"],["Django","web apps"],["React","frontends"],["OCR + LLM","documents"],["Selenium","web automation"],["Git","versioning"],["Figma","interfaces"]];async function b_(){if(!x_()){document.documentElement.classList.add("static"),Xi("#loader")?.remove();return}let i=matchMedia("(max-width: 760px), (pointer: coarse)").matches,e=matchMedia("(prefers-reduced-motion: reduce)").matches;kn(.08,"Loading type\u2026"),await Promise.race([Promise.all([document.fonts.load('400 40px "Instrument Serif"'),document.fonts.load('800 40px "Manrope"'),document.fonts.load('600 20px "JetBrains Mono"')]),new Promise(ge=>setTimeout(ge,2500))]).catch(()=>{});let t=Xi("#scene"),n=new Na({canvas:t,antialias:!0,powerPreference:"high-performance",stencil:!1}),s=(()=>{try{let ge=n.getContext(),Qe=ge.getExtension("WEBGL_debug_renderer_info");return String(Qe?ge.getParameter(Qe.UNMASKED_RENDERER_WEBGL):ge.getParameter(ge.RENDERER))}catch{return""}})(),r=new URLSearchParams(location.search).get("q"),o=i?0:/Intel|Mali|Adreno|PowerVR|SwiftShader|llvmpipe|Software|Basic Render|Radeon\(TM\) Graphics|Vega \d+ Graphics/i.test(s)?1:2;r&&(o={low:0,med:1,medium:1,high:2}[r]??o);let a=window.devicePixelRatio||1,c=Math.min(a,[i?1.25:1,1.25,1.5][o]);n.setPixelRatio(c),n.setSize(innerWidth,innerHeight,!1),n.toneMapping=wo,n.shadowMap.enabled=!0,n.shadowMap.type=o===0?tc:Dh,n.shadowMap.autoUpdate=!1;let l=new ls;l.fog=new Fa(15251872,.004);let h=new Qt(i?55:42,innerWidth/innerHeight,.3,700);h.layers.enable(1);let u=new as(n);l.environment=u.fromScene(new lc,.04).texture;let f=new Co;f.scale.setScalar(1e4),l.add(f);let d=f.material.uniforms;d.mieDirectionalG.value=.8;let x=new Lr(16777215,3);x.castShadow=!0;let v=o===0?1024:2048;x.shadow.mapSize.set(v,v);let g=x.shadow.camera;g.left=-45,g.right=45,g.top=45,g.bottom=-45,g.near=60,g.far=260,x.shadow.bias=-4e-4,x.shadow.normalBias=.04,l.add(x,x.target);let m=new Qa(12375807,4934202,.8);l.add(m),kn(.12,"Mixing paint\u2026");let w=null,M=np(n,ge=>kn(.08+ge*.12,"Mixing paint\u2026")).then(()=>Mp(ge=>kn(.2+ge*.12,"Building the street\u2026")).catch(ge=>(console.warn("Street assets failed to load; falling back to the procedural city",ge),null))),[y]=await Promise.all([ep(n,{steps:o===0?2:4}),M.then(ge=>{w=ge})]);y.update(0,l),kn(.34,"Laying the road\u2026"),await ki();let P=Ap(),A=ge=>P.uAtZ(ge),T=[{id:"intro",u:A(8),creep:.004,hold:.04,cam:{pos:[-4.2,1.5,7.2],look:[1.6,1,.2]},mob:{pos:[-3.5,2.2,9.5],look:[.4,1.2,0]}},{id:"ch1",u:A(-82),side:1,creep:.006,cam:{pos:[-3.2,2.3,-6.5],look:[8,3.4,5]},mob:{pos:[-3.5,3,-9],look:[7,3.5,4]}},{id:"ch2",u:A(-170),side:-1,creep:.006,cam:{pos:[5.2,1.6,-17],look:[-12,10,6]},mob:{pos:[4,1.5,-12],look:[-12,13,7]}},{id:"ch3",u:A(-262),side:1,creep:.006,cam:{pos:[-4.2,2.3,-11.5],look:[9,4.6,3]},mob:{pos:[-3.6,2.6,-9],look:[8,4,4]}},{id:"ch4",u:A(-350),side:-1,creep:.008,hold:.07,cam:{pos:[5,5.5,-13],look:[-30,9,12]},mob:{pos:[6,7,-18],look:[-30,11,8]}},{id:"work",u:A(-430),side:1,creep:.06,hold:.13,cam:{pos:[-2.8,3.2,-8],look:[9,5.5,12]},mob:{pos:[-2.5,3.5,-10],look:[8,6.5,13]}},{id:"tools",u:A(-520),side:-1,creep:.006,cam:{pos:[3.4,2,-5.5],look:[-8,2.6,4]},mob:{pos:[3.8,2.6,-9],look:[-8,2.8,2]}},{id:"contact",u:A((qt.zNear+qt.zFar)/2+8),creep:.01,hold:.09,cam:{pos:[42,4.5,44],look:[-4,7,-18]},mob:{pos:[44,6,60],look:[-2,9,-16]}}],E={pos:[0,2.7,-9],look:[0,1.2,8]},S=.055,C=(1-T.reduce((ge,Qe)=>ge+(Qe.hold??S),0))/(T.length-1),O=0;T.forEach((ge,Qe)=>{ge.hold=ge.hold??S,ge.p0=O,ge.p1=O+ge.hold,O=ge.p1+(Qe<T.length-1?C:0)}),T[T.length-1].p1=1;function H(ge){for(let Qe=0;Qe<T.length;Qe++){let Ye=T[Qe];if(ge<=Ye.p1||Qe===T.length-1){if(ge>=Ye.p0){let R=yi(ge,Ye.p0,Ye.p1);return{i:Qe,hold:!0,k:R,u:Ye.u-Ye.creep/2+Ye.creep*R}}let at=T[Qe-1],p=yi(ge,at.p1,Ye.p0),b=$d(p);return{i:Qe-1,hold:!1,k:p,u:Jn(at.u+at.creep/2,Ye.u-Ye.creep/2,b)}}}}let W=[],J=[],N=(ge,Qe,Ye,at)=>{Lp(P,ge.group,Qe,Ye,at),au(ge.group),ge.group.userData.cull=ge.radius>30?460:380,ge.group.traverse(b=>{b.isLight||b.layers.set(1)}),l.add(ge.group);let p=(ge.center||new D).clone().applyEuler(ge.group.rotation).add(ge.group.position);return W.push({x:p.x,z:p.z,r:ge.radius}),ge.worldCenter=p,J.push(ge),ge};kn(.3,"Raising landmarks\u2026"),await ki(),N(Np(),T[0].u-.004,1,mn-1.3),N(Fp(),T[1].u+.004,1,mn+2.6),N(Op(),T[2].u+.008,-1,mn+1.6),N(Bp(),T[3].u+.005,1,mn+1.4),N(zp(),T[4].u+.012,-1,mn+4);let j=T[5],G=Cc.map((ge,Qe)=>{let Ye=N(kp(ge,Qe),j.u-j.creep/2+.008+Qe*(j.creep+.006)/4,1,mn+.6);return Ye.group.rotateY(.55),Ye});N(Hp(v_),T[6].u+.004,-1,mn+1.6),kn(.45,"Painting the city\u2026"),await ki();let q=Rp(l,P,W,{isMobile:i,tier:o},w);kn(.65,"Bolting the bridge\u2026"),await ki();let oe=Cp(l,P);kn(.7,"Rolling the Camaro out\u2026");let $;try{$=await Dp(ge=>kn(.7+ge*.08,"Rolling the Camaro out\u2026"))}catch(ge){console.warn("Car model failed, using the Ambassador",ge),$=zu({lights:!0})}$.root.traverse(ge=>{ge.isLight||ge.layers.set(1)}),l.add($.root);{let ge=zu({lights:!1});au(ge.root),ge.root.updateMatrixWorld(!0);let Qe=[[-30,1],[-128,-1],[-212,1],[-300,-1],[-470,1],[-548,-1],[-760,1]].map(([Ye,at])=>{let p=P.frame(A(Ye));return new Ve().compose(p.p.clone().addScaledVector(p.r,at*3.3),new Ft().setFromAxisAngle(new D(0,1,0),Math.atan2(p.t.x,p.t.z)+(at>0?0:Math.PI)),new D(1,1,1))});ge.root.traverse(Ye=>{if(!Ye.isMesh)return;let at=Ye.matrixWorld.clone(),p=Qe.map(b=>b.clone().multiply(at));for(let b of Gr(Ye.geometry,Ye.material,p,{cast:Ye.castShadow&&!Ye.material.transparent,chunk:300,cull:260}))b.renderOrder=Ye.renderOrder,b.layers.set(1),l.add(b)})}kn(.8,"Warming the engine\u2026"),await ki();let le=null,Le=null,K=null,de=null,xe=()=>{let ge=Math.floor(innerWidth*c),Qe=Math.floor(innerHeight*c),Ye=new URLSearchParams(location.search).has("ao")&&o===2,at={type:en,samples:o===2?4:2};Ye&&(at.depthTexture=new cs(ge,Qe));let p=new Yt(ge,Qe,at);if(le=new uc(n,p),le.setPixelRatio(c),le.addPass(new fc(l,h)),Ye)try{de=new Uo(l,h,ge,Qe),de.setGBuffer(le.renderTarget1.depthTexture),de.updateGtaoMaterial({radius:1.2,distanceExponent:1.4,thickness:2,scale:1.1,samples:8,distanceFallOff:1}),de.blendIntensity=.85,le.addPass(de)}catch{de=null}Le=new zr(new Se(Math.floor(innerWidth/4),Math.floor(innerHeight/4)),.3,.6,.92),le.addPass(Le),le.addPass(new dc),K=new Br(tp),le.addPass(K)},fe=()=>{le?.dispose(),le=null,Le=null,K=null,de=null};o>0&&xe();let be=ge=>new De(ge),Xe=[{p:0,elev:4,az:120,sun:be("#ffb08a"),si:1.6,sky:be("#a9b6d8"),gnd:be("#4a3a33"),hi:.55,fog:be("#e7b8a0"),fd:.0042,tur:8,ray:2.6,mie:.006,exp:.62,night:.05},{p:.18,elev:22,az:140,sun:be("#ffe2c0"),si:2.6,sky:be("#bcd2f0"),gnd:be("#4d4a3a"),hi:.8,fog:be("#d9d6d2"),fd:.0032,tur:6,ray:1.6,mie:.005,exp:.6,night:0},{p:.36,elev:48,az:170,sun:be("#fff6ea"),si:3.2,sky:be("#c4dcff"),gnd:be("#4f553e"),hi:.95,fog:be("#c8d6e2"),fd:.003,tur:4,ray:1.2,mie:.004,exp:.55,night:0},{p:.52,elev:18,az:220,sun:be("#ffc684"),si:2.8,sky:be("#c8c4d8"),gnd:be("#55463a"),hi:.75,fog:be("#e4c39f"),fd:.0032,tur:7,ray:2,mie:.006,exp:.6,night:0},{p:.66,elev:6,az:245,sun:be("#ff9a52"),si:2.2,sky:be("#b9a6c8"),gnd:be("#4a3530"),hi:.6,fog:be("#d9946f"),fd:.0036,tur:9,ray:3,mie:.008,exp:.66,night:.15},{p:.78,elev:.5,az:255,sun:be("#ff6a3a"),si:1,sky:be("#7f74a6"),gnd:be("#2e2430"),hi:.45,fog:be("#8a5a63"),fd:.0042,tur:10,ray:3.6,mie:.01,exp:.78,night:.55},{p:.88,elev:-4,az:262,sun:be("#7f8cff"),si:.35,sky:be("#3c4a80"),gnd:be("#151522"),hi:.35,fog:be("#232a48"),fd:.0042,tur:10,ray:1.5,mie:.005,exp:.95,night:.92},{p:1,elev:-9,az:270,sun:be("#9fb2ff"),si:.3,sky:be("#2a3768"),gnd:be("#0e0f18"),hi:.3,fog:be("#141a33"),fd:.0036,tur:10,ray:.6,mie:.004,exp:1,night:1}],qe={sun:new De,sky:new De,gnd:new De,fog:new De};function it(ge){let Qe=0;for(;Qe<Xe.length-2&&ge>Xe[Qe+1].p;)Qe++;let Ye=Xe[Qe],at=Xe[Qe+1],p=Hr(yi(ge,Ye.p,at.p));for(let b of["elev","az","si","hi","fd","tur","ray","mie","exp","night"])qe[b]=Jn(Ye[b],at[b],p);for(let b of["sun","sky","gnd","fog"])qe[b].copy(Ye[b]).lerp(at[b],p);return qe}let pe=new D,Ee=new D,z=new D().setFromSphericalCoords(1,ys.degToRad(62),ys.degToRad(200)),Ke=new De,we=Rc(".panel[data-stop]"),We=Rc(".proj"),Te=Xi("#proj-count"),et=Rc(".rail a"),Be=Xi("#progress"),F=Xi("#scroll-hint");et.forEach(ge=>{ge.addEventListener("click",Qe=>{Qe.preventDefault();let Ye=T[+ge.dataset.stop];Q(Ye.p0+Ye.hold*.4)})}),Rc("[data-jump]").forEach(ge=>ge.addEventListener("click",Qe=>{Qe.preventDefault();let Ye=T.find(at=>at.id===ge.dataset.jump);Ye&&Q(Ye.p0+Ye.hold*.4)}));function I(){return document.documentElement.scrollHeight-innerHeight}function Q(ge){window.scrollTo({top:ge*I(),behavior:e?"auto":"smooth"})}let ue=we.map(()=>({o:-1,y:0,vis:"",live:null})),ve=-1,he=-1,Ze=-1,Ie=-1;function Ue(ge){T.forEach((R,L)=>{let U=we[L];if(!U)return;let k=L===0?-1:.022,Y=L===T.length-1?-1:.022,ne=1;k>0&&(ne=Math.min(ne,yi(ge,R.p0-k,R.p0))),Y>0&&(ne=Math.min(ne,1-yi(ge,R.p1,R.p1+Y))),ne=Math.round(Gs(ne)*500)/500;let ee=ue[L];if(ne===ee.o)return;ee.o=ne,U.style.opacity=String(ne),U.style.transform=`translate3d(0, ${((1-ne)*(ge<R.p0?28:-28)).toFixed(1)}px, 0)`;let te=ne<.01?"hidden":"visible";te!==ee.vis&&(ee.vis=te,U.style.visibility=te);let ie=ne>.6;ie!==ee.live&&(ee.live=ie,U.classList.toggle("live",ie))});let Qe=yi(ge,j.p0,j.p1),Ye=Math.min(Cc.length-1,Math.floor(Qe*Cc.length));Ye!==ve&&(ve=Ye,We.forEach((R,L)=>R.classList.toggle("on",L===Ye)),Te&&(Te.textContent=`${Ye+1} / ${Cc.length}`));let at=0;T.forEach((R,L)=>{ge>=R.p0-.03&&(at=L)}),at!==he&&(he=at,et.forEach((R,L)=>R.classList.toggle("on",L===at)));let p=Math.round(ge*1e3)/1e3;p!==Ze&&Be&&(Ze=p,Be.style.transform=`scaleX(${p})`);let b=Math.round((1-yi(ge,.005,.03))*100)/100;b!==Ie&&F&&(Ie=b,F.style.opacity=String(b))}let tt={},_e=new D,je=new D,Je={pos:[0,0,0],look:[0,0,0]},$e=(ge,Qe,Ye,at=Je)=>{for(let p=0;p<3;p++)at.pos[p]=Jn(ge.pos[p],Qe.pos[p],Ye),at.look[p]=Jn(ge.look[p],Qe.look[p],Ye);return at},X=ge=>i?ge.mob:ge.cam;function se(ge){let Qe=T[ge.i];if(ge.hold)return X(Qe);let Ye=T[ge.i+1],at=ge.k;return at<.4?$e(X(Qe),E,Hr(at/.4)):at>.6?$e(E,X(Ye),Hr((at-.6)/.4)):E}let re=(ge,Qe,Ye)=>Ye.copy(Qe.p).addScaledVector(Qe.r,ge[0]).addScaledVector(new D(0,1,0),ge[1]).addScaledVector(Qe.t,ge[2]),me=0,B=0,V=T[0].u,Z=0,ae=()=>{me=Gs(scrollY/Math.max(1,I()))};addEventListener("scroll",ae,{passive:!0}),ae(),B=me;let Me={x:0,y:0,sx:0,sy:0};addEventListener("pointermove",ge=>{Me.x=ge.clientX/innerWidth-.5,Me.y=ge.clientY/innerHeight-.5});let ye=innerWidth,Ne=innerHeight,rt=0;addEventListener("resize",()=>{let ge=innerWidth,Qe=innerHeight;ge===ye&&Math.abs(Qe-Ne)<Math.max(160,Ne*.2)||(clearTimeout(rt),rt=setTimeout(()=>{ye=innerWidth,Ne=innerHeight,h.aspect=ye/Ne,h.fov=ye<760?55:42,h.updateProjectionMatrix(),n.setSize(ye,Ne,!1),le?.setSize(ye,Ne)},150))});let ht=!new URLSearchParams(location.search).has("still"),nt=new URLSearchParams(location.search).has("debug"),Pt=new URLSearchParams(location.search).has("fps")?document.body.appendChild(Object.assign(document.createElement("div"),{style:"position:fixed;left:8px;bottom:8px;z-index:99;font:600 12px/1.4 ui-monospace,monospace;color:#f5c518;background:rgba(0,0,0,.6);padding:4px 8px;border-radius:6px;pointer-events:none"})):null,St=0,ct=0;nt&&(n.info.autoReset=!1,window.__perf={renderer:n,scene:l,camera:h,frameMs:[],makeFrustum:ge=>new Di().setFromProjectionMatrix(new Ve().multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse))});let $t=new Ur,bn=0,Hn=0,qi=0,ws=0,Yi=[()=>{if(c>1)return c=Math.max(1,c-.25),!0},()=>{if(Le?.enabled)return Le.enabled=!1,!0},()=>{if(q.water&&q.reflections!==!1)return q.reflections=!1,!0},()=>{if(x.shadow.mapSize.x>1024)return x.shadow.mapSize.set(1024,1024),x.shadow.map?.dispose(),x.shadow.map=null,!0},()=>{if(le)return fe(),!0},()=>{if(c>.8)return c=.8,!0}];function qs(){for(let ge of Yi){let Qe=c;if(ge()){c!==Qe&&(n.setPixelRatio(c),le?.setPixelRatio(c));return}}}function _i(){let ge=$t.getDelta(),Qe=Math.min(ge,.05),Ye=$t.elapsedTime;B=e?me:Jn(B,me,1-Math.exp(-Qe*3.2)),Math.abs(B-me)<2e-5&&(B=me);let at=H(B);P.frame(at.u,tt);let p=at.u-V;V=at.u;let b=p*P.length;Z=Jn(Z,b/Math.max(Qe,.001),.1),$.root.position.copy(tt.p),$.root.rotation.y=Math.atan2(tt.t.x,tt.t.z),$.spin(b),$.body.position.y=Math.sin(Ye*31)*.004+Math.min(Math.abs(Z),20)*Math.sin(Ye*13)*6e-4,$.body.rotation.x=Gs(-Z*.0015,-.03,.03);let R=se(at);Me.sx=Jn(Me.sx,Me.x,.05),Me.sy=Jn(Me.sy,Me.y,.05),re(R.pos,tt,_e),re(R.look,tt,je),_e.addScaledVector(tt.r,Me.sx*.8).y+=-Me.sy*.4+Math.sin(Ye*.6)*.04,_e.y=Math.max(_e.y,.6),h.position.copy(_e),h.lookAt(je);let L=it(B),U=ys.degToRad(90-L.elev),k=ys.degToRad(L.az);pe.setFromSphericalCoords(1,U,k),d.sunPosition.value.copy(pe),d.turbidity.value=L.tur,d.rayleigh.value=L.ray,d.mieCoefficient.value=L.mie,Ee.setFromSphericalCoords(1,ys.degToRad(90-Math.max(L.elev,24)),k),x.position.copy(tt.p).addScaledVector(Ee,150),x.target.position.copy(tt.p),x.color.copy(L.sun),x.intensity=L.si,m.color.copy(L.sky),m.groundColor.copy(L.gnd),m.intensity=L.hi*.45,l.fog.color.copy(L.fog),l.fog.density=L.fd,y.update(B,l),l.environmentIntensity=Jn(.9,.55,L.night),K&&(K.uniforms.time.value=Ye),n.toneMappingExposure=L.exp;let Y=L.night;q.setNight(Y),oe.setNight(Y),$.setNight(Gs(Y*1.3)),q.sky.moon.position.copy(h.position).addScaledVector(z,590),q.sky.moonGlow.position.copy(q.sky.moon.position),q.sky.stars.position.copy(h.position),q.clouds.position.set(h.position.x,0,h.position.z),Ke.copy(L.sun).lerp(L.fog,.55).multiplyScalar(Jn(1,.18,Y)),q.tintClouds(Ke,Jn(.75,.25,Y)),Le&&(Le.strength=.2+Y*.45);for(let te of J){let ie=te.worldCenter.distanceToSquared(h.position)<19600;te.update?.(Ye,ie),te.setNight?.(Y,Gs(1-Math.abs(B-.42)*6))}for(let te of q.update)te(Ye,h);Ue(B),Ts.update(h.position);let ne=Math.abs(b)>1e-4;qi++,(ne||qi%(o===0?6:4)===0)&&(n.shadowMap.needsUpdate=!0);let ee=nt?performance.now():0;nt&&n.info.reset(),le?le.render():n.render(l,h),nt&&window.__perf.frameMs.push(performance.now()-ee),Pt&&(St++,ct+=ge,ct>.5&&(Pt.textContent=`${Math.round(St/ct)} fps \xB7 tier ${o} \xB7 ${c.toFixed(2)}x${le?"":" \xB7 direct"}`,St=0,ct=0)),ht&&!document.hidden&&(bn++,Hn+=ge,Hn>2&&(bn/Hn<52&&Ye-ws>3&&(qs(),ws=Ye),bn=0,Hn=0)),requestAnimationFrame(_i)}if(w?.trees){let ge=[],Qe={};for(let b=0;b<=800;b++){let R=H(b/800);P.frame(R.u,Qe),ge.push(re(se(R).pos,Qe,new D))}let Ye=new D,at=new D,p=new Ve;for(let b of w.trees){let R=new Set;if(b.instances.forEach((L,U)=>{Ye.setFromMatrixPosition(L),ge.some(k=>Math.hypot(k.x-Ye.x,k.z-Ye.z)<4.5)&&R.add(U)}),!!R.size)for(let L of b.parts)for(let U of L.meshes||[])U.userData.indices.forEach((k,Y)=>{R.has(k)&&U.setMatrixAt(Y,p.copy(b.instances[k]).scale(at))}),U.instanceMatrix.needsUpdate=!0,U.computeBoundingSphere()}}kn(.92,"Warming up the GPU\u2026"),await ki();let Ts=new bc(l);n.shadowMap.needsUpdate=!0,await rp(n,l,h,()=>{n.shadowMap.needsUpdate=!0}),le&&le.render(),n.shadowMap.needsUpdate=!0,kn(1,"Ready. Hop in."),requestAnimationFrame(_i),await ki(),await ki(),document.documentElement.classList.add("ready"),setTimeout(()=>Xi("#loader")?.remove(),1600),window.__story={STOPS:T,jumpTo:Q}}b_().catch(i=>{console.error(i),document.documentElement.classList.add("static"),Xi("#loader")?.remove()});
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
