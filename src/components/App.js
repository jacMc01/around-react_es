// Necesita corrección: Este archivo debe ser almacenado en tu carpeta `components`.
//corregido

import React from "react";
import '../../src/index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {ContextoProvider} from "../hooks/ContextoProvider";


function App() {

    return (
    <>
        <Header />
        <ContextoProvider>
            <Main />
        </ContextoProvider>
        <Footer />
    </>
    );
}

export default App;

// ¡Hola Jacqueline!


// En primer lugar, me gustaría felicitarte por tu esfuerzo en la construcción de tu proyecto. Hiciste un buen trabajo en reproducir las funcionalidades solicitadas referentes a tus llamadas API, ¡bien hecho!

// Sin embargo, hay algunos pequeños problemas que deben solucionarse antes de que se apruebe su proyecto. Puedes encontrar mejores detalles para cada uno en sus respectivos comentarios en tu proyecto devuelto. Nota que aún hay oportunidad de mejorar tu diseño y algunos detalles en la estructura de tu proyecto, como la importación unificada de archivos CSS por ejemplo. También podrías empezar a implementar tu estructura BEM dentro de la carpeta "blocks".


// Un pequeño recordatorio:

// Ten en cuenta que tu proyecto será aprobado cuando todas las observaciones marcadas como "Necesita corrección" sean solucionadas. Una vez hecho esto, su trabajo será aprobado y podrá continuar con su aprendizaje. Aparte de eso, espero haber cubierto casi todo en tu proyecto, ¡te deseo éxito y buena suerte en tus estudios!

//Muchas gracias por las correcciones, estoy muy contenta, he corregido todo, solo tengo una duda en el popup de la imagen para posicionar la X, he intentado de diferentes maneras, no se si podria darme una sugerencia, gracias!!
