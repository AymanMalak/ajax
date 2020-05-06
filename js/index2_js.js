$(document).ready(function () {
    // let allData,
// pagSize=10,
// numOfPages,
// paging =document.querySelector("#paging"),
// pagingContent ="",dataContent="";

// fetch('../data.json')
// .then(d => d.json())
// .then(data => {
//     allData = data;
//     console.log(data)
//     numOfPages = Math.ceil( allData.length / pagSize);
//     for(let i=1;i<= numOfPages ;i++){
//         pagingContent +=`<a data-index="${i}">${i}</a>`
//     }
//     paging.innerHTML = pagingContent; 
//     paging.children[0].classList.add('active');
//     document.querySelector("#data").innerHTML =DataBind(0,pagSize,allData)
// })

// paging.addEventListener('click',function(e){
//     if(e.target.nodeName == 'A'){
//         let index =e.target.getAttribute('data-index');
//         let links = document.querySelectorAll('#paging a');
//         links.forEach(element => {
//             element.classList.remove('active')
//         });
//         e.target.classList.add('active')
//         document.querySelector('#data').innerHTML = DataBind((index -1)*pagSize,(pagSize *index),allData)
//     }
// })



// function DataBind(start,end,arr) {
//     dataContent = '';
//     let s = arr.slice(start,end)
//     for(let i=0;i<s.length;i++){
//         dataContent += `
//             <div>
//                 <h1>${s[i].id}</h1>
//                 <p>${s[i].body}</p>
//             </div>
//         `;
//     }
//     return dataContent;
// }



// // fetch('js/data.json')
// // .then(d => d.json())
// // .then(data => console.log(data))






let allData,
pagSize=10,
numOfPages,
paging =document.querySelector("#paging"),
pagingContent ="",dataContent="";
// ----------------------------------------------
fetch('http://jsonplaceholder.typicode.com/posts')
.then(d => d.json())
.then(data => {
    allData = data;
    console.log(data)
    numOfPages = Math.ceil( allData.length / pagSize);
    for(let i=1;i<= numOfPages ;i++){
        pagingContent +=`<a data-index="${i}">${i}</a>`
    }
    paging.innerHTML = pagingContent; 
    paging.children[0].classList.add('active');
    document.querySelector("#data").innerHTML =DataBind(0,pagSize,allData)
})
// -----------------------------------------------
paging.addEventListener('click',function(e){
    if(e.target.nodeName == 'A'){
        let index =e.target.getAttribute('data-index');
        let links = document.querySelectorAll('#paging a');
        links.forEach(element => {
            element.classList.remove('active')
        });
        e.target.classList.add('active')
        document.querySelector('#data').innerHTML = DataBind((index -1)*pagSize,(pagSize *index),allData)
    }
})
// ----------------------------------------------
function DataBind(start,end,arr) {
    dataContent = '';
    let s = arr.slice(start,end)
    for(let i=0;i<s.length;i++){
        dataContent += `
            <div>
                <h1 style="font-weight: 900;">${s[i].id}</h1>
                <h4 style="color: green;padding: 10px 0">${s[i].title}</h4>
                <p style="color:blue">${s[i].body}</p>
            </div>
        `;
    }
    return dataContent;
}

})