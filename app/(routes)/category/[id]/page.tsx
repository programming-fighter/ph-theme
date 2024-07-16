import SubCategoryComponent from "@/app/components/category";
import { imgUrl } from "@/app/site-settings/siteUrl";
import getUrl from "@/utils/get-url";
import capitalizeFirstLetter from "@/helper/capitalize-first-letter";
import { fetchDomainData, getSubdomainName } from "@/lib";

// export async function generateMetadata() {
//   const url = getUrl();
//   const {
//     headersetting: { website_name, favicon },
//   } = await fetchDomainData(url);

//   const websiteName = capitalizeFirstLetter(website_name);
//   return {
//     title: `${websiteName} | Category`,
//     icons: { icon: imgUrl + favicon },
//   };
// }

const SubcategoryPage = async () => {
  return <SubCategoryComponent />;
};

export default SubcategoryPage;
