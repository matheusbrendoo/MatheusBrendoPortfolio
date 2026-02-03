import { Component, signal } from '@angular/core';

//intefaces
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperiences[]>([
     {
      summary: {
        strong: ' Desenvolvedor de Software',
        p: 'AUTOLAB Automação e Sistemas | Nov 2025 - Atual'
      },
      text:
      `
      <p>Desenvolvedor de Software, com foco no desenvolvimento end-to-end de APIs REST, desde a definição da arquitetura até a implementação do backend e a integração com o frontend.</p>
      <p>Trabalho com .NET 8.0 no desenvolvimento de serviços modernos e escaláveis, além da modernização e manutenção de sistemas legados em .NET Framework e Windows Forms.</p>
      <p>No frontend, desenvolvo interfaces utilizando Vue.js, garantindo comunicação eficiente entre as camadas da aplicação, com foco em desempenho, estabilidade e experiência do usuário.</p>`
    },
    {
      summary: {
        strong: ' Desenvolvedor de Software',
        p: 'LUZ Soluções Financeiras | Mai 2025 - Nov 2025'
      },
      text:
      `
      <p>Desenvolvedor de Software na LUZ Soluções Financeiras, com foco no desenvolvimento backend em .NET e integração com bancos de dados Oracle para sistemas financeiros.</p>
      <p>Participei da criação e evolução de aplicações desktop utilizando WPF com o padrão arquitetural MVVM, além da implementação de testes unitários com NUnit, contribuindo para a qualidade, estabilidade e manutenibilidade das soluções.</p>
      <p>Também atuei na correção de bugs, desenvolvimento de novas funcionalidades e no suporte à evolução contínua dos sistemas internos, colaborando diretamente com as equipes de produto e tecnologia.</p>`
    },
    {
      summary: {
        strong: 'Analista de Suporte Nível II',
        p: 'Veolink | Set 2022 - Fev 2025'
      },
      text: '<p>Atuei como Analista de Suporte II na Veolink Sistemas, com foco em banco de dados SQL/Oracle, garantindo a estabilidade e eficiência dos sistemas.</p> <p>Minha experiência incluiu a execução de testes funcionais e a homologação de sistemas, identificando e documentando inconsistências para aprimorar a qualidade do software. Além disso, fui responsável pela validação de novas versões e correções antes da liberação para produção, assegurando a confiabilidade das atualizações.</p> <p>Também realizei a atualização de sistemas e servidores, incluindo o gerenciamento de aplicações no Tomcat, bem como a verificação e correção de vulnerabilidades, contribuindo para a segurança e o desempenho dos sistemas. </p>'
    },
    {
      summary: {
        strong: 'Assistente de Suporte',
        p: 'Veolink | Set 2021 - Set 2022'
      },
      text: '<p>Durante o meu período  como Assistente de Suporte na Veolink Sistemas, atuei prestando atendimento remoto e garantindo a eficiência no suporte técnico.</p><p>Fui responsável pela implantação de sistemas e treinamentos, assegurando que os usuários compreendessem plenamente as funcionalidades das soluções implementadas. Além disso, prestei suporte a sistemas operacionais, auxiliando na resolução de problemas e capacitando usuários para otimizar o uso das ferramentas.</p> <p>Minha atuação também incluiu atividades no Service Desk, proporcionando um atendimento ágil e eficaz para a resolução de incidentes e dúvidas técnicas.</p>'
    },
  ])
}
