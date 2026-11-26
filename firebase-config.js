// Configuración web del proyecto Firebase "taxiperote". Es pública por diseño;
// la seguridad la dan las reglas de firestore.rules y el inicio de sesión de la central.
export const firebaseConfig = {
  apiKey: "AIzaSyCaJKcYxPFtuAr6G0CogQ9K4F5Bg4LH_vQ",
  authDomain: "taxiperote.firebaseapp.com",
  projectId: "taxiperote",
  appId: "1:190972459152:web:8f8059ef900a41585e0015"
};
export const firebaseListo = () => Object.values(firebaseConfig).every(v => v && !String(v).startsWith('PEGA'));
