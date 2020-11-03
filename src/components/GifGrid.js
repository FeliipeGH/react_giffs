import React from 'react';
import GifGridItem from "./GifGridItem";
import {useFetchGifs} from "../hooks/useFetchGifs";

const GifGrid = ({category}) => {
    //data tiene el arreglo de imgs al poner : le das el nombre que ocupara en el componente
    const {loading,data:images}=useFetchGifs(category);
    return (
        <>
            <h3 className=" animate__animated animate__fadeIn">{category}</h3>
            {loading&&<p className=" animate__animated animate__flash">Cargando</p>}
            <div className="card-grid">
                {
                    //data ahora llamado images
                    images.map(element =>
                        <GifGridItem
                            key={element.id}
                            {...element}
                        />)
                }
            </div>
        </>
    );
};
export default GifGrid;
