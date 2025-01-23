function getTimeString(time){
    const hour = parseInt(time/3600);
    let remaingSecond = time % 3600;
    const min = parseInt(remaingSecond/60);
    remaingSecond = remaingSecond % 60;

  return `${hour} hours ${min} minutes ${remaingSecond} seconds`;
}
 
 
 console.log(getTimeString(7865))