export function CardSkeleton() {
  return (
    <>
      <div className="w-full bg-white p-4 rounded-3xl relative duration-300 shadow-sm hover:scale-[1.01]">
        <div className="animate-pulse">
            <div className="rounded-full size-14 z-10 bg-slate-200 absolute"></div>
            <div className="flex justify-end">
                <div>
                    <div className="rounded-full size-4 bg-slate-200 m-auto mb-2"></div>
                    <div className="rounded-full h-4 w-12 bg-slate-200"></div>
                </div>
            </div>
            <div className="rounded-full h-4 w-20 bg-slate-200 mt-8"></div>
            <div>
                <div className="rounded-full h-4 w-full bg-slate-200 mt-2"></div>
                <div className="rounded-full h-4 w-full bg-slate-200 mt-2"></div>
            </div>
        </div>
      </div>
    </>
  );
}

export function ProductCardSkeleton() {
    return (
        <div className="grid grid-cols-2 gap-x-2 gap-y-6">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    )
}