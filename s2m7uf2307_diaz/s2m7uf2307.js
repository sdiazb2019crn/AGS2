document.getElementById('default').addEventListener('click',def);
document.getElementById('mono').addEventListener('click',mono);
document.getElementById('dark').addEventListener('click',dark);
document.getElementById('artic').addEventListener('click',artic);
var slider=document.getElementsByClassName('slider');
document.getElementById('gran').addEventListener('click',salir);

function salir(){
  document.getElementById('colors').style.display="none";
  document.getElementById('coldef').style.display="none";
  document.getElementById('coldark').style.display="none";
  document.getElementById('colart').style.display="none";
}

function def(){
  document.getElementById('gran').style.backgroundColor="SlateGray";
  document.getElementById('bocadillo').style.backgroundColor="ivory";
  document.getElementById('colors').style.display="none";
  document.getElementById('coldef').style.display="block";
  document.getElementById('coldark').style.display="none";
  document.getElementById('colart').style.display="none";
  slider[0].style.display="block";
  slider[1].style.display="none";
  slider[2].style.display="none";
  slider[3].style.display="none";
}
function mono(){
  document.getElementById('gran').style.backgroundColor="#6A5ACD";
  document.getElementById('bocadillo').style.backgroundColor="ivory";
  document.getElementById('colors').style.display="block";
  document.getElementById('coldef').style.display="none";
  document.getElementById('coldark').style.display="none";
  document.getElementById('colart').style.display="none";
  slider[0].style.display="none";
  slider[1].style.display="block";
  slider[2].style.display="none";
  slider[3].style.display="none";
}
function dark(){
  document.getElementById('gran').style.backgroundColor="#333";
  document.getElementById('bocadillo').style.backgroundColor="ivory";
  document.getElementById('colors').style.display="none";
  document.getElementById('coldef').style.display="none";
  document.getElementById('coldark').style.display="block";
  document.getElementById('colart').style.display="none";
  slider[0].style.display="none";
  slider[1].style.display="none";
  slider[2].style.display="block";
  slider[3].style.display="none";
}
function artic(){
  document.getElementById('gran').style.backgroundColor="ivory";
  document.getElementById('bocadillo').style.backgroundColor="#5d5e79";
  document.getElementById('colors').style.display="none";
  document.getElementById('coldef').style.display="none";
  document.getElementById('coldark').style.display="none";
  document.getElementById('colart').style.display="block";
  slider[0].style.display="none";
  slider[1].style.display="none";
  slider[2].style.display="none";
  slider[3].style.display="block";
}

var color=["tomato","#6A5ACD","aquamarine","salmon","khaki","purple","orange","lightgreen","navy","yellowgreen"];
var bolacolor=document.getElementsByClassName('bola');
for (var k = 0; k < bolacolor.length; k++) {
  bolacolor[k].style.backgroundColor=color[k];
}
/*bolacolor[0].style.backgroundColor=color[0];
bolacolor[1].style.backgroundColor=color[1];
bolacolor[2].style.backgroundColor=color[2];
bolacolor[3].style.backgroundColor=color[3];
bolacolor[4].style.backgroundColor=color[4];*/
var colordef=["tomato","#6A5ACD","aquamarine","salmon","khaki","purple","orange","lightgreen","navy","yellowgreen"];
var bolacolordef=document.getElementsByClassName('boldef');
for (var i = 0; i < bolacolordef.length; i++) {
  bolacolordef[i].style.backgroundColor=colordef[i];
}
var colordark=["tomato","#6A5ACD","aquamarine","salmon","khaki","purple","orange","lightgreen","navy","yellowgreen"];
var bolacolordark=document.getElementsByClassName('boldark');
for (var j = 0; j < bolacolordark.length; j++) {
  bolacolordark[j].style.backgroundColor=colordark[j];
}
var colorart=["tomato","#6A5ACD","aquamarine","salmon","khaki","purple","orange","lightgreen","navy","yellowgreen"];
var bolacolorart=document.getElementsByClassName('bolart');
for (var l = 0; l < bolacolorart.length; l++) {
  bolacolorart[l].style.backgroundColor=colorart[l];
}

