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


            // console.log("firestr" , data)


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
    // get(3)


}


// function get(DeptId) {

//     // console.log("deptee" , DeptId)

//     fetch(`https://local.sohailuniversity.edu.pk:90/Handlers/SuWebfacultyHandler.ashx?deptid=3`)
    
//     .then(function (response) {
        
        
//         return response.json()
        
//     })
    
//     .then(function (data) {
        
        
//         // console.log("dept" , data)   

//         var Pagin = document.getElementById('Pagin')

//         var faculty = data.Lst_Detail


//         for (let q = 0; q < faculty.length / 2; q++) {
//             const element = faculty[q];


//             // console.log("elel" , element)


//             NumLastRec = q * 5

//             NumNewRec = NumLastRec - 5

//             var li = document.createElement('li')

//             Pagin.appendChild(li)


//             if( q !== 0){


//                 li.innerHTML = `<li><a onclick='getcards(${NumNewRec} , ${NumLastRec})'>${q}</a></li> `


//             }



//             // console.log("num" , NumLastRec)
//             // console.log("num" , NumNewRec)


            
//         }


//     })

// }




async function getcards(DeptId) {


    active()
    clearRender()
    // get(DeptId)
    

    await fetch(`https://local.sohailuniversity.edu.pk:90/Handlers/SuWebfacultyHandler.ashx?deptid=${DeptId}`)


        .then(function (response) {


            return response.json()

        })

        .then(function (data) {


            // console.log("data" ,data)


            var cards = data.Lst_Detail


            var hov = document.getElementById('card')




            console.log("cards",cards)

            for (let i = 0; i < cards.length ; i++) {
                const element = cards[i];




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


// For PopUp Data


async function popupData(Id) {


    await fetch(`https://local.sohailuniversity.edu.pk:90/Handlers/SuWebFacultyHandlerDetail.ashx?empid=${Id}`)

        .then(function (response) {

            return response.json()

        })

        .then(function (data) {


            var detData = data.NewEventsResultsData

            var ExpData = data.Lst_Exp

            var QuaData = data.Lst_Qua

            var ResTab = data.Lst_Research

            var header = document.getElementById("header")

            var cardQua = document.getElementById("qualist")

            var cardRes = document.getElementById("cardDetail3")

            var cardDetail = document.getElementById("educlist")

            document.getElementById('educlist').innerHTML = '';
            document.getElementById('qualist').innerHTML = '';
            document.getElementById('cardDetail3').innerHTML = '';



            // For Name , designation and department Headings

            for (let i = 0; i < detData.length; i++) {
                const detail = detData[i];


                header.innerHTML = `
            
            
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


            }

            //  for Experience Toggle Tab Showing Data

            if (ExpData.length === 0) {




                cardDetail.innerHTML += `
                
                <div class="noData">
                
                    No Data Available
                
                </div>

                
                `


            }

            else {


                ExpData.map(exp => {


                    let htmlCode;

                    htmlCode = `
    
                    
                         <li><i class="fa fa-regular fa-circle-dot"></i>
                         ${exp.Qualification}
                         </li>
                         
                         
                         
                         
                         
                         `


                    cardDetail.innerHTML += htmlCode;


                })

            }


            //  for Qualification Toggle Tab Showing Data


            if (QuaData.length === 0) {




                cardQua.innerHTML += `
                
                <div class="noData">
                
                    No Data Available
                
                </div>

                
                `


            }

            else {


                QuaData.map(quali => {


                    //  if Qualification data exist but qualification Data didn't enter


                    if (quali.Qualification !== '') {

                        let htmlCode;

                        htmlCode = `
                        
                        
                        <li><i class="fa fa-regular fa-circle-dot"></i>
                        ${quali.Qualification}
                        </li>
                        
                        
                        
                        
                        
                        `


                        cardQua.innerHTML += htmlCode;




                    }


                    else {

                        cardQua.innerHTML += `
                
                            <div class="noData">
                
                                Qualification Not Available
                
                            </div>

                
                        `

                    }









                })

            }


            // For Research Tab


            for (let k = 0; k < ResTab.length; k++) {

                const Res = ResTab[k];


                cardRes.innerHTML += `
            
                        <div class="card" id="cardDetail3" onclick=active()>

                            <div class="card-header" id="headingTwo">
                
                                <h5 class="mb-0">

                                    <i  onclick="changeCss(this)" class="fa-solid fa-minus">

                                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#${Res.ResearchDesc}" aria-expanded="false" aria-controls="collapseTwo">
                
                                                ${Res.ResearchHeadDesc}

                                                </button>
                    
                                                </i>
                       
                                                </h5>
                    
                                                </div>

                    <div id="${Res.ResearchDesc}" class="collapse show" aria-labelledby="headingOne"
                                                    data-parent="#accordion">

                                                    <div class="card-body">
                
                
                                                        <div class="eduList" id="qualist">

                                                    

                                                    <li style="list-style:none"><i class="fa fa-regular fa-circle-dot"></i>
                                                    ${Res.ResearchDesc}</li>

                                                    </div>
                                                        
                                                    </div>


                    </div>
                    </div>
            
            
                `


            }


        })


}


function clearRender() {



    document.getElementById('card').innerHTML = '';


}



// For Active List 



function active() {


    var ul = document.querySelectorAll("#list")
    var cardli = document.querySelectorAll("card-header")

    ul.forEach(ull => {

        ull.addEventListener('click', function () {


            ul.forEach(lli => lli.classList.remove('active_li'))
            this.classList.add('active_li')

        })


    })

    cardli.forEach(ca => {

        ca.addEventListener('click', function () {


            car.forEach(carli => carli.classList.remove('card-header'))
            this.classList.add('card-active')



        })

    })


}


// For Change Css

function changeCss(x) {





    x.classList.toggle("fa-minus")
    x.classList.toggle("fa-plus")



}



document.addEventListener("DOMContentLoaded", function () {
    getdata()
});
