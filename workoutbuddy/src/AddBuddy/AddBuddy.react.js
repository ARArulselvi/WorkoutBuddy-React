import React from 'react';



class AddBuddy extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            newBuddy:{
                "id":0,
                "BuddyName":"",
                "location":"",
                "phoneNum":""
            }
    }
}

handleSubmit=(event)=>{
    event.preventDefault();
    let url="http://localhost:3000/buddies";
    fetch(url,{
        method:"POST",
        body:JSON.stringify(this.state.newBuddy),
        headers:{
            "Content-Type":"application/json"
        }}).then(resp=>console.log("resource created"));
    console.log("submit called");
    console.log(this.state.newBuddy);
}

handleChange=(event)=>{
    let name=event.target.name;
    let value=event.target.value;

    this.setState(prevState=>({newBuddy:{...prevState.newBuddy,[name]:value}}));
}

    render() {
        return (
           
            <div class="container">
                 <form class="form-center col-md-16" onSubmit={this.handleSubmit}>
                     <div class="form-group col-sm-8">
                    <label htmlFor="">Id</label>
                    <input type="text" class="form-control" name="id" onChange={this.handleChange}/>
                    </div>
                    <div class="form-group col-sm-8">  
                    <label htmlFor="">Name</label>
                    <input type="text" class="form-control" name="BuddyName" onChange={this.handleChange}/>
                    </div>
                    <div class="form-group col-sm-8">
                    <label htmlFor="">Location</label>
                    <input type="text" class="form-control" name="location" onChange={this.handleChange}/>                    
                    </div>
                    <div class="form-group col-sm-8">
                    <label htmlFor="">Phone Number</label>
                    <input type="text" class="form-control" name="phoneNum" onChange={this.handleChange}/>
                    </div>
                    <input type="text" class="btn btn-dark" type="submit"/>
                   
                </form>
                </div>

           
        );
    }
}

export default AddBuddy;