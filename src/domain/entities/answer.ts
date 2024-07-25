import { randomUUID } from "node:crypto"

class Answer {
  public id: string 
  public authorId: string 
  public questionId: string 
  public content: string 

  constructor(
    content: string,
    authorId: string,
    questionId: string,
    id?: string
  ) {
    this.id = id ?? randomUUID()
    this.content = content
    this.authorId = authorId
    this.questionId = questionId
  }
}

export { Answer }
