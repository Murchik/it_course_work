import React, { useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { Preloader } from '../components/Preloader'

export const Add = () => {

    const { loading, request } = useHttp()

    const [form, setForm] = useState(
        {
            characterName: '',
            characterClass: '',
            characterEliteLevel: 0,
            characterLevel: 0,
            characterWinrate: 0
        }
    )

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const addHandler = async () => {
        try {
            console.log('> [Sending request] Body: ', { ...form })
            const data = await request('/add', 'POST', { ...form })
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

                        <div class="card-content">
                            <span class="card-title grey-text text-lighten-4">Добавить персонажа</span>
                        </div>

                        <div class="card-content">
                            <label class="grey-text text-lighten-4">Имя</label>
                            <input
                                class="black-text grey lighten-3"
                                placeholder="Введите имя персонажа"
                                type="text"
                                id="characterName"
                                name="characterName"
                                onChange={changeHandler}
                            />
                        </div>

                        <div class="card-content">
                            <label class="grey-text text-lighten-4">Класс</label>
                            <select
                                class="browser-default black-text grey lighten-3"
                                type="text"
                                id="characterClass"
                                name="characterClass"
                                onChange={changeHandler}
                            >
                                <option value="" disabled selected>Выберите класс</option>
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

                        <div class="card-content">
                            <label class="grey-text text-lighten-4">Текущий уровень элиты</label>
                            <select
                                class="browser-default black-text grey lighten-3"
                                type="number"
                                id="characterEliteLevel"
                                name="characterEliteLevel"
                                onChange={changeHandler}
                            >
                                <option value="" disabled selected>Выберете уровень элиты</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>

                        <div class="card-content">
                            <label class="grey-text text-lighten-4">Уровень</label>
                            <input
                                class="black-text grey lighten-3"
                                placeholder="Введите уровень"
                                type="number"
                                id="characterLevel"
                                name="characterLevel"
                                onChange={changeHandler}
                            />
                        </div>

                        <div class="card-content">
                            <label class="grey-text text-lighten-4">Винрейт</label>
                            <input
                                class="black-text grey lighten-3"
                                placeholder="Введите винрейт"
                                type="number"
                                id="characterWinrate"
                                name="characterWinrate"
                                onChange={changeHandler}
                            />
                        </div>

                        <div class="card-action grey darken-4">
                            <button class="waves-effect waves-light btn black-text amber accent-4"
                                onClick={addHandler}
                                disabled={loading}
                            >
                                Добавить
                        </button>
                        </div>

                    </div>
                </div>
            </div>
        )
}
