document.addEventListener('DOMContentLoaded', (event) => {
    setupFormSubmission();
});

function setupFormSubmission() {
    const forms = document.querySelectorAll('.contactForm');
    forms.forEach((form, index) => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            const statusElement = e.target.nextElementSibling;

            try {
                const response = await fetch('/api/send-email', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const result = await response.json();
                statusElement.textContent = result.message;
                if (response.ok && result.message.includes('Thank You')) {
                    e.target.reset();
                }
            } catch (error) {
                console.error('Error:', error);
                statusElement.textContent = 'An error occurred. Please try again later.';
            }
        });
    });
}