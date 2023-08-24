const deleteButtons = document.querySelectorAll('.btn-danger');

deleteButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {

        const confirmed = window.confirm("Are you sure you want to delete this post?");

        if (!confirmed) {
            event.preventDefault();
        }
    });
});