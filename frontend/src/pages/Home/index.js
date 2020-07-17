import React from 'react';
import { Link } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


import './styles.css';

import logoImg from '../../assets/logo.PNG';
import iconImg1 from '../../assets/icons/inst.png';
import iconImg2 from '../../assets/icons/course.png';
import iconImg3 from '../../assets/icons/moodle.png';
import carrosseuTop1 from '../../Images/carouselTop/carrosseu1.gif';
import carrosseuTop2 from '../../Images/carouselTop/carrosseu2.png';
import carrosseuFoot1 from '../../Images/carouselFoot/UEA.png';
import carrosseuFoot2 from '../../Images/carouselFoot/UFMT.png';


const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
    <AutoplaySlider  
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
        bullets={false}
        organicArrows={false}
    >
        <div data-src={carrosseuTop1}/>
        <div data-src={carrosseuTop2}/>
        <div data-src={carrosseuTop1}/>      
    </AutoplaySlider>
);

const sliderFoot = (
    <AutoplaySlider  
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
        bullets={false}
        organicArrows={false}
        
    >
        <div data-src={carrosseuFoot1}/>
        <div data-src={carrosseuFoot2}/>
        <div data-src={carrosseuFoot1}/>
     
    </AutoplaySlider>
);

export default function Home(){
    

 
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
                <div className="home-container">
                    <div className="carousel">
                        {slider}
                    </div>

                    <div className="information">
                        <section>
                            <div>
                                <h4>Institucional</h4>
                                <img src={iconImg1} alt=""/>
                                <p>Missão Visão e Valores da empresa.</p>
                                <Link to="/institucional"><button className="button">Acessar</button></Link>
                            </div>

                            <div>
                                <h4>Cursos</h4>
                                <img src={iconImg2} alt=""/>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                                <Link to="/cursos"><button className="button">Acessar</button></Link>
                            </div>

                            <div>
                                <h4>Ensino a distância</h4>
                                <img src={iconImg3} alt=""/>
                                <p>Cicero are also reproduced in their exact original form, versions from the 1914 translation by H. Rackham.</p>
                                <Link to="/moodle"><button className="button">Acessar</button></Link>
                            </div>
                        </section>
                    </div>

                    <div className="about">
                        <h3>SIGAMED EDUCAÇÃO</h3>
                        <p>
                            Somos uma solução integrada e completa para as necessidades da gestão da saúde de municípios,
                            clínicas, hospitais, unidades básicas e outras unidades de saúde. Tendo em mente transparência,
                            colaboração e agilidade, nosso software foi desenhado por profissionais da área da saúde,
                            em conjunto com profissionais de tecnologia.
                            Tudo isso para trazer um pacote completo e moderno para a saúde pública e privada.
                            Atendimento multiprofissional, Prontuário Eletrônico do Paciente, gestão de leitos e vagas,
                            agendamento de consultas, acompanhamentos de situações de saúde, solicitação de exames,
                            indicadores de gestão e de saúde, relatórios, prescrição segura de medicamentos e muito mais.
                            Tudo isso para oferecer o melhor para quem importa: o ser humano.
                            A SIGA Med é uma empresa do grupo SIGA SERVICE IT LTDA, que vem inovando em tecnologias na área da saúde, com inovação e responsabilidade. Todo o nosso sistema está alinhado à LGPD, assim como adequação ao sistema openEHR, do governo federal brasileiro.
                        </p>
                    </div>

                    <section className="information2">
                        <h1>Coronavírus</h1>
                        <p>(Covid-19)</p>
                    </section>

                    <section className="carouselFoot">
                        {sliderFoot} 
                    </section>
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
