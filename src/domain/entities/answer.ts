import { randomUUID } from "node:crypto"

type AnswerProps = {
  content: string,
  authorId: string,
  questionId: string,
}

class Answer {
  public id: string 
  public authorId: string 
  public questionId: string 
  public content: string 

  constructor(
    props: AnswerProps,
    id?: string
  ) {
    const { content, authorId, questionId } = props

    this.id = id ?? randomUUID()
    this.content = content
    this.authorId = authorId
    this.questionId = questionId
  }
}

export { Answer }
