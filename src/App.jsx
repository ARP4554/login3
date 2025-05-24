// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Importando Firebase
import appFirebase from '../src/credenciales';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

// Importando componentes
import Login from '../src/components/Login';
import Home from '../src/components/Home';
import Perfil from '../src/components/Perfil';
import Rutinas from '../src/components/Rutinas';
import Recomendaciones from '../src/components/Recomendaciones';
import AdminPanel from '../src/components/AdminPanel';

import './App.css';

const auth = getAuth(appFirebase);
const firestore = getFirestore(appFirebase);

function App() {
    const [usuario, setUsuario] = useState(null);
    const [perfil, setPerfil] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (usuarioFirebase) => {
            if (usuarioFirebase) {
                setUsuario(usuarioFirebase);
                // Cargar perfil
                const docRef = doc(firestore, "usuarios", usuarioFirebase.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setPerfil(docSnap.data());
                }
            } else {
                setUsuario(null);
                setPerfil(null);
            }
            setCargando(false);
        });

        return () => unsubscribe();
    }, []);

    if (cargando) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
            <Router>
                {usuario ? (
                    <Routes>
                        <Route path="/" element={<Home correoUsuario={usuario.email} />} />
                        <Route path="/perfil" element={<Perfil />} />
                        <Route path="/rutinas" element={<Rutinas />} />
                        <Route path="/recomendaciones" element={<Recomendaciones />} />
                        {perfil && perfil.rol === "admin" && (
                            <Route path="/adminpanel" element={<AdminPanel />} />
                        )}
                        {/* Ruta por defecto */}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                ) : (
                    <Routes>
                        <Route path="*" element={<Login />} />
                    </Routes>
                )}
            </Router>
        </div>
    );
}

export default App;
