import { useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (!user) router.push('/login');
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
}
