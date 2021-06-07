import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useHttp } from '../hooks/http.hook'
import { Preloader } from '../components/Preloader'

export const List = () => {
    const { loading, request } = useHttp()

    const [isValid, setIsValid] = useState(false)
    const [sort, setSort] = useState({ by: '' })
    const [filter, setFilter] = useState('')
    const [characters, setCharacters] = useState([])

    const fetchCharacters = useCallback(async () => {
        try {
            const fetched = await request('/list', 'GET')
            setCharacters(fetched)
        } catch (error) { }
    }, [request])

    const sortHandler = (event) => {
        setSort({ ...sort, by: event.target.value })
        console.log('> [Sorting] by: ', sort.by)
        characters.sort((a, b) => {
            if (sort.by === 'name') {
                if (a.characterName > b.characterName) {
                    return 1
                }
                if (a.characterName < b.characterName) {
                    return -1
                }
                return 0
            } else if (sort.by === 'class') {
                if (a.characterClass > b.characterClass) {
                    return 1
                }
                if (a.characterClass < b.characterClass) {
                    return -1
                }
                return 0
            } else if (sort.by === 'eliteLevel') {
                if (a.characterEliteLevel > b.characterEliteLevel) {
                    return 1
                }
                if (a.characterEliteLevel < b.characterEliteLevel) {
                    return -1
                }
                return 0
            } if (sort.by === 'level') {
                if (a.characterLevel > b.characterLevel) {
                    return 1
                }
                if (a.characterLevel < b.characterLevel) {
                    return -1
                }
                return 0
            }
            return 0
        })
    }

    const filterHandler = useCallback(async (event) => {
        setFilter(event.target.value)
        console.log('> [Filtering] by: ', event.target.value)
        try {
            const fetched = await request(`/list/${event.target.value}`, 'GET')
            setCharacters(fetched)
            console.log('> [Receiving response] Body: ', fetched)
        } catch (error) { }
    }, [request])

    const deleteHandler = async (event) => {
        try {
            const characterId = event.target.value
            console.log('> [Sending request] Body: ', { characterId })
            const data = await request('/list', 'DELETE', { characterId })
            setIsValid(false)
            console.log('> [Receiving response] Body: ', data)
        } catch (e) { }
    }

    useEffect(() => {
        fetchCharacters()
        setIsValid(true)
    }, [isValid, fetchCharacters])

    if (loading) {
        return (
            <Preloader />
        )
    } else {
        return (
            <div class="row">

                <div class="col s9">
                    <table class="grey lighten-3">
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Имя</th>
                                <th>Класс</th>
                                <th>Текущий уровень элиты</th>
                                <th>Уровень</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                characters.map((character, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{character.characterName}</td>
                                            <td>{character.characterClass}</td>
                                            <td>{character.characterEliteLevel}</td>
                                            <td>{character.characterLevel}</td>

                                            <td>
                                                <Link to={{
                                                    pathname: '/edit',
                                                    aboutCharacter: {
                                                        characterName: character.characterName,
                                                        characterClass: character.characterClass,
                                                        characterEliteLevel: character.characterEliteLevel,
                                                        characterLevel: character.characterLevel
                                                    }
                                                }}>
                                                    <button class="waves-effect waves-light btn black-text amber accent-4">
                                                        <i class="material-icons">edit</i>
                                                    </button>
                                                </Link>
                                            </td>

                                            <td>
                                                <button
                                                    class="waves-effect waves-light btn black-text amber accent-4"
                                                    value={character._id}
                                                    onClick={deleteHandler}
                                                >
                                                    Удалить
                                            </button>
                                            </td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div class="col s3">
                    <select
                        class="browser-default"
                        type="text"
                        id="sort"
                        name="sort"
                        onClick={sortHandler}
                        onChange={sortHandler}
                    >
                        <option value="" disabled selected>Сортировать по ...</option>
                        <option value="name"      > Имя          </option>
                        <option value="class"     > Класс        </option>
                        <option value="eliteLevel"> Уровень элиты</option>
                        <option value="level"     > Уровень      </option>
                    </select>
                </div>
                <div class="col s3">
                    <select
                        class="browser-default"
                        type="text"
                        id="filter"
                        name="filter"
                        onChange={filterHandler}
                        defaultValue={filter}
                    >
                        <option value="" disabled>Фильтровать по классу</option>
                        <option value="">Без фильтра</option>
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
            </div>
        )
    }
}
