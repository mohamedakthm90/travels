function searchFlights(){
  const from=document.getElementById('from').value || 'your city';
  const to=document.getElementById('to').value || 'your destination';
  const date=document.getElementById('date').value || 'selected date';
  document.getElementById('result').textContent=`Searching demo flights: ${from} → ${to} on ${date}...`;
}
function showPackage(){
  alert('Demo packages: Maldives Escape, Dubai City Break, Paris Explorer and Tokyo Adventure.');
}
