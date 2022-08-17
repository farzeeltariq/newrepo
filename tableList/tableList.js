export default function TableList(props){   
    
    return <table border="1">
    {
      props.users.map((myUser, myIndex)=>{
        return <tr>
          <td>{myUser.name}</td>
          <td>{myUser.email}</td>
          <td>{myUser.city}</td>
          <td>
            <button onClick={()=>{

                    props.users.splice(myIndex, 1);
                    props.setUsers([...props.users]);

            }}>DEL</button>
          </td>
          <td>
            <button onClick={()=>{

                    props.users[myIndex].city = prompt("new city btyne");
                    props.setUsers([...props.users]);

            }}>EDIT</button>
          </td>
        </tr>
      })
    }
  </table>

}