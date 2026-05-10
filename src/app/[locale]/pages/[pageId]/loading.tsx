export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grow w-full max-w-[1320px] mx-auto lg:p-2 p-1">
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-y-2">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="w-full animate-pulse bg-gray-200"
              style={{ aspectRatio: '1 / 1.4142' }}
            />
          ))}
        </div>
      </div>
      <div className="shrink-0 border-t border-gray-100 bg-white/80 backdrop-blur-md px-4 sm:px-6 md:px-10 py-3 md:py-4">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between gap-4">
          <div className="h-8 w-24 animate-pulse bg-gray-200 rounded-full" />
          <div className="hidden md:block h-4 w-16 animate-pulse bg-gray-200 rounded" />
          <div className="h-8 w-24 animate-pulse bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}
