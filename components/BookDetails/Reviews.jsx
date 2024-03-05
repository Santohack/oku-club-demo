import React from "react";
import ReviewCard from "./ReviewCard";

const reviewsData = [
  {
    userName: "uzzuverse",
    profileImg:
      "https://readng.ams3.cdn.digitaloceanspaces.com/avatars/2023/06/b70aa455513eb2788e7c0cb44c103146e25228a2.jpg",
    date: "04 Aug 2023",
    comment: `I came in with high expectations for Scythe and it did not disappoint at all. Scythe paints a distorted utopian landscape of a human society that has plateaued after reaching its "final" stage of technological advancement - immortality and societal equity - which now requires Scythes, or death bringers, to control population growth. Natural death is obsolete, while unnatural deaths at the hands of Scythes is the new normal. We follow Rowan and Citra through their apprenticeship journeys, where we learn about the different philosophies of their mentors and what they think is the purpose and morality of having/being sanctioned professional killers. Compassion and sadism lie on opposite ends of the philosophical spectrum, and we witness how a "highly moral" organization falls back into the same cycle of human nature and the supposedly eradicated vices of an evolved society. Holding onto one's individual morality and integrity becomes a challenge when faced by a persuasive cult of personality and its hedonistic narcissism. While Scythe focuses a lot on the politics of the Scythedom, it has made me question my outlook on life and the future ahead of us. It made me think, what is the true meaning and purpose of life if you could live forever in a perfect utopia? What would happen to us once we become stagnant and stationary in our ventures? I realized that the fragility of life actually brings sustenance and meaning to it. We do not want pain and suffering in our lives, yet the hope on the other side provides us something to look forward to and work towards. No, I am not trying to romanticize life's difficulties or societal inequities, and yes, I recognize my immense privilege that allows me to live comfortably and securely. But I now understand that the hope for better days, with the drive to progress and improve and change, motivates us in our lives and makes us cherish our lives a little more.`,
  },
  {
    userName: "2Ju",
    profileImg:
      "https://readng.ams3.cdn.digitaloceanspaces.com/avatars/2023/01/374e322690f7da25c4ab7b3161a56e058a551c90.jpg",
    date: "16 Feb 2023",
    comment: `Se lit très facilement, personnages attachants et histoire avec pile ce qu’il faut de rebondissements. Hâte de lire la suite`,
  },
  {
    userName: "Felicity",
    profileImg:
      "https://readng.ams3.cdn.digitaloceanspaces.com/avatars/2022/04/8c40fe6e376289e05ce2c78bf44336628a9a8600.jpg",
    date: "01 Jun 2022",
    comment: `(I read Volume 1, not the whole trilogy: couldn't find the standalone picture for Scythe on this app!) My teenage son recommended this book and I really enjoyed it. It's adventurous, but not as scary as it looks from the cover. Starts a little slowly, but really picks up after Chapter 17 when there's a bit of a twist. It explores some interesting ethical dilemmas about death. Shusterman also makes some interesting philosophical points about the nature of life in a society where life is (mostly) eternal. Speculative fiction; violent and sometimes a little gory, but not graphic. Suicidal references. `,
  },
];

const Reviews = () => {
  return (
    <div className="text-gray-300">
      <h2>Recent Reviews</h2>
      {reviewsData.map((review) => (
        <div className="flex py-4">
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            //   src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            src={review.profileImg}
            alt=""
          />

          <ReviewCard review={review} />
        </div>
      ))}
    </div>
  );
};

export default Reviews;
