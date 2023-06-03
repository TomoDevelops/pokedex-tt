import { Skeleton } from "@/app/components/ui/skeleton";

export default function Loading() {
    return (
        <div className={`min-w-[420px] py-9 mx-auto`}>
            <div className={`w-[800px]`}>
                {Array.from({ length: 3 }, (_, i) => i + 1).map((id) => (
                    <div className="flex" key={id}>
                        <Skeleton className="m-4 w-16 h-16 rounded-full bg-grayTransparent" />
                        <div className="flex flex-col justify-center gap-1">
                            <Skeleton className="h-6 w-28 bg-grayTransparent" />
                            <ul className="flex gap-3">
                                <Skeleton className="h-5 w-14 bg-grayTransparent" />
                                <Skeleton className="h-5 w-14 bg-grayTransparent" />
                                <Skeleton className="h-5 w-14 bg-grayTransparent" />
                                <Skeleton className="h-5 w-14 bg-grayTransparent" />
                                <Skeleton className="h-5 w-14 bg-grayTransparent" />
                                <Skeleton className="h-5 w-14 bg-grayTransparent" />
                            </ul>
                            <Skeleton className="h-5 w-[665px] bg-grayTransparent" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
