import Head from "src/app/head";
import {CatalogsContextProvider} from "src/catalogs.context";

export default function Root({children}: { children: React.ReactNode }) {
    return (
        <html>
        <body>
        <CatalogsContextProvider>
            <Head/>
            {children}
        </CatalogsContextProvider>
        </body>
        </html>
    );
}
