import Header from "../../component/Header";

const AddPostView = ({ onInputChange, handleSubmit }) => (
    <>
        <Header addLink />
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>Kullanıcı Adı:</label>
                <input
                    onChange={(e) => onInputChange('user', e.target.value)}
                    type="text" placeholder="Kullanıcı Adı Giriniz" />
            </fieldset>
            <fieldset>
                <label>Başlık:</label>
                <input
                    onChange={(e) => onInputChange('title', e.target.value)}
                    type="text" placeholder="Kullanıcı Adı Giriniz" />
            </fieldset>
            <fieldset>
                <label>Mesajınız:</label>
                <textarea
                    onChange={(e) => onInputChange('text', e.target.value)}
                />
            </fieldset>
            <button type="submit">Gönder</button>
        </form>
    </>
);

export default AddPostView