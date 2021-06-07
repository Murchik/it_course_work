import React from 'react'

import profile from '../images/profile.jpg'

export const MainPage = () => {
    return (
        <div class="row">
            <div class="col s6">
                <div class="card medium grey darken-4">
                    <div class="card-image">
                        <img alt="" src={profile}/>
                        <span class="card-title grey-text text-lighten-4">Об авторе</span>
                    </div>
                    <div class="card-content grey-text text-lighten-4">
                        <p>Студент группы М3О-324Б-18</p>
                        <p>Мурчиков Михаил Юрьевич</p>
                    </div>
                    <div class="card-action">
                        <div class="col s12 m6 l4">
                            <a href="https://vk.com/murchik42">
                                <button class="waves-effect waves-light btn black-text amber accent-4">ВКонтакте</button>
                            </a>
                        </div>
                        <div class="col s12 m6 l4">
                            <a href="https://github.com/Murchik">
                                <button class="waves-effect waves-light btn black-text amber accent-4">GitHub</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s6">
                <h3>О сайте</h3>
                <blockquote>
                    <p>Сайт база данных персонажей Arksite</p>
                    <p>Веб приложение arksite предназначено для удобного ведения учёта доступных персонажей из компьютерной игры Arknights, их уровня, класса и их удобного просмотра в виде сортируемого и фильтруемого списка.</p>
                </blockquote>
            </div>
        </div>

    )
}
