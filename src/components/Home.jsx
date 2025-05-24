import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDumbbell, faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
const firestore = getFirestore(appFirebase);
// Imagenes
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

// Datos de las rutinas semanales
const rutinasSemanales = {
  lunes: [
    { nombre: "Extensiones para pierna en máquina", reps: "4 series con 10 reps", imagen: Extensiones },
    { nombre: "Sentadilla con barra", reps: "4 series con 15 reps", imagen: Sentadilla },
    { nombre: "Peso muerto rumano en máquina Smith", reps: "4 series con 12 reps", imagen: Pesomuertorems },
    { nombre: "Curl sentado", reps: "3 series con 12 reps", imagen: Curlsentado },
    { nombre: "Aducciones en máquina", reps: "4 series con 14 reps", imagen: Aduccionesenmaquina },
    { nombre: "Elevaciones de talón sentado", reps: "4 series con 14 reps", imagen: Elevacionesdetalon },
    { nombre: "Patada de glúteo en máquina", reps: "3 series con 15 reps", imagen: Patadadegluteoenmaquina },
    { nombre: "Hiperextensiones en banco romano", reps: "3 series con 12 reps", imagen: Hiperetenciones },
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
    { nombre: "Abducciones de cadera en máquina", reps: "3 series con 12 reps", imagen: Aduccionesenmaquina },
    { nombre: "Extensión de talones en prensa", reps: "3 series con 16 reps", imagen: ExtensionTalonesPrensa },
    { nombre: "Peso muerto búlgaro con mancuernas", reps: "3 series con 14 reps", imagen: PesoMuertoBulgaro },
  ],
  domingo: [
    { nombre: "Cruce de poleas desde media altura", reps: "4 series con 8 reps", imagen: CrucePoleas },
    { nombre: "Dominadas asistidas con agarre prono (en máquina)", reps: "4 series con 10 reps", imagen: DominadasAsistidas },
    { nombre: "Press militar sentado con barra", reps: "4 series con 10 reps", imagen: PressMilitarBarra },
    { nombre: "Elevaciones laterales con mancuerna sentado", reps: "3 series con 10 reps", imagen: ElevacionesLateralesSentado },
    { nombre: "Press inclinado con barra", reps: "3 series con 8 reps", imagen: PressInclinadoBarra },
    { nombre: "Curl de bíceps en banco scott (predicador)", reps: "4 series con 10 reps", imagen: CurlBancoScott },
    { nombre: "Press copa", reps: "4 series con 14 reps", imagen: PressCopa },
  ],
};
const reorganizarRutinas = (rutinas, objetivo) => {
  const ordenes = {
    "Perder peso": [2, 0, 4, 1, 3], // Ejemplo de orden específico
    "Ganar masa muscular": [1, 3, 0, 4, 2],
    "Mantenerme saludable": [4, 1, 2, 0, 3],
  };

  const orden = ordenes[objetivo] || []; // Orden por defecto si no hay un objetivo definido
  return Object.keys(rutinas).reduce((nuevoOrden, dia) => {
    const rutinaOriginal = rutinas[dia];
    const rutinaReorganizada = orden.map((index) => rutinaOriginal[index]).filter(Boolean);
    nuevoOrden[dia] = rutinaReorganizada.length ? rutinaReorganizada : rutinaOriginal;
    return nuevoOrden;
  }, {});
};

