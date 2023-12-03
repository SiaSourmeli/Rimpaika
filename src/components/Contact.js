import facebookLogo from '../images/facebook-logo.svg'
import instagramLogo from '../images/instagram-logo.svg'

function Contact() {
    return (
        <div>
            <h3 id="contact">CONTACT</h3>
            
            <div className="contact-text-container">
                <p> I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to 
                    add your own content and make changes to the font.</p>
                
                <p>rimpaika@gmail.com</p>
                
                <p>+30 697 787 6313</p>
       
                <div className="contact-media-container">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/rimpaika">
                                <img src={facebookLogo} alt="facebook logo"/>
                            </a>

                            <a href="https://www.facebook.com/rimpaika" alt="instagram logo">
                                <img src={instagramLogo}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    ) 
}

export default Contact;
