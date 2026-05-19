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

  public activeIndex = signal<number | null>(null);

  toggleCard(index: number): void {
    this.activeIndex.set(this.activeIndex() === index ? null : index);
  }

  goToLink(url: string, event: Event): void {
    event.stopPropagation();
    window.open(url, '_blank');
  }

  public arrayProjects = signal<IProjetcs[]>([
    {
      src: 'assets/img/projects/q3x.png',
      alt: "Q3X Commerce",
      title: "Q3X Commerce",
      with: '100px',
      height: '51px',
      description: 'E-commerce completo com catálogo de produtos, carrinho, checkout e painel administrativo.',
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
      title: "Freaky Pi",
      with: '100px',
      height: '51px',
      description: 'Site oficial do DJ Pi com agenda de eventos, mixes e identidade visual exclusiva.',
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
      title: "Cotação do Dólar",
      with: '100px',
      height: '51px',
      description: 'Consulta em tempo real da cotação do dólar, com histórico e conversão de valores.',
      links: [
        {
          name: 'CotaçaoDolar',
          href: 'https://matheusbrendoo.github.io/CotacaoDolar',
        },
      ],
    },
  ])

}
