import { Flow, FlowResult } from '../Flow';
import { BookingListSupplierReferenceScenario } from '../../Scenarios/Booking/List/BookingListSupplierReference';
import { BookingListResellerReferenceScenario } from '../../Scenarios/Booking/List/BookingListResellerReference';
import { BookingListBadRequestScenario } from '../../Scenarios/Booking/List/BookingListBadRequest';
import { BaseFlow } from '../BaseFlow';
import docs from '../../consts/docs';
import { Context } from '../../context/Context';

export class BookingListFlow extends BaseFlow implements Flow {
  public constructor() {
    super('List Bookings', docs.bookingList);
  }

  public validate = async (context: Context): Promise<FlowResult> => {
    const scenarios = [
      new BookingListSupplierReferenceScenario(),
      new BookingListResellerReferenceScenario(),
      new BookingListBadRequestScenario(),
    ];
    return await this.validateScenarios(scenarios, context);
  };
}
