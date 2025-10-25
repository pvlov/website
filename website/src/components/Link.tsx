import { ReactNode, AnchorHTMLAttributes } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = "",
  ...props
}) => (
  <a
    href={href}
    className={`text-blue-400 hover:underline ${className}`}
    {...props}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default Link;
