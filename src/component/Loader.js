
const Loader = ({ size = 20, color = "#1a409a", children, loading }) => {
    return !loading ? children : (
        <div class="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh', width: '100%' }}>
            <div class="spinner-border" role="status" style={{ height: size, width: size, color }}>
            </div>
        </div>
    );
};

export default Loader;
