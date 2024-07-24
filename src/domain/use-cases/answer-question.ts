import { Answer } from "../entities/answer"

type AnswerQuestionUseCaseDTO = {
  InstructorId: string
  questionId: string
  content: string
}

class AnswerQuestion{
  execute({ InstructorId, questionId, content }: AnswerQuestionUseCaseDTO) {
    const answer = new Answer(content)

    return answer
  }

}

export { AnswerQuestion, AnswerQuestionUseCaseDTO }

