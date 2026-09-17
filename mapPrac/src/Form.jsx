import React, { useState } from 'react'

const Form = () => {
    // const [name, setName] =useState('')
    // const [email, setEmail] =useState('')
    // const [password, setPassword] =useState('')
    // const formHandle = (e) =>{
    //     e.preventDefault();
    //     console.log(name, email, password)
    // }

    let [formdata, setFormdata] = useState({
        name : ' ',
        email: ' ',
        pass : ' ',
        phone: ' '
    })
    function handler(e){
        const {name, value} =e.target;
        setFormdata({...formdata, [name] : value})
    }
    let formHandler = (e) =>{
        e.preventDefault();
        console.log(formdata);
    }
  return (
    <div>
      <h2>FORM HANDLING</h2>
      <form action="" onSubmit={formHandler}>
        <div>
            Name  : <input type="text" onChange={handler} name="name" required
            value={formdata.name}
            
             />
        </div>
        <br />
        <div>
            Email  :<input type="email" onChange={handler} name='email' required value={formdata.email} />
        </div>
        <br />
        <div>
            Pass   :<input type="password" onChange={handler} name='pass' required value={formdata.password} />
        </div>
        <br />
        <div>
            Phone   :<input type="number" onChange={handler} name='phone' required value={formdata.phone} />
        </div>
        <br />
        <div>
            <input type="submit" value="Submit" />
        </div> 
      </form>
    </div>
  )
}

export default Form
