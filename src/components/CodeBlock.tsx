"use client";

import { html_beautify } from "js-beautify";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { CopyButton } from "./ui/copy-button";

export function CodeBlock({ code }: { code: string }) {
  const [html, setHtml] = useState<string | undefined>(undefined);
  const formattedCode = html_beautify(code, {
    indent_size: 2,
  });

  useEffect(() => {
    (async () => {
      const result = await codeToHtml(formattedCode, {
        lang: "tsx",
        theme: "github-dark",
      });
      setHtml(result);
    })();
  }, [formattedCode]);

  if (!html) return <div>Loading...</div>;

  return (
    <div className="w-full rounded-lg bg-code">
      <div className="flex min-w-full flex-row items-center rounded-t-lg bg-gray-200">
        <h1 className="ml-2 font-mono">Code</h1>
        <CopyButton text={formattedCode} className="ml-auto" />
      </div>
      <div className="flex flex-col overflow-x-auto p-2">
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
