import Especialidad from "../componentes/Especialidad"

const Registrarse = _ => {
    return (
        <div>
            <h1 class="text-center">Registrarse</h1>
            <form>
                <div class="text-center m-4">
                    <label for="">Nombre completo:</label>
                    <input type="text" />
                </div>
                <div class="text-center m-4">
                    <label for="">Contraseña:</label>
                    <input type="text" />
                </div>
                <div class="text-center m-4">
                    <label for="">Correo electrónico:</label>
                    <input type="email" />
                </div>
                <Especialidad/>
                <div class="text-center m-4">
                    <label for="">Número de colegio médico:</label>
                    <input type="number" />
                </div>
                <div class="text-center m-4">
                    <label for="">CV:</label>
                    <input type="file" />
                </div>

                <div class="text-center m-4">
                    <input type="submit" value="Registrar" />
                </div>

            </form>
        </div>
    )
}

export default Registrarse;