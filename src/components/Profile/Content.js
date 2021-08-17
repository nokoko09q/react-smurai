import s from './Content.module.css'
import MyPosts from './MyPosts/MyPosts'

const Content = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg" className={s.large_img} />
            </div>
            <div className={s.info}>
                <img src="https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg" className={s.avatar} />
                Никита Покумин
            </div>
            <MyPosts/>
        </div>
    )
}
export default Content