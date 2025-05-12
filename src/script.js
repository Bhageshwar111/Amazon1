
            let data=[
                {title:"Continue shopping deals",img1:"image/Main photo.jpg",img2:"image/Phone1.jpg",img3:"image/Phone2.jpg",img4:"image/Phone3.jpg",text1:"Phone 1",text2:"Phone 2",text3:"Phone 3",text4:"Phone 4",link:"See all deals"},
                {title:"Appliances for your home | Up to 55% off",img1:"image/AC photo.jpg",img2:"image/Refrigerator.jpg",img3:"image/Microwave photo.jpg",img4:"image/Microwave photo.jpg",text1:"Air conditioners",text2:"Refrigerators",text3:"Microwaves",text4:"Washing macchines",link:"See more"},
                {title:"Revamp your home in style",img1:"image/Bedsheet photo.jpg",img2:"image/Figurine photo.jpg",img3:"image/Shelf photo.jpg",img4:"image/Wall light photo.jpg",text1:"Cushion covers, bedsheets & more",text2:"Figurines, vases & more",text3:"Home storage",text4:"Lighting solutions",link:"Explore all"}
            ]

            let bag="";


            data.map((k)=>{
                return bag+=`<div class="h-[490px] w-[400px] bg-gray-100 flex flex-col justify-between p-2">

                <div class="flex flex-col items-center justify-between">
                    <div class="font-bold text-2xl mb-3">${k.title}</div>
                    <div class="flex justify-around items-center gap-10 mb-1">
                        <img class="h-40 w-40" src="${k.img1}" alt="">
                        <img class="h-40 w-40" src="${k.img2}" alt="">
                    </div>
                    <div class="flex justify-around w-[400px] text-xs mb-1">
                        <div>${k.text1}</div>
                        <div>${k.text2}</div>
                    </div>
                    <div class="flex justify-around items-center gap-10 mb-1">
                        <img class="h-40 w-40" src="${k.img3}" alt="">
                        <img class="h-40 w-40" src="${k.img4}" alt="">
                    </div>
                    <div class="flex justify-around w-[400px] text-xs mb-1">
                        <div>${k.text3}</div>
                        <div>${k.text4}</div>
                    </div>
                </div>

                <div class="text-xs text-blue-600 font-semibold">
                    <a href="#">${k.link}</a>
                </div>


            </div>
                `
            })

            document.getElementById("card").innerHTML = bag;