import Header from "../../component/header";

const AddPostView = () => (
    <>
        <Header addLink />
        <form>
            <fieldset>
                <label>Kullanıcı Adı:</label>
                <label type="text" placeholder="Kullanıcı Adı Giriniz" />
            </fieldset>
            <fieldset>
                <label>Başlık:</label>
                <label type="text" placeholder="Kullanıcı Adı Giriniz" />
            </fieldset>
            <fieldset>
                <label>Kullanıcı Adı:</label>
                <textarea />
            </fieldset>
            <button>Gönder</button>
        </form>
    </>
);

export default AddPostView