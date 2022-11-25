/* Global Variables */
const citiesArray = [
  ["Aba as Su‘ud", "Abā as Su‘ūd"],
  ["Abha", "Abha"],
  ["Abqaiq", "Abqaiq"],
  ["Abu ‘Arish", "Abū ‘Arīsh"],
  ["Ad Darb", "Ad Darb"],
  ["Ad Dawadimi", "Ad Dawādimī"],
  ["Ad Dilam", "Ad Dilam"],
  ["Afif", "Afif"],
  ["Al Abar", "Al Ābār"],
  ["Al Artawiyah", "Al Arţāwīyah"],
  ["Al Awjam", "Al Awjām"],
  ["Al Bahah", "Al Bahah"],
  ["Al Battaliyah", "Al Baţţālīyah"],
  ["Al Bukayriyah", "Al Bukayrīyah"],
  ["Al Busur", "Al Buşur"],
  ["Al Fadili", "Al Fāḑilī"],
  ["Al Faysaliyah", "Al Fayşalīyah"],
  ["Al Fuwayliq", "Al Fuwayliq"],
  ["Al Ghatghat", "Al Ghaţghaţ"],
  ["Al Hada", "Al Hadā"],
  ["Al Hufuf", "Al Hufūf"],
  ["Al Jafr", "Al Jafr"],
  ["Al Jaradiyah", "Al Jarādīyah"],
  ["Al Jawf", "Al Jawf"],
  ["Al Jubayl", "Al Jubayl"],
  ["Al Jumum", "Al Jumūm"],
  ["Al Khafji", "Al Khafjī"],
  ["Al Khalidiyah", "Al Khālidīyah"],
  ["Al Kharj", "Al Kharj"],
  ["Al Majaridah", "Al Majāridah"],
  ["Al Markaz", "Al Markaz"],
  ["Al Mikhlaf", "Al Mikhlāf"],
  ["Al Mindak", "Al Mindak"],
  ["Al Mubarraz", "Al Mubarraz"],
  ["Al Mudawwarah", "Al Mudawwarah"],
  ["Al Munayzilah", "Al Munayzilah"],
  ["Al Mutayrifi", "Al Muţayrifī"],
  ["Al Muwayh", "Al Muwayh"],
  ["Al Qarah", "Al Qārah"],
  ["Al Qatif", "Al Qaţīf"],
  ["Al Qudayh", "Al Qudayḩ"],
  ["Al Qurayn", "Al Qurayn"],
  ["Al Quraynah", "Al Quraynah"],
  ["Al Wajh", "Al Wajh"],
  ["Al ‘Aqiq", "Al ‘Aqīq"],
  ["Al ‘Awajiyah", "Al ‘Awājīyah"],
  ["Al-Qassim", "Al-Qassim Province"],
  ["An Nimas", "An Nimāş"],
  ["Ar Rass", "Ar Rass"],
  ["Ar Ruqayyiqah", "Ar Ruqayyiqah"],
  ["Arar", "Arar"],
  ["As Saffaniyah", "As Saffānīyah"],
  ["As Sahba’", "As Sahbā’"],
  ["As Sulaymaniyah", "As Sulaymānīyah"],
  ["As Sulayyil", "As Sulayyil"],
  ["Asir", "Minţaqat ‘Asīr"],
  ["Ash Shubramiyah", "Ash Shubramīyah"],
  ["Ash Shurayf", "Ash Shurayf"],
  ["Ash Shu‘aybah", "Ash Shu‘aybah"],
  ["At Taraf", "Aţ Ţaraf"],
  ["At Tubi", "At Tūbī"],
  ["Az Zulfi", "Az Zulfī"],
  ["Badr Hunayn", "Badr Ḩunayn"],
  ["Banban", "Banbān"],
  ["Birzayn", "Birzayn"],
  ["Buraydah", "Buraydah"],
  ["Dammam", "Dammam"],
  ["Dhahran", "Dhahran"],
  ["Duba", "Duba"],
  ["Farasan", "Farasān"],
  ["Ha'il", "Ha'il"],
  ["Hafar Al-Batin", "Hafar Al-Batin"],
  ["Hajlah", "Ḩajlah"],
  ["Hajrat al Khinbish", "Ḩajrat al Khinbish"],
  ["Jeddah", "Jeddah"],
  ["Jizan", "Jizan"],
  ["Julayjilah", "Julayjilah"],
  ["Khamis Mushait", "Khamis Mushait"],
  ["Khobar", "Khobar"],
  ["Khushaybi al Hadar", "Khushaybī al Ḩaḑar"],
  ["Marat", "Marāt"],
  ["Masahili", "Masāḩilī"],
  ["Mecca", "Mecca"],
  ["Medina", "Medina"],
  ["Mintaqat Tabuk", "Minţaqat Tabūk"],
  ["Misliyah", "Mislīyah"],
  ["Mizhirah", "Mizhirah"],
  ["Mulayjah", "Mulayjah"],
  ["Naghbi", "Naghbī"],
  ["Najran", "Najrān"],
  ["Nimran", "Nimrān"],
  ["Qaisumah", "Qaisumah"],
  ["Qal‘at Bishah", "Qal‘at Bīshah"],
  ["Qara", "Qārā"],
  ["Qurayyat", "Qurayyat"],
  ["Rabigh", "Rābigh"],
  ["Radwan", "Raḑwān"],
  ["Rafha", "Rafha"],
  ["Rahimah", "Raḩīmah"],
  ["Ras Tanura", "Ras Tanura"],
  ["Riyadh", "Riyadh"],
  ["Sabya", "Şabyā"],
  ["Safwa", "Şafwá"],
  ["Sajir", "Sājir"],
  ["Sakakah", "Sakakah"],
  ["Samitah", "Şāmitah"],
  ["Sayhat", "Sayhāt"],
  ["Sharurah", "Sharurah"],
  ["shokhaibٍ", "shokhaibٍ"],
  ["Sidi Hamzah", "Sīdī Ḩamzah"],
  ["Sidis", "Sidīs"],
  ["Sufan", "Sufan"],
  ["Sultanah", "Sulţānah"],
  ["Sumaymah", "Şumaymah"],
  ["Suwayr", "Şuwayr"],
  ["Tabalah", "Tabālah"],
  ["Tabuk", "Tabuk"],
  ["Tamrah", "Tamrah"],
  ["Tanumah", "Tanūmah"],
  ["Tarut", "Tārūt"],
  ["Ta’if", "Ta’if"],
  ["Tubarjal", "Ţubarjal"],
  ["Tumayr", "Tumayr"],
  ["Turabah", "Turabah"],
  ["Turaif", "Turaif"],
  ["Usayfirat", "‘Uşayfirāt"],
  ["Umluj", "Umluj"],
  ["Umm as Sahik", "Umm as Sāhik"],
  ["Yanbu", "Yanbu"],
];

