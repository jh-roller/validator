import { CapabilityId } from '@octocloud/types';
import { registry, singleton } from 'tsyringe';
import { Scenario } from '../Scenario';
import { GetSupplierStep } from '../../step/reseller/supplier/GetSupplierStep';
import { GetProductsStep } from '../../step/reseller/product/GetProductsStep';
import { Step } from '../../step/Step';

@singleton()
@registry([
  { token: BasicScenario.name, useClass: BasicScenario },
  { token: 'ResellerScenario', useClass: BasicScenario },
])
export class BasicScenario implements Scenario {
  public readonly capabilities: CapabilityId[] = [];

  public constructor() {
    this.capabilities = this.getRequiredCapabilities().concat(this.getOptionalCapabilities());
  }

  public getId(): string {
    return 'basic';
  }

  public getName(): string {
    return 'Basic';
  }

  public getDescription(): string {
    return 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Morbi scelerisque luctus velit. Ut tempus purus at lorem. Sed convallis magna eu sem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Etiam commodo dui eget wisi. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Integer pellentesque quam vel velit. Suspendisse nisl. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  }

  public getRequiredCapabilities(): CapabilityId[] {
    return [];
  }

  public getOptionalCapabilities(): CapabilityId[] {
    return [CapabilityId.Pricing];
  }

  public getCapabilities(): CapabilityId[] {
    return this.capabilities;
  }

  public getSteps(): Step[] {
    return [new GetSupplierStep(), new GetProductsStep()];
  }
}
