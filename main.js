document.addEventListener('DOMContentLoaded', function() {
    var modals = document.querySelectorAll('.modal');
    var btns = document.querySelectorAll('.card__button');
    var spans = document.querySelectorAll('.modal .close');

    // Open the right modal
    btns.forEach(function(btn, index) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            modals[index].style.display = "block";
        });
    });

    // Close the modal
    spans.forEach(function(span) {
        span.addEventListener('click', function() {
            this.parentElement.parentElement.style.display = "none";
        });
    });

    // Close modal on outside click
    window.onclick = function(event) {
        modals.forEach(function(modal) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }
});
