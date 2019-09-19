import React from 'react';
import DatePicker from "react-datepicker";
import getDay from "date-fns/getDay";
import DisplayWorkouts from '../DisplayWorkouts/DisplayWorkouts.react';


class FetchWorkout extends React.Component {
    constructor(props) {
        super(props);
        this.state ={workoutList:[],
        difference:Math.pow(2,53)}
    }
    componentDidMount(){
        let url="http://localhost:3000/myWorkout";
        fetch(url).then(resp=>resp.json()).then(workoutList=>this.setState({workoutList}));
    }

    changeDifference(diff){
        this.setState({difference:diff})
        //console.log(this.state.difference);
    }
   

    render() {
        return (
            <div >
                <button class="btn btn-outline-dark" onClick={()=>this.changeDifference(Math.pow(2,53))}>All</button>
                <button class="btn btn-outline-dark" onClick={()=>this.changeDifference(2)}>Yesterday</button>
                <button class="btn btn-outline-dark" onClick={()=>this.changeDifference(8)}>Last Week</button>
                <button class="btn btn-outline-dark" onClick={()=>this.changeDifference(30)}>Last Month</button>
                
                 <DisplayWorkouts diff={this.state.difference} workoutList={this.state.workoutList}></DisplayWorkouts>        

    
                

            </div>
        );
    }
}

export default FetchWorkout;