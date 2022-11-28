

function List() {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((number, index) => 
        <li id={index}>{number}  * 2 = {number * 2}</li>);
    console.log(doubled);
    return <h3>list double example: {doubled}</h3>
}

export default List
