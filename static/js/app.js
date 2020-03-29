// ## Step 1: Plotly

// 1. Use the D3 library to read in `samples.json`.
file_path = "./samples.json";
var holdData = [];
d3.json(file_path).then(function(data) {
  holdData = data;
  console.log(data);
  holdData.names.forEach((id, index) => {
    d3.select("#selDataset")
      .append("option")
      .attr("value", index)
      .text(id);
  });
  optionChanged(0);
});

// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// * Use `sample_values` as the values for the bar chart.
// * Use `otu_ids` as the labels for the bar chart.
// * Use `otu_labels` as the hovertext for the chart.

function plotBar(x, y, labels) {
  var trace = {
    x: x.reverse(),
    y: y.map(d => "OTU " + d).reverse(),
    type: "bar",
    width: x.length * 0.08,
    text: labels,
    orientation: "h"
  };

  var data = [trace];

  var layout = {
    title: "Bubble Chart: Top 10 OTUs",
    xaxis: { title: "# of Bacteria" },
    yaxis: { title: "Sample ID" }
  };

  Plotly.newPlot("bar", data, layout);
}

// 3. Create a bubble chart that displays each sample.
// * Use `otu_ids` for the x values.
// * Use `sample_values` for the y values.
// * Use `sample_values` for the marker size.
// * Use `otu_ids` for the marker colors.
// * Use `otu_labels` for the text values.
function plotBubble(x, y, text) {
  var trace = {
    x: x,
    y: y,
    mode: "markers",
    marker: {
      size: y,
      color: x
    },
    text: text
  };

  var data = [trace];

  var layout = {
    title: "Bubble Chart: Top 10 OTUs",
    xaxis: { title: "Sample ID" },
    yaxis: { title: "# of Bacteria" }
  };

  Plotly.newPlot("bubble", data, layout);
}

// 4. Display the sample metadata, i.e., an individual's demographic information.
// 5. Display each key-value pair from the metadata JSON object somewhere on the page.
function infoTable(index) {
  var sampleInfo = holdData.metadata[index];
  var table = d3.select("#sample-metadata").append("table");
  Object.entries(sampleInfo).forEach(function([key, value]) {
    var row = table.append("tr");
    row.append("td").text(key);
    row.append("td").text(value);
  });
}

// 6. Update all of the plots any time that a new sample is selected.
function optionChanged(index) {
  var sample_values = holdData.samples[index].sample_values.slice(0, 10);
  var otu_ids = holdData.samples[index].otu_ids.slice(0, 10);
  var otu_labels = holdData.samples[index].otu_labels.slice(0, 10);
  var freq = holdData.metadata[index].wfreq;
  plotBar(sample_values, otu_ids, otu_labels);
  plotBubble(otu_ids, sample_values, otu_labels);
  infoTable(index);
  plotGauge(freq);
}
