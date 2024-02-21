import { Booking } from '@octocloud/types';
import { Scenario, ScenarioResult } from '../../Scenario';
import { InvalidOptionIdErrorValidator } from '../../../../../validators/backendValidator/Error/InvalidOptionIdErrorValidator';
import { BookingReservationScenarioHelper } from '../../../helpers/BookingReservationScenarioHelper';
import { Result } from '../../../api/types';
import descriptions from '../../../consts/descriptions';

export class BookingReservationInvalidOptionScenario implements Scenario {
  private readonly result: Result<Booking>;
  public constructor({ result }: { result: Result<Booking> }) {
    this.result = result;
  }

  private readonly bookingReservationScenarioHelper = new BookingReservationScenarioHelper();

  public validate = async (): Promise<ScenarioResult> => {
    const name = 'Booking Reservation Invalid Option (400 INVALID_OPTION_ID)';
    const description = descriptions.invalidOption;

    return this.bookingReservationScenarioHelper.validateError(
      {
        result: this.result,
        name,
        description,
      },
      new InvalidOptionIdErrorValidator(),
    );
  };
}
