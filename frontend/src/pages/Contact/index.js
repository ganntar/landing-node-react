import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.PNG';

export default function Contact(){
    return (
        <div>
             <header className="menu-container">
                <div className="information-container"/>

                <div className="menus">
                    <Link>
                        <img src={logoImg} />
                    </Link>
                    
                    <ul>
                        <li><Link to="/">Home</Link> </li>
                        <li><Link to="/cursos">Cursos</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/moodle" style={{ color: '#FF8300'}} >Acessar Moodle</Link></li>
                    </ul>
                    <Link>
                        <button className="button">Entrar</button>
                    </Link>
                </div>
            </header>

            <section className="main">
                <div className="contact-container">
                    <h2>Contato</h2>
                    <div className="content">
                        <form>
                            <input 
                                className="input-group" 
                                type="text" 
                                placeholder="Nome Completo"
                            />

                            <input 
                                className="input-group" 
                                type="text" 
                                placeholder="E-mail"
                            />

                            <input
                                style={{width: 300}}
                                className="input-group" 
                                type="text" 
                                placeholder="Telefone"
                            />

                            <textarea 
                                className="input-group" 
                                placeholder="Assunto"
                            />

                            <button 
                                className="button" 
                            > 
                            Enviar</button>
                        </form>
                    </div>
                </div>
            </section>
        
            <footer className="footer-container">
                <div className="contact">
                    <ul>
                        <li>CENTRAL DE ATENDIMENTO</li>
                        <li>WHATSAPP</li>
                        <li>E-MAIL</li>
                    </ul>
                    <ul>
                        <li>+55 62 3921-2001</li>
                        <li>(62) 98155 - 6934</li>
                        <li>contato@siga-med.com</li>
                    </ul>
                </div>
                <div className="cnpj">
                    <h5>18.798.408/0001-16 - SIGA SERVICE IT LTDA. - SIGAMED</h5>
                    <p>2019 © Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
}