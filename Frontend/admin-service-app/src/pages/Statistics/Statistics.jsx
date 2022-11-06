import './style.css';
import {CanvasJSChart} from 'canvasjs-react-charts'

const Statistics = ()=>{

    const options = {
   
        data: [
        {
            type: "column",
            dataPoints: [
                { label: "Clients",  y: 10  },
                { label: "Service Providers", y: 15  },
            ]
        }
        ]
    }   
    return(
        <section className="flex column stats-section">
            <p className='stats-title'>Statistics</p>
            <div className="chart">
			<CanvasJSChart options = {options}
			/>
		</div>
       
        </section>
    );
}

export default Statistics;