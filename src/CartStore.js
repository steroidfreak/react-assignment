import { atom, useAtom } from 'jotai'
import Immutable from "seamless-immutable";

const initialCart = Immutable([

])

// create an atom to get the current shopping cart array
// and to update the shopping cart array
export const cartAtom = atom(initialCart); // create the atom (it like a state in React)

// create a hook that returns functions to allow any component
// to do CRUD on the shopping cart
// custom hook: a custom hook is a function that returns functions which add
// new functionality to the component that uses it
export const useCart = () => {
    const [cart, setCart] = useAtom(cartAtom);

    // getter
    const getCart = () => {
        return cart;
    }

    // getter
    const getCartTotal = () => {


        let total = cart.reduce(function (total, item) {
            return total + (item.price * item.quantity)
        }, 0);

        return total; ``
    }



    const addToCart = (product) => {
        setCart(currentCart => {
            const existingItemIndex = currentCart.findIndex(item => item.product_id === product.id);
            // findIndex returns -1 if the item is not found
            if (existingItemIndex != -1) {
                // item exists
                const currentQuantity = currentCart[existingItemIndex].quantity;
                // basicially means: currentCart[existingItemIndex].quantity = currentQuantity + 1
                return currentCart.setIn([existingItemIndex, 'quantity'], currentQuantity + 1);

            } else {
                // does not exists
                const newCartItem = {
                    ...product,
                    product_id: product.id,
                    id: Math.floor(Math.random() * 10000 + 1),
                    quantity: 1
                }
                // the original concat function in JavaScript Array changes the array
                // but the Immutable version does not change the original array but instead returns a copy of the modified one
                return currentCart.concat(newCartItem);
            }
        })
    }

    const modifyCart = (product_id, quantity) => {
        // 1. find the cart item with corresponding product_id
        // 2. if it exists then continue 
        // 3. if the quantity is reduced to 0, remove from shopping cart
        // 4. if not, update the new quantity
        setCart(currentCart => {
            const existingItemIndex = currentCart.findIndex(item => item.product_id === product_id);

            // check if there is a cart item with that product id
            if (existingItemIndex !== -1) {
                if (quantity >= 1) {
                    // change to the new quantiity
                    return currentCart.setIn([existingItemIndex, 'quantity'], quantity);
                } else {
                    // remove the item
                    // (as normal arrays does not have a delete function, so seamless immutable does not provide one as well)
                    // so use the pure JS method to remove from an immutable array
                    return currentCart.filter(item => item.product_id !== product_id);
                }
            }
        })
    }

    const deleteCartItem = (product_id) => {
        setCart(currentCart => {
            const existingItemIndex = currentCart.findIndex(item => item.product_id === product_id);
            if (existingItemIndex !== -1) {
                return currentCart.filter(item => item.product_id !== product_id)
            } else {
                // always returna  new value for the atom when using setCart with an arrow function as the first parameter
                return currentCart;
            }
        })
    }

    return {
        getCart, getCartTotal, addToCart, modifyCart, deleteCartItem
    }
}