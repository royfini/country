fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(json => {

        json.forEach(country => {

            let flagImg = document.createElement('img');

            flagImg.src = country.flags.png;
            body.appendChild(flagImg);

            let flagName = () =>{
                alert(country.name.common)
            }

            flagImg.addEventListener('click', flagName)

        });

    })

