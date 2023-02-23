import { useDispatch, useSelector } from 'react-redux'
import { rerender } from '../utils/postSlice'
import { deleteComment, updateComment } from '../utils/mainPostFuncs'

export default function Comment({ id, text, username }) {
    const { user } = useSelector(store => store.account)
    const dispatch = useDispatch()

    const handleEdit = () => {
        updateComment(id, { text: prompt('New text'), likes: [], dislikes: [] })
        dispatch(rerender())
    }

    const handleDelete = () => {
        dispatch(deleteComment(id))
        dispatch(rerender())
    }

    return (
        <li className='comment_item'>
            <div className='d-flex'>
                <p className='fw-bold pe-3'>{username}: </p>
                <p>{text}</p>
            </div>

            {username === user && (
                <div className='comment_item_edit'>
                    <button className='custom-button bg-warning' onClick={handleEdit}>
                        EDIT
                    </button>
                    <button className='custom-button bg-danger' onClick={handleDelete}>
                        DELETE
                    </button>
                </div>
            )}
        </li>
    )
}
