const categories = document.querySelectorAll(".item");

    console.log("Number of categories:" + categories.length);



categories.forEach ((item) => {
    const title = item.firstElementChild.textContent;
    console.log("Category:" + title);

    const countOfEl = item.lastElementChild.children.length;
    console.log("Elements:" + countOfEl);
 })