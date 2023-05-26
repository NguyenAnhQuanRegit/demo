import { Typography } from "@mui/material"
import s from './Comment.module.css'

const Comment = () => {
    return (
        <section className={s.popup}>
            <Typography variant="h4" className={s.title}>
                HERE IS TITLE
            </Typography>
            <p className={s.content}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className={s.btn_group}>
                <button className={s.btn + " " + s.btn_default}>
                    Error
                </button>
                <button className={s.btn + " " + s.btn_primary}>
                    Success
                </button>
            </div>
        </section>
    )
}

export default Comment
