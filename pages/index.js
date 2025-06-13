import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Finexia PWA</h1>
      <Link href="/login">Login</Link>
      <br />
      <Link href="/register">Register</Link>
    </div>
  );
}
