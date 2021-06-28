// 1.
const wrapper = document.querySelector("#wrapper");
const wrapperChildren = wrapper.children;
console.log(wrapperChildren);

const children = document.querySelectorAll("#wrapper > *");
children.forEach((element) => {
    console.log(element.children);
    // console.log(element.childElementCount); // both work
    console.log(element.children.length);
});

// 2.

// console.log(children[0].classList);
// console.log(children[0].classList.length);
function getElementWithMostClasses (input) {
    let resultObj = { name : "", numberOfClasses : 0 };
    for (let i = 0; i < input.length; i++) {
        if (input[i].classList.length > resultObj.numberOfClasses) {
            resultObj.name = input[i];
            resultObj.numberOfClasses = input[i].classList.length;
        };
    };
    return resultObj;
};
console.log(getElementWithMostClasses(children))