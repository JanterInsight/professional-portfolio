export default function Contact() {
  return (
    <section id="contact" className="card reveal">
      <h2 className="card-title">Contact</h2>
      <div className="contact-grid">
        <a href="mailto:janterinsight@gmail.com" className="contact-item">
          <img src="/icon/email.png" alt="Email" className="contact-icon-img" />
          <span>janterinsight@gmail.com</span>
        </a>
        <a href="https://github.com/JanterInsight" className="contact-item" target="_blank" rel="noopener noreferrer">
          <img src="/icon/github.png" alt="GitHub" className="contact-icon-img contact-icon-github" />
          <span>JanterInsight</span>
        </a>
        <a href="https://www.instagram.com/janlierrojas" className="contact-item" target="_blank" rel="noopener noreferrer">
          <img src="/icon/instagram.png" alt="Instagram" className="contact-icon-img" />
          <span>@janlierrojas</span>
        </a>
        <a href="tel:+5351561931" className="contact-item">
          <span className="contact-icon-emoji">📞</span>
          <span>+53 51561931</span>
        </a>
        <a href="https://wa.me/5351561931" className="contact-item" target="_blank" rel="noopener noreferrer">
          <span className="contact-icon-emoji">💬</span>
          <span>WhatsApp</span>
        </a>
      </div>
    </section>
  )
}