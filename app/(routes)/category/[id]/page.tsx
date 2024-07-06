import Category from "@/app/components/category";
import axios from "axios";
import { headers } from "next/headers";

const SubcategoryPage = async ({ params }: { params: { id: string } }) => {
  const headersList = headers();
  const host = headersList.get("host");
  const forwardedPath = headersList.get("x-forwarded-path") || "";
  const url = `${host}${forwardedPath}`;

  const res = await axios.post(
    "https://admin.ebitans.com/api/v1/getsubdomain/name",
    {
      name: url,
    }
  );

  const { design, category } = res?.data;

  return (
    <div>
      <Category design={design} id={params?.id} category={category} />
    </div>
  );
};

export default SubcategoryPage;
