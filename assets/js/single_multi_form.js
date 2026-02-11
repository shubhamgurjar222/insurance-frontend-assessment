        document.querySelectorAll('.trip-type button').forEach(button => {
            button.addEventListener('click', function() {
                document.querySelectorAll('.trip-type button').forEach(btn => {
                    btn.classList.remove('active');
                });
                this.classList.add('active');
            });
        });