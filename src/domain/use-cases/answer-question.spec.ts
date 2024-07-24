import { expect, test } from "vitest"
import { AnswerQuestion, AnswerQuestionUseCaseDTO } from "./answer-question"

test('create an answer', () => {
  const createAnswerDTO: AnswerQuestionUseCaseDTO = {
    questionId: '1',
    InstructorId: '1',
    content: "new answer"
  }
  const answerQuestion = new AnswerQuestion()

  const answer = answerQuestion.execute(createAnswerDTO)

  expect(answer.content).toEqual(createAnswerDTO.content)
})