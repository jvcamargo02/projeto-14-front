import Header from "../utils/Header";
import Banner from "../utils/Banner";
import SignUpModal from "../utils/Modals/SignUpModal/SignUpModal";

export default function HomePage() {

    return (
        <>
            <Header />
            <Banner />
            <SignUpModal />
            <h1>Essa é a página principal</h1>
        </>
    );
}
