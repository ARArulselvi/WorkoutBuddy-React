import React from 'react';
import Datagrid from '../Datagrid/Datagrid.react';



class FetchBuddies extends React.Component {
    constructor(props) {
        super(props);
        this.state ={buddyList:[]}
    }
    componentDidMount(){
        let url="http://localhost:3000/buddies";
        fetch(url).then(resp=>resp.json()).then(buddyList=>this.setState({buddyList}));
    }

    render() {
        return (
            <div >
                
                <Datagrid buddyList={this.state.buddyList}></Datagrid>

            </div>
        );
    }
}

export default FetchBuddies;