import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error) {
      alert("Błąd logowania");
    }
  };

  return (
    <div className="p-8">
      <input className="border p-2 m-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="border p-2 m-2" type="password" placeholder="Hasło" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white p-2 m-2" onClick={handleLogin}>Zaloguj</button>
    </div>
  );
}