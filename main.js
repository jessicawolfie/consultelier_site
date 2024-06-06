document.getElementById('payButton').addEventListener('click', function() {
    fetch('/api/pix-payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('paymentStatus').innerText = data.message;
            loadCalendar();
        } else {
            document.getElementById('paymentStatus').innerText = data.message;
        }
    })
    .catch(error => console.error('Erro:', error));
});