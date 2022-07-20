import { Link, useNavigate } from "react-router-dom";
import Especialidad from "../componentes/Especialidad"
import Axios from "axios"
import React from "react"

const Registrarse = (props) => {
    const navigate = useNavigate();

    const [projectBody, setProjectBody] = React.useState({
        name: "",
        password: "",
        email: "",
        numcolegio: "",
        cv: ""        
    })

    const registrar = (event) =>{
        navigate(props.toRegistrar)  
        
        event.preventDefault()
        console.log(projectBody)
        Axios.post("https://proy-backend.herokuapp.com/registros_med",{
            id:1,
            name: projectBody.name,
            password: projectBody.password,
            email: projectBody.email,
            numcolegio: projectBody.numcolegio,
            cv: projectBody.cv
        }).then(res=>{
            console.log("MIRA")
            console.log(res.data);
            navigate("/")
            
        } ).catch(console.log)
    }

    const handleChange = (event) =>{
        const {name,value} = event.target
        setProjectBody(prevBody => ({   
                ...prevBody,
                [name] : value
                       
        }))
    }

    return (
        <div>
            <h1 class="text-center">Registrarse</h1>
            <form>
                <div class="text-center m-4">
                    <label for="">Nombre completo:</label>
                    <input type="text"
                    onChange={handleChange} 
                    name="name"
                    value={projectBody.name} />
                </div>
                <div class="text-center m-4">
                    <label for="">Contraseña:</label>
                    <input type="text"
                    onChange={handleChange} 
                    name="password"
                    value={projectBody.password}/>
                </div>
                <div class="text-center m-4">
                    <label for="">Correo electrónico:</label>
                    <input type="email"
                    onChange={handleChange} 
                    name="email"
                    value={projectBody.email}/>
                </div>
                <Especialidad/>
                <div class="text-center m-4">
                    <label for="">Número de colegio médico:</label>
                    <input type="number"
                    onChange={handleChange} 
                    name="numcolegio"
                    value={projectBody.numcolegio}/>
                </div>
                <div class="text-center m-4">
                    <label for="">CV:</label>
                    <input type="file"
                    onChange={handleChange} 
                    name="cv"
                    value={projectBody.cv}/>
                </div>

                <div class="text-center m-4">
                    <button onClick={registrar}>Registrar</button>
                </div>

            </form>
        </div>
    )
}

export default Registrarse;