import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
	const { user, logOut } = UserAuth()
	const navigate = useNavigate()

	const handleLogout = async () => {
		try {
			await logOut()
			navigate('/')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='flex items-center justify-between p-4 z-[100] w-full absolute bg-gradient-to-b from-black'>
			<Link to='/'>
				<div className='flex justify-center h-30 w-16 text-orange-600'>
					<div className='font-extrabold text-4xl pt-0.5'>a</div>
					<div className='flex-row justify-between'>
						<div className='text-2xl font-extrabold absolute ml-2 rotate-180'>
							^
						</div>
						<div className='font-extrabold text-4xl pt-2'>h</div>
					</div>
					<div className='font-extrabold text-4xl pt-0.5'>a</div>
				</div>
			</Link>
			{user?.email ? (
				<div>
					<Link to='/account'>
						<button className='text-white pr-4'>Account</button>
					</Link>
					<button
						onClick={handleLogout}
						className='bg-orange-600 px-6 py-2 rounded cursor-pointer text-white'
					>
						Logout
					</button>
				</div>
			) : (
				<div>
					<Link to='/login'>
						<button className='text-white pr-4'>Sign In</button>
					</Link>
					<Link to='/signup'>
						<button className='bg-orange-600 px-6 py-2 rounded cursor-pointer text-white'>
							Sign Up
						</button>
					</Link>
				</div>
			)}
		</div>
	)
}

export default Navbar
