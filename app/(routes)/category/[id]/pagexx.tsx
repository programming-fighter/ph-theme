export const dynamicParams = true;

const SubcategoryPage = async ({ params }: { params: { id: string } }) => {
  return <p>{params?.id}</p>;
};

export default SubcategoryPage;
