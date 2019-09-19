import React from 'react';
import {Link} from 'react-router-dom';



const Workout = () => {

    return (
        <div >
            <div>
             <nav>
            <ul>
               <button class="btn btn-outline-dark"> <Link to='/fetchworkout'> View Workouts</Link></button> 
               <button class="btn btn-outline-dark"> <Link to='/addworkout'>Add workout</Link></button>
            </ul>
        </nav>
        </div>
        </div>
    );

}

export default Workout;