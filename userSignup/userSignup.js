import { useRef } from "react";

export default function UserSignup(props){

    let name = useRef();
    let email = useRef();
    let city = useRef();

    function saveUser(event){
    
        event.preventDefault();
        
        let user = {
          name:name.current.value,
          city:city.current.value,
          email:email.current.value,
        }
        
        event.target.reset();
    
        props.abc([...props.users, user]);
    
      }

    return <form onSubmit={saveUser}>
    <div>
      <input ref={name} className='name' />
    </div>
    <div>
      <input ref={email} className='email' />
    </div>
    <div>
      <select ref={city}>
        <option> Faisalabad   </option>
        <option> Lahore   </option>
        <option> Islamabad   </option>
      </select>
    </div>
    <button>Save User</button>
  </form>

}