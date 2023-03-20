import React from 'react'

const Modal = ([showModal, usersPosts]) => {
    return (
        <>
            {
                showModal &&
                <div className='modal'>
                    <h2><span>{usersPosts[0].user} kullanıcısının gönderileri</span></h2>
                    {usersPosts.map((post) => (
                        <div className='post' key={post.id}>
                            <h1>{post.title}</h1>
                            <h1>{post.text}</h1>
                        </div>
                    ))}
                    (

                    )
                </div>
            }

        </>
    )
}

export default Modal
