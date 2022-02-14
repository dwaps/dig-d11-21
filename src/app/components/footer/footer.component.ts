import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="text-center">
      <hr class="w-75 mt-5 mb-2 m-auto">
      <p>&copy; DWAPS - 2021 / {{ currentYear }}</p>
    </footer>
  `,
  styles: [`
    footer {
      font-size: 0.7rem;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
