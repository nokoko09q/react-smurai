import s from './Post.module.css'

const Post = (props) => {
    let avatar = props.avatar
    if(!avatar) avatar = "https://image.flaticon.com/icons/png/512/147/147144.png"
    return (
        <div className={s.item}>
            <img src={avatar} />
            {props.message}
            <div className={s.likes}>
                Лайки: {props.likes}
            </div>
        </div>
    )
}
export default Post