// Add the cities from the sities array to the select dynamically
let select = document.getElementById("zip");
let documentFragment = document.createDocumentFragment();

for (let i = 0; i < citiesArray.length; i++) {
  let option = document.createElement("option");
  option.text = citiesArray[i][0];
  option.value = citiesArray[i][1];
  documentFragment.appendChild(option);
}
//documentFragment.firstElementChild.setAttribute("selected", "selected");
select.appendChild(documentFragment);

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const apiKey = "c0e8b8b52ddfeffe28108f5917407c3f";
const openWeatherMapUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial" //&APPID=${apiKey}&q=`;

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", generateEntry);

/* Function called by event listener */
function generateEntry() {
    let selectedCity = document.getElementById("zip").value;
    getTodayWeather(openWeatherMapUrl, selectedCity, apiKey)
    .then((data)=>{
        postTodayWeather('/')
    });
}

/* Function to GET Web API Data*/
const getTodayWeather = async (url, city, key) => {
    const res = await fetch(url + "&APPID=" + key + "&q=" + city);
    try{
        const data = await res.json();
        console.log(data);
        return data.main.temp;
    }
    catch(error){
        console.log("error", error);
    }
}

/* Function to POST data */
const postTodayWeather = async (url, data) => {

}

/* Function to GET Project Data */
