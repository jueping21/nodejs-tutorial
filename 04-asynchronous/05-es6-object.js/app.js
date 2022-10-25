// obj property shorthand
const username = "Tim";
const age = 23;

const user = {
    username,
    age,
    location: "vancouver",
};

console.log(user);

//obj destructuring
const product = {
    label: "notebook",
    price: 3,
    stock: 201,
    salePrice: undefined,
};

// const label = product.label;
// const stock = product.stock;
// const { label: produceLabel, stock, price } = product;
// console.log(produceLabel);
// console.log(stock);
// console.log(price);

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock);
}

transaction("order", product)

