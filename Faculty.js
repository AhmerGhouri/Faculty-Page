var data = {

    "Department" : [{


        "deptId" : 1,
        "deptName" : "IT"


    } ,

    {


        "deptId" : 2,
        "deptName" : "HR"


    },
    {


        "deptId" : 3,
        "deptName" : "Accounts"


    }],

    "Faculty" : [{


        "id" : 1,
        "name" : "Zohaib",
        "design" : "Web Developer",
        "deptId" : 1,
        "deptName" : "IT",
        "pic" : "/img/53165121_2304964032867540_3804352344259297280_n.jpg",


    },
    {


        "id" : 2,
        "name" : "Ahmer",
        "design" : "Web Developer",
        "deptId" : 1,
        "deptName" : "IT",
        "pic" : "/img/29573068_432590410488029_7732008913524300786_n.jpg",


    },
    {


        "id" : 3,
        "name" : "Kaleem",
        "design" : "Assistant Manager",
        "deptId" : 2,
        "deptName" : "HR",
        "pic" : "/img/Asma-Basharat-Ali-2-p7hp1s0gai21dgbth9bd3rt6a39gq07tb2xk7yyaxc.png",


    },
    {


        "id" : 4,
        "name" : "Farhan",
        "design" : "Manager",
        "deptId" : 3,
        "deptName" : "Accounts",
        "pic" : "/img/Asma-Basharat-Ali-2-p7hp1s0gai21dgbth9bd3rt6a39gq07tb2xk7yyaxc.png",


    },
    {


        "id" : 5,
        "name" : "Haroon",
        "design" : "Account Executive",
        "deptId" : 3,
        "deptName" : "Accounts",
        "pic" : "/img/Asma-Basharat-Ali-2-p7hp1s0gai21dgbth9bd3rt6a39gq07tb2xk7yyaxc.png",


    }
]
    
}




function getdata(){

    
    var datalist = data.Department

    // console.log(datalist)

    datalist.forEach(lst => {
        
        // console.log(lst)
        
        var ul = document.getElementById('list-content')

        ul.innerHTML += `

            <div>
        

                <li class="list">${lst.deptName}</li>

            </div>

        `

        // console.log(ul)
        


    })


    cardData()





}



function cardData(){




    console.log("card",data)

    var faculty = data.Faculty

    var hov = document.getElementById('card')


    faculty.forEach(fac => {
        
        hov.innerHTML += `

        
        <div class="maincard" id="main">




       
        <div class="card">


        <div class="hov" id="hov">





  

        

        <div class="mg">
        
        
        
        <img class="img-card"
        src="${fac.pic}" alt="">
        
        
        </div>
        
        
        
        <div class="data">
        
        
        <span class="card-heading">${fac.name}</span>
        <p class="card-desig">${fac.design}<br>
        ${fac.deptName}
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
                
                `
                
                
            }
            )
            
            
            

}


getdata()