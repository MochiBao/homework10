const user = {
    firstName: "Sofia",
    lastName: "Marchinska",
    age: 15,
    height: 170,
    hobby: "programming",
    location:{
        country: "Ukraine",
        region: "Kropyvnytskyi",
    }


};
function hello (user) {
    const  {firstName, lastName, age, height, hobby, location: {country, region}} = user;
    console.log('message :>> ', `Вітаю ${firstName} ${lastName}, ваш вік ${age}, ваш ріст ${height}, ваше хоббі ${hobby}, ваша локація: ${country}, ${region}.`);
}

hello(user);