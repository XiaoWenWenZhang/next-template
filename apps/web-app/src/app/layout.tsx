import Head from "src/app/head";

export default function Root({children}: { children: React.ReactNode }) {
    return (
        <html>
        <body>
        <Head/>
        {children}
        </body>
        </html>
    );
}
