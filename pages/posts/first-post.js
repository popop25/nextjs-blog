import Link from 'next/link';
/*
function bounceball(){
  location.href = index.html;
  console.log(location.href);
} */
function openWindow() {  
  window.open('https://gmail.com', '_parent');  
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
