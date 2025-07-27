const ctx_1 = document.getElementById('chart-1').getContext('2d');

const gradient_1 = ctx_1.createLinearGradient(0, 0, 0, 400);
gradient_1.addColorStop(0, 'rgba(59, 130, 246, 0.4)');
gradient_1.addColorStop(1, 'rgba(59, 130, 246, 0.0)');

new Chart(ctx_1, {
type: 'line',
data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
    label: 'Sales',
    data: [200, 600, 450, 300, 400, 250],
    fill: true,
    backgroundColor: gradient_1,
    borderColor: '#3B82F6',
    borderWidth: 2,
    pointBackgroundColor: '#3B82F6',
    pointBorderColor: '#ffffff',
    pointHoverRadius: 6,
    tension: 0.4,
    }]
},
options: {
    responsive: true,
    plugins: {
    legend: {
        display: false
    },
    },
    scales: {
    y: {
        beginAtZero: true,
        ticks: {
        callback: (value) => `$${value}`
        }
    }
    }
}
});

const ctx_2 = document.getElementById('chart-2').getContext('2d');

const gradient_2 = ctx_2.createLinearGradient(0, 0, 0, 400);
gradient_2.addColorStop(0, 'rgba(59, 130, 246, 0.4)');
gradient_2.addColorStop(1, 'rgba(59, 130, 246, 0.0)');

new Chart(ctx_2, {
type: 'line',
data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
    label: 'Sales',
    data: [200, 600, 450, 300, 400, 250],
    fill: true,
    backgroundColor: gradient_2,
    borderColor: '#3B82F6',
    borderWidth: 2,
    pointBackgroundColor: '#3B82F6',
    pointBorderColor: '#ffffff',
    pointHoverRadius: 6,
    tension: 0.4,
    }]
},
options: {
    responsive: true,
    plugins: {
    legend: {
        display: false
    },
    },
    scales: {
    y: {
        beginAtZero: true,
        ticks: {
        callback: (value) => `$${value}`
        }
    }
    }
}
});


