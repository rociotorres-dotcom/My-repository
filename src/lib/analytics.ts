// Single integration point for the waitlist signup event.
//
// TODO P-004 / P-117 — not wired yet. Blocked on: no PostHog project exists
// yet (P-004), and PostHog was never confirmed as the measurement tool with
// the client (P-117). When both are resolved, this is the only file that
// needs to change — do not call PostHog directly from any component.
//
// When ready, this should:
//   1. Call posthog.identify(email, { first_name, email, waitlisted: true })
//      — email MUST be a person property, not just the distinct ID, or the
//      welcome-email Workflow fails silently.
//   2. Call posthog.capture('waitlist_signup_submitted', { first_name, email,
//      top_problem, source })
export interface WaitlistSignup {
  firstName: string;
  email: string;
  topProblem: string;
  source: string;
}

export function trackWaitlistSignup(signup: WaitlistSignup): void {
  // TODO P-004 / P-117 — no-op until PostHog is confirmed and configured.
  void signup;
}
