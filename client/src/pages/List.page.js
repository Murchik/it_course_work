import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useHttp } from '../hooks/http.hook'
import { Preloader } from '../components/Preloader'

export const List = () => {
    const [isValid, setIsValid] = useState(false)
    const [characters, setCharacters] = useState([])
    const { loading, request } = useHttp()

    const fetchCharacters = useCallback(async () => {
        try {
            const fetched = await request('/list', 'GET')
            setCharacters(fetched)
            setIsValid(true)
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
    }, [fetchCharacters])

    if (loading) {
        return (
            <Preloader />
        )
    } else if (!isValid) {
        fetchCharacters()
    } else {
        return (
            <div>
                <table>
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
                                                <button class="waves-effect waves-light btn"><i class="material-icons">edit</i> </button>
                                            </Link>
                                        </td>

                                        <td>
                                            <button
                                                class="waves-effect waves-light btn"
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
        )
    }
}
