anychart.onDocumentReady(function () {
    anychart.data.loadJsonFile(
      'data/data.json',
      function (data) {
        // create a timeline chart
        var chart = anychart.timeline();
        // create main timeline data points
        for (var i = 0; i < data.timeline.length; i++) {    
          // create a range series
          var series = chart.range([
            [
              data.timeline[i].title,
              data.timeline[i].start,
              data.timeline[i].end
            ]
          ]);
        }

        // create a data set for the top data points
        var dataSet = anychart.data.set(data.facts);

        // map the top data points
        var mapping = dataSet.mapAs({
          x: 'date',
          value: 'title'
        });

        // create the top series with moments
        var mappingSeries = chart.moment(mapping);

        // set the chart scale levels
        chart.scale().zoomLevels([
          [
            { unit: 'year', count: 1 }
          ]
        ]);

        // enable the chart scroller
        chart.scroller().enabled(true);

        // set the container id for the chart
        chart.container('chartBox');

        // initiate the chart drawing
        chart.draw();

      }
    );
  });