// Recomendaciones nutricionales
const recomendacionesPorObjetivo = {
  "Perder peso": [
   "Controla las porciones en cada comida y evita comer en exceso.",
                "Bebe al menos 2 litros de agua al día para mantenerte hidratado y reducir el hambre.",
                "Planifica tus comidas y snacks para evitar decisiones impulsivas.",
                "Incluye alimentos ricos en fibra, como frutas, verduras, legumbres y cereales integrales.",
                "Realiza entrenamientos cardiovasculares como correr, nadar o andar en bicicleta 4-5 veces a la semana.",
                "Prioriza el consumo de grasas saludables como aguacate, nueces y aceite de oliva.",
                "Duerme al menos 7-8 horas diarias para evitar desequilibrios hormonales que aumentan el apetito.",
                "Evita los alimentos ultraprocesados y altos en azúcares añadidos.",
                "Realiza ejercicios de fuerza para preservar la masa muscular mientras pierdes grasa.",
                "Practica el mindful eating (comer consciente) para identificar cuándo estás realmente lleno."
  ],
  "Ganar masa muscular": [
    "Consume una cantidad suficiente de calorías para crear un excedente calórico.",
    "Aumenta el consumo de proteínas a 1.6-2.2 gramos por kilogramo de peso corporal.",
    "Realiza ejercicios compuestos como sentadillas, peso muerto y press de banca.",
    "Incorpora suplementos como proteína en polvo o creatina, si es necesario.",
    "Come cada 3-4 horas para asegurar un flujo constante de nutrientes.",
    "Realiza un calentamiento dinámico antes de entrenar y estiramientos después.",
    "Mantén un diario de entrenamiento para medir tu progreso y aumentar gradualmente el peso.",
    "Prioriza la ingesta de carbohidratos antes y después del entrenamiento para optimizar la recuperación.",
    "Descansa lo suficiente entre sesiones de entrenamiento para permitir la recuperación muscular.",
    "Come grasas saludables, como las que se encuentran en pescados grasos, semillas y mantequilla de maní."
  ],
  "Mantenerme saludable": [
    "Sigue una dieta variada y equilibrada que incluya todos los grupos alimenticios.",
    "Realiza al menos 150 minutos de actividad física moderada a la semana, como caminar o nadar.",
    "Limita el consumo de sal para reducir el riesgo de presión arterial alta.",
    "Evita el tabaco y el alcohol o consúmelos con moderación.",
    "Haz chequeos médicos regulares para monitorear tu estado de salud.",
    "Prioriza actividades que reduzcan el estrés, como la meditación o el yoga.",
    "Mantén un horario de sueño consistente, durmiendo entre 7 y 9 horas diarias.",
    "Lava tus manos con regularidad y mantén una buena higiene personal.",
    "Consume probióticos naturales como yogur o kéfir para promover la salud intestinal.",
    "Pasa tiempo al aire libre para obtener suficiente vitamina D y mejorar tu estado de ánimo.",
  ],
};
// Función para obtener el día actual
const obtenerDiaActual = () => {
  const dias = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
  const fecha = new Date();
  return dias[fecha.getDay()];
};

