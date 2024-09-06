document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".root").classList.remove("item-label");
    document.querySelector("#plan-2").style.margin = "0";
    document.querySelector("body > div.menu > button").style.display = "none";
    document.querySelector("#plan-2").style.transform = "scale(1)";
    document.querySelector("#plan-2").classList.remove("layer-centered");
    document.querySelector(".root").innerHTML = `
      <root>
        <aside>
        <h1>Dashboard</h1>
        <div class="options_aside_items">
            <button class="active">
                <svg width="25" height="25" viewBox="0 0 1024 1024">
                    <path fill="currentColor"
                        d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32z" />
                </svg><span>
                    Inicio
                </span>
            </button>
            <button>
                <svg width="25" height="25" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="1.5" color="currentColor">
                        <path
                            d="M12 22a5 5 0 0 0 3-9V5c0-.932 0-1.398-.152-1.766a2 2 0 0 0-1.082-1.082C13.4 2 12.932 2 12 2s-1.399 0-1.766.152a2 2 0 0 0-1.082 1.082C9 3.602 9 4.068 9 5v8a5 5 0 0 0 3 9" />
                        <path d="M12 15a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0V8" />
                    </g>
                </svg>
                <span>Temperatura</span>
            </button>
            <button>
                <svg width="25" height="25" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M16.543 13.525a15 15 0 0 0-1.22-2.49c-.242-.437-.253-.463-.409-.729a2.6 2.6 0 0 0-.276-.383c-.6-.782-1.167-.25-.8.493l.617 1.1a17 17 0 0 1 1.137 2.284a4.7 4.7 0 0 1 .174 1.989a2.94 2.94 0 0 1-.644 1.507a6 6 0 0 1-1.685 1.277c-1 .5-.366 1.233.338.93a8.1 8.1 0 0 0 2.167-1.651a5 5 0 0 0 .8-1.906a5.7 5.7 0 0 0-.199-2.421M13.01 3.292L12 2l-1.01 1.292C9.522 5.17 4.734 11.549 4.734 14.81a6.9 6.9 0 0 0 .53 2.711a6.8 6.8 0 0 0 1.277 2.049a7.22 7.22 0 0 0 4.67 2.388a6 6 0 0 0 .738.042h.071a7.3 7.3 0 0 0 5.467-2.451a7.18 7.18 0 0 0 1.779-4.731c0-3.269-4.788-9.648-6.256-11.526M16.521 18.7a6.02 6.02 0 0 1-4.5 2.013a5 5 0 0 1-.665-.033A5.97 5.97 0 0 1 7.5 18.718a5.5 5.5 0 0 1-1.044-1.671a5.7 5.7 0 0 1-.438-2.229C6.017 12.275 9.946 6.71 12 4.082c2.055 2.628 5.984 8.193 5.984 10.736a5.9 5.9 0 0 1-1.463 3.882" />
                </svg>
                <span>
                    Humedad
                </span>
            </button>
            <button>
                <svg width="25" height="25" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />
                </svg>
                <span>
                    Presencia
                </span>
            </button>
            <button>
                <svg width="25" height="25" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" d="M3 8h7a3 3 0 1 0-3-3M4 16h11a3 3 0 1 1-3 3M2 12h17a3 3 0 1 0-3-3" />
                </svg>
                <span>CO2</span>
            </button>
            <button>
                <svg width="25" height="25" viewBox="0 0 1024 1024">
                    <path fill="currentColor"
                        d="M595.344 64.72h.176zm0 0l-72.207 379.377l261.584.88L428.657 959.28l72.208-417.376l-261.568-.912zm.049-63.999c-1.728 0-3.455.063-5.151.19c-11.296.913-18.785 4.689-27.664 10.657a64.3 64.3 0 0 0-13.392 11.936a57 57 0 0 0-3.297 4.288L187.281 502.4c-14.16 19.408-16.24 45.025-5.36 66.433c10.864 21.408 32.832 34.976 56.912 35.152l184.736 1.344l-58.08 342.192c-5.52 29.408 10.16 58.72 37.76 70.528a64.2 64.2 0 0 0 25.391 5.216c20.112 0 36.64-9.408 49.041-26.4L836.737 482.56c14.16-19.409 16.225-45.057 5.36-66.433c-10.864-21.408-32.832-34.977-56.912-35.152l-184.736-.32l57.456-300.88a62.5 62.5 0 0 0 1.825-15.056c0-34.624-27.569-62.848-62.065-63.968c-.767-.032-1.52-.032-2.271-.032z" />
                </svg>
                <span>Energia</span>
            </button>
        </div>
    </aside>
    <main>
        <header>
            <div class="dateTimeHeader">
                <h1 class="month">Septiembre 2024 </h1>
                <p class="dayWeek">Martes, Septiembre 3 </p>
                <p class="timeToday">9:00am</p>
            </div>
            <div class="search_header_data">
                <input type="text" autocomplete="name" placeholder="Buscar">
            </div>
        </header>
        <div class="main_container_sections_byTopic">
            <section class="home_dashboard">
                <h1>Inicio</h1>
                <div class="main_cards_information">
                    <!-- temperatura -->
                    <div class="card">
                        <svg width="25" height="25" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" color="currentColor">
                                <path
                                    d="M12 22a5 5 0 0 0 3-9V5c0-.932 0-1.398-.152-1.766a2 2 0 0 0-1.082-1.082C13.4 2 12.932 2 12 2s-1.399 0-1.766.152a2 2 0 0 0-1.082 1.082C9 3.602 9 4.068 9 5v8a5 5 0 0 0 3 9" />
                                <path d="M12 15a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0V8" />
                            </g>
                        </svg>
                        <div class="data_sensor_card">
                            <h1 class="temp_average">28°C</h1>
                            <p>Temperatura</p>

                        </div>
                        <div class="comparation_with_lastValue">
                            +1°C
                        </div>
                    </div>

                    <!-- humedad -->
                    <div class="card">
                        <svg width="25" height="25" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M16.543 13.525a15 15 0 0 0-1.22-2.49c-.242-.437-.253-.463-.409-.729a2.6 2.6 0 0 0-.276-.383c-.6-.782-1.167-.25-.8.493l.617 1.1a17 17 0 0 1 1.137 2.284a4.7 4.7 0 0 1 .174 1.989a2.94 2.94 0 0 1-.644 1.507a6 6 0 0 1-1.685 1.277c-1 .5-.366 1.233.338.93a8.1 8.1 0 0 0 2.167-1.651a5 5 0 0 0 .8-1.906a5.7 5.7 0 0 0-.199-2.421M13.01 3.292L12 2l-1.01 1.292C9.522 5.17 4.734 11.549 4.734 14.81a6.9 6.9 0 0 0 .53 2.711a6.8 6.8 0 0 0 1.277 2.049a7.22 7.22 0 0 0 4.67 2.388a6 6 0 0 0 .738.042h.071a7.3 7.3 0 0 0 5.467-2.451a7.18 7.18 0 0 0 1.779-4.731c0-3.269-4.788-9.648-6.256-11.526M16.521 18.7a6.02 6.02 0 0 1-4.5 2.013a5 5 0 0 1-.665-.033A5.97 5.97 0 0 1 7.5 18.718a5.5 5.5 0 0 1-1.044-1.671a5.7 5.7 0 0 1-.438-2.229C6.017 12.275 9.946 6.71 12 4.082c2.055 2.628 5.984 8.193 5.984 10.736a5.9 5.9 0 0 1-1.463 3.882" />
                        </svg>
                        <div class="data_sensor_card">
                            <h1>76%</h1>
                            <p>Humedad</p>

                        </div>
                        <div class="comparation_with_lastValue">
                            -9%
                        </div>
                    </div>

                    <!-- Aire / CO2 -->
                    <div class="card">
                        <svg width="25" height="25" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="M3 8h7a3 3 0 1 0-3-3M4 16h11a3 3 0 1 1-3 3M2 12h17a3 3 0 1 0-3-3" />
                        </svg>
                        <div class="data_sensor_card">
                            <h1>76</h1>
                            <p>Aire</p>

                        </div>
                        <div class="comparation_with_lastValue">
                            -10 CO2e
                        </div>
                    </div>

                    <!-- Energia -->
                    <div class="card">
                        <svg width="25" height="25" viewBox="0 0 1024 1024">
                            <path fill="currentColor"
                                d="M595.344 64.72h.176zm0 0l-72.207 379.377l261.584.88L428.657 959.28l72.208-417.376l-261.568-.912zm.049-63.999c-1.728 0-3.455.063-5.151.19c-11.296.913-18.785 4.689-27.664 10.657a64.3 64.3 0 0 0-13.392 11.936a57 57 0 0 0-3.297 4.288L187.281 502.4c-14.16 19.408-16.24 45.025-5.36 66.433c10.864 21.408 32.832 34.976 56.912 35.152l184.736 1.344l-58.08 342.192c-5.52 29.408 10.16 58.72 37.76 70.528a64.2 64.2 0 0 0 25.391 5.216c20.112 0 36.64-9.408 49.041-26.4L836.737 482.56c14.16-19.409 16.225-45.057 5.36-66.433c-10.864-21.408-32.832-34.977-56.912-35.152l-184.736-.32l57.456-300.88a62.5 62.5 0 0 0 1.825-15.056c0-34.624-27.569-62.848-62.065-63.968c-.767-.032-1.52-.032-2.271-.032z" />
                        </svg>
                        <div class="data_sensor_card">
                            <h1>8 /Kwh</h1>
                            <p>Energia</p>

                        </div>
                        <div class="comparation_with_lastValue">
                            +1 /Kwh
                        </div>
                    </div>
                </div>
            </section>

            <section class="temperature_dashboard">
                <h1>Temperatura</h1>
                 <div class="temperature_card_container_top">
                    <div class="temperature_card temperature_max">
                        <svg width="25" height="25" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" color="currentColor">
                                <path
                                    d="M12 22a5 5 0 0 0 3-9V5c0-.932 0-1.398-.152-1.766a2 2 0 0 0-1.082-1.082C13.4 2 12.932 2 12 2s-1.399 0-1.766.152a2 2 0 0 0-1.082 1.082C9 3.602 9 4.068 9 5v8a5 5 0 0 0 3 9" />
                                <path d="M12 15a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0V8" />
                            </g>
                        </svg>
                        <div class="data_content_temp">
                            <h1 class="temp_max">38°C</h1>
                            <p>Temperatura Max</p>
                        </div>
                    </div>
                    <div class="temperature_card temperature_min">
                        <svg width="25" height="25" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" color="currentColor">
                                <path
                                    d="M12 22a5 5 0 0 0 3-9V5c0-.932 0-1.398-.152-1.766a2 2 0 0 0-1.082-1.082C13.4 2 12.932 2 12 2s-1.399 0-1.766.152a2 2 0 0 0-1.082 1.082C9 3.602 9 4.068 9 5v8a5 5 0 0 0 3 9" />
                                <path d="M12 15a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0V8" />
                            </g>
                        </svg>
                        <div class="data_content_temp">
                            <h1 class="temp_min">16°C</h1>
                            <p>Temperatura Min</p>
                        </div>
                    </div>
                </div>

                <div class="temperature_container_all_cards">
                   
                </div>
            </section>

            <section class="humidity_dashboard">
                <h1>Humedad</h1>
                <div class="all_humidity_cards_container">
                  
                </div>
            </section>

            <section class="presencie_dashboard">
                <h1>Presencia</h1>
                <div class="all_presencie_cards_container">
                  
                </div>
            </section>

            <section class="presencie_dashboard">
                <h1>CO2</h1>
                <div class="all_airs_cards_container">
                  
                </div>
            </section>
            
            
        </div>
    </main>
    <aside class="right-aside">
        <div class="dataBySensor">
            <h1>Data by Sensor</h1>
        </div>

        <div class="sensors_right_side">
            <!-- presencia c -->
            <div class="card_info_quantity_sensor">
                <div>
                    <p class="quantity_sensor">2</p>
                    <p class="sensor_name">Presencia C v2</p>
                </div>
                <svg 50 width="25" height="25" viewBox="0 0 48 48">
                    <g fill="none">
                        <path stroke="currentColor" stroke-linejoin="round" stroke-width="4"
                            d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z" />
                        <path fill="currentColor" fill-rule="evenodd" d="M24 11a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5"
                            clip-rule="evenodd" />
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                            d="M24.5 34V20h-2M21 34h7" />
                    </g>
                </svg>
            </div>

            <!-- mdt sensor -->
            <div class="card_info_quantity_sensor">
                <div>
                    <p class="quantity_sensor">6</p>
                    <p class="sensor_name">Sensor MDT</p>
                </div>
                <svg 50 width="25" height="25" viewBox="0 0 48 48">
                    <g fill="none">
                        <path stroke="currentColor" stroke-linejoin="round" stroke-width="4"
                            d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z" />
                        <path fill="currentColor" fill-rule="evenodd" d="M24 11a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5"
                            clip-rule="evenodd" />
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                            d="M24.5 34V20h-2M21 34h7" />
                    </g>
                </svg>
            </div>

            <!-- kesplus sensor -->
            <div class="card_info_quantity_sensor">
                <div>
                    <p class="quantity_sensor">4</p>
                    <p class="sensor_name">KESPLUS</p>
                </div>
                <svg 50 width="25" height="25" viewBox="0 0 48 48">
                    <g fill="none">
                        <path stroke="currentColor" stroke-linejoin="round" stroke-width="4"
                            d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z" />
                        <path fill="currentColor" fill-rule="evenodd" d="M24 11a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5"
                            clip-rule="evenodd" />
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                            d="M24.5 34V20h-2M21 34h7" />
                    </g>
                </svg>
            </div>
        </div>

        <div class="controls_access_preference">
            <h1>Atajos</h1>
            <div class="card_control">
                <p>Luces</p>
                <button class="on_off"><svg width="25" height="25" viewBox="0 0 16 16">
                        <path fill="currentColor"
                            d="M8 11a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8a4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                    </svg></button>


            </div>
            <div class="card_control">
                <p>Temperatura</p>
                <div class="control_inputpanel">
                    <button class="plus_button">+</button>
                    <input type="number">
                    <button class="minus_button">-</button>
                </div>
            </div>
            <div class="card_control">
                <p>Cortinas</p>
                <div class="control_inputpanel">
                    <button class="plus_button">+</button>
                    <input type="number">
                    <button class="minus_button">-</button>
                </div>

            </div>
            <div class="card_control">
                <p>Energia</p>
                <div class="control_energy">
                    <button>Full Mode</button>
                    <button>Save Energy</button>
                </div>

            </div>
        </div>
    </aside>
  </root>
    `
    //USER DATA
    //DATE
    const today = new Date()
    const month = new Intl.DateTimeFormat('es-Es', { month: 'long' }).format(today)
    const dayWeek = new Intl.DateTimeFormat('es-Es', { weekday: 'long' }).format(today)
    const time = new Intl.DateTimeFormat('es-ES', { hour: 'numeric', minute: 'numeric', hour12: true }).format(today)
    const seconds = today.getSeconds()

    document.querySelectorAll(".month").forEach((m) => m.textContent = `${month} ${today.getFullYear()}`)
    document.querySelector(".dayWeek").textContent = `${dayWeek}, ${month} ${today.getDate()}`
    document.querySelector(".timeToday").textContent = time

    setTimeout(() => {
        setInterval(() => {
            const today = new Date()
            const time = new Intl.DateTimeFormat('es-ES', { hour: 'numeric', minute: 'numeric', hour12: true }).format(today)
            document.querySelector(".timeToday").textContent = time
        }, 6000);
    }, 60 - seconds);

    //LOGIC MACHINE DATA
    const data = grp.all()

    const presenciaC = Object.values(data).slice(0, 8)
    const mdt = Object.values(data).slice(8, 38)
    const kesplus = Object.values(data).slice(38, 56)

    console.log(presenciaC, mdt, kesplus)

    const temperatures = []
    const humidities = []
    const presencies = []
    const airs = []
    const Energy = []

    const temp_addresses = [
        "0/0/5",
        "0/0/6",
        "0/2/0",
        "0/2/1",
        "0/2/2",
        "0/2/3",
        "0/2/4",
        "0/2/5"
    ];

    const hmd_addresses = [
        "0/2/6",
        "0/2/7",
        "0/2/8",
        "0/2/9",
        "0/2/10",
        "0/2/11",
    ];

    const prsnc_addresses = [
        "0/0/1",
        "0/0/2"
    ];

    const air_addresses = [
        "0/1/8",
        "0/1/9",
        "0/1/10",
        "0/1/11",
        "0/2/12",
        "0/2/13",
        "0/2/14",
        "0/2/15",
        "0/2/16",
        "0/2/17",
    ];

    const tempTargetContainer = document.querySelector(".temperature_container_all_cards")
    const humdTargetContainer = document.querySelector(".all_humidity_cards_container")
    const presencieTargetContainer = document.querySelector(".all_presencie_cards_container")
    const airsTargetContainer = document.querySelector(".all_airs_cards_container")


    temp_addresses.map((t => {
        grp.listen(t, function (object, state) {
            const position = temp_addresses.indexOf(t)
            temperatures[position] = object.value
            document.querySelector(".temp_average").textContent = `${(temperatures.reduce((average, current) => average + current, 0) / temperatures.length).toFixed(2)}°C`
            document.querySelector(".temp_max").textContent = `${Math.max(...temperatures)}°C`
            document.querySelector(".temp_min").textContent = `${Math.min(...temperatures)}°C`
            tempTargetContainer.innerHTML = temperatures.map((temp, index) => (
                `
                <div class="temperature_card">
                    <svg width="25" height="25" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5" color="currentColor">
                            <path
                                d="M12 22a5 5 0 0 0 3-9V5c0-.932 0-1.398-.152-1.766a2 2 0 0 0-1.082-1.082C13.4 2 12.932 2 12 2s-1.399 0-1.766.152a2 2 0 0 0-1.082 1.082C9 3.602 9 4.068 9 5v8a5 5 0 0 0 3 9" />
                            <path d="M12 15a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0V8" />
                        </g>
                    </svg>
                    <div class="data_content_temp">
                        <h1 class="temp_value">${temp}°C</h1>
                        <p class="temp_address">Sensor ${index + 1}</p>
                    </div>
                </div>
            `
            )).join("")
        })
    }))

    hmd_addresses.map((t => {
        grp.listen(t, function (object, state) {
            const position = hmd_addresses.indexOf(t)
            humidities[position] = object.value
            humdTargetContainer.innerHTML = humidities.map((humd, index) => (
                `
                 <div class="humidity_card">
                        <svg width="25" height="25" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M16.543 13.525a15 15 0 0 0-1.22-2.49c-.242-.437-.253-.463-.409-.729a2.6 2.6 0 0 0-.276-.383c-.6-.782-1.167-.25-.8.493l.617 1.1a17 17 0 0 1 1.137 2.284a4.7 4.7 0 0 1 .174 1.989a2.94 2.94 0 0 1-.644 1.507a6 6 0 0 1-1.685 1.277c-1 .5-.366 1.233.338.93a8.1 8.1 0 0 0 2.167-1.651a5 5 0 0 0 .8-1.906a5.7 5.7 0 0 0-.199-2.421M13.01 3.292L12 2l-1.01 1.292C9.522 5.17 4.734 11.549 4.734 14.81a6.9 6.9 0 0 0 .53 2.711a6.8 6.8 0 0 0 1.277 2.049a7.22 7.22 0 0 0 4.67 2.388a6 6 0 0 0 .738.042h.071a7.3 7.3 0 0 0 5.467-2.451a7.18 7.18 0 0 0 1.779-4.731c0-3.269-4.788-9.648-6.256-11.526M16.521 18.7a6.02 6.02 0 0 1-4.5 2.013a5 5 0 0 1-.665-.033A5.97 5.97 0 0 1 7.5 18.718a5.5 5.5 0 0 1-1.044-1.671a5.7 5.7 0 0 1-.438-2.229C6.017 12.275 9.946 6.71 12 4.082c2.055 2.628 5.984 8.193 5.984 10.736a5.9 5.9 0 0 1-1.463 3.882" />
                        </svg>
                        <div class="data_content_hmd">
                            <h1 class="hmd_value">${humd}%</h1>
                            <p class="hmd_address">Sensor ${index + 1}</p>
                        </div>
                    </div>
            `
            )).join("")
        })
    }))

    prsnc_addresses.map((t => {
        grp.listen(t, function (object, state) {
            const position = prsnc_addresses.indexOf(t)
            presencies[position] = object.value
            presencieTargetContainer.innerHTML = presencies.map((pre, index) => (
                `
                 <div class="humidity_card">
                       <svg width="25" height="25" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />
                </svg>
                        <div class="data_content_hmd">
                            ${pre == true ? `<h1 class="hmd_value">Activado</h1>` : `<h1 class="hmd_value">Apagado</h1>`}
                            <p class="hmd_address">Sensor ${index + 1}</p>
                        </div>
                    </div>
            `
            )).join("")
        })
    }))

    air_addresses.map((t => {
        grp.listen(t, function (object, state) {
            const position = air_addresses.indexOf(t)
            airs[position] = object.value
            airsTargetContainer.innerHTML = airs.map((co, index) => (
                `
                <div class="humidity_card">
                    <svg width="25" height="25" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" d="M3 8h7a3 3 0 1 0-3-3M4 16h11a3 3 0 1 1-3 3M2 12h17a3 3 0 1 0-3-3" />
                    </svg>
                        <div class="data_content_hmd">
                            <h1 class="hmd_value">${co} CO2e</h1>
                            <p class="hmd_address">Sensor ${index + 1}</p>
                        </div>
                </div>
            `
            )).join("")
        })
    }))


    Object.values(data).forEach((d) => {
        if (temp_addresses.includes(d.address)) {
            console.log("temperatura", d.address)
        } else if (hmd_addresses.includes(d.address)) {
            console.log("Humedad", d.address)
        } else if (air_addresses.includes(d.address)) {
            console.log("CO2", d.address)
        } else if (prsnc_addresses.includes(d.address)) {
            console.log("Presencia", d.address)
        }
    })


})


// HORARIOS
// http://192.168.0.105/scada-vis/schedulers

// TRENDS
// http://192.168.0.105/scada-vis/trends