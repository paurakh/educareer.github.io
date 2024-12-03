// candidate-summary.js

// Data for the skills radar chart
const radarData = {
    labels: ['Coding', 'Algorithms', 'Communication', 'Teamwork', 'Problem Solving', 'Leadership'],
    datasets: [
        {
            label: 'Skill Level',
            data: [85, 90, 80, 75, 95, 70],
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(0, 123, 255, 1)',
        },
    ],
};

// Config for the radar chart
const radarConfig = {
    type: 'radar',
    data: radarData,
    options: {
        scales: {
            r: {
                angleLines: { display: true },
                suggestedMin: 0,
                suggestedMax: 100,
                ticks: {
                    stepSize: 20,
                },
            },
        },
    },
};

// Render the radar chart
const radarCtx = document.getElementById('skillsRadarChart').getContext('2d');
new Chart(radarCtx, radarConfig);

// Data for the score donut chart
const donutData = {
    labels: ['Score', 'Remaining'],
    datasets: [
        {
            data: [85, 15],
            backgroundColor: ['rgba(40, 167, 69, 0.8)', 'rgba(220, 220, 220, 0.3)'],
            borderWidth: 0,
        },
    ],
};

// Config for the donut chart
const donutConfig = {
    type: 'doughnut',
    data: donutData,
    options: {
        cutout: '70%',
        rotation: -90,
        circumference: 180,
        plugins: {
            legend: { display: false },
        },
    },
};

// Render the donut chart
const donutCtx = document.getElementById('scoreDonutChart').getContext('2d');
new Chart(donutCtx, donutConfig);

// Set the overall score text
document.getElementById('overallScore').textContent = '85';
