import { randomUUID } from "node:crypto"

type QuestionProps = {
  authorId: string,    
  title: string,
  content: string,
}

class Question {  
  public id: string
  public authorId: string
  public title: string
  public content: string

  constructor(
    props: QuestionProps,
    id?: string
  ) {
    const { title, content, authorId } = props

    this.title = title
    this.content = content
    this.authorId = authorId
    
    this.id = id ?? randomUUID()    
  }
}

export { Question }
