"use client";

import { useCopyToClipboard } from "@uidotdev/usehooks";
import type React from "react";
import { createContext, useCallback, useContext, useEffect } from "react";

interface UseCopyContextValue {
  copiedText: string | null;
  copy: (text: string) => Promise<void>;
}

const UseCopyContext = createContext<UseCopyContextValue | undefined>(
  undefined,
);

export const CopyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [copiedText, copyToClipboard] = useCopyToClipboard();

  const updateClipboardText = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText();
      copyToClipboard(text);
    } catch (error) {
      console.error("Failed to read clipboard content:", error);
    }
  }, []);

  useEffect(() => {
    updateClipboardText();

    const handleWindowFocus = () => {
      updateClipboardText();
    };

    window.addEventListener("focus", handleWindowFocus);
    return () => {
      window.removeEventListener("focus", handleWindowFocus);
    };
  }, [updateClipboardText]);

  return (
    <UseCopyContext.Provider
      value={{
        copiedText,
        copy: copyToClipboard,
      }}
    >
      {children}
    </UseCopyContext.Provider>
  );
};

export const useCopy = (): UseCopyContextValue => {
  const context = useContext(UseCopyContext);
  if (!context) {
    throw new Error("useCopyContext must be used within a CopyProvider");
  }
  return context;
};
