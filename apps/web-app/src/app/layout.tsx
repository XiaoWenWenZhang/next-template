import {CatalogsContextProvider} from "src/catalogs.context";
import {Head} from "src/components/Head";
import "../../src/styles/globals.css";

export default function Root({children}: { children: React.ReactNode }) {
    return (
        <html>
        <body>
        <CatalogsContextProvider>
            <Head/>
            <div
                style={{
                    paddingTop: "69px",
                }}
            >
                {children}
            </div>
        </CatalogsContextProvider>
        </body>
        </html>
    );
}
