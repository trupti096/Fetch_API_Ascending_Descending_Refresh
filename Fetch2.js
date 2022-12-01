box=document.querySelector('#box')

let displayData=(result)=>{
    box.innerHTML=''
    result.map((item)=>{
        box.innerHTML+=`<div id='box2'>
        <h1>${item.title}</h1>
        <img src=${item.image} />
        <p>${item.description}</p>
        <button>$${item.price}</button>

        </div>`
    })

}
box.style.display='grid'
box.style.gridTemplateColumns='repeat(4,1fr)'


let api='https://fakestoreapi.com/products'
let data=async()=>{
    let response=await fetch(api)
    let result= await response.json()
    displayData(result)
}
data()

let sorting=()=>{
    let api='https://fakestoreapi.com/products'
    let data=async()=>{
        let response=await fetch(api)
        let result= await response.json()
        console.log(result)
        result.sort((a,b)=>{
        return a.price-b.price;
        })
        displayData(result)
    }
    data()
}

let reverse=()=>{
    let api='https://fakestoreapi.com/products'
    let data=async()=>{
        let response=await fetch(api)
        let result= await response.json()
        console.log(result)
        result.sort((a,b)=>{
        return a.price-b.price;
        })
        console.log(result.reverse())
        displayData(result)
    }
    data()
}

let unsorting=()=>{
    let api='https://fakestoreapi.com/products'
    let data=async()=>{
        let response=await fetch(api)
        let result= await response.json()
        console.log(result)
        displayData(result)
    }
    data()
}