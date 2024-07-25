import { Answer } from "../entities/answer"
import { AnswersRepository } from "../repositories/answers-repository"

type AnswerQuestionUseCaseDTO = {
  instructorId: string
  questionId: string
  content: string
}

class AnswerQuestion{
  constructor(
    private answersRepository: AnswersRepository
  ) {}

  async execute({ instructorId, questionId, content }: AnswerQuestionUseCaseDTO) {
    const answer = new Answer({
      authorId: instructorId,
      questionId,
      content    
    })

    await this.answersRepository.create(answer)

    return answer
  }

}

export { AnswerQuestion, AnswerQuestionUseCaseDTO }

