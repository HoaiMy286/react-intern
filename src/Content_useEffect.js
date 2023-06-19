import { useEffect, useState } from "react"

// 1. useEffect(callback)

// 1. Callback luon dc goi sau khi component mounted

const tabs = ['posts', 'comments', 'albums']

function Content () {
    // const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200)
                setShowGoToTop(true)
            else
                setShowGoToTop(false)
        }

        window.addEventListener('scroll', handleScroll)

    }, [])

    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    }: {}}
                    onClick={() => setType(tab)}
                    >
                        {tab}
                    </button>
            ))}

            {/* <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            /> */}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                >
                    Go to top
                </button>
            )
            }
        </div>
    )
}

export default Content