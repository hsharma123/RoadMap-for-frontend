function pad(n){ return n<10?'0'+n:n; }
function updateClock(){
  const now = new Date();
  const h = pad(now.getHours()),
        m = pad(now.getMinutes()),
        s = pad(now.getSeconds());
  document.getElementById('clock').textContent = `${h}:${m}:${s}`;
  document.getElementById('date').textContent = now.toLocaleDateString('en-US',{
    weekday:'long', year:'numeric', month:'long', day:'numeric'
  });
}
setInterval(updateClock,1000);
updateClock();
