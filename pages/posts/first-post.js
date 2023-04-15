import React from 'react';
import fs from 'fs'; // import the Node.js file system module
import path from 'path'; // import the Node.js path module

const IndexPage = ({ htmlContent }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export async function getStaticProps() {
  // Read the contents of the index.html file
  const filePath = path.join(process.cwd(), 'public', 'index.html'); // assuming your index.html file is located in the "public" directory
  const htmlContent = fs.readFileSync(filePath, 'utf8');

  return {
    props: {
      htmlContent,
    },
  };
}

export default IndexPage;

/*
import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
    <script src="first-post.js"></script>
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

*/