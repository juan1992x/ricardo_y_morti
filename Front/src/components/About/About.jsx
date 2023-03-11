import a from './About.module.css'
import image from './IMG-zz.png'

export default function About(){
    return(
        <div className={a.container}>
            <img src={image} alt="me" className={a.img} />
            <div className={a.text}>
            <ul >
            <lh className={a.text2}>Esta aplicacion fue creada por:</lh>
                <li>Nombre: JUAN GREGORY OLIVA BURGOS</li>
                <li>Nacionalidad: Peru</li>
                <li>Profesión: Estudie ingeniera de sistemas pero esta trunco "apunto de terminar nada me para"</li>
                <li>Ambiciones: Terminar el curso de programador full stack</li>
                <li>Edad: 29 Años</li>
                </ul> 
                <ol><span  className={a.text2}>Descripción App:</span>
                <li>Agregar personaje con sus caracteristicas</li>
                <li>Eliminar personaje con sus caracteristicas</li>
                <li>Obtener detalle del personaje</li>
                <li>Agregar personaje a favoritos</li>
                <li>Ordenar favorito por genero.</li>
                <li>Ordenar favorito de manera ascendente o descentente</li>
                </ol>
            
            </div>
           
            
        </div>
    )
}