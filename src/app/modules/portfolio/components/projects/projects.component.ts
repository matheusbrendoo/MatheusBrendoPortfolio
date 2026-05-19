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
      src: 'assets/img/projects/q3x.png',
      alt: "Q3X Commerce",
      title: "Q3X Commerce — E-commerce completo",
      with: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Q3X Commerce',
          href: 'https://q3x.com.br',
        },
      ],
    },
    {
      src: 'assets/img/projects/freakypi.png',
      alt: "Pi — House & Stuff",
      title: "Site do DJ Pi",
      with: '100px',
      height: '51px',
      description: '',
      links: [
        {
          name: 'Freaky Pi',
          href: 'https://freakypi.com',
        },
      ],
    },
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
          href: 'https://matheusbrendoo.github.io/CotacaoDolar',
        },
      ],
    },
  ])

}
