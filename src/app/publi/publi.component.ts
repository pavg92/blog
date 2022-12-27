import { Component } from '@angular/core';

@Component({
  selector: 'app-publi',
  templateUrl: './publi.component.html',
  styleUrls: ['./publi.component.css']
})
export class PubliComponent {
  publis = [
    {title: 'Titulo publicacion', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto optio aliquam, sequi tempore ab ipsam temporibus provident necessitatibus molestias labore repudiandae maiores, iste quas non ullam in animi quo dolorum.',date: '12-12-2022'},
    {title: 'Titulo publicacion', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto optio aliquam, sequi tempore ab ipsam temporibus provident necessitatibus molestias labore repudiandae maiores, iste quas non ullam in animi quo dolorum.',date: '11-12-2022'},
    {title: 'Titulo publicacion', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto optio aliquam, sequi tempore ab ipsam temporibus provident necessitatibus molestias labore repudiandae maiores, iste quas non ullam in animi quo dolorum.',date: '10-12-2022'},
    {title: 'Titulo publicacion', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto optio aliquam, sequi tempore ab ipsam temporibus provident necessitatibus molestias labore repudiandae maiores, iste quas non ullam in animi quo dolorum.',date: '09-12-2022'},
  ];
  
}
