


const addToDb = (id) => {
    const quantity = localStorage.getItem(JSON.stringify(id));
    if (quantity) {
        console.log('already exists');
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem((JSON.stringify(id)), newQuantity);
    }
    else {
        console.log('new itmes')
        localStorage.setItem((JSON.stringify(id)), 1);
    }

}

export { addToDb }