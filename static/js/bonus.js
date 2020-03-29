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
          { range: [0, 1], color: "#fdfc0a" },
          { range: [1, 2], color: "#ffe400" },
          { range: [2, 3], color: "#ffcc00" },
          { range: [3, 4], color: "#ffb400" },
          { range: [4, 5], color: "#ff9a00" },
          { range: [5, 6], color: "#ff8000" },
          { range: [6, 7], color: "#ff6300" },
          { range: [7, 8], color: "#ff4310" },
          { range: [8, 9], color: "#f60c21" }
        ],
        bar: { color: "#22fd0a" }
      }
    }
  ];

  var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
  Plotly.newPlot("gauge", data, layout);
}
