const books = [
    {
        title: "the fist",
        author: "dheeraj",
        price: 5889,
        stock: 12,
    }, {
        title: "the second",
        author: "second auter",
        price: 889,
        stock: 2,
    }, {
        title: "the thired",
        author: "therd auther",
        price: 6467,
        stock: 56,
    }, {
        title: "the fourth",
        author: "forth auther",
        price: 5889,
        stock: 12,
    }, {
        title: "the fifth",
        author: "efdsak",
        price: 5889,
        stock: 12,
    }
]
const search = (title) => {
    const result = books.filter((book) => title == book.title)
    if (result.length > 0) {
        const index = books.indexOf(result[0])
        return { result: result[0], index };
    }


    return "not book not found"

}


const user = { cart: [] }

const addToCart = (title) => {
    const searchResult = search(title);
    console.log(searchResult);
    if (searchResult.index >= 0) {

        books[searchResult.index].stock--;
        user.cart.push(books[searchResult.index])
    }
    else {
        console.log("invalid book")
    }

}

const removeCart = (title) => {
    const item = search(title);
    console.log("item ", item)
    if (item?.result?.title) {
        books[item.index].stock++;
        console.log("insde the funtin")
        const newCart = user.cart.filter((item) => item.title !== title)
        console.log("new cart ", newCart);
        user.cart = newCart
    } else {
        console.log("item not the cart")
    }
}

const displayCart = () => {
    if (user.cart.length > 0) {
        console.log(user.cart);
    } else console.log("empty cart")

}
addToCart('the fist');
displayCart();
removeCart('the fist')

// console.log(user)
// console.log(books)

