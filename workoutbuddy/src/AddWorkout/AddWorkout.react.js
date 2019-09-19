import React from 'react';



class AddWorkout extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            newWorkout:{
                "id":0,
                "details": "",
                "date": "",
                "visibility": "",
                "likes": 0,
                "comments": ""
            }
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        let url="http://localhost:3000/myWorkout";
        fetch(url,{
            method:"POST",
            body:JSON.stringify(this.state.newWorkout),
            headers:{
                "Content-Type":"application/json"
            }}).then(resp=>console.log("resource created"));
        console.log("submit called");
        console.log(this.state.newWorkout);
    }
    
    handleChange=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
    
        this.setState(prevState=>({newWorkout:{...prevState.newWorkout,[name]:value}}));
    }
    
        render() {
            return (
               <div class="container">
                     <form class="form-center col-md-16" onSubmit={this.handleSubmit}>
                     <div class="form-group col-sm-8">
                     <label htmlFor="">Id</label>
                        <input type="text" class="form-control"  name="id" onChange={this.handleChange}/>
                        </div><div class="form-group col-sm-8">
                        <label htmlFor="">Details</label>
                        <input type="text" class="form-control"  name="details" onChange={this.handleChange}/>
                        </div>
                        <div class="form-group col-sm-8">
                        <label htmlFor="">Date</label>
                        <input type="date" class="form-control"  name="date" onChange={this.handleChange}/>     
                        </div>     
                        <div class="form-group col-sm-8">
                        <label htmlFor="">Visibility</label>
                        <select name="visibility" class="form-control col-sm-2"  onChange={this.handleChange}>
                            <option name="visibility" value="private">Private</option>
                            <option name="visibility" value="public" >Public</option>
                        </select>
                        </div>           
                        <input class="btn btn-dark" type="text" type="submit"/>
                    </form>
                    </div>
              
            );
        }
    }



export default AddWorkout;