/* colors */
document.getElementById('u').addEventListener('click',tomato);
function tomato(){
  document.getElementById('mono').style.backgroundColor="tomato";
  document.getElementById('gran').style.backgroundColor="tomato";
  document.getElementById('derecha').style.backgroundColor="#ffbeb3";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#ffbeb3";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#ffbeb3";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#ffbeb3";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#ffbeb3";
}
document.getElementById('dos').addEventListener('click',lila);
function lila(){
  document.getElementById('mono').style.backgroundColor="#6A5ACD";
  document.getElementById('gran').style.backgroundColor="#6A5ACD";
  document.getElementById('derecha').style.backgroundColor="#cac4ed";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#cac4ed";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#cac4ed";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#cac4ed";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#cac4ed";
}
document.getElementById('tres').addEventListener('click',aquamarine);
function aquamarine(){
  document.getElementById('mono').style.backgroundColor="aquamarine";
  document.getElementById('gran').style.backgroundColor="aquamarine";
  document.getElementById('derecha').style.backgroundColor="#ccffee";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#ccffee";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#ccffee";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#ccffee";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#ccffee";
}
document.getElementById('cuatre').addEventListener('click',salmon);
function salmon(){
  document.getElementById('mono').style.backgroundColor="salmon";
  document.getElementById('gran').style.backgroundColor="salmon";
  document.getElementById('derecha').style.backgroundColor="#fcbcb5";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#fcbcb5";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#fcbcb5";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#fcbcb5";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#fcbcb5";
}
document.getElementById('cinc').addEventListener('click',khaki);
function khaki(){
  document.getElementById('mono').style.backgroundColor="khaki";
  document.getElementById('gran').style.backgroundColor="khaki";
  document.getElementById('derecha').style.backgroundColor="#f6f0bb";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#f6f0bb";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#f6f0bb";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#f6f0bb";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#f6f0bb";
}
document.getElementById('sis').addEventListener('click',purple);
function purple(){
  document.getElementById('mono').style.backgroundColor="purple";
  document.getElementById('gran').style.backgroundColor="purple";
  document.getElementById('derecha').style.backgroundColor="#ffb3ff";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#ffb3ff";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#ffb3ff";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#ffb3ff";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#ffb3ff";
}
document.getElementById('set').addEventListener('click',orange);
function orange(){
  document.getElementById('mono').style.backgroundColor="orange";
  document.getElementById('gran').style.backgroundColor="orange";
  document.getElementById('derecha').style.backgroundColor="#ffdb99";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#ffdb99";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#ffdb99";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#ffdb99";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#ffdb99";
}
document.getElementById('vuit').addEventListener('click',lightgreen);
function lightgreen(){
  document.getElementById('mono').style.backgroundColor="lightgreen";
  document.getElementById('gran').style.backgroundColor="lightgreen";
  document.getElementById('derecha').style.backgroundColor="#d3f8d3";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#d3f8d3";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#d3f8d3";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#d3f8d3";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#d3f8d3";
}
document.getElementById('nou').addEventListener('click',navy);
function navy(){
  document.getElementById('mono').style.backgroundColor="navy";
  document.getElementById('gran').style.backgroundColor="navy";
  document.getElementById('derecha').style.backgroundColor="#9999ff";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#9999ff";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#9999ff";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#9999ff";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#9999ff";
}
document.getElementById('deu').addEventListener('click',yellowgreen);
function yellowgreen(){
  document.getElementById('mono').style.backgroundColor="yellowgreen";
  document.getElementById('gran').style.backgroundColor="yellowgreen";
  document.getElementById('derecha').style.backgroundColor="#cce698";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#cce698";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#cce698";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#cce698";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#cce698";
}

