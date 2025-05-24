import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import appFirebase from "../credenciales";
import { useNavigate } from "react-router-dom";

const firestore = getFirestore(appFirebase);
const auth = getAuth(appFirebase);

const PerfilUsuario = () => {
  const [perfil, setPerfil] = useState({
    nombre: "",
    edad: "",
    genero: "",
    peso: "",
    estatura: "",
    objetivo: "",
  });

  const [usuarioId, setUsuarioId] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  // Verifica si el usuario está autenticado y obtiene su UID
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (usuario) => {
      if (usuario) {
        console.log("Usuario autenticado UID:", usuario.uid); // Verifica el UID
        setUsuarioId(usuario.uid);
        try {
          await cargarPerfil(usuario.uid);
        } catch (error) {
          console.error("Error al cargar el perfil:", error);
        } finally {
          setCargando(false); // Asegúrate de que el estado se actualice
        }
      } else {
        console.log("No hay un usuario autenticado.");
        setUsuarioId(null);
        setCargando(false); // También actualiza el estado aquí
      }
    });

    // Limpieza del efecto
    return () => unsubscribe();
  }, []);

  // Carga los datos del perfil desde Firestore
  const cargarPerfil = async (uid) => {
    try {
      const docRef = doc(firestore, "usuarios", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const datos = docSnap.data();
        console.log("Datos cargados del perfil:", datos); // Depuración
        setPerfil({
          ...perfil,
          nombre: datos.nombre || "", // Cargar el nombre automáticamente
          edad: datos.edad || "",
          genero: datos.genero || "",
          peso: datos.peso || "",
          estatura: datos.estatura || "",
          objetivo: datos.objetivo || "",
        });
      } else {
        console.error("El documento no existe.");
      }
    } catch (error) {
      console.error("Error al cargar el perfil:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfil({
      ...perfil,
      [name]: value,
    });
  };

  const handleGuardar = async () => {
    try {
      console.log("Intentando guardar perfil para UID:", usuarioId); // UID que usas
      const datosPerfil = { ...perfil };
      delete datosPerfil.rol; // Elimina el campo 'rol' si existe

      const docRef = doc(firestore, "usuarios", usuarioId);
      console.log("Referencia al documento:", docRef.path); // Ruta del documento en Firestore

      await setDoc(docRef, datosPerfil, { merge: true });
      setMensaje("Perfil guardado con éxito.");
    } catch (error) {
      console.error("Error al guardar el perfil:", error);
      setMensaje("Error al guardar el perfil.");
    }
  };

  const handleVolverAlMenu = () => {
    navigate("/"); // Navegar al menú principal
  };

  if (cargando) {
    return <p>Cargando...</p>;
  }

  if (!usuarioId) {
    return <p>Por favor, inicia sesión para acceder a tu perfil.</p>;
  }

  return (
    <div className="perfil-container">
      <h1>Perfil de Usuario</h1>
      <form className="perfil-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" value={perfil.nombre || ""} disabled />
        </div>

        <div className="form-group">
          <label htmlFor="edad">Edad</label>
          <input
            type="number"
            id="edad"
            name="edad"
            value={perfil.edad}
            onChange={handleChange}
            placeholder="Ingresa tu edad"
          />
        </div>

        <div className="form-group">
          <label htmlFor="genero">Género</label>
          <select
            id="genero"
            name="genero"
            value={perfil.genero}
            onChange={handleChange}
          >
            <option value="">Selecciona tu género</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="peso">Peso (kg)</label>
          <input
            type="number"
            id="peso"
            name="peso"
            value={perfil.peso}
            onChange={handleChange}
            placeholder="Ingresa tu peso en kg"
          />
        </div>

        <div className="form-group">
          <label htmlFor="estatura">Estatura (cm)</label>
          <input
            type="number"
            id="estatura"
            name="estatura"
            value={perfil.estatura}
            onChange={handleChange}
            placeholder="Ingresa tu estatura en cm"
          />
        </div>

        <div className="form-group">
          <label htmlFor="objetivo">Objetivo</label>
          <select
            id="objetivo"
            name="objetivo"
            value={perfil.objetivo}
            onChange={handleChange}
          >
            <option value="">Selecciona tu objetivo</option>
            <option value="Perder peso">Perder peso</option>
            <option value="Ganar masa muscular">Ganar masa muscular</option>
            <option value="Mantenerme saludable">Mantenerme saludable</option>
          </select>
        </div>

        <button type="button" onClick={handleGuardar} className="btn-guardar">
          Guardar
        </button>
      </form>
      {mensaje && <p className="mensaje">{mensaje}</p>}
      <div className="btn-group">
        <button className="boton-regresar" onClick={handleVolverAlMenu}>
          Volver al Menú
        </button>
        <button className="btn-primary" onClick={() => signOut(auth)}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default PerfilUsuario;
