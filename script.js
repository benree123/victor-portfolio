document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('copy-email').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText('okerevic71@gmail.com');
    status.textContent = 'Email copied.';
  } catch {
    status.textContent = 'You can copy the address above or click it to email me.';
  }
});
