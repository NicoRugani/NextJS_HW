import Link from 'next/link'

export default function GitHubLinkPage() {
    return (
        <main>
            <h1> GitHub and final project topic</h1>
            <p>
            For my final project, my group and I are creating a website for users to discover new movies based on ones the've already seen and liked. The website will allow users to search for movies, view details aobuut them, and receive recommendations for similar movies. The website will be using the TMDB API to get the data and will be used using Next.js with a user auth syustem of some kind. 
            <Link href="https://github.com/NicoRugani/NextJS_HW">This Projects GitHub</Link>
            </p>
        </main>
    )
}