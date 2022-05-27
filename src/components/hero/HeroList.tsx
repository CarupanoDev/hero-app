import { getHeroByPublisher } from "../../selectors/getHeroByPublisher"

// eslint-disable-next-line react/prop-types
export const HeroList = ({publisher}: any) => {

  const heroes = getHeroByPublisher(publisher)

  return(
    <>
      <h1>Hero List - {publisher}</h1>

      <ul>
        {
          heroes.map(hero => (
            <li key={hero.id}>{hero.superhero}</li>
          ))
        }
      </ul>

    </>
  )
}
