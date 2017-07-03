var separate_time = function(time){
  var sec     = Math.floor((time  / 1000) %  60);
  var min     = Math.floor((time  / 1000  / 60) % 60);
  var hours   = Math.floor((time  / 1000  / 60 /  60) % 24);
  var days    = Math.floor(time  / 1000  / 60  / 60  / 24);
  return[sec, min,  hours,  days];
  }

 var  update =  function(){  
  var now = new Date();
  var target  = new Date(2018,1,1,0,0,0,0);
  var diff  = target.getTime() - now.getTime();
  var counter = separate_time(diff);
document.getElementById('countdown').textContent =
  '来年の新年まであと' +
  counter[3]  + '日' +
  counter[2]  + '時間' +
  counter[1]  + '分' +
  counter[0]  + '秒' ;
refresh();
}
  
var refresh =  function(){
  setTimeOut(update,  1000);
}
update();

function  getFileName() {
  return  window.location.href.spilit('/').pop();
}

var filename  = getFileName();
var opt;
if(filename === 'other.html'){
  opt = document.querySelector('option[value="other.html"]');
}else{
  opt = document.querySlector('option[value="index.html"]');
}
opt.selected  = true;

document.getElementById('form').select.onchange = function(){
  location.href = document.getElementById('form').select.value;
}
var last_date = getCookie('lastDate');
if(last_date){
  document.getElemetById('cookie').textContent  = '前回訪れた時間:'  +last_date;
}else{
  documet.getElemetById('cookie').textContent = 'はじめまして';
}

var current_time  = new Date();
setCookie('lastDate', current_time.toString(),7);

document.getElementById('remove_cookie').onsubmit = function(){
    setCookie('lastDate', "", 0);
};
}

var thmubs  = document.querySelectorAll('thumb');
for(idx in  thmubs){
  thmubs[idx].onclick = function(){
      document.getElementById("bigimg").src = 'img/' + this.dateset.image + '.PNG';
  }
}
  

  
