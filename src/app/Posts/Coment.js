export function Comment (props){
    return (
        <div className="comment__box">
            <div className="comment__info">
                <div className="comment__name">{props.name}</div>
                <div className="comment__email">{props.email}</div>
            </div>
            <div className="comment__text">{props.text}</div>
        </div>
    )
}