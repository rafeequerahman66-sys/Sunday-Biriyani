export default function Eyebrow({ left, right, className = '' }: { left: string; right?: string; className?: string }) {
  return <div className={`flex justify-between w-full font-mono text-[20px] ${className}`}><span>{left}</span>{right && <span>{right}</span>}</div>
}