/* dark */
document.getElementById('udark').addEventListener('click',tomato2);
function tomato2(){
  document.getElementById('derecha').style.backgroundColor="#ff4d4d";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#ff4d4d";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#ff4d4d";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#ff4d4d";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#ff4d4d";
}
document.getElementById('dosdark').addEventListener('click',lila2);
function lila2(){
  document.getElementById('derecha').style.backgroundColor="#cac4ed";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#cac4ed";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#cac4ed";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#cac4ed";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#cac4ed";
}
document.getElementById('tresdark').addEventListener('click',aquamarine2);
function aquamarine2(){
  document.getElementById('derecha').style.backgroundColor="#ccffee";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#ccffee";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#ccffee";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#ccffee";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#ccffee";
}
document.getElementById('cuatredark').addEventListener('click',salmon2);
function salmon2(){
  document.getElementById('derecha').style.backgroundColor="#fcbcb5";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#fcbcb5";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#fcbcb5";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#fcbcb5";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#fcbcb5";
}
document.getElementById('cincdark').addEventListener('click',khaki2);
function khaki2(){
  document.getElementById('derecha').style.backgroundColor="#f6f0bb";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#f6f0bb";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#f6f0bb";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#f6f0bb";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#f6f0bb";
}
document.getElementById('sisdark').addEventListener('click',purple2);
function purple2(){
  document.getElementById('derecha').style.backgroundColor="#ffb3ff";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#ffb3ff";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#ffb3ff";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#ffb3ff";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#ffb3ff";
}
document.getElementById('setdark').addEventListener('click',orange2);
function orange2(){
  document.getElementById('derecha').style.backgroundColor="#ffdb99";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#ffdb99";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#ffdb99";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#ffdb99";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#ffdb99";
}
document.getElementById('vuitdark').addEventListener('click',lightgreen2);
function lightgreen2(){
  document.getElementById('derecha').style.backgroundColor="#d3f8d3";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#d3f8d3";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#d3f8d3";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#d3f8d3";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#d3f8d3";
}
document.getElementById('noudark').addEventListener('click',navy2);
function navy2(){
  document.getElementById('derecha').style.backgroundColor="#9999ff";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#9999ff";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#9999ff";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#9999ff";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#9999ff";
}
document.getElementById('deudark').addEventListener('click',yellowgreen2);
function yellowgreen2(){
  document.getElementById('derecha').style.backgroundColor="#cce698";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#cce698";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#cce698";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#cce698";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#cce698";
}

/* art */
document.getElementById('uart').addEventListener('click',tomato3);
function tomato3(){
  document.getElementById('derecha').style.backgroundColor="#ff4d4d";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#ff4d4d";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#ff4d4d";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#ff4d4d";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#ff4d4d";
}
document.getElementById('dosart').addEventListener('click',lila3);
function lila3(){
  document.getElementById('derecha').style.backgroundColor="#cac4ed";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#cac4ed";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#cac4ed";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#cac4ed";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#cac4ed";
}
document.getElementById('tresart').addEventListener('click',aquamarine3);
function aquamarine3(){
  document.getElementById('derecha').style.backgroundColor="#ccffee";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#ccffee";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#ccffee";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#ccffee";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#ccffee";
}
document.getElementById('cuatreart').addEventListener('click',salmon3);
function salmon3(){
  document.getElementById('derecha').style.backgroundColor="#fcbcb5";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#fcbcb5";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#fcbcb5";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#fcbcb5";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#fcbcb5";
}
document.getElementById('cincart').addEventListener('click',khaki3);
function khaki3(){
  document.getElementById('derecha').style.backgroundColor="#f6f0bb";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#f6f0bb";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#f6f0bb";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#f6f0bb";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#f6f0bb";
}
document.getElementById('sisart').addEventListener('click',purple3);
function purple3(){
  document.getElementById('derecha').style.backgroundColor="#ffb3ff";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#ffb3ff";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#ffb3ff";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#ffb3ff";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#ffb3ff";
}
document.getElementById('setart').addEventListener('click',orange3);
function orange3(){
  document.getElementById('derecha').style.backgroundColor="#ffdb99";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#ffdb99";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#ffdb99";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#ffdb99";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#ffdb99";
}
document.getElementById('vuitart').addEventListener('click',lightgreen3);
function lightgreen3(){
  document.getElementById('derecha').style.backgroundColor="#d3f8d3";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#d3f8d3";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#d3f8d3";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#d3f8d3";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#d3f8d3";
}
document.getElementById('nouart').addEventListener('click',navy3);
function navy3(){
  document.getElementById('derecha').style.backgroundColor="#9999ff";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#9999ff";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#9999ff";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#9999ff";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#9999ff";
}
document.getElementById('deuart').addEventListener('click',yellowgreen3);
function yellowgreen3(){
  document.getElementById('derecha').style.backgroundColor="#cce698";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#cce698";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#cce698";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#cce698";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#cce698";
}

