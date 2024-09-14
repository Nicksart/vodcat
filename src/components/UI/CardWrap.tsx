import { cn } from "@/utils";


export const CardWrap = ({ children, className }: {children: React.ReactNode, className?: string}) => {
    return (
        <div className={cn("rounded-lg bg-black border-black border-[3px] border-b-[6px]", className)}>
        {children}
        </div>
    );
}