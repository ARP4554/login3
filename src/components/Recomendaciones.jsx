import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import appFirebase from "../credenciales";

const firestore = getFirestore(appFirebase);
const auth = getAuth(appFirebase);

const Recomendaciones = () => {
  const [objetivo, setObjetivo] = useState("");
  const [recomendaciones, setRecomendaciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  const navigate = useNavigate(); // Inicializa navigate

  useEffect(() => {
    onAuthStateChanged(auth, async (usuario) => {
      if (usuario) {
        const uid = usuario.uid;
        await cargarObjetivo(uid);
      }
    });
  }, []);

  const cargarObjetivo = async (uid) => {
    try {
      const docRef = doc(firestore, "usuarios", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const perfil = docSnap.data();
        setObjetivo(perfil.objetivo);

        let recomendacionesDinamicas = [];
        switch (perfil.objetivo) {
          case "Perder peso":
            recomendacionesDinamicas = [
              "Controla las porciones en cada comida y evita comer en exceso.",
              "Bebe al menos 2 litros de agua al día para mantenerte hidratado y reducir el hambre.",
              "Planifica tus comidas y snacks para evitar decisiones impulsivas.",
              "Incluye alimentos ricos en fibra, como frutas, verduras, legumbres y cereales integrales.",
              "Realiza entrenamientos cardiovasculares como correr, nadar o andar en bicicleta 4-5 veces a la semana.",
              "Prioriza el consumo de grasas saludables como aguacate, nueces y aceite de oliva.",
              "Duerme al menos 7-8 horas diarias para evitar desequilibrios hormonales que aumentan el apetito.",
              "Evita los alimentos ultraprocesados y altos en azúcares añadidos.",
              "Realiza ejercicios de fuerza para preservar la masa muscular mientras pierdes grasa.",
              "Practica el mindful eating (comer consciente) para identificar cuándo estás realmente lleno.",
            ];
            break;
          case "Ganar masa muscular":
            recomendacionesDinamicas = [
              "Consume una cantidad suficiente de calorías para crear un excedente calórico.",
              "Aumenta el consumo de proteínas a 1.6-2.2 gramos por kilogramo de peso corporal.",
              "Realiza ejercicios compuestos como sentadillas, peso muerto y press de banca.",
              "Incorpora suplementos como proteína en polvo o creatina, si es necesario.",
              "Come cada 3-4 horas para asegurar un flujo constante de nutrientes.",
              "Realiza un calentamiento dinámico antes de entrenar y estiramientos después.",
              "Mantén un diario de entrenamiento para medir tu progreso y aumentar gradualmente el peso.",
              "Prioriza la ingesta de carbohidratos antes y después del entrenamiento para optimizar la recuperación.",
              "Descansa lo suficiente entre sesiones de entrenamiento para permitir la recuperación muscular.",
              "Come grasas saludables, como las que se encuentran en pescados grasos, semillas y mantequilla de maní.",
            ];
            break;
          case "Mantenerme saludable":
            recomendacionesDinamicas = [
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
            ];
            break;
          default:
            recomendacionesDinamicas = ["Selecciona un objetivo en tu perfil."];
        }
        setRecomendaciones(recomendacionesDinamicas);
      }
    } catch (error) {
      console.error("Error al cargar el objetivo:", error);
    } finally {
      setCargando(false);
    }
  };

  if (cargando) {
    return <p>Cargando recomendaciones...</p>;
  }

  return (
    <div>
      <h1>Recomendaciones Nutricionales</h1>
      <h2>Objetivo: {objetivo || "No definido"}</h2>
      {recomendaciones.length > 0 ? (
        <table className="recomendaciones-tabla">
          <thead>
            <tr>
              <th>#</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {recomendaciones.map((rec, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{rec}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay recomendaciones disponibles.</p>
      )}
      {/* Botón de regresar */}
      <button onClick={() => navigate('/')} className="boton-regresar">
        Regresar al Menú
      </button>
    </div>
  );
};

export default Recomendaciones;
