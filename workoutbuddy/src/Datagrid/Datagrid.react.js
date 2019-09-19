import React from 'react';



const Datagrid = (props) => {

    return (
        <div >
             <table className='table table-striped'>
                {props.children}
               <tbody>
                   {
                       props.buddyList.map((eachBuddy,index)=>{
                            return <tr key={index}>
                                <td>{eachBuddy.BuddyName}</td>
                                <td>{eachBuddy.location}</td>
                                <td>{eachBuddy.phoneNum}</td>
                            </tr>
                       })
                   }
               </tbody>
            </table>

        </div>
    );

}

export default Datagrid;