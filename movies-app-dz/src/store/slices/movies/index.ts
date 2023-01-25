import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: {
        movies: [
            {
                title: 'Avatar 2',
                rating: 5,
                genre: 'Fantastic',
                img: 'avatar.jpg'
            },
            {
                title: 'Skyscraper',
                rating: 4.5,
                genre: 'Superhero',
                img: 'skyscraper.jpg'
            },
            {
                title: 'Unbroken',
                rating: 5,
                genre: 'Military',
                img: 'unbroken.jpg'
            },
            {
                title: 'Warcraft',
                rating: 5,
                genre: 'Fantasy',
                img: 'warcraft.webp'
            },
        ],
        series: []
    }
}

const movies = createSlice({
    name: 'movies',
    initialState,
    reducers: {}
})

export default movies.reducer