var xh="170";var yp=0,Tu=1,Mp=2;var Qf=1,bh=2,bi=3,Un=0,Gt=1,Ot=2,Qt=0,Qs=1,ri=2,Au=3,Ru=4,_h=5,Dn=100,Sp=101,Ep=102,wp=103,Tp=104,xr=200,Ap=201,Rp=202,Cp=203,$l=204,ec=205,Xo=206,Pp=207,qo=208,Ip=209,Dp=210,Lp=211,Up=212,Np=213,Op=214,tc=0,nc=1,ic=2,nr=3,sc=4,rc=5,ac=6,oc=7,$f=0,Fp=1,Bp=2,Vi=0,yh=1,Mh=2,Sh=3,ua=4,zp=5,Eh=6,wh=7,Cu="attached",kp="detached",ed=300,ir=301,sr=302,lc=303,cc=304,Yo=306,en=1e3,Rn=1001,$r=1002,$t=1003,Th=1004;var Zs=1005;var Ht=1006,qr=1007;var Kn=1008;var Jn=1009,td=1010,nd=1011,ea=1012,Ah=1013,_s=1014,vn=1015,qt=1016,Rh=1017,Ch=1018,Wi=1020,id=35902,sd=1021,rd=1022,pn=1023,ad=1024,od=1025,$s=1026,Xi=1027,fa=1028,Ph=1029,ld=1030,Ih=1031;var Dh=1033,ho=33776,uo=33777,fo=33778,po=33779,hc=35840,uc=35841,fc=35842,dc=35843,pc=36196,mc=37492,gc=37496,vc=37808,xc=37809,bc=37810,_c=37811,yc=37812,Mc=37813,Sc=37814,Ec=37815,wc=37816,Tc=37817,Ac=37818,Rc=37819,Cc=37820,Pc=37821,mo=36492,Ic=36494,Dc=36495,cd=36283,Lc=36284,Uc=36285,Nc=36286;var rr=2300,ar=2301,vl=2302,Pu=2400,Iu=2401,Du=2402,Hp=2500;var hd=0,jo=1,da=2,Gp=3200,Lh=3201;var Uh=0,Vp=1,si="",Nt="srgb",sn="srgb-linear",Zo="linear",St="srgb";var Ps=7680;var Lu=519,Wp=512,Xp=513,qp=514,ud=515,Yp=516,jp=517,Zp=518,Kp=519,Oc=35044;var Uu="300 es",yi=2e3,go=2001,qi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nu=1234567,Yr=Math.PI/180,or=180/Math.PI;function Ln(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function Jt(s,e,t){return Math.max(e,Math.min(t,s))}function Nh(s,e){return(s%e+e)%e}function Jp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Qp(s,e,t){return s!==e?(t-s)/(e-s):0}function jr(s,e,t){return(1-t)*s+t*e}function $p(s,e,t,n){return jr(s,e,1-Math.exp(-t*n))}function em(s,e=1){return e-Math.abs(Nh(s,e*2)-e)}function tm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function nm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function im(s,e){return s+Math.floor(Math.random()*(e-s+1))}function sm(s,e){return s+Math.random()*(e-s)}function rm(s){return s*(.5-Math.random())}function am(s){s!==void 0&&(Nu=s);let e=Nu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function om(s){return s*Yr}function lm(s){return s*or}function cm(s){return(s&s-1)===0&&s!==0}function hm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function um(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function fm(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),v=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*v,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*v,o*c);break;case"ZYZ":s.set(l*v,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function wt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var os={DEG2RAD:Yr,RAD2DEG:or,generateUUID:Ln,clamp:Jt,euclideanModulo:Nh,mapLinear:Jp,inverseLerp:Qp,lerp:jr,damp:$p,pingpong:em,smoothstep:tm,smootherstep:nm,randInt:im,randFloat:sm,randFloatSpread:rm,seededRandom:am,degToRad:om,radToDeg:lm,isPowerOfTwo:cm,ceilPowerOfTwo:hm,floorPowerOfTwo:um,setQuaternionFromProperEuler:fm,normalize:wt,denormalize:Zn},we=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},st=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],v=n[8],x=i[0],g=i[3],m=i[6],E=i[1],M=i[4],_=i[7],N=i[2],C=i[5],R=i[8];return r[0]=a*x+o*E+l*N,r[3]=a*g+o*M+l*C,r[6]=a*m+o*_+l*R,r[1]=c*x+h*E+u*N,r[4]=c*g+h*M+u*C,r[7]=c*m+h*_+u*R,r[2]=f*x+p*E+v*N,r[5]=f*g+p*M+v*C,r[8]=f*m+p*_+v*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,v=t*u+n*f+i*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/v;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xl.makeScale(e,t)),this}rotate(e){return this.premultiply(xl.makeRotation(-e)),this}translate(e,t){return this.premultiply(xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xl=new st;function fd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ta(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dm(){let s=ta("canvas");return s.style.display="block",s}var Ou={};function Wr(s){s in Ou||(Ou[s]=!0,console.warn(s))}function pm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function mm(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gm(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ct={enabled:!0,workingColorSpace:sn,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===St&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===St&&(s.r=er(s.r),s.g=er(s.g),s.b=er(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?Zo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Mi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function er(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Fu=[.64,.33,.3,.6,.15,.06],Bu=[.2126,.7152,.0722],zu=[.3127,.329],ku=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hu=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ct.define({[sn]:{primaries:Fu,whitePoint:zu,transfer:Zo,toXYZ:ku,fromXYZ:Hu,luminanceCoefficients:Bu,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:Fu,whitePoint:zu,transfer:St,toXYZ:ku,fromXYZ:Hu,luminanceCoefficients:Bu,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}});var Is,Fc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Is===void 0&&(Is=ta("canvas")),Is.width=e.width,Is.height=e.height;let n=Is.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Is}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ta("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Mi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vm=0,vo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(bl(i[a].image)):r.push(bl(i[a]))}else r=bl(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function bl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xm=0,jt=class s extends qi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Rn,i=Rn,r=Ht,a=Kn,o=pn,l=Jn,c=s.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Ln(),this.name="",this.source=new vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case en:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case $r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case en:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case $r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=ed;jt.DEFAULT_ANISOTROPY=1;var mt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],v=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,_=(p+1)/2,N=(m+1)/2,C=(h+f)/4,R=(u+x)/4,T=(v+g)/4;return M>_&&M>N?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=C/n,r=R/n):_>N?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=C/i,r=T/i):N<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(N),n=R/r,i=T/r),this.set(n,i,r,t),this}let E=Math.sqrt((g-v)*(g-v)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(g-v)/E,this.y=(u-x)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bc=class extends qi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new vo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends Bc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xo=class extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var zc=class extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ft=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],p=r[a+1],v=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=x;return}if(u!==x||l!==f||c!==p||h!==v){let g=1-o,m=l*f+c*p+h*v+u*x,E=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let N=Math.sqrt(M),C=Math.atan2(N,m*E);g=Math.sin(g*C)/N,o=Math.sin(o*C)/N}let _=o*E;if(l=l*g+f*_,c=c*g+p*_,h=h*g+v*_,u=u*g+x*_,g===1-o){let N=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=N,c*=N,h*=N,u*=N}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+h*u+l*p-c*f,e[t+1]=l*v+h*f+c*u-o*p,e[t+2]=c*v+h*p+o*f-l*u,e[t+3]=h*v-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),p=l(i/2),v=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*v,this._y=c*p*u-f*h*v,this._z=c*h*v+f*p*u,this._w=c*h*u-f*p*v;break;case"YXZ":this._x=f*h*u+c*p*v,this._y=c*p*u-f*h*v,this._z=c*h*v-f*p*u,this._w=c*h*u+f*p*v;break;case"ZXY":this._x=f*h*u-c*p*v,this._y=c*p*u+f*h*v,this._z=c*h*v+f*p*u,this._w=c*h*u-f*p*v;break;case"ZYX":this._x=f*h*u-c*p*v,this._y=c*p*u+f*h*v,this._z=c*h*v-f*p*u,this._w=c*h*u+f*p*v;break;case"YZX":this._x=f*h*u+c*p*v,this._y=c*p*u+f*h*v,this._z=c*h*v-f*p*u,this._w=c*h*u-f*p*v;break;case"XZY":this._x=f*h*u-c*p*v,this._y=c*p*u-f*h*v,this._z=c*h*v+f*p*u,this._w=c*h*u+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _l.copy(this).projectOnVector(e),this.sub(_l)}reflect(e){return this.sub(_l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_l=new I,Gu=new Ft,Mn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(r,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ia.copy(n.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),Da.subVectors(this.max,Lr),Ds.subVectors(e.a,Lr),Ls.subVectors(e.b,Lr),Us.subVectors(e.c,Lr),Ni.subVectors(Ls,Ds),Oi.subVectors(Us,Ls),fs.subVectors(Ds,Us);let t=[0,-Ni.z,Ni.y,0,-Oi.z,Oi.y,0,-fs.z,fs.y,Ni.z,0,-Ni.x,Oi.z,0,-Oi.x,fs.z,0,-fs.x,-Ni.y,Ni.x,0,-Oi.y,Oi.x,0,-fs.y,fs.x,0];return!yl(t,Ds,Ls,Us,Da)||(t=[1,0,0,0,1,0,0,0,1],!yl(t,Ds,Ls,Us,Da))?!1:(La.crossVectors(Ni,Oi),t=[La.x,La.y,La.z],yl(t,Ds,Ls,Us,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},di=[new I,new I,new I,new I,new I,new I,new I,new I],Xn=new I,Ia=new Mn,Ds=new I,Ls=new I,Us=new I,Ni=new I,Oi=new I,fs=new I,Lr=new I,Da=new I,La=new I,ds=new I;function yl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ds.fromArray(s,r);let o=i.x*Math.abs(ds.x)+i.y*Math.abs(ds.y)+i.z*Math.abs(ds.z),l=e.dot(ds),c=t.dot(ds),h=n.dot(ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var bm=new Mn,Ur=new I,Ml=new I,Cn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):bm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);let t=Ur.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ur,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(Ml)),this.expandByPoint(Ur.copy(e.center).sub(Ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},pi=new I,Sl=new I,Ua=new I,Fi=new I,El=new I,Na=new I,wl=new I,lr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sl.copy(e).add(t).multiplyScalar(.5),Ua.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(Sl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ua),o=Fi.dot(this.direction),l=-Fi.dot(Ua),c=Fi.lengthSq(),h=Math.abs(1-a*a),u,f,p,v;if(h>0)if(u=a*l-o,f=a*o-l,v=r*h,u>=0)if(f>=-v)if(f<=v){let x=1/h;u*=x,f*=x,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-v?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=v?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Sl).addScaledVector(Ua,f),p}intersectSphere(e,t){pi.subVectors(e.center,this.origin);let n=pi.dot(this.direction),i=pi.dot(pi)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,i,r){El.subVectors(t,e),Na.subVectors(n,e),wl.crossVectors(El,Na);let a=this.direction.dot(wl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fi.subVectors(this.origin,e);let l=o*this.direction.dot(Na.crossVectors(Fi,Na));if(l<0)return null;let c=o*this.direction.dot(El.cross(Fi));if(c<0||l+c>a)return null;let h=-o*Fi.dot(wl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class s{constructor(e,t,n,i,r,a,o,l,c,h,u,f,p,v,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,f,p,v,x,g)}set(e,t,n,i,r,a,o,l,c,h,u,f,p,v,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=p,m[7]=v,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),a=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*u,v=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+v*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,v=c*h,x=c*u;t[0]=f+x*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-v,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,v=c*h,x=c*u;t[0]=f-x*o,t[4]=-a*u,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,p=a*u,v=o*h,x=o*u;t[0]=l*h,t[4]=v*c-p,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,v=o*l,x=o*c;t[0]=l*h,t[4]=x-f*u,t[8]=v*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+v,t[10]=f-x*u}else if(e.order==="XZY"){let f=a*l,p=a*c,v=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=a*h,t[9]=p*u-v,t[2]=v*u-p,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_m,e,ym)}lookAt(e,t,n){let i=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Bi.crossVectors(n,Tn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Bi.crossVectors(n,Tn)),Bi.normalize(),Oa.crossVectors(Tn,Bi),i[0]=Bi.x,i[4]=Oa.x,i[8]=Tn.x,i[1]=Bi.y,i[5]=Oa.y,i[9]=Tn.y,i[2]=Bi.z,i[6]=Oa.z,i[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],v=n[2],x=n[6],g=n[10],m=n[14],E=n[3],M=n[7],_=n[11],N=n[15],C=i[0],R=i[4],T=i[8],y=i[12],S=i[1],P=i[5],B=i[9],G=i[13],X=i[2],re=i[6],O=i[10],Q=i[14],H=i[3],q=i[7],se=i[11],te=i[15];return r[0]=a*C+o*S+l*X+c*H,r[4]=a*R+o*P+l*re+c*q,r[8]=a*T+o*B+l*O+c*se,r[12]=a*y+o*G+l*Q+c*te,r[1]=h*C+u*S+f*X+p*H,r[5]=h*R+u*P+f*re+p*q,r[9]=h*T+u*B+f*O+p*se,r[13]=h*y+u*G+f*Q+p*te,r[2]=v*C+x*S+g*X+m*H,r[6]=v*R+x*P+g*re+m*q,r[10]=v*T+x*B+g*O+m*se,r[14]=v*y+x*G+g*Q+m*te,r[3]=E*C+M*S+_*X+N*H,r[7]=E*R+M*P+_*re+N*q,r[11]=E*T+M*B+_*O+N*se,r[15]=E*y+M*G+_*Q+N*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],v=e[3],x=e[7],g=e[11],m=e[15];return v*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*p-n*l*p)+x*(+t*l*p-t*c*f+r*a*f-i*a*p+i*c*h-r*l*h)+g*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+m*(-i*o*h-t*l*u+t*o*f+i*a*u-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],v=e[12],x=e[13],g=e[14],m=e[15],E=u*g*c-x*f*c+x*l*p-o*g*p-u*l*m+o*f*m,M=v*f*c-h*g*c-v*l*p+a*g*p+h*l*m-a*f*m,_=h*x*c-v*u*c+v*o*p-a*x*p-h*o*m+a*u*m,N=v*u*l-h*x*l-v*o*f+a*x*f+h*o*g-a*u*g,C=t*E+n*M+i*_+r*N;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return e[0]=E*R,e[1]=(x*f*r-u*g*r-x*i*p+n*g*p+u*i*m-n*f*m)*R,e[2]=(o*g*r-x*l*r+x*i*c-n*g*c-o*i*m+n*l*m)*R,e[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*p-n*l*p)*R,e[4]=M*R,e[5]=(h*g*r-v*f*r+v*i*p-t*g*p-h*i*m+t*f*m)*R,e[6]=(v*l*r-a*g*r-v*i*c+t*g*c+a*i*m-t*l*m)*R,e[7]=(a*f*r-h*l*r+h*i*c-t*f*c-a*i*p+t*l*p)*R,e[8]=_*R,e[9]=(v*u*r-h*x*r-v*n*p+t*x*p+h*n*m-t*u*m)*R,e[10]=(a*x*r-v*o*r+v*n*c-t*x*c-a*n*m+t*o*m)*R,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*R,e[12]=N*R,e[13]=(h*x*i-v*u*i+v*n*f-t*x*f-h*n*g+t*u*g)*R,e[14]=(v*o*i-a*x*i-v*n*l+t*x*l+a*n*g-t*o*g)*R,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,v=r*u,x=a*h,g=a*u,m=o*u,E=l*c,M=l*h,_=l*u,N=n.x,C=n.y,R=n.z;return i[0]=(1-(x+m))*N,i[1]=(p+_)*N,i[2]=(v-M)*N,i[3]=0,i[4]=(p-_)*C,i[5]=(1-(f+m))*C,i[6]=(g+E)*C,i[7]=0,i[8]=(v+M)*R,i[9]=(g-E)*R,i[10]=(1-(f+x))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Ns.set(i[0],i[1],i[2]).length(),a=Ns.set(i[4],i[5],i[6]).length(),o=Ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],qn.copy(this);let c=1/r,h=1/a,u=1/o;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,t.setFromRotationMatrix(qn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=yi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),p,v;if(o===yi)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===go)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=yi){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),f=(t+e)*c,p=(n+i)*h,v,x;if(o===yi)v=(a+r)*u,x=-2*u;else if(o===go)v=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ns=new I,qn=new Ke,_m=new I(0,0,0),ym=new I(1,1,1),Bi=new I,Oa=new I,Tn=new I,Vu=new Ke,Wu=new Ft,Nn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER="XYZ";var bo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Mm=0,Xu=new I,Os=new Ft,mi=new Ke,Fa=new I,Nr=new I,Sm=new I,Em=new Ft,qu=new I(1,0,0),Yu=new I(0,1,0),ju=new I(0,0,1),Zu={type:"added"},wm={type:"removed"},Fs={type:"childadded",child:null},Tl={type:"childremoved",child:null},Tt=class s extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new I,t=new Nn,n=new Ft,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new st}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(qu,e)}rotateY(e){return this.rotateOnAxis(Yu,e)}rotateZ(e){return this.rotateOnAxis(ju,e)}translateOnAxis(e,t){return Xu.copy(e).applyQuaternion(this.quaternion),this.position.add(Xu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qu,e)}translateY(e){return this.translateOnAxis(Yu,e)}translateZ(e){return this.translateOnAxis(ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fa.copy(e):Fa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Nr,Fa,this.up):mi.lookAt(Fa,Nr,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),Os.setFromRotationMatrix(mi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zu),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wm),Tl.child=e,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zu),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,Sm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Em,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Tt.DEFAULT_UP=new I(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yn=new I,gi=new I,Al=new I,vi=new I,Bs=new I,zs=new I,Ku=new I,Rl=new I,Cl=new I,Pl=new I,Il=new mt,Dl=new mt,Ll=new mt,Hi=class s{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yn.subVectors(e,t),i.cross(Yn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Yn.subVectors(i,t),gi.subVectors(n,t),Al.subVectors(e,t);let a=Yn.dot(Yn),o=Yn.dot(gi),l=Yn.dot(Al),c=gi.dot(gi),h=gi.dot(Al),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,v=(a*h-o*l)*f;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Il.setScalar(0),Dl.setScalar(0),Ll.setScalar(0),Il.fromBufferAttribute(e,t),Dl.fromBufferAttribute(e,n),Ll.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Il,r.x),a.addScaledVector(Dl,r.y),a.addScaledVector(Ll,r.z),a}static isFrontFacing(e,t,n,i){return Yn.subVectors(n,t),gi.subVectors(e,t),Yn.cross(gi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Yn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Bs.subVectors(i,n),zs.subVectors(r,n),Rl.subVectors(e,n);let l=Bs.dot(Rl),c=zs.dot(Rl);if(l<=0&&c<=0)return t.copy(n);Cl.subVectors(e,i);let h=Bs.dot(Cl),u=zs.dot(Cl);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Bs,a);Pl.subVectors(e,r);let p=Bs.dot(Pl),v=zs.dot(Pl);if(v>=0&&p<=v)return t.copy(r);let x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(zs,o);let g=h*v-p*u;if(g<=0&&u-h>=0&&p-v>=0)return Ku.subVectors(r,i),o=(u-h)/(u-h+(p-v)),t.copy(i).addScaledVector(Ku,o);let m=1/(g+x+f);return a=x*m,o=f*m,t.copy(n).addScaledVector(Bs,a).addScaledVector(zs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function Ul(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ct.workingColorSpace){if(e=Nh(e,1),t=Jt(t,0,1),n=Jt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ul(a,r,e+1/3),this.g=Ul(a,r,e),this.b=Ul(a,r,e-1/3)}return ct.toWorkingColorSpace(this,i),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=dd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return ct.fromWorkingColorSpace(dn.copy(this),e),Math.round(Jt(dn.r*255,0,255))*65536+Math.round(Jt(dn.g*255,0,255))*256+Math.round(Jt(dn.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(dn.copy(this),t);let n=dn.r,i=dn.g,r=dn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Nt){ct.fromWorkingColorSpace(dn.copy(this),e);let t=dn.r,n=dn.g,i=dn.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Ba);let n=jr(zi.h,Ba.h,t),i=jr(zi.s,Ba.s,t),r=jr(zi.l,Ba.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new Ne;Ne.NAMES=dd;var Tm=0,xn=class extends qi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Ln(),this.name="",this.blending=Qs,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=ec,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$l&&(n.blendSrc=this.blendSrc),this.blendDst!==ec&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Wt=class extends xn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=$f,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_i=Am();function Am(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function Rm(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Jt(s,-65504,65504),_i.floatView[0]=s;let e=_i.uint32View[0],t=e>>23&511;return _i.baseTable[t]+((e&8388607)>>_i.shiftTable[t])}function Cm(s){let e=s>>10;return _i.uint32View[0]=_i.mantissaTable[_i.offsetTable[e]+(s&1023)]+_i.exponentTable[e],_i.floatView[0]}var Oh={toHalfFloat:Rm,fromHalfFloat:Cm},Yt=new I,za=new we,Ut=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oc,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)za.fromBufferAttribute(this,t),za.applyMatrix3(e),this.setXY(t,za.x,za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oc&&(e.usage=this.usage),e}};var _o=class extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var yo=class extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},Pm=0,In=new Ke,Nl=new Tt,ks=new I,An=new Mn,Or=new Mn,ln=new I,Rt=class s extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fd(e)?yo:_o)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,n){return In.makeTranslation(e,t,n),this.applyMatrix4(In),this}scale(e,t,n){return In.makeScale(e,t,n),this.applyMatrix4(In),this}lookAt(e){return Nl.lookAt(e),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Or.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(An.min,Or.min),An.expandByPoint(ln),ln.addVectors(An.max,Or.max),An.expandByPoint(ln)):(An.expandByPoint(Or.min),An.expandByPoint(Or.max))}An.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)ln.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ln));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ln.fromBufferAttribute(o,c),l&&(ks.fromBufferAttribute(e,c),ln.add(ks)),i=Math.max(i,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<n.count;T++)o[T]=new I,l[T]=new I;let c=new I,h=new I,u=new I,f=new we,p=new we,v=new we,x=new I,g=new I;function m(T,y,S){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,y),v.fromBufferAttribute(r,S),h.sub(c),u.sub(c),p.sub(f),v.sub(f);let P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(P),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(P),o[T].add(x),o[y].add(x),o[S].add(x),l[T].add(g),l[y].add(g),l[S].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let T=0,y=E.length;T<y;++T){let S=E[T],P=S.start,B=S.count;for(let G=P,X=P+B;G<X;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let M=new I,_=new I,N=new I,C=new I;function R(T){N.fromBufferAttribute(i,T),C.copy(N);let y=o[T];M.copy(y),M.sub(N.multiplyScalar(N.dot(y))).normalize(),_.crossVectors(C,y);let P=_.dot(l[T])<0?-1:1;a.setXYZW(T,M.x,M.y,M.z,P)}for(let T=0,y=E.length;T<y;++T){let S=E[T],P=S.start,B=S.count;for(let G=P,X=P+B;G<X;G+=3)R(e.getX(G+0)),R(e.getX(G+1)),R(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){let v=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,v=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let m=0;m<h;m++)f[v++]=c[p++]}return new Ut(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ju=new Ke,ps=new lr,ka=new Cn,Qu=new I,Ha=new I,Ga=new I,Va=new I,Ol=new I,Wa=new I,$u=new I,Xa=new I,Xe=class extends Tt{constructor(e=new Rt,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ol.fromBufferAttribute(u,e),a?Wa.addScaledVector(Ol,h):Wa.addScaledVector(Ol.sub(t),h))}t.add(Wa)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(r),ps.copy(e.ray).recast(e.near),!(ka.containsPoint(ps.origin)===!1&&(ps.intersectSphere(ka,Qu)===null||ps.origin.distanceToSquared(Qu)>(e.far-e.near)**2))&&(Ju.copy(r).invert(),ps.copy(e.ray).applyMatrix4(Ju),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){let g=f[v],m=a[g.materialIndex],E=Math.max(g.start,p.start),M=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let _=E,N=M;_<N;_+=3){let C=o.getX(_),R=o.getX(_+1),T=o.getX(_+2);i=qa(this,m,e,n,c,h,u,C,R,T),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=v,m=x;g<m;g+=3){let E=o.getX(g),M=o.getX(g+1),_=o.getX(g+2);i=qa(this,a,e,n,c,h,u,E,M,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){let g=f[v],m=a[g.materialIndex],E=Math.max(g.start,p.start),M=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=E,N=M;_<N;_+=3){let C=_,R=_+1,T=_+2;i=qa(this,m,e,n,c,h,u,C,R,T),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=v,m=x;g<m;g+=3){let E=g,M=g+1,_=g+2;i=qa(this,a,e,n,c,h,u,E,M,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Im(s,e,t,n,i,r,a,o){let l;if(e.side===Gt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Un,o),l===null)return null;Xa.copy(o),Xa.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Xa);return c<t.near||c>t.far?null:{distance:c,point:Xa.clone(),object:s}}function qa(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ha),s.getVertexPosition(l,Ga),s.getVertexPosition(c,Va);let h=Im(s,e,t,n,Ha,Ga,Va,$u);if(h){let u=new I;Hi.getBarycoord($u,Ha,Ga,Va,u),i&&(h.uv=Hi.getInterpolatedAttribute(i,o,l,c,u,new we)),r&&(h.uv1=Hi.getInterpolatedAttribute(r,o,l,c,u,new we)),a&&(h.normal=Hi.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new I,materialIndex:0};Hi.getNormal(Ha,Ga,Va,f.normal),h.face=f,h.barycoord=u}return h}var ke=class s extends Rt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,i,a,2),v("x","z","y",1,-1,e,n,-t,i,a,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(u,2));function v(x,g,m,E,M,_,N,C,R,T,y){let S=_/R,P=N/T,B=_/2,G=N/2,X=C/2,re=R+1,O=T+1,Q=0,H=0,q=new I;for(let se=0;se<O;se++){let te=se*P-G;for(let Ie=0;Ie<re;Ie++){let je=Ie*S-B;q[x]=je*E,q[g]=te*M,q[m]=X,c.push(q.x,q.y,q.z),q[x]=0,q[g]=0,q[m]=C>0?1:-1,h.push(q.x,q.y,q.z),u.push(Ie/R),u.push(1-se/T),Q+=1}}for(let se=0;se<T;se++)for(let te=0;te<R;te++){let Ie=f+te+re*se,je=f+te+re*(se+1),le=f+(te+1)+re*(se+1),be=f+(te+1)+re*se;l.push(Ie,je,be),l.push(je,le,be),H+=6}o.addGroup(p,H,y),p+=H,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function cr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function gn(s){let e={};for(let t=0;t<s.length;t++){let n=cr(s[t]);for(let i in n)e[i]=n[i]}return e}function Dm(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function pd(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var rn={clone:cr,merge:gn},Lm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yt=class extends xn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lm,this.fragmentShader=Um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=Dm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Mo=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new I,ef=new we,tf=new we,Xt=class extends Mo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return or*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,ef,tf),t.subVectors(tf,ef)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Hs=-90,Gs=1,kc=class extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Xt(Hs,Gs,e,t);i.layers=this.layers,this.add(i);let r=new Xt(Hs,Gs,e,t);r.layers=this.layers,this.add(r);let a=new Xt(Hs,Gs,e,t);a.layers=this.layers,this.add(a);let o=new Xt(Hs,Gs,e,t);o.layers=this.layers,this.add(o);let l=new Xt(Hs,Gs,e,t);l.layers=this.layers,this.add(l);let c=new Xt(Hs,Gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===go)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},So=class extends jt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ir,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hc=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new So(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ke(5,5,5),r=new yt({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Qt});r.uniforms.tEquirect.value=t;let a=new Xe(i,r),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Ht),new kc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},Fl=new I,Nm=new I,Om=new st,jn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Fl.subVectors(n,t).cross(Nm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Fl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Om.getNormalMatrix(e),i=this.coplanarPoint(Fl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ms=new Cn,Ya=new I,na=class{constructor(e=new jn,t=new jn,n=new jn,i=new jn,r=new jn,a=new jn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yi){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],p=i[8],v=i[9],x=i[10],g=i[11],m=i[12],E=i[13],M=i[14],_=i[15];if(n[0].setComponents(l-r,f-c,g-p,_-m).normalize(),n[1].setComponents(l+r,f+c,g+p,_+m).normalize(),n[2].setComponents(l+a,f+h,g+v,_+E).normalize(),n[3].setComponents(l-a,f-h,g-v,_-E).normalize(),n[4].setComponents(l-o,f-u,g-x,_-M).normalize(),t===yi)n[5].setComponents(l+o,f+u,g+x,_+M).normalize();else if(t===go)n[5].setComponents(o,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ya.x=i.normal.x>0?e.max.x:e.min.x,Ya.y=i.normal.y>0?e.max.y:e.min.y,Ya.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function md(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Fm(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<u.length;p++){let v=u[f],x=u[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,v=u.length;p<v;p++){let x=u[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var gt=class s extends Rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,p=[],v=[],x=[],g=[];for(let m=0;m<h;m++){let E=m*f-a;for(let M=0;M<c;M++){let _=M*u-r;v.push(_,-E,0),x.push(0,0,1),g.push(M/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<o;E++){let M=E+c*m,_=E+c*(m+1),N=E+1+c*(m+1),C=E+1+c*m;p.push(M,_,C),p.push(_,N,C)}this.setIndex(p),this.setAttribute("position",new xt(v,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zm=`#ifdef USE_ALPHAHASH
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
#endif`,km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wm=`#ifdef USE_AOMAP
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
#endif`,Xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qm=`#ifdef USE_BATCHING
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
#endif`,Ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Km=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jm=`#ifdef USE_IRIDESCENCE
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
#endif`,Qm=`#ifdef USE_BUMPMAP
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
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,o0=`#define PI 3.141592653589793
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
} // validated`,l0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,c0=`vec3 transformedNormal = objectNormal;
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
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p0="gl_FragColor = linearToOutputTexel( gl_FragColor );",m0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w0=`#ifdef USE_GRADIENTMAP
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
}`,T0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C0=`uniform bool receiveShadow;
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
#endif`,P0=`#ifdef USE_ENVMAP
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
#endif`,I0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N0=`PhysicalMaterial material;
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
#endif`,O0=`struct PhysicalMaterial {
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
}`,F0=`
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
#endif`,B0=`#if defined( RE_IndirectDiffuse )
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
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y0=`#if defined( USE_POINTS_UV )
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
#endif`,j0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
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
#endif`,eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ng=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ag=`#ifdef USE_NORMALMAP
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
#endif`,og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mg=`float getShadowMask() {
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
}`,Sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tg=`#ifdef USE_SKINNING
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
#endif`,Ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ig=`#ifdef USE_TRANSMISSION
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
#endif`,Dg=`#ifdef USE_TRANSMISSION
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bg=`uniform sampler2D t2D;
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`#include <common>
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
}`,Wg=`#if DEPTH_PACKING == 3200
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
}`,Xg=`#define DISTANCE
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
}`,qg=`#define DISTANCE
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`uniform float scale;
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
}`,Kg=`uniform vec3 diffuse;
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
}`,Jg=`#include <common>
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
}`,Qg=`uniform vec3 diffuse;
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
}`,$g=`#define LAMBERT
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
}`,ev=`#define LAMBERT
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
}`,tv=`#define MATCAP
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
}`,nv=`#define MATCAP
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
}`,iv=`#define NORMAL
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
}`,sv=`#define NORMAL
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
}`,rv=`#define PHONG
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
}`,av=`#define PHONG
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
}`,ov=`#define STANDARD
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
}`,lv=`#define STANDARD
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
}`,cv=`#define TOON
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
}`,hv=`#define TOON
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
}`,uv=`uniform float size;
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
}`,fv=`uniform vec3 diffuse;
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
}`,dv=`#include <common>
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
}`,pv=`uniform vec3 color;
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
}`,mv=`uniform float rotation;
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
}`,gv=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Bm,alphahash_pars_fragment:zm,alphamap_fragment:km,alphamap_pars_fragment:Hm,alphatest_fragment:Gm,alphatest_pars_fragment:Vm,aomap_fragment:Wm,aomap_pars_fragment:Xm,batching_pars_vertex:qm,batching_vertex:Ym,begin_vertex:jm,beginnormal_vertex:Zm,bsdfs:Km,iridescence_fragment:Jm,bumpmap_pars_fragment:Qm,clipping_planes_fragment:$m,clipping_planes_pars_fragment:e0,clipping_planes_pars_vertex:t0,clipping_planes_vertex:n0,color_fragment:i0,color_pars_fragment:s0,color_pars_vertex:r0,color_vertex:a0,common:o0,cube_uv_reflection_fragment:l0,defaultnormal_vertex:c0,displacementmap_pars_vertex:h0,displacementmap_vertex:u0,emissivemap_fragment:f0,emissivemap_pars_fragment:d0,colorspace_fragment:p0,colorspace_pars_fragment:m0,envmap_fragment:g0,envmap_common_pars_fragment:v0,envmap_pars_fragment:x0,envmap_pars_vertex:b0,envmap_physical_pars_fragment:P0,envmap_vertex:_0,fog_vertex:y0,fog_pars_vertex:M0,fog_fragment:S0,fog_pars_fragment:E0,gradientmap_pars_fragment:w0,lightmap_pars_fragment:T0,lights_lambert_fragment:A0,lights_lambert_pars_fragment:R0,lights_pars_begin:C0,lights_toon_fragment:I0,lights_toon_pars_fragment:D0,lights_phong_fragment:L0,lights_phong_pars_fragment:U0,lights_physical_fragment:N0,lights_physical_pars_fragment:O0,lights_fragment_begin:F0,lights_fragment_maps:B0,lights_fragment_end:z0,logdepthbuf_fragment:k0,logdepthbuf_pars_fragment:H0,logdepthbuf_pars_vertex:G0,logdepthbuf_vertex:V0,map_fragment:W0,map_pars_fragment:X0,map_particle_fragment:q0,map_particle_pars_fragment:Y0,metalnessmap_fragment:j0,metalnessmap_pars_fragment:Z0,morphinstance_vertex:K0,morphcolor_vertex:J0,morphnormal_vertex:Q0,morphtarget_pars_vertex:$0,morphtarget_vertex:eg,normal_fragment_begin:tg,normal_fragment_maps:ng,normal_pars_fragment:ig,normal_pars_vertex:sg,normal_vertex:rg,normalmap_pars_fragment:ag,clearcoat_normal_fragment_begin:og,clearcoat_normal_fragment_maps:lg,clearcoat_pars_fragment:cg,iridescence_pars_fragment:hg,opaque_fragment:ug,packing:fg,premultiplied_alpha_fragment:dg,project_vertex:pg,dithering_fragment:mg,dithering_pars_fragment:gg,roughnessmap_fragment:vg,roughnessmap_pars_fragment:xg,shadowmap_pars_fragment:bg,shadowmap_pars_vertex:_g,shadowmap_vertex:yg,shadowmask_pars_fragment:Mg,skinbase_vertex:Sg,skinning_pars_vertex:Eg,skinning_vertex:wg,skinnormal_vertex:Tg,specularmap_fragment:Ag,specularmap_pars_fragment:Rg,tonemapping_fragment:Cg,tonemapping_pars_fragment:Pg,transmission_fragment:Ig,transmission_pars_fragment:Dg,uv_pars_fragment:Lg,uv_pars_vertex:Ug,uv_vertex:Ng,worldpos_vertex:Og,background_vert:Fg,background_frag:Bg,backgroundCube_vert:zg,backgroundCube_frag:kg,cube_vert:Hg,cube_frag:Gg,depth_vert:Vg,depth_frag:Wg,distanceRGBA_vert:Xg,distanceRGBA_frag:qg,equirect_vert:Yg,equirect_frag:jg,linedashed_vert:Zg,linedashed_frag:Kg,meshbasic_vert:Jg,meshbasic_frag:Qg,meshlambert_vert:$g,meshlambert_frag:ev,meshmatcap_vert:tv,meshmatcap_frag:nv,meshnormal_vert:iv,meshnormal_frag:sv,meshphong_vert:rv,meshphong_frag:av,meshphysical_vert:ov,meshphysical_frag:lv,meshtoon_vert:cv,meshtoon_frag:hv,points_vert:uv,points_frag:fv,shadow_vert:dv,shadow_frag:pv,sprite_vert:mv,sprite_frag:gv},Ge={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},ii={basic:{uniforms:gn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:gn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ne(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:gn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:gn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:gn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Ne(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:gn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:gn([Ge.points,Ge.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:gn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:gn([Ge.common,Ge.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:gn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:gn([Ge.sprite,Ge.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:gn([Ge.common,Ge.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:gn([Ge.lights,Ge.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ii.physical={uniforms:gn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var ja={r:0,b:0,g:0},gs=new Nn,vv=new Ke;function xv(s,e,t,n,i,r,a){let o=new Ne(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function v(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?t:e).get(M)),M}function x(E){let M=!1,_=v(E);_===null?m(o,l):_&&_.isColor&&(m(_,1),M=!0);let N=s.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(E,M){let _=v(M);_&&(_.isCubeTexture||_.mapping===Yo)?(h===void 0&&(h=new Xe(new ke(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:cr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),gs.copy(M.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vv.makeRotationFromEuler(gs)),h.material.toneMapped=ct.getTransfer(_.colorSpace)!==St,(u!==_||f!==_.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,p=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Xe(new gt(2,2),new yt({name:"BackgroundMaterial",uniforms:cr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ct.getTransfer(_.colorSpace)!==St,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,p=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,M){E.getRGB(ja,pd(s)),n.buffers.color.setClear(ja.r,ja.g,ja.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),l=M,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,m(o,l)},render:x,addToRenderList:g}}function bv(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(S,P,B,G,X){let re=!1,O=u(G,B,P);r!==O&&(r=O,c(r.object)),re=p(S,G,B,X),re&&v(S,G,B,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(re||a)&&(a=!1,_(S,P,B,G),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,P,B){let G=B.wireframe===!0,X=n[S.id];X===void 0&&(X={},n[S.id]=X);let re=X[P.id];re===void 0&&(re={},X[P.id]=re);let O=re[G];return O===void 0&&(O=f(l()),re[G]=O),O}function f(S){let P=[],B=[],G=[];for(let X=0;X<t;X++)P[X]=0,B[X]=0,G[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:G,object:S,attributes:{},index:null}}function p(S,P,B,G){let X=r.attributes,re=P.attributes,O=0,Q=B.getAttributes();for(let H in Q)if(Q[H].location>=0){let se=X[H],te=re[H];if(te===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),se===void 0||se.attribute!==te||te&&se.data!==te.data)return!0;O++}return r.attributesNum!==O||r.index!==G}function v(S,P,B,G){let X={},re=P.attributes,O=0,Q=B.getAttributes();for(let H in Q)if(Q[H].location>=0){let se=re[H];se===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(se=S.instanceColor));let te={};te.attribute=se,se&&se.data&&(te.data=se.data),X[H]=te,O++}r.attributes=X,r.attributesNum=O,r.index=G}function x(){let S=r.newAttributes;for(let P=0,B=S.length;P<B;P++)S[P]=0}function g(S){m(S,0)}function m(S,P){let B=r.newAttributes,G=r.enabledAttributes,X=r.attributeDivisors;B[S]=1,G[S]===0&&(s.enableVertexAttribArray(S),G[S]=1),X[S]!==P&&(s.vertexAttribDivisor(S,P),X[S]=P)}function E(){let S=r.newAttributes,P=r.enabledAttributes;for(let B=0,G=P.length;B<G;B++)P[B]!==S[B]&&(s.disableVertexAttribArray(B),P[B]=0)}function M(S,P,B,G,X,re,O){O===!0?s.vertexAttribIPointer(S,P,B,X,re):s.vertexAttribPointer(S,P,B,G,X,re)}function _(S,P,B,G){x();let X=G.attributes,re=B.getAttributes(),O=P.defaultAttributeValues;for(let Q in re){let H=re[Q];if(H.location>=0){let q=X[Q];if(q===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){let se=q.normalized,te=q.itemSize,Ie=e.get(q);if(Ie===void 0)continue;let je=Ie.buffer,le=Ie.type,be=Ie.bytesPerElement,Te=le===s.INT||le===s.UNSIGNED_INT||q.gpuType===Ah;if(q.isInterleavedBufferAttribute){let xe=q.data,Fe=xe.stride,qe=q.offset;if(xe.isInstancedInterleavedBuffer){for(let Ze=0;Ze<H.locationSize;Ze++)m(H.location+Ze,xe.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ze=0;Ze<H.locationSize;Ze++)g(H.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,je);for(let Ze=0;Ze<H.locationSize;Ze++)M(H.location+Ze,te/H.locationSize,le,se,Fe*be,(qe+te/H.locationSize*Ze)*be,Te)}else{if(q.isInstancedBufferAttribute){for(let xe=0;xe<H.locationSize;xe++)m(H.location+xe,q.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let xe=0;xe<H.locationSize;xe++)g(H.location+xe);s.bindBuffer(s.ARRAY_BUFFER,je);for(let xe=0;xe<H.locationSize;xe++)M(H.location+xe,te/H.locationSize,le,se,te*be,te/H.locationSize*xe*be,Te)}}else if(O!==void 0){let se=O[Q];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(H.location,se);break;case 3:s.vertexAttrib3fv(H.location,se);break;case 4:s.vertexAttrib4fv(H.location,se);break;default:s.vertexAttrib1fv(H.location,se)}}}}E()}function N(){T();for(let S in n){let P=n[S];for(let B in P){let G=P[B];for(let X in G)h(G[X].object),delete G[X];delete P[B]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;let P=n[S.id];for(let B in P){let G=P[B];for(let X in G)h(G[X].object),delete G[X];delete P[B]}delete n[S.id]}function R(S){for(let P in n){let B=n[P];if(B[S.id]===void 0)continue;let G=B[S.id];for(let X in G)h(G[X].object),delete G[X];delete B[S.id]}}function T(){y(),a=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:y,dispose:N,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:E}}function _v(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v];t.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],h[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let v=0;for(let x=0;x<u;x++)v+=h[x]*f[x];t.update(v,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function yv(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==pn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let T=R===qt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Jn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==vn&&!T)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=v>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:N,maxSamples:C}}function Mv(s){let e=this,t=null,n=0,i=!1,r=!1,a=new jn,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let v=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||v===null||v.length===0||r&&!g)r?h(null):c();else{let E=r?0:n,M=E*4,_=m.clippingState||null;l.value=_,_=h(v,f,M,p);for(let N=0;N!==M;++N)_[N]=t[N];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,v){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,v!==!0||g===null){let m=p+x*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,_=p;M!==x;++M,_+=4)a.copy(u[M]).applyMatrix4(E,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Sv(s){let e=new WeakMap;function t(a,o){return o===lc?a.mapping=ir:o===cc&&(a.mapping=sr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===lc||o===cc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Hc(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Yi=class extends Mo{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ks=4,nf=[.125,.215,.35,.446,.526,.582],bs=20,Bl=new Yi,sf=new Ne,zl=null,kl=0,Hl=0,Gl=!1,xs=(1+Math.sqrt(5))/2,Vs=1/xs,rf=[new I(-xs,Vs,0),new I(xs,Vs,0),new I(-Vs,0,xs),new I(Vs,0,xs),new I(0,xs,-Vs),new I(0,xs,Vs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],ji=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){zl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zl,kl,Hl),this._renderer.xr.enabled=Gl,e.scissorTest=!1,Za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:qt,format:pn,colorSpace:sn,depthBuffer:!1},i=af(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=af(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ev(r)),this._blurMaterial=wv(r,e,t)}return i}_compileMaterial(e){let t=new Xe(this._lodPlanes[0],e);this._renderer.compile(t,Bl)}_sceneToCubeUV(e,t,n,i){let o=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(sf),h.toneMapping=Vi,h.autoClear=!1;let p=new Wt({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),v=new Xe(new ke,p),x=!1,g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(sf),x=!0);for(let m=0;m<6;m++){let E=m%3;E===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):E===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let M=this._cubeSize;Za(i,E*M,m>2?M:0,M,M),h.setRenderTarget(i),x&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ir||e.mapping===sr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=of());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Xe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Za(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Bl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=rf[(i-r-1)%rf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Xe(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*bs-1),x=r/v,g=isFinite(r)?1+Math.floor(h*x):bs;g>bs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${bs}`);let m=[],E=0;for(let R=0;R<bs;++R){let T=R/x,y=Math.exp(-T*T/2);m.push(y),R===0?E+=y:R<g&&(E+=2*y)}for(let R=0;R<m.length;R++)m[R]=m[R]/E;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:M}=this;f.dTheta.value=v,f.mipInt.value=M-n;let _=this._sizeLods[i],N=3*_*(i>M-Ks?i-M+Ks:0),C=4*(this._cubeSize-_);Za(t,N,C,3*_,2*_),l.setRenderTarget(t),l.render(u,Bl)}};function Ev(s){let e=[],t=[],n=[],i=s,r=s-Ks+1+nf.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Ks?l=nf[a-s+Ks-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,v=6,x=3,g=2,m=1,E=new Float32Array(x*v*p),M=new Float32Array(g*v*p),_=new Float32Array(m*v*p);for(let C=0;C<p;C++){let R=C%3*2/3-1,T=C>2?0:-1,y=[R,T,0,R+2/3,T,0,R+2/3,T+1,0,R,T,0,R+2/3,T+1,0,R,T+1,0];E.set(y,x*v*C),M.set(f,g*v*C);let S=[C,C,C,C,C,C];_.set(S,m*v*C)}let N=new Rt;N.setAttribute("position",new Ut(E,x)),N.setAttribute("uv",new Ut(M,g)),N.setAttribute("faceIndex",new Ut(_,m)),e.push(N),i>Ks&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function af(s,e,t){let n=new Vt(s,e,t);return n.texture.mapping=Yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Za(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function wv(s,e,t){let n=new Float32Array(bs),i=new I(0,1,0);return new yt({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Fh(),fragmentShader:`

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
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function of(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fh(),fragmentShader:`

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
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function lf(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Fh(){return`

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
	`}function Tv(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===lc||l===cc,h=l===ir||l===sr;if(c||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new ji(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new ji(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Av(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Wr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Rv(s,e,t,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let v in f.attributes)e.remove(f.attributes[v]);for(let v in f.morphAttributes){let x=f.morphAttributes[v];for(let g=0,m=x.length;g<m;g++)e.remove(x[g])}f.removeEventListener("dispose",a),delete i[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let v in f)e.update(f[v],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let v in p){let x=p[v];for(let g=0,m=x.length;g<m;g++)e.update(x[g],s.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,v=u.attributes.position,x=0;if(p!==null){let E=p.array;x=p.version;for(let M=0,_=E.length;M<_;M+=3){let N=E[M+0],C=E[M+1],R=E[M+2];f.push(N,C,C,R,R,N)}}else if(v!==void 0){let E=v.array;x=v.version;for(let M=0,_=E.length/3-1;M<_;M+=3){let N=M+0,C=M+1,R=M+2;f.push(N,C,C,R,R,N)}}else return;let g=new(fd(f)?yo:_o)(f,1);g.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Cv(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){s.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,v){v!==0&&(s.drawElementsInstanced(n,p,r,f*a,v),t.update(p,n,v))}function h(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,v);let g=0;for(let m=0;m<v;m++)g+=p[m];t.update(g,n,1)}function u(f,p,v,x){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/a,p[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,v);let m=0;for(let E=0;E<v;E++)m+=p[E]*x[E];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Pv(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Iv(s,e,t){let n=new WeakMap,i=new mt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let y=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],M=0;p===!0&&(M=1),v===!0&&(M=2),x===!0&&(M=3);let _=o.attributes.position.count*M,N=1;_>e.maxTextureSize&&(N=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let C=new Float32Array(_*N*4*u),R=new xo(C,_,N,u);R.type=vn,R.needsUpdate=!0;let T=M*4;for(let S=0;S<u;S++){let P=g[S],B=m[S],G=E[S],X=_*N*4*S;for(let re=0;re<P.count;re++){let O=re*T;p===!0&&(i.fromBufferAttribute(P,re),C[X+O+0]=i.x,C[X+O+1]=i.y,C[X+O+2]=i.z,C[X+O+3]=0),v===!0&&(i.fromBufferAttribute(B,re),C[X+O+4]=i.x,C[X+O+5]=i.y,C[X+O+6]=i.z,C[X+O+7]=0),x===!0&&(i.fromBufferAttribute(G,re),C[X+O+8]=i.x,C[X+O+9]=i.y,C[X+O+10]=i.z,C[X+O+11]=G.itemSize===4?i.w:1)}}f={count:u,texture:R,size:new we(_,N)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Dv(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Zi=class extends jt{constructor(e,t,n,i,r,a,o,l,c,h=$s){if(h!==$s&&h!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$s&&(n=_s),n===void 0&&h===Xi&&(n=Wi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},gd=new jt,cf=new Zi(1,1),vd=new xo,xd=new zc,bd=new So,hf=[],uf=[],ff=new Float32Array(16),df=new Float32Array(9),pf=new Float32Array(4);function br(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=hf[i];if(r===void 0&&(r=new Float32Array(i),hf[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function tn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function nn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ko(s,e){let t=uf[e];t===void 0&&(t=new Int32Array(e),uf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Lv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Uv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2fv(this.addr,e),nn(t,e)}}function Nv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;s.uniform3fv(this.addr,e),nn(t,e)}}function Ov(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4fv(this.addr,e),nn(t,e)}}function Fv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;pf.set(n),s.uniformMatrix2fv(this.addr,!1,pf),nn(t,n)}}function Bv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;df.set(n),s.uniformMatrix3fv(this.addr,!1,df),nn(t,n)}}function zv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;ff.set(n),s.uniformMatrix4fv(this.addr,!1,ff),nn(t,n)}}function kv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Hv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2iv(this.addr,e),nn(t,e)}}function Gv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3iv(this.addr,e),nn(t,e)}}function Vv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4iv(this.addr,e),nn(t,e)}}function Wv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Xv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2uiv(this.addr,e),nn(t,e)}}function qv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3uiv(this.addr,e),nn(t,e)}}function Yv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4uiv(this.addr,e),nn(t,e)}}function jv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(cf.compareFunction=ud,r=cf):r=gd,t.setTexture2D(e||r,i)}function Zv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xd,i)}function Kv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bd,i)}function Jv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vd,i)}function Qv(s){switch(s){case 5126:return Lv;case 35664:return Uv;case 35665:return Nv;case 35666:return Ov;case 35674:return Fv;case 35675:return Bv;case 35676:return zv;case 5124:case 35670:return kv;case 35667:case 35671:return Hv;case 35668:case 35672:return Gv;case 35669:case 35673:return Vv;case 5125:return Wv;case 36294:return Xv;case 36295:return qv;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Jv}}function $v(s,e){s.uniform1fv(this.addr,e)}function ex(s,e){let t=br(e,this.size,2);s.uniform2fv(this.addr,t)}function tx(s,e){let t=br(e,this.size,3);s.uniform3fv(this.addr,t)}function nx(s,e){let t=br(e,this.size,4);s.uniform4fv(this.addr,t)}function ix(s,e){let t=br(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function sx(s,e){let t=br(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function rx(s,e){let t=br(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ax(s,e){s.uniform1iv(this.addr,e)}function ox(s,e){s.uniform2iv(this.addr,e)}function lx(s,e){s.uniform3iv(this.addr,e)}function cx(s,e){s.uniform4iv(this.addr,e)}function hx(s,e){s.uniform1uiv(this.addr,e)}function ux(s,e){s.uniform2uiv(this.addr,e)}function fx(s,e){s.uniform3uiv(this.addr,e)}function dx(s,e){s.uniform4uiv(this.addr,e)}function px(s,e,t){let n=this.cache,i=e.length,r=Ko(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||gd,r[a])}function mx(s,e,t){let n=this.cache,i=e.length,r=Ko(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||xd,r[a])}function gx(s,e,t){let n=this.cache,i=e.length,r=Ko(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||bd,r[a])}function vx(s,e,t){let n=this.cache,i=e.length,r=Ko(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||vd,r[a])}function xx(s){switch(s){case 5126:return $v;case 35664:return ex;case 35665:return tx;case 35666:return nx;case 35674:return ix;case 35675:return sx;case 35676:return rx;case 5124:case 35670:return ax;case 35667:case 35671:return ox;case 35668:case 35672:return lx;case 35669:case 35673:return cx;case 5125:return hx;case 36294:return ux;case 36295:return fx;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return gx;case 36289:case 36303:case 36311:case 36292:return vx}}var Gc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qv(t.type)}},Vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xx(t.type)}},Wc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Vl=/(\w+)(\])?(\[|\.)?/g;function mf(s,e){s.seq.push(e),s.map[e.id]=e}function bx(s,e,t){let n=s.name,i=n.length;for(Vl.lastIndex=0;;){let r=Vl.exec(n),a=Vl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){mf(t,c===void 0?new Gc(o,s,e):new Vc(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Wc(o),mf(t,u)),t=u}}}var tr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);bx(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function gf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var _x=37297,yx=0;function Mx(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var vf=new st;function Sx(s){ct._getMatrix(vf,ct.workingColorSpace,s);let e=`mat3( ${vf.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(s)){case Zo:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function xf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Mx(s.getShaderSource(e),a)}else return i}function Ex(s,e){let t=Sx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function wx(s,e){let t;switch(e){case yh:t="Linear";break;case Mh:t="Reinhard";break;case Sh:t="Cineon";break;case ua:t="ACESFilmic";break;case Eh:t="AgX";break;case wh:t="Neutral";break;case zp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ka=new I;function Tx(){ct.getLuminanceCoefficients(Ka);let s=Ka.x.toFixed(4),e=Ka.y.toFixed(4),t=Ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ax(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function Rx(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cx(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Xr(s){return s!==""}function bf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _f(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Px=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(s){return s.replace(Px,Dx)}var Ix=new Map;function Dx(s,e){let t=rt[e];if(t===void 0){let n=Ix.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xc(t)}var Lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yf(s){return s.replace(Lx,Ux)}function Ux(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Mf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Nx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Qf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===bh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function Ox(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ir:case sr:e="ENVMAP_TYPE_CUBE";break;case Yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case sr:e="ENVMAP_MODE_REFRACTION";break}return e}function Bx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $f:e="ENVMAP_BLENDING_MULTIPLY";break;case Fp:e="ENVMAP_BLENDING_MIX";break;case Bp:e="ENVMAP_BLENDING_ADD";break}return e}function zx(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function kx(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Nx(t),c=Ox(t),h=Fx(t),u=Bx(t),f=zx(t),p=Ax(t),v=Rx(r),x=i.createProgram(),g,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Xr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Xr).join(`
`),m.length>0&&(m+=`
`)):(g=[Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),m=[Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?rt.tonemapping_pars_fragment:"",t.toneMapping!==Vi?wx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Ex("linearToOutputTexel",t.outputColorSpace),Tx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),a=Xc(a),a=bf(a,t),a=_f(a,t),o=Xc(o),o=bf(o,t),o=_f(o,t),a=yf(a),o=yf(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=E+g+a,_=E+m+o,N=gf(i,i.VERTEX_SHADER,M),C=gf(i,i.FRAGMENT_SHADER,_);i.attachShader(x,N),i.attachShader(x,C),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(P){if(s.debug.checkShaderErrors){let B=i.getProgramInfoLog(x).trim(),G=i.getShaderInfoLog(N).trim(),X=i.getShaderInfoLog(C).trim(),re=!0,O=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(re=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,N,C);else{let Q=xf(i,N,"vertex"),H=xf(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+Q+`
`+H)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(G===""||X==="")&&(O=!1);O&&(P.diagnostics={runnable:re,programLog:B,vertexShader:{log:G,prefix:g},fragmentShader:{log:X,prefix:m}})}i.deleteShader(N),i.deleteShader(C),T=new tr(i,x),y=Cx(i,x)}let T;this.getUniforms=function(){return T===void 0&&R(this),T};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,_x)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=C,this}var Hx=0,qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yc(e),t.set(e,n)),n}},Yc=class{constructor(e){this.id=Hx++,this.code=e,this.usedTimes=0}};function Gx(s,e,t,n,i,r,a){let o=new bo,l=new qc,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,S,P,B,G){let X=B.fog,re=G.geometry,O=y.isMeshStandardMaterial?B.environment:null,Q=(y.isMeshStandardMaterial?t:e).get(y.envMap||O),H=Q&&Q.mapping===Yo?Q.image.height:null,q=v[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let se=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,te=se!==void 0?se.length:0,Ie=0;re.morphAttributes.position!==void 0&&(Ie=1),re.morphAttributes.normal!==void 0&&(Ie=2),re.morphAttributes.color!==void 0&&(Ie=3);let je,le,be,Te;if(q){let _t=ii[q];je=_t.vertexShader,le=_t.fragmentShader}else je=y.vertexShader,le=y.fragmentShader,l.update(y),be=l.getVertexShaderID(y),Te=l.getFragmentShaderID(y);let xe=s.getRenderTarget(),Fe=s.state.buffers.depth.getReversed(),qe=G.isInstancedMesh===!0,Ze=G.isBatchedMesh===!0,tt=!!y.map,ue=!!y.matcap,Ae=!!Q,F=!!y.aoMap,Ve=!!y.lightMap,Ee=!!y.bumpMap,We=!!y.normalMap,Ue=!!y.displacementMap,Je=!!y.emissiveMap,Be=!!y.metalnessMap,U=!!y.roughnessMap,A=y.anisotropy>0,Y=y.clearcoat>0,ce=y.dispersion>0,_e=y.iridescence>0,fe=y.sheen>0,Ye=y.transmission>0,W=A&&!!y.anisotropyMap,K=Y&&!!y.clearcoatMap,ve=Y&&!!y.clearcoatNormalMap,J=Y&&!!y.clearcoatRoughnessMap,he=_e&&!!y.iridescenceMap,ye=_e&&!!y.iridescenceThicknessMap,Z=fe&&!!y.sheenColorMap,ae=fe&&!!y.sheenRoughnessMap,ge=!!y.specularMap,me=!!y.specularColorMap,Se=!!y.specularIntensityMap,k=Ye&&!!y.transmissionMap,V=Ye&&!!y.thicknessMap,ee=!!y.gradientMap,pe=!!y.alphaMap,Ce=y.alphaTest>0,Me=!!y.alphaHash,$e=!!y.extensions,vt=Vi;y.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(vt=s.toneMapping);let kt={shaderID:q,shaderType:y.type,shaderName:y.name,vertexShader:je,fragmentShader:le,defines:y.defines,customVertexShaderID:be,customFragmentShaderID:Te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ze,batchingColor:Ze&&G._colorsTexture!==null,instancing:qe,instancingColor:qe&&G.instanceColor!==null,instancingMorph:qe&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:sn,alphaToCoverage:!!y.alphaToCoverage,map:tt,matcap:ue,envMap:Ae,envMapMode:Ae&&Q.mapping,envMapCubeUVHeight:H,aoMap:F,lightMap:Ve,bumpMap:Ee,normalMap:We,displacementMap:f&&Ue,emissiveMap:Je,normalMapObjectSpace:We&&y.normalMapType===Vp,normalMapTangentSpace:We&&y.normalMapType===Uh,metalnessMap:Be,roughnessMap:U,anisotropy:A,anisotropyMap:W,clearcoat:Y,clearcoatMap:K,clearcoatNormalMap:ve,clearcoatRoughnessMap:J,dispersion:ce,iridescence:_e,iridescenceMap:he,iridescenceThicknessMap:ye,sheen:fe,sheenColorMap:Z,sheenRoughnessMap:ae,specularMap:ge,specularColorMap:me,specularIntensityMap:Se,transmission:Ye,transmissionMap:k,thicknessMap:V,gradientMap:ee,opaque:y.transparent===!1&&y.blending===Qs&&y.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ce,alphaHash:Me,combine:y.combine,mapUv:tt&&x(y.map.channel),aoMapUv:F&&x(y.aoMap.channel),lightMapUv:Ve&&x(y.lightMap.channel),bumpMapUv:Ee&&x(y.bumpMap.channel),normalMapUv:We&&x(y.normalMap.channel),displacementMapUv:Ue&&x(y.displacementMap.channel),emissiveMapUv:Je&&x(y.emissiveMap.channel),metalnessMapUv:Be&&x(y.metalnessMap.channel),roughnessMapUv:U&&x(y.roughnessMap.channel),anisotropyMapUv:W&&x(y.anisotropyMap.channel),clearcoatMapUv:K&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ve&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:ae&&x(y.sheenRoughnessMap.channel),specularMapUv:ge&&x(y.specularMap.channel),specularColorMapUv:me&&x(y.specularColorMap.channel),specularIntensityMapUv:Se&&x(y.specularIntensityMap.channel),transmissionMapUv:k&&x(y.transmissionMap.channel),thicknessMapUv:V&&x(y.thicknessMap.channel),alphaMapUv:pe&&x(y.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(We||A),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!re.attributes.uv&&(tt||pe),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Fe,skinning:G.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:vt,decodeVideoTexture:tt&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===St,decodeVideoTextureEmissive:Je&&y.emissiveMap.isVideoTexture===!0&&ct.getTransfer(y.emissiveMap.colorSpace)===St,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ot,flipSided:y.side===Gt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:$e&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&y.extensions.multiDraw===!0||Ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function m(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)S.push(P),S.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(E(S,y),M(S,y),S.push(s.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function E(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function _(y){let S=v[y.type],P;if(S){let B=ii[S];P=rn.clone(B.uniforms)}else P=y.uniforms;return P}function N(y,S){let P;for(let B=0,G=h.length;B<G;B++){let X=h[B];if(X.cacheKey===S){P=X,++P.usedTimes;break}}return P===void 0&&(P=new kx(s,S,y,r),h.push(P)),P}function C(y){if(--y.usedTimes===0){let S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function R(y){l.remove(y)}function T(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:N,releaseProgram:C,releaseShaderCache:R,programs:h,dispose:T}}function Vx(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Wx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Sf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ef(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,p,v,x,g){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:p,groupOrder:v,renderOrder:u.renderOrder,z:x,group:g},s[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=p,m.groupOrder=v,m.renderOrder=u.renderOrder,m.z=x,m.group=g),e++,m}function o(u,f,p,v,x,g){let m=a(u,f,p,v,x,g);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(u,f,p,v,x,g){let m=a(u,f,p,v,x,g);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||Wx),n.length>1&&n.sort(f||Sf),i.length>1&&i.sort(f||Sf)}function h(){for(let u=e,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Xx(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Ef,s.set(n,[a])):i>=r.length?(a=new Ef,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function qx(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ne};break;case"SpotLight":t={position:new I,direction:new I,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function Yx(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var jx=0;function Zx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Kx(s){let e=new qx,t=Yx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,r=new Ke,a=new Ke;function o(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,v=0,x=0,g=0,m=0,E=0,M=0,_=0,N=0,C=0,R=0;c.sort(Zx);for(let y=0,S=c.length;y<S;y++){let P=c[y],B=P.color,G=P.intensity,X=P.distance,re=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=B.r*G,u+=B.g*G,f+=B.b*G;else if(P.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(P.sh.coefficients[O],G);R++}else if(P.isDirectionalLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,H=t.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=re,n.directionalShadowMatrix[p]=P.shadow.matrix,E++}n.directional[p]=O,p++}else if(P.isSpotLight){let O=e.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(B).multiplyScalar(G),O.distance=X,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,n.spot[x]=O;let Q=P.shadow;if(P.map&&(n.spotLightMap[N]=P.map,N++,Q.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[x]=Q.matrix,P.castShadow){let H=t.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=re,_++}x++}else if(P.isRectAreaLight){let O=e.get(P);O.color.copy(B).multiplyScalar(G),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=O,g++}else if(P.isPointLight){let O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){let Q=P.shadow,H=t.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,n.pointShadow[v]=H,n.pointShadowMap[v]=re,n.pointShadowMatrix[v]=P.shadow.matrix,M++}n.point[v]=O,v++}else if(P.isHemisphereLight){let O=e.get(P);O.skyColor.copy(P.color).multiplyScalar(G),O.groundColor.copy(P.groundColor).multiplyScalar(G),n.hemi[m]=O,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ge.LTC_FLOAT_1,n.rectAreaLTC2=Ge.LTC_FLOAT_2):(n.rectAreaLTC1=Ge.LTC_HALF_1,n.rectAreaLTC2=Ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let T=n.hash;(T.directionalLength!==p||T.pointLength!==v||T.spotLength!==x||T.rectAreaLength!==g||T.hemiLength!==m||T.numDirectionalShadows!==E||T.numPointShadows!==M||T.numSpotShadows!==_||T.numSpotMaps!==N||T.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=g,n.point.length=v,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+N-C,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,T.directionalLength=p,T.pointLength=v,T.spotLength=x,T.rectAreaLength=g,T.hemiLength=m,T.numDirectionalShadows=E,T.numPointShadows=M,T.numSpotShadows=_,T.numSpotMaps=N,T.numLightProbes=R,n.version=jx++)}function l(c,h){let u=0,f=0,p=0,v=0,x=0,g=h.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){let M=c[m];if(M.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),u++}else if(M.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let _=n.rectArea[v];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function wf(s){let e=new Kx(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Jx(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new wf(s),e.set(i,[o])):r>=a.length?(o=new wf(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ia=class extends xn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jc=class extends xn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Qx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$x=`uniform sampler2D shadow_pass;
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
}`;function eb(s,e,t){let n=new na,i=new we,r=new we,a=new mt,o=new ia({depthPacking:Lh}),l=new jc,c={},h=t.maxTextureSize,u={[Un]:Gt,[Gt]:Un,[Ot]:Ot},f=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Qx,fragmentShader:$x}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let v=new Rt;v.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Xe(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qf;let m=this.type;this.render=function(C,R,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let y=s.getRenderTarget(),S=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Qt),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let G=m!==bi&&this.type===bi,X=m===bi&&this.type!==bi;for(let re=0,O=C.length;re<O;re++){let Q=C[re],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let q=H.getFrameExtents();if(i.multiply(q),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/q.x),i.x=r.x*q.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/q.y),i.y=r.y*q.y,H.mapSize.y=r.y)),H.map===null||G===!0||X===!0){let te=this.type!==bi?{minFilter:$t,magFilter:$t}:{};H.map!==null&&H.map.dispose(),H.map=new Vt(i.x,i.y,te),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let se=H.getViewportCount();for(let te=0;te<se;te++){let Ie=H.getViewport(te);a.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),B.viewport(a),H.updateMatrices(Q,te),n=H.getFrustum(),_(R,T,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===bi&&E(H,T),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(y,S,P)};function E(C,R){let T=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Vt(i.x,i.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(R,null,T,f,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(R,null,T,p,x,null)}function M(C,R,T,y){let S=null,P=T.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)S=P;else if(S=T.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let B=S.uuid,G=R.uuid,X=c[B];X===void 0&&(X={},c[B]=X);let re=X[G];re===void 0&&(re=S.clone(),X[G]=re,R.addEventListener("dispose",N)),S=re}if(S.visible=R.visible,S.wireframe=R.wireframe,y===bi?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let B=s.properties.get(S);B.light=T}return S}function _(C,R,T,y,S){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===bi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,C.matrixWorld);let G=e.update(C),X=C.material;if(Array.isArray(X)){let re=G.groups;for(let O=0,Q=re.length;O<Q;O++){let H=re[O],q=X[H.materialIndex];if(q&&q.visible){let se=M(C,q,y,S);C.onBeforeShadow(s,C,R,T,G,se,H),s.renderBufferDirect(T,null,G,se,C,H),C.onAfterShadow(s,C,R,T,G,se,H)}}}else if(X.visible){let re=M(C,X,y,S);C.onBeforeShadow(s,C,R,T,G,re,null),s.renderBufferDirect(T,null,G,re,C,null),C.onAfterShadow(s,C,R,T,G,re,null)}}let B=C.children;for(let G=0,X=B.length;G<X;G++)_(B[G],R,T,y,S)}function N(C){C.target.removeEventListener("dispose",N);for(let T in c){let y=c[T],S=C.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}var tb={[tc]:nc,[ic]:ac,[sc]:oc,[nr]:rc,[nc]:tc,[ac]:ic,[oc]:sc,[rc]:nr};function nb(s,e){function t(){let k=!1,V=new mt,ee=null,pe=new mt(0,0,0,0);return{setMask:function(Ce){ee!==Ce&&!k&&(s.colorMask(Ce,Ce,Ce,Ce),ee=Ce)},setLocked:function(Ce){k=Ce},setClear:function(Ce,Me,$e,vt,kt){kt===!0&&(Ce*=vt,Me*=vt,$e*=vt),V.set(Ce,Me,$e,vt),pe.equals(V)===!1&&(s.clearColor(Ce,Me,$e,vt),pe.copy(V))},reset:function(){k=!1,ee=null,pe.set(-1,0,0,0)}}}function n(){let k=!1,V=!1,ee=null,pe=null,Ce=null;return{setReversed:function(Me){if(V!==Me){let $e=e.get("EXT_clip_control");V?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);let vt=Ce;Ce=null,this.setClear(vt)}V=Me},getReversed:function(){return V},setTest:function(Me){Me?xe(s.DEPTH_TEST):Fe(s.DEPTH_TEST)},setMask:function(Me){ee!==Me&&!k&&(s.depthMask(Me),ee=Me)},setFunc:function(Me){if(V&&(Me=tb[Me]),pe!==Me){switch(Me){case tc:s.depthFunc(s.NEVER);break;case nc:s.depthFunc(s.ALWAYS);break;case ic:s.depthFunc(s.LESS);break;case nr:s.depthFunc(s.LEQUAL);break;case sc:s.depthFunc(s.EQUAL);break;case rc:s.depthFunc(s.GEQUAL);break;case ac:s.depthFunc(s.GREATER);break;case oc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Me}},setLocked:function(Me){k=Me},setClear:function(Me){Ce!==Me&&(V&&(Me=1-Me),s.clearDepth(Me),Ce=Me)},reset:function(){k=!1,ee=null,pe=null,Ce=null,V=!1}}}function i(){let k=!1,V=null,ee=null,pe=null,Ce=null,Me=null,$e=null,vt=null,kt=null;return{setTest:function(_t){k||(_t?xe(s.STENCIL_TEST):Fe(s.STENCIL_TEST))},setMask:function(_t){V!==_t&&!k&&(s.stencilMask(_t),V=_t)},setFunc:function(_t,En,Wn){(ee!==_t||pe!==En||Ce!==Wn)&&(s.stencilFunc(_t,En,Wn),ee=_t,pe=En,Ce=Wn)},setOp:function(_t,En,Wn){(Me!==_t||$e!==En||vt!==Wn)&&(s.stencilOp(_t,En,Wn),Me=_t,$e=En,vt=Wn)},setLocked:function(_t){k=_t},setClear:function(_t){kt!==_t&&(s.clearStencil(_t),kt=_t)},reset:function(){k=!1,V=null,ee=null,pe=null,Ce=null,Me=null,$e=null,vt=null,kt=null}}}let r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],v=null,x=!1,g=null,m=null,E=null,M=null,_=null,N=null,C=null,R=new Ne(0,0,0),T=0,y=!1,S=null,P=null,B=null,G=null,X=null,re=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Q=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=Q>=2);let q=null,se={},te=s.getParameter(s.SCISSOR_BOX),Ie=s.getParameter(s.VIEWPORT),je=new mt().fromArray(te),le=new mt().fromArray(Ie);function be(k,V,ee,pe){let Ce=new Uint8Array(4),Me=s.createTexture();s.bindTexture(k,Me),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<ee;$e++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(V,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(V+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return Me}let Te={};Te[s.TEXTURE_2D]=be(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[s.TEXTURE_2D_ARRAY]=be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=be(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xe(s.DEPTH_TEST),a.setFunc(nr),Ee(!1),We(Tu),xe(s.CULL_FACE),F(Qt);function xe(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function Fe(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function qe(k,V){return u[k]!==V?(s.bindFramebuffer(k,V),u[k]=V,k===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=V),k===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=V),!0):!1}function Ze(k,V){let ee=p,pe=!1;if(k){ee=f.get(V),ee===void 0&&(ee=[],f.set(V,ee));let Ce=k.textures;if(ee.length!==Ce.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let Me=0,$e=Ce.length;Me<$e;Me++)ee[Me]=s.COLOR_ATTACHMENT0+Me;ee.length=Ce.length,pe=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,pe=!0);pe&&s.drawBuffers(ee)}function tt(k){return v!==k?(s.useProgram(k),v=k,!0):!1}let ue={[Dn]:s.FUNC_ADD,[Sp]:s.FUNC_SUBTRACT,[Ep]:s.FUNC_REVERSE_SUBTRACT};ue[wp]=s.MIN,ue[Tp]=s.MAX;let Ae={[xr]:s.ZERO,[Ap]:s.ONE,[Rp]:s.SRC_COLOR,[$l]:s.SRC_ALPHA,[Dp]:s.SRC_ALPHA_SATURATE,[qo]:s.DST_COLOR,[Xo]:s.DST_ALPHA,[Cp]:s.ONE_MINUS_SRC_COLOR,[ec]:s.ONE_MINUS_SRC_ALPHA,[Ip]:s.ONE_MINUS_DST_COLOR,[Pp]:s.ONE_MINUS_DST_ALPHA,[Lp]:s.CONSTANT_COLOR,[Up]:s.ONE_MINUS_CONSTANT_COLOR,[Np]:s.CONSTANT_ALPHA,[Op]:s.ONE_MINUS_CONSTANT_ALPHA};function F(k,V,ee,pe,Ce,Me,$e,vt,kt,_t){if(k===Qt){x===!0&&(Fe(s.BLEND),x=!1);return}if(x===!1&&(xe(s.BLEND),x=!0),k!==_h){if(k!==g||_t!==y){if((m!==Dn||_!==Dn)&&(s.blendEquation(s.FUNC_ADD),m=Dn,_=Dn),_t)switch(k){case Qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ri:s.blendFunc(s.ONE,s.ONE);break;case Au:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ru:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ri:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Au:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ru:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}E=null,M=null,N=null,C=null,R.set(0,0,0),T=0,g=k,y=_t}return}Ce=Ce||V,Me=Me||ee,$e=$e||pe,(V!==m||Ce!==_)&&(s.blendEquationSeparate(ue[V],ue[Ce]),m=V,_=Ce),(ee!==E||pe!==M||Me!==N||$e!==C)&&(s.blendFuncSeparate(Ae[ee],Ae[pe],Ae[Me],Ae[$e]),E=ee,M=pe,N=Me,C=$e),(vt.equals(R)===!1||kt!==T)&&(s.blendColor(vt.r,vt.g,vt.b,kt),R.copy(vt),T=kt),g=k,y=!1}function Ve(k,V){k.side===Ot?Fe(s.CULL_FACE):xe(s.CULL_FACE);let ee=k.side===Gt;V&&(ee=!ee),Ee(ee),k.blending===Qs&&k.transparent===!1?F(Qt):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let pe=k.stencilWrite;o.setTest(pe),pe&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Je(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(k){S!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),S=k)}function We(k){k!==yp?(xe(s.CULL_FACE),k!==P&&(k===Tu?s.cullFace(s.BACK):k===Mp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Fe(s.CULL_FACE),P=k}function Ue(k){k!==B&&(O&&s.lineWidth(k),B=k)}function Je(k,V,ee){k?(xe(s.POLYGON_OFFSET_FILL),(G!==V||X!==ee)&&(s.polygonOffset(V,ee),G=V,X=ee)):Fe(s.POLYGON_OFFSET_FILL)}function Be(k){k?xe(s.SCISSOR_TEST):Fe(s.SCISSOR_TEST)}function U(k){k===void 0&&(k=s.TEXTURE0+re-1),q!==k&&(s.activeTexture(k),q=k)}function A(k,V,ee){ee===void 0&&(q===null?ee=s.TEXTURE0+re-1:ee=q);let pe=se[ee];pe===void 0&&(pe={type:void 0,texture:void 0},se[ee]=pe),(pe.type!==k||pe.texture!==V)&&(q!==ee&&(s.activeTexture(ee),q=ee),s.bindTexture(k,V||Te[k]),pe.type=k,pe.texture=V)}function Y(){let k=se[q];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ce(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ye(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function W(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function K(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(k){je.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),je.copy(k))}function ae(k){le.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),le.copy(k))}function ge(k,V){let ee=c.get(V);ee===void 0&&(ee=new WeakMap,c.set(V,ee));let pe=ee.get(k);pe===void 0&&(pe=s.getUniformBlockIndex(V,k.name),ee.set(k,pe))}function me(k,V){let pe=c.get(V).get(k);l.get(V)!==pe&&(s.uniformBlockBinding(V,pe,k.__bindingPointIndex),l.set(V,pe))}function Se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},q=null,se={},u={},f=new WeakMap,p=[],v=null,x=!1,g=null,m=null,E=null,M=null,_=null,N=null,C=null,R=new Ne(0,0,0),T=0,y=!1,S=null,P=null,B=null,G=null,X=null,je.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xe,disable:Fe,bindFramebuffer:qe,drawBuffers:Ze,useProgram:tt,setBlending:F,setMaterial:Ve,setFlipSided:Ee,setCullFace:We,setLineWidth:Ue,setPolygonOffset:Je,setScissorTest:Be,activeTexture:U,bindTexture:A,unbindTexture:Y,compressedTexImage2D:ce,compressedTexImage3D:_e,texImage2D:he,texImage3D:ye,updateUBOMapping:ge,uniformBlockBinding:me,texStorage2D:ve,texStorage3D:J,texSubImage2D:fe,texSubImage3D:Ye,compressedTexSubImage2D:W,compressedTexSubImage3D:K,scissor:Z,viewport:ae,reset:Se}}function Tf(s,e,t,n){let i=ib(n);switch(t){case sd:return s*e;case ad:return s*e;case od:return s*e*2;case fa:return s*e/i.components*i.byteLength;case Ph:return s*e/i.components*i.byteLength;case ld:return s*e*2/i.components*i.byteLength;case Ih:return s*e*2/i.components*i.byteLength;case rd:return s*e*3/i.components*i.byteLength;case pn:return s*e*4/i.components*i.byteLength;case Dh:return s*e*4/i.components*i.byteLength;case ho:case uo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case fo:case po:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uc:case dc:return Math.max(s,16)*Math.max(e,8)/4;case hc:case fc:return Math.max(s,8)*Math.max(e,8)/2;case pc:case mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case gc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case bc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case _c:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case yc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case wc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case mo:case Ic:case Dc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case cd:case Lc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Uc:case Nc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ib(s){switch(s){case Jn:case td:return{byteLength:1,components:1};case ea:case nd:case qt:return{byteLength:2,components:1};case Rh:case Ch:return{byteLength:2,components:4};case _s:case Ah:case vn:return{byteLength:4,components:1};case id:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function sb(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,A){return p?new OffscreenCanvas(U,A):ta("canvas")}function x(U,A,Y){let ce=1,_e=Be(U);if((_e.width>Y||_e.height>Y)&&(ce=Y/Math.max(_e.width,_e.height)),ce<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let fe=Math.floor(ce*_e.width),Ye=Math.floor(ce*_e.height);u===void 0&&(u=v(fe,Ye));let W=A?v(fe,Ye):u;return W.width=fe,W.height=Ye,W.getContext("2d").drawImage(U,0,0,fe,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+fe+"x"+Ye+")."),W}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),U;return U}function g(U){return U.generateMipmaps}function m(U){s.generateMipmap(U)}function E(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(U,A,Y,ce,_e=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let fe=A;if(A===s.RED&&(Y===s.FLOAT&&(fe=s.R32F),Y===s.HALF_FLOAT&&(fe=s.R16F),Y===s.UNSIGNED_BYTE&&(fe=s.R8)),A===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(fe=s.R8UI),Y===s.UNSIGNED_SHORT&&(fe=s.R16UI),Y===s.UNSIGNED_INT&&(fe=s.R32UI),Y===s.BYTE&&(fe=s.R8I),Y===s.SHORT&&(fe=s.R16I),Y===s.INT&&(fe=s.R32I)),A===s.RG&&(Y===s.FLOAT&&(fe=s.RG32F),Y===s.HALF_FLOAT&&(fe=s.RG16F),Y===s.UNSIGNED_BYTE&&(fe=s.RG8)),A===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(fe=s.RG8UI),Y===s.UNSIGNED_SHORT&&(fe=s.RG16UI),Y===s.UNSIGNED_INT&&(fe=s.RG32UI),Y===s.BYTE&&(fe=s.RG8I),Y===s.SHORT&&(fe=s.RG16I),Y===s.INT&&(fe=s.RG32I)),A===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),Y===s.UNSIGNED_INT&&(fe=s.RGB32UI),Y===s.BYTE&&(fe=s.RGB8I),Y===s.SHORT&&(fe=s.RGB16I),Y===s.INT&&(fe=s.RGB32I)),A===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),Y===s.UNSIGNED_INT&&(fe=s.RGBA32UI),Y===s.BYTE&&(fe=s.RGBA8I),Y===s.SHORT&&(fe=s.RGBA16I),Y===s.INT&&(fe=s.RGBA32I)),A===s.RGB&&Y===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),A===s.RGBA){let Ye=_e?Zo:ct.getTransfer(ce);Y===s.FLOAT&&(fe=s.RGBA32F),Y===s.HALF_FLOAT&&(fe=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(fe=Ye===St?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function _(U,A){let Y;return U?A===null||A===_s||A===Wi?Y=s.DEPTH24_STENCIL8:A===vn?Y=s.DEPTH32F_STENCIL8:A===ea&&(Y=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===_s||A===Wi?Y=s.DEPTH_COMPONENT24:A===vn?Y=s.DEPTH_COMPONENT32F:A===ea&&(Y=s.DEPTH_COMPONENT16),Y}function N(U,A){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==$t&&U.minFilter!==Ht?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function C(U){let A=U.target;A.removeEventListener("dispose",C),T(A),A.isVideoTexture&&h.delete(A)}function R(U){let A=U.target;A.removeEventListener("dispose",R),S(A)}function T(U){let A=n.get(U);if(A.__webglInit===void 0)return;let Y=U.source,ce=f.get(Y);if(ce){let _e=ce[A.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&y(U),Object.keys(ce).length===0&&f.delete(Y)}n.remove(U)}function y(U){let A=n.get(U);s.deleteTexture(A.__webglTexture);let Y=U.source,ce=f.get(Y);delete ce[A.__cacheKey],a.memory.textures--}function S(U){let A=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(A.__webglFramebuffer[ce]))for(let _e=0;_e<A.__webglFramebuffer[ce].length;_e++)s.deleteFramebuffer(A.__webglFramebuffer[ce][_e]);else s.deleteFramebuffer(A.__webglFramebuffer[ce]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ce])}else{if(Array.isArray(A.__webglFramebuffer))for(let ce=0;ce<A.__webglFramebuffer.length;ce++)s.deleteFramebuffer(A.__webglFramebuffer[ce]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ce=0;ce<A.__webglColorRenderbuffer.length;ce++)A.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ce]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let Y=U.textures;for(let ce=0,_e=Y.length;ce<_e;ce++){let fe=n.get(Y[ce]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(Y[ce])}n.remove(U)}let P=0;function B(){P=0}function G(){let U=P;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),P+=1,U}function X(U){let A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function re(U,A){let Y=n.get(U);if(U.isVideoTexture&&Ue(U),U.isRenderTargetTexture===!1&&U.version>0&&Y.__version!==U.version){let ce=U.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(Y,U,A);return}}t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+A)}function O(U,A){let Y=n.get(U);if(U.version>0&&Y.__version!==U.version){le(Y,U,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+A)}function Q(U,A){let Y=n.get(U);if(U.version>0&&Y.__version!==U.version){le(Y,U,A);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+A)}function H(U,A){let Y=n.get(U);if(U.version>0&&Y.__version!==U.version){be(Y,U,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+A)}let q={[en]:s.REPEAT,[Rn]:s.CLAMP_TO_EDGE,[$r]:s.MIRRORED_REPEAT},se={[$t]:s.NEAREST,[Th]:s.NEAREST_MIPMAP_NEAREST,[Zs]:s.NEAREST_MIPMAP_LINEAR,[Ht]:s.LINEAR,[qr]:s.LINEAR_MIPMAP_NEAREST,[Kn]:s.LINEAR_MIPMAP_LINEAR},te={[Wp]:s.NEVER,[Kp]:s.ALWAYS,[Xp]:s.LESS,[ud]:s.LEQUAL,[qp]:s.EQUAL,[Zp]:s.GEQUAL,[Yp]:s.GREATER,[jp]:s.NOTEQUAL};function Ie(U,A){if(A.type===vn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ht||A.magFilter===qr||A.magFilter===Zs||A.magFilter===Kn||A.minFilter===Ht||A.minFilter===qr||A.minFilter===Zs||A.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,q[A.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,q[A.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,q[A.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,se[A.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,se[A.minFilter]),A.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,te[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===$t||A.minFilter!==Zs&&A.minFilter!==Kn||A.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function je(U,A){let Y=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",C));let ce=A.source,_e=f.get(ce);_e===void 0&&(_e={},f.set(ce,_e));let fe=X(A);if(fe!==U.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),_e[fe].usedTimes++;let Ye=_e[U.__cacheKey];Ye!==void 0&&(_e[U.__cacheKey].usedTimes--,Ye.usedTimes===0&&y(A)),U.__cacheKey=fe,U.__webglTexture=_e[fe].texture}return Y}function le(U,A,Y){let ce=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ce=s.TEXTURE_3D);let _e=je(U,A),fe=A.source;t.bindTexture(ce,U.__webglTexture,s.TEXTURE0+Y);let Ye=n.get(fe);if(fe.version!==Ye.__version||_e===!0){t.activeTexture(s.TEXTURE0+Y);let W=ct.getPrimaries(ct.workingColorSpace),K=A.colorSpace===si?null:ct.getPrimaries(A.colorSpace),ve=A.colorSpace===si||W===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let J=x(A.image,!1,i.maxTextureSize);J=Je(A,J);let he=r.convert(A.format,A.colorSpace),ye=r.convert(A.type),Z=M(A.internalFormat,he,ye,A.colorSpace,A.isVideoTexture);Ie(ce,A);let ae,ge=A.mipmaps,me=A.isVideoTexture!==!0,Se=Ye.__version===void 0||_e===!0,k=fe.dataReady,V=N(A,J);if(A.isDepthTexture)Z=_(A.format===Xi,A.type),Se&&(me?t.texStorage2D(s.TEXTURE_2D,1,Z,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,Z,J.width,J.height,0,he,ye,null));else if(A.isDataTexture)if(ge.length>0){me&&Se&&t.texStorage2D(s.TEXTURE_2D,V,Z,ge[0].width,ge[0].height);for(let ee=0,pe=ge.length;ee<pe;ee++)ae=ge[ee],me?k&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ae.width,ae.height,he,ye,ae.data):t.texImage2D(s.TEXTURE_2D,ee,Z,ae.width,ae.height,0,he,ye,ae.data);A.generateMipmaps=!1}else me?(Se&&t.texStorage2D(s.TEXTURE_2D,V,Z,J.width,J.height),k&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,he,ye,J.data)):t.texImage2D(s.TEXTURE_2D,0,Z,J.width,J.height,0,he,ye,J.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){me&&Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,V,Z,ge[0].width,ge[0].height,J.depth);for(let ee=0,pe=ge.length;ee<pe;ee++)if(ae=ge[ee],A.format!==pn)if(he!==null)if(me){if(k)if(A.layerUpdates.size>0){let Ce=Tf(ae.width,ae.height,A.format,A.type);for(let Me of A.layerUpdates){let $e=ae.data.subarray(Me*Ce/ae.data.BYTES_PER_ELEMENT,(Me+1)*Ce/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,Me,ae.width,ae.height,1,he,$e)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,ae.width,ae.height,J.depth,he,ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Z,ae.width,ae.height,J.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?k&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,ae.width,ae.height,J.depth,he,ye,ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Z,ae.width,ae.height,J.depth,0,he,ye,ae.data)}else{me&&Se&&t.texStorage2D(s.TEXTURE_2D,V,Z,ge[0].width,ge[0].height);for(let ee=0,pe=ge.length;ee<pe;ee++)ae=ge[ee],A.format!==pn?he!==null?me?k&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,ae.width,ae.height,he,ae.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Z,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?k&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ae.width,ae.height,he,ye,ae.data):t.texImage2D(s.TEXTURE_2D,ee,Z,ae.width,ae.height,0,he,ye,ae.data)}else if(A.isDataArrayTexture)if(me){if(Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,V,Z,J.width,J.height,J.depth),k)if(A.layerUpdates.size>0){let ee=Tf(J.width,J.height,A.format,A.type);for(let pe of A.layerUpdates){let Ce=J.data.subarray(pe*ee/J.data.BYTES_PER_ELEMENT,(pe+1)*ee/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,J.width,J.height,1,he,ye,Ce)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,he,ye,J.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Z,J.width,J.height,J.depth,0,he,ye,J.data);else if(A.isData3DTexture)me?(Se&&t.texStorage3D(s.TEXTURE_3D,V,Z,J.width,J.height,J.depth),k&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,he,ye,J.data)):t.texImage3D(s.TEXTURE_3D,0,Z,J.width,J.height,J.depth,0,he,ye,J.data);else if(A.isFramebufferTexture){if(Se)if(me)t.texStorage2D(s.TEXTURE_2D,V,Z,J.width,J.height);else{let ee=J.width,pe=J.height;for(let Ce=0;Ce<V;Ce++)t.texImage2D(s.TEXTURE_2D,Ce,Z,ee,pe,0,he,ye,null),ee>>=1,pe>>=1}}else if(ge.length>0){if(me&&Se){let ee=Be(ge[0]);t.texStorage2D(s.TEXTURE_2D,V,Z,ee.width,ee.height)}for(let ee=0,pe=ge.length;ee<pe;ee++)ae=ge[ee],me?k&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,he,ye,ae):t.texImage2D(s.TEXTURE_2D,ee,Z,he,ye,ae);A.generateMipmaps=!1}else if(me){if(Se){let ee=Be(J);t.texStorage2D(s.TEXTURE_2D,V,Z,ee.width,ee.height)}k&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he,ye,J)}else t.texImage2D(s.TEXTURE_2D,0,Z,he,ye,J);g(A)&&m(ce),Ye.__version=fe.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function be(U,A,Y){if(A.image.length!==6)return;let ce=je(U,A),_e=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+Y);let fe=n.get(_e);if(_e.version!==fe.__version||ce===!0){t.activeTexture(s.TEXTURE0+Y);let Ye=ct.getPrimaries(ct.workingColorSpace),W=A.colorSpace===si?null:ct.getPrimaries(A.colorSpace),K=A.colorSpace===si||Ye===W?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ve=A.isCompressedTexture||A.image[0].isCompressedTexture,J=A.image[0]&&A.image[0].isDataTexture,he=[];for(let pe=0;pe<6;pe++)!ve&&!J?he[pe]=x(A.image[pe],!0,i.maxCubemapSize):he[pe]=J?A.image[pe].image:A.image[pe],he[pe]=Je(A,he[pe]);let ye=he[0],Z=r.convert(A.format,A.colorSpace),ae=r.convert(A.type),ge=M(A.internalFormat,Z,ae,A.colorSpace),me=A.isVideoTexture!==!0,Se=fe.__version===void 0||ce===!0,k=_e.dataReady,V=N(A,ye);Ie(s.TEXTURE_CUBE_MAP,A);let ee;if(ve){me&&Se&&t.texStorage2D(s.TEXTURE_CUBE_MAP,V,ge,ye.width,ye.height);for(let pe=0;pe<6;pe++){ee=he[pe].mipmaps;for(let Ce=0;Ce<ee.length;Ce++){let Me=ee[Ce];A.format!==pn?Z!==null?me?k&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,Me.width,Me.height,Z,Me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,ge,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?k&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,Me.width,Me.height,Z,ae,Me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,ge,Me.width,Me.height,0,Z,ae,Me.data)}}}else{if(ee=A.mipmaps,me&&Se){ee.length>0&&V++;let pe=Be(he[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,V,ge,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(J){me?k&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,he[pe].width,he[pe].height,Z,ae,he[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ge,he[pe].width,he[pe].height,0,Z,ae,he[pe].data);for(let Ce=0;Ce<ee.length;Ce++){let $e=ee[Ce].image[pe].image;me?k&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,$e.width,$e.height,Z,ae,$e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,ge,$e.width,$e.height,0,Z,ae,$e.data)}}else{me?k&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Z,ae,he[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ge,Z,ae,he[pe]);for(let Ce=0;Ce<ee.length;Ce++){let Me=ee[Ce];me?k&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,Z,ae,Me.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,ge,Z,ae,Me.image[pe])}}}g(A)&&m(s.TEXTURE_CUBE_MAP),fe.__version=_e.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function Te(U,A,Y,ce,_e,fe){let Ye=r.convert(Y.format,Y.colorSpace),W=r.convert(Y.type),K=M(Y.internalFormat,Ye,W,Y.colorSpace),ve=n.get(A),J=n.get(Y);if(J.__renderTarget=A,!ve.__hasExternalTextures){let he=Math.max(1,A.width>>fe),ye=Math.max(1,A.height>>fe);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,fe,K,he,ye,A.depth,0,Ye,W,null):t.texImage2D(_e,fe,K,he,ye,0,Ye,W,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),We(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,_e,J.__webglTexture,0,Ee(A)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,_e,J.__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(U,A,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,U),A.depthBuffer){let ce=A.depthTexture,_e=ce&&ce.isDepthTexture?ce.type:null,fe=_(A.stencilBuffer,_e),Ye=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=Ee(A);We(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,W,fe,A.width,A.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,W,fe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,fe,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ye,s.RENDERBUFFER,U)}else{let ce=A.textures;for(let _e=0;_e<ce.length;_e++){let fe=ce[_e],Ye=r.convert(fe.format,fe.colorSpace),W=r.convert(fe.type),K=M(fe.internalFormat,Ye,W,fe.colorSpace),ve=Ee(A);Y&&We(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,K,A.width,A.height):We(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,K,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,K,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Fe(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ce=n.get(A.depthTexture);ce.__renderTarget=A,(!ce.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),re(A.depthTexture,0);let _e=ce.__webglTexture,fe=Ee(A);if(A.depthTexture.format===$s)We(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(A.depthTexture.format===Xi)We(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function qe(U){let A=n.get(U),Y=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){let ce=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ce){let _e=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ce.removeEventListener("dispose",_e)};ce.addEventListener("dispose",_e),A.__depthDisposeCallback=_e}A.__boundDepthTexture=ce}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Fe(A.__webglFramebuffer,U)}else if(Y){A.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ce]),A.__webglDepthbuffer[ce]===void 0)A.__webglDepthbuffer[ce]=s.createRenderbuffer(),xe(A.__webglDepthbuffer[ce],U,!1);else{let _e=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer[ce];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),xe(A.__webglDepthbuffer,U,!1);else{let ce=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,_e)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(U,A,Y){let ce=n.get(U);A!==void 0&&Te(ce.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&qe(U)}function tt(U){let A=U.texture,Y=n.get(U),ce=n.get(A);U.addEventListener("dispose",R);let _e=U.textures,fe=U.isWebGLCubeRenderTarget===!0,Ye=_e.length>1;if(Ye||(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=A.version,a.memory.textures++),fe){Y.__webglFramebuffer=[];for(let W=0;W<6;W++)if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer[W]=[];for(let K=0;K<A.mipmaps.length;K++)Y.__webglFramebuffer[W][K]=s.createFramebuffer()}else Y.__webglFramebuffer[W]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let W=0;W<A.mipmaps.length;W++)Y.__webglFramebuffer[W]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(Ye)for(let W=0,K=_e.length;W<K;W++){let ve=n.get(_e[W]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),a.memory.textures++)}if(U.samples>0&&We(U)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let W=0;W<_e.length;W++){let K=_e[W];Y.__webglColorRenderbuffer[W]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[W]);let ve=r.convert(K.format,K.colorSpace),J=r.convert(K.type),he=M(K.internalFormat,ve,J,K.colorSpace,U.isXRRenderTarget===!0),ye=Ee(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,he,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+W,s.RENDERBUFFER,Y.__webglColorRenderbuffer[W])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(Y.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),Ie(s.TEXTURE_CUBE_MAP,A);for(let W=0;W<6;W++)if(A.mipmaps&&A.mipmaps.length>0)for(let K=0;K<A.mipmaps.length;K++)Te(Y.__webglFramebuffer[W][K],U,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+W,K);else Te(Y.__webglFramebuffer[W],U,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);g(A)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let W=0,K=_e.length;W<K;W++){let ve=_e[W],J=n.get(ve);t.bindTexture(s.TEXTURE_2D,J.__webglTexture),Ie(s.TEXTURE_2D,ve),Te(Y.__webglFramebuffer,U,ve,s.COLOR_ATTACHMENT0+W,s.TEXTURE_2D,0),g(ve)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let W=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(W=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(W,ce.__webglTexture),Ie(W,A),A.mipmaps&&A.mipmaps.length>0)for(let K=0;K<A.mipmaps.length;K++)Te(Y.__webglFramebuffer[K],U,A,s.COLOR_ATTACHMENT0,W,K);else Te(Y.__webglFramebuffer,U,A,s.COLOR_ATTACHMENT0,W,0);g(A)&&m(W),t.unbindTexture()}U.depthBuffer&&qe(U)}function ue(U){let A=U.textures;for(let Y=0,ce=A.length;Y<ce;Y++){let _e=A[Y];if(g(_e)){let fe=E(U),Ye=n.get(_e).__webglTexture;t.bindTexture(fe,Ye),m(fe),t.unbindTexture()}}}let Ae=[],F=[];function Ve(U){if(U.samples>0){if(We(U)===!1){let A=U.textures,Y=U.width,ce=U.height,_e=s.COLOR_BUFFER_BIT,fe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ye=n.get(U),W=A.length>1;if(W)for(let K=0;K<A.length;K++)t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let K=0;K<A.length;K++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),W){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[K]);let ve=n.get(A[K]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ve,0)}s.blitFramebuffer(0,0,Y,ce,0,0,Y,ce,_e,s.NEAREST),l===!0&&(Ae.length=0,F.length=0,Ae.push(s.COLOR_ATTACHMENT0+K),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ae.push(fe),F.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),W)for(let K=0;K<A.length;K++){t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[K]);let ve=n.get(A[K]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.TEXTURE_2D,ve,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){let A=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Ee(U){return Math.min(i.maxSamples,U.samples)}function We(U){let A=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ue(U){let A=a.render.frame;h.get(U)!==A&&(h.set(U,A),U.update())}function Je(U,A){let Y=U.colorSpace,ce=U.format,_e=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Y!==sn&&Y!==si&&(ct.getTransfer(Y)===St?(ce!==pn||_e!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),A}function Be(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.setTexture2D=re,this.setTexture2DArray=O,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=Ze,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=We}function rb(s,e){function t(n,i=si){let r,a=ct.getTransfer(i);if(n===Jn)return s.UNSIGNED_BYTE;if(n===Rh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ch)return s.UNSIGNED_SHORT_5_5_5_1;if(n===id)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===td)return s.BYTE;if(n===nd)return s.SHORT;if(n===ea)return s.UNSIGNED_SHORT;if(n===Ah)return s.INT;if(n===_s)return s.UNSIGNED_INT;if(n===vn)return s.FLOAT;if(n===qt)return s.HALF_FLOAT;if(n===sd)return s.ALPHA;if(n===rd)return s.RGB;if(n===pn)return s.RGBA;if(n===ad)return s.LUMINANCE;if(n===od)return s.LUMINANCE_ALPHA;if(n===$s)return s.DEPTH_COMPONENT;if(n===Xi)return s.DEPTH_STENCIL;if(n===fa)return s.RED;if(n===Ph)return s.RED_INTEGER;if(n===ld)return s.RG;if(n===Ih)return s.RG_INTEGER;if(n===Dh)return s.RGBA_INTEGER;if(n===ho||n===uo||n===fo||n===po)if(a===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hc||n===uc||n===fc||n===dc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pc||n===mc||n===gc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pc||n===mc)return a===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vc||n===xc||n===bc||n===_c||n===yc||n===Mc||n===Sc||n===Ec||n===wc||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_c)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ec)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ac)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===Ic||n===Dc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===mo)return a===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cd||n===Lc||n===Uc||n===Nc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Zc=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},it=class extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ab={type:"move"},Zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ab)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new it;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ob=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lb=`
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

}`,Kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new jt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yt({vertexShader:ob,fragmentShader:lb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new gt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jc=class extends qi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,v=null,x=new Kc,g=t.getContextAttributes(),m=null,E=null,M=[],_=[],N=new we,C=null,R=new Xt;R.viewport=new mt;let T=new Xt;T.viewport=new mt;let y=[R,T],S=new Zc,P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let be=M[le];return be===void 0&&(be=new Zr,M[le]=be),be.getTargetRaySpace()},this.getControllerGrip=function(le){let be=M[le];return be===void 0&&(be=new Zr,M[le]=be),be.getGripSpace()},this.getHand=function(le){let be=M[le];return be===void 0&&(be=new Zr,M[le]=be),be.getHandSpace()};function G(le){let be=_.indexOf(le.inputSource);if(be===-1)return;let Te=M[be];Te!==void 0&&(Te.update(le.inputSource,le.frame,c||a),Te.dispatchEvent({type:le.type,data:le.inputSource}))}function X(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",re);for(let le=0;le<M.length;le++){let be=_[le];be!==null&&(_[le]=null,M[le].disconnect(be))}P=null,B=null,x.reset(),e.setRenderTarget(m),p=null,f=null,u=null,i=null,E=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){o=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(le){if(i=le,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",X),i.addEventListener("inputsourceschange",re),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(N),i.renderState.layers===void 0){let be={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,be),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Vt(p.framebufferWidth,p.framebufferHeight,{format:pn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let be=null,Te=null,xe=null;g.depth&&(xe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=g.stencil?Xi:$s,Te=g.stencil?Wi:_s);let Fe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Fe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Vt(f.textureWidth,f.textureHeight,{format:pn,type:Jn,depthTexture:new Zi(f.textureWidth,f.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),je.setContext(i),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function re(le){for(let be=0;be<le.removed.length;be++){let Te=le.removed[be],xe=_.indexOf(Te);xe>=0&&(_[xe]=null,M[xe].disconnect(Te))}for(let be=0;be<le.added.length;be++){let Te=le.added[be],xe=_.indexOf(Te);if(xe===-1){for(let qe=0;qe<M.length;qe++)if(qe>=_.length){_.push(Te),xe=qe;break}else if(_[qe]===null){_[qe]=Te,xe=qe;break}if(xe===-1)break}let Fe=M[xe];Fe&&Fe.connect(Te)}}let O=new I,Q=new I;function H(le,be,Te){O.setFromMatrixPosition(be.matrixWorld),Q.setFromMatrixPosition(Te.matrixWorld);let xe=O.distanceTo(Q),Fe=be.projectionMatrix.elements,qe=Te.projectionMatrix.elements,Ze=Fe[14]/(Fe[10]-1),tt=Fe[14]/(Fe[10]+1),ue=(Fe[9]+1)/Fe[5],Ae=(Fe[9]-1)/Fe[5],F=(Fe[8]-1)/Fe[0],Ve=(qe[8]+1)/qe[0],Ee=Ze*F,We=Ze*Ve,Ue=xe/(-F+Ve),Je=Ue*-F;if(be.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Je),le.translateZ(Ue),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Fe[10]===-1)le.projectionMatrix.copy(be.projectionMatrix),le.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{let Be=Ze+Ue,U=tt+Ue,A=Ee-Je,Y=We+(xe-Je),ce=ue*tt/U*Be,_e=Ae*tt/U*Be;le.projectionMatrix.makePerspective(A,Y,ce,_e,Be,U),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function q(le,be){be===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(be.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(i===null)return;let be=le.near,Te=le.far;x.texture!==null&&(x.depthNear>0&&(be=x.depthNear),x.depthFar>0&&(Te=x.depthFar)),S.near=T.near=R.near=be,S.far=T.far=R.far=Te,(P!==S.near||B!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,B=S.far),R.layers.mask=le.layers.mask|2,T.layers.mask=le.layers.mask|4,S.layers.mask=R.layers.mask|T.layers.mask;let xe=le.parent,Fe=S.cameras;q(S,xe);for(let qe=0;qe<Fe.length;qe++)q(Fe[qe],xe);Fe.length===2?H(S,R,T):S.projectionMatrix.copy(R.projectionMatrix),se(le,S,xe)};function se(le,be,Te){Te===null?le.matrix.copy(be.matrixWorld):(le.matrix.copy(Te.matrixWorld),le.matrix.invert(),le.matrix.multiply(be.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(be.projectionMatrix),le.projectionMatrixInverse.copy(be.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=or*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(le){l=le,f!==null&&(f.fixedFoveation=le),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=le)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let te=null;function Ie(le,be){if(h=be.getViewerPose(c||a),v=be,h!==null){let Te=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let xe=!1;Te.length!==S.cameras.length&&(S.cameras.length=0,xe=!0);for(let qe=0;qe<Te.length;qe++){let Ze=Te[qe],tt=null;if(p!==null)tt=p.getViewport(Ze);else{let Ae=u.getViewSubImage(f,Ze);tt=Ae.viewport,qe===0&&(e.setRenderTargetTextures(E,Ae.colorTexture,f.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(E))}let ue=y[qe];ue===void 0&&(ue=new Xt,ue.layers.enable(qe),ue.viewport=new mt,y[qe]=ue),ue.matrix.fromArray(Ze.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Ze.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(tt.x,tt.y,tt.width,tt.height),qe===0&&(S.matrix.copy(ue.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),xe===!0&&S.cameras.push(ue)}let Fe=i.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){let qe=u.getDepthInformation(Te[0]);qe&&qe.isValid&&qe.texture&&x.init(e,qe,i.renderState)}}for(let Te=0;Te<M.length;Te++){let xe=_[Te],Fe=M[Te];xe!==null&&Fe!==void 0&&Fe.update(xe,be,c||a)}te&&te(le,be),be.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:be}),v=null}let je=new md;je.setAnimationLoop(Ie),this.setAnimationLoop=function(le){te=le},this.dispose=function(){}}},vs=new Nn,cb=new Ke;function hb(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,pd(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,E,M,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),v(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,E,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Gt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Gt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let E=e.get(m),M=E.envMap,_=E.envMapRotation;M&&(g.envMap.value=M,vs.copy(_),vs.x*=-1,vs.y*=-1,vs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),g.envMapRotation.value.setFromMatrix4(cb.makeRotationFromEuler(vs)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,E,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*E,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,E){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Gt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let E=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ub(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){let _=M.program;n.uniformBlockBinding(E,_)}function c(E,M){let _=i[E.id];_===void 0&&(v(E),_=h(E),i[E.id]=_,E.addEventListener("dispose",g));let N=M.program;n.updateUBOMapping(E,N);let C=e.render.frame;r[E.id]!==C&&(f(E),r[E.id]=C)}function h(E){let M=u();E.__bindingPointIndex=M;let _=s.createBuffer(),N=E.__size,C=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,N,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,_),_}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let M=i[E.id],_=E.uniforms,N=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let C=0,R=_.length;C<R;C++){let T=Array.isArray(_[C])?_[C]:[_[C]];for(let y=0,S=T.length;y<S;y++){let P=T[y];if(p(P,C,y,N)===!0){let B=P.__offset,G=Array.isArray(P.value)?P.value:[P.value],X=0;for(let re=0;re<G.length;re++){let O=G[re],Q=x(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,B+X,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):(O.toArray(P.__data,X),X+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(E,M,_,N){let C=E.value,R=M+"_"+_;if(N[R]===void 0)return typeof C=="number"||typeof C=="boolean"?N[R]=C:N[R]=C.clone(),!0;{let T=N[R];if(typeof C=="number"||typeof C=="boolean"){if(T!==C)return N[R]=C,!0}else if(T.equals(C)===!1)return T.copy(C),!0}return!1}function v(E){let M=E.uniforms,_=0,N=16;for(let R=0,T=M.length;R<T;R++){let y=Array.isArray(M[R])?M[R]:[M[R]];for(let S=0,P=y.length;S<P;S++){let B=y[S],G=Array.isArray(B.value)?B.value:[B.value];for(let X=0,re=G.length;X<re;X++){let O=G[X],Q=x(O),H=_%N,q=H%Q.boundary,se=H+q;_+=q,se!==0&&N-se<Q.storage&&(_+=N-se),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=Q.storage}}}let C=_%N;return C>0&&(_+=N-C),E.__size=_,E.__cache={},this}function x(E){let M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function g(E){let M=E.target;M.removeEventListener("dispose",g);let _=a.indexOf(M.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function m(){for(let E in i)s.deleteBuffer(i[E]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}var Eo=class{constructor(e={}){let{canvas:t=dm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let v=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,E=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this.toneMapping=Vi,this.toneMappingExposure=1;let _=this,N=!1,C=0,R=0,T=null,y=-1,S=null,P=new mt,B=new mt,G=null,X=new Ne(0),re=0,O=t.width,Q=t.height,H=1,q=null,se=null,te=new mt(0,0,O,Q),Ie=new mt(0,0,O,Q),je=!1,le=new na,be=!1,Te=!1,xe=new Ke,Fe=new Ke,qe=new I,Ze=new mt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function Ae(){return T===null?H:1}let F=n;function Ve(d,b){return t.getContext(d,b)}try{let d={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xh}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Me,!1),F===null){let b="webgl2";if(F=Ve(b,d),F===null)throw Ve(b)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(d){throw console.error("THREE.WebGLRenderer: "+d.message),d}let Ee,We,Ue,Je,Be,U,A,Y,ce,_e,fe,Ye,W,K,ve,J,he,ye,Z,ae,ge,me,Se,k;function V(){Ee=new Av(F),Ee.init(),me=new rb(F,Ee),We=new yv(F,Ee,e,me),Ue=new nb(F,Ee),We.reverseDepthBuffer&&f&&Ue.buffers.depth.setReversed(!0),Je=new Pv(F),Be=new Vx,U=new sb(F,Ee,Ue,Be,We,me,Je),A=new Sv(_),Y=new Tv(_),ce=new Fm(F),Se=new bv(F,ce),_e=new Rv(F,ce,Je,Se),fe=new Dv(F,_e,ce,Je),Z=new Iv(F,We,U),J=new Mv(Be),Ye=new Gx(_,A,Y,Ee,We,Se,J),W=new hb(_,Be),K=new Xx,ve=new Jx(Ee),ye=new xv(_,A,Y,Ue,fe,p,l),he=new eb(_,fe,We),k=new ub(F,Je,We,Ue),ae=new _v(F,Ee,Je),ge=new Cv(F,Ee,Je),Je.programs=Ye.programs,_.capabilities=We,_.extensions=Ee,_.properties=Be,_.renderLists=K,_.shadowMap=he,_.state=Ue,_.info=Je}V();let ee=new Jc(_,F);this.xr=ee,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let d=Ee.get("WEBGL_lose_context");d&&d.loseContext()},this.forceContextRestore=function(){let d=Ee.get("WEBGL_lose_context");d&&d.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(d){d!==void 0&&(H=d,this.setSize(O,Q,!1))},this.getSize=function(d){return d.set(O,Q)},this.setSize=function(d,b,w=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=d,Q=b,t.width=Math.floor(d*H),t.height=Math.floor(b*H),w===!0&&(t.style.width=d+"px",t.style.height=b+"px"),this.setViewport(0,0,d,b)},this.getDrawingBufferSize=function(d){return d.set(O*H,Q*H).floor()},this.setDrawingBufferSize=function(d,b,w){O=d,Q=b,H=w,t.width=Math.floor(d*w),t.height=Math.floor(b*w),this.setViewport(0,0,d,b)},this.getCurrentViewport=function(d){return d.copy(P)},this.getViewport=function(d){return d.copy(te)},this.setViewport=function(d,b,w,D){d.isVector4?te.set(d.x,d.y,d.z,d.w):te.set(d,b,w,D),Ue.viewport(P.copy(te).multiplyScalar(H).round())},this.getScissor=function(d){return d.copy(Ie)},this.setScissor=function(d,b,w,D){d.isVector4?Ie.set(d.x,d.y,d.z,d.w):Ie.set(d,b,w,D),Ue.scissor(B.copy(Ie).multiplyScalar(H).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(d){Ue.setScissorTest(je=d)},this.setOpaqueSort=function(d){q=d},this.setTransparentSort=function(d){se=d},this.getClearColor=function(d){return d.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(d=!0,b=!0,w=!0){let D=0;if(d){let L=!1;if(T!==null){let z=T.texture.format;L=z===Dh||z===Ih||z===Ph}if(L){let z=T.texture.type,j=z===Jn||z===_s||z===ea||z===Wi||z===Rh||z===Ch,oe=ye.getClearColor(),$=ye.getClearAlpha(),ne=oe.r,ie=oe.g,de=oe.b;j?(v[0]=ne,v[1]=ie,v[2]=de,v[3]=$,F.clearBufferuiv(F.COLOR,0,v)):(x[0]=ne,x[1]=ie,x[2]=de,x[3]=$,F.clearBufferiv(F.COLOR,0,x))}else D|=F.COLOR_BUFFER_BIT}b&&(D|=F.DEPTH_BUFFER_BIT),w&&(D|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),K.dispose(),ve.dispose(),Be.dispose(),A.dispose(),Y.dispose(),fe.dispose(),Se.dispose(),k.dispose(),Ye.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Ta),ee.removeEventListener("sessionend",Aa),ui.stop()};function pe(d){d.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let d=Je.autoReset,b=he.enabled,w=he.autoUpdate,D=he.needsUpdate,L=he.type;V(),Je.autoReset=d,he.enabled=b,he.autoUpdate=w,he.needsUpdate=D,he.type=L}function Me(d){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",d.statusMessage)}function $e(d){let b=d.target;b.removeEventListener("dispose",$e),vt(b)}function vt(d){kt(d),Be.remove(d)}function kt(d){let b=Be.get(d).programs;b!==void 0&&(b.forEach(function(w){Ye.releaseProgram(w)}),d.isShaderMaterial&&Ye.releaseShaderCache(d))}this.renderBufferDirect=function(d,b,w,D,L,z){b===null&&(b=tt);let j=L.isMesh&&L.matrixWorld.determinant()<0,oe=gl(d,b,w,D,L);Ue.setMaterial(D,j);let $=w.index,ne=1;if(D.wireframe===!0){if($=_e.getWireframeAttribute(w),$===void 0)return;ne=2}let ie=w.drawRange,de=w.attributes.position,Pe=ie.start*ne,De=(ie.start+ie.count)*ne;z!==null&&(Pe=Math.max(Pe,z.start*ne),De=Math.min(De,(z.start+z.count)*ne)),$!==null?(Pe=Math.max(Pe,0),De=Math.min(De,$.count)):de!=null&&(Pe=Math.max(Pe,0),De=Math.min(De,de.count));let ze=De-Pe;if(ze<0||ze===1/0)return;Se.setup(L,D,oe,w,$);let Oe,Le=ae;if($!==null&&(Oe=ce.get($),Le=ge,Le.setIndex(Oe)),L.isMesh)D.wireframe===!0?(Ue.setLineWidth(D.wireframeLinewidth*Ae()),Le.setMode(F.LINES)):Le.setMode(F.TRIANGLES);else if(L.isLine){let Re=D.linewidth;Re===void 0&&(Re=1),Ue.setLineWidth(Re*Ae()),L.isLineSegments?Le.setMode(F.LINES):L.isLineLoop?Le.setMode(F.LINE_LOOP):Le.setMode(F.LINE_STRIP)}else L.isPoints?Le.setMode(F.POINTS):L.isSprite&&Le.setMode(F.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Le.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Le.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let Re=L._multiDrawStarts,ot=L._multiDrawCounts,Qe=L._multiDrawCount,Dt=$?ce.get($).bytesPerElement:1,bt=Be.get(D).currentProgram.getUniforms();for(let nt=0;nt<Qe;nt++)bt.setValue(F,"_gl_DrawID",nt),Le.render(Re[nt]/Dt,ot[nt])}else if(L.isInstancedMesh)Le.renderInstances(Pe,ze,L.count);else if(w.isInstancedBufferGeometry){let Re=w._maxInstanceCount!==void 0?w._maxInstanceCount:1/0,ot=Math.min(w.instanceCount,Re);Le.renderInstances(Pe,ze,ot)}else Le.render(Pe,ze)};function _t(d,b,w){d.transparent===!0&&d.side===Ot&&d.forceSinglePass===!1?(d.side=Gt,d.needsUpdate=!0,Cs(d,b,w),d.side=Un,d.needsUpdate=!0,Cs(d,b,w),d.side=Ot):Cs(d,b,w)}this.compile=function(d,b,w=null){w===null&&(w=d),m=ve.get(w),m.init(b),M.push(m),w.traverseVisible(function(L){L.isLight&&L.layers.test(b.layers)&&(m.pushLight(L),L.castShadow&&m.pushShadow(L))}),d!==w&&d.traverseVisible(function(L){L.isLight&&L.layers.test(b.layers)&&(m.pushLight(L),L.castShadow&&m.pushShadow(L))}),m.setupLights();let D=new Set;return d.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let z=L.material;if(z)if(Array.isArray(z))for(let j=0;j<z.length;j++){let oe=z[j];_t(oe,w,L),D.add(oe)}else _t(z,w,L),D.add(z)}),M.pop(),m=null,D},this.compileAsync=function(d,b,w=null){let D=this.compile(d,b,w);return new Promise(L=>{function z(){if(D.forEach(function(j){Be.get(j).currentProgram.isReady()&&D.delete(j)}),D.size===0){L(d);return}setTimeout(z,10)}Ee.get("KHR_parallel_shader_compile")!==null?z():setTimeout(z,10)})};let En=null;function Wn(d){En&&En(d)}function Ta(){ui.stop()}function Aa(){ui.start()}let ui=new md;ui.setAnimationLoop(Wn),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(d){En=d,ee.setAnimationLoop(d),d===null?ui.stop():ui.start()},ee.addEventListener("sessionstart",Ta),ee.addEventListener("sessionend",Aa),this.render=function(d,b){if(b!==void 0&&b.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(b),b=ee.getCamera()),d.isScene===!0&&d.onBeforeRender(_,d,b,T),m=ve.get(d,M.length),m.init(b),M.push(m),Fe.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),le.setFromProjectionMatrix(Fe),Te=this.localClippingEnabled,be=J.init(this.clippingPlanes,Te),g=K.get(d,E.length),g.init(),E.push(g),ee.enabled===!0&&ee.isPresenting===!0){let z=_.xr.getDepthSensingMesh();z!==null&&Cr(z,b,-1/0,_.sortObjects)}Cr(d,b,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(q,se),ue=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,ue&&ye.addToRenderList(g,d),this.info.render.frame++,be===!0&&J.beginShadows();let w=m.state.shadowsArray;he.render(w,d,b),be===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let D=g.opaque,L=g.transmissive;if(m.setupLights(),b.isArrayCamera){let z=b.cameras;if(L.length>0)for(let j=0,oe=z.length;j<oe;j++){let $=z[j];Ra(D,L,d,$)}ue&&ye.render(d);for(let j=0,oe=z.length;j<oe;j++){let $=z[j];Pr(g,d,$,$.viewport)}}else L.length>0&&Ra(D,L,d,b),ue&&ye.render(d),Pr(g,d,b);T!==null&&(U.updateMultisampleRenderTarget(T),U.updateRenderTargetMipmap(T)),d.isScene===!0&&d.onAfterRender(_,d,b),Se.resetDefaultState(),y=-1,S=null,M.pop(),M.length>0?(m=M[M.length-1],be===!0&&J.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function Cr(d,b,w,D){if(d.visible===!1)return;if(d.layers.test(b.layers)){if(d.isGroup)w=d.renderOrder;else if(d.isLOD)d.autoUpdate===!0&&d.update(b);else if(d.isLight)m.pushLight(d),d.castShadow&&m.pushShadow(d);else if(d.isSprite){if(!d.frustumCulled||le.intersectsSprite(d)){D&&Ze.setFromMatrixPosition(d.matrixWorld).applyMatrix4(Fe);let j=fe.update(d),oe=d.material;oe.visible&&g.push(d,j,oe,w,Ze.z,null)}}else if((d.isMesh||d.isLine||d.isPoints)&&(!d.frustumCulled||le.intersectsObject(d))){let j=fe.update(d),oe=d.material;if(D&&(d.boundingSphere!==void 0?(d.boundingSphere===null&&d.computeBoundingSphere(),Ze.copy(d.boundingSphere.center)):(j.boundingSphere===null&&j.computeBoundingSphere(),Ze.copy(j.boundingSphere.center)),Ze.applyMatrix4(d.matrixWorld).applyMatrix4(Fe)),Array.isArray(oe)){let $=j.groups;for(let ne=0,ie=$.length;ne<ie;ne++){let de=$[ne],Pe=oe[de.materialIndex];Pe&&Pe.visible&&g.push(d,j,Pe,w,Ze.z,de)}}else oe.visible&&g.push(d,j,oe,w,Ze.z,null)}}let z=d.children;for(let j=0,oe=z.length;j<oe;j++)Cr(z[j],b,w,D)}function Pr(d,b,w,D){let L=d.opaque,z=d.transmissive,j=d.transparent;m.setupLightsView(w),be===!0&&J.setGlobalState(_.clippingPlanes,w),D&&Ue.viewport(P.copy(D)),L.length>0&&Rs(L,b,w),z.length>0&&Rs(z,b,w),j.length>0&&Rs(j,b,w),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Ra(d,b,w,D){if((w.isScene===!0?w.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[D.id]===void 0&&(m.state.transmissionRenderTarget[D.id]=new Vt(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?qt:Jn,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));let z=m.state.transmissionRenderTarget[D.id],j=D.viewport||P;z.setSize(j.z,j.w);let oe=_.getRenderTarget();_.setRenderTarget(z),_.getClearColor(X),re=_.getClearAlpha(),re<1&&_.setClearColor(16777215,.5),_.clear(),ue&&ye.render(w);let $=_.toneMapping;_.toneMapping=Vi;let ne=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),m.setupLightsView(D),be===!0&&J.setGlobalState(_.clippingPlanes,D),Rs(d,w,D),U.updateMultisampleRenderTarget(z),U.updateRenderTargetMipmap(z),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let de=0,Pe=b.length;de<Pe;de++){let De=b[de],ze=De.object,Oe=De.geometry,Le=De.material,Re=De.group;if(Le.side===Ot&&ze.layers.test(D.layers)){let ot=Le.side;Le.side=Gt,Le.needsUpdate=!0,Ca(ze,w,D,Oe,Le,Re),Le.side=ot,Le.needsUpdate=!0,ie=!0}}ie===!0&&(U.updateMultisampleRenderTarget(z),U.updateRenderTargetMipmap(z))}_.setRenderTarget(oe),_.setClearColor(X,re),ne!==void 0&&(D.viewport=ne),_.toneMapping=$}function Rs(d,b,w){let D=b.isScene===!0?b.overrideMaterial:null;for(let L=0,z=d.length;L<z;L++){let j=d[L],oe=j.object,$=j.geometry,ne=D===null?j.material:D,ie=j.group;oe.layers.test(w.layers)&&Ca(oe,b,w,$,ne,ie)}}function Ca(d,b,w,D,L,z){d.onBeforeRender(_,b,w,D,L,z),d.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,d.matrixWorld),d.normalMatrix.getNormalMatrix(d.modelViewMatrix),L.onBeforeRender(_,b,w,D,d,z),L.transparent===!0&&L.side===Ot&&L.forceSinglePass===!1?(L.side=Gt,L.needsUpdate=!0,_.renderBufferDirect(w,b,D,L,d,z),L.side=Un,L.needsUpdate=!0,_.renderBufferDirect(w,b,D,L,d,z),L.side=Ot):_.renderBufferDirect(w,b,D,L,d,z),d.onAfterRender(_,b,w,D,L,z)}function Cs(d,b,w){b.isScene!==!0&&(b=tt);let D=Be.get(d),L=m.state.lights,z=m.state.shadowsArray,j=L.state.version,oe=Ye.getParameters(d,L.state,z,b,w),$=Ye.getProgramCacheKey(oe),ne=D.programs;D.environment=d.isMeshStandardMaterial?b.environment:null,D.fog=b.fog,D.envMap=(d.isMeshStandardMaterial?Y:A).get(d.envMap||D.environment),D.envMapRotation=D.environment!==null&&d.envMap===null?b.environmentRotation:d.envMapRotation,ne===void 0&&(d.addEventListener("dispose",$e),ne=new Map,D.programs=ne);let ie=ne.get($);if(ie!==void 0){if(D.currentProgram===ie&&D.lightsStateVersion===j)return Dr(d,oe),ie}else oe.uniforms=Ye.getUniforms(d),d.onBeforeCompile(oe,_),ie=Ye.acquireProgram(oe,$),ne.set($,ie),D.uniforms=oe.uniforms;let de=D.uniforms;return(!d.isShaderMaterial&&!d.isRawShaderMaterial||d.clipping===!0)&&(de.clippingPlanes=J.uniform),Dr(d,oe),D.needsLights=Ui(d),D.lightsStateVersion=j,D.needsLights&&(de.ambientLightColor.value=L.state.ambient,de.lightProbe.value=L.state.probe,de.directionalLights.value=L.state.directional,de.directionalLightShadows.value=L.state.directionalShadow,de.spotLights.value=L.state.spot,de.spotLightShadows.value=L.state.spotShadow,de.rectAreaLights.value=L.state.rectArea,de.ltc_1.value=L.state.rectAreaLTC1,de.ltc_2.value=L.state.rectAreaLTC2,de.pointLights.value=L.state.point,de.pointLightShadows.value=L.state.pointShadow,de.hemisphereLights.value=L.state.hemi,de.directionalShadowMap.value=L.state.directionalShadowMap,de.directionalShadowMatrix.value=L.state.directionalShadowMatrix,de.spotShadowMap.value=L.state.spotShadowMap,de.spotLightMatrix.value=L.state.spotLightMatrix,de.spotLightMap.value=L.state.spotLightMap,de.pointShadowMap.value=L.state.pointShadowMap,de.pointShadowMatrix.value=L.state.pointShadowMatrix),D.currentProgram=ie,D.uniformsList=null,ie}function Ir(d){if(d.uniformsList===null){let b=d.currentProgram.getUniforms();d.uniformsList=tr.seqWithValue(b.seq,d.uniforms)}return d.uniformsList}function Dr(d,b){let w=Be.get(d);w.outputColorSpace=b.outputColorSpace,w.batching=b.batching,w.batchingColor=b.batchingColor,w.instancing=b.instancing,w.instancingColor=b.instancingColor,w.instancingMorph=b.instancingMorph,w.skinning=b.skinning,w.morphTargets=b.morphTargets,w.morphNormals=b.morphNormals,w.morphColors=b.morphColors,w.morphTargetsCount=b.morphTargetsCount,w.numClippingPlanes=b.numClippingPlanes,w.numIntersection=b.numClipIntersection,w.vertexAlphas=b.vertexAlphas,w.vertexTangents=b.vertexTangents,w.toneMapping=b.toneMapping}function gl(d,b,w,D,L){b.isScene!==!0&&(b=tt),U.resetTextureUnits();let z=b.fog,j=D.isMeshStandardMaterial?b.environment:null,oe=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:sn,$=(D.isMeshStandardMaterial?Y:A).get(D.envMap||j),ne=D.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,ie=!!w.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),de=!!w.morphAttributes.position,Pe=!!w.morphAttributes.normal,De=!!w.morphAttributes.color,ze=Vi;D.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ze=_.toneMapping);let Oe=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,Le=Oe!==void 0?Oe.length:0,Re=Be.get(D),ot=m.state.lights;if(be===!0&&(Te===!0||d!==S)){let at=d===S&&D.id===y;J.setState(D,d,at)}let Qe=!1;D.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ot.state.version||Re.outputColorSpace!==oe||L.isBatchedMesh&&Re.batching===!1||!L.isBatchedMesh&&Re.batching===!0||L.isBatchedMesh&&Re.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Re.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Re.instancing===!1||!L.isInstancedMesh&&Re.instancing===!0||L.isSkinnedMesh&&Re.skinning===!1||!L.isSkinnedMesh&&Re.skinning===!0||L.isInstancedMesh&&Re.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Re.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Re.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Re.instancingMorph===!1&&L.morphTexture!==null||Re.envMap!==$||D.fog===!0&&Re.fog!==z||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==J.numPlanes||Re.numIntersection!==J.numIntersection)||Re.vertexAlphas!==ne||Re.vertexTangents!==ie||Re.morphTargets!==de||Re.morphNormals!==Pe||Re.morphColors!==De||Re.toneMapping!==ze||Re.morphTargetsCount!==Le)&&(Qe=!0):(Qe=!0,Re.__version=D.version);let Dt=Re.currentProgram;Qe===!0&&(Dt=Cs(D,b,L));let bt=!1,nt=!1,Lt=!1,lt=Dt.getUniforms(),Et=Re.uniforms;if(Ue.useProgram(Dt.program)&&(bt=!0,nt=!0,Lt=!0),D.id!==y&&(y=D.id,nt=!0),bt||S!==d){Ue.buffers.depth.getReversed()?(xe.copy(d.projectionMatrix),mm(xe),gm(xe),lt.setValue(F,"projectionMatrix",xe)):lt.setValue(F,"projectionMatrix",d.projectionMatrix),lt.setValue(F,"viewMatrix",d.matrixWorldInverse);let on=lt.map.cameraPosition;on!==void 0&&on.setValue(F,qe.setFromMatrixPosition(d.matrixWorld)),We.logarithmicDepthBuffer&&lt.setValue(F,"logDepthBufFC",2/(Math.log(d.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&lt.setValue(F,"isOrthographic",d.isOrthographicCamera===!0),S!==d&&(S=d,nt=!0,Lt=!0)}if(L.isSkinnedMesh){lt.setOptional(F,L,"bindMatrix"),lt.setOptional(F,L,"bindMatrixInverse");let at=L.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),lt.setValue(F,"boneTexture",at.boneTexture,U))}L.isBatchedMesh&&(lt.setOptional(F,L,"batchingTexture"),lt.setValue(F,"batchingTexture",L._matricesTexture,U),lt.setOptional(F,L,"batchingIdTexture"),lt.setValue(F,"batchingIdTexture",L._indirectTexture,U),lt.setOptional(F,L,"batchingColorTexture"),L._colorsTexture!==null&&lt.setValue(F,"batchingColorTexture",L._colorsTexture,U));let pt=w.morphAttributes;if((pt.position!==void 0||pt.normal!==void 0||pt.color!==void 0)&&Z.update(L,w,Dt),(nt||Re.receiveShadow!==L.receiveShadow)&&(Re.receiveShadow=L.receiveShadow,lt.setValue(F,"receiveShadow",L.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Et.envMap.value=$,Et.flipEnvMap.value=$.isCubeTexture&&$.isRenderTargetTexture===!1?-1:1),D.isMeshStandardMaterial&&D.envMap===null&&b.environment!==null&&(Et.envMapIntensity.value=b.environmentIntensity),nt&&(lt.setValue(F,"toneMappingExposure",_.toneMappingExposure),Re.needsLights&&fi(Et,Lt),z&&D.fog===!0&&W.refreshFogUniforms(Et,z),W.refreshMaterialUniforms(Et,D,H,Q,m.state.transmissionRenderTarget[d.id]),tr.upload(F,Ir(Re),Et,U)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(tr.upload(F,Ir(Re),Et,U),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&lt.setValue(F,"center",L.center),lt.setValue(F,"modelViewMatrix",L.modelViewMatrix),lt.setValue(F,"normalMatrix",L.normalMatrix),lt.setValue(F,"modelMatrix",L.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){let at=D.uniformsGroups;for(let on=0,yn=at.length;on<yn;on++){let wn=at[on];k.update(wn,Dt),k.bind(wn,Dt)}}return Dt}function fi(d,b){d.ambientLightColor.needsUpdate=b,d.lightProbe.needsUpdate=b,d.directionalLights.needsUpdate=b,d.directionalLightShadows.needsUpdate=b,d.pointLights.needsUpdate=b,d.pointLightShadows.needsUpdate=b,d.spotLights.needsUpdate=b,d.spotLightShadows.needsUpdate=b,d.rectAreaLights.needsUpdate=b,d.hemisphereLights.needsUpdate=b}function Ui(d){return d.isMeshLambertMaterial||d.isMeshToonMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isShadowMaterial||d.isShaderMaterial&&d.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(d,b,w){Be.get(d.texture).__webglTexture=b,Be.get(d.depthTexture).__webglTexture=w;let D=Be.get(d);D.__hasExternalTextures=!0,D.__autoAllocateDepthBuffer=w===void 0,D.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(d,b){let w=Be.get(d);w.__webglFramebuffer=b,w.__useDefaultFramebuffer=b===void 0},this.setRenderTarget=function(d,b=0,w=0){T=d,C=b,R=w;let D=!0,L=null,z=!1,j=!1;if(d){let $=Be.get(d);if($.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(F.FRAMEBUFFER,null),D=!1;else if($.__webglFramebuffer===void 0)U.setupRenderTarget(d);else if($.__hasExternalTextures)U.rebindTextures(d,Be.get(d.texture).__webglTexture,Be.get(d.depthTexture).__webglTexture);else if(d.depthBuffer){let de=d.depthTexture;if($.__boundDepthTexture!==de){if(de!==null&&Be.has(de)&&(d.width!==de.image.width||d.height!==de.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(d)}}let ne=d.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(j=!0);let ie=Be.get(d).__webglFramebuffer;d.isWebGLCubeRenderTarget?(Array.isArray(ie[b])?L=ie[b][w]:L=ie[b],z=!0):d.samples>0&&U.useMultisampledRTT(d)===!1?L=Be.get(d).__webglMultisampledFramebuffer:Array.isArray(ie)?L=ie[w]:L=ie,P.copy(d.viewport),B.copy(d.scissor),G=d.scissorTest}else P.copy(te).multiplyScalar(H).floor(),B.copy(Ie).multiplyScalar(H).floor(),G=je;if(Ue.bindFramebuffer(F.FRAMEBUFFER,L)&&D&&Ue.drawBuffers(d,L),Ue.viewport(P),Ue.scissor(B),Ue.setScissorTest(G),z){let $=Be.get(d.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+b,$.__webglTexture,w)}else if(j){let $=Be.get(d.texture),ne=b||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,$.__webglTexture,w||0,ne)}y=-1},this.readRenderTargetPixels=function(d,b,w,D,L,z,j){if(!(d&&d.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let oe=Be.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&j!==void 0&&(oe=oe[j]),oe){Ue.bindFramebuffer(F.FRAMEBUFFER,oe);try{let $=d.texture,ne=$.format,ie=$.type;if(!We.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}b>=0&&b<=d.width-D&&w>=0&&w<=d.height-L&&F.readPixels(b,w,D,L,me.convert(ne),me.convert(ie),z)}finally{let $=T!==null?Be.get(T).__webglFramebuffer:null;Ue.bindFramebuffer(F.FRAMEBUFFER,$)}}},this.readRenderTargetPixelsAsync=async function(d,b,w,D,L,z,j){if(!(d&&d.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let oe=Be.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&j!==void 0&&(oe=oe[j]),oe){let $=d.texture,ne=$.format,ie=$.type;if(!We.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(b>=0&&b<=d.width-D&&w>=0&&w<=d.height-L){Ue.bindFramebuffer(F.FRAMEBUFFER,oe);let de=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,de),F.bufferData(F.PIXEL_PACK_BUFFER,z.byteLength,F.STREAM_READ),F.readPixels(b,w,D,L,me.convert(ne),me.convert(ie),0);let Pe=T!==null?Be.get(T).__webglFramebuffer:null;Ue.bindFramebuffer(F.FRAMEBUFFER,Pe);let De=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await pm(F,De,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,de),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,z),F.deleteBuffer(de),F.deleteSync(De),z}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(d,b=null,w=0){d.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),b=arguments[0]||null,d=arguments[1]);let D=Math.pow(2,-w),L=Math.floor(d.image.width*D),z=Math.floor(d.image.height*D),j=b!==null?b.x:0,oe=b!==null?b.y:0;U.setTexture2D(d,0),F.copyTexSubImage2D(F.TEXTURE_2D,w,0,0,j,oe,L,z),Ue.unbindTexture()},this.copyTextureToTexture=function(d,b,w=null,D=null,L=0){d.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),D=arguments[0]||null,d=arguments[1],b=arguments[2],L=arguments[3]||0,w=null);let z,j,oe,$,ne,ie,de,Pe,De,ze=d.isCompressedTexture?d.mipmaps[L]:d.image;w!==null?(z=w.max.x-w.min.x,j=w.max.y-w.min.y,oe=w.isBox3?w.max.z-w.min.z:1,$=w.min.x,ne=w.min.y,ie=w.isBox3?w.min.z:0):(z=ze.width,j=ze.height,oe=ze.depth||1,$=0,ne=0,ie=0),D!==null?(de=D.x,Pe=D.y,De=D.z):(de=0,Pe=0,De=0);let Oe=me.convert(b.format),Le=me.convert(b.type),Re;b.isData3DTexture?(U.setTexture3D(b,0),Re=F.TEXTURE_3D):b.isDataArrayTexture||b.isCompressedArrayTexture?(U.setTexture2DArray(b,0),Re=F.TEXTURE_2D_ARRAY):(U.setTexture2D(b,0),Re=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,b.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,b.unpackAlignment);let ot=F.getParameter(F.UNPACK_ROW_LENGTH),Qe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Dt=F.getParameter(F.UNPACK_SKIP_PIXELS),bt=F.getParameter(F.UNPACK_SKIP_ROWS),nt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ze.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ze.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$),F.pixelStorei(F.UNPACK_SKIP_ROWS,ne),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ie);let Lt=d.isDataArrayTexture||d.isData3DTexture,lt=b.isDataArrayTexture||b.isData3DTexture;if(d.isRenderTargetTexture||d.isDepthTexture){let Et=Be.get(d),pt=Be.get(b),at=Be.get(Et.__renderTarget),on=Be.get(pt.__renderTarget);Ue.bindFramebuffer(F.READ_FRAMEBUFFER,at.__webglFramebuffer),Ue.bindFramebuffer(F.DRAW_FRAMEBUFFER,on.__webglFramebuffer);for(let yn=0;yn<oe;yn++)Lt&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(d).__webglTexture,L,ie+yn),d.isDepthTexture?(lt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(b).__webglTexture,L,De+yn),F.blitFramebuffer($,ne,z,j,de,Pe,z,j,F.DEPTH_BUFFER_BIT,F.NEAREST)):lt?F.copyTexSubImage3D(Re,L,de,Pe,De+yn,$,ne,z,j):F.copyTexSubImage2D(Re,L,de,Pe,De+yn,$,ne,z,j);Ue.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else lt?d.isDataTexture||d.isData3DTexture?F.texSubImage3D(Re,L,de,Pe,De,z,j,oe,Oe,Le,ze.data):b.isCompressedArrayTexture?F.compressedTexSubImage3D(Re,L,de,Pe,De,z,j,oe,Oe,ze.data):F.texSubImage3D(Re,L,de,Pe,De,z,j,oe,Oe,Le,ze):d.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,L,de,Pe,z,j,Oe,Le,ze.data):d.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,L,de,Pe,ze.width,ze.height,Oe,ze.data):F.texSubImage2D(F.TEXTURE_2D,L,de,Pe,z,j,Oe,Le,ze);F.pixelStorei(F.UNPACK_ROW_LENGTH,ot),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Dt),F.pixelStorei(F.UNPACK_SKIP_ROWS,bt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,nt),L===0&&b.generateMipmaps&&F.generateMipmap(Re),Ue.unbindTexture()},this.copyTextureToTexture3D=function(d,b,w=null,D=null,L=0){return d.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),w=arguments[0]||null,D=arguments[1]||null,d=arguments[2],b=arguments[3],L=arguments[4]||0),Wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(d,b,w,D,L)},this.initRenderTarget=function(d){Be.get(d).__webglFramebuffer===void 0&&U.setupRenderTarget(d)},this.initTexture=function(d){d.isCubeTexture?U.setTextureCube(d,0):d.isData3DTexture?U.setTexture3D(d,0):d.isDataArrayTexture||d.isCompressedArrayTexture?U.setTexture2DArray(d,0):U.setTexture2D(d,0),Ue.unbindTexture()},this.resetState=function(){C=0,R=0,T=null,Ue.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}},wo=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ki=class extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},hr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oc,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},mn=new I,ys=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ai=class extends xn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ws,Fr=new I,Xs=new I,qs=new I,Ys=new we,Br=new we,_d=new Ke,Ja=new I,zr=new I,Qa=new I,Af=new we,Wl=new we,Rf=new we,Si=class extends Tt{constructor(e=new ai){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hr(t,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new ys(n,3,0,!1)),Ws.setAttribute("uv",new ys(n,2,3,!1))}this.geometry=Ws,this.material=e,this.center=new we(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),_d.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;$a(Ja.set(-.5,-.5,0),qs,a,Xs,i,r),$a(zr.set(.5,-.5,0),qs,a,Xs,i,r),$a(Qa.set(.5,.5,0),qs,a,Xs,i,r),Af.set(0,0),Wl.set(1,0),Rf.set(1,1);let o=e.ray.intersectTriangle(Ja,zr,Qa,!1,Fr);if(o===null&&($a(zr.set(-.5,.5,0),qs,a,Xs,i,r),Wl.set(0,1),o=e.ray.intersectTriangle(Ja,Qa,zr,!1,Fr),o===null))return;let l=e.ray.origin.distanceTo(Fr);l<e.near||l>e.far||t.push({distance:l,point:Fr.clone(),uv:Hi.getInterpolation(Fr,Ja,zr,Qa,Af,Wl,Rf,new we),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function $a(s,e,t,n,i,r){Ys.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Br.x=r*Ys.x-i*Ys.y,Br.y=i*Ys.x+r*Ys.y):Br.copy(Ys),s.copy(e),s.x+=Br.x,s.y+=Br.y,s.applyMatrix4(_d)}var Cf=new I,Pf=new mt,If=new mt,fb=new I,Df=new Ke,eo=new I,Xl=new Cn,Lf=new Ke,ql=new lr,To=class extends Xe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cu,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,eo),this.boundingBox.expandByPoint(eo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Cn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,eo),this.boundingSphere.expandByPoint(eo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xl.copy(this.boundingSphere),Xl.applyMatrix4(i),e.ray.intersectsSphere(Xl)!==!1&&(Lf.copy(i).invert(),ql.copy(e.ray).applyMatrix4(Lf),!(this.boundingBox!==null&&ql.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ql)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Cu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===kp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Pf.fromBufferAttribute(i.attributes.skinIndex,e),If.fromBufferAttribute(i.attributes.skinWeight,e),Cf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=If.getComponent(r);if(a!==0){let o=Pf.getComponent(r);Df.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(fb.copy(Cf).applyMatrix4(Df),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},sa=class extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Qn=class extends jt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=$t,h=$t,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Uf=new Ke,db=new Ke,Ao=class s{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:db;Uf.multiplyMatrices(o,t[r]),Uf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Qn(t,e,e,pn,vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new sa),this.bones.push(a),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ms=class extends Ut{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},js=new Ke,Nf=new Ke,to=[],Of=new Mn,pb=new Ke,kr=new Xe,Hr=new Cn,cn=class extends Xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ms(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,pb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),Of.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(Of)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),Hr.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),e.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,js),Nf.multiplyMatrices(n,js),kr.matrixWorld=Nf,kr.raycast(e,to);for(let a=0,o=to.length;a<o;a++){let l=to[a];l.instanceId=r,l.object=this,t.push(l)}to.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ms(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qn(new Float32Array(i*this.count),i,this.count,fa,vn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ss=class extends xn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ro=new I,Co=new I,Ff=new Ke,Gr=new lr,no=new Cn,Yl=new I,Bf=new I,ur=class extends Tt{constructor(e=new Rt,t=new Ss){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ro.fromBufferAttribute(t,i-1),Co.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ro.distanceTo(Co);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(i),no.radius+=r,e.ray.intersectsSphere(no)===!1)return;Ff.copy(i).invert(),Gr.copy(e.ray).applyMatrix4(Ff);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let x=p,g=v-1;x<g;x+=c){let m=h.getX(x),E=h.getX(x+1),M=io(this,e,Gr,l,m,E);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(v-1),g=h.getX(p),m=io(this,e,Gr,l,x,g);m&&t.push(m)}}else{let p=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let x=p,g=v-1;x<g;x+=c){let m=io(this,e,Gr,l,x,x+1);m&&t.push(m)}if(this.isLineLoop){let x=io(this,e,Gr,l,v-1,p);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function io(s,e,t,n,i,r){let a=s.geometry.attributes.position;if(Ro.fromBufferAttribute(a,i),Co.fromBufferAttribute(a,r),t.distanceSqToSegment(Ro,Co,Yl,Bf)>n)return;Yl.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Yl);if(!(l<e.near||l>e.far))return{distance:l,point:Bf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var zf=new I,kf=new I,fr=class extends ur{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)zf.fromBufferAttribute(t,i),kf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zf.distanceTo(kf);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Po=class extends ur{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ei=class extends xn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hf=new Ke,Qc=new lr,so=new Cn,ro=new I,Ji=class extends Tt{constructor(e=new Rt,t=new Ei){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(i),so.radius+=r,e.ray.intersectsSphere(so)===!1)return;Hf.copy(i).invert(),Qc.copy(e.ray).applyMatrix4(Hf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=f,x=p;v<x;v++){let g=c.getX(v);ro.fromBufferAttribute(u,g),Gf(ro,g,l,i,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=f,x=p;v<x;v++)ro.fromBufferAttribute(u,v),Gf(ro,v,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Gf(s,e,t,n,i,r,a){let o=Qc.distanceSqToPoint(s);if(o<t){let l=new I;Qc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Io=class extends jt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],f=n[i+1]-h,p=(a-h)/f;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new we:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new I,i=[],r=[],a=[],o=new I,l=new Ke;for(let p=0;p<=e;p++){let v=p/e;i[p]=this.getTangentAt(v,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(Jt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,v))}a[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(Jt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(i[v],p*v)),a[v].crossVectors(i[v],r[v])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ra=class extends On{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new we){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$c=class extends ra{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Bh(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,i(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var ao=new I,jl=new Bh,Zl=new Bh,Kl=new Bh,aa=class extends On{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(ao.subVectors(i[0],i[1]).add(i[0]),c=ao);let u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(ao.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ao),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,v=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),v<1e-4&&(v=x),g<1e-4&&(g=x),jl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,v,x,g),Zl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,v,x,g),Kl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,v,x,g)}else this.curveType==="catmullrom"&&(jl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Zl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Kl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(jl.calc(l),Zl.calc(l),Kl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Vf(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function mb(s,e){let t=1-s;return t*t*e}function gb(s,e){return 2*(1-s)*s*e}function vb(s,e){return s*s*e}function Kr(s,e,t,n){return mb(s,e)+gb(s,t)+vb(s,n)}function xb(s,e){let t=1-s;return t*t*t*e}function bb(s,e){let t=1-s;return 3*t*t*s*e}function _b(s,e){return 3*(1-s)*s*s*e}function yb(s,e){return s*s*s*e}function Jr(s,e,t,n,i){return xb(s,e)+bb(s,t)+_b(s,n)+yb(s,i)}var Do=class extends On{constructor(e=new we,t=new we,n=new we,i=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new we){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Jr(e,i.x,r.x,a.x,o.x),Jr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},eh=class extends On{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Jr(e,i.x,r.x,a.x,o.x),Jr(e,i.y,r.y,a.y,o.y),Jr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lo=class extends On{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},th=class extends On{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uo=class extends On{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Kr(e,i.x,r.x,a.x),Kr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nh=class extends On{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Kr(e,i.x,r.x,a.x),Kr(e,i.y,r.y,a.y),Kr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},No=class extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Vf(o,l.x,c.x,h.x,u.x),Vf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new we().fromArray(i))}return this}},ih=Object.freeze({__proto__:null,ArcCurve:$c,CatmullRomCurve3:aa,CubicBezierCurve:Do,CubicBezierCurve3:eh,EllipseCurve:ra,LineCurve:Lo,LineCurve3:th,QuadraticBezierCurve:Uo,QuadraticBezierCurve3:nh,SplineCurve:No}),sh=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ih[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new ih[i.type]().fromJSON(i))}return this}},Oo=class extends sh{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Lo(this.currentPoint.clone(),new we(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Uo(this.currentPoint.clone(),new we(e,t),new we(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Do(this.currentPoint.clone(),new we(e,t),new we(n,i),new we(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new No(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new ra(e,t,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var ft=class s extends Rt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],p=[],v=0,x=[],g=n/2,m=0;E(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(p,2));function E(){let _=new I,N=new I,C=0,R=(t-e)/n;for(let T=0;T<=r;T++){let y=[],S=T/r,P=S*(t-e)+e;for(let B=0;B<=i;B++){let G=B/i,X=G*l+o,re=Math.sin(X),O=Math.cos(X);N.x=P*re,N.y=-S*n+g,N.z=P*O,u.push(N.x,N.y,N.z),_.set(re,R,O).normalize(),f.push(_.x,_.y,_.z),p.push(G,1-S),y.push(v++)}x.push(y)}for(let T=0;T<i;T++)for(let y=0;y<r;y++){let S=x[y][T],P=x[y+1][T],B=x[y+1][T+1],G=x[y][T+1];(e>0||y!==0)&&(h.push(S,P,G),C+=3),(t>0||y!==r-1)&&(h.push(P,B,G),C+=3)}c.addGroup(m,C,0),m+=C}function M(_){let N=v,C=new we,R=new I,T=0,y=_===!0?e:t,S=_===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,g*S,0),f.push(0,S,0),p.push(.5,.5),v++;let P=v;for(let B=0;B<=i;B++){let X=B/i*l+o,re=Math.cos(X),O=Math.sin(X);R.x=y*O,R.y=g*S,R.z=y*re,u.push(R.x,R.y,R.z),f.push(0,S,0),C.x=re*.5+.5,C.y=O*.5*S+.5,p.push(C.x,C.y),v++}for(let B=0;B<i;B++){let G=N+B,X=P+B;_===!0?h.push(X,X+1,G):h.push(X+1,X,G),T+=3}c.addGroup(m,T,_===!0?1:2),m+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fo=class s extends ft{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Qi=class extends Oo{constructor(e){super(e),this.uuid=Ln(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Oo().fromJSON(i))}return this}},Mb={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=yd(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,p;if(n&&(r=Ab(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let v=t;v<i;v+=t)u=s[v],f=s[v+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return oa(r,a,t,o,l,p,0),a}};function yd(s,e,t,n,i){let r,a;if(i===Bb(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Wf(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Wf(r,s[r],s[r+1],a);return a&&Jo(a,a.next)&&(ca(a),a=a.next),a}function Es(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Jo(t,t.next)||zt(t.prev,t,t.next)===0)){if(ca(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function oa(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Db(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Eb(s,n,i,r):Sb(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),ca(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=wb(Es(s),e,t),oa(s,e,t,n,i,r,2)):a===2&&Tb(s,e,t,n,i,r):oa(Es(s),e,t,n,i,r,1);break}}}function Sb(s){let e=s.prev,t=s,n=s.next;if(zt(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,v=n.next;for(;v!==e;){if(v.x>=h&&v.x<=f&&v.y>=u&&v.y<=p&&Js(i,o,r,l,a,c,v.x,v.y)&&zt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Eb(s,e,t,n){let i=s.prev,r=s,a=s.next;if(zt(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,v=h<u?h<f?h:f:u<f?u:f,x=o>l?o>c?o:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,m=rh(p,v,e,t,n),E=rh(x,g,e,t,n),M=s.prevZ,_=s.nextZ;for(;M&&M.z>=m&&_&&_.z<=E;){if(M.x>=p&&M.x<=x&&M.y>=v&&M.y<=g&&M!==i&&M!==a&&Js(o,h,l,u,c,f,M.x,M.y)&&zt(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=p&&_.x<=x&&_.y>=v&&_.y<=g&&_!==i&&_!==a&&Js(o,h,l,u,c,f,_.x,_.y)&&zt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=m;){if(M.x>=p&&M.x<=x&&M.y>=v&&M.y<=g&&M!==i&&M!==a&&Js(o,h,l,u,c,f,M.x,M.y)&&zt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=E;){if(_.x>=p&&_.x<=x&&_.y>=v&&_.y<=g&&_!==i&&_!==a&&Js(o,h,l,u,c,f,_.x,_.y)&&zt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function wb(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Jo(i,r)&&Md(i,n,n.next,r)&&la(i,r)&&la(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ca(n),ca(n.next),n=s=r),n=n.next}while(n!==s);return Es(n)}function Tb(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Nb(a,o)){let l=Sd(a,o);a=Es(a,a.next),l=Es(l,l.next),oa(a,e,t,n,i,r,0),oa(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Ab(s,e,t,n){let i=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=yd(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Ub(c));for(i.sort(Rb),r=0;r<i.length;r++)t=Cb(i[r],t);return t}function Rb(s,e){return s.x-e.x}function Cb(s,e){let t=Pb(s,e);if(!t)return e;let n=Sd(t,s);return Es(n,n.next),Es(t,t.next)}function Pb(s,e){let t=e,n=-1/0,i,r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;let o=i,l=i.x,c=i.y,h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Js(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),la(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Ib(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function Ib(s,e){return zt(s.prev,s,e.prev)<0&&zt(e.next,s,s.next)<0}function Db(s,e,t,n){let i=s;do i.z===0&&(i.z=rh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Lb(i)}function Lb(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function rh(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Ub(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Js(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Nb(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Ob(s,e)&&(la(s,e)&&la(e,s)&&Fb(s,e)&&(zt(s.prev,s,e.prev)||zt(s,e.prev,e))||Jo(s,e)&&zt(s.prev,s,s.next)>0&&zt(e.prev,e,e.next)>0)}function zt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Jo(s,e){return s.x===e.x&&s.y===e.y}function Md(s,e,t,n){let i=lo(zt(s,e,t)),r=lo(zt(s,e,n)),a=lo(zt(t,n,s)),o=lo(zt(t,n,e));return!!(i!==r&&a!==o||i===0&&oo(s,t,e)||r===0&&oo(s,n,e)||a===0&&oo(t,s,n)||o===0&&oo(t,e,n))}function oo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function lo(s){return s>0?1:s<0?-1:0}function Ob(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Md(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function la(s,e){return zt(s.prev,s,s.next)<0?zt(s,e,s.next)>=0&&zt(s,s.prev,e)>=0:zt(s,e,s.prev)<0||zt(s,s.next,e)<0}function Fb(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Sd(s,e){let t=new ah(s.i,s.x,s.y),n=new ah(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Wf(s,e,t,n){let i=new ah(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ca(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ah(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Bb(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Qr=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Xf(e),qf(n,e);let a=e.length;t.forEach(Xf);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,qf(n,t[l]);let o=Mb.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Xf(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function qf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var dr=class s extends Rt{constructor(e=new Qi([new we(.5,.5),new we(-.5,.5),new we(-.5,-.5),new we(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new xt(i,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:zb,M,_=!1,N,C,R,T;m&&(M=m.getSpacedPoints(h),_=!0,f=!1,N=m.computeFrenetFrames(h,!1),C=new I,R=new I,T=new I),f||(g=0,p=0,v=0,x=0);let y=o.extractPoints(c),S=y.shape,P=y.holes;if(!Qr.isClockWise(S)){S=S.reverse();for(let ue=0,Ae=P.length;ue<Ae;ue++){let F=P[ue];Qr.isClockWise(F)&&(P[ue]=F.reverse())}}let G=Qr.triangulateShape(S,P),X=S;for(let ue=0,Ae=P.length;ue<Ae;ue++){let F=P[ue];S=S.concat(F)}function re(ue,Ae,F){return Ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),ue.clone().addScaledVector(Ae,F)}let O=S.length,Q=G.length;function H(ue,Ae,F){let Ve,Ee,We,Ue=ue.x-Ae.x,Je=ue.y-Ae.y,Be=F.x-ue.x,U=F.y-ue.y,A=Ue*Ue+Je*Je,Y=Ue*U-Je*Be;if(Math.abs(Y)>Number.EPSILON){let ce=Math.sqrt(A),_e=Math.sqrt(Be*Be+U*U),fe=Ae.x-Je/ce,Ye=Ae.y+Ue/ce,W=F.x-U/_e,K=F.y+Be/_e,ve=((W-fe)*U-(K-Ye)*Be)/(Ue*U-Je*Be);Ve=fe+Ue*ve-ue.x,Ee=Ye+Je*ve-ue.y;let J=Ve*Ve+Ee*Ee;if(J<=2)return new we(Ve,Ee);We=Math.sqrt(J/2)}else{let ce=!1;Ue>Number.EPSILON?Be>Number.EPSILON&&(ce=!0):Ue<-Number.EPSILON?Be<-Number.EPSILON&&(ce=!0):Math.sign(Je)===Math.sign(U)&&(ce=!0),ce?(Ve=-Je,Ee=Ue,We=Math.sqrt(A)):(Ve=Ue,Ee=Je,We=Math.sqrt(A/2))}return new we(Ve/We,Ee/We)}let q=[];for(let ue=0,Ae=X.length,F=Ae-1,Ve=ue+1;ue<Ae;ue++,F++,Ve++)F===Ae&&(F=0),Ve===Ae&&(Ve=0),q[ue]=H(X[ue],X[F],X[Ve]);let se=[],te,Ie=q.concat();for(let ue=0,Ae=P.length;ue<Ae;ue++){let F=P[ue];te=[];for(let Ve=0,Ee=F.length,We=Ee-1,Ue=Ve+1;Ve<Ee;Ve++,We++,Ue++)We===Ee&&(We=0),Ue===Ee&&(Ue=0),te[Ve]=H(F[Ve],F[We],F[Ue]);se.push(te),Ie=Ie.concat(te)}for(let ue=0;ue<g;ue++){let Ae=ue/g,F=p*Math.cos(Ae*Math.PI/2),Ve=v*Math.sin(Ae*Math.PI/2)+x;for(let Ee=0,We=X.length;Ee<We;Ee++){let Ue=re(X[Ee],q[Ee],Ve);xe(Ue.x,Ue.y,-F)}for(let Ee=0,We=P.length;Ee<We;Ee++){let Ue=P[Ee];te=se[Ee];for(let Je=0,Be=Ue.length;Je<Be;Je++){let U=re(Ue[Je],te[Je],Ve);xe(U.x,U.y,-F)}}}let je=v+x;for(let ue=0;ue<O;ue++){let Ae=f?re(S[ue],Ie[ue],je):S[ue];_?(R.copy(N.normals[0]).multiplyScalar(Ae.x),C.copy(N.binormals[0]).multiplyScalar(Ae.y),T.copy(M[0]).add(R).add(C),xe(T.x,T.y,T.z)):xe(Ae.x,Ae.y,0)}for(let ue=1;ue<=h;ue++)for(let Ae=0;Ae<O;Ae++){let F=f?re(S[Ae],Ie[Ae],je):S[Ae];_?(R.copy(N.normals[ue]).multiplyScalar(F.x),C.copy(N.binormals[ue]).multiplyScalar(F.y),T.copy(M[ue]).add(R).add(C),xe(T.x,T.y,T.z)):xe(F.x,F.y,u/h*ue)}for(let ue=g-1;ue>=0;ue--){let Ae=ue/g,F=p*Math.cos(Ae*Math.PI/2),Ve=v*Math.sin(Ae*Math.PI/2)+x;for(let Ee=0,We=X.length;Ee<We;Ee++){let Ue=re(X[Ee],q[Ee],Ve);xe(Ue.x,Ue.y,u+F)}for(let Ee=0,We=P.length;Ee<We;Ee++){let Ue=P[Ee];te=se[Ee];for(let Je=0,Be=Ue.length;Je<Be;Je++){let U=re(Ue[Je],te[Je],Ve);_?xe(U.x,U.y+M[h-1].y,M[h-1].x+F):xe(U.x,U.y,u+F)}}}le(),be();function le(){let ue=i.length/3;if(f){let Ae=0,F=O*Ae;for(let Ve=0;Ve<Q;Ve++){let Ee=G[Ve];Fe(Ee[2]+F,Ee[1]+F,Ee[0]+F)}Ae=h+g*2,F=O*Ae;for(let Ve=0;Ve<Q;Ve++){let Ee=G[Ve];Fe(Ee[0]+F,Ee[1]+F,Ee[2]+F)}}else{for(let Ae=0;Ae<Q;Ae++){let F=G[Ae];Fe(F[2],F[1],F[0])}for(let Ae=0;Ae<Q;Ae++){let F=G[Ae];Fe(F[0]+O*h,F[1]+O*h,F[2]+O*h)}}n.addGroup(ue,i.length/3-ue,0)}function be(){let ue=i.length/3,Ae=0;Te(X,Ae),Ae+=X.length;for(let F=0,Ve=P.length;F<Ve;F++){let Ee=P[F];Te(Ee,Ae),Ae+=Ee.length}n.addGroup(ue,i.length/3-ue,1)}function Te(ue,Ae){let F=ue.length;for(;--F>=0;){let Ve=F,Ee=F-1;Ee<0&&(Ee=ue.length-1);for(let We=0,Ue=h+g*2;We<Ue;We++){let Je=O*We,Be=O*(We+1),U=Ae+Ve+Je,A=Ae+Ee+Je,Y=Ae+Ee+Be,ce=Ae+Ve+Be;qe(U,A,Y,ce)}}}function xe(ue,Ae,F){l.push(ue),l.push(Ae),l.push(F)}function Fe(ue,Ae,F){Ze(ue),Ze(Ae),Ze(F);let Ve=i.length/3,Ee=E.generateTopUV(n,i,Ve-3,Ve-2,Ve-1);tt(Ee[0]),tt(Ee[1]),tt(Ee[2])}function qe(ue,Ae,F,Ve){Ze(ue),Ze(Ae),Ze(Ve),Ze(Ae),Ze(F),Ze(Ve);let Ee=i.length/3,We=E.generateSideWallUV(n,i,Ee-6,Ee-3,Ee-2,Ee-1);tt(We[0]),tt(We[1]),tt(We[3]),tt(We[1]),tt(We[2]),tt(We[3])}function Ze(ue){i.push(l[ue*3+0]),i.push(l[ue*3+1]),i.push(l[ue*3+2])}function tt(ue){r.push(ue.x),r.push(ue.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return kb(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ih[i.type]().fromJSON(i)),new s(n,e.options)}},zb={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new we(r,a),new we(o,l),new we(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],p=e[i*3+1],v=e[i*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new we(a,1-l),new we(c,1-u),new we(f,1-v),new we(x,1-m)]:[new we(o,1-l),new we(h,1-u),new we(p,1-v),new we(g,1-m)]}};function kb(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var bn=class s extends Rt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,f=new I,p=[],v=[],x=[],g=[];for(let m=0;m<=n;m++){let E=[],M=m/n,_=0;m===0&&a===0?_=.5/t:m===n&&l===Math.PI&&(_=-.5/t);for(let N=0;N<=t;N++){let C=N/t;u.x=-e*Math.cos(i+C*r)*Math.sin(a+M*o),u.y=e*Math.cos(a+M*o),u.z=e*Math.sin(i+C*r)*Math.sin(a+M*o),v.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(C+_,1-M),E.push(c++)}h.push(E)}for(let m=0;m<n;m++)for(let E=0;E<t;E++){let M=h[m][E+1],_=h[m][E],N=h[m+1][E],C=h[m+1][E+1];(m!==0||a>0)&&p.push(M,_,C),(m!==n-1||l<Math.PI)&&p.push(_,N,C)}this.setIndex(p),this.setAttribute("position",new xt(v,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var $i=class s extends Rt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new I,u=new I,f=new I;for(let p=0;p<=n;p++)for(let v=0;v<=i;v++){let x=v/i*r,g=p/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(v/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let v=1;v<=i;v++){let x=(i+1)*p+v-1,g=(i+1)*(p-1)+v-1,m=(i+1)*(p-1)+v,E=(i+1)*p+v;a.push(x,g,E),a.push(g,m,E)}this.setIndex(a),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Bo=class extends yt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},et=class extends xn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uh,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ct=class extends et{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var zo=class extends xn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uh,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function co(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Hb(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Gb(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Yf(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Ed(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var es=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},oh=class extends es{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pu,endingEnd:Pu}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Iu:r=e,o=2*t-n;break;case Du:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Iu:a=e,l=2*n-t;break;case Du:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,v=(n-t)/(i-t),x=v*v,g=x*v,m=-f*g+2*f*x-f*v,E=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*v+1,M=(-1-p)*g+(1.5+p)*x+.5*v,_=p*g-p*x;for(let N=0;N!==o;++N)r[N]=m*a[h+N]+E*a[c+N]+M*a[l+N]+_*a[u+N];return r}},lh=class extends es{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},ch=class extends es{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Fn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=co(t,this.TimeBufferType),this.values=co(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:co(e.times,Array),values:co(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case rr:t=this.InterpolantFactoryMethodDiscrete;break;case ar:t=this.InterpolantFactoryMethodLinear;break;case vl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return ar;case this.InterpolantFactoryMethodSmooth:return vl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Hb(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===vl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let v=0;v!==n;++v){let x=t[u+v];if(x!==t[f+v]||x!==t[p+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=ar;var ts=class extends Fn{constructor(e,t,n){super(e,t,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=rr;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends Fn{};ko.prototype.ValueTypeName="color";var wi=class extends Fn{};wi.prototype.ValueTypeName="number";var hh=class extends es{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ft.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ti=class extends Fn{InterpolantFactoryMethodLinear(e){return new hh(this.times,this.values,this.getValueSize(),e)}};Ti.prototype.ValueTypeName="quaternion";Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Fn{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=rr;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends Fn{};Ai.prototype.ValueTypeName="vector";var Ho=class{constructor(e="",t=-1,n=[],i=Hp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ln(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Wb(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Fn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Gb(l);l=Yf(l,1,h),c=Yf(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new wi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,p,v,x){if(p.length!==0){let g=[],m=[];Ed(p,g,m,v),g.length!==0&&x.push(new u(f,g,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},v;for(v=0;v<f.length;v++)if(f[v].morphTargets)for(let x=0;x<f[v].morphTargets.length;x++)p[f[v].morphTargets[x]]=-1;for(let x in p){let g=[],m=[];for(let E=0;E!==f[v].morphTargets.length;++E){let M=f[v];g.push(M.time),m.push(M.morphTarget===x?1:0)}i.push(new wi(".morphTargetInfluence["+x+"]",g,m))}l=p.length*a}else{let p=".bones["+t[u].name+"]";n(Ai,p+".position",f,"pos",i),n(Ti,p+".quaternion",f,"rot",i),n(Ai,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Vb(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wi;case"vector":case"vector2":case"vector3":case"vector4":return Ai;case"color":return ko;case"quaternion":return Ti;case"bool":case"boolean":return ts;case"string":return ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Wb(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Vb(s.type);if(s.times===void 0){let t=[],n=[];Ed(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Gi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},uh=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],v=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null}}},Xb=new uh,oi=class{constructor(e){this.manager=e!==void 0?e:Xb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};oi.DEFAULT_MATERIAL_NAME="__DEFAULT";var xi={},fh=class extends Error{constructor(e,t){super(e),this.response=t}},pr=class extends oi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Gi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(xi[e]!==void 0){xi[e].push({onLoad:t,onProgress:n,onError:i});return}xi[e]=[],xi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=xi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,v=p!==0,x=0,g=new ReadableStream({start(m){E();function E(){u.read().then(({done:M,value:_})=>{if(M)m.close();else{x+=_.byteLength;let N=new ProgressEvent("progress",{lengthComputable:v,loaded:x,total:p});for(let C=0,R=h.length;C<R;C++){let T=h[C];T.onProgress&&T.onProgress(N)}m.enqueue(_),E()}},M=>{m.error(M)})}}});return new Response(g)}else throw new fh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(v=>p.decode(v))}}}).then(c=>{Gi.add(e,c);let h=xi[e];delete xi[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=xi[e];if(h===void 0)throw this.manager.itemError(e),c;delete xi[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var dh=class extends oi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Gi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=ta("img");function l(){h(),Gi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Go=class extends oi{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new Qn,o=new pr(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Rn,a.wrapT=c.wrapT!==void 0?c.wrapT:Rn,a.magFilter=c.magFilter!==void 0?c.magFilter:Ht,a.minFilter=c.minFilter!==void 0?c.minFilter:Ht,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Kn),c.mipmapCount===1&&(a.minFilter=Ht),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}},is=class extends oi{constructor(e){super(e)}load(e,t,n,i){let r=new jt,a=new dh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},mr=class extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Vo=class extends mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Jl=new Ke,jf=new I,Zf=new I,ha=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new na,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;jf.setFromMatrixPosition(e.matrixWorld),t.position.copy(jf),Zf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zf),t.updateMatrixWorld(),Jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ph=class extends ha{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=or*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ss=class extends mr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ph}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Kf=new Ke,Vr=new I,Ql=new I,mh=class extends ha{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vr),Ql.copy(n.position),Ql.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ql),n.updateMatrixWorld(),i.makeTranslation(-Vr.x,-Vr.y,-Vr.z),Kf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kf)}},rs=class extends mr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new mh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},gh=class extends ha{constructor(){super(new Yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gr=class extends mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new gh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var as=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Wo=class extends oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Gi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Gi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Gi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Gi.add(e,l),r.manager.itemStart(e)}};var vr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Jf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Jf(){return performance.now()}var zh="\\[\\]\\.:\\/",qb=new RegExp("["+zh+"]","g"),kh="[^"+zh+"]",Yb="[^"+zh.replace("\\.","")+"]",jb=/((?:WC+[\/:])*)/.source.replace("WC",kh),Zb=/(WCOD+)?/.source.replace("WCOD",Yb),Kb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),Jb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),Qb=new RegExp("^"+jb+Zb+Kb+Jb+"$"),$b=["material","materials","bones","map"],vh=class{constructor(e,t,n){let i=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qb,"")}static parseTrackName(e){let t=Qb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);$b.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=vh;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xh);var pa=class s extends Xe{constructor(){let e=s.SkyShader,t=new yt({name:e.name,uniforms:rn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Gt,depthWrite:!1});super(new ke(1,1,1),t),this.isSky=!0}};pa.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new I},up:{value:new I(0,1,0)}},vertexShader:`
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

		}`};var Qo=class extends Ki{constructor(){super();let e=new ke;e.deleteAttribute("uv");let t=new et({side:Gt}),n=new et,i=new rs(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Xe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Xe(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new Xe(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new Xe(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Xe(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new Xe(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Xe(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new Xe(e,_r(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let p=new Xe(e,_r(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let v=new Xe(e,_r(17));v.position.set(14.904,12.198,-1.832),v.scale.set(.15,4.265,6.331),this.add(v);let x=new Xe(e,_r(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let g=new Xe(e,_r(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let m=new Xe(e,_r(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function _r(s){let e=new Wt;return e.color.setScalar(s),e}var ls={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var _n=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},e_=new Yi(-1,1,1,-1,0,1),Hh=class extends Rt{constructor(){super(),this.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xt([0,2,0,0,2,0],2))}},t_=new Hh,li=class{constructor(e){this._mesh=new Xe(t_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,e_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var yr=class extends _n{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=rn.clone(e.uniforms),this.material=new yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new li(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ma=class extends _n{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},$o=class extends _n{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var el=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new we);this._width=n.width,this._height=n.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yr(ls),this.copyPass.material.blending=Qt,this.clock=new vr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ma!==void 0&&(a instanceof ma?n=!0:a instanceof $o&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var tl=class extends _n{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var wd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Mr=class s extends _n{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new we(e.x,e.y):new we(256,256),this.clearColor=new Ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Vt(r,a,{type:qt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Vt(r,a,{type:qt});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new Vt(r,a,{type:qt});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=wd;this.highPassUniforms=rn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new we(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ls;this.copyUniforms=rn.clone(h.uniforms),this.blendMaterial=new yt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ri,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ne,this.oldClearAlpha=1,this.basic=new Wt,this.fsQuad=new li(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new we(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new we(.5,.5)},direction:{value:new we(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};Mr.BlurDirectionX=new we(1,0);Mr.BlurDirectionY=new we(0,1);var Td={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var nl=class extends _n{constructor(){super();let e=Td;this.uniforms=rn.clone(e.uniforms),this.material=new Bo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new li(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===yh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Mh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Sh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ua?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Eh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===wh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ga={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new we},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ke},cameraProjectionMatrixInverse:{value:new Ke},cameraWorldMatrix:{value:new Ke},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new I(-1,-1,-1)},sceneBoxMax:{value:new I(1,1,1)}},vertexShader:`

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
		}`},va={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},il={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Ad(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=n_(e),n=t.length,i=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new I(Math.cos(l),Math.sin(l),0).normalize();i[a*4]=(c.x*.5+.5)*255,i[a*4+1]=(c.y*.5+.5)*255,i[a*4+2]=127,i[a*4+3]=255}let r=new Qn(i,e,e);return r.wrapS=en,r.wrapT=en,r.needsUpdate=!0,r}function n_(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=a++;r++,i--}return n}var xa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Gh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new we},cameraProjectionMatrixInverse:{value:new Ke},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Gh(s,e,t){let n=i_(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let a=n[r];i+=`vec3(${a.x}, ${a.y}, ${a.z})${r<s-1?",":")"}`}return i}function i_(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,a=Math.pow(i/(s-1),t);n.push(new I(Math.cos(r),Math.sin(r),a))}return n}var sl=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}noise(e,t){let n,i,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,p=c-u,v=e-f,x=t-p,g,m;v>x?(g=1,m=0):(g=0,m=1);let E=v-g+h,M=x-m+h,_=v-1+2*h,N=x-1+2*h,C=l&255,R=c&255,T=this.perm[C+this.perm[R]]%12,y=this.perm[C+g+this.perm[R+m]]%12,S=this.perm[C+1+this.perm[R+1]]%12,P=.5-v*v-x*x;P<0?n=0:(P*=P,n=P*P*this.dot(this.grad3[T],v,x));let B=.5-E*E-M*M;B<0?i=0:(B*=B,i=B*B*this.dot(this.grad3[y],E,M));let G=.5-_*_-N*N;return G<0?r=0:(G*=G,r=G*G*this.dot(this.grad3[S],_,N)),70*(n+i+r)}noise3d(e,t,n){let i,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),p=1/6,v=(h+u+f)*p,x=h-v,g=u-v,m=f-v,E=e-x,M=t-g,_=n-m,N,C,R,T,y,S;E>=M?M>=_?(N=1,C=0,R=0,T=1,y=1,S=0):E>=_?(N=1,C=0,R=0,T=1,y=0,S=1):(N=0,C=0,R=1,T=1,y=0,S=1):M<_?(N=0,C=0,R=1,T=0,y=1,S=1):E<_?(N=0,C=1,R=0,T=0,y=1,S=1):(N=0,C=1,R=0,T=1,y=1,S=0);let P=E-N+p,B=M-C+p,G=_-R+p,X=E-T+2*p,re=M-y+2*p,O=_-S+2*p,Q=E-1+3*p,H=M-1+3*p,q=_-1+3*p,se=h&255,te=u&255,Ie=f&255,je=this.perm[se+this.perm[te+this.perm[Ie]]]%12,le=this.perm[se+N+this.perm[te+C+this.perm[Ie+R]]]%12,be=this.perm[se+T+this.perm[te+y+this.perm[Ie+S]]]%12,Te=this.perm[se+1+this.perm[te+1+this.perm[Ie+1]]]%12,xe=.6-E*E-M*M-_*_;xe<0?i=0:(xe*=xe,i=xe*xe*this.dot3(this.grad3[je],E,M,_));let Fe=.6-P*P-B*B-G*G;Fe<0?r=0:(Fe*=Fe,r=Fe*Fe*this.dot3(this.grad3[le],P,B,G));let qe=.6-X*X-re*re-O*O;qe<0?a=0:(qe*=qe,a=qe*qe*this.dot3(this.grad3[be],X,re,O));let Ze=.6-Q*Q-H*H-q*q;return Ze<0?o=0:(Ze*=Ze,o=Ze*Ze*this.dot3(this.grad3[Te],Q,H,q)),32*(i+r+a+o)}noise4d(e,t,n,i){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,p,v,x=(e+t+n+i)*l,g=Math.floor(e+x),m=Math.floor(t+x),E=Math.floor(n+x),M=Math.floor(i+x),_=(g+m+E+M)*c,N=g-_,C=m-_,R=E-_,T=M-_,y=e-N,S=t-C,P=n-R,B=i-T,G=y>S?32:0,X=y>P?16:0,re=S>P?8:0,O=y>B?4:0,Q=S>B?2:0,H=P>B?1:0,q=G+X+re+O+Q+H,se=a[q][0]>=3?1:0,te=a[q][1]>=3?1:0,Ie=a[q][2]>=3?1:0,je=a[q][3]>=3?1:0,le=a[q][0]>=2?1:0,be=a[q][1]>=2?1:0,Te=a[q][2]>=2?1:0,xe=a[q][3]>=2?1:0,Fe=a[q][0]>=1?1:0,qe=a[q][1]>=1?1:0,Ze=a[q][2]>=1?1:0,tt=a[q][3]>=1?1:0,ue=y-se+c,Ae=S-te+c,F=P-Ie+c,Ve=B-je+c,Ee=y-le+2*c,We=S-be+2*c,Ue=P-Te+2*c,Je=B-xe+2*c,Be=y-Fe+3*c,U=S-qe+3*c,A=P-Ze+3*c,Y=B-tt+3*c,ce=y-1+4*c,_e=S-1+4*c,fe=P-1+4*c,Ye=B-1+4*c,W=g&255,K=m&255,ve=E&255,J=M&255,he=o[W+o[K+o[ve+o[J]]]]%32,ye=o[W+se+o[K+te+o[ve+Ie+o[J+je]]]]%32,Z=o[W+le+o[K+be+o[ve+Te+o[J+xe]]]]%32,ae=o[W+Fe+o[K+qe+o[ve+Ze+o[J+tt]]]]%32,ge=o[W+1+o[K+1+o[ve+1+o[J+1]]]]%32,me=.6-y*y-S*S-P*P-B*B;me<0?h=0:(me*=me,h=me*me*this.dot4(r[he],y,S,P,B));let Se=.6-ue*ue-Ae*Ae-F*F-Ve*Ve;Se<0?u=0:(Se*=Se,u=Se*Se*this.dot4(r[ye],ue,Ae,F,Ve));let k=.6-Ee*Ee-We*We-Ue*Ue-Je*Je;k<0?f=0:(k*=k,f=k*k*this.dot4(r[Z],Ee,We,Ue,Je));let V=.6-Be*Be-U*U-A*A-Y*Y;V<0?p=0:(V*=V,p=V*V*this.dot4(r[ae],Be,U,A,Y));let ee=.6-ce*ce-_e*_e-fe*fe-Ye*Ye;return ee<0?v=0:(ee*=ee,v=ee*ee*this.dot4(r[ge],ce,_e,fe,Ye)),27*(h+u+f+p+v)}};var ba=class s extends _n{constructor(e,t,n,i,r,a,o){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Ad(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Vt(this.width,this.height,{type:qt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new yt({defines:Object.assign({},ga.defines),uniforms:rn.clone(ga.uniforms),vertexShader:ga.vertexShader,fragmentShader:ga.fragmentShader,blending:Qt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new zo,this.normalMaterial.blending=Qt,this.pdMaterial=new yt({defines:Object.assign({},xa.defines),uniforms:rn.clone(xa.uniforms),vertexShader:xa.vertexShader,fragmentShader:xa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new yt({defines:Object.assign({},va.defines),uniforms:rn.clone(va.uniforms),vertexShader:va.vertexShader,fragmentShader:va.fragmentShader,blending:Qt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new yt({uniforms:rn.clone(ls.uniforms),vertexShader:ls.vertexShader,fragmentShader:ls.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:qo,blendDst:xr,blendEquation:Dn,blendSrcAlpha:Xo,blendDstAlpha:xr,blendEquationAlpha:Dn}),this.blendMaterial=new yt({uniforms:rn.clone(il.uniforms),vertexShader:il.vertexShader,fragmentShader:il.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:_h,blendSrc:qo,blendDst:xr,blendEquation:Dn,blendSrcAlpha:Xo,blendDstAlpha:xr,blendEquationAlpha:Dn}),this.fsQuad=new li(null),this.originalClearColor=new Ne,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Zi,this.depthTexture.format=Xi,this.depthTexture.type=Wi,this.normalRenderTarget=new Vt(this.width,this.height,{minFilter:$t,magFilter:$t,type:qt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Gh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,i,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,i,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let i=t.get(n);n.visible=i}),t.clear()}generateNoise(e=64){let t=new sl,n=e*e*4,i=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;i[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,i[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Qn(i,e,e,pn,Jn);return r.wrapS=en,r.wrapT=en,r.needsUpdate=!0,r}};ba.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Bn=Uint8Array,Sr=Uint16Array,s_=Int32Array,Rd=new Bn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Cd=new Bn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),r_=new Bn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Pd=function(s,e){for(var t=new Sr(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new s_(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},Id=Pd(Rd,2),Dd=Id.b,a_=Id.r;Dd[28]=258,a_[258]=28;var Ld=Pd(Cd,0),o_=Ld.b,By=Ld.r,Xh=new Sr(32768);for(Mt=0;Mt<32768;++Mt)Ci=(Mt&43690)>>1|(Mt&21845)<<1,Ci=(Ci&52428)>>2|(Ci&13107)<<2,Ci=(Ci&61680)>>4|(Ci&3855)<<4,Xh[Mt]=((Ci&65280)>>8|(Ci&255)<<8)>>1;var Ci,Mt,_a=function(s,e,t){for(var n=s.length,i=0,r=new Sr(e);i<n;++i)s[i]&&++r[s[i]-1];var a=new Sr(e);for(i=1;i<e;++i)a[i]=a[i-1]+r[i-1]<<1;var o;if(t){o=new Sr(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],h=e-s[i],u=a[s[i]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)o[Xh[u]>>l]=c}else for(o=new Sr(n),i=0;i<n;++i)s[i]&&(o[i]=Xh[a[s[i]-1]++]>>15-s[i]);return o},ya=new Bn(288);for(Mt=0;Mt<144;++Mt)ya[Mt]=8;var Mt;for(Mt=144;Mt<256;++Mt)ya[Mt]=9;var Mt;for(Mt=256;Mt<280;++Mt)ya[Mt]=7;var Mt;for(Mt=280;Mt<288;++Mt)ya[Mt]=8;var Mt,Ud=new Bn(32);for(Mt=0;Mt<32;++Mt)Ud[Mt]=5;var Mt;var l_=_a(ya,9,1);var c_=_a(Ud,5,1),Vh=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},$n=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},Wh=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},h_=function(s){return(s+7)/8|0},u_=function(s,e,t){return(e==null||e<0)&&(e=0),(t==null||t>s.length)&&(t=s.length),new Bn(s.subarray(e,t))};var f_=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ei=function(s,e,t){var n=new Error(e||f_[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,ei),!t)throw n;return n},d_=function(s,e,t,n){var i=s.length,r=n?n.length:0;if(!i||e.f&&!e.l)return t||new Bn(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new Bn(i*3));var c=function(tt){var ue=t.length;if(tt>ue){var Ae=new Bn(Math.max(ue*2,tt));Ae.set(t),t=Ae}},h=e.f||0,u=e.p||0,f=e.b||0,p=e.l,v=e.d,x=e.m,g=e.n,m=i*8;do{if(!p){h=$n(s,u,1);var E=$n(s,u+1,3);if(u+=3,E)if(E==1)p=l_,v=c_,x=9,g=5;else if(E==2){var C=$n(s,u,31)+257,R=$n(s,u+10,15)+4,T=C+$n(s,u+5,31)+1;u+=14;for(var y=new Bn(T),S=new Bn(19),P=0;P<R;++P)S[r_[P]]=$n(s,u+P*3,7);u+=R*3;for(var B=Vh(S),G=(1<<B)-1,X=_a(S,B,1),P=0;P<T;){var re=X[$n(s,u,G)];u+=re&15;var M=re>>4;if(M<16)y[P++]=M;else{var O=0,Q=0;for(M==16?(Q=3+$n(s,u,3),u+=2,O=y[P-1]):M==17?(Q=3+$n(s,u,7),u+=3):M==18&&(Q=11+$n(s,u,127),u+=7);Q--;)y[P++]=O}}var H=y.subarray(0,C),q=y.subarray(C);x=Vh(H),g=Vh(q),p=_a(H,x,1),v=_a(q,g,1)}else ei(1);else{var M=h_(u)+4,_=s[M-4]|s[M-3]<<8,N=M+_;if(N>i){l&&ei(0);break}o&&c(f+_),t.set(s.subarray(M,N),f),e.b=f+=_,e.p=u=N*8,e.f=h;continue}if(u>m){l&&ei(0);break}}o&&c(f+131072);for(var se=(1<<x)-1,te=(1<<g)-1,Ie=u;;Ie=u){var O=p[Wh(s,u)&se],je=O>>4;if(u+=O&15,u>m){l&&ei(0);break}if(O||ei(2),je<256)t[f++]=je;else if(je==256){Ie=u,p=null;break}else{var le=je-254;if(je>264){var P=je-257,be=Rd[P];le=$n(s,u,(1<<be)-1)+Dd[P],u+=be}var Te=v[Wh(s,u)&te],xe=Te>>4;Te||ei(3),u+=Te&15;var q=o_[xe];if(xe>3){var be=Cd[xe];q+=Wh(s,u)&(1<<be)-1,u+=be}if(u>m){l&&ei(0);break}o&&c(f+131072);var Fe=f+le;if(f<q){var qe=r-q,Ze=Math.min(q,Fe);for(qe+f<0&&ei(3);f<Ze;++f)t[f]=n[qe+f]}for(;f<Fe;++f)t[f]=t[f-q]}}e.l=p,e.p=Ie,e.b=f,e.f=h,p&&(h=1,e.m=x,e.d=v,e.n=g)}while(!h);return f!=t.length&&a?u_(t,0,f):t.subarray(0,f)};var p_=new Bn(0);var m_=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&ei(6,"invalid zlib data"),(s[1]>>5&1)==+!e&&ei(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function Ma(s,e){return d_(s.subarray(m_(s,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var g_=typeof TextDecoder<"u"&&new TextDecoder,v_=0;try{g_.decode(p_,{stream:!0}),v_=1}catch{}var rl=class extends Go{constructor(e){super(e),this.type=qt}parse(e){let y=Math.pow(2.7182818,2.2);function S(d,b){let w=0;for(let L=0;L<65536;++L)(L==0||d[L>>3]&1<<(L&7))&&(b[w++]=L);let D=w-1;for(;w<65536;)b[w++]=0;return D}function P(d){for(let b=0;b<16384;b++)d[b]={},d[b].len=0,d[b].lit=0,d[b].p=null}let B={l:0,c:0,lc:0};function G(d,b,w,D,L){for(;w<d;)b=b<<8|ae(D,L),w+=8;w-=d,B.l=b>>w&(1<<d)-1,B.c=b,B.lc=w}let X=new Array(59);function re(d){for(let w=0;w<=58;++w)X[w]=0;for(let w=0;w<65537;++w)X[d[w]]+=1;let b=0;for(let w=58;w>0;--w){let D=b+X[w]>>1;X[w]=b,b=D}for(let w=0;w<65537;++w){let D=d[w];D>0&&(d[w]=D|X[D]++<<6)}}function O(d,b,w,D,L,z){let j=b,oe=0,$=0;for(;D<=L;D++){if(j.value-b.value>w)return!1;G(6,oe,$,d,j);let ne=B.l;if(oe=B.c,$=B.lc,z[D]=ne,ne==63){if(j.value-b.value>w)throw new Error("Something wrong with hufUnpackEncTable");G(8,oe,$,d,j);let ie=B.l+6;if(oe=B.c,$=B.lc,D+ie>L+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ie--;)z[D++]=0;D--}else if(ne>=59){let ie=ne-59+2;if(D+ie>L+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ie--;)z[D++]=0;D--}}re(z)}function Q(d){return d&63}function H(d){return d>>6}function q(d,b,w,D){for(;b<=w;b++){let L=H(d[b]),z=Q(d[b]);if(L>>z)throw new Error("Invalid table entry");if(z>14){let j=D[L>>z-14];if(j.len)throw new Error("Invalid table entry");if(j.lit++,j.p){let oe=j.p;j.p=new Array(j.lit);for(let $=0;$<j.lit-1;++$)j.p[$]=oe[$]}else j.p=new Array(1);j.p[j.lit-1]=b}else if(z){let j=0;for(let oe=1<<14-z;oe>0;oe--){let $=D[(L<<14-z)+j];if($.len||$.p)throw new Error("Invalid table entry");$.len=z,$.lit=b,j++}}}return!0}let se={c:0,lc:0};function te(d,b,w,D){d=d<<8|ae(w,D),b+=8,se.c=d,se.lc=b}let Ie={c:0,lc:0};function je(d,b,w,D,L,z,j,oe,$){if(d==b){D<8&&(te(w,D,L,z),w=se.c,D=se.lc),D-=8;let ne=w>>D;if(ne=new Uint8Array([ne])[0],oe.value+ne>$)return!1;let ie=j[oe.value-1];for(;ne-- >0;)j[oe.value++]=ie}else if(oe.value<$)j[oe.value++]=d;else return!1;Ie.c=w,Ie.lc=D}function le(d){return d&65535}function be(d){let b=le(d);return b>32767?b-65536:b}let Te={a:0,b:0};function xe(d,b){let w=be(d),L=be(b),z=w+(L&1)+(L>>1),j=z,oe=z-L;Te.a=j,Te.b=oe}function Fe(d,b){let w=le(d),D=le(b),L=w-(D>>1)&65535,z=D+L-32768&65535;Te.a=z,Te.b=L}function qe(d,b,w,D,L,z,j){let oe=j<16384,$=w>L?L:w,ne=1,ie,de;for(;ne<=$;)ne<<=1;for(ne>>=1,ie=ne,ne>>=1;ne>=1;){de=0;let Pe=de+z*(L-ie),De=z*ne,ze=z*ie,Oe=D*ne,Le=D*ie,Re,ot,Qe,Dt;for(;de<=Pe;de+=ze){let bt=de,nt=de+D*(w-ie);for(;bt<=nt;bt+=Le){let Lt=bt+Oe,lt=bt+De,Et=lt+Oe;oe?(xe(d[bt+b],d[lt+b]),Re=Te.a,Qe=Te.b,xe(d[Lt+b],d[Et+b]),ot=Te.a,Dt=Te.b,xe(Re,ot),d[bt+b]=Te.a,d[Lt+b]=Te.b,xe(Qe,Dt),d[lt+b]=Te.a,d[Et+b]=Te.b):(Fe(d[bt+b],d[lt+b]),Re=Te.a,Qe=Te.b,Fe(d[Lt+b],d[Et+b]),ot=Te.a,Dt=Te.b,Fe(Re,ot),d[bt+b]=Te.a,d[Lt+b]=Te.b,Fe(Qe,Dt),d[lt+b]=Te.a,d[Et+b]=Te.b)}if(w&ne){let Lt=bt+De;oe?xe(d[bt+b],d[Lt+b]):Fe(d[bt+b],d[Lt+b]),Re=Te.a,d[Lt+b]=Te.b,d[bt+b]=Re}}if(L&ne){let bt=de,nt=de+D*(w-ie);for(;bt<=nt;bt+=Le){let Lt=bt+Oe;oe?xe(d[bt+b],d[Lt+b]):Fe(d[bt+b],d[Lt+b]),Re=Te.a,d[Lt+b]=Te.b,d[bt+b]=Re}}ie=ne,ne>>=1}return de}function Ze(d,b,w,D,L,z,j,oe,$){let ne=0,ie=0,de=j,Pe=Math.trunc(D.value+(L+7)/8);for(;D.value<Pe;)for(te(ne,ie,w,D),ne=se.c,ie=se.lc;ie>=14;){let ze=ne>>ie-14&16383,Oe=b[ze];if(Oe.len)ie-=Oe.len,je(Oe.lit,z,ne,ie,w,D,oe,$,de),ne=Ie.c,ie=Ie.lc;else{if(!Oe.p)throw new Error("hufDecode issues");let Le;for(Le=0;Le<Oe.lit;Le++){let Re=Q(d[Oe.p[Le]]);for(;ie<Re&&D.value<Pe;)te(ne,ie,w,D),ne=se.c,ie=se.lc;if(ie>=Re&&H(d[Oe.p[Le]])==(ne>>ie-Re&(1<<Re)-1)){ie-=Re,je(Oe.p[Le],z,ne,ie,w,D,oe,$,de),ne=Ie.c,ie=Ie.lc;break}}if(Le==Oe.lit)throw new Error("hufDecode issues")}}let De=8-L&7;for(ne>>=De,ie-=De;ie>0;){let ze=b[ne<<14-ie&16383];if(ze.len)ie-=ze.len,je(ze.lit,z,ne,ie,w,D,oe,$,de),ne=Ie.c,ie=Ie.lc;else throw new Error("hufDecode issues")}return!0}function tt(d,b,w,D,L,z){let j={value:0},oe=w.value,$=Z(b,w),ne=Z(b,w);w.value+=4;let ie=Z(b,w);if(w.value+=4,$<0||$>=65537||ne<0||ne>=65537)throw new Error("Something wrong with HUF_ENCSIZE");let de=new Array(65537),Pe=new Array(16384);P(Pe);let De=D-(w.value-oe);if(O(d,w,De,$,ne,de),ie>8*(D-(w.value-oe)))throw new Error("Something wrong with hufUncompress");q(de,$,ne,Pe),Ze(de,Pe,d,w,ie,ne,z,L,j)}function ue(d,b,w){for(let D=0;D<w;++D)b[D]=d[b[D]]}function Ae(d){for(let b=1;b<d.length;b++){let w=d[b-1]+d[b]-128;d[b]=w}}function F(d,b){let w=0,D=Math.floor((d.length+1)/2),L=0,z=d.length-1;for(;!(L>z||(b[L++]=d[w++],L>z));)b[L++]=d[D++]}function Ve(d){let b=d.byteLength,w=new Array,D=0,L=new DataView(d);for(;b>0;){let z=L.getInt8(D++);if(z<0){let j=-z;b-=j+1;for(let oe=0;oe<j;oe++)w.push(L.getUint8(D++))}else{let j=z;b-=2;let oe=L.getUint8(D++);for(let $=0;$<j+1;$++)w.push(oe)}}return w}function Ee(d,b,w,D,L,z){let j=new DataView(z.buffer),oe=w[d.idx[0]].width,$=w[d.idx[0]].height,ne=3,ie=Math.floor(oe/8),de=Math.ceil(oe/8),Pe=Math.ceil($/8),De=oe-(de-1)*8,ze=$-(Pe-1)*8,Oe={value:0},Le=new Array(ne),Re=new Array(ne),ot=new Array(ne),Qe=new Array(ne),Dt=new Array(ne);for(let nt=0;nt<ne;++nt)Dt[nt]=b[d.idx[nt]],Le[nt]=nt<1?0:Le[nt-1]+de*Pe,Re[nt]=new Float32Array(64),ot[nt]=new Uint16Array(64),Qe[nt]=new Uint16Array(de*64);for(let nt=0;nt<Pe;++nt){let Lt=8;nt==Pe-1&&(Lt=ze);let lt=8;for(let pt=0;pt<de;++pt){pt==de-1&&(lt=De);for(let at=0;at<ne;++at)ot[at].fill(0),ot[at][0]=L[Le[at]++],We(Oe,D,ot[at]),Ue(ot[at],Re[at]),Je(Re[at]);ne==3&&Be(Re);for(let at=0;at<ne;++at)U(Re[at],Qe[at],pt*64)}let Et=0;for(let pt=0;pt<ne;++pt){let at=w[d.idx[pt]].type;for(let on=8*nt;on<8*nt+Lt;++on){Et=Dt[pt][on];for(let yn=0;yn<ie;++yn){let wn=yn*64+(on&7)*8;j.setUint16(Et+0*2*at,Qe[pt][wn+0],!0),j.setUint16(Et+1*2*at,Qe[pt][wn+1],!0),j.setUint16(Et+2*2*at,Qe[pt][wn+2],!0),j.setUint16(Et+3*2*at,Qe[pt][wn+3],!0),j.setUint16(Et+4*2*at,Qe[pt][wn+4],!0),j.setUint16(Et+5*2*at,Qe[pt][wn+5],!0),j.setUint16(Et+6*2*at,Qe[pt][wn+6],!0),j.setUint16(Et+7*2*at,Qe[pt][wn+7],!0),Et+=8*2*at}}if(ie!=de)for(let on=8*nt;on<8*nt+Lt;++on){let yn=Dt[pt][on]+8*ie*2*at,wn=ie*64+(on&7)*8;for(let Pa=0;Pa<lt;++Pa)j.setUint16(yn+Pa*2*at,Qe[pt][wn+Pa],!0)}}}let bt=new Uint16Array(oe);j=new DataView(z.buffer);for(let nt=0;nt<ne;++nt){w[d.idx[nt]].decoded=!0;let Lt=w[d.idx[nt]].type;if(w[nt].type==2)for(let lt=0;lt<$;++lt){let Et=Dt[nt][lt];for(let pt=0;pt<oe;++pt)bt[pt]=j.getUint16(Et+pt*2*Lt,!0);for(let pt=0;pt<oe;++pt)j.setFloat32(Et+pt*2*Lt,V(bt[pt]),!0)}}}function We(d,b,w){let D,L=1;for(;L<64;)D=b[d.value],D==65280?L=64:D>>8==255?L+=D&255:(w[L]=D,L++),d.value++}function Ue(d,b){b[0]=V(d[0]),b[1]=V(d[1]),b[2]=V(d[5]),b[3]=V(d[6]),b[4]=V(d[14]),b[5]=V(d[15]),b[6]=V(d[27]),b[7]=V(d[28]),b[8]=V(d[2]),b[9]=V(d[4]),b[10]=V(d[7]),b[11]=V(d[13]),b[12]=V(d[16]),b[13]=V(d[26]),b[14]=V(d[29]),b[15]=V(d[42]),b[16]=V(d[3]),b[17]=V(d[8]),b[18]=V(d[12]),b[19]=V(d[17]),b[20]=V(d[25]),b[21]=V(d[30]),b[22]=V(d[41]),b[23]=V(d[43]),b[24]=V(d[9]),b[25]=V(d[11]),b[26]=V(d[18]),b[27]=V(d[24]),b[28]=V(d[31]),b[29]=V(d[40]),b[30]=V(d[44]),b[31]=V(d[53]),b[32]=V(d[10]),b[33]=V(d[19]),b[34]=V(d[23]),b[35]=V(d[32]),b[36]=V(d[39]),b[37]=V(d[45]),b[38]=V(d[52]),b[39]=V(d[54]),b[40]=V(d[20]),b[41]=V(d[22]),b[42]=V(d[33]),b[43]=V(d[38]),b[44]=V(d[46]),b[45]=V(d[51]),b[46]=V(d[55]),b[47]=V(d[60]),b[48]=V(d[21]),b[49]=V(d[34]),b[50]=V(d[37]),b[51]=V(d[47]),b[52]=V(d[50]),b[53]=V(d[56]),b[54]=V(d[59]),b[55]=V(d[61]),b[56]=V(d[35]),b[57]=V(d[36]),b[58]=V(d[48]),b[59]=V(d[49]),b[60]=V(d[57]),b[61]=V(d[58]),b[62]=V(d[62]),b[63]=V(d[63])}function Je(d){let b=.5*Math.cos(.7853975),w=.5*Math.cos(3.14159/16),D=.5*Math.cos(3.14159/8),L=.5*Math.cos(3*3.14159/16),z=.5*Math.cos(5*3.14159/16),j=.5*Math.cos(3*3.14159/8),oe=.5*Math.cos(7*3.14159/16),$=new Array(4),ne=new Array(4),ie=new Array(4),de=new Array(4);for(let Pe=0;Pe<8;++Pe){let De=Pe*8;$[0]=D*d[De+2],$[1]=j*d[De+2],$[2]=D*d[De+6],$[3]=j*d[De+6],ne[0]=w*d[De+1]+L*d[De+3]+z*d[De+5]+oe*d[De+7],ne[1]=L*d[De+1]-oe*d[De+3]-w*d[De+5]-z*d[De+7],ne[2]=z*d[De+1]-w*d[De+3]+oe*d[De+5]+L*d[De+7],ne[3]=oe*d[De+1]-z*d[De+3]+L*d[De+5]-w*d[De+7],ie[0]=b*(d[De+0]+d[De+4]),ie[3]=b*(d[De+0]-d[De+4]),ie[1]=$[0]+$[3],ie[2]=$[1]-$[2],de[0]=ie[0]+ie[1],de[1]=ie[3]+ie[2],de[2]=ie[3]-ie[2],de[3]=ie[0]-ie[1],d[De+0]=de[0]+ne[0],d[De+1]=de[1]+ne[1],d[De+2]=de[2]+ne[2],d[De+3]=de[3]+ne[3],d[De+4]=de[3]-ne[3],d[De+5]=de[2]-ne[2],d[De+6]=de[1]-ne[1],d[De+7]=de[0]-ne[0]}for(let Pe=0;Pe<8;++Pe)$[0]=D*d[16+Pe],$[1]=j*d[16+Pe],$[2]=D*d[48+Pe],$[3]=j*d[48+Pe],ne[0]=w*d[8+Pe]+L*d[24+Pe]+z*d[40+Pe]+oe*d[56+Pe],ne[1]=L*d[8+Pe]-oe*d[24+Pe]-w*d[40+Pe]-z*d[56+Pe],ne[2]=z*d[8+Pe]-w*d[24+Pe]+oe*d[40+Pe]+L*d[56+Pe],ne[3]=oe*d[8+Pe]-z*d[24+Pe]+L*d[40+Pe]-w*d[56+Pe],ie[0]=b*(d[Pe]+d[32+Pe]),ie[3]=b*(d[Pe]-d[32+Pe]),ie[1]=$[0]+$[3],ie[2]=$[1]-$[2],de[0]=ie[0]+ie[1],de[1]=ie[3]+ie[2],de[2]=ie[3]-ie[2],de[3]=ie[0]-ie[1],d[0+Pe]=de[0]+ne[0],d[8+Pe]=de[1]+ne[1],d[16+Pe]=de[2]+ne[2],d[24+Pe]=de[3]+ne[3],d[32+Pe]=de[3]-ne[3],d[40+Pe]=de[2]-ne[2],d[48+Pe]=de[1]-ne[1],d[56+Pe]=de[0]-ne[0]}function Be(d){for(let b=0;b<64;++b){let w=d[0][b],D=d[1][b],L=d[2][b];d[0][b]=w+1.5747*L,d[1][b]=w-.1873*D-.4682*L,d[2][b]=w+1.8556*D}}function U(d,b,w){for(let D=0;D<64;++D)b[w+D]=Oh.toHalfFloat(A(d[D]))}function A(d){return d<=1?Math.sign(d)*Math.pow(Math.abs(d),2.2):Math.sign(d)*Math.pow(y,Math.abs(d)-1)}function Y(d){return new DataView(d.array.buffer,d.offset.value,d.size)}function ce(d){let b=d.viewer.buffer.slice(d.offset.value,d.offset.value+d.size),w=new Uint8Array(Ve(b)),D=new Uint8Array(w.length);return Ae(w),F(w,D),new DataView(D.buffer)}function _e(d){let b=d.array.slice(d.offset.value,d.offset.value+d.size),w=Ma(b),D=new Uint8Array(w.length);return Ae(w),F(w,D),new DataView(D.buffer)}function fe(d){let b=d.viewer,w={value:d.offset.value},D=new Uint16Array(d.columns*d.lines*(d.inputChannels.length*d.type)),L=new Uint8Array(8192),z=0,j=new Array(d.inputChannels.length);for(let ze=0,Oe=d.inputChannels.length;ze<Oe;ze++)j[ze]={},j[ze].start=z,j[ze].end=j[ze].start,j[ze].nx=d.columns,j[ze].ny=d.lines,j[ze].size=d.type,z+=j[ze].nx*j[ze].ny*j[ze].size;let oe=ee(b,w),$=ee(b,w);if($>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(oe<=$)for(let ze=0;ze<$-oe+1;ze++)L[ze+oe]=ge(b,w);let ne=new Uint16Array(65536),ie=S(L,ne),de=Z(b,w);tt(d.array,b,w,de,D,z);for(let ze=0;ze<d.inputChannels.length;++ze){let Oe=j[ze];for(let Le=0;Le<j[ze].size;++Le)qe(D,Oe.start+Le,Oe.nx,Oe.size,Oe.ny,Oe.nx*Oe.size,ie)}ue(ne,D,z);let Pe=0,De=new Uint8Array(D.buffer.byteLength);for(let ze=0;ze<d.lines;ze++)for(let Oe=0;Oe<d.inputChannels.length;Oe++){let Le=j[Oe],Re=Le.nx*Le.size,ot=new Uint8Array(D.buffer,Le.end*2,Re*2);De.set(ot,Pe),Pe+=Re*2,Le.end+=Re}return new DataView(De.buffer)}function Ye(d){let b=d.array.slice(d.offset.value,d.offset.value+d.size),w=Ma(b),D=d.inputChannels.length*d.lines*d.columns*d.totalBytes,L=new ArrayBuffer(D),z=new DataView(L),j=0,oe=0,$=new Array(4);for(let ne=0;ne<d.lines;ne++)for(let ie=0;ie<d.inputChannels.length;ie++){let de=0;switch(d.inputChannels[ie].pixelType){case 1:$[0]=j,$[1]=$[0]+d.columns,j=$[1]+d.columns;for(let De=0;De<d.columns;++De){let ze=w[$[0]++]<<8|w[$[1]++];de+=ze,z.setUint16(oe,de,!0),oe+=2}break;case 2:$[0]=j,$[1]=$[0]+d.columns,$[2]=$[1]+d.columns,j=$[2]+d.columns;for(let De=0;De<d.columns;++De){let ze=w[$[0]++]<<24|w[$[1]++]<<16|w[$[2]++]<<8;de+=ze,z.setUint32(oe,de,!0),oe+=4}break}}return z}function W(d){let b=d.viewer,w={value:d.offset.value},D=new Uint8Array(d.columns*d.lines*(d.inputChannels.length*d.type*2)),L={version:me(b,w),unknownUncompressedSize:me(b,w),unknownCompressedSize:me(b,w),acCompressedSize:me(b,w),dcCompressedSize:me(b,w),rleCompressedSize:me(b,w),rleUncompressedSize:me(b,w),rleRawSize:me(b,w),totalAcUncompressedCount:me(b,w),totalDcUncompressedCount:me(b,w),acCompression:me(b,w)};if(L.version<2)throw new Error("EXRLoader.parse: "+fi.compression+" version "+L.version+" is unsupported");let z=new Array,j=ee(b,w)-2;for(;j>0;){let Oe=K(b.buffer,w),Le=ge(b,w),Re=Le>>2&3,ot=(Le>>4)-1,Qe=new Int8Array([ot])[0],Dt=ge(b,w);z.push({name:Oe,index:Qe,type:Dt,compression:Re}),j-=Oe.length+3}let oe=fi.channels,$=new Array(d.inputChannels.length);for(let Oe=0;Oe<d.inputChannels.length;++Oe){let Le=$[Oe]={},Re=oe[Oe];Le.name=Re.name,Le.compression=0,Le.decoded=!1,Le.type=Re.pixelType,Le.pLinear=Re.pLinear,Le.width=d.columns,Le.height=d.lines}let ne={idx:new Array(3)};for(let Oe=0;Oe<d.inputChannels.length;++Oe){let Le=$[Oe];for(let Re=0;Re<z.length;++Re){let ot=z[Re];Le.name==ot.name&&(Le.compression=ot.compression,ot.index>=0&&(ne.idx[ot.index]=Oe),Le.offset=Oe)}}let ie,de,Pe;if(L.acCompressedSize>0)switch(L.acCompression){case 0:ie=new Uint16Array(L.totalAcUncompressedCount),tt(d.array,b,w,L.acCompressedSize,ie,L.totalAcUncompressedCount);break;case 1:let Oe=d.array.slice(w.value,w.value+L.totalAcUncompressedCount),Le=Ma(Oe);ie=new Uint16Array(Le.buffer),w.value+=L.totalAcUncompressedCount;break}if(L.dcCompressedSize>0){let Oe={array:d.array,offset:w,size:L.dcCompressedSize};de=new Uint16Array(_e(Oe).buffer),w.value+=L.dcCompressedSize}if(L.rleRawSize>0){let Oe=d.array.slice(w.value,w.value+L.rleCompressedSize),Le=Ma(Oe);Pe=Ve(Le.buffer),w.value+=L.rleCompressedSize}let De=0,ze=new Array($.length);for(let Oe=0;Oe<ze.length;++Oe)ze[Oe]=new Array;for(let Oe=0;Oe<d.lines;++Oe)for(let Le=0;Le<$.length;++Le)ze[Le].push(De),De+=$[Le].width*d.type*2;Ee(ne,ze,$,ie,de,D);for(let Oe=0;Oe<$.length;++Oe){let Le=$[Oe];if(!Le.decoded)switch(Le.compression){case 2:let Re=0,ot=0;for(let Qe=0;Qe<d.lines;++Qe){let Dt=ze[Oe][Re];for(let bt=0;bt<Le.width;++bt){for(let nt=0;nt<2*Le.type;++nt)D[Dt++]=Pe[ot+nt*Le.width*Le.height];ot++}Re++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(D.buffer)}function K(d,b){let w=new Uint8Array(d),D=0;for(;w[b.value+D]!=0;)D+=1;let L=new TextDecoder().decode(w.slice(b.value,b.value+D));return b.value=b.value+D+1,L}function ve(d,b,w){let D=new TextDecoder().decode(new Uint8Array(d).slice(b.value,b.value+w));return b.value=b.value+w,D}function J(d,b){let w=ye(d,b),D=Z(d,b);return[w,D]}function he(d,b){let w=Z(d,b),D=Z(d,b);return[w,D]}function ye(d,b){let w=d.getInt32(b.value,!0);return b.value=b.value+4,w}function Z(d,b){let w=d.getUint32(b.value,!0);return b.value=b.value+4,w}function ae(d,b){let w=d[b.value];return b.value=b.value+1,w}function ge(d,b){let w=d.getUint8(b.value);return b.value=b.value+1,w}let me=function(d,b){let w;return"getBigInt64"in DataView.prototype?w=Number(d.getBigInt64(b.value,!0)):w=d.getUint32(b.value+4,!0)+Number(d.getUint32(b.value,!0)<<32),b.value+=8,w};function Se(d,b){let w=d.getFloat32(b.value,!0);return b.value+=4,w}function k(d,b){return Oh.toHalfFloat(Se(d,b))}function V(d){let b=(d&31744)>>10,w=d&1023;return(d>>15?-1:1)*(b?b===31?w?NaN:1/0:Math.pow(2,b-15)*(1+w/1024):6103515625e-14*(w/1024))}function ee(d,b){let w=d.getUint16(b.value,!0);return b.value+=2,w}function pe(d,b){return V(ee(d,b))}function Ce(d,b,w,D){let L=w.value,z=[];for(;w.value<L+D-1;){let j=K(b,w),oe=ye(d,w),$=ge(d,w);w.value+=3;let ne=ye(d,w),ie=ye(d,w);z.push({name:j,pixelType:oe,pLinear:$,xSampling:ne,ySampling:ie})}return w.value+=1,z}function Me(d,b){let w=Se(d,b),D=Se(d,b),L=Se(d,b),z=Se(d,b),j=Se(d,b),oe=Se(d,b),$=Se(d,b),ne=Se(d,b);return{redX:w,redY:D,greenX:L,greenY:z,blueX:j,blueY:oe,whiteX:$,whiteY:ne}}function $e(d,b){let w=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],D=ge(d,b);return w[D]}function vt(d,b){let w=ye(d,b),D=ye(d,b),L=ye(d,b),z=ye(d,b);return{xMin:w,yMin:D,xMax:L,yMax:z}}function kt(d,b){let w=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],D=ge(d,b);return w[D]}function _t(d,b){let w=["ENVMAP_LATLONG","ENVMAP_CUBE"],D=ge(d,b);return w[D]}function En(d,b){let w=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],D=["ROUND_DOWN","ROUND_UP"],L=Z(d,b),z=Z(d,b),j=ge(d,b);return{xSize:L,ySize:z,levelMode:w[j&15],roundingMode:D[j>>4]}}function Wn(d,b){let w=Se(d,b),D=Se(d,b);return[w,D]}function Ta(d,b){let w=Se(d,b),D=Se(d,b),L=Se(d,b);return[w,D,L]}function Aa(d,b,w,D,L){if(D==="string"||D==="stringvector"||D==="iccProfile")return ve(b,w,L);if(D==="chlist")return Ce(d,b,w,L);if(D==="chromaticities")return Me(d,w);if(D==="compression")return $e(d,w);if(D==="box2i")return vt(d,w);if(D==="envmap")return _t(d,w);if(D==="tiledesc")return En(d,w);if(D==="lineOrder")return kt(d,w);if(D==="float")return Se(d,w);if(D==="v2f")return Wn(d,w);if(D==="v3f")return Ta(d,w);if(D==="int")return ye(d,w);if(D==="rational")return J(d,w);if(D==="timecode")return he(d,w);if(D==="preview")return w.value+=L,"skipped";w.value+=L}function ui(d,b){let w=Math.log2(d);return b=="ROUND_DOWN"?Math.floor(w):Math.ceil(w)}function Cr(d,b,w){let D=0;switch(d.levelMode){case"ONE_LEVEL":D=1;break;case"MIPMAP_LEVELS":D=ui(Math.max(b,w),d.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return D}function Pr(d,b,w,D){let L=new Array(d);for(let z=0;z<d;z++){let j=1<<z,oe=b/j|0;D=="ROUND_UP"&&oe*j<b&&(oe+=1);let $=Math.max(oe,1);L[z]=($+w-1)/w|0}return L}function Ra(){let d=this,b=d.offset,w={value:0};for(let D=0;D<d.tileCount;D++){let L=ye(d.viewer,b),z=ye(d.viewer,b);b.value+=8,d.size=Z(d.viewer,b);let j=L*d.blockWidth,oe=z*d.blockHeight;d.columns=j+d.blockWidth>d.width?d.width-j:d.blockWidth,d.lines=oe+d.blockHeight>d.height?d.height-oe:d.blockHeight;let $=d.columns*d.totalBytes,ie=d.size<d.lines*$?d.uncompress(d):Y(d);b.value+=d.size;for(let de=0;de<d.lines;de++){let Pe=de*d.columns*d.totalBytes;for(let De=0;De<d.inputChannels.length;De++){let ze=fi.channels[De].name,Oe=d.channelByteOffsets[ze]*d.columns,Le=d.decodeChannels[ze];if(Le===void 0)continue;w.value=Pe+Oe;let Re=(d.height-(1+oe+de))*d.outLineWidth;for(let ot=0;ot<d.columns;ot++){let Qe=Re+(ot+j)*d.outputChannels+Le;d.byteArray[Qe]=d.getter(ie,w)}}}}}function Rs(){let d=this,b=d.offset,w={value:0};for(let D=0;D<d.height/d.blockHeight;D++){let L=ye(d.viewer,b)-fi.dataWindow.yMin;d.size=Z(d.viewer,b),d.lines=L+d.blockHeight>d.height?d.height-L:d.blockHeight;let z=d.columns*d.totalBytes,oe=d.size<d.lines*z?d.uncompress(d):Y(d);b.value+=d.size;for(let $=0;$<d.blockHeight;$++){let ne=D*d.blockHeight,ie=$+d.scanOrder(ne);if(ie>=d.height)continue;let de=$*z,Pe=(d.height-1-ie)*d.outLineWidth;for(let De=0;De<d.inputChannels.length;De++){let ze=fi.channels[De].name,Oe=d.channelByteOffsets[ze]*d.columns,Le=d.decodeChannels[ze];if(Le!==void 0){w.value=de+Oe;for(let Re=0;Re<d.columns;Re++){let ot=Pe+Re*d.outputChannels+Le;d.byteArray[ot]=d.getter(oe,w)}}}}}}function Ca(d,b,w){let D={};if(d.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");D.version=d.getUint8(4);let L=d.getUint8(5);D.spec={singleTile:!!(L&2),longName:!!(L&4),deepFormat:!!(L&8),multiPart:!!(L&16)},w.value=8;let z=!0;for(;z;){let j=K(b,w);if(j==0)z=!1;else{let oe=K(b,w),$=Z(d,w),ne=Aa(d,b,w,oe,$);ne===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${oe}'.`):D[j]=ne}}if(L&-7)throw console.error("THREE.EXRHeader:",D),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return D}function Cs(d,b,w,D,L){let z={size:0,viewer:b,array:w,offset:D,width:d.dataWindow.xMax-d.dataWindow.xMin+1,height:d.dataWindow.yMax-d.dataWindow.yMin+1,inputChannels:d.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:sn};switch(d.compression){case"NO_COMPRESSION":z.blockHeight=1,z.uncompress=Y;break;case"RLE_COMPRESSION":z.blockHeight=1,z.uncompress=ce;break;case"ZIPS_COMPRESSION":z.blockHeight=1,z.uncompress=_e;break;case"ZIP_COMPRESSION":z.blockHeight=16,z.uncompress=_e;break;case"PIZ_COMPRESSION":z.blockHeight=32,z.uncompress=fe;break;case"PXR24_COMPRESSION":z.blockHeight=16,z.uncompress=Ye;break;case"DWAA_COMPRESSION":z.blockHeight=32,z.uncompress=W;break;case"DWAB_COMPRESSION":z.blockHeight=256,z.uncompress=W;break;default:throw new Error("EXRLoader.parse: "+d.compression+" is unsupported")}let j={};for(let ie of d.channels)switch(ie.name){case"Y":case"R":case"G":case"B":case"A":j[ie.name]=!0,z.type=ie.pixelType}let oe=!1;if(j.R&&j.G&&j.B)oe=!j.A,z.outputChannels=4,z.decodeChannels={R:0,G:1,B:2,A:3};else if(j.Y)z.outputChannels=1,z.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(z.type==1)switch(L){case vn:z.getter=pe;break;case qt:z.getter=ee;break}else if(z.type==2)switch(L){case vn:z.getter=Se;break;case qt:z.getter=k}else throw new Error("EXRLoader.parse: unsupported pixelType "+z.type+" for "+d.compression+".");z.columns=z.width;let $=z.width*z.height*z.outputChannels;switch(L){case vn:z.byteArray=new Float32Array($),oe&&z.byteArray.fill(1,0,$);break;case qt:z.byteArray=new Uint16Array($),oe&&z.byteArray.fill(15360,0,$);break;default:console.error("THREE.EXRLoader: unsupported type: ",L);break}let ne=0;for(let ie of d.channels)z.decodeChannels[ie.name]!==void 0&&(z.channelByteOffsets[ie.name]=ne),ne+=ie.pixelType*2;if(z.totalBytes=ne,z.outLineWidth=z.width*z.outputChannels,d.lineOrder==="INCREASING_Y"?z.scanOrder=ie=>ie:z.scanOrder=ie=>z.height-1-ie,z.outputChannels==4?(z.format=pn,z.colorSpace=sn):(z.format=fa,z.colorSpace=si),d.spec.singleTile){z.blockHeight=d.tiles.ySize,z.blockWidth=d.tiles.xSize;let ie=Cr(d.tiles,z.width,z.height),de=Pr(ie,z.width,d.tiles.xSize,d.tiles.roundingMode),Pe=Pr(ie,z.height,d.tiles.ySize,d.tiles.roundingMode);z.tileCount=de[0]*Pe[0];for(let De=0;De<ie;De++)for(let ze=0;ze<Pe[De];ze++)for(let Oe=0;Oe<de[De];Oe++)me(b,D);z.decode=Ra.bind(z)}else{z.blockWidth=z.width;let ie=Math.ceil(z.height/z.blockHeight);for(let de=0;de<ie;de++)me(b,D);z.decode=Rs.bind(z)}return z}let Ir={value:0},Dr=new DataView(e),gl=new Uint8Array(e),fi=Ca(Dr,e,Ir),Ui=Cs(fi,Dr,gl,Ir,this.type);return Ui.decode(),{header:fi,width:Ui.width,height:Ui.height,data:Ui.byteArray,format:Ui.format,colorSpace:Ui.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(a,o){a.colorSpace=o.colorSpace,a.minFilter=Ht,a.magFilter=Ht,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,r,n,i)}};function ci(s=1){let e=s>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var ws=(s,e=0,t=1)=>Math.min(t,Math.max(e,s)),zn=(s,e,t)=>s+(e-s)*t,Er=s=>s*s*(3-2*s),Bd=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,hi=(s,e,t)=>ws((s-e)/(t-e));function Pt(s,e,t){let n=document.createElement("canvas");n.width=s,n.height=e;let i=n.getContext("2d");return t(i,s,e),n}function At(s,{srgb:e=!0,repeat:t=!1,aniso:n=8}={}){let i=s instanceof jt?s:new Io(s);return e&&(i.colorSpace=Nt),t&&(i.wrapS=i.wrapT=en),i.anisotropy=n,i.needsUpdate=!0,i}function kn(s="rgba(255,255,255,1)",e="rgba(255,255,255,0)",t=128){return At(Pt(t,t,(n,i)=>{let r=n.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);r.addColorStop(0,s),r.addColorStop(1,e),n.fillStyle=r,n.fillRect(0,0,i,i)}))}var b_=new I(0,1,0),al=new I,Nd=new Ft,Od=new I,Fd=new I;function zd(s,e,t=.2,n=t,i=new Ke){al.subVectors(e,s);let r=al.length();return al.normalize(),Nd.setFromUnitVectors(b_,al),Fd.addVectors(s,e).multiplyScalar(.5),Od.set(t,r,n),i.compose(Fd,Nd,Od)}function Pi(s,e){let t=new Ne(e),n=s.attributes.position.count,i=new Float32Array(n*3);for(let r=0;r<n;r++)i[r*3]=t.r,i[r*3+1]=t.g,i[r*3+2]=t.b;return s.setAttribute("color",new Ut(i,3)),s}function Sn(s,e=["position","normal","uv","color"]){let t=s.index?s.toNonIndexed():s;for(let n of Object.keys(t.attributes))e.includes(n)||t.deleteAttribute(n);return e.includes("uv")&&!t.attributes.uv&&t.setAttribute("uv",new Ut(new Float32Array(t.attributes.position.count*2),2)),t}var Ii=()=>new Promise(s=>requestAnimationFrame(()=>s()));function Pn(s,{height:e=2.6,strength:t=.32}={}){return s.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying float vGrimeY;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
{ vec4 gp = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
 gp = instanceMatrix * gp;
#endif
 vGrimeY = (modelMatrix * gp).y; }`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGrimeY;`).replace("#include <map_fragment>",`#include <map_fragment>
 diffuseColor.rgb *= mix(1.0 - ${t.toFixed(3)}, 1.0, smoothstep(0.0, ${e.toFixed(2)}, vGrimeY));`)},s.customProgramCacheKey=()=>"grime"+e+t,s}var Sa=[{p:0,name:"dawn",gain:1},{p:.17,name:"city",gain:1},{p:.56,name:"city",gain:.95},{p:.7,name:"sunset",gain:1},{p:.8,name:"sunset",gain:.8},{p:.9,name:"night",gain:1.5},{p:1,name:"night",gain:1.5}];async function kd(s){let e=new rl,t=[...new Set(Sa.map(c=>c.name))],n={};await Promise.all(t.map(c=>e.loadAsync(`assets/hdri/${c}.exr`).then(h=>{h.minFilter=h.magFilter=Ht,h.generateMipmaps=!1,n[c]=h})));let i=new ji(s),r=new Ki,a=new yt({side:Gt,depthWrite:!1,uniforms:{a:{value:null},b:{value:null},k:{value:0},ga:{value:1},gb:{value:1}},vertexShader:`
      varying vec3 vDir;
      void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform sampler2D a; uniform sampler2D b; uniform float k; uniform float ga; uniform float gb;
      varying vec3 vDir;
      vec2 eq(vec3 d) { return vec2(atan(d.z, d.x) * 0.15915494 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5); }
      void main() {
        vec2 uv = eq(normalize(vDir));
        vec3 c = mix(texture2D(a, uv).rgb * ga, texture2D(b, uv).rgb * gb, k);
        gl_FragColor = vec4(c, 1.0);
      }`});r.add(new Xe(new bn(5,64,32),a));let o=null,l="";return{update(c,h){let u=0;for(;u<Sa.length-2&&c>Sa[u+1].p;)u++;let f=Sa[u],p=Sa[u+1],v=Math.round(Er(hi(c,f.p,p.p))*20)/20,x=`${u}:${v}`;if(x===l)return;l=x,a.uniforms.a.value=n[f.name],a.uniforms.b.value=n[p.name],a.uniforms.ga.value=f.gain,a.uniforms.gb.value=p.gain,a.uniforms.k.value=v;let g=i.fromScene(r,0,.1,20);h.environment=g.texture,o?.dispose(),o=g}}}var Hd={uniforms:{tDiffuse:{value:null},time:{value:0},vignette:{value:.32},grain:{value:.035},ca:{value:.0025},lift:{value:new I(0,0,0)},sat:{value:1.06}},vertexShader:`
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
    }`};var __={plaster:{orm:!0},asphalt:{orm:!0},pavers:{orm:!0},corrugated:{orm:!0},steel:{orm:!0},concrete:{orm:!0},ground:{orm:!0},bark:{orm:!0},wood:{orm:!0}},y_=["curb_col","leaves_col","leaves_nor","louver_col","louver_nor","rail_col"],Zt={};async function Gd(s,e){let t=new is,n=Math.min(16,s.capabilities.getMaxAnisotropy()),i=[],r=(o,l,c)=>i.push(t.loadAsync(`assets/tex/${l}.webp`).then(h=>{h.wrapS=h.wrapT=en,h.anisotropy=n,c&&(h.colorSpace=Nt),Zt[o]=h}));for(let o of Object.keys(__))r(`${o}_col`,`${o}_col`,!0),r(`${o}_nor`,`${o}_nor`,!1),r(`${o}_orm`,`${o}_orm`,!1);for(let o of y_)r(o,o,o.endsWith("_col"));let a=0;await Promise.all(i.map(o=>o.then(()=>e?.(++a/i.length))))}var qh=(s,e,t)=>{if(e===1&&t===1)return s;let n=s.clone();return n.repeat.set(e,t),n.needsUpdate=!0,n};function ht(s,{repeat:e=[1,1],normalScale:t=1,physical:n=!1,...i}={}){let[r,a]=e,o=n?Ct:et,l=qh(Zt[`${s}_orm`],r,a);return new o({map:qh(Zt[`${s}_col`],r,a),normalMap:qh(Zt[`${s}_nor`],r,a),normalScale:new we(t,t),roughnessMap:l,metalnessMap:l,aoMap:l,aoMapIntensity:.9,roughness:1,metalness:1,...i})}function ti(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Rt,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let p=s[f].index;for(let v=0;v<p.count;++v)u.push(p.getX(v)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Vd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let p=[];for(let x=0;x<a[h].length;++x)p.push(a[h][x][f]);let v=Vd(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}return l}function Vd(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Ut(a,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,p=h.count;f<p;f++)for(let v=0;v<t;v++){let x=h.getComponent(f,v);o.setComponent(f+u,v,x)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Yh(s,e){if(e===hd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===da||e===jo){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===da)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var ol=class extends Xe{constructor(e,t={}){super(e),this.isWater=!0;let n=this,i=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,a=t.clipBias!==void 0?t.clipBias:0,o=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new I(.70707,.70707,0),u=new Ne(t.sunColor!==void 0?t.sunColor:16777215),f=new Ne(t.waterColor!==void 0?t.waterColor:8355711),p=t.eye!==void 0?t.eye:new I(0,0,0),v=t.distortionScale!==void 0?t.distortionScale:20,x=t.side!==void 0?t.side:Un,g=t.fog!==void 0?t.fog:!1,m=new jn,E=new I,M=new I,_=new I,N=new Ke,C=new I(0,0,-1),R=new mt,T=new I,y=new I,S=new mt,P=new Ke,B=new Xt,G=new Vt(i,r),X={name:"MirrorShader",uniforms:rn.merge([Ge.fog,Ge.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ke},sunColor:{value:new Ne(8355711)},sunDirection:{value:new I(.70707,.70707,0)},eye:{value:new I},waterColor:{value:new Ne(5592405)}}]),vertexShader:`
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
				}`},re=new yt({name:X.name,uniforms:rn.clone(X.uniforms),vertexShader:X.vertexShader,fragmentShader:X.fragmentShader,lights:!0,side:x,fog:g});re.uniforms.mirrorSampler.value=G.texture,re.uniforms.textureMatrix.value=P,re.uniforms.alpha.value=o,re.uniforms.time.value=l,re.uniforms.normalSampler.value=c,re.uniforms.sunColor.value=u,re.uniforms.waterColor.value=f,re.uniforms.sunDirection.value=h,re.uniforms.distortionScale.value=v,re.uniforms.eye.value=p,n.material=re,n.onBeforeRender=function(O,Q,H){if(M.setFromMatrixPosition(n.matrixWorld),_.setFromMatrixPosition(H.matrixWorld),N.extractRotation(n.matrixWorld),E.set(0,0,1),E.applyMatrix4(N),T.subVectors(M,_),T.dot(E)>0)return;T.reflect(E).negate(),T.add(M),N.extractRotation(H.matrixWorld),C.set(0,0,-1),C.applyMatrix4(N),C.add(_),y.subVectors(M,C),y.reflect(E).negate(),y.add(M),B.position.copy(T),B.up.set(0,1,0),B.up.applyMatrix4(N),B.up.reflect(E),B.lookAt(y),B.far=H.far,B.updateMatrixWorld(),B.projectionMatrix.copy(H.projectionMatrix),P.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),P.multiply(B.projectionMatrix),P.multiply(B.matrixWorldInverse),m.setFromNormalAndCoplanarPoint(E,M),m.applyMatrix4(B.matrixWorldInverse),R.set(m.normal.x,m.normal.y,m.normal.z,m.constant);let q=B.projectionMatrix;S.x=(Math.sign(R.x)+q.elements[8])/q.elements[0],S.y=(Math.sign(R.y)+q.elements[9])/q.elements[5],S.z=-1,S.w=(1+q.elements[10])/q.elements[14],R.multiplyScalar(2/R.dot(S)),q.elements[2]=R.x,q.elements[6]=R.y,q.elements[10]=R.z+1-a,q.elements[14]=R.w,p.setFromMatrixPosition(H.matrixWorld);let se=O.getRenderTarget(),te=O.xr.enabled,Ie=O.shadowMap.autoUpdate;n.visible=!1,O.xr.enabled=!1,O.shadowMap.autoUpdate=!1,O.setRenderTarget(G),O.state.buffers.depth.setMask(!0),O.autoClear===!1&&O.clear(),O.render(Q,B),n.visible=!0,O.xr.enabled=te,O.shadowMap.autoUpdate=Ie,O.setRenderTarget(se);let je=H.viewport;je!==void 0&&O.state.viewport(je)}}};var cs=4.2,Tr=3.2,qd=[["MAA TARA SWEETS","\u09AE\u09BF\u09B7\u09CD\u099F\u09BE\u09A8\u09CD\u09A8 \u09AD\u09BE\u09A3\u09CD\u09A1\u09BE\u09B0","#b3261e","#ffe7a8"],["SHARMA STORES","GROCERY \xB7 DAILY NEEDS","#1f4e8c","#ffffff"],["XEROX \xB7 STD \xB7 ISD","LAMINATION \xB7 PRINTOUT","#f2c200","#1a1a1a"],["NEW MEDICAL HALL","\u0994\u09B7\u09A7\u09BE\u09B2\u09AF\u09BC \xB7 24 HRS","#0f7a4f","#ffffff"],["CHA & TOAST","\u099A\u09BE \xB7 \u099F\u09CB\u09B8\u09CD\u099F \xB7 \u0998\u09C1\u0997\u09A8\u09BF","#6b2f1a","#ffd9a0"],["MOBILE REPAIR","ALL BRANDS \xB7 RECHARGE","#202020","#3fe0ff"],["LAXMI JEWELLERS","HALLMARK GOLD \xB7 SINCE 1972","#7a1630","#f6d27a"],["BOOK DEPOT","\u09AC\u0987 \xB7 STATIONERY","#2c5530","#f3eedb"],["HOTEL BIRIYANI","MUTTON \xB7 CHICKEN \xB7 AC","#d8432f","#ffffff"],["PHOTO STUDIO","PASSPORT PHOTO IN 5 MIN","#3b2a68","#ffffff"],["GUPTA HARDWARE","PAINTS \xB7 SANITARY \xB7 TOOLS","#e86a10","#1a1a1a"],["FRESH JUICE CORNER","MOSAMBI \xB7 ANAR \xB7 SUGARCANE","#2f8f2f","#fff9c4"],["CYBER CAFE","INTERNET \xB7 FORMS \xB7 TICKETS","#0b3d91","#9be7ff"],["DAS TAILORS","LADIES & GENTS \xB7 ALTERATION","#7b5b3a","#fff3dc"],["RATION SHOP","FAIR PRICE \xB7 NO. 14/B","#55606b","#ffffff"],["SEN ELECTRICALS","FANS \xB7 WIRING \xB7 INVERTER","#ffd400","#0d2a6b"]];function M_(){return At(Pt(2048,1024,s=>{qd.forEach(([e,t,n,i],r)=>{let a=r%2*1024,o=Math.floor(r/2)*128,l=s.createLinearGradient(0,o,0,o+128);l.addColorStop(0,n),l.addColorStop(1,Wd(n,-.25)),s.fillStyle=l,s.fillRect(a,o,1024,128),s.strokeStyle=Wd(n,-.45),s.lineWidth=6,s.strokeRect(a+3,o+3,1018,122),s.fillStyle=i,s.textBaseline="middle",s.font='800 66px "Manrope", "Hind Siliguri", sans-serif',s.fillText(e,a+34,o+54),s.font='600 26px "Hind Siliguri", "Manrope", sans-serif',s.globalAlpha=.85,s.fillText(t,a+38,o+104),s.globalAlpha=1;for(let h=0;h<120;h++)s.fillStyle=`rgba(0,0,0,${Math.random()*.08})`,s.fillRect(a+Math.random()*1024,o+Math.random()*60,2+Math.random()*3,30+Math.random()*70);let c=s.createLinearGradient(0,o+90,0,o+128);c.addColorStop(0,"rgba(30,20,10,0)"),c.addColorStop(1,"rgba(30,20,10,0.35)"),s.fillStyle=c,s.fillRect(a,o+90,1024,38)})}))}function Wd(s,e){let t=new Ne(s);return t.offsetHSL(0,0,e*.5),"#"+t.getHexString()}function S_(){return At(Pt(256,256,(s,e,t)=>{let n=s.createLinearGradient(0,0,0,t);n.addColorStop(0,"#ffe2b0"),n.addColorStop(1,"#f2a75c"),s.fillStyle=n,s.fillRect(0,0,e,t);for(let i=0;i<e;i+=2){let r=Math.sin(i*.19)*.5+Math.sin(i*.07+1)*.5;s.fillStyle=`rgba(120,60,20,${.08+r*.08})`,s.fillRect(i,0,2,t)}s.fillStyle="rgba(255,255,240,0.55)",s.fillRect(e*.55,t*.08,e*.35,6),s.fillStyle="rgba(60,40,30,0.5)",s.fillRect(e*.5,t*.3,e*.5,t*.7)}))}function E_(){return At(Pt(512,256,(s,e,t)=>{let n=s.createLinearGradient(0,0,0,t);n.addColorStop(0,"#fff3d6"),n.addColorStop(1,"#c79a62"),s.fillStyle=n,s.fillRect(0,0,e,t);let i=["#a8483c","#c9a43a","#3e6690","#4a7a58","#e8e2d4","#c07a3a","#6a5080","#d9d0bf","#8a8478"];for(let a=0;a<4;a++){let o=18+a*52;s.fillStyle="#6b4a2a",s.fillRect(0,o+40,e,5);let l=4;for(;l<e-8;){let c=8+Math.random()*18,h=16+Math.random()*22;s.fillStyle=i[Math.floor(Math.random()*i.length)],s.fillRect(l,o+40-h,c,h),s.fillStyle="rgba(0,0,0,0.15)",s.fillRect(l+c-2,o+40-h,2,h),l+=c+1.5}}let r=s.createRadialGradient(e/2,t*.3,t*.2,e/2,t*.4,e*.6);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(20,12,4,0.55)"),s.fillStyle=r,s.fillRect(0,0,e,t),s.fillStyle="#4a3020",s.fillRect(0,t-40,e,40),s.fillStyle="rgba(255,255,255,0.08)",s.fillRect(0,t-40,e,3)}))}function w_(){return At(Pt(128,96,(s,e,t)=>{s.fillStyle="#e9e7e0",s.fillRect(0,0,e,t),s.fillStyle="#3a3a3a",s.beginPath(),s.arc(e*.62,t/2,t*.36,0,7),s.fill(),s.strokeStyle="#9a9a9a";for(let n=0;n<6;n++)s.beginPath(),s.arc(e*.62,t/2,t*.06*n,0,7),s.stroke();s.fillStyle="rgba(120,90,60,0.35)",s.fillRect(0,t-10,e,10)}))}var wr=(s,e,t,n=0,i=0,r=0)=>Sn(new ke(s,e,t).translate(n,i,r),["position","normal","uv"]),ll=null;function Yd(){if(ll)return ll;let s={frame:ti([wr(.14,.16,1.62,.07,1,0),wr(.26,.07,1.72,.13,-.95,0),wr(.1,1.9,.1,.05,0,-.71),wr(.1,1.9,.1,.05,0,.71),wr(.05,1.8,.05,.04,0,0),wr(.05,.05,1.32,.04,.45,0)]),pane:new gt(1.34,1.84).rotateY(Math.PI/2),shutter:new ke(.035,1.84,.64),slab:new ke(1,.14,2.8),rail:new ke(.02,1,2.8),railSide:new ke(1,1,.02),cloth:new gt(.5,.75).rotateY(Math.PI/2).translate(0,-.37,0),ac:new ke(.55,.5,.82),pipe:new ft(.06,.06,1,8),shop:new gt(1,1).rotateY(Math.PI/2),awning:(()=>{let r=new ke(1.4,.06,1);return r.rotateZ(-.3),r})()},e=S_(),t=E_(),n=Zt.louver_col,i={frame:Pn(new et({color:16777215,roughness:.55})),paneDark:new Ct({color:790805,roughness:.05,metalness:0,envMapIntensity:1.6,specularIntensity:1,ior:1.52}),paneLit:new Ct({color:2102798,map:e,emissive:16777215,emissiveMap:e,emissiveIntensity:.05,roughness:.08,envMapIntensity:1.2}),shutter:new et({map:n,normalMap:Zt.louver_nor,roughness:.75,color:16777215}),slab:Pn(ht("plaster",{repeat:[.4,.4],vertexColors:!1})),rail:new et({map:Zt.rail_col,alphaTest:.5,side:Ot,metalness:.6,roughness:.5,color:2236962}),cloth:new et({side:Ot,roughness:.95,color:16777215}),ac:new et({map:w_(),roughness:.6}),pipe:new et({color:3816510,roughness:.5,metalness:.2}),shopLit:new et({map:t,emissive:16777215,emissiveMap:t,emissiveIntensity:.35,roughness:.4}),shutterRoll:ht("corrugated",{repeat:[1,1],color:10134440}),awning:new et({roughness:.85,side:Ot,color:16777215})};return ll={geo:s,mats:i},ll}var Xd={};function jd({lit:s=!1,shutters:e=!0,shutterColor:t="#2f5e44",frameColor:n="#f1ede3",open:i=.35}={}){let{geo:r,mats:a}=Yd(),o=new it,l=a.frame.clone();l.color.set(n);let c=new Xe(r.frame,l);c.castShadow=c.receiveShadow=!0,o.add(c);let h=new Xe(r.pane,s?a.paneLit:a.paneDark);if(h.position.x=.012,o.add(h),e){let u=Xd[t]||(Xd[t]=Object.assign(a.shutter.clone(),{}));u.color.set(t);for(let f of[-1,1]){let p=new Xe(r.shutter,u);p.position.set(.06+Math.sin(i)*.3,0,f*1),p.rotation.y=f*i,p.castShadow=!0,o.add(p)}}return o}var cl=class{constructor(e,{lite:t=!1}={}){this.r=e,this.lite=t,this.I={frame:[],paneDark:[],paneLit:[],shutter:[],slab:[],rail:[],railSide:[],cloth:[],ac:[],pipe:[],shopLit:[],shutterRoll:[],awning:[]},this.signGeos=[],this.wallGeos=[]}addBuilding({x:e,z:t,rot:n,side:i,perp:r,along:a,floors:o,tint:l}){let c=this.r,h=n+(i>0?0:Math.PI),u=new Ft().setFromAxisAngle(new I(0,1,0),h),f=new Ft().setFromAxisAngle(new I(0,1,0),n),p=i*(r/2),v=(C,R,T=0)=>new I(p+i*T,R,C).applyQuaternion(f).add(new I(e,0,t)),x=(C,R,T=0,y=[1,1,1],S,P=u)=>{let B=T?P.clone().multiply(new Ft().setFromAxisAngle(new I(0,1,0),T)):P;this.I[C].push({m:new Ke().compose(R,B,new I(...y)),color:S})},g=["#f1ede3","#f1ede3","#2f5e44","#5b3b24","#3b5a7a","#e8e0c8"][Math.floor(c()*6)],m=["#2f5e44","#2d6a5a","#3f6b3a","#5b3b24","#2f4f6f","#7b8b5a"][Math.floor(c()*6)],E=Math.max(1,Math.floor((a-1.2)/3)),M=C=>-a/2+a*(C+.5)/E;for(let C=0;C<=o;C++){let R=cs+C*Tr-.06,T=new ke(.24,C===o?.3:.14,a+.24);T.translate(p+i*.1,R,0),Ar(T),Pi(T,new Ne(l).multiplyScalar(.93)),T.applyQuaternion(f),T.translate(e,0,t),this.wallGeos.push(Sn(T))}let _=c()<.55;for(let C=0;C<o;C++){let R=cs+C*Tr+1.55;for(let T=0;T<E;T++){let y=M(T);x("frame",v(y,R),0,[1,1,1],g);let S=c()<.16;if(S||x(c()<.42?"paneLit":"paneDark",v(y,R,.012)),S)for(let P of[-1,1])x("shutter",v(y+P*.33,R,.07),0,[1,1,1],m);else if(c()<.6)for(let P of[-1,1]){let B=.15+c()*.5;x("shutter",v(y+P*(.7+.3),R,.06+Math.sin(B)*.3),P*B,[1,1,1],m)}if(_&&C>=0&&c()<.5&&!this.lite){let P=R-1.02;x("slab",v(y,P,.5),0,[1,1,1],l),x("rail",v(y,P+.55,.98));for(let G of[-1,1])x("railSide",v(y+G*1.38,P+.55,.5));let B=Math.floor(c()*4);for(let G=0;G<B;G++){let X=["#c2185b","#f9a825","#1565c0","#2e7d32","#ffffff","#6a1b9a","#e65100","#00838f"][Math.floor(c()*8)];x("cloth",v(y-.9+G*.6+c()*.2,P+.55,.8),(c()-.5)*.4,[.8+c()*.5,.9+c()*.6,1],X)}}else c()<.12&&!this.lite&&x("ac",v(y,R-1.3,.3))}}for(let C of[-1,1]){if(c()<.35)continue;let R=new Ft().setFromAxisAngle(new I(0,1,0),n+(C>0?-Math.PI/2:Math.PI/2)),T=(S,P,B=0)=>new I(S,P,C*(a/2+B)).applyQuaternion(f).add(new I(e,0,t)),y=Math.max(0,Math.floor((r-2.5)/3.6));for(let S=0;S<o;S++){let P=cs+S*Tr+1.55;for(let B=0;B<y;B++){let G=-r/2+1.2+(r-2.4)*(B+.5)/y;if(x("frame",T(G,P),0,[1,1,1],g,R),x(c()<.4?"paneLit":"paneDark",T(G,P,.012),0,[1,1,1],void 0,R),c()<.5)for(let X of[-1,1])x("shutter",T(G+X*1,P,.08),X*(.2+c()*.3),[1,1,1],m,R)}}}if(!this.lite){let C=cs+o*Tr;for(let R of[-a/2+.25,a/2-.25])c()<.6&&x("pipe",v(R,C/2,.1),0,[1,C,1])}let N=Math.max(1,Math.round(a/5));for(let C=0;C<N;C++){let R=a/N,T=-a/2+R*(C+.5),y=c()<.6;if(x(y?"shopLit":"shutterRoll",v(T,1.55,.015),0,[1,3.1,R-.5]),C>0){let S=new ke(.3,cs,.45);S.translate(p+i*.12,cs/2,-a/2+R*C),Ar(S),Pi(S,new Ne(l).multiplyScalar(.88)),S.applyQuaternion(f),S.translate(e,0,t),this.wallGeos.push(Sn(S))}if(c()<.75){let S=Math.floor(c()*qd.length),P=new ke(.1,.78,R-.3),B=P.attributes.uv,G=S%2*.5,X=1-Math.floor(S/2)/8,re=X-1/8;for(let O=0;O<6;O++)for(let Q=0;Q<4;Q++){let H=O*4+Q;O===0?B.setXY(H,G+B.getX(H)*.5,re+B.getY(H)/8):B.setXY(H,G+.002,X-.002)}i<0&&P.rotateY(Math.PI),P.translate(p+i*.1,3.72,T),P.applyQuaternion(f),P.translate(e,0,t),this.signGeos.push(Sn(P))}else c()<.6&&x("awning",v(T,3.3,.7),0,[1,1,R-.4],["#b23a2e","#2f6d8a","#d18b2c","#3f7a4c","#8a3f6d"][Math.floor(c()*5)])}}build(e){let t={setNight:()=>{}},{geo:n,mats:i}=Yd(),r=(l,c,h,u=!0)=>{let f=this.I[l];if(!f.length)return null;let p=new cn(c,h,f.length),v=new Ne;return f.forEach((x,g)=>{p.setMatrixAt(g,x.m),x.color&&p.setColorAt(g,v.set(x.color))}),p.castShadow=u,p.receiveShadow=!0,e.add(p),p};r("frame",n.frame,i.frame),r("paneDark",n.pane,i.paneDark,!1),r("paneLit",n.pane,i.paneLit,!1),r("shutter",n.shutter,i.shutter),r("slab",n.slab,i.slab),r("rail",n.rail,i.rail),r("railSide",n.railSide,i.rail),r("cloth",n.cloth,i.cloth),r("ac",n.ac,i.ac),r("pipe",n.pipe,i.pipe),r("shopLit",n.shop,i.shopLit,!1),r("shutterRoll",n.shop,i.shutterRoll,!1),r("awning",n.awning,i.awning);let a=M_(),o=new et({map:a,emissive:16777215,emissiveMap:a,emissiveIntensity:0,roughness:.6});if(this.signGeos.length){let l=new Xe(ti(this.signGeos),o);l.castShadow=!0,l.receiveShadow=!0,e.add(l)}return t.setNight=l=>{i.paneLit.emissiveIntensity=.05+l*1.5,i.shopLit.emissiveIntensity=.3+l*.55,o.emissiveIntensity=l*.55},t}};function Ar(s,e=3){let t=s.attributes.position,n=s.attributes.normal,i=s.attributes.uv;for(let r=0;r<t.count;r++){let a=Math.abs(n.getX(r)),o=Math.abs(n.getY(r)),l,c;o>.5?(l=t.getX(r),c=t.getZ(r)):a>.5?(l=t.getZ(r),c=t.getY(r)):(l=t.getX(r),c=t.getY(r)),i.setXY(r,l/e,c/e)}return s}var hs=4.5,hn=7.4,Bt={zNear:-582,zFar:-716,level:-3.2};function Qd(){let s=[[0,70],[0,20],[3,-40],[-10,-100],[-16,-160],[-2,-220],[18,-280],[20,-340],[2,-400],[-14,-455],[-8,-505],[0,-545],[0,-575],[0,-620],[0,-700],[0,-760],[0,-830]].map(([l,c])=>new I(l,0,c)),e=new aa(s,!1,"centripetal");e.arcLengthDivisions=2e3;let t=e.getLength(),n=1400,i=[];for(let l=0;l<=n;l++)i.push(e.getPointAt(l/n));return{curve:e,length:t,samples:i,uAtZ:l=>{let c=0,h=1/0;for(let u=0;u<=n;u++){let f=Math.abs(i[u].z-l);f<h&&(h=f,c=u)}return c/n},frame:(l,c={})=>(l=Math.min(1,Math.max(0,l)),c.p=e.getPointAt(l,c.p||new I),c.t=e.getTangentAt(l,c.t||new I).setY(0).normalize(),c.r=(c.r||new I).crossVectors(c.t,new I(0,1,0)).normalize(),c),distToRoad:(l,c)=>{let h=1/0;for(let u=0;u<=n;u+=2){let f=i[u].x-l,p=i[u].z-c,v=f*f+p*p;v<h&&(h=v)}return Math.sqrt(h)}}}function T_(){let s=ci(21),e=[];for(let n=0;n<64;n++)e.push({shutter:s()<.38,balcony:s()<.22,lit:s()<.36,warm:s()<.75,blind:s()*.5});let t=n=>Pt(512,512,(i,r)=>{let a=r/8;if(i.fillStyle=n?"#000":"#efe9dd",i.fillRect(0,0,r,r),!n){for(let o=0;o<3e4;o++)i.fillStyle=`rgba(${s()<.5?"90,80,70":"255,255,255"},${s()*.12})`,i.fillRect(s()*r,s()*r,2,2);for(let o=0;o<140;o++)i.fillStyle=`rgba(70,64,55,${.04+s()*.08})`,i.fillRect(s()*r,s()*r,1+s()*3,20+s()*60)}e.forEach((o,l)=>{let c=l%8*a,h=Math.floor(l/8)*a;n||(i.fillStyle="rgba(60,52,44,0.18)",i.fillRect(c,h,a,4));let u=c+a*.3,f=h+a*.24,p=a*.4,v=a*.52;if(n){if(o.lit){let g=i.createLinearGradient(0,f,0,f+v);g.addColorStop(0,o.warm?"#ffd28a":"#cfe6ff"),g.addColorStop(1,o.warm?"#ff9f43":"#7fa9e0"),i.fillStyle=g,i.fillRect(u,f,p,v),i.fillStyle=`rgba(0,0,0,${o.blind})`,i.fillRect(u,f,p,v*.4)}return}i.fillStyle="rgba(70,60,50,0.35)",i.fillRect(u-3,f-3,p+6,v+6);let x=i.createLinearGradient(u,f,u+p,f+v);if(x.addColorStop(0,"#2f3c48"),x.addColorStop(1,"#151b22"),i.fillStyle=x,i.fillRect(u,f,p,v),i.fillStyle="rgba(220,230,240,0.12)",i.fillRect(u+2,f+2,p*.35,v-4),o.shutter){i.fillStyle="#3d6b4f",i.fillRect(u-p*.42,f,p*.38,v),i.fillRect(u+p*1.04,f,p*.38,v),i.fillStyle="rgba(0,0,0,0.25)";for(let g=0;g<7;g++)i.fillRect(u-p*.42,f+g*v/7,p*.38,1.5),i.fillRect(u+p*1.04,f+g*v/7,p*.38,1.5)}if(o.balcony){i.fillStyle="rgba(40,40,40,0.75)",i.fillRect(c+a*.12,f+v+2,a*.76,3);for(let g=0;g<9;g++)i.fillRect(c+a*.12+g*a*.76/8,f+v*.75,1.5,v*.25+4)}})});return{map:At(t(!1),{repeat:!0}),emissive:At(t(!0),{repeat:!0})}}function Zd(s,e,t,n,i=12,r=1){let a=[],o=[],l=[],c=s.samples.length-1,h={},u=0,f=null,p=0;for(let g=0;g<=c;g+=r){s.frame(g/c,h),f&&(u+=f.distanceTo(h.p)),f=h.p.clone();let m=h.p.clone().addScaledVector(h.r,e),E=h.p.clone().addScaledVector(h.r,t);if(a.push(m.x,n,m.z,E.x,n,E.z),o.push(0,u/i,1,u/i),p>0){let M=p*2;l.push(M-2,M,M-1,M-1,M,M+1)}p++}let v=new Rt;v.setAttribute("position",new xt(a,3)),v.setAttribute("uv",new xt(o,2)),v.setIndex(l),v.computeVertexNormals();let x=v.attributes.normal;for(let g=0;g<x.count;g++)x.setXYZ(g,0,1,0);return v}function Kd(s,e,t,n=2){let i=[],r=[],a=[],o=0,l=null,c=s.samples.length-1,h={},u=0;for(let p=0;p<=c;p+=n){s.frame(p/c,h);let v=h.p.clone().addScaledVector(h.r,e);if(l&&(o+=l.distanceTo(v)),l=v,i.push(v.x,0,v.z,v.x,t,v.z),a.push(o/2,0,o/2,1),u>0){let x=u*2;r.push(x-2,x,x-1,x-1,x,x+1)}u++}let f=new Rt;return f.setAttribute("position",new xt(i,3)),f.setAttribute("uv",new xt(a,2)),f.setIndex(r),f.computeVertexNormals(),f}function A_(s,e,t,n){let i=new ke(s,e,t),r=i.attributes.uv,a=24,o=Math.floor(n()*8)/8,l=Math.floor(n()*8)/8;for(let c=0;c<6;c++)for(let h=0;h<4;h++){let u=c*4+h;if(c===2||c===3){r.setXY(u,.003,.997);continue}let f=c<2?t:s;r.setXY(u,r.getX(u)*(f/a)+o,r.getY(u)*(e/a)+l)}return i.translate(0,e/2,0),i}var Jd=["#e9dcc0","#d39a76","#efe6d2","#bccab9","#e2b98b","#cfc7b8","#e8cfc7","#f3eee3","#c9b48f","#a9bfc9","#dcc6a0"];function $d(s,e,t,n){let i=ci(42),r={nightMats:[],update:[]},a=e.samples.length-1,o=(W,K)=>{let ve=Math.abs(K-W),J=ht("ground",{repeat:[3600/10,ve/10]}),he=new Xe(new gt(3600,ve),J);he.rotation.x=-Math.PI/2,he.position.set(0,-.02,(W+K)/2),he.receiveShadow=!0,s.add(he)};o(1500,Bt.zNear),o(Bt.zFar,-2600);let l=(()=>{let K=new Uint8Array(262144),ve=(he,ye)=>Math.sin(he*.11)*.5+Math.sin(ye*.07+he*.03)*.8+Math.sin((he+ye)*.23)*.3+Math.sin(he*.4-ye*.31)*.15;for(let he=0;he<256;he++)for(let ye=0;ye<256;ye++){let Z=2*Math.PI/256,ae=ve((ye+1)*Z*40,he*Z*40)-ve((ye-1)*Z*40,he*Z*40),ge=ve(ye*Z*40,(he+1)*Z*40)-ve(ye*Z*40,(he-1)*Z*40),me=new I(-ae,-ge,2).normalize(),Se=(he*256+ye)*4;K[Se]=(me.x*.5+.5)*255,K[Se+1]=(me.y*.5+.5)*255,K[Se+2]=(me.z*.5+.5)*255,K[Se+3]=255}let J=new Qn(K,256,256);return J.wrapS=J.wrapT=en,J.repeat.set(60,4),J.needsUpdate=!0,J})(),c;n.isMobile?(c=new Xe(new gt(3600,Bt.zNear-Bt.zFar+10),new Ct({color:1914432,roughness:.06,metalness:.1,normalMap:l,normalScale:new we(.35,.35),clearcoat:1,clearcoatRoughness:.1})),r.update.push(W=>{l.offset.set(W*.004,W*.011)})):(l.repeat.set(1,1),c=new ol(new gt(3600,Bt.zNear-Bt.zFar+10),{textureWidth:1024,textureHeight:1024,waterNormals:l,sunDirection:new I(.3,.6,-.7).normalize(),sunColor:16769712,waterColor:862e3,distortionScale:1.6,fog:!0,alpha:1}),c.material.uniforms.size.value=6,r.water=c,r.update.push((W,K)=>{c.material.uniforms.time.value=W*.35,c.visible=!K||K.position.z<-380})),c.rotation.x=-Math.PI/2,c.position.set(0,Bt.level,(Bt.zNear+Bt.zFar)/2),s.add(c);let h=ht("concrete",{repeat:[900,1.2],color:10262154});for(let W of[Bt.zNear,Bt.zFar]){let K=new Xe(new ke(3600,4.5,2),h);K.position.set(0,-2.2,W+(W===Bt.zNear?-1:1)),K.receiveShadow=!0,s.add(K)}let u=ht("asphalt",{side:Ot,normalScale:1.2,envMapIntensity:1.1}),f=new Xe(Zd(e,-hs,hs,0,9,1),u);f.receiveShadow=!0,s.add(f),r.road=u;let p=Pn(ht("pavers",{side:Ot}),{height:.4,strength:0});for(let[W,K]of[[hs,hn],[-hn,-hs]]){let ve=Zd(e,W,K,.16,2.4,1),J=ve.attributes.uv;for(let ye=0;ye<J.count;ye++)J.setX(ye,J.getX(ye)*((hn-hs)/2.4));let he=new Xe(ve,p);he.receiveShadow=!0,s.add(he)}let v=new et({map:Zt.curb_col,roughness:.8,side:Ot}),x=ht("concrete",{repeat:[1,.05],side:Ot});for(let W of[hs,-hs]){let K=new Xe(Kd(e,W,.16,1),v);K.receiveShadow=!0,s.add(K)}for(let W of[hn,-hn])s.add(new Xe(Kd(e,W,.16),x));let g=(W,K=6)=>W<Bt.zNear+K&&W>Bt.zFar-K,m=(W,K,ve)=>t.some(J=>Math.hypot(J.x-W,J.z-K)<J.r+ve),E=T_(),M=[],_=[],N=[],C=[],R=new cl(ci(77),{lite:n.isMobile}),T=(W,K,ve,J,he,ye,Z=hn+.6,ae=0,ge=0)=>{let me=Math.hypot(ve,J)/2;if(g(K,me+4)||m(W,K,me))return!1;let Se=Math.cos(ye),k=Math.sin(ye);for(let[Me,$e]of[[-ve/2,-J/2],[ve/2,-J/2],[-ve/2,J/2],[ve/2,J/2],[0,0]]){let vt=W+Me*Se+$e*k,kt=K-Me*k+$e*Se;if(e.distToRoad(vt,kt)<Z)return!1}let V=Jd[Math.floor(i()*Jd.length)];if(ae){let Me=Ar(new ke(ve,he,J).translate(0,he/2,0));Pi(Me,V),Me.rotateY(ye),Me.translate(W,0,K),C.push(Sn(Me)),R.addBuilding({x:W,z:K,rot:ye,side:ae,perp:ve,along:J,floors:ge,tint:V})}else{let Me=A_(ve,he,J,i);Pi(Me,V),Me.rotateY(ye),Me.translate(W,0,K),M.push(Sn(Me))}let ee=new ke(ve+.3,.6,J+.3);ee.translate(0,he+.3,0),Pi(ee,"#8a8378");let pe=[ee],Ce=1+Math.floor(i()*3);for(let Me=0;Me<Ce;Me++){let $e=new ft(.7,.75,1.5,14);$e.translate((i()-.5)*(ve-2),he+1.35,(i()-.5)*(J-2)),Pi($e,"#141414"),pe.push($e)}if(i()<.4){let Me=new ke(2.5,2.4,2.5);Me.translate((i()-.5)*(ve-3),he+1.2,(i()-.5)*(J-3)),Pi(Me,"#bdb4a3"),pe.push(Me)}for(let Me of pe)Me.rotateY(ye),Me.translate(W,0,K),_.push(Sn(Me,["position","normal","color"]));return!0},y={};for(let W of[-1,1]){let K=4,ve=e.length;for(;K<ve+30;){let J=8+i()*8,he=Math.min(1,K/ve);e.frame(he,y);let ye=9+i()*7,ae=i()<.06?8+Math.floor(i()*5):2+Math.floor(i()*3.2),ge=cs+ae*Tr+.3,me=hn+1.2+ye/2+i()*1.5,Se=y.p.x+y.r.x*W*me,k=y.p.z+y.r.z*W*me,V=Math.atan2(y.t.x,y.t.z);T(Se,k,ye,J,ge,V,hn+.6,W,ae),K+=J+.6+i()*2.5}for(K=0;K<e.length+60;){let J=Math.min(1,K/e.length);e.frame(J,y);let he=12+i()*14,ye=12+i()*14,Z=i()<.18?34+i()*40:12+i()*16,ae=34+i()*30,ge=y.p.x+y.r.x*W*ae,me=y.p.z+y.r.z*W*ae;T(ge,me,he,ye,Z,Math.atan2(y.t.x,y.t.z)+(i()-.5)*.3,20),K+=he+6+i()*10}}for(let W=0;W<70;W++){let K=(i()-.5)*520,ve=Bt.zFar-24-i()*240,J=12+i()*18,he=12+i()*18,ye=i()<.3?40+i()*55:14+i()*22;T(K,ve,J,he,ye,(i()-.5)*.4,14)}for(let W=0;W<36;W++){let K=(i()<.5?-1:1)*(26+i()*240),ve=Bt.zNear+22+i()*70;T(K,ve,12+i()*10,10+i()*10,10+i()*22,(i()-.5)*.2,14)}let S=new et({map:E.map,emissiveMap:E.emissive,emissive:16777215,emissiveIntensity:0,vertexColors:!0,roughness:.88}),P=Pn(ht("plaster",{vertexColors:!0,normalScale:1.4}),{height:3.2,strength:.38}),B=new Xe(ti([...C,...R.wallGeos]),P);B.castShadow=!0,B.receiveShadow=!0,s.add(B);let G=R.build(s),X=new Xe(ti(M),S);X.castShadow=!0,X.receiveShadow=!0,s.add(X);let re=new Xe(ti(_),new et({vertexColors:!0,roughness:.85}));if(re.castShadow=!0,re.receiveShadow=!0,s.add(re),N.length){let W=new Xe(ti(N),new et({vertexColors:!0,roughness:.75,side:Ot}));W.castShadow=!0,s.add(W)}r.windows=S;let O=ti([Sn(new ft(.07,.11,7,10).translate(0,3.5,0),["position","normal","uv"]),Sn(new ke(.07,.07,1.8).translate(0,6.95,.9),["position","normal","uv"]),Sn(new ke(.3,.12,.6).translate(0,6.9,1.85),["position","normal","uv"])]),Q=new ke(.26,.04,.5).translate(0,6.83,1.85),H=[];for(let W=6;W<e.length-10;W+=26){e.frame(W/e.length,y);for(let K of[-1,1]){let ve=hs+1,J=y.p.x+y.r.x*K*ve,he=y.p.z+y.r.z*K*ve;if(m(J,he,1))continue;let ye=Math.atan2(-y.r.x*K,-y.r.z*K);H.push({x:J,z:he,rot:ye,side:K,onBridge:g(he,0)})}}let q=new cn(O,ht("steel",{color:4870230,repeat:[.5,2]}),H.length),se=new et({color:16773840,emissive:16763266,emissiveIntensity:0}),te=new cn(Q,se,H.length),Ie=kn("rgba(255,196,120,0.9)","rgba(255,170,90,0)",128),je=new Wt({map:Ie,transparent:!0,opacity:0,depthWrite:!1,blending:ri}),le=new cn(new gt(8,8).rotateX(-Math.PI/2),je,H.length),be=new Ke,Te=new Ft,xe=new I,Fe=new I(1,1,1);H.forEach((W,K)=>{Te.setFromAxisAngle(new I(0,1,0),W.rot),be.compose(xe.set(W.x,.16,W.z),Te,Fe),q.setMatrixAt(K,be),te.setMatrixAt(K,be);let ve=W.x+Math.sin(W.rot)*1.85,J=W.z+Math.cos(W.rot)*1.85;be.compose(xe.set(ve,.03,J),new Ft,Fe),le.setMatrixAt(K,be)}),q.castShadow=!0,le.renderOrder=2,s.add(q,te,le),r.lampHead=se,r.lampPool=je;let qe=[],Ze={"-1":H.filter(W=>W.side===-1&&!W.onBridge),1:H.filter(W=>W.side===1&&!W.onBridge)};for(let W of["-1","1"]){let K=Ze[W];for(let ve=0;ve<K.length-1;ve++){let J=new I(K[ve].x,6.2,K[ve].z),he=new I(K[ve+1].x,6.2,K[ve+1].z);if(!(J.distanceTo(he)>40))for(let ye=0;ye<3;ye++){let Z=.8+ye*.35+i()*.4,ae=J.clone().setY(J.y-ye*.25);for(let ge=1;ge<=10;ge++){let me=ge/10,Se=J.clone().lerp(he,me);Se.y=6.2-ye*.25-Math.sin(me*Math.PI)*Z,qe.push(ae.x,ae.y,ae.z,Se.x,Se.y,Se.z),ae=Se}}}}let tt=new Rt;tt.setAttribute("position",new xt(qe,3)),s.add(new fr(tt,new Ss({color:1710618,transparent:!0,opacity:.7})));let ue=ci(5),Ae=[0,1,2].map(()=>{let W=[],K=[],ve=new I(0,1,0),J=(ge,me,Se,k)=>{let V=ge.distanceTo(me),ee=new ft(k,Se,V,9,3,!0);ee.translate(0,V/2,0);let pe=ee.attributes.uv;for(let Ce=0;Ce<pe.count;Ce++)pe.setXY(Ce,pe.getX(Ce)*2,pe.getY(Ce)*V);ee.applyQuaternion(new Ft().setFromUnitVectors(ve,me.clone().sub(ge).normalize())),ee.translate(ge.x,ge.y,ge.z),W.push(Sn(ee,["position","normal","uv"]))},he=new I((ue()-.5)*.6,3.2+ue()*1.2,(ue()-.5)*.6);J(new I(0,-.2,0),he,.32,.22);let ye=new I(0,6.4,0),Z=[],ae=5+Math.floor(ue()*3);for(let ge=0;ge<ae;ge++){let me=ge/ae*Math.PI*2+ue()*.6,Se=2.2+ue()*1.8,k=he.clone().add(new I(Math.cos(me)*Se*.5,1.2+ue()*.8,Math.sin(me)*Se*.5)),V=he.clone().add(new I(Math.cos(me)*Se,2.4+ue()*1.6,Math.sin(me)*Se));J(he,k,.16,.11),J(k,V,.11,.05),Z.push(V,k.clone().lerp(V,.5))}Z.push(he.clone().add(new I(0,3.2,0)));for(let ge of Z)for(let me=0;me<9;me++){let Se=1.5+ue()*1.1,k=new gt(Se,Se);k.rotateX(-Math.PI/2+(ue()-.5)*1.6),k.rotateY(ue()*Math.PI*2);let V=new I((ue()-.5)*1.8,(ue()-.3)*1.2,(ue()-.5)*1.8);k.translate(ge.x+V.x,ge.y+V.y,ge.z+V.z);let ee=k.attributes.position,pe=k.attributes.normal;for(let Ce=0;Ce<ee.count;Ce++){let Me=new I(ee.getX(Ce),ee.getY(Ce),ee.getZ(Ce)).sub(ye);Me.y*=1.6,Me.normalize(),pe.setXYZ(Ce,Me.x,Me.y,Me.z)}K.push(Sn(k,["position","normal","uv"]))}return{wood:ti(W),leaves:ti(K)}}),F=[];for(let W=14;W<e.length;W+=9+i()*10){e.frame(W/e.length,y);let K=i()<.5?-1:1,ve=hn-.9,J=y.p.x+y.r.x*K*ve,he=y.p.z+y.r.z*K*ve;g(he,8)||m(J,he,9)||F.push([J,he,.7+i()*.35,i()*6])}for(let W=0;W<260;W++){let K=(i()-.5)*500,ve=60-i()*900;g(ve,10)||m(K,ve,3)||e.distToRoad(K,ve)<12||F.push([K,ve,.9+i()*.6,i()*6])}let Ve=ht("bark",{normalScale:1.5}),Ee=new et({map:Zt.leaves_col,normalMap:Zt.leaves_nor,alphaTest:.45,side:Ot,roughness:.78,color:16777215});Ee.map.wrapS=Ee.map.wrapT=Rn;let We=new ia({depthPacking:Lh,map:Zt.leaves_col,alphaTest:.45}),Ue=new Ne;Ae.forEach((W,K)=>{let ve=F.filter((ye,Z)=>Z%3===K);if(!ve.length)return;let J=new cn(W.wood,Ve,ve.length),he=new cn(W.leaves,Ee,ve.length);he.customDepthMaterial=We,ve.forEach(([ye,Z,ae,ge],me)=>{Te.setFromAxisAngle(new I(0,1,0),ge),be.compose(xe.set(ye,.1,Z),Te,new I(ae,ae,ae)),J.setMatrixAt(me,be),he.setMatrixAt(me,be),he.setColorAt(me,Ue.setHSL(.22+i()*.06,.45+i()*.2,.62+i()*.18))}),J.castShadow=he.castShadow=!0,J.receiveShadow=he.receiveShadow=!0,s.add(J,he)});let Je=new Rt,Be=[];for(let W=0;W<1800;W++){let K=i()*Math.PI*2,ve=Math.acos(i()*.92);Be.push(Math.sin(ve)*Math.cos(K)*1400,Math.cos(ve)*1400,Math.sin(ve)*Math.sin(K)*1400)}Je.setAttribute("position",new xt(Be,3));let U=new Ei({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),A=new Ji(Je,U);s.add(A);let Y=new Xe(new bn(18,32,16),new Wt({color:16774880,fog:!1,transparent:!0,opacity:0})),ce=new Si(new ai({map:kn("rgba(255,240,210,0.55)","rgba(255,240,210,0)"),fog:!1,transparent:!0,opacity:0,depthWrite:!1}));ce.scale.set(220,220,1),s.add(Y,ce);let _e=new is().load("assets/tex/cloud.webp");_e.colorSpace=Nt;let fe=new it,Ye=[];for(let W=0;W<46;W++){let K=new ai({map:_e,transparent:!0,depthWrite:!1,fog:!1,opacity:.55+i()*.35,rotation:i()*6.28});K.userData.base=K.opacity,Ye.push(K);let ve=new Si(K),J=i()*Math.PI*2,he=900+i()*700;ve.position.set(Math.cos(J)*he,140+i()*260,Math.sin(J)*he);let ye=260+i()*420;ve.scale.set(ye*(1.4+i()),ye,1),ve.userData.base=K.opacity,fe.add(ve)}return fe.renderOrder=-1,s.add(fe),r.clouds=fe,r.tintClouds=(W,K)=>Ye.forEach(ve=>{ve.color.copy(W),ve.opacity=ve.userData.base*K}),r.sky={stars:A,starMat:U,moon:Y,moonGlow:ce},r.setNight=W=>{S.emissiveIntensity=W*1.25,G.setNight(W),se.emissiveIntensity=W*6,je.opacity=W*.55,U.opacity=Math.max(0,W-.35)*1.4,Y.material.opacity=Math.max(0,W-.3),ce.material.opacity=Math.max(0,W-.3)*.8},r}function ep(s,e){let t=new it,n=Bt.zNear+6,i=Bt.zFar-6,r=n-i,a=7.2,o=M=>{let _=[[0,7],[.22,30],[.36,21],[.5,15.5],[.64,21],[.78,30],[1,7]];for(let N=0;N<_.length-1;N++)if(M<=_[N+1][0]){let C=(M-_[N][0])/(_[N+1][0]-_[N][0]);return _[N][1]+(_[N+1][1]-_[N][1])*C}return 7},l=26,c=[],h=(M,_,N)=>new I(M,_,n-N*r);for(let M of[-a,a]){for(let _=0;_<l;_++){let N=_/l,C=(_+1)/l;c.push([h(M,.4,N),h(M,.4,C),.55]),c.push([h(M,o(N),N),h(M,o(C),C),.6]),c.push([h(M,.4,N),h(M,o(N),N),.35]),c.push([h(M,.4,N),h(M,o(C),C),.22]),c.push([h(M,o(N),N),h(M,.4,C),.22])}c.push([h(M,.4,1),h(M,o(1),1),.35]);for(let _ of[.22,.78])c.push([h(M,Bt.level-1,_),h(M,o(_)+2,_),1.4])}for(let M=0;M<=l;M++){let _=M/l,N=o(_);N>9&&(c.push([h(-a,N,_),h(a,N,_),.28]),M<l&&c.push([h(-a,N,_),h(a,o((M+1)/l),(M+1)/l),.16]))}let u=ht("steel",{color:6976124,repeat:[1,3],normalScale:1.5}),f=new cn(new ke(1,1,1),u,c.length),p=new Ke;c.forEach(([M,_,N],C)=>f.setMatrixAt(C,zd(M,_,N,N,p))),f.castShadow=!0,f.receiveShadow=!0,t.add(f);let v=new Xe(new ke(a*2+1,1.4,r+2),ht("steel",{color:5264988,repeat:[2,20]}));v.position.set(0,-.72,n-r/2),v.receiveShadow=!0,t.add(v);for(let M of[.22,.78]){let _=new Xe(new ke(a*2+6,4,7),ht("concrete",{repeat:[5,1]}));_.position.set(0,Bt.level+.6,n-M*r),t.add(_)}let x=[];for(let M of[-a,a])for(let _=0;_<=120;_++){let N=_/120;x.push(h(M,o(N)+.45,N))}for(let M of[-a-.4,a+.4])for(let _=0;_<=60;_++){let N=_/60;x.push(h(M,.9,N))}let g=new et({color:16770736,emissive:16761963,emissiveIntensity:0}),m=new cn(new bn(.16,8,6),g,x.length);x.forEach((M,_)=>{p.makeTranslation(M.x,M.y,M.z),m.setMatrixAt(_,p)}),t.add(m);let E=new Xe(new gt(22,140),new Wt({map:kn("rgba(255,190,110,0.6)","rgba(255,170,90,0)"),transparent:!0,opacity:0,depthWrite:!1,blending:ri}));return E.rotation.x=-Math.PI/2,E.position.set(0,Bt.level+.05,n-r/2),t.add(E),s.add(t),{group:t,setNight(M){g.emissiveIntensity=.1+M*3.2,E.material.opacity=M*.8}}}var Ea=new I;function Hn(s,e,t,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;Ea.copy(e),Ea[n]=0,Ea.normalize();let c=.5*a/(a+o),h=1-Ea.angleTo(s)/l;return Math.sign(Ea[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Kt=class extends ke{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new I,l=new I,c=new I(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,v=new I,x=.5/i;for(let g=0,m=0;g<h.length;g+=3,m+=2)switch(o.fromArray(h,g),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[g+0]=c.x*Math.sign(o.x)+l.x*r,h[g+1]=c.y*Math.sign(o.y)+l.y*r,h[g+2]=c.z*Math.sign(o.z)+l.z*r,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/p)){case 0:v.set(1,0,0),f[m+0]=Hn(v,l,"z","y",r,n),f[m+1]=1-Hn(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),f[m+0]=1-Hn(v,l,"z","y",r,n),f[m+1]=1-Hn(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),f[m+0]=1-Hn(v,l,"x","z",r,e),f[m+1]=Hn(v,l,"z","x",r,n);break;case 3:v.set(0,-1,0),f[m+0]=1-Hn(v,l,"x","z",r,e),f[m+1]=1-Hn(v,l,"z","x",r,n);break;case 4:v.set(0,0,1),f[m+0]=1-Hn(v,l,"x","y",r,e),f[m+1]=1-Hn(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),f[m+0]=Hn(v,l,"x","y",r,e),f[m+1]=1-Hn(v,l,"y","x",r,t);break}}};var an=1.62;function R_(){let s=new Qi,e=[[2.16,.46],[2.22,.66],[2.16,.88],[1.98,.98],[1.6,1.03],[.85,1.06],[-1.25,1.06],[-1.95,1.03],[-2.16,.96],[-2.22,.78],[-2.18,.52]];s.moveTo(2.16,.46);for(let n=1;n<e.length;n++)s.lineTo(e[n][0],e[n][1]);let t=(n,i,r)=>{let l=Math.asin(.13636363636363635),c=18;for(let h=0;h<=c;h++){let u=Math.PI-l-h/c*(Math.PI-2*l);s.lineTo(n+Math.cos(u)*.44,.36+Math.sin(u)*.44)}};return s.lineTo(-1.79,.42),t(-1.35),s.lineTo(.91,.42),t(1.35),s.lineTo(2.16,.46),s}function tp(s,e,t=.07,n=5){let i=new dr(s,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t*.85,bevelSegments:n,curveSegments:24});return i.translate(0,0,-e/2),i.computeVertexNormals(),i}function np(s,{yMid:e=.78,ky:t=.9,kx:n=.18,lean:i=0}={}){let r=s.attributes.position,a=s.attributes.normal,o=new I;for(let l=0;l<a.count;l++){let c=a.getZ(l);if(Math.abs(c)<.85)continue;let h=r.getX(l),u=r.getY(l);o.set(Math.sign(h)*Math.pow(Math.abs(h)/2.2,3)*n,(u-e)*t+i,Math.sign(c)).normalize(),a.setXYZ(l,o.x,o.y,o.z)}return s}function jh(s,e,t,n=.06,i=0){let r=new I(e[0],e[1],i),a=new I(t[0],t[1],i),o=r.distanceTo(a),l=new Xe(new ke(n,o,n*.9),s);return l.position.addVectors(r,a).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new I(0,1,0),a.clone().sub(r).normalize()),l.castShadow=!0,l}var hl;function C_(){if(hl)return hl;let s=At(Pt(512,128,(n,i,r)=>{n.clearRect(0,0,i,r),n.fillStyle="#1b3f8f",n.font='700 64px "JetBrains Mono", monospace',n.textAlign="center",n.textBaseline="middle",n.fillText("NO REFUSAL",i/2,r/2+4)})),e=At(Pt(512,128,(n,i,r)=>{n.fillStyle="#f6f3ea",n.fillRect(0,0,i,r),n.strokeStyle="#111",n.lineWidth=8,n.strokeRect(6,6,i-12,r-12),n.fillStyle="#111",n.font='700 66px "JetBrains Mono", monospace',n.textAlign="center",n.textBaseline="middle",n.fillText("WB 04 PP 2016",i/2,r/2+4)})),t=kn("rgba(0,0,0,0.85)","rgba(0,0,0,0)",128);return hl={door:s,plate:e,shadow:t},hl}function Zh({lights:s=!0,color:e=15908123}={}){let t=C_(),n=new it,i=new it,r=new it;r.rotation.y=-Math.PI/2,i.add(r),n.add(i);let a=Pn(new Ct({color:e,roughness:.34,metalness:.05,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.2}),{height:.95,strength:.32}),o=new et({color:15330543,metalness:1,roughness:.14}),l=new Ct({color:1845806,metalness:0,roughness:.02,envMapIntensity:1.1,transparent:!0,opacity:.34,specularIntensity:1,ior:1.52,depthWrite:!1}),c=new et({color:2758420,roughness:.45}),h=new et({color:1381135,roughness:.8}),u=new et({color:789517,roughness:.7}),f=new et({color:1315860,roughness:.92}),p=new et({color:16775398,emissive:16773577,emissiveIntensity:.15,roughness:.1,metalness:.2}),v=new et({color:7997962,emissive:16718362,emissiveIntensity:.25,roughness:.2}),x=new et({color:16753178,emissive:16747008,emissiveIntensity:.2}),g=(te,Ie,je=0,le=0,be=0,Te=!0)=>{let xe=new Xe(te,Ie);return xe.position.set(je,le,be),xe.castShadow=Te,xe.receiveShadow=!0,r.add(xe),xe};g(np(tp(R_(),an-.14,.07,6)),a);let m=new Qi;m.moveTo(-1.22,1),m.lineTo(-.95,1.47),m.lineTo(.42,1.49),m.lineTo(.84,1),m.lineTo(-1.22,1),g(np(tp(m,an-.3,.035,3),{yMid:1,ky:.2,kx:.05,lean:.3}),l),g(new Kt(1.5,.08,an-.2,3,.035),a,-.27,1.5,0);let E=(an-.24)/2;for(let te of[-E,E])r.add(jh(a,[.84,1.03],[.42,1.5],.07,te)),r.add(jh(a,[-.22,1.03],[-.22,1.5],.08,te)),r.add(jh(a,[-1.2,1.03],[-.95,1.5],.09,te));for(let te of[-an/2-.004,an/2+.004]){g(new ke(2.1,.022,.012),o,-.2,1.04,te,!1),g(new ke(3.95,.03,.014),o,0,.78,te,!1);for(let je of[.86,-.22,-1.24])g(new ke(.012,.56,.006),u,je,.75,te,!1);for(let je of[.62,-.42])g(new ke(.16,.03,.03),o,je,.95,te+Math.sign(te)*.01,!1);let Ie=new Xe(new gt(.95,.24),new et({map:t.door,transparent:!0,roughness:.4,depthWrite:!1}));Ie.position.set(.28,.6,te+Math.sign(te)*.006),te<0&&(Ie.rotation.y=Math.PI),r.add(Ie),g(new ke(.06,.08,.12),o,.78,1.12,te+Math.sign(te)*.08)}g(new Kt(.16,.15,an+.08,3,.05),o,2.26,.48,0),g(new Kt(.16,.15,an+.06,3,.05),o,-2.25,.5,0),g(new ke(.05,.3,.92),u,2.2,.72,0,!1),g(new Kt(.06,.34,.98,2,.02),o,2.19,.72,0,!1).scale.set(1,1,1);for(let te=0;te<9;te++)g(new ke(.06,.28,.028),o,2.225,.72,-.4+te*.1,!1);let M=new ft(.115,.115,.08,32);M.rotateZ(Math.PI/2);let _=new $i(.12,.02,10,32);_.rotateY(Math.PI/2);for(let te of[-.6,.6])g(M,p,2.17,.76,te,!1),g(_,o,2.2,.76,te,!1),g(new ke(.04,.05,.1),x,2.2,.6,te*1.12,!1),g(new ke(.04,.17,.13),v,-2.2,.82,te*1.02,!1);let N=new et({map:t.plate,roughness:.5}),C=g(new gt(.52,.13),N,2.345,.47,0,!1);C.rotation.y=Math.PI/2;let R=g(new gt(.52,.13),N,-2.34,.66,0,!1);R.rotation.y=-Math.PI/2,g(new ke(3.7,.22,an-.24),u,0,.42,0,!1),g(new ke(2.3,.05,an-.3),h,-.25,.64,0,!1),g(new ke(2.1,.03,an-.34),h,-.27,1.43,0,!1);for(let[te,Ie]of[[.12,-.14],[-.86,-1.12]])g(new Kt(.52,.2,an-.36,3,.06),c,te,.78,0,!1),g(new Kt(.14,.5,an-.36,3,.05),c,Ie,1.07,0,!1).rotation.z=.12;g(new Kt(.34,.22,an-.3,2,.05),h,.72,.98,0,!1);let T=new $i(.19,.018,8,32);T.rotateY(Math.PI/2),g(T,u,.46,1.1,.36,!1).rotation.z=.45,g(new ft(.02,.02,.3,8).rotateZ(Math.PI/2-.45),u,.6,1.04,.36,!1);let y=new et({color:14209728,roughness:.85}),S=new et({color:8015411,roughness:.55});g(new Kt(.26,.5,.4,3,.1),y,.02,1.1,.36,!1),g(new bn(.105,20,14),S,.06,1.45,.36,!1).scale.set(1,1.15,.95),g(new bn(.11,20,10,0,Math.PI*2,0,Math.PI/2),new et({color:1314829,roughness:.9}),.05,1.48,.36,!1);for(let te of[.22,.5])g(new ft(.035,.035,.42,8).rotateZ(Math.PI/2-.5),y,.26,1.16,te,!1);g(new Kt(.14,.16,.1,2,.02),new et({color:6165010,roughness:.45}),.78,1.18,-(an/2)-.02,!0),g(new ke(.015,.1,.07),new et({color:14210248}),.8,1.32,-(an/2)-.02,!1);let P=new et({color:13225168,metalness:1,roughness:.28});for(let te of[-.62,.62]){g(new ft(.018,.018,1.4,10).rotateZ(Math.PI/2),P,-.27,1.64,te);for(let Ie of[-.9,.35])g(new ft(.014,.014,.12,8),P,Ie,1.58,te)}for(let te of[-.85,-.27,.3])g(new ft(.014,.014,1.24,8).rotateX(Math.PI/2),P,te,1.64,0);for(let te of[-E-.04,E+.04])g(new ke(1.5,.02,.02),o,-.27,1.47,te,!1);for(let te of[-.32,.22]){let Ie=g(new ke(.012,.012,.42),u,.86,1.07,te,!1);Ie.rotation.x=.25}g(new ft(.004,.006,.9,6),o,1.5,1.45,-.7,!1).rotation.z=-.25;let B=new ft(.42,.42,an-.12,20,1,!0,Math.PI/2,Math.PI);B.rotateX(Math.PI/2);let G=new et({color:657930,roughness:.95,side:Gt});for(let te of[1.35,-1.35])g(B,G,te,.36,0,!1);let X=[],re=new $i(.245,.095,16,40),O=new ft(.335,.335,.17,40,1,!0);O.rotateX(Math.PI/2);let Q=new ft(.17,.19,.04,32);Q.rotateX(Math.PI/2);let H=new bn(.07,16,8,0,Math.PI*2,0,Math.PI/2);H.rotateX(Math.PI/2);for(let te of[1.35,-1.35])for(let Ie of[-(an/2-.13),an/2-.13]){let je=new it;je.position.set(te,.335,Ie);let le=Math.sign(Ie),be=new Xe(re,f),Te=new Xe(O,f),xe=new Xe(Q,o);xe.position.z=le*.07;let Fe=new Xe(H,o);Fe.position.z=le*.085,Fe.scale.z=le;for(let qe=0;qe<4;qe++){let Ze=new Xe(new ke(.3,.025,.02),u);Ze.rotation.z=qe*Math.PI/4,Ze.position.z=le*.093,je.add(Ze)}[be,Te,xe,Fe].forEach(qe=>{qe.castShadow=!0,je.add(qe)}),r.add(je),X.push(je)}let q=new Xe(new gt(2.4,5.4),new Wt({map:t.shadow,transparent:!0,depthWrite:!1,opacity:.75}));q.rotation.x=-Math.PI/2,q.position.y=.012,q.renderOrder=1,n.add(q);let se=null;if(s){se=new ss(16769712,0,55,.5,.55,1.2),se.position.set(0,.8,2.2);let te=new Tt;te.position.set(0,0,14),n.add(te),se.target=te,n.add(se)}return{root:n,body:i,wheels:X,setNight(te){p.emissiveIntensity=.15+te*5,v.emissiveIntensity=.25+te*3,se&&(se.intensity=te*60)},spin(te){for(let Ie of X)Ie.rotation.z-=te/.335}}}var ul=class extends oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new gu(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=as.extractUrlBase(e);a=as.resolveURL(c,this.path)}else a=as.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new pr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===op){try{a[ut.KHR_BINARY_GLTF]=new vu(e)}catch(u){i&&i(u);return}r=JSON.parse(a[ut.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Eu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case ut.KHR_MATERIALS_UNLIT:a[u]=new eu;break;case ut.KHR_DRACO_MESH_COMPRESSION:a[u]=new xu(r,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:a[u]=new bu;break;case ut.KHR_MESH_QUANTIZATION:a[u]=new _u;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function P_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},$h=class{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ne(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],sn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new gr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new rs(h),c.distance=u;break;case"spot":c=new ss(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Di(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},eu=class{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return Wt}extendParams(e,t,n){let i=[];e.color=new Ne(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],sn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Nt))}return Promise.all(i)}},tu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},nu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ct}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new we(o,o)}return Promise.all(r)}},iu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ct}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},su=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ct}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},ru=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ct}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],sn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Nt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},au=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ct}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},ou=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ct}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(o[0],o[1],o[2],sn),Promise.all(r)}},lu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ct}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},cu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ct}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(o[0],o[1],o[2],sn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Nt)),Promise.all(r)}},hu=class{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ct}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},uu=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ct}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},fu=class{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},du=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},pu=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},mu=class{constructor(e){this.name=ut.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,f,i.mode,i.filter),p})})}else return null}},gu=class{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Gn.TRIANGLES&&c.mode!==Gn.TRIANGLE_STRIP&&c.mode!==Gn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,p=[];for(let v of u){let x=new Ke,g=new I,m=new Ft,E=new I(1,1,1),M=new cn(v.geometry,v.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,_),l.SCALE&&E.fromBufferAttribute(l.SCALE,_),M.setMatrixAt(_,x.compose(g,m,E));for(let _ in l)if(_==="_COLOR_0"){let N=l[_];M.instanceColor=new Ms(N.array,N.itemSize,N.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&v.geometry.setAttribute(_,l[_]);Tt.prototype.copy.call(M,v),this.parser.assignFinalMaterial(M),p.push(M)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},op="glTF",wa=12,ip={JSON:1313821514,BIN:5130562},vu=class{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,wa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==op)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-wa,r=new DataView(e,wa),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===ip.JSON){let c=new Uint8Array(e,wa+a,o);this.content=n.decode(c)}else if(l===ip.BIN){let c=wa+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},xu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Mu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Mu[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],p=Rr[f.componentType];c[u]=p.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(p){for(let v in p.attributes){let x=p.attributes[v],g=l[v];g!==void 0&&(x.normalized=g)}u(p)},o,c,sn,f)})})}},bu=class{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},_u=class{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}},fl=class extends es{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,f=u*u,p=f*u,v=e*c,x=v-c,g=-2*p+3*f,m=p-f,E=1-g,M=m-f+u;for(let _=0;_!==o;_++){let N=a[x+_+o],C=a[x+_+l]*h,R=a[v+_+o],T=a[v+_]*h;r[_]=E*N+M*C+g*R+m*T}return r}},I_=new Ft,yu=class extends fl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return I_.fromArray(r).normalize().toArray(r),r}},Gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Rr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sp={9728:$t,9729:Ht,9984:Th,9985:qr,9986:Zs,9987:Kn},rp={33071:Rn,33648:$r,10497:en},Kh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Mu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},us={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},D_={CUBICSPLINE:void 0,LINEAR:ar,STEP:rr},Jh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function L_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new et({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Un})),s.DefaultMaterial}function Ts(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Di(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function U_(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function N_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function O_(s){let e,t=s.extensions&&s.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Qh(t.attributes):e=s.indices+":"+Qh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Qh(s.targets[n]);return e}function Qh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Su(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function F_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var B_=new Ke,Eu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new P_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new is(this.options.manager):this.textureLoader=new Wo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new pr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ts(r,o,i),Di(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(as.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Kh[i.type],o=Rr[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Ut(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Kh[i.type],c=Rr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0,x,g;if(p&&p!==u){let m=Math.floor(f/p),E="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,M=t.cache.get(E);M||(x=new c(o,m*p,i.count*p/h),M=new hr(x,p/h),t.cache.add(E,M)),g=new ys(M,l,f%p/h,v)}else o===null?x=new c(i.count*l):x=new c(o,f,i.count*l),g=new Ut(x,l,v);if(i.sparse!==void 0){let m=Kh.SCALAR,E=Rr[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,N=new E(a[1],M,i.sparse.count*m),C=new c(a[2],_,i.sparse.count*l);o!==null&&(g=new Ut(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,T=N.length;R<T;R++){let y=N[R];if(g.setX(y,C[R*l]),l>=2&&g.setY(y,C[R*l+1]),l>=3&&g.setZ(y,C[R*l+2]),l>=4&&g.setW(y,C[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=v}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=sp[f.magFilter]||Ht,h.minFilter=sp[f.minFilter]||Kn,h.wrapS=rp[f.wrapS]||en,h.wrapT=rp[f.wrapT]||en,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==$t&&h.minFilter!==Ht,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,p){let v=f;t.isImageBitmapLoader===!0&&(v=function(x){let g=new jt(x);g.needsUpdate=!0,f(g)}),t.load(as.resolveURL(u,r.path),v,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Di(u,a),u.userData.mimeType=a.mimeType||F_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ut.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ei,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ss,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return et}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[ut.KHR_MATERIALS_UNLIT]){let u=i[ut.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ne(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],sn),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Nt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ot);let h=r.alphaMode||Jh.OPAQUE;if(h===Jh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Jh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Wt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new we(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Wt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Wt){let u=r.emissiveFactor;o.emissive=new Ne().setRGB(u[0],u[1],u[2],sn)}return r.emissiveTexture!==void 0&&a!==Wt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Nt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Di(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ts(i,u,r),u})}createUniqueName(e){let t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return ap(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=O_(c),u=i[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=ap(new Rt,c,t),i[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?L_(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,v=h.length;p<v;p++){let x=h[p],g=a[p],m,E=c[p];if(g.mode===Gn.TRIANGLES||g.mode===Gn.TRIANGLE_STRIP||g.mode===Gn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new To(x,E):new Xe(x,E),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Gn.TRIANGLE_STRIP?m.geometry=Yh(m.geometry,jo):g.mode===Gn.TRIANGLE_FAN&&(m.geometry=Yh(m.geometry,da));else if(g.mode===Gn.LINES)m=new fr(x,E);else if(g.mode===Gn.LINE_STRIP)m=new ur(x,E);else if(g.mode===Gn.LINE_LOOP)m=new Po(x,E);else if(g.mode===Gn.POINTS)m=new Ji(x,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&N_(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Di(m,r),g.extensions&&Ts(i,m,g),t.assignFinalMaterial(m),u.push(m)}for(let p=0,v=u.length;p<v;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Ts(i,u[0],r),u[0];let f=new it;r.extensions&&Ts(i,f,r),t.associations.set(f,{meshes:e});for(let p=0,v=u.length;p<v;p++)f.add(u[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(os.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Yi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Di(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let f=new Ke;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ao(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let p=i.channels[u],v=i.samplers[p.sampler],x=p.target,g=x.node,m=i.parameters!==void 0?i.parameters[v.input]:v.input,E=i.parameters!==void 0?i.parameters[v.output]:v.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",E)),c.push(v),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],v=u[2],x=u[3],g=u[4],m=[];for(let E=0,M=f.length;E<M;E++){let _=f[E],N=p[E],C=v[E],R=x[E],T=g[E];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let y=n._createAnimationTracks(_,N,C,R,T);if(y)for(let S=0;S<y.length;S++)m.push(y[S])}return new Ho(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,B_)});for(let p=0,v=u.length;p<v;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new sa:c.length>1?h=new it:c.length===1?h=c[0]:h=new Tt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Di(h,r),r.extensions&&Ts(n,h,r),r.matrix!==void 0){let u=new Ke;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new it;n.name&&(r.name=i.createUniqueName(n.name)),Di(r,n),n.extensions&&Ts(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[f,p]of i.associations)(f instanceof xn||f instanceof jt)&&u.set(f,p);return h.traverse(f=>{let p=i.associations.get(f);p!=null&&u.set(f,p)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];us[r.path]===us.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(us[r.path]){case us.weights:c=wi;break;case us.rotation:c=Ti;break;case us.position:case us.scale:c=Ai;break;default:switch(n.itemSize){case 1:c=wi;break;case 2:case 3:default:c=Ai;break}break}let h=i.interpolation!==void 0?D_[i.interpolation]:ar,u=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let v=new c(l[f]+"."+us[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Su(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Ti?yu:fl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function z_(s,e,t){let n=e.attributes,i=new Mn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){let h=Su(Rr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new I,l=new I;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],p=f.min,v=f.max;if(p!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(v[2]))),f.normalized){let x=Su(Rr[f.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new Cn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function ap(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=Mu[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return ct.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),Di(s,e),z_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?U_(s,e.targets,t):s})}var lp=function(){"use strict";var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function o(m){for(var E=new Uint8Array(m.length),M=0;M<m.length;++M){var _=m.charCodeAt(M);E[M]=_>96?_-97:_>64?_-39:_+4}for(var N=0,M=0;M<m.length;++M)E[N++]=E[M]<60?n[E[M]]:(E[M]-60)*64+E[++M];return E.buffer.slice(0,N)}function l(m,E,M,_,N,C){var R=r.exports.sbrk,T=M+3&-4,y=R(T*_),S=R(N.length),P=new Uint8Array(r.exports.memory.buffer);P.set(N,S);var B=m(y,M,_,S,N.length);if(B==0&&C&&C(y,T,_),E.set(P.subarray(y,y+M*_)),R(y-R(0)),B!=0)throw new Error("Malformed buffer data: "+B)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function p(m){var E={object:new Worker(m),pending:0,requests:{}};return E.object.onmessage=function(M){var _=M.data;E.pending-=_.count,E.requests[_.id][_.action](_.value),delete E.requests[_.id]},E}function v(m){for(var E="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+g.toString(),M=new Blob([E],{type:"text/javascript"}),_=URL.createObjectURL(M),N=0;N<m;++N)u[N]=p(_);URL.revokeObjectURL(_)}function x(m,E,M,_,N){for(var C=u[0],R=1;R<u.length;++R)u[R].pending<C.pending&&(C=u[R]);return new Promise(function(T,y){var S=new Uint8Array(M),P=f++;C.pending+=m,C.requests[P]={resolve:T,reject:y},C.object.postMessage({id:P,count:m,size:E,source:S,mode:_,filter:N},[S.buffer])})}function g(m){a.then(function(){var E=m.data;try{var M=new Uint8Array(E.count*E.size);l(r.exports[E.mode],M,E.count,E.size,E.source,r.exports[E.filter]),self.postMessage({id:E.id,count:E.count,action:"resolve",value:M},[M.buffer])}catch(_){self.postMessage({id:E.id,count:E.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(m){v(m)},decodeVertexBuffer:function(m,E,M,_,N){l(r.exports.meshopt_decodeVertexBuffer,m,E,M,_,r.exports[c[N]])},decodeIndexBuffer:function(m,E,M,_){l(r.exports.meshopt_decodeIndexBuffer,m,E,M,_)},decodeIndexSequence:function(m,E,M,_){l(r.exports.meshopt_decodeIndexSequence,m,E,M,_)},decodeGltfBuffer:function(m,E,M,_,N,C){l(r.exports[h[N]],m,E,M,_,r.exports[c[C]])},decodeGltfBufferAsync:function(m,E,M,_,N){return u.length>0?x(m,E,M,h[_],c[N]):a.then(function(){var C=new Uint8Array(m*E);return l(r.exports[h[_]],C,m,E,M,r.exports[c[N]]),C})}}}();var k_=4.72,H_=new Set(["tire","rimMat","RimB","rotor"]);async function cp(s){let n=(await new ul().setMeshoptDecoder(lp).loadAsync("assets/models/camaro.glb",R=>{R.total&&s?.(R.loaded/R.total)})).scene,i=new it,r=new it;i.add(r),r.add(n);let a=[];n.traverse(R=>{R.isMesh&&a.push(R)});let o=R=>a.filter(T=>T.material?.name===R),l=R=>{let T=new Mn;return R.forEach(y=>T.expandByObject(y)),T};i.updateMatrixWorld(!0);let c=l([n]),h=c.getCenter(new I),u=l(o("Red_glass")).getCenter(new I),f=h.clone().sub(u).setY(0).normalize();n.rotation.y=-Math.atan2(f.x,f.z),i.updateMatrixWorld(!0),c=l([n]);let p=c.getSize(new I),v=k_/Math.max(p.x,p.z);n.scale.multiplyScalar(v),i.updateMatrixWorld(!0),c=l([n]);let x=c.getCenter(new I);n.position.x-=x.x,n.position.z-=x.z,n.position.y-=c.min.y,i.updateMatrixWorld(!0);let g=[];for(let R of o("tire")){let T=l([R]).getCenter(new I),y=new it;y.position.copy(r.worldToLocal(T.clone())),r.add(y),y.updateMatrixWorld(!0),g.push({pivot:y,centre:T})}for(let R of a){if(!H_.has(R.material?.name))continue;let T=l([R]).getCenter(new I),y=null,S=1/0;for(let P of g){let B=P.centre.distanceTo(T);B<S&&(S=B,y=P)}y&&S<.6&&y.pivot.attach(R)}let m=g.length?l([g[0].pivot]).getSize(new I).y/2:.34,E=null,M=null;for(let R of a){R.castShadow=!0,R.receiveShadow=!0;let T=R.material;T&&(T.name==="Windows"&&(T.transmission=0,T.transparent=!0,T.opacity=.38,T.color.set(791576),T.depthWrite=!1,R.castShadow=!1),T.name==="Light_glass"&&(R.castShadow=!1),T.name==="Red_glass"&&(T.transmission=0,T.transparent=!0,T.color.set(9046534),T.opacity=.85,T.emissive=new Ne(16718352),T.emissiveIntensity=.35,M=T,R.castShadow=!1),T.name==="Light"&&(T.emissive=new Ne(16773584),E=T),T.name==="CarPaint"&&(T.envMapIntensity=1.25))}let _=new Xe(new gt(2.3,5.2),new Wt({map:kn("rgba(0,0,0,0.85)","rgba(0,0,0,0)",128),transparent:!0,depthWrite:!1,opacity:.8}));_.rotation.x=-Math.PI/2,_.position.y=.012,_.renderOrder=1,i.add(_);let N=new ss(16769712,0,55,.5,.55,1.2);N.position.set(0,.7,2.3);let C=new Tt;return C.position.set(0,0,14),i.add(N,C),N.target=C,{root:i,body:r,wheels:g.map(R=>R.pivot),setNight(R){E&&(E.emissiveIntensity=R*4),M&&(M.emissiveIntensity=.35+R*3),N.intensity=R*60},spin(R){for(let T of g)T.pivot.rotation.x+=R/m}}}var wu='"Instrument Serif", Georgia, serif',As='"Manrope", system-ui, sans-serif',ni='"JetBrains Mono", ui-monospace, monospace';function hp(s,e,t,n,i){let r=s.frame(t);return e.position.copy(r.p).addScaledVector(r.r,n*i),e.rotation.y=Math.atan2(-r.r.x*n,-r.r.z*n),e}var dt=s=>new et(s);function He(s,e,t=0,n=0,i=0,r){let a=new Xe(s,e);return a.position.set(t,n,i),a.castShadow=!0,a.receiveShadow=!0,r&&r.add(a),a}function un(s,e,t,n=3){return Ar(new ke(s,e,t),n)}function G_(s){for(let e of["map","normalMap","roughnessMap","metalnessMap","aoMap"])s[e]&&(s[e]=s[e].clone(),s[e].center.set(.5,.5),s[e].rotation=Math.PI/2,s[e].needsUpdate=!0);return s}function up(s,e,t,n,i){let r=jd(i);return r.position.set(e,t,n),r.rotation.y=-Math.PI/2,s.add(r),r}function dl(s,e,t){return At(Pt(s,e,t))}function fp(){let s=new it,e=ht("wood",{color:10123866}),t=ht("corrugated",{color:10133668});He(un(3.2,1.1,1.3,1.5),e,0,.55,0,s),He(new ke(3.4,.08,1.5),dt({color:3811868}),0,1.12,0,s);for(let c of[-1.55,1.55])for(let h of[-.6,.6])He(new ft(.04,.04,2.6),e,c,1.3,h,s);let n=He(un(4,.05,2.4,2),t,0,2.6,.2,s);n.rotation.x=.12;let i=He(new ft(.16,.22,.34,20),dt({color:12088115,metalness:.9,roughness:.3}),-.8,1.33,.1,s);He(new ft(.2,.2,.1,16),dt({color:546}),-.8,1.19,.1,s);for(let c=0;c<8;c++)He(new ft(.045,.032,.08,10),dt({color:10506797,roughness:1}),.2+c%4*.13,1.2,-.1+Math.floor(c/4)*.14,s);He(new ke(2.2,.08,.4),e,.4,.5,1.6,s);for(let c of[-.5,1.3])He(new ke(.08,.5,.36),e,c,.25,1.6,s);let r=dl(512,128,(c,h,u)=>{c.fillStyle="#b8321f",c.fillRect(0,0,h,u),c.fillStyle="#ffe9b0",c.font=`700 62px ${As}`,c.textAlign="center",c.textBaseline="middle",c.fillText("CHA  \xB7  \u20B910",h/2,u/2+3)}),a=He(new gt(2.2,.55),dt({map:r,roughness:.7}),0,2.25,.62,s);a.castShadow=!1;let o=kn("rgba(255,255,255,0.55)","rgba(255,255,255,0)"),l=[];for(let c=0;c<10;c++){let h=new Si(new ai({map:o,transparent:!0,depthWrite:!1,opacity:0}));h.userData.o=c/10,s.add(h),l.push(h)}return{group:s,radius:4,update(c){for(let h of l){let u=(c*.25+h.userData.o)%1;h.position.set(i.position.x+Math.sin(u*6+h.userData.o*9)*.15,1.55+u*1.4,i.position.z);let f=.25+u*.7;h.scale.set(f,f,1),h.material.opacity=Math.sin(u*Math.PI)*.22}}}}function dp(){let s=new it,e=ci(101),t=Pn(ht("plaster",{color:15390382,normalScale:1.4}),{height:3,strength:.4}),n=He(un(14,8,8),t,0,4,-6.5,s);He(un(14.5,.45,8.5),ht("concrete",{color:12103324}),0,8.2,-6.5,s),He(un(14.3,.18,.3),t,0,4.95,-2.4,s);let i=He(new gt(6,3.2),G_(ht("corrugated",{color:9213081,repeat:[1.6,3]})),-3,1.6,-2.48,s),r=At(Pt(256,256,(T,y,S)=>{let P=T.createLinearGradient(0,0,0,S);P.addColorStop(0,"#3a2a1c"),P.addColorStop(1,"#120c08"),T.fillStyle=P,T.fillRect(0,0,y,S);let B=T.createRadialGradient(y*.5,S*.15,4,y*.5,S*.15,y*.6);B.addColorStop(0,"rgba(255,230,180,0.9)"),B.addColorStop(1,"rgba(255,200,120,0)"),T.fillStyle=B,T.fillRect(0,0,y,S),T.fillStyle="rgba(160,130,90,0.5)";for(let G=0;G<5;G++)T.fillRect(20+G*46,S*.45,34,S*.4)})),a=dt({map:r,emissive:16777215,emissiveMap:r,emissiveIntensity:.35,roughness:.3});He(new gt(3.4,3),a,3.6,1.5,-2.48,s);for(let[T,y]of[-4.5,0,4.5].entries())up(s,y,6.3,-2.5,{lit:T===1,shutterColor:"#3f5f7a",open:.3+T*.15});let o=dl(1024,160,(T,y,S)=>{T.fillStyle="#1f3b63",T.fillRect(0,0,y,S),T.fillStyle="#f5c518",T.fillRect(0,S-10,y,10),T.fillStyle="#fff",T.font=`800 70px ${As}`,T.textBaseline="middle",T.fillText("INVOICE DESK",36,S/2-4),T.font=`500 30px ${ni}`,T.textAlign="right",T.fillStyle="#c9d6ea",T.fillText("DATA ENTRY \xB7 ERP \xB7 EST. 2016",y-36,S/2-2)});He(new ke(12,1.6,.2),dt({map:o,emissiveMap:o,emissive:16777215,emissiveIntensity:.25}),0,4.1,-2.35,s);let l=[],c=[{s:[.42,.11,.3],c:[16052972,16777215,15525590]},{s:[.5,.32,.36],c:[16777215,15260875,14272688]},{s:[.32,.29,.07],c:[2772879,9382442,3111493,2039583]}];for(let T=-6;T<=6;T++)for(let y=-2;y<=3;y++){let S=T*.55+(e()-.5)*.2,P=y*.5+(e()-.5)*.2,B=Math.max(0,1-Math.hypot(T/6.5,(y-.2)/3.4)),G=0,X=Math.floor(B*16+e()*2);for(let re=0;re<X;re++){let O=e()<.6?0:e()<.6?1:2,Q=c[O],H=Q.s;l.push({k:O,x:S,y:G+H[1]/2,z:P,s:H,rot:(e()-.5)*.4,col:O===0?16777215:Q.c[Math.floor(e()*Q.c.length)]}),G+=H[1]}}let h=At(Pt(128,128,(T,y,S)=>{T.fillStyle="#f4f2ea",T.fillRect(0,0,y,S);for(let P=0;P<S;P+=2)T.fillStyle=`rgba(150,145,130,${.15+Math.random()*.2})`,T.fillRect(0,P,y,1);T.fillStyle="#2c5aa0",T.fillRect(0,S*.35,y,S*.3),T.fillStyle="#fff",T.font="700 18px Manrope, sans-serif",T.fillText("A4 \xB7 75gsm",10,S*.55)})),u=At(Pt(128,128,(T,y,S)=>{T.fillStyle="#b08a5a",T.fillRect(0,0,y,S);for(let P=0;P<900;P++)T.fillStyle=`rgba(${90+Math.random()*60},${60+Math.random()*40},30,0.25)`,T.fillRect(Math.random()*y,Math.random()*S,3,1);T.fillStyle="rgba(200,180,140,0.7)",T.fillRect(y*.42,0,y*.16,S),T.fillStyle="#222",T.font="700 14px JetBrains Mono, monospace",T.fillText("FY 2016-17",8,S-12)})),f=At(Pt(128,128,(T,y,S)=>{T.fillStyle="#ffffff",T.fillRect(0,0,y,S),T.fillStyle="rgba(0,0,0,0.25)",T.fillRect(0,0,y,8),T.fillRect(0,S-8,y,8),T.fillStyle="#f6f1e0",T.fillRect(y*.3,S*.25,y*.4,S*.3),T.beginPath(),T.arc(y/2,S*.78,9,0,7),T.fillStyle="#222",T.fill()})),p={0:[],1:[],2:[]};l.forEach(T=>p[T.k].push(T));let v=new Ke,x=new Ft,g=new Ne;[[0,h,.75],[1,u,.9],[2,f,.45]].forEach(([T,y,S])=>{let P=p[T];if(!P.length)return;let B=new cn(new Kt(1,1,1,2,.03),dt({map:y,roughness:S,color:16777215}),P.length);P.forEach((G,X)=>{x.setFromEuler(new Nn((Math.random()-.5)*.04,G.rot,(Math.random()-.5)*.04)),v.compose(new I(G.x,G.y,G.z),x,new I(...G.s)),B.setMatrixAt(X,v),B.setColorAt(X,g.set(G.col))}),B.castShadow=B.receiveShadow=!0,s.add(B)});let m=Pt(256,192,()=>{}),E=At(m),M=T=>{let y=m.getContext("2d");y.fillStyle="#031a08",y.fillRect(0,0,256,192),y.fillStyle="#39ff6a",y.font=`600 14px ${ni}`,["ERP v4.2  INVOICE ENTRY","------------------------","INV# 2016-0"+(4412+Math.floor(T*3)),"VENDOR  : ______","QTY     : ______","AMOUNT  : ______","GST     : ______","","> F2 SAVE   F3 NEXT","> REPEAT x 10,000"].forEach((P,B)=>y.fillText(P,10,20+B*17)),Math.floor(T*2)%2&&y.fillRect(92,20+9*17-12,9,14);for(let P=0;P<192;P+=3)y.fillStyle="rgba(0,0,0,0.25)",y.fillRect(0,P,256,1);E.needsUpdate=!0};M(0);let _=new it;_.position.set(5.2,0,1.4),_.rotation.y=-.5,s.add(_),He(un(1.6,.06,.8,1.5),ht("wood",{color:8018490}),0,.78,0,_);for(let T of[-.72,.72])for(let y of[-.32,.32])He(new ke(.05,.78,.05),dt({color:4007959}),T,.39,y,_);He(new Kt(.62,.52,.55,3,.05),dt({color:14209211,roughness:.6}),0,1.08,-.05,_),He(new gt(.5,.38),dt({map:E,emissiveMap:E,emissive:16777215,emissiveIntensity:1.4}),0,1.1,.226,_),He(new ke(.55,.04,.2),dt({color:13616814}),0,.83,.25,_);let N=dt({color:16777215,side:Ot,roughness:.7}),C=[];for(let T=0;T<26;T++){let y=He(new gt(.3,.42),N,0,0,0,s);y.castShadow=!0,y.userData={a:e()*6.28,rad:1+e()*3.2,h:2+e()*5,sp:.2+e()*.35,wob:e()*6},C.push(y)}let R=-1;return{group:s,radius:11,center:new I(0,0,-3),update(T,y){if(!y)return;for(let P of C){let B=P.userData,G=B.a+T*B.sp;P.position.set(Math.cos(G)*B.rad,B.h+Math.sin(T*.7+B.wob)*.6,.6+Math.sin(G)*B.rad*.6),P.rotation.set(T*B.sp*2+B.wob,G,Math.sin(T+B.wob))}let S=Math.floor(T*6);S!==R&&(R=S,M(T))}}}function pp(){let s=new it,e=At(Pt(256,256,(f,p)=>{let v=f.createLinearGradient(0,0,0,p);v.addColorStop(0,"#9fbcd0"),v.addColorStop(1,"#5d7d94"),f.fillStyle=v,f.fillRect(0,0,p,p),f.fillStyle="#2a333b";for(let x=0;x<4;x++)f.fillRect(0,x*64,p,5),f.fillRect(x*64,0,3,p)}),{repeat:!0});e.repeat.set(5,18);let t=new Ct({map:e,metalness:.85,roughness:.08,clearcoat:1,envMapIntensity:1.4,emissive:2241348,emissiveIntensity:0}),n=74;He(new ke(20,n,20),t,0,n/2+6,-14,s);let i=At(Pt(512,160,(f,p,v)=>{let x=f.createLinearGradient(0,0,0,v);x.addColorStop(0,"#f6ead2"),x.addColorStop(.5,"#7a6a58"),x.addColorStop(1,"#2a241e"),f.fillStyle=x,f.fillRect(0,0,p,v);for(let g=30;g<p;g+=90){let m=f.createRadialGradient(g,6,2,g,6,60);m.addColorStop(0,"rgba(255,255,255,0.9)"),m.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=m,f.fillRect(g-60,0,120,70)}f.fillStyle="rgba(30,24,18,0.8)",f.fillRect(p*.38,v*.55,p*.24,v*.3),f.fillStyle="rgba(20,20,20,0.9)";for(let g=0;g<=p;g+=p/8)f.fillRect(g-3,0,6,v);f.fillRect(0,v*.18,p,4)})),r=new Ct({map:i,emissive:16777215,emissiveMap:i,emissiveIntensity:.3,roughness:.05,metalness:.1,envMapIntensity:1.4});He(un(24,6,22,4),Pn(ht("concrete",{color:14209734})),0,3,-14,s),He(new gt(16,4.4),r,0,2.4,-2.98,s),He(un(22,.5,2.5,4),ht("concrete",{color:12893616}),0,5.2,-2,s),He(un(16,4,16,2),ht("steel",{color:4870746}),0,n+8,-14,s);let a=dt({color:16722474,emissive:16719904,emissiveIntensity:2});He(new ft(.1,.1,8),dt({color:1911}),0,n+14,-14,s),He(new bn(.35,12,8),a,0,n+18.2,-14,s);let o=Pt(1024,576,()=>{}),l=At(o),c=Array.from({length:12},(f,p)=>.3+Math.abs(Math.sin(p*1.7))*.6),h=f=>{let p=o.getContext("2d");p.fillStyle="#081018",p.fillRect(0,0,1024,576),p.fillStyle="#f5c518",p.font=`700 30px ${ni}`,p.fillText("KPI \xB7 WEEKLY QUALITY REVIEW",40,60),p.fillStyle="#7f93a8",p.font=`500 22px ${ni}`,p.fillText("CENTRUM \xB7 SALES QA \xB7 2018\u20132020",40,96),[["CSAT",(88+Math.sin(f)*2).toFixed(1)+"%"],["CALLS QA",(1240+Math.floor(f*7)%60).toString()],["TREND","\u25B2 12%"]].forEach(([x,g],m)=>{let E=40+m*320;p.fillStyle="#101c28",p.fillRect(E,124,290,120),p.fillStyle="#7f93a8",p.font=`500 20px ${ni}`,p.fillText(x,E+20,158),p.fillStyle="#ffffff",p.font=`400 64px ${wu}`,p.fillText(g,E+20,226)}),c.forEach((x,g)=>{let m=(x+Math.sin(f*1.3+g)*.05)*230;p.fillStyle=g===11?"#f5c518":"#2b6cb0",p.fillRect(40+g*56,540-m,36,m)}),p.strokeStyle="#ff7a3d",p.lineWidth=4,p.beginPath();for(let x=0;x<=30;x++){let g=720+x*9.5,m=500-x*7-Math.sin(x*.8+f*2)*14;x?p.lineTo(g,m):p.moveTo(g,m)}p.stroke(),p.fillStyle="#7f93a8",p.font=`500 18px ${ni}`,p.fillText("A dashboard is an argument.",720,300),l.needsUpdate=!0};h(0),He(un(17,9.8,.5,2),ht("steel",{color:2764339}),0,13,-3.7,s),He(new gt(16.2,9.1),dt({map:l,emissiveMap:l,emissive:16777215,emissiveIntensity:1.15,roughness:.4}),0,13,-3.44,s);let u=-1;return{group:s,radius:16,center:new I(0,0,-14),update(f,p){if(!p)return;let v=Math.floor(f*8);v!==u&&(u=v,h(f)),a.emissiveIntensity=1+Math.max(0,Math.sin(f*3))*4},setNight(f){t.emissiveIntensity=f*.6,r.emissiveIntensity=.3+f*.8}}}function mp(){let s=new it,e=Pn(ht("plaster",{color:15328472,normalScale:1.4}),{height:3,strength:.4});He(un(16,11,10),e,0,5.5,-7,s),He(un(16.5,.5,10.5),ht("concrete",{color:11905944}),0,11.2,-7,s),He(un(16.3,.2,.3),e,0,9.4,-1.9,s);for(let[c,h]of[-5.5,-1.8,1.8,5.5].entries())up(s,h,7.6,-2,{lit:c%2===1,shutterColor:"#2f5e44",open:.25+c%3*.2});let t=Pt(1024,384,(c,h,u)=>{let f=c.createLinearGradient(0,0,0,u);f.addColorStop(0,"#fbfaf5"),f.addColorStop(1,"#dfe9e2"),c.fillStyle=f,c.fillRect(0,0,h,u);for(let g=60;g<h;g+=240){let m=c.createRadialGradient(g+60,6,2,g+60,6,120);m.addColorStop(0,"rgba(255,255,255,0.95)"),m.addColorStop(1,"rgba(255,255,255,0)"),c.fillStyle=m,c.fillRect(g-60,0,240,120)}let p=ci(31),v=["#1f9d6a","#ffffff","#2b6cb0","#e85d4a","#f5c518","#8e5bd1","#f1f1f1","#ff8f3a","#0aa2c0"];for(let g=0;g<4;g++){let m=46+g*84,E=6;for(;E<h-30;){let _=p()<.25,N=_?12+p()*8:16+p()*26,C=_?30+p()*20:24+p()*30,R=v[Math.floor(p()*v.length)],T=c.createLinearGradient(E,0,E+N,0);T.addColorStop(0,R),T.addColorStop(.75,R),T.addColorStop(1,"rgba(0,0,0,0.35)"),c.fillStyle=T,_?(c.beginPath(),c.roundRect(E,m+62-C,N,C,5),c.fill(),c.fillStyle="#ddd",c.fillRect(E+N*.25,m+62-C-6,N*.5,7)):(c.fillRect(E,m+62-C,N,C),c.fillStyle="rgba(255,255,255,0.85)",c.fillRect(E+3,m+62-C*.62,N-6,C*.22),c.fillStyle="rgba(0,0,0,0.5)",c.fillRect(E+4,m+62-C*.55,(N-8)*p(),2)),E+=N+1+p()*2}c.fillStyle="#c9cfd2",c.fillRect(0,m+62,h,7),c.fillStyle="#ffe35a";for(let _=20;_<h;_+=90+p()*40)c.fillRect(_,m+63,26,5);let M=c.createLinearGradient(0,m+69,0,m+86);M.addColorStop(0,"rgba(0,0,0,0.25)"),M.addColorStop(1,"rgba(0,0,0,0)"),c.fillStyle=M,c.fillRect(0,m+69,h,17)}let x=c.createLinearGradient(0,0,h,u);x.addColorStop(.1,"rgba(255,255,255,0)"),x.addColorStop(.18,"rgba(255,255,255,0.22)"),x.addColorStop(.26,"rgba(255,255,255,0)"),c.fillStyle=x,c.fillRect(0,0,h,u)}),n=At(t),i=dt({map:n,emissiveMap:n,emissive:16777215,emissiveIntensity:.7,roughness:.15,metalness:.1});He(new gt(13,4.2),i,0,2.4,-1.98,s);for(let c of[-6.5,-2.2,2.2,6.5])He(new ke(.12,4.4,.12),dt({color:13684944,metalness:.9,roughness:.25}),c,2.3,-1.92,s);let r=dl(1024,140,(c,h,u)=>{c.fillStyle="#0f7a4f",c.fillRect(0,0,h,u),c.fillStyle="#ffffff",c.font=`800 74px ${As}`,c.textBaseline="middle",c.fillText("PHARMACY",40,u/2),c.font=`600 34px ${ni}`,c.textAlign="right",c.fillText("OPEN 24 \xD7 7",h-40,u/2)});He(new ke(15.5,1.5,.3),dt({map:r,emissiveMap:r,emissive:16777215,emissiveIntensity:.5}),0,5.05,-1.85,s);let a=dt({color:1032042,emissive:1695870,emissiveIntensity:1.5,roughness:.3}),o=new it;o.position.set(7.4,6.6,.4),s.add(o),He(new ke(.06,.06,2.6),dt({color:1365}),0,.8,-1.2,o),He(new Kt(.5,1.6,.3,2,.06),a,0,0,0,o),He(new Kt(1.6,.5,.3,2,.06),a,0,0,0,o);let l=new Si(new ai({map:kn("rgba(40,255,140,0.6)","rgba(40,255,140,0)"),transparent:!0,depthWrite:!1,blending:ri}));l.scale.set(5,5,1),o.add(l),He(new ke(2.2,.08,.5),dt({color:3828618}),-4,.62,.3,s);for(let c of[-4.9,-3.1])He(new ke(.06,.6,.45),dt({color:819}),c,.3,.3,s);return{group:s,radius:11,center:new I(0,0,-6),update(c){let h=.75+.25*Math.sin(c*2.2);a.emissiveIntensity=1.2+h*2.2,l.material.opacity=.35+h*.4,o.rotation.y=Math.sin(c*.6)*.25},setNight(c){i.emissiveIntensity=.7+c*1.3}}}function gp(){let s=new it,e=ci(404),t=ht("corrugated",{color:9347762,normalScale:1.4}),n=Pn(ht("concrete",{color:12762288})),i=ht("steel",{color:8226190}),r=ht("steel",{color:12087626,normalScale:1.5}),a=He(un(110,.2,80,4),ht("concrete",{color:10130828}),0,.1,-40,s);a.castShadow=!1;for(let O=-54;O<=54;O+=3)Math.abs(O)<6||He(new ke(.08,2.4,.08),i,O,1.2,-.5,s);for(let O of[.6,1.4,2.2])He(new ke(48,.05,.05),i,-30,O,-.5,s),He(new ke(48,.05,.05),i,30,O,-.5,s);for(let O of[-6.5,6.5])He(un(1.2,6,1.2,2),n,O,3,-.5,s);let o=dl(1024,150,(O,Q,H)=>{O.fillStyle="#121518",O.fillRect(0,0,Q,H),O.fillStyle="#ff7a2a",O.font=`800 62px ${As}`,O.textBaseline="middle",O.fillText("AUTOMATION FLOOR",32,H/2),O.fillStyle="#a7b1ba",O.font=`500 28px ${ni}`,O.textAlign="right",O.fillText("BOTS ON SHIFT \xB7 24/7",Q-32,H/2)});He(new ke(14.2,1.8,.4),dt({map:o,emissiveMap:o,emissive:16777215,emissiveIntensity:.6}),0,6.6,-.5,s);let l=new it;l.position.set(-8,0,-36),s.add(l),He(un(48,18,30,2),t,0,9,0,l);let c=new Qi;c.moveTo(-15.5,0),c.lineTo(0,6),c.lineTo(15.5,0),c.lineTo(-15.5,0);let h=He(new dr(c,{depth:49,bevelEnabled:!1}),ht("corrugated",{color:8226702,repeat:[.5,.5]}),24.5,18,0,l);h.rotation.y=-Math.PI/2;let u=At(Pt(256,256,(O,Q,H)=>{O.fillStyle="#000",O.fillRect(0,0,Q,H);let q=O.createRadialGradient(Q/2,H*.7,4,Q/2,H*.7,Q*.6);q.addColorStop(0,"#fff2c0"),q.addColorStop(.25,"#ffb040"),q.addColorStop(.6,"#c43c08"),q.addColorStop(1,"#100400"),O.fillStyle=q,O.fillRect(0,0,Q,H)})),f=dt({color:328192,emissive:16777215,emissiveMap:u,emissiveIntensity:2.2});He(new gt(10,8),f,-6,4,15.02,l);let p=At(Pt(512,32,(O,Q,H)=>{O.fillStyle="#1a1e22",O.fillRect(0,0,Q,H);for(let q=0;q<Q;q+=16)O.fillStyle=`rgba(150,170,180,${.25+Math.random()*.2})`,O.fillRect(q+2,3,12,H-6)}));He(new gt(40,1.4),dt({map:p,roughness:.2,metalness:.3,emissive:16766880,emissiveMap:p,emissiveIntensity:.15}),0,15,15.02,l);let v=At(Pt(64,256,O=>{O.fillStyle="#c9c3b8",O.fillRect(0,0,64,256);for(let Q=0;Q<3;Q++)O.fillStyle="#b8321f",O.fillRect(0,Q*28,64,14)})),x=[];[[18,-58],[26,-60],[34,-56]].forEach(([O,Q],H)=>{let q=46+H*4;He(new ft(1.3,2.2,q,24),dt({map:v,normalMap:Zt.concrete_nor,roughnessMap:Zt.concrete_orm,roughness:1}),O,q/2,Q,s),x.push(new I(O,q+.5,Q))});let g=new it;g.position.set(32,0,-30),s.add(g),He(new ft(5,6,22,28),r,0,11,0,g),He(new ft(3,5,6,28),i,0,25,0,g),He(new ft(.9,.9,16,16),i,0,36,0,g);for(let O of[0,2.1,4.2]){let Q=He(new ft(.7,.7,26,12),i,Math.cos(O)*7,18,Math.sin(O)*7,g);Q.rotation.z=Math.cos(O)*.25,Q.rotation.x=-Math.sin(O)*.25}for(let O=0;O<5;O++)He(new $i(5.6,.25,8,40),i,0,3+O*4.5,0,g).rotation.x=Math.PI/2;for(let[O,Q]of[[-40,-28],[-40,-42],[-48,-35]])He(new ft(4,4,18,28),dt({color:13620182,metalness:.8,roughness:.32,normalMap:Zt.steel_nor}),O,9,Q,s),He(new Fo(4.1,3,28),dt({color:12172994,metalness:.7,roughness:.35}),O,19.5,Q,s);for(let O=-28;O<=28;O+=7)He(new ke(.5,9,.5),i,O,4.5,-16,s);for(let O of[8.6,9.6])He(new ft(.5,.5,58,14),O>9?r:i,0,O,-16,s).rotation.z=Math.PI/2;let m=new it;m.position.set(0,0,-8),s.add(m),He(new ke(44,.25,2),dt({color:1776928,roughness:.75,normalMap:Zt.asphalt_nor}),0,1.3,0,m);for(let O of[-1,1])He(un(44,.35,.12,2),ht("steel",{color:15774720}),0,1.45,O*1.05,m);for(let O=-21;O<=21;O+=3)for(let Q of[-1,1])He(new ke(.15,1.2,.15),i,O,.6,Q*.9,m);let E=dt({color:2230272,emissive:16727040,emissiveIntensity:5,roughness:.6}),M=new cn(new Kt(1.4,.35,.8,2,.06),E,16);M.castShadow=!0,m.add(M);let _=new rs(16738848,0,26,1.6);_.position.set(0,3,-6),s.add(_);let N=[],C=new Ct({color:16738826,metalness:.2,roughness:.35,clearcoat:.6,clearcoatRoughness:.2}),R=dt({color:2237480,metalness:.6,roughness:.4});for(let[O,Q]of[[-9,0],[9,1.9]]){let H=new it;H.position.set(O,0,-5),s.add(H),He(new ft(.9,1.1,.6,24),R,0,.3,0,H);let q=new it;q.position.y=.6,H.add(q),He(new ft(.7,.8,.9,24),C,0,.45,0,q);let se=new it;se.position.y=1,q.add(se),He(new bn(.5,16,12),R,0,0,0,se),He(new Kt(.55,2.8,.55,2,.12),C,0,1.4,0,se);let te=new it;te.position.y=2.8,se.add(te),He(new bn(.38,16,12),R,0,0,0,te),He(new Kt(.42,2.2,.42,2,.1),C,0,1.1,0,te);let Ie=new it;Ie.position.y=2.2,te.add(Ie),He(new ft(.2,.2,.4,12),R,0,.2,0,Ie);for(let je of[-1,1])He(new ke(.08,.4,.25),R,je*.15,.55,0,Ie);N.push({yaw:q,sh:se,el:te,wr:Ie,ph:Q})}let T=kn("rgba(200,200,200,0.7)","rgba(200,200,200,0)"),y=[];x.forEach((O,Q)=>{for(let H=0;H<12;H++){let q=new Si(new ai({map:T,transparent:!0,depthWrite:!1,color:13617858}));q.userData={top:O,o:H/12+Q*.13,drift:.6+e()*.8},s.add(q),y.push(q)}});let S=140,P=new Rt,B=new Float32Array(S*3),G=[];for(let O=0;O<S;O++)G.push({t:Math.random(),vx:(Math.random()-.5)*4,vy:2+Math.random()*4,vz:2+Math.random()*3});P.setAttribute("position",new Ut(B,3));let X=new Ji(P,new Ei({color:16757575,size:.09,transparent:!0,opacity:.95,blending:ri,depthWrite:!1}));X.position.set(l.position.x-6,1.2,l.position.z+15.2),s.add(X);let re=new Ke;return{group:s,radius:46,center:new I(0,0,-38),update(O,Q){for(let H of y){let q=H.userData,se=(O*.06+q.o)%1;H.position.set(q.top.x+se*22*q.drift,q.top.y+se*18,q.top.z+se*6);let te=3+se*16;H.scale.set(te,te,1),H.material.opacity=Math.sin(Math.min(1,se*1.4)*Math.PI)*.4}if(Q){for(let H=0;H<16;H++){let q=((O*2.2+H*2.75)%44+44)%44-22;re.makeTranslation(q,1.62,0),M.setMatrixAt(H,re)}M.instanceMatrix.needsUpdate=!0;for(let H=0;H<S;H++){let q=G[H],te=(O*.7+q.t)%1*1.2;B[H*3]=q.vx*te,B[H*3+1]=Math.max(0,q.vy*te-4.9*te*te),B[H*3+2]=q.vz*te}P.attributes.position.needsUpdate=!0;for(let H of N){let q=O*.9+H.ph;H.yaw.rotation.y=Math.sin(q)*1.1,H.sh.rotation.z=.35+Math.sin(q*1.3)*.35,H.el.rotation.z=1.25+Math.sin(q*1.3+1)*.35,H.wr.rotation.y=q*2}f.emissiveIntensity=2+Math.sin(O*7)*.25+Math.sin(O*13)*.15}},setNight(O,Q){_.intensity=30+Q*80}}}function vp(s,e){let t=new it,n=Pt(1280,720,(o,l,c)=>{let h=o.createLinearGradient(0,0,l,c);h.addColorStop(0,"#0b0f14"),h.addColorStop(1,"#141c26"),o.fillStyle=h,o.fillRect(0,0,l,c),o.fillStyle="#f5c518",o.fillRect(0,0,14,c),o.font=`400 200px ${wu}`,o.fillStyle="rgba(245,197,24,0.16)",o.textAlign="right",o.fillText("0"+(e+1),l-50,210),o.textAlign="left",o.fillStyle="#f5c518",o.font=`600 28px ${ni}`,o.fillText(s.category.toUpperCase(),70,100),o.fillStyle="#fff",o.font=`400 96px ${wu}`;let u=s.title.split(" "),f="",p=210;for(let m of u)o.measureText(f+m).width>l-200&&(o.fillText(f,70,p),f="",p+=96),f+=m+" ";o.fillText(f,70,p),o.fillStyle="#9fb0c2",o.font=`500 30px ${As}`;let x=((m,E,M)=>{let _="";for(let N of m.split(" "))o.measureText(_+N).width>M&&(o.fillText(_,70,E),_="",E+=42),_+=N+" ";return o.fillText(_,70,E),E})(s.outcome,p+80,l-160),g=70;o.font=`600 24px ${ni}`;for(let m of s.tech){let E=o.measureText(m).width+36;o.strokeStyle="rgba(245,197,24,0.6)",o.lineWidth=2,o.strokeRect(g,x+50,E,48),o.fillStyle="#f5c518",o.fillText(m,g+18,x+83),g+=E+14}}),i=At(n),r=ht("steel",{color:3817542});for(let o of[-2.8,2.8])He(new ke(.3,6,.3),r,o,3,-.2,t);He(new ke(9.2,5.3,.35),r,0,8.2,-.25,t);let a=dt({map:i,emissiveMap:i,emissive:16777215,emissiveIntensity:.9,roughness:.35});He(new gt(8.8,4.95),a,0,8.2,-.06,t);for(let o of[-3,0,3])He(new ke(.5,.15,.4),dt({color:546,emissive:16773840,emissiveIntensity:1}),o,5.4,.5,t);return{group:t,radius:6,setNight(o){a.emissiveIntensity=.9+o*.6}}}function xp(s){let e=new it,t=ci(606),n=(l,c)=>At(Pt(256,256,(h,u)=>{if(h.drawImage(Zt.wood_col.image,0,0,u,u),h.strokeStyle="rgba(70,45,22,0.85)",h.lineWidth=16,h.strokeRect(8,8,u-16,u-16),h.beginPath(),h.moveTo(16,16),h.lineTo(u-16,u-16),h.stroke(),l){h.fillStyle="rgba(20,16,12,0.86)",h.fillRect(30,86,u-60,86),h.fillStyle="#f5c518";let f=40;for(h.font=`800 ${f}px ${As}`;h.measureText(l).width>u-80&&f>18;)f-=2,h.font=`800 ${f}px ${As}`;h.textAlign="center",h.fillText(l,u/2,128),h.fillStyle="#d9cbb3",h.font=`500 15px ${ni}`,h.fillText(c,u/2,156)}})),i=ht("wood",{repeat:[1,1]}),r=1.5,a=[5,4,3],o=0;return a.forEach((l,c)=>{for(let h=0;h<l&&o<s.length;h++,o++){let[u,f]=s[o],p=dt({map:n(u,f),normalMap:Zt.wood_nor,roughness:.85}),v=He(new ke(r,r,r),[i,i,i,i,p,i],(h-(l-1)/2)*(r+.06),r/2+c*r,(t()-.5)*.15,e);v.rotation.y=(t()-.5)*.12}}),He(new ke(5*r+1,.15,r+.6),dt({color:9071170,roughness:1}),0,.07,0,e).position.y=-0,{group:e,radius:6}}var Li=(s,e=document)=>e.querySelector(s),pl=(s,e=document)=>[...e.querySelectorAll(s)],bp=Li("#loader-bar"),_p=Li("#loader-note"),Vn=(s,e)=>{bp&&(bp.style.transform=`scaleX(${s})`),e&&_p&&(_p.textContent=e)};function V_(){try{let s=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&s.getContext("webgl2"))}catch{return!1}}var ml=[{title:"Procurement Audit Automation",category:"Intelligent Automation",tech:["Python","SAP GUI Scripting","SQL"],outcome:"Real-time audit data extraction and validation \u2014 compliance checks that used to take days now run on their own."},{title:"Vendor Analytics Dashboard",category:"Business Intelligence",tech:["Power BI","DAX","PostgreSQL"],outcome:"Vendor performance tracking with anomaly detection, so supply-chain risk shows up before it costs money."},{title:"SAP Reporting Pipeline",category:"Data Engineering",tech:["Python","SAP","Data Warehousing"],outcome:"One unified pipeline that generates and distributes the reports people used to stitch together by hand."},{title:"Document Processing Engine",category:"AI & Data Processing",tech:["Python","OCR","LLM"],outcome:"An OCR + LLM pipeline that turns piles of physical records into clean, structured data."}],W_=[["Python","bots \xB7 scrapers \xB7 ML"],["SAP GUI","scripting"],["Power BI","DAX \xB7 models"],["SQL","Postgres \xB7 MSSQL"],["Power Automate","flows"],["FastAPI","services"],["Django","web apps"],["React","frontends"],["OCR + LLM","documents"],["Selenium","web automation"],["Git","versioning"],["Figma","interfaces"]];async function X_(){if(!V_()){document.documentElement.classList.add("static"),Li("#loader")?.remove();return}let s=matchMedia("(max-width: 760px), (pointer: coarse)").matches,e=matchMedia("(prefers-reduced-motion: reduce)").matches;Vn(.08,"Loading type\u2026"),await Promise.race([Promise.all([document.fonts.load('400 40px "Instrument Serif"'),document.fonts.load('800 40px "Manrope"'),document.fonts.load('600 20px "JetBrains Mono"')]),new Promise(Z=>setTimeout(Z,2500))]).catch(()=>{});let t=Li("#scene"),n=new Eo({canvas:t,antialias:!s,powerPreference:"high-performance"}),i=Math.min(window.devicePixelRatio,s?1.5:1.75);n.setPixelRatio(i),n.setSize(innerWidth,innerHeight),n.toneMapping=ua,n.shadowMap.enabled=!0,n.shadowMap.type=bh;let r=new Ki;r.fog=new wo(15251872,.004);let a=new Xt(s?55:42,innerWidth/innerHeight,.1,3e3),o=new ji(n);r.environment=o.fromScene(new Qo,.04).texture;let l=new pa;l.scale.setScalar(1e4),r.add(l);let c=l.material.uniforms;c.mieDirectionalG.value=.8;let h=new gr(16777215,3);h.castShadow=!0,h.shadow.mapSize.set(s?1024:4096,s?1024:4096);let u=h.shadow.camera;u.left=-55,u.right=55,u.top=55,u.bottom=-55,u.near=1,u.far=400,h.shadow.bias=-4e-4,h.shadow.normalBias=.04,r.add(h,h.target);let f=new Vo(12375807,4934202,.8);r.add(f),Vn(.12,"Mixing paint\u2026");let[p]=await Promise.all([kd(n),Gd(n,Z=>Vn(.12+Z*.2,"Mixing paint\u2026"))]);p.update(0,r),Vn(.34,"Laying the road\u2026"),await Ii();let v=Qd(),x=Z=>v.uAtZ(Z),g=[{id:"intro",u:x(8),creep:.004,hold:.04,cam:{pos:[-4.2,1.5,7.2],look:[1.6,1,.2]},mob:{pos:[-3.5,2.2,9.5],look:[.4,1.2,0]}},{id:"ch1",u:x(-82),side:1,creep:.006,cam:{pos:[-3.2,2.3,-6.5],look:[8,3.4,5]},mob:{pos:[-3.5,3,-9],look:[7,3.5,4]}},{id:"ch2",u:x(-170),side:-1,creep:.006,cam:{pos:[5.2,1.6,-17],look:[-12,10,6]},mob:{pos:[4,1.5,-12],look:[-12,13,7]}},{id:"ch3",u:x(-262),side:1,creep:.006,cam:{pos:[-4.2,2.3,-11.5],look:[9,4.6,3]},mob:{pos:[-3.6,2.6,-9],look:[8,4,4]}},{id:"ch4",u:x(-350),side:-1,creep:.008,hold:.07,cam:{pos:[5,5.5,-13],look:[-30,9,12]},mob:{pos:[6,7,-18],look:[-30,11,8]}},{id:"work",u:x(-430),side:1,creep:.06,hold:.13,cam:{pos:[-2.8,3.2,-8],look:[9,5.5,12]},mob:{pos:[-2.5,3.5,-10],look:[8,6.5,13]}},{id:"tools",u:x(-520),side:-1,creep:.006,cam:{pos:[3.4,2,-5.5],look:[-8,2.6,4]},mob:{pos:[3.8,2.6,-9],look:[-8,2.8,2]}},{id:"contact",u:x((Bt.zNear+Bt.zFar)/2+8),creep:.01,hold:.09,cam:{pos:[42,4.5,44],look:[-4,7,-18]},mob:{pos:[44,6,60],look:[-2,9,-16]}}],m={pos:[0,2.7,-9],look:[0,1.2,8]},E=.055,_=(1-g.reduce((Z,ae)=>Z+(ae.hold??E),0))/(g.length-1),N=0;g.forEach((Z,ae)=>{Z.hold=Z.hold??E,Z.p0=N,Z.p1=N+Z.hold,N=Z.p1+(ae<g.length-1?_:0)}),g[g.length-1].p1=1;function C(Z){for(let ae=0;ae<g.length;ae++){let ge=g[ae];if(Z<=ge.p1||ae===g.length-1){if(Z>=ge.p0){let V=hi(Z,ge.p0,ge.p1);return{i:ae,hold:!0,k:V,u:ge.u-ge.creep/2+ge.creep*V}}let me=g[ae-1],Se=hi(Z,me.p1,ge.p0),k=Bd(Se);return{i:ae-1,hold:!1,k:Se,u:zn(me.u+me.creep/2,ge.u-ge.creep/2,k)}}}}let R=[],T=[],y=(Z,ae,ge,me)=>{hp(v,Z.group,ae,ge,me),r.add(Z.group);let Se=(Z.center||new I).clone().applyEuler(Z.group.rotation).add(Z.group.position);return R.push({x:Se.x,z:Se.z,r:Z.radius}),Z.worldCenter=Se,T.push(Z),Z};Vn(.3,"Raising landmarks\u2026"),await Ii(),y(fp(),g[0].u-.004,1,hn-1.3),y(dp(),g[1].u+.004,1,hn+2.6),y(pp(),g[2].u+.008,-1,hn+1.6),y(mp(),g[3].u+.005,1,hn+1.4),y(gp(),g[4].u+.012,-1,hn+4);let S=g[5],P=ml.map((Z,ae)=>{let ge=y(vp(Z,ae),S.u-S.creep/2+.008+ae*(S.creep+.006)/4,1,hn+.6);return ge.group.rotateY(.55),ge});y(xp(W_),g[6].u+.004,-1,hn+1.6),Vn(.45,"Painting the city\u2026"),await Ii();let B=$d(r,v,R,{isMobile:s});Vn(.65,"Bolting the bridge\u2026"),await Ii();let G=ep(r,v);Vn(.7,"Rolling the Camaro out\u2026");let X;try{X=await cp(Z=>Vn(.7+Z*.08,"Rolling the Camaro out\u2026"))}catch(Z){console.warn("Car model failed, using the Ambassador",Z),X=Zh({lights:!0})}r.add(X.root);let re=[];for(let[Z,ae]of[[-30,1],[-128,-1],[-212,1],[-300,-1],[-470,1],[-548,-1],[-760,1]]){let ge=Zh({lights:!1}),me=v.frame(x(Z));ge.root.position.copy(me.p).addScaledVector(me.r,ae*3.3),ge.root.rotation.y=Math.atan2(me.t.x,me.t.z)+(ae>0?0:Math.PI),r.add(ge.root),re.push(ge)}Vn(.8,"Warming the engine\u2026"),await Ii();let O=null,Q=null,H=null,q=null;if(!s){let Z=innerWidth*i,ae=innerHeight*i,ge=new Vt(Z,ae,{type:qt,samples:4,depthTexture:new Zi(Z,ae)});O=new el(n,ge),O.setPixelRatio(i),O.addPass(new tl(r,a));try{q=new ba(r,a,Z,ae),q.setGBuffer(O.renderTarget1.depthTexture),q.updateGtaoMaterial({radius:1.2,distanceExponent:1.4,thickness:2,scale:1.1,samples:16,distanceFallOff:1}),q.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),q.blendIntensity=.85,O.addPass(q)}catch(me){console.warn("AO disabled",me),q=null}Q=new Mr(new we(innerWidth/2,innerHeight/2),.3,.6,.92),O.addPass(Q),O.addPass(new nl),H=new yr(Hd),O.addPass(H)}let se=Z=>new Ne(Z),te=[{p:0,elev:4,az:120,sun:se("#ffb08a"),si:1.6,sky:se("#a9b6d8"),gnd:se("#4a3a33"),hi:.55,fog:se("#e7b8a0"),fd:.0042,tur:8,ray:2.6,mie:.006,exp:.62,night:.05},{p:.18,elev:22,az:140,sun:se("#ffe2c0"),si:2.6,sky:se("#bcd2f0"),gnd:se("#4d4a3a"),hi:.8,fog:se("#d9d6d2"),fd:.0032,tur:6,ray:1.6,mie:.005,exp:.6,night:0},{p:.36,elev:48,az:170,sun:se("#fff6ea"),si:3.2,sky:se("#c4dcff"),gnd:se("#4f553e"),hi:.95,fog:se("#c8d6e2"),fd:.0021,tur:4,ray:1.2,mie:.004,exp:.55,night:0},{p:.52,elev:18,az:220,sun:se("#ffc684"),si:2.8,sky:se("#c8c4d8"),gnd:se("#55463a"),hi:.75,fog:se("#e4c39f"),fd:.0032,tur:7,ray:2,mie:.006,exp:.6,night:0},{p:.66,elev:6,az:245,sun:se("#ff9a52"),si:2.2,sky:se("#b9a6c8"),gnd:se("#4a3530"),hi:.6,fog:se("#d9946f"),fd:.0036,tur:9,ray:3,mie:.008,exp:.66,night:.15},{p:.78,elev:.5,az:255,sun:se("#ff6a3a"),si:1,sky:se("#7f74a6"),gnd:se("#2e2430"),hi:.45,fog:se("#8a5a63"),fd:.0042,tur:10,ray:3.6,mie:.01,exp:.78,night:.55},{p:.88,elev:-4,az:262,sun:se("#7f8cff"),si:.35,sky:se("#3c4a80"),gnd:se("#151522"),hi:.35,fog:se("#232a48"),fd:.0042,tur:10,ray:1.5,mie:.005,exp:.95,night:.92},{p:1,elev:-9,az:270,sun:se("#9fb2ff"),si:.3,sky:se("#2a3768"),gnd:se("#0e0f18"),hi:.3,fog:se("#141a33"),fd:.0036,tur:10,ray:.6,mie:.004,exp:1,night:1}],Ie={sun:new Ne,sky:new Ne,gnd:new Ne,fog:new Ne};function je(Z){let ae=0;for(;ae<te.length-2&&Z>te[ae+1].p;)ae++;let ge=te[ae],me=te[ae+1],Se=Er(hi(Z,ge.p,me.p));for(let k of["elev","az","si","hi","fd","tur","ray","mie","exp","night"])Ie[k]=zn(ge[k],me[k],Se);for(let k of["sun","sky","gnd","fog"])Ie[k].copy(ge[k]).lerp(me[k],Se);return Ie}let le=new I,be=new Ne,Te=pl(".panel[data-stop]"),xe=pl(".proj"),Fe=Li("#proj-count"),qe=pl(".rail a"),Ze=Li("#progress"),tt=Li("#scroll-hint");qe.forEach(Z=>{Z.addEventListener("click",ae=>{ae.preventDefault();let ge=g[+Z.dataset.stop];Ae(ge.p0+ge.hold*.4)})}),pl("[data-jump]").forEach(Z=>Z.addEventListener("click",ae=>{ae.preventDefault();let ge=g.find(me=>me.id===Z.dataset.jump);ge&&Ae(ge.p0+ge.hold*.4)}));function ue(){return document.documentElement.scrollHeight-innerHeight}function Ae(Z){window.scrollTo({top:Z*ue(),behavior:e?"auto":"smooth"})}function F(Z){g.forEach((Se,k)=>{let V=Te[k];if(!V)return;let ee=k===0?-1:.022,pe=k===g.length-1?-1:.022,Ce=1;ee>0&&(Ce=Math.min(Ce,hi(Z,Se.p0-ee,Se.p0))),pe>0&&(Ce=Math.min(Ce,1-hi(Z,Se.p1,Se.p1+pe))),Ce=ws(Ce),V.style.opacity=Ce.toFixed(3),V.style.transform=`translate3d(0, ${((1-Ce)*(Z<Se.p0?28:-28)).toFixed(1)}px, 0)`,V.style.visibility=Ce<.01?"hidden":"visible",V.classList.toggle("live",Ce>.6)});let ae=hi(Z,S.p0,S.p1),ge=Math.min(ml.length-1,Math.floor(ae*ml.length));xe.forEach((Se,k)=>Se.classList.toggle("on",k===ge)),Fe&&(Fe.textContent=`${ge+1} / ${ml.length}`);let me=0;g.forEach((Se,k)=>{Z>=Se.p0-.03&&(me=k)}),qe.forEach((Se,k)=>Se.classList.toggle("on",k===me)),Ze&&(Ze.style.transform=`scaleX(${Z})`),tt&&(tt.style.opacity=String(1-hi(Z,.005,.03)))}let Ve={},Ee=new I,We=new I,Ue={pos:[0,0,0],look:[0,0,0]},Je=(Z,ae,ge,me=Ue)=>{for(let Se=0;Se<3;Se++)me.pos[Se]=zn(Z.pos[Se],ae.pos[Se],ge),me.look[Se]=zn(Z.look[Se],ae.look[Se],ge);return me},Be=Z=>s?Z.mob:Z.cam;function U(Z){let ae=g[Z.i];if(Z.hold)return Be(ae);let ge=g[Z.i+1],me=Z.k;return me<.4?Je(Be(ae),m,Er(me/.4)):me>.6?Je(m,Be(ge),Er((me-.6)/.4)):m}let A=(Z,ae,ge)=>ge.copy(ae.p).addScaledVector(ae.r,Z[0]).addScaledVector(new I(0,1,0),Z[1]).addScaledVector(ae.t,Z[2]),Y=0,ce=0,_e=g[0].u,fe=0,Ye=()=>{Y=ws(scrollY/Math.max(1,ue()))};addEventListener("scroll",Ye,{passive:!0}),Ye(),ce=Y;let W={x:0,y:0,sx:0,sy:0};addEventListener("pointermove",Z=>{W.x=Z.clientX/innerWidth-.5,W.y=Z.clientY/innerHeight-.5}),addEventListener("resize",()=>{a.aspect=innerWidth/innerHeight,a.fov=innerWidth<760?55:42,a.updateProjectionMatrix(),n.setSize(innerWidth,innerHeight),O?.setSize(innerWidth,innerHeight)});let K=!new URLSearchParams(location.search).has("still"),ve=new vr,J=0,he=0;function ye(){let Z=Math.min(ve.getDelta(),.05),ae=ve.elapsedTime;ce=e?Y:zn(ce,Y,1-Math.exp(-Z*3.2)),Math.abs(ce-Y)<2e-5&&(ce=Y);let ge=C(ce);v.frame(ge.u,Ve);let me=ge.u-_e;_e=ge.u;let Se=me*v.length;fe=zn(fe,Se/Math.max(Z,.001),.1),X.root.position.copy(Ve.p),X.root.rotation.y=Math.atan2(Ve.t.x,Ve.t.z),X.spin(Se),X.body.position.y=Math.sin(ae*31)*.004+Math.min(Math.abs(fe),20)*Math.sin(ae*13)*6e-4,X.body.rotation.x=ws(-fe*.0015,-.03,.03);let k=U(ge);W.sx=zn(W.sx,W.x,.05),W.sy=zn(W.sy,W.y,.05),A(k.pos,Ve,Ee),A(k.look,Ve,We),Ee.addScaledVector(Ve.r,W.sx*.8).y+=-W.sy*.4+Math.sin(ae*.6)*.04,Ee.y=Math.max(Ee.y,.6),a.position.copy(Ee),a.lookAt(We);let V=je(ce),ee=os.degToRad(90-V.elev),pe=os.degToRad(V.az);le.setFromSphericalCoords(1,ee,pe),c.sunPosition.value.copy(le),c.turbidity.value=V.tur,c.rayleigh.value=V.ray,c.mieCoefficient.value=V.mie;let Ce=new I().setFromSphericalCoords(1,os.degToRad(90-Math.max(V.elev,24)),pe);h.position.copy(Ve.p).addScaledVector(Ce,150),h.target.position.copy(Ve.p),h.color.copy(V.sun),h.intensity=V.si,f.color.copy(V.sky),f.groundColor.copy(V.gnd),f.intensity=V.hi*.45,r.fog.color.copy(V.fog),r.fog.density=V.fd,p.update(ce,r),r.environmentIntensity=zn(.9,.55,V.night),H&&(H.uniforms.time.value=ae),n.toneMappingExposure=V.exp;let Me=V.night;B.setNight(Me),G.setNight(Me),X.setNight(ws(Me*1.3));let $e=new I().setFromSphericalCoords(1,os.degToRad(62),os.degToRad(200));B.sky.moon.position.copy(a.position).addScaledVector($e,1200),B.sky.moonGlow.position.copy(B.sky.moon.position),B.sky.stars.position.copy(a.position),B.clouds.position.set(a.position.x,0,a.position.z),be.copy(V.sun).lerp(V.fog,.55).multiplyScalar(zn(1,.18,Me)),B.tintClouds(be,zn(.75,.25,Me)),Q&&(Q.strength=.2+Me*.45);for(let vt of T){let kt=vt.worldCenter.distanceToSquared(a.position)<19600;vt.update?.(ae,kt),vt.setNight?.(Me,ws(1-Math.abs(ce-.42)*6))}for(let vt of B.update)vt(ae,a);F(ce),O?O.render():n.render(r,a),J++,he+=Z,he>1.5&&K&&(J/he<38&&(i>1?(i=Math.max(1,i-.25),n.setPixelRatio(i),O?.setPixelRatio?.(i)):q&&q.enabled?q.enabled=!1:Q&&Q.enabled?Q.enabled=!1:i>.75&&(i=.75,n.setPixelRatio(i),O?.setPixelRatio?.(i))),J=0,he=0),requestAnimationFrame(ye)}Vn(.92,"Compiling shaders\u2026"),await Ii();try{n.compile(r,a)}catch{}Vn(1,"Ready. Hop in."),requestAnimationFrame(ye),await Ii(),await Ii(),document.documentElement.classList.add("ready"),setTimeout(()=>Li("#loader")?.remove(),1600),window.__story={STOPS:g,jumpTo:Ae}}X_().catch(s=>{console.error(s),document.documentElement.classList.add("static"),Li("#loader")?.remove()});
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
