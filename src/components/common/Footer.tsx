import { Container } from "@/components/common/Container";
import { SOCIAL_LINKS } from "@/configs/socials";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";
import { FOOTER_LINKS } from "@/configs/footer";

export const Footer = () => {
  return (
    <div className="w-full mt-28 selection:bg-orange-600 selection:text-zinc-50">
      <Container>
        <footer className="py-8">
          <div className="flex items-center gap-3 justify-center">
            {SOCIAL_LINKS.map((link) => (
              <Tooltip key={link.label}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.href}
                    key={link.label}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-orange-600"
                  >
                    <link.icon className="size-6" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs font-medium text-zinc-50 dark:text-zinc-900">
                    {link.label}
                  </p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          <div className="flex items-center gap-8 justify-center mt-5">
            {FOOTER_LINKS.map((link, idx) => (
              <Link
                key={`footer-link${link.href}-${idx}`}
                href={link.href}
                className="text-sm font-medium border-b-2 border-dashed border-transparent hover:border-orange-600 pb-0.5 text-zinc-600 dark:text-zinc-400 hover:text-orange-600 transition-all duration-100"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-center font-medium text-[13px] text-zinc-600 dark:text-zinc-400 mt-12">
            built with 🔥 by Reché Soares
          </p>
        </footer>
      </Container>
    </div>
  );
};
