<<<<<<< HEAD

  // Scroll reveal
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.sr').forEach(el => obs.observe(el));

  // Form
  function handleForm(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = '✓ Request Sent!';
    btn.style.background = '#16a34a';
    btn.style.boxShadow = '0 4px 20px rgba(22,163,74,0.35)';
    setTimeout(() => {
      btn.innerHTML = 'Send Request <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
      btn.style.background = '';
      btn.style.boxShadow = '';
      e.target.reset();
    }, 3000);
  }
=======

  // Scroll reveal
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.sr').forEach(el => obs.observe(el));

  // Form
  function handleForm(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = '✓ Request Sent!';
    btn.style.background = '#16a34a';
    btn.style.boxShadow = '0 4px 20px rgba(22,163,74,0.35)';
    setTimeout(() => {
      btn.innerHTML = 'Send Request <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
      btn.style.background = '';
      btn.style.boxShadow = '';
      e.target.reset();
    }, 3000);
  }
>>>>>>> 611370f7e8688ecc18159dda20bcefacc802163b
