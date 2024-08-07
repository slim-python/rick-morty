import { formatAirDate } from "@/utils/utils";
import Link from "next/link";
import CharactersExpandable from "../CharactersExpandable/CharactersExpandable";

const EpisodeCard = ({
  episode,
  isFavorite,
  toggleFavorite,
}: {
  episode: any;
  isFavorite?: any;
  toggleFavorite?: any;
}) => {
  return (
    <div className="bg-pink-100 dark:bg-gray-600 p-4 ">
      <div className="w-full block md:flex justify-between">
        <h2 className="text-xl font-bold mb-2 text-gray-500 dark:text-gray-100 dark:te">
          {episode.name}
        </h2>

        <button
          onClick={() => toggleFavorite(episode.id)}
          className=" text-gray-800 text-xs  bg-gray-400 h-5 md:h-7 px-1  rounded-xl mb-2"
        >
          {isFavorite ? "Unfavorite" : "Favorite"}
        </button>
      </div>

      <p className="text-gray-600 dark:text-gray-200 text-xs md:text-balance">
        <b>Air Date:</b> {formatAirDate(episode.air_date)}
      </p>
      <p className="text-gray-600 dark:text-gray-300 text-xs md:text-balance">
        <b>Episode:</b> {episode.episode}
      </p>

      <p className="text-gray-600 dark:text-gray-300 font-bold mb-2 text-xs md:text-balance">
        Characters:
      </p>
      {/* {episode.characters.map((characterUrl: any) => (
          <li key={characterUrl} className="text-gray-600 text-xs">
            Characters: {characterUrl}
          </li>
        ))} */}
      <CharactersExpandable list={episode.characters} />
    </div>
  );
};

export default EpisodeCard;
