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


                // console.log(element)

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
    
    
                                    <button onclick=popupData(${element.EmpId}) data-toggle="modal" data-target="#exampleModalLong" type="button" class="btn1 btn-primary"
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


async function popupData(Id){


    await fetch(`https://local.sohailuniversity.edu.pk:90/Handlers/SuWebFacultyHandlerDetail.ashx?empid=${Id}`)

    .then(function(response) {

        return response.json()

    })

    .then(function (data) {

        var detData = data.NewEventsResultsData

        var header = document.getElementById("header")

        var cardDetail = document.getElementById("cardDetail")

        
        for (let i = 0; i < detData.length; i++) {
            const detail = detData[i];
            

            header.innerHTML=`
            
            
                    <div class="imgDiv">
                
                
                        <div class="image">
            
            
                            <img class="mainimg" src="/img/Dr-Meesam-Iftekhar-Hussain-Rizvi-p7ho61yjmsmnj8epq1nnga04ixmhxr9xy2am4rzmxc.png" alt="">
            
            
            
                        </div>


                        <div class="detContDiv">

                            <div class="nameHeading">
                
                
                                <span>${detail.EmpName}</span>
        
        
                            </div>
                        
                        
                            <div class="designHeading">
        
        
                                <span>${detail.DesignationName}</span>
        
        
                            </div>
                            
                            <div class="designHeading">
        
        
                                <span>${detail.DepartmentName}</span>
        
        
                            </div>
            
                        </div>
            
                    </div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">

                                    <span aria-hidden="true">&times;</span>

                                </button>

                                


            `
            console.log(data)

            var ExpData = data.Lst_Exp

            for (let j = 0; j < ExpData.length; j++) {
                const exp = ExpData[j];

                cardDetail.innerHTML = `
                
                <div class="card-header" id="headingOne">

                                                    <h5 class="mb-0">

                                                        <button class="btn btn-link" data-toggle="collapse"
                                                            data-target="#collapseOne" aria-expanded="true"
                                                            aria-controls="collapseOne">

                                                            Collapsible Group Item #1

                                                        </button>

                                                    </h5>

                                                </div>


                                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                                    data-parent="#accordion">

                                                    <div class="card-body">


                                                        <div class="eduList">

                                                            <li><i class="fa fa-regular fa-circle-dot"></i>M.Phil.
                                                                (Anatomy) = Baqai Medical University, Karachi (2016)
                                                            </li>
                                                            <li><i class="fa fa-regular fa-circle-dot"></i>M.B. B.S. =
                                                                Hamdard University, Karachi (2003)
                                                            </li>

                                                        </div>

                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                        non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                                        put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                                        wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                                        excepteur butcher vice lomo. Leggings occaecat craft beer
                                                        farm-to-table, raw denim aesthetic synth nesciunt you probably
                                                        haven't heard of them accusamus labore sustainable VHS.

                                                    </div>

                                                </div>

                `
                
            }


            
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
