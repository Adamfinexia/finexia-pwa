import { useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      }
    });
  }, []);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      router.push("/login");
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Panel użytkownika</h1>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 mt-4">Wyloguj</button>
    </div>
  );
}