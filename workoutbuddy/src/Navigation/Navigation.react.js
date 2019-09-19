import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AddBuddy from '../AddBuddy/AddBuddy.react';
import FetchBuddies from '../FetchBuddies/FetchBuddies.react';
 import AddWorkout from '../AddWorkout/AddWorkout.react';
// import WorkoutDetails from '../WorkoutDetails/WorkoutDetails.react';
import Workout from '../Workout/Workout.react';
import FetchWorkout from '../FetchWorkout/FetchWorkout.react';
import Posts from '../Posts/Posts.react';

const Navigation = () => {

    return (
        <div >
            <main>
                 <Switch>
                   {/* <Route exact path="/" component={Content}></Route> */}
                    <Route path="/fetch" component={FetchBuddies}></Route>
                    <Route path="/add" component={AddBuddy}></Route>
                    <Route path="/workout" component={Workout}></Route>
                 
                 
                    <Route path="/addworkout" component={AddWorkout}></Route>
                    <Route path="/fetchworkout" component={FetchWorkout}></Route>
                    <Route path="/posts" component={Posts}></Route>
                </Switch>
            </main>
        </div>
    );

}

export default Navigation;