export default async function Page({params}: { params: { slug: string } }) {
    const productDetail = await fetch("https://twworkspace--vtexsgdemostore.myvtex.com/_v/products/1")
        .then((res) => res.json())
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log("error: ", error);
            return error;
        });

    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            Detail
        </div>
    );
}
