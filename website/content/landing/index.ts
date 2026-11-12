import type { LandingPage } from "./types";
import { page as iepGoalTracker } from "./iep-goal-tracker";
import { page as speechTherapyProgressTracker } from "./speech-therapy-progress-tracker";
import { page as therapyActivitiesAtHome } from "./therapy-activities-at-home";
import { page as therapySessionNotes } from "./therapy-session-notes";
import { page as autismParentApp } from "./autism-parent-app";
import { page as adhdParentApp } from "./adhd-parent-app";

export const landingPages: LandingPage[] = [
  iepGoalTracker,
  speechTherapyProgressTracker,
  therapyActivitiesAtHome,
  therapySessionNotes,
  autismParentApp,
  adhdParentApp,
];
