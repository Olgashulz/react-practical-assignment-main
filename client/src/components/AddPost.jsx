import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createPost} from '../utils/mainPostFuncs'
import {rerender} from '../utils/postSlice'
import '../css/Posts.css'

export default function AddPost({closeModal}) {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const {user} = useSelector(({account}) => account)

    const handleAddPost = () => {
        dispatch(createPost({title, username: user}))
        dispatch(rerender())
        closeModal(false)
    }

    return (
        <div className='posts_add-post'>
            <input
                className='post_input'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type='text'
                placeholder='Input Title'
            />
            <button className='custom-button' onClick={handleAddPost}>
                Add Post
            </button>
        </div>
    )
}
