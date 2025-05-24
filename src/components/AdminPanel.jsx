import React, { useEffect, useState } from "react";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    setDoc,
    updateDoc,
    deleteDoc,
    getDoc,
} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import appFirebase from "../credenciales";

const firestore = getFirestore(appFirebase);
const auth = getAuth(appFirebase);

const AdminPanel = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [nuevoUsuario, setNuevoUsuario] = useState({
        email: "",
        nombre: "",
        contraseña: "",
    });
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const verificarAdmin = async () => {
            const usuario = auth.currentUser;
            if (!usuario) {
                alert("No estás autenticado.");
                navigate("/login");
                return;
            }
            const docRef = doc(firestore, "usuarios", usuario.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const datos = docSnap.data();
                if (datos.rol !== "admin") {
                    alert("No tienes permisos para acceder a esta página.");
                    navigate("/");
                }
            }
        };
        verificarAdmin();
    }, [navigate]);

    useEffect(() => {
        const cargarUsuarios = async () => {
            const querySnapshot = await getDocs(collection(firestore, "usuarios"));
            const usuariosList = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setUsuarios(usuariosList);
        };
        cargarUsuarios();
    }, []);

    const handleAgregarUsuario = async (e) => {
        e.preventDefault();
        if (!nuevoUsuario.email || !nuevoUsuario.nombre || !nuevoUsuario.contraseña) {
            setMensaje("Todos los campos son obligatorios.");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                nuevoUsuario.email,
                nuevoUsuario.contraseña
            );
            const userId = userCredential.user.uid;

            const userRef = doc(firestore, "usuarios", userId);
            await setDoc(userRef, {
                email: nuevoUsuario.email,
                nombre: nuevoUsuario.nombre,
                rol: "usuario",
            });

            setUsuarios((prev) => [
                ...prev,
                { id: userId, email: nuevoUsuario.email, nombre: nuevoUsuario.nombre, rol: "usuario" },
            ]);
            setNuevoUsuario({ email: "", nombre: "", contraseña: "" });
            setMensaje("Usuario agregado correctamente.");
        } catch (error) {
            console.error("Error al agregar usuario:", error);
            setMensaje("Error al agregar usuario.");
        }
    };

    const handleActualizarUsuario = async (id, updates) => {
        try {
            if ("rol" in updates) {
                setMensaje("No puedes modificar el rol del usuario.");
                return;
            }
            const userRef = doc(firestore, "usuarios", id);
            await updateDoc(userRef, updates);
            setUsuarios((prev) =>
                prev.map((usuario) => (usuario.id === id ? { ...usuario, ...updates } : usuario))
            );
            setMensaje("Usuario actualizado correctamente.");
        } catch (error) {
            console.error("Error al actualizar usuario:", error);
            setMensaje("Error al actualizar usuario.");
        }
    };

    const handleEliminarUsuario = async (id) => {
        try {
            const userRef = doc(firestore, "usuarios", id);
            await deleteDoc(userRef);
            setUsuarios((prev) => prev.filter((usuario) => usuario.id !== id));
            setMensaje("Usuario eliminado correctamente.");
        } catch (error) {
            console.error("Error al eliminar usuario:", error);
            setMensaje("Error al eliminar usuario.");
        }
    };

    return (
        <div className="admin-panel">
            <h1>Panel de Administración</h1>
            <button onClick={() => signOut(auth)} className="btn-cerrar-sesion">
                Cerrar Sesión
            </button>
            {mensaje && <p>{mensaje}</p>}

            <form onSubmit={handleAgregarUsuario}>
                <input
                    type="text"
                    placeholder="Email"
                    value={nuevoUsuario.email}
                    onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, email: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Nombre"
                    value={nuevoUsuario.nombre}
                    onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={nuevoUsuario.contraseña}
                    onChange={(e) =>
                        setNuevoUsuario({ ...nuevoUsuario, contraseña: e.target.value })
                    }
                />
                <button type="submit">Agregar Usuario</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Nombre</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((user) => (
                        <tr key={user.id}>
                            <td>{user.email}</td>
                            <td>
                                <input
                                    type="text"
                                    value={user.nombre}
                                    onChange={(e) =>
                                        setUsuarios((prev) =>
                                            prev.map((u) =>
                                                u.id === user.id
                                                    ? { ...u, nombre: e.target.value }
                                                    : u
                                            )
                                        )
                                    }
                                />
                            </td>
                            <td>{user.rol}</td>
                            <td>
                                <button
                                    onClick={() =>
                                        handleActualizarUsuario(user.id, { nombre: user.nombre })
                                    }
                                >
                                    Guardar Cambios
                                </button>
                                <button onClick={() => handleEliminarUsuario(user.id)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPanel;
