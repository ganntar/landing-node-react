import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.PNG';

import testeImg from '../../Images/carouselTop/carrosseu1.gif';

export default function Blog(){
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
                <div className="blog-container">
                    
                    <div className="content">
                        <h2>Blog</h2>
                        <div  className="post">
                            <ol>
                            <li> <img src={testeImg} alt=""/> </li> 
                            <li> <h1>Teste</h1> </li> 
                            <li> <p>Em todos os nossos compromissos, imprevistos podem ocorrer e dificultar a 
                                    nossa logística. No consultório, não é diferente — chamamos de “absenteísmo” 
                                    quando o paciente não pode, por motivos diversos, comparecer a um agendamento. 
                                    Embora o cancelamento de consulta seja uma situação extraordinária, isso não 
                                    significa ...
                                    </p>
                                </li>
                                <li> <a href="">Ver mais</a> </li>
                            </ol>

                            <ol>
                            <li> <img src="" alt=""/> </li> 
                            <li> <h1>Teste</h1> </li> 
                            <li> <p>Em todos os nossos compromissos, imprevistos podem ocorrer e dificultar a 
                                    nossa logística. No consultório, não é diferente — chamamos de “absenteísmo” 
                                    quando o paciente não pode, por motivos diversos, comparecer a um agendamento. 
                                    Embora o cancelamento de consulta seja uma situação extraordinária, isso não 
                                    significa ...
                                    </p>
                                </li>
                                <li> <a href="">Ver mais</a> </li>
                            </ol>
                        </div>
                        <section className="pagination">
                            <a href="">1</a>
                            <a href="">2</a>
                            <a href="">3</a>
                            <label htmlFor="">...</label>
                            <a href="">10</a>
                        </section>
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