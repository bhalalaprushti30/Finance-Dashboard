const expensesCtx = document.getElementById('expensesChart').getContext('2d');
const savingsCtx = document.getElementById('savingsChart').getContext('2d');

const expensesChart = new Chart(expensesCtx, {
    type: 'bar',
    data: {
        labels: ['Rent', 'Groceries', 'Transport', 'Entertainment', 'Other'],
        datasets: [{
            label: 'Expenses ($)',
            data: [1200, 450, 300, 200, 150],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
        }]
    }
});

const savingsChart = new Chart(savingsCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Savings ($)',
            data: [500, 700, 800, 1200, 1500, 1800],
            borderColor: 'rgba(54, 162, 235, 1)',
            fill: false
        }]
    }
});

// Download Report Button
const downloadBtn = document.querySelector('.download-btn');
downloadBtn.addEventListener('click', () => {
    alert('Downloading Report... (Feature Coming Soon)');
});
