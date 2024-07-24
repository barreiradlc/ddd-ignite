import { randomUUID } from "node:crypto"

class Answer {
  public id: string 
  public content: string 

  constructor(content: string, id?: string) {
    this.id = id ?? randomUUID()
    this.content = content
  }
}

export { Answer }
