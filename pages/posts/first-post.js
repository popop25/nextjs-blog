import Link from 'next/link';

function bounceball(){
  console.log(location.href);
  location.href = 'index.html';
}
/*
function openWindow() {  
  window.open('https://gmail.com', '_parent');  
} */
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
