(function () {

    let currentUrl = window.location.href;
    console.log(currentUrl);


    let queryString = window.location.search;


    queryString = queryString.substring(1);


    let params = queryString.split('&');


    let paramsObj = {};


    params.forEach(param => {
        let parts = param.split('=');
        let key = decodeURIComponent(parts[0]);
        let value = decodeURIComponent(parts[1]);

        if (key === 'relationship_goal_id' || key === 'relationship_status_id') {
            paramsObj[key] = Number(value);
        } else {
            paramsObj[key] = value;
        }
    });



    console.log(typeof  paramsObj.relationship_goal_id);


    console.log(typeof paramsObj.relationship_goal_id);
    console.log(typeof paramsObj.relationship_status_id);

    async function validateAndSubmitForm() {


        try {
            if (Object.keys(paramsObj).length === 0) {
                console.error('No parameters found in URL.');
                return;
            }

            let response = await fetch('https://astroacademy1.com/create-client', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(paramsObj)
            });

            if (response.ok) {

                console.log('Form data submitted successfully.');


                let getResponse = await fetch('https://astroacademy1.com/create-checkout-session', {
                    method: 'GET'
                });

                if (getResponse.ok) {
                    let data = await getResponse.json();
                    console.log('Received data:', data);

                    if (data && data.url) {
                        window.location.href = data.url;
                    } else {
                        console.error('Redirect URL not found in the response.');
                    }
                } else {
                    console.error('Failed to retrieve the link. Status:', getResponse.status, getResponse.statusText);
                }
            } else {
                console.error('Failed to submit form data. Status:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('An error occurred while submitting form data:', error);
        }

    }

    const button1 = document.getElementById('button1')
    const button2 = document.getElementById('button2')
    const button3 = document.getElementById('button3')
    const button5 = document.getElementById('button5')

    button1.onclick = async () => { await validateAndSubmitForm(); };
    button1.ontouchstart = async () => { await validateAndSubmitForm(); };

    button2.onclick = async () => { await validateAndSubmitForm(); };
    button2.ontouchstart = async () => { await validateAndSubmitForm(); };

    button3.onclick = async () => { await validateAndSubmitForm(); };
    button3.ontouchstart = async () => { await validateAndSubmitForm(); };

    button5.onclick = async () => { await validateAndSubmitForm(); };
    button5.ontouchstart = async () => { await validateAndSubmitForm(); };


    function startCountdown(duration, display) {
        let timer = duration, minutes, seconds;
        const interval = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(interval);
            }
        }, 1000);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const display = document.querySelector('#countdown');
        const display2 = document.querySelector('#countdown2');
        const display3 = document.querySelector('#countdown3');
        const fifteenMinutes = 60 * 15; // 15 минут в секундах
        startCountdown(fifteenMinutes, display);
        startCountdown(fifteenMinutes, display2);
        startCountdown(fifteenMinutes, display3);
    });

    document.addEventListener('DOMContentLoaded', () => {
        // fetch('https://ipapi.co/json/')
        fetch('https://ipinfo.io/json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Информация о местоположении
                const country = data.country;
                setPriceBasedOnCountry(country);
            })
            .catch(error => {
                console.error('Error:', error);
                document.querySelectorAll('.old-price').forEach(el => {
                    el.innerText = `<del>$50</del>`;
                    el.classList.remove('loading');
                });
                // Убираем класс loading и добавляем класс error для всех элементов с классом .price
                document.querySelectorAll('.price').forEach(el => {
                    el.innerText = `<del>$9.9</del>`;
                    el.classList.remove('loading');
                    el.classList.add('error');
                });
            });
    });

    function setPriceBasedOnCountry(country) {
        const countryPrices = {
            "US": { old: 500, new: 99 },    // United States
            "CA": { old: 500, new: 99 },    // Canada
            "DE": { old: 500, new: 99 },    // Germany
            "GB": { old: 500, new: 99 },    // United Kingdom
            "FR": { old: 500, new: 99 },    // France
            "JP": { old: 500, new: 99 },    // Japan
            "AU": { old: 500, new: 99 },    // Australia
            "CH": { old: 500, new: 99 },    // Switzerland
            "NL": { old: 500, new: 99 },    // Netherlands
            "SE": { old: 500, new: 99 },    // Sweden
            "CN": { old: 298, new: 59 },    // China
            "KR": { old: 298, new: 59 },    // South Korea
            "SG": { old: 298, new: 59 },    // Singapore
            "ES": { old: 298, new: 59 },    // Spain
            "IT": { old: 298, new: 59 },    // Italy
            "AE": { old: 298, new: 59 },    // United Arab Emirates
            "SA": { old: 298, new: 59 },    // Saudi Arabia
            "IL": { old: 298, new: 59 },    // Israel
            "HK": { old: 298, new: 59 },    // Hong Kong
            "NZ": { old: 298, new: 59 },    // New Zealand
            "MX": { old: 96, new: 19 },     // Mexico
            "TR": { old: 96, new: 19 },     // Turkey
            "BR": { old: 96, new: 19 },     // Brazil
            "ZA": { old: 96, new: 19 },     // South Africa
            "MY": { old: 96, new: 19 },     // Malaysia
            "TH": { old: 96, new: 19 },     // Thailand
            "ID": { old: 96, new: 19 },     // Indonesia
            "PH": { old: 96, new: 19 },     // Philippines
            "PL": { old: 96, new: 19 },     // Poland
            "CL": { old: 96, new: 19 },     // Chile
            "IN": { old: 50, new: 9.9 },    // India
            "NG": { old: 50, new: 9.9 },    // Nigeria
            "PK": { old: 50, new: 9.9 },    // Pakistan
            "BD": { old: 50, new: 9.9 },    // Bangladesh
            "ET": { old: 50, new: 9.9 },    // Ethiopia
            "VN": { old: 50, new: 9.9 },    // Vietnam
            "UA": { old: 50, new: 9.9 },    // Ukraine
            "KE": { old: 50, new: 9.9 },    // Kenya
            "GH": { old: 50, new: 9.9 },    // Ghana
            "TZ": { old: 50, new: 9.9 },    // Tanzania
            // "KZ": { old: 100, new: 50 }     // Kazakhstan
        };

        const prices = countryPrices[country] || { old: "50", new: "9,9" };

        document.querySelectorAll('.old-price').forEach(el => {
            el.innerText = `$${prices.old}`;
            el.classList.remove('loading');
        });
        document.querySelectorAll('.price').forEach(el => {
            el.innerText = `$${prices.new}`;
            el.classList.remove('loading');
        });
    }
})()
