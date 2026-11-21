import Counters from './count/page'
import GitHubLink from './githublink/page'
import Store from './store/page'

export default function HomePage(){
    return (
        <main>
            <Counters />
            <GitHubLink />
            <Store />
        </main>
    )
}
