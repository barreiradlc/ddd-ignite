import { Answer } from "../entities/answer"

type AnswerQuestionUseCaseDTO = {
  instructorId: string
  questionId: string
  content: string
}

class AnswerQuestion{
  execute({ instructorId, questionId, content }: AnswerQuestionUseCaseDTO) {
    const answer = new Answer({
      authorId: instructorId,
      questionId,
      content    
    })

    return answer
  }

}

export { AnswerQuestion, AnswerQuestionUseCaseDTO }

