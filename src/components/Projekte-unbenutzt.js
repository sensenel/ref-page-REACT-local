import React, { useEffect, useState } from "react";

const Projekte = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState([]);
    
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("./projekt-1.html")
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
/*             console.log('result: ');
            console.log(result); */
            setItem(result.text());
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )
    }, [])
    
    console.log(item);

/*     if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            {item}
        );
    } */

    return (
        {item}
    );

}

export default Projekte
