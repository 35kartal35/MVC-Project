import Modal from "../component/Modal/Modal";
import Header from "../component/Header";

const ListPostView = ({ blogData, showModal, showUserPost, userPosts }) => {
    return (
        <div>
            <Header />
            <div className="container">
                {
                    blogData.map((post) => (
                        <div className="post" key={post.id}>
                            <div className="post-info">
                                <h1>
                                    {post.title}
                                    {post.user}

                                </h1>
                            </div>
                            <p className="post-text">{post.text}</p>
                        </div>
                    ))
                }
            </div>
            <Modal showModal={showModal} userPosts={userPosts} />
        </div>
    );
};

export default ListPostView
