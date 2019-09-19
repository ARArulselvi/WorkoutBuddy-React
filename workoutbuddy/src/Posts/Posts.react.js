import React from 'react';


import Feedback from '../Feedback/Feedback.react';



class Posts extends React.Component {
    constructor(props) {
        super(props);
       
        this.state={
            postsList:[]
            
        }
    }


    componentDidMount(){
        let url="http://localhost:3000/posts/?visibility=public";
        fetch(url).then(resp=>resp.json()).then(postsList=>this.setState({postsList}));
        
    }
   
    render() {
        
        return (
           
            <div >
                 <table className='table table-striped'>
              
              <tbody>
                  {        
                       this.state.postsList.map((eachpost,index)=>{
                     
                           return <tr key={index}>
                               <td>{eachpost.Name}</td>
                               <td>{eachpost.details}</td>
                               
                               <td><Feedback likes={eachpost.likes} obj={eachpost} comments={eachpost.comments}></Feedback></td>
                               
                           </tr>
                      })
                  }
              </tbody>
           </table>


            </div>
        );
    
                }
            }

export default Posts;