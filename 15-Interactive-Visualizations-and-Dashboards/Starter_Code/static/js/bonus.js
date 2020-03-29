// ## Advanced Challenge Assignment (Optional)
// * Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.
// * You will need to modify the example gauge code to account for values ranging from 0 through 9.
// * Update the chart whenever a new sample is selected.

function plotGauge(freq) {
  var data = [
    {
      value: freq,
      title: { text: "Weekly Washing Frequency of The Individual" },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { visible: true, range: [null, 9], tickmode: "linear" },
        steps: [
          { range: [0, 1], color: "#e4eb16" },
          { range: [1, 2], color: "#e9d800" },
          { range: [2, 3], color: "#ebc400" },
          { range: [3, 4], color: "#ecb100" },
          { range: [4, 5], color: "#eb9d00" },
          { range: [5, 6], color: "#e88a00" },
          { range: [6, 7], color: "#e47600" },
          { range: [7, 8], color: "#de6204" },
          { range: [8, 9], color: "#d64e13" }
        ],
        bar: { color: "#25f01c" }
      }
    }
  ];

  var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
  Plotly.newPlot("gauge", data, layout);
}
