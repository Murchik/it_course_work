import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Preloader } from '../components/Preloader'
import { useHttp } from '../hooks/http.hook'

export const Edit = (props) => {
    const { loading, request } = useHttp()

    const {
        characterName,
        characterClass,
        characterEliteLevel,
        characterLevel
    } = props.location.aboutCharacter

    const [form, setForm] = useState(
        {
            characterName: characterName,
            characterClass: characterClass,
            characterEliteLevel: characterEliteLevel,
            characterLevel: characterLevel
        }
    )

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const editHandler = async () => {
        try {
            console.log('> [Sending request] Body: ', { ...form })
            const data = await request('/edit', 'PUT', { ...form })
            console.log('> [Receiving response] Body: ', data)
        } catch (e) { }
    }

    if (loading) {
        return (
            <Preloader />
        )
    } else
        return (
            <div class="row">
                <div class="col s6 offset-s3">
                    <div class="card grey darken-4">

                        <div class="card-content white-text">
                            <span class="card-title">Редактировать персонажа</span>
                        </div>

                        <div class="card-content white-text">
                            <label>Имя</label>
                            <input
                                disabled
                                class="white-text"
                                placeholder="Введите имя персонажа"
                                type="text"
                                id="characterName"
                                name="characterName"
                                onChange={changeHandler}
                                defaultValue={characterName}
                            />
                        </div>

                        <div class="card-content white-text">
                            <label>Класс</label>
                            <select
                                class="browser-default"
                                type="text"
                                id="characterClass"
                                name="characterClass"
                                onChange={changeHandler}
                                defaultValue={characterClass}
                            >
                                <option value="" disabled>Выберете класс</option>
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
                            <select
                                class="browser-default"
                                type="number"
                                id="characterEliteLevel"
                                name="characterEliteLevel"
                                onChange={changeHandler}
                                defaultValue={characterEliteLevel}
                            >
                                <option value="" disabled>Выберете уровень элиты</option>
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
                                type="number"
                                id="characterLevel"
                                name="characterLevel"
                                onChange={changeHandler}
                                defaultValue={characterLevel}
                            />
                        </div>

                        <div class="card-action">
                            <Link to="/list">
                                <button class="waves-effect waves-light btn"
                                    onClick={editHandler}
                                    disabled={loading}
                                >
                                    Сохранить
                        </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        )
}
