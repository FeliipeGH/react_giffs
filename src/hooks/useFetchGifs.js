import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setState(
                    {
                        data: imgs,
                        loading: false
                    }
                );
            });
    });
    return state;
};


/*const [images, setImages] = useState([]);*/
/*
una manera
    useEffect(() => {
        getGifs(category).then(imgs => setImages(imgs));
    }, []);*/
//otra manera
/*    useEffect(() => {
        getGifs(category).then(setImages);
    }, [category]);*/