let form =  document.getElementById("mainform") ; 
let input =  document.getElementById("insert") ;  
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function find(v){
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${v}&days=3`).then( res => res.json()).then(data => display(data,data.forecast.forecastday));
}

function display(data , a){
    if (data.current != null) 
    {
        let d = new Date(data.current.last_updated.replace(" ", "T"));
        let c = 
                `
                    <div>
                        <div class="d-flex align-content-center justify-content-between sc">
                            <h3 id="day fs-5 fs-md-3">${days[d.getDay()]}</h3>
                            <h3 id="date fs-5 fs-md-3">${d.getDate() + monthNames[d.getMonth()]}</h3>
                        </div>
                        <div class="country text-info"> <span class="city fs-4">${data.location.name}</span> International Airport </div>
                        <div class="degree d-flex  align-items-center mt-3 mb-2">
                            <div class="num fs-1 display-1 me-5 text-white">${data.current.temp_c}<sup>o</sup>C</div>
                            <div class="forecast-icon w-40px h-40px">
                                <img class="h-100 w-100" src="https:${data.current.condition.icon}"  alt="forecast_image">
                            </div>
                        </div> 
                        <div class="custom fs-3 c-o">${data.current.condition.text}</div>
                        <div class="mt-3 text-white">
                            <span class="me-3"><img class="me-2" src="images/icon-umberella.png" alt="icon-umberella">20 %</span>
                            <span class="me-3"><img class="me-2" src="images/icon-wind.png" alt="icon-wind">${data.current.wind_kph} km/h</span>
                            <span class="me-3"><img class="me-2" src="images/icon-compass.png" alt="icon-compass">${data.current.wind_degree} degree</span>
                        </div>
                    </div>
                `; 
        let  n = 
                `
                    <div>
                        <div class="next-1 p-3 mb-4 border-bottom border-info">
                            <div class="text-center text-white-50 mb-2">
                                <h3 id="day fs-5 fs-md-4">${days[new Date(a[1].date.replace(" ", "T")).getDay()]}</h3>
                            </div>
                            <div class="degree d-flex justify-content-center  align-items-center mt-3 mb-2">
                                <div class="num fs-2 display-1 me-5 text-white fw-bold">${a[1].day.maxtemp_c}<sup>o</sup>C</div>
                                <div class="forecast-icon w-40px h-40px">
                                    <img class="h-100 w-100" src="https:${a[1].day.condition.icon}"  alt="forecast_image">
                                </div>
                            </div> 
                            <div class="text-center c-o mb-2">
                                <h5 id="day fs-md-4">${a[1].day.condition.text}</h3>
                            </div>
                            <div class="d-flex justify-content-center  align-items-center mt-4 mb-2">
                                <div class="max d-flex align-items-center me-4">
                                    <i class="fa-solid fa-up-long text-danger fs-3"></i>
                                    <div class="fs-4 ms-2 text-white">${a[1].day.maxtemp_c}</div>
                                </div>
                                <div class="min d-flex align-items-center ">
                                    <i class="fa-solid fa-down-long text-success fs-3"></i>
                                    <div class="fs-4 ms-2 text-white">${a[1].day.mintemp_c}</div>
                                </div>
                            </div> 
                        </div>
                        <div class="next-2">
                            <div class="text-center text-white-50 mb-2">
                                <h3 id="day fs-5 fs-md-4"> ${days[new Date(a[2].date.replace(" ", "T")).getDay()]}</h3>
                            </div>
                            <div class="degree d-flex justify-content-center  align-items-center mt-3 mb-2">
                                <div class="num fs-2 display-1 me-5 text-white fw-bold">${a[2].day.maxtemp_c}<sup>o</sup>C</div>
                                <div class="forecast-icon w-40px h-40px">
                                    <img class="h-100 w-100" src="https:${a[2].day.condition.icon}" alt="forecast_image">
                                </div>
                            </div> 
                            <div class="text-center c-o mb-2">
                                <h5 id="day fs-md-4">${a[2].day.condition.text}</h3>
                            </div>
                            <div class="degree d-flex justify-content-center  align-items-center mt-4 mb-2">
                                <div class="max d-flex align-items-center me-4">
                                    <i class="fa-solid fa-up-long text-danger fs-3"></i>
                                    <div class="fs-4 ms-2 text-white">${a[2].day.maxtemp_c}</div>
                                </div>
                                <div class="min d-flex align-items-center ">
                                    <i class="fa-solid fa-down-long text-success fs-3"></i>
                                    <div class="fs-4 ms-2 text-white">${a[2].day.mintemp_c}</div>
                                </div>
                            </div> 
                        </div>
                    </div>
                `;
        document.getElementById('mainDay').classList.replace("d-none" , "d-block") ;   
        document.getElementById('Next').classList.replace("d-none" , "d-block") ;   
        document.getElementById('mainDay').innerHTML= c  ;  
        document.getElementById('Next').innerHTML= n  ;  
    }
}

form.addEventListener('submit' ,  (e) => {
    e.preventDefault(); 
    if(input.value >= 3 ) find(input.value) ; 
    
}) ; 

input.addEventListener('input' , (e)=>{
    e.preventDefault(); 
    find(input.value); 

});   