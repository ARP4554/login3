import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
// Imágenes
import Extensiones from '../assets/Extensiones.jpeg';
import Sentadilla from '../assets/Sentadilla.jpg';
import Pesomuertorems from '../assets/Pesomuertorems.jpg';
import Curlsentado from '../assets/Curlsentado.jpg';
import Aduccionesenmaquina from '../assets/Aduccionesenmaquina.jpg';
import Elevacionesdetalon from '../assets/Elevacionesdetalon.jpg';
import Patadadegluteoenmaquina from '../assets/Patadadegluteoenmaquina.jpg';
import Hiperetenciones from '../assets/Hiperetenciones.jpg';

import PressInclinadoMancuernas from '../assets/PressInclinadoMancuernas.png';
import PressBancaBarra from '../assets/PressBancaBarra.jpg';
import PressCopa from '../assets/PressCopa.jpg';
import ElevacionesLateralesSentado from '../assets/ElevacionesLateralesSentado.jpg';
import CrunchAbdominalLastre from '../assets/CrunchAbdominalLastre.jpg';

import RemoSentadoPolea from '../assets/RemoSentadoPolea.jpg';
import JalonesAgarreNeutro from '../assets/JalonesAgarreNeutro.jpg';
import CurlArana from '../assets/CurlArana.jpg';
import FacePull from '../assets/FacePull.jpg';
import CurlBicepsBarraZ from '../assets/CurlBicepsBarraZ.jpg';
import FlexionMuneca from '../assets/FlexionMuneca.jpg';

import HipThrustMaquina from '../assets/HipThrustMaquina.jpg';
import DesplantesEstaticos from '../assets/DesplantesEstaticos.jpg';
import CurlAcostadoMaquina from '../assets/CurlAcostadoMaquina.jpg';
import ExtensionTalonesPrensa from '../assets/ExtensionTalonesPrensa.png';
import PesoMuertoBulgaro from '../assets/PesoMuertoBulgaro.jpg';

import CrucePoleas from '../assets/CrucePoleas.jpg';
import DominadasAsistidas from '../assets/DominadasAsistidas.jpg';
import PressMilitarBarra from '../assets/PressMilitarBarra.jpg';
import CurlBancoScott from '../assets/CurlBancoScott.jpg';
import PressInclinadoBarra from '../assets/PressInclinadoBarra.jpg';

