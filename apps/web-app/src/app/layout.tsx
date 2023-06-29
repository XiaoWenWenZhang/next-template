import {CatalogsContextProvider} from "src/catalogs.context";
import {Head} from "src/components/Head";

export default function Root({children}: { children: React.ReactNode }) {
    return (
        <html>
        <body>
        <CatalogsContextProvider>
            <Head/>
            <div style={{
                paddingTop: '69px'
            }}>
                {children}
            </div>
        </CatalogsContextProvider>
        </body>
        </html>
    );
}
