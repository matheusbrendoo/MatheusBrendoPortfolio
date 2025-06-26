import { Component, signal } from '@angular/core';

//interface
import { IProjetcs } from '../../interface/IProjetcs.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  goToLink(url: string): void {
  const confirmed = window.confirm('A aplicação pode demorar alguns segundos para carregar, pois a API está em modo de hibernação. Clique em OK e aguarde com carinho <3');

  if (confirmed) {
    window.open(url, '_blank');
  }
}
  public arrayProjects = signal<IProjetcs[]>([
    {
      src: 'assets/img/projects/cotacaodolar.png',
      alt: "CotaçaoDolar",
      title: "Sistema de Cotação de Dólar",
      with: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'CotaçaoDolar',
          href: 'https://cotacao-dolar-shx.netlify.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/soon.png',
      alt: "Em breve",
      title: "Em breve",
      with: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça',
          href: 'https://github.com/matheusbrendoo',
        },
      ],
    },
    {
      src: 'assets/img/projects/em-breve.png',
      alt: "Projeto Login Page Responsive",
      title: "Login Page",
      with: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça',
          href: 'https://github.com/matheusbrendoo',
        },
      ],
    },
    {
      src: 'assets/img/projects/soon.png',
      alt: "Em breve",
      title: "Em breve",
      with: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Conheça',
          href: 'https://github.com/matheusbrendoo',
        },
      ],
    },

  ])

}
