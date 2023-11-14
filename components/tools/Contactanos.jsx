import React from 'react';

const Contactanos = () => {
  // Reemplaza '123456789' con tu número de WhatsApp
  const phoneNumber = '+56950117295';
  
  // Construye la URL de WhatsApp con el número de teléfono
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const handleContactClick = () => {
    // Abre la URL de WhatsApp en una nueva ventana
    window.open(whatsappUrl, '_blank');
  };

  return (
    <li className="header-btn" onClick={handleContactClick}>
      <a href="#" className="btn">
        Contáctanos
      </a>
    </li>
  );
};

export default Contactanos;