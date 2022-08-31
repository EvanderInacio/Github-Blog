import { PostListContainer, PostListItens } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import removeMarkdown from 'remove-markdown'
import Link from 'next/link'

interface PostListProps {
  posts: {
    title: string;
    number: number;
    created_at: string;
    body: string;
  }[]
}

export function PostList({ posts = [] }: PostListProps) {

  const formattedPosts = posts.map(({title, number, created_at, body}) => {
    return { 
      title, 
      number, 
      created_at: formatDistanceToNow(new Date(created_at), {addSuffix: true, locale: ptBR}), 
      body: removeMarkdown(body).split('.')[0]
    } 
})

  return (
    <PostListContainer 
     active={{
       "@md": "desktop",
      "@initial": "mobile",
     }}
    >
      {formattedPosts.map(post => (
        <Link 
          href={`/posts/${post.number}`}  
          key={post.number}
        >
         <PostListItens>
          <header>
            <h3>{post.title}</h3>

            <span>{post.created_at}</span>
          </header>

          <p>{post.body}</p>
        </PostListItens>
        </Link>
      ))}
    </PostListContainer>
  )
}
