



// Create the bar chart race vs arrest count

function buildCharts(sample) {
    d3.json("sf_police_data.json").then((data) => {

        var samples = data.samples;
        var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;


        var yticks = subject_race 
        
        var barData = [
            {
                y: yticks,
                x: sample_values.slice(0, 10).reverse(),
                text: otu_labels.slice(0, 10).reverse(),
                type: "bar",
                orientation: "h",
            }
            ];

            var barLayout = {
            title: "Race vs Arrest Count",
            margin: { t: 30, l: 150 }
            };

            Plotly.newPlot("bar", barData, barLayout);
        });
}
