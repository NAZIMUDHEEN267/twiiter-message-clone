const menuBtn=document.getElementById("js-menu-btn"),menu=document.getElementById("js-menu"),body=document.querySelector("body"),time=document.getElementById("js-time"),date=document.getElementById("js-date"),list=document.getElementById("js-list");menuBtn.addEventListener("click",()=>{menu.style.display="block"});const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dt=new Date,year=dt.getFullYear(),month=months[dt.getMonth()],dateNum=dt.getDate(),hour=12<dt.getHours()?dt.getHours()-12:dt.getHours(),timePeriod=12<dt.getHours()?" pm":" am";let minute=dt.getMinutes();minute=minute<10?":0"+minute:":"+minute;let fullDate=[];fullDate.push(year,month,dateNum,hour,minute,timePeriod);for(let e=0;e<fullDate.length;e++)e<3?date.innerHTML+=`<span>${fullDate[e]} </span>`:time.innerHTML+=`<span>${fullDate[e]}</span>`;let lengthCut;const textUsers=[...document.querySelectorAll("#js-name")],usernames=[...document.querySelectorAll("#js-username")];textUsers.forEach((e,t)=>{12<=e.textContent.length?(lengthCut="...",usernames[t].innerHTML=lengthCut):4<e.textContent.length&&(lengthCut=`@${e.textContent.substring(0,4)}...`,usernames[t].innerHTML=lengthCut)}),body.addEventListener("click",e=>{let t=new String(e.target.id);isNaN(t[t.length-1])||"js-menu-btn"!=t.slice(0,t.length-1)||(alert("ye"),document.getElementById("js-menu-box"+t[t.length-1]).classList.add("visible"))});