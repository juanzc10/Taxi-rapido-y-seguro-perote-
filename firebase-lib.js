import { firebaseConfig, firebaseListo } from './firebase-config.js';
const V = '10.14.1', B = `https://www.gstatic.com/firebasejs/${V}/`;
let cargado = null;
// Carga Firebase solo si ya está configurado (si no, la app funciona igual solo con WhatsApp).
export function fb() {
  if (!firebaseListo()) return Promise.resolve(null);
  if (!cargado) cargado = (async () => {
    const [app, fs, au] = await Promise.all([import(B + 'firebase-app.js'), import(B + 'firebase-firestore.js'), import(B + 'firebase-auth.js')]);
    const a = app.initializeApp(firebaseConfig);
    return { fs, au, db: fs.getFirestore(a), auth: au.getAuth(a) };
  })();
  return cargado;
}
export async function registrarPedido(p) {
  const f = await fb(); if (!f) return false;
  const { collection, addDoc, serverTimestamp } = f.fs;
  await addDoc(collection(f.db, 'pedidos'), { ...p, estado: 'pendiente', creado: serverTimestamp() });
  return true;
}
