const getPeopleData = async () => {

    let peopleData = await fetch("https://fakerapi.it/api/v1/persons?_quantity=30");
    let json = await peopleData.json();

    let counter = 1;
    for (let person of json.data) {
        const img = document.createElement("img");
        img.className = "profile-image";
        img.height = "200";
        img.src = `http://placeimg.com/640/480/people/${counter}`

        const people = document.createElement("p");
        people.className = "people-name";
        people.innerHTML = person.firstname + " " + person.lastname;

        const email = document.createElement("p");
        email.className = "email";
        email.innerHTML = person.email;

        const peopleCard = document.createElement("div");
        peopleCard.className = "people-card";

        const cardContainer = document.createElement("div")
        cardContainer.className = "card-container";

        const peopleDiv = document.querySelector(".people-container");

        peopleCard.append(img, people, email)
        cardContainer.append(peopleCard)
        peopleDiv.append(cardContainer);
        counter += 1;
    }
}

const peopleButton = document.querySelector(".search-people");
peopleButton.addEventListener("click", () => getPeopleData())

const getCompanyData = async () => {

    let companyData = await fetch("https://fakerapi.it/api/v1/companies?_quantity=30");
    let json2 = await companyData.json();
    console.log(json2);

    let counter = 1;
    for (let company of json2.data) {
        const img2 = document.createElement("img");
        img2.className = "company-image";
        img2.height = "200";
        img2.src = `http://placeimg.com/640/480/people/${counter}`

        const companies = document.createElement("p");
        companies.className = "companies";
        companies.innerHTML = company.name;

        const website = document.createElement("p");
        website.className = "website";
        website.innerHTML = company.website;

        const companyCard = document.createElement("div");
        companyCard.className = "company-card";

        const cardContainer2 = document.createElement("div")
        cardContainer2.className = "card-container2";

        const companyDiv = document.querySelector(".company-container");

        companyCard.append(img2, companies, website);
        cardContainer2.append(companyCard)
        companyDiv.append(cardContainer2);
        counter += 1;
    }
}
const companyButton = document.querySelector(".search-company");
companyButton.addEventListener("click", () => getCompanyData())