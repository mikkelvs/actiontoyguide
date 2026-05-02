"use client";

import { useState } from "react";

import CookieConsentProps from "./CookieConsent.types";

export default function CookieConsent({
  initialConsent,
}: CookieConsentProps): React.JSX.Element | null {
  const [consent, setConsent] = useState<string | undefined>(initialConsent);

  if (consent === "accepted") return null;

  const handleAccept = () => {
    document.cookie = "cookie_consent=accepted; path=/; max-age=31536000";
    setConsent("accepted");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-pink-500 text-white p-4 flex flex-col items-center border-t-2 border-white">
      <p>We use cookies to improve your experience on our website.</p>
      <button className="badge cursor-pointer" onClick={handleAccept}>
        Accept
      </button>
    </div>
  );
}
