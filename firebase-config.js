// Pega aquí la configuración de tu proyecto Firebase (Configuración del proyecto › Tus apps › Web).
// Es pública por diseño; la seguridad la dan las reglas de firestore.rules.
export const firebaseConfig = {
  apiKey: "PEGA_AQUI",
  authDomain: "PEGA_AQUI",
  projectId: "PEGA_AQUI",
  appId: "PEGA_AQUI"
};
export const firebaseListo = () => Object.values(firebaseConfig).every(v => v && !String(v).startsWith('PEGA'));
