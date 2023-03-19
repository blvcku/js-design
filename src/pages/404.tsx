const NotFoundPage = () => {
    if (typeof window !== `undefined`) {
        window.location.href = `/`;
    }
    return null;
};

export default NotFoundPage;
