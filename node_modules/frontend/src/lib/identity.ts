import type { UserIdentity } from "../types";

const KEY = "annotateai_identity";
export const IDENTITY_CHANGED_EVENT = "annotateai:identity-changed";

function notifyIdentityChanged() {
  window.dispatchEvent(new Event(IDENTITY_CHANGED_EVENT));
}

export function saveIdentity(identity: UserIdentity) {
  localStorage.setItem(KEY, JSON.stringify(identity));
  notifyIdentityChanged();
}

export function readIdentity(): UserIdentity | null {
  const value = localStorage.getItem(KEY);
  if (!value) return null;
  try {
    return JSON.parse(value) as UserIdentity;
  } catch {
    return null;
  }
}

export function clearIdentity() {
  localStorage.removeItem(KEY);
  notifyIdentityChanged();
}
