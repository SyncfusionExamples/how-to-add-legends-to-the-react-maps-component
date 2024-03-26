import { MapsComponent, LayersDirective, LayerDirective,Inject, Legend } from '@syncfusion/ej2-react-maps';
import { world_map } from './world_map'

import './App.css';

let uncountries: object[] = [
     { Name: "United States", SeverityLevel: "High", LegendVisibility: true, ShapeColor: "#a69d70"},
     { Name: "India", SeverityLevel: "High", LegendVisibility: true, ShapeColor: "#a69d70" },
     { Name: "Brazil", SeverityLevel: "High", LegendVisibility: true, ShapeColor: "#a69d70"},
     { Name: "United Kingdom", SeverityLevel: "High", LegendVisibility: false, ShapeColor: "#a69d70"},
     { Name: "Russia", SeverityLevel: "High", LegendVisibility: false, ShapeColor: "#a69d70"},
     { Name: "Turkey", SeverityLevel: "High", LegendVisibility: true, ShapeColor: "#a69d70"},
     { Name: "France", SeverityLevel: "High", LegendVisibility: true, ShapeColor: "#a69d70"},
     { Name: "Iran", SeverityLevel: "Moderate", LegendVisibility: true, ShapeColor: "#A4D6AD"},
     { Name: "Spain", SeverityLevel: "Moderate", LegendVisibility: true, ShapeColor: "#A4D6AD"},
     { Name: "Italy", SeverityLevel: "Moderate", LegendVisibility: false, ShapeColor: "#A4D6AD"},
     { Name: "Argentina", SeverityLevel: "Moderate", LegendVisibility: false, ShapeColor: "#A4D6AD"},
     { Name: "Colombia", SeverityLevel: "Moderate", LegendVisibility: false, ShapeColor: "#A4D6AD"},
     { Name: "Indonesia", SeverityLevel: "Low", LegendVisibility: true, ShapeColor: "#DEEBAE"},
     { Name: "Poland", SeverityLevel: "Low", LegendVisibility: false, ShapeColor: "#DEEBAE"},
     { Name: "Mexico", SeverityLevel: "Low", LegendVisibility: true, ShapeColor: "#DEEBAE"},
     { Name: "Ukraine", SeverityLevel: "Low", LegendVisibility: false, ShapeColor: "#DEEBAE"},
     { Name: "South Africa", SeverityLevel: "Low", LegendVisibility: true, ShapeColor: "#DEEBAE"},
     { Name: "Netherlands", SeverityLevel: "Low", LegendVisibility: false, ShapeColor: "#DEEBAE"}
  ];
  
function App() {
  return (
    <div className="App">
      <MapsComponent titleSettings={ { text: 'Covid-19 Affected Countries' } }
       legendSettings={ {
         visible: true,
         position:'Bottom',
         alignment: 'Far',
         shape:'Rectangle',
         shapeHeight:20,
         shapeWidth:15,
         showLegendPath: 'LegendVisibility',
         mode: 'Interactive',
         toggleLegendSettings: {
          enable: true,
          border: { width: 2, color: 'red'},
          applyShapeSettings: false
          }
        } }>
      <Inject services={[Legend]} />
      <LayersDirective>
        <LayerDirective shapeData={world_map} dataSource={uncountries} 
        shapeDataPath='Name' shapePropertyPath='name'
        
        shapeSettings={ {
          colorValuePath: 'ShapeColor',
          //   colorMapping: [
          //   { value: 'High', color: '#A69d70'},
          //   { value: 'Moderate', color: '#A4D6AD',showLegend: false},
          //   { value: 'Low', color: '#DEEBAE'},
          // ],
        fill: '#E5E5E5'
      } }
      >
        </LayerDirective>
      </LayersDirective>
    </MapsComponent>
    </div>
  );
}

export default App;
