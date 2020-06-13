



// Create the bar chart race vs arrest count

//function buildCharts(race) {
  //  d3.json("sf_police_data.json").then((data) => {

        function loadData(incident_race) {
            d3.json("sf_police_data.json").then(function(data) {
                var filteredData = data.filter(incident => incident.subject_race === incident_race)
                console.log(filteredData);
            })
        }
        loadData("hispanic");

        //var samples = data;
        //console.log(data[0])
        //var resultArray = data.filter(sampleObj => sampleObj.subject_race === race);
        //var resultArray = data.filter(sampleObj => sampleObj.subject_race);
        //console.log(resultArray)
        //var result = resultArray[0];
        
        //var race = result.subject_race;
        //console.log(race)
        //var arrests = result.arrest_made;
        
        // var yticks = race
        
    //    var barData = [
      //      {
        //        y: race,
          //      x: arrests.slice(0, 10).reverse(),
            //    text: otu_labels.slice(0, 10).reverse(),
              //  type: "bar",
                //orientation: "h",
           // }
            //];

            // var barLayout = {
           //  title: "Race vs Arrest Count",
           // margin: { t: 30, l: 150 }
            // };

            // Plotly.newPlot("bar", barData, barLayout);
       // });
//}

//function init(){
//    var firstSample = sample[0];
//    buildCharts(firstSample);
//}

//init();

// buildCharts("hispanic");
