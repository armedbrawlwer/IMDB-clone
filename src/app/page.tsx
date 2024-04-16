import Results from '@/components/Results'
const api = process.env.API_KEY

export default async function Home({ searchParams }: any) {
  const genre = searchParams.genre || 'fetchTrending '
  const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${api}&language=en-US&page=1`);

  const data = await res.json()
  if (!res.ok) {
    throw new Error('failed to fetch data')
  }
  const results = data.results
  console.log("new")
  console.log(results)
  return (
    <div>
      <Results results = {results}/>
    </div>
  )
}
