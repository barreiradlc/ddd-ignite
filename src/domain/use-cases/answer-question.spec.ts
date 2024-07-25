import { expect, test } from "vitest"
import { Answer } from "../entities/answer"
import { AnswersRepository } from "../repositories/answers-repository"
import { AnswerQuestion, AnswerQuestionUseCaseDTO } from "./answer-question"

const fakeAnswersRepository: AnswersRepository = {
  create: async function (answer: Answer): Promise<void> {
    return;
  }
}

test('create an answer', async () => {
  const createAnswerDTO: AnswerQuestionUseCaseDTO = {
    questionId: '1',
    instructorId: '1',
    content: "new answer"
  }
  const answerQuestion = new AnswerQuestion(fakeAnswersRepository)

  const answer = await answerQuestion.execute(createAnswerDTO)

  expect(answer.content).toEqual(createAnswerDTO.content)
})