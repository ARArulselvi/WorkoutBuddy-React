import React from 'react';



const DisplayWorkouts = (props) => {

    return (
        <div >
            <table className='table table-striped'>
              
              <tbody>
                  {
                   
                     
                   // console.log(Date.parse("2019-02-23").getDay())
                   
                   
                       props.workoutList.map((eachworkout,index)=>{
                     
                           var diff1=(new Date().getTime())-new Date(eachworkout.date).getTime();
                           var diffdays=Math.floor(diff1/(1000*60*60*24));
                           var d=new Date(eachworkout.date)
                        var curr_month=new Date().getMonth();
                        console.log("curr month"+curr_month)
                           var month=d.getMonth();
                           console.log(d+" month "+month)
                           if(props.diff==30){
                               console.log("last month")
                               if(month==curr_month-1){
                                console.log("first if"+month)
                                return <tr key={index}>
                                <td>{eachworkout.details}</td>
                                <td>{eachworkout.date}</td>
                                <td>{eachworkout.scope}</td> 
                                <td>{eachworkout.likes}</td> 
                            </tr>
                               }
                               
                           } else  if(diffdays<props.diff && diffdays!=0){
                            console.log("second if");
                           return <tr key={index}>
                               <td>{eachworkout.details}</td>
                               <td>{eachworkout.date}</td>
                              
                               <td>{eachworkout.scope}</td> 
                                <td>{eachworkout.likes}</td> 
                           </tr>
                           } 
                      })
                  }
              </tbody>
           </table>

        </div>
    );

}

export default DisplayWorkouts;