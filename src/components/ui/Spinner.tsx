import { cn } from "@/utils/utils"

interface SpinnerProps {
    className?: string;
}

export function Spinner({ className }: SpinnerProps) {
    return (
        <div className={cn("animate-spin rounded-full border-4 border-solid border-current border-r-transparent", className)}
            role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );
}