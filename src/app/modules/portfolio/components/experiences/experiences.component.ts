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
        strong: 'Analista de Suporte Nível II',
        p: 'Veolink | Set 2022 - Fev 2024'
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
