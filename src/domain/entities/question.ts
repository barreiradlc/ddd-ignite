import { randomUUID } from "node:crypto"

type QuestionProps = {
  authorId: string,    
  title: string,
  content: string,
  slug: string,
}

class Question {  
  public id: string
  public authorId: string
  public title: string
  public content: string
  public slug: string

  constructor(
    props: QuestionProps,
    id?: string
  ) {
    const { title, content, authorId, slug } = props

    this.title = title
    this.content = content
    this.slug = slug
    this.authorId = authorId
    
    this.id = id ?? randomUUID()    
  }
}

export { Question }
