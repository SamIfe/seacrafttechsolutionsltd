export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl animate-pulse px-4 py-12 md:px-6 lg:px-8">
      <div className="h-10 w-2/3 max-w-md rounded-md skeleton-shimmer" />
      <div className="mt-4 h-4 w-full max-w-2xl rounded-md skeleton-shimmer" />
      <div className="mt-2 h-4 w-5/6 max-w-xl rounded-md skeleton-shimmer" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-40 rounded-lg border border-border skeleton-shimmer"
          />
        ))}
      </div>
    </div>
  );
}
