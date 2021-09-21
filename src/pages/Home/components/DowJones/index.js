import Plot from 'react-plotly.js';
import {HomeContext} from '../../../../context/HomeContext';

const DowJones = () =>{
    const {dowJones}=HomeContext();
    return (
        <div id="dow-jones">
            <div id="dow-jones-graph">
                <Plot
                data={[
                    {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'lightgreen'},
                    }
                ]}
                layout={ {width: 520, height: 350, title: {
                    text:'Dow Jones',
                    font: {
                    family: 'Glory, sans-serif',
                    size: 36,
                    color: 'black'
                    },
                }} }
                config = {{displayModeBar: false}}
                />
            </div>
        </div>
    );
};

export {DowJones};