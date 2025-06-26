import { Component, signal } from '@angular/core';

//interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/Csharp.png',
      alt: 'Ícone de conhecimento em C#'
    },
    {
      src: 'assets/icons/knowledge/dotnet.png',
      alt: 'Ícone de conhecimento em .NET'
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Ícone de conhecimento em Java'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento en Angular'
    },
    {
      src: 'assets/icons/knowledge/banco.png',
      alt: 'Ícone de conhecimento em Banco de Dados '
    }

  ])

}
