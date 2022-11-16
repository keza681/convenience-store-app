import React from 'react'
import PictureForm from './PictureCard'

const SingleCard = (props) => {
    return (
        <div className='flex-picture grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-between'>
            {
                props.data.map((item, index) => (
                    <PictureForm key={index} item={item} />
                ))
            }
        </div>
    )
}

export default SingleCard
