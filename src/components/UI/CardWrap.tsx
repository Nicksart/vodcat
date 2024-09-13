

export const CardWrap = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className="rounded-lg bg-black border-black border-[3px] border-b-[6px]">
        {children}
        </div>
    );
}