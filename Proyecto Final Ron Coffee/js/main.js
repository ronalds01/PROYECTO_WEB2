document.addEventListener('DOMContentLoaded', () => {
  // Inicializa popovers si existieran
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
[...popoverTriggerList].forEach(el => new bootstrap.Popover(el));
});