const auth = getAuth(appFirebase);
// Cronómetro
const Cronometro = () => {
  const [tiempo, setTiempo] = useState(0); // Tiempo en segundos
  const [corriendo, setCorriendo] = useState(false);

  useEffect(() => {
    let intervalo;
    if (corriendo) {
      intervalo = setInterval(() => {
        setTiempo((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalo);
  }, [corriendo]);

  const reiniciarCronometro = () => {
    setTiempo(0);
    setCorriendo(false);
  };

  const formatearTiempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const seg = segundos % 60;
    return `${minutos.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
  };

  return (
    <div className="cronometro">
      <h3>Cronómetro</h3>
      <p>{formatearTiempo(tiempo)}</p>
      <button onClick={() => setCorriendo(!corriendo)}>
        {corriendo ? 'Parar' : 'Iniciar'}
      </button>
      <button onClick={reiniciarCronometro}>Reiniciar</button>
    </div>
  );
};
const Home = ({ correoUsuario }) => {
  const [rutinaHoy, setRutinaHoy] = useState([]);
  const [indiceActual, setIndiceActual] = useState(0);
  const [completado, setCompletado] = useState(false);
  const [recomendacionHoy, setRecomendacionHoy] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const verificarRolUsuario = async () => {
      const usuarioActual = auth.currentUser;
  
      if (usuarioActual) {
        const docRef = doc(firestore, 'usuarios', usuarioActual.uid);
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          const perfil = docSnap.data();
  
          // Redirigir si el rol es 'admin'
          if (perfil.rol === 'admin') {
            navigate('/adminpanel');
          } else {
            setObjetivo(perfil.objetivo || ""); // Configura el objetivo del usuario
          }
        }
      } else {
        // Si no hay usuario autenticado, redirige a la vista de login
        navigate('/login');
      }
    };
  
    verificarRolUsuario();
  }, []); // El segundo argumento [] asegura que se ejecute solo una vez
  

  useEffect(() => {
    const diaActual = obtenerDiaActual();
    
    // Verifica si el objetivo está definido antes de reorganizar las rutinas
    if (objetivo) {
      const rutinasReorganizadas = reorganizarRutinas(rutinasSemanales, objetivo);
      setRutinaHoy(rutinasReorganizadas[diaActual] || []);
    } else {
      setRutinaHoy(rutinasSemanales[diaActual] || []);
    }
  
    // Obtén el objetivo del usuario si no está definido
    const obtenerObjetivoUsuario = async () => {
      const usuarioActual = auth.currentUser;
      if (usuarioActual) {
        const docRef = doc(firestore, 'usuarios', usuarioActual.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const perfil = docSnap.data(); // Aquí se obtiene el perfil
          setObjetivo(perfil.objetivo || ""); // Actualiza el estado con el objetivo
        }
      }
    };
  
    obtenerObjetivoUsuario();
  }, [objetivo]);
  

  useEffect(() => {
    if (objetivo && recomendacionesPorObjetivo[objetivo]) {
      const recomendaciones = recomendacionesPorObjetivo[objetivo];
      const aleatoria = recomendaciones[Math.floor(Math.random() * recomendaciones.length)];
      setRecomendacionHoy(aleatoria);
    }
  }, [objetivo]);

  const marcarComoCompletado = () => {
    if (indiceActual < rutinaHoy.length - 1) {
      setIndiceActual(indiceActual + 1);
      setCompletado(false);
    } else {
      setCompletado(true);
    }
  };



  
  return (
     <div className="home-container">
      <div className="layout">
        {/* Recomendación Nutricional */}
        <div className="recomendaciones">
          <h2>Recomendación para tu objetivo</h2>
          <p>{recomendacionHoy || "Selecciona tu objetivo en el perfil para recibir recomendaciones."}</p>
        </div>
        {/* Rutinas */}
        <div className="rutinas">
          <h1>Bienvenido, {correoUsuario}</h1>
          <div className="rutina-hoy">
            <h2>Rutina para hoy</h2>
            {rutinaHoy.length > 0 ? (
              completado ? (
                <p>¡Felicidades! Has completado todos los ejercicios de hoy.</p>
              ) : (
                <div className="ejercicio-actual">
                  {rutinaHoy[indiceActual]?.imagen && (
                    <img src={rutinaHoy[indiceActual].imagen} alt={rutinaHoy[indiceActual].nombre} />
                  )}
                  <h3>{rutinaHoy[indiceActual]?.nombre}</h3>
                  <p>{rutinaHoy[indiceActual]?.reps}</p>
                  <button onClick={marcarComoCompletado}>Marcar como completado</button>
                </div>
              )
            ) : (
              <p>¡Hoy no hay rutina programada!</p>
            )}
          </div>
        </div>

        {/* Otra sección si se requiere */}
        <div className="tercera-seccion">
          <h2>Cronometro de apoyo</h2>
          <Cronometro />
        </div>
      </div>

      {/* Submenú fijo */}
      <nav className="bottom-menu">
        <ul>
          <li><Link to="/perfil"><FontAwesomeIcon icon={faUser} /> Perfil</Link></li>
          <li><Link to="/rutinas"><FontAwesomeIcon icon={faDumbbell} /> Rutinas</Link></li>
          <li><Link to="/recomendaciones"><FontAwesomeIcon icon={faAppleAlt} /> Recomendaciones</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
