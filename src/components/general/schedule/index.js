import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './schedule.scss';



function Schedule () {
    const [data, setData] = useState({schedule: []});

    useEffect( () => {
        const fetchData = async () => {
            const result = await axios (
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



            
// const Schedule = (props) => {

//     let schedule = [];

// axios.get ("http://localhost:3000/data/schedule.json")
//             .then(function(response) {                
//                 console.log(response);
//                 for (var i=0; i < response.data.schedule.length; i++) {
//                     schedule.push(response.data.schedule[i]);
//                 }
//                 console.log("array schedule: ", schedule);
                
//             })

//             .catch(function(error) {
//                 console.log("error");
//             });

//             console.log ("schedule::: ", schedule);
//     return (
        
//     <div className='container'>
//          <h3 className="h3">For phone orders, our work schedule is:</h3>
//          <div className='row'>
//                  <div className='col-md-2'>
//                  {schedule.map(schedule => 
//                  <div 
//                  className='scheduleDays'
//                  key={schedule.pid}>
//                  {schedule.day}
//                  </div>)}
//              </div>
           
//                  <div className='col-md-3'>
//                  {schedule.map(schedule => 
//                  <div 
//                  className='scheduleTimes' 
//                  key={schedule.pid}>
//                  {schedule.open} - {schedule.close}
//                  </div>)}
//              </div>

//          </div>
//      </div>
//     )
     
// }










//         <div>

//             <h3 className="h3">For phone orders, our work schedule is:</h3>
//             {/* key={schedule.pid}>
// //                 {schedule.day}
//              */}
//             <table>
//                 <tbody>

//                 {schedule.map(schedule => 
//                     <tr className="tr"

//                <div className='row'>
//                 <div className='col-md-2'>
//                 {this.state.schedule.map(schedule => 
//                 <div 
//                 className='scheduleDays'
//                 key={schedule.pid}>
//                 {schedule.day}
//                 </div>)}
//             </div>
                
//                 <tr className="tr">
//                     <td className="tdDay" key={schedule.pid}>{schedule.day}</td>
//                     <td className="tdTime">9-17</td>
//                 </tr>

//                 <tr className="tr">
//                     <td className="tdDay">Tuesday</td>
//                     <td className="tdTime">9-17</td>
//                 </tr>

//                 <tr className="tr">
//                     <td className="tdDay">Wednesday</td>
//                     <td className="tdTime">9-19</td>
//                 </tr>

//                 <tr className="tr">
//                     <td className="tdDay">Thursday</td>
//                     <td className="tdTime">9-19</td>
//                 </tr>

//                 <tr className="tr">
//                     <td className="tdDay">Friday</td>
//                     <td className="tdTime">9-21</td>
//                 </tr>

//                 </tbody>

//             </table>

//         </div>
//     )
// }









// import React, {Component} from 'react';
// import axios from 'axios';
// import './schedule.scss';


// ​class Schedule extends Component {
//     constructor(props) {
//     super(props);

//     this.state= {
//         schedule:[]
//     }
//     }
// ​
// componentDidMount = () => {
//     const url= 'http://localhost:3000/data/schedule.json'
//     axios.get(url).then((response) => {
//         console.log('Response: ', response);
//         this.setState({schedule: response.data.schedule});
//     }).catch(() => {
//             console.log('Response Error: ', error);
//     })
// }​

// render(){
//     return (
//     <div className='container'>
//         <h3>For phone orders, our work schedule is:</h3>
//         <div className='row'>
//                 <div className='col-md-2'>
//                 {this.state.schedule.map(schedule => 
//                 <div 
//                 className='scheduleDays'
//                 key={schedule.pid}>
//                 {schedule.day}
//                 </div>)}
//             </div>
           
//                 <div className='col-md-3'>
//                 {this.state.schedule.map(schedule => 
//                 <div 
//                 className='scheduleTimes' 
//                 key={schedule.pid}>
//                 {schedule.open} - {schedule.close}
//                 </div>)}
//             </div>

//         </div>
//     </div>
//         )
//     }
// } 

// export default Schedule;