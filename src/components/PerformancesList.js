import React from 'react';
import Performances from './Performances'
const perfo = [
  {
    titre: "Laugh",
    image: "https://zupimages.net/up/19/27/1ibw.jpg",
    text: "As an adult, come and discover our irresistible clowns, between practical jokes and pranks let yourself be carried away by their joy and fall back into childhood."
  },
  {
    titre: "Dream",
    image: "https://zupimages.net/up/19/27/14zy.jpg",
    text: "Let yourself be carried away in a world where the real and the imaginary are one, in the company of our talented magicians,discover a wonderful world limited only by your imagination."
  },
  {
    titre: "Marvel At",
    image: "https://zupimages.net/up/19/27/850t.jpg",
    text: "Tame the untameable in the company of our tamers, between roar and razor-sharp claws,watch these fierce felines turn into sweet kittens."
  }
];

const PerformancesList = () => (
  <div className="perfo">
    {perfo.map(item => (
    <Performances titre={item.titre} image={item.image} text={item.text} />
    )
    )}
  </div>
);

export default PerformancesList;