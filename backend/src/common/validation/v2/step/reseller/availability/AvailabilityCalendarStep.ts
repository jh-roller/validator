import { Step } from '../../Step';
import { StepId } from '../../StepId';
import { singleton } from 'tsyringe';
import { Question } from '../../../question/Question';
import { Validator } from '../../../validator/Validator';

@singleton()
export class AvailabilityCalendarStep implements Step {
  public getId(): StepId {
    return StepId.AVAILABILITY_CALENDAR;
  }

  public getName(): string {
    return 'Availability Calendar';
  }

  public getDescription(): string {
    return "Availability Calendar endpoint is designed to be highly optimized and returns a single object per day. It's designed to be queried for large date ranges and the result is used to populate an availability calendar.";
  }

  public getDocsUrl(): string {
    return 'https://docs.octo.travel/octo-api-core/availability#availability-calendar';
  }

  public getValidators(): Validator[] {
    return [];
  }

  public getQuestions(): Question[] {
    return [];
  }
}
