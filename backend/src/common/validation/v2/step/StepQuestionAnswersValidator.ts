import { ValidationResult } from '../ValidationResult';
import { Step } from './Step';
import { Validator } from '../validator/Validator';
import { ValidationFailure } from '../ValidationFailure';
import { ValidationFailureType } from '../ValidationFailureType';
import { QuestionAnswer } from '../question/Question';

export class StepQuestionAnswersValidator implements Validator {
  public async validate(step: Step, answers: QuestionAnswer[]): Promise<ValidationResult> {
    const validationResult = new ValidationResult(answers);
    const questions = step.getQuestions();
    const questionValidationPromises: Array<Promise<ValidationResult>> = [];

    for (const question of questions) {
      questionValidationPromises.push(
        (async () => {
          const questionAnswer = answers.find((answer) => answer.questionId === question.id);

          const validationResult = new ValidationResult([]);

          if (questionAnswer === undefined) {
            validationResult.addWarning(
              new ValidationFailure(ValidationFailureType.WARNING, question.id, 'Missing answer for question', ''),
            );
          } else {
            const correctQuestionAnswer = await question.answer();

            // eslint-disable-next-line eqeqeq
            if (questionAnswer.value != correctQuestionAnswer) {
              validationResult.addError(
                new ValidationFailure(
                  ValidationFailureType.ERROR,
                  question.id,
                  'Wrong answer for question',
                  questionAnswer.value,
                ),
              );
            }
          }

          return validationResult;
        })(),
      );
    }

    const questionValidationResults = await Promise.all(questionValidationPromises);

    for (const questionValidationResult of questionValidationResults) {
      if (questionValidationResult.hasErrors()) {
        validationResult.addErrors(questionValidationResult.getErrors());
      }

      if (questionValidationResult.hasWarnings()) {
        validationResult.addWarnings(questionValidationResult.getWarnings());
      }
    }

    return validationResult;
  }
}
