var data = {

    "Department": [{


        "deptId": 1,
        "deptName": "IT"


    },

    {


        "deptId": 2,
        "deptName": "HR"


    },
    {


        "deptId": 3,
        "deptName": "Accounts"


    }],

    "Faculty": [{


        "id": 1,
        "name": "Zohaib",
        "design": "Web Developer",
        "deptId": 1,
        "deptName": "IT",
        "pic": "/img/53165121_2304964032867540_3804352344259297280_n.jpg",


    },
    {
        
        
        "id": 2,
        "name": "Ahmer",
        "design": "Web Developer",
        "deptId": 1,
        "deptName": "IT",
        "pic": "/img/29573068_432590410488029_7732008913524300786_n.jpg",
        
        
    },
    {


        "id": 1,
        "name": "Zain",
        "design": "Oracle Developer",
        "deptId": 1,
        "deptName": "IT",
        "pic": "/img/53165121_2304964032867540_3804352344259297280_n.jpg",


    },
    {


        "id": 3,
        "name": "Kaleem",
        "design": "Assistant Manager",
        "deptId": 2,
        "deptName": "HR",
        "pic": "/img/Asma-Basharat-Ali-2-p7hp1s0gai21dgbth9bd3rt6a39gq07tb2xk7yyaxc.png",


    },
    {


        "id": 4,
        "name": "Farhan",
        "design": "Manager",
        "deptId": 3,
        "deptName": "Accounts",
        "pic": "/img/Asma-Basharat-Ali-2-p7hp1s0gai21dgbth9bd3rt6a39gq07tb2xk7yyaxc.png",


    },
    {


        "id": 5,
        "name": "Haroon",
        "design": "Account Executive",
        "deptId": 3,
        "deptName": "Accounts",
        "pic": "/img/Asma-Basharat-Ali-2-p7hp1s0gai21dgbth9bd3rt6a39gq07tb2xk7yyaxc.png",


    }
    ]

}




function getdata() {


    var datalist = data.Department


    datalist.forEach(lst => {


        var ul = document.getElementById('list-content')

        ul.innerHTML += `

            <div>
        

                <li class="list" onclick=getcards(${lst.deptId})>${lst.deptName}</li>

            </div>

        `


    })



    // cardData()
    active()


}



// function cardData() {




//     var faculty = data.Faculty

//     var hov = document.getElementById('card')


//     faculty.forEach(fac => {



//         if (fac.deptId === 1) {



//             hov.innerHTML += `



//             <div class="maincard" id="main">





//                     <div class="card">


//                         <div class="hov" id="hov">


//                             <div class="mg">



//                                 <img class="img-card"
//                                 src="${fac.pic}" alt="">


//                             </div>



//                             <div class="data">


//                                 <span class="card-heading">${fac.name}</span>
//                                 <p class="card-desig">${fac.design}<br>
//                                     ${fac.deptName}
//                                 </p>



//                                 <div class="butn">


//                                     <button type="button" class="btn btn-primary"
//                                     style="--bs-btn-padding-y: .5rem; --bs-btn-padding-x: 1.5rem; --bs-btn-font-size: .90rem;">
//                                         Read More
//                                     </button>



//                                 </div>


//                             </div>


//                         </div>    


//                     </div>


//                 </div>

//             `


//         }
//     })




// }


function getcards(cardId) {

    
    clearRender()
    
    // console.log("card", data)
    
    var cards = data.Faculty
    var hov = document.getElementById('card')
    
    
    // cards.forEach(card => {


        for (let i = 0; i < cards.length; i++) {
            const element = cards[i];


        if (element.deptId === cardId) {





            let HTMLCODE = `
                
                
            
            
                
            <div class="maincard" id="main">
            
            
                    <div class="card">
                
                
                        <div class="hov" id="hov">
                
                        
                        <div class="mg">
                        
                        
                        
                                <img class="img-card"
                                src="${element.pic}" alt="">
                
                
                            </div>
                
                
                            
                            <div class="data">
                
                            
                            <span class="card-heading">${element.name}</span>
                            <p class="card-desig">${element.design}<br>
                            ${element.deptName}
                            </p>
                            
                            
                            
                            <div class="butn">
                            
                            
                                    <button type="button" class="btn btn-primary"
                                    style="--bs-btn-padding-y: .5rem; --bs-btn-padding-x: 1.5rem; --bs-btn-font-size: .90rem;">
                                    Read More
                                    </button>
                                    
                                    
                                    </div>
                                    
                                    
                                    </div>
                                    
                                    
                                    </div>    
                                    
                                    
                                    </div>
                                    
                                    
                                    </div>`





            hov.innerHTML += HTMLCODE
            console.log("lenght", element.name)


        }

    }





    // })

}


function clearRender() {



    document.getElementById('card').innerHTML = '';


}





function active() {


    var ul = document.querySelectorAll(".list")


    ul.forEach(ull => {

        ull.addEventListener('click', function () {


            ul.forEach(lli => lli.classList.remove('active_li'))
            this.classList.add('active_li')

        })


    })


}

