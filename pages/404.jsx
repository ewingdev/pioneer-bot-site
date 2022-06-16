import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Bir hata ile karşılaştım lütfen Ana Sayfaya geri dönünüz',
        'Lanet olsun! Bu çıkmaz yol.'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Sayfa Bulunamadı."} />
}

export default UnkownPage;

