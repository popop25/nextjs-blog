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
  var popUrl = "index.html";
  var popOption = "top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no";
  window.open(popUrl, popOption);
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
