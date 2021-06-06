import React, { useCallback, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'

export const List = () => {

    const [characters, setCharacters] = useState([])
    const { loading, request } = useHttp()

    const [isValid, setIsValid] = useState(false)

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
    }, [])

    if (loading) {
        return <div>Loading...</div>
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
                                            <button
                                                class="waves-effect waves-light btn"
                                                value={character._id}
                                                onClick={deleteHandler}
                                            >Delete</button>
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
