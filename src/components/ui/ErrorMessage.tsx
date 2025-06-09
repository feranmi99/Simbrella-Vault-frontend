import { Button } from './button';

interface ErrorMessageProps {
    message: string;
    onRetry?: () => void;
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
    return (
        <div className="flex flex-col items-center justify-center py-10 gap-4">
            <div className="text-red-500 text-lg font-medium">{message}</div>
            {onRetry && (
                <Button
                    onClick={onRetry}
                    variant="outline"
                >
                    Try Again
                </Button>
            )}
        </div>
    );
}