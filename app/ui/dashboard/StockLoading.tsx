export default function StockSkeleton() {
    return (
        <div className="w-11/12 h-20 bg-white rounded-lg m-auto p-2 mb-4">
                <div className="grid grid-cols-3 animate-pulse">
                    <div className="flex items-center">
                        <div className="size-16 rounded-full bg-slate-200"></div>
                        <div className="ml-4 h-4 w-20 rounded-full bg-slate-200"></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="ml-4 h-4 w-20 rounded-full bg-slate-200"></div>
                        <div className="ml-4 h-4 w-20 rounded-full bg-slate-200"></div>
                    </div>
                    <div className="flex justify-end items-center">
                        <div className="size-12 rounded-lg bg-slate-200"></div>
                    </div>
                </div>
        </div>
    )
}