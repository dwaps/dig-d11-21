import { Book } from "./book.js";

export class HomePage {
  constructor() {
    this.content = document.querySelector('.content');
    this.buildBooksList();
  }

  async buildBooksList() {
    const books = await Book.findAll();
    this.content.innerHTML = `
      <table class="table table-dark table-hover my-5">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Catégorie</th>
            <th>Auteur</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          ${books.map(({
            title,
            category,
            price,
            available,
            author: { firstname, lastname }
            }) => (`
            <tr class="${available? 'table-secondary' : 'table-danger'}">
              <td>${title}</td>
              <td>${category}</td>
              <td>${firstname} ${lastname}</td>
              <td>${price}</td>
            </tr>
          `)).join('')}
        </tbody>
      </table>
    `;
  }
}
