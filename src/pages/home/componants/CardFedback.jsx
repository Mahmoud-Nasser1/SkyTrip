import { Rating } from "@material-tailwind/react";

export function DefaultRating() {
  return <Rating value={4} />;
}

export function Card({ name, initials, feedback, image }) {
  return (
    <div
      className="bg-gray-50 rounded-3xl shadow-md p-6 w-80 hover:shadow-lg transition-all duration-300 flex-1  hover:shadow-gradient-violet/30 
  hover:scale-[1.01] hover:border-gradient-violet"
    >
      <div className="flex items-center gap-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gradient-violet to-gradient-peach flex items-center justify-center text-white text-lg">
            {initials}
          </div>
        )}

        <div>
          <h3 className="text-gray-900 ">{name}</h3>
          <DefaultRating />
        </div>
      </div>

      <p className="text-gray-600 mt-4 text-sm leading-relaxed">{feedback}</p>
    </div>
  );
}

export default Card;
