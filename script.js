//your JS code here. If required.
function getTime(){
  let date=new Date();

  let fullDate=date.toLocaleDateString();

  let hh=date.getHours();
  let sec=date.getSeconds();
  let min=date.getMinutes();
  let session="AM";

  if(hh>12){
    hh=hh-12;
    session="PM";
  }
  hh = (hh==0) ? hh-12 : hh;

  if(sec<10){sec="0"+sec}
  if(min<10){min="0"+min}

  let time=hh+":"+min+":"+sec+" "+session;

  let dateTime=fullDate+", "+time;

  document.getElementById("timer").innerText=dateTime;

  setTimeout(function(){getTime()},1000);
}

getTime();