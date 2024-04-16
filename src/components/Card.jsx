import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiThumbsUp } from 'react-icons/fi'

function Card({ result }) {
    return (
        <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
            <Link href={`/movie/${result.id}`}>
                <Image src={`http://image.tmdb.org/t/p/original/${result.backdrop_path}`}
                    width={500}
                    height={300}
                    className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'>
                </Image>
                <div className='line-clamp-2 text-md'>{result.overview}</div>
                <h2 className='text-lg font-serif truncate'>{result.title}</h2>
                <p className='flex items-center gap-2 flex-wrap p-1' >
                    {result.release_date}
                    <FiThumbsUp className='hover:text-amber-500 ml-1 mt-1 mr-1 '/>
                    {result.vote_count}
                </p>
            </Link>
        </div>
    )
}

export default Card