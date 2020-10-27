exports.getDate = () =>{
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    //Format date
    return today.toLocaleDateString("en-US", options);
};

exports.getDay = () =>{
    const today = new Date();

    const options = {
        weekday: "long"
    };
    
    //Format date
    return today.toLocaleDateString("en-US", options);
};
