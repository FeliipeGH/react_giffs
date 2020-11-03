import React, {useState} from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GiftExpertApp = () => {
    const [categories, setCategories]
        = useState(["One Punch"]);

    return (
        <>
            <h2>GiftExpertAp</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
            <ol>
                {
                    categories.map(categorie =>
                        <GifGrid
                            key={categorie}
                            category={categorie}
                        />)
                }
            </ol>
        </>
    );
};

export default GiftExpertApp;