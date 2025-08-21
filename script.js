// Mobile menu toggle and close-on-click
(function () {
  var toggle = document.getElementById('mobile-menu-toggle');
  var menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  function syncMenuVisibility() {
    if (toggle.checked) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  }

  toggle.addEventListener('change', syncMenuVisibility);
  syncMenuVisibility();

  // Close menu when clicking a link
  var links = menu.querySelectorAll('.mobile-menu-link');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.checked = false;
      syncMenuVisibility();
    });
  });

  // Close on escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.checked) {
      toggle.checked = false;
      syncMenuVisibility();
    }
  });
})();

// Countdown timer to Oct 6, 2025 00:00:00 local time
(function () {
  var target = new Date('2025-10-06T00:00:00');
  var daysEl = document.getElementById('countdown-days');
  var hoursEl = document.getElementById('countdown-hours');
  var minutesEl = document.getElementById('countdown-minutes');
  var secondsEl = document.getElementById('countdown-seconds');
  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  function update() {
    var now = new Date();
    var diffMs = Math.max(0, target - now);
    var totalSeconds = Math.floor(diffMs / 1000);
    var days = Math.floor(totalSeconds / (24 * 60 * 60));
    var hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;
    daysEl.textContent = String(days);
    hoursEl.textContent = String(hours);
    minutesEl.textContent = String(minutes);
    secondsEl.textContent = String(seconds);
  }

  update();
  setInterval(update, 1000);
})();

