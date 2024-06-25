import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

export default function CustomerReview({rating} : {rating : number}) {
    const reviewArr = [
        {
            name: "Kunanon",
            review: "The fruit is so fresh! I really love the texture and taste!",
            rating: 4,
            date: "May 10, 2024"
        },
        {
            name: "Pheranat",
            review: "I really love it! The texture, freshness, flavour and aroma. This is perfect!",
            rating: 5,
            date: "April 30, 2024"
        },
        {
            name: "Danaisate",
            review: "Mmmm... pretty good",
            rating: 4,
            date: "March 15, 2024"
        },

    ]

    return (
        <>
            <div className="flex justify-between text-coal mt-12 mb-4">
                <h2 className="text-xl">Customer review</h2>
                <div className="flex gap-x-2">
                    <FontAwesomeIcon className="relative top-[3px] text-leaf" icon={faStar}/>
                    <p className="text-leaf font-semibold">{rating} / 5</p>
                    <p className="opacity-70">(3 reviews)</p>
                </div>
            </div>
            <div className="space-y-4 text-coal">
                {
                    reviewArr.map((review, index) => 
                        <ReviewBlock key={index} name={review.name} review={review.review} rating={review.rating} date={review.date}/>
                    )
                }
            </div>
        </>
    )
}

function ReviewBlock({name, review, rating, date} : {name : string, review : string, rating : number, date: string}) {
    const ratingArr = [1,1,1,1,1]

    return (
      <div className="bg-white rounded-xl p-4">
        <div className="space-y-4">
          <h3 className="text-xl">{name}</h3>
          <p>{review}</p>
          <div className="flex justify-between">
            <p className="font-semibold opacity-70">{date}</p>
            <div>
                {
                    ratingArr.map((element, index) => {
                        if(index+1 > Math.floor(rating)) {
                            return <FontAwesomeIcon key={index} icon={faStar} className="text-coal opacity-30"/>
                        } else {
                            return <FontAwesomeIcon key={index} icon={faStar} className="text-coal opacity-80"/>
                        }
                    })
                }
            </div>
          </div>
        </div>
      </div>
    );
}