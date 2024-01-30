const Movie = (movieRes) => {

    const {id, title} =movieRes;

    console.log(movieRes)

    return (
        <div>
            <div>1{id}</div>
            <div>{title}</div>

        </div>
    );
};

export {Movie};