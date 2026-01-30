import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title= await new Promise ((resolve)=>{
    setTimeout(()=>{
      resolve(`iPhone ${id}`);
    }, 100);
  })
  return {
    title: `Product ${title}`,
  };
};

async function page({ params }: Props) {
  const productId = (await params).productId;
  return <div>Description of the products {productId}</div>;
}

export default page;
