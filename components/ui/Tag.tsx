interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="rounded-lg bg-white/5 px-3 py-2 text-sm text-zinc-300">
      {children}
    </span>
  );
}
