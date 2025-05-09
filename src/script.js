let a=``

            let data=[
                {title:"Continue shopping deals",img1:"image/Phone1.jpg",img2:"",img3:"",img4:"",text1:"fsd",text2:"cvxf",text3:"",text4:""},
                {title:"",img1:"image/Phone2.jpg",img2:"",img3:"",img4:"",text1:"fsd",text2:"",text3:"",text4:""},
                {title:"",img1:"image/Phone3.jpg",img2:"",img3:"",img4:"",text1:"chgf",text2:"",text3:"",text4:""}
            ]

            let bag="";


            data.map((k)=>{
                return bag+=`<div class="h-[400px] w-[400px] bg-white flex flex-col justify-between p-2">

                <div class="flex flex-col items-center justify-between">
                    <div class="font-bold text-4xl">${k.title}</div>
                    <div class="flex justify-around items-center gap-10">
                        <img class="h-40 w-40" src="${k.img1}" alt="">
                        <img class="h-40 w-40" src="${k.img2}" alt="">
                    </div>
                    <div class="flex justify-around w-[400px] text-xs">
                        <div>${k.text1}</div>
                        <div>${k.text2}</div>
                    </div>
                    <div class="flex justify-around items-center gap-10">
                        <img class="h-40 w-40" src="${k.img3}" alt="">
                        <img class="h-40 w-40" src="${k.img4}" alt="">
                    </div>
                    <div class="flex justify-around w-[400px] text-xs">
                        <div>${k.text3}</div>
                        <div>${k.text4}</div>
                    </div>
                </div>

                <div class="text-xs text-blue-600 font-semibold">
                    <a href="#">See all deals</a>
                </div>


            </div>
                `
            })

            document.getElementById("card").innerHTML = bag;