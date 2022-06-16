import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    return <ErrorPage code={500} message={"Bir hata ile karşılaştım lütfen Ana Sayfa'ya geri dönünüz"} />
}

export default UnkownPage;