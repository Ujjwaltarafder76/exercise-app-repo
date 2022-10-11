


const addToDb = id => {
    let timerCart = {};

    const storedCart = localStorage.getItem('timer-cart');
    if (storedCart) {
        timerCart = JSON.parse(storedCart);
    }
    const quantity = timerCart[id];
    if (quantity) {
        // console.log('already exists');
        const newQuantity = quantity + 1;
        timerCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
    }
    else {
        timerCart[id] = 1;
        // console.log('new itmes')
        // localStorage.setItem(id, 1);
    }

    localStorage.setItem('timer-cart', JSON.stringify(timerCart));
}
const getStoredCart = () => {
    let timerCart = {};

    const storedCart = localStorage.getItem('timer-cart');
    if (storedCart) {
        timerCart = JSON.parse(storedCart);
    }
    return timerCart;
}
export {
    addToDb,
    getStoredCart
}