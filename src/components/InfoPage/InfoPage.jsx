import React from 'react';
import './InfoPage.css'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container paragraph_spacing">
      <h2>The History of Wine - Part 1</h2>
      <br/>
      <img className='info_image' src='https://www.traveloffpath.com/wp-content/uploads/2021/06/Napa-Valley-vineyard.jpg.webp' />
      <p>The oldest fossil proto-wines without grapes were found in China, in 7000 BC, and also evidence of ancient wine production found in Georgia and in both of two countries from c. 6000 BC (the earliest known traces of grape wine), West Azerbaijan province of Iran from c. 5000 BC, Armenia from c. 4100 BC (large-scale production), and Sicily from c. 4000 BC. The earliest evidence of a grape and rice mixed based fermented drink sometimes compared to wine was found in ancient China (c. 7000 BC).

The altered consciousness produced by wine has been considered religious since its origin. The ancient Greeks worshiped Dionysus or Bacchus and the Ancient Romans carried on his cult. Consumption of ritual wine, probably a certain type of sweet wine originally, was part of Jewish practice since Biblical times and, as part of the eucharist commemorating Jesus's Last Supper, became even more essential to the Christian Church. Although Islam nominally forbade the production or consumption of wine, during its Golden Age, alchemists such as Geber pioneered wine's distillation for medicinal and industrial purposes such as the production of perfume.

Wine production and consumption increased, burgeoning from the 15th century onwards as part of European expansion. Despite the devastating 1887 phylloxera louse infestation, modern science and technology adapted and industrial wine production and wine consumption now occur throughout the world.</p>
    </div>
  );
}

export default InfoPage;
