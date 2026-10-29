import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useData } from "@/data/resume";
import { setLang, useLang } from "@/lib/lang";
import { useState } from "react";

export default function Navbar() {
  const DATA = useData();
  const lang = useLang();
  // mailto:/tel: do nothing when the visitor has no mail or phone app set up
  // (most desktops), so those buttons also copy the address and say so.
  const [copied, setCopied] = useState<string | null>(null);
  const copyContact = (label: string, value: string) => {
    navigator.clipboard?.writeText(value).then(() => {
      setCopied(`${label}: ${value}`);
      setTimeout(() => setCopied(null), 2500);
    }).catch(() => {});
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      {copied && (
        <div className="pointer-events-auto mx-auto mb-3 w-fit rounded-xl bg-primary px-4 py-2 text-sm text-primary-foreground shadow-lg">
          {copied}
        </div>
      )}
      <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  <DockIcon className="rounded-2xl cursor-pointer size-full bg-background p-0 text-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                    <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
                  </DockIcon>
                </a>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                sideOffset={8}
                className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
              >
                <p>{item.label}</p>
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          );
        })}
        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social], index) => {
            const isExternal = social.url.startsWith("http");
            const onClick = social.url.startsWith("mailto:")
              ? () => copyContact(DATA.ui.emailCopied, DATA.contact.email)
              : social.url.startsWith("tel:")
                ? () => copyContact(DATA.ui.phoneCopied, DATA.contact.tel)
                : undefined;
            const IconComponent = social.icon;
            return (
              <Tooltip key={`social-${name}-${index}`}>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    onClick={onClick}
                  >
                    <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                      <IconComponent className="size-full rounded-sm overflow-hidden object-contain" />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                >
                  <p>{social.name}</p>
                  <TooltipArrow className="fill-primary" />
                </TooltipContent>
              </Tooltip>
            );
          })}
        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
              <ModeToggle className="size-full cursor-pointer" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p>{DATA.ui.theme}</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              aria-label={DATA.ui.language}
              onClick={() => setLang(lang === "tr" ? "en" : "tr")}
            >
              <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                <span className="text-xs font-semibold">{lang === "tr" ? "EN" : "TR"}</span>
              </DockIcon>
            </button>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p>{DATA.ui.language}</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </Dock>
    </div>
  );
}
