export class Book {
  contructor(id, title, category, price, author, available = true) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.price = price;
    this.author = author;
    this.available = available;
  }

  static findAll() {
    return fetch('http://localhost:8888/books').then(res => res.json());
  }
}
