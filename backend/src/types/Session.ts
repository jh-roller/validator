import { CapabilityId } from '@octocloud/types';
import { ScenarioId } from '../common/validation/v2/scenario/ScenarioId';
import { StepId } from '../common/validation/v2/step/StepId';

export interface Session {
  id: string;
  name: string;
  capabilities: CapabilityId[] | null;
  currentScenario: ScenarioId | null;
  currentStep: StepId | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface SessionWithProgress {
  id: string;
  name: string;
  capabilities: CapabilityId[] | null;
  currentScenario: ScenarioId | null;
  currentStep: StepId | null;
  scenariosProgress: SessionScenarioProgress[];
  createdAt: Date;
  updatedAt: Date;
}

export interface SessionScenarioProgress {
  id: ScenarioId;
  steps: SessionScenarioProgressStep[];
}

export interface SessionScenarioProgressStep {
  id: StepId;
  status: SessionScenarioProgressStepStatus;
}

export enum SessionScenarioProgressStepStatus {
  COMPLETED = 'completed',
  PENDING = 'pending',
}

export interface UpdateSessionData {
  id: string;
  name?: string;
  capabilities?: CapabilityId[] | null;
  currentScenario?: ScenarioId | null;
  currentStep?: StepId | null;
}

export interface SessionData {
  id: string;
  name: string;
  capabilities: CapabilityId[] | null;
  currentScenario: ScenarioId | null;
  currentStep: StepId | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface SessionRowData {
  id: string;
  name: string;
  capabilities: string | null;
  current_scenario: string | null;
  current_step: string | null;
  created_at: Date;
  updated_at: Date;
}
