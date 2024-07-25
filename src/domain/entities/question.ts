import { randomUUID } from "node:crypto"

class Question {  
  public id: string
  public authorId: string
  public title: string
  public content: string

  constructor(
    authorId: string,    
    title: string,
    content: string,
    id?: string
  ) {
    this.id = id ?? randomUUID()
    this.authorId = authorId    
    this.title = title
    this.content = content
  }
}

export { Question }
