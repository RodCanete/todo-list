// script.js for todo-list app
// Example: Add enter key support for adding tasks

document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('input[name="task"]');
    const form = document.querySelector('form');
    if (input && form) {
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                form.submit();
            }
        });
    }
    // Optional: Fade out deleted items
    document.querySelectorAll('.btn-danger').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const li = btn.closest('li');
            if (li) {
                li.style.transition = 'opacity 0.3s';
                li.style.opacity = '0.5';
            }
        });
    });
});
