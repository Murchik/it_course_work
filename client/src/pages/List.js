import React, { useCallback, useEffect, useState } from 'react'
import { CharactersList } from '../components/CharactersList'
import { useHttp } from '../hooks/http.hook'

export const List = () => {

    const [characters, setCharacters] = useState([])
    const { loading, request } = useHttp()

    const fetchCharacters = useCallback(async () => {
        try {
            const fetched = await request('/list', 'GET')
            setCharacters(fetched)
        } catch (error) { }
    }, [request])

    useEffect(() => {
        fetchCharacters()
    }, [fetchCharacters])

    return (
        <div>
            <CharactersList characters={characters} />
        </div>
    )
}
