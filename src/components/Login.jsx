import React, { useState, useEffect } from 'react';
import Imagen from '../assets/imagen3login.png';
import ImageProfile from '../assets/perfil.jpg';

import appFirebase from '../credenciales';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(appFirebase);

const Login = () => {
    const [attemptCount, setAttemptCount] = useState(0);
    const [isLocked, setIsLocked] = useState(false);
    const [lockTimer, setLockTimer] = useState(0);

    useEffect(() => {
        let interval;
        if (isLocked && lockTimer > 0) {
            interval = setInterval(() => {
                setLockTimer((prev) => prev - 1);
            }, 1000);
        } else if (lockTimer === 0) {
            setIsLocked(false);
            setAttemptCount(0);
        }
        return () => clearInterval(interval);
    }, [isLocked, lockTimer]);

    const handleLockout = () => {
        setIsLocked(true);
        setLockTimer(30); // 30 segundos de bloqueo
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value.trim();
        const contraseña = e.target.password.value.trim();

        if (isLocked) {
            alert(`Por favor espere ${lockTimer} segundos antes de intentar nuevamente.`);
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, correo, contraseña);
            setAttemptCount(0); // Reinicia el contador tras un inicio de sesión exitoso
        } catch (error) {
            const newAttemptCount = attemptCount + 1;
            setAttemptCount(newAttemptCount);

            if (newAttemptCount >= 3) {
                handleLockout();
                alert("Demasiados intentos fallidos. Por favor espere 30 segundos antes de intentar nuevamente.");
            } else {
                alert(`Correo o contraseña incorrectos. Intentos restantes: ${3 - newAttemptCount}`);
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <img
                    src={ImageProfile}
                    alt="Perfil"
                    className="img-fluid rounded-circle mx-auto d-block"
                    style={{ width: '100px', height: '100px', marginBottom: '20px' }}
                />
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Ingrese su email"
                        className="login-input"
                        id="email"
                        disabled={isLocked}
                        name="email"
                    />
                    <input
                        type="password"
                        placeholder="Ingresar contraseña"
                        className="login-input"
                        id="password"
                        disabled={isLocked}
                        name="password"
                    />
                    <button
                        className="login-button"
                        disabled={isLocked}
                    >
                        {isLocked ? `Bloqueado (${lockTimer}s)` : "Inicia Sesión"}
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Login;
