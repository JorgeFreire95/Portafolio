import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // REEMPLAZA ESTOS VALORES CON LOS TUYOS DE EMAILJS
        // Crea tu cuenta en https://www.emailjs.com/
        const SERVICE_ID = 'service_pvapcgd';
        const TEMPLATE_ID = 'template_bk1rf7g';
        const PUBLIC_KEY = 'TAYhA_Y3fwLcp2oSk';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Contáctame</h2>
                <div className="contact-content glass">
                    <p className="contact-text">
                        ¿Tienes un proyecto en mente o simplemente quieres saludar?
                        ¡Envíame un mensaje!
                    </p>

                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <div className="form-group">
                            <input type="text" name="user_name" placeholder="Nombre" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="user_email" placeholder="Email" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <textarea name="message" placeholder="Mensaje" className="form-input" rows="5" required></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>

                        {status === 'success' && <p className="success-msg">¡Mensaje enviado con éxito!</p>}
                        {status === 'error' && <p className="error-msg">Hubo un error. Por favor intenta de nuevo.</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
