import React from 'react'

const Modal = ({ showModal, userPosts }) => {
    return (
        <>
            {
                showModal &&
                <div className="modal">
                    <h2>
                        <span>{userPosts[0].user}
                            Kullanıcısının gönderileri
                        </span></h2>
                    {userPosts.map((post) => (
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
    );
};

export default Modal;
