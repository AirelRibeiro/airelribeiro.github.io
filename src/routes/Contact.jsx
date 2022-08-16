import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../style/Contact.css';
import gitHubIcon from '../icons/github.svg';
import linkedinIcon from '../icons/linkedin.svg';
import whatsappIcon from '../icons/whatsapp.svg';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_1xjv9nn', 'template_m1mo3dm', form.current, '180-VRWwX3-5FRpgO');
    form.current[0].value = '';
    form.current[1].value = '';
    form.current[2].value = '';
    alert('Sua mensagem foi enviada com sucesso!');
  };

  return (
    <div className="contact-div">
      <div>
        <h2>
          Gostou do meu trabalho e quer entrar em contato?

          Preencha o formulário ao lado ou me procure em um
          dos links abaixo, vou adorar conversar com você.
        </h2>
        <div>
          <a href="https://github.com/AirelRibeiro" target="blanck">
            <img
              src={gitHubIcon}
              alt="gitHub-Icon"
              className="icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/airel-ribeiro/" target="blanck">
            <img
              src={linkedinIcon}
              alt="linkedin-Icon"
              className="icon"
            />
          </a>
          <a href="vvvvvvvvvvvvvvvv" target="blanck">
            <img
              src={whatsappIcon}
              alt="whatsapp-Icon"
              className="icon"
            />
          </a>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="form">
        <label htmlFor="user_name">
          <input type="text" name="user_name" placeholder="Nome" className="input-text" />
        </label>
        <label htmlFor="user_email">
          <input type="email" name="user_email" placeholder="Email" className="input-text" />
        </label>
        <label htmlFor="message">
          <textarea name="message" rows="6" placeholder="Mensagem" className="textarea" />
        </label>
        <input type="submit" value="Enviar" className="button" />
      </form>
    </div>
  );
}

export default Contact;
