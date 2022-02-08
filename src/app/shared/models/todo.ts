export class Todo {
  constructor(
    public message: string,
    public done = false,
    public id?: string,
  ) {}
}
