import React from 'react'

function Performances() {
  return (
    <div className="contenu">   
      <h2>Performances</h2>
      <ul className="flex">
        <li>
          <h3>Laugh</h3>
          <img className="image" src="https://zupimages.net/up/19/27/1ibw.jpg" alt="Photo de clown"/>
          <p>As an adult, come and discover our irresistible clowns, between practical jokes and pranks let yourself be carried away by their joy and fall back into childhood.</p>
        </li>
        <li>
          <h3>Dream</h3>
          <img className="image" src="https://zupimages.net/up/19/27/14zy.jpg" alt="Photo de magicienne"/>
          <p>Let yourself be carried away in a world where the real and the imaginary are one, in the company of our talented magicians,discover a wonderful world limited only by your imagination.</p>
        </li>
        <li>
          <h3>Marvel at</h3>
          <img className="image" src="https://zupimages.net/up/19/27/850t.jpg" alt="Photo de tigre"/>
          <p>Tame the untameable in the company of our tamers, between roar and razor-sharp claws,watch these fierce felines turn into sweet kittens.</p>
        </li>
      </ul>
    </div>
  );
}

export default Performances;
