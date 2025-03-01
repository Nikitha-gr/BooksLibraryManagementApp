import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const user = useSelector((state)=> state.auth.user);
    const dispatch = useDispatch();

    return (
        <div className="home-cont">
            <h1 className="home-title">All Books</h1>
        </div>
    )
}

export default Home;