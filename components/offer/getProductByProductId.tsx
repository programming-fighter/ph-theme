import React from "react";
// import useTheme from '../../../hooks/useTheme';
// import Skeleton from '../../components/Skeleton';
import ProductCard from "./ProductCard";
// import useTheme from '../../../hooks/useTheme';

const GetProductByProductId = ({ offerProducts }: any) => {
  return (
    <div className="sm:shadow-lg py-5 pb-16 sm:my-10 sm:rounded-md ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {offerProducts !== undefined && (
          <>
            {offerProducts?.map((item, id) => (
              <>
                <ProductCard key={id} item={item} />
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default GetProductByProductId;
