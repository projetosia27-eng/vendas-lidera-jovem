
document.addEventListener('DOMContentLoaded', () => {
  const checkoutBtns = document.querySelectorAll('.js-checkout-btn');
  const checkoutModal = document.getElementById('checkout-modal');
  if (checkoutModal) {
    checkoutBtns.forEach(btn => btn.addEventListener('click', () => checkoutModal.style.display = 'flex'));
    checkoutModal.addEventListener('click', (e) => {
      if (e.target === checkoutModal) checkoutModal.style.display = 'none';
    });
    const closeBtn = document.getElementById('close-checkout-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => checkoutModal.style.display = 'none');
  }

  const demoBtn = document.getElementById('js-demo-btn');
  const demoModal = document.getElementById('demo-modal');
  if (demoModal && demoBtn) {
    demoBtn.addEventListener('click', () => demoModal.style.display = 'flex');
    const closeMod = () => {
      demoModal.style.display = 'none';
      const iframe = demoModal.querySelector('iframe');
      if (iframe) iframe.src = iframe.src;
      const video = demoModal.querySelector('video');
      if (video) video.pause();
    };
    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) closeMod();
    });
    const closeBtn = document.getElementById('close-demo-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeMod);
  }

  const form = document.getElementById('checkout-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Formulário enviado! Implemente a lógica de processamento aqui.');
      if (checkoutModal) checkoutModal.style.display = 'none';
    });
  }
});
    