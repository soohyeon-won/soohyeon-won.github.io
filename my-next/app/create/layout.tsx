
export default function CreateLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <form>
            <h2>create</h2>
            {children}
        </form>
    );
}
