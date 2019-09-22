import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './schedule.scss';


const Schedule = (props) => {
 
const [data, setData] = useState({schedule: []});

    useEffect( () => {
        const fetchData = async () => {
            const result = await axios.get (
                'http://localhost:3000/data/schedule.json', 
            );

        setData(result.data);
    };

        fetchData();
}, []);

    return (
        
        <div className='container'>
             <h3 className="h3">For phone orders, our work schedule is:</h3>
             <div className='row'>
                     <div className='col-md-2'>
                     {data.schedule.map(schedule => 
                     <div 
                     className='scheduleDays'
                     key={schedule.pid}>
                     {schedule.day}
                     </div>)}
                 </div>
               
                     <div className='col-md-3'>
                     {data.schedule.map(schedule => 
                     <div 
                     className='scheduleTimes' 
                     key={schedule.pid}>
                     {schedule.open} - {schedule.close}
                     </div>)}
                 </div>
    
             </div>
         </div>
        )


}

export default Schedule;