/* def */
document.getElementById('udef').addEventListener('click',tomato1);
function tomato1(){
  document.getElementById('derecha').style.backgroundColor="#ff4d4d";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#ff4d4d";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#ff4d4d";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#ff4d4d";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#ff4d4d";
}
document.getElementById('dosdef').addEventListener('click',lila1);
function lila1(){
  document.getElementById('derecha').style.backgroundColor="#cac4ed";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#cac4ed";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#cac4ed";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#cac4ed";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#cac4ed";
}
document.getElementById('tresdef').addEventListener('click',aquamarine1);
function aquamarine1(){
  document.getElementById('derecha').style.backgroundColor="#ccffee";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#ccffee";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#ccffee";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#ccffee";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#ccffee";
}
document.getElementById('cuatredef').addEventListener('click',salmon1);
function salmon1(){
  document.getElementById('derecha').style.backgroundColor="#fcbcb5";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#fcbcb5";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#fcbcb5";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#fcbcb5";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#fcbcb5";
}
document.getElementById('cincdef').addEventListener('click',khaki1);
function khaki1(){
  document.getElementById('derecha').style.backgroundColor="#f6f0bb";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#f6f0bb";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#f6f0bb";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#f6f0bb";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#f6f0bb";
}
document.getElementById('sisdef').addEventListener('click',purple1);
function purple1(){
  document.getElementById('derecha').style.backgroundColor="#ffb3ff";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#ffb3ff";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#ffb3ff";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#ffb3ff";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#ffb3ff";
}
document.getElementById('setdef').addEventListener('click',orange1);
function orange1(){
  document.getElementById('derecha').style.backgroundColor="#ffdb99";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#ffdb99";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#ffdb99";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#ffdb99";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#ffdb99";
}
document.getElementById('vuitdef').addEventListener('click',lightgreen1);
function lightgreen1(){
  document.getElementById('derecha').style.backgroundColor="#d3f8d3";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#d3f8d3";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#d3f8d3";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#d3f8d3";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#d3f8d3";
}
document.getElementById('noudef').addEventListener('click',navy1);
function navy1(){
  document.getElementById('derecha').style.backgroundColor="#9999ff";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#9999ff";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#9999ff";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#9999ff";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#9999ff";
}
document.getElementById('deudef').addEventListener('click',yellowgreen1);
function yellowgreen1(){
  document.getElementById('derecha').style.backgroundColor="#cce698";
  document.getElementsByClassName('rec')[0].style.backgroundColor="#cce698";
  document.getElementsByClassName('rec')[1].style.backgroundColor="#cce698";
  document.getElementsByClassName('rec')[2].style.backgroundColor="#cce698";
  document.getElementsByClassName('rec')[3].style.backgroundColor="#cce698";
}
