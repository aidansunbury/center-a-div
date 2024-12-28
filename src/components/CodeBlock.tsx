import type { BundledLanguage } from "shiki";
import { codeToHtml } from "shiki";
import { useQuery } from "@tanstack/react-query";

export function Test() {
  return (
    <main>
      <CodeBlock lang="tsx">
        {[
          '<div className="flex size-full flex-row items-end justify-evenly bg-slate-400">',
          '  <div className="size-10 bg-red-400" />',
          "</div>",
        ].join("\n")}
      </CodeBlock>
    </main>
  );
}

interface Props {
  children: string;
  lang: BundledLanguage;
}

function CodeBlock(props: Props) {
  const { data, isPending, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      return await codeToHtml(props.children, {
        lang: props.lang,
        theme: "github-dark",
      });
    },
  });

  if (isPending || isError) return <div>Loading...</div>;
  // biome-ignore lint/security/noDangerouslySetInnerHtml: <whole point of this component>
  return <div dangerouslySetInnerHTML={{ __html: data }} />;
}
