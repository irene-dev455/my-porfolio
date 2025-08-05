const slider=document.querySelectorAll(".slider")
console.log(slider)


let currentPosition = 0
const moveSlider=(()=>{
    currentPosition++;


    if (currentPosition == slider.length) {
        currentPosition=0
    }
    slider.forEach((eachSlider)=> {
        eachSlider.style.transform =`translateX(-${currentPosition}00%)`
    });
})
console.log(currentPosition);
moveSlider()
setInterval(()=>{
    moveSlider()
},5000)





const allData= [
    [
        {
            photo:"./men/1.jfif",
             items:"jacket",
             details:"brown jacket with jean pant",
             Size:"38-40",
             prize:"$200",
         },
         {
            photo:"./men/2.jfif",
             items:"jacket",
             details:"black jacket with white vest",
             Size:"38 & 39",
             prize:"$70",
         },
         {
            photo:"./men/3.jfif",
             items:"senate wear",
             details:"teal green men senate wear",
             Size:"40-43",
             prize:"$30",
         },
         {
            photo:"./men/4.jfif",
             items:"black cap",
             details:"hoddie and short for men",
             Size:"38-40",
             prize:"$700",
         },
         {
            photo:"./men/5.jfif",
             items:"fashion wear",
             Size:"38-40",
             details:"hoddie and short for men",
             prize:"$700",
         }, 
         {
            photo:"./men/16.jpg",
             items:"fashion wear",
             Size:"38-40",
             details:"hoddie and short for men",
             prize:"$700",
         }, 
         {
            photo:"./men/6.jpg",
             items:"fashion wear",
             Size:"38-40",
             details:"hoddie and short for men",
             prize:"$700",
         }, 
         {
            photo:"./men/7.jpg",
             items:"fashion wear",
             Size:"38-40",
             details:"hoddie and short for men",
             prize:"$700",
         }, 
         {
            photo:"./men/8.jpg",
             items:"fashion wear",
             Size:"38-40",
             details:"hoddie and short for men",
             prize:"$700",
         }, 
         {
            photo:"./men/9.jpg",
             items:"fashion wear",
             Size:"38-40",
             details:"hoddie and short for men",
             prize:"$700",
         }, 
         {
            photo:"./men/10.jpg",
             items:"fashion wear",
             Size:"38-40",
             details:"hoddie and short for men",
             prize:"$700",
         }, 
         {
            photo:"./men/11.jfif",
             items:"fashion wear",
             Size:"38-40",
             details:"hoddie and short for men",
             prize:"$700",
         }, 
         {
            photo:"./men/12.jpg",
             items:"fashion wear",
             Size:"38-40",
             details:"hoddie and short for men",
             prize:"$700",
         }, 
         {
            photo:"./men/13.png",
             items:"fashion wear",
             Size:"38-40",
             details:"hoddie and short for men",
             prize:"$700",
         }, 
         {
            photo:"./men/14.jpg",
             items:"fashion wear",
             Size:"38-40",
             details:"hoddie and short for men",
             prize:"$700",
         }, 
         {
            photo:"./men/15.jpg",
             items:"fashion wear",
             Size:"38-40",
             details:"hoddie and short for men",
             prize:"$700",
         }, 
    ],    
    [
        {
            photo:"women/1.jpg",
             items:"women gown",
             details:"blue short hand dress, knee lenght",
             Size:"38-40",
             prize:"$700",
         },
         {
            photo:"women/2.jpg",
             items:"purse",
             details:"brown handless purse",
             Size:"small size",
             prize:"$40",
         },
         {
            photo:"women/3.jpg",
             items:"hair tie",
             details:"blue hair tie",
             Size:"6",
             prize:"$700",
         },
         {
            photo:"women/4.jpg",
             items:"glass",
             details:"white glasses and leather gloves",
             Size:"4",
             prize:"$500",
         },
         {
            photo:"women/5.jpg",
             items:"gown",
             details:"orange lace gown",
             Size:"32-38",
             prize:"$50",
         },
         {
            photo:"women/6.jpg",
             items:"full attire",
             details:"a blue gown,jacket,white heels and a peach bag",
             Size:"38-40",
             prize:"$100",
         },
         {
            photo:"women/7.jpg",
             items:"black top",
             Size:"38-44",
             prize:"$10",
         },
         {
            photo:"women/22.jpg",
             items:"pallazo",
             details:"blue and white female palazzo",
             Size:"38-40",
             prize:"$70",
         },
         {
            photo:"women/9.jpg",
             items:"Hat",
             details:"black female hat",
             Size:"6",
             prize:"$10",
         },
         {
            photo:"women/19.jpg",
             items:"Gown",
             details:"orange short gown",
             Size:"38-40",
             prize:"$50",
         },
         {
            photo:"women/23.jpg",
             items:"Hat",
             details:"brown hat with a black tie on it",
             Size:"6",
             prize:"$13",
         },
         {
            photo:"women/12.jpg",
             items:"full jacket",
             details:"brown female jacket",
             Size:"38-40",
             prize:"$700",
         },
         {
            photo:"women/17.jpg",
             items:"hat",
             details:"brown hat",
             Size:"6",
             prize:"$15",
         },
         {
            photo:"women/18.jpg",
             items:"jean trouser",
             details:"female crazy jeans",
             Size:"38-40",
             prize:"$700",
         },
         {
            photo:"women/15.jpg",
             items:"gown",
             details:"red sequence gown",
             Size:"38-40",
             prize:"$700",
         },
         {
            photo:"women/16.jpg",
             items:"bag",
             details:"pink mimi back bag",
             Size:"small size",
             prize:"$700",
         }
    ],
    [
        {
            photo:"children/4.jfif",
             items:"baby wear",
             details:"blue baby hoddie with cap",
             prize:"$40",
         },
         {
            photo:"children/3.jfif",
             items:"baby attire",
             details:"up and down hoddie with army jacket",
             prize:"$30",
         },
         {
            photo:"children/2.jfif",
             items:"baby cap",
             details:"black baby cap",
             prize:"$10",
         },
         {
            photo:"children/1.jfif",
             items:"baby attire",
             details:"brown baby top and hair band",
             prize:"$700",
         },
         {
            photo:"children/5.jfif",
             items:"full baby drees",
             details:"2 baby pin down with a brown short and shoe",
             prize:"$100",
         },
         {
            photo:"children/6.jfif",
             items:"baby pin down",
             details:"pink and blue baby pin down",
             prize:"$700",
         },
         {
            photo:"children/17.jfif",
             items:"children hoddie",
             details:"baby burberry hoddie up and down",
             prize:"$700",
         },
         {
            photo:"children/8.jpg",
             items:"children sweater",
             details:"brown sweater for kids",
             prize:"$30",
         },
         {
            photo:"children/9.jpg",
             items:"shoe",
             details:"red allstars shoe for babies",
             prize:"$25",
         },
         {
            photo:"children/10.jpg",
             items:"shoe",
             details:"black and white baby shoe",
             prize:"$24",
         },
         {
            photo:"children/11.jfif",
             items:"hair cover",
             details:"burnt orange baby hair cover",
             prize:"$700",
         },
         {
            photo:"children/12.jfif",
             items:"baby hoddie",
             details:"blue burberry hoddie up and down for babies",
             prize:"$50",
         },
         {
            photo:"children/13.jfif",
             items:"baby blouse",
             details:"yellow off shoulder blouse",
             prize:"$37",
         },
         {
            photo:"children/14.jfif",
             items:"baby full attire",
             details:"brown baby attire",
             prize:"$75",
         },
         {
            photo:"children/15.jfif",
             items:"hoddie",
             details:"brown up and down hoddie",
             prize:"$700",
         },
         {
            photo:"children/16.jfif",
             items:"hoddie",
             details:"2 in one baby hoddie and shoes",
             prize:"$700",
         },
    ]
]


