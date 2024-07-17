"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState, Suspense, lazy } from "react";
import useTheme from "@/hooks/use-theme";

export interface UpdateData {
  product_id: string;
  store_id: number;
  slug: string;
}

type ParamsType = {
  productID: string;
  slug: string;
};

// Lazy load components
const componentsMap: any = {
  one: lazy(() => import("./(product-details)/one/one")),
  two: lazy(() => import("./(product-details)/two/two")),
  three: lazy(() => import("./(product-details)/three/three")),
  four: lazy(() => import("./(product-details)/four/four")),
  five: lazy(() => import("./(product-details)/five/five")),
  six: lazy(() => import("./(product-details)/six/six")),
  seven: lazy(() => import("./(product-details)/seven/seven")),
  eight: lazy(() => import("./(product-details)/eight/eight")),
  nine: lazy(() => import("./(product-details)/nine/nine")),
  ten: lazy(() => import("./(product-details)/ten/ten")),
  eleven: lazy(() => import("./(product-details)/eleven/eleven")),
  twelve: lazy(() => import("./(product-details)/twelve/twelve")),
  thirteen: lazy(() => import("./(product-details)/thirteen/thirteen")),
  fourteen: lazy(() => import("./(product-details)/fourteen/fourteen")),
  fifteen: lazy(() => import("./(product-details)/fifteen/fifteen")),
  sixteen: lazy(() => import("./(product-details)/sixteen/sixteen")),
  seventeen: lazy(() => import("./(product-details)/seventeen/seventeen")),
  eighteen: lazy(() => import("./(product-details)/eighteen/eighteen")),
  nineteen: lazy(() => import("./(product-details)/nineteen/nineteen")),
  twenty: lazy(() => import("./(product-details)/twenty/twenty")),
  twenty_one: lazy(() => import("./(product-details)/twenty-one/twenty-one")),
  twenty_two: lazy(() => import("./(product-details)/twenty-two/twentytwo")),
  twenty_three: lazy(
    () => import("./(product-details)/twenty-three/twentythree")
  ),
  twenty_four: lazy(
    () => import("./(product-details)/twenty-four/twenty-four")
  ),
  twenty_five: lazy(
    () => import("./(product-details)/twenty-five/twenty-five")
  ),
  twenty_six: lazy(() => import("./(product-details)/twenty-six/twenty-six")),
  twenty_seven: lazy(
    () => import("./(product-details)/twenty-seven/twenty-seven")
  ),
  twenty_eight: lazy(
    () => import("./(product-details)/twenty-eight/twenty-eight")
  ),
  twenty_nine: lazy(
    () => import("./(product-details)/twenty-nine/twenty-nine")
  ),
  thirty: lazy(() => import("./(product-details)/thirty/thirty")),
  thirty_three: lazy(
    () => import("./(product-details)/thirty-three/thirty-three")
  ),
  thirty_four: lazy(
    () => import("./(product-details)/thirty-four/thirty-four")
  ),
  thirty_five: lazy(
    () => import("./(product-details)/thirty-five/thirty-five")
  ),
  thirty_six: lazy(() => import("./(product-details)/thirty-six/thirty-six")),
  thirty_seven: lazy(
    () => import("./(product-details)/thirty-seven/thirty-seven")
  ),
  thirty_eight: lazy(
    () => import("./(product-details)/thirty-eight/thirty-eight")
  ),
  thirty_nine: lazy(
    () => import("./(product-details)/thirty-nine/thirty-nine")
  ),
  forty: lazy(() => import("./(product-details)/forty/forty")),
};

const ProductDetails = () => {
  const { productID: product_id, slug } = useParams<ParamsType>();
  const [updatedData, setUpdatedData] = useState<UpdateData>({
    product_id: "",
    store_id: 0,
    slug: "",
  });

  const { design, store_id } = useTheme();

  useEffect(() => {
    setUpdatedData({ product_id, store_id, slug });
  }, [product_id, store_id, slug]);

  const RenderComponent = componentsMap[design?.single_product_page] || null;

  return (
    <>
      {RenderComponent && (
        <RenderComponent
          updatedData={updatedData}
          data={{ product_id, slug }}
        />
      )}
    </>
  );
};

export default ProductDetails;
