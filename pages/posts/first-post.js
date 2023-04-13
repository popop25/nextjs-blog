import Link from 'next/link';

function bounceball(){
  location.href = index.html;
  console.log(location.href);
}
export default function FirstPost() {
  return (
    <>
      <h1>pikachu is yellow</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}