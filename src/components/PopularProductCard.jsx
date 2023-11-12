import { Rate } from "antd";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[282px] h-[282px]' />
      <div className='mt-8 flex justify-start gap-2.5'>
        <p className='flex gap-4 items-center font-montserrat text-xl leading-normal text-slate-gray'>
          <Rate 
            disabled
            allowHalf
            defaultValue={rating}
            style={{ color: "#FF6452" }}
          />
          {rating}
        </p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
