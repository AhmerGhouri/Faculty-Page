// var data = {

//     "Department": [{


//         "deptId": 1,
//         "deptName": "IT"


//     },

//     {


//         "deptId": 2,
//         "deptName": "HR"


//     },
//     {


//         "deptId": 3,
//         "deptName": "Accounts"


//     }],

//     "Faculty": [{


//         "id": 1,
//         "name": "Zohaib",
//         "design": "Web Developer",
//         "deptId": 1,
//         "deptName": "IT",
//         "pic": "/img/53165121_2304964032867540_3804352344259297280_n.jpg",


//     },
//     {


//         "id": 2,
//         "name": "Ahmer",
//         "design": "Web Developer",
//         "deptId": 1,
//         "deptName": "IT",
//         "pic": "/img/29573068_432590410488029_7732008913524300786_n.jpg",


//     },
//     {


//         "id": 1,
//         "name": "Zain",
//         "design": "Oracle Developer",
//         "deptId": 1,
//         "deptName": "IT",
//         "pic": "/img/53165121_2304964032867540_3804352344259297280_n.jpg",


//     },
//     {


//         "id": 3,
//         "name": "Kaleem",
//         "design": "Assistant Manager",
//         "deptId": 2,
//         "deptName": "HR",
//         "pic": "/img/Asma-Basharat-Ali-2-p7hp1s0gai21dgbth9bd3rt6a39gq07tb2xk7yyaxc.png",


//     },
//     {


//         "id": 4,
//         "name": "Farhan",
//         "design": "Manager",
//         "deptId": 3,
//         "deptName": "Accounts",
//         "pic": "/img/Asma-Basharat-Ali-2-p7hp1s0gai21dgbth9bd3rt6a39gq07tb2xk7yyaxc.png",


//     },
//     {


//         "id": 5,
//         "name": "Haroon",
//         "design": "Account Executive",
//         "deptId": 3,
//         "deptName": "Accounts",
//         "pic": "/img/Asma-Basharat-Ali-2-p7hp1s0gai21dgbth9bd3rt6a39gq07tb2xk7yyaxc.png",


//     }
//     ]

// }


// async function facultyApi(){


//     var response = await fetch("https://local.sohailuniversity.edu.pk:90/Handlers/SuWebfacultyHandler.ashx?dept=6")

//     const data = await response.json()

//     console.log(data)

//     return data


// }


// facultyApi()


function getdata() {



    fetch("https://local.sohailuniversity.edu.pk:90/Handlers/SuWebfacultyHandler.ashx")


        .then(function (response) {


            return response.json()

        })


        .then(function (data) {




            var dept = data.NewEventsResultsData


            dept.forEach(lst => {


                var ul = document.getElementById('list-content')

                ul.innerHTML += `
            
                    <div>
            
            
                        <li id="list" onclick=getcards(${lst.DeptId})>${lst.DeptName}</li>
            
                    </div>
            
                `

                
               
            })    
            
            
        })    
        
        
        
    active()
    getcards(3)


}



// function cardData() {


//     fetch(`https://local.sohailuniversity.edu.pk:90/Handlers/SuWebfacultyHandler.ashx?deptid=3`)


//         .then(function (response) {


//             return response.json()

//         })

//         .then(function (data) {




//             var cards = data.Lst_Detail


//             var hov = document.getElementById('card')





//             for (let i = 0; i < cards.length; i++) {
//                 const element = cards[i];


//                 if (element.DeptId === 3) {



//                     var imgsrc = "data:image/png;base64," + btoa(String.fromCharCode.apply(null, new Uint8Array(element.Img)))



//                     let HTMLCODE = `
                
                
                
                
                
//                         <div class="maincard" id="main">
                
                
//                     <div class="card">
    
    
//                         <div class="hov" id="hov">
    
    
//                         <div class="mg">
    
    
    
//                                 <img class="img-card" id="image"
//                                 src="${imgsrc}" alt="">
    
    
//                             </div>
    
    
    
//                             <div class="data">
    
    
//                             <span class="card-heading">${element.EmpName}</span>
//                             <p class="card-desig">${element.Designation}<br>
//                             ${element.DeptName}
//                             </p>
    
    
    
//                             <div class="butn">
    
    
//                                     <button type="button" class="btn btn-primary"
//                                     style="--bs-btn-padding-y: .5rem; --bs-btn-padding-x: 1.5rem; --bs-btn-font-size: .90rem;">
//                                     Read More
//                                     </button>
                                    
                                    
//                                     </div>
    
    
//                                     </div>
    
    
//                                     </div>    
    
                                    
//                                     </div>
    
    
//                                     </div>`





//                     hov.innerHTML += HTMLCODE


//                 }

//             }

//         })





// }


function getcards(DeptId) {


    // if(DeptId === 3){
                    
                    
    //     var abc = document.getElementById('list')

    //     abc.className = "active_li"
    //     console.log("hopgaya" , abc)


    // }

    active()


    clearRender()


    fetch(`https://local.sohailuniversity.edu.pk:90/Handlers/SuWebfacultyHandler.ashx?deptid=${DeptId}`)


        .then(function (response) {


            return response.json()

        })

        .then(function (data) {




            var cards = data.Lst_Detail


            var hov = document.getElementById('card')





            for (let i = 0; i < cards.length; i++) {
                const element = cards[i];


                // if (element.deptId === cardId) {



                var imgsrc = "data:image/png;base64," + btoa(String.fromCharCode.apply(null, new Uint8Array(element.Img)))



                let HTMLCODE = `
                
                
                
                
                
                        <div class="maincard" id="main">
                
                
                    <div class="card">
    
    
                        <div class="hov" id="hov">
    
    
                        <div class="mg">
    
    
    
                                <img class="img-card" id="image"
                                src="${imgsrc}" alt="">
    
    
                            </div>
    
    
    
                            <div class="data">
    
    
                            <span class="card-heading">${element.EmpName}</span>
                            <p class="card-desig">${element.Designation}<br>
                            ${element.DeptName}
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


            }


        })




}


function clearRender() {



    document.getElementById('card').innerHTML = '';


}





function active(DeptId) {


    var ul = document.querySelectorAll("#list")
    
    ul.forEach(ull => {

        ull.addEventListener('click', function () {


            ul.forEach(lli => lli.classList.remove('active_li'))
            this.classList.add('active_li')

        })


    })


}

