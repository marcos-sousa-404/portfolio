export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`font-medium items-center text-center justify-center flex w-fit min-w-14 duration-300 text-red-700 dark:bg-[#991B1B7F] dark:text-red-100 text-md bg-red-100 rounded-md p-1 ${className}`}
    >
      {children}
    </span>
  );
}
