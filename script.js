clock()
setInterval(clock, 1000);
function clock() {
  let myDate = new Date ();
  let militaryHours = myDate.getHours(); 
  let standardHours = toStandardHours(militaryHours);
  let minutes = addLeadingZero(myDate.getMinutes()); 
  let seconds = addLeadingZero(myDate.getSeconds());

  document.getElementById("clock")
  .textContent = `${standardHours}:${minutes}:${seconds} ${getAmPm(militaryHours)}`;
};


function addLeadingZero(time) {  
  if (time < 10) { 
    return `0${time}`; 
  }
  return time; 
}

function getAmPm(hr) { 
  if (hr < 12) { 
    return 'AM'; 
  }
  return 'PM'; 
}


function toStandardHours(hr) {
  if (hr === 0) { 
    return 12; 
  }

  if (hr < 13) { 
    return hr; 
  }

  if (hr >= 13) { 
    return hr % 12; 
  }
}