import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>My cprg306 assignment</h1>
      <p><Link href="/week-2">Go to Week2</Link></p>
      <p><Link href="/week-3">Go to Week3</Link></p>
      <p><Link href="/week-4">Go to Week4</Link></p>
      <p><Link href="/week-5">Go to Week5</Link></p>
      <p><Link href="/week-6">Go to Week6</Link></p>
    </div>
  );
}
