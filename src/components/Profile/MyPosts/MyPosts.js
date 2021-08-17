import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={s.posts_settings}>
            <div className={s.title}>Мои публикации</div>
            <div className={s.create}>
                <div><button>Создать публикацию</button></div>  
                <textarea placeholder="Введите ваши мысли сюда!"/>
            </div>
            <div className={s.posts}>
                <Post message="Привет, как дела?" likes="30"/>
                <Post message="Ух ты! Здесь появились посты!" likes="15" avatar="https://i.pinimg.com/236x/0f/f9/12/0ff912f0e24585cace8ad32a3e27140b.jpg"/>
            </div>
        </div>
    )
}
export default MyPosts