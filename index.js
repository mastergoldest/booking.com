//  const g = { adults: 2, children: 0, rooms: 1 };

//     /* ── close everything ── */
//     function closeAll() {
//       document.getElementById('destDropdown').classList.add('hidden');
//       document.getElementById('guestsDropdown').classList.add('hidden');
//       document.getElementById('datePicker').classList.add('hidden');
//     }

//     /* ── destination dropdown ── */
//     function openDropdown() {
//       closeAll();
//       document.getElementById('destDropdown').classList.remove('hidden');
//     }

//     function pickDest(city, country) {
//       document.getElementById('destInput').value = city + (country ? ', ' + country : '');
//       closeAll();
//     }

//     /* ── date picker ── */
//     function toggleDatePicker() {
//       const dp = document.getElementById('datePicker');
//       const isOpen = !dp.classList.contains('hidden');
//       closeAll();
//       if (!isOpen) dp.classList.remove('hidden');
//     }

//     function updateDateLabel() {
//       const ci = document.getElementById('checkin').value;
//       const co = document.getElementById('checkout').value;
//       const fmt = d => d ? new Date(d).toLocaleDateString('en-GB',{day:'numeric',month:'short'}) : '';
//       const label = document.getElementById('dateLabel');
//       if (ci || co) {
//         label.textContent = (fmt(ci) || 'Check-in') + '  —  ' + (fmt(co) || 'Check-out');
//         label.classList.replace('text-gray-500','text-gray-800');
//       }
//     }

//     /* ── guests dropdown ── */
//     function toggleGuests(e) {
//       e.stopPropagation();
//       const dd = document.getElementById('guestsDropdown');
//       const isOpen = !dd.classList.contains('hidden');
//       closeAll();
//       if (!isOpen) dd.classList.remove('hidden');
//     }

//     /* ── counter ── */
//     function chg(type, delta) {
//       const min = type === 'adults' ? 1 : 0;
//       g[type] = Math.max(min, g[type] + delta);
//       document.getElementById(type + 'Val').textContent = g[type];
//       const minusBtn = document.getElementById(type + 'Minus');
//       minusBtn.disabled = g[type] <= min;
//       document.getElementById('guestsLabel').textContent =
//         `${g.adults} adult${g.adults !== 1 ? 's' : ''} · ${g.children} children · ${g.rooms} room${g.rooms !== 1 ? 's' : ''}`;
//     }

//     /* ── close dropdowns when clicking outside ── */
//     document.addEventListener('click', e => {
//       if (!e.target.closest('#destWrapper') &&
//           !e.target.closest('#guestsWrapper') &&
//           !e.target.closest('#datePicker')) {
//         closeAll();
//       }
//     });

//     document.getElementById('datePicker').addEventListener('click', e => e.stopPropagation());


  let isOpen = true;

  function toggleSupport() {
    if (isOpen) {
      document.getElementById("demo").innerHTML = "";
      document.getElementById("arrow").innerHTML = "&#8964;"; // ∨
      isOpen = false;
    } else {
      document.getElementById("demo").innerHTML = `
        <p>Manage your trips</p>
        <p>Contact Customer Service</p>
        <p>Safety resource centre</p>
      `;
      document.getElementById("arrow").innerHTML = "&#8963;"; // ∧
      isOpen = true;
    }
  }