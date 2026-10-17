// 공통 도우미
const $ = (s) => document.querySelector(s);
const won = (n) => Math.round(n).toLocaleString('ko-KR');
const WD = ['일', '월', '화', '수', '목', '금', '토'];
// 'YYYY-MM-DD' → 로컬 자정 Date (시간대 오차 방지)
function d(s) { const [y, m, dd] = s.split('-').map(Number); return new Date(y, m - 1, dd); }
function iso(x) { return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0'); }
function fmt(x) { return `${x.getFullYear()}년 ${x.getMonth() + 1}월 ${x.getDate()}일 (${WD[x.getDay()]})`; }
function today() { const t = new Date(); return new Date(t.getFullYear(), t.getMonth(), t.getDate()); }
function addDays(x, n) { const r = new Date(x); r.setDate(r.getDate() + n); return r; }
function diffDays(a, b) { return Math.round((b - a) / 86400000); }
function dday(n) { return n === 0 ? 'D-DAY' : n > 0 ? 'D-' + n : 'D+' + (-n); }
function num(el) { return parseFloat(String(el.value).replace(/,/g, '')) || 0; }
// 숫자 입력칸에 천 단위 쉼표
document.addEventListener('input', (e) => {
  if (!e.target.classList.contains('money')) return;
  const v = e.target.value.replace(/[^\d]/g, '');
  e.target.value = v ? Number(v).toLocaleString('ko-KR') : '';
});
document.querySelectorAll('input[type=date][data-today]').forEach((el) => { el.value = iso(today()); });
