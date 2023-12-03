function Footer() {
    const currentYear = new Date().getFullYear();

    return (
      <footer>
        <div>&copy; {currentYear} by Sia Sourmeli. All rights reserved.</div>
      </footer>
    );
  }

export default Footer;