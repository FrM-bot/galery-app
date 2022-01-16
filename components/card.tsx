import Image from 'next/image'
import { IImageResponseCard } from '../interface/Image'

export default function Card({ imgUrl, title, description }: IImageResponseCard) {
    return (
        <div className="rounded-3xl p-4 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer">
            <div className="rounded-lg overflow-hidden grid place-items-center h-auto">
                <img src={imgUrl}
                    width={240}
                    height={144}
                    alt={title}
                    className="hover:scale-125 transition-all duration-500"
                />
            </div>
            <p className="shadow-sm p-2 my-2 rounded-bl-xl rounded-tr-xl">{title}</p>
            {
                description.trim().length > 0 &&
                    <p className="shadow-sm p-2 my-2 rounded-bl-xl rounded-tr-xl">{description}</p>
            }
        </div>
    )
}