import './style.css';
import {CanvasJSChart} from 'canvasjs-react-charts'
import { useStats } from '../../query/AdminStats/useStats';
import { CircularProgress } from '@mui/material';


const Statistics = ()=>{

    // fetching statistics
    const { data: usersCount, isLoading: isLoadingCount, isFetching: isFetchingCount } = useStats();

    //if data is still fetching
    if(isLoadingCount || isFetchingCount){
        return <CircularProgress/>
    }
    const options = {
        data: [
        {
            type: "column",
            dataPoints: [
                { label: "Clients",  y: usersCount.clients  },
                { label: "Service Providers", y: usersCount.service_providers  },
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