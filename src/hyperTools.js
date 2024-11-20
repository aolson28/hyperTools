/*
Use this for items where you want to add an event onChange listener and the intent is
to always fetch html from an endpoint and to put that HTML into the DOM.

The onchange element needs the class "onchange-html-update", an endpoint attribute, and a data-target attribute.

the endpoint attribute is the api endpoint that will return the HTML

the data-target attribute is the id of the element that should have the data put into the innerHTML of.

*/

function onChangeHTMLUpdate(e) {
    const thisElm = e.target; // the element that created the change event
    const endpoint = thisElm.getAttribute("endpoint"); // the api endpoint that will return the html
    const dataTarget = thisElm.getAttribute("data-target"); // the element id that the html should be put inside - innerHTML
    if (!endpoint || !dataTarget) {
        const data = fetch(endpoint).then(res => res).catch(err => console.error(err))
        if (data) {
            dataTarget.innerHTML = data;
        }
    } else {
        console.error(`${thisElm.id} does not have the required attributes to complete the change event action`)
    }
}
const onChangeElms = document.getElementsByClassName("onchange-html-update");
onChangeElms.forEach(elm => {
    elm.document.addEventListener("change", onChangeHTMLUpdate);
});

function onClickHTMLUpdate(e) {
    const thisElm = e.target; // the element that created the change event
    const endpoint = thisElm.getAttribute("endpoint"); // the api endpoint that will return the html
    const dataTarget = thisElm.getAttribute("data-target"); // the element id that the html should be put inside - innerHTML
    if (!endpoint || !dataTarget) {
        const data = fetch(endpoint).then(res => res).catch(err => console.error(err))
        if (data) {
            dataTarget.innerHTML = data;
        }
    } else {
        console.error(`${thisElm.id} does not have the required attributes to complete the change event action`)
    }
}
const onClickElms = document.getElementsByClassName("onclick-html-update");
onClickElms.forEach(elm => {
    elm.document.addEventListener("click", onClickHTMLUpdate);
});
