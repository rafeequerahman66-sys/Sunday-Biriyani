import type { ReactNode } from 'react'
type Props = { children: ReactNode; className?: string; href?: string; onClick?: () => void; external?: boolean }
export default function PixelButton({ children, className = '', href, onClick, external }: Props) {
  const cls = `inline-block font-pixel text-lg cursor-pointer no-underline px-6 py-4 border ${className}`
  if (href) return <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}</a>
  return <button type="button" onClick={onClick} className={cls}>{children}</button>
}
