
let Instance ;
export class ChartControler {


    constructor() {
        if(Instance){
            return Instance;
        }
        Instance = this


        const ctx = document.getElementById('myChart');

        this.chart = new Chart(ctx, {

            type: 'bar',
            data: {
                labels: [],
                datasets: [{
                    label: '',
                    data: [],
                    borderWidth: 1,
                    barThickness:50
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

    }
    
     updateData(labels, label, newData) {
        this.chart.data.labels=labels;
        this.chart.data.datasets[0].label=label
        this.chart.data.datasets[0].data=newData
        this.chart.update();
    }
    
     reset() {
        this.chart.data.labels.pop();
        this.chart.data.datasets.forEach((dataset) => {
            dataset.label = ''
            dataset.data.pop();
        });
        this.chart.update();
    }
}