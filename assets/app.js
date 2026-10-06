var Kc="170";var od=0,Rh=1,ad=2;var Xu=1,Qc=2,fi=3,$n=0,Nt=1,Lt=2,Yt=0,Is=1,Jn=2,Ch=3,Ph=4,jc=5,Tn=100,ld=101,cd=102,hd=103,ud=104,Zs=200,fd=201,dd=202,pd=203,bl=204,Tl=205,Ma=206,md=207,Sa=208,gd=209,vd=210,xd=211,_d=212,yd=213,Md=214,Al=0,Rl=1,Cl=2,Ns=3,Pl=4,Il=5,Dl=6,Ul=7,Yu=0,Sd=1,Ed=2,Ui=0,eh=1,th=2,nh=3,Vr=4,wd=5,ih=6,sh=7;var qu=300,Fs=301,Os=302,Ll=303,Nl=304,Ea=306,un=1e3,Bn=1001,Fl=1002,an=1003,bd=1004;var oo=1005;var en=1006,Wa=1007;var Di=1008;var zn=1009,Zu=1010,$u=1011,Rr=1012,rh=1013,es=1014,vn=1015,Ht=1016,oh=1017,ah=1018,Li=1020,Ju=35902,Ku=1021,Qu=1022,hn=1023,ju=1024,ef=1025,Ds=1026,Ni=1027,Gr=1028,lh=1029,tf=1030,ch=1031;var hh=1033,Ho=33776,ko=33777,Vo=33778,Go=33779,Ol=35840,Bl=35841,zl=35842,Hl=35843,kl=36196,Vl=37492,Gl=37496,Wl=37808,Xl=37809,Yl=37810,ql=37811,Zl=37812,$l=37813,Jl=37814,Kl=37815,Ql=37816,jl=37817,ec=37818,tc=37819,nc=37820,ic=37821,Wo=36492,sc=36494,rc=36495,nf=36283,oc=36284,ac=36285,lc=36286;var Xo=2300,cc=2301,Xa=2302,Ih=2400,Dh=2401,Uh=2402;var Td=3200,uh=3201;var fh=0,Ad=1,qn="",jt="srgb",_i="srgb-linear",wa="linear",St="srgb";var hs=7680;var Lh=519,Rd=512,Cd=513,Pd=514,sf=515,Id=516,Dd=517,Ud=518,Ld=519,hc=35044;var Nh="300 es",pi=2e3,Yo=2001,Fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fh=1234567,Sr=Math.PI/180,Bs=180/Math.PI;function Zn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function Wt(i,e,t){return Math.max(e,Math.min(t,i))}function dh(i,e){return(i%e+e)%e}function Nd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Fd(i,e,t){return i!==e?(t-i)/(e-i):0}function Er(i,e,t){return(1-t)*i+t*e}function Od(i,e,t,n){return Er(i,e,1-Math.exp(-t*n))}function Bd(i,e=1){return e-Math.abs(dh(i,e*2)-e)}function zd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Hd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function kd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Vd(i,e){return i+Math.random()*(e-i)}function Gd(i){return i*(.5-Math.random())}function Wd(i){i!==void 0&&(Fh=i);let e=Fh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xd(i){return i*Sr}function Yd(i){return i*Bs}function qd(i){return(i&i-1)===0&&i!==0}function Zd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $d(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jd(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),v=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*f,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*f,a*l);break;case"ZXZ":i.set(c*f,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*v,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*v,a*l);break;case"ZYZ":i.set(c*v,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function On(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var $s={DEG2RAD:Sr,RAD2DEG:Bs,generateUUID:Zn,clamp:Wt,euclideanModulo:dh,mapLinear:Nd,inverseLerp:Fd,lerp:Er,damp:Od,pingpong:Bd,smoothstep:zd,smootherstep:Hd,randInt:kd,randFloat:Vd,randFloatSpread:Gd,seededRandom:Wd,degToRad:Xd,radToDeg:Yd,isPowerOfTwo:qd,ceilPowerOfTwo:Zd,floorPowerOfTwo:$d,setQuaternionFromProperEuler:Jd,normalize:wt,denormalize:On},Te=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},it=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],p=n[5],v=n[8],_=s[0],m=s[3],g=s[6],R=s[1],E=s[4],S=s[7],F=s[2],D=s[5],L=s[8];return r[0]=o*_+a*R+c*F,r[3]=o*m+a*E+c*D,r[6]=o*g+a*S+c*L,r[1]=l*_+h*R+f*F,r[4]=l*m+h*E+f*D,r[7]=l*g+h*S+f*L,r[2]=d*_+p*R+v*F,r[5]=d*m+p*E+v*D,r[8]=d*g+p*S+v*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,d=a*c-h*r,p=l*r-o*c,v=t*f+n*d+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/v;return e[0]=f*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ya.makeScale(e,t)),this}rotate(e){return this.premultiply(Ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ya=new it;function rf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kd(){let i=Cr("canvas");return i.style.display="block",i}var Oh={};function yr(i){i in Oh||(Oh[i]=!0,console.warn(i))}function Qd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function jd(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ep(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ft={enabled:!0,workingColorSpace:_i,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===St&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===St&&(i.r=Us(i.r),i.g=Us(i.g),i.b=Us(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qn?wa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bh=[.64,.33,.3,.6,.15,.06],zh=[.2126,.7152,.0722],Hh=[.3127,.329],kh=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vh=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ft.define({[_i]:{primaries:Bh,whitePoint:Hh,transfer:wa,toXYZ:kh,fromXYZ:Vh,luminanceCoefficients:zh,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:Bh,whitePoint:Hh,transfer:St,toXYZ:kh,fromXYZ:Vh,luminanceCoefficients:zh,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}});var us,uc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{us===void 0&&(us=Cr("canvas")),us.width=e.width,us.height=e.height;let n=us.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Cr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tp=0,qo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qa(s[o].image)):r.push(qa(s[o]))}else r=qa(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function qa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var np=0,tn=class i extends Fi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Bn,s=Bn,r=en,o=Di,a=hn,c=zn,l=i.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Zn(),this.name="",this.source=new qo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case un:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case un:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=qu;tn.DEFAULT_ANISOTROPY=1;var _t=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],p=c[5],v=c[9],_=c[2],m=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(v+m)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,S=(p+1)/2,F=(g+1)/2,D=(h+d)/4,L=(f+_)/4,T=(v+m)/4;return E>S&&E>F?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=D/n,r=L/n):S>F?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=D/s,r=T/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=L/r,s=T/r),this.set(n,s,r,t),this}let R=Math.sqrt((m-v)*(m-v)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(R)<.001&&(R=1),this.x=(m-v)/R,this.y=(f-_)/R,this.z=(d-h)/R,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fc=class extends Fi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new qo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ft=class extends fc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Zo=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var dc=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],d=r[o+0],p=r[o+1],v=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=v,e[t+3]=_;return}if(f!==_||c!==d||l!==p||h!==v){let m=1-a,g=c*d+l*p+h*v+f*_,R=g>=0?1:-1,E=1-g*g;if(E>Number.EPSILON){let F=Math.sqrt(E),D=Math.atan2(F,g*R);m=Math.sin(m*D)/F,a=Math.sin(a*D)/F}let S=a*R;if(c=c*m+d*S,l=l*m+p*S,h=h*m+v*S,f=f*m+_*S,m===1-a){let F=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=F,l*=F,h*=F,f*=F}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[o],d=r[o+1],p=r[o+2],v=r[o+3];return e[t]=a*v+h*f+c*p-l*d,e[t+1]=c*v+h*d+l*f-a*p,e[t+2]=l*v+h*p+a*d-c*f,e[t+3]=h*v-a*f-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(r/2),d=c(n/2),p=c(s/2),v=c(r/2);switch(o){case"XYZ":this._x=d*h*f+l*p*v,this._y=l*p*f-d*h*v,this._z=l*h*v+d*p*f,this._w=l*h*f-d*p*v;break;case"YXZ":this._x=d*h*f+l*p*v,this._y=l*p*f-d*h*v,this._z=l*h*v-d*p*f,this._w=l*h*f+d*p*v;break;case"ZXY":this._x=d*h*f-l*p*v,this._y=l*p*f+d*h*v,this._z=l*h*v+d*p*f,this._w=l*h*f-d*p*v;break;case"ZYX":this._x=d*h*f-l*p*v,this._y=l*p*f+d*h*v,this._z=l*h*v-d*p*f,this._w=l*h*f+d*p*v;break;case"YZX":this._x=d*h*f+l*p*v,this._y=l*p*f+d*h*v,this._z=l*h*v-d*p*f,this._w=l*h*f-d*p*v;break;case"XZY":this._x=d*h*f-l*p*v,this._y=l*p*f-d*h*v,this._z=l*h*v+d*p*f,this._w=l*h*f+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+c*l+o*f-a*h,this.y=n+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Za.copy(this).projectOnVector(e),this.sub(Za)}reflect(e){return this.sub(Za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Za=new I,Gh=new zt,gi=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),lo.subVectors(this.max,cr),fs.subVectors(e.a,cr),ds.subVectors(e.b,cr),ps.subVectors(e.c,cr),bi.subVectors(ds,fs),Ti.subVectors(ps,ds),Yi.subVectors(fs,ps);let t=[0,-bi.z,bi.y,0,-Ti.z,Ti.y,0,-Yi.z,Yi.y,bi.z,0,-bi.x,Ti.z,0,-Ti.x,Yi.z,0,-Yi.x,-bi.y,bi.x,0,-Ti.y,Ti.x,0,-Yi.y,Yi.x,0];return!$a(t,fs,ds,ps,lo)||(t=[1,0,0,0,1,0,0,0,1],!$a(t,fs,ds,ps,lo))?!1:(co.crossVectors(bi,Ti),t=[co.x,co.y,co.z],$a(t,fs,ds,ps,lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},oi=[new I,new I,new I,new I,new I,new I,new I,new I],Un=new I,ao=new gi,fs=new I,ds=new I,ps=new I,bi=new I,Ti=new I,Yi=new I,cr=new I,lo=new I,co=new I,qi=new I;function $a(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){qi.fromArray(i,r);let a=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),c=e.dot(qi),l=t.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var ip=new gi,hr=new I,Ja=new I,vi=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ip.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);let t=hr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(hr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(Ja)),this.expandByPoint(hr.copy(e.center).sub(Ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ai=new I,Ka=new I,ho=new I,Ai=new I,Qa=new I,uo=new I,ja=new I,Pr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ka.copy(e).add(t).multiplyScalar(.5),ho.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(Ka);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ho),a=Ai.dot(this.direction),c=-Ai.dot(ho),l=Ai.lengthSq(),h=Math.abs(1-o*o),f,d,p,v;if(h>0)if(f=o*c-a,d=o*a-c,v=r*h,f>=0)if(d>=-v)if(d<=v){let _=1/h;f*=_,d*=_,p=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;else d<=-v?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+d*(d+2*c)+l):d<=v?(f=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+d*(d+2*c)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ka).addScaledVector(ho,d),p}intersectSphere(e,t){ai.subVectors(e.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,s,r){Qa.subVectors(t,e),uo.subVectors(n,e),ja.crossVectors(Qa,uo);let o=this.direction.dot(ja),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);let c=a*this.direction.dot(uo.crossVectors(Ai,uo));if(c<0)return null;let l=a*this.direction.dot(Qa.cross(Ai));if(l<0||c+l>o)return null;let h=-a*Ai.dot(ja);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class i{constructor(e,t,n,s,r,o,a,c,l,h,f,d,p,v,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,f,d,p,v,_,m)}set(e,t,n,s,r,o,a,c,l,h,f,d,p,v,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=f,g[14]=d,g[3]=p,g[7]=v,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ms.setFromMatrixColumn(e,0).length(),r=1/ms.setFromMatrixColumn(e,1).length(),o=1/ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*f,v=a*h,_=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=p+v*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=v+p*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,p=c*f,v=l*h,_=l*f;t[0]=d+_*a,t[4]=v*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=p*a-v,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,p=c*f,v=l*h,_=l*f;t[0]=d-_*a,t[4]=-o*f,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,p=o*f,v=a*h,_=a*f;t[0]=c*h,t[4]=v*l-p,t[8]=d*l+_,t[1]=c*f,t[5]=_*l+d,t[9]=p*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,p=o*l,v=a*c,_=a*l;t[0]=c*h,t[4]=_-d*f,t[8]=v*f+p,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*f+v,t[10]=d-_*f}else if(e.order==="XZY"){let d=o*c,p=o*l,v=a*c,_=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+_,t[5]=o*h,t[9]=p*f-v,t[2]=v*f-p,t[6]=a*h,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sp,e,rp)}lookAt(e,t,n){let s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ri.crossVectors(n,Sn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ri.crossVectors(n,Sn)),Ri.normalize(),fo.crossVectors(Sn,Ri),s[0]=Ri.x,s[4]=fo.x,s[8]=Sn.x,s[1]=Ri.y,s[5]=fo.y,s[9]=Sn.y,s[2]=Ri.z,s[6]=fo.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],p=n[13],v=n[2],_=n[6],m=n[10],g=n[14],R=n[3],E=n[7],S=n[11],F=n[15],D=s[0],L=s[4],T=s[8],M=s[12],y=s[1],C=s[5],B=s[9],V=s[13],X=s[2],re=s[6],N=s[10],Q=s[14],k=s[3],Y=s[7],se=s[11],te=s[15];return r[0]=o*D+a*y+c*X+l*k,r[4]=o*L+a*C+c*re+l*Y,r[8]=o*T+a*B+c*N+l*se,r[12]=o*M+a*V+c*Q+l*te,r[1]=h*D+f*y+d*X+p*k,r[5]=h*L+f*C+d*re+p*Y,r[9]=h*T+f*B+d*N+p*se,r[13]=h*M+f*V+d*Q+p*te,r[2]=v*D+_*y+m*X+g*k,r[6]=v*L+_*C+m*re+g*Y,r[10]=v*T+_*B+m*N+g*se,r[14]=v*M+_*V+m*Q+g*te,r[3]=R*D+E*y+S*X+F*k,r[7]=R*L+E*C+S*re+F*Y,r[11]=R*T+E*B+S*N+F*se,r[15]=R*M+E*V+S*Q+F*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],p=e[14],v=e[3],_=e[7],m=e[11],g=e[15];return v*(+r*c*f-s*l*f-r*a*d+n*l*d+s*a*p-n*c*p)+_*(+t*c*p-t*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+t*l*f-t*a*p-r*o*f+n*o*p+r*a*h-n*l*h)+g*(-s*a*h-t*c*f+t*a*d+s*o*f-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],p=e[11],v=e[12],_=e[13],m=e[14],g=e[15],R=f*m*l-_*d*l+_*c*p-a*m*p-f*c*g+a*d*g,E=v*d*l-h*m*l-v*c*p+o*m*p+h*c*g-o*d*g,S=h*_*l-v*f*l+v*a*p-o*_*p-h*a*g+o*f*g,F=v*f*c-h*_*c-v*a*d+o*_*d+h*a*m-o*f*m,D=t*R+n*E+s*S+r*F;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/D;return e[0]=R*L,e[1]=(_*d*r-f*m*r-_*s*p+n*m*p+f*s*g-n*d*g)*L,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*g+n*c*g)*L,e[3]=(f*c*r-a*d*r-f*s*l+n*d*l+a*s*p-n*c*p)*L,e[4]=E*L,e[5]=(h*m*r-v*d*r+v*s*p-t*m*p-h*s*g+t*d*g)*L,e[6]=(v*c*r-o*m*r-v*s*l+t*m*l+o*s*g-t*c*g)*L,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*p+t*c*p)*L,e[8]=S*L,e[9]=(v*f*r-h*_*r-v*n*p+t*_*p+h*n*g-t*f*g)*L,e[10]=(o*_*r-v*a*r+v*n*l-t*_*l-o*n*g+t*a*g)*L,e[11]=(h*a*r-o*f*r-h*n*l+t*f*l+o*n*p-t*a*p)*L,e[12]=F*L,e[13]=(h*_*s-v*f*s+v*n*d-t*_*d-h*n*m+t*f*m)*L,e[14]=(v*a*s-o*_*s-v*n*c+t*_*c+o*n*m-t*a*m)*L,e[15]=(o*f*s-h*a*s+h*n*c-t*f*c-o*n*d+t*a*d)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,f=a+a,d=r*l,p=r*h,v=r*f,_=o*h,m=o*f,g=a*f,R=c*l,E=c*h,S=c*f,F=n.x,D=n.y,L=n.z;return s[0]=(1-(_+g))*F,s[1]=(p+S)*F,s[2]=(v-E)*F,s[3]=0,s[4]=(p-S)*D,s[5]=(1-(d+g))*D,s[6]=(m+R)*D,s[7]=0,s[8]=(v+E)*L,s[9]=(m-R)*L,s[10]=(1-(d+_))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ms.set(s[0],s[1],s[2]).length(),o=ms.set(s[4],s[5],s[6]).length(),a=ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ln.copy(this);let l=1/r,h=1/o,f=1/a;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,t.setFromRotationMatrix(Ln),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=pi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),p,v;if(a===pi)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Yo)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=pi){let c=this.elements,l=1/(t-e),h=1/(n-s),f=1/(o-r),d=(t+e)*l,p=(n+s)*h,v,_;if(a===pi)v=(o+r)*f,_=-2*f;else if(a===Yo)v=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ms=new I,Ln=new je,sp=new I(0,0,0),rp=new I(1,1,1),Ri=new I,fo=new I,Sn=new I,Wh=new je,Xh=new zt,An=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var $o=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},op=0,Yh=new I,gs=new zt,li=new je,po=new I,ur=new I,ap=new I,lp=new zt,qh=new I(1,0,0),Zh=new I(0,1,0),$h=new I(0,0,1),Jh={type:"added"},cp={type:"removed"},vs={type:"childadded",child:null},el={type:"childremoved",child:null},Ot=class i extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new An,n=new zt,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new it}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(qh,e)}rotateY(e){return this.rotateOnAxis(Zh,e)}rotateZ(e){return this.rotateOnAxis($h,e)}translateOnAxis(e,t){return Yh.copy(e).applyQuaternion(this.quaternion),this.position.add(Yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qh,e)}translateY(e){return this.translateOnAxis(Zh,e)}translateZ(e){return this.translateOnAxis($h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?po.copy(e):po.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(ur,po,this.up):li.lookAt(po,ur,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(li),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jh),vs.child=e,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cp),el.child=e,this.dispatchEvent(el),el.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jh),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,ap),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,lp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ot.DEFAULT_UP=new I(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new I,ci=new I,tl=new I,hi=new I,xs=new I,_s=new I,Kh=new I,nl=new I,il=new I,sl=new I,rl=new _t,ol=new _t,al=new _t,Ii=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Nn.subVectors(e,t),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Nn.subVectors(s,t),ci.subVectors(n,t),tl.subVectors(e,t);let o=Nn.dot(Nn),a=Nn.dot(ci),c=Nn.dot(tl),l=ci.dot(ci),h=ci.dot(tl),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(l*c-a*h)*d,v=(o*h-a*c)*d;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hi.x),c.addScaledVector(o,hi.y),c.addScaledVector(a,hi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return rl.setScalar(0),ol.setScalar(0),al.setScalar(0),rl.fromBufferAttribute(e,t),ol.fromBufferAttribute(e,n),al.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(rl,r.x),o.addScaledVector(ol,r.y),o.addScaledVector(al,r.z),o}static isFrontFacing(e,t,n,s){return Nn.subVectors(n,t),ci.subVectors(e,t),Nn.cross(ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Nn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;xs.subVectors(s,n),_s.subVectors(r,n),nl.subVectors(e,n);let c=xs.dot(nl),l=_s.dot(nl);if(c<=0&&l<=0)return t.copy(n);il.subVectors(e,s);let h=xs.dot(il),f=_s.dot(il);if(h>=0&&f<=h)return t.copy(s);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(xs,o);sl.subVectors(e,r);let p=xs.dot(sl),v=_s.dot(sl);if(v>=0&&p<=v)return t.copy(r);let _=p*l-c*v;if(_<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(n).addScaledVector(_s,a);let m=h*v-p*f;if(m<=0&&f-h>=0&&p-v>=0)return Kh.subVectors(r,s),a=(f-h)/(f-h+(p-v)),t.copy(s).addScaledVector(Kh,a);let g=1/(m+_+d);return o=_*g,a=d*g,t.copy(n).addScaledVector(xs,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},mo={h:0,s:0,l:0};function ll(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=dh(e,1),t=Wt(t,0,1),n=Wt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ll(o,r,e+1/3),this.g=ll(o,r,e),this.b=ll(o,r,e-1/3)}return ft.toWorkingColorSpace(this,s),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let n=of[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return ft.fromWorkingColorSpace(on.copy(this),e),Math.round(Wt(on.r*255,0,255))*65536+Math.round(Wt(on.g*255,0,255))*256+Math.round(Wt(on.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(on.copy(this),t);let n=on.r,s=on.g,r=on.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=jt){ft.fromWorkingColorSpace(on.copy(this),e);let t=on.r,n=on.g,s=on.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(mo);let n=Er(Ci.h,mo.h,t),s=Er(Ci.s,mo.s,t),r=Er(Ci.l,mo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new We;We.NAMES=of;var hp=0,Hn=class extends Fi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Zn(),this.name="",this.blending=Is,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=Tl,this.blendEquation=Tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bl&&(n.blendSrc=this.blendSrc),this.blendDst!==Tl&&(n.blendDst=this.blendDst),this.blendEquation!==Tn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},xn=class extends Hn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Yu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},di=up();function up(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function fp(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Wt(i,-65504,65504),di.floatView[0]=i;let e=di.uint32View[0],t=e>>23&511;return di.baseTable[t]+((e&8388607)>>di.shiftTable[t])}function dp(i){let e=i>>10;return di.uint32View[0]=di.mantissaTable[di.offsetTable[e]+(i&1023)]+di.exponentTable[e],di.floatView[0]}var ph={toHalfFloat:fp,fromHalfFloat:dp},kt=new I,go=new Te,Bt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hc,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)go.fromBufferAttribute(this,t),go.applyMatrix3(e),this.setXY(t,go.x,go.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hc&&(e.usage=this.usage),e}};var Jo=class extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ko=class extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var mt=class extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},pp=0,bn=new je,cl=new Ot,ys=new I,En=new gi,fr=new gi,Qt=new I,Ct=class i extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rf(e)?Ko:Jo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return cl.lookAt(e),cl.updateMatrix(),this.applyMatrix4(cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(En.min,fr.min),En.expandByPoint(Qt),Qt.addVectors(En.max,fr.max),En.expandByPoint(Qt)):(En.expandByPoint(fr.min),En.expandByPoint(fr.max))}En.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Qt.fromBufferAttribute(a,l),c&&(ys.fromBufferAttribute(e,l),Qt.add(ys)),s=Math.max(s,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new I,c[T]=new I;let l=new I,h=new I,f=new I,d=new Te,p=new Te,v=new Te,_=new I,m=new I;function g(T,M,y){l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,y),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,M),v.fromBufferAttribute(r,y),h.sub(l),f.sub(l),p.sub(d),v.sub(d);let C=1/(p.x*v.y-v.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(C),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(C),a[T].add(_),a[M].add(_),a[y].add(_),c[T].add(m),c[M].add(m),c[y].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let T=0,M=R.length;T<M;++T){let y=R[T],C=y.start,B=y.count;for(let V=C,X=C+B;V<X;V+=3)g(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let E=new I,S=new I,F=new I,D=new I;function L(T){F.fromBufferAttribute(s,T),D.copy(F);let M=a[T];E.copy(M),E.sub(F.multiplyScalar(F.dot(M))).normalize(),S.crossVectors(D,M);let C=S.dot(c[T])<0?-1:1;o.setXYZW(T,E.x,E.y,E.z,C)}for(let T=0,M=R.length;T<M;++T){let y=R[T],C=y.start,B=y.count;for(let V=C,X=C+B;V<X;V+=3)L(e.getX(V+0)),L(e.getX(V+1)),L(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,f=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){let v=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,f=a.normalized,d=new l.constructor(c.length*h),p=0,v=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let g=0;g<h;g++)d[v++]=l[p++]}return new Bt(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let p=l[f];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qh=new je,Zi=new Pr,vo=new vi,jh=new I,xo=new I,_o=new I,yo=new I,hl=new I,Mo=new I,eu=new I,So=new I,$e=class extends Ot{constructor(e=new Ct,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Mo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(hl.fromBufferAttribute(f,e),o?Mo.addScaledVector(hl,h):Mo.addScaledVector(hl.sub(t),h))}t.add(Mo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(vo.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(vo,jh)===null||Zi.origin.distanceToSquared(jh)>(e.far-e.near)**2))&&(Qh.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(Qh),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){let m=d[v],g=o[m.materialIndex],R=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=R,F=E;S<F;S+=3){let D=a.getX(S),L=a.getX(S+1),T=a.getX(S+2);s=Eo(this,g,e,n,l,h,f,D,L,T),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=v,g=_;m<g;m+=3){let R=a.getX(m),E=a.getX(m+1),S=a.getX(m+2);s=Eo(this,o,e,n,l,h,f,R,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){let m=d[v],g=o[m.materialIndex],R=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=R,F=E;S<F;S+=3){let D=S,L=S+1,T=S+2;s=Eo(this,g,e,n,l,h,f,D,L,T),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=v,g=_;m<g;m+=3){let R=m,E=m+1,S=m+2;s=Eo(this,o,e,n,l,h,f,R,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function mp(i,e,t,n,s,r,o,a){let c;if(e.side===Nt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===$n,a),c===null)return null;So.copy(a),So.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(So);return l<t.near||l>t.far?null:{distance:l,point:So.clone(),object:i}}function Eo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,xo),i.getVertexPosition(c,_o),i.getVertexPosition(l,yo);let h=mp(i,e,t,n,xo,_o,yo,eu);if(h){let f=new I;Ii.getBarycoord(eu,xo,_o,yo,f),s&&(h.uv=Ii.getInterpolatedAttribute(s,a,c,l,f,new Te)),r&&(h.uv1=Ii.getInterpolatedAttribute(r,a,c,l,f,new Te)),o&&(h.normal=Ii.getInterpolatedAttribute(o,a,c,l,f,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new I,materialIndex:0};Ii.getNormal(xo,_o,yo,d.normal),h.face=d,h.barycoord=f}return h}var ze=class i extends Ct{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],d=0,p=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,s,o,2),v("x","z","y",1,-1,e,n,-t,s,o,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(f,2));function v(_,m,g,R,E,S,F,D,L,T,M){let y=S/L,C=F/T,B=S/2,V=F/2,X=D/2,re=L+1,N=T+1,Q=0,k=0,Y=new I;for(let se=0;se<N;se++){let te=se*C-V;for(let Ie=0;Ie<re;Ie++){let qe=Ie*y-B;Y[_]=qe*R,Y[m]=te*E,Y[g]=X,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[g]=D>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(Ie/L),f.push(1-se/T),Q+=1}}for(let se=0;se<T;se++)for(let te=0;te<L;te++){let Ie=d+te+re*se,qe=d+te+re*(se+1),le=d+(te+1)+re*(se+1),_e=d+(te+1)+re*se;c.push(Ie,qe,_e),c.push(qe,le,_e),k+=6}a.addGroup(p,k,M),p+=k,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function zs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=zs(i[t]);for(let s in n)e[s]=n[s]}return e}function gp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function af(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var $t={clone:zs,merge:cn},vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yt=class extends Hn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vp,this.fragmentShader=xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=gp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Qo=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pi=new I,tu=new Te,nu=new Te,Xt=class extends Qo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,tu,nu),t.subVectors(nu,tu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ms=-90,Ss=1,pc=class extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xt(Ms,Ss,e,t);s.layers=this.layers,this.add(s);let r=new Xt(Ms,Ss,e,t);r.layers=this.layers,this.add(r);let o=new Xt(Ms,Ss,e,t);o.layers=this.layers,this.add(o);let a=new Xt(Ms,Ss,e,t);a.layers=this.layers,this.add(a);let c=new Xt(Ms,Ss,e,t);c.layers=this.layers,this.add(c);let l=new Xt(Ms,Ss,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},jo=class extends tn{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},mc=class extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new jo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ze(5,5,5),r=new yt({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Yt});r.uniforms.tEquirect.value=t;let o=new $e(s,r),a=t.minFilter;return t.minFilter===Di&&(t.minFilter=en),new pc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},ul=new I,_p=new I,yp=new it,Fn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ul.subVectors(n,t).cross(_p.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ul),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||yp.getNormalMatrix(e),s=this.coplanarPoint(ul).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},$i=new vi,wo=new I,Ir=class{constructor(e=new Fn,t=new Fn,n=new Fn,s=new Fn,r=new Fn,o=new Fn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],f=s[6],d=s[7],p=s[8],v=s[9],_=s[10],m=s[11],g=s[12],R=s[13],E=s[14],S=s[15];if(n[0].setComponents(c-r,d-l,m-p,S-g).normalize(),n[1].setComponents(c+r,d+l,m+p,S+g).normalize(),n[2].setComponents(c+o,d+h,m+v,S+R).normalize(),n[3].setComponents(c-o,d-h,m-v,S-R).normalize(),n[4].setComponents(c-a,d-f,m-_,S-E).normalize(),t===pi)n[5].setComponents(c+a,d+f,m+_,S+E).normalize();else if(t===Yo)n[5].setComponents(a,f,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(wo.x=s.normal.x>0?e.max.x:e.min.x,wo.y=s.normal.y>0?e.max.y:e.min.y,wo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function lf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Mp(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,h);else{f.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<f.length;p++){let v=f[d],_=f[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,v=f.length;p<v;p++){let _=f[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var vt=class i extends Ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=e/a,d=t/c,p=[],v=[],_=[],m=[];for(let g=0;g<h;g++){let R=g*d-o;for(let E=0;E<l;E++){let S=E*f-r;v.push(S,-R,0),_.push(0,0,1),m.push(E/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let R=0;R<a;R++){let E=R+l*g,S=R+l*(g+1),F=R+1+l*(g+1),D=R+1+l*g;p.push(E,S,D),p.push(S,F,D)}this.setIndex(p),this.setAttribute("position",new mt(v,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ep=`#ifdef USE_ALPHAHASH
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
#endif`,wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
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
#endif`,Cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
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
#endif`,Ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Np=`#ifdef USE_IRIDESCENCE
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
#endif`,Fp=`#ifdef USE_BUMPMAP
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xp=`#define PI 3.141592653589793
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
} // validated`,Yp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qp=`vec3 transformedNormal = objectNormal;
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
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",jp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,em=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
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
}`,hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dm=`uniform bool receiveShadow;
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
#endif`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_m=`PhysicalMaterial material;
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
#endif`,ym=`struct PhysicalMaterial {
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
}`,Mm=`
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
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Im=`#if defined( USE_POINTS_UV )
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
#endif`,Dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Om=`#ifdef USE_MORPHTARGETS
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
#endif`,Bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wm=`#ifdef USE_NORMALMAP
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
#endif`,Xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o0=`float getShadowMask() {
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
}`,a0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l0=`#ifdef USE_SKINNING
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
#endif`,c0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h0=`#ifdef USE_SKINNING
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
#endif`,u0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m0=`#ifdef USE_TRANSMISSION
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
#endif`,g0=`#ifdef USE_TRANSMISSION
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,M0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S0=`uniform sampler2D t2D;
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
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`#include <common>
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
}`,R0=`#if DEPTH_PACKING == 3200
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
}`,C0=`#define DISTANCE
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
}`,P0=`#define DISTANCE
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
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`uniform float scale;
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
}`,L0=`uniform vec3 diffuse;
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
}`,N0=`#include <common>
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
}`,F0=`uniform vec3 diffuse;
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
}`,O0=`#define LAMBERT
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
}`,B0=`#define LAMBERT
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
}`,z0=`#define MATCAP
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
}`,H0=`#define MATCAP
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
}`,k0=`#define NORMAL
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
}`,V0=`#define NORMAL
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
}`,G0=`#define PHONG
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
}`,W0=`#define PHONG
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
}`,X0=`#define STANDARD
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
}`,Y0=`#define STANDARD
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
}`,q0=`#define TOON
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
}`,Z0=`#define TOON
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
}`,$0=`uniform float size;
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
}`,J0=`uniform vec3 diffuse;
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
}`,K0=`#include <common>
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
}`,Q0=`uniform vec3 color;
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
}`,j0=`uniform float rotation;
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
}`,eg=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Sp,alphahash_pars_fragment:Ep,alphamap_fragment:wp,alphamap_pars_fragment:bp,alphatest_fragment:Tp,alphatest_pars_fragment:Ap,aomap_fragment:Rp,aomap_pars_fragment:Cp,batching_pars_vertex:Pp,batching_vertex:Ip,begin_vertex:Dp,beginnormal_vertex:Up,bsdfs:Lp,iridescence_fragment:Np,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Op,clipping_planes_pars_fragment:Bp,clipping_planes_pars_vertex:zp,clipping_planes_vertex:Hp,color_fragment:kp,color_pars_fragment:Vp,color_pars_vertex:Gp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:Yp,defaultnormal_vertex:qp,displacementmap_pars_vertex:Zp,displacementmap_vertex:$p,emissivemap_fragment:Jp,emissivemap_pars_fragment:Kp,colorspace_fragment:Qp,colorspace_pars_fragment:jp,envmap_fragment:em,envmap_common_pars_fragment:tm,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:sm,fog_vertex:rm,fog_pars_vertex:om,fog_fragment:am,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_pars_fragment:hm,lights_lambert_fragment:um,lights_lambert_pars_fragment:fm,lights_pars_begin:dm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:vm,lights_phong_pars_fragment:xm,lights_physical_fragment:_m,lights_physical_pars_fragment:ym,lights_fragment_begin:Mm,lights_fragment_maps:Sm,lights_fragment_end:Em,logdepthbuf_fragment:wm,logdepthbuf_pars_fragment:bm,logdepthbuf_pars_vertex:Tm,logdepthbuf_vertex:Am,map_fragment:Rm,map_pars_fragment:Cm,map_particle_fragment:Pm,map_particle_pars_fragment:Im,metalnessmap_fragment:Dm,metalnessmap_pars_fragment:Um,morphinstance_vertex:Lm,morphcolor_vertex:Nm,morphnormal_vertex:Fm,morphtarget_pars_vertex:Om,morphtarget_vertex:Bm,normal_fragment_begin:zm,normal_fragment_maps:Hm,normal_pars_fragment:km,normal_pars_vertex:Vm,normal_vertex:Gm,normalmap_pars_fragment:Wm,clearcoat_normal_fragment_begin:Xm,clearcoat_normal_fragment_maps:Ym,clearcoat_pars_fragment:qm,iridescence_pars_fragment:Zm,opaque_fragment:$m,packing:Jm,premultiplied_alpha_fragment:Km,project_vertex:Qm,dithering_fragment:jm,dithering_pars_fragment:e0,roughnessmap_fragment:t0,roughnessmap_pars_fragment:n0,shadowmap_pars_fragment:i0,shadowmap_pars_vertex:s0,shadowmap_vertex:r0,shadowmask_pars_fragment:o0,skinbase_vertex:a0,skinning_pars_vertex:l0,skinning_vertex:c0,skinnormal_vertex:h0,specularmap_fragment:u0,specularmap_pars_fragment:f0,tonemapping_fragment:d0,tonemapping_pars_fragment:p0,transmission_fragment:m0,transmission_pars_fragment:g0,uv_pars_fragment:v0,uv_pars_vertex:x0,uv_vertex:_0,worldpos_vertex:y0,background_vert:M0,background_frag:S0,backgroundCube_vert:E0,backgroundCube_frag:w0,cube_vert:b0,cube_frag:T0,depth_vert:A0,depth_frag:R0,distanceRGBA_vert:C0,distanceRGBA_frag:P0,equirect_vert:I0,equirect_frag:D0,linedashed_vert:U0,linedashed_frag:L0,meshbasic_vert:N0,meshbasic_frag:F0,meshlambert_vert:O0,meshlambert_frag:B0,meshmatcap_vert:z0,meshmatcap_frag:H0,meshnormal_vert:k0,meshnormal_frag:V0,meshphong_vert:G0,meshphong_frag:W0,meshphysical_vert:X0,meshphysical_frag:Y0,meshtoon_vert:q0,meshtoon_frag:Z0,points_vert:$0,points_frag:J0,shadow_vert:K0,shadow_frag:Q0,sprite_vert:j0,sprite_frag:eg},ke={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Yn={basic:{uniforms:cn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:cn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new We(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:cn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:cn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:cn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new We(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:cn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:cn([ke.points,ke.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:cn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:cn([ke.common,ke.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:cn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:cn([ke.sprite,ke.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:cn([ke.common,ke.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:cn([ke.lights,ke.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Yn.physical={uniforms:cn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var bo={r:0,b:0,g:0},Ji=new An,tg=new je;function ng(i,e,t,n,s,r,o){let a=new We(0),c=r===!0?0:1,l,h,f=null,d=0,p=null;function v(R){let E=R.isScene===!0?R.background:null;return E&&E.isTexture&&(E=(R.backgroundBlurriness>0?t:e).get(E)),E}function _(R){let E=!1,S=v(R);S===null?g(a,c):S&&S.isColor&&(g(S,1),E=!0);let F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(R,E){let S=v(E);S&&(S.isCubeTexture||S.mapping===Ea)?(h===void 0&&(h=new $e(new ze(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:zs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ji.copy(E.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tg.makeRotationFromEuler(Ji)),h.material.toneMapped=ft.getTransfer(S.colorSpace)!==St,(f!==S||d!==S.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=S,d=S.version,p=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new $e(new vt(2,2),new yt({name:"BackgroundMaterial",uniforms:zs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ft.getTransfer(S.colorSpace)!==St,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=S,d=S.version,p=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function g(R,E){R.getRGB(bo,af(i)),n.buffers.color.setClear(bo.r,bo.g,bo.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(R,E=1){a.set(R),c=E,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,g(a,c)},render:_,addToRenderList:m}}function ig(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(y,C,B,V,X){let re=!1,N=f(V,B,C);r!==N&&(r=N,l(r.object)),re=p(y,V,B,X),re&&v(y,V,B,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,S(y,C,B,V),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function f(y,C,B){let V=B.wireframe===!0,X=n[y.id];X===void 0&&(X={},n[y.id]=X);let re=X[C.id];re===void 0&&(re={},X[C.id]=re);let N=re[V];return N===void 0&&(N=d(c()),re[V]=N),N}function d(y){let C=[],B=[],V=[];for(let X=0;X<t;X++)C[X]=0,B[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:V,object:y,attributes:{},index:null}}function p(y,C,B,V){let X=r.attributes,re=C.attributes,N=0,Q=B.getAttributes();for(let k in Q)if(Q[k].location>=0){let se=X[k],te=re[k];if(te===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(te=y.instanceColor)),se===void 0||se.attribute!==te||te&&se.data!==te.data)return!0;N++}return r.attributesNum!==N||r.index!==V}function v(y,C,B,V){let X={},re=C.attributes,N=0,Q=B.getAttributes();for(let k in Q)if(Q[k].location>=0){let se=re[k];se===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(se=y.instanceColor));let te={};te.attribute=se,se&&se.data&&(te.data=se.data),X[k]=te,N++}r.attributes=X,r.attributesNum=N,r.index=V}function _(){let y=r.newAttributes;for(let C=0,B=y.length;C<B;C++)y[C]=0}function m(y){g(y,0)}function g(y,C){let B=r.newAttributes,V=r.enabledAttributes,X=r.attributeDivisors;B[y]=1,V[y]===0&&(i.enableVertexAttribArray(y),V[y]=1),X[y]!==C&&(i.vertexAttribDivisor(y,C),X[y]=C)}function R(){let y=r.newAttributes,C=r.enabledAttributes;for(let B=0,V=C.length;B<V;B++)C[B]!==y[B]&&(i.disableVertexAttribArray(B),C[B]=0)}function E(y,C,B,V,X,re,N){N===!0?i.vertexAttribIPointer(y,C,B,X,re):i.vertexAttribPointer(y,C,B,V,X,re)}function S(y,C,B,V){_();let X=V.attributes,re=B.getAttributes(),N=C.defaultAttributeValues;for(let Q in re){let k=re[Q];if(k.location>=0){let Y=X[Q];if(Y===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),Y!==void 0){let se=Y.normalized,te=Y.itemSize,Ie=e.get(Y);if(Ie===void 0)continue;let qe=Ie.buffer,le=Ie.type,_e=Ie.bytesPerElement,be=le===i.INT||le===i.UNSIGNED_INT||Y.gpuType===rh;if(Y.isInterleavedBufferAttribute){let xe=Y.data,Fe=xe.stride,Xe=Y.offset;if(xe.isInstancedInterleavedBuffer){for(let Ze=0;Ze<k.locationSize;Ze++)g(k.location+Ze,xe.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ze=0;Ze<k.locationSize;Ze++)m(k.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let Ze=0;Ze<k.locationSize;Ze++)E(k.location+Ze,te/k.locationSize,le,se,Fe*_e,(Xe+te/k.locationSize*Ze)*_e,be)}else{if(Y.isInstancedBufferAttribute){for(let xe=0;xe<k.locationSize;xe++)g(k.location+xe,Y.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let xe=0;xe<k.locationSize;xe++)m(k.location+xe);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let xe=0;xe<k.locationSize;xe++)E(k.location+xe,te/k.locationSize,le,se,te*_e,te/k.locationSize*xe*_e,be)}}else if(N!==void 0){let se=N[Q];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(k.location,se);break;case 3:i.vertexAttrib3fv(k.location,se);break;case 4:i.vertexAttrib4fv(k.location,se);break;default:i.vertexAttrib1fv(k.location,se)}}}}R()}function F(){T();for(let y in n){let C=n[y];for(let B in C){let V=C[B];for(let X in V)h(V[X].object),delete V[X];delete C[B]}delete n[y]}}function D(y){if(n[y.id]===void 0)return;let C=n[y.id];for(let B in C){let V=C[B];for(let X in V)h(V[X].object),delete V[X];delete C[B]}delete n[y.id]}function L(y){for(let C in n){let B=n[C];if(B[y.id]===void 0)continue;let V=B[y.id];for(let X in V)h(V[X].object),delete V[X];delete B[y.id]}}function T(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:M,dispose:F,releaseStatesOfGeometry:D,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:R}}function sg(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),t.update(h,n,f))}function a(l,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let p=0;for(let v=0;v<f;v++)p+=h[v];t.update(p,n,1)}function c(l,h,f,d){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<l.length;v++)o(l[v],h[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,f);let v=0;for(let _=0;_<f;_++)v+=h[_]*d[_];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function rg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==hn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let T=L===Ht&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==zn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==vn&&!T)}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=v>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:R,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:F,maxSamples:D}}function og(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Fn,a=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){let v=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,g=i.get(f);if(!s||v===null||v.length===0||r&&!m)r?h(null):l();else{let R=r?0:n,E=R*4,S=g.clippingState||null;c.value=S,S=h(v,d,E,p);for(let F=0;F!==E;++F)S[F]=t[F];g.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,p,v){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=c.value,v!==!0||m===null){let g=p+_*4,R=d.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,S=p;E!==_;++E,S+=4)o.copy(f[E]).applyMatrix4(R,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function ag(i){let e=new WeakMap;function t(o,a){return a===Ll?o.mapping=Fs:a===Nl&&(o.mapping=Os),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ll||a===Nl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new mc(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Hs=class extends Qo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cs=4,iu=[.125,.215,.35,.446,.526,.582],ji=20,fl=new Hs,su=new We,dl=null,pl=0,ml=0,gl=!1,Qi=(1+Math.sqrt(5))/2,Es=1/Qi,ru=[new I(-Qi,Es,0),new I(Qi,Es,0),new I(-Es,0,Qi),new I(Es,0,Qi),new I(0,Qi,-Es),new I(0,Qi,Es),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Oi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){dl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dl,pl,ml),this._renderer.xr.enabled=gl,e.scissorTest=!1,To(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Ht,format:hn,colorSpace:_i,depthBuffer:!1},s=ou(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ou(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lg(r)),this._blurMaterial=cg(r,e,t)}return s}_compileMaterial(e){let t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,fl)}_sceneToCubeUV(e,t,n,s){let a=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(su),h.toneMapping=Ui,h.autoClear=!1;let p=new xn({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),v=new $e(new ze,p),_=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(su),_=!0);for(let g=0;g<6;g++){let R=g%3;R===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):R===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));let E=this._cubeSize;To(s,R*E,g>2?E:0,E,E),h.setRenderTarget(s),_&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Fs||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=au());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new $e(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;To(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,fl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ru[(s-r-1)%ru.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new $e(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ji-1),_=r/v,m=isFinite(r)?1+Math.floor(h*_):ji;m>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);let g=[],R=0;for(let L=0;L<ji;++L){let T=L/_,M=Math.exp(-T*T/2);g.push(M),L===0?R+=M:L<m&&(R+=2*M)}for(let L=0;L<g.length;L++)g[L]=g[L]/R;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:E}=this;d.dTheta.value=v,d.mipInt.value=E-n;let S=this._sizeLods[s],F=3*S*(s>E-Cs?s-E+Cs:0),D=4*(this._cubeSize-S);To(t,F,D,3*S,2*S),c.setRenderTarget(t),c.render(f,fl)}};function lg(i){let e=[],t=[],n=[],s=i,r=i-Cs+1+iu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Cs?c=iu[o-i+Cs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,v=6,_=3,m=2,g=1,R=new Float32Array(_*v*p),E=new Float32Array(m*v*p),S=new Float32Array(g*v*p);for(let D=0;D<p;D++){let L=D%3*2/3-1,T=D>2?0:-1,M=[L,T,0,L+2/3,T,0,L+2/3,T+1,0,L,T,0,L+2/3,T+1,0,L,T+1,0];R.set(M,_*v*D),E.set(d,m*v*D);let y=[D,D,D,D,D,D];S.set(y,g*v*D)}let F=new Ct;F.setAttribute("position",new Bt(R,_)),F.setAttribute("uv",new Bt(E,m)),F.setAttribute("faceIndex",new Bt(S,g)),e.push(F),s>Cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ou(i,e,t){let n=new Ft(i,e,t);return n.texture.mapping=Ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function To(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function cg(i,e,t){let n=new Float32Array(ji),s=new I(0,1,0);return new yt({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function au(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function lu(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function mh(){return`

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
	`}function hg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ll||c===Nl,h=c===Fs||c===Os;if(l||h){let f=e.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Oi(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Oi(i)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ug(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&yr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function fg(i,e,t,n){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let v in d.attributes)e.remove(d.attributes[v]);for(let v in d.morphAttributes){let _=d.morphAttributes[v];for(let m=0,g=_.length;m<g;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(f){let d=f.attributes;for(let v in d)e.update(d[v],i.ARRAY_BUFFER);let p=f.morphAttributes;for(let v in p){let _=p[v];for(let m=0,g=_.length;m<g;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(f){let d=[],p=f.index,v=f.attributes.position,_=0;if(p!==null){let R=p.array;_=p.version;for(let E=0,S=R.length;E<S;E+=3){let F=R[E+0],D=R[E+1],L=R[E+2];d.push(F,D,D,L,L,F)}}else if(v!==void 0){let R=v.array;_=v.version;for(let E=0,S=R.length/3-1;E<S;E+=3){let F=E+0,D=E+1,L=E+2;d.push(F,D,D,L,L,F)}}else return;let m=new(rf(d)?Ko:Jo)(d,1);m.version=_;let g=r.get(f);g&&e.remove(g),r.set(f,m)}function h(f){let d=r.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function dg(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function l(d,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,d*o,v),t.update(p,n,v))}function h(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,v);let m=0;for(let g=0;g<v;g++)m+=p[g];t.update(m,n,1)}function f(d,p,v,_){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)l(d[g]/o,p[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,v);let g=0;for(let R=0;R<v;R++)g+=p[R]*_[R];t.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function pg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function mg(i,e,t){let n=new WeakMap,s=new _t;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let M=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],R=a.morphAttributes.color||[],E=0;p===!0&&(E=1),v===!0&&(E=2),_===!0&&(E=3);let S=a.attributes.position.count*E,F=1;S>e.maxTextureSize&&(F=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let D=new Float32Array(S*F*4*f),L=new Zo(D,S,F,f);L.type=vn,L.needsUpdate=!0;let T=E*4;for(let y=0;y<f;y++){let C=m[y],B=g[y],V=R[y],X=S*F*4*y;for(let re=0;re<C.count;re++){let N=re*T;p===!0&&(s.fromBufferAttribute(C,re),D[X+N+0]=s.x,D[X+N+1]=s.y,D[X+N+2]=s.z,D[X+N+3]=0),v===!0&&(s.fromBufferAttribute(B,re),D[X+N+4]=s.x,D[X+N+5]=s.y,D[X+N+6]=s.z,D[X+N+7]=0),_===!0&&(s.fromBufferAttribute(V,re),D[X+N+8]=s.x,D[X+N+9]=s.y,D[X+N+10]=s.z,D[X+N+11]=V.itemSize===4?s.w:1)}}d={count:f,texture:L,size:new Te(S,F)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let v=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function gg(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return f}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Bi=class extends tn{constructor(e,t,n,s,r,o,a,c,l,h=Ds){if(h!==Ds&&h!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ds&&(n=es),n===void 0&&h===Ni&&(n=Li),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:an,this.minFilter=c!==void 0?c:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},cf=new tn,cu=new Bi(1,1),hf=new Zo,uf=new dc,ff=new jo,hu=[],uu=[],fu=new Float32Array(16),du=new Float32Array(9),pu=new Float32Array(4);function Js(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=hu[s];if(r===void 0&&(r=new Float32Array(s),hu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ba(i,e){let t=uu[e];t===void 0&&(t=new Int32Array(e),uu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function _g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function Mg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(qt(t,n))return;pu.set(n),i.uniformMatrix2fv(this.addr,!1,pu),Zt(t,n)}}function Sg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(qt(t,n))return;du.set(n),i.uniformMatrix3fv(this.addr,!1,du),Zt(t,n)}}function Eg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(qt(t,n))return;fu.set(n),i.uniformMatrix4fv(this.addr,!1,fu),Zt(t,n)}}function wg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function Tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function Ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function Rg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function Pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function Ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function Dg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cu.compareFunction=sf,r=cu):r=cf,t.setTexture2D(e||r,s)}function Ug(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||uf,s)}function Lg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ff,s)}function Ng(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||hf,s)}function Fg(i){switch(i){case 5126:return vg;case 35664:return xg;case 35665:return _g;case 35666:return yg;case 35674:return Mg;case 35675:return Sg;case 35676:return Eg;case 5124:case 35670:return wg;case 35667:case 35671:return bg;case 35668:case 35672:return Tg;case 35669:case 35673:return Ag;case 5125:return Rg;case 36294:return Cg;case 36295:return Pg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Ng}}function Og(i,e){i.uniform1fv(this.addr,e)}function Bg(i,e){let t=Js(e,this.size,2);i.uniform2fv(this.addr,t)}function zg(i,e){let t=Js(e,this.size,3);i.uniform3fv(this.addr,t)}function Hg(i,e){let t=Js(e,this.size,4);i.uniform4fv(this.addr,t)}function kg(i,e){let t=Js(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vg(i,e){let t=Js(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gg(i,e){let t=Js(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Wg(i,e){i.uniform1iv(this.addr,e)}function Xg(i,e){i.uniform2iv(this.addr,e)}function Yg(i,e){i.uniform3iv(this.addr,e)}function qg(i,e){i.uniform4iv(this.addr,e)}function Zg(i,e){i.uniform1uiv(this.addr,e)}function $g(i,e){i.uniform2uiv(this.addr,e)}function Jg(i,e){i.uniform3uiv(this.addr,e)}function Kg(i,e){i.uniform4uiv(this.addr,e)}function Qg(i,e,t){let n=this.cache,s=e.length,r=ba(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||cf,r[o])}function jg(i,e,t){let n=this.cache,s=e.length,r=ba(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||uf,r[o])}function ev(i,e,t){let n=this.cache,s=e.length,r=ba(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ff,r[o])}function tv(i,e,t){let n=this.cache,s=e.length,r=ba(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||hf,r[o])}function nv(i){switch(i){case 5126:return Og;case 35664:return Bg;case 35665:return zg;case 35666:return Hg;case 35674:return kg;case 35675:return Vg;case 35676:return Gg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return Yg;case 35669:case 35673:return qg;case 5125:return Zg;case 36294:return $g;case 36295:return Jg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return tv}}var gc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fg(t.type)}},vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nv(t.type)}},xc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},vl=/(\w+)(\])?(\[|\.)?/g;function mu(i,e){i.seq.push(e),i.map[e.id]=e}function iv(i,e,t){let n=i.name,s=n.length;for(vl.lastIndex=0;;){let r=vl.exec(n),o=vl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){mu(t,l===void 0?new gc(a,i,e):new vc(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new xc(a),mu(t,f)),t=f}}}var Ls=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);iv(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function gu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var sv=37297,rv=0;function ov(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var vu=new it;function av(i){ft._getMatrix(vu,ft.workingColorSpace,i);let e=`mat3( ${vu.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(i)){case wa:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ov(i.getShaderSource(e),o)}else return s}function lv(i,e){let t=av(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cv(i,e){let t;switch(e){case eh:t="Linear";break;case th:t="Reinhard";break;case nh:t="Cineon";break;case Vr:t="ACESFilmic";break;case ih:t="AgX";break;case sh:t="Neutral";break;case wd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ao=new I;function hv(){ft.getLuminanceCoefficients(Ao);let i=Ao.x.toFixed(4),e=Ao.y.toFixed(4),t=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function fv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Mr(i){return i!==""}function _u(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(i){return i.replace(pv,gv)}var mv=new Map;function gv(i,e){let t=st[e];if(t===void 0){let n=mv.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _c(t)}var vv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mu(i){return i.replace(vv,xv)}function xv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Su(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function _v(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function yv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fs:case Os:e="ENVMAP_TYPE_CUBE";break;case Ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function Sv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yu:e="ENVMAP_BLENDING_MULTIPLY";break;case Sd:e="ENVMAP_BLENDING_MIX";break;case Ed:e="ENVMAP_BLENDING_ADD";break}return e}function Ev(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function wv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=_v(t),l=yv(t),h=Mv(t),f=Sv(t),d=Ev(t),p=uv(t),v=fv(r),_=s.createProgram(),m,g,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Mr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Mr).join(`
`),g.length>0&&(g+=`
`)):(m=[Su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),g=[Su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?st.tonemapping_pars_fragment:"",t.toneMapping!==Ui?cv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,lv("linearToOutputTexel",t.outputColorSpace),hv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mr).join(`
`)),o=_c(o),o=_u(o,t),o=yu(o,t),a=_c(a),a=_u(a,t),a=yu(a,t),o=Mu(o),a=Mu(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=R+m+o,S=R+g+a,F=gu(s,s.VERTEX_SHADER,E),D=gu(s,s.FRAGMENT_SHADER,S);s.attachShader(_,F),s.attachShader(_,D),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(C){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(_).trim(),V=s.getShaderInfoLog(F).trim(),X=s.getShaderInfoLog(D).trim(),re=!0,N=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,F,D);else{let Q=xu(s,F,"vertex"),k=xu(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+Q+`
`+k)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(V===""||X==="")&&(N=!1);N&&(C.diagnostics={runnable:re,programLog:B,vertexShader:{log:V,prefix:m},fragmentShader:{log:X,prefix:g}})}s.deleteShader(F),s.deleteShader(D),T=new Ls(s,_),M=dv(s,_)}let T;this.getUniforms=function(){return T===void 0&&L(this),T};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,sv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=D,this}var bv=0,yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Mc(e),t.set(e,n)),n}},Mc=class{constructor(e){this.id=bv++,this.code=e,this.usedTimes=0}};function Tv(i,e,t,n,s,r,o){let a=new $o,c=new yc,l=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,y,C,B,V){let X=B.fog,re=V.geometry,N=M.isMeshStandardMaterial?B.environment:null,Q=(M.isMeshStandardMaterial?t:e).get(M.envMap||N),k=Q&&Q.mapping===Ea?Q.image.height:null,Y=v[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let se=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,te=se!==void 0?se.length:0,Ie=0;re.morphAttributes.position!==void 0&&(Ie=1),re.morphAttributes.normal!==void 0&&(Ie=2),re.morphAttributes.color!==void 0&&(Ie=3);let qe,le,_e,be;if(Y){let xt=Yn[Y];qe=xt.vertexShader,le=xt.fragmentShader}else qe=M.vertexShader,le=M.fragmentShader,c.update(M),_e=c.getVertexShaderID(M),be=c.getFragmentShaderID(M);let xe=i.getRenderTarget(),Fe=i.state.buffers.depth.getReversed(),Xe=V.isInstancedMesh===!0,Ze=V.isBatchedMesh===!0,et=!!M.map,ue=!!M.matcap,Ae=!!Q,O=!!M.aoMap,Ve=!!M.lightMap,we=!!M.bumpMap,Ge=!!M.normalMap,Le=!!M.displacementMap,Je=!!M.emissiveMap,Oe=!!M.metalnessMap,U=!!M.roughnessMap,b=M.anisotropy>0,q=M.clearcoat>0,ce=M.dispersion>0,ye=M.iridescence>0,fe=M.sheen>0,Ye=M.transmission>0,W=b&&!!M.anisotropyMap,J=q&&!!M.clearcoatMap,ve=q&&!!M.clearcoatNormalMap,K=q&&!!M.clearcoatRoughnessMap,he=ye&&!!M.iridescenceMap,Me=ye&&!!M.iridescenceThicknessMap,$=fe&&!!M.sheenColorMap,oe=fe&&!!M.sheenRoughnessMap,ge=!!M.specularMap,me=!!M.specularColorMap,Ee=!!M.specularIntensityMap,H=Ye&&!!M.transmissionMap,G=Ye&&!!M.thicknessMap,ee=!!M.gradientMap,pe=!!M.alphaMap,Ce=M.alphaTest>0,Se=!!M.alphaHash,Qe=!!M.extensions,pt=Ui;M.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(pt=i.toneMapping);let Ut={shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:qe,fragmentShader:le,defines:M.defines,customVertexShaderID:_e,customFragmentShaderID:be,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ze,batchingColor:Ze&&V._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&V.instanceColor!==null,instancingMorph:Xe&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:_i,alphaToCoverage:!!M.alphaToCoverage,map:et,matcap:ue,envMap:Ae,envMapMode:Ae&&Q.mapping,envMapCubeUVHeight:k,aoMap:O,lightMap:Ve,bumpMap:we,normalMap:Ge,displacementMap:d&&Le,emissiveMap:Je,normalMapObjectSpace:Ge&&M.normalMapType===Ad,normalMapTangentSpace:Ge&&M.normalMapType===fh,metalnessMap:Oe,roughnessMap:U,anisotropy:b,anisotropyMap:W,clearcoat:q,clearcoatMap:J,clearcoatNormalMap:ve,clearcoatRoughnessMap:K,dispersion:ce,iridescence:ye,iridescenceMap:he,iridescenceThicknessMap:Me,sheen:fe,sheenColorMap:$,sheenRoughnessMap:oe,specularMap:ge,specularColorMap:me,specularIntensityMap:Ee,transmission:Ye,transmissionMap:H,thicknessMap:G,gradientMap:ee,opaque:M.transparent===!1&&M.blending===Is&&M.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ce,alphaHash:Se,combine:M.combine,mapUv:et&&_(M.map.channel),aoMapUv:O&&_(M.aoMap.channel),lightMapUv:Ve&&_(M.lightMap.channel),bumpMapUv:we&&_(M.bumpMap.channel),normalMapUv:Ge&&_(M.normalMap.channel),displacementMapUv:Le&&_(M.displacementMap.channel),emissiveMapUv:Je&&_(M.emissiveMap.channel),metalnessMapUv:Oe&&_(M.metalnessMap.channel),roughnessMapUv:U&&_(M.roughnessMap.channel),anisotropyMapUv:W&&_(M.anisotropyMap.channel),clearcoatMapUv:J&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ve&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:$&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:oe&&_(M.sheenRoughnessMap.channel),specularMapUv:ge&&_(M.specularMap.channel),specularColorMapUv:me&&_(M.specularColorMap.channel),specularIntensityMapUv:Ee&&_(M.specularIntensityMap.channel),transmissionMapUv:H&&_(M.transmissionMap.channel),thicknessMapUv:G&&_(M.thicknessMap.channel),alphaMapUv:pe&&_(M.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Ge||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!re.attributes.uv&&(et||pe),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Fe,skinning:V.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Ie,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,decodeVideoTexture:et&&M.map.isVideoTexture===!0&&ft.getTransfer(M.map.colorSpace)===St,decodeVideoTextureEmissive:Je&&M.emissiveMap.isVideoTexture===!0&&ft.getTransfer(M.emissiveMap.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Lt,flipSided:M.side===Nt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Qe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&M.extensions.multiDraw===!0||Ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut}function g(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)y.push(C),y.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(R(y,M),E(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function R(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function E(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){let y=v[M.type],C;if(y){let B=Yn[y];C=$t.clone(B.uniforms)}else C=M.uniforms;return C}function F(M,y){let C;for(let B=0,V=h.length;B<V;B++){let X=h[B];if(X.cacheKey===y){C=X,++C.usedTimes;break}}return C===void 0&&(C=new wv(i,y,M,r),h.push(C)),C}function D(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function L(M){c.remove(M)}function T(){c.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:S,acquireProgram:F,releaseProgram:D,releaseShaderCache:L,programs:h,dispose:T}}function Av(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Rv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Eu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,d,p,v,_,m){let g=i[e];return g===void 0?(g={id:f.id,object:f,geometry:d,material:p,groupOrder:v,renderOrder:f.renderOrder,z:_,group:m},i[e]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=p,g.groupOrder=v,g.renderOrder=f.renderOrder,g.z=_,g.group=m),e++,g}function a(f,d,p,v,_,m){let g=o(f,d,p,v,_,m);p.transmission>0?n.push(g):p.transparent===!0?s.push(g):t.push(g)}function c(f,d,p,v,_,m){let g=o(f,d,p,v,_,m);p.transmission>0?n.unshift(g):p.transparent===!0?s.unshift(g):t.unshift(g)}function l(f,d){t.length>1&&t.sort(f||Rv),n.length>1&&n.sort(d||Eu),s.length>1&&s.sort(d||Eu)}function h(){for(let f=e,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Cv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new wu,i.set(n,[o])):s>=r.length?(o=new wu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Pv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new We};break;case"SpotLight":t={position:new I,direction:new I,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Iv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Dv=0;function Uv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Lv(i){let e=new Pv,t=Iv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new je,o=new je;function a(l){let h=0,f=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,v=0,_=0,m=0,g=0,R=0,E=0,S=0,F=0,D=0,L=0;l.sort(Uv);for(let M=0,y=l.length;M<y;M++){let C=l[M],B=C.color,V=C.intensity,X=C.distance,re=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=B.r*V,f+=B.g*V,d+=B.b*V;else if(C.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(C.sh.coefficients[N],V);L++}else if(C.isDirectionalLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,k=t.get(C);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=re,n.directionalShadowMatrix[p]=C.shadow.matrix,R++}n.directional[p]=N,p++}else if(C.isSpotLight){let N=e.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy(B).multiplyScalar(V),N.distance=X,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,n.spot[_]=N;let Q=C.shadow;if(C.map&&(n.spotLightMap[F]=C.map,F++,Q.updateMatrices(C),C.castShadow&&D++),n.spotLightMatrix[_]=Q.matrix,C.castShadow){let k=t.get(C);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=re,S++}_++}else if(C.isRectAreaLight){let N=e.get(C);N.color.copy(B).multiplyScalar(V),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=N,m++}else if(C.isPointLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),N.distance=C.distance,N.decay=C.decay,C.castShadow){let Q=C.shadow,k=t.get(C);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,k.shadowCameraNear=Q.camera.near,k.shadowCameraFar=Q.camera.far,n.pointShadow[v]=k,n.pointShadowMap[v]=re,n.pointShadowMatrix[v]=C.shadow.matrix,E++}n.point[v]=N,v++}else if(C.isHemisphereLight){let N=e.get(C);N.skyColor.copy(C.color).multiplyScalar(V),N.groundColor.copy(C.groundColor).multiplyScalar(V),n.hemi[g]=N,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let T=n.hash;(T.directionalLength!==p||T.pointLength!==v||T.spotLength!==_||T.rectAreaLength!==m||T.hemiLength!==g||T.numDirectionalShadows!==R||T.numPointShadows!==E||T.numSpotShadows!==S||T.numSpotMaps!==F||T.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=v,n.hemi.length=g,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+F-D,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=L,T.directionalLength=p,T.pointLength=v,T.spotLength=_,T.rectAreaLength=m,T.hemiLength=g,T.numDirectionalShadows=R,T.numPointShadows=E,T.numSpotShadows=S,T.numSpotMaps=F,T.numLightProbes=L,n.version=Dv++)}function c(l,h){let f=0,d=0,p=0,v=0,_=0,m=h.matrixWorldInverse;for(let g=0,R=l.length;g<R;g++){let E=l[g];if(E.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(E.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){let S=n.hemi[_];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function bu(i){let e=new Lv(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Nv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new bu(i),e.set(s,[a])):r>=o.length?(a=new bu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Dr=class extends Hn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sc=class extends Hn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ov=`uniform sampler2D shadow_pass;
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
}`;function Bv(i,e,t){let n=new Ir,s=new Te,r=new Te,o=new _t,a=new Dr({depthPacking:uh}),c=new Sc,l={},h=t.maxTextureSize,f={[$n]:Nt,[Nt]:$n,[Lt]:Lt},d=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Fv,fragmentShader:Ov}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let v=new Ct;v.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new $e(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xu;let g=this.type;this.render=function(D,L,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;let M=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Yt),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let V=g!==fi&&this.type===fi,X=g===fi&&this.type!==fi;for(let re=0,N=D.length;re<N;re++){let Q=D[re],k=Q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let Y=k.getFrameExtents();if(s.multiply(Y),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,k.mapSize.y=r.y)),k.map===null||V===!0||X===!0){let te=this.type!==fi?{minFilter:an,magFilter:an}:{};k.map!==null&&k.map.dispose(),k.map=new Ft(s.x,s.y,te),k.map.texture.name=Q.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let se=k.getViewportCount();for(let te=0;te<se;te++){let Ie=k.getViewport(te);o.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),B.viewport(o),k.updateMatrices(Q,te),n=k.getFrustum(),S(L,T,k.camera,Q,this.type)}k.isPointLightShadow!==!0&&this.type===fi&&R(k,T),k.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,C)};function R(D,L){let T=e.update(_);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ft(s.x,s.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(L,null,T,d,_,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(L,null,T,p,_,null)}function E(D,L,T,M){let y=null,C=T.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(C!==void 0)y=C;else if(y=T.isPointLight===!0?c:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let B=y.uuid,V=L.uuid,X=l[B];X===void 0&&(X={},l[B]=X);let re=X[V];re===void 0&&(re=y.clone(),X[V]=re,L.addEventListener("dispose",F)),y=re}if(y.visible=L.visible,y.wireframe=L.wireframe,M===fi?y.side=L.shadowSide!==null?L.shadowSide:L.side:y.side=L.shadowSide!==null?L.shadowSide:f[L.side],y.alphaMap=L.alphaMap,y.alphaTest=L.alphaTest,y.map=L.map,y.clipShadows=L.clipShadows,y.clippingPlanes=L.clippingPlanes,y.clipIntersection=L.clipIntersection,y.displacementMap=L.displacementMap,y.displacementScale=L.displacementScale,y.displacementBias=L.displacementBias,y.wireframeLinewidth=L.wireframeLinewidth,y.linewidth=L.linewidth,T.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let B=i.properties.get(y);B.light=T}return y}function S(D,L,T,M,y){if(D.visible===!1)return;if(D.layers.test(L.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&y===fi)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,D.matrixWorld);let V=e.update(D),X=D.material;if(Array.isArray(X)){let re=V.groups;for(let N=0,Q=re.length;N<Q;N++){let k=re[N],Y=X[k.materialIndex];if(Y&&Y.visible){let se=E(D,Y,M,y);D.onBeforeShadow(i,D,L,T,V,se,k),i.renderBufferDirect(T,null,V,se,D,k),D.onAfterShadow(i,D,L,T,V,se,k)}}}else if(X.visible){let re=E(D,X,M,y);D.onBeforeShadow(i,D,L,T,V,re,null),i.renderBufferDirect(T,null,V,re,D,null),D.onAfterShadow(i,D,L,T,V,re,null)}}let B=D.children;for(let V=0,X=B.length;V<X;V++)S(B[V],L,T,M,y)}function F(D){D.target.removeEventListener("dispose",F);for(let T in l){let M=l[T],y=D.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var zv={[Al]:Rl,[Cl]:Dl,[Pl]:Ul,[Ns]:Il,[Rl]:Al,[Dl]:Cl,[Ul]:Pl,[Il]:Ns};function Hv(i,e){function t(){let H=!1,G=new _t,ee=null,pe=new _t(0,0,0,0);return{setMask:function(Ce){ee!==Ce&&!H&&(i.colorMask(Ce,Ce,Ce,Ce),ee=Ce)},setLocked:function(Ce){H=Ce},setClear:function(Ce,Se,Qe,pt,Ut){Ut===!0&&(Ce*=pt,Se*=pt,Qe*=pt),G.set(Ce,Se,Qe,pt),pe.equals(G)===!1&&(i.clearColor(Ce,Se,Qe,pt),pe.copy(G))},reset:function(){H=!1,ee=null,pe.set(-1,0,0,0)}}}function n(){let H=!1,G=!1,ee=null,pe=null,Ce=null;return{setReversed:function(Se){if(G!==Se){let Qe=e.get("EXT_clip_control");G?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);let pt=Ce;Ce=null,this.setClear(pt)}G=Se},getReversed:function(){return G},setTest:function(Se){Se?xe(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(Se){ee!==Se&&!H&&(i.depthMask(Se),ee=Se)},setFunc:function(Se){if(G&&(Se=zv[Se]),pe!==Se){switch(Se){case Al:i.depthFunc(i.NEVER);break;case Rl:i.depthFunc(i.ALWAYS);break;case Cl:i.depthFunc(i.LESS);break;case Ns:i.depthFunc(i.LEQUAL);break;case Pl:i.depthFunc(i.EQUAL);break;case Il:i.depthFunc(i.GEQUAL);break;case Dl:i.depthFunc(i.GREATER);break;case Ul:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=Se}},setLocked:function(Se){H=Se},setClear:function(Se){Ce!==Se&&(G&&(Se=1-Se),i.clearDepth(Se),Ce=Se)},reset:function(){H=!1,ee=null,pe=null,Ce=null,G=!1}}}function s(){let H=!1,G=null,ee=null,pe=null,Ce=null,Se=null,Qe=null,pt=null,Ut=null;return{setTest:function(xt){H||(xt?xe(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(xt){G!==xt&&!H&&(i.stencilMask(xt),G=xt)},setFunc:function(xt,yn,Dn){(ee!==xt||pe!==yn||Ce!==Dn)&&(i.stencilFunc(xt,yn,Dn),ee=xt,pe=yn,Ce=Dn)},setOp:function(xt,yn,Dn){(Se!==xt||Qe!==yn||pt!==Dn)&&(i.stencilOp(xt,yn,Dn),Se=xt,Qe=yn,pt=Dn)},setLocked:function(xt){H=xt},setClear:function(xt){Ut!==xt&&(i.clearStencil(xt),Ut=xt)},reset:function(){H=!1,G=null,ee=null,pe=null,Ce=null,Se=null,Qe=null,pt=null,Ut=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},f={},d=new WeakMap,p=[],v=null,_=!1,m=null,g=null,R=null,E=null,S=null,F=null,D=null,L=new We(0,0,0),T=0,M=!1,y=null,C=null,B=null,V=null,X=null,re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,Q=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=Q>=1):k.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=Q>=2);let Y=null,se={},te=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),qe=new _t().fromArray(te),le=new _t().fromArray(Ie);function _e(H,G,ee,pe){let Ce=new Uint8Array(4),Se=i.createTexture();i.bindTexture(H,Se),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<ee;Qe++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(G,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(G+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return Se}let be={};be[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),xe(i.DEPTH_TEST),o.setFunc(Ns),we(!1),Ge(Rh),xe(i.CULL_FACE),O(Yt);function xe(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function Fe(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function Xe(H,G){return f[H]!==G?(i.bindFramebuffer(H,G),f[H]=G,H===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=G),H===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=G),!0):!1}function Ze(H,G){let ee=p,pe=!1;if(H){ee=d.get(G),ee===void 0&&(ee=[],d.set(G,ee));let Ce=H.textures;if(ee.length!==Ce.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,Qe=Ce.length;Se<Qe;Se++)ee[Se]=i.COLOR_ATTACHMENT0+Se;ee.length=Ce.length,pe=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,pe=!0);pe&&i.drawBuffers(ee)}function et(H){return v!==H?(i.useProgram(H),v=H,!0):!1}let ue={[Tn]:i.FUNC_ADD,[ld]:i.FUNC_SUBTRACT,[cd]:i.FUNC_REVERSE_SUBTRACT};ue[hd]=i.MIN,ue[ud]=i.MAX;let Ae={[Zs]:i.ZERO,[fd]:i.ONE,[dd]:i.SRC_COLOR,[bl]:i.SRC_ALPHA,[vd]:i.SRC_ALPHA_SATURATE,[Sa]:i.DST_COLOR,[Ma]:i.DST_ALPHA,[pd]:i.ONE_MINUS_SRC_COLOR,[Tl]:i.ONE_MINUS_SRC_ALPHA,[gd]:i.ONE_MINUS_DST_COLOR,[md]:i.ONE_MINUS_DST_ALPHA,[xd]:i.CONSTANT_COLOR,[_d]:i.ONE_MINUS_CONSTANT_COLOR,[yd]:i.CONSTANT_ALPHA,[Md]:i.ONE_MINUS_CONSTANT_ALPHA};function O(H,G,ee,pe,Ce,Se,Qe,pt,Ut,xt){if(H===Yt){_===!0&&(Fe(i.BLEND),_=!1);return}if(_===!1&&(xe(i.BLEND),_=!0),H!==jc){if(H!==m||xt!==M){if((g!==Tn||S!==Tn)&&(i.blendEquation(i.FUNC_ADD),g=Tn,S=Tn),xt)switch(H){case Is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jn:i.blendFunc(i.ONE,i.ONE);break;case Ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ph:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}R=null,E=null,F=null,D=null,L.set(0,0,0),T=0,m=H,M=xt}return}Ce=Ce||G,Se=Se||ee,Qe=Qe||pe,(G!==g||Ce!==S)&&(i.blendEquationSeparate(ue[G],ue[Ce]),g=G,S=Ce),(ee!==R||pe!==E||Se!==F||Qe!==D)&&(i.blendFuncSeparate(Ae[ee],Ae[pe],Ae[Se],Ae[Qe]),R=ee,E=pe,F=Se,D=Qe),(pt.equals(L)===!1||Ut!==T)&&(i.blendColor(pt.r,pt.g,pt.b,Ut),L.copy(pt),T=Ut),m=H,M=!1}function Ve(H,G){H.side===Lt?Fe(i.CULL_FACE):xe(i.CULL_FACE);let ee=H.side===Nt;G&&(ee=!ee),we(ee),H.blending===Is&&H.transparent===!1?O(Yt):O(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let pe=H.stencilWrite;a.setTest(pe),pe&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Je(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function we(H){y!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),y=H)}function Ge(H){H!==od?(xe(i.CULL_FACE),H!==C&&(H===Rh?i.cullFace(i.BACK):H===ad?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),C=H}function Le(H){H!==B&&(N&&i.lineWidth(H),B=H)}function Je(H,G,ee){H?(xe(i.POLYGON_OFFSET_FILL),(V!==G||X!==ee)&&(i.polygonOffset(G,ee),V=G,X=ee)):Fe(i.POLYGON_OFFSET_FILL)}function Oe(H){H?xe(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function U(H){H===void 0&&(H=i.TEXTURE0+re-1),Y!==H&&(i.activeTexture(H),Y=H)}function b(H,G,ee){ee===void 0&&(Y===null?ee=i.TEXTURE0+re-1:ee=Y);let pe=se[ee];pe===void 0&&(pe={type:void 0,texture:void 0},se[ee]=pe),(pe.type!==H||pe.texture!==G)&&(Y!==ee&&(i.activeTexture(ee),Y=ee),i.bindTexture(H,G||be[H]),pe.type=H,pe.texture=G)}function q(){let H=se[Y];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ce(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ye(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function W(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function J(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function K(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $(H){qe.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),qe.copy(H))}function oe(H){le.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),le.copy(H))}function ge(H,G){let ee=l.get(G);ee===void 0&&(ee=new WeakMap,l.set(G,ee));let pe=ee.get(H);pe===void 0&&(pe=i.getUniformBlockIndex(G,H.name),ee.set(H,pe))}function me(H,G){let pe=l.get(G).get(H);c.get(G)!==pe&&(i.uniformBlockBinding(G,pe,H.__bindingPointIndex),c.set(G,pe))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Y=null,se={},f={},d=new WeakMap,p=[],v=null,_=!1,m=null,g=null,R=null,E=null,S=null,F=null,D=null,L=new We(0,0,0),T=0,M=!1,y=null,C=null,B=null,V=null,X=null,qe.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:xe,disable:Fe,bindFramebuffer:Xe,drawBuffers:Ze,useProgram:et,setBlending:O,setMaterial:Ve,setFlipSided:we,setCullFace:Ge,setLineWidth:Le,setPolygonOffset:Je,setScissorTest:Oe,activeTexture:U,bindTexture:b,unbindTexture:q,compressedTexImage2D:ce,compressedTexImage3D:ye,texImage2D:he,texImage3D:Me,updateUBOMapping:ge,uniformBlockBinding:me,texStorage2D:ve,texStorage3D:K,texSubImage2D:fe,texSubImage3D:Ye,compressedTexSubImage2D:W,compressedTexSubImage3D:J,scissor:$,viewport:oe,reset:Ee}}function Tu(i,e,t,n){let s=kv(n);switch(t){case Ku:return i*e;case ju:return i*e;case ef:return i*e*2;case Gr:return i*e/s.components*s.byteLength;case lh:return i*e/s.components*s.byteLength;case tf:return i*e*2/s.components*s.byteLength;case ch:return i*e*2/s.components*s.byteLength;case Qu:return i*e*3/s.components*s.byteLength;case hn:return i*e*4/s.components*s.byteLength;case hh:return i*e*4/s.components*s.byteLength;case Ho:case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vo:case Go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bl:case Hl:return Math.max(i,16)*Math.max(e,8)/4;case Ol:case zl:return Math.max(i,8)*Math.max(e,8)/2;case kl:case Vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $l:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wo:case sc:case rc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nf:case oc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ac:case lc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kv(i){switch(i){case zn:case Zu:return{byteLength:1,components:1};case Rr:case $u:case Ht:return{byteLength:2,components:1};case oh:case ah:return{byteLength:2,components:4};case es:case rh:case vn:return{byteLength:4,components:1};case Ju:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Vv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Te,h=new WeakMap,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,b){return p?new OffscreenCanvas(U,b):Cr("canvas")}function _(U,b,q){let ce=1,ye=Oe(U);if((ye.width>q||ye.height>q)&&(ce=q/Math.max(ye.width,ye.height)),ce<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let fe=Math.floor(ce*ye.width),Ye=Math.floor(ce*ye.height);f===void 0&&(f=v(fe,Ye));let W=b?v(fe,Ye):f;return W.width=fe,W.height=Ye,W.getContext("2d").drawImage(U,0,0,fe,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+fe+"x"+Ye+")."),W}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),U;return U}function m(U){return U.generateMipmaps}function g(U){i.generateMipmap(U)}function R(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(U,b,q,ce,ye=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let fe=b;if(b===i.RED&&(q===i.FLOAT&&(fe=i.R32F),q===i.HALF_FLOAT&&(fe=i.R16F),q===i.UNSIGNED_BYTE&&(fe=i.R8)),b===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(fe=i.R8UI),q===i.UNSIGNED_SHORT&&(fe=i.R16UI),q===i.UNSIGNED_INT&&(fe=i.R32UI),q===i.BYTE&&(fe=i.R8I),q===i.SHORT&&(fe=i.R16I),q===i.INT&&(fe=i.R32I)),b===i.RG&&(q===i.FLOAT&&(fe=i.RG32F),q===i.HALF_FLOAT&&(fe=i.RG16F),q===i.UNSIGNED_BYTE&&(fe=i.RG8)),b===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(fe=i.RG8UI),q===i.UNSIGNED_SHORT&&(fe=i.RG16UI),q===i.UNSIGNED_INT&&(fe=i.RG32UI),q===i.BYTE&&(fe=i.RG8I),q===i.SHORT&&(fe=i.RG16I),q===i.INT&&(fe=i.RG32I)),b===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(fe=i.RGB8UI),q===i.UNSIGNED_SHORT&&(fe=i.RGB16UI),q===i.UNSIGNED_INT&&(fe=i.RGB32UI),q===i.BYTE&&(fe=i.RGB8I),q===i.SHORT&&(fe=i.RGB16I),q===i.INT&&(fe=i.RGB32I)),b===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(fe=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(fe=i.RGBA16UI),q===i.UNSIGNED_INT&&(fe=i.RGBA32UI),q===i.BYTE&&(fe=i.RGBA8I),q===i.SHORT&&(fe=i.RGBA16I),q===i.INT&&(fe=i.RGBA32I)),b===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(fe=i.RGB9_E5),b===i.RGBA){let Ye=ye?wa:ft.getTransfer(ce);q===i.FLOAT&&(fe=i.RGBA32F),q===i.HALF_FLOAT&&(fe=i.RGBA16F),q===i.UNSIGNED_BYTE&&(fe=Ye===St?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(fe=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(fe=i.RGB5_A1)}return(fe===i.R16F||fe===i.R32F||fe===i.RG16F||fe===i.RG32F||fe===i.RGBA16F||fe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function S(U,b){let q;return U?b===null||b===es||b===Li?q=i.DEPTH24_STENCIL8:b===vn?q=i.DEPTH32F_STENCIL8:b===Rr&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===es||b===Li?q=i.DEPTH_COMPONENT24:b===vn?q=i.DEPTH_COMPONENT32F:b===Rr&&(q=i.DEPTH_COMPONENT16),q}function F(U,b){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==an&&U.minFilter!==en?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function D(U){let b=U.target;b.removeEventListener("dispose",D),T(b),b.isVideoTexture&&h.delete(b)}function L(U){let b=U.target;b.removeEventListener("dispose",L),y(b)}function T(U){let b=n.get(U);if(b.__webglInit===void 0)return;let q=U.source,ce=d.get(q);if(ce){let ye=ce[b.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&M(U),Object.keys(ce).length===0&&d.delete(q)}n.remove(U)}function M(U){let b=n.get(U);i.deleteTexture(b.__webglTexture);let q=U.source,ce=d.get(q);delete ce[b.__cacheKey],o.memory.textures--}function y(U){let b=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(b.__webglFramebuffer[ce]))for(let ye=0;ye<b.__webglFramebuffer[ce].length;ye++)i.deleteFramebuffer(b.__webglFramebuffer[ce][ye]);else i.deleteFramebuffer(b.__webglFramebuffer[ce]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ce])}else{if(Array.isArray(b.__webglFramebuffer))for(let ce=0;ce<b.__webglFramebuffer.length;ce++)i.deleteFramebuffer(b.__webglFramebuffer[ce]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ce=0;ce<b.__webglColorRenderbuffer.length;ce++)b.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ce]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let q=U.textures;for(let ce=0,ye=q.length;ce<ye;ce++){let fe=n.get(q[ce]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(q[ce])}n.remove(U)}let C=0;function B(){C=0}function V(){let U=C;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),C+=1,U}function X(U){let b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function re(U,b){let q=n.get(U);if(U.isVideoTexture&&Le(U),U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){let ce=U.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(q,U,b);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+b)}function N(U,b){let q=n.get(U);if(U.version>0&&q.__version!==U.version){le(q,U,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+b)}function Q(U,b){let q=n.get(U);if(U.version>0&&q.__version!==U.version){le(q,U,b);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+b)}function k(U,b){let q=n.get(U);if(U.version>0&&q.__version!==U.version){_e(q,U,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+b)}let Y={[un]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[Fl]:i.MIRRORED_REPEAT},se={[an]:i.NEAREST,[bd]:i.NEAREST_MIPMAP_NEAREST,[oo]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Wa]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},te={[Rd]:i.NEVER,[Ld]:i.ALWAYS,[Cd]:i.LESS,[sf]:i.LEQUAL,[Pd]:i.EQUAL,[Ud]:i.GEQUAL,[Id]:i.GREATER,[Dd]:i.NOTEQUAL};function Ie(U,b){if(b.type===vn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===en||b.magFilter===Wa||b.magFilter===oo||b.magFilter===Di||b.minFilter===en||b.minFilter===Wa||b.minFilter===oo||b.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Y[b.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Y[b.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Y[b.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,se[b.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,se[b.minFilter]),b.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,te[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===an||b.minFilter!==oo&&b.minFilter!==Di||b.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function qe(U,b){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",D));let ce=b.source,ye=d.get(ce);ye===void 0&&(ye={},d.set(ce,ye));let fe=X(b);if(fe!==U.__cacheKey){ye[fe]===void 0&&(ye[fe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ye[fe].usedTimes++;let Ye=ye[U.__cacheKey];Ye!==void 0&&(ye[U.__cacheKey].usedTimes--,Ye.usedTimes===0&&M(b)),U.__cacheKey=fe,U.__webglTexture=ye[fe].texture}return q}function le(U,b,q){let ce=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ce=i.TEXTURE_3D);let ye=qe(U,b),fe=b.source;t.bindTexture(ce,U.__webglTexture,i.TEXTURE0+q);let Ye=n.get(fe);if(fe.version!==Ye.__version||ye===!0){t.activeTexture(i.TEXTURE0+q);let W=ft.getPrimaries(ft.workingColorSpace),J=b.colorSpace===qn?null:ft.getPrimaries(b.colorSpace),ve=b.colorSpace===qn||W===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let K=_(b.image,!1,s.maxTextureSize);K=Je(b,K);let he=r.convert(b.format,b.colorSpace),Me=r.convert(b.type),$=E(b.internalFormat,he,Me,b.colorSpace,b.isVideoTexture);Ie(ce,b);let oe,ge=b.mipmaps,me=b.isVideoTexture!==!0,Ee=Ye.__version===void 0||ye===!0,H=fe.dataReady,G=F(b,K);if(b.isDepthTexture)$=S(b.format===Ni,b.type),Ee&&(me?t.texStorage2D(i.TEXTURE_2D,1,$,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,$,K.width,K.height,0,he,Me,null));else if(b.isDataTexture)if(ge.length>0){me&&Ee&&t.texStorage2D(i.TEXTURE_2D,G,$,ge[0].width,ge[0].height);for(let ee=0,pe=ge.length;ee<pe;ee++)oe=ge[ee],me?H&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,oe.width,oe.height,he,Me,oe.data):t.texImage2D(i.TEXTURE_2D,ee,$,oe.width,oe.height,0,he,Me,oe.data);b.generateMipmaps=!1}else me?(Ee&&t.texStorage2D(i.TEXTURE_2D,G,$,K.width,K.height),H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,K.width,K.height,he,Me,K.data)):t.texImage2D(i.TEXTURE_2D,0,$,K.width,K.height,0,he,Me,K.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){me&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,$,ge[0].width,ge[0].height,K.depth);for(let ee=0,pe=ge.length;ee<pe;ee++)if(oe=ge[ee],b.format!==hn)if(he!==null)if(me){if(H)if(b.layerUpdates.size>0){let Ce=Tu(oe.width,oe.height,b.format,b.type);for(let Se of b.layerUpdates){let Qe=oe.data.subarray(Se*Ce/oe.data.BYTES_PER_ELEMENT,(Se+1)*Ce/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Se,oe.width,oe.height,1,he,Qe)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,oe.width,oe.height,K.depth,he,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,$,oe.width,oe.height,K.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,oe.width,oe.height,K.depth,he,Me,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,$,oe.width,oe.height,K.depth,0,he,Me,oe.data)}else{me&&Ee&&t.texStorage2D(i.TEXTURE_2D,G,$,ge[0].width,ge[0].height);for(let ee=0,pe=ge.length;ee<pe;ee++)oe=ge[ee],b.format!==hn?he!==null?me?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,oe.width,oe.height,he,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,$,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?H&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,oe.width,oe.height,he,Me,oe.data):t.texImage2D(i.TEXTURE_2D,ee,$,oe.width,oe.height,0,he,Me,oe.data)}else if(b.isDataArrayTexture)if(me){if(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,$,K.width,K.height,K.depth),H)if(b.layerUpdates.size>0){let ee=Tu(K.width,K.height,b.format,b.type);for(let pe of b.layerUpdates){let Ce=K.data.subarray(pe*ee/K.data.BYTES_PER_ELEMENT,(pe+1)*ee/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,K.width,K.height,1,he,Me,Ce)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,he,Me,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,$,K.width,K.height,K.depth,0,he,Me,K.data);else if(b.isData3DTexture)me?(Ee&&t.texStorage3D(i.TEXTURE_3D,G,$,K.width,K.height,K.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,he,Me,K.data)):t.texImage3D(i.TEXTURE_3D,0,$,K.width,K.height,K.depth,0,he,Me,K.data);else if(b.isFramebufferTexture){if(Ee)if(me)t.texStorage2D(i.TEXTURE_2D,G,$,K.width,K.height);else{let ee=K.width,pe=K.height;for(let Ce=0;Ce<G;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,$,ee,pe,0,he,Me,null),ee>>=1,pe>>=1}}else if(ge.length>0){if(me&&Ee){let ee=Oe(ge[0]);t.texStorage2D(i.TEXTURE_2D,G,$,ee.width,ee.height)}for(let ee=0,pe=ge.length;ee<pe;ee++)oe=ge[ee],me?H&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,he,Me,oe):t.texImage2D(i.TEXTURE_2D,ee,$,he,Me,oe);b.generateMipmaps=!1}else if(me){if(Ee){let ee=Oe(K);t.texStorage2D(i.TEXTURE_2D,G,$,ee.width,ee.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Me,K)}else t.texImage2D(i.TEXTURE_2D,0,$,he,Me,K);m(b)&&g(ce),Ye.__version=fe.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function _e(U,b,q){if(b.image.length!==6)return;let ce=qe(U,b),ye=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+q);let fe=n.get(ye);if(ye.version!==fe.__version||ce===!0){t.activeTexture(i.TEXTURE0+q);let Ye=ft.getPrimaries(ft.workingColorSpace),W=b.colorSpace===qn?null:ft.getPrimaries(b.colorSpace),J=b.colorSpace===qn||Ye===W?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ve=b.isCompressedTexture||b.image[0].isCompressedTexture,K=b.image[0]&&b.image[0].isDataTexture,he=[];for(let pe=0;pe<6;pe++)!ve&&!K?he[pe]=_(b.image[pe],!0,s.maxCubemapSize):he[pe]=K?b.image[pe].image:b.image[pe],he[pe]=Je(b,he[pe]);let Me=he[0],$=r.convert(b.format,b.colorSpace),oe=r.convert(b.type),ge=E(b.internalFormat,$,oe,b.colorSpace),me=b.isVideoTexture!==!0,Ee=fe.__version===void 0||ce===!0,H=ye.dataReady,G=F(b,Me);Ie(i.TEXTURE_CUBE_MAP,b);let ee;if(ve){me&&Ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,G,ge,Me.width,Me.height);for(let pe=0;pe<6;pe++){ee=he[pe].mipmaps;for(let Ce=0;Ce<ee.length;Ce++){let Se=ee[Ce];b.format!==hn?$!==null?me?H&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,Se.width,Se.height,$,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,ge,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,Se.width,Se.height,$,oe,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,ge,Se.width,Se.height,0,$,oe,Se.data)}}}else{if(ee=b.mipmaps,me&&Ee){ee.length>0&&G++;let pe=Oe(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,G,ge,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(K){me?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,he[pe].width,he[pe].height,$,oe,he[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ge,he[pe].width,he[pe].height,0,$,oe,he[pe].data);for(let Ce=0;Ce<ee.length;Ce++){let Qe=ee[Ce].image[pe].image;me?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,Qe.width,Qe.height,$,oe,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,ge,Qe.width,Qe.height,0,$,oe,Qe.data)}}else{me?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,$,oe,he[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ge,$,oe,he[pe]);for(let Ce=0;Ce<ee.length;Ce++){let Se=ee[Ce];me?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,$,oe,Se.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,ge,$,oe,Se.image[pe])}}}m(b)&&g(i.TEXTURE_CUBE_MAP),fe.__version=ye.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function be(U,b,q,ce,ye,fe){let Ye=r.convert(q.format,q.colorSpace),W=r.convert(q.type),J=E(q.internalFormat,Ye,W,q.colorSpace),ve=n.get(b),K=n.get(q);if(K.__renderTarget=b,!ve.__hasExternalTextures){let he=Math.max(1,b.width>>fe),Me=Math.max(1,b.height>>fe);ye===i.TEXTURE_3D||ye===i.TEXTURE_2D_ARRAY?t.texImage3D(ye,fe,J,he,Me,b.depth,0,Ye,W,null):t.texImage2D(ye,fe,J,he,Me,0,Ye,W,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Ge(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,ye,K.__webglTexture,0,we(b)):(ye===i.TEXTURE_2D||ye>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,ye,K.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(U,b,q){if(i.bindRenderbuffer(i.RENDERBUFFER,U),b.depthBuffer){let ce=b.depthTexture,ye=ce&&ce.isDepthTexture?ce.type:null,fe=S(b.stencilBuffer,ye),Ye=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=we(b);Ge(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,W,fe,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,W,fe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,fe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ye,i.RENDERBUFFER,U)}else{let ce=b.textures;for(let ye=0;ye<ce.length;ye++){let fe=ce[ye],Ye=r.convert(fe.format,fe.colorSpace),W=r.convert(fe.type),J=E(fe.internalFormat,Ye,W,fe.colorSpace),ve=we(b);q&&Ge(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,J,b.width,b.height):Ge(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,J,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,J,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ce=n.get(b.depthTexture);ce.__renderTarget=b,(!ce.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),re(b.depthTexture,0);let ye=ce.__webglTexture,fe=we(b);if(b.depthTexture.format===Ds)Ge(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0);else if(b.depthTexture.format===Ni)Ge(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Xe(U){let b=n.get(U),q=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){let ce=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ce){let ye=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ce.removeEventListener("dispose",ye)};ce.addEventListener("dispose",ye),b.__depthDisposeCallback=ye}b.__boundDepthTexture=ce}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Fe(b.__webglFramebuffer,U)}else if(q){b.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ce]),b.__webglDepthbuffer[ce]===void 0)b.__webglDepthbuffer[ce]=i.createRenderbuffer(),xe(b.__webglDepthbuffer[ce],U,!1);else{let ye=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer[ce];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),xe(b.__webglDepthbuffer,U,!1);else{let ce=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ye),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ye)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(U,b,q){let ce=n.get(U);b!==void 0&&be(ce.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Xe(U)}function et(U){let b=U.texture,q=n.get(U),ce=n.get(b);U.addEventListener("dispose",L);let ye=U.textures,fe=U.isWebGLCubeRenderTarget===!0,Ye=ye.length>1;if(Ye||(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=b.version,o.memory.textures++),fe){q.__webglFramebuffer=[];for(let W=0;W<6;W++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[W]=[];for(let J=0;J<b.mipmaps.length;J++)q.__webglFramebuffer[W][J]=i.createFramebuffer()}else q.__webglFramebuffer[W]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let W=0;W<b.mipmaps.length;W++)q.__webglFramebuffer[W]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ye)for(let W=0,J=ye.length;W<J;W++){let ve=n.get(ye[W]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&Ge(U)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let W=0;W<ye.length;W++){let J=ye[W];q.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[W]);let ve=r.convert(J.format,J.colorSpace),K=r.convert(J.type),he=E(J.internalFormat,ve,K,J.colorSpace,U.isXRRenderTarget===!0),Me=we(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,he,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,q.__webglColorRenderbuffer[W])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(q.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,b);for(let W=0;W<6;W++)if(b.mipmaps&&b.mipmaps.length>0)for(let J=0;J<b.mipmaps.length;J++)be(q.__webglFramebuffer[W][J],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,J);else be(q.__webglFramebuffer[W],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);m(b)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let W=0,J=ye.length;W<J;W++){let ve=ye[W],K=n.get(ve);t.bindTexture(i.TEXTURE_2D,K.__webglTexture),Ie(i.TEXTURE_2D,ve),be(q.__webglFramebuffer,U,ve,i.COLOR_ATTACHMENT0+W,i.TEXTURE_2D,0),m(ve)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let W=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(W=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(W,ce.__webglTexture),Ie(W,b),b.mipmaps&&b.mipmaps.length>0)for(let J=0;J<b.mipmaps.length;J++)be(q.__webglFramebuffer[J],U,b,i.COLOR_ATTACHMENT0,W,J);else be(q.__webglFramebuffer,U,b,i.COLOR_ATTACHMENT0,W,0);m(b)&&g(W),t.unbindTexture()}U.depthBuffer&&Xe(U)}function ue(U){let b=U.textures;for(let q=0,ce=b.length;q<ce;q++){let ye=b[q];if(m(ye)){let fe=R(U),Ye=n.get(ye).__webglTexture;t.bindTexture(fe,Ye),g(fe),t.unbindTexture()}}}let Ae=[],O=[];function Ve(U){if(U.samples>0){if(Ge(U)===!1){let b=U.textures,q=U.width,ce=U.height,ye=i.COLOR_BUFFER_BIT,fe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ye=n.get(U),W=b.length>1;if(W)for(let J=0;J<b.length;J++)t.bindFramebuffer(i.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let J=0;J<b.length;J++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ye|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ye|=i.STENCIL_BUFFER_BIT)),W){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ye.__webglColorRenderbuffer[J]);let ve=n.get(b[J]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,q,ce,0,0,q,ce,ye,i.NEAREST),c===!0&&(Ae.length=0,O.length=0,Ae.push(i.COLOR_ATTACHMENT0+J),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ae.push(fe),O.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),W)for(let J=0;J<b.length;J++){t.bindFramebuffer(i.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,Ye.__webglColorRenderbuffer[J]);let ve=n.get(b[J]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.TEXTURE_2D,ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){let b=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function we(U){return Math.min(s.maxSamples,U.samples)}function Ge(U){let b=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Le(U){let b=o.render.frame;h.get(U)!==b&&(h.set(U,b),U.update())}function Je(U,b){let q=U.colorSpace,ce=U.format,ye=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==_i&&q!==qn&&(ft.getTransfer(q)===St?(ce!==hn||ye!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function Oe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.setTexture2D=re,this.setTexture2DArray=N,this.setTexture3D=Q,this.setTextureCube=k,this.rebindTextures=Ze,this.setupRenderTarget=et,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ge}function Gv(i,e){function t(n,s=qn){let r,o=ft.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===oh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ah)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ju)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zu)return i.BYTE;if(n===$u)return i.SHORT;if(n===Rr)return i.UNSIGNED_SHORT;if(n===rh)return i.INT;if(n===es)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===Ht)return i.HALF_FLOAT;if(n===Ku)return i.ALPHA;if(n===Qu)return i.RGB;if(n===hn)return i.RGBA;if(n===ju)return i.LUMINANCE;if(n===ef)return i.LUMINANCE_ALPHA;if(n===Ds)return i.DEPTH_COMPONENT;if(n===Ni)return i.DEPTH_STENCIL;if(n===Gr)return i.RED;if(n===lh)return i.RED_INTEGER;if(n===tf)return i.RG;if(n===ch)return i.RG_INTEGER;if(n===hh)return i.RGBA_INTEGER;if(n===Ho||n===ko||n===Vo||n===Go)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===Bl||n===zl||n===Hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kl||n===Vl||n===Gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kl||n===Vl)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Gl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wl||n===Xl||n===Yl||n===ql||n===Zl||n===$l||n===Jl||n===Kl||n===Ql||n===jl||n===ec||n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ql)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$l)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ql)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wo||n===sc||n===rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wo)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nf||n===oc||n===ac||n===lc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ec=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},dt=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wv={type:"move"},wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(l,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,v=.005;l.inputState.pinching&&d>p+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yv=`
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

}`,wc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new tn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yt({vertexShader:Xv,fragmentShader:Yv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new vt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bc=class extends Fi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,d=null,p=null,v=null,_=new wc,m=t.getContextAttributes(),g=null,R=null,E=[],S=[],F=new Te,D=null,L=new Xt;L.viewport=new _t;let T=new Xt;T.viewport=new _t;let M=[L,T],y=new Ec,C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let _e=E[le];return _e===void 0&&(_e=new wr,E[le]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(le){let _e=E[le];return _e===void 0&&(_e=new wr,E[le]=_e),_e.getGripSpace()},this.getHand=function(le){let _e=E[le];return _e===void 0&&(_e=new wr,E[le]=_e),_e.getHandSpace()};function V(le){let _e=S.indexOf(le.inputSource);if(_e===-1)return;let be=E[_e];be!==void 0&&(be.update(le.inputSource,le.frame,l||o),be.dispatchEvent({type:le.type,data:le.inputSource}))}function X(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",re);for(let le=0;le<E.length;le++){let _e=S[le];_e!==null&&(S[le]=null,E[le].disconnect(_e))}C=null,B=null,_.reset(),e.setRenderTarget(g),p=null,d=null,f=null,s=null,R=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(le){l=le},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",X),s.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(F),s.renderState.layers===void 0){let _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),R=new Ft(p.framebufferWidth,p.framebufferHeight,{format:hn,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let _e=null,be=null,xe=null;m.depth&&(xe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?Ni:Ds,be=m.stencil?Li:es);let Fe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(Fe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),R=new Ft(d.textureWidth,d.textureHeight,{format:hn,type:zn,depthTexture:new Bi(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function re(le){for(let _e=0;_e<le.removed.length;_e++){let be=le.removed[_e],xe=S.indexOf(be);xe>=0&&(S[xe]=null,E[xe].disconnect(be))}for(let _e=0;_e<le.added.length;_e++){let be=le.added[_e],xe=S.indexOf(be);if(xe===-1){for(let Xe=0;Xe<E.length;Xe++)if(Xe>=S.length){S.push(be),xe=Xe;break}else if(S[Xe]===null){S[Xe]=be,xe=Xe;break}if(xe===-1)break}let Fe=E[xe];Fe&&Fe.connect(be)}}let N=new I,Q=new I;function k(le,_e,be){N.setFromMatrixPosition(_e.matrixWorld),Q.setFromMatrixPosition(be.matrixWorld);let xe=N.distanceTo(Q),Fe=_e.projectionMatrix.elements,Xe=be.projectionMatrix.elements,Ze=Fe[14]/(Fe[10]-1),et=Fe[14]/(Fe[10]+1),ue=(Fe[9]+1)/Fe[5],Ae=(Fe[9]-1)/Fe[5],O=(Fe[8]-1)/Fe[0],Ve=(Xe[8]+1)/Xe[0],we=Ze*O,Ge=Ze*Ve,Le=xe/(-O+Ve),Je=Le*-O;if(_e.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Je),le.translateZ(Le),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Fe[10]===-1)le.projectionMatrix.copy(_e.projectionMatrix),le.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{let Oe=Ze+Le,U=et+Le,b=we-Je,q=Ge+(xe-Je),ce=ue*et/U*Oe,ye=Ae*et/U*Oe;le.projectionMatrix.makePerspective(b,q,ce,ye,Oe,U),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function Y(le,_e){_e===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(_e.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let _e=le.near,be=le.far;_.texture!==null&&(_.depthNear>0&&(_e=_.depthNear),_.depthFar>0&&(be=_.depthFar)),y.near=T.near=L.near=_e,y.far=T.far=L.far=be,(C!==y.near||B!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,B=y.far),L.layers.mask=le.layers.mask|2,T.layers.mask=le.layers.mask|4,y.layers.mask=L.layers.mask|T.layers.mask;let xe=le.parent,Fe=y.cameras;Y(y,xe);for(let Xe=0;Xe<Fe.length;Xe++)Y(Fe[Xe],xe);Fe.length===2?k(y,L,T):y.projectionMatrix.copy(L.projectionMatrix),se(le,y,xe)};function se(le,_e,be){be===null?le.matrix.copy(_e.matrixWorld):(le.matrix.copy(be.matrixWorld),le.matrix.invert(),le.matrix.multiply(_e.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(_e.projectionMatrix),le.projectionMatrixInverse.copy(_e.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Bs*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(le){c=le,d!==null&&(d.fixedFoveation=le),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=le)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let te=null;function Ie(le,_e){if(h=_e.getViewerPose(l||o),v=_e,h!==null){let be=h.views;p!==null&&(e.setRenderTargetFramebuffer(R,p.framebuffer),e.setRenderTarget(R));let xe=!1;be.length!==y.cameras.length&&(y.cameras.length=0,xe=!0);for(let Xe=0;Xe<be.length;Xe++){let Ze=be[Xe],et=null;if(p!==null)et=p.getViewport(Ze);else{let Ae=f.getViewSubImage(d,Ze);et=Ae.viewport,Xe===0&&(e.setRenderTargetTextures(R,Ae.colorTexture,d.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(R))}let ue=M[Xe];ue===void 0&&(ue=new Xt,ue.layers.enable(Xe),ue.viewport=new _t,M[Xe]=ue),ue.matrix.fromArray(Ze.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Ze.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(et.x,et.y,et.width,et.height),Xe===0&&(y.matrix.copy(ue.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),xe===!0&&y.cameras.push(ue)}let Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){let Xe=f.getDepthInformation(be[0]);Xe&&Xe.isValid&&Xe.texture&&_.init(e,Xe,s.renderState)}}for(let be=0;be<E.length;be++){let xe=S[be],Fe=E[be];xe!==null&&Fe!==void 0&&Fe.update(xe,_e,l||o)}te&&te(le,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),v=null}let qe=new lf;qe.setAnimationLoop(Ie),this.setAnimationLoop=function(le){te=le},this.dispose=function(){}}},Ki=new An,qv=new je;function Zv(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,af(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,R,E,S){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&p(m,g,S)):g.isMeshMatcapMaterial?(r(m,g),v(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,R,E):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Nt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Nt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let R=e.get(g),E=R.envMap,S=R.envMapRotation;E&&(m.envMap.value=E,Ki.copy(S),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),m.envMapRotation.value.setFromMatrix4(qv.makeRotationFromEuler(Ki)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,R,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*R,m.scale.value=E*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,R){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Nt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let R=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $v(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,E){let S=E.program;n.uniformBlockBinding(R,S)}function l(R,E){let S=s[R.id];S===void 0&&(v(R),S=h(R),s[R.id]=S,R.addEventListener("dispose",m));let F=E.program;n.updateUBOMapping(R,F);let D=e.render.frame;r[R.id]!==D&&(d(R),r[R.id]=D)}function h(R){let E=f();R.__bindingPointIndex=E;let S=i.createBuffer(),F=R.__size,D=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,F,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function f(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){let E=s[R.id],S=R.uniforms,F=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let D=0,L=S.length;D<L;D++){let T=Array.isArray(S[D])?S[D]:[S[D]];for(let M=0,y=T.length;M<y;M++){let C=T[M];if(p(C,D,M,F)===!0){let B=C.__offset,V=Array.isArray(C.value)?C.value:[C.value],X=0;for(let re=0;re<V.length;re++){let N=V[re],Q=_(N);typeof N=="number"||typeof N=="boolean"?(C.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,B+X,C.__data)):N.isMatrix3?(C.__data[0]=N.elements[0],C.__data[1]=N.elements[1],C.__data[2]=N.elements[2],C.__data[3]=0,C.__data[4]=N.elements[3],C.__data[5]=N.elements[4],C.__data[6]=N.elements[5],C.__data[7]=0,C.__data[8]=N.elements[6],C.__data[9]=N.elements[7],C.__data[10]=N.elements[8],C.__data[11]=0):(N.toArray(C.__data,X),X+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(R,E,S,F){let D=R.value,L=E+"_"+S;if(F[L]===void 0)return typeof D=="number"||typeof D=="boolean"?F[L]=D:F[L]=D.clone(),!0;{let T=F[L];if(typeof D=="number"||typeof D=="boolean"){if(T!==D)return F[L]=D,!0}else if(T.equals(D)===!1)return T.copy(D),!0}return!1}function v(R){let E=R.uniforms,S=0,F=16;for(let L=0,T=E.length;L<T;L++){let M=Array.isArray(E[L])?E[L]:[E[L]];for(let y=0,C=M.length;y<C;y++){let B=M[y],V=Array.isArray(B.value)?B.value:[B.value];for(let X=0,re=V.length;X<re;X++){let N=V[X],Q=_(N),k=S%F,Y=k%Q.boundary,se=k+Y;S+=Y,se!==0&&F-se<Q.storage&&(S+=F-se),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=Q.storage}}}let D=S%F;return D>0&&(S+=F-D),R.__size=S,R.__cache={},this}function _(R){let E={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(E.boundary=4,E.storage=4):R.isVector2?(E.boundary=8,E.storage=8):R.isVector3||R.isColor?(E.boundary=16,E.storage=12):R.isVector4?(E.boundary=16,E.storage=16):R.isMatrix3?(E.boundary=48,E.storage=48):R.isMatrix4?(E.boundary=64,E.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),E}function m(R){let E=R.target;E.removeEventListener("dispose",m);let S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(let R in s)i.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:c,update:l,dispose:g}}var ea=class{constructor(e={}){let{canvas:t=Kd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let v=new Uint32Array(4),_=new Int32Array(4),m=null,g=null,R=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this.toneMapping=Ui,this.toneMappingExposure=1;let S=this,F=!1,D=0,L=0,T=null,M=-1,y=null,C=new _t,B=new _t,V=null,X=new We(0),re=0,N=t.width,Q=t.height,k=1,Y=null,se=null,te=new _t(0,0,N,Q),Ie=new _t(0,0,N,Q),qe=!1,le=new Ir,_e=!1,be=!1,xe=new je,Fe=new je,Xe=new I,Ze=new _t,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function Ae(){return T===null?k:1}let O=n;function Ve(u,x){return t.getContext(u,x)}try{let u={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kc}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Se,!1),O===null){let x="webgl2";if(O=Ve(x,u),O===null)throw Ve(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(u){throw console.error("THREE.WebGLRenderer: "+u.message),u}let we,Ge,Le,Je,Oe,U,b,q,ce,ye,fe,Ye,W,J,ve,K,he,Me,$,oe,ge,me,Ee,H;function G(){we=new ug(O),we.init(),me=new Gv(O,we),Ge=new rg(O,we,e,me),Le=new Hv(O,we),Ge.reverseDepthBuffer&&d&&Le.buffers.depth.setReversed(!0),Je=new pg(O),Oe=new Av,U=new Vv(O,we,Le,Oe,Ge,me,Je),b=new ag(S),q=new hg(S),ce=new Mp(O),Ee=new ig(O,ce),ye=new fg(O,ce,Je,Ee),fe=new gg(O,ye,ce,Je),$=new mg(O,Ge,U),K=new og(Oe),Ye=new Tv(S,b,q,we,Ge,Ee,K),W=new Zv(S,Oe),J=new Cv,ve=new Nv(we),Me=new ng(S,b,q,Le,fe,p,c),he=new Bv(S,fe,Ge),H=new $v(O,Je,Ge,Le),oe=new sg(O,we,Je),ge=new dg(O,we,Je),Je.programs=Ye.programs,S.capabilities=Ge,S.extensions=we,S.properties=Oe,S.renderLists=J,S.shadowMap=he,S.state=Le,S.info=Je}G();let ee=new bc(S,O);this.xr=ee,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let u=we.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){let u=we.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(u){u!==void 0&&(k=u,this.setSize(N,Q,!1))},this.getSize=function(u){return u.set(N,Q)},this.setSize=function(u,x,w=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=u,Q=x,t.width=Math.floor(u*k),t.height=Math.floor(x*k),w===!0&&(t.style.width=u+"px",t.style.height=x+"px"),this.setViewport(0,0,u,x)},this.getDrawingBufferSize=function(u){return u.set(N*k,Q*k).floor()},this.setDrawingBufferSize=function(u,x,w){N=u,Q=x,k=w,t.width=Math.floor(u*w),t.height=Math.floor(x*w),this.setViewport(0,0,u,x)},this.getCurrentViewport=function(u){return u.copy(C)},this.getViewport=function(u){return u.copy(te)},this.setViewport=function(u,x,w,A){u.isVector4?te.set(u.x,u.y,u.z,u.w):te.set(u,x,w,A),Le.viewport(C.copy(te).multiplyScalar(k).round())},this.getScissor=function(u){return u.copy(Ie)},this.setScissor=function(u,x,w,A){u.isVector4?Ie.set(u.x,u.y,u.z,u.w):Ie.set(u,x,w,A),Le.scissor(B.copy(Ie).multiplyScalar(k).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(u){Le.setScissorTest(qe=u)},this.setOpaqueSort=function(u){Y=u},this.setTransparentSort=function(u){se=u},this.getClearColor=function(u){return u.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(u=!0,x=!0,w=!0){let A=0;if(u){let P=!1;if(T!==null){let z=T.texture.format;P=z===hh||z===ch||z===lh}if(P){let z=T.texture.type,Z=z===zn||z===es||z===Rr||z===Li||z===oh||z===ah,ae=Me.getClearColor(),j=Me.getClearAlpha(),ne=ae.r,ie=ae.g,de=ae.b;Z?(v[0]=ne,v[1]=ie,v[2]=de,v[3]=j,O.clearBufferuiv(O.COLOR,0,v)):(_[0]=ne,_[1]=ie,_[2]=de,_[3]=j,O.clearBufferiv(O.COLOR,0,_))}else A|=O.COLOR_BUFFER_BIT}x&&(A|=O.DEPTH_BUFFER_BIT),w&&(A|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(A)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),J.dispose(),ve.dispose(),Oe.dispose(),b.dispose(),q.dispose(),fe.dispose(),Ee.dispose(),H.dispose(),Ye.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",to),ee.removeEventListener("sessionend",no),si.stop()};function pe(u){u.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;let u=Je.autoReset,x=he.enabled,w=he.autoUpdate,A=he.needsUpdate,P=he.type;G(),Je.autoReset=u,he.enabled=x,he.autoUpdate=w,he.needsUpdate=A,he.type=P}function Se(u){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function Qe(u){let x=u.target;x.removeEventListener("dispose",Qe),pt(x)}function pt(u){Ut(u),Oe.remove(u)}function Ut(u){let x=Oe.get(u).programs;x!==void 0&&(x.forEach(function(w){Ye.releaseProgram(w)}),u.isShaderMaterial&&Ye.releaseShaderCache(u))}this.renderBufferDirect=function(u,x,w,A,P,z){x===null&&(x=et);let Z=P.isMesh&&P.matrixWorld.determinant()<0,ae=Ga(u,x,w,A,P);Le.setMaterial(A,Z);let j=w.index,ne=1;if(A.wireframe===!0){if(j=ye.getWireframeAttribute(w),j===void 0)return;ne=2}let ie=w.drawRange,de=w.attributes.position,Pe=ie.start*ne,De=(ie.start+ie.count)*ne;z!==null&&(Pe=Math.max(Pe,z.start*ne),De=Math.min(De,(z.start+z.count)*ne)),j!==null?(Pe=Math.max(Pe,0),De=Math.min(De,j.count)):de!=null&&(Pe=Math.max(Pe,0),De=Math.min(De,de.count));let Be=De-Pe;if(Be<0||Be===1/0)return;Ee.setup(P,A,ae,w,j);let Ne,Ue=oe;if(j!==null&&(Ne=ce.get(j),Ue=ge,Ue.setIndex(Ne)),P.isMesh)A.wireframe===!0?(Le.setLineWidth(A.wireframeLinewidth*Ae()),Ue.setMode(O.LINES)):Ue.setMode(O.TRIANGLES);else if(P.isLine){let Re=A.linewidth;Re===void 0&&(Re=1),Le.setLineWidth(Re*Ae()),P.isLineSegments?Ue.setMode(O.LINES):P.isLineLoop?Ue.setMode(O.LINE_LOOP):Ue.setMode(O.LINE_STRIP)}else P.isPoints?Ue.setMode(O.POINTS):P.isSprite&&Ue.setMode(O.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Ue.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))Ue.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let Re=P._multiDrawStarts,ot=P._multiDrawCounts,Ke=P._multiDrawCount,At=j?ce.get(j).bytesPerElement:1,gt=Oe.get(A).currentProgram.getUniforms();for(let tt=0;tt<Ke;tt++)gt.setValue(O,"_gl_DrawID",tt),Ue.render(Re[tt]/At,ot[tt])}else if(P.isInstancedMesh)Ue.renderInstances(Pe,Be,P.count);else if(w.isInstancedBufferGeometry){let Re=w._maxInstanceCount!==void 0?w._maxInstanceCount:1/0,ot=Math.min(w.instanceCount,Re);Ue.renderInstances(Pe,Be,ot)}else Ue.render(Pe,Be)};function xt(u,x,w){u.transparent===!0&&u.side===Lt&&u.forceSinglePass===!1?(u.side=Nt,u.needsUpdate=!0,cs(u,x,w),u.side=$n,u.needsUpdate=!0,cs(u,x,w),u.side=Lt):cs(u,x,w)}this.compile=function(u,x,w=null){w===null&&(w=u),g=ve.get(w),g.init(x),E.push(g),w.traverseVisible(function(P){P.isLight&&P.layers.test(x.layers)&&(g.pushLight(P),P.castShadow&&g.pushShadow(P))}),u!==w&&u.traverseVisible(function(P){P.isLight&&P.layers.test(x.layers)&&(g.pushLight(P),P.castShadow&&g.pushShadow(P))}),g.setupLights();let A=new Set;return u.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let z=P.material;if(z)if(Array.isArray(z))for(let Z=0;Z<z.length;Z++){let ae=z[Z];xt(ae,w,P),A.add(ae)}else xt(z,w,P),A.add(z)}),E.pop(),g=null,A},this.compileAsync=function(u,x,w=null){let A=this.compile(u,x,w);return new Promise(P=>{function z(){if(A.forEach(function(Z){Oe.get(Z).currentProgram.isReady()&&A.delete(Z)}),A.size===0){P(u);return}setTimeout(z,10)}we.get("KHR_parallel_shader_compile")!==null?z():setTimeout(z,10)})};let yn=null;function Dn(u){yn&&yn(u)}function to(){si.stop()}function no(){si.start()}let si=new lf;si.setAnimationLoop(Dn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(u){yn=u,ee.setAnimationLoop(u),u===null?si.stop():si.start()},ee.addEventListener("sessionstart",to),ee.addEventListener("sessionend",no),this.render=function(u,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(x),x=ee.getCamera()),u.isScene===!0&&u.onBeforeRender(S,u,x,T),g=ve.get(u,E.length),g.init(x),E.push(g),Fe.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),le.setFromProjectionMatrix(Fe),be=this.localClippingEnabled,_e=K.init(this.clippingPlanes,be),m=J.get(u,R.length),m.init(),R.push(m),ee.enabled===!0&&ee.isPresenting===!0){let z=S.xr.getDepthSensingMesh();z!==null&&rr(z,x,-1/0,S.sortObjects)}rr(u,x,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(Y,se),ue=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,ue&&Me.addToRenderList(m,u),this.info.render.frame++,_e===!0&&K.beginShadows();let w=g.state.shadowsArray;he.render(w,u,x),_e===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset();let A=m.opaque,P=m.transmissive;if(g.setupLights(),x.isArrayCamera){let z=x.cameras;if(P.length>0)for(let Z=0,ae=z.length;Z<ae;Z++){let j=z[Z];io(A,P,u,j)}ue&&Me.render(u);for(let Z=0,ae=z.length;Z<ae;Z++){let j=z[Z];or(m,u,j,j.viewport)}}else P.length>0&&io(A,P,u,x),ue&&Me.render(u),or(m,u,x);T!==null&&(U.updateMultisampleRenderTarget(T),U.updateRenderTargetMipmap(T)),u.isScene===!0&&u.onAfterRender(S,u,x),Ee.resetDefaultState(),M=-1,y=null,E.pop(),E.length>0?(g=E[E.length-1],_e===!0&&K.setGlobalState(S.clippingPlanes,g.state.camera)):g=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function rr(u,x,w,A){if(u.visible===!1)return;if(u.layers.test(x.layers)){if(u.isGroup)w=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(x);else if(u.isLight)g.pushLight(u),u.castShadow&&g.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||le.intersectsSprite(u)){A&&Ze.setFromMatrixPosition(u.matrixWorld).applyMatrix4(Fe);let Z=fe.update(u),ae=u.material;ae.visible&&m.push(u,Z,ae,w,Ze.z,null)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||le.intersectsObject(u))){let Z=fe.update(u),ae=u.material;if(A&&(u.boundingSphere!==void 0?(u.boundingSphere===null&&u.computeBoundingSphere(),Ze.copy(u.boundingSphere.center)):(Z.boundingSphere===null&&Z.computeBoundingSphere(),Ze.copy(Z.boundingSphere.center)),Ze.applyMatrix4(u.matrixWorld).applyMatrix4(Fe)),Array.isArray(ae)){let j=Z.groups;for(let ne=0,ie=j.length;ne<ie;ne++){let de=j[ne],Pe=ae[de.materialIndex];Pe&&Pe.visible&&m.push(u,Z,Pe,w,Ze.z,de)}}else ae.visible&&m.push(u,Z,ae,w,Ze.z,null)}}let z=u.children;for(let Z=0,ae=z.length;Z<ae;Z++)rr(z[Z],x,w,A)}function or(u,x,w,A){let P=u.opaque,z=u.transmissive,Z=u.transparent;g.setupLightsView(w),_e===!0&&K.setGlobalState(S.clippingPlanes,w),A&&Le.viewport(C.copy(A)),P.length>0&&ls(P,x,w),z.length>0&&ls(z,x,w),Z.length>0&&ls(Z,x,w),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function io(u,x,w,A){if((w.isScene===!0?w.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[A.id]===void 0&&(g.state.transmissionRenderTarget[A.id]=new Ft(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float")?Ht:zn,minFilter:Di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));let z=g.state.transmissionRenderTarget[A.id],Z=A.viewport||C;z.setSize(Z.z,Z.w);let ae=S.getRenderTarget();S.setRenderTarget(z),S.getClearColor(X),re=S.getClearAlpha(),re<1&&S.setClearColor(16777215,.5),S.clear(),ue&&Me.render(w);let j=S.toneMapping;S.toneMapping=Ui;let ne=A.viewport;if(A.viewport!==void 0&&(A.viewport=void 0),g.setupLightsView(A),_e===!0&&K.setGlobalState(S.clippingPlanes,A),ls(u,w,A),U.updateMultisampleRenderTarget(z),U.updateRenderTargetMipmap(z),we.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let de=0,Pe=x.length;de<Pe;de++){let De=x[de],Be=De.object,Ne=De.geometry,Ue=De.material,Re=De.group;if(Ue.side===Lt&&Be.layers.test(A.layers)){let ot=Ue.side;Ue.side=Nt,Ue.needsUpdate=!0,so(Be,w,A,Ne,Ue,Re),Ue.side=ot,Ue.needsUpdate=!0,ie=!0}}ie===!0&&(U.updateMultisampleRenderTarget(z),U.updateRenderTargetMipmap(z))}S.setRenderTarget(ae),S.setClearColor(X,re),ne!==void 0&&(A.viewport=ne),S.toneMapping=j}function ls(u,x,w){let A=x.isScene===!0?x.overrideMaterial:null;for(let P=0,z=u.length;P<z;P++){let Z=u[P],ae=Z.object,j=Z.geometry,ne=A===null?Z.material:A,ie=Z.group;ae.layers.test(w.layers)&&so(ae,x,w,j,ne,ie)}}function so(u,x,w,A,P,z){u.onBeforeRender(S,x,w,A,P,z),u.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),P.onBeforeRender(S,x,w,A,u,z),P.transparent===!0&&P.side===Lt&&P.forceSinglePass===!1?(P.side=Nt,P.needsUpdate=!0,S.renderBufferDirect(w,x,A,P,u,z),P.side=$n,P.needsUpdate=!0,S.renderBufferDirect(w,x,A,P,u,z),P.side=Lt):S.renderBufferDirect(w,x,A,P,u,z),u.onAfterRender(S,x,w,A,P,z)}function cs(u,x,w){x.isScene!==!0&&(x=et);let A=Oe.get(u),P=g.state.lights,z=g.state.shadowsArray,Z=P.state.version,ae=Ye.getParameters(u,P.state,z,x,w),j=Ye.getProgramCacheKey(ae),ne=A.programs;A.environment=u.isMeshStandardMaterial?x.environment:null,A.fog=x.fog,A.envMap=(u.isMeshStandardMaterial?q:b).get(u.envMap||A.environment),A.envMapRotation=A.environment!==null&&u.envMap===null?x.environmentRotation:u.envMapRotation,ne===void 0&&(u.addEventListener("dispose",Qe),ne=new Map,A.programs=ne);let ie=ne.get(j);if(ie!==void 0){if(A.currentProgram===ie&&A.lightsStateVersion===Z)return lr(u,ae),ie}else ae.uniforms=Ye.getUniforms(u),u.onBeforeCompile(ae,S),ie=Ye.acquireProgram(ae,j),ne.set(j,ie),A.uniforms=ae.uniforms;let de=A.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&(de.clippingPlanes=K.uniform),lr(u,ae),A.needsLights=wi(u),A.lightsStateVersion=Z,A.needsLights&&(de.ambientLightColor.value=P.state.ambient,de.lightProbe.value=P.state.probe,de.directionalLights.value=P.state.directional,de.directionalLightShadows.value=P.state.directionalShadow,de.spotLights.value=P.state.spot,de.spotLightShadows.value=P.state.spotShadow,de.rectAreaLights.value=P.state.rectArea,de.ltc_1.value=P.state.rectAreaLTC1,de.ltc_2.value=P.state.rectAreaLTC2,de.pointLights.value=P.state.point,de.pointLightShadows.value=P.state.pointShadow,de.hemisphereLights.value=P.state.hemi,de.directionalShadowMap.value=P.state.directionalShadowMap,de.directionalShadowMatrix.value=P.state.directionalShadowMatrix,de.spotShadowMap.value=P.state.spotShadowMap,de.spotLightMatrix.value=P.state.spotLightMatrix,de.spotLightMap.value=P.state.spotLightMap,de.pointShadowMap.value=P.state.pointShadowMap,de.pointShadowMatrix.value=P.state.pointShadowMatrix),A.currentProgram=ie,A.uniformsList=null,ie}function ar(u){if(u.uniformsList===null){let x=u.currentProgram.getUniforms();u.uniformsList=Ls.seqWithValue(x.seq,u.uniforms)}return u.uniformsList}function lr(u,x){let w=Oe.get(u);w.outputColorSpace=x.outputColorSpace,w.batching=x.batching,w.batchingColor=x.batchingColor,w.instancing=x.instancing,w.instancingColor=x.instancingColor,w.instancingMorph=x.instancingMorph,w.skinning=x.skinning,w.morphTargets=x.morphTargets,w.morphNormals=x.morphNormals,w.morphColors=x.morphColors,w.morphTargetsCount=x.morphTargetsCount,w.numClippingPlanes=x.numClippingPlanes,w.numIntersection=x.numClipIntersection,w.vertexAlphas=x.vertexAlphas,w.vertexTangents=x.vertexTangents,w.toneMapping=x.toneMapping}function Ga(u,x,w,A,P){x.isScene!==!0&&(x=et),U.resetTextureUnits();let z=x.fog,Z=A.isMeshStandardMaterial?x.environment:null,ae=T===null?S.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:_i,j=(A.isMeshStandardMaterial?q:b).get(A.envMap||Z),ne=A.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,ie=!!w.attributes.tangent&&(!!A.normalMap||A.anisotropy>0),de=!!w.morphAttributes.position,Pe=!!w.morphAttributes.normal,De=!!w.morphAttributes.color,Be=Ui;A.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Be=S.toneMapping);let Ne=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,Ue=Ne!==void 0?Ne.length:0,Re=Oe.get(A),ot=g.state.lights;if(_e===!0&&(be===!0||u!==y)){let rt=u===y&&A.id===M;K.setState(A,u,rt)}let Ke=!1;A.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ot.state.version||Re.outputColorSpace!==ae||P.isBatchedMesh&&Re.batching===!1||!P.isBatchedMesh&&Re.batching===!0||P.isBatchedMesh&&Re.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Re.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Re.instancing===!1||!P.isInstancedMesh&&Re.instancing===!0||P.isSkinnedMesh&&Re.skinning===!1||!P.isSkinnedMesh&&Re.skinning===!0||P.isInstancedMesh&&Re.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Re.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Re.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Re.instancingMorph===!1&&P.morphTexture!==null||Re.envMap!==j||A.fog===!0&&Re.fog!==z||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==K.numPlanes||Re.numIntersection!==K.numIntersection)||Re.vertexAlphas!==ne||Re.vertexTangents!==ie||Re.morphTargets!==de||Re.morphNormals!==Pe||Re.morphColors!==De||Re.toneMapping!==Be||Re.morphTargetsCount!==Ue)&&(Ke=!0):(Ke=!0,Re.__version=A.version);let At=Re.currentProgram;Ke===!0&&(At=cs(A,x,P));let gt=!1,tt=!1,Rt=!1,at=At.getUniforms(),Et=Re.uniforms;if(Le.useProgram(At.program)&&(gt=!0,tt=!0,Rt=!0),A.id!==M&&(M=A.id,tt=!0),gt||y!==u){Le.buffers.depth.getReversed()?(xe.copy(u.projectionMatrix),jd(xe),ep(xe),at.setValue(O,"projectionMatrix",xe)):at.setValue(O,"projectionMatrix",u.projectionMatrix),at.setValue(O,"viewMatrix",u.matrixWorldInverse);let Kt=at.map.cameraPosition;Kt!==void 0&&Kt.setValue(O,Xe.setFromMatrixPosition(u.matrixWorld)),Ge.logarithmicDepthBuffer&&at.setValue(O,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial)&&at.setValue(O,"isOrthographic",u.isOrthographicCamera===!0),y!==u&&(y=u,tt=!0,Rt=!0)}if(P.isSkinnedMesh){at.setOptional(O,P,"bindMatrix"),at.setOptional(O,P,"bindMatrixInverse");let rt=P.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),at.setValue(O,"boneTexture",rt.boneTexture,U))}P.isBatchedMesh&&(at.setOptional(O,P,"batchingTexture"),at.setValue(O,"batchingTexture",P._matricesTexture,U),at.setOptional(O,P,"batchingIdTexture"),at.setValue(O,"batchingIdTexture",P._indirectTexture,U),at.setOptional(O,P,"batchingColorTexture"),P._colorsTexture!==null&&at.setValue(O,"batchingColorTexture",P._colorsTexture,U));let ut=w.morphAttributes;if((ut.position!==void 0||ut.normal!==void 0||ut.color!==void 0)&&$.update(P,w,At),(tt||Re.receiveShadow!==P.receiveShadow)&&(Re.receiveShadow=P.receiveShadow,at.setValue(O,"receiveShadow",P.receiveShadow)),A.isMeshGouraudMaterial&&A.envMap!==null&&(Et.envMap.value=j,Et.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1),A.isMeshStandardMaterial&&A.envMap===null&&x.environment!==null&&(Et.envMapIntensity.value=x.environmentIntensity),tt&&(at.setValue(O,"toneMappingExposure",S.toneMappingExposure),Re.needsLights&&ri(Et,Rt),z&&A.fog===!0&&W.refreshFogUniforms(Et,z),W.refreshMaterialUniforms(Et,A,k,Q,g.state.transmissionRenderTarget[u.id]),Ls.upload(O,ar(Re),Et,U)),A.isShaderMaterial&&A.uniformsNeedUpdate===!0&&(Ls.upload(O,ar(Re),Et,U),A.uniformsNeedUpdate=!1),A.isSpriteMaterial&&at.setValue(O,"center",P.center),at.setValue(O,"modelViewMatrix",P.modelViewMatrix),at.setValue(O,"normalMatrix",P.normalMatrix),at.setValue(O,"modelMatrix",P.matrixWorld),A.isShaderMaterial||A.isRawShaderMaterial){let rt=A.uniformsGroups;for(let Kt=0,gn=rt.length;Kt<gn;Kt++){let Mn=rt[Kt];H.update(Mn,At),H.bind(Mn,At)}}return At}function ri(u,x){u.ambientLightColor.needsUpdate=x,u.lightProbe.needsUpdate=x,u.directionalLights.needsUpdate=x,u.directionalLightShadows.needsUpdate=x,u.pointLights.needsUpdate=x,u.pointLightShadows.needsUpdate=x,u.spotLights.needsUpdate=x,u.spotLightShadows.needsUpdate=x,u.rectAreaLights.needsUpdate=x,u.hemisphereLights.needsUpdate=x}function wi(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(u,x,w){Oe.get(u.texture).__webglTexture=x,Oe.get(u.depthTexture).__webglTexture=w;let A=Oe.get(u);A.__hasExternalTextures=!0,A.__autoAllocateDepthBuffer=w===void 0,A.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),A.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(u,x){let w=Oe.get(u);w.__webglFramebuffer=x,w.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(u,x=0,w=0){T=u,D=x,L=w;let A=!0,P=null,z=!1,Z=!1;if(u){let j=Oe.get(u);if(j.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(O.FRAMEBUFFER,null),A=!1;else if(j.__webglFramebuffer===void 0)U.setupRenderTarget(u);else if(j.__hasExternalTextures)U.rebindTextures(u,Oe.get(u.texture).__webglTexture,Oe.get(u.depthTexture).__webglTexture);else if(u.depthBuffer){let de=u.depthTexture;if(j.__boundDepthTexture!==de){if(de!==null&&Oe.has(de)&&(u.width!==de.image.width||u.height!==de.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(u)}}let ne=u.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Z=!0);let ie=Oe.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(Array.isArray(ie[x])?P=ie[x][w]:P=ie[x],z=!0):u.samples>0&&U.useMultisampledRTT(u)===!1?P=Oe.get(u).__webglMultisampledFramebuffer:Array.isArray(ie)?P=ie[w]:P=ie,C.copy(u.viewport),B.copy(u.scissor),V=u.scissorTest}else C.copy(te).multiplyScalar(k).floor(),B.copy(Ie).multiplyScalar(k).floor(),V=qe;if(Le.bindFramebuffer(O.FRAMEBUFFER,P)&&A&&Le.drawBuffers(u,P),Le.viewport(C),Le.scissor(B),Le.setScissorTest(V),z){let j=Oe.get(u.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+x,j.__webglTexture,w)}else if(Z){let j=Oe.get(u.texture),ne=x||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,j.__webglTexture,w||0,ne)}M=-1},this.readRenderTargetPixels=function(u,x,w,A,P,z,Z){if(!(u&&u.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ae=Oe.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&Z!==void 0&&(ae=ae[Z]),ae){Le.bindFramebuffer(O.FRAMEBUFFER,ae);try{let j=u.texture,ne=j.format,ie=j.type;if(!Ge.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=u.width-A&&w>=0&&w<=u.height-P&&O.readPixels(x,w,A,P,me.convert(ne),me.convert(ie),z)}finally{let j=T!==null?Oe.get(T).__webglFramebuffer:null;Le.bindFramebuffer(O.FRAMEBUFFER,j)}}},this.readRenderTargetPixelsAsync=async function(u,x,w,A,P,z,Z){if(!(u&&u.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ae=Oe.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&Z!==void 0&&(ae=ae[Z]),ae){let j=u.texture,ne=j.format,ie=j.type;if(!Ge.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=u.width-A&&w>=0&&w<=u.height-P){Le.bindFramebuffer(O.FRAMEBUFFER,ae);let de=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,de),O.bufferData(O.PIXEL_PACK_BUFFER,z.byteLength,O.STREAM_READ),O.readPixels(x,w,A,P,me.convert(ne),me.convert(ie),0);let Pe=T!==null?Oe.get(T).__webglFramebuffer:null;Le.bindFramebuffer(O.FRAMEBUFFER,Pe);let De=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Qd(O,De,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,de),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,z),O.deleteBuffer(de),O.deleteSync(De),z}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(u,x=null,w=0){u.isTexture!==!0&&(yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,u=arguments[1]);let A=Math.pow(2,-w),P=Math.floor(u.image.width*A),z=Math.floor(u.image.height*A),Z=x!==null?x.x:0,ae=x!==null?x.y:0;U.setTexture2D(u,0),O.copyTexSubImage2D(O.TEXTURE_2D,w,0,0,Z,ae,P,z),Le.unbindTexture()},this.copyTextureToTexture=function(u,x,w=null,A=null,P=0){u.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture function signature has changed."),A=arguments[0]||null,u=arguments[1],x=arguments[2],P=arguments[3]||0,w=null);let z,Z,ae,j,ne,ie,de,Pe,De,Be=u.isCompressedTexture?u.mipmaps[P]:u.image;w!==null?(z=w.max.x-w.min.x,Z=w.max.y-w.min.y,ae=w.isBox3?w.max.z-w.min.z:1,j=w.min.x,ne=w.min.y,ie=w.isBox3?w.min.z:0):(z=Be.width,Z=Be.height,ae=Be.depth||1,j=0,ne=0,ie=0),A!==null?(de=A.x,Pe=A.y,De=A.z):(de=0,Pe=0,De=0);let Ne=me.convert(x.format),Ue=me.convert(x.type),Re;x.isData3DTexture?(U.setTexture3D(x,0),Re=O.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(U.setTexture2DArray(x,0),Re=O.TEXTURE_2D_ARRAY):(U.setTexture2D(x,0),Re=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,x.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,x.unpackAlignment);let ot=O.getParameter(O.UNPACK_ROW_LENGTH),Ke=O.getParameter(O.UNPACK_IMAGE_HEIGHT),At=O.getParameter(O.UNPACK_SKIP_PIXELS),gt=O.getParameter(O.UNPACK_SKIP_ROWS),tt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Be.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Be.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,j),O.pixelStorei(O.UNPACK_SKIP_ROWS,ne),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ie);let Rt=u.isDataArrayTexture||u.isData3DTexture,at=x.isDataArrayTexture||x.isData3DTexture;if(u.isRenderTargetTexture||u.isDepthTexture){let Et=Oe.get(u),ut=Oe.get(x),rt=Oe.get(Et.__renderTarget),Kt=Oe.get(ut.__renderTarget);Le.bindFramebuffer(O.READ_FRAMEBUFFER,rt.__webglFramebuffer),Le.bindFramebuffer(O.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let gn=0;gn<ae;gn++)Rt&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(u).__webglTexture,P,ie+gn),u.isDepthTexture?(at&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(x).__webglTexture,P,De+gn),O.blitFramebuffer(j,ne,z,Z,de,Pe,z,Z,O.DEPTH_BUFFER_BIT,O.NEAREST)):at?O.copyTexSubImage3D(Re,P,de,Pe,De+gn,j,ne,z,Z):O.copyTexSubImage2D(Re,P,de,Pe,De+gn,j,ne,z,Z);Le.bindFramebuffer(O.READ_FRAMEBUFFER,null),Le.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else at?u.isDataTexture||u.isData3DTexture?O.texSubImage3D(Re,P,de,Pe,De,z,Z,ae,Ne,Ue,Be.data):x.isCompressedArrayTexture?O.compressedTexSubImage3D(Re,P,de,Pe,De,z,Z,ae,Ne,Be.data):O.texSubImage3D(Re,P,de,Pe,De,z,Z,ae,Ne,Ue,Be):u.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,P,de,Pe,z,Z,Ne,Ue,Be.data):u.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,P,de,Pe,Be.width,Be.height,Ne,Be.data):O.texSubImage2D(O.TEXTURE_2D,P,de,Pe,z,Z,Ne,Ue,Be);O.pixelStorei(O.UNPACK_ROW_LENGTH,ot),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ke),O.pixelStorei(O.UNPACK_SKIP_PIXELS,At),O.pixelStorei(O.UNPACK_SKIP_ROWS,gt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,tt),P===0&&x.generateMipmaps&&O.generateMipmap(Re),Le.unbindTexture()},this.copyTextureToTexture3D=function(u,x,w=null,A=null,P=0){return u.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),w=arguments[0]||null,A=arguments[1]||null,u=arguments[2],x=arguments[3],P=arguments[4]||0),yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(u,x,w,A,P)},this.initRenderTarget=function(u){Oe.get(u).__webglFramebuffer===void 0&&U.setupRenderTarget(u)},this.initTexture=function(u){u.isCubeTexture?U.setTextureCube(u,0):u.isData3DTexture?U.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?U.setTexture2DArray(u,0):U.setTexture2D(u,0),Le.unbindTexture()},this.resetState=function(){D=0,L=0,T=null,Le.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}},ta=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var zi=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},na=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hc,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ln=new I,Ur=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Kn=class extends Hn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ws,dr=new I,bs=new I,Ts=new I,As=new Te,pr=new Te,df=new je,Ro=new I,mr=new I,Co=new I,Au=new Te,xl=new Te,Ru=new Te,xi=class extends Ot{constructor(e=new Kn){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new Ct;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new na(t,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new Ur(n,3,0,!1)),ws.setAttribute("uv",new Ur(n,2,3,!1))}this.geometry=ws,this.material=e,this.center=new Te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bs.setFromMatrixScale(this.matrixWorld),df.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bs.multiplyScalar(-Ts.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Po(Ro.set(-.5,-.5,0),Ts,o,bs,s,r),Po(mr.set(.5,-.5,0),Ts,o,bs,s,r),Po(Co.set(.5,.5,0),Ts,o,bs,s,r),Au.set(0,0),xl.set(1,0),Ru.set(1,1);let a=e.ray.intersectTriangle(Ro,mr,Co,!1,dr);if(a===null&&(Po(mr.set(-.5,.5,0),Ts,o,bs,s,r),xl.set(0,1),a=e.ray.intersectTriangle(Ro,Co,mr,!1,dr),a===null))return;let c=e.ray.origin.distanceTo(dr);c<e.near||c>e.far||t.push({distance:c,point:dr.clone(),uv:Ii.getInterpolation(dr,Ro,mr,Co,Au,xl,Ru,new Te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Po(i,e,t,n,s,r){As.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(pr.x=r*As.x-s*As.y,pr.y=s*As.x+r*As.y):pr.copy(As),i.copy(e),i.x+=pr.x,i.y+=pr.y,i.applyMatrix4(df)}var Qn=class extends tn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=an,h=an,f,d){super(null,o,a,c,l,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Lr=class extends Bt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Rs=new je,Cu=new je,Io=[],Pu=new gi,Jv=new je,gr=new $e,vr=new vi,fn=class extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Jv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),Pu.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(Pu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),vr.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vr.copy(this.boundingSphere),vr.applyMatrix4(n),e.ray.intersectsSphere(vr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rs),Cu.multiplyMatrices(n,Rs),gr.matrixWorld=Cu,gr.raycast(e,Io);for(let o=0,a=Io.length;o<a;o++){let c=Io[o];c.instanceId=r,c.object=this,t.push(c)}Io.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qn(new Float32Array(s*this.count),s,this.count,Gr,vn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Nr=class extends Hn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ia=new I,sa=new I,Iu=new je,xr=new Pr,Do=new vi,_l=new I,Du=new I,Tc=class extends Ot{constructor(e=new Ct,t=new Nr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ia.fromBufferAttribute(t,s-1),sa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ia.distanceTo(sa);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(s),Do.radius+=r,e.ray.intersectsSphere(Do)===!1)return;Iu.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Iu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let _=p,m=v-1;_<m;_+=l){let g=h.getX(_),R=h.getX(_+1),E=Uo(this,e,xr,c,g,R);E&&t.push(E)}if(this.isLineLoop){let _=h.getX(v-1),m=h.getX(p),g=Uo(this,e,xr,c,_,m);g&&t.push(g)}}else{let p=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let _=p,m=v-1;_<m;_+=l){let g=Uo(this,e,xr,c,_,_+1);g&&t.push(g)}if(this.isLineLoop){let _=Uo(this,e,xr,c,v-1,p);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Uo(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(ia.fromBufferAttribute(o,s),sa.fromBufferAttribute(o,r),t.distanceSqToSegment(ia,sa,_l,Du)>n)return;_l.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(_l);if(!(c<e.near||c>e.far))return{distance:c,point:Du.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Uu=new I,Lu=new I,ra=class extends Tc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Uu.fromBufferAttribute(t,s),Lu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Uu.distanceTo(Lu);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ts=class extends Hn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Nu=new je,Ac=new Pr,Lo=new vi,No=new I,ks=class extends Ot{constructor(e=new Ct,t=new ts){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(s),Lo.radius+=r,e.ray.intersectsSphere(Lo)===!1)return;Nu.copy(s).invert(),Ac.copy(e.ray).applyMatrix4(Nu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let v=d,_=p;v<_;v++){let m=l.getX(v);No.fromBufferAttribute(f,m),Fu(No,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=d,_=p;v<_;v++)No.fromBufferAttribute(f,v),Fu(No,v,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fu(i,e,t,n,s,r,o){let a=Ac.distanceSqToPoint(i);if(a<t){let c=new I;Ac.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var oa=class extends tn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Te:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new I,s=[],r=[],o=[],a=new I,c=new je;for(let p=0;p<=e;p++){let v=p/e;s[p]=this.getTangentAt(v,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let v=Math.acos(Wt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,v))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Wt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let v=1;v<=e;v++)r[v].applyMatrix4(c.makeRotationAxis(s[v],p*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Fr=class extends Rn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Te){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*f+this.aX,l=d*f+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Rc=class extends Fr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function gh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+f)+(c-a)/f;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Fo=new I,yl=new gh,Ml=new gh,Sl=new gh,Or=class extends Rn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Fo.subVectors(s[0],s[1]).add(s[0]),l=Fo);let f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Fo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,v=Math.pow(l.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),v<1e-4&&(v=_),m<1e-4&&(m=_),yl.initNonuniformCatmullRom(l.x,f.x,d.x,h.x,v,_,m),Ml.initNonuniformCatmullRom(l.y,f.y,d.y,h.y,v,_,m),Sl.initNonuniformCatmullRom(l.z,f.z,d.z,h.z,v,_,m)}else this.curveType==="catmullrom"&&(yl.initCatmullRom(l.x,f.x,d.x,h.x,this.tension),Ml.initCatmullRom(l.y,f.y,d.y,h.y,this.tension),Sl.initCatmullRom(l.z,f.z,d.z,h.z,this.tension));return n.set(yl.calc(c),Ml.calc(c),Sl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ou(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Kv(i,e){let t=1-i;return t*t*e}function Qv(i,e){return 2*(1-i)*i*e}function jv(i,e){return i*i*e}function br(i,e,t,n){return Kv(i,e)+Qv(i,t)+jv(i,n)}function ex(i,e){let t=1-i;return t*t*t*e}function tx(i,e){let t=1-i;return 3*t*t*i*e}function nx(i,e){return 3*(1-i)*i*i*e}function ix(i,e){return i*i*i*e}function Tr(i,e,t,n,s){return ex(i,e)+tx(i,t)+nx(i,n)+ix(i,s)}var aa=class extends Rn{constructor(e=new Te,t=new Te,n=new Te,s=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Te){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Tr(e,s.x,r.x,o.x,a.x),Tr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cc=class extends Rn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Tr(e,s.x,r.x,o.x,a.x),Tr(e,s.y,r.y,o.y,a.y),Tr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},la=class extends Rn{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pc=class extends Rn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ca=class extends Rn{constructor(e=new Te,t=new Te,n=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Te){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(br(e,s.x,r.x,o.x),br(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ic=class extends Rn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(br(e,s.x,r.x,o.x),br(e,s.y,r.y,o.y),br(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ha=class extends Rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Ou(a,c.x,l.x,h.x,f.x),Ou(a,c.y,l.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Te().fromArray(s))}return this}},Dc=Object.freeze({__proto__:null,ArcCurve:Rc,CatmullRomCurve3:Or,CubicBezierCurve:aa,CubicBezierCurve3:Cc,EllipseCurve:Fr,LineCurve:la,LineCurve3:Pc,QuadraticBezierCurve:ca,QuadraticBezierCurve3:Ic,SplineCurve:ha}),Uc=class extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Dc[s.type]().fromJSON(s))}return this}},ua=class extends Uc{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new la(this.currentPoint.clone(),new Te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ca(this.currentPoint.clone(),new Te(e,t),new Te(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new aa(this.currentPoint.clone(),new Te(e,t),new Te(n,s),new Te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ha(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Fr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var ht=class i extends Ct{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],p=[],v=0,_=[],m=n/2,g=0;R(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new mt(f,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(p,2));function R(){let S=new I,F=new I,D=0,L=(t-e)/n;for(let T=0;T<=r;T++){let M=[],y=T/r,C=y*(t-e)+e;for(let B=0;B<=s;B++){let V=B/s,X=V*c+a,re=Math.sin(X),N=Math.cos(X);F.x=C*re,F.y=-y*n+m,F.z=C*N,f.push(F.x,F.y,F.z),S.set(re,L,N).normalize(),d.push(S.x,S.y,S.z),p.push(V,1-y),M.push(v++)}_.push(M)}for(let T=0;T<s;T++)for(let M=0;M<r;M++){let y=_[M][T],C=_[M+1][T],B=_[M+1][T+1],V=_[M][T+1];(e>0||M!==0)&&(h.push(y,C,V),D+=3),(t>0||M!==r-1)&&(h.push(C,B,V),D+=3)}l.addGroup(g,D,0),g+=D}function E(S){let F=v,D=new Te,L=new I,T=0,M=S===!0?e:t,y=S===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),v++;let C=v;for(let B=0;B<=s;B++){let X=B/s*c+a,re=Math.cos(X),N=Math.sin(X);L.x=M*N,L.y=m*y,L.z=M*re,f.push(L.x,L.y,L.z),d.push(0,y,0),D.x=re*.5+.5,D.y=N*.5*y+.5,p.push(D.x,D.y),v++}for(let B=0;B<s;B++){let V=F+B,X=C+B;S===!0?h.push(X,X+1,V):h.push(X+1,X,V),T+=3}l.addGroup(g,T,S===!0?1:2),g+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},fa=class i extends ht{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Hi=class extends ua{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ua().fromJSON(s))}return this}},sx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=pf(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,f,d,p;if(n&&(r=cx(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let v=t;v<s;v+=t)f=i[v],d=i[v+1],f<a&&(a=f),d<c&&(c=d),f>l&&(l=f),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return Br(r,o,t,a,c,p,0),o}};function pf(i,e,t,n,s){let r,o;if(s===yx(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Bu(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Bu(r,i[r],i[r+1],o);return o&&Ta(o,o.next)&&(Hr(o),o=o.next),o}function ns(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ta(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Hr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Br(i,e,t,n,s,r,o){if(!i)return;!o&&r&&px(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?ox(i,n,s,r):rx(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Hr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=ax(ns(i),e,t),Br(i,e,t,n,s,r,2)):o===2&&lx(i,e,t,n,s,r):Br(ns(i),e,t,n,s,r,1);break}}}function rx(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l,v=n.next;for(;v!==e;){if(v.x>=h&&v.x<=d&&v.y>=f&&v.y<=p&&Ps(s,a,r,c,o,l,v.x,v.y)&&Dt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function ox(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Dt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,v=h<f?h<d?h:d:f<d?f:d,_=a>c?a>l?a:l:c>l?c:l,m=h>f?h>d?h:d:f>d?f:d,g=Lc(p,v,e,t,n),R=Lc(_,m,e,t,n),E=i.prevZ,S=i.nextZ;for(;E&&E.z>=g&&S&&S.z<=R;){if(E.x>=p&&E.x<=_&&E.y>=v&&E.y<=m&&E!==s&&E!==o&&Ps(a,h,c,f,l,d,E.x,E.y)&&Dt(E.prev,E,E.next)>=0||(E=E.prevZ,S.x>=p&&S.x<=_&&S.y>=v&&S.y<=m&&S!==s&&S!==o&&Ps(a,h,c,f,l,d,S.x,S.y)&&Dt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;E&&E.z>=g;){if(E.x>=p&&E.x<=_&&E.y>=v&&E.y<=m&&E!==s&&E!==o&&Ps(a,h,c,f,l,d,E.x,E.y)&&Dt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;S&&S.z<=R;){if(S.x>=p&&S.x<=_&&S.y>=v&&S.y<=m&&S!==s&&S!==o&&Ps(a,h,c,f,l,d,S.x,S.y)&&Dt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function ax(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Ta(s,r)&&mf(s,n,n.next,r)&&zr(s,r)&&zr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Hr(n),Hr(n.next),n=i=r),n=n.next}while(n!==i);return ns(n)}function lx(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vx(o,a)){let c=gf(o,a);o=ns(o,o.next),c=ns(c,c.next),Br(o,e,t,n,s,r,0),Br(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function cx(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=pf(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(gx(l));for(s.sort(hx),r=0;r<s.length;r++)t=ux(s[r],t);return t}function hx(i,e){return i.x-e.x}function ux(i,e){let t=fx(i,e);if(!t)return e;let n=gf(t,i);return ns(n,n.next),ns(t,t.next)}function fx(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Ps(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),zr(t,i)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&dx(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function dx(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function px(i,e,t,n){let s=i;do s.z===0&&(s.z=Lc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,mx(s)}function mx(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function Lc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function gx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ps(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function vx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!xx(i,e)&&(zr(i,e)&&zr(e,i)&&_x(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||Ta(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ta(i,e){return i.x===e.x&&i.y===e.y}function mf(i,e,t,n){let s=Bo(Dt(i,e,t)),r=Bo(Dt(i,e,n)),o=Bo(Dt(t,n,i)),a=Bo(Dt(t,n,e));return!!(s!==r&&o!==a||s===0&&Oo(i,t,e)||r===0&&Oo(i,n,e)||o===0&&Oo(t,i,n)||a===0&&Oo(t,e,n))}function Oo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Bo(i){return i>0?1:i<0?-1:0}function xx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&mf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function zr(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function _x(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function gf(i,e){let t=new Nc(i.i,i.x,i.y),n=new Nc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Bu(i,e,t,n){let s=new Nc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function yx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ar=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];zu(e),Hu(n,e);let o=e.length;t.forEach(zu);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Hu(n,t[c]);let a=sx.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function zu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Hu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Vs=class i extends Ct{constructor(e=new Hi([new Te(.5,.5),new Te(-.5,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new mt(s,3)),this.setAttribute("uv",new mt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,R=t.UVGenerator!==void 0?t.UVGenerator:Mx,E,S=!1,F,D,L,T;g&&(E=g.getSpacedPoints(h),S=!0,d=!1,F=g.computeFrenetFrames(h,!1),D=new I,L=new I,T=new I),d||(m=0,p=0,v=0,_=0);let M=a.extractPoints(l),y=M.shape,C=M.holes;if(!Ar.isClockWise(y)){y=y.reverse();for(let ue=0,Ae=C.length;ue<Ae;ue++){let O=C[ue];Ar.isClockWise(O)&&(C[ue]=O.reverse())}}let V=Ar.triangulateShape(y,C),X=y;for(let ue=0,Ae=C.length;ue<Ae;ue++){let O=C[ue];y=y.concat(O)}function re(ue,Ae,O){return Ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),ue.clone().addScaledVector(Ae,O)}let N=y.length,Q=V.length;function k(ue,Ae,O){let Ve,we,Ge,Le=ue.x-Ae.x,Je=ue.y-Ae.y,Oe=O.x-ue.x,U=O.y-ue.y,b=Le*Le+Je*Je,q=Le*U-Je*Oe;if(Math.abs(q)>Number.EPSILON){let ce=Math.sqrt(b),ye=Math.sqrt(Oe*Oe+U*U),fe=Ae.x-Je/ce,Ye=Ae.y+Le/ce,W=O.x-U/ye,J=O.y+Oe/ye,ve=((W-fe)*U-(J-Ye)*Oe)/(Le*U-Je*Oe);Ve=fe+Le*ve-ue.x,we=Ye+Je*ve-ue.y;let K=Ve*Ve+we*we;if(K<=2)return new Te(Ve,we);Ge=Math.sqrt(K/2)}else{let ce=!1;Le>Number.EPSILON?Oe>Number.EPSILON&&(ce=!0):Le<-Number.EPSILON?Oe<-Number.EPSILON&&(ce=!0):Math.sign(Je)===Math.sign(U)&&(ce=!0),ce?(Ve=-Je,we=Le,Ge=Math.sqrt(b)):(Ve=Le,we=Je,Ge=Math.sqrt(b/2))}return new Te(Ve/Ge,we/Ge)}let Y=[];for(let ue=0,Ae=X.length,O=Ae-1,Ve=ue+1;ue<Ae;ue++,O++,Ve++)O===Ae&&(O=0),Ve===Ae&&(Ve=0),Y[ue]=k(X[ue],X[O],X[Ve]);let se=[],te,Ie=Y.concat();for(let ue=0,Ae=C.length;ue<Ae;ue++){let O=C[ue];te=[];for(let Ve=0,we=O.length,Ge=we-1,Le=Ve+1;Ve<we;Ve++,Ge++,Le++)Ge===we&&(Ge=0),Le===we&&(Le=0),te[Ve]=k(O[Ve],O[Ge],O[Le]);se.push(te),Ie=Ie.concat(te)}for(let ue=0;ue<m;ue++){let Ae=ue/m,O=p*Math.cos(Ae*Math.PI/2),Ve=v*Math.sin(Ae*Math.PI/2)+_;for(let we=0,Ge=X.length;we<Ge;we++){let Le=re(X[we],Y[we],Ve);xe(Le.x,Le.y,-O)}for(let we=0,Ge=C.length;we<Ge;we++){let Le=C[we];te=se[we];for(let Je=0,Oe=Le.length;Je<Oe;Je++){let U=re(Le[Je],te[Je],Ve);xe(U.x,U.y,-O)}}}let qe=v+_;for(let ue=0;ue<N;ue++){let Ae=d?re(y[ue],Ie[ue],qe):y[ue];S?(L.copy(F.normals[0]).multiplyScalar(Ae.x),D.copy(F.binormals[0]).multiplyScalar(Ae.y),T.copy(E[0]).add(L).add(D),xe(T.x,T.y,T.z)):xe(Ae.x,Ae.y,0)}for(let ue=1;ue<=h;ue++)for(let Ae=0;Ae<N;Ae++){let O=d?re(y[Ae],Ie[Ae],qe):y[Ae];S?(L.copy(F.normals[ue]).multiplyScalar(O.x),D.copy(F.binormals[ue]).multiplyScalar(O.y),T.copy(E[ue]).add(L).add(D),xe(T.x,T.y,T.z)):xe(O.x,O.y,f/h*ue)}for(let ue=m-1;ue>=0;ue--){let Ae=ue/m,O=p*Math.cos(Ae*Math.PI/2),Ve=v*Math.sin(Ae*Math.PI/2)+_;for(let we=0,Ge=X.length;we<Ge;we++){let Le=re(X[we],Y[we],Ve);xe(Le.x,Le.y,f+O)}for(let we=0,Ge=C.length;we<Ge;we++){let Le=C[we];te=se[we];for(let Je=0,Oe=Le.length;Je<Oe;Je++){let U=re(Le[Je],te[Je],Ve);S?xe(U.x,U.y+E[h-1].y,E[h-1].x+O):xe(U.x,U.y,f+O)}}}le(),_e();function le(){let ue=s.length/3;if(d){let Ae=0,O=N*Ae;for(let Ve=0;Ve<Q;Ve++){let we=V[Ve];Fe(we[2]+O,we[1]+O,we[0]+O)}Ae=h+m*2,O=N*Ae;for(let Ve=0;Ve<Q;Ve++){let we=V[Ve];Fe(we[0]+O,we[1]+O,we[2]+O)}}else{for(let Ae=0;Ae<Q;Ae++){let O=V[Ae];Fe(O[2],O[1],O[0])}for(let Ae=0;Ae<Q;Ae++){let O=V[Ae];Fe(O[0]+N*h,O[1]+N*h,O[2]+N*h)}}n.addGroup(ue,s.length/3-ue,0)}function _e(){let ue=s.length/3,Ae=0;be(X,Ae),Ae+=X.length;for(let O=0,Ve=C.length;O<Ve;O++){let we=C[O];be(we,Ae),Ae+=we.length}n.addGroup(ue,s.length/3-ue,1)}function be(ue,Ae){let O=ue.length;for(;--O>=0;){let Ve=O,we=O-1;we<0&&(we=ue.length-1);for(let Ge=0,Le=h+m*2;Ge<Le;Ge++){let Je=N*Ge,Oe=N*(Ge+1),U=Ae+Ve+Je,b=Ae+we+Je,q=Ae+we+Oe,ce=Ae+Ve+Oe;Xe(U,b,q,ce)}}}function xe(ue,Ae,O){c.push(ue),c.push(Ae),c.push(O)}function Fe(ue,Ae,O){Ze(ue),Ze(Ae),Ze(O);let Ve=s.length/3,we=R.generateTopUV(n,s,Ve-3,Ve-2,Ve-1);et(we[0]),et(we[1]),et(we[2])}function Xe(ue,Ae,O,Ve){Ze(ue),Ze(Ae),Ze(Ve),Ze(Ae),Ze(O),Ze(Ve);let we=s.length/3,Ge=R.generateSideWallUV(n,s,we-6,we-3,we-2,we-1);et(Ge[0]),et(Ge[1]),et(Ge[3]),et(Ge[1]),et(Ge[2]),et(Ge[3])}function Ze(ue){s.push(c[ue*3+0]),s.push(c[ue*3+1]),s.push(c[ue*3+2])}function et(ue){r.push(ue.x),r.push(ue.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Sx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Dc[s.type]().fromJSON(s)),new i(n,e.options)}},Mx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new Te(r,o),new Te(a,c),new Te(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],f=e[n*3+2],d=e[s*3],p=e[s*3+1],v=e[s*3+2],_=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Te(o,1-c),new Te(l,1-f),new Te(d,1-v),new Te(_,1-g)]:[new Te(a,1-c),new Te(h,1-f),new Te(p,1-v),new Te(m,1-g)]}};function Sx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var dn=class i extends Ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new I,d=new I,p=[],v=[],_=[],m=[];for(let g=0;g<=n;g++){let R=[],E=g/n,S=0;g===0&&o===0?S=.5/t:g===n&&c===Math.PI&&(S=-.5/t);for(let F=0;F<=t;F++){let D=F/t;f.x=-e*Math.cos(s+D*r)*Math.sin(o+E*a),f.y=e*Math.cos(o+E*a),f.z=e*Math.sin(s+D*r)*Math.sin(o+E*a),v.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(D+S,1-E),R.push(l++)}h.push(R)}for(let g=0;g<n;g++)for(let R=0;R<t;R++){let E=h[g][R+1],S=h[g][R],F=h[g+1][R],D=h[g+1][R+1];(g!==0||o>0)&&p.push(E,S,D),(g!==n-1||c<Math.PI)&&p.push(S,F,D)}this.setIndex(p),this.setAttribute("position",new mt(v,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ki=class i extends Ct{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new I,f=new I,d=new I;for(let p=0;p<=n;p++)for(let v=0;v<=s;v++){let _=v/s*r,m=p/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(f,h).normalize(),c.push(d.x,d.y,d.z),l.push(v/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let v=1;v<=s;v++){let _=(s+1)*p+v-1,m=(s+1)*(p-1)+v-1,g=(s+1)*(p-1)+v,R=(s+1)*p+v;o.push(_,m,R),o.push(m,g,R)}this.setIndex(o),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var da=class extends yt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},nt=class extends Hn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fh,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},pn=class extends nt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var pa=class extends Hn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fh,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function zo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ex(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Gs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fc=class extends Gs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ih,endingEnd:Ih}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dh:r=e,a=2*t-n;break;case Uh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Dh:o=e,c=2*n-t;break;case Uh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,v=(n-t)/(s-t),_=v*v,m=_*v,g=-d*m+2*d*_-d*v,R=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*v+1,E=(-1-p)*m+(1.5+p)*_+.5*v,S=p*m-p*_;for(let F=0;F!==a;++F)r[F]=g*o[h+F]+R*o[l+F]+E*o[c+F]+S*o[f+F];return r}},Oc=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*f+o[c+d]*h;return r}},Bc=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},kn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zo(t,this.TimeBufferType),this.values=zo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zo(e.times,Array),values:zo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xo:t=this.InterpolantFactoryMethodDiscrete;break;case cc:t=this.InterpolantFactoryMethodLinear;break;case Xa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xo;case this.InterpolantFactoryMethodLinear:return cc;case this.InterpolantFactoryMethodSmooth:return Xa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Ex(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xa,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*n,d=f-n,p=f+n;for(let v=0;v!==n;++v){let _=t[f+v];if(_!==t[d+v]||_!==t[p+v]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[f+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=cc;var is=class extends kn{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Xo;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var zc=class extends kn{};zc.prototype.ValueTypeName="color";var Hc=class extends kn{};Hc.prototype.ValueTypeName="number";var kc=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)zt.slerpFlat(r,0,o,l-a,o,l,c);return r}},ma=class extends kn{InterpolantFactoryMethodLinear(e){return new kc(this.times,this.values,this.getValueSize(),e)}};ma.prototype.ValueTypeName="quaternion";ma.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends kn{constructor(e,t,n){super(e,t,n)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Xo;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Vc=class extends kn{};Vc.prototype.ValueTypeName="vector";var ga={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Gc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){let p=l[f],v=l[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null}}},wx=new Gc,rs=class{constructor(e){this.manager=e!==void 0?e:wx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};rs.DEFAULT_MATERIAL_NAME="__DEFAULT";var ui={},Wc=class extends Error{constructor(e,t){super(e),this.response=t}},Xc=class extends rs{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ga.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:n,onError:s});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ui[e],f=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,v=p!==0,_=0,m=new ReadableStream({start(g){R();function R(){f.read().then(({done:E,value:S})=>{if(E)g.close();else{_+=S.byteLength;let F=new ProgressEvent("progress",{lengthComputable:v,loaded:_,total:p});for(let D=0,L=h.length;D<L;D++){let T=h[D];T.onProgress&&T.onProgress(F)}g.enqueue(S),R()}},E=>{g.error(E)})}}});return new Response(m)}else throw new Wc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(v=>p.decode(v))}}}).then(l=>{ga.add(e,l);let h=ui[e];delete ui[e];for(let f=0,d=h.length;f<d;f++){let p=h[f];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=ui[e];if(h===void 0)throw this.manager.itemError(e),l;delete ui[e];for(let f=0,d=h.length;f<d;f++){let p=h[f];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Yc=class extends rs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ga.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Cr("img");function c(){h(),ga.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(f){h(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var va=class extends rs{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new Qn,a=new Xc(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:Bn,o.wrapT=l.wrapT!==void 0?l.wrapT:Bn,o.magFilter=l.magFilter!==void 0?l.magFilter:en,o.minFilter=l.minFilter!==void 0?l.minFilter:en,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=Di),l.mipmapCount===1&&(o.minFilter=en),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,s),o}},Ws=class extends rs{constructor(e){super(e)}load(e,t,n,s){let r=new tn,o=new Yc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Xs=class extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},xa=class extends Xs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},El=new je,ku=new I,Vu=new I,kr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(ku),Vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vu),t.updateMatrixWorld(),El.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(El),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(El)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qc=class extends kr{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Bs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},_a=class extends Xs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new qc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Gu=new je,_r=new I,wl=new I,Zc=class extends kr{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_r.setFromMatrixPosition(e.matrixWorld),n.position.copy(_r),wl.copy(n.position),wl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(wl),n.updateMatrixWorld(),s.makeTranslation(-_r.x,-_r.y,-_r.z),Gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gu)}},Ys=class extends Xs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},$c=class extends kr{constructor(){super(new Hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ya=class extends Xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new $c}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var qs=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Wu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Wu(){return performance.now()}var vh="\\[\\]\\.:\\/",bx=new RegExp("["+vh+"]","g"),xh="[^"+vh+"]",Tx="[^"+vh.replace("\\.","")+"]",Ax=/((?:WC+[\/:])*)/.source.replace("WC",xh),Rx=/(WCOD+)?/.source.replace("WCOD",Tx),Cx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh),Px=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh),Ix=new RegExp("^"+Ax+Rx+Cx+Px+"$"),Dx=["material","materials","bones","map"],Jc=class{constructor(e,t,n){let s=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bx,"")}static parseTrackName(e){let t=Ix.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Dx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Jc;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);var Wr=class i extends $e{constructor(){let e=i.SkyShader,t=new yt({name:e.name,uniforms:$t.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Nt,depthWrite:!1});super(new ze(1,1,1),t),this.isSky=!0}};Wr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new I},up:{value:new I(0,1,0)}},vertexShader:`
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

		}`};var Aa=class extends zi{constructor(){super();let e=new ze;e.deleteAttribute("uv");let t=new nt({side:Nt}),n=new nt,s=new Ys(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new $e(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new $e(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new $e(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new $e(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new $e(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new $e(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let f=new $e(e,n);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let d=new $e(e,Ks(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let p=new $e(e,Ks(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let v=new $e(e,Ks(17));v.position.set(14.904,12.198,-1.832),v.scale.set(.15,4.265,6.331),this.add(v);let _=new $e(e,Ks(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let m=new $e(e,Ks(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let g=new $e(e,Ks(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ks(i){let e=new xn;return e.color.setScalar(i),e}var Gi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var mn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ux=new Hs(-1,1,1,-1,0,1),_h=class extends Ct{constructor(){super(),this.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mt([0,2,0,0,2,0],2))}},Lx=new _h,jn=class{constructor(e){this._mesh=new $e(Lx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ux)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Qs=class extends mn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=$t.clone(e.uniforms),this.material=new yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new jn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Xr=class extends mn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ra=class extends mn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ca=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Te);this._width=n.width,this._height=n.height,t=new Ft(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ht}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qs(Gi),this.copyPass.material.blending=Yt,this.clock=new qs}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Xr!==void 0&&(o instanceof Xr?n=!0:o instanceof Ra&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Pa=class extends mn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new We}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var vf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new We(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var js=class i extends mn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Te(e.x,e.y):new Te(256,256),this.clearColor=new We(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ft(r,o,{type:Ht}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let d=new Ft(r,o,{type:Ht});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new Ft(r,o,{type:Ht});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=vf;this.highPassUniforms=$t.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Te(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Gi;this.copyUniforms=$t.clone(h.uniforms),this.blendMaterial=new yt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Jn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new We,this.oldClearAlpha=1,this.basic=new xn,this.fsQuad=new jn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Te(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Te(.5,.5)},direction:{value:new Te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};js.BlurDirectionX=new Te(1,0);js.BlurDirectionY=new Te(0,1);var xf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ia=class extends mn{constructor(){super();let e=xf;this.uniforms=$t.clone(e.uniforms),this.material=new da({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new jn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ft.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===eh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===th?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===nh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ih?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===sh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Yr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Te},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new je},cameraProjectionMatrixInverse:{value:new je},cameraWorldMatrix:{value:new je},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new I(-1,-1,-1)},sceneBoxMax:{value:new I(1,1,1)}},vertexShader:`

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
		}`},qr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Da={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function _f(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Nx(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],c=2*Math.PI*a/n,l=new I(Math.cos(c),Math.sin(c),0).normalize();s[o*4]=(l.x*.5+.5)*255,s[o*4+1]=(l.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Qn(s,e,e);return r.wrapS=un,r.wrapT=un,r.needsUpdate=!0,r}function Nx(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var Zr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:yh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Te},cameraProjectionMatrixInverse:{value:new je},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function yh(i,e,t){let n=Fx(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function Fx(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new I(Math.cos(r),Math.sin(r),o))}return n}var Ua=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),l=Math.floor(t+a),h=(3-Math.sqrt(3))/6,f=(c+l)*h,d=c-f,p=l-f,v=e-d,_=t-p,m,g;v>_?(m=1,g=0):(m=0,g=1);let R=v-m+h,E=_-g+h,S=v-1+2*h,F=_-1+2*h,D=c&255,L=l&255,T=this.perm[D+this.perm[L]]%12,M=this.perm[D+m+this.perm[L+g]]%12,y=this.perm[D+1+this.perm[L+1]]%12,C=.5-v*v-_*_;C<0?n=0:(C*=C,n=C*C*this.dot(this.grad3[T],v,_));let B=.5-R*R-E*E;B<0?s=0:(B*=B,s=B*B*this.dot(this.grad3[M],R,E));let V=.5-S*S-F*F;return V<0?r=0:(V*=V,r=V*V*this.dot(this.grad3[y],S,F)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),f=Math.floor(t+l),d=Math.floor(n+l),p=1/6,v=(h+f+d)*p,_=h-v,m=f-v,g=d-v,R=e-_,E=t-m,S=n-g,F,D,L,T,M,y;R>=E?E>=S?(F=1,D=0,L=0,T=1,M=1,y=0):R>=S?(F=1,D=0,L=0,T=1,M=0,y=1):(F=0,D=0,L=1,T=1,M=0,y=1):E<S?(F=0,D=0,L=1,T=0,M=1,y=1):R<S?(F=0,D=1,L=0,T=0,M=1,y=1):(F=0,D=1,L=0,T=1,M=1,y=0);let C=R-F+p,B=E-D+p,V=S-L+p,X=R-T+2*p,re=E-M+2*p,N=S-y+2*p,Q=R-1+3*p,k=E-1+3*p,Y=S-1+3*p,se=h&255,te=f&255,Ie=d&255,qe=this.perm[se+this.perm[te+this.perm[Ie]]]%12,le=this.perm[se+F+this.perm[te+D+this.perm[Ie+L]]]%12,_e=this.perm[se+T+this.perm[te+M+this.perm[Ie+y]]]%12,be=this.perm[se+1+this.perm[te+1+this.perm[Ie+1]]]%12,xe=.6-R*R-E*E-S*S;xe<0?s=0:(xe*=xe,s=xe*xe*this.dot3(this.grad3[qe],R,E,S));let Fe=.6-C*C-B*B-V*V;Fe<0?r=0:(Fe*=Fe,r=Fe*Fe*this.dot3(this.grad3[le],C,B,V));let Xe=.6-X*X-re*re-N*N;Xe<0?o=0:(Xe*=Xe,o=Xe*Xe*this.dot3(this.grad3[_e],X,re,N));let Ze=.6-Q*Q-k*k-Y*Y;return Ze<0?a=0:(Ze*=Ze,a=Ze*Ze*this.dot3(this.grad3[be],Q,k,Y)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,f,d,p,v,_=(e+t+n+s)*c,m=Math.floor(e+_),g=Math.floor(t+_),R=Math.floor(n+_),E=Math.floor(s+_),S=(m+g+R+E)*l,F=m-S,D=g-S,L=R-S,T=E-S,M=e-F,y=t-D,C=n-L,B=s-T,V=M>y?32:0,X=M>C?16:0,re=y>C?8:0,N=M>B?4:0,Q=y>B?2:0,k=C>B?1:0,Y=V+X+re+N+Q+k,se=o[Y][0]>=3?1:0,te=o[Y][1]>=3?1:0,Ie=o[Y][2]>=3?1:0,qe=o[Y][3]>=3?1:0,le=o[Y][0]>=2?1:0,_e=o[Y][1]>=2?1:0,be=o[Y][2]>=2?1:0,xe=o[Y][3]>=2?1:0,Fe=o[Y][0]>=1?1:0,Xe=o[Y][1]>=1?1:0,Ze=o[Y][2]>=1?1:0,et=o[Y][3]>=1?1:0,ue=M-se+l,Ae=y-te+l,O=C-Ie+l,Ve=B-qe+l,we=M-le+2*l,Ge=y-_e+2*l,Le=C-be+2*l,Je=B-xe+2*l,Oe=M-Fe+3*l,U=y-Xe+3*l,b=C-Ze+3*l,q=B-et+3*l,ce=M-1+4*l,ye=y-1+4*l,fe=C-1+4*l,Ye=B-1+4*l,W=m&255,J=g&255,ve=R&255,K=E&255,he=a[W+a[J+a[ve+a[K]]]]%32,Me=a[W+se+a[J+te+a[ve+Ie+a[K+qe]]]]%32,$=a[W+le+a[J+_e+a[ve+be+a[K+xe]]]]%32,oe=a[W+Fe+a[J+Xe+a[ve+Ze+a[K+et]]]]%32,ge=a[W+1+a[J+1+a[ve+1+a[K+1]]]]%32,me=.6-M*M-y*y-C*C-B*B;me<0?h=0:(me*=me,h=me*me*this.dot4(r[he],M,y,C,B));let Ee=.6-ue*ue-Ae*Ae-O*O-Ve*Ve;Ee<0?f=0:(Ee*=Ee,f=Ee*Ee*this.dot4(r[Me],ue,Ae,O,Ve));let H=.6-we*we-Ge*Ge-Le*Le-Je*Je;H<0?d=0:(H*=H,d=H*H*this.dot4(r[$],we,Ge,Le,Je));let G=.6-Oe*Oe-U*U-b*b-q*q;G<0?p=0:(G*=G,p=G*G*this.dot4(r[oe],Oe,U,b,q));let ee=.6-ce*ce-ye*ye-fe*fe-Ye*Ye;return ee<0?v=0:(ee*=ee,v=ee*ee*this.dot4(r[ge],ce,ye,fe,Ye)),27*(h+f+d+p+v)}};var $r=class i extends mn{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=_f(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Ft(this.width,this.height,{type:Ht}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new yt({defines:Object.assign({},Yr.defines),uniforms:$t.clone(Yr.uniforms),vertexShader:Yr.vertexShader,fragmentShader:Yr.fragmentShader,blending:Yt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new pa,this.normalMaterial.blending=Yt,this.pdMaterial=new yt({defines:Object.assign({},Zr.defines),uniforms:$t.clone(Zr.uniforms),vertexShader:Zr.vertexShader,fragmentShader:Zr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new yt({defines:Object.assign({},qr.defines),uniforms:$t.clone(qr.uniforms),vertexShader:qr.vertexShader,fragmentShader:qr.fragmentShader,blending:Yt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new yt({uniforms:$t.clone(Gi.uniforms),vertexShader:Gi.vertexShader,fragmentShader:Gi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Sa,blendDst:Zs,blendEquation:Tn,blendSrcAlpha:Ma,blendDstAlpha:Zs,blendEquationAlpha:Tn}),this.blendMaterial=new yt({uniforms:$t.clone(Da.uniforms),vertexShader:Da.vertexShader,fragmentShader:Da.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:jc,blendSrc:Sa,blendDst:Zs,blendEquation:Tn,blendSrcAlpha:Ma,blendDstAlpha:Zs,blendEquationAlpha:Tn}),this.fsQuad=new jn(null),this.originalClearColor=new We,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Bi,this.depthTexture.format=Ni,this.depthTexture.type=Li,this.normalRenderTarget=new Ft(this.width,this.height,{minFilter:an,magFilter:an,type:Ht,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=yh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Yt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Yt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Yt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Yt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Yt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new Ua,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let c=o,l=a;s[(o*e+a)*4]=(t.noise(c,l)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new Qn(s,e,e,hn,zn);return r.wrapS=un,r.wrapT=un,r.needsUpdate=!0,r}};$r.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Cn=Uint8Array,er=Uint16Array,Ox=Int32Array,yf=new Cn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Mf=new Cn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Bx=new Cn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Sf=function(i,e){for(var t=new er(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new Ox(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},Ef=Sf(yf,2),wf=Ef.b,zx=Ef.r;wf[28]=258,zx[258]=28;var bf=Sf(Mf,0),Hx=bf.b,ry=bf.r,Eh=new er(32768);for(Mt=0;Mt<32768;++Mt)yi=(Mt&43690)>>1|(Mt&21845)<<1,yi=(yi&52428)>>2|(yi&13107)<<2,yi=(yi&61680)>>4|(yi&3855)<<4,Eh[Mt]=((yi&65280)>>8|(yi&255)<<8)>>1;var yi,Mt,Jr=function(i,e,t){for(var n=i.length,s=0,r=new er(e);s<n;++s)i[s]&&++r[i[s]-1];var o=new er(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new er(1<<e);var c=15-e;for(s=0;s<n;++s)if(i[s])for(var l=s<<4|i[s],h=e-i[s],f=o[i[s]-1]++<<h,d=f|(1<<h)-1;f<=d;++f)a[Eh[f]>>c]=l}else for(a=new er(n),s=0;s<n;++s)i[s]&&(a[s]=Eh[o[i[s]-1]++]>>15-i[s]);return a},Kr=new Cn(288);for(Mt=0;Mt<144;++Mt)Kr[Mt]=8;var Mt;for(Mt=144;Mt<256;++Mt)Kr[Mt]=9;var Mt;for(Mt=256;Mt<280;++Mt)Kr[Mt]=7;var Mt;for(Mt=280;Mt<288;++Mt)Kr[Mt]=8;var Mt,Tf=new Cn(32);for(Mt=0;Mt<32;++Mt)Tf[Mt]=5;var Mt;var kx=Jr(Kr,9,1);var Vx=Jr(Tf,5,1),Mh=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Vn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Sh=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Gx=function(i){return(i+7)/8|0},Wx=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new Cn(i.subarray(e,t))};var Xx=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Gn=function(i,e,t){var n=new Error(e||Xx[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Gn),!t)throw n;return n},Yx=function(i,e,t,n){var s=i.length,r=n?n.length:0;if(!s||e.f&&!e.l)return t||new Cn(0);var o=!t,a=o||e.i!=2,c=e.i;o&&(t=new Cn(s*3));var l=function(et){var ue=t.length;if(et>ue){var Ae=new Cn(Math.max(ue*2,et));Ae.set(t),t=Ae}},h=e.f||0,f=e.p||0,d=e.b||0,p=e.l,v=e.d,_=e.m,m=e.n,g=s*8;do{if(!p){h=Vn(i,f,1);var R=Vn(i,f+1,3);if(f+=3,R)if(R==1)p=kx,v=Vx,_=9,m=5;else if(R==2){var D=Vn(i,f,31)+257,L=Vn(i,f+10,15)+4,T=D+Vn(i,f+5,31)+1;f+=14;for(var M=new Cn(T),y=new Cn(19),C=0;C<L;++C)y[Bx[C]]=Vn(i,f+C*3,7);f+=L*3;for(var B=Mh(y),V=(1<<B)-1,X=Jr(y,B,1),C=0;C<T;){var re=X[Vn(i,f,V)];f+=re&15;var E=re>>4;if(E<16)M[C++]=E;else{var N=0,Q=0;for(E==16?(Q=3+Vn(i,f,3),f+=2,N=M[C-1]):E==17?(Q=3+Vn(i,f,7),f+=3):E==18&&(Q=11+Vn(i,f,127),f+=7);Q--;)M[C++]=N}}var k=M.subarray(0,D),Y=M.subarray(D);_=Mh(k),m=Mh(Y),p=Jr(k,_,1),v=Jr(Y,m,1)}else Gn(1);else{var E=Gx(f)+4,S=i[E-4]|i[E-3]<<8,F=E+S;if(F>s){c&&Gn(0);break}a&&l(d+S),t.set(i.subarray(E,F),d),e.b=d+=S,e.p=f=F*8,e.f=h;continue}if(f>g){c&&Gn(0);break}}a&&l(d+131072);for(var se=(1<<_)-1,te=(1<<m)-1,Ie=f;;Ie=f){var N=p[Sh(i,f)&se],qe=N>>4;if(f+=N&15,f>g){c&&Gn(0);break}if(N||Gn(2),qe<256)t[d++]=qe;else if(qe==256){Ie=f,p=null;break}else{var le=qe-254;if(qe>264){var C=qe-257,_e=yf[C];le=Vn(i,f,(1<<_e)-1)+wf[C],f+=_e}var be=v[Sh(i,f)&te],xe=be>>4;be||Gn(3),f+=be&15;var Y=Hx[xe];if(xe>3){var _e=Mf[xe];Y+=Sh(i,f)&(1<<_e)-1,f+=_e}if(f>g){c&&Gn(0);break}a&&l(d+131072);var Fe=d+le;if(d<Y){var Xe=r-Y,Ze=Math.min(Y,Fe);for(Xe+d<0&&Gn(3);d<Ze;++d)t[d]=n[Xe+d]}for(;d<Fe;++d)t[d]=t[d-Y]}}e.l=p,e.p=Ie,e.b=d,e.f=h,p&&(h=1,e.m=_,e.d=v,e.n=m)}while(!h);return d!=t.length&&o?Wx(t,0,d):t.subarray(0,d)};var qx=new Cn(0);var Zx=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Gn(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&Gn(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function Qr(i,e){return Yx(i.subarray(Zx(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var $x=typeof TextDecoder<"u"&&new TextDecoder,Jx=0;try{$x.decode(qx,{stream:!0}),Jx=1}catch{}var La=class extends va{constructor(e){super(e),this.type=Ht}parse(e){let M=Math.pow(2.7182818,2.2);function y(u,x){let w=0;for(let P=0;P<65536;++P)(P==0||u[P>>3]&1<<(P&7))&&(x[w++]=P);let A=w-1;for(;w<65536;)x[w++]=0;return A}function C(u){for(let x=0;x<16384;x++)u[x]={},u[x].len=0,u[x].lit=0,u[x].p=null}let B={l:0,c:0,lc:0};function V(u,x,w,A,P){for(;w<u;)x=x<<8|oe(A,P),w+=8;w-=u,B.l=x>>w&(1<<u)-1,B.c=x,B.lc=w}let X=new Array(59);function re(u){for(let w=0;w<=58;++w)X[w]=0;for(let w=0;w<65537;++w)X[u[w]]+=1;let x=0;for(let w=58;w>0;--w){let A=x+X[w]>>1;X[w]=x,x=A}for(let w=0;w<65537;++w){let A=u[w];A>0&&(u[w]=A|X[A]++<<6)}}function N(u,x,w,A,P,z){let Z=x,ae=0,j=0;for(;A<=P;A++){if(Z.value-x.value>w)return!1;V(6,ae,j,u,Z);let ne=B.l;if(ae=B.c,j=B.lc,z[A]=ne,ne==63){if(Z.value-x.value>w)throw new Error("Something wrong with hufUnpackEncTable");V(8,ae,j,u,Z);let ie=B.l+6;if(ae=B.c,j=B.lc,A+ie>P+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ie--;)z[A++]=0;A--}else if(ne>=59){let ie=ne-59+2;if(A+ie>P+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ie--;)z[A++]=0;A--}}re(z)}function Q(u){return u&63}function k(u){return u>>6}function Y(u,x,w,A){for(;x<=w;x++){let P=k(u[x]),z=Q(u[x]);if(P>>z)throw new Error("Invalid table entry");if(z>14){let Z=A[P>>z-14];if(Z.len)throw new Error("Invalid table entry");if(Z.lit++,Z.p){let ae=Z.p;Z.p=new Array(Z.lit);for(let j=0;j<Z.lit-1;++j)Z.p[j]=ae[j]}else Z.p=new Array(1);Z.p[Z.lit-1]=x}else if(z){let Z=0;for(let ae=1<<14-z;ae>0;ae--){let j=A[(P<<14-z)+Z];if(j.len||j.p)throw new Error("Invalid table entry");j.len=z,j.lit=x,Z++}}}return!0}let se={c:0,lc:0};function te(u,x,w,A){u=u<<8|oe(w,A),x+=8,se.c=u,se.lc=x}let Ie={c:0,lc:0};function qe(u,x,w,A,P,z,Z,ae,j){if(u==x){A<8&&(te(w,A,P,z),w=se.c,A=se.lc),A-=8;let ne=w>>A;if(ne=new Uint8Array([ne])[0],ae.value+ne>j)return!1;let ie=Z[ae.value-1];for(;ne-- >0;)Z[ae.value++]=ie}else if(ae.value<j)Z[ae.value++]=u;else return!1;Ie.c=w,Ie.lc=A}function le(u){return u&65535}function _e(u){let x=le(u);return x>32767?x-65536:x}let be={a:0,b:0};function xe(u,x){let w=_e(u),P=_e(x),z=w+(P&1)+(P>>1),Z=z,ae=z-P;be.a=Z,be.b=ae}function Fe(u,x){let w=le(u),A=le(x),P=w-(A>>1)&65535,z=A+P-32768&65535;be.a=z,be.b=P}function Xe(u,x,w,A,P,z,Z){let ae=Z<16384,j=w>P?P:w,ne=1,ie,de;for(;ne<=j;)ne<<=1;for(ne>>=1,ie=ne,ne>>=1;ne>=1;){de=0;let Pe=de+z*(P-ie),De=z*ne,Be=z*ie,Ne=A*ne,Ue=A*ie,Re,ot,Ke,At;for(;de<=Pe;de+=Be){let gt=de,tt=de+A*(w-ie);for(;gt<=tt;gt+=Ue){let Rt=gt+Ne,at=gt+De,Et=at+Ne;ae?(xe(u[gt+x],u[at+x]),Re=be.a,Ke=be.b,xe(u[Rt+x],u[Et+x]),ot=be.a,At=be.b,xe(Re,ot),u[gt+x]=be.a,u[Rt+x]=be.b,xe(Ke,At),u[at+x]=be.a,u[Et+x]=be.b):(Fe(u[gt+x],u[at+x]),Re=be.a,Ke=be.b,Fe(u[Rt+x],u[Et+x]),ot=be.a,At=be.b,Fe(Re,ot),u[gt+x]=be.a,u[Rt+x]=be.b,Fe(Ke,At),u[at+x]=be.a,u[Et+x]=be.b)}if(w&ne){let Rt=gt+De;ae?xe(u[gt+x],u[Rt+x]):Fe(u[gt+x],u[Rt+x]),Re=be.a,u[Rt+x]=be.b,u[gt+x]=Re}}if(P&ne){let gt=de,tt=de+A*(w-ie);for(;gt<=tt;gt+=Ue){let Rt=gt+Ne;ae?xe(u[gt+x],u[Rt+x]):Fe(u[gt+x],u[Rt+x]),Re=be.a,u[Rt+x]=be.b,u[gt+x]=Re}}ie=ne,ne>>=1}return de}function Ze(u,x,w,A,P,z,Z,ae,j){let ne=0,ie=0,de=Z,Pe=Math.trunc(A.value+(P+7)/8);for(;A.value<Pe;)for(te(ne,ie,w,A),ne=se.c,ie=se.lc;ie>=14;){let Be=ne>>ie-14&16383,Ne=x[Be];if(Ne.len)ie-=Ne.len,qe(Ne.lit,z,ne,ie,w,A,ae,j,de),ne=Ie.c,ie=Ie.lc;else{if(!Ne.p)throw new Error("hufDecode issues");let Ue;for(Ue=0;Ue<Ne.lit;Ue++){let Re=Q(u[Ne.p[Ue]]);for(;ie<Re&&A.value<Pe;)te(ne,ie,w,A),ne=se.c,ie=se.lc;if(ie>=Re&&k(u[Ne.p[Ue]])==(ne>>ie-Re&(1<<Re)-1)){ie-=Re,qe(Ne.p[Ue],z,ne,ie,w,A,ae,j,de),ne=Ie.c,ie=Ie.lc;break}}if(Ue==Ne.lit)throw new Error("hufDecode issues")}}let De=8-P&7;for(ne>>=De,ie-=De;ie>0;){let Be=x[ne<<14-ie&16383];if(Be.len)ie-=Be.len,qe(Be.lit,z,ne,ie,w,A,ae,j,de),ne=Ie.c,ie=Ie.lc;else throw new Error("hufDecode issues")}return!0}function et(u,x,w,A,P,z){let Z={value:0},ae=w.value,j=$(x,w),ne=$(x,w);w.value+=4;let ie=$(x,w);if(w.value+=4,j<0||j>=65537||ne<0||ne>=65537)throw new Error("Something wrong with HUF_ENCSIZE");let de=new Array(65537),Pe=new Array(16384);C(Pe);let De=A-(w.value-ae);if(N(u,w,De,j,ne,de),ie>8*(A-(w.value-ae)))throw new Error("Something wrong with hufUncompress");Y(de,j,ne,Pe),Ze(de,Pe,u,w,ie,ne,z,P,Z)}function ue(u,x,w){for(let A=0;A<w;++A)x[A]=u[x[A]]}function Ae(u){for(let x=1;x<u.length;x++){let w=u[x-1]+u[x]-128;u[x]=w}}function O(u,x){let w=0,A=Math.floor((u.length+1)/2),P=0,z=u.length-1;for(;!(P>z||(x[P++]=u[w++],P>z));)x[P++]=u[A++]}function Ve(u){let x=u.byteLength,w=new Array,A=0,P=new DataView(u);for(;x>0;){let z=P.getInt8(A++);if(z<0){let Z=-z;x-=Z+1;for(let ae=0;ae<Z;ae++)w.push(P.getUint8(A++))}else{let Z=z;x-=2;let ae=P.getUint8(A++);for(let j=0;j<Z+1;j++)w.push(ae)}}return w}function we(u,x,w,A,P,z){let Z=new DataView(z.buffer),ae=w[u.idx[0]].width,j=w[u.idx[0]].height,ne=3,ie=Math.floor(ae/8),de=Math.ceil(ae/8),Pe=Math.ceil(j/8),De=ae-(de-1)*8,Be=j-(Pe-1)*8,Ne={value:0},Ue=new Array(ne),Re=new Array(ne),ot=new Array(ne),Ke=new Array(ne),At=new Array(ne);for(let tt=0;tt<ne;++tt)At[tt]=x[u.idx[tt]],Ue[tt]=tt<1?0:Ue[tt-1]+de*Pe,Re[tt]=new Float32Array(64),ot[tt]=new Uint16Array(64),Ke[tt]=new Uint16Array(de*64);for(let tt=0;tt<Pe;++tt){let Rt=8;tt==Pe-1&&(Rt=Be);let at=8;for(let ut=0;ut<de;++ut){ut==de-1&&(at=De);for(let rt=0;rt<ne;++rt)ot[rt].fill(0),ot[rt][0]=P[Ue[rt]++],Ge(Ne,A,ot[rt]),Le(ot[rt],Re[rt]),Je(Re[rt]);ne==3&&Oe(Re);for(let rt=0;rt<ne;++rt)U(Re[rt],Ke[rt],ut*64)}let Et=0;for(let ut=0;ut<ne;++ut){let rt=w[u.idx[ut]].type;for(let Kt=8*tt;Kt<8*tt+Rt;++Kt){Et=At[ut][Kt];for(let gn=0;gn<ie;++gn){let Mn=gn*64+(Kt&7)*8;Z.setUint16(Et+0*2*rt,Ke[ut][Mn+0],!0),Z.setUint16(Et+1*2*rt,Ke[ut][Mn+1],!0),Z.setUint16(Et+2*2*rt,Ke[ut][Mn+2],!0),Z.setUint16(Et+3*2*rt,Ke[ut][Mn+3],!0),Z.setUint16(Et+4*2*rt,Ke[ut][Mn+4],!0),Z.setUint16(Et+5*2*rt,Ke[ut][Mn+5],!0),Z.setUint16(Et+6*2*rt,Ke[ut][Mn+6],!0),Z.setUint16(Et+7*2*rt,Ke[ut][Mn+7],!0),Et+=8*2*rt}}if(ie!=de)for(let Kt=8*tt;Kt<8*tt+Rt;++Kt){let gn=At[ut][Kt]+8*ie*2*rt,Mn=ie*64+(Kt&7)*8;for(let ro=0;ro<at;++ro)Z.setUint16(gn+ro*2*rt,Ke[ut][Mn+ro],!0)}}}let gt=new Uint16Array(ae);Z=new DataView(z.buffer);for(let tt=0;tt<ne;++tt){w[u.idx[tt]].decoded=!0;let Rt=w[u.idx[tt]].type;if(w[tt].type==2)for(let at=0;at<j;++at){let Et=At[tt][at];for(let ut=0;ut<ae;++ut)gt[ut]=Z.getUint16(Et+ut*2*Rt,!0);for(let ut=0;ut<ae;++ut)Z.setFloat32(Et+ut*2*Rt,G(gt[ut]),!0)}}}function Ge(u,x,w){let A,P=1;for(;P<64;)A=x[u.value],A==65280?P=64:A>>8==255?P+=A&255:(w[P]=A,P++),u.value++}function Le(u,x){x[0]=G(u[0]),x[1]=G(u[1]),x[2]=G(u[5]),x[3]=G(u[6]),x[4]=G(u[14]),x[5]=G(u[15]),x[6]=G(u[27]),x[7]=G(u[28]),x[8]=G(u[2]),x[9]=G(u[4]),x[10]=G(u[7]),x[11]=G(u[13]),x[12]=G(u[16]),x[13]=G(u[26]),x[14]=G(u[29]),x[15]=G(u[42]),x[16]=G(u[3]),x[17]=G(u[8]),x[18]=G(u[12]),x[19]=G(u[17]),x[20]=G(u[25]),x[21]=G(u[30]),x[22]=G(u[41]),x[23]=G(u[43]),x[24]=G(u[9]),x[25]=G(u[11]),x[26]=G(u[18]),x[27]=G(u[24]),x[28]=G(u[31]),x[29]=G(u[40]),x[30]=G(u[44]),x[31]=G(u[53]),x[32]=G(u[10]),x[33]=G(u[19]),x[34]=G(u[23]),x[35]=G(u[32]),x[36]=G(u[39]),x[37]=G(u[45]),x[38]=G(u[52]),x[39]=G(u[54]),x[40]=G(u[20]),x[41]=G(u[22]),x[42]=G(u[33]),x[43]=G(u[38]),x[44]=G(u[46]),x[45]=G(u[51]),x[46]=G(u[55]),x[47]=G(u[60]),x[48]=G(u[21]),x[49]=G(u[34]),x[50]=G(u[37]),x[51]=G(u[47]),x[52]=G(u[50]),x[53]=G(u[56]),x[54]=G(u[59]),x[55]=G(u[61]),x[56]=G(u[35]),x[57]=G(u[36]),x[58]=G(u[48]),x[59]=G(u[49]),x[60]=G(u[57]),x[61]=G(u[58]),x[62]=G(u[62]),x[63]=G(u[63])}function Je(u){let x=.5*Math.cos(.7853975),w=.5*Math.cos(3.14159/16),A=.5*Math.cos(3.14159/8),P=.5*Math.cos(3*3.14159/16),z=.5*Math.cos(5*3.14159/16),Z=.5*Math.cos(3*3.14159/8),ae=.5*Math.cos(7*3.14159/16),j=new Array(4),ne=new Array(4),ie=new Array(4),de=new Array(4);for(let Pe=0;Pe<8;++Pe){let De=Pe*8;j[0]=A*u[De+2],j[1]=Z*u[De+2],j[2]=A*u[De+6],j[3]=Z*u[De+6],ne[0]=w*u[De+1]+P*u[De+3]+z*u[De+5]+ae*u[De+7],ne[1]=P*u[De+1]-ae*u[De+3]-w*u[De+5]-z*u[De+7],ne[2]=z*u[De+1]-w*u[De+3]+ae*u[De+5]+P*u[De+7],ne[3]=ae*u[De+1]-z*u[De+3]+P*u[De+5]-w*u[De+7],ie[0]=x*(u[De+0]+u[De+4]),ie[3]=x*(u[De+0]-u[De+4]),ie[1]=j[0]+j[3],ie[2]=j[1]-j[2],de[0]=ie[0]+ie[1],de[1]=ie[3]+ie[2],de[2]=ie[3]-ie[2],de[3]=ie[0]-ie[1],u[De+0]=de[0]+ne[0],u[De+1]=de[1]+ne[1],u[De+2]=de[2]+ne[2],u[De+3]=de[3]+ne[3],u[De+4]=de[3]-ne[3],u[De+5]=de[2]-ne[2],u[De+6]=de[1]-ne[1],u[De+7]=de[0]-ne[0]}for(let Pe=0;Pe<8;++Pe)j[0]=A*u[16+Pe],j[1]=Z*u[16+Pe],j[2]=A*u[48+Pe],j[3]=Z*u[48+Pe],ne[0]=w*u[8+Pe]+P*u[24+Pe]+z*u[40+Pe]+ae*u[56+Pe],ne[1]=P*u[8+Pe]-ae*u[24+Pe]-w*u[40+Pe]-z*u[56+Pe],ne[2]=z*u[8+Pe]-w*u[24+Pe]+ae*u[40+Pe]+P*u[56+Pe],ne[3]=ae*u[8+Pe]-z*u[24+Pe]+P*u[40+Pe]-w*u[56+Pe],ie[0]=x*(u[Pe]+u[32+Pe]),ie[3]=x*(u[Pe]-u[32+Pe]),ie[1]=j[0]+j[3],ie[2]=j[1]-j[2],de[0]=ie[0]+ie[1],de[1]=ie[3]+ie[2],de[2]=ie[3]-ie[2],de[3]=ie[0]-ie[1],u[0+Pe]=de[0]+ne[0],u[8+Pe]=de[1]+ne[1],u[16+Pe]=de[2]+ne[2],u[24+Pe]=de[3]+ne[3],u[32+Pe]=de[3]-ne[3],u[40+Pe]=de[2]-ne[2],u[48+Pe]=de[1]-ne[1],u[56+Pe]=de[0]-ne[0]}function Oe(u){for(let x=0;x<64;++x){let w=u[0][x],A=u[1][x],P=u[2][x];u[0][x]=w+1.5747*P,u[1][x]=w-.1873*A-.4682*P,u[2][x]=w+1.8556*A}}function U(u,x,w){for(let A=0;A<64;++A)x[w+A]=ph.toHalfFloat(b(u[A]))}function b(u){return u<=1?Math.sign(u)*Math.pow(Math.abs(u),2.2):Math.sign(u)*Math.pow(M,Math.abs(u)-1)}function q(u){return new DataView(u.array.buffer,u.offset.value,u.size)}function ce(u){let x=u.viewer.buffer.slice(u.offset.value,u.offset.value+u.size),w=new Uint8Array(Ve(x)),A=new Uint8Array(w.length);return Ae(w),O(w,A),new DataView(A.buffer)}function ye(u){let x=u.array.slice(u.offset.value,u.offset.value+u.size),w=Qr(x),A=new Uint8Array(w.length);return Ae(w),O(w,A),new DataView(A.buffer)}function fe(u){let x=u.viewer,w={value:u.offset.value},A=new Uint16Array(u.columns*u.lines*(u.inputChannels.length*u.type)),P=new Uint8Array(8192),z=0,Z=new Array(u.inputChannels.length);for(let Be=0,Ne=u.inputChannels.length;Be<Ne;Be++)Z[Be]={},Z[Be].start=z,Z[Be].end=Z[Be].start,Z[Be].nx=u.columns,Z[Be].ny=u.lines,Z[Be].size=u.type,z+=Z[Be].nx*Z[Be].ny*Z[Be].size;let ae=ee(x,w),j=ee(x,w);if(j>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ae<=j)for(let Be=0;Be<j-ae+1;Be++)P[Be+ae]=ge(x,w);let ne=new Uint16Array(65536),ie=y(P,ne),de=$(x,w);et(u.array,x,w,de,A,z);for(let Be=0;Be<u.inputChannels.length;++Be){let Ne=Z[Be];for(let Ue=0;Ue<Z[Be].size;++Ue)Xe(A,Ne.start+Ue,Ne.nx,Ne.size,Ne.ny,Ne.nx*Ne.size,ie)}ue(ne,A,z);let Pe=0,De=new Uint8Array(A.buffer.byteLength);for(let Be=0;Be<u.lines;Be++)for(let Ne=0;Ne<u.inputChannels.length;Ne++){let Ue=Z[Ne],Re=Ue.nx*Ue.size,ot=new Uint8Array(A.buffer,Ue.end*2,Re*2);De.set(ot,Pe),Pe+=Re*2,Ue.end+=Re}return new DataView(De.buffer)}function Ye(u){let x=u.array.slice(u.offset.value,u.offset.value+u.size),w=Qr(x),A=u.inputChannels.length*u.lines*u.columns*u.totalBytes,P=new ArrayBuffer(A),z=new DataView(P),Z=0,ae=0,j=new Array(4);for(let ne=0;ne<u.lines;ne++)for(let ie=0;ie<u.inputChannels.length;ie++){let de=0;switch(u.inputChannels[ie].pixelType){case 1:j[0]=Z,j[1]=j[0]+u.columns,Z=j[1]+u.columns;for(let De=0;De<u.columns;++De){let Be=w[j[0]++]<<8|w[j[1]++];de+=Be,z.setUint16(ae,de,!0),ae+=2}break;case 2:j[0]=Z,j[1]=j[0]+u.columns,j[2]=j[1]+u.columns,Z=j[2]+u.columns;for(let De=0;De<u.columns;++De){let Be=w[j[0]++]<<24|w[j[1]++]<<16|w[j[2]++]<<8;de+=Be,z.setUint32(ae,de,!0),ae+=4}break}}return z}function W(u){let x=u.viewer,w={value:u.offset.value},A=new Uint8Array(u.columns*u.lines*(u.inputChannels.length*u.type*2)),P={version:me(x,w),unknownUncompressedSize:me(x,w),unknownCompressedSize:me(x,w),acCompressedSize:me(x,w),dcCompressedSize:me(x,w),rleCompressedSize:me(x,w),rleUncompressedSize:me(x,w),rleRawSize:me(x,w),totalAcUncompressedCount:me(x,w),totalDcUncompressedCount:me(x,w),acCompression:me(x,w)};if(P.version<2)throw new Error("EXRLoader.parse: "+ri.compression+" version "+P.version+" is unsupported");let z=new Array,Z=ee(x,w)-2;for(;Z>0;){let Ne=J(x.buffer,w),Ue=ge(x,w),Re=Ue>>2&3,ot=(Ue>>4)-1,Ke=new Int8Array([ot])[0],At=ge(x,w);z.push({name:Ne,index:Ke,type:At,compression:Re}),Z-=Ne.length+3}let ae=ri.channels,j=new Array(u.inputChannels.length);for(let Ne=0;Ne<u.inputChannels.length;++Ne){let Ue=j[Ne]={},Re=ae[Ne];Ue.name=Re.name,Ue.compression=0,Ue.decoded=!1,Ue.type=Re.pixelType,Ue.pLinear=Re.pLinear,Ue.width=u.columns,Ue.height=u.lines}let ne={idx:new Array(3)};for(let Ne=0;Ne<u.inputChannels.length;++Ne){let Ue=j[Ne];for(let Re=0;Re<z.length;++Re){let ot=z[Re];Ue.name==ot.name&&(Ue.compression=ot.compression,ot.index>=0&&(ne.idx[ot.index]=Ne),Ue.offset=Ne)}}let ie,de,Pe;if(P.acCompressedSize>0)switch(P.acCompression){case 0:ie=new Uint16Array(P.totalAcUncompressedCount),et(u.array,x,w,P.acCompressedSize,ie,P.totalAcUncompressedCount);break;case 1:let Ne=u.array.slice(w.value,w.value+P.totalAcUncompressedCount),Ue=Qr(Ne);ie=new Uint16Array(Ue.buffer),w.value+=P.totalAcUncompressedCount;break}if(P.dcCompressedSize>0){let Ne={array:u.array,offset:w,size:P.dcCompressedSize};de=new Uint16Array(ye(Ne).buffer),w.value+=P.dcCompressedSize}if(P.rleRawSize>0){let Ne=u.array.slice(w.value,w.value+P.rleCompressedSize),Ue=Qr(Ne);Pe=Ve(Ue.buffer),w.value+=P.rleCompressedSize}let De=0,Be=new Array(j.length);for(let Ne=0;Ne<Be.length;++Ne)Be[Ne]=new Array;for(let Ne=0;Ne<u.lines;++Ne)for(let Ue=0;Ue<j.length;++Ue)Be[Ue].push(De),De+=j[Ue].width*u.type*2;we(ne,Be,j,ie,de,A);for(let Ne=0;Ne<j.length;++Ne){let Ue=j[Ne];if(!Ue.decoded)switch(Ue.compression){case 2:let Re=0,ot=0;for(let Ke=0;Ke<u.lines;++Ke){let At=Be[Ne][Re];for(let gt=0;gt<Ue.width;++gt){for(let tt=0;tt<2*Ue.type;++tt)A[At++]=Pe[ot+tt*Ue.width*Ue.height];ot++}Re++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(A.buffer)}function J(u,x){let w=new Uint8Array(u),A=0;for(;w[x.value+A]!=0;)A+=1;let P=new TextDecoder().decode(w.slice(x.value,x.value+A));return x.value=x.value+A+1,P}function ve(u,x,w){let A=new TextDecoder().decode(new Uint8Array(u).slice(x.value,x.value+w));return x.value=x.value+w,A}function K(u,x){let w=Me(u,x),A=$(u,x);return[w,A]}function he(u,x){let w=$(u,x),A=$(u,x);return[w,A]}function Me(u,x){let w=u.getInt32(x.value,!0);return x.value=x.value+4,w}function $(u,x){let w=u.getUint32(x.value,!0);return x.value=x.value+4,w}function oe(u,x){let w=u[x.value];return x.value=x.value+1,w}function ge(u,x){let w=u.getUint8(x.value);return x.value=x.value+1,w}let me=function(u,x){let w;return"getBigInt64"in DataView.prototype?w=Number(u.getBigInt64(x.value,!0)):w=u.getUint32(x.value+4,!0)+Number(u.getUint32(x.value,!0)<<32),x.value+=8,w};function Ee(u,x){let w=u.getFloat32(x.value,!0);return x.value+=4,w}function H(u,x){return ph.toHalfFloat(Ee(u,x))}function G(u){let x=(u&31744)>>10,w=u&1023;return(u>>15?-1:1)*(x?x===31?w?NaN:1/0:Math.pow(2,x-15)*(1+w/1024):6103515625e-14*(w/1024))}function ee(u,x){let w=u.getUint16(x.value,!0);return x.value+=2,w}function pe(u,x){return G(ee(u,x))}function Ce(u,x,w,A){let P=w.value,z=[];for(;w.value<P+A-1;){let Z=J(x,w),ae=Me(u,w),j=ge(u,w);w.value+=3;let ne=Me(u,w),ie=Me(u,w);z.push({name:Z,pixelType:ae,pLinear:j,xSampling:ne,ySampling:ie})}return w.value+=1,z}function Se(u,x){let w=Ee(u,x),A=Ee(u,x),P=Ee(u,x),z=Ee(u,x),Z=Ee(u,x),ae=Ee(u,x),j=Ee(u,x),ne=Ee(u,x);return{redX:w,redY:A,greenX:P,greenY:z,blueX:Z,blueY:ae,whiteX:j,whiteY:ne}}function Qe(u,x){let w=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],A=ge(u,x);return w[A]}function pt(u,x){let w=Me(u,x),A=Me(u,x),P=Me(u,x),z=Me(u,x);return{xMin:w,yMin:A,xMax:P,yMax:z}}function Ut(u,x){let w=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],A=ge(u,x);return w[A]}function xt(u,x){let w=["ENVMAP_LATLONG","ENVMAP_CUBE"],A=ge(u,x);return w[A]}function yn(u,x){let w=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],A=["ROUND_DOWN","ROUND_UP"],P=$(u,x),z=$(u,x),Z=ge(u,x);return{xSize:P,ySize:z,levelMode:w[Z&15],roundingMode:A[Z>>4]}}function Dn(u,x){let w=Ee(u,x),A=Ee(u,x);return[w,A]}function to(u,x){let w=Ee(u,x),A=Ee(u,x),P=Ee(u,x);return[w,A,P]}function no(u,x,w,A,P){if(A==="string"||A==="stringvector"||A==="iccProfile")return ve(x,w,P);if(A==="chlist")return Ce(u,x,w,P);if(A==="chromaticities")return Se(u,w);if(A==="compression")return Qe(u,w);if(A==="box2i")return pt(u,w);if(A==="envmap")return xt(u,w);if(A==="tiledesc")return yn(u,w);if(A==="lineOrder")return Ut(u,w);if(A==="float")return Ee(u,w);if(A==="v2f")return Dn(u,w);if(A==="v3f")return to(u,w);if(A==="int")return Me(u,w);if(A==="rational")return K(u,w);if(A==="timecode")return he(u,w);if(A==="preview")return w.value+=P,"skipped";w.value+=P}function si(u,x){let w=Math.log2(u);return x=="ROUND_DOWN"?Math.floor(w):Math.ceil(w)}function rr(u,x,w){let A=0;switch(u.levelMode){case"ONE_LEVEL":A=1;break;case"MIPMAP_LEVELS":A=si(Math.max(x,w),u.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return A}function or(u,x,w,A){let P=new Array(u);for(let z=0;z<u;z++){let Z=1<<z,ae=x/Z|0;A=="ROUND_UP"&&ae*Z<x&&(ae+=1);let j=Math.max(ae,1);P[z]=(j+w-1)/w|0}return P}function io(){let u=this,x=u.offset,w={value:0};for(let A=0;A<u.tileCount;A++){let P=Me(u.viewer,x),z=Me(u.viewer,x);x.value+=8,u.size=$(u.viewer,x);let Z=P*u.blockWidth,ae=z*u.blockHeight;u.columns=Z+u.blockWidth>u.width?u.width-Z:u.blockWidth,u.lines=ae+u.blockHeight>u.height?u.height-ae:u.blockHeight;let j=u.columns*u.totalBytes,ie=u.size<u.lines*j?u.uncompress(u):q(u);x.value+=u.size;for(let de=0;de<u.lines;de++){let Pe=de*u.columns*u.totalBytes;for(let De=0;De<u.inputChannels.length;De++){let Be=ri.channels[De].name,Ne=u.channelByteOffsets[Be]*u.columns,Ue=u.decodeChannels[Be];if(Ue===void 0)continue;w.value=Pe+Ne;let Re=(u.height-(1+ae+de))*u.outLineWidth;for(let ot=0;ot<u.columns;ot++){let Ke=Re+(ot+Z)*u.outputChannels+Ue;u.byteArray[Ke]=u.getter(ie,w)}}}}}function ls(){let u=this,x=u.offset,w={value:0};for(let A=0;A<u.height/u.blockHeight;A++){let P=Me(u.viewer,x)-ri.dataWindow.yMin;u.size=$(u.viewer,x),u.lines=P+u.blockHeight>u.height?u.height-P:u.blockHeight;let z=u.columns*u.totalBytes,ae=u.size<u.lines*z?u.uncompress(u):q(u);x.value+=u.size;for(let j=0;j<u.blockHeight;j++){let ne=A*u.blockHeight,ie=j+u.scanOrder(ne);if(ie>=u.height)continue;let de=j*z,Pe=(u.height-1-ie)*u.outLineWidth;for(let De=0;De<u.inputChannels.length;De++){let Be=ri.channels[De].name,Ne=u.channelByteOffsets[Be]*u.columns,Ue=u.decodeChannels[Be];if(Ue!==void 0){w.value=de+Ne;for(let Re=0;Re<u.columns;Re++){let ot=Pe+Re*u.outputChannels+Ue;u.byteArray[ot]=u.getter(ae,w)}}}}}}function so(u,x,w){let A={};if(u.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");A.version=u.getUint8(4);let P=u.getUint8(5);A.spec={singleTile:!!(P&2),longName:!!(P&4),deepFormat:!!(P&8),multiPart:!!(P&16)},w.value=8;let z=!0;for(;z;){let Z=J(x,w);if(Z==0)z=!1;else{let ae=J(x,w),j=$(u,w),ne=no(u,x,w,ae,j);ne===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${ae}'.`):A[Z]=ne}}if(P&-7)throw console.error("THREE.EXRHeader:",A),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return A}function cs(u,x,w,A,P){let z={size:0,viewer:x,array:w,offset:A,width:u.dataWindow.xMax-u.dataWindow.xMin+1,height:u.dataWindow.yMax-u.dataWindow.yMin+1,inputChannels:u.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:_i};switch(u.compression){case"NO_COMPRESSION":z.blockHeight=1,z.uncompress=q;break;case"RLE_COMPRESSION":z.blockHeight=1,z.uncompress=ce;break;case"ZIPS_COMPRESSION":z.blockHeight=1,z.uncompress=ye;break;case"ZIP_COMPRESSION":z.blockHeight=16,z.uncompress=ye;break;case"PIZ_COMPRESSION":z.blockHeight=32,z.uncompress=fe;break;case"PXR24_COMPRESSION":z.blockHeight=16,z.uncompress=Ye;break;case"DWAA_COMPRESSION":z.blockHeight=32,z.uncompress=W;break;case"DWAB_COMPRESSION":z.blockHeight=256,z.uncompress=W;break;default:throw new Error("EXRLoader.parse: "+u.compression+" is unsupported")}let Z={};for(let ie of u.channels)switch(ie.name){case"Y":case"R":case"G":case"B":case"A":Z[ie.name]=!0,z.type=ie.pixelType}let ae=!1;if(Z.R&&Z.G&&Z.B)ae=!Z.A,z.outputChannels=4,z.decodeChannels={R:0,G:1,B:2,A:3};else if(Z.Y)z.outputChannels=1,z.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(z.type==1)switch(P){case vn:z.getter=pe;break;case Ht:z.getter=ee;break}else if(z.type==2)switch(P){case vn:z.getter=Ee;break;case Ht:z.getter=H}else throw new Error("EXRLoader.parse: unsupported pixelType "+z.type+" for "+u.compression+".");z.columns=z.width;let j=z.width*z.height*z.outputChannels;switch(P){case vn:z.byteArray=new Float32Array(j),ae&&z.byteArray.fill(1,0,j);break;case Ht:z.byteArray=new Uint16Array(j),ae&&z.byteArray.fill(15360,0,j);break;default:console.error("THREE.EXRLoader: unsupported type: ",P);break}let ne=0;for(let ie of u.channels)z.decodeChannels[ie.name]!==void 0&&(z.channelByteOffsets[ie.name]=ne),ne+=ie.pixelType*2;if(z.totalBytes=ne,z.outLineWidth=z.width*z.outputChannels,u.lineOrder==="INCREASING_Y"?z.scanOrder=ie=>ie:z.scanOrder=ie=>z.height-1-ie,z.outputChannels==4?(z.format=hn,z.colorSpace=_i):(z.format=Gr,z.colorSpace=qn),u.spec.singleTile){z.blockHeight=u.tiles.ySize,z.blockWidth=u.tiles.xSize;let ie=rr(u.tiles,z.width,z.height),de=or(ie,z.width,u.tiles.xSize,u.tiles.roundingMode),Pe=or(ie,z.height,u.tiles.ySize,u.tiles.roundingMode);z.tileCount=de[0]*Pe[0];for(let De=0;De<ie;De++)for(let Be=0;Be<Pe[De];Be++)for(let Ne=0;Ne<de[De];Ne++)me(x,A);z.decode=io.bind(z)}else{z.blockWidth=z.width;let ie=Math.ceil(z.height/z.blockHeight);for(let de=0;de<ie;de++)me(x,A);z.decode=ls.bind(z)}return z}let ar={value:0},lr=new DataView(e),Ga=new Uint8Array(e),ri=so(lr,e,ar),wi=cs(ri,lr,Ga,ar,this.type);return wi.decode(),{header:ri,width:wi.width,height:wi.height,data:wi.byteArray,format:wi.format,colorSpace:wi.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){o.colorSpace=a.colorSpace,o.minFilter=en,o.magFilter=en,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,r,n,s)}};function ei(i=1){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var os=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Pn=(i,e,t)=>i+(e-i)*t,tr=i=>i*i*(3-2*i),Pf=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,ti=(i,e,t)=>os((i-e)/(t-e));function Tt(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e;let s=n.getContext("2d");return t(s,i,e),n}function bt(i,{srgb:e=!0,repeat:t=!1,aniso:n=8}={}){let s=i instanceof tn?i:new oa(i);return e&&(s.colorSpace=jt),t&&(s.wrapS=s.wrapT=un),s.anisotropy=n,s.needsUpdate=!0,s}function ni(i="rgba(255,255,255,1)",e="rgba(255,255,255,0)",t=128){return bt(Tt(t,t,(n,s)=>{let r=n.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);r.addColorStop(0,i),r.addColorStop(1,e),n.fillStyle=r,n.fillRect(0,0,s,s)}))}var Qx=new I(0,1,0),Na=new I,Af=new zt,Rf=new I,Cf=new I;function If(i,e,t=.2,n=t,s=new je){Na.subVectors(e,i);let r=Na.length();return Na.normalize(),Af.setFromUnitVectors(Qx,Na),Cf.addVectors(i,e).multiplyScalar(.5),Rf.set(t,r,n),s.compose(Cf,Af,Rf)}function Mi(i,e){let t=new We(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return i.setAttribute("color",new Bt(s,3)),i}function _n(i,e=["position","normal","uv","color"]){let t=i.index?i.toNonIndexed():i;for(let n of Object.keys(t.attributes))e.includes(n)||t.deleteAttribute(n);return e.includes("uv")&&!t.attributes.uv&&t.setAttribute("uv",new Bt(new Float32Array(t.attributes.position.count*2),2)),t}var Si=()=>new Promise(i=>requestAnimationFrame(()=>i()));function wn(i,{height:e=2.6,strength:t=.32}={}){return i.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying float vGrimeY;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
{ vec4 gp = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
 gp = instanceMatrix * gp;
#endif
 vGrimeY = (modelMatrix * gp).y; }`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGrimeY;`).replace("#include <map_fragment>",`#include <map_fragment>
 diffuseColor.rgb *= mix(1.0 - ${t.toFixed(3)}, 1.0, smoothstep(0.0, ${e.toFixed(2)}, vGrimeY));`)},i.customProgramCacheKey=()=>"grime"+e+t,i}var jr=[{p:0,name:"dawn",gain:1},{p:.17,name:"city",gain:1},{p:.56,name:"city",gain:.95},{p:.7,name:"sunset",gain:1},{p:.8,name:"sunset",gain:.8},{p:.9,name:"night",gain:1.5},{p:1,name:"night",gain:1.5}];async function Df(i){let e=new La,t=[...new Set(jr.map(l=>l.name))],n={};await Promise.all(t.map(l=>e.loadAsync(`assets/hdri/${l}.exr`).then(h=>{h.minFilter=h.magFilter=en,h.generateMipmaps=!1,n[l]=h})));let s=new Oi(i),r=new zi,o=new yt({side:Nt,depthWrite:!1,uniforms:{a:{value:null},b:{value:null},k:{value:0},ga:{value:1},gb:{value:1}},vertexShader:`
      varying vec3 vDir;
      void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform sampler2D a; uniform sampler2D b; uniform float k; uniform float ga; uniform float gb;
      varying vec3 vDir;
      vec2 eq(vec3 d) { return vec2(atan(d.z, d.x) * 0.15915494 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5); }
      void main() {
        vec2 uv = eq(normalize(vDir));
        vec3 c = mix(texture2D(a, uv).rgb * ga, texture2D(b, uv).rgb * gb, k);
        gl_FragColor = vec4(c, 1.0);
      }`});r.add(new $e(new dn(5,64,32),o));let a=null,c="";return{update(l,h){let f=0;for(;f<jr.length-2&&l>jr[f+1].p;)f++;let d=jr[f],p=jr[f+1],v=Math.round(tr(ti(l,d.p,p.p))*20)/20,_=`${f}:${v}`;if(_===c)return;c=_,o.uniforms.a.value=n[d.name],o.uniforms.b.value=n[p.name],o.uniforms.ga.value=d.gain,o.uniforms.gb.value=p.gain,o.uniforms.k.value=v;let m=s.fromScene(r,0,.1,20);h.environment=m.texture,a?.dispose(),a=m}}}var Uf={uniforms:{tDiffuse:{value:null},time:{value:0},vignette:{value:.32},grain:{value:.035},ca:{value:.0025},lift:{value:new I(0,0,0)},sat:{value:1.06}},vertexShader:`
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
    }`};var jx={plaster:{orm:!0},asphalt:{orm:!0},pavers:{orm:!0},corrugated:{orm:!0},steel:{orm:!0},concrete:{orm:!0},ground:{orm:!0},bark:{orm:!0},wood:{orm:!0}},e_=["curb_col","leaves_col","leaves_nor","louver_col","louver_nor","rail_col"],Vt={};async function Lf(i,e){let t=new Ws,n=Math.min(16,i.capabilities.getMaxAnisotropy()),s=[],r=(a,c,l)=>s.push(t.loadAsync(`assets/tex/${c}.webp`).then(h=>{h.wrapS=h.wrapT=un,h.anisotropy=n,l&&(h.colorSpace=jt),Vt[a]=h}));for(let a of Object.keys(jx))r(`${a}_col`,`${a}_col`,!0),r(`${a}_nor`,`${a}_nor`,!1),r(`${a}_orm`,`${a}_orm`,!1);for(let a of e_)r(a,a,a.endsWith("_col"));let o=0;await Promise.all(s.map(a=>a.then(()=>e?.(++o/s.length))))}var wh=(i,e,t)=>{if(e===1&&t===1)return i;let n=i.clone();return n.repeat.set(e,t),n.needsUpdate=!0,n};function lt(i,{repeat:e=[1,1],normalScale:t=1,physical:n=!1,...s}={}){let[r,o]=e,a=n?pn:nt,c=wh(Vt[`${i}_orm`],r,o);return new a({map:wh(Vt[`${i}_col`],r,o),normalMap:wh(Vt[`${i}_nor`],r,o),normalScale:new Te(t,t),roughnessMap:c,metalnessMap:c,aoMap:c,aoMapIntensity:.9,roughness:1,metalness:1,...s})}function Wn(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ct,l=0;for(let h=0;h<i.length;++h){let f=i[h],d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,f=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let v=0;v<p.count;++v)f.push(p.getX(v)+h);h+=i[d].attributes.position.count}c.setIndex(f)}for(let h in r){let f=Nf(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<f;++d){let p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][d]);let v=Nf(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(v)}}return c}function Nf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Bt(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let f=c/t;for(let d=0,p=h.count;d<p;d++)for(let v=0;v<t;v++){let _=h.getComponent(d,v);a.setComponent(d+f,v,_)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var Fa=class extends $e{constructor(e,t={}){super(e),this.isWater=!0;let n=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,c=t.time!==void 0?t.time:0,l=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new I(.70707,.70707,0),f=new We(t.sunColor!==void 0?t.sunColor:16777215),d=new We(t.waterColor!==void 0?t.waterColor:8355711),p=t.eye!==void 0?t.eye:new I(0,0,0),v=t.distortionScale!==void 0?t.distortionScale:20,_=t.side!==void 0?t.side:$n,m=t.fog!==void 0?t.fog:!1,g=new Fn,R=new I,E=new I,S=new I,F=new je,D=new I(0,0,-1),L=new _t,T=new I,M=new I,y=new _t,C=new je,B=new Xt,V=new Ft(s,r),X={name:"MirrorShader",uniforms:$t.merge([ke.fog,ke.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new je},sunColor:{value:new We(8355711)},sunDirection:{value:new I(.70707,.70707,0)},eye:{value:new I},waterColor:{value:new We(5592405)}}]),vertexShader:`
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
				}`},re=new yt({name:X.name,uniforms:$t.clone(X.uniforms),vertexShader:X.vertexShader,fragmentShader:X.fragmentShader,lights:!0,side:_,fog:m});re.uniforms.mirrorSampler.value=V.texture,re.uniforms.textureMatrix.value=C,re.uniforms.alpha.value=a,re.uniforms.time.value=c,re.uniforms.normalSampler.value=l,re.uniforms.sunColor.value=f,re.uniforms.waterColor.value=d,re.uniforms.sunDirection.value=h,re.uniforms.distortionScale.value=v,re.uniforms.eye.value=p,n.material=re,n.onBeforeRender=function(N,Q,k){if(E.setFromMatrixPosition(n.matrixWorld),S.setFromMatrixPosition(k.matrixWorld),F.extractRotation(n.matrixWorld),R.set(0,0,1),R.applyMatrix4(F),T.subVectors(E,S),T.dot(R)>0)return;T.reflect(R).negate(),T.add(E),F.extractRotation(k.matrixWorld),D.set(0,0,-1),D.applyMatrix4(F),D.add(S),M.subVectors(E,D),M.reflect(R).negate(),M.add(E),B.position.copy(T),B.up.set(0,1,0),B.up.applyMatrix4(F),B.up.reflect(R),B.lookAt(M),B.far=k.far,B.updateMatrixWorld(),B.projectionMatrix.copy(k.projectionMatrix),C.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),C.multiply(B.projectionMatrix),C.multiply(B.matrixWorldInverse),g.setFromNormalAndCoplanarPoint(R,E),g.applyMatrix4(B.matrixWorldInverse),L.set(g.normal.x,g.normal.y,g.normal.z,g.constant);let Y=B.projectionMatrix;y.x=(Math.sign(L.x)+Y.elements[8])/Y.elements[0],y.y=(Math.sign(L.y)+Y.elements[9])/Y.elements[5],y.z=-1,y.w=(1+Y.elements[10])/Y.elements[14],L.multiplyScalar(2/L.dot(y)),Y.elements[2]=L.x,Y.elements[6]=L.y,Y.elements[10]=L.z+1-o,Y.elements[14]=L.w,p.setFromMatrixPosition(k.matrixWorld);let se=N.getRenderTarget(),te=N.xr.enabled,Ie=N.shadowMap.autoUpdate;n.visible=!1,N.xr.enabled=!1,N.shadowMap.autoUpdate=!1,N.setRenderTarget(V),N.state.buffers.depth.setMask(!0),N.autoClear===!1&&N.clear(),N.render(Q,B),n.visible=!0,N.xr.enabled=te,N.shadowMap.autoUpdate=Ie,N.setRenderTarget(se);let qe=k.viewport;qe!==void 0&&N.state.viewport(qe)}}};var Wi=4.2,ir=3.2,Bf=[["MAA TARA SWEETS","\u09AE\u09BF\u09B7\u09CD\u099F\u09BE\u09A8\u09CD\u09A8 \u09AD\u09BE\u09A3\u09CD\u09A1\u09BE\u09B0","#b3261e","#ffe7a8"],["SHARMA STORES","GROCERY \xB7 DAILY NEEDS","#1f4e8c","#ffffff"],["XEROX \xB7 STD \xB7 ISD","LAMINATION \xB7 PRINTOUT","#f2c200","#1a1a1a"],["NEW MEDICAL HALL","\u0994\u09B7\u09A7\u09BE\u09B2\u09AF\u09BC \xB7 24 HRS","#0f7a4f","#ffffff"],["CHA & TOAST","\u099A\u09BE \xB7 \u099F\u09CB\u09B8\u09CD\u099F \xB7 \u0998\u09C1\u0997\u09A8\u09BF","#6b2f1a","#ffd9a0"],["MOBILE REPAIR","ALL BRANDS \xB7 RECHARGE","#202020","#3fe0ff"],["LAXMI JEWELLERS","HALLMARK GOLD \xB7 SINCE 1972","#7a1630","#f6d27a"],["BOOK DEPOT","\u09AC\u0987 \xB7 STATIONERY","#2c5530","#f3eedb"],["HOTEL BIRIYANI","MUTTON \xB7 CHICKEN \xB7 AC","#d8432f","#ffffff"],["PHOTO STUDIO","PASSPORT PHOTO IN 5 MIN","#3b2a68","#ffffff"],["GUPTA HARDWARE","PAINTS \xB7 SANITARY \xB7 TOOLS","#e86a10","#1a1a1a"],["FRESH JUICE CORNER","MOSAMBI \xB7 ANAR \xB7 SUGARCANE","#2f8f2f","#fff9c4"],["CYBER CAFE","INTERNET \xB7 FORMS \xB7 TICKETS","#0b3d91","#9be7ff"],["DAS TAILORS","LADIES & GENTS \xB7 ALTERATION","#7b5b3a","#fff3dc"],["RATION SHOP","FAIR PRICE \xB7 NO. 14/B","#55606b","#ffffff"],["SEN ELECTRICALS","FANS \xB7 WIRING \xB7 INVERTER","#ffd400","#0d2a6b"]];function t_(){return bt(Tt(2048,1024,i=>{Bf.forEach(([e,t,n,s],r)=>{let o=r%2*1024,a=Math.floor(r/2)*128,c=i.createLinearGradient(0,a,0,a+128);c.addColorStop(0,n),c.addColorStop(1,Ff(n,-.25)),i.fillStyle=c,i.fillRect(o,a,1024,128),i.strokeStyle=Ff(n,-.45),i.lineWidth=6,i.strokeRect(o+3,a+3,1018,122),i.fillStyle=s,i.textBaseline="middle",i.font='800 66px "Manrope", "Hind Siliguri", sans-serif',i.fillText(e,o+34,a+54),i.font='600 26px "Hind Siliguri", "Manrope", sans-serif',i.globalAlpha=.85,i.fillText(t,o+38,a+104),i.globalAlpha=1;for(let h=0;h<120;h++)i.fillStyle=`rgba(0,0,0,${Math.random()*.08})`,i.fillRect(o+Math.random()*1024,a+Math.random()*60,2+Math.random()*3,30+Math.random()*70);let l=i.createLinearGradient(0,a+90,0,a+128);l.addColorStop(0,"rgba(30,20,10,0)"),l.addColorStop(1,"rgba(30,20,10,0.35)"),i.fillStyle=l,i.fillRect(o,a+90,1024,38)})}))}function Ff(i,e){let t=new We(i);return t.offsetHSL(0,0,e*.5),"#"+t.getHexString()}function n_(){return bt(Tt(256,256,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#ffe2b0"),n.addColorStop(1,"#f2a75c"),i.fillStyle=n,i.fillRect(0,0,e,t);for(let s=0;s<e;s+=2){let r=Math.sin(s*.19)*.5+Math.sin(s*.07+1)*.5;i.fillStyle=`rgba(120,60,20,${.08+r*.08})`,i.fillRect(s,0,2,t)}i.fillStyle="rgba(255,255,240,0.55)",i.fillRect(e*.55,t*.08,e*.35,6),i.fillStyle="rgba(60,40,30,0.5)",i.fillRect(e*.5,t*.3,e*.5,t*.7)}))}function i_(){return bt(Tt(512,256,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#fff3d6"),n.addColorStop(1,"#c79a62"),i.fillStyle=n,i.fillRect(0,0,e,t);let s=["#d63a2f","#f2c200","#2b6cb0","#2f8f4f","#ffffff","#ff8a00","#7a3fb0","#e9e1d0"];for(let r=0;r<4;r++){let o=18+r*52;i.fillStyle="#6b4a2a",i.fillRect(0,o+40,e,5);let a=4;for(;a<e-8;){let c=8+Math.random()*18,l=16+Math.random()*22;i.fillStyle=s[Math.floor(Math.random()*s.length)],i.fillRect(a,o+40-l,c,l),i.fillStyle="rgba(0,0,0,0.15)",i.fillRect(a+c-2,o+40-l,2,l),a+=c+1.5}}i.fillStyle="#4a3020",i.fillRect(0,t-40,e,40),i.fillStyle="rgba(255,255,255,0.08)",i.fillRect(0,t-40,e,3)}))}function s_(){return bt(Tt(128,96,(i,e,t)=>{i.fillStyle="#e9e7e0",i.fillRect(0,0,e,t),i.fillStyle="#3a3a3a",i.beginPath(),i.arc(e*.62,t/2,t*.36,0,7),i.fill(),i.strokeStyle="#9a9a9a";for(let n=0;n<6;n++)i.beginPath(),i.arc(e*.62,t/2,t*.06*n,0,7),i.stroke();i.fillStyle="rgba(120,90,60,0.35)",i.fillRect(0,t-10,e,10)}))}var nr=(i,e,t,n=0,s=0,r=0)=>_n(new ze(i,e,t).translate(n,s,r),["position","normal","uv"]),Oa=null;function zf(){if(Oa)return Oa;let i={frame:Wn([nr(.14,.16,1.62,.07,1,0),nr(.26,.07,1.72,.13,-.95,0),nr(.1,1.9,.1,.05,0,-.71),nr(.1,1.9,.1,.05,0,.71),nr(.05,1.8,.05,.04,0,0),nr(.05,.05,1.32,.04,.45,0)]),pane:new vt(1.34,1.84).rotateY(Math.PI/2),shutter:new ze(.035,1.84,.64),slab:new ze(1,.14,2.8),rail:new ze(.02,1,2.8),railSide:new ze(1,1,.02),cloth:new vt(.5,.75).rotateY(Math.PI/2).translate(0,-.37,0),ac:new ze(.55,.5,.82),pipe:new ht(.06,.06,1,8),shop:new vt(1,1).rotateY(Math.PI/2),awning:(()=>{let r=new ze(1.4,.06,1);return r.rotateZ(-.3),r})()},e=n_(),t=i_(),n=Vt.louver_col,s={frame:wn(new nt({color:16777215,roughness:.55})),paneDark:new pn({color:790805,roughness:.05,metalness:0,envMapIntensity:1.6,specularIntensity:1,ior:1.52}),paneLit:new pn({color:2102798,map:e,emissive:16777215,emissiveMap:e,emissiveIntensity:.05,roughness:.08,envMapIntensity:1.2}),shutter:new nt({map:n,normalMap:Vt.louver_nor,roughness:.75,color:16777215}),slab:wn(lt("plaster",{repeat:[.4,.4],vertexColors:!1})),rail:new nt({map:Vt.rail_col,alphaTest:.5,side:Lt,metalness:.6,roughness:.5,color:2236962}),cloth:new nt({side:Lt,roughness:.95,color:16777215}),ac:new nt({map:s_(),roughness:.6}),pipe:new nt({color:3816510,roughness:.5,metalness:.2}),shopLit:new nt({map:t,emissive:16777215,emissiveMap:t,emissiveIntensity:.35,roughness:.4}),shutterRoll:lt("corrugated",{repeat:[1,1],color:10134440}),awning:new nt({roughness:.85,side:Lt,color:16777215})};return Oa={geo:i,mats:s},Oa}var Of={};function Hf({lit:i=!1,shutters:e=!0,shutterColor:t="#2f5e44",frameColor:n="#f1ede3",open:s=.35}={}){let{geo:r,mats:o}=zf(),a=new dt,c=o.frame.clone();c.color.set(n);let l=new $e(r.frame,c);l.castShadow=l.receiveShadow=!0,a.add(l);let h=new $e(r.pane,i?o.paneLit:o.paneDark);if(h.position.x=.012,a.add(h),e){let f=Of[t]||(Of[t]=Object.assign(o.shutter.clone(),{}));f.color.set(t);for(let d of[-1,1]){let p=new $e(r.shutter,f);p.position.set(.06+Math.sin(s)*.3,0,d*1),p.rotation.y=d*s,p.castShadow=!0,a.add(p)}}return a}var Ba=class{constructor(e,{lite:t=!1}={}){this.r=e,this.lite=t,this.I={frame:[],paneDark:[],paneLit:[],shutter:[],slab:[],rail:[],railSide:[],cloth:[],ac:[],pipe:[],shopLit:[],shutterRoll:[],awning:[]},this.signGeos=[],this.wallGeos=[]}addBuilding({x:e,z:t,rot:n,side:s,perp:r,along:o,floors:a,tint:c}){let l=this.r,h=n+(s>0?0:Math.PI),f=new zt().setFromAxisAngle(new I(0,1,0),h),d=new zt().setFromAxisAngle(new I(0,1,0),n),p=s*(r/2),v=(D,L,T=0)=>new I(p+s*T,L,D).applyQuaternion(d).add(new I(e,0,t)),_=(D,L,T=0,M=[1,1,1],y,C=f)=>{let B=T?C.clone().multiply(new zt().setFromAxisAngle(new I(0,1,0),T)):C;this.I[D].push({m:new je().compose(L,B,new I(...M)),color:y})},m=["#f1ede3","#f1ede3","#2f5e44","#5b3b24","#3b5a7a","#e8e0c8"][Math.floor(l()*6)],g=["#2f5e44","#2d6a5a","#3f6b3a","#5b3b24","#2f4f6f","#7b8b5a"][Math.floor(l()*6)],R=Math.max(1,Math.floor((o-1.2)/3)),E=D=>-o/2+o*(D+.5)/R;for(let D=0;D<=a;D++){let L=Wi+D*ir-.06,T=new ze(.24,D===a?.3:.14,o+.24);T.translate(p+s*.1,L,0),sr(T),Mi(T,new We(c).multiplyScalar(.93)),T.applyQuaternion(d),T.translate(e,0,t),this.wallGeos.push(_n(T))}let S=l()<.55;for(let D=0;D<a;D++){let L=Wi+D*ir+1.55;for(let T=0;T<R;T++){let M=E(T);_("frame",v(M,L),0,[1,1,1],m);let y=l()<.16;if(y||_(l()<.42?"paneLit":"paneDark",v(M,L,.012)),y)for(let C of[-1,1])_("shutter",v(M+C*.33,L,.07),0,[1,1,1],g);else if(l()<.6)for(let C of[-1,1]){let B=.15+l()*.5;_("shutter",v(M+C*(.7+.3),L,.06+Math.sin(B)*.3),C*B,[1,1,1],g)}if(S&&D>=0&&l()<.5&&!this.lite){let C=L-1.02;_("slab",v(M,C,.5),0,[1,1,1],c),_("rail",v(M,C+.55,.98));for(let V of[-1,1])_("railSide",v(M+V*1.38,C+.55,.5));let B=Math.floor(l()*4);for(let V=0;V<B;V++){let X=["#c2185b","#f9a825","#1565c0","#2e7d32","#ffffff","#6a1b9a","#e65100","#00838f"][Math.floor(l()*8)];_("cloth",v(M-.9+V*.6+l()*.2,C+.55,.8),(l()-.5)*.4,[.8+l()*.5,.9+l()*.6,1],X)}}else l()<.12&&!this.lite&&_("ac",v(M,L-1.3,.3))}}for(let D of[-1,1]){if(l()<.35)continue;let L=new zt().setFromAxisAngle(new I(0,1,0),n+(D>0?-Math.PI/2:Math.PI/2)),T=(y,C,B=0)=>new I(y,C,D*(o/2+B)).applyQuaternion(d).add(new I(e,0,t)),M=Math.max(0,Math.floor((r-2.5)/3.6));for(let y=0;y<a;y++){let C=Wi+y*ir+1.55;for(let B=0;B<M;B++){let V=-r/2+1.2+(r-2.4)*(B+.5)/M;if(_("frame",T(V,C),0,[1,1,1],m,L),_(l()<.4?"paneLit":"paneDark",T(V,C,.012),0,[1,1,1],void 0,L),l()<.5)for(let X of[-1,1])_("shutter",T(V+X*1,C,.08),X*(.2+l()*.3),[1,1,1],g,L)}}}if(!this.lite){let D=Wi+a*ir;for(let L of[-o/2+.25,o/2-.25])l()<.6&&_("pipe",v(L,D/2,.1),0,[1,D,1])}let F=Math.max(1,Math.round(o/5));for(let D=0;D<F;D++){let L=o/F,T=-o/2+L*(D+.5),M=l()<.6;if(_(M?"shopLit":"shutterRoll",v(T,1.55,.015),0,[1,3.1,L-.5]),D>0){let y=new ze(.3,Wi,.45);y.translate(p+s*.12,Wi/2,-o/2+L*D),sr(y),Mi(y,new We(c).multiplyScalar(.88)),y.applyQuaternion(d),y.translate(e,0,t),this.wallGeos.push(_n(y))}if(l()<.75){let y=Math.floor(l()*Bf.length),C=new ze(.1,.78,L-.3),B=C.attributes.uv,V=y%2*.5,X=1-Math.floor(y/2)/8,re=X-1/8;for(let N=0;N<6;N++)for(let Q=0;Q<4;Q++){let k=N*4+Q;N===0?B.setXY(k,V+B.getX(k)*.5,re+B.getY(k)/8):B.setXY(k,V+.002,X-.002)}s<0&&C.rotateY(Math.PI),C.translate(p+s*.1,3.72,T),C.applyQuaternion(d),C.translate(e,0,t),this.signGeos.push(_n(C))}else l()<.6&&_("awning",v(T,3.3,.7),0,[1,1,L-.4],["#b23a2e","#2f6d8a","#d18b2c","#3f7a4c","#8a3f6d"][Math.floor(l()*5)])}}build(e){let t={setNight:()=>{}},{geo:n,mats:s}=zf(),r=(c,l,h,f=!0)=>{let d=this.I[c];if(!d.length)return null;let p=new fn(l,h,d.length),v=new We;return d.forEach((_,m)=>{p.setMatrixAt(m,_.m),_.color&&p.setColorAt(m,v.set(_.color))}),p.castShadow=f,p.receiveShadow=!0,e.add(p),p};r("frame",n.frame,s.frame),r("paneDark",n.pane,s.paneDark,!1),r("paneLit",n.pane,s.paneLit,!1),r("shutter",n.shutter,s.shutter),r("slab",n.slab,s.slab),r("rail",n.rail,s.rail),r("railSide",n.railSide,s.rail),r("cloth",n.cloth,s.cloth),r("ac",n.ac,s.ac),r("pipe",n.pipe,s.pipe),r("shopLit",n.shop,s.shopLit,!1),r("shutterRoll",n.shop,s.shutterRoll,!1),r("awning",n.awning,s.awning);let o=t_(),a=new nt({map:o,emissive:16777215,emissiveMap:o,emissiveIntensity:0,roughness:.6});if(this.signGeos.length){let c=new $e(Wn(this.signGeos),a);c.castShadow=!0,c.receiveShadow=!0,e.add(c)}return t.setNight=c=>{s.paneLit.emissiveIntensity=.05+c*1.5,s.shopLit.emissiveIntensity=.3+c*.55,a.emissiveIntensity=c*.55},t}};function sr(i,e=3){let t=i.attributes.position,n=i.attributes.normal,s=i.attributes.uv;for(let r=0;r<t.count;r++){let o=Math.abs(n.getX(r)),a=Math.abs(n.getY(r)),c,l;a>.5?(c=t.getX(r),l=t.getZ(r)):o>.5?(c=t.getZ(r),l=t.getY(r)):(c=t.getX(r),l=t.getY(r)),s.setXY(r,c/e,l/e)}return i}var Xi=4.5,nn=7.4,It={zNear:-582,zFar:-716,level:-3.2};function Wf(){let i=[[0,70],[0,20],[3,-40],[-10,-100],[-16,-160],[-2,-220],[18,-280],[20,-340],[2,-400],[-14,-455],[-8,-505],[0,-545],[0,-575],[0,-620],[0,-700],[0,-760],[0,-830]].map(([c,l])=>new I(c,0,l)),e=new Or(i,!1,"centripetal");e.arcLengthDivisions=2e3;let t=e.getLength(),n=1400,s=[];for(let c=0;c<=n;c++)s.push(e.getPointAt(c/n));return{curve:e,length:t,samples:s,uAtZ:c=>{let l=0,h=1/0;for(let f=0;f<=n;f++){let d=Math.abs(s[f].z-c);d<h&&(h=d,l=f)}return l/n},frame:(c,l={})=>(c=Math.min(1,Math.max(0,c)),l.p=e.getPointAt(c,l.p||new I),l.t=e.getTangentAt(c,l.t||new I).setY(0).normalize(),l.r=(l.r||new I).crossVectors(l.t,new I(0,1,0)).normalize(),l),distToRoad:(c,l)=>{let h=1/0;for(let f=0;f<=n;f+=2){let d=s[f].x-c,p=s[f].z-l,v=d*d+p*p;v<h&&(h=v)}return Math.sqrt(h)}}}function r_(){let i=ei(21),e=[];for(let n=0;n<64;n++)e.push({shutter:i()<.38,balcony:i()<.22,lit:i()<.36,warm:i()<.75,blind:i()*.5});let t=n=>Tt(512,512,(s,r)=>{let o=r/8;if(s.fillStyle=n?"#000":"#efe9dd",s.fillRect(0,0,r,r),!n){for(let a=0;a<3e4;a++)s.fillStyle=`rgba(${i()<.5?"90,80,70":"255,255,255"},${i()*.12})`,s.fillRect(i()*r,i()*r,2,2);for(let a=0;a<140;a++)s.fillStyle=`rgba(70,64,55,${.04+i()*.08})`,s.fillRect(i()*r,i()*r,1+i()*3,20+i()*60)}e.forEach((a,c)=>{let l=c%8*o,h=Math.floor(c/8)*o;n||(s.fillStyle="rgba(60,52,44,0.18)",s.fillRect(l,h,o,4));let f=l+o*.3,d=h+o*.24,p=o*.4,v=o*.52;if(n){if(a.lit){let m=s.createLinearGradient(0,d,0,d+v);m.addColorStop(0,a.warm?"#ffd28a":"#cfe6ff"),m.addColorStop(1,a.warm?"#ff9f43":"#7fa9e0"),s.fillStyle=m,s.fillRect(f,d,p,v),s.fillStyle=`rgba(0,0,0,${a.blind})`,s.fillRect(f,d,p,v*.4)}return}s.fillStyle="rgba(70,60,50,0.35)",s.fillRect(f-3,d-3,p+6,v+6);let _=s.createLinearGradient(f,d,f+p,d+v);if(_.addColorStop(0,"#2f3c48"),_.addColorStop(1,"#151b22"),s.fillStyle=_,s.fillRect(f,d,p,v),s.fillStyle="rgba(220,230,240,0.12)",s.fillRect(f+2,d+2,p*.35,v-4),a.shutter){s.fillStyle="#3d6b4f",s.fillRect(f-p*.42,d,p*.38,v),s.fillRect(f+p*1.04,d,p*.38,v),s.fillStyle="rgba(0,0,0,0.25)";for(let m=0;m<7;m++)s.fillRect(f-p*.42,d+m*v/7,p*.38,1.5),s.fillRect(f+p*1.04,d+m*v/7,p*.38,1.5)}if(a.balcony){s.fillStyle="rgba(40,40,40,0.75)",s.fillRect(l+o*.12,d+v+2,o*.76,3);for(let m=0;m<9;m++)s.fillRect(l+o*.12+m*o*.76/8,d+v*.75,1.5,v*.25+4)}})});return{map:bt(t(!1),{repeat:!0}),emissive:bt(t(!0),{repeat:!0})}}function kf(i,e,t,n,s=12,r=1){let o=[],a=[],c=[],l=i.samples.length-1,h={},f=0,d=null,p=0;for(let m=0;m<=l;m+=r){i.frame(m/l,h),d&&(f+=d.distanceTo(h.p)),d=h.p.clone();let g=h.p.clone().addScaledVector(h.r,e),R=h.p.clone().addScaledVector(h.r,t);if(o.push(g.x,n,g.z,R.x,n,R.z),a.push(0,f/s,1,f/s),p>0){let E=p*2;c.push(E-2,E,E-1,E-1,E,E+1)}p++}let v=new Ct;v.setAttribute("position",new mt(o,3)),v.setAttribute("uv",new mt(a,2)),v.setIndex(c),v.computeVertexNormals();let _=v.attributes.normal;for(let m=0;m<_.count;m++)_.setXYZ(m,0,1,0);return v}function Vf(i,e,t,n=2){let s=[],r=[],o=[],a=0,c=null,l=i.samples.length-1,h={},f=0;for(let p=0;p<=l;p+=n){i.frame(p/l,h);let v=h.p.clone().addScaledVector(h.r,e);if(c&&(a+=c.distanceTo(v)),c=v,s.push(v.x,0,v.z,v.x,t,v.z),o.push(a/2,0,a/2,1),f>0){let _=f*2;r.push(_-2,_,_-1,_-1,_,_+1)}f++}let d=new Ct;return d.setAttribute("position",new mt(s,3)),d.setAttribute("uv",new mt(o,2)),d.setIndex(r),d.computeVertexNormals(),d}function o_(i,e,t,n){let s=new ze(i,e,t),r=s.attributes.uv,o=24,a=Math.floor(n()*8)/8,c=Math.floor(n()*8)/8;for(let l=0;l<6;l++)for(let h=0;h<4;h++){let f=l*4+h;if(l===2||l===3){r.setXY(f,.003,.997);continue}let d=l<2?t:i;r.setXY(f,r.getX(f)*(d/o)+a,r.getY(f)*(e/o)+c)}return s.translate(0,e/2,0),s}var Gf=["#e9dcc0","#d39a76","#efe6d2","#bccab9","#e2b98b","#cfc7b8","#e8cfc7","#f3eee3","#c9b48f","#a9bfc9","#dcc6a0"];function Xf(i,e,t,n){let s=ei(42),r={nightMats:[],update:[]},o=e.samples.length-1,a=(W,J)=>{let ve=Math.abs(J-W),K=lt("ground",{repeat:[3600/10,ve/10]}),he=new $e(new vt(3600,ve),K);he.rotation.x=-Math.PI/2,he.position.set(0,-.02,(W+J)/2),he.receiveShadow=!0,i.add(he)};a(1500,It.zNear),a(It.zFar,-2600);let c=(()=>{let J=new Uint8Array(262144),ve=(he,Me)=>Math.sin(he*.11)*.5+Math.sin(Me*.07+he*.03)*.8+Math.sin((he+Me)*.23)*.3+Math.sin(he*.4-Me*.31)*.15;for(let he=0;he<256;he++)for(let Me=0;Me<256;Me++){let $=2*Math.PI/256,oe=ve((Me+1)*$*40,he*$*40)-ve((Me-1)*$*40,he*$*40),ge=ve(Me*$*40,(he+1)*$*40)-ve(Me*$*40,(he-1)*$*40),me=new I(-oe,-ge,2).normalize(),Ee=(he*256+Me)*4;J[Ee]=(me.x*.5+.5)*255,J[Ee+1]=(me.y*.5+.5)*255,J[Ee+2]=(me.z*.5+.5)*255,J[Ee+3]=255}let K=new Qn(J,256,256);return K.wrapS=K.wrapT=un,K.repeat.set(60,4),K.needsUpdate=!0,K})(),l;n.isMobile?(l=new $e(new vt(3600,It.zNear-It.zFar+10),new pn({color:1914432,roughness:.06,metalness:.1,normalMap:c,normalScale:new Te(.35,.35),clearcoat:1,clearcoatRoughness:.1})),r.update.push(W=>{c.offset.set(W*.004,W*.011)})):(c.repeat.set(1,1),l=new Fa(new vt(3600,It.zNear-It.zFar+10),{textureWidth:1024,textureHeight:1024,waterNormals:c,sunDirection:new I(.3,.6,-.7).normalize(),sunColor:16769712,waterColor:862e3,distortionScale:1.6,fog:!0,alpha:1}),l.material.uniforms.size.value=6,r.water=l,r.update.push((W,J)=>{l.material.uniforms.time.value=W*.35,l.visible=!J||J.position.z<-380})),l.rotation.x=-Math.PI/2,l.position.set(0,It.level,(It.zNear+It.zFar)/2),i.add(l);let h=lt("concrete",{repeat:[900,1.2],color:10262154});for(let W of[It.zNear,It.zFar]){let J=new $e(new ze(3600,4.5,2),h);J.position.set(0,-2.2,W+(W===It.zNear?-1:1)),J.receiveShadow=!0,i.add(J)}let f=lt("asphalt",{side:Lt,normalScale:1.2,envMapIntensity:1.1}),d=new $e(kf(e,-Xi,Xi,0,9,1),f);d.receiveShadow=!0,i.add(d),r.road=f;let p=wn(lt("pavers",{side:Lt}),{height:.4,strength:0});for(let[W,J]of[[Xi,nn],[-nn,-Xi]]){let ve=kf(e,W,J,.16,2.4,1),K=ve.attributes.uv;for(let Me=0;Me<K.count;Me++)K.setX(Me,K.getX(Me)*((nn-Xi)/2.4));let he=new $e(ve,p);he.receiveShadow=!0,i.add(he)}let v=new nt({map:Vt.curb_col,roughness:.8,side:Lt}),_=lt("concrete",{repeat:[1,.05],side:Lt});for(let W of[Xi,-Xi]){let J=new $e(Vf(e,W,.16,1),v);J.receiveShadow=!0,i.add(J)}for(let W of[nn,-nn])i.add(new $e(Vf(e,W,.16),_));let m=(W,J=6)=>W<It.zNear+J&&W>It.zFar-J,g=(W,J,ve)=>t.some(K=>Math.hypot(K.x-W,K.z-J)<K.r+ve),R=r_(),E=[],S=[],F=[],D=[],L=new Ba(ei(77),{lite:n.isMobile}),T=(W,J,ve,K,he,Me,$=nn+.6,oe=0,ge=0)=>{let me=Math.hypot(ve,K)/2;if(m(J,me+4)||g(W,J,me))return!1;let Ee=Math.cos(Me),H=Math.sin(Me);for(let[Se,Qe]of[[-ve/2,-K/2],[ve/2,-K/2],[-ve/2,K/2],[ve/2,K/2],[0,0]]){let pt=W+Se*Ee+Qe*H,Ut=J-Se*H+Qe*Ee;if(e.distToRoad(pt,Ut)<$)return!1}let G=Gf[Math.floor(s()*Gf.length)];if(oe){let Se=sr(new ze(ve,he,K).translate(0,he/2,0));Mi(Se,G),Se.rotateY(Me),Se.translate(W,0,J),D.push(_n(Se)),L.addBuilding({x:W,z:J,rot:Me,side:oe,perp:ve,along:K,floors:ge,tint:G})}else{let Se=o_(ve,he,K,s);Mi(Se,G),Se.rotateY(Me),Se.translate(W,0,J),E.push(_n(Se))}let ee=new ze(ve+.3,.6,K+.3);ee.translate(0,he+.3,0),Mi(ee,"#8a8378");let pe=[ee],Ce=1+Math.floor(s()*3);for(let Se=0;Se<Ce;Se++){let Qe=new ht(.7,.75,1.5,14);Qe.translate((s()-.5)*(ve-2),he+1.35,(s()-.5)*(K-2)),Mi(Qe,"#141414"),pe.push(Qe)}if(s()<.4){let Se=new ze(2.5,2.4,2.5);Se.translate((s()-.5)*(ve-3),he+1.2,(s()-.5)*(K-3)),Mi(Se,"#bdb4a3"),pe.push(Se)}for(let Se of pe)Se.rotateY(Me),Se.translate(W,0,J),S.push(_n(Se,["position","normal","color"]));return!0},M={};for(let W of[-1,1]){let J=4,ve=e.length;for(;J<ve+30;){let K=8+s()*8,he=Math.min(1,J/ve);e.frame(he,M);let Me=9+s()*7,oe=s()<.06?8+Math.floor(s()*5):2+Math.floor(s()*3.2),ge=Wi+oe*ir+.3,me=nn+1.2+Me/2+s()*1.5,Ee=M.p.x+M.r.x*W*me,H=M.p.z+M.r.z*W*me,G=Math.atan2(M.t.x,M.t.z);T(Ee,H,Me,K,ge,G,nn+.6,W,oe),J+=K+.6+s()*2.5}for(J=0;J<e.length+60;){let K=Math.min(1,J/e.length);e.frame(K,M);let he=12+s()*14,Me=12+s()*14,$=s()<.18?34+s()*40:12+s()*16,oe=34+s()*30,ge=M.p.x+M.r.x*W*oe,me=M.p.z+M.r.z*W*oe;T(ge,me,he,Me,$,Math.atan2(M.t.x,M.t.z)+(s()-.5)*.3,20),J+=he+6+s()*10}}for(let W=0;W<70;W++){let J=(s()-.5)*520,ve=It.zFar-24-s()*240,K=12+s()*18,he=12+s()*18,Me=s()<.3?40+s()*55:14+s()*22;T(J,ve,K,he,Me,(s()-.5)*.4,14)}for(let W=0;W<36;W++){let J=(s()<.5?-1:1)*(26+s()*240),ve=It.zNear+22+s()*70;T(J,ve,12+s()*10,10+s()*10,10+s()*22,(s()-.5)*.2,14)}let y=new nt({map:R.map,emissiveMap:R.emissive,emissive:16777215,emissiveIntensity:0,vertexColors:!0,roughness:.88}),C=wn(lt("plaster",{vertexColors:!0,normalScale:1.4}),{height:3.2,strength:.38}),B=new $e(Wn([...D,...L.wallGeos]),C);B.castShadow=!0,B.receiveShadow=!0,i.add(B);let V=L.build(i),X=new $e(Wn(E),y);X.castShadow=!0,X.receiveShadow=!0,i.add(X);let re=new $e(Wn(S),new nt({vertexColors:!0,roughness:.85}));if(re.castShadow=!0,re.receiveShadow=!0,i.add(re),F.length){let W=new $e(Wn(F),new nt({vertexColors:!0,roughness:.75,side:Lt}));W.castShadow=!0,i.add(W)}r.windows=y;let N=Wn([_n(new ht(.07,.11,7,10).translate(0,3.5,0),["position","normal","uv"]),_n(new ze(.07,.07,1.8).translate(0,6.95,.9),["position","normal","uv"]),_n(new ze(.3,.12,.6).translate(0,6.9,1.85),["position","normal","uv"])]),Q=new ze(.26,.04,.5).translate(0,6.83,1.85),k=[];for(let W=6;W<e.length-10;W+=26){e.frame(W/e.length,M);for(let J of[-1,1]){let ve=Xi+1,K=M.p.x+M.r.x*J*ve,he=M.p.z+M.r.z*J*ve;if(g(K,he,1))continue;let Me=Math.atan2(-M.r.x*J,-M.r.z*J);k.push({x:K,z:he,rot:Me,side:J,onBridge:m(he,0)})}}let Y=new fn(N,lt("steel",{color:4870230,repeat:[.5,2]}),k.length),se=new nt({color:16773840,emissive:16763266,emissiveIntensity:0}),te=new fn(Q,se,k.length),Ie=ni("rgba(255,196,120,0.9)","rgba(255,170,90,0)",128),qe=new xn({map:Ie,transparent:!0,opacity:0,depthWrite:!1,blending:Jn}),le=new fn(new vt(8,8).rotateX(-Math.PI/2),qe,k.length),_e=new je,be=new zt,xe=new I,Fe=new I(1,1,1);k.forEach((W,J)=>{be.setFromAxisAngle(new I(0,1,0),W.rot),_e.compose(xe.set(W.x,.16,W.z),be,Fe),Y.setMatrixAt(J,_e),te.setMatrixAt(J,_e);let ve=W.x+Math.sin(W.rot)*1.85,K=W.z+Math.cos(W.rot)*1.85;_e.compose(xe.set(ve,.03,K),new zt,Fe),le.setMatrixAt(J,_e)}),Y.castShadow=!0,le.renderOrder=2,i.add(Y,te,le),r.lampHead=se,r.lampPool=qe;let Xe=[],Ze={"-1":k.filter(W=>W.side===-1&&!W.onBridge),1:k.filter(W=>W.side===1&&!W.onBridge)};for(let W of["-1","1"]){let J=Ze[W];for(let ve=0;ve<J.length-1;ve++){let K=new I(J[ve].x,6.2,J[ve].z),he=new I(J[ve+1].x,6.2,J[ve+1].z);if(!(K.distanceTo(he)>40))for(let Me=0;Me<3;Me++){let $=.8+Me*.35+s()*.4,oe=K.clone().setY(K.y-Me*.25);for(let ge=1;ge<=10;ge++){let me=ge/10,Ee=K.clone().lerp(he,me);Ee.y=6.2-Me*.25-Math.sin(me*Math.PI)*$,Xe.push(oe.x,oe.y,oe.z,Ee.x,Ee.y,Ee.z),oe=Ee}}}}let et=new Ct;et.setAttribute("position",new mt(Xe,3)),i.add(new ra(et,new Nr({color:1710618,transparent:!0,opacity:.7})));let ue=ei(5),Ae=[0,1,2].map(()=>{let W=[],J=[],ve=new I(0,1,0),K=(ge,me,Ee,H)=>{let G=ge.distanceTo(me),ee=new ht(H,Ee,G,9,3,!0);ee.translate(0,G/2,0);let pe=ee.attributes.uv;for(let Ce=0;Ce<pe.count;Ce++)pe.setXY(Ce,pe.getX(Ce)*2,pe.getY(Ce)*G);ee.applyQuaternion(new zt().setFromUnitVectors(ve,me.clone().sub(ge).normalize())),ee.translate(ge.x,ge.y,ge.z),W.push(_n(ee,["position","normal","uv"]))},he=new I((ue()-.5)*.6,3.2+ue()*1.2,(ue()-.5)*.6);K(new I(0,-.2,0),he,.32,.22);let Me=new I(0,6.4,0),$=[],oe=5+Math.floor(ue()*3);for(let ge=0;ge<oe;ge++){let me=ge/oe*Math.PI*2+ue()*.6,Ee=2.2+ue()*1.8,H=he.clone().add(new I(Math.cos(me)*Ee*.5,1.2+ue()*.8,Math.sin(me)*Ee*.5)),G=he.clone().add(new I(Math.cos(me)*Ee,2.4+ue()*1.6,Math.sin(me)*Ee));K(he,H,.16,.11),K(H,G,.11,.05),$.push(G,H.clone().lerp(G,.5))}$.push(he.clone().add(new I(0,3.2,0)));for(let ge of $)for(let me=0;me<9;me++){let Ee=1.5+ue()*1.1,H=new vt(Ee,Ee);H.rotateX(-Math.PI/2+(ue()-.5)*1.6),H.rotateY(ue()*Math.PI*2);let G=new I((ue()-.5)*1.8,(ue()-.3)*1.2,(ue()-.5)*1.8);H.translate(ge.x+G.x,ge.y+G.y,ge.z+G.z);let ee=H.attributes.position,pe=H.attributes.normal;for(let Ce=0;Ce<ee.count;Ce++){let Se=new I(ee.getX(Ce),ee.getY(Ce),ee.getZ(Ce)).sub(Me);Se.y*=1.6,Se.normalize(),pe.setXYZ(Ce,Se.x,Se.y,Se.z)}J.push(_n(H,["position","normal","uv"]))}return{wood:Wn(W),leaves:Wn(J)}}),O=[];for(let W=14;W<e.length;W+=9+s()*10){e.frame(W/e.length,M);let J=s()<.5?-1:1,ve=nn-.9,K=M.p.x+M.r.x*J*ve,he=M.p.z+M.r.z*J*ve;m(he,8)||g(K,he,9)||O.push([K,he,.7+s()*.35,s()*6])}for(let W=0;W<260;W++){let J=(s()-.5)*500,ve=60-s()*900;m(ve,10)||g(J,ve,3)||e.distToRoad(J,ve)<12||O.push([J,ve,.9+s()*.6,s()*6])}let Ve=lt("bark",{normalScale:1.5}),we=new nt({map:Vt.leaves_col,normalMap:Vt.leaves_nor,alphaTest:.45,side:Lt,roughness:.78,color:16777215});we.map.wrapS=we.map.wrapT=Bn;let Ge=new Dr({depthPacking:uh,map:Vt.leaves_col,alphaTest:.45}),Le=new We;Ae.forEach((W,J)=>{let ve=O.filter((Me,$)=>$%3===J);if(!ve.length)return;let K=new fn(W.wood,Ve,ve.length),he=new fn(W.leaves,we,ve.length);he.customDepthMaterial=Ge,ve.forEach(([Me,$,oe,ge],me)=>{be.setFromAxisAngle(new I(0,1,0),ge),_e.compose(xe.set(Me,.1,$),be,new I(oe,oe,oe)),K.setMatrixAt(me,_e),he.setMatrixAt(me,_e),he.setColorAt(me,Le.setHSL(.22+s()*.06,.45+s()*.2,.62+s()*.18))}),K.castShadow=he.castShadow=!0,K.receiveShadow=he.receiveShadow=!0,i.add(K,he)});let Je=new Ct,Oe=[];for(let W=0;W<1800;W++){let J=s()*Math.PI*2,ve=Math.acos(s()*.92);Oe.push(Math.sin(ve)*Math.cos(J)*1400,Math.cos(ve)*1400,Math.sin(ve)*Math.sin(J)*1400)}Je.setAttribute("position",new mt(Oe,3));let U=new ts({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),b=new ks(Je,U);i.add(b);let q=new $e(new dn(18,32,16),new xn({color:16774880,fog:!1,transparent:!0,opacity:0})),ce=new xi(new Kn({map:ni("rgba(255,240,210,0.55)","rgba(255,240,210,0)"),fog:!1,transparent:!0,opacity:0,depthWrite:!1}));ce.scale.set(220,220,1),i.add(q,ce);let ye=new Ws().load("assets/tex/cloud.webp");ye.colorSpace=jt;let fe=new dt,Ye=[];for(let W=0;W<46;W++){let J=new Kn({map:ye,transparent:!0,depthWrite:!1,fog:!1,opacity:.55+s()*.35,rotation:s()*6.28});J.userData.base=J.opacity,Ye.push(J);let ve=new xi(J),K=s()*Math.PI*2,he=900+s()*700;ve.position.set(Math.cos(K)*he,140+s()*260,Math.sin(K)*he);let Me=260+s()*420;ve.scale.set(Me*(1.4+s()),Me,1),ve.userData.base=J.opacity,fe.add(ve)}return fe.renderOrder=-1,i.add(fe),r.clouds=fe,r.tintClouds=(W,J)=>Ye.forEach(ve=>{ve.color.copy(W),ve.opacity=ve.userData.base*J}),r.sky={stars:b,starMat:U,moon:q,moonGlow:ce},r.setNight=W=>{y.emissiveIntensity=W*1.25,V.setNight(W),se.emissiveIntensity=W*6,qe.opacity=W*.55,U.opacity=Math.max(0,W-.35)*1.4,q.material.opacity=Math.max(0,W-.3),ce.material.opacity=Math.max(0,W-.3)*.8},r}function Yf(i,e){let t=new dt,n=It.zNear+6,s=It.zFar-6,r=n-s,o=7.2,a=E=>{let S=[[0,7],[.22,30],[.36,21],[.5,15.5],[.64,21],[.78,30],[1,7]];for(let F=0;F<S.length-1;F++)if(E<=S[F+1][0]){let D=(E-S[F][0])/(S[F+1][0]-S[F][0]);return S[F][1]+(S[F+1][1]-S[F][1])*D}return 7},c=26,l=[],h=(E,S,F)=>new I(E,S,n-F*r);for(let E of[-o,o]){for(let S=0;S<c;S++){let F=S/c,D=(S+1)/c;l.push([h(E,.4,F),h(E,.4,D),.55]),l.push([h(E,a(F),F),h(E,a(D),D),.6]),l.push([h(E,.4,F),h(E,a(F),F),.35]),l.push([h(E,.4,F),h(E,a(D),D),.22]),l.push([h(E,a(F),F),h(E,.4,D),.22])}l.push([h(E,.4,1),h(E,a(1),1),.35]);for(let S of[.22,.78])l.push([h(E,It.level-1,S),h(E,a(S)+2,S),1.4])}for(let E=0;E<=c;E++){let S=E/c,F=a(S);F>9&&(l.push([h(-o,F,S),h(o,F,S),.28]),E<c&&l.push([h(-o,F,S),h(o,a((E+1)/c),(E+1)/c),.16]))}let f=lt("steel",{color:6976124,repeat:[1,3],normalScale:1.5}),d=new fn(new ze(1,1,1),f,l.length),p=new je;l.forEach(([E,S,F],D)=>d.setMatrixAt(D,If(E,S,F,F,p))),d.castShadow=!0,d.receiveShadow=!0,t.add(d);let v=new $e(new ze(o*2+1,1.4,r+2),lt("steel",{color:5264988,repeat:[2,20]}));v.position.set(0,-.72,n-r/2),v.receiveShadow=!0,t.add(v);for(let E of[.22,.78]){let S=new $e(new ze(o*2+6,4,7),lt("concrete",{repeat:[5,1]}));S.position.set(0,It.level+.6,n-E*r),t.add(S)}let _=[];for(let E of[-o,o])for(let S=0;S<=120;S++){let F=S/120;_.push(h(E,a(F)+.45,F))}for(let E of[-o-.4,o+.4])for(let S=0;S<=60;S++){let F=S/60;_.push(h(E,.9,F))}let m=new nt({color:16770736,emissive:16761963,emissiveIntensity:0}),g=new fn(new dn(.16,8,6),m,_.length);_.forEach((E,S)=>{p.makeTranslation(E.x,E.y,E.z),g.setMatrixAt(S,p)}),t.add(g);let R=new $e(new vt(22,140),new xn({map:ni("rgba(255,190,110,0.6)","rgba(255,170,90,0)"),transparent:!0,opacity:0,depthWrite:!1,blending:Jn}));return R.rotation.x=-Math.PI/2,R.position.set(0,It.level+.05,n-r/2),t.add(R),i.add(t),{group:t,setNight(E){m.emissiveIntensity=.1+E*3.2,R.material.opacity=E*.8}}}var eo=new I;function In(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;eo.copy(e),eo[n]=0,eo.normalize();let l=.5*o/(o+a),h=1-eo.angleTo(i)/c;return Math.sign(eo[t])===1?h*l:a/(o+a)+l+l*(1-h)}var Gt=class extends ze{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new I,c=new I,l=new I(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,v=new I,_=.5/s;for(let m=0,g=0;m<h.length;m+=3,g+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/p)){case 0:v.set(1,0,0),d[g+0]=In(v,c,"z","y",r,n),d[g+1]=1-In(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),d[g+0]=1-In(v,c,"z","y",r,n),d[g+1]=1-In(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),d[g+0]=1-In(v,c,"x","z",r,e),d[g+1]=In(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),d[g+0]=1-In(v,c,"x","z",r,e),d[g+1]=1-In(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),d[g+0]=1-In(v,c,"x","y",r,e),d[g+1]=1-In(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),d[g+0]=In(v,c,"x","y",r,e),d[g+1]=1-In(v,c,"y","x",r,t);break}}};var Jt=1.62;function a_(){let i=new Hi,e=[[2.16,.46],[2.22,.66],[2.16,.88],[1.98,.98],[1.6,1.03],[.85,1.06],[-1.25,1.06],[-1.95,1.03],[-2.16,.96],[-2.22,.78],[-2.18,.52]];i.moveTo(2.16,.46);for(let n=1;n<e.length;n++)i.lineTo(e[n][0],e[n][1]);let t=(n,s,r)=>{let c=Math.asin(.13636363636363635),l=18;for(let h=0;h<=l;h++){let f=Math.PI-c-h/l*(Math.PI-2*c);i.lineTo(n+Math.cos(f)*.44,.36+Math.sin(f)*.44)}};return i.lineTo(-1.79,.42),t(-1.35),i.lineTo(.91,.42),t(1.35),i.lineTo(2.16,.46),i}function qf(i,e,t=.07,n=5){let s=new Vs(i,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t*.85,bevelSegments:n,curveSegments:24});return s.translate(0,0,-e/2),s.computeVertexNormals(),s}function Zf(i,{yMid:e=.78,ky:t=.9,kx:n=.18,lean:s=0}={}){let r=i.attributes.position,o=i.attributes.normal,a=new I;for(let c=0;c<o.count;c++){let l=o.getZ(c);if(Math.abs(l)<.85)continue;let h=r.getX(c),f=r.getY(c);a.set(Math.sign(h)*Math.pow(Math.abs(h)/2.2,3)*n,(f-e)*t+s,Math.sign(l)).normalize(),o.setXYZ(c,a.x,a.y,a.z)}return i}function bh(i,e,t,n=.06,s=0){let r=new I(e[0],e[1],s),o=new I(t[0],t[1],s),a=r.distanceTo(o),c=new $e(new ze(n,a,n*.9),i);return c.position.addVectors(r,o).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new I(0,1,0),o.clone().sub(r).normalize()),c.castShadow=!0,c}var za;function l_(){if(za)return za;let i=bt(Tt(512,128,(n,s,r)=>{n.clearRect(0,0,s,r),n.fillStyle="#1b3f8f",n.font='700 64px "JetBrains Mono", monospace',n.textAlign="center",n.textBaseline="middle",n.fillText("NO REFUSAL",s/2,r/2+4)})),e=bt(Tt(512,128,(n,s,r)=>{n.fillStyle="#f6f3ea",n.fillRect(0,0,s,r),n.strokeStyle="#111",n.lineWidth=8,n.strokeRect(6,6,s-12,r-12),n.fillStyle="#111",n.font='700 66px "JetBrains Mono", monospace',n.textAlign="center",n.textBaseline="middle",n.fillText("WB 04 PP 2016",s/2,r/2+4)})),t=ni("rgba(0,0,0,0.85)","rgba(0,0,0,0)",128);return za={door:i,plate:e,shadow:t},za}function Th({lights:i=!0,color:e=15908123}={}){let t=l_(),n=new dt,s=new dt,r=new dt;r.rotation.y=-Math.PI/2,s.add(r),n.add(s);let o=wn(new pn({color:e,roughness:.34,metalness:.05,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.2}),{height:.95,strength:.32}),a=new nt({color:15330543,metalness:1,roughness:.14}),c=new pn({color:1845806,metalness:0,roughness:.02,envMapIntensity:1.1,transparent:!0,opacity:.34,specularIntensity:1,ior:1.52,depthWrite:!1}),l=new nt({color:2758420,roughness:.45}),h=new nt({color:1381135,roughness:.8}),f=new nt({color:789517,roughness:.7}),d=new nt({color:1315860,roughness:.92}),p=new nt({color:16775398,emissive:16773577,emissiveIntensity:.15,roughness:.1,metalness:.2}),v=new nt({color:7997962,emissive:16718362,emissiveIntensity:.25,roughness:.2}),_=new nt({color:16753178,emissive:16747008,emissiveIntensity:.2}),m=(te,Ie,qe=0,le=0,_e=0,be=!0)=>{let xe=new $e(te,Ie);return xe.position.set(qe,le,_e),xe.castShadow=be,xe.receiveShadow=!0,r.add(xe),xe};m(Zf(qf(a_(),Jt-.14,.07,6)),o);let g=new Hi;g.moveTo(-1.22,1),g.lineTo(-.95,1.47),g.lineTo(.42,1.49),g.lineTo(.84,1),g.lineTo(-1.22,1),m(Zf(qf(g,Jt-.3,.035,3),{yMid:1,ky:.2,kx:.05,lean:.3}),c),m(new Gt(1.5,.08,Jt-.2,3,.035),o,-.27,1.5,0);let R=(Jt-.24)/2;for(let te of[-R,R])r.add(bh(o,[.84,1.03],[.42,1.5],.07,te)),r.add(bh(o,[-.22,1.03],[-.22,1.5],.08,te)),r.add(bh(o,[-1.2,1.03],[-.95,1.5],.09,te));for(let te of[-Jt/2-.004,Jt/2+.004]){m(new ze(2.1,.022,.012),a,-.2,1.04,te,!1),m(new ze(3.95,.03,.014),a,0,.78,te,!1);for(let qe of[.86,-.22,-1.24])m(new ze(.012,.56,.006),f,qe,.75,te,!1);for(let qe of[.62,-.42])m(new ze(.16,.03,.03),a,qe,.95,te+Math.sign(te)*.01,!1);let Ie=new $e(new vt(.95,.24),new nt({map:t.door,transparent:!0,roughness:.4,depthWrite:!1}));Ie.position.set(.28,.6,te+Math.sign(te)*.006),te<0&&(Ie.rotation.y=Math.PI),r.add(Ie),m(new ze(.06,.08,.12),a,.78,1.12,te+Math.sign(te)*.08)}m(new Gt(.16,.15,Jt+.08,3,.05),a,2.26,.48,0),m(new Gt(.16,.15,Jt+.06,3,.05),a,-2.25,.5,0),m(new ze(.05,.3,.92),f,2.2,.72,0,!1),m(new Gt(.06,.34,.98,2,.02),a,2.19,.72,0,!1).scale.set(1,1,1);for(let te=0;te<9;te++)m(new ze(.06,.28,.028),a,2.225,.72,-.4+te*.1,!1);let E=new ht(.115,.115,.08,32);E.rotateZ(Math.PI/2);let S=new ki(.12,.02,10,32);S.rotateY(Math.PI/2);for(let te of[-.6,.6])m(E,p,2.17,.76,te,!1),m(S,a,2.2,.76,te,!1),m(new ze(.04,.05,.1),_,2.2,.6,te*1.12,!1),m(new ze(.04,.17,.13),v,-2.2,.82,te*1.02,!1);let F=new nt({map:t.plate,roughness:.5}),D=m(new vt(.52,.13),F,2.345,.47,0,!1);D.rotation.y=Math.PI/2;let L=m(new vt(.52,.13),F,-2.34,.66,0,!1);L.rotation.y=-Math.PI/2,m(new ze(3.7,.22,Jt-.24),f,0,.42,0,!1),m(new ze(2.3,.05,Jt-.3),h,-.25,.64,0,!1),m(new ze(2.1,.03,Jt-.34),h,-.27,1.43,0,!1);for(let[te,Ie]of[[.12,-.14],[-.86,-1.12]])m(new Gt(.52,.2,Jt-.36,3,.06),l,te,.78,0,!1),m(new Gt(.14,.5,Jt-.36,3,.05),l,Ie,1.07,0,!1).rotation.z=.12;m(new Gt(.34,.22,Jt-.3,2,.05),h,.72,.98,0,!1);let T=new ki(.19,.018,8,32);T.rotateY(Math.PI/2),m(T,f,.46,1.1,.36,!1).rotation.z=.45,m(new ht(.02,.02,.3,8).rotateZ(Math.PI/2-.45),f,.6,1.04,.36,!1);let M=new nt({color:14209728,roughness:.85}),y=new nt({color:8015411,roughness:.55});m(new Gt(.26,.5,.4,3,.1),M,.02,1.1,.36,!1),m(new dn(.105,20,14),y,.06,1.45,.36,!1).scale.set(1,1.15,.95),m(new dn(.11,20,10,0,Math.PI*2,0,Math.PI/2),new nt({color:1314829,roughness:.9}),.05,1.48,.36,!1);for(let te of[.22,.5])m(new ht(.035,.035,.42,8).rotateZ(Math.PI/2-.5),M,.26,1.16,te,!1);m(new Gt(.14,.16,.1,2,.02),new nt({color:6165010,roughness:.45}),.78,1.18,-(Jt/2)-.02,!0),m(new ze(.015,.1,.07),new nt({color:14210248}),.8,1.32,-(Jt/2)-.02,!1);let C=new nt({color:13225168,metalness:1,roughness:.28});for(let te of[-.62,.62]){m(new ht(.018,.018,1.4,10).rotateZ(Math.PI/2),C,-.27,1.64,te);for(let Ie of[-.9,.35])m(new ht(.014,.014,.12,8),C,Ie,1.58,te)}for(let te of[-.85,-.27,.3])m(new ht(.014,.014,1.24,8).rotateX(Math.PI/2),C,te,1.64,0);for(let te of[-R-.04,R+.04])m(new ze(1.5,.02,.02),a,-.27,1.47,te,!1);for(let te of[-.32,.22]){let Ie=m(new ze(.012,.012,.42),f,.86,1.07,te,!1);Ie.rotation.x=.25}m(new ht(.004,.006,.9,6),a,1.5,1.45,-.7,!1).rotation.z=-.25;let B=new ht(.42,.42,Jt-.12,20,1,!0,Math.PI/2,Math.PI);B.rotateX(Math.PI/2);let V=new nt({color:657930,roughness:.95,side:Nt});for(let te of[1.35,-1.35])m(B,V,te,.36,0,!1);let X=[],re=new ki(.245,.095,16,40),N=new ht(.335,.335,.17,40,1,!0);N.rotateX(Math.PI/2);let Q=new ht(.17,.19,.04,32);Q.rotateX(Math.PI/2);let k=new dn(.07,16,8,0,Math.PI*2,0,Math.PI/2);k.rotateX(Math.PI/2);for(let te of[1.35,-1.35])for(let Ie of[-(Jt/2-.13),Jt/2-.13]){let qe=new dt;qe.position.set(te,.335,Ie);let le=Math.sign(Ie),_e=new $e(re,d),be=new $e(N,d),xe=new $e(Q,a);xe.position.z=le*.07;let Fe=new $e(k,a);Fe.position.z=le*.085,Fe.scale.z=le;for(let Xe=0;Xe<4;Xe++){let Ze=new $e(new ze(.3,.025,.02),f);Ze.rotation.z=Xe*Math.PI/4,Ze.position.z=le*.093,qe.add(Ze)}[_e,be,xe,Fe].forEach(Xe=>{Xe.castShadow=!0,qe.add(Xe)}),r.add(qe),X.push(qe)}let Y=new $e(new vt(2.4,5.4),new xn({map:t.shadow,transparent:!0,depthWrite:!1,opacity:.75}));Y.rotation.x=-Math.PI/2,Y.position.y=.012,Y.renderOrder=1,n.add(Y);let se=null;if(i){se=new _a(16769712,0,55,.5,.55,1.2),se.position.set(0,.8,2.2);let te=new Ot;te.position.set(0,0,14),n.add(te),se.target=te,n.add(se)}return{root:n,body:s,wheels:X,setNight(te){p.emissiveIntensity=.15+te*5,v.emissiveIntensity=.25+te*3,se&&(se.intensity=te*60)},spin(te){for(let Ie of X)Ie.rotation.z-=te/.335}}}var Ah='"Instrument Serif", Georgia, serif',as='"Manrope", system-ui, sans-serif',Xn='"JetBrains Mono", ui-monospace, monospace';function $f(i,e,t,n,s){let r=i.frame(t);return e.position.copy(r.p).addScaledVector(r.r,n*s),e.rotation.y=Math.atan2(-r.r.x*n,-r.r.z*n),e}var ct=i=>new nt(i);function He(i,e,t=0,n=0,s=0,r){let o=new $e(i,e);return o.position.set(t,n,s),o.castShadow=!0,o.receiveShadow=!0,r&&r.add(o),o}function sn(i,e,t,n=3){return sr(new ze(i,e,t),n)}function c_(i){for(let e of["map","normalMap","roughnessMap","metalnessMap","aoMap"])i[e]&&(i[e]=i[e].clone(),i[e].center.set(.5,.5),i[e].rotation=Math.PI/2,i[e].needsUpdate=!0);return i}function Jf(i,e,t,n,s){let r=Hf(s);return r.position.set(e,t,n),r.rotation.y=-Math.PI/2,i.add(r),r}function Ha(i,e,t){return bt(Tt(i,e,t))}function Kf(){let i=new dt,e=lt("wood",{color:10123866}),t=lt("corrugated",{color:10133668});He(sn(3.2,1.1,1.3,1.5),e,0,.55,0,i),He(new ze(3.4,.08,1.5),ct({color:3811868}),0,1.12,0,i);for(let l of[-1.55,1.55])for(let h of[-.6,.6])He(new ht(.04,.04,2.6),e,l,1.3,h,i);let n=He(sn(4,.05,2.4,2),t,0,2.6,.2,i);n.rotation.x=.12;let s=He(new ht(.16,.22,.34,20),ct({color:12088115,metalness:.9,roughness:.3}),-.8,1.33,.1,i);He(new ht(.2,.2,.1,16),ct({color:546}),-.8,1.19,.1,i);for(let l=0;l<8;l++)He(new ht(.045,.032,.08,10),ct({color:10506797,roughness:1}),.2+l%4*.13,1.2,-.1+Math.floor(l/4)*.14,i);He(new ze(2.2,.08,.4),e,.4,.5,1.6,i);for(let l of[-.5,1.3])He(new ze(.08,.5,.36),e,l,.25,1.6,i);let r=Ha(512,128,(l,h,f)=>{l.fillStyle="#b8321f",l.fillRect(0,0,h,f),l.fillStyle="#ffe9b0",l.font=`700 62px ${as}`,l.textAlign="center",l.textBaseline="middle",l.fillText("CHA  \xB7  \u20B910",h/2,f/2+3)}),o=He(new vt(2.2,.55),ct({map:r,roughness:.7}),0,2.25,.62,i);o.castShadow=!1;let a=ni("rgba(255,255,255,0.55)","rgba(255,255,255,0)"),c=[];for(let l=0;l<10;l++){let h=new xi(new Kn({map:a,transparent:!0,depthWrite:!1,opacity:0}));h.userData.o=l/10,i.add(h),c.push(h)}return{group:i,radius:4,update(l){for(let h of c){let f=(l*.25+h.userData.o)%1;h.position.set(s.position.x+Math.sin(f*6+h.userData.o*9)*.15,1.55+f*1.4,s.position.z);let d=.25+f*.7;h.scale.set(d,d,1),h.material.opacity=Math.sin(f*Math.PI)*.22}}}}function Qf(){let i=new dt,e=ei(101),t=wn(lt("plaster",{color:15390382,normalScale:1.4}),{height:3,strength:.4}),n=He(sn(14,8,8),t,0,4,-6.5,i);He(sn(14.5,.45,8.5),lt("concrete",{color:12103324}),0,8.2,-6.5,i),He(sn(14.3,.18,.3),t,0,4.95,-2.4,i);let s=He(new vt(6,3.2),c_(lt("corrugated",{color:9213081,repeat:[1.6,3]})),-3,1.6,-2.48,i),r=bt(Tt(256,256,(T,M,y)=>{let C=T.createLinearGradient(0,0,0,y);C.addColorStop(0,"#3a2a1c"),C.addColorStop(1,"#120c08"),T.fillStyle=C,T.fillRect(0,0,M,y);let B=T.createRadialGradient(M*.5,y*.15,4,M*.5,y*.15,M*.6);B.addColorStop(0,"rgba(255,230,180,0.9)"),B.addColorStop(1,"rgba(255,200,120,0)"),T.fillStyle=B,T.fillRect(0,0,M,y),T.fillStyle="rgba(160,130,90,0.5)";for(let V=0;V<5;V++)T.fillRect(20+V*46,y*.45,34,y*.4)})),o=ct({map:r,emissive:16777215,emissiveMap:r,emissiveIntensity:.35,roughness:.3});He(new vt(3.4,3),o,3.6,1.5,-2.48,i);for(let[T,M]of[-4.5,0,4.5].entries())Jf(i,M,6.3,-2.5,{lit:T===1,shutterColor:"#3f5f7a",open:.3+T*.15});let a=Ha(1024,160,(T,M,y)=>{T.fillStyle="#1f3b63",T.fillRect(0,0,M,y),T.fillStyle="#f5c518",T.fillRect(0,y-10,M,10),T.fillStyle="#fff",T.font=`800 70px ${as}`,T.textBaseline="middle",T.fillText("INVOICE DESK",36,y/2-4),T.font=`500 30px ${Xn}`,T.textAlign="right",T.fillStyle="#c9d6ea",T.fillText("DATA ENTRY \xB7 ERP \xB7 EST. 2016",M-36,y/2-2)});He(new ze(12,1.6,.2),ct({map:a,emissiveMap:a,emissive:16777215,emissiveIntensity:.25}),0,4.1,-2.35,i);let c=[],l=[{s:[.42,.11,.3],c:[16052972,16777215,15525590]},{s:[.5,.32,.36],c:[16777215,15260875,14272688]},{s:[.32,.29,.07],c:[2772879,9382442,3111493,2039583]}];for(let T=-6;T<=6;T++)for(let M=-2;M<=3;M++){let y=T*.55+(e()-.5)*.2,C=M*.5+(e()-.5)*.2,B=Math.max(0,1-Math.hypot(T/6.5,(M-.2)/3.4)),V=0,X=Math.floor(B*16+e()*2);for(let re=0;re<X;re++){let N=e()<.6?0:e()<.6?1:2,Q=l[N],k=Q.s;c.push({k:N,x:y,y:V+k[1]/2,z:C,s:k,rot:(e()-.5)*.4,col:N===0?16777215:Q.c[Math.floor(e()*Q.c.length)]}),V+=k[1]}}let h=bt(Tt(128,128,(T,M,y)=>{T.fillStyle="#f4f2ea",T.fillRect(0,0,M,y);for(let C=0;C<y;C+=2)T.fillStyle=`rgba(150,145,130,${.15+Math.random()*.2})`,T.fillRect(0,C,M,1);T.fillStyle="#2c5aa0",T.fillRect(0,y*.35,M,y*.3),T.fillStyle="#fff",T.font="700 18px Manrope, sans-serif",T.fillText("A4 \xB7 75gsm",10,y*.55)})),f=bt(Tt(128,128,(T,M,y)=>{T.fillStyle="#b08a5a",T.fillRect(0,0,M,y);for(let C=0;C<900;C++)T.fillStyle=`rgba(${90+Math.random()*60},${60+Math.random()*40},30,0.25)`,T.fillRect(Math.random()*M,Math.random()*y,3,1);T.fillStyle="rgba(200,180,140,0.7)",T.fillRect(M*.42,0,M*.16,y),T.fillStyle="#222",T.font="700 14px JetBrains Mono, monospace",T.fillText("FY 2016-17",8,y-12)})),d=bt(Tt(128,128,(T,M,y)=>{T.fillStyle="#ffffff",T.fillRect(0,0,M,y),T.fillStyle="rgba(0,0,0,0.25)",T.fillRect(0,0,M,8),T.fillRect(0,y-8,M,8),T.fillStyle="#f6f1e0",T.fillRect(M*.3,y*.25,M*.4,y*.3),T.beginPath(),T.arc(M/2,y*.78,9,0,7),T.fillStyle="#222",T.fill()})),p={0:[],1:[],2:[]};c.forEach(T=>p[T.k].push(T));let v=new je,_=new zt,m=new We;[[0,h,.75],[1,f,.9],[2,d,.45]].forEach(([T,M,y])=>{let C=p[T];if(!C.length)return;let B=new fn(new Gt(1,1,1,2,.03),ct({map:M,roughness:y,color:16777215}),C.length);C.forEach((V,X)=>{_.setFromEuler(new An((Math.random()-.5)*.04,V.rot,(Math.random()-.5)*.04)),v.compose(new I(V.x,V.y,V.z),_,new I(...V.s)),B.setMatrixAt(X,v),B.setColorAt(X,m.set(V.col))}),B.castShadow=B.receiveShadow=!0,i.add(B)});let g=Tt(256,192,()=>{}),R=bt(g),E=T=>{let M=g.getContext("2d");M.fillStyle="#031a08",M.fillRect(0,0,256,192),M.fillStyle="#39ff6a",M.font=`600 14px ${Xn}`,["ERP v4.2  INVOICE ENTRY","------------------------","INV# 2016-0"+(4412+Math.floor(T*3)),"VENDOR  : ______","QTY     : ______","AMOUNT  : ______","GST     : ______","","> F2 SAVE   F3 NEXT","> REPEAT x 10,000"].forEach((C,B)=>M.fillText(C,10,20+B*17)),Math.floor(T*2)%2&&M.fillRect(92,20+9*17-12,9,14);for(let C=0;C<192;C+=3)M.fillStyle="rgba(0,0,0,0.25)",M.fillRect(0,C,256,1);R.needsUpdate=!0};E(0);let S=new dt;S.position.set(5.2,0,1.4),S.rotation.y=-.5,i.add(S),He(sn(1.6,.06,.8,1.5),lt("wood",{color:8018490}),0,.78,0,S);for(let T of[-.72,.72])for(let M of[-.32,.32])He(new ze(.05,.78,.05),ct({color:4007959}),T,.39,M,S);He(new Gt(.62,.52,.55,3,.05),ct({color:14209211,roughness:.6}),0,1.08,-.05,S),He(new vt(.5,.38),ct({map:R,emissiveMap:R,emissive:16777215,emissiveIntensity:1.4}),0,1.1,.226,S),He(new ze(.55,.04,.2),ct({color:13616814}),0,.83,.25,S);let F=ct({color:16777215,side:Lt,roughness:.7}),D=[];for(let T=0;T<26;T++){let M=He(new vt(.3,.42),F,0,0,0,i);M.castShadow=!0,M.userData={a:e()*6.28,rad:1+e()*3.2,h:2+e()*5,sp:.2+e()*.35,wob:e()*6},D.push(M)}let L=-1;return{group:i,radius:11,center:new I(0,0,-3),update(T,M){if(!M)return;for(let C of D){let B=C.userData,V=B.a+T*B.sp;C.position.set(Math.cos(V)*B.rad,B.h+Math.sin(T*.7+B.wob)*.6,.6+Math.sin(V)*B.rad*.6),C.rotation.set(T*B.sp*2+B.wob,V,Math.sin(T+B.wob))}let y=Math.floor(T*6);y!==L&&(L=y,E(T))}}}function jf(){let i=new dt,e=bt(Tt(256,256,(f,d)=>{let p=f.createLinearGradient(0,0,0,d);p.addColorStop(0,"#9fbcd0"),p.addColorStop(1,"#5d7d94"),f.fillStyle=p,f.fillRect(0,0,d,d),f.fillStyle="#2a333b";for(let v=0;v<4;v++)f.fillRect(0,v*64,d,5),f.fillRect(v*64,0,3,d)}),{repeat:!0});e.repeat.set(5,18);let t=new pn({map:e,metalness:.85,roughness:.08,clearcoat:1,envMapIntensity:1.4,emissive:2241348,emissiveIntensity:0}),n=74;He(new ze(20,n,20),t,0,n/2+6,-14,i);let s=ct({color:1778474,emissive:16773334,emissiveIntensity:.5,roughness:.2,metalness:.4});He(sn(24,6,22,4),wn(lt("concrete",{color:14209734})),0,3,-14,i),He(new vt(16,4.4),s,0,2.4,-2.98,i),He(sn(22,.5,2.5,4),lt("concrete",{color:12893616}),0,5.2,-2,i),He(sn(16,4,16,2),lt("steel",{color:4870746}),0,n+8,-14,i);let r=ct({color:16722474,emissive:16719904,emissiveIntensity:2});He(new ht(.1,.1,8),ct({color:1911}),0,n+14,-14,i),He(new dn(.35,12,8),r,0,n+18.2,-14,i);let o=Tt(1024,576,()=>{}),a=bt(o),c=Array.from({length:12},(f,d)=>.3+Math.abs(Math.sin(d*1.7))*.6),l=f=>{let d=o.getContext("2d");d.fillStyle="#081018",d.fillRect(0,0,1024,576),d.fillStyle="#f5c518",d.font=`700 30px ${Xn}`,d.fillText("KPI \xB7 WEEKLY QUALITY REVIEW",40,60),d.fillStyle="#7f93a8",d.font=`500 22px ${Xn}`,d.fillText("CENTRUM \xB7 SALES QA \xB7 2018\u20132020",40,96),[["CSAT",(88+Math.sin(f)*2).toFixed(1)+"%"],["CALLS QA",(1240+Math.floor(f*7)%60).toString()],["TREND","\u25B2 12%"]].forEach(([v,_],m)=>{let g=40+m*320;d.fillStyle="#101c28",d.fillRect(g,124,290,120),d.fillStyle="#7f93a8",d.font=`500 20px ${Xn}`,d.fillText(v,g+20,158),d.fillStyle="#ffffff",d.font=`400 64px ${Ah}`,d.fillText(_,g+20,226)}),c.forEach((v,_)=>{let m=(v+Math.sin(f*1.3+_)*.05)*230;d.fillStyle=_===11?"#f5c518":"#2b6cb0",d.fillRect(40+_*56,540-m,36,m)}),d.strokeStyle="#ff7a3d",d.lineWidth=4,d.beginPath();for(let v=0;v<=30;v++){let _=720+v*9.5,m=500-v*7-Math.sin(v*.8+f*2)*14;v?d.lineTo(_,m):d.moveTo(_,m)}d.stroke(),d.fillStyle="#7f93a8",d.font=`500 18px ${Xn}`,d.fillText("A dashboard is an argument.",720,300),a.needsUpdate=!0};l(0),He(sn(17,9.8,.5,2),lt("steel",{color:2764339}),0,13,-3.7,i),He(new vt(16.2,9.1),ct({map:a,emissiveMap:a,emissive:16777215,emissiveIntensity:1.15,roughness:.4}),0,13,-3.44,i);let h=-1;return{group:i,radius:16,center:new I(0,0,-14),update(f,d){if(!d)return;let p=Math.floor(f*8);p!==h&&(h=p,l(f)),r.emissiveIntensity=1+Math.max(0,Math.sin(f*3))*4},setNight(f){t.emissiveIntensity=f*.6,s.emissiveIntensity=.5+f*1.5}}}function ed(){let i=new dt,e=wn(lt("plaster",{color:15328472,normalScale:1.4}),{height:3,strength:.4});He(sn(16,11,10),e,0,5.5,-7,i),He(sn(16.5,.5,10.5),lt("concrete",{color:11905944}),0,11.2,-7,i),He(sn(16.3,.2,.3),e,0,9.4,-1.9,i);for(let[l,h]of[-5.5,-1.8,1.8,5.5].entries())Jf(i,h,7.6,-2,{lit:l%2===1,shutterColor:"#2f5e44",open:.25+l%3*.2});let t=Tt(1024,384,(l,h,f)=>{let d=l.createLinearGradient(0,0,0,f);d.addColorStop(0,"#fbfaf5"),d.addColorStop(1,"#dfe9e2"),l.fillStyle=d,l.fillRect(0,0,h,f);for(let m=60;m<h;m+=240){let g=l.createRadialGradient(m+60,6,2,m+60,6,120);g.addColorStop(0,"rgba(255,255,255,0.95)"),g.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=g,l.fillRect(m-60,0,240,120)}let p=ei(31),v=["#1f9d6a","#ffffff","#2b6cb0","#e85d4a","#f5c518","#8e5bd1","#f1f1f1","#ff8f3a","#0aa2c0"];for(let m=0;m<4;m++){let g=46+m*84,R=6;for(;R<h-30;){let S=p()<.25,F=S?12+p()*8:16+p()*26,D=S?30+p()*20:24+p()*30,L=v[Math.floor(p()*v.length)],T=l.createLinearGradient(R,0,R+F,0);T.addColorStop(0,L),T.addColorStop(.75,L),T.addColorStop(1,"rgba(0,0,0,0.35)"),l.fillStyle=T,S?(l.beginPath(),l.roundRect(R,g+62-D,F,D,5),l.fill(),l.fillStyle="#ddd",l.fillRect(R+F*.25,g+62-D-6,F*.5,7)):(l.fillRect(R,g+62-D,F,D),l.fillStyle="rgba(255,255,255,0.85)",l.fillRect(R+3,g+62-D*.62,F-6,D*.22),l.fillStyle="rgba(0,0,0,0.5)",l.fillRect(R+4,g+62-D*.55,(F-8)*p(),2)),R+=F+1+p()*2}l.fillStyle="#c9cfd2",l.fillRect(0,g+62,h,7),l.fillStyle="#ffe35a";for(let S=20;S<h;S+=90+p()*40)l.fillRect(S,g+63,26,5);let E=l.createLinearGradient(0,g+69,0,g+86);E.addColorStop(0,"rgba(0,0,0,0.25)"),E.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=E,l.fillRect(0,g+69,h,17)}let _=l.createLinearGradient(0,0,h,f);_.addColorStop(.1,"rgba(255,255,255,0)"),_.addColorStop(.18,"rgba(255,255,255,0.22)"),_.addColorStop(.26,"rgba(255,255,255,0)"),l.fillStyle=_,l.fillRect(0,0,h,f)}),n=bt(t),s=ct({map:n,emissiveMap:n,emissive:16777215,emissiveIntensity:.7,roughness:.15,metalness:.1});He(new vt(13,4.2),s,0,2.4,-1.98,i);for(let l of[-6.5,-2.2,2.2,6.5])He(new ze(.12,4.4,.12),ct({color:13684944,metalness:.9,roughness:.25}),l,2.3,-1.92,i);let r=Ha(1024,140,(l,h,f)=>{l.fillStyle="#0f7a4f",l.fillRect(0,0,h,f),l.fillStyle="#ffffff",l.font=`800 74px ${as}`,l.textBaseline="middle",l.fillText("PHARMACY",40,f/2),l.font=`600 34px ${Xn}`,l.textAlign="right",l.fillText("OPEN 24 \xD7 7",h-40,f/2)});He(new ze(15.5,1.5,.3),ct({map:r,emissiveMap:r,emissive:16777215,emissiveIntensity:.5}),0,5.05,-1.85,i);let o=ct({color:1032042,emissive:1695870,emissiveIntensity:1.5,roughness:.3}),a=new dt;a.position.set(7.4,6.6,.4),i.add(a),He(new ze(.06,.06,2.6),ct({color:1365}),0,.8,-1.2,a),He(new Gt(.5,1.6,.3,2,.06),o,0,0,0,a),He(new Gt(1.6,.5,.3,2,.06),o,0,0,0,a);let c=new xi(new Kn({map:ni("rgba(40,255,140,0.6)","rgba(40,255,140,0)"),transparent:!0,depthWrite:!1,blending:Jn}));c.scale.set(5,5,1),a.add(c),He(new ze(2.2,.08,.5),ct({color:3828618}),-4,.62,.3,i);for(let l of[-4.9,-3.1])He(new ze(.06,.6,.45),ct({color:819}),l,.3,.3,i);return{group:i,radius:11,center:new I(0,0,-6),update(l){let h=.75+.25*Math.sin(l*2.2);o.emissiveIntensity=1.2+h*2.2,c.material.opacity=.35+h*.4,a.rotation.y=Math.sin(l*.6)*.25},setNight(l){s.emissiveIntensity=.7+l*1.3}}}function td(){let i=new dt,e=ei(404),t=lt("corrugated",{color:9347762,normalScale:1.4}),n=wn(lt("concrete",{color:12762288})),s=lt("steel",{color:8226190}),r=lt("steel",{color:12087626,normalScale:1.5}),o=He(sn(110,.2,80,4),lt("concrete",{color:10130828}),0,.1,-40,i);o.castShadow=!1;for(let N=-54;N<=54;N+=3)Math.abs(N)<6||He(new ze(.08,2.4,.08),s,N,1.2,-.5,i);for(let N of[.6,1.4,2.2])He(new ze(48,.05,.05),s,-30,N,-.5,i),He(new ze(48,.05,.05),s,30,N,-.5,i);for(let N of[-6.5,6.5])He(sn(1.2,6,1.2,2),n,N,3,-.5,i);let a=Ha(1024,150,(N,Q,k)=>{N.fillStyle="#121518",N.fillRect(0,0,Q,k),N.fillStyle="#ff7a2a",N.font=`800 62px ${as}`,N.textBaseline="middle",N.fillText("AUTOMATION FLOOR",32,k/2),N.fillStyle="#a7b1ba",N.font=`500 28px ${Xn}`,N.textAlign="right",N.fillText("BOTS ON SHIFT \xB7 24/7",Q-32,k/2)});He(new ze(14.2,1.8,.4),ct({map:a,emissiveMap:a,emissive:16777215,emissiveIntensity:.6}),0,6.6,-.5,i);let c=new dt;c.position.set(-8,0,-36),i.add(c),He(sn(48,18,30,2),t,0,9,0,c);let l=new Hi;l.moveTo(-15.5,0),l.lineTo(0,6),l.lineTo(15.5,0),l.lineTo(-15.5,0);let h=He(new Vs(l,{depth:49,bevelEnabled:!1}),lt("corrugated",{color:8226702,repeat:[.5,.5]}),24.5,18,0,c);h.rotation.y=-Math.PI/2;let f=bt(Tt(256,256,(N,Q,k)=>{N.fillStyle="#000",N.fillRect(0,0,Q,k);let Y=N.createRadialGradient(Q/2,k*.7,4,Q/2,k*.7,Q*.6);Y.addColorStop(0,"#fff2c0"),Y.addColorStop(.25,"#ffb040"),Y.addColorStop(.6,"#c43c08"),Y.addColorStop(1,"#100400"),N.fillStyle=Y,N.fillRect(0,0,Q,k)})),d=ct({color:328192,emissive:16777215,emissiveMap:f,emissiveIntensity:2.2});He(new vt(10,8),d,-6,4,15.02,c);let p=bt(Tt(512,32,(N,Q,k)=>{N.fillStyle="#1a1e22",N.fillRect(0,0,Q,k);for(let Y=0;Y<Q;Y+=16)N.fillStyle=`rgba(150,170,180,${.25+Math.random()*.2})`,N.fillRect(Y+2,3,12,k-6)}));He(new vt(40,1.4),ct({map:p,roughness:.2,metalness:.3,emissive:16766880,emissiveMap:p,emissiveIntensity:.15}),0,15,15.02,c);let v=bt(Tt(64,256,N=>{N.fillStyle="#c9c3b8",N.fillRect(0,0,64,256);for(let Q=0;Q<3;Q++)N.fillStyle="#b8321f",N.fillRect(0,Q*28,64,14)})),_=[];[[18,-58],[26,-60],[34,-56]].forEach(([N,Q],k)=>{let Y=46+k*4;He(new ht(1.3,2.2,Y,24),ct({map:v,normalMap:Vt.concrete_nor,roughnessMap:Vt.concrete_orm,roughness:1}),N,Y/2,Q,i),_.push(new I(N,Y+.5,Q))});let m=new dt;m.position.set(32,0,-30),i.add(m),He(new ht(5,6,22,28),r,0,11,0,m),He(new ht(3,5,6,28),s,0,25,0,m),He(new ht(.9,.9,16,16),s,0,36,0,m);for(let N of[0,2.1,4.2]){let Q=He(new ht(.7,.7,26,12),s,Math.cos(N)*7,18,Math.sin(N)*7,m);Q.rotation.z=Math.cos(N)*.25,Q.rotation.x=-Math.sin(N)*.25}for(let N=0;N<5;N++)He(new ki(5.6,.25,8,40),s,0,3+N*4.5,0,m).rotation.x=Math.PI/2;for(let[N,Q]of[[-40,-28],[-40,-42],[-48,-35]])He(new ht(4,4,18,28),ct({color:13620182,metalness:.8,roughness:.32,normalMap:Vt.steel_nor}),N,9,Q,i),He(new fa(4.1,3,28),ct({color:12172994,metalness:.7,roughness:.35}),N,19.5,Q,i);for(let N=-28;N<=28;N+=7)He(new ze(.5,9,.5),s,N,4.5,-16,i);for(let N of[8.6,9.6])He(new ht(.5,.5,58,14),N>9?r:s,0,N,-16,i).rotation.z=Math.PI/2;let g=new dt;g.position.set(0,0,-8),i.add(g),He(new ze(44,.25,2),ct({color:1776928,roughness:.75,normalMap:Vt.asphalt_nor}),0,1.3,0,g);for(let N of[-1,1])He(sn(44,.35,.12,2),lt("steel",{color:15774720}),0,1.45,N*1.05,g);for(let N=-21;N<=21;N+=3)for(let Q of[-1,1])He(new ze(.15,1.2,.15),s,N,.6,Q*.9,g);let R=ct({color:2230272,emissive:16727040,emissiveIntensity:5,roughness:.6}),E=new fn(new Gt(1.4,.35,.8,2,.06),R,16);E.castShadow=!0,g.add(E);let S=new Ys(16738848,0,26,1.6);S.position.set(0,3,-6),i.add(S);let F=[],D=new pn({color:16738826,metalness:.2,roughness:.35,clearcoat:.6,clearcoatRoughness:.2}),L=ct({color:2237480,metalness:.6,roughness:.4});for(let[N,Q]of[[-9,0],[9,1.9]]){let k=new dt;k.position.set(N,0,-5),i.add(k),He(new ht(.9,1.1,.6,24),L,0,.3,0,k);let Y=new dt;Y.position.y=.6,k.add(Y),He(new ht(.7,.8,.9,24),D,0,.45,0,Y);let se=new dt;se.position.y=1,Y.add(se),He(new dn(.5,16,12),L,0,0,0,se),He(new Gt(.55,2.8,.55,2,.12),D,0,1.4,0,se);let te=new dt;te.position.y=2.8,se.add(te),He(new dn(.38,16,12),L,0,0,0,te),He(new Gt(.42,2.2,.42,2,.1),D,0,1.1,0,te);let Ie=new dt;Ie.position.y=2.2,te.add(Ie),He(new ht(.2,.2,.4,12),L,0,.2,0,Ie);for(let qe of[-1,1])He(new ze(.08,.4,.25),L,qe*.15,.55,0,Ie);F.push({yaw:Y,sh:se,el:te,wr:Ie,ph:Q})}let T=ni("rgba(200,200,200,0.7)","rgba(200,200,200,0)"),M=[];_.forEach((N,Q)=>{for(let k=0;k<12;k++){let Y=new xi(new Kn({map:T,transparent:!0,depthWrite:!1,color:13617858}));Y.userData={top:N,o:k/12+Q*.13,drift:.6+e()*.8},i.add(Y),M.push(Y)}});let y=140,C=new Ct,B=new Float32Array(y*3),V=[];for(let N=0;N<y;N++)V.push({t:Math.random(),vx:(Math.random()-.5)*4,vy:2+Math.random()*4,vz:2+Math.random()*3});C.setAttribute("position",new Bt(B,3));let X=new ks(C,new ts({color:16757575,size:.09,transparent:!0,opacity:.95,blending:Jn,depthWrite:!1}));X.position.set(c.position.x-6,1.2,c.position.z+15.2),i.add(X);let re=new je;return{group:i,radius:46,center:new I(0,0,-38),update(N,Q){for(let k of M){let Y=k.userData,se=(N*.06+Y.o)%1;k.position.set(Y.top.x+se*22*Y.drift,Y.top.y+se*18,Y.top.z+se*6);let te=3+se*16;k.scale.set(te,te,1),k.material.opacity=Math.sin(Math.min(1,se*1.4)*Math.PI)*.4}if(Q){for(let k=0;k<16;k++){let Y=((N*2.2+k*2.75)%44+44)%44-22;re.makeTranslation(Y,1.62,0),E.setMatrixAt(k,re)}E.instanceMatrix.needsUpdate=!0;for(let k=0;k<y;k++){let Y=V[k],te=(N*.7+Y.t)%1*1.2;B[k*3]=Y.vx*te,B[k*3+1]=Math.max(0,Y.vy*te-4.9*te*te),B[k*3+2]=Y.vz*te}C.attributes.position.needsUpdate=!0;for(let k of F){let Y=N*.9+k.ph;k.yaw.rotation.y=Math.sin(Y)*1.1,k.sh.rotation.z=.35+Math.sin(Y*1.3)*.35,k.el.rotation.z=1.25+Math.sin(Y*1.3+1)*.35,k.wr.rotation.y=Y*2}d.emissiveIntensity=2+Math.sin(N*7)*.25+Math.sin(N*13)*.15}},setNight(N,Q){S.intensity=30+Q*80}}}function nd(i,e){let t=new dt,n=Tt(1280,720,(a,c,l)=>{let h=a.createLinearGradient(0,0,c,l);h.addColorStop(0,"#0b0f14"),h.addColorStop(1,"#141c26"),a.fillStyle=h,a.fillRect(0,0,c,l),a.fillStyle="#f5c518",a.fillRect(0,0,14,l),a.font=`400 200px ${Ah}`,a.fillStyle="rgba(245,197,24,0.16)",a.textAlign="right",a.fillText("0"+(e+1),c-50,210),a.textAlign="left",a.fillStyle="#f5c518",a.font=`600 28px ${Xn}`,a.fillText(i.category.toUpperCase(),70,100),a.fillStyle="#fff",a.font=`400 96px ${Ah}`;let f=i.title.split(" "),d="",p=210;for(let g of f)a.measureText(d+g).width>c-200&&(a.fillText(d,70,p),d="",p+=96),d+=g+" ";a.fillText(d,70,p),a.fillStyle="#9fb0c2",a.font=`500 30px ${as}`;let _=((g,R,E)=>{let S="";for(let F of g.split(" "))a.measureText(S+F).width>E&&(a.fillText(S,70,R),S="",R+=42),S+=F+" ";return a.fillText(S,70,R),R})(i.outcome,p+80,c-160),m=70;a.font=`600 24px ${Xn}`;for(let g of i.tech){let R=a.measureText(g).width+36;a.strokeStyle="rgba(245,197,24,0.6)",a.lineWidth=2,a.strokeRect(m,_+50,R,48),a.fillStyle="#f5c518",a.fillText(g,m+18,_+83),m+=R+14}}),s=bt(n),r=lt("steel",{color:3817542});for(let a of[-2.8,2.8])He(new ze(.3,6,.3),r,a,3,-.2,t);He(new ze(9.2,5.3,.35),r,0,8.2,-.25,t);let o=ct({map:s,emissiveMap:s,emissive:16777215,emissiveIntensity:.9,roughness:.35});He(new vt(8.8,4.95),o,0,8.2,-.06,t);for(let a of[-3,0,3])He(new ze(.5,.15,.4),ct({color:546,emissive:16773840,emissiveIntensity:1}),a,5.4,.5,t);return{group:t,radius:6,setNight(a){o.emissiveIntensity=.9+a*.6}}}function id(i){let e=new dt,t=ei(606),n=(c,l)=>bt(Tt(256,256,(h,f)=>{if(h.drawImage(Vt.wood_col.image,0,0,f,f),h.strokeStyle="rgba(70,45,22,0.85)",h.lineWidth=16,h.strokeRect(8,8,f-16,f-16),h.beginPath(),h.moveTo(16,16),h.lineTo(f-16,f-16),h.stroke(),c){h.fillStyle="rgba(20,16,12,0.86)",h.fillRect(30,86,f-60,86),h.fillStyle="#f5c518";let d=40;for(h.font=`800 ${d}px ${as}`;h.measureText(c).width>f-80&&d>18;)d-=2,h.font=`800 ${d}px ${as}`;h.textAlign="center",h.fillText(c,f/2,128),h.fillStyle="#d9cbb3",h.font=`500 15px ${Xn}`,h.fillText(l,f/2,156)}})),s=lt("wood",{repeat:[1,1]}),r=1.5,o=[5,4,3],a=0;return o.forEach((c,l)=>{for(let h=0;h<c&&a<i.length;h++,a++){let[f,d]=i[a],p=ct({map:n(f,d),normalMap:Vt.wood_nor,roughness:.85}),v=He(new ze(r,r,r),[s,s,s,s,p,s],(h-(c-1)/2)*(r+.06),r/2+l*r,(t()-.5)*.15,e);v.rotation.y=(t()-.5)*.12}}),He(new ze(5*r+1,.15,r+.6),ct({color:9071170,roughness:1}),0,.07,0,e).position.y=-0,{group:e,radius:6}}var Ei=(i,e=document)=>e.querySelector(i),ka=(i,e=document)=>[...e.querySelectorAll(i)],sd=Ei("#loader-bar"),rd=Ei("#loader-note"),ii=(i,e)=>{sd&&(sd.style.transform=`scaleX(${i})`),e&&rd&&(rd.textContent=e)};function h_(){try{let i=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&i.getContext("webgl2"))}catch{return!1}}var Va=[{title:"Procurement Audit Automation",category:"Intelligent Automation",tech:["Python","SAP GUI Scripting","SQL"],outcome:"Real-time audit data extraction and validation \u2014 compliance checks that used to take days now run on their own."},{title:"Vendor Analytics Dashboard",category:"Business Intelligence",tech:["Power BI","DAX","PostgreSQL"],outcome:"Vendor performance tracking with anomaly detection, so supply-chain risk shows up before it costs money."},{title:"SAP Reporting Pipeline",category:"Data Engineering",tech:["Python","SAP","Data Warehousing"],outcome:"One unified pipeline that generates and distributes the reports people used to stitch together by hand."},{title:"Document Processing Engine",category:"AI & Data Processing",tech:["Python","OCR","LLM"],outcome:"An OCR + LLM pipeline that turns piles of physical records into clean, structured data."}],u_=[["Python","bots \xB7 scrapers \xB7 ML"],["SAP GUI","scripting"],["Power BI","DAX \xB7 models"],["SQL","Postgres \xB7 MSSQL"],["Power Automate","flows"],["FastAPI","services"],["Django","web apps"],["React","frontends"],["OCR + LLM","documents"],["Selenium","web automation"],["Git","versioning"],["Figma","interfaces"]];async function f_(){if(!h_()){document.documentElement.classList.add("static"),Ei("#loader")?.remove();return}let i=matchMedia("(max-width: 760px), (pointer: coarse)").matches,e=matchMedia("(prefers-reduced-motion: reduce)").matches;ii(.08,"Loading type\u2026"),await Promise.race([Promise.all([document.fonts.load('400 40px "Instrument Serif"'),document.fonts.load('800 40px "Manrope"'),document.fonts.load('600 20px "JetBrains Mono"')]),new Promise($=>setTimeout($,2500))]).catch(()=>{});let t=Ei("#scene"),n=new ea({canvas:t,antialias:!i,powerPreference:"high-performance"}),s=Math.min(window.devicePixelRatio,i?1.5:1.75);n.setPixelRatio(s),n.setSize(innerWidth,innerHeight),n.toneMapping=Vr,n.shadowMap.enabled=!0,n.shadowMap.type=Qc;let r=new zi;r.fog=new ta(15251872,.004);let o=new Xt(i?55:42,innerWidth/innerHeight,.1,3e3),a=new Oi(n);r.environment=a.fromScene(new Aa,.04).texture;let c=new Wr;c.scale.setScalar(1e4),r.add(c);let l=c.material.uniforms;l.mieDirectionalG.value=.8;let h=new ya(16777215,3);h.castShadow=!0,h.shadow.mapSize.set(i?1024:4096,i?1024:4096);let f=h.shadow.camera;f.left=-55,f.right=55,f.top=55,f.bottom=-55,f.near=1,f.far=400,h.shadow.bias=-4e-4,h.shadow.normalBias=.04,r.add(h,h.target);let d=new xa(12375807,4934202,.8);r.add(d),ii(.12,"Mixing paint\u2026");let[p]=await Promise.all([Df(n),Lf(n,$=>ii(.12+$*.2,"Mixing paint\u2026"))]);p.update(0,r),ii(.34,"Laying the road\u2026"),await Si();let v=Wf(),_=$=>v.uAtZ($),m=[{id:"intro",u:_(8),creep:.004,hold:.04,cam:{pos:[-4.2,1.5,7.2],look:[1.6,1,.2]},mob:{pos:[-3.5,2.2,9.5],look:[.4,1.2,0]}},{id:"ch1",u:_(-82),side:1,creep:.006,cam:{pos:[-3.2,2.3,-6.5],look:[8,3.4,5]},mob:{pos:[-3.5,3,-9],look:[7,3.5,4]}},{id:"ch2",u:_(-170),side:-1,creep:.006,cam:{pos:[5.2,1.6,-17],look:[-12,10,6]},mob:{pos:[4,1.5,-12],look:[-12,13,7]}},{id:"ch3",u:_(-262),side:1,creep:.006,cam:{pos:[-4.2,2.3,-11.5],look:[9,4.6,3]},mob:{pos:[-3.6,2.6,-9],look:[8,4,4]}},{id:"ch4",u:_(-350),side:-1,creep:.008,hold:.07,cam:{pos:[5,5.5,-13],look:[-30,9,12]},mob:{pos:[6,7,-18],look:[-30,11,8]}},{id:"work",u:_(-430),side:1,creep:.06,hold:.13,cam:{pos:[-2.8,3.2,-8],look:[9,5.5,12]},mob:{pos:[-2.5,3.5,-10],look:[8,6.5,13]}},{id:"tools",u:_(-520),side:-1,creep:.006,cam:{pos:[3.4,2,-5.5],look:[-8,2.6,4]},mob:{pos:[3.8,2.6,-9],look:[-8,2.8,2]}},{id:"contact",u:_((It.zNear+It.zFar)/2+8),creep:.01,hold:.09,cam:{pos:[42,4.5,44],look:[-4,7,-18]},mob:{pos:[44,6,60],look:[-2,9,-16]}}],g={pos:[0,2.7,-9],look:[0,1.2,8]},R=.055,S=(1-m.reduce(($,oe)=>$+(oe.hold??R),0))/(m.length-1),F=0;m.forEach(($,oe)=>{$.hold=$.hold??R,$.p0=F,$.p1=F+$.hold,F=$.p1+(oe<m.length-1?S:0)}),m[m.length-1].p1=1;function D($){for(let oe=0;oe<m.length;oe++){let ge=m[oe];if($<=ge.p1||oe===m.length-1){if($>=ge.p0){let G=ti($,ge.p0,ge.p1);return{i:oe,hold:!0,k:G,u:ge.u-ge.creep/2+ge.creep*G}}let me=m[oe-1],Ee=ti($,me.p1,ge.p0),H=Pf(Ee);return{i:oe-1,hold:!1,k:Ee,u:Pn(me.u+me.creep/2,ge.u-ge.creep/2,H)}}}}let L=[],T=[],M=($,oe,ge,me)=>{$f(v,$.group,oe,ge,me),r.add($.group);let Ee=($.center||new I).clone().applyEuler($.group.rotation).add($.group.position);return L.push({x:Ee.x,z:Ee.z,r:$.radius}),$.worldCenter=Ee,T.push($),$};ii(.3,"Raising landmarks\u2026"),await Si(),M(Kf(),m[0].u-.004,1,nn-1.3),M(Qf(),m[1].u+.004,1,nn+2.6),M(jf(),m[2].u+.008,-1,nn+1.6),M(ed(),m[3].u+.005,1,nn+1.4),M(td(),m[4].u+.012,-1,nn+4);let y=m[5],C=Va.map(($,oe)=>{let ge=M(nd($,oe),y.u-y.creep/2+.008+oe*(y.creep+.006)/4,1,nn+.6);return ge.group.rotateY(.55),ge});M(id(u_),m[6].u+.004,-1,nn+1.6),ii(.45,"Painting the city\u2026"),await Si();let B=Xf(r,v,L,{isMobile:i});ii(.65,"Bolting the bridge\u2026"),await Si();let V=Yf(r,v),X=Th({lights:!0});r.add(X.root);let re=[];for(let[$,oe]of[[-30,1],[-128,-1],[-212,1],[-300,-1],[-470,1],[-548,-1],[-760,1]]){let ge=Th({lights:!1}),me=v.frame(_($));ge.root.position.copy(me.p).addScaledVector(me.r,oe*3.3),ge.root.rotation.y=Math.atan2(me.t.x,me.t.z)+(oe>0?0:Math.PI),r.add(ge.root),re.push(ge)}ii(.8,"Warming the engine\u2026"),await Si();let N=null,Q=null,k=null,Y=null;if(!i){let $=innerWidth*s,oe=innerHeight*s,ge=new Ft($,oe,{type:Ht,samples:4,depthTexture:new Bi($,oe)});N=new Ca(n,ge),N.setPixelRatio(s),N.addPass(new Pa(r,o));try{Y=new $r(r,o,$,oe),Y.setGBuffer(N.renderTarget1.depthTexture),Y.updateGtaoMaterial({radius:1.2,distanceExponent:1.4,thickness:2,scale:1.1,samples:16,distanceFallOff:1}),Y.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),Y.blendIntensity=.85,N.addPass(Y)}catch(me){console.warn("AO disabled",me),Y=null}Q=new js(new Te(innerWidth/2,innerHeight/2),.3,.6,.92),N.addPass(Q),N.addPass(new Ia),k=new Qs(Uf),N.addPass(k)}let se=$=>new We($),te=[{p:0,elev:4,az:120,sun:se("#ffb08a"),si:1.6,sky:se("#a9b6d8"),gnd:se("#4a3a33"),hi:.55,fog:se("#e7b8a0"),fd:.0042,tur:8,ray:2.6,mie:.006,exp:.62,night:.05},{p:.18,elev:22,az:140,sun:se("#ffe2c0"),si:2.6,sky:se("#bcd2f0"),gnd:se("#4d4a3a"),hi:.8,fog:se("#d9d6d2"),fd:.0032,tur:6,ray:1.6,mie:.005,exp:.6,night:0},{p:.36,elev:48,az:170,sun:se("#fff6ea"),si:3.2,sky:se("#c4dcff"),gnd:se("#4f553e"),hi:.95,fog:se("#c8d6e2"),fd:.0021,tur:4,ray:1.2,mie:.004,exp:.55,night:0},{p:.52,elev:18,az:220,sun:se("#ffc684"),si:2.8,sky:se("#c8c4d8"),gnd:se("#55463a"),hi:.75,fog:se("#e4c39f"),fd:.0032,tur:7,ray:2,mie:.006,exp:.6,night:0},{p:.66,elev:6,az:245,sun:se("#ff9a52"),si:2.2,sky:se("#b9a6c8"),gnd:se("#4a3530"),hi:.6,fog:se("#d9946f"),fd:.0036,tur:9,ray:3,mie:.008,exp:.66,night:.15},{p:.78,elev:.5,az:255,sun:se("#ff6a3a"),si:1,sky:se("#7f74a6"),gnd:se("#2e2430"),hi:.45,fog:se("#8a5a63"),fd:.0042,tur:10,ray:3.6,mie:.01,exp:.78,night:.55},{p:.88,elev:-4,az:262,sun:se("#7f8cff"),si:.35,sky:se("#3c4a80"),gnd:se("#151522"),hi:.35,fog:se("#232a48"),fd:.0042,tur:10,ray:1.5,mie:.005,exp:.95,night:.92},{p:1,elev:-9,az:270,sun:se("#9fb2ff"),si:.3,sky:se("#2a3768"),gnd:se("#0e0f18"),hi:.3,fog:se("#141a33"),fd:.0036,tur:10,ray:.6,mie:.004,exp:1,night:1}],Ie={sun:new We,sky:new We,gnd:new We,fog:new We};function qe($){let oe=0;for(;oe<te.length-2&&$>te[oe+1].p;)oe++;let ge=te[oe],me=te[oe+1],Ee=tr(ti($,ge.p,me.p));for(let H of["elev","az","si","hi","fd","tur","ray","mie","exp","night"])Ie[H]=Pn(ge[H],me[H],Ee);for(let H of["sun","sky","gnd","fog"])Ie[H].copy(ge[H]).lerp(me[H],Ee);return Ie}let le=new I,_e=new We,be=ka(".panel[data-stop]"),xe=ka(".proj"),Fe=Ei("#proj-count"),Xe=ka(".rail a"),Ze=Ei("#progress"),et=Ei("#scroll-hint");Xe.forEach($=>{$.addEventListener("click",oe=>{oe.preventDefault();let ge=m[+$.dataset.stop];Ae(ge.p0+ge.hold*.4)})}),ka("[data-jump]").forEach($=>$.addEventListener("click",oe=>{oe.preventDefault();let ge=m.find(me=>me.id===$.dataset.jump);ge&&Ae(ge.p0+ge.hold*.4)}));function ue(){return document.documentElement.scrollHeight-innerHeight}function Ae($){window.scrollTo({top:$*ue(),behavior:e?"auto":"smooth"})}function O($){m.forEach((Ee,H)=>{let G=be[H];if(!G)return;let ee=H===0?-1:.022,pe=H===m.length-1?-1:.022,Ce=1;ee>0&&(Ce=Math.min(Ce,ti($,Ee.p0-ee,Ee.p0))),pe>0&&(Ce=Math.min(Ce,1-ti($,Ee.p1,Ee.p1+pe))),Ce=os(Ce),G.style.opacity=Ce.toFixed(3),G.style.transform=`translate3d(0, ${((1-Ce)*($<Ee.p0?28:-28)).toFixed(1)}px, 0)`,G.style.visibility=Ce<.01?"hidden":"visible",G.classList.toggle("live",Ce>.6)});let oe=ti($,y.p0,y.p1),ge=Math.min(Va.length-1,Math.floor(oe*Va.length));xe.forEach((Ee,H)=>Ee.classList.toggle("on",H===ge)),Fe&&(Fe.textContent=`${ge+1} / ${Va.length}`);let me=0;m.forEach((Ee,H)=>{$>=Ee.p0-.03&&(me=H)}),Xe.forEach((Ee,H)=>Ee.classList.toggle("on",H===me)),Ze&&(Ze.style.transform=`scaleX(${$})`),et&&(et.style.opacity=String(1-ti($,.005,.03)))}let Ve={},we=new I,Ge=new I,Le={pos:[0,0,0],look:[0,0,0]},Je=($,oe,ge,me=Le)=>{for(let Ee=0;Ee<3;Ee++)me.pos[Ee]=Pn($.pos[Ee],oe.pos[Ee],ge),me.look[Ee]=Pn($.look[Ee],oe.look[Ee],ge);return me},Oe=$=>i?$.mob:$.cam;function U($){let oe=m[$.i];if($.hold)return Oe(oe);let ge=m[$.i+1],me=$.k;return me<.4?Je(Oe(oe),g,tr(me/.4)):me>.6?Je(g,Oe(ge),tr((me-.6)/.4)):g}let b=($,oe,ge)=>ge.copy(oe.p).addScaledVector(oe.r,$[0]).addScaledVector(new I(0,1,0),$[1]).addScaledVector(oe.t,$[2]),q=0,ce=0,ye=m[0].u,fe=0,Ye=()=>{q=os(scrollY/Math.max(1,ue()))};addEventListener("scroll",Ye,{passive:!0}),Ye(),ce=q;let W={x:0,y:0,sx:0,sy:0};addEventListener("pointermove",$=>{W.x=$.clientX/innerWidth-.5,W.y=$.clientY/innerHeight-.5}),addEventListener("resize",()=>{o.aspect=innerWidth/innerHeight,o.fov=innerWidth<760?55:42,o.updateProjectionMatrix(),n.setSize(innerWidth,innerHeight),N?.setSize(innerWidth,innerHeight)});let J=!new URLSearchParams(location.search).has("still"),ve=new qs,K=0,he=0;function Me(){let $=Math.min(ve.getDelta(),.05),oe=ve.elapsedTime;ce=e?q:Pn(ce,q,1-Math.exp(-$*3.2)),Math.abs(ce-q)<2e-5&&(ce=q);let ge=D(ce);v.frame(ge.u,Ve);let me=ge.u-ye;ye=ge.u;let Ee=me*v.length;fe=Pn(fe,Ee/Math.max($,.001),.1),X.root.position.copy(Ve.p),X.root.rotation.y=Math.atan2(Ve.t.x,Ve.t.z),X.spin(Ee),X.body.position.y=Math.sin(oe*31)*.004+Math.min(Math.abs(fe),20)*Math.sin(oe*13)*6e-4,X.body.rotation.x=os(-fe*.0015,-.03,.03);let H=U(ge);W.sx=Pn(W.sx,W.x,.05),W.sy=Pn(W.sy,W.y,.05),b(H.pos,Ve,we),b(H.look,Ve,Ge),we.addScaledVector(Ve.r,W.sx*.8).y+=-W.sy*.4+Math.sin(oe*.6)*.04,we.y=Math.max(we.y,.6),o.position.copy(we),o.lookAt(Ge);let G=qe(ce),ee=$s.degToRad(90-G.elev),pe=$s.degToRad(G.az);le.setFromSphericalCoords(1,ee,pe),l.sunPosition.value.copy(le),l.turbidity.value=G.tur,l.rayleigh.value=G.ray,l.mieCoefficient.value=G.mie;let Ce=new I().setFromSphericalCoords(1,$s.degToRad(90-Math.max(G.elev,24)),pe);h.position.copy(Ve.p).addScaledVector(Ce,150),h.target.position.copy(Ve.p),h.color.copy(G.sun),h.intensity=G.si,d.color.copy(G.sky),d.groundColor.copy(G.gnd),d.intensity=G.hi*.45,r.fog.color.copy(G.fog),r.fog.density=G.fd,p.update(ce,r),r.environmentIntensity=Pn(.9,.55,G.night),k&&(k.uniforms.time.value=oe),n.toneMappingExposure=G.exp;let Se=G.night;B.setNight(Se),V.setNight(Se),X.setNight(os(Se*1.3));let Qe=new I().setFromSphericalCoords(1,$s.degToRad(62),$s.degToRad(200));B.sky.moon.position.copy(o.position).addScaledVector(Qe,1200),B.sky.moonGlow.position.copy(B.sky.moon.position),B.sky.stars.position.copy(o.position),B.clouds.position.set(o.position.x,0,o.position.z),_e.copy(G.sun).lerp(G.fog,.55).multiplyScalar(Pn(1,.18,Se)),B.tintClouds(_e,Pn(.75,.25,Se)),Q&&(Q.strength=.2+Se*.45);for(let pt of T){let Ut=pt.worldCenter.distanceToSquared(o.position)<19600;pt.update?.(oe,Ut),pt.setNight?.(Se,os(1-Math.abs(ce-.42)*6))}for(let pt of B.update)pt(oe,o);O(ce),N?N.render():n.render(r,o),K++,he+=$,he>1.5&&J&&(K/he<38&&(s>1?(s=Math.max(1,s-.25),n.setPixelRatio(s),N?.setPixelRatio?.(s)):Y&&Y.enabled?Y.enabled=!1:Q&&Q.enabled?Q.enabled=!1:s>.75&&(s=.75,n.setPixelRatio(s),N?.setPixelRatio?.(s))),K=0,he=0),requestAnimationFrame(Me)}ii(.92,"Compiling shaders\u2026"),await Si();try{n.compile(r,o)}catch{}ii(1,"Ready. Hop in."),requestAnimationFrame(Me),await Si(),await Si(),document.documentElement.classList.add("ready"),setTimeout(()=>Ei("#loader")?.remove(),1600),window.__story={STOPS:m,jumpTo:Ae}}f_().catch(i=>{console.error(i),document.documentElement.classList.add("static"),Ei("#loader")?.remove()});
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
