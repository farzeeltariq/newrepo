export default (props)=>{

    return <div>
            <table>
                {
                    props.users.map((user)=>{
                        return <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                        </tr>
                    })
                }
                </table>
        </div>

}