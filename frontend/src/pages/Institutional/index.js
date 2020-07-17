import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.PNG'

export default function Institutional(){
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
                <div className="institutional-container">
                    <div className="content">
                        <h1>Institucional</h1>
                        <h3>Visão</h3>
                        <p>
                            ou seja, o único acréscimo foi a declaração 'justify-content: center'.
                            Tal como previsto na especificação, a funcionalidade 'align-items' controla
                            o alinhamento vertical dos conteúdos de um container 'flex' e a funcionalidade
                            'justify-content' controla o alinhamento horizontal daqueles conteúdos.
                            (Na realidade estas funcionalidades são um pouco mais complexas do que seus 
                            nomes sugerem, mas em resumo esse exemplo simples mostra como funciona o 
                            alinhamento com uso de 'flex'). Um efeito colateral de 'flex' é que o 
                            elemento-filho, P nesse exemplo, assume a menor largura possível.
                        </p>
                        <h3>Missão</h3>
                        <p>
                            ou seja, o único acréscimo foi a declaração 'justify-content: center'.
                            Tal como previsto na especificação, a funcionalidade 'align-items' controla
                            o alinhamento vertical dos conteúdos de um container 'flex' e a funcionalidade
                            'justify-content' controla o alinhamento horizontal daqueles conteúdos.
                            (Na realidade estas funcionalidades são um pouco mais complexas do que seus 
                            nomes sugerem, mas em resumo esse exemplo simples mostra como funciona o 
                            alinhamento com uso de 'flex'). Um efeito colateral de 'flex' é que o 
                            elemento-filho, P nesse exemplo, assume a menor largura possível.
                        </p>
                        <h3>Valores</h3>
                        <p>
                            ou seja, o único acréscimo foi a declaração 'justify-content: center'.
                            Tal como previsto na especificação, a funcionalidade 'align-items' controla
                            o alinhamento vertical dos conteúdos de um container 'flex' e a funcionalidade
                            'justify-content' controla o alinhamento horizontal daqueles conteúdos.
                            (Na realidade estas funcionalidades são um pouco mais complexas do que seus 
                            nomes sugerem, mas em resumo esse exemplo simples mostra como funciona o 
                            alinhamento com uso de 'flex'). Um efeito colateral de 'flex' é que o 
                            elemento-filho, P nesse exemplo, assume a menor largura possível.
                        </p>
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