const menWears = allData[0].map((p)=>{
return ` <div class="menContainer">
    <div class="menImg"><img src=${p.photo} class="photo"></div>
    <div class="menInfo">
        <p>Items:${p.items}</p>
        <p>details:${p.details}</p>
        <p>Size:${p.Size}</p>
        <p>Prize:${p.prize}</p>
    </div>
    <div class="btn-div">
        <input type="button" value="Add to cart" class="btn"/>
    </div>
</div>`
})

let menDiv = document.querySelector(".men")
menDiv.innerHTML=`<div class="menCont">
<div class="men-text">
    <p class="text">Men Collections</p>
    <div class="men-Content">${menWears.join(" ")}</div>
</div>
</div>`



const womenWears = allData[1].map((p)=>{
    return ` <div class="womenContainer">
        <div class="womenImg"><img src=${p.photo} class="photo"></div>
        <div class="womenInfo">
            <p>Items:${p.items}</p>
            <p>details:${p.details}</p>
            <p>Size:${p.Size}</p>
            <p>Prize:${p.prize}</p>
        </div>
        <div class="btn-div">
            <input type="button" value="Add to cart" class="btn"/>
        </div>
    </div>`
    })
    
    let womenDiv = document.querySelector(".women")
    womenDiv.innerHTML=`<div class="womenCont">
    <div class="women-text">
        <p class="text">Women Collections</p>
        <div class="women-Content">${womenWears.join(" ")}</div>
    </div>
    </div>`


    const childrenWears = allData[2].map((p)=>{
        return ` <div class="childrenContainer">
            <div class="childrenImg"><img src=${p.photo} class="photo"></div>
            <div class="childrenInfo">
                <p>Items:${p.items}</p>
                <p>details:${p.details}</p>
                <p>Prize:${p.prize}</p>
            </div>
            <div class="btn-div">
                <input type="button" value="Add to cart" class="btn"/>
            </div>
        </div>`
        })
        
        let childrenDiv = document.querySelector(".children")
        childrenDiv.innerHTML=`<div class="childenCont">
        <div class="children-text">
            <p class="text">children Collections</p>
            <div class="children-Content">${childrenWears.join(" ")}</div>
        </div>
        </div>`


        
document.querySelectorAll(".btn").forEach((eachBtn)=>{
eachBtn.addEventListener("click",(e)=>{
e.target.value = "Added!";
e.target.style.backgroundColor = "seashell"
e.target.style.color = "#587587"

setTimeout(() => {
    e.target.value = "Add to cart";
    e.target.style.backgroundColor = "#587587"
    e.target.style.color = "white"
}, 2000);

// document.querySelectorAll(".btn-div").forEach((eachBtnDiv)=>{
//     eachBtnDiv.innerHTML = `<div class="controls">
//     <button class="add_btn">+</button>
// <p>1</p>
//     <button class="minus_btn">-</button>
// </div>`
// })
})


})



