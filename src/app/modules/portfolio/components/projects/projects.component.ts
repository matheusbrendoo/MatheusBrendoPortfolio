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
  public arrayProjects = signal<IProjetcs[]>([
    {
      src: 'assets/img/projects/em-breve.png',
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
