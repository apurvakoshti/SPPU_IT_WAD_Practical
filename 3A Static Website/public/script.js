// Sales chart
var salesChartCanvas = document.getElementById('sales-chart');
var salesChart = new Chart(salesChartCanvas, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Sales',
            data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Order trends chart
var orderTrendsChartCanvas = document.getElementById('order-trends-chart');
var orderTrendsChart = new Chart(orderTrendsChartCanvas, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Orders',
            data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
    const customerRatingsData = [
      { label: 'Excellent', value: 40 },
      { label: 'Good', value: 30 },
      { label: 'Fair', value: 20 },
      { label: 'Poor', value: 10 }
    ];
  
    const ctx = document.getElementById('customer-ratings-pie-chart').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: customerRatingsData.map(data => data.label),
        datasets: [{
          label: 'Customer Ratings',
          data: customerRatingsData.map(data => data.value),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Customer Ratings'
        }
      }
    });

    