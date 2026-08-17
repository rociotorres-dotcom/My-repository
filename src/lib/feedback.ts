// Single integration point for feedback widget submissions.
//
// TODO P-116 — not wired yet. Basecamp is the client's official channel, but
// the task map says the tracker is GitHub Issues. Do not create anything
// (GitHub Issue, Slack message) until that is decided. When it is, this is
// the only file that needs to change — do not call any tracker API directly
// from the widget component.
export interface FeedbackSubmission {
  type: 'Suggestion' | 'Bug' | 'Question';
  email: string;
  message: string;
  breadcrumb: string;
}

export function submitFeedback(feedback: FeedbackSubmission): void {
  // TODO P-116 — no-op until the tracker (GitHub vs. Basecamp) is decided.
  void feedback;
}
