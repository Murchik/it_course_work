import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'


export const AddCharacter = () => {
    const [character, setCharacter] = React.useState({
        class: "",
        archetype: ""
    });
    return (
        <div class="row">
            <div class="col s6 offset-s3">
                <div class="card grey darken-4">
                    <div class="card-content white-text">
                        <span class="card-title">Добавить персонажа</span>
                    </div>

                    <div class="card-content white-text">
                        <label>Имя</label>
                        <input
                            placeholder="Введите имя персонажа"
                            id="сharacterName"
                            type="text"
                        />
                    </div>

                    <div class="card-content white-text">
                        <label>Класс</label>
                        <select id="characterClass" class="browser-default">
                            <option value="" disabled selected>Выберете класс</option>
                            <option value="Sniper">Sniper</option>
                            <option value="Guard">Guard</option>
                            <option value="Defender">Defender</option>
                            <option value="Vanguard">Vanguard</option>
                            <option value="Caster">Caster</option>
                            <option value="Specialist">Specialist</option>
                            <option value="Supporter">Supporter</option>
                            <option value="Medic">Medic</option>
                        </select>
                    </div>

                    <div class="card-content white-text">
                        <label>Текущий уровень элиты</label>
                        <select id="characterEliteLevel" class="browser-default">
                            <option value="" disabled selected>Выберете уровень элиты</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>

                    <div class="card-content white-text">
                        <label>Уровень</label>
                        <input
                            class="white-text"
                            placeholder="Введите уровень"
                            id="сharacterlevel"
                            type="number"
                        />
                    </div>

                    <div class="card-action">
                        <NavLink to="#">Добавить</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
