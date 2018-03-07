import React from 'react'
import Link from 'gatsby-link'
import ExperienceCard from '../components/cards/ExperienceCard'
console.log(ExperienceCard);
const IndexPage = () => (
  <div style={{ textAlign: 'center'}}>
    <h1>Sobre mim</h1>
    <p>
      Eu sou um desenvolvedor apaixonado pelo javascript.
      Atualmente tenho trabalhado com aplicativos React + Redux e estudando frameworks JS para participar desta incrível linguagem assíncrona e seus benefícios.
      Na minha experiência de P&D, trabalhei com o framework Electron Cross-Platform com o React + Redux para aprimorar o software desktop.
      A linguagem de programação que tenho como base é Java. Eu também trabalhei com framework JavaFX.
      Posso gerenciar banco de dados MongoDB e manter a integridade dos dados e usar técnicas de indexação para melhorar o desempenho das consultas.
      Tenho habilidades para gerenciar Testing e CD/CI e evolução de software.
    </p>

    <h1>Experiência</h1>

    <ExperienceCard>
      <p>Janeiro de 2017 - Dezembro de 2017</p>
      <img src='http://splab.computacao.ufcg.edu.br/_/rsrc/1472778943502/config/customLogo.gif?revision=2' style={{width:200}}/>
      <h2>UFCG/SPLab + Ingenico Group</h2>
      <h3>Líder de Equipe
      </h3>
      <h4>
        Java Developer
        <br/>React + Redux Developer
        <br/>MongoDB Admin
        <br/>DevOps and CD/CI Admin
      </h4>
      <p>
        Eu fui introduzido no mundo da Plataforma Cruzada Eletrônica,
        eu parei usar o JS como único manipulador de DOM e comecei a desenvolver-se em recursos NodeJS e ES6.
        Nesta posição, trabalhei em contato com o cliente participei de reuniões para especificar os requisitos dos produtos para passá-los para a equipe,
        bem como para facilitar e alocar tarefas para a equipe. Trabalhei também como desenvolvedor uma parte do tempo.
        Usamos o Electron com React + Redux no processo renderer do Electron. Utilizamos o GitLab CD/CI para gerenciar os builds.</p>
    </ExperienceCard>

    <ExperienceCard>
      <p>Setembro de 2015 - Dezembro de 2016</p>
      <img src='http://splab.computacao.ufcg.edu.br/_/rsrc/1472778943502/config/customLogo.gif?revision=2' style={{width:200}}/>
      <h2>UFCG/SPLab + Ingenico Group</h2>
      <h3>
        Líder de Equipe
      </h3>
      <h4>
        Especificador de Requisitos
        <br/>Java/JavaFX Developer
        <br/>MongoDB Admin
        <br/>DevOps and CD/CI Admin
      </h4>
      <p>
        Nessa posição, consegui gerenciar a equipe de desenvolvimento usando o JIRA e também desenvolver o sistema. O sistema foi criado com o
        Grails na parte do servidor web e JavaFX como o aplicativo de desktop
        para se comunicar com o servidor.
      </p>
    </ExperienceCard>

    <ExperienceCard>
      <p>Janeiro de 2014 - Agosto de 2015</p>
      <img src='http://splab.computacao.ufcg.edu.br/_/rsrc/1472778943502/config/customLogo.gif?revision=2' style={{width:200}}/>
      <h2>UFCG/SPLab + Ingenico Group</h2>
      <h3>
        Desenvolvedor de Software
      </h3>
      <h4>
        Java/JavaSwing Developer
        <br/>Grails + MongoDB Developer
      </h4>
      <p>
        Nessa posição, consegui gerenciar a equipe de desenvolvimento usando o JIRA e também desenvolver o sistema. O sistema foi criado com o
        Grails na parte do servidor web e JavaFX como o aplicativo de desktop
        para se comunicar com o servidor.
      </p>
    </ExperienceCard>


  </div>
)

export default IndexPage
