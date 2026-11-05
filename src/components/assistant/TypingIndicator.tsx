export default function TypingIndicator() {
  return (
    <div className="flex justify-start" role="status" aria-label="Assistant is typing">
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-line bg-surface px-3.5 py-3">
        {[0, 150, 300].map((delay) => (
          <span
            key={delay}
            className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
