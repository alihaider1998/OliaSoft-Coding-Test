
import React, { Component } from "react";
import Chart from "react-apexcharts";

class ChartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: "Number of Oil Sites",
        data: [5, 3, 4, 3, 3]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Sites By Number of Oil Rigs',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], 
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Statfjord', 'Troll Vest', 'Nursultan Field', 'Yates Oil Field', 'Wilmington Oil Field'],
        }
      },
    };
  }

  render() {
    return (
      <div style={{marginTop: "20px" }}>
      <div  className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height="300%"
            />
          </div>
        </div>
      </div></div>
    );
  }
}

export default ChartPage;








