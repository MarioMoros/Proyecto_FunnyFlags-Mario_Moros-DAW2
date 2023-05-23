import { Component } from '@angular/core';


import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_europeHigh from "@amcharts/amcharts5-geodata/region/world/europeHigh";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_lang_ES from "@amcharts/amcharts5-geodata/lang/ES01";

@Component({
  selector: 'app-tutorial-paises-europa',
  templateUrl: './tutorial-paises-europa.component.html',
  styleUrls: ['./tutorial-paises-europa.component.css']
})
export class TutorialPaisesEuropaComponent {
  ngAfterViewInit(){
    let root = am5.Root.new("chartdiv");
    root.fps = 165;
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push(am5map.MapChart.new(root, {
      panX: "none",
      panY: "none",
      projection: am5map.geoNaturalEarth1()
    }));

    let polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_europeHigh,
      geodataNames: am5geodata_lang_ES,
      exclude: ["SJ", "JE", "GG", "IM", "FO", "AX", "GI"]
    }));

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      toggleKey: "active",
      interactive: true
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color("#74X999"),
    });

    // Make stuff animate on load
    chart.appear(1000, 100);
  }
}
