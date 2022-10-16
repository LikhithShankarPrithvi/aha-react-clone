import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from 'axios'

const Main = () => {
	const [movies, setMovies] = useState([])
	const movie = movies[Math.floor(Math.random() * movies.length)]
	useEffect(() => {
		axios.get(requests.requestPopular).then(response => {
			setMovies(response.data.results)
		})
	}, [])
	console.log(movie)
	return (
		<div className='m-2 before:w-full h-[600px] text-white shadow-2xl shadow-black'>
			<div className='w-full h-full'>
				<div className='w-full '></div>
				<img
					className='w-full h-full object-cover '
					src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
					alt={movie?.title}
				/>
				<div className='absolute w-full top-[40%] p-4 md:p-8'>
					<h1 className='text-3xl md:text-5xl font-bold drop-shadow-2xl shadow-black'>
						{movie?.title}
					</h1>
					<div className='my-4'>
						<button className='border bg-orange-600 text-white border-gray-300 py-2 px-5'>
							Play
						</button>
						<button className='border text-slate-500 border-gray-300 py-2 px-5 ml-4 bg-gray-300'>
							Watch Later
						</button>
					</div>
					{/* <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
						{truncateString(movie?.overview, 150)}
					</p> */}
				</div>
			</div>
		</div>
	)
}

export default Main
