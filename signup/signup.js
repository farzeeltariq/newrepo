import { useRef } from "react"
import { useForm } from "react-hook-form";

export default (props)=>{

   let data = useForm();

    // let nameRef = useRef();
    // let emailRef = useRef();
    // let passwordRef = useRef();

    function saveUser(nyaUser){

        // let nyaUser = {
        //     name:nameRef.current.value,
        //     email:emailRef.current.value,
        //     password:passwordRef.current.value,
        // }
        console.log(nyaUser)
        props.setUsers([...props.users, nyaUser]);


    }

    return <div>
        <form   onSubmit={data.handleSubmit(saveUser)}>
        <div>
            <input {...data.register("name",{required:true})} />
            {data.formState.errors.name && <div className="error"> name dy bsdk</div>}
        </div>

        <div>
            <input {...data.register("email",{required:true})}/>
            {data.formState.errors.email && <div className="error"> name dy bsdk</div>}
        </div>

        <div>
            <input {...data.register("password",{required:true,minLength:6})}/>
            {data.formState.errors.password && <div className="error"> pass dy bsdk</div>}
            {data.formState.errors.minLength && <div className="error"> pass dy bsdk</div>}
        </div>
        <button >Submit</button>


        </form>

    </div>

}