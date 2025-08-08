import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { Lightbulb } from "lucide-react";

interface SimilarRequestsProps {
    suggestions: string[];
    isLoading: boolean;
}

export function SimilarRequests({ suggestions, isLoading }: SimilarRequestsProps) {
    return (
        <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                    <Lightbulb className="text-accent w-5 h-5" />
                    Similar Request Suggestions
                </CardTitle>
                <CardDescription>
                    Here are some examples of similar requests to help you write yours.
                </CardDescription>
            </CardHeader>
            <CardContent>
                {isLoading ? (
                    <div className="space-y-3">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-[80%]" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-[70%]" />
                    </div>
                ) : (
                    <ul className="space-y-3 list-disc pl-5 text-sm text-muted-foreground">
                        {suggestions.map((suggestion, index) => (
                            <li key={index}>{suggestion}</li>
                        ))}
                    </ul>
                )}
            </CardContent>
        </Card>
    );
}
