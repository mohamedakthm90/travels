let currentLanguage = localStorage.getItem('language') || 'en';

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.body.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-en][data-ar]').forEach(el => {
    el.textContent = el.getAttribute('data-' + currentLanguage);
  });

  document.querySelectorAll('input[placeholder]').forEach(input => {
    if (input.id === 'from') input.placeholder = currentLanguage === 'ar' ? 'تشيناي (MAA)' : 'Chennai (MAA)';
    if (input.id === 'to') input.placeholder = currentLanguage === 'ar' ? 'دبي (DXB)' : 'Dubai (DXB)';
  });

  document.querySelector('#langBtn').textContent = currentLanguage === 'ar' ? 'English' : 'العربية';
  document.title = currentLanguage === 'ar' ? 'SkyWay للسفر والطيران' : 'SkyWay Travel';
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
  localStorage.setItem('language', currentLanguage);
  applyLanguage();
}

function searchFlights(){
  const from=document.getElementById('from').value || (currentLanguage === 'ar' ? 'مدينتك' : 'your city');
  const to=document.getElementById('to').value || (currentLanguage === 'ar' ? 'وجهتك' : 'your destination');
  const date=document.getElementById('date').value || (currentLanguage === 'ar' ? 'التاريخ المحدد' : 'selected date');
  document.getElementById('result').textContent = currentLanguage === 'ar'
    ? `جاري البحث عن رحلات تجريبية: ${from} ← ${to} بتاريخ ${date}...`
    : `Searching demo flights: ${from} → ${to} on ${date}...`;
}

function showPackage(){
  alert(currentLanguage === 'ar'
    ? 'الباقات التجريبية: المالديف، دبي، باريس وطوكيو.'
    : 'Demo packages: Maldives Escape, Dubai City Break, Paris Explorer and Tokyo Adventure.');
}

applyLanguage();
