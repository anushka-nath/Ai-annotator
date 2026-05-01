import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { clearIdentity, IDENTITY_CHANGED_EVENT, readIdentity } from "../lib/identity";
import type { UserIdentity } from "../types";

export function TopNav() {
  const [identity, setIdentity] = useState<UserIdentity | null>(readIdentity());

  useEffect(() => {
    function syncIdentity() {
      setIdentity(readIdentity());
    }

    window.addEventListener("storage", syncIdentity);
    window.addEventListener(IDENTITY_CHANGED_EVENT, syncIdentity);
    return () => {
      window.removeEventListener("storage", syncIdentity);
      window.removeEventListener(IDENTITY_CHANGED_EVENT, syncIdentity);
    };
  }, []);

  function handleClear() {
    clearIdentity();
    setIdentity(null);
  }

  return (
    <header className="top-nav">
      <Link to="/" className="brand">Shadow Grid Annotator</Link>
      <nav>
        <NavLink to="/role">Role</NavLink>
        <NavLink to="/annotator">Annotator</NavLink>
        <NavLink to="/reviewer">Reviewer</NavLink>
        <NavLink to="/overview">Overview</NavLink>
      </nav>
      <div className="identity">
        {identity ? <span>{identity.role}: {identity.name}</span> : <span>No identity</span>}
        <button type="button" onClick={handleClear}>Clear</button>
      </div>
    </header>
  );
}
