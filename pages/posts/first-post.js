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
  const win = window.open("https://gmail.com", "PopupWin", "width=500,height=600");
  console.log(win.origin)
}
winPopup();

export default function FirstPost() {
  return (
    <>
      <h1>pikachu is yellow</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <h2>
        
      </h2>
    </>
  );
}
