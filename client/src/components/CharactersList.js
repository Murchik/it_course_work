import React from 'react'

export const CharactersList = ({ characters }) => {
    return (
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
                                <td>{index}</td>
                                <td>{character.characterName}</td>
                                <td>{character.characterClass}</td>
                                <td>{character.characterEliteLevel}</td>
                                <td>{character.characterLevel}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}