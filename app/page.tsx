import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-xl gap-5 mt-10">
      <div className="flex">
        <Link href="counter">Counter App</Link>
      </div>
      <div className="flex">
        <Link href="progressbar">ProgressBar App</Link>
      </div>
      <div className="flex">
        <Link href="formdata">Input Form</Link>
      </div>
    </div>
  );
}