const rutinasSemanales = {
    lunes: [
        { nombre: "Extensiones para pierna en máquina", reps: "4 series con 10 reps", imagen: Extensiones },
        { nombre: "Sentadilla con barra", reps: "4 series con 15 reps",imagen: Sentadilla },
        { nombre: "Peso muerto rumano en máquina Smith", reps: "4 series con 12 reps",imagen: Pesomuertorems },
        { nombre: "Curl sentado", reps: "3 series con 12 reps" ,imagen: Curlsentado},
        { nombre: "Aducciones en máquina", reps: "4 series con 14 reps",imagen: Aduccionesenmaquina },
        { nombre: "Elevaciones de talón sentado", reps: "4 series con 14 reps",imagen: Elevacionesdetalon },
        { nombre: "Patada de glúteo en máquina", reps: "3 series con 15 reps",imagen: Patadadegluteoenmaquina },
        { nombre: "Hiperextensiones en banco romano", reps: "3 series con 12 reps",imagen: Hiperetenciones  },
    ],
    martes: [
        { nombre: "Press inclinado con mancuernas", reps: "4 series con 10 reps", imagen: PressInclinadoMancuernas },
        { nombre: "Press militar en máquina", reps: "4 series con 8 reps", imagen: PressMilitarBarra },
        { nombre: "Press de banca horizontal con barra", reps: "3 series con 8 reps", imagen: PressBancaBarra },
        { nombre: "Press copa", reps: "4 series con 12 reps", imagen: PressCopa },
        { nombre: "Elevaciones laterales con mancuerna sentado", reps: "3 series con 10 reps", imagen: ElevacionesLateralesSentado },
        { nombre: "Crunch abdominal con lastre", reps: "3 series con 14 reps", imagen: CrunchAbdominalLastre },
    ],
    miercoles: [
        { nombre: "Remo sentado en polea", reps: "4 series con 8 reps", imagen: RemoSentadoPolea },
        { nombre: "Jalones al pecho con agarre neutro", reps: "4 series con 8 reps", imagen: JalonesAgarreNeutro },
        { nombre: "Curl araña con mancuernas", reps: "4 series con 8 reps", imagen: CurlArana },
        { nombre: "Face pull", reps: "4 series con 14 reps", imagen: FacePull },
        { nombre: "Curl de bíceps en barra Z", reps: "3 series con 12 reps", imagen: CurlBicepsBarraZ },
        { nombre: "Flexión de muñeca con mancuernas", reps: "3 series con 16 reps", imagen: FlexionMuneca },
    ],
    jueves: [
        { nombre: "Hip thrust en máquina", reps: "4 series con 10 reps", imagen: HipThrustMaquina },
        { nombre: "Patada de glúteo en máquina", reps: "4 series con 15 reps", imagen: Patadadegluteoenmaquina },
        { nombre: "Desplantes estáticos con mancuerna", reps: "4 series con 15 reps", imagen: DesplantesEstaticos },
        { nombre: "Curl acostado en máquina", reps: "4 series con 15 reps", imagen: CurlAcostadoMaquina },
        { nombre: "Abducciones de cadera en máquina", reps: "3 series con 12 reps", imagen: Aduccionesenmaquina},
        { nombre: "Extensión de talones en prensa", reps: "3 series con 16 reps", imagen: ExtensionTalonesPrensa },
        { nombre: "Peso muerto búlgaro con mancuernas", reps: "3 series con 14 reps", imagen: PesoMuertoBulgaro },
    ],
    viernes: [
        { nombre: "Cruce de poleas desde media altura", reps: "4 series con 8 reps", imagen: CrucePoleas },
        { nombre: "Dominadas asistidas con agarre prono (en máquina)", reps: "4 series con 10 reps", imagen: DominadasAsistidas },
        { nombre: "Press militar sentado con barra", reps: "4 series con 10 reps", imagen: PressMilitarBarra },
        { nombre: "Elevaciones laterales con mancuerna sentado", reps: "3 series con 10 reps", imagen: ElevacionesLateralesSentado },
        { nombre: "Press inclinado con barra", reps: "3 series con 8 reps", imagen: PressInclinadoBarra },
        { nombre: "Curl de bíceps en banco scott (predicador)", reps: "4 series con 10 reps", imagen: CurlBancoScott },
        { nombre: "Press copa", reps: "4 series con 14 reps", imagen: PressCopa },

    ],
};

const Rutinas = () => {
    const [diaSeleccionado, setDiaSeleccionado] = useState(null);
    const navigate = useNavigate(); // Hook para navegación

    return (
        <div className="rutinas">
            <h2>Selecciona un día para ver la rutina</h2>
            <div className="dias-semana">
                {Object.keys(rutinasSemanales).map((dia) => (
                    <button key={dia} onClick={() => setDiaSeleccionado(dia)}>
                        {dia.charAt(0).toUpperCase() + dia.slice(1)}
                    </button>
                ))}
            </div>
            {diaSeleccionado && (
                <div className="rutina-dia mostrar">
                <h3>Rutina para {diaSeleccionado.charAt(0).toUpperCase() + diaSeleccionado.slice(1)}</h3>
                <div className="ejercicios">
                    {rutinasSemanales[diaSeleccionado].map((ejercicio, index) => (
                        <div key={index} className="ejercicio">
                            {ejercicio.imagen && (
                                <img
                                    src={ejercicio.imagen}
                                    alt={ejercicio.nombre}
                                    className="tamaño-imagen"
                                />
                            )}
                            <p><strong>{ejercicio.nombre}</strong></p>
                            <p>{ejercicio.reps}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            )}
            <button onClick={() => navigate('/')} className="boton-regresar">
                Regresar al Menú
            </button>
        </div>
    );
};

export default Rutinas;
