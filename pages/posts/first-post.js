import Link from 'next/link';

/*
function bounceball(){
  console.log(location.href);
  location.href = 'index.html';
}
function openWindow() {  
  window.open('https://gmail.com', '_parent');  
} */
function openWindow() {  
  var win = window.open("/index.html", "PopupWin", "width=500,height=600");
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
