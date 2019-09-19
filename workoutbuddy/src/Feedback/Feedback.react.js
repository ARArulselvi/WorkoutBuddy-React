import React from 'react';

import axios from 'axios'


class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            likeCount:props.likes,
            comment:"",
            comments:[props.comments]
        }
    }

    componentDidMount(){
        console.log("component did mount")
    }
    componentDidUpdate(){
        console.log("'component did update")
        let obj = this.props.obj;
        // console.log("object")
        // console.log(obj)
        // console.log("component did update "+this.state.comments)
        // obj.likes= obj.likes+1
        obj.likes=this.state.likeCount;
        obj.comments=this.state.comments
          axios.put("http://localhost:3000/posts/"+this.props.obj.id,
            obj   )
            .then(res => console.log(res))      
    }

    incrementLike=()=>{
        // console.log("function")
        this.setState({likeCount:this.state.likeCount+1})
        // console.log(this.state.likeCount)
    }

  

    handleChange=(event)=>{
        // console.log("handle change")
        let name=event.target.name;
        let value=event.target.value;
        // console.log(value)
        this.setState({
           comment:value
       })
       console.log("handle change= setstate")
    }

    appendComments=(comment)=>{
        
        //this.setState({comments:this.state.comments.concat(this.state.comment)})
        this.setState(prevState=>({
            comments:[...prevState.comments,comment]
        }));

        console.log("append comments = setstate")
        // console.log("append comments "+this.state.comments)
    }
   
    

    render() {
        console.log("render")
        return (
            
            <div >
                
                <button class="btn btn-outline-dark" onClick={()=>this.incrementLike()}>Like {this.state.likeCount}</button>
                <p>Comments:  {this.state.comments.map(eachComment=> <p>{eachComment+" "}</p>)} </p>
                <div class="form-group col-sm-8">
                        <input type="text" class="form-control" name="comments" onChange={this.handleChange} />
                        <button onClick={()=>this.appendComments(this.state.comment)}>Comment</button>
                </div> 
               
           </div>
        );
    }
}

export default Feedback;