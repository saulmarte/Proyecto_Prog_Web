import React from 'react'
import './styles/login_Style.css'

const Login = ({ user, setisLogged }) => {

    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.exampleInputEmail1.value.toLowerCase()
        const password = e.target.exampleInputPassword1.value

        if (email != '' && password != '') {
            for (Element of user) {
                if (email == Element.email.toLowerCase() && password == Element.password.toLowerCase()) {
                    setisLogged(true)
                    break;
                }
            }
        } else {
            alert('Favor introducir usuario y/o contraseña')
        }
    }

    return (
        <section className="login__container">
            <form onSubmit={handleSubmit} className='login'>
                <h1 className="tittle__sign-In margin-auto">Log In</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Ingrese su Correo' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Ingrese su contraseña' />
                </div>
                <button type="submit" className="btn btn-dark btn-login">Submit</button>
            </form>
        </section>
    )
}

export default Login