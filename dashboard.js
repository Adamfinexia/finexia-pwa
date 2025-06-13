
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { auth } from '../firebaseConfig';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push('/login');
      } else {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  if (!user) return <p>Ładowanie...</p>;

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>👋 Witaj, {user.email}</h1>
      <button onClick={handleLogout}>Wyloguj</button>
    </div>
  );
}
