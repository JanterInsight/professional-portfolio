export default function Contact() {
  const icon = (file) => `${import.meta.env.BASE_URL}icon/${file}`

  return (
    <section id="contact" className="card reveal">
      <h2 className="card-title">Contact</h2>
      <div className="contact-grid">
        <a href="mailto:janterinsight@gmail.com" className="contact-item">
          <img src={icon('mail.svg')} alt="Email" width="32" height="32" className="contact-icon-img" />
          <span>janterinsight@gmail.com</span>
        </a>
        <a href="https://github.com/JanterInsight" className="contact-item" target="_blank" rel="noopener noreferrer">
          <img src={icon('brand-github.svg')} alt="GitHub" width="32" height="32" className="contact-icon-img" />
          <span>JanterInsight</span>
        </a>
        <a href="https://www.instagram.com/janlierrojas" className="contact-item" target="_blank" rel="noopener noreferrer">
          <img src={icon('brand-instagram.svg')} alt="Instagram" width="32" height="32" className="contact-icon-img" />
          <span>@janlierrojas</span>
        </a>
        <a href="https://www.linkedin.com/in/janlier-rojas-4b36b2430" className="contact-item" target="_blank" rel="noopener noreferrer">
          <img src={icon('brand-linkedin.svg')} alt="LinkedIn" width="32" height="32" className="contact-icon-img" />
          <span>LinkedIn</span>
        </a>
        <a href="tel:+5351561931" className="contact-item">
          <img src={icon('phone.svg')} alt="Phone" width="32" height="32" className="contact-icon-img" />
          <span>+53 51561931</span>
        </a>
        <a href="https://wa.me/5351561931" className="contact-item" target="_blank" rel="noopener noreferrer">
          <img src={icon('brand-whatsapp.svg')} alt="WhatsApp" width="32" height="32" className="contact-icon-img" />
          <span>WhatsApp</span>
        </a>
      </div>
    </section>
  )
}