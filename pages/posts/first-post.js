import Link from 'next/link';

/*
function bounceball(){
  console.log(location.href);
  location.href = 'index.html';
}
function openWindow() {  
  window.open('https://gmail.com', '_parent');  
} */
function winPopup() {
  window.open("index.html", "a", "width=400, height=300, left=100, top=50");
}

export default function FirstPost() {
  return (
    <>
      <h1>pikachu is yellow</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <h2>
        <input type="button" value="" onclick="winPopup();"/>
      </h2>
    </>
  );
}
